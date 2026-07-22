# Analyse détaillée

Vérification: **22 juillet 2026**. Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique.

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

Par rapport à l’édition du 17 juillet 2026, **aucune entrée ni sortie**: la composition des 20 acteurs est inchangée. Cette édition **corrige** des faits erronés/périmés (voir plus bas) et **intègre** les évolutions survenues entre le 17 et le 22 juillet. Les candidats à surveiller comprennent MiniMax, Databricks/Mosaic, Oracle OCI et Salesforce; ils ne sont pas inclus pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots. Les conversions utilisent S61 (BCE, 21 juillet) et la TVA standard belge de 21 % (S62). Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Protocoles, versions, échafaudages, budgets d’outils et dates diffèrent et ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible, incluant du français et du néerlandais.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** La frontière est désormais **GPT-5.6** (famille **Sol / Terra / Luna**), GA le **9 juillet 2026** sur ChatGPT, Codex et l’API, après une préversion depuis ~26 juin [S02, S04]. GPT-5.5 reste disponible en tier hérité. Sol vise les tâches difficiles (5/0,50/30 USD par million entrée/cache/sortie, 1 M de contexte); Terra équilibre coût/qualité (2,50/15); Luna est le tier économique (1/6) [S01].

**Belgique.** Usage pertinent en français et néerlandais, à tester par domaine. L’API ne s’entraîne pas par défaut et publie des contrôles de résidence EEE/Suisse pour clients/services éligibles (ZDR sur validation commerciale, DPA mis à jour au 1er janvier 2026) [S03]. Prix API en USD HT; prix ChatGPT belge et TVA à confirmer au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration. Le **multiplicateur long contexte au-delà de 272 k** (entrée ×2, sortie ×1,5, sur toute la requête) doit être testé avant d’autoriser des contextes géants [S01].

### 2. Anthropic

**Positionnement.** La tête de gamme est **Claude Fable 5** (« classe Mythos », ~10/50 USD, à confirmer), au-dessus d’**Opus 4.8** (5/25 USD, sorti le 28 mai). **Sonnet 5** (sorti le 30 juin) offre 1 M de contexte **sans surcoût au-delà de 200 k** au prix de lancement **2/10 USD jusqu’au 31 août**, puis 3/15 [S06–S09]. Claude Code reste l’agent de développement.

**Belgique et données.** Application et API pertinentes pour FR/NL, à valider sur le corpus réel. **Point de vigilance:** Anthropic n’offre **pas de résidence UE native** — l’inférence first-party est aux États-Unis; une résidence UE réelle passe par **AWS Bedrock ou Google Cloud** en région UE. L’entraînement grand public (claude.ai) est passé en opt-in le 8 octobre 2025, avec rétention jusqu’à 5 ans; l’API/commercial n’entraîne pas par défaut [S06].

**Développement.** Excellente capacité d’outils et de code. Utiliser prompt caching pour les préfixes stables (lecture ≈-90 %, écriture ×1,25), batch -50 %, budget d’effort raisonnable et identifiants datés. Inventorier les modèles face aux dépréciations.

### 3. Google

**Positionnement.** Le **flagship est Gemini 3.1 Pro** (2/0,20/12 USD ≤200 k; 4/18 au-delà, 1 M de contexte) [S11]. **Changement dans la fenêtre:** le **21 juillet**, Google a mis en GA **Gemini 3.6 Flash** (1,50/0,15/7,50 USD, sortie moins chère que 3.5 Flash), **3.5 Flash-Lite** et **3.5 Flash Cyber**, et a **teasé Gemini 4** [S10, S67]. Gemini 3.5 Pro reste annoncé « à venir » (préversion entreprise, 2 M de contexte, prix non officiel — à confirmer).

**Belgique.** Gemini API/Vertex sont annoncés disponibles dans de nombreuses régions dont l’EEE; **Vertex offre des régions de résidence UE** — la meilleure histoire de résidence native des trois grands [S12]. Le payant n’utilise pas le contenu pour améliorer les produits selon la grille; facturation et TVA à vérifier dans le projet Google Cloud.

**Développement.** Cache, batch, Flex, Priority, grounding Search/Maps, code execution et file search. Compter les jetons de raisonnement et les requêtes de recherche; utiliser Vertex pour réseau, IAM, journalisation et région.

### 4. Microsoft

**Positionnement.** Microsoft 365 Copilot est l’application de travail, Azure OpenAI/Foundry la plateforme modèles, Copilot Studio la plateforme agents. **GPT-5.6 est le modèle préféré de M365 Copilot** depuis le 9 juillet [S05].

**Belgique — décision urgente.** Microsoft a **onboardé OpenAI comme nouveau sous-traitant** de M365 Copilot et Copilot Studio, donnant accès à des modèles opérés par OpenAI sur son infrastructure, **séparément d’Azure OpenAI**. Le contrôle admin existe depuis le 9 juillet, **désactivé par défaut, mais auto-activé pour tous les tenants le 24 juillet 2026** sauf opt-out d’un administrateur IA. Le traitement par ce chemin **peut sortir de l’EU Data Boundary** [S16–S17, S19]. Les organisations belges à DPA strict doivent trancher **avant le 24 juillet**. Prix Business ~18 USD/utilisateur/mois (annuel promo) / ~21 standard; équivalent EUR HT ~15,60 € à confirmer; plan M365 qualifiant requis [S18].

**Développement.** Choix logique sur Entra, M365 et Azure. Modéliser la facture complète: licence utilisateur + crédits agents + appels modèle + recherche/connecteurs, et documenter la frontière des données par chemin de modèle.

### 5. AWS

**Positionnement.** Bedrock agrège des modèles de nombreux fournisseurs; Agents apporte RAG, mémoire, code et multi-agent; AgentCore opère des agents de frameworks variés [S21, S25]. **Dans la fenêtre:** **GPT-5.6 (Sol/Terra/Luna) GA sur Bedrock** (9 juillet, cache -90 %, traitement en région), nouvelle console Bedrock (13 juillet), et **AgentCore étendu à l’Europe (Milan, Espagne)** (1er juillet) [S21–S24].

**Belgique.** Régions UE (Francfort, Irlande, Paris, Milan, Espagne) et DPA; l’extension d’AgentCore en Milan/Espagne réduit la latence d’une pile agentique restant en UE. Vérifier le tableau région/modèle et bloquer le cross-region non approuvé. Réserve de juridiction (CLOUD Act) pour un fournisseur US.

**Développement.** IAM, VPC, KMS, CloudWatch et Guardrails. Standard/Flex/Priority/Reserved et batch adaptent coût/latence. Le verrouillage porte sur l’orchestration et les services; tracer chaque coût aval d’un agent.

### 6. Meta

**Positionnement.** Llama reste une famille de poids; **Muse Spark 1.1** (Superintelligence Labs, 9 juillet, multimodal, 1 M de contexte) inaugure une ligne propriétaire au-dessus de Llama, en **préversion US-only** [S38].

**Belgique.** **Vigilance forte:** la licence communautaire Llama 4 **interdit aux entreprises domiciliées dans l’UE** l’usage/hébergement des modèles multimodaux; seuls les modèles texte plus légers sont autorisés. Muse Spark 1.1 n’est pas disponible en UE. L’usage commercial UE du multimodal Llama 4/Muse Spark est **effectivement bloqué** [S39]. Le français est généralement utilisable; le néerlandais est à évaluer. L’auto-hébergement des modèles texte donne du contrôle mais crée les obligations d’exploitant.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts et modèles premium. **Medium 3.5** (sorti le 29 avril, ~1,50/7,50 USD) est le moteur par défaut derrière **Vibe** (ex-« Le Chat »), qui exécute des agents distants; **Large 3** (256 k) est le généraliste. Studio ajoute le no-code et Document AI [S35–S36]. Le prix de Large 3 est disputé selon les trackers (0,50/1,50 vs 2/6) — à confirmer.

**Belgique.** Pertinence élevée: documentation française, options européennes/privées, API sans entraînement par défaut, présence sur la plateforme IA du Parlement européen. Ne pas déduire la conformité du siège; vérifier DPA, région, rétention et licence du plan choisi. Le néerlandais est à tester.

**Développement.** API simple, batch -50 %, modèles spécialisés (OCR, audio) et déploiement privé. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** **Grok 4.5** (sorti le 8 juillet, ~1,5 T « V9 ») est disponible en app et API: 2/0,50/6 USD ≤200 k, 500 k de contexte, avec doublement entrée/cache/sortie au-delà de 200 k et batch -50 % [S13–S14].

**Belgique — risque RGPD le plus élevé.** noyb a déposé 9 plaintes RGPD sur l’entraînement à partir des posts de 60 M+ d’utilisateurs UE de X; des enquêtes sont actives (DPC irlandaise, CNIL, ICO). Le réglage « autoriser l’entraînement » reste **coché par défaut** sur X [S15]. La politique grand public ne couvre pas nécessairement l’API entreprise; disponibilité, prix local, TVA et résidence de Grok 4.5 à confirmer.

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions.

### 9. DeepSeek

**Positionnement.** **DeepSeek V4** est passé en production **à la mi-juillet** (V4-Flash et V4-Pro, 1 M de contexte); `deepseek-chat`/`deepseek-reasoner` pointent vers V4, et **les alias V3.2 sont retirés le 24 juillet** [S42–S43]. Tarifs très bas: V4-Flash ≈ 0,14 miss / 0,0028 hit / 0,28 USD; V4-Pro ≈ 0,435 / 0,0036 / 0,87. **Nouveau schéma heures pleines/creuses** (×2 aux heures de pointe de Pékin) [S43].

**Belgique.** **RGPD non défendable en direct:** pas de résidence UE, routage via infrastructure chinoise, représentant UE de la politique « European Region » **rejeté** par des DPA allemands, blocage du Garante italien maintenu, enquêtes dans 13 juridictions UE [S44]. Pour données sensibles, uniquement via un hôte UE tiers (ex. revendeur à Francfort, facturation EUR) après revue de licence.

### 10. Alibaba Cloud / Qwen

**Positionnement.** Qwen 3.7-Max (annoncé le 20 mai, ~1,25/3,75 USD international, 1 M de contexte). **Dans la fenêtre:** **Qwen3.8-Max-Preview** (19 juillet, 2,4 T de paramètres, multimodal), **sans prix au jeton autonome** — vendu via Token Plan (≈10 % du standard, remise nuit -80 %) [S45–S46]. Qwen3 Coder Plus est tarifé par bande de contexte.

**Belgique.** Meilleure histoire UE que DeepSeek grâce à une **région Francfort** avec stockage en région, **mais** l’endpoint par défaut route via **Singapour**, les clés région ne sont pas interchangeables, et Alibaba **n’a pas de représentant RGPD** — exercice des droits incertain. Alternative: Qwen3 managé sur AWS Bedrock Francfort. Facturation EUR de la région Francfort non confirmée [S47]. FR/NL à tester.

### 11. NVIDIA

**Positionnement.** **Nemotron 3** (Nano/Super/Ultra): **Ultra 550B MoE / 55B actifs** (4 juin, poids + données + recettes sous licence OpenMDW-1.1) est le raisonneur frontière; Super 120B (11 mars) et Nano Omni (avril) complètent [S32–S33]. NIM industrialise l’inférence; NeMo couvre personnalisation, évaluation, garde-fous et le **NeMo Agent Toolkit** pour multi-agents [S34]. Ce n’est pas un abonnement grand public comparable à ChatGPT.

**Belgique.** Pertinent pour entreprise, cloud privé et souveraineté: poids ouverts déployables on-prem/UE/air-gap, sans exfiltration de données. Coût = GPU/cloud + licence/support (AI Enterprise) + exploitation. Sécurité des agents, supply chain des conteneurs et télémétrie à configurer.

### 12. Cohere

**Positionnement.** **Command A+** (`command-a-plus-05-2026`, MoE, déployable en privé) est le flagship au-dessus de Command A (2,50/10 USD, 256 k). **North** est la plateforme agentique entreprise (on-prem/air-gap/VPC); **North Mini Code** (30B MoE, poids ouverts) est sorti en juin [S29–S31].

**Belgique.** Histoire de souveraineté la plus forte pour finance/défense/public: agentique on-prem/air-gap, résidence UE et pas d’exfiltration fournisseur. Peu d’offre grand public. Vérifier langues FR/NL par tâche et contrat de région.

### 13. IBM

**Positionnement.** watsonx.ai (v2.4, désormais sur IBM Z/LinuxONE avec Spyre) combine **Granite 4.x** (hybride Mamba-transformer, ex. granite-4-h-small à 0,06/0,25 USD), modèles tiers, RAG et agents; watsonx.governance ajoute inventaire, évaluation et conformité [S26–S28].

**Belgique.** Pertinent pour secteurs réglementés (finance/public) exigeant inférence résidente UE (Francfort) + outillage AI Act. Les prix affichés sont indicatifs, variables par pays et hors taxes, avec minima régionaux; standard bien au-dessus d’un usage individuel.

### 14. GitHub Copilot

**Positionnement.** Assistant de code multi-modèles: complétion, chat, CLI, revue, agent local et cloud. Plans individuels Free/Pro/Pro+/Max, avec **crédits IA à l’usage** (1 crédit = 0,01 USD) depuis le 1er juin 2026; les complétions et Next Edit restent illimitées et sans crédit [S48–S49]. Pro 10 USD (15 USD de crédits) / Pro+ 39 (70) / Max 100 (200); Business ~19, Enterprise ~39 par utilisateur (à confirmer).

**Belgique et données.** Individuel: interactions susceptibles d’entraîner sauf opt-out; Business/Enterprise exclus de l’entraînement, avec indemnisation PI et contrôles d’exclusion. Disponible en UE; détails d’opt-out entreprise à confirmer. DPA disponible.

**Développement.** Meilleur choix de départ si GitHub/VS Code domine. La facturation à l’usage change la prévision de coût: mesurer qualité de PR, tests et failles; les sorties ne remplacent pas revue, SAST et tests.

### 15. Perplexity

**Positionnement.** Application de recherche sourcée; côté développeur, **Sonar API** (1/1; Sonar Pro 3/15; Reasoning Pro 2/8; Deep Research 2/8 + frais de citation/raisonnement/recherche) et une **Agentic Research API** qui donne accès à des modèles tiers (GPT-5.x, Claude, Gemini, xAI) au tarif du fournisseur, plus 0,005 USD/recherche web et 0,0005 USD/URL [S53–S54]. Des frais de contexte par requête s’ajoutent.

**Belgique.** Utile pour veille et recherche, mais chaque citation doit être ouverte et privilégier les sources primaires. API non entraînée (posture standard), disponible en UE; DPA/ZDR à confirmer. Prix grand public EUR/TVA à vérifier au checkout.

### 16. Anysphere / Cursor

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles. Plans Free/Pro/Ultra/Teams; **Teams Standard 40 USD/utilisateur/mois**, nouveau siège **Premium 120 USD (96 en annuel)** avec 5× l’usage Standard [S50]. Ce n’est pas un modèle de fondation.

**Données.** **Privacy Mode** interdit l’entraînement par Cursor et ses providers, avec accords **zéro rétention (ZDR)** annoncés et chiffrement; des données peuvent être conservées lors de détection d’abus. Politique de données mise à jour le **15 juillet 2026** (pas de changement depuis) [S51]. En équipe, imposer Privacy Mode et SSO SAML/OIDC.

**Développement.** Excellente ergonomie, coûts indexés sur l’usage des modèles et cadence de changement élevée. Prévoir règles de dépôt, commandes interdites, validation diff/test et budget par agent/modèle.

### 17. Replit

**Positionnement.** Agent de création d’apps intégré à l’IDE, bases et déploiement. **Core 25 USD/mois (17 en annuel) avec 20 USD de crédits sans report; Pro 100 USD** avec report d’un mois [S52].

**Belgique.** Bon pour prototypes et petites applications; TVA et localisation à vérifier. Risque de verrouillage plateforme et de coûts croissants (les utilisateurs rapportent 50–150 USD/mois au-delà de la base) en builds autonomes.

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, **Inference Providers** (routeur unifié `router.huggingface.co`, 45 000+ modèles, 18+ partenaires, **sans majoration HF**), **Endpoints** dédiés et Spaces [S40–S41]. PRO 9 USD/mois, Team 20, Enterprise 50 par utilisateur, avec crédits d’inférence inclus puis PAYG au tarif provider. Endpoints facturés à l’heure/à la minute avec scale-to-zero.

**Belgique.** Endpoints en régions AWS **US et UE (eu-west-1)**; DPA Enterprise. Route pratique vers des modèles ouverts avec résidence UE. Le modèle et le provider choisis conservent leurs propres risques (licence, code distant, scan pickle/malware).

### 19. Moonshot AI / Kimi

**Positionnement.** Kimi couvre modèles open weight, application, **Kimi Code CLI** et SDK agent. **Kimi K3** (annoncé le 16 juillet, 2,8 T MoE, multimodal, 1 M de contexte) a ses **poids ouverts toujours attendus le 27 juillet** (licence MIT modifiée); l’API est active (K3 3/0,30/15 USD; K2.7 0,95/4; K2.5 0,60/3) [S55–S57]. Abonnements Moderato 19 / Allegretto 39 / Allegro 99 / Vivace 199 USD, hors API [S58].

**Belgique.** Les poids amélioreront la portabilité et la résidence UE par auto-hébergement une fois publiés. API directe, DPA, région, TVA et qualité FR/NL restent à confirmer (fournisseur chinois — vigilance résidence). Le CLI peut lire/écrire, lancer des commandes, utiliser MCP et sous-agents: permissions minimales obligatoires.

### 20. Z.AI / GLM

**Positionnement.** **GLM-5.2** (744B MoE, ~40B actifs, **1 M de contexte**, poids MIT, sorti mi-juin) est le flagship, avec GLM-5-Turbo, GLM-4.7 et GLM-4.5-Air; API 1,40/0,26/4,40 USD [S59–S60]. **Coding Plan** Lite 18 / Pro 72 / Max 160 USD (remises 10/20/30 %, multiplicateurs de quota, promo hors-pointe jusqu’en septembre). Pas de GLM-5.3 (rumeur août–septembre).

**Belgique.** Prix USD attractifs, API compatible OpenAI et poids MIT (auto-hébergement UE possible). Documents surtout anglais/chinois; FR/NL, région UE, DPA, rétention et disponibilité belge à confirmer (fournisseur chinois).

## Recommandations transversales

- **Particulier:** privilégier l’application qui facture clairement en EUR et offre contrôle d’entraînement; ne pas y placer de données de tiers.
- **Indépendant:** deux APIs, modèles épinglés, budget dur, logs sans contenu sensible et jeu d’évaluation FR/NL.
- **PME:** commencer par l’écosystème d’identité existant; exiger DPA, liste des sous-traitants, région, rétention, export et suppression. Pour M365, trancher le sous-traitant OpenAI avant le 24 juillet.
- **Code:** mesurer une tâche complète jusqu’aux tests, pas le nombre de suggestions. Bloquer secrets et commandes destructrices.
- **Secteur réglementé:** gouvernance d’inventaire, classification des risques, validation humaine, audit des outils et avis juridique spécialisé; suivre le report des échéances haut risque et les obligations du 2 août 2026.
- **Open weight:** scanner poids/conteneurs, vérifier licence et provenance (attention Llama 4 UE), isoler l’inférence, tester les garde-fous et maintenir les correctifs.

## Limites

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat, et plusieurs pages primaires ont renvoyé HTTP 403 (chiffres recoupés via sources secondaires, cf. [sources.md](sources.md)). Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. Les faits les plus récents (Fable 5, prix exacts de cache de Terra/Luna, prix Large 3, taux EUR/CNY, date d’entrée en vigueur du Digital Omnibus) sont signalés « à confirmer » et doivent être revérifiés auprès des sources primaires avant tout engagement.
