# Analyse détaillée

Vérification initiale: **17 juillet 2026**. Revérification: **19 juillet 2026**. Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique. Les faits nouveaux du 19 juillet marqués « corroboré presse » (page officielle inaccessible au contrôle) sont à confirmer avant tout usage engageant; détail dans [historique.md](historique.md) et [sources.md](sources.md).

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

L’édition précédente n’existait pas dans le dépôt. **Entrées: les 20 acteurs. Sorties: aucune.** À partir de la prochaine édition, une entrée exigera plusieurs signaux durables et entraînera une sortie explicitement motivée. Les candidats à surveiller comprennent MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes; ils ne sont pas inclus pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S55 et la TVA standard belge S56. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Exemple: OpenAI publie pour GPT-5.5 82,7 % sur Terminal-Bench 2.0 et 58,6 % sur SWE-Bench Pro, tout en signalant un risque de mémorisation sur ce dernier [S02]. Z.AI revendique 77,8 sur SWE-bench Verified pour GLM-5 dans sa propre documentation [S53]. Une éval tierce en aveugle mérite plus de crédit qu’une éval maison: Kimi K3 arrive n° 1 sur LMArena Frontend Code Arena (~1 679), devant Claude Fable 5, ce qui corrobore indépendamment une partie de ses revendications [S62]. Ces protocoles, versions, échafaudages, budgets d’outils et dates diffèrent: ils ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** La famille **GPT-5.6 (Sol/Terra/Luna) est en disponibilité générale depuis le 9 juillet 2026** et remplace GPT-5.5 en tête d’affiche: contexte 1 M sur les trois tiers, prix Sol 5/30, Terra 2,50/15, Luna 1/6 USD par million (entrée/sortie); GPT-5.5 reste disponible (GPT-5.5 Instant est le modèle de chat ChatGPT par défaut) [S61, corroboré presse]. GPT-5.5 conserve 1,05 M de contexte et 128 k de sortie; ChatGPT est l’application, l’API Responses la plateforme, Codex l’agent de code [S01–S02]. Outils natifs: web, fichiers, génération d’image, interpréteur, shell hébergé, patch, computer use et MCP.

**Belgique.** L’usage est largement pertinent en français et néerlandais, mais la qualité doit être testée par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles [S03]. Les prix de l’API sont en USD hors taxes; le prix ChatGPT belge exact et la TVA doivent être confirmés au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration [S05]. Coût long contexte et outils à budgéter séparément.

### 2. Anthropic

**Positionnement.** Opus 4.8 vise les tâches difficiles; Sonnet 5/4.6 offre un compromis coût-vitesse; Claude Code est l’agent de développement. Le catalogue publié atteint 1 M de contexte pour le haut de gamme [S06–S08].

**Belgique et données.** Application et API sont pertinentes pour FR/NL, à valider sur le corpus réel. DPA, résidence et rétention varient entre API directe, AWS et Google Cloud; la résidence peut ajouter un multiplicateur. Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. Utiliser prompt caching pour les préfixes stables, batch pour l’asynchrone, budget d’effort raisonnable, et identifiants datés. Les dépréciations publiées imposent un inventaire de modèles.

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

**Positionnement.** Llama est d’abord une famille de poids et un écosystème; Meta AI est une application distincte [S18]. Le coût API dépend du fournisseur ou de l’infrastructure.

**Belgique.** Vérifier la licence du modèle, les restrictions d’usage et la disponibilité exacte des fonctions Meta AI dans l’UE. Le français est généralement utilisable; le néerlandais doit être évalué. L’auto-hébergement donne du contrôle mais crée les obligations d’exploitant.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Vibe, Studio, agents, RAG, OCR, audio et code [S19–S21]. Mistral Medium 3.5 est orienté agents/développement; Mistral Large est le généraliste phare affiché.

**Belgique.** Pertinence élevée: documentation française et options européennes/privées. Ne pas déduire la conformité du siège européen; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** Grok 4.5 est disponible comme app et API; la grille distingue contexte court/long, cache, voix, image et vidéo [S22–S23]. Grok 4.20 a aussi une configuration multi-agent dans sa carte modèle.

**Belgique.** Signal fort défavorable: au ~16 juillet 2026, **Grok 4.5 reste bloqué dans les 27 États de l’UE**, indisponibilité attribuée aux obligations de risque systémique de l’AI Act et aux exigences RGPD (transferts, décision automatisée). Un accès UE est annoncé « plus tard dans le mois » sans date confirmée [S66, corroboré presse]. Tant que ce blocage dure, Grok n’est pas un choix opérationnel depuis la Belgique; prix local, TVA et résidence resteront de toute façon à confirmer. La politique grand public ne couvre pas nécessairement l’API entreprise [S24].

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions.

### 9. DeepSeek

**Positionnement.** Modèles très compétitifs en coût, application gratuite, API et poids. **La gamme a basculé vers V4** (préversion le 24 avril 2026, version « officielle » à la mi-juillet) avec, pour la première fois, une **tarification heures pleines/creuses** (prix doublés en pointe, 09–12 h et 14–18 h) et le retrait des alias hérités `deepseek-chat`/`deepseek-reasoner` le 24 juillet 2026; la grille V3.2 documentée le 17 juillet est donc probablement dépassée [S25–S26, S65, corroboré presse].

**Belgique.** Signaux fortement défavorables au traitement de données personnelles: l’API stockerait les entrées sur des serveurs en Chine, sans clauses contractuelles types ni décision d’adéquation; l’application a été **interdite en Italie** (Garante) et fait l’objet d’enquêtes dans une dizaine de juridictions UE. Voie viable au RGPD: **auto-hébergement des poids ouverts sur une infrastructure UE** après revue de licence. Disponibilité commerciale, DPA, transferts, rétention, usage d’entraînement et facture belge restent à confirmer [S65].

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

**Incident de sécurité (16 juillet 2026).** Hugging Face a divulgué une intrusion dans une partie de son infrastructure de production, **pilotée de bout en bout par un système d’agents IA autonomes** (via un jeu de données malveillant exploitant un chargeur distant et une injection de template), avec escalade de privilèges et collecte d’identifiants sur un week-end. Accès à un ensemble limité de jeux de données internes et à des identifiants de service; **pas de trace d’altération des modèles/datasets/Spaces publics** et chaîne d’approvisionnement vérifiée saine. Enseignement transposable: charger un dataset ou un modèle distant est une surface de code arbitraire, et un attaquant agentique n’est lié par aucune politique d’usage alors que les garde-fous gênent la défense. Renforce l’exigence de scan des poids/datasets, d’isolation de l’inférence et de rotation des secrets [S67].

### 19. Moonshot AI / Kimi

**Positionnement.** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. **Kimi K3 (annoncé le 16 juillet 2026) est désormais mieux caractérisé**: ~2,8 T de paramètres (MoE, 16 experts actifs sur 896), contexte 1 M, vision native; il arrive **n° 1 sur LMArena Frontend Code Arena (~1 679), devant Claude Fable 5** (éval tierce en aveugle), tout en restant derrière GPT-5.6 Sol sur d’autres classements. Prix API cités: ~0,30 USD/M entrée cache-hit, ~3 USD/M cache-miss, ~15 USD/M sortie. **Nuance importante: les poids ne sont pas encore publiés — publication promise pour le 27 juillet 2026 sous licence MIT modifiée.** Séparer donc capacité mesurée (partiellement corroborée) et portabilité open weight (encore à venir) [S48–S51, S60, S62, corroboré presse].

**Belgique.** Les poids, une fois publiés, amélioreront la portabilité. À ce jour, les données de la plateforme Kimi seraient stockées **à Singapour**, la politique mentionne un usage des contenus pour l’entraînement **sans opt-out documenté** et aucun DPA/SCC public n’a été trouvé: ne pas y placer de données personnelles ou confidentielles avant validation contractuelle. Un accès conforme au RGPD passe surtout par des hôtes tiers UE exécutant les poids ouverts. API directe, abonnement, région, TVA et qualité FR/NL restent à confirmer. Le CLI peut lire/écrire, lancer des commandes, utiliser MCP et sous-agents: permissions minimales obligatoires.

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

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. Les incidents publics ne sont inclus que lorsqu’une source et un impact encore pertinent existent: l’incident de sécurité Hugging Face du 16 juillet 2026 a été ajouté à ce titre [S67].

Pour l’exécution du 19 juillet, l’accès direct à plusieurs pages primaires (openai.com, x.ai, mistral.ai, huggingface.co, ecb.europa.eu) a été bloqué par des protections anti-robot. Les faits nouveaux qui en dépendent (GPT-5.6, Kimi K3, DeepSeek V4, blocage UE de Grok) sont marqués « corroboré presse » et reposent sur plusieurs sources secondaires datées; ils sont significatifs mais doivent être reconfirmés sur la source officielle avant tout usage engageant. Confidence haute pour GPT-5.6 et le Digital Omnibus; moyenne pour les prix DeepSeek V4 et Kimi K3. La prochaine exécution devra reconfirmer ces éléments et comparer aux états des 17 et 19 juillet.
