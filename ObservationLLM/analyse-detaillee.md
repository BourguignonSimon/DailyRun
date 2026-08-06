# Analyse détaillée

Vérification : **6 août 2026**. Point de vue : particulier ou développeur résidant en Belgique. Cette analyse est informative ; les volets RGPD et AI Act ne constituent pas un avis juridique.

> **Avertissement méthodologique de ce cycle.** L’ouverture directe des pages officielles a été bloquée (HTTP 403 anti-bot / egress) sur presque tous les domaines ; **seuls GitHub Copilot et Microsoft 365 Copilot (pricing) ont été lus directement**. Les autres faits proviennent de recherches web indexant les pages officielles, corroborées par des trackers réputés. Les prix sont **indicatifs** et les points non recoupés sont marqués « à confirmer ». Voir [sources.md](sources.md).

## Méthodologie et sélection

Cinq familles de signaux ont été examinées : adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent : concepteurs de modèles, applications, plateformes cloud/API et agents de code.

**Composition inchangée ce cycle.** Entrées : les 20 mêmes acteurs. Sorties : aucune. Une entrée exigerait plusieurs signaux durables et entraînerait une sortie explicitement motivée. Les candidats à surveiller comprennent MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes ; ils ne sont pas inclus pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent **S61 (1 EUR = 1,1515 USD, BCE 4 août 2026)** et la TVA standard belge **S64 (21 %)**. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Les indices indépendants (Artificial Analysis Intelligence Index, par ex. Kimi K3 à 57,1 / #4 ce mois, Nemotron 3 Ultra ~48) donnent un ordre de grandeur mais restent sensibles au protocole, à la version, à l’échafaudage, au budget d’outils et à la date. Ces mesures ne sont pas comparées directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible, en français et néerlandais quand c’est pertinent.

## Ce qui a bougé depuis le 17 juillet 2026 (résumé)

Trois des quatre modèles de tête ont changé (**GPT-5.6 Sol**, **Claude Opus 5**, **Gemini 3.6 Flash**), Meta a basculé vers un modèle fermé indisponible en UE, et l’essentiel du bloc chinois a renouvelé sa génération (**DeepSeek V4**, **Qwen3.8-Max**, **Kimi K3**, **GLM-5.2**). Le jalon **AI Act du 2 août 2026** est entré en application. Le détail par acteur suit ; les écarts sont consolidés dans [historique.md](historique.md).

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** La famille **GPT-5.6 (Sol / Terra / Luna)**, GA le 9 juillet 2026, remplace GPT-5.5. **Sol** est le modèle frontière (5/0,50/30 USD, contexte 1,05 M, sortie 128 K) ; Terra le milieu de gamme, Luna l’option volume. ChatGPT est l’application, Codex l’agent de code bundlé [S01–S02, S66].

**Changement du cycle.** Baisses confirmées du **30 juillet 2026** : Terra −20 % (2/12 USD), Luna −80 % (0,20/1,20 USD) ; Sol inchangé. Le multiplicateur long contexte (>272 K : entrée ×2, sortie ×1,5) demeure.

**Belgique.** Pertinent en FR/NL, à tester par domaine. L’API n’entraîne pas par défaut et publie des contrôles de résidence EEE (sales-gated ; stockage-at-rest garanti, inférence in-region à confirmer) [S03]. Prix API en USD hors taxes ; ChatGPT belge à confirmer au checkout.

**Développement.** Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration [S05]. Budgéter séparément long contexte et outils.

### 2. Anthropic

**Positionnement.** **Claude Opus 5** (lancé le 24 juillet 2026) est le nouveau modèle Opus courant : 5/0,50/25 USD, contexte 1 M, sortie 128 K, « proche de Fable 5 à moitié prix ». **Fable 5** reste le haut de gamme (10/50 USD, classe Mythos) ; **Sonnet 5** le compromis coût-vitesse ; **Haiku 4.5** l’économique ; Claude Code l’agent [S06–S08, S67].

**Changement du cycle.** Opus 5 remplace Opus 4.8. **À surveiller** : le tarif introductif de Sonnet 5 (2/10 USD) prend fin le **31 août 2026** et passe à **3/15 USD au 1er septembre** [S68].

**Belgique et données.** Pas d’entraînement sur les données des produits commerciaux ; rétention ~30 j (ZDR entreprise) ; DPA/SCC inclus. **L’hébergement UE reste indirect** : via AWS Bedrock (Francfort, Irlande, Paris) ou Vertex AI UE ; l’accès natif claude.ai/API défaute sur les USA. Azure Foundry UE annoncé « à venir ».

**Développement.** Excellent pour outils et code. Prompt caching pour préfixes stables, batch pour l’asynchrone, identifiants datés, inventaire de modèles face aux dépréciations.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M–2 M, grounding Google/Maps et agents managés. **Gemini 3.1 Pro (Preview)** est le flagship raisonnement ; **Gemini 3.5 Pro reste non sorti** (retard signalé) [S09–S11, S69].

**Changement du cycle.** **Gemini 3.6 Flash** lancé le 21 juillet 2026 (1,50/0,15/7,50 USD, contexte 1 048 576, sortie 65 536) : la sortie passe de 9 à 7,50 USD vs 3.5 Flash — baisse effective sur le tier Flash.

**Belgique.** Tiers gratuits/payants disponibles en EEE [S11]. Le payant n’utilise pas le contenu pour améliorer les produits ; le gratuit le peut [S09]. Résidence UE via Vertex, mais les tout derniers modèles ne sont pas toujours servis depuis des régions UE-only. Facturation/TVA à vérifier dans le projet Google Cloud.

**Développement.** Cache, batch −50 %, Flex, Priority, grounding, code execution, file search. Compter les jetons de raisonnement et les requêtes de recherche (facturées à part) ; utiliser Vertex pour réseau, IAM, journalisation et région.

### 4. Microsoft

**Positionnement.** M365 Copilot est l’application de travail, Azure Foundry la plateforme modèles (**GPT-5.6 en preview**), Copilot Studio la plateforme agents, GitHub Copilot l’assistant code traité séparément [S12–S14, S79].

**Changement du cycle.** **Reset tarifaire de M365 Copilot** : la référence « €15,60/utilisateur/mois » est **périmée**. La grille officielle est en **USD** (Business add-on annuel 21 USD standard / 18 USD promo du 1er juillet au 30 septembre 2026 ; bundles Business Standard 23,50 / Premium 32,00) ; **aucun prix EUR n’est publié** — le prix belge hors TVA est à confirmer auprès d’un partenaire.

**Belgique.** Azure offre régions UE, EU Data Zone, identité, réseau et DPA ; données entreprise non utilisées pour entraîner les modèles de base. Disponibilité selon modèle/déploiement.

**Développement.** Choix logique pour organisations déjà sur Entra, M365 et Azure. Risque : addition de licence utilisateur, crédits agents, appels modèle, recherche et connecteurs [S13–S14]. Produire une architecture de coûts complète.

### 5. AWS

**Positionnement.** Bedrock agrège des modèles de nombreux fournisseurs ; **AgentCore est passé en GA** (harness sans code d’orchestration, Policy, intégration Guardrails évaluant chaque action d’agent) [S15–S17, S80].

**Changement du cycle.** Durcissement AgentCore (VPC, PrivateLink, CloudFormation, tagging sur tous les services ; A/B testing et recommandations) et **nouvelles régions Europe (Milan) et Europe (Espagne)**, plus GovCloud US-West.

**Belgique.** Régions européennes et DPA ; cela ne garantit pas que chaque modèle/fonction reste dans la région choisie. Vérifier le tableau région/modèle et le routage cross-region.

**Développement.** IAM, VPC, KMS, CloudWatch et Guardrails. Standard/Flex/Priority/Reserved et batch adaptent coût/latence. Le verrouillage porte sur l’orchestration et les services.

### 6. Meta

**Positionnement (changement stratégique).** Le modèle de tête de Meta est désormais **Muse Spark 1.1** (Meta Superintelligence Labs), **à poids fermés**, avec la **première API payante de Meta** (1,25/0,15/4,25 USD, contexte ~1 M, multimodal) — présenté par Meta comme « la fin de l’ère Llama open-weight » [S18, S70].

**Belgique.** **Muse Spark 1.1 est en preview US uniquement — indisponible en UE**, sans calendrier international annoncé. **Llama 4** (Scout/Maverick) reste distribué en poids ouverts mais **interdit aux utilisateurs/entreprises domiciliés dans l’UE** ; Behemoth toujours non publié. L’app Meta AI reste bridée en UE par ces restrictions. → Acteur **peu exploitable en Belgique** hors app intégrée.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, l’app **Vibe** (ex-Le Chat, rebrand ≈ 28 mai 2026), Studio, agents, RAG, OCR, audio et code. **Mistral Large 3** (généraliste) et **Mistral Medium 3.5** (agents/code) sont les têtes de gamme [S19–S21, S72–S73].

**Changement du cycle.** **Tarifs à actualiser** vs baseline : Large 3 ≈ **0,50/1,50 USD** (bien en dessous du « 2/6 » périmé), Medium 3.5 ≈ **1,50/7,50 USD** ; batch −50 % ; tarif cache par modèle à confirmer.

**Belgique.** Pertinence élevée : **infrastructure et résidence de données UE, RGPD-native, ZDR sur tiers payants** (tier gratuit entraîné avec opt-out), bon niveau **FR et NL**. Ne pas déduire la conformité du seul siège européen ; vérifier DPA, région et rétention du plan choisi.

**Développement.** API simple, batch, modèles spécialisés (Small 4, Codestral, Ministral, Devstral) et déploiement privé. Licences open weight à examiner version par version.

### 8. xAI

**Positionnement.** **Grok 4.5** reste le modèle courant (pas de Grok 5) : app et API, grille contexte court/long (2/0,50/6 USD court ; 4/1/12 USD long), 500 K de contexte, entrée vidéo native [S22–S23].

**Changement du cycle (vigilance).** **Incident Grok Build (14 juillet 2026)** : le CLI aurait téléversé des dépôts Git entiers, secrets inclus, vers un bucket cloud ; xAI affirme un ZDR depuis le lancement [S74]. Par ailleurs, la date de politique de confidentialité citée en baseline (04/04/2026) est **à confirmer** (sources : effective 10/07/2025). Entraînement sur conversations par défaut, opt-out non rétroactif [S24].

**Belgique.** Disponibilité, prix local, TVA et résidence à confirmer ; la politique grand public ne couvre pas nécessairement l’API entreprise. Sandboxer strictement tout agent de code.

### 9. DeepSeek

**Positionnement (changement de génération).** La génération courante est **DeepSeek V4** (V4-Pro et V4-Flash), licence **MIT**, **contexte 1 M** (sortie max 384 K). Les alias `deepseek-chat`/`deepseek-reasoner` ont été **retirés le 24 juillet 2026** ; les ID courants sont `deepseek-v4-flash`/`deepseek-v4-pro`. Prix nettement plus bas (V4-Flash ≈ 0,14 miss / 0,28 out ; V4-Pro ≈ 0,435 / 0,87) [S25–S26, S75].

**Belgique.** Service direct : **données traitées/stockées en Chine**, pas de décision d’adéquation ni de SCC/DPA UE ; bloqué en Italie, **sous enquête en Belgique** et ailleurs. Voie conforme = **V4 via hyperscalers UE** (Azure, Bedrock, Vertex) ou **auto-hébergement des poids MIT** en UE. Ne pas envoyer de données personnelles au service direct.

### 10. Alibaba Cloud / Qwen

**Positionnement (nouveau flagship).** **Qwen3.8-Max**, GA le 3 août 2026 (2/0,25/6 USD, contexte 1 M). Qwen3.7-Max reste disponible (≈ 1,25/3,75 USD promo). Les modèles généraux open-weight récents restent sous Apache 2.0 (Qwen3.6-27B) ; **le flagship Max est fermé** [S27–S28, S76].

**Changement du cycle.** **Région Frankfurt (UE)** confirmée sur Model Studio — meilleur candidat des acteurs chinois pour une **résidence UE directe** (quota gratuit uniquement à Singapour). Facturation EUR/TVA/DPA via Alibaba Cloud Europe **à confirmer**. Rumeur d’un drop de poids « semaine du 10 août 2026 » (incluant Qwen3.8-Max) **non vérifiée**.

**Belgique.** Vérifier compte, région, DPA, support et langues ; FR/NL à tester.

### 11. NVIDIA

**Positionnement.** **Nemotron 3 Ultra** (release 4 juin 2026, 55B actifs/550B MoE) reste le flagship ; NIM fournit les microservices d’inférence ; **NeMo / Agent Toolkit** la personnalisation, l’évaluation, les garde-fous et l’outillage agents [S29–S31, S81].

**Changement du cycle.** Extensions de l’**Agent Toolkit** : **BioNeMo Agent Toolkit** (23 juin 2026) et **PhysicsNeMo + CUDA-X** (26 juillet 2026), pour des « ingénieurs IA autonomes ». Modèles inchangés depuis la baseline.

**Belgique.** Pertinent pour entreprise, cloud privé et souveraineté technique. Coût = GPU/cloud + licence/support + exploitation. Sécurité des agents, supply chain des conteneurs et télémétrie à configurer.

### 12. Cohere

**Positionnement.** **Command A+** (flagship open-weight, 19 mai 2026, Apache 2.0, MoE 218B/25B actifs) unifie raisonnement, vision, multilingue et tool-use ; **prix production « contact sales »**. **Command A** standard reste 2,50/10 USD, contexte 256 K. **North** est positionné « lieu de travail IA souverain » [S32–S34, S83].

**Belgique.** Bon candidat B2B pour recherche sur données internes et déploiement contrôlé/souverain ; pas de proposition grand public dominante. Vérifier FR/NL par tâche et contrat de région.

### 13. IBM

**Positionnement.** **Granite 4.1** (29 avril 2026) reste la famille courante : Apache 2.0, dense 3B/8B/30B, **jusqu’à 512 K de contexte**, plus vision/speech/embeddings et modèles Guardian ; **ISO 42001** et **indemnité IP** sur watsonx.ai. watsonx.governance ajoute inventaire, évaluation et conformité [S35–S36, S82].

**Belgique.** Pertinent pour entreprises réglementées et hybride/on-prem. **Le prix par-jeton de Granite n’a pas pu être confirmé sur page officielle** ce cycle (à confirmer) ; les minima plateforme démarrent nettement au-dessus d’un usage individuel.

### 14. GitHub Copilot

**Positionnement.** Assistant de code multi-modèles (complétion, chat, CLI, revue, agent local et cloud). Plans individuels **inchangés** : Free, **Pro 10 USD** (15 USD de crédits IA), **Pro+ 39 USD** (70 USD), **Max 100 USD** (200 USD) ; **1 crédit = 0,01 USD** ; complétions illimitées non facturées [S37–S38].

**Belgique et données.** Individuels : interactions susceptibles d’entraîner les modèles sauf opt-out ; **Business/Enterprise exclus de l’entraînement** (IDE chat/completion non retenus ; autres surfaces jusqu’à 28 jours). DPA disponible. **Seule fiche entièrement vérifiée sur page officielle ce cycle.**

**Développement.** Meilleur choix de départ si GitHub/VS Code domine. Mesurer qualité de PR, tests et failles ; les sorties ne remplacent ni revue, ni SAST, ni tests.

### 15. Perplexity

**Positionnement.** Application de recherche sourcée ; API **Sonar** et **Agentic Research API** (accès à des modèles OpenAI/Anthropic/Google/xAI aux tarifs fournisseurs + 0,005 USD/recherche) [S39–S40, S84].

**Changement du cycle.** **Sonar API annoncée en zero-data-retention** (amélioration compliance, **à confirmer** sur doc officielle) ; jetons de citation restreints à Deep Research ; tarifs indicatifs Sonar ≈ 1/1, Sonar Pro 3/15.

**Belgique.** Utile pour veille et recherche, chaque citation devant être ouverte. **Pas de résidence UE générale** (infra US ; partenariat « EU sovereign AI » avec NVIDIA non encore GA). Prix grand public EUR/TVA et contrôles d’entreprise à vérifier au checkout/contrat.

### 16. Anysphere / Cursor

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles ; plans Hobby (gratuit), Individual dès 20 USD, Teams 40 USD/user, Enterprise [S41–S43].

**Changement du cycle.** Ajout d’un **BAA (Business Associate Agreement), Enterprise uniquement**, avec Privacy Mode verrouillé au niveau org. Data-use policy toujours datée du **15 juillet 2026** (pas de version plus récente).

**Données.** Privacy Mode interdit l’entraînement (Cursor et providers), avec ZDR ; sur plans individuels, les fournisseurs amont peuvent conserver des prompts ~30 j pour trust-and-safety (à confirmer). DPA/SCC pour transferts UE/UK. En équipe, imposer Privacy Mode par politique.

### 17. Replit

**Positionnement.** Agent de création d’apps intégré à l’IDE, bases et déploiement, modèle **effort-based** (crédits selon complexité). Affichage actuel (**à confirmer**) : **Core 25 USD/mois** (20 en annuel, 25 USD de crédits), **Pro 100 USD** (~100 USD de crédits, report 1 mois) ; Free/Starter existe [S44].

**Belgique.** Bon pour prototypes et petites applications ; TVA et localisation à vérifier. Risque de verrouillage plateforme et de coûts croissants en builds autonomes (déploiements always-on facturés).

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, Inference Providers (sans majoration HF annoncée), Endpoints dédiés et Spaces. Plans **PRO 9 USD**, **Team 20 USD/user**, **Enterprise 50 USD/user** [S45–S47].

**Belgique.** Endpoint AWS **eu-west-1** disponible ; DPA via Enterprise Hub. Payloads/tokens non stockés, **logs 30 jours**, TLS [S47]. Le modèle et le provider choisis conservent leurs propres risques. **Aucun changement de fond ce cycle.**

### 19. Moonshot AI / Kimi

**Positionnement (K3 documenté).** **Kimi K3** est désormais entièrement documenté : **2,8 T params** (MoE sparse), vision native, **contexte 1 M**, thinking mode ; prix **0,30 hit / 3 in / 15 out USD** ; indice Artificial Analysis 57,1 (#4). **Poids ouverts publiés le 27 juillet 2026** sous **licence propriétaire « Kimi K3 » (pas MIT)** — point à surveiller pour l’usage commercial. K2.7 et Kimi Code (CLI) demeurent [S48–S51, S77].

**Belgique.** API/`kimi.com` : **données traitées en Chine** (PII stockée à Singapour) — difficile à justifier sous RGPD ; pas de résidence/DPA UE en direct. Voie conforme = **poids ouverts via hébergeurs UE** (GreenPT, Berget, EUrouter). Le CLI peut lire/écrire/exécuter et utiliser MCP/sous-agents : permissions minimales obligatoires.

### 20. Z.AI / GLM

**Positionnement.** **GLM-5.2** (16 juin 2026, MoE 744B, **licence MIT**) est le **flagship API courant** : **1,40/0,26/4,40 USD** (tarif repris de GLM-5.1), **contexte porté de 200 K à 1 M** (sortie 128 K). Le **Coding Plan** cible IDE/agents [S52–S54, S78].

**Changement du cycle.** **Fin de la promo** du Coding Plan : Lite ≈ 18 USD, Pro ≈ 72 USD, nouveau palier **Max ≈ 160 USD** (à confirmer).

**Belgique.** Prix USD attractifs, API compatible, poids ouverts MIT (atout portabilité et auto-hébergement UE). Entité chinoise : **pas de résidence/DPA UE en direct** présumé ; FR/NL, région UE et rétention à confirmer. Voie conforme = **auto-hébergement MIT en UE** ou EUrouter.

## Recommandations transversales

- **Particulier :** privilégier l’application qui facture clairement en EUR et offre un contrôle d’entraînement ; ne pas y placer de données de tiers.
- **Indépendant :** deux APIs, **modèles épinglés** (les têtes de gamme changent tous les mois), budget dur, logs sans contenu sensible, jeu d’évaluation FR/NL.
- **PME :** commencer par l’écosystème d’identité existant ; exiger DPA, liste des sous-traitants, région, rétention, export et suppression. **Attention au prix EUR non publié de M365 Copilot** — le confirmer avant achat.
- **Code :** mesurer une tâche complète jusqu’aux tests, pas le nombre de suggestions. Bloquer secrets et commandes destructrices — **cf. incident Grok Build**.
- **Secteur réglementé :** gouvernance d’inventaire, classification des risques (le haut risque AI Act est reporté à 2027/2028 mais **la transparence de l’art. 50 s’applique depuis le 2 août 2026**), validation humaine, audit des outils et avis juridique spécialisé.
- **Open weight :** scanner poids/conteneurs, vérifier **licence** (MIT pour DeepSeek/GLM ; **custom pour Kimi K3** ; restrictions UE pour Llama) et provenance, isoler l’inférence, tester les garde-fous et maintenir les correctifs.

## Limites

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. **Ce cycle, l’accès direct aux pages officielles a été bloqué (HTTP 403)** : les prix sont indicatifs et à revérifier sur les grilles officielles. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. L’incident Grok Build a été inclus car couvert par une source primaire et pertinent pour un usage d’agent de code ; il n’implique pas les autres fournisseurs. Cette édition doit être comparée à l’état du 17 juillet 2026 ([historique.md](historique.md)).
