# Synthèse décisionnelle — 6 août 2026

> **Édition de revue mensuelle.** Changements **significatifs** depuis le 17 juillet 2026 : trois des quatre modèles de tête ont bougé et le jalon central de l’AI Act est entré en application. Le détail des écarts est dans [historique.md](historique.md).
>
> **Avertissement.** Ce cycle, l’ouverture directe des pages officielles a été bloquée (HTTP 403). Les prix ci-dessous proviennent majoritairement de recherches indexant les pages officielles + trackers réputés ; **seuls GitHub Copilot et Microsoft 365 Copilot ont été lus directement**. Traiter les prix comme **indicatifs** et revérifier au checkout. Voir [sources.md](sources.md).

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée : application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**, qui ont tous les trois **renouvelé leur modèle de tête** en trois semaines. **Mistral** demeure le choix européen le plus crédible (résidence UE, FR/NL, ZDR sur payant). **Microsoft, AWS et IBM** dominent la gouvernance et l’intégration d’entreprise. **GitHub Copilot et Cursor** restent les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight (**Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi, GLM**) réduisent le verrouillage mais transfèrent sécurité et exploitation à l’utilisateur — et **Meta a basculé son offre de tête vers un modèle à poids fermés indisponible en UE**.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral Vibe | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées ; Sonar API désormais ZDR (à confirmer) | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI (GPT-5.6) ou Anthropic (Opus 5) API | Gemini / Mistral | SDK matures, outils, sorties structurées, baisses de prix récentes | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Sandbox, revue humaine, plafond de coût ; **cf. incident Grok Build** |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure Foundry | GitHub Copilot | Identité, Office, gouvernance, agents | **Grille repricée en USD ; prix EUR non publié**, licences imbriquées |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | Llama (hors UE), Mistral, Nemotron | Qwen, GLM (MIT), DeepSeek (MIT), Kimi (licence custom) | Contrôle et portabilité | Licence, sécurité, capacité GPU, évaluation locale |

## Ce qui a changé depuis le 17 juillet 2026

- **OpenAI** : modèle phare = **GPT-5.6 Sol** (Sol/Terra/Luna). **Baisses du 30 juil.** : Terra 2/12 USD (−20 %), Luna 0,20/1,20 USD (−80 %) ; Sol inchangé 5/0,50/30 USD, contexte 1,05 M [S02, S66].
- **Anthropic** : **Claude Opus 5** (24 juil., 5/0,50/25 USD, 1 M). **Sonnet 5** en tarif intro 2/10 USD **jusqu’au 31 août**, puis 3/15 USD [S67, S68].
- **Google** : **Gemini 3.6 Flash** (21 juil., 1,50/0,15/7,50 USD, 1 M) ; Gemini 3.1 Pro reste le flagship ; 3.5 Pro toujours non sorti [S69].
- **Meta** : bascule vers **Muse Spark 1.1** (poids fermés, API payante), **preview US, pas d’UE** ; Llama 4 toujours interdit aux domiciliés UE [S70, S71].
- **Chine / open weight** : **DeepSeek V4** (MIT, 1 M) [S75] ; **Qwen3.8-Max** (3 août, région **Frankfurt UE**) [S76] ; **Kimi K3** documenté, poids ouverts sous licence custom [S77] ; **GLM-5.2** flagship API (MIT, 1 M), fin de promo Coding Plan [S78].
- **Microsoft** : **reset tarifaire Copilot** (USD 21/18, EUR non publié) ; GPT-5.6 en Foundry [S79]. **AWS** : AgentCore GA + régions **Milan / Espagne** [S80]. **NVIDIA** : extensions Agent Toolkit [S81].
- **Réglementation** : **AI Act — 2 août 2026** applique transparence (art. 50) et exécution GPAI ; **Digital Omnibus** reporte le haut risque à **2 déc. 2027 / 2 août 2028** [S57, S62, S63].

## Prix et Belgique

Taux de référence BCE du **4 août 2026** : **1 EUR = 1,1515 USD** ; **EUR/CNY ≈ 7,78–7,79 (à confirmer)** [S61]. L’euro s’est renforcé d’environ 1 % vs USD depuis le 14 juillet, ce qui **abaisse légèrement** le coût en euros des offres facturées en dollars. Donc 20 USD ≈ **17,37 EUR** hors TVA ; avec 21 % de TVA belge, ≈ **21,02 EUR** si la TVA n’est pas déjà incluse. La **TVA standard belge reste 21 %** [S64]. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA ; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Côté disponibilité UE : **Qwen (Alibaba Cloud, région Frankfurt)** apparaît comme le seul acteur chinois offrant une **piste de résidence UE directe** (EUR/TVA/DPA restant à confirmer) ; **DeepSeek, Kimi, GLM** n’offrent pas de résidence UE en direct — la voie conforme passe par des **poids ouverts auto-hébergés** ou des **hébergeurs UE tiers**. Pour **Anthropic**, l’hébergement UE reste indirect (AWS Bedrock UE, Vertex UE), l’accès natif claude.ai/API défautant sur les USA.

## Capacités : ne pas confondre les produits

- **Modèle** : moteur probabiliste, par ex. GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application** : ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity ; ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API** : endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code** : Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome** : boucle qui planifie, appelle des outils, modifie des fichiers et peut agir ; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle : finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **L’échéance du 2 août 2026 est désormais effective** : obligations de transparence (art. 50) et pouvoirs d’exécution GPAI ; les obligations « haut risque » ont en revanche été **reportées** (Annexe III au 2 déc. 2027, Annexe I au 2 août 2028) par le Digital Omnibus [S57, S62, S63]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03] ; Anthropic n’entraîne pas sur les données des produits commerciaux [S06] ; GitHub permet l’opt-out individuel et n’entraîne pas sur Business/Enterprise [S37] ; Cursor Privacy Mode exclut l’entraînement [S42] ; Mistral n’entraîne pas sur les tiers payants (ZDR) [S73]. **Point de vigilance nouveau** : l’incident **Grok Build** du 14 juillet illustre le risque des agents de code qui exfiltrent des dépôts — sandboxer et limiter les accès [S74].

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production (les modèles de tête changent tous les mois) et prévoir un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources : [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
