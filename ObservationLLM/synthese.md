# Synthèse décisionnelle — 5 août 2026

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**, désormais sur GPT-5.6, Claude Opus 5 et Gemini 3.6 Flash. **Mistral** reste le choix européen le plus crédible et la meilleure histoire de souveraineté (Paris, SecNumCloud). **AWS, Microsoft et IBM** dominent la gouvernance d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Mistral, NVIDIA, Kimi, GLM, DeepSeek et Qwen** réduisent le verrouillage mais transfèrent sécurité et exploitation à l’utilisateur. Changement notable de cette édition: **Meta a basculé vers un modèle propriétaire (Muse Spark)** et son Llama 4 multimodal est **exclu contractuellement des personnes et sociétés établies dans l’UE**.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Le Chat (Mistral) | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, hausse Sonnet 5 au 1er sept. |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits de base + flex variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance, EU Data Zone | Licences imbriquées, TVA hors prix B2B |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles, déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | Mistral Large 3, Nemotron, Kimi K3, GLM-5.2 | Qwen, DeepSeek (via hôte UE) | Contrôle et portabilité | Licence (paliers Kimi), sécurité, capacité GPU, éval locale |

## Ce qui a changé depuis le 17 juillet 2026

L’édition précédente sert de base de comparaison. Faits marquants vérifiés (dont certains « à confirmer », le réseau ayant bloqué la plupart des pages officielles cette fois):

- **OpenAI**: la famille **GPT-5.6 (Sol / Terra / Luna)** remplace GPT-5.5 comme tête de gamme; Sol garde 5/30 USD par million entrée/sortie et 1,05 M de contexte. **Baisse de prix le 30 juillet**: Terra -20 % (2/12 USD), Luna -80 % (0,20/1,20 USD). Nouveautés API: Programmatic Tool Calling, points de rupture de cache explicites avec durée minimale de 30 min, Fast mode pour Sol [S01–S05].
- **Anthropic**: **Opus 5** devient le flagship (5/25 USD, 1 M). Ajout des paliers premium **Fable 5 et Mythos 5** (10/50 USD). **Sonnet 5 en prix de lancement 2/10 USD jusqu’au 31 août, puis 3/15 USD le 1er septembre** — hausse imminente à budgéter. Nouveau tokenizer (4.7+) générant ~30 % de jetons en plus: recalculer le coût réel. Résidence US via `inference_geo` = ×1,1 [S07].
- **Google**: **Gemini 3.6 Flash** (1,50/7,50 USD, sortie moins chère que 3.5 Flash), **Gemini 3.5 Flash-Lite** (0,30/2,50) et **Gemini 3.1 Pro Preview** rejoignent la grille. Les endpoints non-global sont +10 % depuis le 1er juillet [S09].
- **Meta**: virage stratégique — **Muse Spark**, premier modèle propriétaire (API 1.1 à 1,25/4,25 USD, OpenAI-compatible), devient la tête de gamme. **Llama 4 multimodal reste exclu des licenciés UE** par la licence [S18, S61–S63].
- **DeepSeek**: passage à **V4** (V4-Pro 0,435/0,87 USD, V4-Flash 0,14/0,28 USD, contexte 1 M). **Changement cassant**: les endpoints `deepseek-chat`/`deepseek-reasoner` (V3.2) ont été retirés le 24 juillet; V4-Flash en beta publique le 31 juillet [S25, S64–S65].
- **Alibaba/Qwen**: **Qwen3.8-Max** (2/6 USD, cache 0,25, 1 M) remplace Qwen 3.7 Max; premier Max à poids ouverts, publication des poids annoncée vers le 10 août [S27, S66].
- **Moonshot/Kimi**: **Kimi K3 est désormais vérifiable**: poids ouverts publiés le 27 juillet, prix 3/15 USD (cache 0,30), 1 M de contexte, meilleur indice open weight mesuré (AAII 57). Licence propriétaire à paliers de revenus [S48–S51, S60].
- **Z.AI/GLM**: **GLM-5.2** confirmé comme flagship (1,40/4,40 USD, cache 0,26, poids MIT); contexte porté vers 1 M (à confirmer). Palier Coding Max (~112 USD/mois) désormais visible [S52–S54, S67].
- **Cursor** ajoute **Grok 4.5** au pool first-party; **GitHub Copilot** clarifie ses crédits (base 1:1 + flex) et a retiré l’app Billing Preview le 3 août [S37–S38, S43].
- **AI Act**: le **jalon du 2 août 2026 est entré en vigueur** — obligations GPAI applicables et transparence de l’article 50 (chatbots signalés, contenus IA marqués, deepfakes étiquetés). Sanctions jusqu’à 15 M€ ou 3 % du CA mondial. En sens inverse, un amendement du 16 juin 2026 **repousse la plupart des obligations « haut risque » à décembre 2027 et août 2028** [S57–S59, S68].

## Prix et Belgique

Taux indicatifs BCE: **1 EUR = 1,1535 USD** (3 août) **= 8,1478 CNY** (5 août) [S55, S69]. Donc 20 USD ≈ 17,34 EUR hors TVA; avec 21 % de TVA belge, ≈ 20,98 EUR si la TVA n’est pas déjà incluse. Par rapport au 17 juillet, l’euro s’est renforcé face au dollar (les prix USD coûtent un peu moins en euros) et nettement face au yuan. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours. La TVA belge standard reste **21 %** [S56].

Les offres explicitement disponibles dans l’EEE incluent Gemini API (tier payant requis pour l’EEE), et OpenAI publie une résidence Europe via OpenAI Ireland Ltd. Mistral traite en France (Paris/SecNumCloud). Pour **DeepSeek, Qwen, Kimi et GLM en accès direct, la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent problématiques (données en Chine, pas de représentant RGPD clair)**: n’utiliser ces modèles qu’via un hébergement UE (Azure Foundry, Bedrock Frankfurt) ou en auto-hébergeant les poids ouverts en UE.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Le Chat, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Le **2 août 2026** a fait entrer en application les obligations GPAI et la transparence de l’article 50; les échéances « haut risque » ont en revanche été repoussées à 2027-2028 [S57–S59, S68]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out individuel et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]; Perplexity API applique le Zero Data Retention [S40]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible — en tenant compte du **nouveau tokenizer Anthropic** (coût réel en hausse) et de la **hausse Sonnet 5 au 1er septembre**.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés; pour les modèles chinois, exiger un hébergement UE.
4. Épingler les versions de modèles en production et prévoir un fournisseur de secours — la migration DeepSeek V3.2 → V4 (endpoints retirés) illustre le risque de rupture.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md), [historique](historique.md).
