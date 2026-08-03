# Analyse détaillée

Vérification : **3 août 2026** (édition précédente : 17 juillet 2026). Point de vue : particulier ou développeur résidant en Belgique. Cette analyse est informative ; les volets RGPD et AI Act ne constituent pas un avis juridique.

## Méthodologie et sélection

Cinq familles de signaux ont été examinées : adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent : concepteurs de modèles, applications, plateformes cloud/API et agents de code.

**Deuxième édition. Entrées : les 20 acteurs (inchangés). Sorties : aucune.** Aucun candidat de la liste de veille — MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce, orchestrateurs indépendants — n’a franchi un seuil de signal durable justifiant un remplacement sur la période. Ils restent surveillés pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S55 (1 EUR = 1,1485 USD au 31 juillet 2026) et la TVA standard belge S56. Une disponibilité non explicitement vérifiée est « à confirmer ». **Limite propre à cette exécution** : l’accès direct à la plupart des grilles officielles a été bloqué (403 proxy) ; la vérification s’est faite par recherche restreinte aux domaines officiels recoupée par des sources secondaires. Les tarifs concernés sont signalés dans le [comparatif](comparatif.md).

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Les protocoles, versions, échafaudages, budgets d’outils et dates diffèrent : ils ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible. Ce principe est d’autant plus important sur cette période, marquée par des sorties rapprochées (GPT-5.6, Claude Opus 5, Gemini 3.6 Flash, DeepSeek V4-Flash, Kimi K3) dont les chiffres marketing ne sont pas homogènes.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** **GPT-5.6** (famille Sol > Terra > Luna) est le modèle phare depuis le 9 juillet 2026 ; l’alias `gpt-5.6` pointe vers Sol, 1,05 M de contexte et 128 k de sortie [S01–S02, S61]. ChatGPT est l’application, l’API Responses la plateforme, Codex l’agent de code. Outils natifs : web, fichiers, image, interpréteur, shell hébergé, patch, computer use et MCP.

**Changement.** **Baisses de prix du 30 juillet 2026** : Terra −20 % (≈ 2/12 USD), **Luna −80 %** (≈ 0,20/1,20 USD) ; Sol inchangé à 5/30 USD [S61]. Une guerre des prix sur les modèles milieu/entrée de gamme, à intégrer au routage.

**Belgique.** Usage largement pertinent en français et néerlandais, mais qualité à tester par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles ; les modèles publiés depuis le 5 mars 2026 (dont GPT-5.6) portent un surcoût de résidence de +10 % [S03, S62]. Prix API en USD hors taxes ; prix ChatGPT belge et TVA à confirmer au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration [S05]. Coût long contexte et outils à budgéter séparément.

### 2. Anthropic

**Positionnement.** **Claude Opus 5** (lancé le 24 juillet 2026) devient le haut de gamme et le défaut de Claude Max, avec une molette d’effort et une connaissance à mai 2026 ; il conserve le tarif 5/25 USD des Opus précédents [S06, S08, S75]. La gamme « Mythos » (Fable 5, Mythos 5, depuis le 9 juin) et Sonnet 5/Haiku 4.5 complètent le catalogue ; le haut de gamme atteint 1 M de contexte. Claude Code est l’agent de développement.

**Changement.** Nouveau modèle phare Opus 5 ; le mode Fast le couvre désormais. **À surveiller** : le prix de lancement de Sonnet 5 (2/10 USD) remonte à **3/15 USD le 1er septembre 2026**.

**Belgique et données.** Application et API pertinentes pour FR/NL, à valider sur le corpus réel. DPA, résidence et rétention varient entre API directe, AWS et Google Cloud ; la résidence « us » (`inference_geo`) ajoute un multiplicateur ×1,1. Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. Utiliser prompt caching pour les préfixes stables, batch pour l’asynchrone, budget d’effort raisonnable et identifiants datés. Les dépréciations publiées imposent un inventaire de modèles.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M, recherche Google/Maps et agents managés. **Gemini 3.6 Flash** (lancé le 21 juillet 2026) est le nouveau modèle rapide (1,50/7,50 USD, sortie abaissée depuis 9, connaissance à mars 2026), aux côtés de **Gemini 3.5 Flash-Lite** et **Gemini 3.5 Flash Cyber** ; le raisonnement phare reste **Gemini 3.1 Pro** (payant) [S09–S11, S64]. **Gemini 4 a été « teasé » mais n’est pas publié.** Gemini app, AI Studio, Gemini API et Vertex AI sont des surfaces différentes.

**Belgique.** Les tiers gratuits et payants Gemini API sont annoncés disponibles dans de nombreuses régions, y compris EEE [S11]. Le payant n’utilise pas le contenu pour améliorer les produits selon la grille ; les modèles Pro sont payants uniquement. Facturation et TVA à vérifier dans le projet Google Cloud.

**Développement.** Cache, batch, Flex, Priority, grounding, code execution et file search. Compter les jetons de raisonnement et les requêtes de recherche ; utiliser Vertex pour réseau, IAM, journalisation et région.

### 4. Microsoft

**Positionnement.** Microsoft 365 Copilot est l’application de travail, Azure OpenAI/Foundry la plateforme modèles, Copilot Studio la plateforme agents, GitHub Copilot l’assistant code traité séparément.

**Changement.** **Rien de matériel sur la période** : les nouveaux SKU groupés (Standard/Premium + Copilot), l’add-on Business en promotion et le passage à un abonnement fixe datent du 1er juillet 2026. L’add-on Business est à 18 USD/utilisateur/mois (promo jusqu’au 30 septembre 2026, US ; un revendeur belge évoque une extension SMB jusqu’au 31 décembre 2026, à confirmer).

**Belgique.** Microsoft affiche des prix hors TVA ; un plan M365 qualifiant peut être requis [S12]. Azure offre régions, identité, réseau, DPA et EU Data Zones, mais la disponibilité dépend du modèle/déploiement.

**Développement.** Choix logique pour organisations déjà sur Entra, M365 et Azure. Risque : addition de licence utilisateur, crédits agents, appels modèle, recherche et connecteurs [S13–S14]. Produire une architecture de coûts complète.

### 5. AWS

**Positionnement.** Bedrock agrège des modèles de nombreux fournisseurs (dont désormais GPT-5.6 Sol/Terra/Luna en GA) ; Agents apporte RAG, mémoire, code et collaboration multi-agent ; AgentCore opère des agents de frameworks variés [S15–S17].

**Changement.** Bedrock a répercuté les **baisses de prix GPT-5.6 le 30 juillet** (Luna −80 %, Terra −20 %) [S65] et a standardisé les **métadonnées produit dans le Cost & Usage Report le 20 juillet** (attribution FinOps) [S66]. La promo Claude Sonnet 5 (2/10 USD) sur Bedrock se termine le 31 août 2026 (retour à 3/15). Les classes Standard/Flex/Priority/Reserved sont inchangées.

**Belgique.** Régions européennes (Francfort, Irlande, Paris) et DPA ; cela ne garantit pas que chaque modèle/fonction reste dans la région choisie. Vérifier le tableau région/modèle et le routage cross-region.

**Développement.** IAM, VPC, KMS, CloudWatch et Guardrails sont des avantages. Standard/Flex/Priority/Reserved et batch adaptent coût/latence. Le verrouillage porte sur l’orchestration et les services, même si les modèles restent interchangeables.

### 6. Meta

**Positionnement.** Llama est d’abord une famille de poids et un écosystème ; **Llama 4 Scout** (jusqu’à ~10 M de contexte) et **Llama 4 Maverick** restent les phares open weight ; Behemoth n’a pas été publié [S18]. Meta AI est une application distincte. Le coût API dépend du fournisseur ou de l’infrastructure.

**Changement.** Rien de matériel sur la période. Aucune nouvelle sortie open weight.

**Belgique.** Vérifier la licence (Llama 4 Community License), les restrictions d’usage et la disponibilité exacte des fonctions Meta AI dans l’UE (une restriction historique sur l’usage multimodal pour les entités domiciliées dans l’UE est à recontrôler). Le français est généralement utilisable ; le néerlandais doit être évalué. L’auto-hébergement donne du contrôle mais crée les obligations d’exploitant.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Le Chat, Studio, agents, RAG, OCR, audio et code [S19–S21]. **Mistral Medium 3.5** (256 k de contexte, `reasoning_effort`) est orienté agents/développement (1,50/7,50 USD) ; **Mistral Large** (2/6 USD) est le généraliste phare ; **Large 3** et **Small 4** sont des poids ouverts (Apache-2.0).

**Changement.** Rien de matériel sur la période (dernières sorties Leanstral 1.5 le 2 juillet et OCR 4 le 23 juin, hors fenêtre). Facturation EUR disponible sur la page de prix.

**Belgique.** Pertinence élevée : documentation française et options européennes/privées. Ne pas déduire la conformité du siège européen ; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** **Grok 4.5** (sorti le 8 juillet 2026) est le phare, 500 k de contexte, disponible comme app et API ; la grille distingue contexte court/long, cache (0,30 USD), voix, image et vidéo [S22–S23].

**Changement.** Pas de nouveau modèle livré. Une **feuille de route (Grok 4.6 ~1,5 T, Grok 4.7 ~2,1 T)** a été évoquée par Elon Musk le 28 juillet, mais elle est **non vérifiée** et non livrée : à traiter comme une pré-annonce, pas un produit.

**Belgique.** Les utilisateurs de l’EEE sont exclus de l’entraînement sur les publications X (engagement DPC 2024) ; un addendum de confidentialité Europe existe [S24]. Disponibilité, prix local, TVA et résidence de l’API à confirmer. La politique grand public ne couvre pas nécessairement l’API entreprise.

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs ; épingler et tester les versions.

### 9. DeepSeek

**Positionnement.** Modèles très compétitifs en coût, application gratuite, API et poids. **DeepSeek-V4-Flash** est passé de préversion à **release officielle le 31 juillet 2026** (≈ 0,14 / 0,0028 cache / 0,28 USD, ~1 M de contexte) ; **V4-Pro** reste en préversion [S25–S26, S67]. Les alias `deepseek-chat`/`deepseek-reasoner` ont été **retirés le 24 juillet**. Une tarification heures pleines/creuses est annoncée mais **pas encore active**.

**Belgique.** L’**API directe reste non conforme au RGPD** : pas de SCC documentées pour les transferts UE→Chine, interdiction du Garante italien maintenue, enquêtes ouvertes dans plusieurs juridictions UE. Les voies défendables sont l’hébergement par un tiers UE (Microsoft Foundry avec résidence UE, AWS Bedrock, Azure, Vertex régions UE) ou l’auto-hébergement des poids après revue de licence. Disponibilité, DPA, facture belge et TVA sur l’API directe restent non confirmés.

### 10. Alibaba Cloud / Qwen

**Positionnement.** Qwen propose généralistes, code et multimodal, en poids et via Model Studio. **Qwen3.7-Max** reste le phare GA ; **Qwen3.8-Max-Preview** (19 juillet, 2,4 T, préversion) et **Qwen-Audio-3.0-TTS** (20 juillet) sont apparus sur la période [S27–S28, S68]. Régions global/US/Chine distinctes.

**Belgique.** Le mot « global » ne prouve pas disponibilité, localisation UE ni facture conforme en Belgique ; la région Francfort est le seul signal UE. Vérifier compte, région, DPA, support et langues ; FR/NL à tester. Prix Model Studio et Coding Plan reposent sur des sources secondaires (accès direct bloqué).

### 11. NVIDIA

**Positionnement.** Nemotron 3 (Nano ~31,6 B/1 M de contexte, Super, Ultra 550 B depuis le 4 juin) fournit des modèles ; NIM des microservices d’inférence ; NeMo la personnalisation, l’évaluation, les garde-fous et l’outillage agents [S29–S31]. Ce n’est pas un abonnement grand public comparable à ChatGPT.

**Changement.** **Extension de l’Agent Toolkit avec PhysicsNeMo et CUDA-X le 27 juillet 2026** (workflows d’ingénierie/agentiques) [S69]. Le NeMo Agent Toolkit reste en v1.8.0 (16 juin, hors fenêtre) ; pas de nouveau modèle open weight sur la période.

**Belgique.** Pertinent pour entreprise, cloud privé et souveraineté technique. Modèles Nemotron open weight et auto-hébergeables : déploiement UE/on-prem inhérent, sans dépendance de résidence tierce. Coût = GPU/cloud + licence/support + exploitation. Sécurité des agents, supply chain des conteneurs et télémétrie à configurer.

### 12. Cohere

**Positionnement.** **Command A+** vise agents, RAG, multilingue et déploiement privé (« infrastructures critiques souveraines ») ; North ajoute interface et workflows [S32–S34]. **Le contexte publié est incohérent selon les sources (128 k vs 256 k) et n’a pas pu être confirmé sur la page officielle cette exécution** — à recontrôler. Command A+ n’a pas de tarif public (positionnement privé/entreprise).

**Changement.** Rien de matériel sur la période ; Cohere est stable.

**Belgique.** Bon candidat B2B pour recherche sur données internes et déploiement contrôlé : DPA, résidence UE via VPC (AWS/Azure/GCP) et on-prem, les poids et données restant dans l’infrastructure du client. Pas de proposition grand public dominante. Vérifier langues FR/NL par tâche et contrat de région.

### 13. IBM

**Positionnement.** watsonx.ai combine **Granite 4.1** (3B/8B/30B, ~512 k de contexte, Apache-2.0), modèles tiers, RAG et agents ; watsonx.governance ajoute inventaire, évaluation et conformité [S35–S36]. Plateforme watsonx.ai en v2.4.

**Changement.** Rien de matériel sur la période (Granite 4.1 ~30 avril et watsonx.ai v2.4 ~juin précèdent la fenêtre).

**Belgique.** Pertinent pour entreprises réglementées et hybride/on-prem, avec régions UE (Francfort) et indemnisation IP. watsonx.governance est l’angle UE fort (risque modèle, cycle de vie, AI Act). Prix affichés indicatifs, en Resource Units, variables par pays et hors taxes.

### 14. GitHub Copilot

**Positionnement.** Assistant de code multi-modèles avec complétion, chat, CLI, revue, agent local et cloud. Plans individuels : Free, Pro (10 USD), Pro+ (39 USD), Max (100 USD) ; équipes : Business (19 USD), Enterprise (39 USD). Crédits IA variables selon modèle et complexité (1 crédit = 0,01 USD) [S37–S38].

**Changement.** Mineur : **retrait de l’app Copilot Billing Preview le 3 août 2026**, visibilité des dépenses migrée dans les paramètres de facturation [S73]. Prix et plans inchangés.

**Belgique et données.** Plans individuels : interactions susceptibles d’entraîner les modèles sauf opt-out ; Business/Enterprise exclus de l’entraînement. Rétention B/E : IDE chat/completion non retenus, autres surfaces jusqu’à 28 jours. DPA disponible. Facturation en USD, TVA UE via GitHub/Microsoft (mécanique exacte à confirmer).

**Développement.** Meilleur choix de départ si GitHub/VS Code domine. Mesurer qualité de PR, tests et failles ; les sorties ne remplacent pas revue, SAST et tests. Depuis juin 2026, la revue de code peut consommer des minutes GitHub Actions.

### 15. Perplexity

**Positionnement.** Application de recherche sourcée, modèles Sonar et Agent API. L’API est séparée de l’abonnement [S39–S40]. Sonar Pro ≈ 3/15 USD ; frais de recherche par requête selon la taille du contexte.

**Changement.** Plusieurs mises à jour API en juillet (MCP Server 1.0, migration des complétions Sonar vers l’Agent API, paramètres Search `max_tokens`/`last_updated_filter`, compatibilité Vercel AI SDK, pièces jointes de fichiers, nouveaux modèles dont GPT-5.6 Luna dans l’Agent API). **Impossible de confirmer lesquelles sont postérieures au 17 juillet** (changelog non lisible directement) — à traiter comme évolutions de juillet, non datées finement.

**Belgique.** Utile pour veille et recherche, mais chaque citation doit être ouverte. Prix grand public EUR/TVA, DPA et résidence à vérifier au checkout/contrat.

### 16. Anysphere / Cursor

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles. Ce n’est pas un modèle de fondation [S41–S43].

**Changement.** **Lancement de Cursor Router (~22 juillet 2026)** : le mode Auto classe chaque requête et route vers le meilleur modèle en modes Intelligence/Balance/Cost, activé par défaut pour Teams, opt-in Enterprise, déploiement individuel « dans quelques mois » [S70]. La politique de données reste la version du 15 juillet 2026 (pas de nouveau changement).

**Données.** Privacy Mode interdit l’entraînement par Cursor et ses providers, annonce des accords ZDR et chiffrement ; des données peuvent être conservées lors de détection d’abus [S42]. En équipe, l’imposer par politique.

**Développement.** Excellente ergonomie, mais coûts indexés sur l’usage des modèles et forte cadence de changement (le Router en est un exemple). Prévoir règles de dépôt, commandes interdites, validation diff/test et budget.

### 17. Replit

**Positionnement.** Agent de création d’apps (Agent 4) intégré à l’IDE, bases et déploiement. Core 20 USD/mois (baissé depuis 25) avec ~20 USD de crédits ; Pro 100 USD avec crédits par paliers [S44, S71].

**Changement.** **Baisses de prix Cloud le 1er août 2026** (déploiements, stockage, transfert sortant) ; changelog du 24 juillet : intégration Slack de l’Agent, Agent Customization (instructions + skills), refonte mobile [S71].

**Belgique.** Bon pour prototypes et petites applications ; TVA et localisation à vérifier (société US, facturation USD, pas d’engagement de résidence UE identifié). Risque de verrouillage plateforme et de coûts croissants en builds autonomes.

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, Inference Providers sans majoration annoncée, Endpoints dédiés et Spaces [S45–S47]. Ce n’est pas un modèle unique.

**Changement.** Rien de matériel sur la période ; le catalogue de providers s’étoffe de façon incrémentale.

**Belgique.** Meilleure histoire UE des acteurs open : SOC 2 Type 2, DPA Enterprise, contrôle de localisation UE, Endpoints en région UE (eu-west-1, PrivateLink). Les payloads ne sont pas stockés, logs 30 jours [S47]. Le modèle et provider choisis conservent leurs propres risques.

### 19. Moonshot AI / Kimi

**Positionnement.** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. **Les poids ouverts de Kimi K3 ont été publiés le 27 juillet 2026** (MoE 2,8 T / ~104 B actifs, contexte 1 M, multimodal, architecture KDA+AttnRes), API 3 / 0,30 cache / 15 USD, sous une **« Kimi K3 License » propre** (clauses exactes non lues cette exécution) [S48–S51, S60, S72]. K2.6 et K2.7-Code (code, 256 k) complètent la gamme. Ceci **résout la question ouverte** du 17 juillet (K3 alors seulement annoncé).

**Belgique.** Les poids améliorent la portabilité, mais l’**API hébergée traite les données en Chine** (exposition à la loi sur le renseignement national), sans DPA RGPD ni opt-out d’entraînement documenté, sans entité EEE ni facturation EUR confirmées. La seule voie défendable pour un résident belge est l’**auto-hébergement des poids K3 en infrastructure UE**. Le CLI peut lire/écrire, lancer des commandes, utiliser MCP et sous-agents : permissions minimales obligatoires.

### 20. Z.AI / GLM

**Positionnement.** **GLM-5.2** reste le phare (1 M de contexte, agentique/code, 1,40 / 0,26 cache / 4,40 USD, heures creuses ×0,5) ; la gamme couvre GLM-5.1/5/Turbo et versions vision ; Coding Plan cible les IDE/agents (« à partir de 18 USD/mois ») [S52–S54].

**Changement.** Rien de matériel sur la période (GLM-5.2 date du 16 juin ; pas de GLM-5.3/6).

**Belgique.** Prix USD attractifs, API compatible et poids ouverts. Service international opéré depuis Singapour, données généralement traitées à Singapour, transferts possibles au sein du groupe ; **pas de DPA UE explicite, ni facturation EUR/TVA, ni résidence UE** confirmés. FR/NL, région UE, DPA, rétention et disponibilité belge à confirmer.

## Recommandations transversales

- **Particulier :** privilégier l’application qui facture clairement en EUR et offre un contrôle d’entraînement ; ne pas y placer de données de tiers.
- **Indépendant :** deux APIs, modèles épinglés, budget dur, logs sans contenu sensible et jeu d’évaluation FR/NL. Profiter des baisses de prix récentes via un routage petit modèle d’abord.
- **PME :** commencer par l’écosystème d’identité existant ; exiger DPA, liste des sous-traitants, région, rétention, export et suppression.
- **Code :** mesurer une tâche complète jusqu’aux tests, pas le nombre de suggestions. Bloquer secrets et commandes destructrices.
- **Secteur réglementé :** gouvernance d’inventaire, classification des risques, validation humaine, audit des outils et avis juridique spécialisé. Intégrer les obligations de transparence de l’article 50 désormais applicables.
- **Open weight :** scanner poids/conteneurs, vérifier licence et provenance (ex. Kimi K3 License, licences Llama/Mistral), isoler l’inférence, tester les garde-fous et maintenir les correctifs.

## Limites

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Sur cette exécution, l’accès direct à la plupart des grilles officielles a de plus été bloqué par la politique réseau (403 proxy) : les tarifs reposent sur des extraits officiels recoupés par des sources secondaires, à recontrôler à la prochaine exécution. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. Aucun incident spécifique suffisamment récent et vérifié n’a été ajouté cette fois. La feuille de route xAI (Grok 4.6/4.7) et les clauses de la Kimi K3 License restent non confirmées.
