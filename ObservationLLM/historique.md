# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-06 — Deuxième édition (revue mensuelle)

**Verdict de cycle.** Changements **significatifs** depuis le 17 juillet 2026. Trois des quatre modèles de tête ont bougé et le jalon réglementaire majeur de l’AI Act est entré en application. Le classement des 20 écosystèmes est inchangé, mais de nombreuses fiches produit sont périmées.

**Avertissement méthodologique.** Contrairement à l’édition initiale (lectures directes), l’environnement a **bloqué l’ouverture directe des pages officielles** (HTTP 403 anti-bot / egress) sur presque tous les domaines. Seule la recherche web était disponible ; **seuls GitHub Copilot et Microsoft 365 Copilot (pricing) ont été lus directement sur page officielle**. Les autres valeurs proviennent de résultats de recherche indexant les pages officielles, corroborés par des trackers réputés. Les prix de ce cycle sont donc **indicatifs** et marqués « à confirmer » lorsque non recoupés. Voir l’avertissement détaillé dans [sources.md](sources.md).

**Changements de modèles (le plus important).**

- **OpenAI** : le modèle phare est **GPT-5.6 Sol** (famille Sol/Terra/Luna, GA 9 juil. 2026) et non plus GPT-5.5 — correction d’une fiche déjà périmée à la baseline. **Baisses de prix confirmées du 30 juil. 2026** : Terra −20 % (2/12 USD), Luna −80 % (0,20/1,20 USD) ; Sol inchangé (5/0,50/30 USD), contexte 1,05 M [S02, S66].
- **Anthropic** : **Claude Opus 5 lancé le 24 juil. 2026** (5 USD entrée / 0,50 cache / 25 sortie, contexte 1 M, sortie 128K), remplace Opus 4.8. **À surveiller** : fin du tarif introductif Sonnet 5 le 31 août 2026 → 3/15 USD au 1er sept. Fable 5 reste le haut de gamme (10/50 USD) [S67, S68].
- **Google** : **Gemini 3.6 Flash lancé le 21 juil. 2026** (1,50/0,15/7,50 USD, contexte 1 048 576) — sortie moins chère que 3.5 Flash (9 USD). Gemini 3.1 Pro reste le flagship ; **Gemini 3.5 Pro toujours non sorti** [S69].
- **Meta** : bascule stratégique vers **Muse Spark 1.1** (poids fermés, 1re API payante 1,25/0,15/4,25 USD) — **preview US uniquement, indisponible en UE**. Llama 4 reste **interdit aux domiciliés UE** [S70, S71].
- **DeepSeek** : génération **V4** (V4-Pro / V4-Flash, licence MIT, contexte 1 M) ; retrait des alias `deepseek-chat`/`deepseek-reasoner` le 24 juil. 2026 ; prix nettement plus bas [S75].
- **Alibaba/Qwen** : **Qwen3.8-Max** GA le 3 août 2026 (2/0,25/6 USD, contexte 1 M) ; **région Frankfurt (UE)** confirmée sur Model Studio — meilleur candidat des acteurs chinois pour une résidence UE directe [S76].
- **Moonshot/Kimi** : **K3 désormais entièrement documenté** (2,8 T params, 1 M contexte, 0,30/3/15 USD) ; poids ouverts publiés le 27 juil. 2026 sous **licence custom « Kimi K3 » (pas MIT)** [S77].
- **Z.AI/GLM** : **GLM-5.2** est le flagship API courant (16 juin 2026, MIT, contexte porté de 200k à 1 M) ; **fin de promo** du Coding Plan (Lite ≈18 / Pro ≈72 / Max ≈160 USD, nouveau palier Max) [S78].
- **xAI** : **statu quo technique** (Grok 4.5, pas de Grok 5) mais **incident Grok Build du 14 juil. 2026** (téléversement présumé de dépôts entiers) — point de vigilance données [S74].

**Entreprise / cloud.**

- **Microsoft** : **reset tarifaire M365 Copilot** — la référence « €15,60/utilisateur/mois » est **périmée** ; grille officielle en USD (Business add-on annuel 21 USD standard / 18 USD promo 1er juil.–30 sept. 2026), **prix EUR non publié**. GPT-5.6 en preview Foundry [S12, S79].
- **AWS** : durcissement **AgentCore en GA** (harness, Policy, intégration Guardrails) et **nouvelles régions Europe (Milan) et Europe (Espagne)** [S80].
- **IBM (Granite 4.1), Cohere (Command A+), NVIDIA (Nemotron 3 Ultra)** : **flagships inchangés** (antérieurs à la baseline). Seule évolution : **extensions de l’Agent Toolkit NVIDIA** (BioNeMo 23 juin, PhysicsNeMo + CUDA-X 26 juil. 2026) [S80–S83].

**Outils dev / hub.**

- **GitHub Copilot** : **aucun changement** (Pro 10 / Pro+ 39 / Max 100 USD, crédits IA identiques) — seule fiche entièrement vérifiée sur page officielle [S37].
- **Cursor** : ajout d’un **BAA (Enterprise uniquement)** ; data-use policy toujours datée du 15 juil. 2026 [S42, S85].
- **Replit** : ajustement d’affichage (Core 25 USD mensuel / 20 annuel, Pro 100 USD) — à confirmer [S44].
- **Perplexity** : **Sonar API en zero-data-retention** (à confirmer) et **Agentic Research API** [S84].
- **Hugging Face** : aucun changement de fond [S45–S47].

**Réglementation et macro (changement le plus conséquent, de nature juridique).**

- **AI Act — 2 août 2026** : entrée en application des **obligations de transparence (art. 50)** et des **pouvoirs d’exécution/sanction GPAI**. **Digital Omnibus** : report des obligations haut risque — **Annexe III au 2 décembre 2027**, **Annexe I au 2 août 2028** ; règlement de report en vigueur depuis le 27 juil. 2026 [S57, S62, S63].
- **RGPD** : pas de nouvel instrument contraignant en trois semaines ; ancrage EDPB Opinion 28/2024 ; Plan stratégique de l’APD belge 2026-2028 [S65].
- **Change** : 1 EUR = **1,1515 USD** (BCE 4 août 2026, vs 1,1405 le 14 juil.) — euro plus fort d’environ 1 %. EUR/CNY ≈ 7,78–7,79 (à confirmer) [S61].
- **TVA belge** : standard **maintenu à 21 %** [S64].

**Bonnes pratiques de développement (nouveautés / renforcements).**

- **[NOUVEAU]** *Context editing / compaction* : élaguer les résultats d’outils et blocs de raisonnement obsolètes plutôt que résumer.
- **[NOUVEAU]** **MCP** comme couche d’intégration par défaut, **mais** risque de sécurité sur la propagation de données inter-serveurs en configuration multi-MCP (cadre MCPHunt) — restreindre les permissions.
- **[RENFORCÉ]** *Prompt caching* comme premier levier coût/latence (économies annoncées jusqu’à ~90 %) ; figer les définitions d’outils avant le point de cache.
- **[RENFORCÉ]** Garde-fous multi-couches (avant entrée, avant exécution d’outil, après sortie) traités comme architecture de premier jour [S86, S87].

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md, historique.md.

**Limites / décisions humaines.** Les prix de ce cycle sont **indicatifs** (accès direct aux pages officielles bloqué). Avant tout achat ou usage de données personnelles/confidentielles : revérifier la grille officielle et les conditions UE (EUR/TVA/DPA/résidence). Choisir deux fournisseurs pour un pilote de quatre semaines, trois tâches réelles, une enveloppe de coût et un niveau de sensibilité des données.

## 2026-07-17 — Édition initiale

**Périmètre.** Création de l’observatoire avec exactement 20 écosystèmes: OpenAI, Anthropic, Google, Microsoft, AWS, Meta, Mistral, xAI, DeepSeek, Alibaba/Qwen, NVIDIA, Cohere, IBM, GitHub Copilot, Perplexity, Cursor, Replit, Hugging Face, Moonshot/Kimi et Z.AI/GLM. Aucune édition précédente n’existait dans ObservationLLM; donc aucune sortie.

**Modèles et capacités.** État initial établi autour de GPT-5.5, Claude Opus 4.8/Sonnet 5, Gemini 3.5 Flash, Grok 4.5, Mistral Medium 3.5/Large, Qwen 3.7, Nemotron 3, Command A+, Granite 4, Kimi K3/K2.7 et GLM-5.2. Distinction systématique entre modèle, application, API, assistant code et agent. Les fenêtres de contexte ne sont comparées qu’avec la version et la source.

**Prix.** Base de conversion fixée aux taux BCE du 14 juillet 2026: 1 EUR = 1,1405 USD = 7,7327 CNY. TVA belge standard 21 %. Prix API représentatifs documentés avec entrée, sortie, cache, batch/classes et outils lorsque publiés. Prix belges au checkout non stables marqués à confirmer.

**Changements récents significatifs.**

- GPT-5.5: 1,05 M de contexte, 5/0,50/30 USD par million entrée/cache/sortie; multiplicateur long contexte au-delà de 272 k [S01–S02].
- Anthropic: Opus 4.8 présent dans la grille datée du 27 mai 2026; Sonnet 5 bénéficie d’un prix de lancement sur certaines plateformes; batch -50 % [S06–S08].
- Gemini 3.5 Flash: 1,50/9 USD standard; batch/flex, priority et recherche tarifés [S09–S10].
- Grok 4.5: 500 k, grille court/long contexte et nouveaux tarifs média/voix [S22–S23].
- GitHub Copilot: plans Pro/Pro+/Max à crédits IA et facturation variable selon agent/modèle; Actions consommées par certaines revues depuis juin 2026 [S37–S38].
- Cursor: politique de données mise à jour le 15 juillet 2026, Privacy Mode et ZDR détaillés [S42].
- Kimi K3: annonce du 16 juillet 2026; capacités encore à confirmer indépendamment [S60].
- AI Act: transparence en août 2026; calendrier haut risque modifié en 2026 [S57–S59].

**Sécurité et disponibilité.** OpenAI API sans entraînement par défaut et options de résidence EEE pour services éligibles; Gemini API payante disponible en EEE et données payantes exclues de l’amélioration selon la grille; GitHub B/E sans entraînement; Cursor Privacy Mode sans entraînement [S03, S09–S11, S37, S42]. Pour DeepSeek, Qwen, Kimi et GLM, disponibilité belge, DPA, région, facture EUR/TVA et rétention restent à confirmer avant données sensibles.

**Développement.** Guide initial ajouté: modèles épinglés, schémas stricts, RAG avec ACL/citations, évaluations FR/NL, observabilité redacted, cache/batch, retries bornés, sandbox, budgets et validation humaine. Particularités des 20 acteurs documentées.

**Fichiers créés.** README.md, synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md et historique.md.

**Limites / décisions humaines.** Les checkouts belges et contrats entreprise n’ont pas été simulés. Choisir deux fournisseurs pour un pilote, trois tâches réelles, une enveloppe de coût et un niveau de sensibilité des données. Aucun fichier Word/Excel n’a été vérifié: le dépôt a migré ces livrables vers Markdown le 16 juillet 2026.
