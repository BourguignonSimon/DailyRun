# Analyse détaillée

Vérification: **25 juillet 2026** (édition précédente: 17 juillet 2026). Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique.

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

**Édition du 25 juillet 2026: entrées 20 acteurs, aucune sortie, aucun remplacement.** La composition est stable depuis le 17 juillet; le rachat de Cursor par SpaceX/xAI (annoncé le 16 juin, clôture attendue au T3 2026) n’est pas encore acté et Cursor reste listé comme acteur distinct sous surveillance. Une entrée future exigera plusieurs signaux durables et entraînera une sortie explicitement motivée. Les candidats à surveiller comprennent MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes; ils ne sont pas inclus pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S55 et la TVA standard belge S56. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Exemple récent: Moonshot place Kimi K3 en tête du Frontend Code Arena au moment de son annonce [S64], et OpenAI, Anthropic et Google accompagnent GPT-5.6, Opus 5 et Gemini 3.6 Flash de leurs propres évaluations. Z.AI revendique 77,8 sur SWE-bench Verified pour GLM-5 dans sa propre documentation [S53]. Ces protocoles, versions, échafaudages, budgets d’outils et dates diffèrent: ils ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** La famille **GPT-5.6** (Luna, Terra, Sol) remplace GPT-5.5 depuis la disponibilité générale du 9 juillet 2026; texte/vision en entrée, 1 M de contexte, cutoff connaissance février 2026; ChatGPT est l’application, l’API Responses la plateforme, Codex l’agent de code [S01–S02, S61]. Tarifs entrée/sortie par million: Luna 1/6, Terra 2,50/15, Sol 5/30 USD. Nouvelles fonctions d’API annoncées: appel d’outils programmatique, orchestration multi-agents et points de rupture de cache de prompt. Outils natifs: web, fichiers, génération d’image, interpréteur, shell hébergé, patch, computer use et MCP.

**Belgique.** L’usage est largement pertinent en français et néerlandais, mais la qualité doit être testée par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles [S03]. Les prix de l’API sont en USD hors taxes; le prix ChatGPT belge exact et la TVA doivent être confirmés au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. GPT-5.5 reste disponible: épingler le snapshot exact, tester GPT-5.6 (choisir Luna/Terra/Sol selon le rapport coût/qualité), journaliser les request IDs et maintenir des évaluations avant migration [S05]. Coût long contexte et outils à budgéter séparément.

### 2. Anthropic

**Positionnement.** **Claude Opus 5** (24 juillet 2026) succède à Opus 4.8 pour les tâches difficiles et le travail agentique long; Sonnet 5 offre un compromis coût-vitesse; Claude Code est l’agent de développement. Opus 5: 1 M de contexte (défaut et maximum), 128 k de sortie, raisonnement activé par défaut, échelle d’effort low→max, Fast mode à 10/50 USD; minimum de cache abaissé à 512 jetons; changements d’outils en cours de conversation (bêta) [S06–S08, S62]. Anthropic le positionne comme « intelligence frontière à la moitié du coût de Fable 5 ». Opus 4.8 et Sonnet 5 restent disponibles.

**Belgique et données.** Application et API sont pertinentes pour FR/NL, à valider sur le corpus réel. Opus 5 est disponible sur l’API directe, Amazon Bedrock, Google Cloud et Microsoft Foundry (Fast mode API directe uniquement). DPA, résidence et rétention varient selon la surface; la résidence peut ajouter un multiplicateur. Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. Migration Opus 4.8→Opus 5: mettre à jour l’ID de modèle et revoir deux changements cassants — raisonnement activé par défaut (impact sur `max_tokens`) et désactivation du raisonnement refusée aux efforts `xhigh`/`max`. Utiliser prompt caching pour les préfixes stables, batch -50 % pour l’asynchrone, budget d’effort adapté, identifiants datés. Les dépréciations publiées imposent un inventaire de modèles.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M, recherche Google/Maps et agents managés. **Gemini 3.6 Flash** (21 juillet 2026) est le modèle rapide de référence: entrée maintenue à 1,50 USD, sortie abaissée de 9 à 7,50 USD par million, cache 0,15 USD + stockage 1 USD/M/h, et environ 17 % de jetons de sortie en moins à tâche égale; Gemini 3.5 Pro est annoncé à venir [S09–S11, S63]. Gemini app, AI Studio, Gemini API et Vertex AI sont des surfaces différentes.

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

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Vibe, Studio, agents, RAG, OCR, audio et code [S19–S21]. Mistral Medium 3.5 est orienté agents/développement; Mistral Large est le généraliste phare affiché. Élargissement récent hors du texte pur: **Robostral Navigate** (navigation robotique mono-caméra, entraîné en simulation, agnostique matériel), **Mistral OCR 4** (boîtes englobantes, classification de blocs, scores de confiance) et un nouveau MoE « fat but sparse » en accès anticipé partenaires, présenté comme la prochaine tentative de combler l’écart frontière [S67].

**Belgique.** Pertinence élevée: documentation française et options européennes/privées. Ne pas déduire la conformité du siège européen; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** xAI opère désormais sous SpaceX (fusion de février 2026). **Grok 4.5** (8 juillet 2026) est disponible comme app et API, co-entraîné avec Cursor sur des GPU GB300; la grille distingue contexte court (2/6 USD) et au-delà de 200 k (4/12 USD), avec une variante rapide (4/18 USD), plus cache, voix, image et vidéo [S22–S23, S65]. Grok 4.20 a aussi une configuration multi-agent dans sa carte modèle.

**Belgique.** L’UE est citée dans des cartes modèles précédentes, mais disponibilité, prix local, TVA et résidence de Grok 4.5 doivent être confirmés. La politique grand public ne couvre pas nécessairement l’API entreprise [S24]. Le rapprochement SpaceX/xAI–Cursor mérite un suivi de gouvernance et de propriété des données.

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions.

### 9. DeepSeek

**Positionnement.** Modèles très compétitifs en coût, application gratuite, API et poids. La page prix contrôlée publie cache hit/miss et contexte, mais peut précéder une version plus récente [S25–S26].

**Belgique.** Disponibilité commerciale, DPA, transferts, rétention, usage d’entraînement et facture belge sont à confirmer. Pour données sensibles, préférer des poids hébergés par un fournisseur UE après revue de licence.

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

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles. Ce n’est pas un modèle de fondation [S41–S43]. **Changement d’actionnariat en cours**: SpaceX (parent de xAI) rachète Anysphere/Cursor pour 60 Md USD en actions (annonce du 16 juin 2026, clôture attendue au T3 2026, sous réserve réglementaire); Cursor a co-entraîné Grok 4.5 et a restaté le 22 juillet 2026 un pool d’usage doublé pour Grok/Composer [S65–S66].

**Données.** Privacy Mode interdit l’entraînement par Cursor et ses providers, annonce des accords ZDR et chiffrement; des données peuvent être conservées lors de détection d’abus [S42]. En équipe, l’imposer par politique. Surveiller l’évolution de la politique de données après clôture du rachat.

**Développement.** Excellente ergonomie, mais coûts indexés sur l’usage des modèles et forte cadence de changement. Prévoir règles de dépôt, commandes interdites, validation diff/test et budget.

### 17. Replit

**Positionnement.** Agent de création d’apps intégré à l’IDE, bases et déploiement. Core annuel 20 USD/mois équivalent avec 25 USD de crédits; Pro 95 USD avec 100 USD [S44].

**Belgique.** Bon pour prototypes et petites applications; TVA et localisation à vérifier. Risque de verrouillage plateforme et de coûts croissants en builds autonomes.

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, Inference Providers sans majoration annoncée, Endpoints dédiés et Spaces [S45–S47]. Ce n’est pas un modèle unique.

**Belgique.** Endpoint AWS eu-west-1 disponible; DPA Enterprise et SOC 2 Type 2 annoncés. Les payloads ne sont pas stockés, logs 30 jours selon page sécurité [S47]. Le modèle et provider choisis conservent leurs propres risques.

### 19. Moonshot AI / Kimi

**Positionnement.** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. **Kimi K3** (annoncé le 16 juillet 2026) est un MoE de 2,8 T de paramètres, 1 M de contexte, entrées texte/image/vidéo, décrit comme le plus grand modèle open weight publié; poids sous licence MIT modifiée annoncés pour le 27 juillet 2026 et positionnement de tête au Frontend Code Arena au lancement [S48–S51, S60, S64]. Les scores restent des capacités déclarées à revalider indépendamment.

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

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. Cette édition du 25 juillet 2026 compare l’état à celui du 17 juillet: renouvellement des modèles de tête (GPT-5.6, Opus 5, Gemini 3.6 Flash), confirmation de Kimi K3 et consolidation SpaceX/xAI–Cursor. Le taux CNY n’a pas été revérifié ce cycle (variation attendue faible). Le prix Sol de GPT-5.6 (5/30) a été confirmé via source secondaire; le cache prompt de GPT-5.6 n’a pas de valeur officielle stable relevée et est marqué ND. Les incidents publics n’ont été inclus que lorsqu’une source primaire et un impact encore pertinent étaient disponibles.
