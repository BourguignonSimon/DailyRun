# Analyse détaillée

Vérification: **20 juillet 2026** (édition précédente 17 juillet). Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique.

> **Note de vérification.** Cette exécution a subi un proxy restrictif : openai.com et les pages BCE ont renvoyé HTTP 403. Les faits Anthropic sont vérifiés en source primaire (platform.claude.com) ; les faits OpenAI sont **rapportés** via des sources secondaires concordantes ; Kimi K3, Inkling, DeepSeek V4, Meta Muse Spark et le calendrier AI Act reposent sur plusieurs sources secondaires. Voir [historique.md](historique.md) pour le journal daté.

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

L’édition du 17 juillet a établi la base. **Cette exécution (20 juillet) ne modifie pas la composition : 20 acteurs, aucune entrée/sortie.** À partir de la prochaine édition, une entrée exigera plusieurs signaux durables et entraînera une sortie explicitement motivée. Les candidats à surveiller comprennent désormais **Thinking Machines (Inkling, 975 B, Apache 2.0, 15 juillet)** en plus de MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes ; ils ne sont pas inclus pour conserver exactement 20 acteurs. Inkling est le signal le plus fort à réévaluer : premier modèle de Thinking Machines (Mira Murati), plus grand open weight d’origine américaine, mais positionné comme base de fine-tuning, pas comme meilleur modèle absolu [S67].

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S55 et la TVA standard belge S56. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Exemple récent : Kimi K3 est annoncé **#1 sur Frontend Code Arena (1 679)** — une arène publique donc observable — mais **3e sur GDPval-AA v2 (1 687)** derrière Fable 5 et GPT-5.6 Sol, chiffre issu d’une évaluation tierce (Artificial Analysis) non réexécutée localement [S66]. Ces protocoles, versions, échafaudages, budgets d’outils et dates diffèrent : ils ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible. Règle maintenue : distinguer capacités déclarées, poids réellement disponibles et qualité mesurée indépendamment — particulièrement pertinent pour Kimi K3, dont les poids ne sont annoncés que « d’ici le 27 juillet ».

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement (mis à jour).** La **famille GPT-5.6** est généralisée depuis le 9 juillet 2026 : **Sol** frontière (5/30 USD/M), **Terra** équilibré (2,50/15), **Luna** nouveau palier volume bon marché (1/6). Contexte ~1,05 M, sortie 128 k ; la rumeur de 1,5 M ne s’est pas concrétisée. GPT-5.5 reste en ligne, non déprécié. ChatGPT est l’application, l’API Responses la plateforme, Codex l’agent de code ; **ChatGPT Work** (agent produisant documents, feuilles, présentations, rapports) est lancé le même jour [S61–S63]. Outils natifs : web, fichiers, génération d’image, interpréteur, shell hébergé, patch, computer use et MCP. **Attention vérification : openai.com était inaccessible cette exécution ; ces chiffres sont rapportés et à revérifier en source primaire.**

**Belgique.** L’usage est largement pertinent en français et néerlandais, mais la qualité doit être testée par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles [S03]. Les prix de l’API sont en USD hors taxes; le prix ChatGPT belge exact et la TVA doivent être confirmés au checkout. Le palier **Luna** change l’arbitrage coût pour les charges de volume : à évaluer contre Gemini 3.5 Flash et Sonnet 5 intro.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration [S05]. Router Luna/Terra/Sol selon la difficulté; coût long contexte et outils à budgéter séparément.

### 2. Anthropic

**Positionnement (corrigé et vérifié en source primaire).** **Claude Fable 5** est « le modèle le plus capable largement diffusé » d’Anthropic (10/50 USD/M, 1 M de contexte sans surcoût long contexte, sortie 128 k), disponible depuis le 9 juin 2026 — l’édition du 17 juillet, qui nommait Opus 4.8 comme tête de série, le manquait. **Claude Mythos 5** est la variante à diffusion restreinte (mêmes specs, sans classifieurs de sécurité). Opus 4.8 (5/25 USD/M) vise toujours les tâches difficiles ; Sonnet 5 offre le compromis coût-vitesse ; Claude Code est l’agent de développement. Le catalogue atteint 1 M de contexte pour le haut de gamme [S06–S08, S64].

**Belgique et données.** Application et API sont pertinentes pour FR/NL, à valider sur le corpus réel. **Point RGPD important : Fable 5 et Mythos 5 sont des « Covered Models » — rétention 30 jours et pas de zéro-rétention (ZDR).** Pour un besoin ZDR, préférer Opus 4.8 ou Sonnet 5. **Sonnet 5 est en prix d’introduction 2/10 USD/M jusqu’au 31 août 2026, puis 3/15 le 1er septembre.** Résidence : `inference_geo:"us"` applique un multiplicateur ×1,1 ; les endpoints régionaux Bedrock/Google Cloud ajoutent +10 % sur le tarif global. Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. Utiliser prompt caching pour les préfixes stables, batch -50 % pour l’asynchrone, budget d’effort raisonnable, et identifiants datés. Réserver Fable 5 aux tâches où le gain compense le prix ; le mode Fast d’Opus 4.8 en préversion (10/50) est bien moins cher que celui d’Opus 4.7 (30/150). Les dépréciations publiées imposent un inventaire de modèles.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M, recherche Google/Maps et agents managés. Gemini 3.5 Flash est présenté comme modèle rapide à intelligence élevée [S09–S11]. Gemini app, AI Studio, Gemini API et Vertex AI sont des surfaces différentes.

**Belgique.** Les tiers gratuits et payants Gemini API sont annoncés disponibles dans de nombreuses régions, y compris EEE [S11]. Le payant n’utilise pas le contenu pour améliorer les produits selon la grille; le gratuit le peut [S09]. Facturation et TVA à vérifier dans le projet Google Cloud.

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

**Positionnement (mis à jour).** Llama reste une famille de poids et un écosystème ; Meta AI est l’application. **Nouveauté du 9 juillet : Muse Spark 1.1**, modèle agentique multimodal (1 M de contexte) diffusé via une **nouvelle Meta Model API payante (1,25/4,25 USD/M)**. C’est une bascule stratégique : Meta ne se limite plus aux poids ouverts et propose désormais un modèle propriétaire facturé à l’usage [S18, S65]. Le coût des Llama auto-hébergés dépend toujours du fournisseur ou de l’infrastructure.

**Belgique.** Vérifier la licence du modèle, les restrictions d’usage et la disponibilité exacte de Meta AI et de la Meta Model API dans l’UE (facturation EUR, DPA, région à confirmer). Le français est généralement utilisable ; le néerlandais doit être évalué. L’auto-hébergement donne du contrôle mais crée les obligations d’exploitant.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Vibe, Studio, agents, RAG, OCR, audio et code [S19–S21]. Mistral Medium 3.5 est orienté agents/développement; Mistral Large est le généraliste phare affiché.

**Belgique.** Pertinence élevée: documentation française et options européennes/privées. Ne pas déduire la conformité du siège européen; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** Grok 4.5 est disponible comme app et API; la grille distingue contexte court/long, cache, voix, image et vidéo [S22–S23]. Grok 4.20 a aussi une configuration multi-agent dans sa carte modèle.

**Belgique.** L’UE est citée dans des cartes modèles précédentes, mais disponibilité, prix local, TVA et résidence de Grok 4.5 doivent être confirmés. La politique grand public ne couvre pas nécessairement l’API entreprise [S24].

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions.

### 9. DeepSeek

**Positionnement (mis à jour).** Modèles très compétitifs en coût, application gratuite, API et poids. **DeepSeek V4** passe de préversion (poids ouverts en avril) à version officielle « mi-juillet » (imminente, non confirmée expédiée au 19 juillet) : V4-Pro (1,6 T/49 B actifs) et V4-Flash (284 B/13 B), 1 M de contexte. **Première tarification heure pleine/creuse** : prix doublés de 9h–12h et 14h–18h (Beijing), rate inchangé hors de ces plages, alerte e-mail 24 h avant. Le temps devient une dimension de routage à intégrer [S25–S26, S68].

**Belgique.** Disponibilité commerciale, DPA, transferts, rétention, usage d’entraînement et facture belge sont à confirmer. **Contexte réglementaire : un groupe de consommateurs belge a déposé plainte sur les transferts de données vers la Chine, et la Commission examine la conformité UE [S74].** Pour données sensibles, préférer des poids hébergés par un fournisseur UE après revue de licence, et tenir compte du décalage horaire pour la tarification.

### 10. Alibaba Cloud / Qwen

**Positionnement.** Qwen propose généralistes, code et multimodal, en poids et via Model Studio. Qwen 3.7 max global est tarifé en CNY avec régions global/US/Chine distinctes [S27–S28].

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

**Positionnement (mis à jour).** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. **Kimi K3 est passé d’« annonce trop récente » à un acteur concret :** API en ligne depuis le 16 juillet (`api.moonshot.ai/v1`, `kimi-k3`), **2,8 T de paramètres MoE (896 experts, ~50 B actifs, « 2,8T-A50B »)**, plus grand modèle open weight à ce jour, 1 M de contexte, architecture « Kimi Delta Attention », multimodal. **Tarif API 3/0,30/15 USD/M ; abonnements app 19–199 USD/mois.** **Les poids ouverts sont annoncés « d’ici le 27 juillet 2026 » et ne sont pas encore publiés au 20 juillet** — la distinction capacités déclarées / poids disponibles / qualité indépendante reste donc décisive. Benchmarks : #1 Frontend Code Arena, 3e GDPval-AA v2 (éval tierce) [S48–S51, S66].

**Belgique.** Les poids (à venir) amélioreront la portabilité. API directe, abonnement, DPA, région, TVA et qualité FR/NL restent à confirmer avant données sensibles. Le CLI peut lire/écrire, lancer des commandes, utiliser MCP et sous-agents : permissions minimales obligatoires. K2.7 Code est désormais aussi sélectionnable dans GitHub Copilot (1er open weight du sélecteur) [S70].

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

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. **Limite spécifique à cette exécution : le proxy a bloqué openai.com et les pages BCE (HTTP 403) ; les chiffres OpenAI et le taux CNY sont donc à revérifier hors environnement contraint.** Les benchmarks Kimi/Inkling proviennent de leaderboards ou d’évaluations tierces non réexécutées localement. Contexte réglementaire ajouté : jalon AI Act du 2 août 2026 (sanctions GPAI possibles) et plainte belge contre DeepSeek. La prochaine édition comparera à l’état du 20 juillet consigné dans [historique.md](historique.md).
