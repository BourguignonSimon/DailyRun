# Comparatif structuré — édition Belgique

Mise à jour: **22 juillet 2026**. Ce fichier tient lieu de classeur comparatif: le dépôt a migré ces livrables vers Markdown le 16 juillet 2026. Les « feuilles » sont les sections ci-dessous. Les références Sxx renvoient à [sources.md](sources.md). Conversions: USD ÷ 1,1418; CNY ÷ 8,2626 (BCE, 21 juillet 2026 [S61]; CNY à confirmer).

- [Vue d’ensemble](#vue-densemble)
- [Prix particuliers](#prix-particuliers)
- [Prix API](#prix-api)
- [Capacités](#capacités)
- [Sécurité-RGPD](#sécurité-rgpd)
- [Développement](#développement)
- [Méthodologie](#méthodologie)
- [Sources](#sources)

## Vue d’ensemble

| # | Entreprise / écosystème | Catégorie dominante | Offre phare vérifiée (22 juil. 2026) | Pertinence Belgique | Force principale | Limite principale | Sources |
|---:|---|---|---|---|---|---|---|
| 1 | OpenAI | Modèles + app + API + agent code | GPT-5.6 (Sol/Terra/Luna), ChatGPT, Codex | Élevée | Écosystème complet et outils | Coût frontière et verrouillage | S01–S05 |
| 2 | Anthropic | Modèles + app + API + agent code | Fable 5, Opus 4.8, Sonnet 5, Claude Code | Élevée | Raisonnement, code, long contexte | Pas de résidence UE native; prix tête de gamme | S06–S09 |
| 3 | Google | Modèles + app + API + cloud | Gemini 3.1 Pro, 3.6 Flash, Gemini API/Vertex | Élevée | Multimodal, 1 M, recherche, résidence UE | Complexité des surfaces et tarifs | S10–S12 |
| 4 | Microsoft | Cloud + productivité + agents | Azure OpenAI, M365 Copilot, Copilot Studio | Très élevée | Intégration M365/Azure, identité | Sous-traitant OpenAI activé par défaut le 24 juil.; licences imbriquées | S16–S20 |
| 5 | AWS | Plateforme multi-modèles + agents | Bedrock, Agents, AgentCore (Milan/Espagne) | Très élevée | Choix de modèles et régions UE | Tarification composite | S21–S25 |
| 6 | Meta | Open weight + app | Llama 4, Muse Spark 1.1 (US-only) | Moyenne/Faible UE | Poids et écosystème open (texte) | Multimodal Llama 4 interdit aux entreprises UE | S38–S39 |
| 7 | Mistral | Modèles UE + app + API | Medium 3.5, Large 3, Vibe, Studio | Très élevée | Acteur européen, open weight, résidence | Catalogue et licences variables | S35–S37 |
| 8 | xAI | Modèles + app + API | Grok 4.5 | Élevée (risque RGPD) | Contexte, temps réel, outils | Exposition RGPD la plus élevée | S13–S15 |
| 9 | DeepSeek | Modèles + app + API + poids | DeepSeek V4 (Flash/Pro) | Faible (direct) | Rapport coût/capacité | RGPD non défendable en direct; alias V3.2 retirés le 24 juil. | S42–S44 |
| 10 | Alibaba/Qwen | Modèles + cloud + poids | Qwen 3.7-Max, Qwen3.8-Max-Preview | Moyenne | Catalogue large, code, prix, région Francfort | Représentant RGPD absent; routage Singapour | S45–S47 |
| 11 | NVIDIA | Modèles + déploiement + agents | Nemotron 3 (Ultra 550B), NIM, NeMo | Élevée en entreprise | Souveraineté, optimisation, garde-fous | Coût infra et complexité | S32–S34 |
| 12 | Cohere | Modèles entreprise + RAG | Command A+, North, North Mini Code | Élevée en entreprise | RAG, multilingue, privé/air-gap | Peu d’offre grand public | S29–S31 |
| 13 | IBM | Plateforme + gouvernance + modèles | watsonx.ai v2.4, Granite 4.x, governance | Élevée en entreprise | Gouvernance et hybride, région UE | Coût plateforme; écosystème plus restreint | S26–S28 |
| 14 | GitHub Copilot | Assistant et agents de code | Copilot Pro/Pro+/Max (crédits IA) | Très élevée | IDE + GitHub + choix de modèles | Crédits variables par tâche/modèle | S48–S49 |
| 15 | Perplexity | Recherche + API | Perplexity, Sonar, Agentic Research API | Élevée | Recherche sourcée | Pas une plateforme générale complète | S53–S54 |
| 16 | Anysphere/Cursor | Éditeur et agents de code | Cursor (Pro/Ultra/Teams) | Très élevée pour développeurs | UX agentique sur dépôt, ZDR | Dépendance aux modèles tiers et crédits | S50–S51 |
| 17 | Replit | Création/déploiement agentique | Replit Agent | Élevée pour prototypes | De l’idée au déploiement | Coût par crédits, contrôle infra | S52 |
| 18 | Hugging Face | Hub + inference open | Hub, Providers, Endpoints (eu-west-1) | Très élevée pour open source | Portabilité et catalogue, résidence UE | Qualité/sécurité dépend du modèle/provider | S40–S41 |
| 19 | Moonshot/Kimi | Modèles + app + agent code | Kimi K3 (poids attendus 27 juil.), Kimi Code | Moyenne | Open weight, code, agents | Offre belge, DPA et prix officiel à confirmer | S55–S58 |
| 20 | Z.AI/GLM | Modèles + API + agent code | GLM-5.2 (1 M), Coding Plan | Moyenne | Code agentique, prix, poids MIT | Français/NL, région UE et DPA à confirmer | S59–S60 |

## Prix particuliers

Prix catalogue observés. La colonne TVA est prudente: « checkout » signifie que l’inclusion doit être confirmée sur la facture belge.

| Offre | Prix origine | Estimation EUR HT | Estimation EUR avec 21 % si non incluse | TVA / remarque | Source |
|---|---:|---:|---:|---|---|
| GitHub Copilot Pro | 10 USD/mois | 8,76 € | 10,60 € | Checkout; 15 USD de crédits IA inclus | S48 |
| GitHub Copilot Pro+ | 39 USD/mois | 34,16 € | 41,34 € | Checkout; 70 USD de crédits | S48 |
| GitHub Copilot Max | 100 USD/mois | 87,58 € | 105,97 € | Checkout; 200 USD de crédits | S48 |
| Cursor Teams Standard | 40 USD/utilisateur/mois | 35,03 € | 42,39 € | Checkout; Premium 120 USD (96 en annuel) | S50 |
| Replit Core | 25 USD/mois (17 en annuel) | 21,90 € | 26,50 € | 20 USD de crédits, sans report | S52 |
| Replit Pro | 100 USD/mois | 87,58 € | 105,97 € | Report de crédits 1 mois | S52 |
| Z.AI GLM Coding Lite | 18 USD/mois | 15,77 € | 19,08 € | Remises 10/20/30 % selon durée | S60 |
| Z.AI GLM Coding Pro | 72 USD/mois | 63,06 € | 76,30 € | Multiplicateurs de quota | S60 |
| Kimi (abonnements) | 19 / 39 / 99 / 199 USD | 16,64–174,29 € | 20,14–210,89 € | Adagio gratuit; API facturée à part | S58 |
| Microsoft 365 Copilot Business | ~18 USD/utilisateur/mois (annuel promo) | 15,77 € | 19,08 € | Prix EUR HT ~15,60 € à confirmer; plan M365 requis | S18 |
| ChatGPT, Claude, Gemini, Mistral, Grok, Perplexity | Voir checkout belge | ND | ND | Pages dynamiques sans prix EUR/TVA stable au contrôle | S04, S35, S53 |

## Prix API

Prix par **1 million de jetons** sauf mention. HT et hors outils. Les prix EUR sont des estimations arrondies. « Modèle dépendant » évite de comparer un agrégateur/cloud à un modèle unique.

| Acteur / modèle représentatif | Contexte | Entrée origine | Cache origine | Sortie origine | Entrée EUR | Sortie EUR | Batch / classe | Outils / remarques | Source |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| OpenAI GPT-5.6 Sol | 1 M | 5 USD | 0,50 USD | 30 USD | 4,38 € | 26,27 € | Batch/Flex -50 %; Priority | >272 k: entrée ×2, sortie ×1,5; Terra 2,50/15; Luna 1/6 | S01–S02 |
| Anthropic Claude Fable 5 (frontière) | 1 M | 10 USD (à conf.) | ~1 USD | 50 USD (à conf.) | 8,76 € | 43,79 € | Batch -50 % | Opus 4.8: 5/25; « fast » 10/50 | S06–S09 |
| Anthropic Claude Sonnet 5 | 1 M | 2 USD (intro) | ~0,20 USD | 10 USD (intro) | 1,75 € | 8,76 € | Batch -50 % | Intro jusqu’au 31 août, puis 3/15; pas de surcoût >200 k | S06–S08 |
| Google Gemini 3.1 Pro | 1 M | 2 USD | 0,20 USD | 12 USD | 1,75 € | 10,51 € | Batch/Flex; Priority | >200 k: 4/18; 3.6 Flash 1,50/0,15/7,50 | S10–S11 |
| Mistral Large 3 | 256 k | 2 USD (à conf.) | ~0,20 USD | 6 USD (à conf.) | 1,75 € | 5,26 € | Batch -50 % | Trackers divergent (0,50/1,50 vs 2/6); Medium 3.5 ≈1,50/7,50 | S35 |
| xAI Grok 4.5 (court) | 500 k | 2 USD | 0,50 USD | 6 USD | 1,75 € | 5,26 € | Batch -50 % | ≥200 k: entrée/cache/sortie ×2 (4/–/12) | S13 |
| DeepSeek V4-Flash | 1 M | 0,14 USD miss | 0,0028 USD hit | 0,28 USD | 0,12 € | 0,25 € | Heures creuses moins chères | V4-Pro 0,435/0,0036/0,87; ×2 en heures pleines | S42–S43 |
| Alibaba Qwen 3.7-Max (int’l) | 1 M | 1,25 USD | Remise cache | 3,75 USD | 1,09 € | 3,28 € | Promotions variables | Qwen3.8-Max-Preview via Token Plan; endpoint Chine ~60–70 % moins cher | S45–S46 |
| Cohere Command A / A+ | 256 k | 2,50 USD | ND | 10 USD | 2,19 € | 8,76 € | ND | Déploiement privé/air-gap; North | S29–S31 |
| IBM Granite 4 h small | Selon modèle | 0,06 USD | ND | 0,25 USD | 0,05 € | 0,22 € | ND | Prix indicatifs, taxes exclues | S28 |
| Z.AI GLM-5.2 | 1 M | 1,40 USD | 0,26 USD | 4,40 USD | 1,23 € | 3,85 € | ND | Web search facturé; Coding Plan à quotas | S59–S60 |
| Moonshot Kimi K3 | 1 M | 3 USD miss | 0,30 USD hit | 15 USD | 2,63 € | 13,14 € | ND | K2.7 0,95/4; K2.5 0,60/3; poids attendus 27 juil. | S55–S57 |
| Perplexity Sonar / Sonar Pro | Modèle | 1 / 3 USD | Selon modèle | 1 / 15 USD | 0,88–2,63 € | 0,88–13,14 € | Provider/modèle | Frais de recherche et de contexte en sus; Agentic Research API à part | S53–S54 |
| AWS Bedrock | Modèle dépendant | Modèle/région | Modèle/région | Modèle/région | — | — | Standard/Flex/Priority/Reserved | GPT-5.6 GA; Sonnet 5 promo 2/10; cache -90 % | S21–S25 |
| Microsoft Azure OpenAI | Modèle/région | Modèle | Modèle | Modèle | — | — | Standard/provisionné | Vérifier région et devise dans le calculateur | S20 |
| Meta Llama / Muse Spark 1.1 | Modèle | Coût infra/provider | — | Coût infra/provider | — | — | Selon hôte | Multimodal Llama 4 interdit aux entreprises UE; Muse Spark US-only | S38–S39 |
| NVIDIA Nemotron 3 / NIM | Auto-hébergé/licence/cloud | Coût infra/licence | — | Coût infra/licence | — | — | Selon déploiement | Poids ouverts; NIM via AI Enterprise | S32–S34 |
| GitHub Copilot / Cursor / Replit | Abonnement/crédits | Non comparable par jeton | — | — | — | — | Crédits/usage | Mesurer coût par tâche | S48–S52 |
| Hugging Face Providers | Provider choisi | Sans majoration HF annoncée | Provider | Provider | — | — | PAYG | Routage `router.huggingface.co`; Endpoint à l’heure | S40–S41 |

## Capacités

Légende: **Oui** publié; **Partiel** dépend du modèle/produit; **ND** non publié assez précisément. La « mémoire » concerne l’application ou l’agent, pas le modèle brut.

| Acteur | Modalités | Outils / structuré | Web | Mémoire/RAG | Agents/orchestration | SDK | Open weight / privé | Contexte phare |
|---|---|---|---|---|---|---|---|---:|
| OpenAI | texte, image; audio/vidéo autres modèles | Oui | Oui | File search; mémoire app | Agents SDK, Codex | Python, JS, .NET, Go | gpt-oss; API managée | 1 M |
| Anthropic | texte, image | Oui | Outils; web selon produit | Context/caching; RAG externe | Claude Code, SDK agents | Python, TS, Java… | API/cloud; pas de poids phare | 1 M |
| Google | texte, image, audio, vidéo selon modèle | Oui | Search/Maps | File search/cache | Managed agents, ADK | Python, JS, Go, Java | Gemma séparé | 1 M |
| Microsoft | Selon modèle | Oui | Bing/Copilot | Azure AI Search, Graph | Copilot Studio, Foundry | SDK Azure | Région/VNet; modèles tiers | Modèle |
| AWS | Selon catalogue | Oui | Via outils | Knowledge Bases, mémoire | Agents, AgentCore (UE) | SDK AWS | Modèles tiers/custom import | Modèle |
| Meta | Texte + vision selon Llama | Function calling selon stack | Externe | À construire | Frameworks tiers | Écosystème | Oui (texte), sous licence | 1 M (Muse Spark) |
| Mistral | Texte, vision, audio, OCR | Oui | App/outils | RAG/agents Studio | Vibe/agents distants | Python, JS | Plusieurs poids | 256 k |
| xAI | Texte/image; média via Imagine | Oui | Oui | Files/collections | Grok multi-agent | SDK/API compatible | Non pour phare | 500 k |
| DeepSeek | Texte, selon version | Partiel | App | Cache; RAG externe | Frameworks tiers | API compatible | Oui selon modèle | 1 M (V4) |
| Qwen | Texte, vision, audio selon modèle | Oui | Outils cloud | Cache/RAG cloud | Coding plan/agents | SDK/API | Oui selon modèle | Jusqu’à 1 M |
| NVIDIA | Texte/vision selon Nemotron | Oui | Externe | NeMo Retriever | NeMo Agent Toolkit | Python | Oui/privé selon licence | Modèle |
| Cohere | Texte/image selon Command | Oui | Externe | RAG, citations, rerank | North/agents | SDK | Déploiement privé/air-gap | 256 k |
| IBM | Texte/vision selon catalogue | Oui | Externe | RAG | Agent Lab | SDK IBM | Granite et on-prem | Modèle |
| GitHub | Modèles multiples | Outils repo/CLI | Recherche code/web selon surface | Index dépôt/Spaces | Coding/cloud agents | Extensions/CLI | Non | Modèle choisi |
| Perplexity | Texte, fichiers selon app | API recherche | Cœur du produit | Collections | Agentic Research API | SDK/API | Sonar managé | Modèle |
| Cursor | Modèles multiples | Terminal/MCP | Agent | Index dépôt, rules | Agents et SDK | Éditeur/CLI | Non | Modèle choisi |
| Replit | Modèles multiples | Shell, DB, déploiement | Agent | Projet | Replit Agent | Plateforme | Non | Produit |
| Hugging Face | Selon modèle | Selon provider | Externe | Hub/Endpoints | Frameworks tiers | Python/JS | Oui, cœur du Hub | Modèle |
| Kimi | Texte/vision/vidéo selon version | Oui | App/agent | Long contexte | Kimi Code + sous-agents | SDK/CLI | Oui, licence modifiée (K3 27 juil.) | 1 M |
| Z.AI | Texte/vision/audio/vidéo | Oui; web payant | Oui | À construire | GLM Code/Coding Plan | Python/Java/OpenAI | Plusieurs GLM (MIT) | 1 M |

## Sécurité-RGPD

| Acteur/surface | Entraînement des données | Rétention / chiffrement | DPA / région | Appréciation Belgique |
|---|---|---|---|---|
| OpenAI API | Non par défaut, opt-in | Rétention selon endpoint; ZDR sur validation | DPA; résidence EEE/Suisse pour services éligibles | Bon si endpoint/région vérifiés; app grand public séparée |
| Anthropic API/Cloud | API/commercial non entraîné; grand public opt-in depuis oct. 2025 | Cache/rétention documentés par offre | Pas de résidence UE native: via Bedrock/Vertex UE | Solide entreprise via cloud UE; router hors first-party pour la résidence |
| Google Gemini API payant | Données payantes non utilisées pour améliorer selon grille | Contrôles Cloud selon surface | EEE via Vertex; régions UE | Meilleure résidence UE native des « big three » |
| Microsoft/Azure | Données entreprise non utilisées pour entraîner | Chiffrement, réseau, EU Data Boundary | DPA Microsoft, régions UE | Solide, **mais** sous-traitant OpenAI (24 juil.) peut sortir de l’EU Data Boundary |
| AWS Bedrock | Isolation service; vérifier chaque provider | KMS/VPC/logs configurables | DPA AWS, régions UE (Milan/Espagne pour AgentCore) | Solide; responsabilité de configuration élevée |
| Mistral | Opt-out/no-training API par défaut | À vérifier par plan | Acteur UE, déploiements privés | Avantage juridiction/région; pas de conformité automatique |
| GitHub Copilot | Individuel: opt-out; Business/Enterprise: pas d’entraînement | IDE B/E non retenu; autres surfaces jusqu’à 28 jours | DPA, contrôles organisation | Bon avec plan entreprise et politiques |
| Cursor Privacy Mode | Pas d’entraînement | ZDR providers; chiffrement; exceptions abus | Contrôles équipe, SSO SAML/OIDC | Activer et imposer Privacy Mode à l’échelle de l’équipe |
| Hugging Face Endpoints | Payloads non stockés annoncés | Logs 30 jours; TLS; scale-to-zero | DPA Enterprise; eu-west-1 disponible | Bon pour open/privé après choix de région |
| DeepSeek | Informations UE insuffisantes / négatives | À confirmer | Représentant UE rejeté; blocage Garante | **Ne pas** envoyer de données personnelles en direct; passer par un hôte UE |
| Alibaba/Qwen | À confirmer | À confirmer | Région Francfort mais routage Singapour par défaut; pas de représentant RGPD | Meilleur que DeepSeek mais direct à confirmer; préférer Bedrock Francfort |
| xAI/Grok | Entraînement sur posts X (setting coché par défaut) | Dépend de la surface | Enquêtes DPC/CNIL/ICO; plaintes noyb | Exposition RGPD la plus élevée; prudence sur données personnelles |
| Meta | Poids: obligation d’exploitant | Selon déploiement | Licence Llama 4: multimodal interdit aux entreprises UE | Multimodal effectivement bloqué en UE commerciale; texte auto-hébergé possible |
| Kimi/GLM (grand public/API) | Informations UE insuffisantes | À confirmer | DPA/région UE non confirmés | À confirmer avant données sensibles; poids ouverts → auto-hébergement UE |
| NVIDIA/Cohere/IBM/Perplexity/Replit | Dépend du produit et contrat | Dépend de la surface | Contrôles entreprise variables; UE via région | Exiger DPA, région, sous-traitants et rétention écrits |

## Développement

| Écosystème | Intégration | Versioning/stabilité | Évaluations/observabilité | Coût/verrouillage | Maturité agents code |
|---|---|---|---|---|---|
| OpenAI | Excellente | Snapshots; API v1 | Evals, traces agents | Moyen/élevé; propriétaire | Très élevée |
| Anthropic | Excellente | IDs datés et dépréciations | Outils d’éval + intégrations | Élevé sur tête de gamme | Très élevée |
| Google | Excellente | Previews à surveiller (3.5 Pro, Gemini 4) | Vertex/AI Studio | Faible à moyen; cloud | Élevée |
| Azure/AWS | Excellente mais complexe | Gouverné par modèle/région | Cloud-native | Verrouillage cloud | Très élevée |
| Mistral | Bonne | Versions datées | Studio/observabilité à évaluer | Modéré; poids disponibles | Élevée |
| GitHub/Cursor | UX excellente | Produit évolue vite | Analytics selon plan | Crédits et dépendances modèles | Très élevée |
| Replit | Très rapide | Plateforme intégrée | Usage/crédits | Verrouillage fort | Élevée pour greenfield |
| HF/NVIDIA | Flexible | À gérer | Outils d’évaluation et déploiement | Infra/compétences | Élevée comme plateforme |
| DeepSeek/Qwen/Kimi/GLM | API compatibles, poids | Changements rapides (V4, K3, GLM-5.2) | À construire | Prix bas, risque opérationnel/RGPD | Élevée mais support UE variable |
| Cohere/IBM | Entreprise | Contrats et versions | Gouvernance forte | Contrat/plateforme | Bonne, plutôt entreprise |

## Méthodologie

La sélection combine cinq signaux qualitatifs: adoption/présence marché 30 %, qualité/portée des modèles 25 %, maturité API/outils/agents 20 %, écosystème développeur 15 %, disponibilité et pertinence Europe/Belgique 10 %. La liste est plafonnée à exactement 20. Les entrées/sorties exigent un signal durable, pas une nouveauté isolée. Cette édition ne change pas la composition des 20 acteurs par rapport au 17 juillet; elle corrige des faits et intègre les évolutions de la fenêtre.

Les benchmarks fournisseur restent dans [analyse-detaillee.md](analyse-detaillee.md) avec protocole et avertissements. Aucun score de sources hétérogènes n’est moyenné. Les prix sont des snapshots catalogue au 22 juillet 2026; remises, contrats et taxes varient.

Contrôles effectués: 20 lignes exactes dans Vue d’ensemble; unités de prix homogènes; conversions recalculées avec S61; liens Markdown relatifs; valeurs inconnues marquées ND/à confirmer.

## Sources

Registre complet, dates et URL exactes: [sources.md](sources.md). Les prix et capacités sont issus en priorité des identifiants S01–S60; les taux et le cadre réglementaire des identifiants S61–S68.
