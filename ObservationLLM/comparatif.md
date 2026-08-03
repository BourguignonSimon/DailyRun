# Comparatif structuré — édition Belgique

Mise à jour : **3 août 2026** (édition précédente : 17 juillet 2026). Les « feuilles » sont les sections ci-dessous. Les références Sxx renvoient à [sources.md](sources.md). Les prix sont des snapshots catalogue ; sur cette exécution, l’accès direct aux grilles officielles a été majoritairement bloqué (voir [sources.md](sources.md)), donc plusieurs tarifs reposent sur des extraits officiels recoupés par des sources secondaires et sont signalés « [sec.] ».

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
| 2 | Anthropic | Modèles + app + API + agent code | Opus 5, Sonnet 5, Claude Code | Élevée | Raisonnement, code, long contexte | Prix haut de gamme ; résidence payante | S06–S08, S75 |
| 3 | Google | Modèles + app + API + cloud | Gemini 3.6 Flash, Gemini 3.1 Pro, Gemini API | Élevée | Multimodal, 1 M, recherche | Complexité des surfaces et tarifs | S09–S11, S64 |
| 4 | Microsoft | Cloud + productivité + agents | Azure OpenAI, M365 Copilot, Copilot Studio | Très élevée | Intégration M365/Azure, identité | Licences et coûts imbriqués | S12–S14 |
| 5 | AWS | Plateforme multi-modèles + agents | Bedrock, Agents, AgentCore | Très élevée | Choix de modèles et régions | Tarification composite | S15–S17, S65–S66 |
| 6 | Meta | Open weight + app | Llama 4 Scout/Maverick, Meta AI | Moyenne | Poids et écosystème open | Licence et disponibilité produit UE à vérifier | S18 |
| 7 | Mistral | Modèles UE + app + API | Medium 3.5, Large, Large 3 (ouvert), Le Chat | Très élevée | Acteur européen, open weight | Catalogue et licences variables | S19–S21 |
| 8 | xAI | Modèles + app + API | Grok 4.5 | Élevée | Contexte, temps réel, outils | Gouvernance et rétention à valider | S22–S24 |
| 9 | DeepSeek | Modèles + app + API + poids | DeepSeek V4-Flash | Moyenne | Rapport coût/capacité | Non conforme RGPD sur l’API directe | S25–S26, S67 |
| 10 | Alibaba/Qwen | Modèles + cloud + poids | Qwen3.7-Max, Qwen3.8-Max (préversion), Model Studio | Moyenne | Catalogue large, code, prix | Facturation/région et support UE | S27–S28, S68 |
| 11 | NVIDIA | Modèles + déploiement + agents | Nemotron 3, NIM, NeMo Agent Toolkit | Élevée en entreprise | Exploitation, optimisation, garde-fous | Coût infra et complexité | S29–S31, S69 |
| 12 | Cohere | Modèles entreprise + RAG | Command A+ / North | Élevée en entreprise | RAG, multilingue, privé | Peu d’offre grand public | S32–S34 |
| 13 | IBM | Plateforme + gouvernance + modèles | watsonx.ai, Granite 4.1, governance | Élevée en entreprise | Gouvernance et hybride | Coût plateforme ; écosystème plus restreint | S35–S36 |
| 14 | GitHub Copilot | Assistant et agents de code | Copilot Pro/Pro+/Max | Très élevée | IDE + GitHub + choix de modèles | Crédits variables par tâche/modèle | S37–S38, S73 |
| 15 | Perplexity | Recherche + API | Perplexity, Sonar, Agent API | Élevée | Recherche sourcée | Pas une plateforme générale complète | S39–S40 |
| 16 | Anysphere/Cursor | Éditeur et agents de code | Cursor (+ Router) | Très élevée pour développeurs | UX agentique sur dépôt | Dépendance aux modèles tiers et crédits | S41–S43, S70 |
| 17 | Replit | Création/déploiement agentique | Replit Agent 4 | Élevée pour prototypes | De l’idée au déploiement | Coût par crédits, contrôle infra | S44, S71 |
| 18 | Hugging Face | Hub + inference open | Hub, Providers, Endpoints | Très élevée pour open source | Portabilité et catalogue | Qualité/sécurité dépend du modèle/provider | S45–S47 |
| 19 | Moonshot/Kimi | Modèles + app + agent code | Kimi K3 (poids ouverts), K2.7-Code, Kimi Code | Moyenne | Open weight ~3 T, code, agents | Offre belge, DPA et données en Chine | S48–S51, S60, S72 |
| 20 | Z.AI/GLM | Modèles + API + agent code | GLM-5.2, Coding Plan | Moyenne | Code agentique et prix | Français/NL, région UE et DPA à confirmer | S52–S54 |

## Prix particuliers

Prix catalogue observés. Conversion : USD ÷ **1,1485** (BCE 31 juillet 2026 [S55]). La colonne TVA est prudente : « checkout » signifie que l’inclusion doit être confirmée sur la facture belge.

| Offre | Prix origine | Estimation EUR HT | Estimation EUR avec 21 % si non incluse | TVA / remarque | Source |
|---|---:|---:|---:|---|---|
| GitHub Copilot Pro | 10 USD/mois | 8,71 € | 10,53 € | Checkout ; +15 USD de crédits IA/mois | S37 |
| GitHub Copilot Pro+ | 39 USD/mois | 33,96 € | 41,09 € | Checkout ; +70 USD de crédits | S37 |
| GitHub Copilot Max | 100 USD/mois | 87,07 € | 105,36 € | Checkout ; +200 USD de crédits | S37 |
| Replit Core | 20 USD/mois | 17,41 € | 21,07 € | ~20 USD de crédits mensuels (baissé depuis 25) | S44, S71 |
| Replit Pro | 100 USD/mois | 87,07 € | 105,36 € | Crédits par paliers ; jusqu’à 15 builders | S44 |
| Z.AI GLM Coding (Lite) | « à partir de 18 USD/mois » [sec.] | 15,67 € | 18,96 € | Prix d’entrée annoncé ; checkout ; à confirmer | S54 |
| Microsoft 365 Copilot (add-on Business) | 18,00 USD/utilisateur/mois (promo, ex-21) | 15,67 € | 18,96 € | Promo jusqu’au 30-09-2026 (US) ; plan M365 requis | S12 |
| ChatGPT, Claude, Gemini, Mistral, Grok, Perplexity, Cursor | Voir checkout belge | ND | ND | Pages dynamiques : pas de prix EUR/TVA stable au contrôle (accès direct bloqué) | S04, S19, S39, S41 |

## Prix API

Prix par **1 million de jetons** sauf mention. HT et hors outils. Les prix EUR sont des estimations arrondies (÷ 1,1485). « Modèle dépendant » évite de comparer un agrégateur/cloud à un modèle unique. « [sec.] » = tarif reposant sur des sources secondaires (accès direct bloqué cette exécution).

| Acteur / modèle représentatif | Contexte | Entrée origine | Cache origine | Sortie origine | Entrée EUR | Sortie EUR | Batch / classe | Outils / remarques | Source |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| OpenAI GPT-5.6 Sol | 1,05 M | 5 USD | ND [sec.] | 30 USD | 4,35 € | 26,12 € | Batch -50 % ; Priority | >272 k : entrée ×2, sortie ×1,5 ; résidence UE +10 % | S01–S02, S62 |
| OpenAI GPT-5.6 Terra | 1,05 M | 2 USD [sec.] | ND | 12 USD [sec.] | 1,74 € | 10,45 € | Batch -50 % | Baisse -20 % le 30-07-2026 | S61 |
| OpenAI GPT-5.6 Luna | 1,05 M | 0,20 USD [sec.] | ND | 1,20 USD [sec.] | 0,17 € | 1,04 € | Batch -50 % | Baisse -80 % le 30-07-2026 | S61 |
| Anthropic Claude Opus 5, API directe | 1 M | 5 USD | lecture 0,50 USD | 25 USD | 4,35 € | 21,77 € | Batch -50 % (2,50/12,50) | Résidence « us » ×1,1 ; mode Fast en option | S06–S08 |
| Anthropic Claude Sonnet 5 | 1 M | 2 USD (intro) | 0,20 USD | 10 USD (intro) | 1,74 € | 8,71 € | Batch -50 % | Passe à 3/15 USD le 01-09-2026 | S06–S08 |
| Google Gemini 3.6 Flash | 1 M | 1,50 USD | 0,15 USD + stockage | 7,50 USD | 1,31 € | 6,53 € | Batch/Flex ; Priority | Sortie abaissée depuis 9 USD ; search/agents séparés | S09–S10, S64 |
| Google Gemini 3.1 Pro | 1 M | 2 USD [sec.] | ND | 12 USD [sec.] | 1,74 € | 10,45 € | Batch/Flex | >200 k : 4/18 USD ; payant uniquement | S09 |
| Mistral Large | À confirmer par version | 2 USD | ND | 6 USD | 1,74 € | 5,22 € | Batch -50 % | OCR, audio et autres outils séparés ; facturation EUR | S19 |
| Mistral Medium 3.5 | 256 k | 1,50 USD [sec.] | ND | 7,50 USD [sec.] | 1,31 € | 6,53 € | Batch -50 % | Agents/code ; `reasoning_effort` | S19–S20 |
| xAI Grok 4.5 court | 500 k | 2 USD | 0,30 USD | 6 USD | 1,74 € | 5,22 € | Batch affichable | Long contexte (>200 k) 4/12 USD ; recherche ~5 USD/1 000 | S22 |
| DeepSeek V4-Flash | ~1 M | 0,14 USD [sec.] | 0,0028 USD hit | 0,28 USD [sec.] | 0,12 € | 0,24 € | À confirmer | GA 31-07-2026 ; heures pleines/creuses annoncées (non actives) | S25–S26, S67 |
| Alibaba Qwen3.7-Max | Jusqu’à 1 M | 1,25 USD (promo) [sec.] | remise cache | 3,75 USD (promo) [sec.] | 1,09 € | 3,26 € | Promotions variables | Liste ≈ 2,50/7,50 ; régions global/US/Chine | S27 |
| Cohere Command A | 256 k | 2,50 USD [sec.] | ND | 10 USD [sec.] | 2,18 € | 8,71 € | ND | Command A+ : pas de tarif public (privé/entreprise) | S32–S34 |
| IBM Granite 4.1 h small | Selon modèle | 0,06 USD [sec.] | ND | 0,25 USD [sec.] | 0,05 € | 0,22 € | ND | Facturation en Resource Units ; taxes exclues | S35 |
| Z.AI GLM-5.2 | 1 M | 1,40 USD [sec.] | 0,26 USD | 4,40 USD [sec.] | 1,22 € | 3,83 € | Heures creuses ×0,5 | Web search facturé à l’usage ; pas de surcoût long contexte | S52–S53 |
| Moonshot Kimi K3 | 1 M | 3 USD [sec.] | 0,30 USD hit | 15 USD [sec.] | 2,61 € | 13,06 € | À confirmer | Poids ouverts ; licence « Kimi K3 License » ; données API en Chine | S50, S72 |
| AWS Bedrock | Modèle dépendant | Modèle/région | Modèle/région | Modèle/région | — | — | Batch -50 % ; Flex/Priority/Reserved | Répercute les baisses GPT-5.6 ; RAG, guardrails, agents en sus | S15–S17, S65 |
| Microsoft Azure OpenAI | Modèle/région/déploiement | Modèle | Modèle | Modèle | — | — | Standard/provisionné | Vérifier région et devise dans calculateur | S13 |
| Meta Llama 4 | Auto-hébergé ou provider | Coût infra/provider | — | Coût infra/provider | — | — | Selon hôte | Poids sous Llama 4 Community License | S18 |
| NVIDIA Nemotron/NIM | Auto-hébergé/licence/cloud | Coût infra/licence | — | Coût infra/licence | — | — | Selon déploiement | NIM, NeMo Agent Toolkit, GPU et support | S29–S31 |
| GitHub Copilot / Cursor / Replit | Abonnement/crédits | Non comparable par jeton | — | — | — | — | Crédits/usage | Mesurer coût par tâche ; crédits IA 1 = 0,01 USD (GitHub) | S37–S44 |
| Perplexity Sonar/Agent API | Modèle et recherche | Voir grille dynamique | Selon modèle | Voir grille | — | — | Provider/modèle | Sonar Pro 3/15 USD ; frais de recherche par requête | S39–S40 |
| Hugging Face Providers | Provider choisi | Sans majoration HF annoncée | Provider | Provider | — | — | PAYG | Routage ou clé propre ; Endpoint à l’heure | S45–S47 |

## Capacités

Légende : **Oui** publié ; **Partiel** dépend du modèle/produit ; **ND** non publié assez précisément. La « mémoire » concerne l’application ou l’agent, pas le modèle brut.

| Acteur | Modalités | Outils / structuré | Web | Mémoire/RAG | Agents/orchestration | SDK | Open weight / privé | Contexte phare |
|---|---|---|---|---|---|---|---|---:|
| OpenAI | texte, image ; audio/vidéo autres modèles | Oui | Oui | File search ; mémoire app | Agents SDK, Codex | Python, JS, .NET, Go | gpt-oss ; API managée | 1,05 M |
| Anthropic | texte, image | Oui | Outils ; web selon produit | Context/caching ; RAG externe | Claude Code, SDK agents | Python, TS, Java… | API/cloud ; pas de poids phare | 1 M |
| Google | texte, image, audio, vidéo selon modèle | Oui | Search/Maps | File search/cache | Managed agents, ADK | Python, JS, Go, Java | Gemma séparé | 1 M |
| Microsoft | Selon modèle | Oui | Bing/Copilot | Azure AI Search, Graph | Copilot Studio, Foundry | SDK Azure | Région/VNet ; modèles tiers | Modèle |
| AWS | Selon catalogue | Oui | Via outils | Knowledge Bases, mémoire | Agents, multi-agent, AgentCore | SDK AWS | Modèles tiers/import custom | Modèle |
| Meta | Texte + vision (Llama 4 MoE) | Function calling selon stack | Externe | À construire | Frameworks tiers | Écosystème | Oui, sous licence | ~10 M (Scout) |
| Mistral | Texte, vision, audio, OCR | Oui | App/outils | RAG/agents Studio | Le Chat/agents | Python, JS | Plusieurs poids (Apache-2.0) | 256 k |
| xAI | Texte/image ; média via Imagine | Oui | Oui | Files/collections | Grok multi-agent | SDK/API compatible | Non pour phare | 500 k |
| DeepSeek | Texte, selon version | Partiel | App | Cache ; RAG externe | Frameworks tiers | API compatible | Oui (V4-Flash) | ~1 M |
| Qwen | Texte, vision, audio selon modèle | Oui | Outils cloud | Cache/RAG cloud | Coding plan/agents | SDK/API | Oui selon modèle | Jusqu’à 1 M |
| NVIDIA | Texte/vision selon Nemotron | Oui | Externe | NeMo Retriever | NeMo Agent Toolkit | Python | Oui/privé selon licence | 1 M (Nano) |
| Cohere | Texte/image selon Command | Oui | Externe | RAG, citations, rerank | North/agents | SDK | Déploiement privé | 128 k–256 k (à confirmer) |
| IBM | Texte/vision selon catalogue | Oui | Externe | RAG | Agent Lab | SDK IBM | Granite 4.1 et on-prem | ~512 k |
| GitHub | Modèles multiples | Outils repo/CLI | Recherche code/web selon surface | Index dépôt/Spaces | Coding/cloud agents | Extensions/CLI | Non | Modèle choisi |
| Perplexity | Texte, fichiers selon app | API recherche | Cœur du produit | Collections | Agent API | SDK/API | Sonar managé | Modèle |
| Cursor | Modèles multiples | Terminal/MCP | Agent + Router | Index dépôt, rules | Agents et SDK | Éditeur/CLI | Non | Modèle choisi |
| Replit | Modèles multiples | Shell, DB, déploiement | Agent | Projet | Replit Agent 4 | Plateforme | Non | Produit |
| Hugging Face | Selon modèle | Selon provider | Externe | Hub/Endpoints | Frameworks tiers | Python/JS | Oui, cœur du Hub | Modèle |
| Kimi | Texte/image/vidéo (K3 multimodal) | Oui | App/agent | Long contexte | Kimi Code + sous-agents | SDK/CLI | Oui (poids K3 ouverts) | 1 M |
| Z.AI | Texte/vision/audio/vidéo | Oui ; web payant | Oui | À construire | GLM Code/Coding Plan | Python/Java/OpenAI | Plusieurs GLM | 1 M |

## Sécurité-RGPD

| Acteur/surface | Entraînement des données | Rétention / chiffrement | DPA / région | Appréciation Belgique |
|---|---|---|---|---|
| OpenAI API | Non par défaut, opt-in | Rétention selon endpoint ; chiffrement publié | DPA et résidence EEE pour services éligibles (+10 % modèles récents) | Bon si endpoint/région vérifiés ; app grand public séparée |
| Anthropic API/Cloud | Contrat et surface à vérifier | Cache/rétention documentés par offre | DPA/résidence ; `inference_geo` « us » ×1,1 | Solide entreprise ; coût résidence à intégrer |
| Google Gemini API payant | Données payantes non utilisées pour améliorer les produits selon la grille | Contrôles Cloud selon surface | EEE disponible ; Vertex ajoute gouvernance | Bien adapté UE via projet payant/cloud |
| Microsoft/Azure | Données entreprise non utilisées pour entraîner les modèles de base selon service | Chiffrement, réseau, politiques Azure ; EU Data Zones | DPA Microsoft, régions UE | Très solide si architecture Azure maîtrisée |
| AWS Bedrock | Isolation service publiée ; vérifier chaque provider | KMS/VPC/logs configurables | DPA AWS, régions UE (Francfort, Irlande, Paris) | Solide, responsabilité de configuration élevée |
| Mistral | Opt-out indiqué selon offre | À vérifier par plan | Acteur UE, déploiements privés, docs FR | Avantage juridiction/région, pas conformité automatique |
| GitHub Copilot | Individuel : opt-out ; Business/Enterprise : pas d’entraînement | IDE B/E prompts non retenus ; autres surfaces jusqu’à 28 jours | DPA, contrôles organisation | Bon avec plan entreprise et politiques |
| Cursor Privacy Mode | Pas d’entraînement | ZDR providers ; chiffrement ; exceptions abus | Contrôles équipe, SOC 2 annoncé | Activer et imposer Privacy Mode ; Router n’y change rien |
| Hugging Face Endpoints | Payloads non stockés annoncés | Logs 30 jours ; TLS ; SOC 2 Type 2 | DPA Enterprise ; eu-west-1, PrivateLink | Bon pour open/privé après choix de région |
| DeepSeek (API directe) | Informations UE insuffisantes | À confirmer | Pas de SCC UE→Chine documentées ; interdiction Garante (IT) | **Non conforme RGPD sur l’API directe** ; préférer hébergement UE des poids |
| Qwen / Kimi / GLM grand public/API | Informations UE insuffisantes | À confirmer | DPA/région UE non confirmés (Kimi : données en Chine ; GLM : Singapour) | Ne pas envoyer de données personnelles/confidentielles avant validation |
| Meta/xAI/Perplexity/Replit/NVIDIA/Cohere/IBM | Dépend du produit et contrat | Dépend de la surface | Contrôles entreprise variables ; Cohere/NVIDIA fort en privé/on-prem | Exiger DPA, région, sous-traitants et rétention écrits |

## Développement

| Écosystème | Intégration | Versioning/stabilité | Évaluations/observabilité | Coût/verrouillage | Maturité agents code |
|---|---|---|---|---|---|
| OpenAI | Excellente | Snapshots ; API v1 | Evals, traces agents | Moyen/élevé ; propriétaire | Très élevée |
| Anthropic | Excellente | IDs datés et dépréciations | Outils d’éval + intégrations | Élevé sur Opus | Très élevée |
| Google | Excellente | Previews à surveiller | Vertex/AI Studio | Faible à moyen ; cloud | Élevée |
| Azure/AWS | Excellente mais complexe | Gouverné par modèle/région | Cloud-native | Verrouillage cloud | Très élevée |
| Mistral | Bonne | Versions datées | Studio/observabilité à évaluer | Modéré ; poids disponibles | Élevée |
| GitHub/Cursor | UX excellente | Produit évolue vite (ex. Router) | Analytics selon plan | Crédits et dépendances modèles | Très élevée |
| Replit | Très rapide | Plateforme intégrée | Usage/crédits | Verrouillage fort | Élevée pour greenfield |
| HF/NVIDIA | Flexible | À gérer | Outils d’évaluation et déploiement | Infra/compétences | Élevée comme plateforme |
| DeepSeek/Qwen/Kimi/GLM | API compatibles, poids | Changements rapides (ex. alias DeepSeek retirés) | À construire | Prix bas, risque opérationnel | Élevée mais support UE variable |
| Cohere/IBM | Entreprise | Contrats et versions | Gouvernance forte | Contrat/plateforme | Bonne, plutôt entreprise |

## Méthodologie

La sélection combine cinq signaux qualitatifs : adoption/présence marché 30 %, qualité/portée des modèles 25 %, maturité API/outils/agents 20 %, écosystème développeur 15 %, disponibilité et pertinence Europe/Belgique 10 %. La liste est plafonnée à exactement 20. Une sortie exige un signal durable supérieur à l’acteur remplacé ; une nouveauté seule ne suffit pas. Aucun changement de composition n’a été justifié cette édition.

Les benchmarks fournisseur restent dans [analyse-detaillee.md](analyse-detaillee.md) avec protocole et avertissements. Aucun score de sources hétérogènes n’est moyenné. Les prix sont des snapshots catalogue au 3 août 2026 ; remises, contrats et taxes varient.

Contrôles effectués : 20 lignes exactes dans Vue d’ensemble ; unités de prix homogènes ; conversions recalculées avec S55 (1,1485) ; liens Markdown relatifs ; valeurs inconnues marquées ND/à confirmer ; tarifs non lus sur grille officielle marqués « [sec.] » en raison du blocage d’accès direct de cette exécution.

## Sources

Registre complet, dates et URL exactes : [sources.md](sources.md). Les prix et capacités sont issus en priorité des identifiants S01–S59 et des ajouts S61–S75 ; S60, S67, S68 et S75 sont des sources indépendantes retenues pour des signaux de marché très récents.
