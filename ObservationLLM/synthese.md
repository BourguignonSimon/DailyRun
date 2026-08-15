# Synthèse décisionnelle — contrôle du 15 août 2026

> **Un prix d’appel qui expire, des poids ouverts qui n’arrivent pas.** **Gemini 3.7 Flash** sort à **0,75/3,75 USD/M** — environ 0,65/3,25 EUR — mais ce tarif est **promotionnel jusqu’au 31 décembre 2026** et **double au 1er janvier 2027**: l’économie est réelle cette année, elle ne l’est pas au-delà. **GLM-5.3** est annoncé comme le meilleur modèle de code à poids ouverts de son éditeur, mais **ses poids ne sont pas publiés** — attendus sous deux semaines après évaluation de sûreté; à l’inverse, **DeepSeek V4 Pro 0813** passe en disponibilité générale **avec** des poids MIT. Le tarif de **Claude Sonnet 5 reste à 2/10 USD/M à titre définitif**. **GitHub retire plusieurs modèles Anthropic, OpenAI et Google de toutes les surfaces Copilot au 1er septembre**. **ChatGPT affiche des publicités** aux offres Free et Go dans six marchés — les offres payantes en sont exemptes et **la Belgique n’est dans aucune vague annoncée**. Mistral chiffre la résidence européenne de l’inférence à **+10 %**. Guide dédié: [modèles locaux par matériel](modeles-locaux-par-hardware.md).
>
> ⚠️ **Niveau de preuve.** La politique réseau sortante bloque la majorité des sites éditeurs et **la totalité des six points d’entrée de veille quotidienne**: sur les 44 sources historiques du référentiel, **4 répondent et 40 sont refusées**. Les faits Anthropic, MCP et versions de SDK reposent sur des sources primaires ouvertes directement; tout le reste est établi par convergence de sources indépendantes et **plafonné à 89/100**. Revérifiez avant tout engagement contractuel. Détail: [sources.md](sources.md).

## Les quatre choses à faire ce mois-ci

1. **Inventorier les modèles épinglés dans les flux GitHub Copilot.** Claude Sonnet 3.7, Sonnet 3.7 Thinking, Claude Opus 4 et Gemini 2.0 Flash quittent toutes les surfaces Copilot le **1er septembre 2026**, MAI-Code-1-Flash le 10 septembre. Tout script, politique d’entreprise ou flux qui épingle un de ces identifiants casse à cette date [S167]. Côté budget en revanche, **la hausse de Claude Sonnet 5 est annulée**: 2/10 USD/M devient le tarif standard, la migration qui n’était motivée que par ce surcoût n’a plus d’objet [S158–S159].
2. **Inscrire au calendrier la fin de promotion de Gemini 3.7 Flash.** Le tarif de **0,75/3,75 USD/M** vaut **jusqu’au 31 décembre 2026**, puis passe à **1,50/7,50** — un doublement, pas une révision marginale. Si vous basculez un volume significatif sur ce modèle pour l’économie affichée, posez dès maintenant l’échéance de réévaluation au **1er décembre 2026**, avant que la grille ne change [S176–S178].
3. **Vérifier les crédits GitHub Copilot Business/Enterprise**: les crédits promotionnels (+30 USD/mois en Business, +70 en Enterprise) **expirent fin août 2026**. À périmètre d’usage constant, la facture de septembre monte [S137].
4. **Chiffrer l’option « région UE » chez Mistral**: les endpoints régionaux sont GA à **1,1× le tarif global** et le Priority Tier à **1,75× avec un SLA de disponibilité de 99,5 %**. Si la résidence des données bloquait un projet, le surcoût est désormais connu et modeste — mais lisez la réserve sur les sous-traitants hors région avant de l’inscrire dans un registre de traitement [S142–S144].

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral Vibe | Multimodal, recherche, mémoire, écosystème | Prix au checkout, taxes locales, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût; **clôture SpaceX↔Cursor attendue fin août** |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | Licences imbriquées, prix B2B affichés hors taxes |
| Production UE sensible | **Mistral endpoint UE (×1,1)** ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé; SLA 99,5 % disponible en Priority Tier (×1,75, préversion) | Transferts encadrés vers sous-traitants **possibles hors région**: exiger la liste |
| Open weight / sur site | **Muse Glimmer**, Mistral, **Nemotron 3.5 Lightning** | Qwen3.6, Gemma 4, Granite 4.1, **North Mini Code**, Kimi, GLM, DeepSeek | Contrôle et portabilité; licences majoritairement Apache 2.0 désormais | Licence exacte, sécurité, capacité GPU, évaluation locale |
| Exécution 100 % locale | **Gemma 4, Qwen3.6** (selon RAM/VRAM) | gpt-oss, Gemma 4 26B-A4B, Qwen3.6-35B-A3B (MoE) | Données privées, hors ligne, coût nul par jeton | Mémoire disponible, vitesse, FR/NL à tester — voir [guide local](modeles-locaux-par-hardware.md) |
| Agent tournant en local | **Muse Glimmer 30B** (24 Go VRAM) | Nemotron 3.5 Lightning 30B-A3B | Outils, reprise sur échec, 131 k de contexte, Apache 2.0 | Sandbox et plafond d’itérations **obligatoires**, comme pour un agent cloud |
| Agent de **code** en local | **North Mini Code 1.0** 30B-A3B (w4a16, ~18–20 Go) | Muse Glimmer 30B, Qwen3.6-35B-A3B | Apache 2.0, 256 k de contexte, 3 B actifs seulement, image Ollama disponible | Cache KV lourd en long contexte (attention glissante 4096 + globale périodique): tester à contexte réel |
| Modération / garde-fou local | **Shieldstral 1.0 3B** | Granite 4.1 Guardian | Politique en langage naturel à l’inférence; un GPU 16 Go suffit | Scores annoncés par le fournisseur; tester sur FR et NL réels |

## État vérifié par écosystème

État courant au 15 août 2026. Cette section décrit ce qui est vrai à la date du contrôle, sans historique : l’historique est tenu par Git.

### Modèles et tarifs de la semaine

- **Google — Gemini 3.7 Flash** (13 août). Modèle de travail pour le code et les agents, raffinement de 3.6 Flash sur le cœur de raisonnement et non nouveau préentraînement. **1 M de contexte**, **64 k de sortie**, coupure de connaissances **mars 2026**. Tarif **0,75/3,75 USD/M** — environ **0,65/3,25 EUR** — **jusqu’au 31 décembre 2026**, puis **1,50/7,50 USD/M**. **[Déduction]** Un prix d’appel qui double à date connue n’est pas une baisse de prix : c’est une remise à durée déterminée. Elle mérite d’être prise, avec l’échéance inscrite au calendrier. Résidence UE non confirmée pour cette version [S176–S178].
- **Z.ai — GLM-5.3** (14 août). Même base MoE **743 B** que GLM-5.2, gains obtenus par post-entraînement seul. Annoncé par son éditeur comme le meilleur modèle de code à poids ouverts qu’il ait mesuré, sur un banc **interne** : mesure fournisseur, non reproduite indépendamment, non comparable aux scores d’autres éditeurs. **Les poids ne sont pas publiés**, annoncés sous environ deux semaines après évaluation de sûreté. Accès par abonnement **GLM Coding Plan** et ZCode. **[Déduction]** Retenir les poids en invoquant une évaluation de sûreté, après les avoir publiés immédiatement à la version précédente, est un changement de politique d’accès et pas un détail de calendrier : tant qu’ils ne sont pas parus, GLM-5.3 n’est pas une option d’auto-hébergement, et GLM-5.2 sous MIT reste le repli [S179–S181].
- **DeepSeek — V4 Pro 0813** (13 août). Disponibilité générale, poids **MIT** publiés (~893 Go). MoE **1,6 T / 49 B actifs**, contexte **1 M**, sortie max **384 k**. Tarifs relevés **0,435 USD/M** en entrée hors cache, **0,003625** sur succès de cache, **0,87 USD/M** en sortie. Aucune région UE annoncée pour l’API directe [S182–S183].
- **Anthropic — Claude Sonnet 5 à 2/10 USD/M, à titre définitif.** La hausse vers 3/15 qui était programmée au 1er septembre 2026 n’aura pas lieu. Établi sur double source primaire ouverte directement : page tarifaire et notes de version de l’API [S158–S159].
- **Anthropic — Claude Mythos 5.** `claude-mythos-5` existe en **disponibilité limitée sur invitation**, au sein de **Project Glasswing**, pour la cybersécurité défensive, aux caractéristiques et au tarif de Fable 5 (**10/50 USD/M**), **sans inscription en libre-service**. **[Déduction]** Un modèle listé dans une grille tarifaire publique n’est pas pour autant commandable : il ne compte pas parmi les options réellement disponibles depuis la Belgique [S174].

### Disponibilité et incidents

- **Interruption des services Claude** du **14 août 20:00 au 15 août 00:11 UTC**, soit 22:00 → 02:11 heure de Bruxelles, **résolue**. API Claude, Claude Code et Cowork touchés, erreurs élevées constatées notamment sur Fable 5. Aucune analyse post-incident publique trouvée [S184–S185]. **[Déduction]** Le créneau est nocturne côté belge, donc peu visible en usage interactif, mais il traverse les fenêtres de traitement par lots planifiées. C’est l’argument concret du basculement multi-fournisseurs pour tout service exposé à des utilisateurs.

### Souveraineté et résidence

- **Mistral vend la souveraineté comme un produit.** **Regional Endpoints en disponibilité générale** : inférence au choix **en Europe ou aux États-Unis**, à **1,1× le tarif global**. **Priority Tier en préversion publique** : limites de débit personnalisées et **SLA de disponibilité 99,5 %** — environ **3 h 39 d’indisponibilité tolérée par mois** — à **1,75× le catalogue**. Coalition européenne finançant **200 MW fin 2027** et **1 GW fin 2030** [S142–S144].
  **La réserve est essentielle.** L’inférence a lieu dans la région choisie, **sous réserve de transferts encadrés vers des sous-traitants pouvant se situer hors de cette région** [S144]. « Région UE » ne signifie pas « aucune donnée ne quitte l’UE » : pour un registre de traitement, ce sont la liste des sous-traitants et le DPA qui font foi, pas le nom de l’endpoint. Le SLA est annoncé **en préversion** — à confirmer contractuellement.
  **[Déduction]** Mistral est à cette date le seul laboratoire européen à proposer *à la fois* le choix de région et un niveau de service engagé. Pour un projet belge bloqué sur la résidence, +10 % reste faible devant le coût d’un auto-hébergement.
- **Agents managés Claude.** Le paramètre **`inference_geo`** commande la géographie d’inférence, à la création de l’agent ou par session ; **aucune géographie UE n’est documentée pour l’API directe**. S’y ajoutent un **budget de session** avec arrêt `budget_reached`, un **conseiller** consultable en cours de tour, et la découverte automatique des compétences d’un dépôt GitHub monté. L’API de conformité couvre depuis le 11 août les transcriptions des sessions locales Cowork et Claude Code, en bêta Enterprise [S175]. Le budget borne la dépense aux tarifs publics : il ne garantit pas un coût.
- **Résidence dans les clouds partenaires.** Dans Microsoft Foundry, les modèles Anthropic s’exécutent sur l’infrastructure d’Anthropic, **pas dans la région Azure sélectionnée** ; sur AWS Bedrock et Vertex AI ils tournent en région UE du cloud. À vérifier **modèle par modèle** [S131].

### Modèles frontière et positionnement

- **xAI — Grok 4.6.** 500 k de contexte. **Sous 200 k jetons** : 2 USD/M en entrée, 0,50 en cache, 6 en sortie. **À partir de 200 k** : 4 / 1 / 12 — et la grille haute s’applique à **tous les jetons de la requête**, pas seulement au dépassement, ce qui double la facture d’une requête qui franchit le seuil. Variante rapide à 2×, **aucune remise batch**. Cache via `prompt_cache_key` (Responses API) ou l’en-tête `x-grok-conv-id` (Chat Completions). Donné à parité avec GPT-5.6 Sol sur l’Artificial Analysis Intelligence Index, **mesure tierce** à traiter comme un indice de positionnement et non comme une preuve sur vos tâches [S139–S141].
  **Belgique : à confirmer.** Grok 4.5 était confirmé dans la console API UE depuis le 17 juillet [S68] ; **rien n’établit ce statut pour 4.6**. Aucune résidence UE n’est annoncée, le DPA documentant un traitement en `us-east-1` et `us-west-2`.
- **OpenAI — GPT-5.6-Cyber.** Dérivé de Sol entraîné pour la recherche de vulnérabilités, **12,50/75 USD/M** (cache 1,25). **Accès sur dossier uniquement**, via le palier **Daybreak Red** : à considérer comme **indisponible** pour un particulier ou un développeur indépendant belge. Documenté parce qu’il fixe le prix de référence d’une classe de modèles à refus réduits, et confirme que ce segment se structure derrière des barrières d’accès plutôt que derrière des refus techniques [S145–S146].
- **OpenAI — palier Ultrafast** pour GPT-5.6 Sol, opéré sur matériel Cerebras : jusqu’à **750 jetons/s** et **jusqu’à 14×** la vitesse du palier Standard, à intelligence déclarée identique. **Préversion limitée**, **aucun tarif, quota, région ni SLA publiés**. Chiffres fournisseur non reproduits : ne rien budgéter dessus [S168–S169].
- **Alibaba — Qwen3.8-Max.** 2,4 T de paramètres MoE dont 95 B actifs, 1 M de contexte, entrée texte/image/vidéo, **2/6 USD/M**. Les poids ouverts annoncés pour la semaine du 10 août **ne sont toujours pas publiés et aucune licence n’est nommée** : à traiter comme une promesse, pas comme un fait [S115–S116, S157].
- **OpenAI — grille GPT-5.6.** Sol 5/30, Terra 2/12, Luna 0,20/1,20 USD/M, tous à 1,05 M de contexte ; cache lu à −90 %, écritures explicites à **1,25×**. La grille **long contexte** (Sol 10/45, Terra 4/18, Luna 0,40/1,80) fait presque doubler le coût réel sur les requêtes longues — ce que le prix de tête masque [S61–S62, S112, S124].
- **Anthropic — Opus 5** à 5/25 USD/M, effort configurable, mode Fast à 2× ; **Fable 5** reste le plafond général à 10/50 USD/M [S63–S64].
- **Google — Gemini 3.6 Flash** en GA à 1,50/7,50 USD/M, 1 M de contexte, 64 k de sortie et outils natifs ; **3.5 Flash-Lite** vise le volume à 0,30/2,50 [S65]. **Gemini Omni Flash** est en préversion publique depuis le 30 juin.

### Poids ouverts

- **Meta — Muse Glimmer**, ~30 B dense sous **Apache 2.0**, conçu pour l’**agent local sur matériel grand public** : 131 k de contexte texte+image, plus de 100 langues, appels d’outils avec reprise sur échec, ≈19,3 Go en 4 bits. Une version ouverte de **Muse Spark 1.2** est annoncée sans date ferme [S117–S119].
- **NVIDIA — Nemotron 3.5 Lightning**, 30 B MoE / 3 B actifs, 1 M de contexte, licence permissive **OpenMDW-1.1**, avec le routeur **NeMo Switchyard** [S120–S121].
- **Cohere — North Mini Code 1.0**, 30 B dont **3 B actifs** (MoE), **Apache 2.0**, **256 k de contexte** et jusqu’à 64 k de sortie, poids BF16, FP8 et **w4a16**, GGUF communautaires et image Ollama. Candidat sérieux pour un **agent de code sur une seule carte 24 Go** [S149–S150].
- **Mistral — Shieldstral 1.0**, classificateur de sûreté 3 B texte et image, **Apache 2.0**, tenant sur un GPU 16 Go, dont la politique de modération s’écrit **en langage naturel au moment de l’inférence** [S122–S123].
- **IBM — Granite 4.1**, famille de dix modèles (3B/8B/30B, variantes FP8, modèle de sûreté, VLM documentaire, ASR multilingue) [S129].
- **DeepSeek — V4-Flash 0731**, 284 B, **0,14 USD/M en entrée**, Responses API native, adapté à Codex [S128].
- **Lettre « Open Weights and American AI Leadership »** (24 juillet, 25 signataires dont NVIDIA, Microsoft, Meta, IBM, Mistral, Hugging Face, Mozilla, la Linux Foundation). **OpenAI, Anthropic et Google ne l’ont pas signée** [S151]. **[Déduction]** La ligne de fracture n’oppose plus « ouvert » à « fermé » par idéologie : elle sépare ceux dont le modèle économique tolère les poids ouverts de ceux dont il repose sur l’accès exclusif.

### Outillage, agents et plateformes

- **Spécification MCP 2026-07-28**, version courante et finale. Le cœur du protocole devient **sans état** ; **DCR** cède la place à **CIMD** ; **Roots**, **Sampling** et **Logging** sont dépréciés avec au moins douze mois de fonctionnement garanti [S153].
- **Agent Plugins 1.0** empaquette compétences d’agent et serveurs MCP dans un greffon installable, publié avec AWS, Anysphere, Microsoft, OpenAI, Vercel et Google, disponible dans VS Code, Copilot CLI et l’application Copilot [S170].
- **GitHub Copilot** retire Claude Sonnet 3.7, Sonnet 3.7 Thinking, Claude Opus 4 et Gemini 2.0 Flash de **toutes** ses surfaces le **1er septembre 2026**, MAI-Code-1-Flash le 10 septembre [S167]. Les crédits promotionnels Business et Enterprise **expirent fin août 2026** [S137].
- **SDK et CLI officiels**, versions prouvées sur les registres ouverts directement : `openai` **3.1.0**, `anthropic` **0.122.0**, `mistralai` **2.9.3**, `google-genai` **2.18.1** ; `@anthropic-ai/claude-code` **2.1.233**, `@google/genai` **2.17.1**, `@openai/codex` **0.147.0**, `@modelcontextprotocol/sdk` **1.30.0**. Un registre prouve la version et sa date, **pas le contenu du changement** [S188–S189]. **[Déduction]** À ce rythme de publication, épinglez les versions plutôt que de suivre la dernière en date.
- **AWS** densifie AgentCore : Runtime Instances dédiées, recherche web sur Bedrock, et **Dogwood**, langage de gouvernance d’agents open-sourcé dont les politiques peuvent dépendre de l’historique des actions de la session [S130]. Bedrock Agents Classic est fermé aux nouveaux clients depuis le 30 juillet [S88–S89].
- **Perplexity** : Terra et Luna dans Computer, **Terra par défaut pour tous les sous-agents** [S154], au-dessus d’une couche d’orchestration multi-agents [S132].
- **Cursor** : Router arbitrant coût, équilibre et intelligence ; Privacy Mode interdit l’entraînement et s’appuie sur des accords de rétention zéro, sous réserve d’enquêtes d’abus [S42, S75]. L’acquisition d’**Anysphere par SpaceX** (60 Md USD) a vu ses procédures réglementaires finalisées le 12 août ; la clôture est attendue **avant fin août** et **n’est pas actée** à la date de ce contrôle [S147]. xAI et Anysphere restent **deux entrées distinctes** tant que la clôture n’est pas actée. Premier produit annoncé de la combinaison : **Grok Bot**, à partir de 120 USD/mois [S148].
- **Publicité dans ChatGPT** : annonces textuelles contextuelles en bas de réponse, signalées comme sponsorisées, aux offres Free et Go, dans **six marchés** — États-Unis, Royaume-Uni, Mexique, Brésil, Japon, Corée du Sud. **La Belgique n’est dans aucune vague annoncée.** Les annonceurs n’ont accès ni aux conversations, ni à l’historique, ni à la mémoire ; la **sélection** s’appuie en revanche sur le sujet de la conversation, les conversations passées et les interactions publicitaires antérieures. Plus, Pro, Business, Enterprise et Edu restent sans publicité.
- **Hugging Face** a publié une intrusion agentique et recommande la rotation préventive des jetons ; sa reconstruction technique confirme l’importance de l’isolation, des identités courtes et du blocage de l’accès aux métadonnées d’instance [S76–S77].
- **Calendrier de dépréciation** : trois endpoints **Imagen 4** s’arrêtent le **17 août 2026** ; **Gemini 2.5** Pro, Flash et Flash-Lite le **16 octobre 2026** [S114, S152]. **GitHub Models** est retiré depuis le 30 juillet [S73–S74]. **Claude Opus 4.1** est retiré de l’API Claude.

### Piste suivie, non publiée comme fait

- **Anthropic–Decart** : Bloomberg rapporte le 13 août des **discussions** en vue d’une acquisition d’environ 6 milliards USD, reprises par Fortune et Yahoo Finance. Toutes les sources décrivent un stade précoce ; **aucune communication officielle des parties**. Des discussions rapportées ne sont pas une acquisition : à ne fonder ni architecture, ni contrat, ni budget dessus [S190].

## Prix et Belgique

Taux de référence conservé: **1 EUR = 1,1554 USD** (BCE, 5 août 2026) [S79]. Une cotation de marché relevée à **1,1536 le 14 août** s’en écarte de **0,16 %** — sous le seuil de matérialité, donc pas de recalcul en cascade — et **n’a pas pu être confirmée comme taux de référence BCE**, le domaine `ecb.europa.eu` étant bloqué. Donc 20 USD ≈ 17,31 EUR. Le checkout et la facture priment toujours.

**Repère grand public pour la Belgique.** Les abonnements de référence restent affichés autour de 20 USD/mois (ChatGPT Plus, Claude Pro, Google AI Pro ≈ 19,99 USD, Mistral Vibe Pro 14,99 USD). Ces montants sont des ordres de grandeur: **seul le checkout belge fait foi**, et il n’a pas pu être simulé lors de ce contrôle.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation en euros et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.7 Flash.
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

1. **Traiter l’échéance Copilot du 1er septembre.** Recenser les modèles épinglés dans les flux et politiques, et ouvrir les remplaçants avant la date. La fin des crédits promotionnels Copilot reste également à vérifier fin août. L’arbitrage tarifaire Sonnet 5 est en revanche clos: le tarif de 2/10 USD/M est définitif.
2. **Poser une échéance au 1er décembre 2026 si vous adoptez Gemini 3.7 Flash.** Le tarif de 0,75/3,75 USD/M **double au 1er janvier 2027**. Une remise à durée déterminée se prend, mais avec la date de fin inscrite au calendrier de réévaluation, pas oubliée dans un budget annuel.
3. **Si la résidence des données bloque un projet**, chiffrer l’endpoint UE Mistral (+10 %) et, pour une charge critique, le Priority Tier (×1,75, SLA 99,5 % en préversion) — en exigeant du fournisseur la liste des sous-traitants susceptibles de recevoir un transfert hors région.
4. **Si vous suivez Cursor**, surveiller la clôture de l’acquisition par SpaceX attendue fin août: contrat, entité facturante, politique de confidentialité et juridiction peuvent changer sans que le produit change.
5. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
6. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
7. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés — **et vérifier la résidence modèle par modèle**, pas seulement la région de la plateforme.
8. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
9. **Auditer les intégrations MCP** face à la spécification 2026-07-28: sessions au niveau protocole, DCR, Roots, Sampling et Logging sont sur la trajectoire de retrait.
10. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton — et pour les contextes longs, budgéter la **grille long contexte**, pas le prix d’entrée de gamme.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [modèles locaux](modeles-locaux-par-hardware.md), [sources](sources.md).
