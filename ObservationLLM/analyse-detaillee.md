# Analyse détaillée

Vérification: **5 août 2026**. Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique.

**Fiabilité de cette édition.** La politique de sortie réseau a bloqué l’accès direct à la majorité des pages officielles (voir la note de méthode dans [sources.md](sources.md)). Seules les grilles Anthropic et Google/Vertex ont été lues directement; le reste provient de restitutions de recherche des pages officielles et de sources indépendantes datées. Les valeurs non confirmées sur la source primaire sont marquées « à confirmer » et doivent être revalidées avant décision d’achat.

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

**Entrées/sorties cette édition: aucune.** La liste reste identique à celle du 17 juillet. Le virage propriétaire de Meta (Muse Spark) et l’exclusion UE de Llama 4 multimodal affaiblissent sa pertinence belge, mais son poids de marché et l’écosystème Llama justifient son maintien pour l’instant. Les candidats à surveiller pour une future substitution restent MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots. Les conversions utilisent S55/S69 (1 EUR = 1,1535 USD = 8,1478 CNY) et la TVA standard belge S56 (21 %). Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Les indices indépendants agrégés (par exemple l’Artificial Analysis Intelligence Index, qui situe Kimi K3 à 57 et GLM-5.2 à 51 parmi les meilleurs open weight) restent des repères de tendance, pas des garanties par tâche. Protocoles, versions, échafaudages, budgets d’outils et dates diffèrent: ils ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible, mesuré en français et en néerlandais.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** La famille **GPT-5.6 (Sol / Terra / Luna)** remplace GPT-5.5 comme tête de gamme; Sol est le flagship raisonnement (5/30 USD par million entrée/sortie, 1,05 M de contexte). GPT-5.5 reste disponible mais supplanté. ChatGPT est l’application, l’API Responses la plateforme, Codex l’agent de code [S01–S02].

**Belgique.** Usage pertinent en FR/NL, à tester par domaine. L’API n’entraîne pas par défaut et publie une résidence Europe (traitement par OpenAI Ireland Ltd, SCC pour transferts) [S03]. Les crédits API restent facturés en USD; TVA/numéro de TVA à renseigner au checkout.

**Développement.** Baisse de prix du 30 juillet (Terra -20 %, Luna -80 %) [S05]. Nouveautés: Programmatic Tool Calling, points de rupture de cache explicites avec **durée minimale de cache de 30 min** (écritures de cache 1,25× l’entrée), Fast mode pour Sol, orchestration multi-agents (beta). Épingler le snapshot, journaliser les request IDs, budgéter séparément outils et long contexte. Le multiplicateur long contexte au-delà de ~272 k reste à confirmer pour la 5.6.

### 2. Anthropic

**Positionnement.** **Claude Opus 5** est le nouveau flagship (5/25 USD, 1 M de contexte), au même tarif qu’Opus 4.8 qu’il remplace. Deux paliers premium apparaissent, **Fable 5 et Mythos 5** (10/50 USD, Mythos en disponibilité limitée). Sonnet 5 offre le compromis coût-vitesse, Haiku 4.5 le bas coût; Claude Code est l’agent de développement [S06–S07].

**Belgique et données.** Application et API pertinentes pour FR/NL. **Deux points de coût à intégrer**: (1) **Sonnet 5 passe de 2/10 à 3/15 USD le 1er septembre 2026** (fin du prix de lancement); (2) le **nouveau tokenizer des modèles 4.7+** produit ~30 % de jetons en plus pour un même texte, ce qui augmente le coût réel indépendamment du prix affiché. Résidence: `inference_geo:"us"` applique ×1,1 sur toutes les catégories; les endpoints régionaux Bedrock/Vertex ajoutent +10 %. La résidence UE first-party est à confirmer sur la page dédiée [S08].

**Développement.** Excellente capacité d’outils et de code. Utiliser le prompt caching (lecture 0,1×, écriture 5 min 1,25×, 1 h 2×), batch -50 %, identifiants datés. Nouveauté: facturation Managed Agents (~0,08 USD/heure-session + jetons). Re-mesurer les coûts après le changement de tokenizer.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte ~1 M, recherche Google/Maps et agents managés. **Gemini 3.6 Flash** (1,50/7,50 USD) rejoint la grille avec une sortie moins chère que 3.5 Flash (9 USD); **Gemini 3.5 Flash-Lite** (0,30/2,50) et **Gemini 3.1 Pro Preview** (paliers ≤/>200 k) complètent l’offre [S09]. Gemini app, AI Studio, Gemini API et Vertex AI sont des surfaces différentes.

**Belgique.** Le tier payant Gemini API est requis pour servir des utilisateurs de l’EEE; le payant n’utilise pas le contenu pour améliorer les produits, et l’endpoint `eu` maintient le traitement ML dans l’UE [S11]. Les endpoints non-global sont +10 % depuis le 1er juillet. Facturation et TVA à vérifier dans le projet Google Cloud.

**Développement.** Cache, batch/flex -50 %, grounding (Search/Maps 14 USD/1 000 requêtes après 5 000 gratuites), code execution, file search, ZDR disponible. Compter les jetons de raisonnement et les requêtes de recherche; utiliser Vertex pour réseau, IAM, journalisation et région.

### 4. Microsoft

**Positionnement.** Microsoft 365 Copilot est l’application de travail, Azure OpenAI/Foundry la plateforme modèles, Copilot Studio la plateforme agents, GitHub Copilot l’assistant code traité séparément. **Nouveauté**: la famille GPT-5.6 (Sol/Terra/Luna) est déployable sur Foundry, y compris en **EU Data Zone Standard** (données maintenues en UE) — date exacte d’ouverture à confirmer [S13].

**Belgique.** M365 Copilot Business affiché à **15,60 EUR/utilisateur/mois hors TVA** sur la page européenne, plan M365 qualifiant possiblement requis [S12]. Azure offre régions, identité, réseau, EU Data Boundary et DPA.

**Développement.** Choix logique pour organisations déjà sur Entra, M365 et Azure. Risque: addition de licence utilisateur, crédits agents, appels modèle, recherche et connecteurs [S13–S14]. Produire une architecture de coûts complète et privilégier les déploiements EU Data Zone pour la résidence.

### 5. AWS

**Positionnement.** Bedrock agrège des modèles de nombreux fournisseurs; Agents apporte RAG, mémoire, code et collaboration multi-agent; AgentCore opère des agents de frameworks variés à la consommation [S15–S17]. **GPT-5.6 (Sol/Terra/Luna) est GA sur Bedrock depuis le 13 juillet, mais en régions US uniquement** (Sol → US East; Terra/Luna → US East + US West) — point de vigilance résidence.

**Belgique.** Régions européennes et DPA disponibles pour Bedrock/Nova, mais **GPT-5.6 n’est pas encore listé en UE**. Vérifier le tableau région/modèle et le routage cross-region.

**Développement.** IAM, VPC, PrivateLink, KMS, CloudWatch et Guardrails. Standard/Flex/Priority/Reserved et batch -50 % adaptent coût/latence. AgentCore facture une douzaine de composants séparément (coûts par session): les surveiller. Le verrouillage porte sur l’orchestration et les services.

### 6. Meta

**Positionnement.** **Virage majeur**: le flagship de Meta est désormais **Muse Spark**, son **premier modèle propriétaire/fermé** (Meta Superintelligence Labs), multimodal. L’**API Muse Spark 1.1** (9 juillet, OpenAI-compatible, 1,25/4,25 USD) est la première API payante de Meta. Llama 4 (Scout/Maverick/Behemoth) reste open weight sous licence communautaire [S18, S61–S63]. **Ceci met fin à l’ère du flagship open weight de Meta.**

**Belgique — alerte juridique.** La licence communautaire Llama 4 **exclut les personnes et sociétés domiciliées dans l’UE des modèles multimodaux** (incertitude réglementaire/AI Act); les chemins texte restent utilisables, mais la **vision est exclue pour les licenciés UE**. Les utilisateurs finaux de produits intégrant les modèles sont exemptés. Muse Spark est un service hébergé aux US: diligence transfrontière/RGPD standard requise, résidence UE à confirmer. Voie la plus sûre en UE: Llama 4 texte uniquement, ou hôtes tiers.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Vibe (Work/Code Mode + extension VS Code), Studio, agents, RAG, OCR, audio et code [S19–S21]. **Mistral Large 3** est le généraliste ouvert (Apache 2.0, ~675B MoE/41B actifs, 256 k), affiché à **0,50/1,50 USD** — nettement moins que le 2/6 USD de la baseline. Mistral Medium 3.5 (1,50/7,50 USD) vise agents/développement; Mistral Small 4 fusionne raisonnement, vision et code.

**Belgique.** Pertinence élevée: documentation française, traitement à Paris, **SecNumCloud (ANSSI) via Outscale** pour l’entreprise, pas d’entraînement sur Le Chat Enterprise et API payante, **facturation EUR possible** (entité UE). Zero Data Retention disponible mais réservé au plan Scale (appels stateless). Meilleure histoire de souveraineté du panel. Le néerlandais est à tester.

**Développement.** API simple, batch -50 %, modèles spécialisés, déploiement privé et nouveau **Studio Prompt & Skills Management** (système de référence versionné pour prompts et skills). La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** Grok 4.5 reste le flagship (app et API): court contexte 2/0,50/6 USD, long contexte 4/12 USD, 500 k de contexte, cutoff de connaissances 1er février 2026 [S22–S23]. Grok 4.1 Fast et une Agent Tools API sont référencés. Aucun changement de prix vérifié depuis la baseline.

**Belgique.** Disponibilité, prix local, TVA et résidence à confirmer (probablement USD). Par défaut, les requêtes API sont chiffrées et conservées 30 jours pour audit puis supprimées, sans entraînement; une **API Zero Data Retention** existe et est requise pour les données personnelles d’entreprise. DPA avec SCC disponible [S24].

**Développement.** Compatibilité API, tool use, structured outputs, remise cache (0,50 USD). Surveiller retraits et redirections de slugs; épingler et tester les versions; confirmer le seuil exact du long contexte (~200 k selon une source).

### 9. DeepSeek

**Positionnement.** Passage à la génération **V4**: **V4-Pro** (flagship, 1,6T/49B actifs, contexte 1 M, sortie jusqu’à 384 k, 0,435 USD miss / 0,003625 hit / 0,87 sortie) et **V4-Flash** (284B/13B actifs, 0,14/0,28 USD) [S25, S64–S65]. Poids ouverts sur Hugging Face; licence rapportée MIT (une source dit Apache 2.0, à confirmer).

**Belgique — changement cassant et RGPD.** Les endpoints hérités `deepseek-chat`/`deepseek-reasoner` (V3.2) **ont été retirés le 24 juillet**; seuls `deepseek-v4-pro` et `deepseek-v4-flash` subsistent (V4-Flash en beta publique le 31 juillet). L’API directe = société chinoise sous droit chinois, **données stockées en Chine, sans représentant RGPD UE**: plusieurs autorités (dont la Belgique) ont ouvert des enquêtes. **Non conforme en direct.** Voie propre: V4 via **Azure AI Foundry (résidence UE)**, **AWS Bedrock**, **Vertex** en régions UE, ou hôtes tiers UE. Facturation EUR à confirmer (USD sur la page officielle). Signature de coût: **cache disque automatique** (entrée en cache ~50–100× moins chère); endpoints compatibles OpenAI et Anthropic.

### 10. Alibaba Cloud / Qwen

**Positionnement.** **Qwen3.8-Max** (2,4T/~95B actifs, MoE, multimodal in, contexte 1 M) remplace Qwen 3.7 Max et est tarifé en **USD 2/6, cache 0,25** sur Model Studio. C’est le **premier Max de Qwen à poids ouverts**, la publication des poids étant annoncée vers le 10 août (non publiés au 5 août — à confirmer) [S27–S28, S66]. La famille Qwen3.x ouverte reste sous Apache 2.0.

**Belgique — RGPD.** L’endpoint international route via Singapour par défaut; une **région Frankfurt existe**, mais il n’y a pas de représentant RGPD UE clair et les transferts vers la Chine posent question. Voies propres: **AWS Bedrock Frankfurt** (Qwen3 managé, résidence UE) ou **auto-hébergement des poids ouverts** en UE (le plus propre pour la Belgique). Facturation majoritairement USD, EUR à confirmer. FR/NL supportés, qualité à tester.

### 11. NVIDIA

**Positionnement.** La famille **Nemotron 3** (poids/données/recettes ouverts) comprend Ultra (rapport technique 4 juin), **Super** (hybride Mamba-Transformer MoE, 120B/12B actifs, contexte 1 M) et **Nano Omni** (multimodal 30B/3B actifs, audio/vision/texte, 256 k). NIM fournit des microservices d’inférence; NeMo la personnalisation, l’évaluation, les garde-fous et l’outillage agents [S29–S31]. Aucune sortie clairement postérieure au 17 juillet n’est confirmée (dates Super/Nano Omni antérieures ou à confirmer).

**Belgique.** Pertinent pour entreprise, cloud privé et souveraineté technique par auto-hébergement. Coût = GPU/cloud + licence/support + exploitation. Déployer via NIM pour la portabilité; Nano Omni convient aux agents documents/audio à faible empreinte (~25 Go). Sécurité des agents, supply chain des conteneurs et télémétrie à configurer.

### 12. Cohere

**Positionnement.** **Command A** (2,50/10 USD, 256 k) et **Command A+** (MoE 218B/25B, vision + raisonnement + agentique, **sans prix par jeton public** — contact commercial) visent agents, RAG, multilingue et déploiement privé; North ajoute interface et workflows, Compass la recherche entreprise; North Mini Code (30B open weight) cible le code local [S32–S34].

**Belgique.** Argument de **souveraineté**: société canadienne, déploiement privé/on-prem possible en UE, hors CLOUD Act US (pertinent post-Schrems II). Bon candidat B2B pour recherche sur données internes. Pas de proposition grand public dominante; prix Command A+/North sur devis. Vérifier langues FR/NL par tâche et contrat de région.

### 13. IBM

**Positionnement.** watsonx.ai combine **Granite 4** (Micro ~0,017/0,110 USD; H Small 0,06/0,25 USD, 128 k), modèles tiers, RAG et agents; **watsonx.governance** ajoute inventaire, évaluation et conformité AI Act. Les modèles Granite (langue/vision/parole/embedding/guardian) sont **signés cryptographiquement** (provenance/intégrité) [S35–S36].

**Belgique.** Pertinent pour entreprises réglementées et hybride/on-prem (régions UE, Frankfurt). Coupler Granite 4 + watsonx.governance pour la traçabilité et la conformité AI Act. Les prix watsonx.ai partent nettement au-dessus d’un usage individuel (minimums mensuels par région); provisioned throughput pour volumes stables. Facturation EUR selon contrat, à confirmer.

### 14. GitHub Copilot

**Positionnement.** Assistant de code multi-modèles avec complétion, chat, CLI, revue, agent local et cloud. Plans individuels Free/Pro (10 USD)/Pro+ (39 USD)/Max (100 USD). **Clarification du modèle de crédits**: les crédits de base correspondent 1:1 au prix de l’abonnement (10/39/100 USD), plus un **« flex allotment »** d’usage variable en sus [S37]. L’usage est facturé aux tarifs API par jetons. L’app Billing Preview a été **retirée le 3 août** [S38].

**Belgique et données.** Individuels: interactions susceptibles d’entraîner les modèles sauf opt-out; Business (19 USD)/Enterprise (39 USD) exclus de l’entraînement. Rétention B/E: IDE non retenu, autres surfaces jusqu’à 28 jours. DPA disponible; TVA UE appliquée au checkout.

**Développement.** Meilleur choix de départ si GitHub/VS Code domine. L’agent de code tourne dans un sandbox Actions éphémère avec pare-feu/allow-list configurable et gating par revue requise sur les PR d’agent; support MCP. Mesurer qualité de PR, tests et failles; les sorties ne remplacent pas revue, SAST et tests.

### 15. Perplexity

**Positionnement.** Application de recherche sourcée, modèles Sonar et Agent API. **Crédits grand public désormais explicites**: Pro (20 USD) inclut 4 000 crédits bonus; Max (200 USD) 35 000 bonus + 10 000/mois; Enterprise Pro 40 USD/utilisateur, Enterprise Max 325 USD [S39]. L’API Sonar est en paiement à l’usage, séparée de l’abonnement (coût jetons + frais de recherche par requête).

**Belgique.** Utile pour veille et recherche, mais chaque citation doit être ouverte. **API: Zero Data Retention strict** (pas d’entraînement, pas de rétention); grand public: rétention activée par défaut mais contrôlable (opt-out); Enterprise sans entraînement, fichiers 7 jours. DPA publié; données personnelles supprimées sous 30 jours après fin de service [S40]. Pas de région UE dédiée: conformité via DPA/SCC + ZDR.

### 16. Anysphere / Cursor

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles (Auto, Composer 2.5, et désormais **Grok 4.5** ajouté au pool first-party) [S41–S43]. Plans Pro (20 USD)/Pro+ (60 USD)/Ultra (200 USD); Teams Standard 32 USD/siège (annuel), Premium 96 USD. Ce n’est pas un modèle de fondation.

**Données.** Privacy Mode interdit l’entraînement par Cursor et ses providers, avec accords ZDR, SOC 2 Type II et pen-tests réguliers; des données peuvent être conservées lors de détection d’abus [S42]. Politique inchangée depuis le 15 juillet. En équipe, l’imposer par politique. Pas de région UE dédiée.

**Développement.** Excellente ergonomie, mais coûts indexés sur l’usage des modèles et forte cadence de changement (crédits inclus doublés en promo jusqu’au 21 juillet, désormais terminée). Prévoir règles de dépôt (`.cursor/rules`), listes de commandes autorisées/interdites avec gate d’approbation terminal, validation diff/test et budget.

### 17. Replit

**Positionnement.** Agent de création d’apps intégré à l’IDE, bases et déploiement, avec **prix à l’effort** (le coût suit la complexité de la tâche). Core annuel ~20 USD/mois (25 USD de crédits); Pro ~95 USD (100 USD, crédits reportables un mois, jusqu’à 10 agents parallèles) [S44]. Aucun changement de plan détecté depuis la baseline.

**Belgique.** Bon pour prototypes et petites applications. SOC 2 Type II, infra Google Cloud, chiffrement au repos/transit, isolation par projet, DPA (EEE/Suisse/UK) avec SCC. **Publication de projets dans la région de son choix (dont UE)** dès Core. Risque de verrouillage plateforme et de coûts croissants en builds autonomes; exclusion de l’entraînement du code utilisateur à confirmer.

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, Inference Providers sans majoration (tarifs providers répercutés), Endpoints dédiés (~0,032 USD/cœur-h, ~0,50 USD/GPU-h) et Spaces. Plans Free/PRO (9 USD, 2 USD de crédits)/Team (20 USD/siège)/Enterprise [S45–S47]. Aucun changement depuis la baseline.

**Belgique.** **Régions UE (eu-west-1) sélectionnables** pour les Endpoints dédiés — la résidence UE la plus explicite du groupe outils. DPA Enterprise + SOC 2 Type 2, payloads non stockés, logs ~30 jours; contrôle de localisation des données et Resource Groups en Team/Enterprise. Le modèle et le provider choisis conservent leurs propres risques.

### 19. Moonshot AI / Kimi

**Positionnement.** **Kimi K3 est désormais le flagship vérifiable** (baseline: « trop récent »). Architecture MoE 2,8T/104B actifs, attention hybride, vision native, contexte 1 M. **Poids ouverts publiés le 27 juillet** sur Hugging Face (~1,56 To). Prix API 3/15 USD (cache lecture 0,30, écriture 15). Meilleur indice open weight mesuré (AAII 57), derrière les modèles fermés de tête. Kimi Code CLI + SDK agent [S48–S51, S60].

**Belgique.** Les poids améliorent la portabilité et la voie propre UE (auto-hébergement). L’API/kimi.com traite **en Chine (pas d’adéquation UE)**: difficile à justifier pour des données personnelles en direct. Un « Business Supplement » (1er juin) n’entraîne pas par défaut sur le contenu business et référence un DPA, mais **DPA/SCC/liste de sous-traitants sont à demander directement** (à confirmer). **Licence propriétaire à paliers de revenus** (« Kimi K3 License », pas MIT): accord commercial séparé au-delà de certains seuils de revenus/MAU. Le CLI peut lire/écrire, lancer des commandes et utiliser MCP/sous-agents: permissions minimales obligatoires.

### 20. Z.AI / GLM

**Positionnement.** **GLM-5.2** est confirmé comme flagship (1,40/4,40 USD, cache 0,26, **poids MIT** sur Hugging Face); la grille reprend les tarifs de l’ex-GLM-5.1, avec un contexte porté vers 1 M (à confirmer — certaines listes citent encore 200 k). Coding Plan pour IDE/agents: Lite ~12,60 USD/mois, Pro ~50,40 USD/mois, et **Max ~112 USD/mois désormais visible** [S52–S54, S67]. Indice AAII 51 (2e open weight).

**Belgique.** Prix USD attractifs, API compatible et **poids MIT** (grand avantage: auto-hébergement UE sans contrainte de licence). L’API hébergée route par l’infrastructure chinoise (problématique RGPD pour données personnelles); **voie propre = auto-héberger les poids MIT sur infra UE**. Aucune région UE Z.ai ni DPA standard publié n’a été confirmé. Langues surtout EN/ZH; FR/NL, région UE, DPA, rétention et disponibilité belge à confirmer.

## Recommandations transversales

- **Particulier:** privilégier l’application qui facture clairement en EUR et offre un contrôle d’entraînement; ne pas y placer de données de tiers.
- **Indépendant:** deux APIs, modèles épinglés, budget dur, logs sans contenu sensible, jeu d’évaluation FR/NL; anticiper la hausse Sonnet 5 (1er sept.) et le nouveau tokenizer Anthropic.
- **PME:** commencer par l’écosystème d’identité existant; exiger DPA, liste des sous-traitants, région, rétention, export et suppression.
- **Code:** mesurer une tâche complète jusqu’aux tests, pas le nombre de suggestions. Bloquer secrets et commandes destructrices.
- **Secteur réglementé:** gouvernance d’inventaire, classification des risques (l’AI Act « haut risque » est reporté à 2027-2028 mais la transparence GPAI s’applique depuis le 2 août), validation humaine, audit des outils et avis juridique spécialisé.
- **Open weight:** scanner poids/conteneurs, vérifier licence et provenance (attention aux licences à paliers comme Kimi K3 et à l’exclusion UE de Llama 4 multimodal), isoler l’inférence, tester les garde-fous et maintenir les correctifs.
- **Modèles chinois:** ne jamais utiliser l’API directe pour des données personnelles; passer par un hébergement UE (Azure Foundry, Bedrock Frankfurt) ou l’auto-hébergement des poids ouverts.

## Limites

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Cette édition a en outre subi un **blocage réseau des pages officielles**, si bien que la plupart des prix proviennent de restitutions de recherche plutôt que de lectures directes: les valeurs « à confirmer » doivent être revalidées. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. Aucun incident public spécifique suffisamment récent et vérifié n’a été retenu cette fois. La prochaine édition comparera les changements à cet état daté du 5 août 2026.
