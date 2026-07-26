# Analyse détaillée

Vérification: **26 juillet 2026** (édition précédente: 17 juillet 2026). Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique.

**Note de fiabilité (26 juillet).** La plupart des pages officielles ont renvoyé HTTP 403 à la lecture directe; seules Anthropic et GitHub Copilot ont été lues intégralement. Les autres faits proviennent d’extraits de domaines officiels et sont marqués « à confirmer » lorsque la décimale n’a pas été lue directement. Les changements de ce cycle sont récapitulés dans [historique.md](historique.md).

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

La liste des 20 acteurs est **inchangée** au 26 juillet 2026: **aucune entrée, aucune sortie**. Les changements du cycle portent sur les offres (nouveaux modèles, prix, politiques), pas sur la composition. Une entrée future exigera plusieurs signaux durables et entraînera une sortie explicitement motivée. Les candidats à surveiller comprennent MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes; ils ne sont pas inclus pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S55 et la TVA standard belge S56. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Exemple: OpenAI publie pour GPT-5.5 82,7 % sur Terminal-Bench 2.0 et 58,6 % sur SWE-Bench Pro, tout en signalant un risque de mémorisation sur ce dernier [S02]. Z.AI revendique 77,8 sur SWE-bench Verified pour GLM-5 dans sa propre documentation [S53]. Ces protocoles, versions, échafaudages, budgets d’outils et dates diffèrent: ils ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** **Nouveauté du cycle:** la série **GPT-5.6** introduit un nommage à deux axes — le nombre marque la génération, **Sol / Terra / Luna** marquent des paliers de capacité durables. Sol est le modèle phare, Terra le modèle équilibré (≈ GPT-5.5 pour 2× moins cher), Luna le plus rapide et abordable. Préversion le 9 juillet, disponibilité générale « dans les prochaines semaines »; déjà GA sur AWS Bedrock (~13 juillet, US uniquement) [S61–S62, S67]. Prix par million: Sol 5/30, Terra 2,50/15, Luna 1/6 USD. ChatGPT reste l’application, l’API Responses la plateforme, Codex l’agent de code [S01–S02]. GPT-5.5 reste la référence antérieure; l’édition du 17 juillet ne l’avait pas encore remplacé.

**Belgique.** L’usage est largement pertinent en français et néerlandais, mais la qualité doit être testée par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles [S03]. Attention: la GA de GPT-5.6 est d’abord US (Bedrock); vérifier la disponibilité UE avant de dépendre du nouveau modèle pour des données soumises à résidence. Les prix de l’API sont en USD hors taxes; le prix ChatGPT belge exact et la TVA doivent être confirmés au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. Avec le nommage Sol/Terra/Luna, épingler explicitement le palier ET la génération; ne pas supposer qu’un alias suit automatiquement la nouvelle gamme. Journaliser les request IDs, maintenir des évaluations avant migration [S05]. Coût long contexte et outils à budgéter séparément.

### 2. Anthropic

**Positionnement.** **Nouveauté du cycle:** la grille officielle place désormais **Claude Opus 5** en tête (5/0,50/25 USD entrée/cache/sortie, 1 M de contexte), avec **Fable 5** et **Mythos 5** en disponibilité limitée (10/1/50 USD). **Sonnet 5** passe en prix d’introduction 2/0,20/10 USD jusqu’au 31 août 2026, puis 3/0,30/15 USD au 1er septembre. Opus 4.8 reste disponible au même tarif. Un **Fast mode** (aperçu recherche) est documenté pour Opus 5/Opus 4.8 à 10/50 USD, hors Batch [S63]. Claude Code reste l’agent de développement.

**Belgique et données.** Application et API sont pertinentes pour FR/NL, à valider sur le corpus réel. DPA, résidence et rétention varient entre API directe, AWS et Google Cloud; pour Claude 4.6+, `inference_geo:"us"` applique un multiplicateur ×1,1 tandis que le routage global (défaut) est au tarif standard. Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. Utiliser prompt caching pour les préfixes stables, batch pour l’asynchrone, budget d’effort raisonnable, et identifiants datés. Réserver Opus 5 / Fast mode aux tâches où le gain de réussite justifie le prix. Les dépréciations publiées imposent un inventaire de modèles.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M, recherche Google/Maps et agents managés. **Nouveauté du cycle (~22–23 juillet):** **Gemini 3.6 Flash** (1,50/7,50 USD, ~17 % de jetons de sortie en moins), **Gemini 3.5 Flash-Lite** (0,30/2,50 USD) et **Gemini 3.5 Flash Cyber** (variante sécurité) [S64]. La sortie Flash passe de 9 à 7,50 USD, soit une baisse de fait. Gemini 3.5 Flash reste disponible; pas de Gemini 3.5 Pro GA ni de Gemini 4 annoncés. Gemini app, AI Studio, Gemini API et Vertex AI sont des surfaces différentes [S09–S11].

**Belgique.** Les tiers gratuits et payants Gemini API sont annoncés disponibles dans de nombreuses régions, y compris EEE [S11]. Le payant n’utilise pas le contenu pour améliorer les produits selon la grille; le gratuit le peut [S09]. Facturation et TVA à vérifier dans le projet Google Cloud.

**Développement.** Cache, batch à -50 %, Flex, Priority, outils de grounding, code execution et file search. Compter les jetons de raisonnement et les requêtes de recherche; utiliser Vertex pour réseau, IAM, journalisation et région.

### 4. Microsoft

**Positionnement.** Microsoft 365 Copilot est l’application de travail, Azure OpenAI/Foundry la plateforme modèles, Copilot Studio la plateforme agents, GitHub Copilot l’assistant code traité séparément.

**Belgique.** Microsoft affiche des prix EUR hors TVA sur une page européenne; un plan M365 qualifiant peut être requis [S12]. Azure offre régions, identité, réseau et DPA, mais la disponibilité dépend du modèle/déploiement. **Nouveauté du cycle:** une **hausse tarifaire des déploiements EU Data Zone et régionaux hors US** prend effet le **1er septembre 2026** (en Standard/PAYG, seulement pour les modèles lancés à partir de cette date; en Provisioned Throughput, pour tous ces clients), avec une nouvelle zone APAC [S66]. Un résident belge exigeant la résidence UE doit budgéter ce surcoût.

**Développement.** Choix logique pour organisations déjà sur Entra, M365 et Azure. Risque: addition de licence utilisateur, crédits agents, appels modèle, recherche et connecteurs [S13–S14]. Produire une architecture de coûts complète et intégrer la hausse zones UE au 1er septembre.

### 5. AWS

**Positionnement.** Bedrock agrège des modèles de nombreux fournisseurs; Agents apporte RAG, mémoire, code et collaboration multi-agent; AgentCore opère des agents de frameworks variés [S15–S17].

**Belgique.** AWS dispose de régions européennes et d’un DPA; cela ne garantit pas que chaque modèle ou fonction reste dans la région choisie. Vérifier le tableau région/modèle et le routage cross-region. **À noter:** la GA de GPT-5.6 (Sol/Terra/Luna) sur Bedrock (~13 juillet) est pour l’instant limitée aux régions US [S67]; elle n’est donc pas utilisable sous résidence UE.

**Développement.** IAM, VPC, KMS, CloudWatch et Guardrails sont des avantages. Standard/Flex/Priority/Reserved et batch permettent d’adapter coût/latence. Le verrouillage porte sur l’orchestration et les services, même si les modèles restent interchangeables.

### 6. Meta

**Positionnement.** Llama est d’abord une famille de poids et un écosystème; Meta AI est une application distincte [S18]. Le coût API dépend du fournisseur ou de l’infrastructure.

**Belgique.** Vérifier la licence du modèle, les restrictions d’usage et la disponibilité exacte des fonctions Meta AI dans l’UE. Le français est généralement utilisable; le néerlandais doit être évalué. L’auto-hébergement donne du contrôle mais crée les obligations d’exploitant.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Vibe, Studio, agents, RAG, OCR, audio et code [S19–S21]. Mistral Medium 3.5 est orienté agents/développement; Mistral Large est le généraliste phare affiché.

**Belgique.** Pertinence élevée: documentation française et options européennes/privées. Ne pas déduire la conformité du siège européen; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester. *Correction de base:* les docs actuels situent le généraliste phare **Mistral Large 3** à ~0,5/1,5 USD par million (modèle de décembre 2025), et non « 2/6 USD » comme noté au 17 juillet — à revérifier par lecture directe. Aucun nouveau modèle Mistral dans la fenêtre du cycle.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** Grok 4.5 est disponible comme app et API; la grille distingue contexte court/long, cache, voix, image et vidéo [S22–S23]. Grok 4.20 a aussi une configuration multi-agent dans sa carte modèle.

**Belgique.** L’UE est citée dans des cartes modèles précédentes, mais disponibilité, prix local, TVA et résidence de Grok 4.5 doivent être confirmés. La politique grand public ne couvre pas nécessairement l’API entreprise [S24].

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions.

### 9. DeepSeek

**Positionnement.** Modèles très compétitifs en coût, application gratuite, API et poids. **Nouveauté du cycle:** lancement de **DeepSeek V4** (`deepseek-v4-flash` et `deepseek-v4-pro`, 1 M de contexte, modes Thinking/Non-Thinking). Les anciens endpoints `deepseek-chat`/`deepseek-reasoner` (V3.2) sont **retirés après le 24 juillet 2026** — un changement rapide qui casse les intégrations épinglées sur ces alias. Prix indicatifs USD/million (à confirmer par lecture directe): V4-pro 1,74/3,48 (cache 0,145), V4-flash 0,14/0,28 (cache 0,028) [S25–S26, S68].

**Belgique.** Disponibilité commerciale, DPA, transferts, rétention, usage d’entraînement et facture belge sont à confirmer. Pour données sensibles, préférer des poids hébergés par un fournisseur UE après revue de licence.

### 10. Alibaba Cloud / Qwen

**Positionnement.** Qwen propose généralistes, code et multimodal, en poids et via Model Studio. **Nouveauté du cycle:** un palier phare en préversion, **Qwen3.8-Max-Preview**, réservé au « Token Plan » par abonnement (à partir de ~6 USD/mois), sans tarif par jeton autonome publié [S69]. La page internationale Model Studio affiche Qwen3-Max/3.7-Max en **USD** par paliers d’entrée (0–32K: 0,861/3,441; 32K–128K: 1,434/5,735; 128K–252K: 2,151/8,602), tandis que la console Chine reste en CNY [S27–S28].

**Belgique.** Le mot « global » ne prouve pas disponibilité, localisation UE ni facture conforme en Belgique. Vérifier compte, région, DPA, support et langues; FR/NL sont à tester.

### 11. NVIDIA

**Positionnement.** Nemotron fournit des modèles; NIM des microservices d’inférence; NeMo la personnalisation, l’évaluation, les garde-fous et l’outillage agents [S29–S31]. Ce n’est pas un abonnement grand public comparable à ChatGPT.

**Belgique.** Pertinent pour entreprise, cloud privé et souveraineté technique. Coût = GPU/cloud + licence/support + exploitation. Sécurité des agents, supply chain des conteneurs et télémétrie doivent être configurées.

### 12. Cohere

**Positionnement.** Command A+ vise agents, RAG, multilingue et déploiement privé; North ajoute interface et workflows [S32–S34]. Contexte publié: 256 k.

**Belgique.** Bon candidat B2B pour recherche sur données internes et déploiement contrôlé. Pas de proposition grand public dominante. Vérifier langues FR/NL par tâche et contrat de région.

### 13. IBM

**Positionnement.** watsonx.ai combine Granite, modèles tiers, RAG et agents; watsonx.governance ajoute inventaire, évaluation et conformité [S35–S36]. **Nouveauté du cycle (22 juillet):** la famille **Granite 4.1** — modèles **denses** decoder-only 3B/8B/30B (base + instruct), plus mises à jour speech/vision/embeddings/Guardian, sous licence **Apache 2.0**, disponibles sur watsonx et Hugging Face. IBM annonce le 4.1 8B au niveau du 4.0 32B MoE. Le tarif par jeton du 4.1 n’est pas publié séparément [S65].

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

**Positionnement.** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. **Nouveauté du cycle:** Kimi K3, annoncé le 16 juillet, est désormais **livré** (~23 juillet) avec specs et prix — 2,8 T de paramètres, vision native, 1 M de contexte, orienté code/agents long-horizon; prix USD/million 0,30 cache / 3,00 entrée / 15,00 sortie [S48–S51, S60, S70]. La qualité mesurée FR/NL reste à évaluer indépendamment des capacités déclarées.

**Belgique.** Les poids améliorent la portabilité. API directe, abonnement, DPA, région, TVA et qualité FR/NL restent à confirmer. Le CLI peut lire/écrire, lancer des commandes, utiliser MCP et sous-agents: permissions minimales obligatoires.

### 20. Z.AI / GLM

**Positionnement.** GLM-5.2 reste le modèle phare mis en avant (contexte annoncé jusqu’à 1 M), tandis que la grille publique contrôlée détaille GLM-5.1/5 et outils; Coding Plan cible les IDE/agents [S52–S54, S71]. Ce cycle: pas de nouveau modèle, mais une **campagne Coding Plan** (GLM-5.2 mesuré au facteur 0,67, soit ~1,5× de quota utile) jusqu’au **31 juillet 2026** — une promotion, pas un changement de prix catalogue. La grille tarifaire GLM-5.2 par jeton n’a pas pu être lue directement (page 403); ne pas publier de chiffre par jeton GLM-5.2 sans lecture directe.

**Belgique.** Prix USD attractifs, API compatible et poids ouverts. Les documents contrôlés indiquent surtout anglais/chinois; FR/NL, région UE, DPA, rétention et disponibilité belge sont à confirmer.

## Recommandations transversales

- **Particulier:** privilégier l’application qui facture clairement en EUR et offre contrôle d’entraînement; ne pas y placer de données de tiers.
- **Indépendant:** deux APIs, modèles épinglés, budget dur, logs sans contenu sensible et jeu d’évaluation FR/NL.
- **PME:** commencer par l’écosystème d’identité existant; exiger DPA, liste des sous-traitants, région, rétention, export et suppression.
- **Code:** mesurer une tâche complète jusqu’aux tests, pas le nombre de suggestions. Bloquer secrets et commandes destructrices.
- **Secteur réglementé:** gouvernance d’inventaire, classification des risques, validation humaine, audit des outils et avis juridique spécialisé.
- **Open weight:** scanner poids/conteneurs, vérifier licence et provenance, isoler l’inférence, tester les garde-fous et maintenir les correctifs.

## Limites

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. **Limite spécifique à ce cycle:** la plupart des pages officielles ont renvoyé HTTP 403 à la lecture directe; seules Anthropic et GitHub Copilot ont été lues intégralement, les autres faits reposant sur des extraits de domaines officiels. Les décimales non lues directement (DeepSeek V4, Qwen3.8/3.7-Max, GLM-5.2, Kimi K3, grille Gemini, Grok long contexte, statut GA de GPT-5.6 et disponibilité UE) sont marquées « à confirmer » et devront être revérifiées par lecture directe au prochain cycle. Les incidents publics n’ont été inclus que lorsqu’une source primaire et un impact encore pertinent étaient disponibles; aucun incident spécifique suffisamment récent et vérifié n’a été ajouté cette fois.
