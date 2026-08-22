const state = {
  data: null,
  sources: [],
  announcements: [],
  tools: [],
  cadence: null,
  recommendations: null,
  filter: "Tous",
  query: "",
  hostingFilter: "Tous",
  hostingQuery: "",
  sourceFilter: "Toutes",
  sourceQuery: "",
  announcementFilter: "Toutes",
  announcementLimit: 0,
  toolFilter: "Toutes",
  toolQuery: "",
  toolLimit: 0,
  recommendationFilter: "Tous",
  recommendationQuery: "",
  selectedHardware: 0
};

const byId = (id) => document.getElementById(id);
const exists = (id) => Boolean(byId(id));
const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

async function getJson(path) {
  const response = await fetch(`${path}?v=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Impossible de charger ${path}`);
  return response.json();
}

function formatDate(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("fr-BE", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(value));
}

function initials(name) {
  return String(name).split(/[\s/.-]+/).map((part) => part[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function makeFilterButton(label, active, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `filter-button${active ? " active" : ""}`;
  button.textContent = label;
  button.setAttribute("aria-pressed", String(active));
  button.addEventListener("click", onClick);
  return button;
}

function renderHeader(data, status, sources, announcements, tools) {
  if (exists("edition-date")) byId("edition-date").textContent = formatDate(data.run.checkedAt);
  const entities = data.entities || data.actors || [];
  const verified = Number.isFinite(data.metrics?.verifiedEntityCount)
    ? data.metrics.verifiedEntityCount
    : entities.filter((entity) => entity.status === "revérifié").length;
  const metrics = {
    "metric-entities": entities.length,
    "metric-verified": entities.length ? `${Math.round((verified / entities.length) * 100)} %` : "—",
    "metric-regions": (data.localizations || []).length,
    "metric-sources": sources.filter((source) => source.confidence >= 85).length,
    "metric-announcements": announcements.length,
    "metric-tools": tools.length,
    "metric-hardware": (data.hardware || []).length
  };
  Object.entries(metrics).forEach(([id, value]) => {
    if (exists(id)) byId(id).textContent = value;
  });
  if (exists("headline-change")) byId("headline-change").textContent = data.headline.title;
  if (exists("headline-detail")) byId("headline-detail").textContent = data.headline.detail;
  const commitLabel = data.run.commit ? ` · ${data.run.commit.slice(0, 7)}` : "";
  if (exists("footer-run")) byId("footer-run").textContent = `Dernière publication : ${formatDate(data.run.checkedAt)}${commitLabel}`;
  const chip = byId("run-chip");
  if (chip) {
    chip.className = `run-chip ${status.status || "completed"}`;
    const labels = {
      running: `Run en cours · ${status.phase || "mise à jour"}`,
      failed: `Run en échec · ${formatDate(status.failedAt || status.startedAt)}`,
      completed: `Run validé · ${formatDate(status.completedAt || data.run.checkedAt)}`
    };
    const label = chip.querySelector("span:last-child");
    if (label) label.textContent = labels[status.status] || labels.completed;
  }
  renderRunNotice(data.verificationNotice);
}

function renderRunNotice(notice) {
  const box = byId("run-notice");
  if (!box) return;
  if (!notice) {
    box.hidden = true;
    return;
  }
  box.hidden = false;
  box.className = `run-notice ${notice.level || "info"}`;
  if (exists("run-notice-title")) byId("run-notice-title").textContent = `${notice.title} · ${formatDate(notice.checkedAt)}`;
  if (exists("run-notice-detail")) byId("run-notice-detail").textContent = notice.detail;
  if (exists("run-notice-fix")) byId("run-notice-fix").textContent = notice.remediation || "";
}

function renderDecisions(data) {
  if (!exists("decision-grid")) return;
  byId("decision-grid").replaceChildren(...data.decisions.map((item, index) => {
    const card = document.createElement("article");
    card.className = "decision-card";
    card.innerHTML = `<span class="number">${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(item.profile)}</h3><strong>${escapeHtml(item.primary)}</strong><p>${escapeHtml(item.why)}</p>`;
    return card;
  }));
}

function recommendationCard(product, item) {
  const card = document.createElement("article");
  card.className = "model-recommendation";
  const statusClass = product.status === "vérifié" ? "verified" : product.status === "partiel" ? "partial" : "unconfirmed";
  card.innerHTML = `
    <div class="model-recommendation-top">
      <span class="tag">${escapeHtml(item.angle)}</span>
      <span class="confidence-badge ${statusClass}">${escapeHtml(product.status)} · ${escapeHtml(product.confidence)}/100</span>
    </div>
    <h3>${escapeHtml(product.name)}</h3>
    <p class="provider-line">${escapeHtml(product.provider)} · ${escapeHtml(product.type)}</p>
    <p>${escapeHtml(item.why)}</p>
    <dl>
      <div><dt>Accès</dt><dd>${escapeHtml(product.access)}</dd></div>
      <div><dt>Belgique</dt><dd>${escapeHtml(product.belgium)}</dd></div>
      <div><dt>Prix repère</dt><dd>${escapeHtml(product.price)}</dd></div>
      <div><dt>Modalités</dt><dd>${escapeHtml(product.modalities)}</dd></div>
      <div><dt>Langues</dt><dd>${escapeHtml(product.languages)}</dd></div>
      <div><dt>Localisation</dt><dd>${escapeHtml(product.residency)}</dd></div>
    </dl>
    <p class="recommendation-caveat"><strong>À vérifier :</strong> ${escapeHtml(item.caveat)}</p>
    <a href="${escapeHtml(product.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(product.sourceLabel)} ↗</a>`;
  return card;
}

function renderRecommendationPreview(recommendations) {
  if (!exists("recommendation-preview")) return;
  const products = recommendations.products || {};
  byId("recommendation-preview").replaceChildren(...recommendations.useCases.slice(0, 4).map((useCase) => {
    const first = useCase.recommendations[0];
    const product = products[first.productId];
    const card = document.createElement("article");
    card.className = "recommendation-preview-card";
    card.innerHTML = `<span>${escapeHtml(useCase.category)}</span><h3>${escapeHtml(useCase.title)}</h3><strong>${escapeHtml(product?.name || "À confirmer")}</strong><p>${escapeHtml(first.why)}</p>`;
    return card;
  }));
}

function renderRecommendations(recommendations) {
  if (!exists("use-case-grid")) return;
  const categories = ["Tous", ...new Set(recommendations.useCases.map((item) => item.category))];
  if (exists("recommendation-filters")) {
    byId("recommendation-filters").replaceChildren(...categories.map((category) =>
      makeFilterButton(category, state.recommendationFilter === category, () => {
        state.recommendationFilter = category;
        renderRecommendations(recommendations);
      })
    ));
  }
  const query = state.recommendationQuery.trim().toLocaleLowerCase("fr");
  const products = recommendations.products || {};
  const filtered = recommendations.useCases.filter((useCase) => {
    const categoryMatch = state.recommendationFilter === "Tous" || useCase.category === state.recommendationFilter;
    const haystack = [
      useCase.title,
      useCase.category,
      useCase.summary,
      ...useCase.recommendations.flatMap((rec) => {
        const product = products[rec.productId] || {};
        return [product.name, product.provider, product.type, rec.angle, rec.why];
      })
    ].join(" ").toLocaleLowerCase("fr");
    return categoryMatch && (!query || haystack.includes(query));
  });
  byId("use-case-grid").replaceChildren(...filtered.map((useCase) => {
    const section = document.createElement("article");
    section.className = "use-case-card";
    const heading = document.createElement("div");
    heading.className = "use-case-heading";
    heading.innerHTML = `<span class="eyebrow">${escapeHtml(useCase.category)}</span><h2>${escapeHtml(useCase.title)}</h2><p>${escapeHtml(useCase.summary)}</p>`;
    const grid = document.createElement("div");
    grid.className = "model-recommendation-grid";
    grid.replaceChildren(...useCase.recommendations.map((item) =>
      recommendationCard(products[item.productId], item)
    ));
    section.append(heading, grid);
    return section;
  }));
  if (exists("recommendation-empty")) byId("recommendation-empty").hidden = filtered.length > 0;
}

function renderCadence(cadence) {
  if (!cadence || !exists("cadence-grid")) return;
  const labels = { current: "À jour", due: "À exécuter", overdue: "En retard", running: "En cours", failed: "Échec", armed: "En veille" };
  const lanes = cadence.lanes || [];
  if (exists("cadence-summary")) {
    const weekly = lanes.filter((lane) => lane.cadence === "Chaque semaine").length;
    byId("cadence-summary").innerHTML = `<strong>${lanes.length} lignes coordonnées</strong><span>1 quotidienne · ${weekly} hebdomadaires · 1 événementielle · fuseau ${escapeHtml(cadence.timezone)}</span>`;
  }
  byId("cadence-grid").replaceChildren(...lanes.map((lane, index) => {
    const card = document.createElement("article");
    card.className = `cadence-card ${escapeHtml(lane.status)}`;
    const next = lane.nextDueOn ? formatDate(lane.nextDueOn) : lane.nextDueLabel;
    card.innerHTML = `<div class="cadence-card-top"><span class="cadence-number">${String(index + 1).padStart(2, "0")}</span><span class="cadence-status">${escapeHtml(labels[lane.status] || lane.status)}</span></div><span class="cadence-frequency">${escapeHtml(lane.cadence)}</span><h3>${escapeHtml(lane.label)}</h3><p>${escapeHtml(lane.scope.join(" · "))}</p><dl><div><dt>Déclenchement</dt><dd>${escapeHtml(lane.trigger)}</dd></div><div><dt>Dernière exécution</dt><dd>${formatDate(lane.lastCompletedOn)}</dd></div><div><dt>Prochaine échéance</dt><dd>${escapeHtml(next)}</dd></div></dl>`;
    return card;
  }));
}

function renderAnnouncements(announcements) {
  if (!exists("announcement-grid")) return;
  const categories = ["Toutes", ...new Set(announcements.map((item) => item.category))];
  if (exists("announcement-filters")) {
    byId("announcement-filters").replaceChildren(...categories.map((category) =>
      makeFilterButton(category, state.announcementFilter === category, () => {
        state.announcementFilter = category;
        state.announcementLimit = Number(byId("announcement-grid").dataset.limit || 0);
        renderAnnouncements(announcements);
      })
    ));
  }
  const filtered = announcements.filter((item) => state.announcementFilter === "Toutes" || item.category === state.announcementFilter);
  const defaultLimit = Number(byId("announcement-grid").dataset.limit || 0);
  if (!state.announcementLimit) state.announcementLimit = defaultLimit;
  const visible = state.announcementLimit ? filtered.slice(0, state.announcementLimit) : filtered;
  byId("announcement-grid").replaceChildren(...visible.map((item) => {
    const card = document.createElement("article");
    card.className = "announcement-card";
    if (document.body.dataset.page === "home") {
      const shortSummary = item.summary.length > 220 ? `${item.summary.slice(0, 217).trim()}…` : item.summary;
      card.classList.add("announcement-card-compact");
      card.innerHTML = `<div class="announcement-meta"><span class="tag">${escapeHtml(item.category)}</span><time datetime="${escapeHtml(item.publishedAt)}">${formatDate(item.publishedAt)}</time></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(shortSummary)}</p><div class="compact-confidence"><strong>${escapeHtml(item.confidence)}/100</strong><span>${escapeHtml(item.confidenceLabel)}</span></div>`;
      return card;
    }
    const evidence = item.evidence.map((source) => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)} ↗</a>`).join("");
    const signals = item.signals.map((source) => typeof source === "string"
      ? escapeHtml(source)
      : `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>`).join(" · ");
    card.innerHTML = `<div class="announcement-meta"><span class="tag">${escapeHtml(item.category)}</span><time datetime="${escapeHtml(item.publishedAt)}">${formatDate(item.publishedAt)}</time></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><div class="announcement-confidence"><div class="confidence-ring" style="--score:${Number(item.confidence)}"><strong>${escapeHtml(item.confidence)}</strong><span>/100</span></div><div><strong>Confiance ${escapeHtml(item.confidenceLabel.toLocaleLowerCase("fr"))}</strong><small>${escapeHtml(item.confidenceReason)}</small></div></div><div class="announcement-links">${evidence}</div><small class="signal-sources">Détection : ${signals}</small>${item.caveat ? `<p class="announcement-caveat"><strong>Réserve :</strong> ${escapeHtml(item.caveat)}</p>` : ""}`;
    return card;
  }));
  if (exists("announcement-empty")) byId("announcement-empty").hidden = filtered.length > 0;
  if (exists("announcement-more")) byId("announcement-more").hidden = visible.length >= filtered.length;
}

function renderTools(tools) {
  if (!exists("tool-grid")) return;
  const categories = ["Toutes", ...new Set(tools.map((tool) => tool.category))];
  if (exists("tool-filters")) {
    byId("tool-filters").replaceChildren(...categories.map((category) =>
      makeFilterButton(category, state.toolFilter === category, () => {
        state.toolFilter = category;
        state.toolLimit = Number(byId("tool-grid").dataset.limit || 0);
        renderTools(tools);
      })
    ));
  }
  const query = state.toolQuery.trim().toLocaleLowerCase("fr");
  const filtered = tools.filter((tool) => {
    const categoryMatch = state.toolFilter === "Toutes" || tool.category === state.toolFilter;
    const haystack = `${tool.name} ${tool.vendor} ${tool.productType} ${tool.focus}`.toLocaleLowerCase("fr");
    return categoryMatch && (!query || haystack.includes(query));
  });
  const defaultLimit = Number(byId("tool-grid").dataset.limit || 0);
  if (!state.toolLimit) state.toolLimit = defaultLimit;
  const visible = state.toolLimit ? filtered.slice(0, state.toolLimit) : filtered;
  byId("tool-grid").replaceChildren(...visible.map((tool) => {
    const card = document.createElement("article");
    card.className = "tool-card";
    const update = tool.latestAnnouncement
      ? `<div class="tool-update"><strong>Nouveauté qualifiée</strong><span>${escapeHtml(tool.latestAnnouncement.title)}</span><small>${escapeHtml(tool.latestAnnouncement.confidence)}/100 · ${escapeHtml(tool.latestAnnouncement.publishedAt)}</small></div>`
      : `<div class="tool-update pending"><strong>Veille unifiée</strong><span>Aucune annonce qualifiée attachée au catalogue courant.</span><small>${escapeHtml(tool.verificationStatus)}</small></div>`;
    card.innerHTML = `<div class="tool-rank"><span>#${String(tool.rank).padStart(3, "0")}</span><span class="tag">${escapeHtml(tool.productType)}</span></div><h3><a href="${escapeHtml(tool.officialUrl)}" target="_blank" rel="noreferrer">${escapeHtml(tool.name)} ↗</a></h3><p>${escapeHtml(tool.vendor)} · ${escapeHtml(tool.focus)}</p>${update}<small class="tool-region">${escapeHtml(tool.regionMode)}</small>`;
    return card;
  }));
  if (exists("tool-empty")) byId("tool-empty").hidden = filtered.length > 0;
  if (exists("tool-more")) byId("tool-more").hidden = visible.length >= filtered.length;
}

function renderActorFilters(data) {
  if (!exists("actor-filters")) return;
  const entities = data.entities || data.actors || [];
  const categories = ["Tous", ...new Set(entities.map((actor) => actor.category))];
  byId("actor-filters").replaceChildren(...categories.map((category) =>
    makeFilterButton(category, state.filter === category, () => {
      state.filter = category;
      renderActorFilters(data);
      renderActors(data);
    })
  ));
}

function renderActors(data) {
  if (!exists("actor-grid")) return;
  const query = state.query.trim().toLocaleLowerCase("fr");
  const entities = data.entities || data.actors || [];
  const filtered = entities.filter((actor) => {
    const categoryMatch = state.filter === "Tous" || actor.category === state.filter;
    return categoryMatch && (!query || `${actor.name} ${actor.flagship} ${actor.category}`.toLocaleLowerCase("fr").includes(query));
  });
  byId("actor-grid").replaceChildren(...filtered.map((actor) => {
    const card = document.createElement("article");
    card.className = "actor-card";
    card.innerHTML = `<div class="actor-top"><span class="actor-initials">${escapeHtml(initials(actor.name))}</span><span class="tag">${escapeHtml(actor.category)}</span></div><h3>${escapeHtml(actor.name)}</h3><p>${escapeHtml(actor.flagship)}</p><span class="availability">${escapeHtml(actor.belgium)}</span><small class="verification">${escapeHtml(actor.status || "vérifié")} · ${escapeHtml(actor.last_verified_at || formatDate(data.run.checkedAt))}</small>`;
    return card;
  }));
  if (exists("actor-empty")) byId("actor-empty").hidden = filtered.length > 0;
}

function renderHosting(data) {
  if (!exists("hosting-grid")) return;
  const rows = data.localizations || [];
  const channels = ["Tous", ...new Set(rows.map((row) => row.channel))];
  if (exists("hosting-filters")) {
    byId("hosting-filters").replaceChildren(...channels.map((channel) =>
      makeFilterButton(channel, state.hostingFilter === channel, () => {
        state.hostingFilter = channel;
        renderHosting(data);
      })
    ));
  }
  const query = state.hostingQuery.trim().toLocaleLowerCase("fr");
  const filtered = rows.filter((row) => {
    const channelMatch = state.hostingFilter === "Tous" || row.channel === state.hostingFilter;
    return channelMatch && (!query || `${row.developer} ${row.model} ${row.distributor} ${row.region} ${row.belgium}`.toLocaleLowerCase("fr").includes(query));
  });
  byId("hosting-grid").replaceChildren(...filtered.map((row) => {
    const card = document.createElement("article");
    card.className = "hosting-card";
    card.innerHTML = `<div class="card-kicker"><span>${escapeHtml(row.channel)}</span><strong>${escapeHtml(row.confidence)}/100</strong></div><h3>${escapeHtml(row.model)}</h3><p class="provider-line">${escapeHtml(row.developer)} → ${escapeHtml(row.distributor)}</p><dl><div><dt>Région technique</dt><dd>${escapeHtml(row.region)}</dd></div><div><dt>Accès européen · repère belge</dt><dd>${escapeHtml(row.belgium)}</dd></div><div><dt>Résidence</dt><dd>${escapeHtml(row.residency)}</dd></div></dl><small>Vérifié ${escapeHtml(row.last_verified_at)} · ${escapeHtml(row.sourceId)}</small>`;
    return card;
  }));
  if (exists("hosting-empty")) byId("hosting-empty").hidden = filtered.length > 0;
}

function renderSources(sources) {
  if (!exists("source-grid")) return;
  const levels = ["Toutes", "Dignes de confiance", "95+", "85+", "Flux X"];
  if (exists("source-filters")) {
    byId("source-filters").replaceChildren(...levels.map((level) =>
      makeFilterButton(level === "Toutes" || level === "Flux X" ? level : `Confiance ${level}`, state.sourceFilter === level, () => {
        state.sourceFilter = level;
        renderSources(sources);
      })
    ));
  }
  const minimum = state.sourceFilter === "95+" ? 95 : state.sourceFilter === "85+" ? 85 : 0;
  const query = state.sourceQuery.trim().toLocaleLowerCase("fr");
  const filtered = sources.filter((source) => {
    const haystack = `${source.name} ${source.actor} ${source.baseUrl} ${source.topics.join(" ")}`.toLocaleLowerCase("fr");
    return source.confidence >= minimum
      && (state.sourceFilter !== "Flux X" || source.kind === "Flux X officiel")
      && (state.sourceFilter !== "Dignes de confiance" || source.trustedDaily)
      && (!query || haystack.includes(query));
  });
  byId("source-grid").replaceChildren(...filtered.map((source) => {
    const card = document.createElement("article");
    card.className = "source-card";
    const kind = source.kind || (source.primary ? "Primaire" : "Secondaire");
    const trusted = source.trustedDaily ? '<span class="trust-badge">Source quotidienne de confiance</span>' : "";
    card.innerHTML = `<div class="confidence-ring" style="--score:${Number(source.confidence)}"><strong>${escapeHtml(source.confidence)}</strong><span>/100</span></div><div><div class="source-tags"><span class="tag">${escapeHtml(kind)}</span>${trusted}</div><h3><a href="${escapeHtml(source.baseUrl)}" target="_blank" rel="noreferrer">${escapeHtml(source.name)} ↗</a></h3><p>${escapeHtml(source.topics.join(" · "))}</p><small>${escapeHtml(source.rationale)} · ${escapeHtml(source.role || "Source de preuve")} · Vérifié ${escapeHtml(source.last_verified_at)}</small>${source.trustBasis ? `<small class="trust-basis">Promotion : ${escapeHtml(source.trustBasis)}</small>` : ""}</div>`;
    return card;
  }));
  if (exists("source-empty")) byId("source-empty").hidden = filtered.length > 0;
}

function renderHardware(data) {
  if (!exists("hardware-picker") || !data.hardware?.length) return;
  byId("hardware-picker").replaceChildren(...data.hardware.map((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `hardware-option${state.selectedHardware === index ? " active" : ""}`;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", String(state.selectedHardware === index));
    button.innerHTML = `<strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(item.kind)}</small>`;
    button.addEventListener("click", () => {
      state.selectedHardware = index;
      renderHardware(data);
    });
    return button;
  }));
  const item = data.hardware[state.selectedHardware];
  if (exists("hardware-result")) {
    byId("hardware-result").innerHTML = `<span class="result-label">PALIER RÉALISTE · ${escapeHtml(item.tier)}</span><h3>${escapeHtml(item.primary)}</h3><p class="tier">${escapeHtml(item.summary)}</p><div class="model-choice"><div><span>Recommandation principale</span><strong>${escapeHtml(item.primary)}</strong></div><div><span>Alternatives</span><strong>${escapeHtml(item.alternatives.join(" · "))}</strong></div></div><p class="warning"><strong>À éviter :</strong> ${escapeHtml(item.avoid)}</p>`;
  }
}

function renderDocuments(data) {
  if (!exists("document-grid")) return;
  byId("document-grid").replaceChildren(...data.documents.map((doc) => {
    const link = document.createElement("a");
    link.className = "document-card";
    link.href = doc.url;
    link.innerHTML = `<span>${escapeHtml(doc.kind)}</span><strong>${escapeHtml(doc.title)} →</strong>`;
    return link;
  }));
  const synthesis = data.documents.find((doc) => doc.id === "synthesis");
  if (synthesis && exists("synthesis-link")) byId("synthesis-link").href = synthesis.url;
}

function bindSearch(id, update) {
  if (exists(id)) byId(id).addEventListener("input", (event) => update(event.target.value));
}

async function refreshStatus() {
  try {
    const status = await getJson("data/run-status.json");
    if (state.data) renderHeader(state.data, status, state.sources, state.announcements, state.tools);
  } catch (error) {
    console.warn(error.message);
  }
}

async function init() {
  try {
    const [data, status, registry, announcementFeed, toolCatalog, cadence, recommendations] = await Promise.all([
      getJson("data/latest.json"),
      getJson("data/run-status.json"),
      getJson("data/source-registry.json"),
      getJson("data/announcements.json"),
      getJson("data/tools-catalog.json"),
      getJson("data/research-cadence.json"),
      getJson("data/use-case-recommendations.json")
    ]);
    state.data = data;
    state.sources = registry.sources || [];
    state.announcements = announcementFeed.announcements || [];
    state.tools = toolCatalog.tools || [];
    state.cadence = cadence;
    state.recommendations = recommendations;
    renderHeader(data, status, state.sources, state.announcements, state.tools);
    renderDecisions(data);
    renderRecommendationPreview(recommendations);
    renderRecommendations(recommendations);
    renderCadence(cadence);
    renderAnnouncements(state.announcements);
    renderTools(state.tools);
    renderActorFilters(data);
    renderActors(data);
    renderHosting(data);
    renderSources(state.sources);
    renderHardware(data);
    renderDocuments(data);
    bindSearch("actor-search", (value) => { state.query = value; renderActors(data); });
    bindSearch("hosting-search", (value) => { state.hostingQuery = value; renderHosting(data); });
    bindSearch("source-search", (value) => { state.sourceQuery = value; renderSources(state.sources); });
    bindSearch("tool-search", (value) => { state.toolQuery = value; state.toolLimit = Number(byId("tool-grid").dataset.limit || 0); renderTools(state.tools); });
    bindSearch("recommendation-search", (value) => { state.recommendationQuery = value; renderRecommendations(recommendations); });
    if (exists("announcement-more")) byId("announcement-more").addEventListener("click", () => { state.announcementLimit += 12; renderAnnouncements(state.announcements); });
    if (exists("tool-more")) byId("tool-more").addEventListener("click", () => { state.toolLimit += 24; renderTools(state.tools); });
    window.setInterval(refreshStatus, 30000);
  } catch (error) {
    const chipLabel = byId("run-chip")?.querySelector("span:last-child");
    if (chipLabel) chipLabel.textContent = "Données indisponibles";
    if (exists("headline-change")) byId("headline-change").textContent = "Impossible de charger le dernier run";
    if (exists("headline-detail")) byId("headline-detail").textContent = error.message;
    console.error(error);
  }
}

init();
