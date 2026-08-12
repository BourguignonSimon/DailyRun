# Synthèse décisionnelle — contrôle du 12 août 2026

> **Le mois le plus dense depuis la création de l’observatoire.** Entre le 28 juillet et le 11 août: Meta revient aux poids ouverts avec **Muse Glimmer 30B** (Apache 2.0), NVIDIA sort **Nemotron 3.5 Lightning**, Alibaba aligne **Qwen3.8-Max** sur le prix de GPT-5.6 Terra, Mistral publie **Shieldstral 1.0** (garde-fou ouvert 3 B) et la **spécification MCP 2026-07-28** devient finale avec des ruptures à planifier. Deux échéances tarifaires tombent dans les trois semaines. Guide dédié: [modèles locaux par matériel](modeles-locaux-par-hardware.md), **corrigé ce mois-ci** (Gemma 3 → Gemma 4, Qwen3 → Qwen3.6).
>
> ⚠️ **Niveau de preuve.** Les domaines fournisseurs officiels étaient bloqués par la politique de sortie réseau de l’environnement d’exécution. Les faits ci-dessous reposent sur l’index de recherche et la convergence de sources indépendantes, pas sur l’ouverture directe des pages officielles. Revérifiez avant tout engagement contractuel. Détail: note d’accès dans [sources.md](sources.md).

## Les trois choses à faire ce mois-ci

1. **Budgéter la hausse Claude Sonnet 5 au 1er septembre**: le prix de lancement 2/10 USD/M passe à **3/15 USD/M**, soit **+50 %** sur un modèle typiquement utilisé en volume. Si Sonnet 5 est dans votre chaîne de production, l’arbitrage (accepter, migrer vers Haiku 4.5 à 1/5, ou vers GPT-5.6 Terra à 2/12) se décide **avant** la bascule [S125].
2. **Vérifier les crédits GitHub Copilot Business/Enterprise**: les crédits promotionnels (+30 USD/mois en Business, +70 en Enterprise) **expirent fin août 2026**. À périmètre d’usage constant, la facture de septembre monte [S137].
3. **Planifier la migration MCP**: la spécification 2026-07-28 rend le protocole **sans état** et déprécie l’enregistrement dynamique de clients (DCR → CIMD) ainsi que Roots, Sampling et Logging. Douze mois de compatibilité sont annoncés, mais aucune nouvelle intégration ne devrait partir sur les mécanismes dépréciés [S124–S125].

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral Vibe | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | Licences imbriquées, TVA hors prix B2B |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | **Muse Glimmer**, Mistral, **Nemotron 3.5 Lightning** | Qwen3.6, Gemma 4, Granite 4.1, Kimi, GLM, DeepSeek | Contrôle et portabilité; licences majoritairement Apache 2.0 désormais | Licence exacte, sécurité, capacité GPU, évaluation locale |
| Exécution 100 % locale | **Gemma 4, Qwen3.6** (selon RAM/VRAM) | gpt-oss, Gemma 4 26B-A4B, Qwen3.6-35B-A3B (MoE) | Données privées, hors ligne, coût nul par jeton | Mémoire disponible, vitesse, FR/NL à tester — voir [guide local](modeles-locaux-par-hardware.md) |
| Agent tournant en local | **Muse Glimmer 30B** (24 Go VRAM) | Nemotron 3.5 Lightning 30B-A3B | Outils, reprise sur échec, 131 k de contexte, Apache 2.0 | Sandbox et plafond d’itérations **obligatoires**, comme pour un agent cloud |
| Modération / garde-fou local | **Shieldstral 1.0 3B** | Granite 4.1 Guardian | Politique en langage naturel à l’inférence; un GPU 16 Go suffit | Scores annoncés par le fournisseur; tester sur FR et NL réels |

## Ce qui a changé

La sélection reste inchangée: **aucune entrée, aucune sortie**. Mais la *justification* de deux acteurs a changé de nature, ce qui compte autant qu’une entrée ou une sortie:

- **Meta** figurait dans la liste au titre de Llama, famille en fin de cycle après la réception médiocre de Llama 4. L’acteur y reste désormais au titre de **Muse**: **Muse Glimmer**, ~30 B dense sous **Apache 2.0**, est son premier modèle à poids ouverts depuis plus d’un an, explicitement conçu pour l’**agent local sur matériel grand public** (131 k de contexte texte+image, plus de 100 langues, appels d’outils avec reprise sur échec, ≈19,3 Go en 4 bits). Une version ouverte de **Muse Spark 1.2** est annoncée, sans date ferme [S117–S119].
- **NVIDIA** cesse d’être seulement un fournisseur d’infrastructure: **Nemotron 3.5 Lightning** (30 B MoE, 3 B actifs, 1 M de contexte, licence permissive OpenMDW-1.1) et le routeur **NeMo Switchyard** en font un acteur de premier plan du poids ouvert occidental [S120–S121].

Les autres faits marquants du cycle du 28 juillet au 11 août:

- **Alibaba aligne son prix sur la frontière.** **Qwen3.8-Max** (3 août): 2,4 T de paramètres MoE dont 95 B actifs, 1 M de contexte, entrée texte/image/vidéo, à **2/6 USD/M** — la parité en entrée avec GPT-5.6 Terra. Les poids ouverts (Max et un Qwen3.8-27B) étaient annoncés pour la semaine du 10 août mais **n’étaient pas publiés au 12 août, sans licence nommée**: à traiter comme une promesse, pas comme un fait [S115–S116].
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
- xAI propose Grok 4.5 à 500 k de contexte, 2/6 USD par million de jetons en contexte court et 4/12 USD en long contexte [S22].
- xAI confirme Grok 4.5 dans la console API pour les utilisateurs UE depuis le 17 juillet [S68].
- DeepSeek V4 Pro/Flash remplace les alias historiques retirés le 24 juillet: contexte 1 M, cache, outils et API OpenAI/Anthropic compatibles [S66–S67].
- GitHub Models a été totalement retiré le 30 juillet; Copilot demeure et propose notamment GPT-5.6, Opus 5 et Kimi K2.7 [S73–S74].
- Cursor Router route les requêtes selon coût, équilibre ou intelligence; les plans belges restent à confirmer au checkout [S75].
- Cursor a mis à jour sa politique le 15 juillet 2026: Privacy Mode interdit l’entraînement et s’appuie sur des accords de rétention zéro, sous réserve d’enquêtes d’abus [S42].
- Kimi K3 est disponible en API à 1 M de contexte; les poids complets ont été annoncés pour le 27 juillet et la politique de confidentialité a été mise à jour le 28 juillet [S70–S72].
- Hugging Face a publié une intrusion agentique et recommande la rotation préventive des jetons; sa reconstruction technique du 27 juillet confirme l’importance de l’isolation, des identités courtes et du blocage de l’accès metadata [S76–S77].

## Prix et Belgique

Taux de référence conservé: **1 EUR = 1,1554 USD** (BCE, 5 août 2026) [S79]. La cote de marché du 11 août est ≈ 1,1542 [S138], soit **0,10 % d’écart** — sous le seuil de matérialité, donc pas de recalcul en cascade. Le domaine `ecb.europa.eu` restait bloqué: le taux BCE officiel du jour n’a pas pu être ouvert directement. Donc 20 USD ≈ 17,31 EUR hors TVA; avec 21 % de TVA belge, ≈ 20,95 EUR si la TVA n’est pas déjà incluse. Le taux standard belge reste 21 % [S80]. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

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

1. **Trancher l’arbitrage Sonnet 5 avant le 1er septembre** (accepter +50 %, ou basculer vers Haiku 4.5 / GPT-5.6 Terra), et vérifier l’impact de la fin des crédits promotionnels Copilot fin août.
2. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
3. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
4. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés — **et vérifier la résidence modèle par modèle**, pas seulement la région de la plateforme.
5. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
6. **Auditer les intégrations MCP** face à la spécification 2026-07-28: sessions au niveau protocole, DCR, Roots, Sampling et Logging sont sur la trajectoire de retrait.
7. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton — et pour les contextes longs, budgéter la **grille long contexte**, pas le prix d’entrée de gamme.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [modèles locaux](modeles-locaux-par-hardware.md), [sources](sources.md).
