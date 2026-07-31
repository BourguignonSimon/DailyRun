# Analyse détaillée

Vérification: **31 juillet 2026** (édition précédente: 17 juillet 2026). Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique. Ce cycle, la plupart des pages officielles fournisseurs étaient inaccessibles à la lecture automatique directe; les faits ajoutés sont **corroborés** par recoupement et doivent être revérifiés avant engagement (voir [sources.md](sources.md) et [historique.md](historique.md)).

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

L’édition précédente n’existait pas dans le dépôt. **Entrées: les 20 acteurs. Sorties: aucune.** À partir de la prochaine édition, une entrée exigera plusieurs signaux durables et entraînera une sortie explicitement motivée. Les candidats à surveiller comprennent MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes; ils ne sont pas inclus pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S55 et la TVA standard belge S56. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Exemple: OpenAI a publié pour GPT-5.5 82,7 % sur Terminal-Bench 2.0 et 58,6 % sur SWE-Bench Pro, tout en signalant un risque de mémorisation sur ce dernier [S02]; la famille GPT-5.6 revendique de nouveaux gains, non reproduits ici [S61]. Z.AI revendique 77,8 sur SWE-bench Verified pour GLM-5 dans sa propre documentation [S53]. Ces protocoles, versions, échafaudages, budgets d’outils et dates diffèrent: ils ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** Le frontière est désormais la **famille GPT-5.6** (Sol phare, Terra équilibré, Luna rapide/économique), lancée le 9 juillet 2026 — 1,05 M de contexte, 128 k de sortie; ChatGPT est l’application, l’API Responses la plateforme, Codex l’agent de code [S01–S02, S61]. Le 30 juillet 2026, baisses de prix (Terra −20 % → 2/12 USD; Luna −80 % → 0,20/1,20 USD; Sol 5/30 USD) et renommage de « Priority » en **Fast mode** [S62]. Outils natifs: web, fichiers, génération d’image, interpréteur, shell hébergé, patch, computer use et MCP. *L’édition précédente listait encore GPT-5.5; correction appliquée.*

**Belgique.** L’usage est largement pertinent en français et néerlandais, mais la qualité doit être testée par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles [S03]. Les prix de l’API sont en USD hors taxes; le prix ChatGPT belge exact et la TVA doivent être confirmés au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration [S05]. Coût long contexte et outils à budgéter séparément.

### 2. Anthropic

**Positionnement.** **Claude Opus 5** (publié le 24 juillet 2026) est le nouveau haut de gamme, au **même prix qu’Opus 4.8: 5/25 USD** par million entrée/sortie, cache lecture 0,50 USD, batch 2,50/12,50 USD, 1 M de contexte, sortie max 128 k; Sonnet 5 offre un compromis coût-vitesse (prix d’intro 2/10 USD jusqu’au 31 août 2026, puis 3/15 USD); Claude Code est l’agent de développement. Un **Fast mode** en préversion recherche (10/50 USD) accélère Opus 5/4.8. La grille publie aussi Fable 5 (10/50 USD) et Mythos 5 (disponibilité limitée). Grille lue directement ce cycle [S06–S08, S63].

**Belgique et données.** Application et API sont pertinentes pour FR/NL, à valider sur le corpus réel. DPA, résidence et rétention varient entre API directe, AWS et Google Cloud; la résidence peut ajouter un multiplicateur. Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. Utiliser prompt caching pour les préfixes stables, batch pour l’asynchrone, budget d’effort raisonnable, et identifiants datés. Les dépréciations publiées imposent un inventaire de modèles.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M, recherche Google/Maps et agents managés. **Gemini 3.6 Flash** (21 juillet 2026) remplace 3.5 Flash: entrée 1,50 USD inchangée, **sortie ramenée de 9 à 7,50 USD/M**, ~17 % de jetons de sortie en moins, usage ordinateur intégré; nouveaux paliers **3.5 Flash-Lite** (~0,30/2,50 USD) et **3.5 Flash Cyber** (variante sécurité) [S09–S11, S64]. Gemini app, AI Studio, Gemini API et Vertex AI sont des surfaces différentes.

**Belgique.** Les tiers gratuits et payants Gemini API sont annoncés disponibles dans de nombreuses régions, y compris EEE [S11]. Le payant n’utilise pas le contenu pour améliorer les produits selon la grille; le gratuit le peut [S09]. Facturation et TVA à vérifier dans le projet Google Cloud.

**Développement.** Cache, batch à -50 %, Flex, Priority, outils de grounding, code execution et file search. Compter les jetons de raisonnement et les requêtes de recherche; utiliser Vertex pour réseau, IAM, journalisation et région.

### 4. Microsoft

**Positionnement.** Microsoft 365 Copilot est l’application de travail, Azure OpenAI/Foundry la plateforme modèles, Copilot Studio la plateforme agents, GitHub Copilot l’assistant code traité séparément.

**Belgique.** Microsoft affiche des prix EUR hors TVA sur une page européenne; un plan M365 qualifiant peut être requis [S12]. **Le prix Business relevé au 17 juillet (15,60 €) est à revérifier: une refonte tarifaire est signalée au 1ᵉʳ juillet 2026.** Azure offre régions, identité, réseau et DPA, mais la disponibilité dépend du modèle/déploiement. **Nouveau, pertinent RGPD (24 juillet 2026): OpenAI a été ajouté comme sous-traitant** de Microsoft 365 Copilot et Copilot Studio, donnant accès à des modèles opérés par OpenAI sur son infrastructure (distincts d’Azure OpenAI), avec activation automatique sauf opt-out préalable des administrateurs. Auditer la cartographie des données et le statut d’opt-out [S73].

**Développement.** Choix logique pour organisations déjà sur Entra, M365 et Azure. Risque: addition de licence utilisateur, crédits agents, appels modèle, recherche et connecteurs [S13–S14]. Produire une architecture de coûts complète.

### 5. AWS

**Positionnement.** Bedrock agrège des modèles de nombreux fournisseurs; Agents apporte RAG, mémoire, code et collaboration multi-agent; AgentCore opère des agents de frameworks variés [S15–S17].

**Belgique.** AWS dispose de régions européennes et d’un DPA; cela ne garantit pas que chaque modèle ou fonction reste dans la région choisie. Vérifier le tableau région/modèle et le routage cross-region.

**Développement.** IAM, VPC, KMS, CloudWatch et Guardrails sont des avantages. Standard/Flex/Priority/Reserved et batch permettent d’adapter coût/latence. Le verrouillage porte sur l’orchestration et les services, même si les modèles restent interchangeables.

### 6. Meta

**Positionnement.** Llama est d’abord une famille de poids et un écosystème; Meta AI est une application distincte [S18]. Le coût API dépend du fournisseur ou de l’infrastructure.

**Belgique.** Vérifier la licence du modèle, les restrictions d’usage et la disponibilité exacte des fonctions Meta AI dans l’UE. Le français est généralement utilisable; le néerlandais doit être évalué. L’auto-hébergement donne du contrôle mais crée les obligations d’exploitant.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Vibe, Studio, agents, RAG, OCR, audio et code [S19–S21]. Mistral Medium 3.5 est orienté agents/développement; Mistral Large est le généraliste phare affiché.

**Belgique.** Pertinence élevée: documentation française et options européennes/privées. Ne pas déduire la conformité du siège européen; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** Grok 4.5 est disponible comme app et API; la grille distingue contexte court/long, cache, voix, image et vidéo [S22–S23]. Grok 4.20 a aussi une configuration multi-agent dans sa carte modèle.

**Belgique.** **Nouveau (rapporté, à confirmer): Grok 4.5 est ouvert aux utilisateurs UE dans la console API** [S22]. Prix (2/6 USD court contexte) et contexte (500 k) inchangés. Prix local, TVA et résidence restent à confirmer; la politique grand public ne couvre pas nécessairement l’API entreprise [S24].

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions.

### 9. DeepSeek

**Positionnement.** Modèles très compétitifs en coût, application gratuite, API et poids. **Bascule vers DeepSeek V4 (à confirmer): `deepseek-chat` et `deepseek-reasoner` ont été retirés le 24 juillet 2026**, remplacés par **V4-Pro** (~1,74/3,48 USD) et **V4-Flash** (~0,14/0,28 USD), avec un contexte porté à **1 M** (contre 64 k sur la grille précédente) [S25–S26, S71]. V4 lui-même date d’avril 2026; l’événement du cycle est l’achèvement de la migration.

**Belgique.** Disponibilité commerciale, DPA, transferts, rétention, usage d’entraînement et facture belge sont à confirmer. Pour données sensibles, préférer des poids hébergés par un fournisseur UE après revue de licence.

### 10. Alibaba Cloud / Qwen

**Positionnement.** Qwen propose généralistes, code et multimodal, en poids et via Model Studio. **Nouveau phare (à confirmer): Qwen3.8-Max-Preview**, annoncé vers le 19 juillet 2026 au-dessus de Qwen 3.7 Max, avec un tarif de préversion réduit (~10 % du tarif normal, plus remise nocturne 22 h–8 h) [S27–S28, S72]. Prix par jeton et contexte exacts non extraits d’une page officielle lisible; les revendications « 2,4T paramètres » de la presse ne sont pas confirmées. Qwen 3.7 max global reste tarifé en CNY avec régions global/US/Chine distinctes.

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

**Développement.** Meilleur choix de départ si GitHub/VS Code domine. **Nouveau (à confirmer, 29 juillet 2026): les compétences d’agent (SKILL.md) et les serveurs MCP passent en disponibilité générale pour la revue de code** (appels d’outils MCP en lecture seule), et une préversion « Agent » arrive dans Visual Studio (30 juillet) [S67]. Prix inchangés. Mesurer qualité de PR, tests et failles; les sorties ne remplacent pas revue, SAST et tests.

### 15. Perplexity

**Positionnement.** Application de recherche sourcée, modèles Sonar et Agent API. API séparée de l’abonnement [S39–S40].

**Belgique.** Utile pour veille et recherche, mais chaque citation doit être ouverte. Prix grand public EUR/TVA et contrôles d’entreprise à vérifier au checkout/contrat.

### 16. Anysphere / Cursor

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles. Ce n’est pas un modèle de fondation [S41–S43].

**Données.** Privacy Mode interdit l’entraînement par Cursor et ses providers, annonce des accords ZDR et chiffrement; des données peuvent être conservées lors de détection d’abus [S42]. En équipe, l’imposer par politique.

**Développement.** Excellente ergonomie, mais coûts indexés sur l’usage des modèles et forte cadence de changement. **Nouveau (à confirmer, 22 juillet 2026): Cursor Router**, un routage intelligent par requête (modes Intelligence/Balance/Cost), activé par défaut pour les équipes, avec des économies annoncées de ~30–60 %; vérifier l’impact sur la reproductibilité et épingler un modèle pour les tâches critiques [S68]. Prévoir règles de dépôt, commandes interdites, validation diff/test et budget.

### 17. Replit

**Positionnement.** Agent de création d’apps intégré à l’IDE, bases et déploiement. Core annuel 20 USD/mois équivalent avec 25 USD de crédits; Pro 95 USD avec 100 USD [S44].

**Belgique.** Bon pour prototypes et petites applications; TVA et localisation à vérifier. Risque de verrouillage plateforme et de coûts croissants en builds autonomes.

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, Inference Providers sans majoration annoncée, Endpoints dédiés et Spaces [S45–S47]. Ce n’est pas un modèle unique.

**Belgique.** Endpoint AWS eu-west-1 disponible; DPA Enterprise et SOC 2 Type 2 annoncés. Les payloads ne sont pas stockés, logs 30 jours selon page sécurité [S47]. Le modèle et provider choisis conservent leurs propres risques.

### 19. Moonshot AI / Kimi

**Positionnement.** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. Kimi K3, annoncé le 16 juillet 2026, a vu ses **poids ouverts publiés le 27 juillet 2026** sur Hugging Face (à confirmer), ce qui améliore la portabilité mais laisse la qualité mesurée à évaluer indépendamment [S48–S51, S60, S70].

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

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. **Contrainte spécifique à ce cycle (31 juillet 2026): la plupart des domaines officiels fournisseurs ont renvoyé un blocage réseau (HTTP 403) à l’outil de récupération automatique.** Seule la grille de prix Anthropic a été lue directement; les autres nouveautés sont corroborées par recoupement de sources indépendantes et marquées **à confirmer**, à revérifier manuellement avant tout engagement. Les incidents publics n’ont été inclus que lorsqu’une source primaire et un impact encore pertinent étaient disponibles. Cette édition compare l’état au relevé du 17 juillet 2026 (voir [historique.md](historique.md)); la prochaine devra comparer à l’état du 31 juillet.
