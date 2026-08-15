# Analyse détaillée

Contrôle: **15 août 2026**. État courant: Google publie Gemini 3.7 Flash à 0,75/3,75 USD/M jusqu’au 31 décembre 2026 avec doublement au 1er janvier 2027, Z.ai publie GLM-5.3 sans ses poids ouverts, DeepSeek fait passer V4 Pro 0813 en disponibilité générale avec des poids MIT, Anthropic fige le tarif de Sonnet 5 à 2/10 USD/M et documente Claude Mythos 5 en disponibilité limitée sur invitation, les services Claude ont subi une interruption de quatre heures dans la nuit du 14 au 15 août, GitHub programme au 1er septembre le retrait de plusieurs modèles de toutes les surfaces Copilot, OpenAI ouvre en préversion fermée un palier de service Ultrafast pour GPT-5.6 Sol et maintient la publicité dans ChatGPT hors Belgique, Mistral met un prix et un SLA sur la résidence européenne, xAI publie Grok 4.6, et deux entrées de la sélection sont en cours de fusion capitalistique. Point de vue: particulier ou développeur résidant en Belgique. Cette analyse est informative; les volets RGPD et AI Act ne constituent pas un avis juridique. Pour l'exécution sur matériel personnel, voir [modeles-locaux-par-hardware.md](modeles-locaux-par-hardware.md).

> ⚠️ **Niveau de preuve de cette édition.** La politique réseau sortante bloque la majorité des domaines fournisseurs et **la totalité des six points d’entrée de veille quotidienne**: sur les 44 sources historiques du référentiel, **4 répondent et 40 sont refusées au tunnel CONNECT**. Les faits Anthropic sont établis en source primaire ouverte directement; les autres sont établis par convergence d’au moins deux sources indépendantes et **plafonnés à 89/100**, ou conservent le niveau de preuve de leur dernier contrôle effectif. Aucun fait à preuve indirecte ne doit être interprété comme contractuel.
>
> ✅ **Voie de preuve primaire disponible.** La documentation Anthropic (`platform.claude.com`), le blog du Model Context Protocol et les registres `pypi.org` et `registry.npmjs.org` ont été ouverts directement. Ils couvrent les tarifs Claude, l’existence et le statut d’accès de Claude Mythos 5, les capacités des agents managés, la spécification MCP et les versions de bibliothèques — et rien d’autre. Voir la note d’accès dans [sources.md](sources.md).

## Méthodologie et sélection

Cinq familles de signaux ont été examinées: adoption/présence marché (30 %), qualité et portée des modèles (25 %), maturité API/outils/agents (20 %), écosystème développeur (15 %), disponibilité et pertinence Europe/Belgique (10 %). Les pondérations servent à décider l’inclusion, pas à produire un faux score précis. Les 20 retenus couvrent quatre rôles qui se chevauchent: concepteurs de modèles, applications, plateformes cloud/API et agents de code.

Les 20 écosystèmes retenus à la date de ce contrôle sont ceux qui satisfont ces cinq signaux. MiniMax, Databricks/Mosaic, Oracle OCI, Salesforce, ByteDance et les plateformes d’orchestration indépendantes sont suivis comme candidats sans être retenus. La revue de sélection relève de la ligne structurelle hebdomadaire, dont la prochaine échéance est le 17 août 2026.

**Deux justifications d’inclusion ont toutefois changé de nature ce mois-ci, ce qui mérite d’être explicité plutôt que masqué par la stabilité apparente de la liste.**

- **Meta** était le cas le plus fragile de la sélection: la famille Llama était en fin de cycle après la réception médiocre de Llama 4, et plusieurs observateurs décrivaient un abandon de fait de la stratégie open weight. La sortie de **Muse Glimmer** (10 août, ~30 B dense, Apache 2.0) inverse cette trajectoire: c’est le premier modèle à poids ouverts de Meta depuis plus d’un an, et il vise explicitement l’agent local sur matériel grand public. Meta reste donc dans la sélection, mais **au titre de Muse et non plus de Llama** [S117–S119]. Réserve: la version ouverte de Muse Spark 1.2 est annoncée sans date ferme; l’engagement n’est pas tenu tant qu’elle n’est pas publiée.
- **NVIDIA** était retenu principalement comme fournisseur d’infrastructure et d’outillage (NIM, NeMo). Avec **Nemotron 3.5 Lightning** (11 août) sous licence permissive OpenMDW-1.1, l’acteur pèse désormais aussi comme **producteur de poids ouverts occidentaux**, dans un espace que Meta avait laissé partiellement vacant [S120–S121].

**Le fait de sélection de ce contrôle: deux entrées vont fusionner.** SpaceX — qui a absorbé xAI plus tôt en 2026 et communique désormais sous le nom **SpaceXAI** — rachète **Anysphere (Cursor)** pour 60 milliards USD en actions. L’opération, annoncée le 16 juin, a vu ses **procédures réglementaires finalisées le 12 août**, avec une clôture attendue **avant la fin août 2026**. Elle **n’était pas close** au 13 août [S147].

La règle appliquée ici est de refléter l’état juridique **vérifié**, pas l’état annoncé: **xAI (rang 8) et Anysphere/Cursor (rang 16) restent deux entrées distinctes**. Fusionner sur la foi d’une clôture annoncée reviendrait à publier comme fait ce qui reste une prévision — exactement l’erreur que ce livrable s’interdit ailleurs (voir les poids ouverts de Qwen3.8-Max). Mais la conséquence doit être anticipée: **à la clôture, la sélection passera mécaniquement à 19 entrées et une place se libérera.**

**[Déduction]** Candidats à cette place, par ordre de signal actuel: **Together AI / Fireworks** (inférence à poids ouverts, maturité API, pertinence croissante à mesure que les modèles ouverts se rapprochent de la frontière), **Zhipu/Z.AI au-delà de GLM**, et **Baidu ERNIE**. Aucun n’est retenu à ce contrôle. La règle de sortie reste inchangée: une nouveauté seule ne suffit pas, il faut un signal durable supérieur à l’acteur remplacé.

**Un signal de sélection toujours en attente.** Alibaba a publié **Qwen3.8-Max** à parité tarifaire avec GPT-5.6 Terra (2/6 USD/M) tout en annonçant l’ouverture des poids d’un modèle de classe « Max » — une première [S115]. Si ces poids sortent effectivement sous une licence permissive, le poids relatif d’Alibaba dans la sélection augmente nettement. Au **13 août**, **ils ne sont toujours pas publiés et aucune licence n’est nommée**, alors que la semaine annoncée (celle du 10 août) est écoulée [S116, S157]: le signal est enregistré, pas validé, et l’écart entre l’annonce et la livraison devient lui-même une information sur la fiabilité des engagements d’ouverture de cet acteur.

**Une lacune de couverture corrigée.** Cohere était décrit dans les éditions précédentes comme un acteur d’entreprise « avec peu d’offre ouverte ». C’est inexact depuis le 9 juin 2026: **North Mini Code 1.0** est un MoE 30 B / 3 B actifs sous **Apache 2.0**, avec poids sur Hugging Face et image Ollama [S149–S150]. Cette correction ne change pas le rang de Cohere, mais elle change ce pour quoi on le consulte.

Chaque fait volatil renvoie au registre [sources.md](sources.md). Les prix sont des snapshots, les pages dynamiques pouvant changer sans version. Les conversions utilisent S79. Une disponibilité non explicitement vérifiée est « à confirmer ».

## Comment lire les benchmarks

Les scores publiés par un fournisseur sont des **capacités déclarées** jusqu’à reproduction. OpenAI publie des résultats GPT-5.6 sur Agents’ Last Exam, OSWorld 2.0 et plusieurs indices externes, tandis qu’Anthropic publie Opus 5 sur Frontier-Bench v0.1, CursorBench 3.2 et ses évaluations internes [S61, S63]. Z.AI publie pour GLM-5.2 des protocoles distincts sur Terminal-Bench 2.1, SWE-bench Pro et tâches long-horizon [S81]. Versions, harnesses, budgets d’outils, efforts, dates et ensembles diffèrent: aucun score n’est directement agrégé ici. La décision doit reposer sur un jeu d’évaluation interne daté, versionné et reproductible.

## Analyse des 20 écosystèmes

### 1. OpenAI

**Positionnement.** GPT-5.6 est une famille texte/vision à 1,05 M de contexte et 128 k de sortie: Sol pour le plafond (5/30 USD/M), Terra pour l’équilibre et Luna pour le volume. ChatGPT est l’application, Responses l’API et Codex l’agent de code [S61–S62]. **Le 30 juillet 2026, OpenAI a baissé Terra de 2,50/15 à 2/12 USD/M (−20 %) et Luna de 1/6 à 0,20/1,20 USD/M (−80 %); Sol est inchangé.** Un « Fast Mode » pour Sol remplace le Priority Processing (jusqu’à ×2,5 de vitesse au double du prix, intelligence identique) [S112–S113]. Programmatic Tool Calling, raisonnement persisté, cache explicite et multi-agent bêta complètent les outils existants.

**Nouveau le 10 août: GPT-5.6-Cyber, et une leçon sur la manière dont ce segment se structure.** Modèle spécialisé en cybersécurité dérivé de GPT-5.6 Sol, entraîné pour la recherche avancée de vulnérabilités et le développement de chaînes d’exploitation — des catégories de travail que les modèles généralistes refusent souvent. Tarif publié: **12,50 USD/M en entrée, 75 en sortie, 1,25 en entrée mise en cache** [S145–S146].

**Il n’est pas en libre-service.** L’accès passe par **Daybreak Red**, un nouveau palier du programme cybersécurité d’OpenAI, avec candidature, approbation et provisionnement distincts. Ni les clients ChatGPT ni les clients API ordinaires n’y ont accès. **Pour un particulier ou un développeur indépendant belge, considérez ce modèle comme indisponible.**

**[Déduction]** Ce lancement mérite d’être consigné pour une raison qui dépasse le produit: il montre que la maîtrise des capacités offensives se déplace des **refus au niveau du modèle** vers des **barrières d’accès au niveau du contrat**. Le modèle sait faire, et c’est le processus d’admission qui filtre. Pour un observatoire européen, cela déplace la question: le contrôle pertinent n’est plus « le modèle refuse-t-il ? » mais « qui décide de l’admission, selon quels critères, et avec quelle traçabilité ? ». Rapproché de l’incident Hugging Face documenté au contrôle précédent — un modèle échappé de son bac à sable lors d’un banc de cybersécurité —, cela confirme que **l’évaluation offensive est un périmètre de sécurité de production**, pas un environnement de test.

**Le palier Ultrafast, et ce qu’il n’est pas.** Le 13 août, OpenAI ouvre en préversion limitée un palier de service « Ultrafast » pour GPT-5.6 Sol, opéré sur matériel Cerebras: **jusqu’à 750 jetons de sortie par seconde**, **jusqu’à 14× la vitesse du palier Standard**, à intelligence déclarée identique [S168–S169]. La liste d’usages visés — recherche financière, réponse à incident, support client, voix, commerce, expérimentation en direct — décrit un segment où la latence est le produit.

**Ce qui manque est plus instructif que ce qui est annoncé.** Aucun tarif, aucun quota, aucune liste de régions, aucun engagement minimum ni terme de niveau de service n’est publié. L’accès est réservé à un ensemble de clients sélectionnés. Les chiffres de vitesse, y compris les comparaisons face à des modèles concurrents, sont des **résultats fournisseur non reproduits indépendamment**: ils relèvent des capacités déclarées, pas de la mesure. **[Déduction]** Pour un développeur belge, la conséquence pratique est simple: ce palier n’est pas budgétable et ne doit entrer dans aucune architecture cible avant publication d’un prix et d’une région. Il mérite en revanche d’être suivi, parce qu’un palier de vitesse facturé séparément confirme une tendance déjà visible chez Anthropic (Fast mode) et Mistral (Priority Tier): **la vitesse et la disponibilité deviennent des lignes de facturation distinctes du modèle lui-même**, ce que le comparatif isole désormais dans sa table de multiplicateurs de service.

**Belgique.** L’usage est largement pertinent en français et néerlandais, mais la qualité doit être testée par domaine. L’API publie l’absence d’entraînement par défaut et des contrôles de résidence EEE pour clients/services éligibles [S03]. Les prix de l’API sont en USD hors taxes; le prix ChatGPT belge exact doit être confirmé au checkout.

**Développement.** SDK larges, sorties structurées, function calling, streaming, batch/classes et snapshots. Épingler le snapshot, journaliser les request IDs, maintenir des évaluations avant migration [S05]. Pour GPT-5.6, tester l’effort actuel puis un niveau inférieur; encadrer explicitement autonomie, approbations et ambiguïtés [S62].

### 2. Anthropic

**Positionnement.** Opus 5 est le modèle quotidien haut de gamme à 5/25 USD/M; Fable 5 reste le plafond général à 10/50, avec garde-fous plus restrictifs; Sonnet 5 couvre le compromis coût-vitesse. Claude Code est l’agent de développement. Le catalogue atteint 1 M de contexte pour le haut de gamme [S63–S64].

**Le tarif de Sonnet 5 est fixé.** Double preuve primaire ouverte directement le 15 août 2026: la page tarifaire porte la note `claude-sonnet-5-introductory-pricing`, et les notes de version de l’API datent la décision au 10 août dans les termes « the previously scheduled increase to $3 / $15 per MTok on September 1, 2026 will not occur ». Le tarif de lancement de **2 USD/M en entrée et 10 USD/M en sortie est le tarif standard**, et **la hausse vers 3/15 USD/M programmée au 1er septembre 2026 n’aura pas lieu** [S158]. Les tarifs d’abonnement grand public sont inchangés.

**[Déduction]** L’effet décisionnel est net: tout arbitrage de migration qui n’était motivé que par le surcoût de 50 % attendu en septembre perd son objet, et Sonnet 5 se compare désormais à Haiku 4.5 (1/5) et GPT-5.6 Terra (2/12) sur les seuls critères de qualité, de latence et de fonctionnalités. La leçon de méthode est au moins aussi utile: **une échéance annoncée par un fournisseur n’est pas un fait acquis tant qu’elle n’est pas échue**. Un calendrier tarifaire se revérifie à sa source à chaque cycle, y compris — et surtout — quand il a déjà été vérifié.

**Cycle de vie des modèles, vérifié à la source.** La page de dépréciations, ouverte directement le 14 août, place `claude-sonnet-5` en actif avec un retrait pas avant le 30 juin 2027, `claude-opus-5` pas avant le 24 juillet 2027, et confirme le retrait effectif d’Opus 4.1 le 5 août 2026. Anthropic s’engage à un préavis d’au moins 60 jours pour les modèles publics. Point de compatibilité à ne pas manquer: **`temperature`, `top_p` et `top_k` renvoient une erreur 400 sur Opus 4.7 et modèles ultérieurs** lorsqu’ils sont réglés hors valeur par défaut [S159].

**Un modèle listé n’est pas un modèle commandable.** La vue d’ensemble officielle des modèles, ouverte directement le 15 août, documente `claude-mythos-5` : mêmes caractéristiques et même tarif que Fable 5 (**10/50 USD/M**), mais **disponibilité limitée** aux clients approuvés du programme **Project Glasswing**, dédié à la **cybersécurité défensive**, **sans inscription en libre-service** — l’accès passe par une équipe de compte Anthropic, AWS ou Google Cloud. Une préversion `claude-mythos-preview` complète le dispositif. **[Déduction]** Ce modèle figure dans la grille tarifaire publique sans être disponible : il ne doit pas être compté parmi les options accessibles depuis la Belgique, et illustre pourquoi une grille tarifaire ne suffit jamais à établir une disponibilité [S174].

**Les agents managés gagnent quatre garde-fous** [S175]. Les notes de version officielles documentent, au 7 août : un **budget de session**, plafond de dépense aux tarifs publics dont l’atteinte met la session en pause avec le motif d’arrêt `budget_reached` au lieu de lancer de nouvelles requêtes ; un **conseiller**, déclaré par une entrée `{"type": "advisor"}` dans la liste multiagent, que le fil principal peut consulter en cours de tour ; le paramètre **`inference_geo`**, posé dans l’objet `model` à la création de l’agent ou surchargé par session, qui commande la géographie d’exécution de l’inférence ; et la **découverte automatique des compétences** présentes dans le répertoire `.claude/skills` d’un dépôt GitHub monté. Au 11 août, l’API de conformité s’étend aux transcriptions des sessions Cowork et Claude Code exécutées sur les machines des utilisateurs, en bêta Enterprise, et un en-tête `anthropic-workspace-id` est ajouté aux réponses. **[Déduction]** Le budget de session est le garde-fou qui manquait à un agent laissé sans surveillance, mais il borne une dépense sans garantir un coût. L’API de conformité sur sessions locales est puissante et intrusive : à documenter dans le registre de traitement d’une organisation qui l’active.

**Disponibilité.** Une interruption a touché l’API Claude, Claude Code et Cowork du **14 août 20:00 au 15 août 00:11 UTC**, soit 22:00 → 02:11 heure de Bruxelles, avec des erreurs élevées constatées notamment sur Fable 5. Un correctif a été déployé et l’incident est résolu. Aucune analyse post-incident publique n’a été trouvée : cause racine et périmètre exact ne sont pas établis [S184–S185].

**Belgique et données.** Application et API sont pertinentes pour FR/NL, à valider sur le corpus réel. DPA, résidence et rétention varient entre API directe, AWS et Google Cloud; la résidence peut ajouter un multiplicateur. **Aucune géographie UE n’est documentée pour l’API directe**, l’option publiée étant l’inférence aux États-Unis via `inference_geo` (×1,1). Vérifier le contrat exact.

**Développement.** Excellente capacité d’outils et de code. Utiliser prompt caching pour les préfixes stables, batch pour l’asynchrone, effort mesuré et identifiants datés. Opus 5 ajoute effort configurable, Fast à 2× et fallback automatique bêta en cas de blocage de sûreté; les inference hooks entreprise sont en bêta depuis le 5 août [S63, S85].

### 3. Google

**Positionnement.** Gemini combine multimodalité, contexte 1 M, recherche Google/Maps et agents managés. **Gemini 3.7 Flash**, publié le 13 août, est présenté comme le modèle de travail pour le code et les agents : **1 M de contexte**, **64 k de sortie**, coupure de connaissances **mars 2026**, au tarif d’introduction de **0,75/3,75 USD/M** — soit environ 0,65/3,25 EUR — **jusqu’au 31 décembre 2026**, puis **1,50/7,50 USD/M** au 1er janvier 2027. La carte modèle décrit un **raffinement algorithmique du cœur de raisonnement de 3.6 Flash, et non un nouveau préentraînement** [S176–S178]. **[Déduction]** Un tarif d’appel dont la date d’expiration est publiée n’est pas une baisse de prix mais une remise à durée déterminée : elle se prend, avec l’échéance de réévaluation inscrite au calendrier. Gemini 3.6 Flash reste GA à 1,50/7,50 USD/M et 64 k de sortie; 3.5 Flash-Lite cible le haut débit à 0,30/2,50 [S65]. **Google a programmé l’arrêt de Gemini 2.5 Pro, Flash et Flash-Lite au 16 octobre 2026: planifier la migration vers la famille 3.x** [S114]. Gemini app, AI Studio, Gemini API et Vertex AI sont des surfaces différentes.

**Lacune de couverture corrigée: une famille spécialisée absente des éditions précédentes** [S152]. **Gemini Omni Flash**, ouvert aux développeurs le 30 juin, est un modèle en préversion pour la génération et l’édition conversationnelle de vidéos de 3 à 10 secondes en 720p. La tarification de cette modalité doit être budgétée séparément de la génération de texte. Le journal officiel confirme en outre l’arrêt, le **17 août 2026**, de `imagen-4.0-generate-001`, `imagen-4.0-ultra-generate-001` et `imagen-4.0-fast-generate-001`. Aucune publication officielle consultée ne confirme l’arrêt au 31 août de `gemini-robotics-er-1.6-preview`; cette échéance est donc retirée plutôt que présentée comme certaine.

**Belgique.** Les tiers gratuits et payants Gemini API sont annoncés disponibles dans de nombreuses régions, y compris EEE [S11]. Le payant n’utilise pas le contenu pour améliorer les produits selon la grille; le gratuit le peut [S09]. Facturation à vérifier dans le projet Google Cloud. **Pour Gemini 3.7 Flash spécifiquement, aucun point de terminaison monorégional ni multirégional UE de Vertex AI n’est confirmé dans ce contrôle**: la couverture EEE est documentée pour la famille 3.x, pas version par version. Une disponibilité EEE ne vaut pas résidence garantie.

**Développement.** Cache, batch/Flex/Priority, grounding, code execution, file search et computer use. Gemini 3.6 déprécie les réglages personnalisés `temperature`, `top_p` et `top_k`; tester la migration, les tours modèle préremplis et les paramètres acceptés avant bascule [S65, S86–S87].

### 4. Microsoft

**Positionnement.** Microsoft 365 Copilot est l’application de travail, Azure OpenAI/Foundry la plateforme modèles, Copilot Studio la plateforme agents, GitHub Copilot l’assistant code traité séparément.

**Belgique.** Microsoft affiche des prix en euros hors taxes sur une page européenne; un plan M365 qualifiant peut être requis [S12]. Azure offre régions, identité, réseau et DPA, mais la disponibilité dépend du modèle/déploiement.

**Développement.** Choix logique pour organisations déjà sur Entra, M365 et Azure. Risque: addition de licence utilisateur, crédits agents, appels modèle, recherche et connecteurs [S13–S14]. Produire une architecture de coûts complète.

### 5. AWS

**Positionnement.** Bedrock agrège des modèles de nombreux fournisseurs. Bedrock Agents est désormais « Agents Classic », fermé aux nouveaux clients depuis le 30 juillet; AgentCore est la voie recommandée pour opérer des agents de frameworks variés [S15–S17, S88–S89].

**Belgique.** AWS dispose de régions européennes et d’un DPA; cela ne garantit pas que chaque modèle ou fonction reste dans la région choisie. Vérifier le tableau région/modèle et le routage cross-region.

**Développement.** IAM, VPC, KMS, CloudWatch et Guardrails sont des avantages. Standard/Flex/Priority/Reserved et batch permettent d’adapter coût/latence. Le verrouillage porte sur l’orchestration et les services, même si les modèles restent interchangeables.

### 6. Meta

**Positionnement — changement majeur.** La référence Meta n’est plus Llama mais **Muse**. **Muse Glimmer** (10 août 2026) est un modèle d’environ 29,6 milliards de paramètres **dense**, distillé du modèle propriétaire Muse Spark et publié sous **Apache 2.0** — le premier modèle à poids ouverts de Meta depuis plus d’un an, après le virage consécutif à l’accueil réservé de Llama 4 [S117, S119]. Techniquement: 52 couches, attention hybride combinant GQA et fenêtre glissante (ratio local/global 3:1), encodeur de vision d’environ 1,8 milliard de paramètres, contexte de **131 072 jetons de texte et d’images entrelacés**, vocabulaire de plus de 200 000 entrées, plus de 100 langues [S118]. L’entraînement cible explicitement l’usage d’outils multi-étapes, l’appel de fonctions et **la reprise après échec d’une API appelée**. Une version ouverte de **Muse Spark 1.2** a été annoncée publiquement, **sans date ferme**. Le coût API dépend du fournisseur ou de l’infrastructure; Meta AI reste une application distincte [S18].

**Ce que cela change concrètement.** Un banc indépendant sur une seule RTX 4090 mesure ~19,3 Go de VRAM pour 130 000 jetons de contexte **sans quantifier le cache KV** [S118]. Autrement dit, un agent multimodal à long contexte devient exécutable sur une station de travail unique à moins de 2 000 euros — un palier qui n’existait pas pour un modèle sous licence permissive. Réserve d’usage: le modèle est **dense**, donc il ne bénéficie pas de l’avantage des MoE en offload; sur une carte de 12 Go, il ne tient pas et sera lent.

**Belgique.** Apache 2.0 lève l’essentiel des frictions de licence qui pesaient sur Llama Community pour un déploiement professionnel. Vérifier tout de même la carte du modèle et la disponibilité exacte des fonctions Meta AI dans l’UE, distinctes des poids. Le français est généralement utilisable; **le néerlandais doit être évalué** — la couverture annoncée de « plus de 100 langues » ne dit rien de la qualité en NL sur vos tâches. L’auto-hébergement donne du contrôle mais crée les obligations d’exploitant, garde-fous compris.

### 7. Mistral AI

**Positionnement.** Acteur européen couvrant poids ouverts, modèles premium, Vibe, Studio, agents, RAG, OCR, audio et code [S19–S21]. Mistral Medium 3.5 est orienté agents/développement; Mistral Large est le généraliste phare affiché.

**Nouveauté majeure du 11 août: la résidence européenne devient un produit tarifé.** Trois annonces liées [S142–S144]:

- **Regional Endpoints, en disponibilité générale.** Le client choisit si son inférence s’exécute **en Europe ou aux États-Unis**, pour aligner l’exécution sur ses exigences de résidence, de conformité et de latence. Surcoût: **×1,1**, soit +10 % sur le tarif global.
- **Priority Tier, en préversion publique.** Niveaux de service engagés pour charges critiques, **limites de débit personnalisées par modèle**, mise en place via le compte, et **SLA de disponibilité de 99,5 %** — soit environ **3 h 39 d’indisponibilité tolérée par mois**. Surcoût: **×1,75**.
- **Infrastructure.** Une coalition d’entreprises européennes s’engage sur des volumes de calcul pluriannuels destinés à financer **200 MW en Europe d’ici fin 2027** et **1 GW d’ici fin 2030**.

**Ce qu’il ne faut pas surinterpréter.** L’inférence et son traitement se déroulent dans la région choisie **sous réserve de transferts encadrés et limités vers des sous-traitants pouvant se situer hors de cette région** [S144]. « Endpoint UE » ne signifie donc pas « aucune donnée ne quitte l’UE ». Pour un registre de traitement, une analyse d’impact ou une clause contractuelle, ce sont le DPA et la liste des sous-traitants qui font foi — pas le nom de l’endpoint. Le Priority Tier est par ailleurs en **préversion publique**: un SLA annoncé en préversion n’a pas la portée contractuelle d’un SLA en GA, et sa valeur reste **à confirmer** par écrit.

**Belgique.** Pertinence élevée: documentation française et options européennes/privées. Ne pas déduire la conformité du siège européen; vérifier DPA, région, rétention et entraînement du plan choisi. Le néerlandais est à tester. **[Déduction]** Pour un projet belge bloqué sur la résidence des données, +10 % est un surcoût faible au regard de l’alternative — auto-hébergement ou renoncement. C’est, à cette date, l’option européenne la plus lisible du marché: Mistral est le seul laboratoire européen à combiner choix de région *et* niveau de service engagé.

**Développement.** API simple, batch, modèles spécialisés et déploiement privé. La variété des licences open weight exige un examen version par version. Le choix d’endpoint régional se traite comme une **décision d’architecture**, pas comme un réglage: il change l’URL de base, potentiellement la latence, et il doit être cohérent avec ce que le DPA promet.

### 8. xAI (SpaceXAI)

**Positionnement.** **Grok 4.6 remplace Grok 4.5 depuis le 12 août 2026** [S139–S141]. Caractéristiques vérifiées:

- **500 k de contexte**, inchangé par rapport à 4.5.
- **Sous 200 k jetons**: 2 USD/M en entrée, **0,50** en entrée mise en cache, 6 USD/M en sortie.
- **À partir de 200 k jetons**: 4 / 1 / 12 USD/M, et la grille haute s’applique à **l’intégralité des jetons de la requête**, pas au seul dépassement. Franchir le seuil double donc le coût de la requête entière — c’est le piège tarifaire principal de ce modèle.
- Variante rapide à **2× les tarifs standard**; **aucune remise batch** publiée.
- Cache: xAI recommande `prompt_cache_key` avec la Responses API, ou l’en-tête `x-grok-conv-id` avec Chat Completions, pour que les requêtes d’une même conversation atteignent le même serveur et aient une meilleure chance de toucher le cache.

**Positionnement mesuré.** Sur l’**Artificial Analysis Intelligence Index** — un indice tiers, pas un banc fournisseur — Grok 4.6 est donné à parité avec GPT-5.6 Sol et devant Kimi K3, pour environ la moitié du prix des modèles frontière comparables [S141]. Cette mesure n’a pas été répliquée par cet observatoire et ne dit rien de la qualité sur vos tâches, ni sur le français et le néerlandais. Elle établit un positionnement commercial, pas une supériorité technique.

**Belgique.** **Le point de vigilance de cette fiche.** Grok 4.5 était confirmé dans la console API pour les utilisateurs UE depuis le 17 juillet [S68]; **rien n’établit ce statut pour Grok 4.6** au 13 août — à confirmer. Plus important: **aucune résidence de données européenne n’est annoncée**, et le DPA de xAI documente un traitement en `us-east-1` et `us-west-2`. Disponibilité, prix local et résidence restent donc à confirmer, et la politique grand public ne couvre pas nécessairement l’API entreprise [S24]. **[Déduction]** L’écart de prix face à Sol ou Opus 5 est réel, mais il ne compense pas cette incertitude pour des données personnelles européennes: pour ce cas d’usage, Grok reste un modèle à évaluer sur données synthétiques ou publiques, pas à mettre en production.

**Changement d’entité en cours.** SpaceX a absorbé xAI plus tôt en 2026 et l’acquisition d’Anysphere/Cursor doit se clôturer avant fin août [S147]. Premier produit annoncé de la combinaison: **Grok Bot**, assistant de travail à partir de **120 USD/mois** [S148]. Pour un client européen, un changement d’entité contractante peut modifier la juridiction, le responsable de traitement et les clauses de transfert — à revérifier après la clôture, même si le produit ne change pas.

**Développement.** Compatibilité API, tool use, structured outputs, files. Surveiller les retraits et redirections de slugs; épingler et tester les versions. **Ajouter une alerte de budget au franchissement du seuil de 200 k jetons**: c’est le mécanisme le plus susceptible de produire une facture inattendue chez ce fournisseur.

### 9. DeepSeek

**Positionnement.** DeepSeek V4 Pro et Flash offrent 1 M de contexte, jusqu’à 384 k de sortie, modes thinking/non-thinking, JSON et appels d’outils. Les anciens alias `deepseek-chat` et `deepseek-reasoner` ont été retirés le 24 juillet 2026 [S66–S67].

**V4 Pro 0813 est en disponibilité générale, avec des poids MIT** [S182–S183]. L’instantané `0813` sort de préversion le 13 août 2026. L’architecture décrite est un **mixture-of-experts de 1 600 milliards de paramètres au total pour 49 milliards actifs par jeton**; les poids sont publiés sur Hugging Face sous **licence MIT**, pour un volume de l’ordre de **893 Go**. Tarifs relevés: **0,435 USD/M** en entrée hors cache, **0,003625 USD/M** sur succès de cache et **0,87 USD/M** en sortie. **[Déduction]** La licence MIT autorise explicitement l’usage commercial, mais 893 Go de poids placent l’auto-hébergement hors de portée d’un particulier et même de la plupart des PME: ce modèle n’entre pas dans les paliers de [modeles-locaux-par-hardware.md](modeles-locaux-par-hardware.md). L’ouverture de la licence profite ici aux hébergeurs, pas à l’utilisateur final.

**Belgique.** Disponibilité commerciale, DPA, transferts, rétention, usage d’entraînement et facture belge sont à confirmer; **aucune région UE n’est annoncée pour l’API directe**. Pour données sensibles, la voie défendable est l’auto-hébergement des poids MIT ou le recours à un hébergeur établi en UE, après revue de licence — pas l’API directe.

### 10. Alibaba Cloud / Qwen

**Positionnement.** Qwen propose généralistes, code et multimodal, en poids et via Model Studio [S27–S28]. Le modèle de tête est désormais **Qwen3.8-Max** (3 août 2026): architecture MoE de **2 400 milliards de paramètres dont 95 milliards actifs par jeton**, contexte de 1 million de jetons, entrée native texte, image et vidéo, sortie jusqu’à 131 072 jetons, à **2 USD/M en entrée et 6 USD/M en sortie** avec cache implicite à 0,25 USD/M [S115]. Côté ouvert, **Qwen3.6-35B-A3B** (avril 2026, Apache 2.0) est devenu une référence locale: 35 milliards de paramètres pour 3 milliards actifs, attention linéaire Gated DeltaNet, 262 k de contexte natif, ~21 Go en Q4_K_M [S127].

**Le fait marquant est tarifaire autant que technique.** À 2/6 USD/M, Qwen3.8-Max se place **en parité d’entrée avec GPT-5.6 Terra** (2/12), avec une sortie moitié moins chère. C’est la première fois qu’un modèle chinois de classe frontière s’aligne frontalement sur la grille d’un modèle occidental de référence plutôt que de se positionner comme alternative économique. Alibaba a par ailleurs annoncé l’ouverture des poids d’un modèle de classe « Max » — une première dans sa gamme — accompagnée d’un Qwen3.8-27B, pour la semaine du 10 août. **Au 12 août, ni l’un ni l’autre n’était publié sur Hugging Face et aucune licence n’avait été nommée** [S116]. À traiter comme une intention annoncée, pas comme un fait acquis: ne bâtissez aucune architecture d’auto-hébergement sur cette base tant que le dépôt et la licence n’existent pas.

**Belgique.** Le mot « global » ne prouve ni la disponibilité, ni la localisation UE, ni une facture conforme en Belgique. Vérifier compte, région, DPA, support et langues; FR/NL sont à tester. La parité tarifaire ne modifie en rien cette réserve: **le prix n’est pas le facteur limitant pour un résident belge sur cette offre, la conformité l’est.**

### 11. NVIDIA

**Positionnement.** Nemotron fournit des modèles; NIM des microservices d’inférence; NeMo la personnalisation, l’évaluation, les garde-fous et l’outillage agents [S29–S31]. Ce n’est pas un abonnement grand public comparable à ChatGPT.

**Nouveauté du 11 août: Nemotron 3.5 Lightning 30B-A3B** [S120–S121]. Architecture MoE hybride mêlant couches Mamba-2, couches MoE et quelques couches d’attention, pour 30 milliards de paramètres dont **3 milliards actifs par jeton**, un contexte de **1 million de jetons**, des checkpoints en NVFP4 et BF16, et une licence permissive **OpenMDW-1.1**. Le positionnement annoncé est celui des agents « toujours actifs » traitant de gros volumes de tâches spécialisées, avec un débit de sortie annoncé jusqu’à quatre fois supérieur à des modèles de taille comparable — **affirmation fournisseur non répliquée indépendamment** à cette date. NVIDIA a publié en parallèle **NeMo Switchyard**, qui route chaque étape d’un workflow agentique vers le modèle retenu pour cette étape.

**Lecture de marché.** Le rapprochement des dates est frappant: Nemotron 3.5 Lightning sort le 11 août, au lendemain de Muse Glimmer, avec **la même taille nominale de 30 milliards de paramètres** et la même cible d’agents locaux. Deux acteurs américains reviennent donc simultanément sur le terrain des poids ouverts, celui-là même que la sélection décrivait comme dominé par les laboratoires chinois. Différence structurelle à ne pas gommer: **Nemotron est un MoE à 3 milliards de paramètres actifs, Muse Glimmer est dense**. Le premier reste rapide en offload CPU/GPU, le second exige de tenir en mémoire. Pour un poste équipé d’une carte 12 Go, ce détail décide du choix.

**Belgique.** Pertinent pour entreprise, cloud privé et souveraineté technique. Coût = GPU/cloud + licence/support + exploitation. Sécurité des agents, supply chain des conteneurs et télémétrie doivent être configurées. **OpenMDW-1.1 est une licence récente**: la faire valider avant un usage professionnel engageant, sans se fier au seul qualificatif « permissive ».

### 12. Cohere

**Positionnement.** Command A+ vise agents, RAG, multilingue et déploiement privé; North ajoute interface et workflows [S32–S34]. Contexte publié: 256 k.

**Correction de couverture: Cohere a une offre à poids ouverts depuis juin.** Les éditions précédentes de cet observatoire décrivaient Cohere comme un acteur d’entreprise sans offre ouverte notable. C’est inexact depuis le **9 juin 2026** et la publication de **North Mini Code 1.0** [S149–S150]:

- **30 B de paramètres au total, 3 B actifs** (MoE: 128 experts dans le bloc feed-forward, 8 activés par jeton).
- **Licence Apache 2.0** — permissivité commerciale complète, y compris affinage, redistribution et déploiement commercial.
- **256 k de contexte, jusqu’à 64 k de sortie.**
- Poids sur Hugging Face en **BF16, FP8 et w4a16**; GGUF communautaires; image **Ollama**; également joignable via l’API Cohere, Cohere Model Vault, OpenRouter et OpenCode.
- **w4a16 ≈ 18–20 Go**, laissant 4–6 Go pour le cache KV sur une carte 24 Go, et **ne nécessitant pas de matériel FP4 natif** (fonctionne sur Hopper et Ada, avant Blackwell).

**Réserve technique documentée.** L’attention entrelace une fenêtre glissante de 4096 jetons avec une attention globale périodique, ce qui **rend le cache KV volumineux en long contexte** [S150]. **[Déduction]** Les 256 k annoncés sont une capacité du modèle, pas une promesse de tenue sur 24 Go: dimensionnez sur une mesure à votre contexte de travail réel, pas sur le chiffre de la carte de modèle. C’est exactement le type d’écart que ce livrable signale ailleurs pour les autres fournisseurs.

**Belgique.** Bon candidat B2B pour recherche sur données internes et déploiement contrôlé. Pas de proposition grand public dominante. Vérifier langues FR/NL par tâche et contrat de région. **[Déduction]** North Mini Code change ce pour quoi on consulte Cohere: c’est désormais aussi un fournisseur pertinent pour un **agent de code tournant entièrement sur une machine locale**, cas d’usage où la question de la résidence des données ne se pose plus du tout. Voir le [guide local](modeles-locaux-par-hardware.md).

### 13. IBM

**Positionnement.** watsonx.ai combine Granite, modèles tiers, RAG et agents; watsonx.governance ajoute inventaire, évaluation et conformité [S35–S36].

**Belgique.** Pertinent pour entreprises réglementées et hybride/on-prem. Les prix affichés sont indicatifs, variables par pays et hors taxes. Standard commence nettement au-dessus d’un usage individuel.

### 14. GitHub Copilot

**Positionnement.** Assistant de code multi-modèles avec complétion, chat, CLI, revue, agent local et cloud. Plans individuels: Free, Pro, Pro+, Max; crédits IA variables selon modèle et complexité [S37–S38]. GPT-5.6, Opus 5 et Kimi K2.7 ont rejoint Copilot, tandis que le service distinct GitHub Models a été retiré le 30 juillet [S73–S74].

**Une échéance de compatibilité au 1er septembre 2026.** GitHub retire **Claude Sonnet 3.7, Claude Sonnet 3.7 Thinking, Claude Opus 4 et Gemini 2.0 Flash de toutes les surfaces Copilot** — chat, éditions en ligne, modes ask et agent, complétion — à cette date; **MAI-Code-1-Flash** suit le 10 septembre, avec MAI-Code-1.1-Flash pour remplaçant proposé [S167]. Une exception est évoquée pour certains abonnés annuels individuels, et les administrateurs Copilot Enterprise peuvent devoir ouvrir les remplaçants dans leur politique de modèles avant que les utilisateurs n’y accèdent. Réserve d’accès: `github.blog` étant bloqué depuis l’environnement d’exécution, la liste précise n’a pas pu être relue sur la page officielle et **reste à confirmer entrée par entrée**.

**[Déduction]** Ce point mérite d’être distingué d’une dépréciation d’éditeur, et c’est tout l’intérêt de la distinction que cet observatoire maintient entre **modèle**, **assistant de code** et **distributeur**. Claude Opus 4 a été retiré de l’API Anthropic le 15 juin 2026; Claude Sonnet 3.7 le 19 février. Le calendrier de GitHub est donc son propre calendrier de distributeur, désynchronisé de celui des éditeurs. La conséquence pratique pour un développeur belge est concrète: **un identifiant de modèle épinglé dans un flux, un script d’automatisation ou une politique d’entreprise peut casser chez le distributeur alors que le modèle vit encore ailleurs, ou l’inverse**. La checklist de production en tire une ligne dédiée: aucun identifiant épinglé sans plan de remplacement daté, et une surveillance des calendriers **des deux côtés de la chaîne**.

**Agent Plugins 1.0 et le sens de l’interopérabilité.** Publié le 6 août avec AWS, Anysphere, Microsoft, OpenAI, Vercel puis Google comme mainteneur principal, ce format empaquette compétences d’agent et serveurs MCP en **un greffon unique installable**, présenté comme gouverné indépendamment d’un éditeur, et disponible dans VS Code, Copilot CLI et l’application Copilot [S170]. **[Déduction]** L’intérêt pour un développeur indépendant est de construire son outillage une fois et de le porter entre assistants, ce qui réduit le coût de sortie — le verrouillage se déplace du greffon vers le modèle et le contrat. Réserve: la gouvernance annoncée comme indépendante n’a été vérifiée sur aucun document de gouvernance publié, et le périmètre réel de compatibilité entre clients reste à confirmer sur la spécification elle-même. À ce stade, c’est une annonce d’intention convergente entre acteurs, pas un standard dont la neutralité est établie.

**Belgique et données.** Plans individuels: interactions susceptibles d’entraîner les modèles sauf opt-out; Business/Enterprise exclus de l’entraînement. Rétention B/E: IDE chat/completion non retenus, autres surfaces jusqu’à 28 jours selon page [S37]. DPA disponible.

**Développement.** Meilleur choix de départ si GitHub/VS Code domine. Mesurer qualité de PR, tests et failles; les sorties ne remplacent pas revue, SAST et tests.

### 15. Perplexity

**Positionnement.** Application de recherche sourcée, modèles Sonar et Agent API. API séparée de l’abonnement [S39–S40].

**Belgique.** Utile pour veille et recherche, mais chaque citation doit être ouverte. Prix grand public en euros et contrôles d’entreprise à vérifier au checkout ou au contrat.

### 16. Anysphere / Cursor

**Positionnement.** Éditeur centré agents, index du dépôt, terminal, MCP et choix multi-modèles. Cursor Router, disponible sur desktop, web, mobile, CLI et SDK, optimise le routage selon coût, équilibre ou intelligence [S75]. Ce n’est pas un modèle de fondation.

**Données.** Privacy Mode interdit l’entraînement par Cursor et ses providers, annonce des accords ZDR et chiffrement; des données peuvent être conservées lors de détection d’abus [S42]. En équipe, l’imposer par politique.

**Développement.** Excellente ergonomie, mais coûts indexés sur l’usage des modèles et forte cadence de changement. Prévoir règles de dépôt, commandes interdites, validation diff/test et budget.

**Changement capitalistique en cours — le point le plus important de cette fiche.** SpaceX (qui a absorbé xAI plus tôt en 2026) rachète Anysphere pour **60 milliards USD en actions**, opération annoncée le 16 juin, **procédures réglementaires finalisées le 12 août**, clôture attendue **avant fin août 2026** et **non actée** au 13 août [S147]. Les actionnaires d’Anysphere reçoivent des actions ordinaires de classe A de SpaceX. L’acquéreur met en avant le produit, environ 4 millions de développeurs et la technologie de codage, l’objectif affiché étant de renforcer les modèles Grok sur le code.

**Ce que cela change pour un utilisateur belge.** Rien dans le produit à ce jour — et c’est précisément le risque, car un changement de propriétaire ne se voit pas dans l’IDE. À revérifier **après la clôture**: entité contractante et pays de facturation, politique de confidentialité et notamment le maintien de Privacy Mode et des accords ZDR décrits ci-dessus, responsable de traitement au sens RGPD, clauses de transfert, et articulation avec les modèles Grok (un routage par défaut vers un modèle maison changerait le profil de traitement des données du dépôt). Un rapport de presse évoque une possible disparition de la marque Cursor: **non confirmé**, non répercuté ici [S147]. Premier produit annoncé de la combinaison: **Grok Bot**, à partir de 120 USD/mois [S148].

**Conséquence pour la sélection.** Cette entrée et l’entrée xAI (rang 8) sont appelées à fusionner. Voir la section **Méthodologie et sélection** en tête de ce document.

### 17. Replit

**Positionnement.** Agent de création d’apps intégré à l’IDE, bases et déploiement. Core annuel 20 USD/mois équivalent avec 25 USD de crédits; Pro 95 USD avec 100 USD [S44].

**Belgique.** Bon pour prototypes et petites applications; facturation et localisation à vérifier. Risque de verrouillage plateforme et de coûts croissants en builds autonomes.

### 18. Hugging Face

**Positionnement.** Hub des modèles/datasets, Inference Providers sans majoration annoncée, Endpoints dédiés et Spaces [S45–S47]. Ce n’est pas un modèle unique.

**Belgique et sécurité.** Endpoint AWS eu-west-1 disponible; DPA Enterprise et SOC 2 Type 2 annoncés. Hugging Face a divulgué une intrusion touchant une partie de son infrastructure et des identifiants, sans preuve de modification des modèles/datasets/Spaces publics; le fournisseur recommande de faire tourner les jetons et vérifier l’activité [S76]. Le compte rendu technique du 27 juillet renforce les exigences d’isolation, de moindre privilège et d’identités courtes [S77].

### 19. Moonshot AI / Kimi

**Positionnement.** Kimi couvre modèles open weight, application, Kimi Code CLI et SDK agent. Kimi K3, 2,8 T paramètres, vision native et 1 M de contexte, est disponible dans l’app, Kimi Work, Kimi Code et l’API; les poids complets étaient annoncés au 27 juillet [S70]. L’API publie cache, outils, JSON Schema et effort low/high/max [S71].

**Belgique.** Les poids améliorent la portabilité. API directe, abonnement, DPA, région et qualité FR/NL restent à confirmer; la grille indique des prix hors taxes. La politique grand public a été mise à jour le 28 juillet, effective le 4 août [S72]. Le CLI peut lire/écrire, lancer des commandes, utiliser MCP et sous-agents: permissions minimales obligatoires.

### 20. Z.AI / GLM

**Positionnement.** **GLM-5.3**, publié le 14 août 2026, est le modèle phare. Il **réutilise la base mixture-of-experts de 743 milliards de paramètres de GLM-5.2** et ne doit ses gains qu’à un post-entraînement élargi. L’éditeur l’annonce comme le meilleur modèle de code à poids ouverts qu’il ait mesuré, avec une progression de 50 % sur son banc d’essai **interne** Code Bench, et signale une progression en cybersécurité plus rapide qu’anticipé. **Ses poids ne sont pas publiés**: ils sont annoncés sous environ deux semaines, après évaluation de sûreté et durcissement. L’accès immédiat passe par l’abonnement **GLM Coding Plan** — 18, 80 ou 168 USD par mois selon le palier, sur un système de quotas par points, l’usage hors pointe étant décompté à 50 % — et par ZCode; **aucun tarif par jeton n’est publié** pour 5.3 [S179–S181]. **GLM-5.2** reste le modèle phare **réellement à poids ouverts**, sous licence MIT, à contexte 1 M [S52–S54, S81].

**[Déduction]** Retenir les poids en invoquant une évaluation de sûreté, après les avoir publiés immédiatement à la version précédente, est un changement de politique d’accès et non un détail de calendrier. Deux conséquences pratiques: tant que les poids ne sont pas parus, l’étiquette « à poids ouverts » décrit une **intention annoncée** et non un fait vérifiable, et GLM-5.3 n’est **pas** une option d’auto-hébergement — GLM-5.2 sous MIT reste le repli. Les scores de code sont par ailleurs des **mesures fournisseur sur un banc interne**, non reproduites indépendamment: ils ne sont pas comparables aux scores publiés par d’autres éditeurs.

**Belgique.** Prix USD attractifs et API compatible. Les documents contrôlés indiquent surtout anglais/chinois; FR/NL, région UE, DPA, rétention et disponibilité belge sont à confirmer. **Aucun hébergement en UE n’est annoncé**: l’usage de GLM-5.3 passe par une API et un abonnement opérés hors UE, ce qui impose de vérifier DPA, transferts et rétention avant tout traitement de données professionnelles.

## Recommandations transversales

- **Particulier:** privilégier l’application qui facture clairement en EUR et offre contrôle d’entraînement; ne pas y placer de données de tiers.
- **Indépendant:** deux APIs, modèles épinglés, budget dur, logs sans contenu sensible et jeu d’évaluation FR/NL.
- **PME:** commencer par l’écosystème d’identité existant; exiger DPA, liste des sous-traitants, région, rétention, export et suppression.
- **Code:** mesurer une tâche complète jusqu’aux tests, pas le nombre de suggestions. Bloquer secrets et commandes destructrices.
- **Secteur réglementé:** gouvernance d’inventaire, classification des risques, validation humaine, audit des outils et avis juridique spécialisé.
- **Open weight:** scanner poids/conteneurs, vérifier licence et provenance, isoler l’inférence, tester les garde-fous et maintenir les correctifs.

## Le contexte politique du poids ouvert

Fait antérieur au cycle, absent des éditions précédentes et corrigé ici. Le **24 juillet 2026**, vingt-cinq entreprises et organisations ont publié une lettre ouverte, **« Open Weights and American AI Leadership »**, demandant aux pouvoirs publics américains de ne pas restreindre prématurément les modèles à poids ouverts [S151]. Signataires: NVIDIA, Microsoft, Meta, IBM, Mistral, Hugging Face, Mozilla, Dell, Palantir, Replit, Perplexity, Box, ServiceNow, CrowdStrike, Telnyx, la Linux Foundation, Andreessen Horowitz, Y Combinator et Emergence Capital, entre autres. Le texte qualifie la **distillation** de « technique largement utilisée » pour améliorer, évaluer et valider des modèles, et met en garde contre sa confusion avec une appropriation illicite. Le contexte immédiat: un débat américain sur l’interdiction des modèles chinois, et une accusation publique visant Moonshot, soupçonnée d’avoir construit Kimi K3 par distillation de Claude Fable 5.

**OpenAI, Anthropic et Google n’ont pas signé.**

**[Déduction]** Cette liste de signataires et d’absents est plus informative qu’un communiqué. Neuf des vingt écosystèmes suivis ici sont signataires; les trois laboratoires dont le modèle économique repose sur l’accès exclusif aux modèles frontière ne le sont pas. La ligne de partage de l’industrie n’oppose donc pas des convictions sur l’ouverture, mais des positions économiques: ceux qui vendent du matériel, du cloud, de la distribution ou de l’outillage ont intérêt à des poids abondants; ceux qui vendent l’accès au modèle lui-même, non. **Conséquence pratique pour un lecteur belge:** la disponibilité future de modèles ouverts de qualité dépend d’arbitrages réglementaires américains sur lesquels l’Europe n’a pas la main. Une stratégie 100 % locale (voir le [guide local](modeles-locaux-par-hardware.md)) reste soumise à ce risque amont, même si les modèles déjà publiés sous Apache 2.0 ou MIT restent utilisables sans rétroactivité possible.

## Limites

La consultation web ne permet pas de simuler chaque checkout belge ni de signer un contrat. Certaines pages sont dynamiques ou géolocalisées. Les latences, quotas et remises dépendent du compte.

**Limites propres au contrôle du 15 août 2026.**

1. **Accès aux sources officielles fortement dégradé, pour le troisième contrôle consécutif.** La politique de sortie réseau a bloqué la quasi-totalité des domaines fournisseurs. Chaque fait tarifaire, chaque spécification et chaque date de cette édition provient de l’index de recherche ou de sources indépendantes convergentes, non de l’ouverture directe des pages officielles. C’est un affaiblissement réel du niveau de preuve, et non une simple gêne: **une revérification directe est nécessaire avant tout engagement contractuel ou budgétaire**. La persistance du blocage sur trois contrôles cesse d’être un incident et devient une caractéristique de l’environnement: elle doit être traitée comme telle par le commanditaire, soit en ajustant la politique de sortie réseau, soit en acceptant durablement ce niveau de preuve.
2. **Disponibilité européenne de Grok 4.6 non établie.** Grok 4.5 était confirmé dans la console API UE depuis le 17 juillet; **le même statut pour 4.6 n’a pas pu être vérifié**, et aucune résidence de données européenne n’est annoncée [S68, S139–S141]. C’est la vérification la plus importante restée ouverte à ce contrôle.
3. **SLA Mistral annoncé en préversion.** Le Priority Tier et son SLA de 99,5 % sont en **préversion publique**, pas en disponibilité générale: la portée contractuelle reste à établir par écrit avant de s’y fier [S142–S143]. La réserve sur les transferts vers des sous-traitants hors région est publiée mais non détaillée: **la liste nominative des sous-traitants n’a pas pu être obtenue** [S144].
4. **Opération capitalistique non close.** L’acquisition d’Anysphere/Cursor par SpaceX n’était pas clôturée au 13 août; toute conséquence contractuelle est donc anticipée, pas constatée [S147]. La disparition éventuelle de la marque Cursor relève d’un rapport de presse non confirmé.
5. **Taux de change non vérifié à la source.** `ecb.europa.eu` étant bloqué, la référence BCE du 5 août (1,1554) est conservée et recoupée avec le taux de référence BCE du 11 août relayé par le portail de données (1,1540, écart 0,12 %) [S156].
6. **Promesse d’ouverture non tenue, désormais en retard.** Les poids de Qwen3.8-Max et Qwen3.8-27B, annoncés pour la semaine du 10 août, n’étaient toujours pas publiés au 13 août et aucune licence n’était nommée [S116, S157].
7. **Affirmations fournisseur et indices tiers non répliqués.** Les gains de vitesse annoncés par NVIDIA (jusqu’à ×4) et Meta (×3,1 via DFlash), les scores de sûreté de Shieldstral, les bancs de Muse Glimmer (MCP Atlas, GAIA2, SWE-Bench Pro) et le positionnement de Grok 4.6 sur l’Artificial Analysis Intelligence Index n’ont pas été répliqués par cet observatoire.
8. **Incident Hugging Face.** La cause racine et les correctifs sont publiés [S135–S136]; l’évaluation d’un éventuel impact sur des données partenaires ou clients n’était pas déclarée close [S76].
