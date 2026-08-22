# Sources de référence et indices de confiance

Contrôle : **22 août 2026**. Ce référentiel rassemble les URL de base à privilégier à chaque recherche quotidienne. L’indice mesure l’aptitude de la source à établir les sujets indiqués ; il ne constitue pas une note universelle de vérité.

> **Accessibilité mesurée le 22 août 2026.** Les **55 sources du référentiel ont été retestées une à une** depuis l’environnement d’exécution : **six répondent pleinement** — R02 (documentation de la plateforme Claude), R53 (documentation de Claude Code), R38 (PyPI), R39 (API du registre npm), R40 (blog du Model Context Protocol) et R55 (API GitHub, métadonnées) — **deux répondent partiellement** — R54 (contenu brut des dépôts publics GitHub, accessible par chemin de fichier complet mais renvoyant 400 sur l’hôte nu) et R30 (pages de publications sur `github.com`, refusées en HTTP mais dont les métadonnées restent atteignables par l’API GitHub) — et **quarante-sept sont refusées** au tunnel CONNECT du mandataire, qui répond 403 à la requête CONNECT, dont la totalité des six points d’entrée de veille quotidienne obligatoires. À noter que `cloud.google.com` reste refusé sur le chemin de documentation `/vertex-ai/generative-ai/docs/` enregistré pour R04, alors que la **page tarifaire** de l’IA générative s’ouvre et a servi de preuve primaire à ce contrôle. Douzième contrôle consécutif au même profil général : c’est une caractéristique stable de l’environnement, pas un incident.
>
> **Portée et limites des huit canaux primaires.** R02 porte le fait dominant du jour : ses **notes de version** datent au 19 août 2026 la disponibilité générale des API **Files** et **Skills**, celle des endpoints de gestion des utilisateurs de l’Admin API, la restriction de domaines des outils web des agents gérés, la mémoire attachable en bac à sable auto-hébergé et la refonte de la visionneuse de sessions ; sa **documentation de l’API Files** confirme séparément l’abandon de l’en-tête bêta et détaille la double lecture selon que l’en-tête est envoyé ou non ; sa page tarifaire répète que la hausse de Claude Sonnet 5 n’aura pas lieu. **R04, ouvert pour le quatrième run consécutif**, a établi la grille tarifaire de Google Cloud et permis d’en **établir la tarification régionale des modèles Claude** : la section « Anthropic’s Claude models », intitulée « Models with regional pricing », publie deux tables des mêmes modèles — une table Global (Claude Sonnet 5 à 2,00/10,00 USD/M) et une table régionale non globale à +10 % (2,20/11,00), couvrant EU Multi-Region et `europe-west1`. Cette lecture corrige celle du run précédent, qui n’avait repéré que la première table et conclu à tort à l’absence de prime régionale pour Claude. R38 a établi la version majeure 1.0.0 du SDK Python d’Anthropic et son horodatage ; R54 et R39 ont établi Claude Code 2.1.238 et ses horodatages ; R54 seul, le journal du SDK TypeScript resté en 0.120.0. R38 et R39 ont par ailleurs servi à contrôler cinquante-trois paquets du catalogue d’outils. R40 n’a **aucune publication nouvelle** depuis le 28 juillet. Limite de R54 : elle donne accès aux **fichiers versionnés** d’un dépôt, non aux publications de version, tickets ou discussions — c’est pourquoi **R30 reste hors d’atteinte** malgré R54. Limite de R04 : seules les pages tarifaires répondent, la documentation de résidence demeure refusée. Limite de R38 et R39 : un registre prouve qu’une version existe et à quelle date, jamais ce qu’elle change.
> **Angles morts restants.** `huggingface.co` et `modelscope.cn` sont refusés : aucun fichier de licence de poids ouverts n’est lisible à la source. Les pages tarifaires d’OpenAI et de DeepSeek sont refusées : la grille heures pleines / heures creuses de DeepSeek reste établie par convergence seule. **Un angle mort est levé à ce contrôle** — le tarif du palier de service différé de Google Cloud, non publié jusqu’ici, est désormais établi en source primaire — mais il ne l’est qu’à moitié : `docs.cloud.google.com` reste refusé et la **résidence de l’inférence, du stockage et des journaux** sur Google Cloud demeure non revérifiée.
>
> **Promotions `trustedDaily` — état au 19 août 2026.** Aucune promotion ni rétrogradation. La revue structurelle hebdomadaire a eu lieu le 17 août pour la semaine ISO 2026-W34 ; la prochaine est due le 24 août. Les faits notés au-dessus de 90/100 à ce contrôle proviennent tous de pages tarifaires, de documentation ou de journaux de version officiels ouverts directement, et non de posts sociaux corroborés : la règle de promotion, qui exige qu’un post de compte officiel atteigne 90/100 par corroboration primaire durable, n’a été déclenchée par aucun compte. Les promotions existantes (R18, R20, R21, R22, R31) sont maintenues, leurs critères restant remplis.

## Barème

- **90–100 — forte** : source primaire ou institutionnelle directement responsable de l’information.
- **75–89 — complémentaire solide** : source indépendante avec méthodologie publiée, à corroborer pour les faits contractuels.
- **Moins de 75 — prudence** : piste utile, mais preuve primaire requise avant publication certaine.

## Référentiel commun

| ID | Acteur | Source | Nature | Sujets de référence | Confiance | Accès au dernier contrôle |
|---|---|---|---|---|---:|---|
| R01 | OpenAI | [Platform documentation](https://platform.openai.com/docs/) | Primaire | API, modèles, données, résidence | 98/100 | Direct ou index |
| R02 | Anthropic | [Platform documentation](https://platform.claude.com/docs/) | Primaire | API, prix, cache, résidence | 98/100 | Index |
| R03 | Google | [Gemini API documentation](https://ai.google.dev/gemini-api/docs/) | Primaire | API, modèles, facturation, EEE | 98/100 | Index |
| R04 | Google Cloud | [IA générative sur Agent Platform, ex-Vertex AI](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing) | Primaire | Régions, déploiement, sécurité, modèles, prix | 98/100 | Partiel — page tarifaire ouverte le 18 août ; `docs.cloud.google.com` refusé. Accessibilité variable d’un run à l’autre, à retester à chaque contrôle |
| R05 | Microsoft | [Azure AI Foundry](https://learn.microsoft.com/azure/ai-foundry/) | Primaire | Modèles, régions, déploiement, sécurité | 98/100 | Index |
| R06 | AWS | [Amazon Bedrock documentation](https://docs.aws.amazon.com/bedrock/) | Primaire | Modèles, régions, agents, sécurité | 98/100 | Index |
| R07 | Mistral AI | [Documentation](https://docs.mistral.ai/) | Primaire | Modèles, API, déploiement, cartes modèles | 98/100 | Index |
| R08 | Hugging Face | [Documentation](https://huggingface.co/docs/) | Primaire | Hub, endpoints, régions, inférence | 96/100 | Index |
| R09 | GitHub | [Documentation](https://docs.github.com/) | Primaire | Copilot, sécurité, facturation, agents | 97/100 | Index |
| R10 | xAI | [Documentation](https://docs.x.ai/) | Primaire | API, modèles, prix, outils | 96/100 | Index |
| R11 | DeepSeek | [API documentation](https://api-docs.deepseek.com/) | Primaire | API, modèles, prix, cache | 95/100 | Index |
| R12 | NVIDIA | [AI Enterprise documentation](https://docs.nvidia.com/ai-enterprise/) | Primaire | NIM, NeMo, déploiement, modèles | 96/100 | Index |
| R13 | Cohere | [Documentation](https://docs.cohere.com/) | Primaire | API, Command, Embed, Rerank | 96/100 | Index |
| R14 | IBM | [watsonx documentation](https://www.ibm.com/docs/en/watsonx/) | Primaire | Granite, watsonx, déploiement, gouvernance | 96/100 | Index |
| R15 | BCE | [Taux de référence de l’euro](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/) | Institutionnelle | Conversion monétaire | 99/100 | Index |
| R16 | Indépendant | [Artificial Analysis](https://artificialanalysis.ai/) | Secondaire | Latence, prix, benchmarks comparables | 78/100 | Variable |
| R17 | OpenAI | [@OpenAI](https://x.com/OpenAI) | Flux X officiel | Annonces, modèles, produits | 82/100 | Public, indexation variable |
| R18 | Anthropic | [@AnthropicAI](https://x.com/AnthropicAI) | Flux X officiel — **veille quotidienne prioritaire** | Annonces, Claude, recherche, prix | 82/100 | Public, indexation variable |
| R19 | Google DeepMind | [@GoogleDeepMind](https://x.com/GoogleDeepMind) | Flux X officiel | Recherche, Gemini, modèles | 82/100 | Public, indexation variable |
| R20 | Meta | [@AIatMeta](https://x.com/AIatMeta) | Flux X officiel | Recherche, modèles ouverts, Meta AI | 82/100 | Public, indexation variable |
| R21 | Mistral AI | [@MistralAI](https://x.com/MistralAI) | Flux X officiel | Annonces, modèles, produits | 82/100 | Public, indexation variable |
| R22 | NVIDIA | [@nvidia](https://x.com/nvidia) | Flux X officiel | Modèles, infrastructure, produits | 80/100 | Public, indexation variable |
| R23 | Alibaba / Qwen | [@Alibaba_Qwen](https://x.com/Alibaba_Qwen) | Flux X officiel | Qwen, modèles, poids | 80/100 | Public, indexation variable |
| R24 | Hugging Face | [@huggingface](https://x.com/huggingface) | Flux X officiel | Modèles, dépôts, communauté | 78/100 | Public, indexation variable |
| R25 | X | [X API](https://docs.x.com/x-api/overview) | Documentation primaire | Recherche de posts, flux filtré, conformité | 96/100 | API payante selon endpoint |
| R26 | GitHub | [Changelog RSS](https://github.blog/changelog/feed/) | Flux RSS officiel | Copilot, agents, modèles, dépréciations | 96/100 | Public |
| R27 | GitHub | [Changelog](https://github.blog/changelog/) | Changelog officiel | Copilot, agents, tarification, retraits | 97/100 | Public |
| R28 | Hugging Face | [Daily Papers](https://huggingface.co/papers) | Veille recherche | Articles, tendances, agents, modèles | 72/100 | Public |
| R29 | arXiv | [cs.CL recent](https://arxiv.org/list/cs.CL/recent) | Prépublications | NLP, LLM, évaluations, méthodes | 68/100 | Public |
| R30 | MCP | [GitHub Releases](https://github.com/modelcontextprotocol/modelcontextprotocol/releases) | Releases officielles | Spécification, SDK, versions, migration | 97/100 | Public |
| R31 | GitHub | [@ghchangelog](https://x.com/ghchangelog) | Flux X officiel | Copilot, agents, modèles, dépréciations | 86/100 | Public, indexation variable |
| R32 | TLDR | [TLDR AI](https://tldr.tech/ai/) | Newsletter de veille | Actualités IA, recherche, outils, lancements | 76/100 | Public, numéro daté |
| R33 | TechCrunch | [TechCrunch AI](https://techcrunch.com/category/artificial-intelligence/) | Presse technologique | Entreprises, produits, financement, régulation | 82/100 | Public, accès variable |
| R34 | VentureBeat | [VentureBeat AI](https://venturebeat.com/category/ai/) | Presse technologique | IA d’entreprise, agents, modèles, infrastructure | 80/100 | Public, accès variable |
| R35 | TestingCatalog | [TestingCatalog](https://www.testingcatalog.com/) | Veille produit et rumeurs | Tests, fonctionnalités en préparation, lancements, rumeurs | 66/100 | Public |
| R36 | AI Frontiers | [AI Frontiers Newsletter](https://newsletter.ai-frontiers.org/) | Newsletter d’analyse | Impacts, sécurité, gouvernance, recherche | 74/100 | Public, redirection possible |
| R37 | NVIDIA | [NVIDIA Research](https://research.nvidia.com/) | Recherche officielle fournisseur | Publications, modèles, agents, IA efficace, robotique | 96/100 | Public |

Pour TLDR AI, le run construit l’URL du numéro avec le modèle `https://tldr.tech/ai/YYYY-MM-DD` et la date du jour. TechCrunch, VentureBeat, TLDR AI et AI Frontiers servent à découvrir ou contextualiser des sujets avant retour à la source originale. TestingCatalog est explicitement un signal précoce : toute fuite, fonctionnalité en préparation ou rumeur reste **à confirmer**. NVIDIA Research est primaire pour les travaux de NVIDIA, sans transformer un résultat fournisseur non reproduit en mesure indépendante.

| R45 | Decrypt | [Decrypt — rubrique IA](https://decrypt.co/) | Secondaire | annonces, modèles, écosystème chinois | 72/100 | Index |
| R46 | MarkTechPost | [MarkTechPost](https://www.marktechpost.com/) | Secondaire | modèles, caractéristiques techniques, publications de recherche | 70/100 | Index |
| R47 | Unite.AI | [Unite.AI](https://www.unite.ai/) | Secondaire | modèles, analyse sectorielle | 70/100 | Index |
| R48 | Simon Willison | [Simon Willison — blog et notes datées](https://simonwillison.net/) | Secondaire | modèles, poids ouverts, outillage développeur | 78/100 | Index |
| R49 | Google | [Google DeepMind — cartes modèles](https://deepmind.google/models/model-cards/) | Primaire | modèles, capacités déclarées, coupure de connaissances | 97/100 | Index |
| R50 | Multiples | [Agrégateurs d’état de service (StatusGator, IncidentHub)](https://incidenthub.cloud/) | Secondaire | incidents, disponibilité | 74/100 | Index |
| R51 | Future of Life Institute | [Suivi de l’AI Act européen](https://artificialintelligenceact.eu/) | Secondaire | AI Act, obligations GPAI, calendrier réglementaire | 76/100 | Index |
| R52 | Bloomberg | [Bloomberg](https://www.bloomberg.com/) | Secondaire | opérations financières, acquisitions | 80/100 | Index |

### Accessibilité mesurée au 15 août 2026

Les **44 sources historiques** de ce référentiel ont été retestées une à une depuis l’environnement d’exécution : **4 répondent** — `platform.claude.com` (R02), `pypi.org` (R38), `registry.npmjs.org` (R39) et `blog.modelcontextprotocol.io` (R40) — et **40 sont refusées au tunnel CONNECT du mandataire**, dont la totalité des six points d’entrée de veille quotidienne obligatoires (R32 à R37). Un domaine ouvrable au contrôle précédent ne l’est plus qu’en partie : `cloud.google.com` (R04), dont la racine répond mais dont les chemins de documentation Vertex AI échouent. À l’inverse, **`api.github.com` n’est pas bloqué** : le refus 403 observé sur des dépôts tiers vient de la restriction de périmètre de dépôt de la session, pas de la politique réseau, et l’API GitHub reste une voie de preuve primaire pour les dépôts en périmètre. La colonne « Accès au dernier contrôle » reflète le dernier résultat connu et non ce test ; le résultat par source, daté, est tenu dans `dashboard/data/source-registry.json`.

Les **huit sources ajoutées à ce contrôle** (R45 à R52) ont été atteintes **via la recherche web indexée** et non en accès direct. Elles servent à corroborer, jamais à établir seules un fait contractuel : R49, seule source primaire du lot, est la carte modèle officielle Google DeepMind, identifiée mais non ouverte.

## Sources X dignes de confiance pour la veille quotidienne

Une source X entre dans cette liste lorsqu’au moins une de ses annonces obtient **90/100 ou plus** après corroboration par une preuve primaire durable. Cette promotion augmente sa priorité de surveillance, pas la confiance automatique accordée à ses futurs posts.

| Source | Annonce de référence | Confiance de l’annonce | Preuve de promotion | Usage quotidien |
|---|---|---:|---|---|
| [@AIatMeta](https://x.com/AIatMeta) | Muse Glimmer | 96/100 | Publication Meta Research | Surveiller en priorité, puis corroborer chaque fait |
| [@MistralAI](https://x.com/MistralAI) | Shieldstral 1.0 | 94/100 | Carte modèle Mistral | Surveiller en priorité, puis corroborer chaque fait |
| [@nvidia](https://x.com/nvidia) | Nemotron 3.5 Lightning | 94/100 | Carte modèle NVIDIA | Surveiller en priorité, puis corroborer chaque fait |
| [@ghchangelog](https://x.com/ghchangelog) | Copilot mémoire et Ollama | 97/100 | Changelog GitHub daté | Surveiller en priorité, puis corroborer chaque fait |

La promotion doit être retirée si le compte change d’identité, publie des informations matériellement corrigées à répétition ou ne peut plus être relié à une source primaire contrôlée.

## Utilisation des flux X

Un flux X officiel reçoit une confiance de **78 à 82/100 comme source de détection**, car le compte est directement lié à l’acteur mais le contenu peut être bref, modifié, supprimé ou dépourvu de conditions détaillées. La note d’une **annonce** est distincte : elle peut dépasser 90/100 si le post renvoie vers une documentation, une carte modèle, un dépôt, une politique ou une publication officielle durable.

Pour chaque annonce retenue, enregistrer l’URL exacte du post lorsqu’elle est accessible, l’auteur, l’horodatage, le statut officiel du compte, la preuve durable associée et la raison de la note. Un repost, un compte personnel ou une rumeur ne doit jamais être présenté comme une annonce confirmée.

## Registres de distribution officiels — voie de preuve primaire

Contrôle du 15 août 2026. Ces sources figurent au référentiel parce qu’elles sont **joignables alors que la documentation fournisseur ne l’est pas**, et parce qu’elles sont opérées comme canal de publication officiel par l’éditeur du paquet.

| ID | Source | URL de base | Modèle d’URL | Nature | Sujets | Indice | Portée et limite |
|---|---|---|---|---|---|---:|---|
| R38 | PyPI | <https://pypi.org/> | `https://pypi.org/project/{paquet}/{version}/` | Registre de distribution | versions de SDK, dates de publication, compatibilité Python | 92/100 | Prouve durablement qu’une version existe et à quelle date. Ne documente **ni** le contenu du changement, **ni** un prix, **ni** une région, **ni** une disponibilité belge |
| R39 | npm registry | <https://registry.npmjs.org/> | `https://registry.npmjs.org/{paquet}` (API, ouverte) ; `https://www.npmjs.com/package/{paquet}/v/{version}` (interface web, refusée 403) | Registre de distribution | versions de SDK, dates de publication, étiquettes de distribution | 92/100 | Même portée et mêmes limites que R38 ; l’API du registre porte en outre les étiquettes `latest` et `stable` |
| R40 | Blog du Model Context Protocol | <https://blog.modelcontextprotocol.io/> | — | Blog officiel du projet | spécification, SDK, dépréciations | 96/100 | Publication officielle du projet responsable de la spécification |
| R41 | NBC News — technologie | <https://www.nbcnews.com/tech/> | — | Presse généraliste | annonces produit, publicité | 80/100 | Corroboration d’annonce ; insuffisante pour un fait contractuel |
| R42 | Digital Watch Observatory | <https://dig.watch/> | — | Observatoire de politique numérique | politique européenne, souveraineté, infrastructure | 78/100 | Utile pour le contexte européen et belge ; à corroborer |
| R43 | Cerebras — blog technique | <https://www.cerebras.ai/blog/> | — | Blog technique d’éditeur | accélérateurs, paliers de service, débit d’inférence | 85/100 | Primaire pour l’infrastructure Cerebras. Les débits publiés sont des **résultats fournisseur** tant qu’une mesure indépendante ne les reproduit pas |
| R44 | Techmeme | <https://www.techmeme.com/> | `https://www.techmeme.com/{AAMMJJ}/p{n}` | Agrégateur horodaté | datation d’annonces, reprises de comptes officiels | 74/100 | Date un post et identifie le compte officiel à l’origine du signal. Insuffisant seul pour un fait contractuel |
| R53 | Anthropic | [Documentation et journal de version Claude Code](https://code.claude.com/docs/) | Primaire | Assistant de code, permissions, sécurité, versions, agents, auto-hébergement | 98/100 | **Direct (ouvert le 16 août)** |
| R54 | Multiples | [Contenu brut des dépôts publics GitHub](https://raw.githubusercontent.com/) | Primaire | Journaux de version, SDK, licences, poids ouverts, ruptures de compatibilité | 95/100 | **Direct (ouvert le 16 août)** |
| R55 | GitHub | [API GitHub](https://api.github.com/) | Primaire | Publications de version, étiquettes, commits, dépôts | 92/100 | Direct, dépôts en périmètre de session |

**Réserve d’interprétation.** Une version publiée sur un registre n’est pas une annonce produit. Un saut de version majeure signale une rupture de compatibilité probable, mais son contenu exact doit être lu dans les notes de version avant toute conclusion. Pour les bases vectorielles, la version publiée est celle de la **bibliothèque cliente**, jamais celle du moteur serveur.

## Comptes promus en veille quotidienne prioritaire

La promotion suit une règle unique : un post d’un compte officiel dont l’annonce a obtenu **au moins 90/100 grâce à une corroboration primaire durable**. Elle augmente la **priorité de surveillance** du compte ; elle ne rend vrai par avance **aucun** post futur, qui reste soumis au même barème de confiance. Elle est retirée dès que le critère n’est plus rempli.

| Compte | Acteur | Preuve de promotion | Fondement |
|---|---|---|---|
| [@AnthropicAI](https://x.com/AnthropicAI) | Anthropic | Annonce tarifaire notée **98/100** le 15 août 2026 | Corroborée par la page tarifaire officielle **et** les notes de version de l’API, toutes deux **ouvertes directement** |
| [@AIatMeta](https://x.com/AIatMeta) | Meta | Annonce Muse Glimmer notée **96/100** | Corroborée par une publication Meta Research durable |
| [@MistralAI](https://x.com/MistralAI) | Mistral AI | Annonce d’infrastructure européenne notée **94/100** | Corroborée par l’annonce officielle et la documentation produit |
| [@nvidia](https://x.com/nvidia) | NVIDIA | Annonce Nemotron notée **94/100** | Corroborée par la carte de modèle publiée |
| [@ghchangelog](https://x.com/ghchangelog) | GitHub | Annonce Copilot notée **97/100** | Corroborée par le changelog officiel daté |

## Règles d’utilisation quotidienne

1. Rechercher d’abord dans la documentation primaire correspondant au sujet.
2. Enregistrer l’URL exacte de la page probante, la date de consultation et la date de mise à jour lorsqu’elle est publiée.
3. Utiliser les URL de base ci-dessus comme points d’entrée, pas comme preuve suffisante lorsqu’une page plus précise existe.
4. Corroborer adoption et position de marché avec une source indépendante méthodologiquement transparente.
5. Marquer **non publié**, **non disponible en Belgique** ou **à confirmer** lorsque la preuve manque.
6. Réévaluer l’indice si l’accès, la méthodologie ou la responsabilité éditoriale change.
7. Traiter les réseaux sociaux comme signaux de fraîcheur : confirmer les faits matériels dans une source primaire durable avant publication certaine.
