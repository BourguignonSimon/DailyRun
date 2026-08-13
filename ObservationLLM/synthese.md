# Synthèse décisionnelle — contrôle du 13 août 2026

> **Trois mouvements en quatre jours, dont un qui change la donne en Europe.** Mistral livre le **choix de région d’inférence (UE ou US) avec un SLA contractuel** — la première offre européenne à combiner les deux (11 août). xAI sort **Grok 4.6** et revendique la parité avec GPT-5.6 Sol pour moitié prix (12 août). OpenAI ouvre **GPT-5.6-Cyber**, réservé à un programme sur dossier (10 août). En arrière-plan, la clôture de l’acquisition de **Cursor par SpaceX/xAI** est imminente: deux des vingt écosystèmes suivis pourraient n’en former qu’un à la prochaine édition. Guide dédié: [modèles locaux par matériel](modeles-locaux-par-hardware.md), **enrichi ce mois-ci** d’un agent de code ouvert (North Mini Code).
>
> ⚠️ **Niveau de preuve.** Les domaines fournisseurs officiels étaient bloqués par la politique de sortie réseau de l’environnement d’exécution, pour le **troisième contrôle consécutif**. Les faits ci-dessous reposent sur l’index de recherche et la convergence de sources indépendantes, pas sur l’ouverture directe des pages officielles. Revérifiez avant tout engagement contractuel. Détail: note d’accès dans [sources.md](sources.md).

## Les trois choses à faire ce mois-ci

1. **Budgéter la hausse Claude Sonnet 5 au 1er septembre — il reste 19 jours**: le prix de lancement 2/10 USD/M passe à **3/15 USD/M**, soit **+50 %** sur un modèle typiquement utilisé en volume. Si Sonnet 5 est dans votre chaîne de production, l’arbitrage (accepter, migrer vers Haiku 4.5 à 1/5, vers GPT-5.6 Terra à 2/12, ou vers **Grok 4.6 à 2/6**) se décide **avant** la bascule [S125, S140].
2. **Vérifier les crédits GitHub Copilot Business/Enterprise**: les crédits promotionnels (+30 USD/mois en Business, +70 en Enterprise) **expirent fin août 2026**. À périmètre d’usage constant, la facture de septembre monte [S137].
3. **Chiffrer l’option « région UE » chez Mistral**: les endpoints régionaux sont GA à **1,1× le tarif global** et le Priority Tier à **1,75× avec un SLA de disponibilité de 99,5 %**. Si la résidence des données bloquait un projet, le surcoût est désormais connu et modeste — mais lisez la réserve sur les sous-traitants hors région avant de l’inscrire dans un registre de traitement [S142–S144].

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral Vibe | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût; **clôture SpaceX↔Cursor attendue fin août** |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | Licences imbriquées, TVA hors prix B2B |
| Production UE sensible | **Mistral endpoint UE (×1,1)** ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé; SLA 99,5 % disponible en Priority Tier (×1,75, préversion) | Transferts encadrés vers sous-traitants **possibles hors région**: exiger la liste |
| Open weight / sur site | **Muse Glimmer**, Mistral, **Nemotron 3.5 Lightning** | Qwen3.6, Gemma 4, Granite 4.1, **North Mini Code**, Kimi, GLM, DeepSeek | Contrôle et portabilité; licences majoritairement Apache 2.0 désormais | Licence exacte, sécurité, capacité GPU, évaluation locale |
| Exécution 100 % locale | **Gemma 4, Qwen3.6** (selon RAM/VRAM) | gpt-oss, Gemma 4 26B-A4B, Qwen3.6-35B-A3B (MoE) | Données privées, hors ligne, coût nul par jeton | Mémoire disponible, vitesse, FR/NL à tester — voir [guide local](modeles-locaux-par-hardware.md) |
| Agent tournant en local | **Muse Glimmer 30B** (24 Go VRAM) | Nemotron 3.5 Lightning 30B-A3B | Outils, reprise sur échec, 131 k de contexte, Apache 2.0 | Sandbox et plafond d’itérations **obligatoires**, comme pour un agent cloud |
| Agent de **code** en local | **North Mini Code 1.0** 30B-A3B (w4a16, ~18–20 Go) | Muse Glimmer 30B, Qwen3.6-35B-A3B | Apache 2.0, 256 k de contexte, 3 B actifs seulement, image Ollama disponible | Cache KV lourd en long contexte (attention glissante 4096 + globale périodique): tester à contexte réel |
| Modération / garde-fou local | **Shieldstral 1.0 3B** | Granite 4.1 Guardian | Politique en langage naturel à l’inférence; un GPU 16 Go suffit | Scores annoncés par le fournisseur; tester sur FR et NL réels |

## Ce qui a changé depuis le contrôle du 12 août

La sélection reste inchangée: **aucune entrée, aucune sortie**. Mais une consolidation est en cours entre deux entrées de la liste, et c’est le fait structurel du cycle.

### 1. Mistral vend la souveraineté comme un produit, avec un prix et un SLA (11 août)

C’est la nouveauté la plus directement actionnable pour un résident belge. Trois briques [S142–S144]:

- **Regional Endpoints, en disponibilité générale**: le client choisit si son inférence s’exécute **en Europe ou aux États-Unis**, pour aligner l’exécution sur ses exigences de résidence, de conformité et de latence. Tarif: **1,1× le tarif global**, soit **+10 %**.
- **Priority Tier, en préversion publique**: niveaux de service engagés pour charges critiques, limites de débit personnalisées, et **SLA de disponibilité de 99,5 %** — soit environ **3 h 39 d’indisponibilité tolérée par mois**. Tarif: **1,75× le tarif catalogue**.
- **Infrastructure européenne**: une coalition d’entreprises européennes s’engage sur du calcul pluriannuel, qui doit financer **200 MW en Europe fin 2027** et **1 GW fin 2030**.

**La réserve, qui est essentielle.** L’inférence et son traitement ont lieu dans la région choisie, **sous réserve de transferts encadrés et limités vers des sous-traitants pouvant se situer hors de cette région** [S144]. « Région UE » ne signifie donc pas « aucune donnée ne quitte l’UE ». Pour un registre de traitement ou une analyse d’impact, c’est la liste des sous-traitants et le DPA qui font foi, pas le nom de l’endpoint. Le Priority Tier est par ailleurs en **préversion publique**: un SLA annoncé en préversion n’a pas la même valeur qu’un SLA en GA — à confirmer contractuellement.

**[Déduction]** Mistral est, à cette date, le seul laboratoire européen à proposer *à la fois* le choix de région et un niveau de service engagé. Pour un projet belge bloqué sur la résidence, +10 % est un surcoût faible comparé au coût d’un déploiement auto-hébergé.

### 2. xAI: Grok 4.6 et la parité annoncée à moitié prix (12 août)

**Grok 4.6** remplace Grok 4.5 comme modèle phare [S139–S141]:

- **500 k de contexte**, comme 4.5.
- **En dessous de 200 k jetons**: 2 USD/M en entrée, **0,50** en entrée mise en cache, 6 USD/M en sortie.
- **À partir de 200 k jetons**: 4 / 1 / 12 USD/M — et la grille haute s’applique à **tous les jetons de la requête**, pas seulement aux jetons au-delà du seuil. Un dépassement de seuil double donc la facture de la requête entière.
- Variante rapide à **2× les tarifs standard**. **Aucune remise batch** publiée.
- Cache: xAI recommande `prompt_cache_key` avec la Responses API, ou l’en-tête `x-grok-conv-id` avec Chat Completions, pour que les requêtes liées atteignent le même serveur.

Sur l’**Artificial Analysis Intelligence Index** — mesure tierce, pas un banc fournisseur — Grok 4.6 est donné à parité avec GPT-5.6 Sol et dépasse Kimi K3, pour environ la moitié du prix des modèles frontière comparables [S141]. À traiter comme un indice de positionnement, pas comme une preuve de qualité sur *vos* tâches.

**Belgique: à confirmer.** Grok 4.5 était confirmé dans la console API UE depuis le 17 juillet [S68]; **rien n’établit encore le même statut pour 4.6**. Surtout, aucune résidence UE n’est annoncée: le DPA de xAI documente un traitement en `us-east-1` et `us-west-2`. Pour des données personnelles européennes, l’écart de prix ne compense pas cette incertitude tant qu’elle n’est pas levée.

### 3. Consolidation xAI + Cursor: deux entrées de la liste convergent

L’acquisition d’**Anysphere (Cursor) par SpaceX** pour 60 milliards USD en actions, annoncée le 16 juin, a vu ses **procédures réglementaires finalisées le 12 août**; la clôture est attendue **avant la fin août 2026** et n’était **pas actée** à la date de ce contrôle [S147]. SpaceX avait fusionné plus tôt en 2026 avec xAI; l’entité communique désormais sous le nom **SpaceXAI**. Premier produit annoncé de la combinaison: **Grok Bot**, assistant de travail à partir de **120 USD/mois** [S148].

**Conséquence pour cet observatoire.** xAI (rang 8) et Anysphere/Cursor (rang 16) restent **deux entrées distinctes** tant que la clôture n’est pas actée — c’est le fait vérifié, et il serait prématuré de fusionner sur une clôture annoncée. Mais il faut anticiper: à la prochaine édition, une fusion des deux entrées est probable, ce qui **libérera une place** dans la sélection de 20. Un rapport de presse évoque une possible disparition de la marque Cursor; **non confirmé**, à ne pas répercuter [S147].

### 4. OpenAI: GPT-5.6-Cyber, puissant mais fermé (10 août)

Modèle spécialisé en cybersécurité, dérivé de GPT-5.6 Sol, entraîné pour la recherche de vulnérabilités et le développement de chaînes d’exploitation — des catégories que les modèles généralistes refusent souvent. Tarif publié: **12,50 USD/M en entrée, 75 en sortie, 1,25 en entrée mise en cache** [S145–S146].

**Ce n’est pas une offre en libre-service.** L’accès passe par un nouveau palier du programme Daybreak d’OpenAI, **Daybreak Red**, avec candidature, approbation et provisionnement séparés. Pour un particulier ou un développeur indépendant belge, considérez-le comme **indisponible**. Il est documenté ici pour une seule raison: il fixe le prix de référence d’une classe de modèles à refus réduits, et il confirme que ce segment se structure derrière des barrières d’accès plutôt que derrière des refus techniques.

### 5. Lacunes de couverture corrigées

Trois faits antérieurs au cycle, absents des éditions précédentes, sont intégrés:

- **Cohere North Mini Code 1.0** (9 juin): 30 B au total dont **3 B actifs** (MoE), **Apache 2.0**, **256 k de contexte et jusqu’à 64 k de sortie**, poids sur Hugging Face en BF16, FP8 et **w4a16**, plus des GGUF communautaires et une image Ollama [S149–S150]. Cohere était jusqu’ici décrit comme « peu d’offre ouverte »: c’est faux depuis juin, et le modèle est un **candidat sérieux pour un agent de code tournant sur une seule carte 24 Go**. Ajouté au [guide local](modeles-locaux-par-hardware.md).
- **Lettre « Open Weights and American AI Leadership »** (24 juillet, 25 signataires): NVIDIA, Microsoft, Meta, IBM, Mistral, Hugging Face, Mozilla, Dell, Palantir, Replit, Perplexity, la Linux Foundation, a16z et Y Combinator. **OpenAI, Anthropic et Google ne l’ont pas signée** [S151]. Le texte demande aux décideurs de ne pas confondre la distillation, « technique largement utilisée », avec une appropriation illicite. **[Déduction]** La ligne de fracture de l’industrie n’oppose plus « ouvert » à « fermé » par idéologie: elle sépare ceux dont le modèle économique tolère les poids ouverts de ceux dont il repose sur l’accès exclusif.
- **Google**: **Gemini Omni Flash** (30 juin) à 1,50 USD/M en entrée et **17,50 USD/M en sortie vidéo** (≈ 0,10 USD/seconde de vidéo); **Gemini Robotics ER 2** en préversion à 2/10 USD/M; **arrêt de `gemini-robotics-er-1.6-preview` au 31 août 2026** [S152].
- **Perplexity**: Terra et Luna sont disponibles dans Computer, Terra devenant le **modèle par défaut de tous les sous-agents** [S154].

### Rappels du cycle précédent (28 juillet – 11 août)

Toujours valides et non contredits par ce contrôle. La *justification* de deux acteurs avait changé de nature:

- **Meta** figurait dans la liste au titre de Llama, famille en fin de cycle après la réception médiocre de Llama 4. L’acteur y reste désormais au titre de **Muse**: **Muse Glimmer**, ~30 B dense sous **Apache 2.0**, est son premier modèle à poids ouverts depuis plus d’un an, explicitement conçu pour l’**agent local sur matériel grand public** (131 k de contexte texte+image, plus de 100 langues, appels d’outils avec reprise sur échec, ≈19,3 Go en 4 bits). Une version ouverte de **Muse Spark 1.2** est annoncée, sans date ferme [S117–S119].
- **NVIDIA** cesse d’être seulement un fournisseur d’infrastructure: **Nemotron 3.5 Lightning** (30 B MoE, 3 B actifs, 1 M de contexte, licence permissive OpenMDW-1.1) et le routeur **NeMo Switchyard** en font un acteur de premier plan du poids ouvert occidental [S120–S121].

Les autres faits marquants du cycle du 28 juillet au 11 août:

- **Alibaba aligne son prix sur la frontière.** **Qwen3.8-Max** (3 août): 2,4 T de paramètres MoE dont 95 B actifs, 1 M de contexte, entrée texte/image/vidéo, à **2/6 USD/M** — la parité en entrée avec GPT-5.6 Terra. Les poids ouverts (Max et un Qwen3.8-27B) étaient annoncés pour la semaine du 10 août mais **n’étaient toujours pas publiés au 13 août, et aucune licence n’est nommée** — la semaine promise est désormais dépassée de plusieurs jours. Qwen3.5 et Qwen3.6 étaient sortis sous Apache 2.0, mais rien ne le confirme pour 3.8-Max. À traiter comme une promesse, pas comme un fait [S115–S116, S157].
- **Mistral publie un garde-fou ouvert.** **Shieldstral 1.0** (4 août): classificateur de sûreté 3 B, texte et image, **Apache 2.0**, tenant sur un seul GPU 16 Go. Sa particularité: la politique de modération s’écrit **en langage naturel au moment de l’inférence** au lieu d’être figée à l’entraînement. C’est la brique qui manquait pour encadrer un déploiement local ou souverain [S122–S123].
- **DeepSeek officialise V4-Flash** (31 juillet, build 0731): 284 B, **0,14 USD/M en entrée**, support natif de la Responses API, adapté à Codex — et il dépasse le V4-Pro-Preview de son propre éditeur sur neuf bancs agentiques. La GA de V4 Pro glisse [S128].
- **IBM publie Granite 4.1**, famille de dix modèles (3B/8B/30B, variantes FP8, modèle de sûreté, VLM documentaire, ASR multilingue) [S129].
- **AWS densifie AgentCore**: Runtime Instances dédiées, recherche web sur Bedrock, et **Dogwood**, un langage de gouvernance d’agents open-sourcé dont les politiques peuvent dépendre de l’historique des actions dans la session [S130].
- **Perplexity Computer** ajoute une couche d’orchestration multi-agents routant vers plusieurs modèles frontière [S132]. **xAI** route `grok-voice-latest` vers grok-voice-think-fast-2.0 depuis le 5 août [S133].
- **Nouveau détail tarifaire OpenAI**: la grille **long contexte** de GPT-5.6 est documentée (Sol 10/45, Terra 4/18, Luna 0,40/1,80 USD/M) ainsi que l’**écriture de cache à 1,25×** l’entrée [S124]. À contexte long, le coût réel double presque — un point que le prix affiché en tête de gamme masque.
- **Nouveau (contrôle du 11 août):** OpenAI a baissé les prix API de GPT-5.6 le 30 juillet: **Terra passe de 2,50/15 à 2/12 USD/M (−20 %)** et **Luna de 1/6 à 0,20/1,20 USD/M (−80 %)**; Sol reste à 5/30. Un « Fast Mode » pour Sol remplace Priority Processing (jusqu’à ×2,5 de vitesse, ×2 le prix, intelligence inchangée) [S112–S113].
- **Nouveau (contrôle du 11 août):** Google a programmé l’arrêt de Gemini 2.5 Pro, Flash et Flash-Lite au **16 octobre 2026**; migrer vers la famille 3.x [S114].

**Une correction à signaler.** Le guide d’exécution locale publié le 11 août recommandait Gemma 3 et Qwen3 comme familles de référence. Ces deux familles avaient déjà été remplacées en avril 2026 par **Gemma 4** (désormais Apache 2.0, multimodale, 128 k–256 k) et **Qwen3.6**. Le guide est corrigé [S126–S127]. La leçon vaut pour vos propres installations: **un tag de registre populaire continue souvent de pointer vers une génération précédente**; vérifiez la date de la carte de modèle, pas le nom de la famille.
- OpenAI a généralisé la famille GPT-5.6: Sol (5/30 USD/M), Terra (2/12 depuis le 30/07) et Luna (0,20/1,20 depuis le 30/07), tous à 1,05 M de contexte; cache lu à -90 %, écritures explicites à 1,25× [S61–S62, S112].
- Anthropic a lancé Opus 5 le 24 juillet à 5/25 USD/M, avec effort configurable et mode Fast à 2×; Fable 5 reste le plafond général à 10/50 USD/M avec garde-fous et fallback possibles [S63–S64].
- Google a mis Gemini 3.6 Flash en GA à 1,50/7,50 USD/M, 1 M de contexte, 64 k de sortie et outils natifs; Gemini 3.5 Flash-Lite vise le volume à 0,30/2,50 [S65].
- AWS a fermé Bedrock Agents Classic aux nouveaux clients le 30 juillet et recommande AgentCore; le changement de namespace Agent Registry impose de revoir endpoints, IAM, SDK et données de registre [S88–S89].
- xAI proposait Grok 4.5 à 500 k de contexte, 2/6 USD par million de jetons en contexte court et 4/12 USD en long contexte [S22]; **remplacé par Grok 4.6 le 12 août à grille identique** [S140].
- xAI confirme Grok 4.5 dans la console API pour les utilisateurs UE depuis le 17 juillet [S68]; **le même statut pour 4.6 reste à confirmer**.
- DeepSeek V4 Pro/Flash remplace les alias historiques retirés le 24 juillet: contexte 1 M, cache, outils et API OpenAI/Anthropic compatibles [S66–S67].
- GitHub Models a été totalement retiré le 30 juillet; Copilot demeure et propose notamment GPT-5.6, Opus 5 et Kimi K2.7 [S73–S74].
- Cursor Router route les requêtes selon coût, équilibre ou intelligence; les plans belges restent à confirmer au checkout [S75].
- Cursor a mis à jour sa politique le 15 juillet 2026: Privacy Mode interdit l’entraînement et s’appuie sur des accords de rétention zéro, sous réserve d’enquêtes d’abus [S42].
- Kimi K3 est disponible en API à 1 M de contexte; les poids complets ont été annoncés pour le 27 juillet et la politique de confidentialité a été mise à jour le 28 juillet [S70–S72].
- Hugging Face a publié une intrusion agentique et recommande la rotation préventive des jetons; sa reconstruction technique du 27 juillet confirme l’importance de l’isolation, des identités courtes et du blocage de l’accès metadata [S76–S77].

## Prix et Belgique

Taux de référence conservé: **1 EUR = 1,1554 USD** (BCE, 5 août 2026) [S79]. Le taux de référence BCE du **11 août est 1,1540** [S156], soit **0,12 % d’écart** — sous le seuil de matérialité, donc pas de recalcul en cascade. Le domaine `ecb.europa.eu` restait bloqué: la valeur est relayée par le portail de données, non ouverte directement. Donc 20 USD ≈ 17,31 EUR hors TVA; avec 21 % de TVA belge, ≈ 20,95 EUR si la TVA n’est pas déjà incluse. Le taux standard belge reste 21 % [S80]. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

**Repère grand public pour la Belgique.** Les abonnements de référence restent affichés autour de 20 USD/mois hors taxes (ChatGPT Plus, Claude Pro, Google AI Pro ≈ 19,99 USD, Mistral Vibe Pro 14,99 USD). En zone euro, le prix consommateur observé se situe généralement entre **22 et 24 EUR TVAC** selon le taux national appliqué — la TVA belge de 21 % place la Belgique dans le haut de cette fourchette. Ces montants sont des ordres de grandeur: **seul le checkout belge fait foi**, et il n’a pas pu être simulé lors de ce contrôle.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Ceci n’est pas un avis juridique.

**Précisions vérifiées ce mois-ci sur l’AI Act** [S134]. L’article 50 (transparence: information que l’on parle à une IA, marquage lisible par machine des contenus générés, étiquetage des hypertrucages) **s’applique depuis le 2 août 2026 et n’a pas été reporté** — contrairement au calendrier haut risque de l’annexe III, repoussé au **2 décembre 2027** par le paquet « Digital Omnibus ». Ne confondez pas les deux: le report très commenté ne vous exonère pas des obligations de transparence. Les systèmes préexistants disposent d’un délai jusqu’au **2 décembre 2026** pour la seule obligation de marquage lisible par machine. Côté modèles à usage général, la Commission dispose depuis le 2 août de son outillage d’exécution — demandes d’information, accès aux modèles, pouvoirs de rappel — et peut infliger des amendes allant jusqu’à **3 % du chiffre d’affaires mondial annuel ou 15 millions d’euros**, le montant le plus élevé étant retenu. Cela pèse sur vos fournisseurs, mais si vous déployez un chatbot ou générez des contenus synthétiques, l’obligation de transparence vous vise directement.

**Un point de résidence des données à ne pas déduire trop vite.** Choisir une région Azure européenne ne garantit pas que tous les modèles du catalogue s’y exécutent: les modèles Anthropic dans Microsoft Foundry tournent sur l’infrastructure d’Anthropic, pas dans la région Azure sélectionnée, une offre « Foundry Europe » étant annoncée pour 2026. Sur AWS Bedrock et Google Vertex AI, ces mêmes modèles s’exécutent en revanche dans l’infrastructure du fournisseur cloud en région UE. **Vérifiez modèle par modèle, pas plateforme par plateforme** [S131].

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. **Trancher l’arbitrage Sonnet 5 avant le 1er septembre** (accepter +50 %, ou basculer vers Haiku 4.5 / GPT-5.6 Terra / Grok 4.6), et vérifier l’impact de la fin des crédits promotionnels Copilot fin août.
2. **Si la résidence des données bloque un projet**, chiffrer l’endpoint UE Mistral (+10 %) et, pour une charge critique, le Priority Tier (×1,75, SLA 99,5 % en préversion) — en exigeant du fournisseur la liste des sous-traitants susceptibles de recevoir un transfert hors région.
3. **Si vous suivez Cursor**, surveiller la clôture de l’acquisition par SpaceX attendue fin août: contrat, entité facturante, politique de confidentialité et juridiction peuvent changer sans que le produit change.
4. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
5. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
6. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés — **et vérifier la résidence modèle par modèle**, pas seulement la région de la plateforme.
7. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
8. **Auditer les intégrations MCP** face à la spécification 2026-07-28: sessions au niveau protocole, DCR, Roots, Sampling et Logging sont sur la trajectoire de retrait.
9. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton — et pour les contextes longs, budgéter la **grille long contexte**, pas le prix d’entrée de gamme.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [modèles locaux](modeles-locaux-par-hardware.md), [sources](sources.md).
