# Comparatif structuré — édition Belgique

Mise à jour: **31 juillet 2026** (édition précédente: 17 juillet 2026). Ce fichier remplace le classeur Excel demandé initialement: le dépôt a explicitement migré vers Markdown le 16 juillet 2026. Les « feuilles » sont les sections ci-dessous. Les références Sxx renvoient à [sources.md](sources.md). Les faits ajoutés ce cycle portent un niveau de confiance dans [sources.md] et [historique.md](historique.md); la plupart des pages officielles ont été inaccessibles à la lecture directe et sont **corroborées** par recoupement.

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
| 1 | OpenAI | Modèles + app + API + agent code | GPT-5.6 (Sol/Terra/Luna), ChatGPT, Codex | Élevée | Écosystème complet et outils | Coût frontière et verrouillage | S01–S05, S61–S62 |
| 2 | Anthropic | Modèles + app + API + agent code | Opus 5, Sonnet 5, Claude Code | Élevée | Raisonnement, code, long contexte | Prix Opus; options régionales payantes | S06–S08, S63 |
| 3 | Google | Modèles + app + API + cloud | Gemini 3.6 Flash, Gemini API | Élevée | Multimodal, 1 M, recherche | Complexité des surfaces et tarifs | S09–S11, S64 |
| 4 | Microsoft | Cloud + productivité + agents | Azure OpenAI, M365 Copilot, Copilot Studio | Très élevée | Intégration M365/Azure, identité | Licences et coûts imbriqués | S12–S14 |
| 5 | AWS | Plateforme multi-modèles + agents | Bedrock, Agents, AgentCore | Très élevée | Choix de modèles et régions | Tarification composite | S15–S17 |
| 6 | Meta | Open weight + app | Llama 4, Meta AI | Moyenne | Poids et écosystème open | Licence et disponibilité produit UE à vérifier | S18 |
| 7 | Mistral | Modèles UE + app + API | Medium 3.5, Large, Vibe | Très élevée | Acteur européen, open weight | Catalogue et licences variables | S19–S21 |
| 8 | xAI | Modèles + app + API | Grok 4.5 | Élevée | Contexte, temps réel, outils | Gouvernance et rétention à valider | S22–S24 |
| 9 | DeepSeek | Modèles + app + API + poids | DeepSeek V4 (Pro/Flash), contexte 1 M | Moyenne | Rapport coût/capacité | Région, données, disponibilité belge | S25–S26, S71 |
| 10 | Alibaba/Qwen | Modèles + cloud + poids | Qwen3.8-Max-Preview, Model Studio | Moyenne | Catalogue large, code, prix | Facturation/région et support UE | S27–S28, S72 |
| 11 | NVIDIA | Modèles + déploiement + agents | Nemotron 3, NIM, NeMo | Élevée en entreprise | Exploitation, optimisation, garde-fous | Coût infra et complexité | S29–S31 |
| 12 | Cohere | Modèles entreprise + RAG | Command A+ / North | Élevée en entreprise | RAG, multilingue, privé | Peu d’offre grand public | S32–S34 |
| 13 | IBM | Plateforme + gouvernance + modèles | watsonx.ai, Granite, governance | Élevée en entreprise | Gouvernance et hybride | Coût plateforme; écosystème plus restreint | S35–S36 |
| 14 | GitHub Copilot | Assistant et agents de code | Copilot Pro/Pro+/Max | Très élevée | IDE + GitHub + choix de modèles | Crédits variables par tâche/modèle | S37–S38 |
| 15 | Perplexity | Recherche + API | Perplexity, Sonar, Agent API | Élevée | Recherche sourcée | Pas une plateforme générale complète | S39–S40 |
| 16 | Anysphere/Cursor | Éditeur et agents de code | Cursor | Très élevée pour développeurs | UX agentique sur dépôt | Dépendance aux modèles tiers et crédits | S41–S43 |
| 17 | Replit | Création/déploiement agentique | Replit Agent | Élevée pour prototypes | De l’idée au déploiement | Coût par crédits, contrôle infra | S44 |
| 18 | Hugging Face | Hub + inference open | Hub, Providers, Endpoints | Très élevée pour open source | Portabilité et catalogue | Qualité/sécurité dépend du modèle/provider | S45–S47 |
| 19 | Moonshot/Kimi | Modèles + app + agent code | Kimi K3/K2.7, Kimi Code | Moyenne | Open weight, code, agents | Offre belge, DPA et prix officiel à confirmer | S48–S51, S60 |
| 20 | Z.AI/GLM | Modèles + API + agent code | GLM-5.2, Coding Plan | Moyenne | Code agentique et prix | Français/NL, région UE et DPA à confirmer | S52–S54 |

## Prix particuliers

Prix catalogue observés. **Conversion mise à jour: USD ÷ 1,1476 (taux BCE du 30 juillet 2026).** CNY ÷ 7,7327 conservé mais **à confirmer** (le taux EUR/CNY n’a pas pu être reconfirmé ce cycle). La colonne TVA est prudente: « checkout » signifie que l’inclusion doit être confirmée sur la facture belge.

| Offre | Prix origine | Estimation EUR HT | Estimation EUR avec 21 % si non incluse | TVA / remarque | Source |
|---|---:|---:|---:|---|---|
| GitHub Copilot Pro | 10 USD/mois | 8,71 € | 10,54 € | Checkout; 15 USD de crédits totaux annoncés | S37 |
| GitHub Copilot Pro+ | 39 USD/mois | 33,99 € | 41,13 € | Checkout; 70 USD de crédits | S37 |
| GitHub Copilot Max | 100 USD/mois | 87,14 € | 105,44 € | Checkout; 200 USD de crédits | S37 |
| Replit Core annuel | 20 USD/mois équivalent | 17,43 € | 21,09 € | 25 USD de crédits mensuels; baisse Replit Cloud au 1ᵉʳ août 2026 [S69] | S44 |
| Replit Pro annuel | 95 USD/mois équivalent | 82,78 € | 100,17 € | 100 USD de crédits | S44 |
| Z.AI Coding Lite annuel | 12,60 USD/mois | 10,98 € | 13,29 € | Promotion; checkout | S54 |
| Z.AI Coding Pro annuel | 50,40 USD/mois | 43,92 € | 53,15 € | Promotion; checkout | S54 |
| Microsoft 365 Copilot Business annuel | 15,60 EUR/utilisateur/mois | 15,60 € | 18,88 € | **À revérifier**: refonte tarifaire signalée au 1ᵉʳ juillet 2026 (Business ~21 USD/utilisateur/mois selon sources); plan M365 requis | S12, S73 |
| ChatGPT, Claude, Gemini, Mistral, Grok, Perplexity, Cursor | Voir checkout belge | ND | ND | Les pages dynamiques n’ont pas fourni un prix EUR/TVA stable lors du contrôle | S04, S19, S23, S39, S41 |

## Prix API

Prix par **1 million de jetons** sauf mention. HT et hors outils. Les prix EUR sont des estimations arrondies. « Modèle dépendant » évite de comparer un agrégateur/cloud à un modèle unique.

| Acteur / modèle représentatif | Contexte | Entrée origine | Cache origine | Sortie origine | Entrée EUR | Sortie EUR | Batch / classe | Outils / remarques | Source |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| OpenAI GPT-5.6 Sol | 1,05 M | 5 USD | 0,50 USD | 30 USD | 4,36 € | 26,14 € | Batch/Flex -50 %; Fast mode (ex-Priority) ×2 | Sol = frontière; >272 k: entrée ×2, sortie ×1,5; outils séparés | S01–S02, S61–S62 |
| OpenAI GPT-5.6 Terra (baisse 30/07) | 1,05 M | 2 USD | ND | 12 USD | 1,74 € | 10,46 € | Batch -50 % | Terra −20 % le 30/07; palier équilibré | S62 |
| OpenAI GPT-5.6 Luna (baisse 30/07) | 1,05 M | 0,20 USD | ND | 1,20 USD | 0,17 € | 1,05 € | Batch -50 % | Luna −80 % le 30/07; palier rapide/économique | S62 |
| Anthropic Claude Opus 5, API directe | 1 M | 5 USD | lecture 0,50 USD; écritures selon durée | 25 USD | 4,36 € | 21,79 € | Batch -50 % (2,50/12,50) | Même prix qu’Opus 4.8; Fast mode 10/50 USD; résidence ×1,1 | S06–S08, S63 |
| Anthropic Claude Sonnet 5 (intro) | 1 M | 2 USD | 0,20 USD | 10 USD | 1,74 € | 8,71 € | Batch 1/5 USD | Prix d’intro jusqu’au 31/08/2026, puis 3/15 USD | S07 |
| Google Gemini 3.6 Flash | 1 M | 1,50 USD | 0,15 USD + stockage | 7,50 USD | 1,31 € | 6,53 € | Batch/Flex -50 %; Priority séparé | Sortie −17 % en jetons; usage ordinateur; Search 14 USD/1 000 | S09–S10, S64 |
| Mistral Large | À confirmer par version | 2 USD | ND | 6 USD | 1,74 € | 5,23 € | Batch -50 % | Pas de changement dans la fenêtre; OCR/audio séparés | S19 |
| xAI Grok 4.5 court | 500 k | 2 USD | 0,50 USD | 6 USD | 1,74 € | 5,23 € | Batch affichable | Ouvert aux utilisateurs UE (console API); long contexte 4/1/12 USD | S22 |
| DeepSeek V4-Pro | 1 M | ~1,74 USD | ~0,014 USD hit | ~3,48 USD | 1,52 € | 3,03 € | À confirmer | chat/reasoner retirés le 24/07; bascule V4 | S25, S71 |
| DeepSeek V4-Flash | 1 M | ~0,14 USD | hit réduit | ~0,28 USD | 0,12 € | 0,24 € | À confirmer | Palier économique V4 | S71 |
| Alibaba Qwen3.8-Max-Preview | À confirmer | Préversion ~10 % du tarif | Remise cache publiée | Préversion ~10 % du tarif | ND | ND | Remise nocturne 22 h–8 h | Nouveau phare; prix/contexte exacts à confirmer | S27, S72 |
| Cohere Command A | 256 k | 2,50 USD | ND | 10 USD | 2,18 € | 8,71 € | ND | Essai 1 000 appels/mois; prod 500 RPM | S32–S34 |
| IBM Granite 4 h small | Selon modèle | 0,06 USD | ND | 0,25 USD | 0,05 € | 0,22 € | ND | Prix indicatifs, taxes exclues | S35 |
| Z.AI GLM-5.1 | 200 k | 1,40 USD | 0,26 USD | 4,40 USD | 1,22 € | 3,83 € | ND | Web search 0,01 USD/usage | S52–S53 |
| AWS Bedrock | Modèle dépendant | Modèle/région | Modèle/région | Modèle/région | — | — | Batch souvent -50 %; Flex/Priority/Reserved | RAG, guardrails, agents et calcul peuvent s’ajouter | S15–S17 |
| Microsoft Azure OpenAI | Modèle/région/déploiement | Modèle | Modèle | Modèle | — | — | Standard/provisionné | Vérifier région et devise dans calculateur | S13 |
| Meta Llama | Auto-hébergé ou provider | Coût infra/provider | — | Coût infra/provider | — | — | Selon hôte | Poids soumis à licence | S18 |
| NVIDIA Nemotron/NIM | Auto-hébergé/licence/cloud | Coût infra/licence | — | Coût infra/licence | — | — | Selon déploiement | NIM, NeMo, GPU et support | S29–S31 |
| GitHub Copilot / Cursor / Replit | Abonnement/crédits | Non comparable par jeton | — | — | — | — | Crédits/usage | Mesurer coût par tâche | S37–S44 |
| Perplexity Sonar/Agent API | Modèle et recherche | Voir grille dynamique | Selon modèle | Voir grille | — | — | Provider/modèle | Frais de recherche possibles | S39–S40 |
| Hugging Face Providers | Provider choisi | Sans majoration HF annoncée | Provider | Provider | — | — | PAYG | Routage ou clé propre; Endpoint à l’heure | S45–S47 |
| Moonshot Kimi | Version/région | Non publié de façon stable dans source officielle accessible | ND | ND | — | — | À confirmer | Poids disponibles séparément | S48–S51 |

## Capacités

Légende: **Oui** publié; **Partiel** dépend du modèle/produit; **ND** non publié assez précisément. La « mémoire » concerne l’application ou l’agent, pas le modèle brut.

| Acteur | Modalités | Outils / structuré | Web | Mémoire/RAG | Agents/orchestration | SDK | Open weight / privé | Contexte phare |
|---|---|---|---|---|---|---|---|---:|
| OpenAI | texte, image; autres modèles audio/vidéo | Oui | Oui | File search; mémoire app | Agents SDK, Codex | Python, JS, .NET, Go | gpt-oss; API managée | 1,05 M |
| Anthropic | texte, image | Oui | Outils; web selon produit | Context/caching; RAG externe | Claude Code, SDK agents | Python, TS, Java… | API/cloud; pas poids phare | 1 M |
| Google | texte, image, audio, vidéo selon modèle | Oui | Search/Maps | File search/cache | Managed agents, ADK | Python, JS, Go, Java | Gemma séparé | 1 M |
| Microsoft | Selon modèle | Oui | Bing/Copilot | Azure AI Search, Graph | Copilot Studio, Foundry | SDK Azure | Région/VNet; modèles tiers | Modèle |
| AWS | Selon catalogue | Oui | Via outils | Knowledge Bases, mémoire | Agents, multi-agent, AgentCore | SDK AWS | Modèles tiers/custom import | Modèle |
| Meta | Texte + vision selon Llama | Function calling selon stack | Externe | À construire | Frameworks tiers | Écosystème | Oui, sous licence | Modèle |
| Mistral | Texte, vision, audio, OCR | Oui | App/outils | RAG/agents Studio | Work/Vibe/agents | Python, JS | Plusieurs poids | Modèle |
| xAI | Texte/image; média via Imagine | Oui | Oui | Files/collections | Grok multi-agent | SDK/API compatible | Non pour phare | 500 k–1 M |
| DeepSeek | Texte, selon version | Partiel | App | Cache; RAG externe | Frameworks tiers | API compatible | Oui selon modèle | 1 M (V4) |
| Qwen | Texte, vision, audio selon modèle | Oui | Outils cloud | Cache/RAG cloud | Coding plan/agents | SDK/API | Oui selon modèle | Jusqu’à 1 M |
| NVIDIA | Texte/vision selon Nemotron | Oui | Externe | NeMo Retriever | NeMo Agent Toolkit | Python | Oui/privé selon licence | Modèle |
| Cohere | Texte/image selon Command | Oui | Externe | RAG, citations, rerank | North/agents | SDK | Déploiement privé | 256 k |
| IBM | Texte/vision selon catalogue | Oui | Externe | RAG | Agent Lab | SDK IBM | Granite et on-prem | Modèle |
| GitHub | Modèles multiples | Outils repo/CLI | Recherche code/web selon surface | Index dépôt/Spaces | Coding/cloud agents | Extensions/CLI | Non | Modèle choisi |
| Perplexity | Texte, fichiers selon app | API recherche | Cœur du produit | Collections | Agent API | SDK/API | Sonar managé | Modèle |
| Cursor | Modèles multiples | Terminal/MCP | Agent | Index dépôt, rules | Agents et SDK | Éditeur/CLI | Non | Modèle choisi |
| Replit | Modèles multiples | Shell, DB, déploiement | Agent | Projet | Replit Agent | Plateforme | Non | Produit |
| Hugging Face | Selon modèle | Selon provider | Externe | Hub/Endpoints | Frameworks tiers | Python/JS | Oui, cœur du Hub | Modèle |
| Kimi | Texte/vision/vidéo selon version | Oui | App/agent | Long contexte | Kimi Code + sous-agents | SDK/CLI | Oui, licence modifiée | Version |
| Z.AI | Texte/vision/audio/vidéo | Oui; web payant | Oui | À construire | GLM Code/Coding Plan | Python/Java/OpenAI | Plusieurs GLM | 200 k |

## Sécurité-RGPD

| Acteur/surface | Entraînement des données | Rétention / chiffrement | DPA / région | Appréciation Belgique |
|---|---|---|---|---|
| OpenAI API | Non par défaut, opt-in | Rétention selon endpoint; chiffrement publié | DPA et résidence EEE pour services éligibles | Bon si endpoint/région vérifiés; app grand public séparée |
| Anthropic API/Cloud | Contrat et surface à vérifier | Cache/rétention documentés par offre | DPA/résidence avec options et clouds | Solide entreprise; coût résidence à intégrer |
| Google Gemini API payant | Données payantes non utilisées pour améliorer produits selon grille | Contrôles Cloud selon surface | EEE disponible; Vertex ajoute gouvernance | Bien adapté UE via projet payant/cloud |
| Microsoft/Azure | Données entreprise non utilisées pour entraîner modèles de base selon service | Chiffrement, réseau, politiques Azure | DPA Microsoft, régions UE | Très solide si architecture Azure maîtrisée. **Nouveau (24/07): OpenAI ajouté comme sous-traitant M365 Copilot/Copilot Studio (modèles opérés par OpenAI); vérifier l’opt-out et la cartographie des données [S73]** |
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

Les benchmarks fournisseur restent dans [analyse-detaillee.md](analyse-detaillee.md) avec protocole et avertissements. Aucun score de sources hétérogènes n’est moyenné. Les prix sont des snapshots catalogue au 31 juillet 2026; remises, contrats et taxes varient.

Contrôles effectués: 20 lignes exactes dans Vue d’ensemble; unités de prix homogènes; conversions recalculées avec S55 (1 EUR = 1,1476 USD au 30/07/2026); liens Markdown relatifs; valeurs inconnues marquées ND/à confirmer. Les filtres, volets figés et formules Excel ne sont pas applicables à Markdown.

## Sources

Registre complet, dates et URL exactes: [sources.md](sources.md). Les prix et capacités sont issus en priorité des identifiants S01–S59; S60 est la seule source indépendante retenue pour un signal de marché très récent.
