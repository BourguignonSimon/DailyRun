const state = { data: null, filter: "Tous", query: "", selectedHardware: 0 };

const byId = (id) => document.getElementById(id);

async function getJson(path) {
  const response = await fetch(`${path}?v=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Impossible de charger ${path}`);
  return response.json();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("fr-BE", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

function initials(name) {
  return name.split(/[\s/.-]+/).map((part) => part[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function renderHeader(data, status) {
  byId("edition-date").textContent = formatDate(data.run.checkedAt);
  byId("metric-actors").textContent = data.metrics.actorCount;
  byId("metric-vat").textContent = `${data.metrics.belgianVatPercent} %`;
  byId("metric-rate").textContent = `1 € = ${data.metrics.eurUsdRate} $`;
  byId("metric-rate-date").textContent = `BCE · ${formatDate(data.metrics.rateDate)}`;
  byId("metric-hardware").textContent = data.hardware.length;
  byId("headline-change").textContent = data.headline.title;
  byId("headline-detail").textContent = data.headline.detail;
  byId("footer-run").textContent = `Dernière publication : ${formatDate(data.run.checkedAt)} · ${data.run.commit.slice(0, 7)}`;

  const chip = byId("run-chip");
  chip.className = `run-chip ${status.status}`;
  chip.querySelector("span:last-child").textContent = status.status === "running"
    ? `Run en cours · ${status.phase || "mise à jour"}`
    : `Run validé · ${formatDate(status.completedAt || data.run.checkedAt)}`;
}

function renderDecisions(data) {
  byId("decision-grid").replaceChildren(...data.decisions.map((item, index) => {
    const card = document.createElement("article");
    card.className = "decision-card";
    card.innerHTML = `<span class="number">0${index + 1}</span><h3>${item.profile}</h3><strong>${item.primary}</strong><p>${item.why}</p>`;
    return card;
  }));
}

function renderFilters(data) {
  const categories = ["Tous", ...new Set(data.actors.map((actor) => actor.category))];
  byId("actor-filters").replaceChildren(...categories.map((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${state.filter === category ? " active" : ""}`;
    button.textContent = category;
    button.setAttribute("aria-pressed", state.filter === category);
    button.addEventListener("click", () => { state.filter = category; renderFilters(data); renderActors(data); });
    return button;
  }));
}

function renderActors(data) {
  const query = state.query.trim().toLocaleLowerCase("fr");
  const actors = data.actors.filter((actor) => {
    const categoryMatch = state.filter === "Tous" || actor.category === state.filter;
    const queryMatch = !query || `${actor.name} ${actor.flagship} ${actor.category}`.toLocaleLowerCase("fr").includes(query);
    return categoryMatch && queryMatch;
  });
  byId("actor-empty").hidden = actors.length > 0;
  byId("actor-grid").replaceChildren(...actors.map((actor) => {
    const card = document.createElement("article");
    card.className = "actor-card";
    card.innerHTML = `<div class="actor-top"><span class="actor-initials">${initials(actor.name)}</span><span class="tag">${actor.category}</span></div><h3>${actor.name}</h3><p>${actor.flagship}</p><span class="availability">${actor.belgium}</span>`;
    return card;
  }));
}

function renderHardware(data) {
  byId("hardware-picker").replaceChildren(...data.hardware.map((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `hardware-option${state.selectedHardware === index ? " active" : ""}`;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", state.selectedHardware === index);
    button.innerHTML = `<strong>${item.label}</strong><small>${item.kind}</small>`;
    button.addEventListener("click", () => { state.selectedHardware = index; renderHardware(data); });
    return button;
  }));

  const item = data.hardware[state.selectedHardware];
  byId("hardware-result").innerHTML = `<span class="result-label">PALIER RÉALISTE · ${item.tier}</span><h3>${item.primary}</h3><p class="tier">${item.summary}</p><div class="model-choice"><div><span>Recommandation principale</span><strong>${item.primary}</strong></div><div><span>Alternatives</span><strong>${item.alternatives.join(" · ")}</strong></div></div><p class="warning"><strong>À éviter :</strong> ${item.avoid}</p>`;
}

function renderChanges(data) {
  byId("change-list").replaceChildren(...data.changes.map((item, index) => {
    const row = document.createElement("article");
    row.className = "change-item";
    row.innerHTML = `<span class="change-index">${String(index + 1).padStart(2, "0")}</span><h3>${item.title}</h3><p>${item.detail}</p>`;
    return row;
  }));
}

function renderDocuments(data) {
  byId("document-grid").replaceChildren(...data.documents.map((doc) => {
    const link = document.createElement("a");
    link.className = "document-card";
    link.href = doc.url;
    link.innerHTML = `<span>${doc.kind}</span><strong>${doc.title} →</strong>`;
    return link;
  }));
  const synthesis = data.documents.find((doc) => doc.id === "synthesis");
  if (synthesis) byId("synthesis-link").href = synthesis.url;
}

async function refreshStatus() {
  try {
    const status = await getJson("data/run-status.json");
    if (state.data) renderHeader(state.data, status);
  } catch (error) {
    console.warn(error.message);
  }
}

async function init() {
  try {
    const [data, status] = await Promise.all([getJson("data/latest.json"), getJson("data/run-status.json")]);
    state.data = data;
    renderHeader(data, status);
    renderDecisions(data);
    renderFilters(data);
    renderActors(data);
    renderHardware(data);
    renderChanges(data);
    renderDocuments(data);
    byId("actor-search").addEventListener("input", (event) => { state.query = event.target.value; renderActors(data); });
    window.setInterval(refreshStatus, 30000);
  } catch (error) {
    byId("run-chip").querySelector("span:last-child").textContent = "Données indisponibles";
    byId("headline-change").textContent = "Impossible de charger le dernier run";
    byId("headline-detail").textContent = error.message;
  }
}

init();
