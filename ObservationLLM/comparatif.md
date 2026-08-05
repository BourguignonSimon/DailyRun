# Comparatif structuré — édition Belgique

Mise à jour: **5 août 2026**. Ce fichier est en Markdown depuis la migration du dépôt du 16 juillet 2026. Les « feuilles » sont les sections ci-dessous. Les références Sxx renvoient à [sources.md](sources.md). Cette édition succède à celle du 17 juillet 2026; les changements sont détaillés dans [historique.md](historique.md).

**Avertissement de fiabilité.** La politique réseau a bloqué l’accès direct à la plupart des pages officielles cette fois. Seules les grilles Anthropic (S07) et Google/Vertex (S09) ont été lues directement. Les autres prix proviennent de restitutions de recherche des pages officielles; les valeurs incertaines sont marquées **à confirmer**. Voir la note de méthode dans [sources.md](sources.md).

- [Vue d’ensemble](#vue-densemble)
- [Prix particuliers](#prix-particuliers)
- [Prix API](#prix-api)
- [Capacités](#capacités)
- [Sécurité-RGPD](#sécurité-rgpd)
- [Développement](#développement)
- [Méthodologie](#méthodologie)
- [Sources](#sources)

## Vue d’ensemble

| # | Entreprise / écosystème | Catégorie dominante | Offre phare vérifiée (2026-08-05) | Pertinence Belgique | Force principale | Limite principale | Sources |
|---:|---|---|---|---|---|---|---|
| 1 | OpenAI | Modèles + app + API + agent code | GPT-5.6 Sol/Terra/Luna, ChatGPT, Codex | Élevée | Écosystème complet et outils | Coût frontière et verrouillage | S01–S05 |
| 2 | Anthropic | Modèles + app + API + agent code | Opus 5, Sonnet 5, Fable 5, Claude Code | Élevée | Raisonnement, code, long contexte | Prix Opus/Fable; résidence payante | S06–S08 |
| 3 | Google | Modèles + app + API + cloud | Gemini 3.6 Flash, 3.1 Pro, Gemini API/Vertex | Élevée | Multimodal, 1 M, recherche | Complexité des surfaces et tarifs | S09–S11 |
| 4 | Microsoft | Cloud + productivité + agents | Azure/Foundry (GPT-5.6 EU Data Zone), M365 Copilot, Copilot Studio | Très élevée | Intégration M365/Azure, identité | Licences et coûts imbriqués | S12–S14 |
| 5 | AWS | Plateforme multi-modèles + agents | Bedrock (GPT-5.6 US), Agents, AgentCore | Très élevée | Choix de modèles et régions | GPT-5.6 hors UE; tarification composite | S15–S17 |
| 6 | Meta | Modèle propriétaire + open weight | **Muse Spark** (fermé); Llama 4 (open) | Faible/Moyenne | Muse Spark hébergé; Llama textuel | **Llama 4 multimodal exclu des licenciés UE** | S18, S61–S63 |
| 7 | Mistral | Modèles UE + app + API | Large 3 (Apache 2.0), Medium 3.5, Vibe | Très élevée | Acteur UE, SecNumCloud, open weight | Catalogue et licences variables | S19–S21 |
| 8 | xAI | Modèles + app + API | Grok 4.5, Grok 4.1 Fast | Élevée | Contexte, temps réel, outils | Gouvernance et rétention à valider | S22–S24 |
| 9 | DeepSeek | Modèles + app + API + poids | DeepSeek V4-Pro / V4-Flash | Moyenne | Rapport coût/capacité, 1 M | Données en Chine; direct hors RGPD | S25–S26, S64–S65 |
| 10 | Alibaba/Qwen | Modèles + cloud + poids | Qwen3.8-Max, Model Studio | Moyenne | Catalogue large, poids ouverts à venir | Facturation/région et support UE | S27–S28, S66 |
| 11 | NVIDIA | Modèles + déploiement + agents | Nemotron 3 (Ultra/Super/Nano Omni), NIM, NeMo | Élevée en entreprise | Exploitation, optimisation, garde-fous | Coût infra et complexité | S29–S31 |
| 12 | Cohere | Modèles entreprise + RAG | Command A / Command A+, North | Élevée en entreprise | RAG, multilingue, souveraineté | Peu d’offre grand public; prix A+ privé | S32–S34 |
| 13 | IBM | Plateforme + gouvernance + modèles | watsonx.ai, Granite 4 (signés), governance | Élevée en entreprise | Gouvernance et hybride | Coût plateforme; écosystème plus restreint | S35–S36 |
| 14 | GitHub Copilot | Assistant et agents de code | Copilot Pro/Pro+/Max (crédits + flex) | Très élevée | IDE + GitHub + choix de modèles | Crédits variables par tâche/modèle | S37–S38 |
| 15 | Perplexity | Recherche + API | Perplexity, Sonar, Agent API | Élevée | Recherche sourcée | Pas une plateforme générale complète | S39–S40 |
| 16 | Anysphere/Cursor | Éditeur et agents de code | Cursor (Auto, Composer 2.5, Grok 4.5) | Très élevée pour développeurs | UX agentique sur dépôt | Dépendance aux modèles tiers et crédits | S41–S43 |
| 17 | Replit | Création/déploiement agentique | Replit Agent (prix à l’effort) | Élevée pour prototypes | De l’idée au déploiement | Coût par crédits, contrôle infra | S44 |
| 18 | Hugging Face | Hub + inference open | Hub, Providers, Endpoints (eu-west-1) | Très élevée pour open source | Portabilité et catalogue, région UE | Qualité/sécurité dépend du modèle/provider | S45–S47 |
| 19 | Moonshot/Kimi | Modèles + app + agent code | **Kimi K3** (poids ouverts), Kimi Code | Moyenne | Open weight de tête, code, agents | Données en Chine; licence à paliers; DPA UE à confirmer | S48–S51, S60 |
| 20 | Z.AI/GLM | Modèles + API + agent code | GLM-5.2 (poids MIT), Coding Plan | Moyenne | Code agentique, prix, poids MIT | Français/NL, région UE et DPA à confirmer | S52–S54, S67 |

## Prix particuliers

Prix catalogue observés. Conversion: USD ÷ 1,1535; CNY ÷ 8,1478 (taux BCE, S55/S69). La colonne TVA est prudente: « checkout » signifie que l’inclusion doit être confirmée sur la facture belge.

| Offre | Prix origine | Estimation EUR HT | Estimation EUR avec 21 % si non incluse | TVA / remarque | Source |
|---|---:|---:|---:|---|---|
| GitHub Copilot Pro | 10 USD/mois | 8,67 € | 10,49 € | Checkout; crédits de base 10 $ (1:1) + flex | S37 |
| GitHub Copilot Pro+ | 39 USD/mois | 33,81 € | 40,91 € | Checkout; crédits de base 39 $ + flex | S37 |
| GitHub Copilot Max | 100 USD/mois | 86,70 € | 104,91 € | Checkout; crédits de base 100 $ + flex | S37 |
| Cursor Pro | 20 USD/mois | 17,34 € | 20,98 € | Checkout; ~20 $ d’usage inclus | S41 |
| Cursor Ultra | 200 USD/mois | 173,39 € | 209,80 € | Checkout; ~400 $ d’usage | S41 |
| Replit Core annuel | 20 USD/mois équivalent | 17,34 € | 20,98 € | 25 USD de crédits mensuels | S44 |
| Replit Pro annuel | 95 USD/mois équivalent | 82,36 € | 99,65 € | 100 USD de crédits | S44 |
| Perplexity Pro | 20 USD/mois | 17,34 € | 20,98 € | 4 000 crédits bonus; checkout | S39 |
| Perplexity Max | 200 USD/mois | 173,39 € | 209,80 € | 35 000 bonus + 10 000/mois | S39 |
| Mistral Le Chat Pro | 14,99 USD/mois | 13,00 € | 15,73 € | Checkout; entité UE, EUR possible | S19 |
| Hugging Face PRO | 9 USD/mois | 7,80 € | 9,44 € | 2 $ de crédits inference inclus | S46 |
| Z.AI Coding Lite annuel | 12,60 USD/mois | 10,92 € | 13,22 € | Promotion; checkout | S54 |
| Z.AI Coding Pro annuel | 50,40 USD/mois | 43,70 € | 52,87 € | Promotion; checkout | S54 |
| Z.AI Coding Max annuel | ~112 USD/mois | 97,10 € | 117,49 € | Nouveau palier visible; checkout | S54 |
| Microsoft 365 Copilot Business | 15,60 EUR/utilisateur/mois | 15,60 € | 18,88 € | Prix hors TVA; plan M365 requis | S12 |
| ChatGPT, Claude, Gemini, Grok | Voir checkout belge | ND | ND | Pages dynamiques sans prix EUR/TVA stable au contrôle | S04, S06, S10, S22 |

## Prix API

Prix par **1 million de jetons** sauf mention. HT et hors outils. Les prix EUR sont des estimations arrondies (÷1,1535 USD, ÷8,1478 CNY). « Modèle dépendant » évite de comparer un agrégateur/cloud à un modèle unique.

| Acteur / modèle représentatif | Contexte | Entrée origine | Cache origine | Sortie origine | Entrée EUR | Sortie EUR | Batch / classe | Outils / remarques | Source |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| OpenAI GPT-5.6 Sol (flagship) | 1,05 M | 5 USD | ~0,50 USD (à confirmer) | 30 USD | 4,33 € | 26,01 € | Batch/Flex -50 %; Priority ×2,5 | Multiplicateur long contexte >272 k à confirmer; Fast mode | S01–S02 |
| OpenAI GPT-5.6 Terra | à confirmer | 2 USD | à confirmer | 12 USD | 1,73 € | 10,40 € | -50 % batch | Baisse -20 % le 30 juil. 2026 | S05 |
| OpenAI GPT-5.6 Luna | à confirmer | 0,20 USD | à confirmer | 1,20 USD | 0,17 € | 1,04 € | -50 % batch | Baisse -80 % le 30 juil. 2026 | S05 |
| Anthropic Claude Opus 5 (flagship) | 1 M | 5 USD | lecture 0,50 USD; écriture 5m 6,25 / 1h 10 | 25 USD | 4,33 € | 21,67 € | Batch -50 % | Fast mode 10/50 $; `inference_geo:"us"` ×1,1 | S07 |
| Anthropic Claude Fable 5 | à confirmer | 10 USD | lecture 1 USD | 50 USD | 8,67 € | 43,35 € | Batch -50 % | Palier premium (Mythos 5 identique, dispo limitée) | S07 |
| Anthropic Claude Sonnet 5 (intro → 31 août) | à confirmer | 2 USD | 0,20 USD | 10 USD | 1,73 € | 8,67 € | Batch -50 % | **Passe à 3/15 $ le 1er sept. 2026** | S07 |
| Anthropic Claude Haiku 4.5 | à confirmer | 1 USD | 0,10 USD | 5 USD | 0,87 € | 4,33 € | Batch -50 % | Petit modèle rapide | S07 |
| Google Gemini 3.6 Flash | ~1 M (à confirmer) | 1,50 USD | 0,15 USD | 7,50 USD | 1,30 € | 6,50 € | Batch/Flex -50 % | Sortie moins chère que 3.5 Flash | S09 |
| Google Gemini 3.5 Flash | 1,05 M | 1,50 USD (global) | 0,15 USD | 9 USD | 1,30 € | 7,80 € | Batch/Flex -50 % | Non-global +10 % dès 1er juil.; long contexte à plat | S09 |
| Google Gemini 3.5 Flash-Lite | à confirmer | 0,30 USD | 0,03 USD | 2,50 USD | 0,26 € | 2,17 € | -50 % | Nouveau modèle économique | S09 |
| Google Gemini 3.1 Pro Preview | >200 k paliers | 2 / 4 USD | 0,20 / 0,40 USD | 12 / 18 USD | 1,73 / 3,47 € | 10,40 / 15,60 € | -50 % | Tarif par palier ≤/>200 k | S09 |
| xAI Grok 4.5 court | 500 k | 2 USD | 0,50 USD | 6 USD | 1,73 € | 5,20 € | Batch affichable | Long contexte 4/12 USD (seuil ~200 k à confirmer) | S22 |
| Mistral Large 3 (open, Apache 2.0) | 256 k | 0,50 USD | ND | 1,50 USD | 0,43 € | 1,30 € | Batch -50 % | Baisse marquée vs baseline (était 2/6) | S19–S20 |
| Mistral Medium 3.5 (agents/code) | 128 k (à confirmer) | 1,50 USD | ND | 7,50 USD | 1,30 € | 6,50 € | Batch -50 % | Orienté agents/développement | S19–S20 |
| Meta Muse Spark 1.1 API | à confirmer | 1,25 USD | ND | 4,25 USD | 1,08 € | 3,68 € | ND | OpenAI-compatible; hébergé US | S62 |
| DeepSeek V4-Pro | 1 M (sortie ≤384 k) | 0,435 USD miss | 0,003625 USD hit | 0,87 USD | 0,38 € | 0,75 € | À confirmer | Cache disque automatique; données en Chine | S25, S65 |
| DeepSeek V4-Flash | 1 M | 0,14 USD miss | 0,0028 USD hit | 0,28 USD | 0,12 € | 0,24 € | À confirmer | Beta publique 31 juil.; V3.2 retiré 24 juil. | S25 |
| Alibaba Qwen3.8-Max | 1 M | 2 USD | 0,25 USD | 6 USD | 1,73 € | 5,20 € | Promotions variables | Remplace 3.7 Max; poids ouverts ~10 août (à confirmer) | S27, S66 |
| Cohere Command A | 256 k | 2,50 USD | ND | 10 USD | 2,17 € | 8,67 € | ND | Command A+ (MoE) sans prix par jeton public | S32–S34 |
| IBM Granite 4 H small | 128 k | 0,06 USD | ND | 0,25 USD | 0,05 € | 0,22 € | ND | Prix indicatifs; modèles signés | S35 |
| Moonshot Kimi K3 | 1 M | 3 USD | lecture 0,30 USD; écriture 15 | 15 USD | 2,60 € | 13,00 € | À confirmer | Poids ouverts 27 juil.; AAII 57 (1er open weight) | S51, S60 |
| Z.AI GLM-5.2 | 1 M (à confirmer) / 200 k | 1,40 USD | 0,26 USD | 4,40 USD | 1,21 € | 3,81 € | ND | Poids MIT; web search 0,01 USD/usage | S52–S53 |
| AWS Bedrock | Modèle dépendant | Modèle/région | Modèle/région | Modèle/région | — | — | Batch -50 %; Flex/Priority/Reserved | GPT-5.6 US-only à ce jour; RAG/guardrails/agents en sus | S15–S17 |
| Microsoft Azure/Foundry | Modèle/région/déploiement | Modèle | Modèle | Modèle | — | — | Standard/provisionné | GPT-5.6 en EU Data Zone Standard (à confirmer date) | S13 |
| NVIDIA Nemotron/NIM | Auto-hébergé/licence/cloud | Coût infra/licence | — | Coût infra/licence | — | — | Selon déploiement | Super 120B/12B, Nano Omni 30B/3B; NIM, NeMo | S29–S31 |
| Hugging Face Providers | Provider choisi | Sans majoration HF | Provider | Provider | — | — | PAYG | Endpoints eu-west-1 ~0,032 $/cœur-h, ~0,50 $/GPU-h | S45–S47 |
| GitHub Copilot / Cursor / Replit | Abonnement/crédits | Non comparable par jeton | — | — | — | — | Crédits/usage | Mesurer coût par tâche | S37–S44 |
| Perplexity Sonar/Agent API | Modèle et recherche | Voir grille dynamique | Selon modèle | Voir grille | — | — | Provider/modèle | Frais de recherche par requête; ZDR API | S39–S40 |

## Capacités

Légende: **Oui** publié; **Partiel** dépend du modèle/produit; **ND** non publié assez précisément. La « mémoire » concerne l’application ou l’agent, pas le modèle brut.

| Acteur | Modalités | Outils / structuré | Web | Mémoire/RAG | Agents/orchestration | SDK | Open weight / privé | Contexte phare |
|---|---|---|---|---|---|---|---|---:|
| OpenAI | texte, image; audio/vidéo autres modèles | Oui; Programmatic Tool Calling | Oui | File search; mémoire app | Agents SDK, Codex, multi-agent (beta) | Python, JS, .NET, Go | gpt-oss; API managée | 1,05 M |
| Anthropic | texte, image | Oui | Outils; web search 10 $/1k | Cache; RAG externe; Managed Agents | Claude Code, SDK agents | Python, TS, Java… | API/cloud; pas de poids phare | 1 M |
| Google | texte, image, audio, vidéo selon modèle | Oui | Search/Maps 14 $/1k | File search/cache | Managed agents, ADK | Python, JS, Go, Java | Gemma séparé | 1,05 M |
| Microsoft | Selon modèle | Oui | Bing/Copilot | Azure AI Search, Graph | Copilot Studio, Foundry | SDK Azure | Région/VNet; EU Data Zone | Modèle |
| AWS | Selon catalogue | Oui | Via outils | Knowledge Bases, mémoire | Agents, AgentCore | SDK AWS | Modèles tiers/custom import | Modèle |
| Meta | Muse Spark multimodal; Llama 4 texte+vision | Function calling | Externe | À construire | Frameworks tiers | OpenAI-compatible (Muse Spark) | Llama 4 sous licence; **vision exclue UE** | Modèle |
| Mistral | Texte, vision, audio, OCR | Oui | App/outils | RAG/agents Studio; Prompt & Skills | Vibe (Work/Code), agents | Python, JS | Large 3 Apache 2.0; plusieurs poids | 256 k |
| xAI | Texte/image; média via Imagine | Oui | Oui; Agent Tools API | Files/collections | Grok multi-agent | SDK/API compatible | Non pour phare | 500 k |
| DeepSeek | Texte (V4) | Partiel | App | Cache disque auto; RAG externe | Frameworks tiers | OpenAI/Anthropic-compatible | Oui (V4, MIT à confirmer) | 1 M |
| Qwen | Texte, vision, vidéo in | Oui | Outils cloud | Cache/RAG cloud | Coding plan/agents | OpenAI/Anthropic-compatible | Oui (poids Max à venir) | 1 M |
| NVIDIA | Texte/vision/audio (Nano Omni) | Oui | Externe | NeMo Retriever | NeMo Agent Toolkit | Python | Oui/privé selon licence | 1 M (Super) |
| Cohere | Texte/image selon Command | Oui | Externe | RAG, citations, rerank | North/agents | SDK | Déploiement privé | 256 k |
| IBM | Texte/vision selon catalogue | Oui | Externe | RAG | Agent Lab | SDK IBM | Granite signés, on-prem | Modèle |
| GitHub | Modèles multiples | Outils repo/CLI | Recherche code/web | Index dépôt/Spaces | Coding agent (sandbox Actions) | Extensions/CLI, MCP | Non | Modèle choisi |
| Perplexity | Texte, fichiers | API recherche | Cœur du produit | Collections | Agent API | SDK/API | Sonar managé | Modèle |
| Cursor | Modèles multiples (Grok 4.5) | Terminal/MCP; allow-list | Agent | Index dépôt, rules | Agents et SDK | Éditeur/CLI | Non | Modèle choisi |
| Replit | Modèles multiples | Shell, DB, déploiement | Agent | Projet | Replit Agent (à l’effort) | Plateforme | Non | Produit |
| Hugging Face | Selon modèle | Selon provider | Externe | Hub/Endpoints | Frameworks tiers | Python/JS | Oui, cœur du Hub | Modèle |
| Kimi | Texte/vision/vidéo (K3) | Oui | App/agent | Long contexte; cache | Kimi Code + sous-agents | SDK/CLI | Oui (licence à paliers) | 1 M |
| Z.AI | Texte/vision/audio/vidéo | Oui; web payant | Oui | À construire | GLM Code/Coding Plan | Python/Java/OpenAI | Poids MIT | 1 M (à confirmer) |

## Sécurité-RGPD

| Acteur/surface | Entraînement des données | Rétention / chiffrement | DPA / région | Appréciation Belgique |
|---|---|---|---|---|
| OpenAI API | Non par défaut, opt-in | Rétention selon endpoint; ZDR régional; chiffrement | DPA; résidence Europe (OpenAI Ireland Ltd, SCC) | Bon si endpoint/région vérifiés; app grand public séparée |
| Anthropic API/Cloud | Non par défaut | Cache/rétention par offre; nouveau tokenizer 4.7+ (~+30 % jetons) | DPA; `inference_geo:"us"` ×1,1; +10 % Bedrock/Vertex régional | Solide entreprise; résidence UE first-party à confirmer |
| Google Gemini API payant | Données payantes non utilisées pour améliorer les produits | Contrôles Cloud; ZDR dispo | EEE requiert le tier payant; endpoint `eu` maintient le traitement en UE | Bien adapté UE via projet payant/Vertex |
| Microsoft/Azure | Données entreprise non utilisées pour entraîner | Chiffrement, réseau, EU Data Boundary | DPA Microsoft, EU Data Zone Standard | Très solide si architecture Azure maîtrisée |
| AWS Bedrock | Isolation service; vérifier chaque provider | KMS/VPC/PrivateLink/logs | DPA AWS, régions UE | Solide; **GPT-5.6 encore US-only** |
| Mistral | Pas d’entraînement (Enterprise/API payant) | ZDR (plan Scale, appels stateless) | Paris/EU; SecNumCloud (ANSSI) via Outscale | Meilleure histoire de souveraineté UE du panel |
| Meta | Muse Spark hébergé US; Llama selon hôte | Selon service/hôte | **Llama 4 multimodal exclu des licenciés UE (licence)** | Vision Llama 4 juridiquement bloquée en UE; Muse Spark résidence à confirmer |
| GitHub Copilot | Individuel: opt-out; B/E: pas d’entraînement | IDE B/E non retenu; autres surfaces jusqu’à 28 j | DPA, contrôles organisation | Bon avec plan entreprise et politiques |
| Cursor Privacy Mode | Pas d’entraînement | ZDR providers; SOC 2 Type II; exceptions abus | Contrôles équipe; pas de région UE dédiée | Activer et imposer Privacy Mode |
| Perplexity | API: ZDR; grand public: opt-out | Grand public rétention ON par défaut; Enterprise sans entraînement | DPA; suppression sous 30 j | API OK; grand public à paramétrer |
| Hugging Face Endpoints | Payloads non stockés | Logs 30 j; TLS; SOC 2 Type 2 | DPA Enterprise; **eu-west-1** | Meilleure résidence UE explicite du groupe outils |
| DeepSeek (direct) | À confirmer | Données stockées en Chine | Pas de représentant RGPD UE; **non conforme en direct** | À n’utiliser qu’via hôte UE (Azure Foundry/Bedrock Frankfurt/self-host) |
| Alibaba/Qwen (direct) | À confirmer | Routage Singapour par défaut; région Frankfurt existe | Pas de représentant RGPD UE clair | Préférer Bedrock Frankfurt ou poids auto-hébergés en UE |
| Moonshot/Kimi (direct) | Supplément business: pas d’entraînement par défaut | Traitement en Chine | DPA/SCC sur demande; à confirmer | Poids ouverts hébergeables en UE; API directe à éviter pour données perso |
| Z.AI/GLM (direct) | À confirmer | Infrastructure chinoise | Pas de DPA UE standard publié | Voie propre = auto-héberger les poids MIT en UE |
| xAI/NVIDIA/Cohere/IBM/Replit | Dépend du produit et contrat | Dépend de la surface | Contrôles entreprise variables; Cohere argue la souveraineté | Exiger DPA, région, sous-traitants et rétention écrits |

## Développement

| Écosystème | Intégration | Versioning/stabilité | Évaluations/observabilité | Coût/verrouillage | Maturité agents code |
|---|---|---|---|---|---|
| OpenAI | Excellente | Snapshots; cache breakpoints, 30 min min | Evals, traces agents | Moyen/élevé; propriétaire | Très élevée |
| Anthropic | Excellente | IDs datés; nouveau tokenizer (re-mesurer coûts) | Outils d’éval + intégrations | Élevé sur Opus/Fable | Très élevée |
| Google | Excellente | Previews à surveiller; endpoints global/non-global | Vertex/AI Studio | Faible à moyen; cloud | Élevée |
| Azure/AWS | Excellente mais complexe | Gouverné par modèle/région | Cloud-native | Verrouillage cloud | Très élevée |
| Mistral | Bonne | Versions datées; Studio Prompt & Skills | Studio/observabilité | Modéré; poids disponibles | Élevée |
| GitHub/Cursor | UX excellente | Produit évolue vite; crédits + flex | Analytics selon plan | Crédits et dépendances modèles | Très élevée |
| Replit | Très rapide | Plateforme intégrée; prix à l’effort | Usage/crédits | Verrouillage fort | Élevée pour greenfield |
| HF/NVIDIA | Flexible | À gérer | Outils d’évaluation et déploiement | Infra/compétences | Élevée comme plateforme |
| DeepSeek/Qwen/Kimi/GLM | API compatibles, poids | Changements rapides et cassants (V3.2 retiré) | À construire | Prix bas, risque opérationnel/juridique | Élevée mais support UE variable |
| Cohere/IBM | Entreprise | Contrats et versions; modèles signés (IBM) | Gouvernance forte | Contrat/plateforme | Bonne, plutôt entreprise |

## Méthodologie

La sélection combine cinq signaux qualitatifs: adoption/présence marché 30 %, qualité/portée des modèles 25 %, maturité API/outils/agents 20 %, écosystème développeur 15 %, disponibilité et pertinence Europe/Belgique 10 %. La liste est plafonnée à exactement 20. Une sortie exige un signal durable inférieur à un candidat entrant; une nouveauté seule ne suffit pas. Malgré le virage propriétaire de Meta (Muse Spark), Meta reste dans les 20 pour son poids marché et l’écosystème Llama; MiniMax, Databricks, Oracle OCI et Salesforce restent surveillés sans être inclus.

Les benchmarks fournisseur restent dans [analyse-detaillee.md](analyse-detaillee.md) avec protocole et avertissements. Aucun score de sources hétérogènes n’est moyenné. Les prix sont des snapshots catalogue au 5 août 2026; remises, contrats et taxes varient.

Contrôles effectués: 20 lignes exactes dans Vue d’ensemble; unités de prix homogènes; conversions recalculées avec S55/S69; liens Markdown relatifs; valeurs inconnues marquées ND/à confirmer. Cette édition signale explicitement le blocage réseau qui a empêché la lecture directe de la plupart des pages officielles.

## Sources

Registre complet, dates et URL exactes: [sources.md](sources.md). Les prix et capacités s’appuient en priorité sur S01–S59; S60–S70 sont des sources indépendantes retenues pour des signaux de marché très récents.
