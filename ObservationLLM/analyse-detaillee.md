# Analyse détaillée

Vérification: **1er août 2026** (édition précédente: 17 juillet 2026). Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique.

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

L’édition précédente n’existait pas dans le dépôt. **Entrées: les 20 acteurs. Sorties: aucune.** À partir de la prochaine édition, une entrée exigera plusieurs signaux durables et entraînera une sortie explicitement motivée. Les candidats à surveiller comprennent MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes; ils ne sont pas inclus pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S55 et la TVA standard belge S56. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Les classements agrégés (par ex. index d’intelligence/agentique tiers plaçant Claude Fable 5 puis Opus 5 en tête à leur sortie) sont des signaux, pas une vérité: protocoles, versions, échafaudages, budgets d’outils et dates diffèrent et ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible, exécuté en français et néerlandais sur des tâches réelles.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** Depuis le 9 juillet 2026, la famille **GPT-5.6** (Sol frontière, Terra équilibré, Luna économique) est en disponibilité générale et par défaut dans ChatGPT; ChatGPT est l’application, l’API Responses la plateforme, Codex l’agent de code [S01–S02, S62–S63]. Outils natifs: web, fichiers, génération d’image, interpréteur, shell hébergé, patch, computer use et MCP. Nouveauté API: le *Programmatic Tool Calling* (l’API Responses exécute en mémoire des programmes qui coordonnent des outils). Des baisses de prix sur Terra et Luna ont été annoncées le 30 juillet 2026: revalider le barème officiel.

**Belgique.** L’usage est largement pertinent en français et néerlandais, mais la qualité doit être testée par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles [S03]. Les prix de l’API sont en USD hors taxes; le prix ChatGPT belge exact et la TVA doivent être confirmés au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. Choisir le bon palier (Sol vs Terra vs Luna) par tâche plutôt que le plus cher par défaut. Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration [S05]. Coût long contexte et outils à budgéter séparément.

### 2. Anthropic

**Positionnement.** La famille **Claude 5** est désormais l’état vérifié [S06, S61]. **Claude Fable 5** (`claude-fable-5`, 10/50 USD, GA 9 juin 2026) est le modèle le plus capable, orienté agents longue durée; **Claude Opus 5** (`claude-opus-5`, 5/25 USD, cutoff mai 2026) est le choix par défaut recommandé pour le code agentique et l’entreprise; **Sonnet 5** (3/15 USD, prix de lancement 2/10 jusqu’au 31 août 2026) équilibre coût et vitesse; **Haiku 4.5** (1/5 USD) est le plus rapide. Tous atteignent 1 M de contexte (200 k pour Haiku) et 128 k de sortie. Opus 4.8 devient « legacy »; Opus 4.1 est retiré le 5 août 2026. Une variante **Mythos 5** (invitation, Projet Glasswing) cible la cybersécurité défensive. Claude Code reste l’agent de développement.

**Belgique et données.** Application et API sont pertinentes pour FR/NL, à valider sur le corpus réel. Les modèles sont disponibles via l’API directe, Amazon Bedrock, Claude Platform on AWS, Google Cloud et Microsoft Foundry; DPA, résidence et rétention varient selon la surface, et la résidence/fast peut ajouter un multiplicateur. Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. Utiliser prompt caching pour les préfixes stables, batch -50 % pour l’asynchrone, le paramètre `effort` (défaut `high` sur Opus 5/Sonnet 5 côté API/Claude Code) et des identifiants datés/pinés. Les dépréciations publiées (retrait Opus 4.1 le 5 août 2026) imposent un inventaire de modèles et une migration planifiée.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M, recherche Google/Maps et agents managés. **Gemini 3.1 Pro** est le modèle de tête (preview, ~2/12 USD) pour le raisonnement difficile; **Gemini 3.5 Flash** reste à 1,50/9 USD; **Gemini 3.6 Flash** est devenu le modèle par défaut grand public le 21 juillet 2026 [S09–S11, S64]. Gemini app, AI Studio, Gemini API et Vertex AI sont des surfaces différentes.

**Belgique.** Les tiers gratuits et payants Gemini API sont annoncés disponibles dans de nombreuses régions, y compris EEE [S11]. Le payant n’utilise pas le contenu pour améliorer les produits selon la grille; le gratuit le peut [S09]. Côté grand public, les plans (AI Plus, AI Pro, AI Ultra) et leurs modèles évoluent vite; prix EUR/TVA à confirmer au checkout. Facturation et TVA à vérifier dans le projet Google Cloud.

**Développement.** Cache, batch à -50 %, Flex, Priority, outils de grounding, code execution et file search. Compter les jetons de raisonnement et les requêtes de recherche; utiliser Vertex pour réseau, IAM, journalisation et région.

### 4. Microsoft

**Positionnement.** Microsoft 365 Copilot est l’application de travail, Azure OpenAI/Foundry la plateforme modèles, Copilot Studio la plateforme agents, GitHub Copilot l’assistant code traité séparément.

**Belgique.** Microsoft affiche des prix EUR hors TVA sur une page européenne; un plan M365 qualifiant peut être requis [S12]. Azure offre régions, identité, réseau et DPA, mais la disponibilité dépend du modèle/déploiement.

**Développement.** Choix logique pour organisations déjà sur Entra, M365 et Azure. Risque: addition de licence utilisateur, crédits agents, appels modèle, recherche et connecteurs [S13–S14]. Produire une architecture de coûts complète.

### 5. AWS

**Positionnement.** Bedrock agrège des modèles de nombreux fournisseurs; Agents apporte RAG, mémoire, code et collaboration multi-agent; AgentCore opère des agents de frameworks variés [S15–S17].

**Belgique.** AWS dispose de régions européennes et d’un DPA; cela ne garantit pas que chaque modèle ou fonction reste dans la région choisie. Vérifier le tableau région/modèle et le routage cross-region.

**Développement.** IAM, VPC, KMS, CloudWatch et Guardrails sont des avantages. Standard/Flex/Priority/Reserved et batch permettent d’adapter coût/latence. Le verrouillage porte sur l’orchestration et les services, même si les modèles restent interchangeables.

### 6. Meta

**Positionnement.** Llama est d’abord une famille de poids et un écosystème; Meta AI est une application distincte [S18]. Le coût API dépend du fournisseur ou de l’infrastructure. Signal récent à confirmer: Meta aurait lancé le 9 juillet 2026 un premier modèle payant (« Muse Spark 1.1 », ~1,25/4,25 USD), ce qui marquerait une inflexion vers une offre commerciale directe [S67].

**Belgique.** Vérifier la licence du modèle, les restrictions d’usage et la disponibilité exacte des fonctions Meta AI dans l’UE. Le français est généralement utilisable; le néerlandais doit être évalué. L’auto-hébergement donne du contrôle mais crée les obligations d’exploitant.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Vibe, Studio, agents, RAG, OCR, audio et code [S19–S21]. Mistral Medium 3.5 est orienté agents/développement; Mistral Large est le généraliste phare affiché.

**Belgique.** Pertinence élevée: documentation française et options européennes/privées. Ne pas déduire la conformité du siège européen; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** Grok 4.5 a été rendu public le 8 juillet 2026, positionné comme modèle de code économique (~2/6 USD), disponible comme app et API; la grille distingue contexte court/long, cache, voix, image et vidéo [S22–S23, S65]. xAI a aussi publié un modèle de transcription (Grok STT 1.0) le 23 juillet 2026. Une configuration multi-agent figure dans la carte modèle.

**Belgique.** L’UE est citée dans des cartes modèles précédentes, mais disponibilité, prix local, TVA et résidence de Grok 4.5 doivent être confirmés. La politique grand public ne couvre pas nécessairement l’API entreprise [S24].

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions.

### 9. DeepSeek

**Positionnement.** Modèles très compétitifs en coût, application gratuite, API et poids. La page prix contrôlée publie cache hit/miss et contexte, mais peut précéder une version plus récente [S25–S26].

**Belgique.** Disponibilité commerciale, DPA, transferts, rétention, usage d’entraînement et facture belge sont à confirmer. Pour données sensibles, préférer des poids hébergés par un fournisseur UE après revue de licence.

### 10. Alibaba Cloud / Qwen

**Positionnement.** Qwen propose généralistes, code et multimodal, en poids et via Model Studio. Qwen 3.7 max global est tarifé en CNY avec régions global/US/Chine distinctes [S27–S28]. Alibaba a publié **Qwen 3.7 Flash** le 27 juillet 2026, renforçant le segment rapide/économique [S66].

**Belgique.** Le mot « global » ne prouve pas disponibilité, localisation UE ni facture conforme en Belgique. Vérifier compte, région, DPA, support et langues; FR/NL sont à tester.

### 11. NVIDIA

**Positionnement.** Nemotron fournit des modèles; NIM des microservices d’inférence; NeMo la personnalisation, l’évaluation, les garde-fous et l’outillage agents [S29–S31]. Ce n’est pas un abonnement grand public comparable à ChatGPT.

**Belgique.** Pertinent pour entreprise, cloud privé et souveraineté technique. Coût = GPU/cloud + licence/support + exploitation. Sécurité des agents, supply chain des conteneurs et télémétrie doivent être configurées.

### 12. Cohere

**Positionnement.** Command A+ vise agents, RAG, multilingue et déploiement privé; North ajoute interface et workflows [S32–S34]. Contexte publié: 256 k.

**Belgique.** Bon candidat B2B pour recherche sur données internes et déploiement contrôlé. Pas de proposition grand public dominante. Vérifier langues FR/NL par tâche et contrat de région.

### 13. IBM

**Positionnement.** watsonx.ai combine Granite, modèles tiers, RAG et agents; watsonx.governance ajoute inventaire, évaluation et conformité [S35–S36].

**Belgique.** Pertinent pour entreprises réglementées et hybride/on-prem. Les prix affichés sont indicatifs, variables par pays et hors taxes. Standard commence nettement au-dessus d’un usage individuel.

### 14. GitHub Copilot

**Positionnement.** Assistant de code multi-modèles avec complétion, chat, CLI, revue, agent local et cloud. Plans individuels: Free, Pro, Pro+, Max; crédits IA variables selon modèle et complexité [S37–S38].

**Belgique et données.** Plans individuels: interactions susceptibles d’entraîner les modèles sauf opt-out; Business/Enterprise exclus de l’entraînement. Rétention B/E: IDE chat/completion non retenus, autres surfaces jusqu’à 28 jours selon page [S37]. DPA disponible.

**Développement.** Meilleur choix de départ si GitHub/VS Code domine. Mesurer qualité de PR, tests et failles; les sorties ne remplacent pas revue, SAST et tests.

### 15. Perplexity

**Positionnement.** Application de recherche sourcée, modèles Sonar et Agent API. API séparée de l’abonnement [S39–S40].

**Belgique.** Utile pour veille et recherche, mais chaque citation doit être ouverte. Prix grand public EUR/TVA et contrôles d’entreprise à vérifier au checkout/contrat.

### 16. Anysphere / Cursor

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles. Ce n’est pas un modèle de fondation [S41–S43].

**Données.** Privacy Mode interdit l’entraînement par Cursor et ses providers, annonce des accords ZDR et chiffrement; des données peuvent être conservées lors de détection d’abus [S42]. En équipe, l’imposer par politique.

**Développement.** Excellente ergonomie, mais coûts indexés sur l’usage des modèles et forte cadence de changement. Prévoir règles de dépôt, commandes interdites, validation diff/test et budget.

### 17. Replit

**Positionnement.** Agent de création d’apps intégré à l’IDE, bases et déploiement. Core annuel 20 USD/mois équivalent avec 25 USD de crédits; Pro 95 USD avec 100 USD [S44].

**Belgique.** Bon pour prototypes et petites applications; TVA et localisation à vérifier. Risque de verrouillage plateforme et de coûts croissants en builds autonomes.

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, Inference Providers sans majoration annoncée, Endpoints dédiés et Spaces [S45–S47]. Ce n’est pas un modèle unique.

**Belgique.** Endpoint AWS eu-west-1 disponible; DPA Enterprise et SOC 2 Type 2 annoncés. Les payloads ne sont pas stockés, logs 30 jours selon page sécurité [S47]. Le modèle et provider choisis conservent leurs propres risques.

### 19. Moonshot AI / Kimi

**Positionnement.** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. Kimi K3 annoncé le 16 juillet 2026 est trop récent pour une conclusion indépendante robuste [S48–S51, S60].

**Belgique.** Les poids améliorent la portabilité. API directe, abonnement, DPA, région, TVA et qualité FR/NL restent à confirmer. Le CLI peut lire/écrire, lancer des commandes, utiliser MCP et sous-agents: permissions minimales obligatoires.

### 20. Z.AI / GLM

**Positionnement.** GLM-5.2 est le nouveau modèle mis en avant, tandis que la grille publique contrôlée détaille GLM-5.1/5 et outils; Coding Plan cible les IDE/agents [S52–S54].

**Belgique.** Prix USD attractifs, API compatible et poids ouverts. Les documents contrôlés indiquent surtout anglais/chinois; FR/NL, région UE, DPA, rétention et disponibilité belge sont à confirmer.

## Recommandations transversales

- **Particulier:** privilégier l’application qui facture clairement en EUR et offre contrôle d’entraînement; ne pas y placer de données de tiers.
- **Indépendant:** deux APIs, modèles épinglés, budget dur, logs sans contenu sensible et jeu d’évaluation FR/NL.
- **PME:** commencer par l’écosystème d’identité existant; exiger DPA, liste des sous-traitants, région, rétention, export et suppression.
- **Code:** mesurer une tâche complète jusqu’aux tests, pas le nombre de suggestions. Bloquer secrets et commandes destructrices.
- **Secteur réglementé:** gouvernance d’inventaire, classification des risques, validation humaine, audit des outils et avis juridique spécialisé.
- **Open weight:** scanner poids/conteneurs, vérifier licence et provenance, isoler l’inférence, tester les garde-fous et maintenir les correctifs.

## Limites

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Certaines pages sont dynamiques ou géolocalisées. Cette édition, plusieurs pages officielles (OpenAI, Google, institutions UE, BCE) ont renvoyé un HTTP 403 à la récupération automatisée: la famille Claude 5 a été confirmée sur la documentation Anthropic officielle, mais certains tarifs OpenAI/Google et le taux BCE reposent sur des sources secondaires ou la dernière valeur vérifiée et sont marqués « à confirmer ». Les latences, quotas et remises dépendent du compte. Le jalon réglementaire majeur de la période est l’entrée en application, le 2 août 2026, des pouvoirs d’exécution de la Commission sur les fournisseurs GPAI [S57–S59, S68]. La prochaine édition doit comparer les changements à cet état.
