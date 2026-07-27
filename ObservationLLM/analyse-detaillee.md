# Analyse détaillée

Vérification: **27 juillet 2026** (2ᵉ édition; base précédente le 17 juillet 2026). Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique.

> **Contrainte de vérification, cette édition.** La politique réseau a bloqué (403 CONNECT) l’accès direct à la quasi-totalité des pages officielles. Les faits actualisés proviennent de la recherche web ciblant les domaines officiels, non d’un rendu de page, sauf la vérification de l’organisation GitHub de Moonshot. Les figures non reconfirmées gardent la valeur du 17 juillet et sont signalées « à revérifier ». Priorité de la prochaine exécution: reconfirmer prix et pages dès que l’accès direct sera rétabli.

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

La 2ᵉ édition conserve **exactement les 20 mêmes acteurs: aucune entrée, aucune sortie.** Les changements de la fenêtre sont des évolutions internes (nouveaux modèles, prix, distribution), pas des mouvements de composition. Une entrée future exigera plusieurs signaux durables et entraînera une sortie explicitement motivée. Les candidats à surveiller comprennent MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce et les plateformes d’orchestration indépendantes; ils ne sont pas inclus pour conserver exactement 20 acteurs.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S55 et la TVA standard belge S56. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. Exemple historique: OpenAI publiait pour GPT-5.5 82,7 % sur Terminal-Bench 2.0 et 58,6 % sur SWE-Bench Pro, en signalant un risque de mémorisation sur ce dernier [S02]; le phare est désormais GPT-5.6 Sol, dont les scores officiels n’ont pas pu être rendus cette édition (accès bloqué) [S61]. Z.AI revendique 77,8 sur SWE-bench Verified pour GLM-5 dans sa propre documentation [S53]. Le nouveau Claude Opus 5 revendique une « intelligence frontière à la moitié du coût de Fable 5 » — revendication marketing non reproduite ici [S64]. Ces protocoles, versions, échafaudages, budgets d’outils et dates diffèrent: ils ne sont pas comparés directement ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** Depuis le 9 juillet 2026, le phare est la famille **GPT-5.6 (Sol/Terra/Luna)**; GPT-5.6 Sol est un modèle frontière texte/vision, 1,05 M de contexte et 128 k de sortie, avec la même structure tarifaire que celle attribuée précédemment à GPT-5.5 (5/30 USD, multiplicateur au-delà de 272 k) [S01–S02, S61–S62]. GPT-5.5 reste documenté comme cible de remplacement pour des modèles plus anciens dépréciés (échéance 2026-12-11). ChatGPT est l’application, l’API Responses la plateforme, Codex l’agent de code. Outils natifs: web, fichiers, génération d’image, interpréteur, shell hébergé, patch, computer use et MCP. *(La base du 17 juillet citait encore GPT-5.5 comme phare: correction cette édition.)*

**Belgique.** L’usage est largement pertinent en français et néerlandais, mais la qualité doit être testée par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles [S03]. Les prix de l’API sont en USD hors taxes; le prix ChatGPT belge exact et la TVA doivent être confirmés au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/flex/priority et snapshots. Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration [S05]. Coût long contexte et outils à budgéter séparément.

### 2. Anthropic

**Positionnement.** **Claude Opus 5 (`claude-opus-5`), lancé le 24 juillet 2026**, devient le modèle de tête: 1 M de contexte (pas de variante réduite), 128 k de sortie, raisonnement activé par défaut, coupure de connaissances mai 2026, **prix identiques à Opus 4.8 (5/25 USD)**, disponible sur API Claude, Bedrock, Vertex et Microsoft Foundry [S63–S65]. Sonnet 5 (GA 30 juin, lancement 2/10 USD jusqu’au 31 août puis 3/15) offre le compromis coût-vitesse; Fable 5 et Mythos 5 (GA 9 juin) complètent le haut de gamme; Opus 4.8/4.7/4.6 passent « legacy ». Claude Code est l’agent de développement.

**Belgique et données.** Application et API sont pertinentes pour FR/NL, à valider sur le corpus réel. DPA, résidence et rétention varient entre API directe, AWS et Google Cloud; `inference_geo:"us"` applique un multiplicateur ×1,1 (modèles 4.6+), et les endpoints régionaux Bedrock/Vertex +10 % sur le global. Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. **Rupture d’API à intégrer:** sur Opus 5, désactiver le raisonnement (`thinking:disabled`) n’est permis qu’à effort ≤ `high`; `xhigh`/`max` avec raisonnement désactivé renvoie HTTP 400. L’échelle d’effort est low/medium/high/xhigh/max (défaut high). Le fast mode (aperçu) est étendu à Opus 5 (10/50 USD, API Claude) et **retiré pour Opus 4.7** (`speed:"fast"` échoue, sans repli). Nouveaux betas: changement d’outils en cours de conversation et mode `fallbacks` côté serveur; prompt cacheable minimal abaissé à 512 jetons sur Opus 5. Utiliser prompt caching pour les préfixes stables, batch pour l’asynchrone, budget d’effort raisonnable, et identifiants datés. Sunset annoncé du Workbench hérité et des API prompt-tools expérimentales (accès jusqu’au 2026-08-17): inventaire de modèles requis.

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M, recherche Google/Maps et agents managés. **Gemini 3.6 Flash, lancé le 21 juillet 2026, remplace la 3.5 Flash**: entrée inchangée à 1,50 USD/M, **sortie abaissée de 9 à 7,50 USD/M** (~-17 %), 1 M d’entrée / 64 k de sortie, avec ~17 % de jetons de sortie en moins à travail égal selon le fournisseur [S66–S67]. Deux compléments le même jour: Gemini 3.5 Flash-Lite (0,30/2,50 USD, ~350 jetons/s) et Gemini 3.5 Flash Cyber (orienté détection/correction de vulnérabilités). Gemini app, AI Studio, Gemini API et Vertex AI restent des surfaces différentes.

**Belgique.** Les tiers gratuits et payants Gemini API sont annoncés disponibles dans de nombreuses régions, y compris EEE [S11]. Le payant n’utilise pas le contenu pour améliorer les produits selon la grille; le gratuit le peut [S09]. Aucun changement de résidence/RGPD détecté dans la fenêtre (non confirmé positivement, page bloquée). Facturation et TVA à vérifier dans le projet Google Cloud.

**Développement.** Cache, batch à -50 %, Flex, Priority, outils de grounding, code execution et file search. **Les tarifs cache/batch/flex/priority de la 3.6 Flash n’ont pas pu être reconfirmés (page bloquée); ceux de la 3.5 Flash sont conservés à titre indicatif et signalés à revérifier.** Compter les jetons de raisonnement et les requêtes de recherche; utiliser Vertex pour réseau, IAM, journalisation et région.

### 4. Microsoft

**Positionnement.** Microsoft 365 Copilot est l’application de travail, Azure OpenAI/Foundry la plateforme modèles, Copilot Studio la plateforme agents, GitHub Copilot l’assistant code traité séparément.

**Belgique.** Microsoft affiche des prix EUR hors TVA sur une page européenne; l’add-on autonome « Copilot Business » est à ~15,60 €/utilisateur/mois (annuel), **tarif promotionnel jusqu’au 30 septembre 2026** (tarif régulier 18,20 €), et requiert un plan Microsoft 365 Business qualifiant [S12]. Azure offre régions, identité, réseau et DPA, mais la disponibilité dépend du modèle/déploiement.

**Nouveau (21 juillet 2026).** Extension du partenariat **Microsoft × Mistral**: Mistral Medium 3.5 et Mistral OCR 4 arrivent dans **Microsoft Foundry**, et Medium 3.5 dans **Copilot Studio**, avec cadrage explicite marchés UE/secteurs régulés, Microsoft Sovereign Cloud et déploiement cloud/Azure Local/déconnecté [S68–S69]. Cela renforce l’option européenne accessible via l’écosystème Microsoft.

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

**Belgique.** Pertinence élevée: documentation française et options européennes/privées. **Distribution élargie (21 juillet 2026):** Medium 3.5 et OCR 4 sont désormais accessibles via Microsoft Foundry, et Medium 3.5 via Copilot Studio, ce qui ouvre un canal supplémentaire avec gouvernance Azure/souveraine pour les acheteurs belges/UE [S68–S69]. Ne pas déduire la conformité du siège européen; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. Prix propres de Mistral (Large 2/6 USD, batch -50 %) non reconfirmés cette édition (page bloquée), conservés à revérifier. La variété des licences open weight exige un examen version par version.

### 8. xAI

**Positionnement.** Grok 4.5 est disponible comme app et API; la grille distingue contexte court/long, cache, voix, image et vidéo [S22–S23]. Grok 4.20 a aussi une configuration multi-agent dans sa carte modèle.

**Belgique.** L’UE est citée dans des cartes modèles précédentes, mais disponibilité, prix local, TVA et résidence de Grok 4.5 doivent être confirmés. La politique grand public ne couvre pas nécessairement l’API entreprise [S24].

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions.

### 9. DeepSeek

**Positionnement.** Modèles très compétitifs en coût, application gratuite, API et poids. **Changement dans la fenêtre (24 juillet 2026, 15:59 UTC):** les noms hérités `deepseek-chat` et `deepseek-reasoner` sont retirés et pointent vers les modes non-raisonnant / raisonnant de **`deepseek-v4-flash`** [S70]. Le passage à V4 (aperçu depuis avril 2026) précède la fenêtre. Les prix/contexte V4 rapportés (~0,14 USD entrée, ~0,28 USD sortie, cache ~0,028 USD, 1 M de contexte par défaut) sont très inférieurs à la base V3.2 (0,27/0,07/1,10, 64 k) mais **n’ont pas pu être rendus sur la page officielle: à revérifier** [S25–S26].

**Belgique.** Disponibilité commerciale, DPA, transferts, rétention, usage d’entraînement et facture belge sont à confirmer. Pour données sensibles, préférer des poids hébergés par un fournisseur UE après revue de licence.

### 10. Alibaba Cloud / Qwen

**Positionnement.** Qwen propose généralistes, code et multimodal, en poids et via Model Studio. Qwen 3.7 max global est tarifé en CNY avec régions global/US/Chine distinctes [S27–S28]. **Dans la fenêtre:** la remise de 50 % sur Qwen3.7-Max a expiré vers le 22–23 juillet (hausse effective du prix), l’offre de 200 requêtes gratuites/jour se termine le 31 juillet, et Qwen-Turbo n’est plus mis à jour (migration recommandée vers Qwen-Flash) [S71].

**Belgique.** Le mot « global » ne prouve pas disponibilité, localisation UE ni facture conforme en Belgique. Vérifier compte, région, DPA, support et langues; FR/NL sont à tester.

### 11. NVIDIA

**Positionnement.** Nemotron fournit des modèles; NIM des microservices d’inférence; NeMo la personnalisation, l’évaluation, les garde-fous et l’outillage agents [S29–S31]. Ce n’est pas un abonnement grand public comparable à ChatGPT.

**Belgique.** Pertinent pour entreprise, cloud privé et souveraineté technique. Coût = GPU/cloud + licence/support + exploitation. Sécurité des agents, supply chain des conteneurs et télémétrie doivent être configurées.

### 12. Cohere

**Positionnement.** **Command A+ (GA 20 mai 2026)** vise agents, RAG, multilingue et déploiement privé; il annonce 128 k de contexte, 64 k de sortie et **48 langues, dont toutes les langues officielles de l’UE** [S32–S34]. North ajoute interface et workflows. *(La base du 17 juillet décrivait « Command A / 256 k »: précision cette édition; Command A Reasoning 256 k reste antérieur.)*

**Belgique.** Bon candidat B2B pour recherche sur données internes et déploiement contrôlé; la couverture explicite du français et du néerlandais est un atout. Pas de proposition grand public dominante. Vérifier langues FR/NL par tâche et contrat de région.

### 13. IBM

**Positionnement.** watsonx.ai combine Granite, modèles tiers, RAG et agents; watsonx.governance ajoute inventaire, évaluation et conformité [S35–S36]. **watsonx.ai v2.4 (19 juin 2026)** ajoute la disponibilité sur IBM Z/LinuxONE avec l’accélérateur Spyre, un Model Gateway en préversion, et Granite 4.1 (3b/8b/30b) plus granite-vision-4-1-4b dans la bibliothèque de modèles.

**Belgique.** Pertinent pour entreprises réglementées et hybride/on-prem. Les prix affichés sont indicatifs, variables par pays et hors taxes (non reconfirmés cette édition, page bloquée). Standard commence nettement au-dessus d’un usage individuel.

### 14. GitHub Copilot

**Positionnement.** Assistant de code multi-modèles avec complétion, chat, CLI, revue, agent local et cloud. Plans individuels: Free, Pro, Pro+, Max; crédits IA variables selon modèle et complexité [S37–S38].

**Belgique et données.** Plans individuels: interactions susceptibles d’entraîner les modèles sauf opt-out; Business/Enterprise exclus de l’entraînement. Rétention B/E: IDE chat/completion non retenus, autres surfaces jusqu’à 28 jours selon page [S37]. DPA disponible.

**Développement.** Meilleur choix de départ si GitHub/VS Code domine. Mesurer qualité de PR, tests et failles; les sorties ne remplacent pas revue, SAST et tests.

### 15. Perplexity

**Positionnement.** Application de recherche sourcée, modèles Sonar et Agent API. API séparée de l’abonnement [S39–S40].

**Belgique.** Utile pour veille et recherche, mais chaque citation doit être ouverte. Prix grand public EUR/TVA et contrôles d’entreprise à vérifier au checkout/contrat.

### 16. Anysphere / Cursor

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles. Ce n’est pas un modèle de fondation [S41–S43].

**Données.** Privacy Mode interdit l’entraînement par Cursor et ses providers, annonce des accords ZDR et chiffrement; des données peuvent être conservées lors de détection d’abus [S42]. Politique de données inchangée dans la fenêtre (version du 15 juillet). En équipe, l’imposer par politique.

**Nouveau (22 juillet 2026).** Le mode Auto est désormais propulsé par **Cursor Router**, un routeur de modèles à trois profils (Intelligence/Balance/Cost), activé par défaut pour les plans Teams; les administrateurs peuvent restreindre les modes, fixer le défaut et autoriser/bloquer les modèles sous-jacents [S73]. Fonction d’optimisation de coût: surveiller la correspondance profil → modèle → dépense.

**Développement.** Excellente ergonomie, mais coûts indexés sur l’usage des modèles et forte cadence de changement. Prévoir règles de dépôt, commandes interdites, validation diff/test et budget.

### 17. Replit

**Positionnement.** Agent de création d’apps intégré à l’IDE, bases et déploiement. Core annuel 20 USD/mois équivalent avec 25 USD de crédits; Pro 95 USD avec 100 USD [S44].

**Belgique.** Bon pour prototypes et petites applications; TVA et localisation à vérifier. Risque de verrouillage plateforme et de coûts croissants en builds autonomes.

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, Inference Providers sans majoration annoncée, Endpoints dédiés et Spaces [S45–S47]. Ce n’est pas un modèle unique.

**Belgique.** Endpoint AWS eu-west-1 disponible; DPA Enterprise et SOC 2 Type 2 annoncés. Les payloads ne sont pas stockés, logs 30 jours selon page sécurité [S47]. Le modèle et provider choisis conservent leurs propres risques.

### 19. Moonshot AI / Kimi

**Positionnement.** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. **Kimi K3:** la sortie des poids ouverts était annoncée pour le 27 juillet 2026 (00:00 UTC) sur l’organisation Hugging Face officielle; toutefois, au moment du contrôle direct de l’API GitHub, **l’organisation GitHub officielle de Moonshot ne contenait aucun dépôt Kimi-K3** (seulement K2, K2.5 et un nouveau dépôt `nano-kpu` du 23 juillet). Caractéristiques rapportées (2,8 T de paramètres MoE, ~1 M de contexte, multimodal, API 3/15 USD, licence « Modified MIT » attendue) restent des **capacités déclarées non vérifiées indépendamment** [S48–S51, S60, S75].

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

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte. Les incidents publics n’ont été inclus que lorsqu’une source primaire et un impact encore pertinent étaient disponibles; aucun incident spécifique suffisamment récent et vérifié n’a été ajouté cette fois.

**Limite propre à la 2ᵉ édition.** Contrairement au 17 juillet, la politique réseau a bloqué l’accès direct (403 CONNECT) à la quasi-totalité des pages officielles. Les changements de la fenêtre reposent donc sur la recherche web ciblant les domaines officiels (titres, extraits et dates), non sur un rendu de page — seule la vérification de l’organisation GitHub de Moonshot est de première main. En conséquence: (1) les prix non reconfirmés conservent la valeur du 17 juillet et sont marqués « à revérifier »; (2) le taux de change BCE reste celui du 14 juillet; (3) les capacités de Kimi K3 et les prix de DeepSeek V4 sont explicitement non vérifiés. La prochaine exécution doit, en priorité, reconfirmer par rendu direct les figures signalées dès que l’accès sera rétabli, et comparer à l’état du 27 juillet 2026 consigné dans [historique.md](historique.md).
