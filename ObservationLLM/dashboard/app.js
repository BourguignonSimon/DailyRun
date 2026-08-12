const state = {
  data: null,
  sources: [],
  filter: "Tous",
  query: "",
  hostingFilter: "Tous",
  hostingQuery: "",
  sourceFilter: "85+",
  sourceQuery: "",
  selectedHardware: 0
};

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

function renderHeader(data, status, sources) {
  byId("edition-date").textContent = formatDate(data.run.checkedAt);
  const entities = data.entities || data.actors || [];
  const verified = entities.filter((entity) => entity.status !== "non reverifié" && entity.status !== "source inaccessible").length;
  byId("metric-entities").textContent = entities.length;
  byId("metric-verified").textContent = entities.length ? `${Math.round((verified / entities.length) * 100)} %` : "—";
  byId("metric-regions").textContent = (data.localizations || []).length;
  byId("metric-sources").textContent = sources.filter((source) => source.confidence >= 85).length;
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
  const entities = data.entities || data.actors || [];
  const categories = ["Tous", ...new Set(entities.map((actor) => actor.category))];
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
  const entities = data.entities || data.actors || [];
  const query = state.query.trim().toLocaleLowerCase("fr");
  const actors = entities.filter((actor) => {
    const categoryMatch = state.filter === "Tous" || actor.category === state.filter;
    const queryMatch = !query || `${actor.name} ${actor.flagship} ${actor.category}`.toLocaleLowerCase("fr").includes(query);
    return categoryMatch && queryMatch;
  });
  byId("actor-empty").hidden = actors.length > 0;
  byId("actor-grid").replaceChildren(...actors.map((actor) => {
    const card = document.createElement("article");
    card.className = "actor-card";
    const status = actor.status || "vérifié";
    card.innerHTML = `<div class="actor-top"><span class="actor-initials">${initials(actor.name)}</span><span class="tag">${actor.category}</span></div><h3>${actor.name}</h3><p>${actor.flagship}</p><span class="availability">${actor.belgium}</span><small class="verification">${status} · ${actor.last_verified_at || formatDate(data.run.checkedAt)}</small>`;
    return card;
  }));
}

function renderHosting(data) {
  const rows = data.localizations || [];
  const channels = ["Tous", ...new Set(rows.map((row) => row.channel))];
  byId("hosting-filters").replaceChildren(...channels.map((channel) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${state.hostingFilter === channel ? " active" : ""}`;
    button.textContent = channel;
    button.setAttribute("aria-pressed", state.hostingFilter === channel);
    button.addEventListener("click", () => { state.hostingFilter = channel; renderHosting(data); });
    return button;
  }));
  const query = state.hostingQuery.trim().toLocaleLowerCase("fr");
  const filtered = rows.filter((row) => {
    const channelMatch = state.hostingFilter === "Tous" || row.channel === state.hostingFilter;
    const text = `${row.developer} ${row.model} ${row.distributor} ${row.region} ${row.belgium}`.toLocaleLowerCase("fr");
    return channelMatch && (!query || text.includes(query));
  });
  byId("hosting-empty").hidden = filtered.length > 0;
  byId("hosting-grid").replaceChildren(...filtered.map((row) => {
    const card = document.createElement("article");
    card.className = "hosting-card";
    card.innerHTML = `<div class="card-kicker"><span>${row.channel}</span><strong>${row.confidence}/100</strong></div><h3>${row.model}</h3><p class="provider-line">${row.developer} → ${row.distributor}</p><dl><div><dt>Région technique</dt><dd>${row.region}</dd></div><div><dt>Depuis la Belgique</dt><dd>${row.belgium}</dd></div><div><dt>Résidence</dt><dd>${row.residency}</dd></div></dl><small>Vérifié ${row.last_verified_at} · ${row.sourceId}</small>`;
    return card;
  }));
}

function renderSources(sources) {
  const levels = ["85+", "95+", "Toutes"];
  byId("source-filters").replaceChildren(...levels.map((level) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${state.sourceFilter === level ? " active" : ""}`;
    button.textContent = level === "Toutes" ? level : `Confiance ${level}`;
    button.setAttribute("aria-pressed", state.sourceFilter === level);
    button.addEventListener("click", () => { state.sourceFilter = level; renderSources(sources); });
    return button;
  }));
  const minimum = state.sourceFilter === "95+" ? 95 : state.sourceFilter === "85+" ? 85 : 0;
  const query = state.sourceQuery.trim().toLocaleLowerCase("fr");
  const filtered = sources.filter((source) => {
    const text = `${source.name} ${source.actor} ${source.baseUrl} ${source.topics.join(" ")}`.toLocaleLowerCase("fr");
    return source.confidence >= minimum && (!query || text.includes(query));
  });
  byId("source-empty").hidden = filtered.length > 0;
  byId("source-grid").replaceChildren(...filtered.map((source) => {
    const card = document.createElement("article");
    card.className = "source-card";
    card.innerHTML = `<div class="confidence-ring" style="--score:${source.confidence}"><strong>${source.confidence}</strong><span>/100</span></div><div><span class="tag">${source.primary ? "Primaire" : "Secondaire"}</span><h3><a href="${source.baseUrl}" target="_blank" rel="noreferrer">${source.name} ↗</a></h3><p>${source.topics.join(" · ")}</p><small>${source.rationale} · Vérifié ${source.last_verified_at}</small></div>`;
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
    if (state.data) renderHeader(state.data, status, state.sources);
  } catch (error) {
    console.warn(error.message);
  }
}

async function init() {
  try {
    const [data, status, registry] = await Promise.all([getJson("data/latest.json"), getJson("data/run-status.json"), getJson("data/source-registry.json")]);
    state.data = data;
    state.sources = registry.sources || [];
    renderHeader(data, status, state.sources);
    renderDecisions(data);
    renderFilters(data);
    renderActors(data);
    renderHosting(data);
    renderSources(state.sources);
    renderHardware(data);
    renderDocuments(data);
    byId("actor-search").addEventListener("input", (event) => { state.query = event.target.value; renderActors(data); });
    byId("hosting-search").addEventListener("input", (event) => { state.hostingQuery = event.target.value; renderHosting(data); });
    byId("source-search").addEventListener("input", (event) => { state.sourceQuery = event.target.value; renderSources(state.sources); });
    window.setInterval(refreshStatus, 30000);
  } catch (error) {
    byId("run-chip").querySelector("span:last-child").textContent = "Données indisponibles";
    byId("headline-change").textContent = "Impossible de charger le dernier run";
    byId("headline-detail").textContent = error.message;
  }
}

init();
