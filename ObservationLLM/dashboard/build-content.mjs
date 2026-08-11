import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dashboardDir = path.dirname(fileURLToPath(import.meta.url));
const observationDir = path.resolve(dashboardDir, "..");
const outputDir = path.resolve(process.argv[2] || path.join(observationDir, "dashboard-dist"));

const documents = [
  { source: "synthese.md", output: "synthese.html", title: "Synthèse décisionnelle", label: "Décision" },
  { source: "comparatif.md", output: "comparatif.html", title: "Comparatif structuré", label: "Comparaison" },
  { source: "analyse-detaillee.md", output: "analyse-detaillee.html", title: "Analyse détaillée", label: "Méthodologie" },
  { source: "bonnes-pratiques-developpement.md", output: "bonnes-pratiques-developpement.html", title: "Bonnes pratiques", label: "Production" },
  { source: "modeles-locaux-par-hardware.md", output: "modeles-locaux-par-hardware.html", title: "Modèles locaux", label: "Matériel" },
  { source: "sources.md", output: "sources.html", title: "Registre des sources", label: "Traçabilité" },
  { source: "historique.md", output: "historique.html", title: "Historique", label: "Évolution" }
];

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

function slugify(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section";
}

function rewriteHref(value) {
  const clean = value.trim();
  if (/^(https?:|mailto:|#)/i.test(clean)) return clean;
  if (clean === "README.md" || clean === "./README.md") return "index.html";
  return clean.replace(/\.md(?=($|#))/i, ".html");
}

function inline(text) {
  let rendered = escapeHtml(text);
  const code = [];
  rendered = rendered.replace(/`([^`]+)`/g, (_, value) => {
    code.push(`<code>${value}</code>`);
    return `%%CODE${code.length - 1}%%`;
  });
  rendered = rendered.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const target = rewriteHref(href);
    const external = /^https?:/i.test(target) ? ' target="_blank" rel="noreferrer"' : "";
    return `<a href="${escapeHtml(target)}"${external}>${label}</a>`;
  });
  rendered = rendered.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  rendered = rendered.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  rendered = rendered.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  rendered = rendered.replace(/%%CODE(\d+)%%/g, (_, index) => code[Number(index)]);
  return rendered;
}

function tableCells(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isTableSeparator(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }

    if (/^```/.test(line.trim())) {
      const language = line.trim().slice(3).trim();
      const code = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index].trim())) code.push(lines[index++]);
      index += 1;
      html.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ""}>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2].replace(/\s+#+$/, "");
      html.push(`<h${level} id="${slugify(title)}">${inline(title)}</h${level}>`);
      index += 1;
      continue;
    }

    if (index + 1 < lines.length && line.includes("|") && isTableSeparator(lines[index + 1])) {
      const headers = tableCells(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) rows.push(tableCells(lines[index++]));
      html.push(`<div class="table-scroll"><table><thead><tr>${headers.map((cell) => `<th>${inline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) quote.push(lines[index++].replace(/^>\s?/, ""));
      html.push(`<blockquote>${quote.map((item) => inline(item)).join("<br>")}</blockquote>`);
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*[-*+]\s+/.test(lines[index])) items.push(lines[index++].replace(/^\s*[-*+]\s+/, ""));
      html.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+[.)]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*\d+[.)]\s+/.test(lines[index])) items.push(lines[index++].replace(/^\s*\d+[.)]\s+/, ""));
      html.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ol>`);
      continue;
    }

    if (/^\s*(---+|___+|\*\*\*+)\s*$/.test(line)) {
      html.push("<hr>");
      index += 1;
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(#{1,6})\s+|^```|^>\s?|^\s*[-*+]\s+|^\s*\d+[.)]\s+/.test(lines[index]) && !(index + 1 < lines.length && lines[index].includes("|") && isTableSeparator(lines[index + 1]))) {
      paragraph.push(lines[index++].trim());
    }
    html.push(`<p>${inline(paragraph.join(" "))}</p>`);
  }
  return html.join("\n");
}

function pageTemplate(document, content) {
  const navigation = documents.map((item) => `<a href="${item.output}"${item.output === document.output ? ' aria-current="page"' : ""}>${item.title}</a>`).join("");
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${document.title} — Observatoire LLM et agents IA pour la Belgique.">
  <meta name="theme-color" content="#101512">
  <title>${document.title} — Observatoire LLM</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="article.css">
</head>
<body class="article-page">
  <a class="skip-link" href="#article-content">Aller au contenu</a>
  <header class="site-header">
    <a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">OL</span><span><strong>Observatoire LLM</strong><small>Perspective belge</small></span></a>
    <a class="back-dashboard" href="index.html">← Dashboard</a>
  </header>
  <nav class="document-nav" aria-label="Documents de l’observatoire">${navigation}</nav>
  <main class="article-shell">
    <aside class="article-rail"><span>${document.label}</span><strong>${document.title}</strong><p>Contenu issu du dernier run validé et publié automatiquement.</p><a href="#article-content">Commencer la lecture ↓</a></aside>
    <article class="markdown-body" id="article-content">${content}</article>
  </main>
  <footer><p>Analyse informative — ni conseil juridique ni benchmark universel.</p><a href="index.html">Retour au dashboard</a></footer>
</body>
</html>`;
}

fs.mkdirSync(outputDir, { recursive: true });
for (const file of ["index.html", "styles.css", "app.js", "article.css"]) {
  fs.copyFileSync(path.join(dashboardDir, file), path.join(outputDir, file));
}
fs.cpSync(path.join(dashboardDir, "data"), path.join(outputDir, "data"), { recursive: true });

for (const document of documents) {
  const markdown = fs.readFileSync(path.join(observationDir, document.source), "utf8");
  const content = renderMarkdown(markdown);
  fs.writeFileSync(path.join(outputDir, document.output), pageTemplate(document, content), "utf8");
}

const manifest = {
  generatedAt: new Date().toISOString(),
  pages: ["index.html", ...documents.map((document) => document.output)]
};
fs.writeFileSync(path.join(outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Dashboard généré : ${manifest.pages.length} pages dans ${outputDir}`);
