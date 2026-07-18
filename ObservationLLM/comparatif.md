# Comparatif structuré — édition Belgique

Mise à jour: **17 juillet 2026**, révision de suivi **18 juillet 2026**. Ce fichier remplace le classeur Excel demandé initialement: le dépôt a explicitement migré vers Markdown le 16 juillet 2026. Les « feuilles » sont les sections ci-dessous. Les références Sxx renvoient à [sources.md](sources.md). La révision du 18 juillet corrige la famille frontière OpenAI (GPT-5.6), ajoute le palier Anthropic Fable 5 et confirme Kimi K3 par des mesures indépendantes.

- [Vue d’ensemble](#vue-densemble)
- [Prix particuliers](#prix-particuliers)
- [Prix API](#prix-api)
- [Capacités](#capacités)
- [Sécurité-RGPD](#sécurité-rgpd)
- [Développement](#développement)
- [Méthodologie](#méthodologie)
- [Sources](#sources)

## Vue d’ensemble

| # | Entreprise / écosystème | Catégorie dominante | Offre phare vérifiée | Pertinence Belgique | Force principale | Limite principale | Sources |
|---:|---|---|---|---|---|---|---|
| 1 | OpenAI | Modèles + app + API + agent code | GPT-5.6 Sol/Terra/Luna (GA 09/07), ChatGPT, Codex | Élevée | Écosystème complet et outils | Coût frontière et verrouillage | S01–S05, S61–S62 |
| 2 | Anthropic | Modèles + app + API + agent code | Fable 5 (Mythos-class), Opus 4.8, Sonnet 5, Claude Code | Élevée | Raisonnement, code, long contexte | Prix Fable/Opus; bascule crédits Fable 5 le 20/07; options régionales payantes | S06–S08, S63 |
| 3 | Google | Modèles + app + API + cloud | Gemini 3.5 Flash, Gemini API | Élevée | Multimodal, 1 M, recherche | Complexité des surfaces et tarifs | S09–S11 |
| 4 | Microsoft | Cloud + productivité + agents | Azure OpenAI, M365 Copilot, Copilot Studio | Très élevée | Intégration M365/Azure, identité | Licences et coûts imbriqués | S12–S14 |
| 5 | AWS | Plateforme multi-modèles + agents | Bedrock, Agents, AgentCore | Très élevée | Choix de modèles et régions | Tarification composite | S15–S17 |
| 6 | Meta | Open weight + app | Llama 4, Meta AI | Moyenne | Poids et écosystème open | Licence et disponibilité produit UE à vérifier | S18 |
| 7 | Mistral | Modèles UE + app + API | Medium 3.5, Large, Vibe | Très élevée | Acteur européen, open weight | Catalogue et licences variables | S19–S21 |
| 8 | xAI | Modèles + app + API | Grok 4.5 | Élevée | Contexte, temps réel, outils | Gouvernance et rétention à valider | S22–S24 |
| 9 | DeepSeek | Modèles + app + API + poids | DeepSeek Chat/V3.2 | Moyenne | Rapport coût/capacité | Région, données, disponibilité belge | S25–S26 |
| 10 | Alibaba/Qwen | Modèles + cloud + poids | Qwen 3.7, Model Studio | Moyenne | Catalogue large, code, prix | Facturation/région et support UE | S27–S28 |
| 11 | NVIDIA | Modèles + déploiement + agents | Nemotron 3, NIM, NeMo | Élevée en entreprise | Exploitation, optimisation, garde-fous | Coût infra et complexité | S29–S31 |
| 12 | Cohere | Modèles entreprise + RAG | Command A+ / North | Élevée en entreprise | RAG, multilingue, privé | Peu d’offre grand public | S32–S34 |
| 13 | IBM | Plateforme + gouvernance + modèles | watsonx.ai, Granite, governance | Élevée en entreprise | Gouvernance et hybride | Coût plateforme; écosystème plus restreint | S35–S36 |
| 14 | GitHub Copilot | Assistant et agents de code | Copilot Pro/Pro+/Max | Très élevée | IDE + GitHub + choix de modèles | Crédits variables par tâche/modèle | S37–S38 |
| 15 | Perplexity | Recherche + API | Perplexity, Sonar, Agent API | Élevée | Recherche sourcée | Pas une plateforme générale complète | S39–S40 |
| 16 | Anysphere/Cursor | Éditeur et agents de code | Cursor | Très élevée pour développeurs | UX agentique sur dépôt | Dépendance aux modèles tiers et crédits | S41–S43 |
| 17 | Replit | Création/déploiement agentique | Replit Agent | Élevée pour prototypes | De l’idée au déploiement | Coût par crédits, contrôle infra | S44 |
| 18 | Hugging Face | Hub + inference open | Hub, Providers, Endpoints | Très élevée pour open source | Portabilité et catalogue | Qualité/sécurité dépend du modèle/provider | S45–S47 |
| 19 | Moonshot/Kimi | Modèles + app + agent code | Kimi K3 (poids ouverts annoncés 27/07), Kimi Code | Moyenne | Open weight, code, agents; indices indépendants désormais publiés | Offre belge, DPA et facture EUR à confirmer | S48–S51, S60, S64–S65 |
| 20 | Z.AI/GLM | Modèles + API + agent code | GLM-5.2, Coding Plan | Moyenne | Code agentique et prix | Français/NL, région UE et DPA à confirmer | S52–S54 |

## Prix particuliers

Prix catalogue observés. Conversion: USD ÷ 1,1405; CNY ÷ 7,7327. La colonne TVA est prudente: « checkout » signifie que l’inclusion doit être confirmée sur la facture belge.

| Offre | Prix origine | Estimation EUR HT | Estimation EUR avec 21 % si non incluse | TVA / remarque | Source |
|---|---:|---:|---:|---|---|
| GitHub Copilot Pro | 10 USD/mois | 8,77 € | 10,61 € | Checkout; 15 USD de crédits totaux annoncés | S37 |
| GitHub Copilot Pro+ | 39 USD/mois | 34,20 € | 41,38 € | Checkout; 70 USD de crédits | S37 |
| GitHub Copilot Max | 100 USD/mois | 87,68 € | 106,09 € | Checkout; 200 USD de crédits | S37 |
| Replit Core annuel | 20 USD/mois équivalent | 17,54 € | 21,22 € | 25 USD de crédits mensuels | S44 |
| Replit Pro annuel | 95 USD/mois équivalent | 83,30 € | 100,79 € | 100 USD de crédits | S44 |
| Z.AI Coding Lite annuel | 12,60 USD/mois | 11,05 € | 13,37 € | Promotion; checkout | S54 |
| Z.AI Coding Pro annuel | 50,40 USD/mois | 44,19 € | 53,47 € | Promotion; checkout | S54 |
| Microsoft 365 Copilot Business annuel | 15,60 EUR/utilisateur/mois | 15,60 € | 18,88 € | Page indique prix hors TVA; plan M365 requis | S12 |
| ChatGPT, Claude, Gemini, Mistral, Grok, Perplexity, Cursor | Voir checkout belge | ND | ND | Les pages dynamiques n’ont pas fourni un prix EUR/TVA stable lors du contrôle | S04, S19, S23, S39, S41 |

## Prix API

Prix par **1 million de jetons** sauf mention. HT et hors outils. Les prix EUR sont des estimations arrondies. « Modèle dépendant » évite de comparer un agrégateur/cloud à un modèle unique.

| Acteur / modèle représentatif | Contexte | Entrée origine | Cache origine | Sortie origine | Entrée EUR | Sortie EUR | Batch / classe | Outils / remarques | Source |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| OpenAI GPT-5.6 Sol (phare) | 1,05 M | 5 USD | 0,50 USD | 30 USD | 4,38 € | 26,30 € | Batch/Flex -50 %; Priority ×2,5 | Sortie max 128 k; outils séparés; Ultra Mode/Programmatic Tool Calling | S61–S62 |
| OpenAI GPT-5.6 Terra (équilibré) | 1,05 M | 2,50 USD | ND | 15 USD | 2,19 € | 13,15 € | Batch/Flex -50 % | Compromis capacité/coût pour l’usage courant | S61–S62 |
| OpenAI GPT-5.6 Luna (économique) | 1,05 M | 1 USD | ND | 6 USD | 0,88 € | 5,26 € | Batch/Flex -50 % | Modèle le plus rapide/bon marché de la famille | S61–S62 |
| Anthropic Claude Fable 5 (Mythos-class) | 1 M | 10 USD | ND (≈1 USD estimé, structure Anthropic) | 50 USD | 8,77 € | 43,84 € | Batch -50 % | Modèle le plus cher du catalogue; bascule crédits mesurés 20/07; sortie max 128 k | S63 |
| Anthropic Claude Opus 4.8, API directe | 1 M | 5 USD | lecture 0,50 USD; écritures selon durée | 25 USD | 4,38 € | 21,92 € | Batch -50 % | Résidence et fast peuvent ajouter un multiplicateur | S06–S08 |
| Google Gemini 3.5 Flash | 1 M | 1,50 USD | 0,15 USD + stockage | 9 USD | 1,32 € | 7,89 € | Batch/Flex 0,75/4,50; Priority 2,70/16,20 | Search/Maps 14 USD/1 000 requêtes après quota | S09–S10 |
| Mistral Large | À confirmer par version | 2 USD | ND | 6 USD | 1,75 € | 5,26 € | Batch -50 % | OCR, audio et autres outils séparés | S19 |
| xAI Grok 4.5 court | 500 k | 2 USD | 0,50 USD | 6 USD | 1,75 € | 5,26 € | Batch affichable | Long contexte 4/1/12 USD | S22 |
| DeepSeek chat | 64 k sur page contrôlée | 0,27 USD miss | 0,07 USD hit | 1,10 USD | 0,24 € | 0,96 € | À confirmer | Version et horaires peuvent changer | S25 |
| Alibaba Qwen 3.7 max global | 1 M | 12 CNY | Remise cache publiée | 36 CNY | 1,55 € | 4,66 € | Promotions variables | Régions global/US/Chine distinctes | S27 |
| Cohere Command A | 256 k | 2,50 USD | ND | 10 USD | 2,19 € | 8,77 € | ND | Essai 1 000 appels/mois; prod 500 RPM | S32–S34 |
| IBM Granite 4 h small | Selon modèle | 0,06 USD | ND | 0,25 USD | 0,05 € | 0,22 € | ND | Prix indicatifs, taxes exclues | S35 |
| Z.AI GLM-5.1 | 200 k | 1,40 USD | 0,26 USD | 4,40 USD | 1,23 € | 3,86 € | ND | Web search 0,01 USD/usage | S52–S53 |
| AWS Bedrock | Modèle dépendant | Modèle/région | Modèle/région | Modèle/région | — | — | Batch souvent -50 %; Flex/Priority/Reserved | RAG, guardrails, agents et calcul peuvent s’ajouter | S15–S17 |
| Microsoft Azure OpenAI | Modèle/région/déploiement | Modèle | Modèle | Modèle | — | — | Standard/provisionné | Vérifier région et devise dans calculateur | S13 |
| Meta Llama | Auto-hébergé ou provider | Coût infra/provider | — | Coût infra/provider | — | — | Selon hôte | Poids soumis à licence | S18 |
| NVIDIA Nemotron/NIM | Auto-hébergé/licence/cloud | Coût infra/licence | — | Coût infra/licence | — | — | Selon déploiement | NIM, NeMo, GPU et support | S29–S31 |
| GitHub Copilot / Cursor / Replit | Abonnement/crédits | Non comparable par jeton | — | — | — | — | Crédits/usage | Mesurer coût par tâche | S37–S44 |
| Perplexity Sonar/Agent API | Modèle et recherche | Voir grille dynamique | Selon modèle | Voir grille | — | — | Provider/modèle | Frais de recherche possibles | S39–S40 |
| Hugging Face Providers | Provider choisi | Sans majoration HF annoncée | Provider | Provider | — | — | PAYG | Routage ou clé propre; Endpoint à l’heure | S45–S47 |
| Moonshot Kimi K3 | 1 M | 3 USD (0,30 USD cache hit) | 0,30 USD | 15 USD | 2,63 € | 13,15 € | À confirmer | Poids ouverts annoncés 27/07 (licence MIT modifiée); facture EUR/région UE à confirmer | S64–S65 |

## Capacités

Légende: **Oui** publié; **Partiel** dépend du modèle/produit; **ND** non publié assez précisément. La « mémoire » concerne l’application ou l’agent, pas le modèle brut.

| Acteur | Modalités | Outils / structuré | Web | Mémoire/RAG | Agents/orchestration | SDK | Open weight / privé | Contexte phare |
|---|---|---|---|---|---|---|---|---:|
| OpenAI | texte, image; autres modèles audio/vidéo | Oui | Oui | File search; mémoire app | Agents SDK, Codex, Ultra Mode + multi-agent beta (Responses) | Python, JS, .NET, Go | gpt-oss; API managée | 1,05 M |
| Anthropic | texte, image | Oui | Outils; web selon produit | Context/caching; RAG externe | Claude Code, SDK agents | Python, TS, Java… | API/cloud; pas poids phare | 1 M |
| Google | texte, image, audio, vidéo selon modèle | Oui | Search/Maps | File search/cache | Managed agents, ADK | Python, JS, Go, Java | Gemma séparé | 1 M |
| Microsoft | Selon modèle | Oui | Bing/Copilot | Azure AI Search, Graph | Copilot Studio, Foundry | SDK Azure | Région/VNet; modèles tiers | Modèle |
| AWS | Selon catalogue | Oui | Via outils | Knowledge Bases, mémoire | Agents, multi-agent, AgentCore | SDK AWS | Modèles tiers/custom import | Modèle |
| Meta | Texte + vision selon Llama | Function calling selon stack | Externe | À construire | Frameworks tiers | Écosystème | Oui, sous licence | Modèle |
| Mistral | Texte, vision, audio, OCR | Oui | App/outils | RAG/agents Studio | Work/Vibe/agents | Python, JS | Plusieurs poids | Modèle |
| xAI | Texte/image; média via Imagine | Oui | Oui | Files/collections | Grok multi-agent | SDK/API compatible | Non pour phare | 500 k–1 M |
| DeepSeek | Texte, selon version | Partiel | App | Cache; RAG externe | Frameworks tiers | API compatible | Oui selon modèle | 64 k source prix |
| Qwen | Texte, vision, audio selon modèle | Oui | Outils cloud | Cache/RAG cloud | Coding plan/agents | SDK/API | Oui selon modèle | Jusqu’à 1 M |
| NVIDIA | Texte/vision selon Nemotron | Oui | Externe | NeMo Retriever | NeMo Agent Toolkit | Python | Oui/privé selon licence | Modèle |
| Cohere | Texte/image selon Command | Oui | Externe | RAG, citations, rerank | North/agents | SDK | Déploiement privé | 256 k |
| IBM | Texte/vision selon catalogue | Oui | Externe | RAG | Agent Lab | SDK IBM | Granite et on-prem | Modèle |
| GitHub | Modèles multiples | Outils repo/CLI | Recherche code/web selon surface | Index dépôt/Spaces | Coding/cloud agents | Extensions/CLI | Non | Modèle choisi |
| Perplexity | Texte, fichiers selon app | API recherche | Cœur du produit | Collections | Agent API | SDK/API | Sonar managé | Modèle |
| Cursor | Modèles multiples | Terminal/MCP | Agent | Index dépôt, rules | Agents et SDK | Éditeur/CLI | Non | Modèle choisi |
| Replit | Modèles multiples | Shell, DB, déploiement | Agent | Projet | Replit Agent | Plateforme | Non | Produit |
| Hugging Face | Selon modèle | Selon provider | Externe | Hub/Endpoints | Frameworks tiers | Python/JS | Oui, cœur du Hub | Modèle |
| Kimi | Texte, vision native (K3) | Oui | App/agent | Long contexte | Kimi Code + sous-agents | SDK/CLI | Oui, licence MIT modifiée | 1 M (K3) |
| Z.AI | Texte/vision/audio/vidéo | Oui; web payant | Oui | À construire | GLM Code/Coding Plan | Python/Java/OpenAI | Plusieurs GLM | 200 k |

## Sécurité-RGPD

| Acteur/surface | Entraînement des données | Rétention / chiffrement | DPA / région | Appréciation Belgique |
|---|---|---|---|---|
| OpenAI API | Non par défaut, opt-in | Rétention selon endpoint; chiffrement publié | DPA et résidence EEE pour services éligibles | Bon si endpoint/région vérifiés; app grand public séparée |
| Anthropic API/Cloud | Contrat et surface à vérifier | Cache/rétention documentés par offre | DPA/résidence avec options et clouds | Solide entreprise; coût résidence à intégrer |
| Google Gemini API payant | Données payantes non utilisées pour améliorer produits selon grille | Contrôles Cloud selon surface | EEE disponible; Vertex ajoute gouvernance | Bien adapté UE via projet payant/cloud |
| Microsoft/Azure | Données entreprise non utilisées pour entraîner modèles de base selon service | Chiffrement, réseau, politiques Azure | DPA Microsoft, régions UE | Très solide si architecture Azure maîtrisée |
| AWS Bedrock | Isolation service publiée; vérifier chaque provider | KMS/VPC/logs configurables | DPA AWS, régions UE | Solide, responsabilité de configuration élevée |
| Mistral | Opt-out indiqué selon offre | À vérifier par plan | Acteur UE, déploiements privés | Avantage juridiction/région, pas conformité automatique |
| GitHub Copilot | Individuel: opt-out; Business/Enterprise: pas d’entraînement | IDE B/E prompts non retenus; autres surfaces jusqu’à 28 jours | DPA, contrôles organisation | Bon avec plan entreprise et politiques |
| Cursor Privacy Mode | Pas d’entraînement | ZDR providers; chiffrement; exceptions abus | Contrôles équipe, certifications annoncées | Activer et imposer Privacy Mode |
| Hugging Face Endpoints | Payloads non stockés annoncés | Logs 30 jours; TLS | DPA Enterprise; eu-west-1 disponible | Bon pour open/privé après choix de région |
| DeepSeek/Qwen/Kimi/GLM grand public/API | Informations UE insuffisantes dans les sources accessibles | À confirmer | DPA/région UE non confirmés | Ne pas envoyer de données personnelles/confidentielles avant validation |
| Meta/xAI/Perplexity/Replit/NVIDIA/Cohere/IBM | Dépend du produit et contrat | Dépend de la surface | Contrôles entreprise variables | Exiger DPA, région, sous-traitants et rétention écrits |

## Développement

| Écosystème | Intégration | Versioning/stabilité | Évaluations/observabilité | Coût/verrouillage | Maturité agents code |
|---|---|---|---|---|---|
| OpenAI | Excellente | Snapshots; API v1 | Evals, traces agents | Moyen/élevé; propriétaire | Très élevée |
| Anthropic | Excellente | IDs datés et dépréciations | Outils d’éval + intégrations | Élevé sur Opus | Très élevée |
| Google | Excellente | Previews à surveiller | Vertex/AI Studio | Faible à moyen; cloud | Élevée |
| Azure/AWS | Excellente mais complexe | Gouverné par modèle/région | Cloud-native | Verrouillage cloud | Très élevée |
| Mistral | Bonne | Versions datées | Studio/observabilité à évaluer | Modéré; poids disponibles | Élevée |
| GitHub/Cursor | UX excellente | Produit évolue vite | Analytics selon plan | Crédits et dépendances modèles | Très élevée |
| Replit | Très rapide | Plateforme intégrée | Usage/crédits | Verrouillage fort | Élevée pour greenfield |
| HF/NVIDIA | Flexible | À gérer | Outils d’évaluation et déploiement | Infra/compétences | Élevée comme plateforme |
| DeepSeek/Qwen/Kimi/GLM | API compatibles, poids | Changements rapides | À construire | Prix bas, risque opérationnel | Élevée mais support UE variable |
| Cohere/IBM | Entreprise | Contrats et versions | Gouvernance forte | Contrat/plateforme | Bonne, plutôt entreprise |

## Méthodologie

La sélection combine cinq signaux qualitatifs: adoption/présence marché 30 %, qualité/portée des modèles 25 %, maturité API/outils/agents 20 %, écosystème développeur 15 %, disponibilité et pertinence Europe/Belgique 10 %. La liste est plafonnée à exactement 20. Les sorties de la prochaine édition exigeront un signal durable supérieur à l’acteur remplacé; une nouveauté seule ne suffit pas.

Les benchmarks fournisseur restent dans [analyse-detaillee.md](analyse-detaillee.md) avec protocole et avertissements. Aucun score de sources hétérogènes n’est moyenné. Les prix sont des snapshots catalogue au 17 juillet 2026, révisés au 18 juillet 2026 pour OpenAI (GPT-5.6), Anthropic (Fable 5) et Moonshot (Kimi K3); remises, contrats et taxes varient.

Contrôles effectués: 20 lignes exactes dans Vue d’ensemble; unités de prix homogènes; conversions recalculées avec S55; liens Markdown relatifs; valeurs inconnues marquées ND/à confirmer. Les filtres, volets figés et formules Excel ne sont pas applicables à Markdown.

## Sources

Registre complet, dates et URL exactes: [sources.md](sources.md). Les prix et capacités sont issus en priorité des identifiants officiels S01–S59 et S61–S63; S60, S64 et S65 sont les sources indépendantes/presse retenues pour des signaux de marché très récents (Kimi K3, poids ouverts et indices mesurés).
