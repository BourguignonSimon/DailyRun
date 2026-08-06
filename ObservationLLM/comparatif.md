# Comparatif structuré — édition Belgique

Mise à jour : **6 août 2026**. Les « feuilles » sont les sections ci-dessous. Les références Sxx renvoient à [sources.md](sources.md).

> **Avertissement de ce cycle.** L’ouverture directe des pages officielles a été bloquée (HTTP 403 anti-bot / egress) ; **seuls GitHub Copilot et Microsoft 365 Copilot ont été lus directement**. Les autres chiffres proviennent de recherches indexant les pages officielles + trackers réputés. Traiter les prix comme **indicatifs** et revérifier au checkout / sur la grille officielle. Détails et limites : [sources.md](sources.md).

- [Vue d’ensemble](#vue-densemble)
- [Prix particuliers](#prix-particuliers)
- [Prix API](#prix-api)
- [Capacités](#capacités)
- [Sécurité-RGPD](#sécurité-rgpd)
- [Développement](#développement)
- [Méthodologie](#méthodologie)
- [Sources](#sources)

## Vue d’ensemble

| # | Entreprise / écosystème | Catégorie dominante | Offre phare vérifiée (2026-08-06) | Pertinence Belgique | Force principale | Limite principale | Sources |
|---:|---|---|---|---|---|---|---|
| 1 | OpenAI | Modèles + app + API + agent code | GPT-5.6 (Sol/Terra/Luna), ChatGPT, Codex | Élevée | Écosystème complet et outils | Coût frontière et verrouillage | S01–S05, S66 |
| 2 | Anthropic | Modèles + app + API + agent code | Claude Opus 5, Sonnet 5, Fable 5, Claude Code | Élevée | Raisonnement, code, long contexte | Prix haut de gamme ; résidence UE indirecte | S06–S08, S67–S68 |
| 3 | Google | Modèles + app + API + cloud | Gemini 3.1 Pro, Gemini 3.6 Flash | Élevée | Multimodal, 1 M, recherche | Complexité des surfaces et tarifs | S09–S11, S69 |
| 4 | Microsoft | Cloud + productivité + agents | Azure Foundry, M365 Copilot, Copilot Studio | Très élevée | Intégration M365/Azure, identité | Licences imbriquées ; **prix EUR Copilot non publié** | S12–S14, S79 |
| 5 | AWS | Plateforme multi-modèles + agents | Bedrock, AgentCore (GA) | Très élevée | Choix de modèles/régions (dont **Milan, Espagne**) | Tarification composite | S15–S17, S80 |
| 6 | Meta | Modèle fermé + open weight + app | **Muse Spark 1.1** (fermé, **US only**), Llama 4 | Faible (UE) | Poids Llama ouverts ; frontière Muse | **Muse Spark indisponible UE ; Llama 4 interdit domiciliés UE** | S18, S70–S71 |
| 7 | Mistral | Modèles UE + app + API | Large 3, Medium 3.5, Vibe | Très élevée | Acteur européen, résidence UE, FR/NL | Catalogue et licences variables | S19–S21, S72–S73 |
| 8 | xAI | Modèles + app + API | Grok 4.5 | Élevée | Contexte, temps réel, outils | Gouvernance/rétention ; **incident Grok Build** | S22–S24, S74 |
| 9 | DeepSeek | Modèles + app + API + poids | DeepSeek V4 (Pro/Flash) | Moyenne | Rapport coût/capacité, MIT, 1 M | Région/données en Chine ; pas de résidence UE directe | S25–S26, S75 |
| 10 | Alibaba/Qwen | Modèles + cloud + poids | Qwen3.8-Max, Model Studio | Moyenne (↑) | Catalogue large ; **région Frankfurt UE** | Facturation/DPA UE à confirmer ; Max fermé | S27–S28, S76 |
| 11 | NVIDIA | Modèles + déploiement + agents | Nemotron 3 Ultra, NIM, Agent Toolkit | Élevée en entreprise | Exploitation, optimisation, garde-fous | Coût infra et complexité | S29–S31, S81 |
| 12 | Cohere | Modèles entreprise + RAG | Command A+ / Command A / North | Élevée en entreprise | RAG, multilingue, privé, souverain | Peu d’offre grand public ; A+ « contact sales » | S32–S34, S83 |
| 13 | IBM | Plateforme + gouvernance + modèles | watsonx.ai, Granite 4.1, governance | Élevée en entreprise | Gouvernance, hybride, ISO 42001, indemnité IP | Coût plateforme ; écosystème plus restreint | S35–S36, S82 |
| 14 | GitHub Copilot | Assistant et agents de code | Copilot Pro/Pro+/Max | Très élevée | IDE + GitHub + choix de modèles | Crédits variables par tâche/modèle | S37–S38 |
| 15 | Perplexity | Recherche + API | Perplexity, Sonar, Agentic Research API | Élevée | Recherche sourcée ; Sonar ZDR (à confirmer) | Pas une plateforme générale complète ; résidence UE partielle | S39–S40, S84 |
| 16 | Anysphere/Cursor | Éditeur et agents de code | Cursor | Très élevée pour développeurs | UX agentique sur dépôt ; BAA Enterprise | Dépendance aux modèles tiers et crédits | S41–S43, S85 |
| 17 | Replit | Création/déploiement agentique | Replit Agent | Élevée pour prototypes | De l’idée au déploiement | Coût par crédits, contrôle infra | S44 |
| 18 | Hugging Face | Hub + inference open | Hub, Providers, Endpoints | Très élevée pour open source | Portabilité et catalogue ; région eu-west-1 | Qualité/sécurité dépend du modèle/provider | S45–S47 |
| 19 | Moonshot/Kimi | Modèles + app + agent code | Kimi K3, Kimi Code | Moyenne | Open weight (licence custom), code, agents | Offre belge, DPA et résidence à confirmer | S48–S51, S77 |
| 20 | Z.AI/GLM | Modèles + API + agent code | GLM-5.2 (MIT), Coding Plan | Moyenne | Code agentique, MIT, 1 M contexte | Français/NL, région UE et DPA à confirmer | S52–S54, S78 |

## Prix particuliers

Prix catalogue observés. Conversion : **USD ÷ 1,1515** (BCE 4 août 2026) [S61]. La colonne TVA est prudente : « checkout » signifie que l’inclusion doit être confirmée sur la facture belge.

| Offre | Prix origine | Estimation EUR HT | Estimation EUR avec 21 % si non incluse | TVA / remarque | Source |
|---|---:|---:|---:|---|---|
| GitHub Copilot Pro | 10 USD/mois | 8,68 € | 10,51 € | Checkout ; 15 USD de crédits IA (inchangé) | S37 |
| GitHub Copilot Pro+ | 39 USD/mois | 33,87 € | 40,99 € | Checkout ; 70 USD de crédits | S37 |
| GitHub Copilot Max | 100 USD/mois | 86,84 € | 105,08 € | Checkout ; 200 USD de crédits | S37 |
| Replit Core | 25 USD/mois (20 annuel) | 21,71 € | 26,27 € | 25 USD de crédits ; à confirmer | S44 |
| Replit Pro | 100 USD/mois | 86,84 € | 105,08 € | ~100 USD de crédits ; à confirmer | S44 |
| Z.AI GLM Coding Lite | ≈18 USD/mois | 15,63 € | 18,91 € | Fin de promo ; à confirmer | S78 |
| Z.AI GLM Coding Pro | ≈72 USD/mois | 62,53 € | 75,66 € | Fin de promo ; à confirmer | S78 |
| Z.AI GLM Coding Max | ≈160 USD/mois | 138,95 € | 168,13 € | Nouveau palier ; à confirmer | S78 |
| Microsoft 365 Copilot Business (add-on) | 21 USD std / 18 USD promo | ND | ND | **Grille en USD ; prix EUR non publié** ; promo 01/07–30/09/2026 ; plan M365 requis | S12, S79 |
| ChatGPT, Claude, Gemini, Mistral, Grok, Perplexity, Cursor | Voir checkout belge | ND | ND | Pages dynamiques : pas de prix EUR/TVA stable au contrôle | S04, S19, S23, S39, S41 |

## Prix API

Prix par **1 million de jetons** sauf mention. HT et hors outils. Les prix EUR sont des estimations arrondies (÷ 1,1515). « Modèle dépendant » évite de comparer un agrégateur/cloud à un modèle unique. **Prix indicatifs** — voir avertissement.

| Acteur / modèle représentatif | Contexte | Entrée origine | Cache origine | Sortie origine | Entrée EUR | Sortie EUR | Batch / classe | Outils / remarques | Source |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| OpenAI GPT-5.6 Sol | 1,05 M | 5 USD | 0,50 USD | 30 USD | 4,34 € | 26,05 € | Batch/Flex −50 % | >272 k : entrée ×2, sortie ×1,5 ; cache write ×1,25 | S02, S66 |
| OpenAI GPT-5.6 Terra | 1,05 M (à conf.) | 2 USD | ~0,20 USD (à conf.) | 12 USD | 1,74 € | 10,42 € | Batch/Flex −50 % | −20 % le 30/07/2026 | S66 |
| OpenAI GPT-5.6 Luna | à confirmer | 0,20 USD | ~0,02 USD (à conf.) | 1,20 USD | 0,17 € | 1,04 € | Batch/Flex −50 % | −80 % le 30/07/2026 | S66 |
| Anthropic Claude Opus 5 | 1 M | 5 USD | 0,50 USD (−90 %) | 25 USD | 4,34 € | 21,71 € | Batch −50 % | Sortie 128K ; fast mode 10/50 | S67 |
| Anthropic Fable 5 | à confirmer | 10 USD | à confirmer | 50 USD | 8,68 € | 43,42 € | Batch −50 % | Haut de gamme (Mythos-class) | S67 |
| Anthropic Sonnet 5 (intro) | 1 M (à conf.) | 2 USD | à confirmer | 10 USD | 1,74 € | 8,68 € | Batch −50 % | **Intro jusqu’au 31/08 ; puis 3/15 USD** | S68 |
| Anthropic Haiku 4.5 | à confirmer | 1 USD | à confirmer | 5 USD | 0,87 € | 4,34 € | Batch −50 % | Économique | S67 |
| Google Gemini 3.6 Flash | 1 048 576 | 1,50 USD | 0,15 USD (−90 %) | 7,50 USD | 1,30 € | 6,51 € | Batch −50 % | Sortie 65 536 ; grounding facturé à part | S69 |
| Google Gemini 3.1 Pro (flagship) | 2 M (à conf.) | 2 USD (≤200k) / 4 (>200k) | à confirmer | 12 USD (≤200k) / 18 (>200k) | 1,74–3,47 € | 10,42–15,63 € | Batch −50 % | Search/Maps ~14 USD/1 000 après quota | S09, S69 |
| Mistral Large 3 | À confirmer par version | 0,50 USD | à confirmer | 1,50 USD | 0,43 € | 1,30 € | Batch −50 % | Baisse vs 2/6 USD (baseline périmée) | S72 |
| Mistral Medium 3.5 | À confirmer | 1,50 USD | à confirmer | 7,50 USD | 1,30 € | 6,51 € | Batch −50 % | Agents/code ; OCR/audio séparés | S72 |
| xAI Grok 4.5 court | 500 k | 2 USD | 0,50 USD | 6 USD | 1,74 € | 5,21 € | Batch affichable | Long contexte 4/1/12 USD | S22 |
| DeepSeek V4-Flash | 1 M | 0,14 USD miss | 0,0028 USD hit | 0,28 USD | 0,12 € | 0,24 € | À confirmer | Licence MIT ; alias retirés 24/07 | S75 |
| DeepSeek V4-Pro | 1 M | 0,435 USD miss | 0,0036 USD hit | 0,87 USD | 0,38 € | 0,76 € | À confirmer | Licence MIT ; sortie max 384K | S75 |
| Alibaba Qwen3.8-Max | 1 M | 2 USD | 0,25 USD | 6 USD | 1,74 € | 5,21 € | Promotions variables | **Région Frankfurt (UE)** ; Max fermé | S76 |
| Moonshot Kimi K3 | 1 M | 3 USD | 0,30 USD hit | 15 USD | 2,61 € | 13,03 € | À confirmer | Poids ouverts (licence custom) | S77 |
| Z.AI GLM-5.2 | 1 M | 1,40 USD | 0,26 USD | 4,40 USD | 1,22 € | 3,82 € | À confirmer | Licence MIT ; web search 0,01 USD/usage | S78 |
| Cohere Command A | 256 k | 2,50 USD | ND | 10 USD | 2,17 € | 8,68 € | ND | Command A+ (Apache 2.0) : « contact sales » | S32–S34, S83 |
| IBM Granite 4.1 | jusqu’à 512K | ND (à confirmer) | ND | ND (à confirmer) | — | — | ND | Prix par-jeton non confirmé sur page officielle | S35, S82 |
| Meta Muse Spark 1.1 | ~1 M | 1,25 USD | 0,15 USD | 4,25 USD | 1,09 € | 3,69 € | ND | **US only — indisponible en Belgique** | S70 |
| AWS Bedrock | Modèle dépendant | Modèle/région | Modèle/région | Modèle/région | — | — | Batch −50 % ; Flex/Priority/Reserved | AgentCore GA ; régions Milan/Espagne | S15–S17, S80 |
| Microsoft Azure Foundry | Modèle/région/déploiement | Modèle | Modèle | Modèle | — | — | Standard/provisionné | GPT-5.6 en preview ; vérifier région/devise | S13, S79 |
| NVIDIA Nemotron/NIM | Auto-hébergé/licence/cloud | Coût infra/licence | — | Coût infra/licence | — | — | Selon déploiement | Agent Toolkit (BioNeMo, PhysicsNeMo) | S29–S31, S81 |
| GitHub Copilot / Cursor / Replit | Abonnement/crédits | Non comparable par jeton | — | — | — | — | Crédits/usage | Mesurer coût par tâche | S37–S44 |
| Perplexity Sonar/Agentic Research | Modèle et recherche | Sonar ~1/1 ; Sonar Pro 3/15 (à conf.) | Selon modèle | Voir grille | — | — | Provider/modèle | +0,005 USD/recherche ; Sonar ZDR (à conf.) | S39–S40, S84 |
| Hugging Face Providers | Provider choisi | Sans majoration HF annoncée | Provider | Provider | — | — | PAYG | Routage ou clé propre ; Endpoint à l’heure | S45–S47 |

## Capacités

Légende : **Oui** publié ; **Partiel** dépend du modèle/produit ; **ND** non publié assez précisément. La « mémoire » concerne l’application ou l’agent, pas le modèle brut.

| Acteur | Modalités | Outils / structuré | Web | Mémoire/RAG | Agents/orchestration | SDK | Open weight / privé | Contexte phare |
|---|---|---|---|---|---|---|---|---:|
| OpenAI | texte, image ; audio/vidéo autres modèles | Oui | Oui | File search ; mémoire app | Agents SDK, Codex | Python, JS, .NET, Go | gpt-oss ; API managée | 1,05 M |
| Anthropic | texte, image | Oui | Outils ; web selon produit | Context/caching ; RAG externe | Claude Code, SDK agents | Python, TS, Java… | API/cloud ; pas de poids phare | 1 M |
| Google | texte, image, audio, vidéo selon modèle | Oui | Search/Maps | File search/cache | Managed agents, ADK | Python, JS, Go, Java | Gemma séparé | 1 M–2 M |
| Microsoft | Selon modèle | Oui | Bing/Copilot | Azure AI Search, Graph | Copilot Studio, Foundry | SDK Azure | Région/VNet ; modèles tiers | Modèle |
| AWS | Selon catalogue | Oui | Via outils | Knowledge Bases, mémoire | AgentCore (harness, Policy, Guardrails) | SDK AWS | Modèles tiers/custom import | Modèle |
| Meta | Texte + vision/audio/vidéo (Muse Spark) | Oui | Externe | À construire | Frameworks tiers | Meta Model API (compat OpenAI) | Llama oui (hors UE) ; Muse fermé | ~1 M |
| Mistral | Texte, vision, audio, OCR | Oui | App/outils | RAG/agents Studio | Work/Vibe/agents | Python, JS | Plusieurs poids | Modèle |
| xAI | Texte/image ; vidéo native | Oui | Oui | Files/collections | Grok multi-agent | SDK/API compatible | Non pour phare | 500 k |
| DeepSeek | Texte, selon version | Partiel | App | Cache ; RAG externe | Frameworks tiers | API compatible | Oui, MIT | 1 M |
| Qwen | Texte, vision, audio selon modèle | Oui | Outils cloud | Cache/RAG cloud | Coding plan/agents | SDK/API | Généraux Apache 2.0 ; Max fermé | 1 M |
| NVIDIA | Texte/vision selon Nemotron | Oui | Externe | NeMo Retriever | Agent Toolkit (+ BioNeMo, PhysicsNeMo) | Python | Oui/privé selon licence | Modèle |
| Cohere | Texte/image selon Command | Oui | Externe | RAG, citations, rerank | North/agents | SDK | Command A+ Apache 2.0 ; privé | 256 k |
| IBM | Texte/vision selon catalogue | Oui | Externe | RAG | Agent Lab | SDK IBM | Granite 4.1 et on-prem | jusqu’à 512K |
| GitHub | Modèles multiples | Outils repo/CLI | Recherche code/web selon surface | Index dépôt/Spaces | Coding/cloud agents | Extensions/CLI | Non | Modèle choisi |
| Perplexity | Texte, fichiers selon app | API recherche | Cœur du produit | Collections | Agentic Research API | SDK/API | Sonar managé | Modèle |
| Cursor | Modèles multiples | Terminal/MCP | Agent | Index dépôt, rules | Agents et SDK | Éditeur/CLI | Non | Modèle choisi |
| Replit | Modèles multiples | Shell, DB, déploiement | Agent | Projet | Replit Agent | Plateforme | Non | Produit |
| Hugging Face | Selon modèle | Selon provider | Externe | Hub/Endpoints | Frameworks tiers | Python/JS | Oui, cœur du Hub | Modèle |
| Kimi | Texte/vision selon version | Oui | App/agent | Long contexte | Kimi Code + sous-agents | SDK/CLI | Oui, licence custom K3 | 1 M |
| Z.AI | Texte/vision/audio/vidéo | Oui ; web payant | Oui | À construire | GLM Code/Coding Plan | Python/Java/OpenAI | Plusieurs GLM (MIT) | 1 M |

## Sécurité-RGPD

| Acteur/surface | Entraînement des données | Rétention / chiffrement | DPA / région | Appréciation Belgique |
|---|---|---|---|---|
| OpenAI API | Non par défaut, opt-in | Rétention selon endpoint ; chiffrement publié | DPA et résidence EEE (sales-gated) pour services éligibles | Bon si endpoint/région vérifiés ; app grand public séparée |
| Anthropic API/Cloud | Pas d’entraînement sur produits commerciaux | Rétention ~30 j ; ZDR entreprise | DPA/SCC inclus ; **hébergement UE via Bedrock/Vertex uniquement** | Solide entreprise ; hébergement UE indirect |
| Google Gemini API payant | Données payantes non utilisées pour améliorer produits | Contrôles Cloud selon surface | EEE disponible ; Vertex ajoute gouvernance | Bien adapté UE via projet payant/cloud |
| Microsoft/Azure Foundry | Données entreprise non utilisées pour entraîner modèles de base | Chiffrement, réseau, EU Data Zone | DPA Microsoft, régions UE | Très solide si architecture Azure maîtrisée |
| AWS Bedrock | Isolation service publiée ; vérifier chaque provider | KMS/VPC/logs configurables | DPA AWS, régions UE (dont Milan, Espagne) | Solide, responsabilité de configuration élevée |
| Mistral | ZDR sur tiers payants ; tier gratuit entraîné (opt-out) | À vérifier par plan | Acteur UE, résidence UE, déploiements privés | Avantage juridiction/région, FR/NL |
| GitHub Copilot | Individuel : opt-out ; Business/Enterprise : pas d’entraînement | IDE B/E prompts non retenus ; autres surfaces jusqu’à 28 jours | DPA, contrôles organisation | Bon avec plan entreprise et politiques |
| Cursor Privacy Mode | Pas d’entraînement | ZDR providers ; chiffrement ; **BAA Enterprise** | Contrôles équipe, SCC | Activer et imposer Privacy Mode |
| xAI | Entraînement par défaut, opt-out | Suppression ~30 j | Contrôles entreprise | **Vigilance : incident Grok Build (exfiltration dépôts)** |
| Hugging Face Endpoints | Payloads non stockés annoncés | Logs 30 jours ; TLS | DPA Enterprise ; eu-west-1 disponible | Bon pour open/privé après choix de région |
| DeepSeek/Kimi/GLM API directe | Informations UE insuffisantes ; données en Chine/Singapour | À confirmer | Pas de résidence/DPA UE en direct | Ne pas envoyer de données personnelles ; passer par poids ouverts en UE |
| Qwen (Model Studio) | À vérifier par plan | À confirmer | **Région Frankfurt (UE)** disponible ; EUR/TVA/DPA à confirmer | Seule piste de résidence UE directe des acteurs chinois |
| Meta | Muse Spark : US only ; Llama 4 : interdit UE | Dépend de la surface | Contrôles variables | Peu exploitable en Belgique hors app intégrée |
| Perplexity/Replit/NVIDIA/Cohere/IBM | Dépend du produit et contrat | Dépend de la surface | Contrôles entreprise variables | Exiger DPA, région, sous-traitants et rétention écrits |

## Développement

| Écosystème | Intégration | Versioning/stabilité | Évaluations/observabilité | Coût/verrouillage | Maturité agents code |
|---|---|---|---|---|---|
| OpenAI | Excellente | Snapshots ; API v1 | Evals, traces agents | Moyen/élevé ; propriétaire | Très élevée |
| Anthropic | Excellente | IDs datés et dépréciations | Outils d’éval + intégrations | Élevé sur haut de gamme | Très élevée |
| Google | Excellente | Previews à surveiller (3.5 Pro en retard) | Vertex/AI Studio | Faible à moyen ; cloud | Élevée |
| Azure/AWS | Excellente mais complexe | Gouverné par modèle/région | Cloud-native | Verrouillage cloud | Très élevée |
| Mistral | Bonne | Versions datées | Studio/observabilité à évaluer | Modéré ; poids disponibles | Élevée |
| GitHub/Cursor | UX excellente | Produit évolue vite | Analytics selon plan | Crédits et dépendances modèles | Très élevée |
| Replit | Très rapide | Plateforme intégrée | Usage/crédits | Verrouillage fort | Élevée pour greenfield |
| HF/NVIDIA | Flexible | À gérer | Outils d’évaluation et déploiement | Infra/compétences | Élevée comme plateforme |
| DeepSeek/Qwen/Kimi/GLM | API compatibles, poids (MIT/custom) | Changements rapides (générations mensuelles) | À construire | Prix bas, risque opérationnel | Élevée mais support UE variable |
| Cohere/IBM | Entreprise | Contrats et versions | Gouvernance forte | Contrat/plateforme | Bonne, plutôt entreprise |

## Méthodologie

La sélection combine cinq signaux qualitatifs : adoption/présence marché 30 %, qualité/portée des modèles 25 %, maturité API/outils/agents 20 %, écosystème développeur 15 %, disponibilité et pertinence Europe/Belgique 10 %. La liste est plafonnée à exactement 20. Une sortie exigerait un signal durable supérieur à l’acteur remplacé ; une nouveauté seule ne suffit pas. **Ce cycle, aucun changement de composition** : les mouvements sont des mises à jour de fiches (modèles, prix, politiques).

Les benchmarks fournisseur restent dans [analyse-detaillee.md](analyse-detaillee.md) avec protocole et avertissements. Aucun score de sources hétérogènes n’est moyenné. Les prix sont des snapshots catalogue au 6 août 2026, **indicatifs** faute d’accès direct aux grilles officielles ce cycle ; remises, contrats et taxes varient.

Contrôles effectués : 20 lignes exactes dans Vue d’ensemble ; unités de prix homogènes ; conversions recalculées avec S61 (÷ 1,1515) ; liens Markdown relatifs ; valeurs inconnues marquées ND / à confirmer.

## Sources

Registre complet, dates et URL exactes : [sources.md](sources.md). Les prix et capacités s’appuient sur les identifiants S01–S87. Voir l’avertissement méthodologique en tête de [sources.md](sources.md) concernant l’accès aux pages officielles ce cycle.
