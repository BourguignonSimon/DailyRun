# Synthèse décisionnelle — 3 août 2026

> Mise à jour de la synthèse du 17 juillet 2026. Cette édition intègre des **changements significatifs** : nouveaux modèles frontières, baisses de prix et l’entrée en application du jalon AI Act du 2 août 2026. Voir l’[historique](historique.md) pour le détail des évolutions.

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée : application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

Depuis la dernière édition, la dynamique dominante est une **guerre des prix** (OpenAI baisse Terra et Luna, Google abaisse Gemini Flash, DeepSeek publie V4-Flash à très bas coût) doublée d’une **poussée de modèles frontières** (Claude Opus 5, poids ouverts de Kimi K3). En parallèle, l’**AI Act franchit une étape contraignante** : la transparence et la supervision des modèles GPAI sont désormais applicables.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral (Le Chat) | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | Licences imbriquées, TVA hors prix B2B |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | Llama, Mistral, Nemotron | Qwen, Kimi K3, GLM, DeepSeek | Contrôle et portabilité | Licence, sécurité, capacité GPU, évaluation locale |

## Ce qui a changé depuis le 17 juillet 2026

Faits marquants vérifiés (sous réserve de la limite d’accès direct décrite plus bas et dans [sources.md](sources.md)) :

- **OpenAI** — GPT-5.6 (Sol/Terra/Luna) est le modèle phare (l’ancienne mention « GPT-5.5 » est caduque). **Baisses de prix du 30 juillet** : Terra −20 %, **Luna −80 %** (≈ 0,20/1,20 USD) ; Sol inchangé à 5/30 USD [S02, S61].
- **Anthropic** — **Claude Opus 5** lancé le 24 juillet (5/25 USD), nouveau défaut de Claude Max, molette d’effort, couvert par le mode Fast. Le tarif de lancement de Sonnet 5 (2/10 USD) **remonte à 3/15 USD le 1er septembre 2026** [S06, S08, S75].
- **Google** — **Gemini 3.6 Flash** lancé le 21 juillet (1,50/7,50 USD, sortie abaissée depuis 9), avec 3.5 Flash-Lite et 3.5 Flash Cyber. Gemini 4 « teasé » mais non publié [S64].
- **AWS Bedrock** — répercussion des baisses GPT-5.6 (30 juillet) ; métadonnées de coût Bedrock standardisées dans le CUR ; promo Claude Sonnet 5 (2/10 USD) jusqu’au 31 août [S65–S66].
- **DeepSeek** — **V4-Flash** officiellement publié le 31 juillet (≈ 0,14/0,28 USD) ; anciens alias retirés le 24 juillet ; tarification heures pleines/creuses annoncée, pas encore active [S26, S67].
- **Kimi K3** — **poids ouverts publiés le 27 juillet** (MoE 2,8 T, contexte 1 M, multimodal), API 3/0,30/15 USD, licence propre « Kimi K3 License ». Résout la question ouverte de la dernière édition [S60, S72].
- **Autres évolutions** — Qwen3.8-Max en préversion (19 juillet) ; NVIDIA Agent Toolkit étendu à PhysicsNeMo/CUDA-X (27 juillet) ; **Cursor Router** (~22 juillet) ; baisses Cloud + intégration Slack chez Replit ; retrait de l’app Copilot Billing Preview (3 août) [S68–S71, S73].
- **Sans changement matériel** : Microsoft, Meta, Mistral, xAI (Grok 4.6/4.7 = feuille de route non vérifiée), IBM, Perplexity, Hugging Face, Cohere, Z.AI/GLM.

## Prix et Belgique

Taux indicatif BCE du **31 juillet 2026 : 1 EUR = 1,1485 USD** (obtenu par recherche, l’accès direct BCE ayant été bloqué cette exécution) ; **EUR/CNY ≈ 7,70** (fin juillet, **approximatif**, non confirmé comme taux de référence exact) [S55]. Donc 20 USD ≈ 17,41 EUR hors TVA ; avec 21 % de TVA belge, ≈ 21,07 EUR si la TVA n’est pas déjà incluse. L’euro s’est légèrement renforcé depuis le 17 juillet (1,1405 → 1,1485), ce qui abaisse marginalement les prix USD convertis en EUR. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA ; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API ; OpenAI publie des contrôles de résidence européenne pour certains clients/services (surcoût +10 % pour les modèles publiés depuis le 5 mars 2026, dont GPT-5.6) [S03, S11, S62]. Pour **DeepSeek, Qwen, Kimi et GLM**, la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données **restent à confirmer** avant tout usage de données personnelles ou confidentielles ; en particulier, l’API directe DeepSeek reste **non conforme au RGPD** (transferts UE→Chine sans SCC documentées, interdiction du Garante italien maintenue) et Kimi traite les données de son API hébergée **en Chine** — la seule voie défendable est l’auto-hébergement des poids ouverts en infrastructure UE.

## Capacités : ne pas confondre les produits

- **Modèle** : moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application** : ChatGPT, Claude, Gemini, Grok, Le Chat, Perplexity ; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API** : endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code** : Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome** : boucle qui planifie, appelle des outils, modifie des fichiers et peut agir ; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle : finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire.

**Nouveau depuis la dernière édition — le jalon AI Act du 2 août 2026 est en vigueur** [S57–S59] : les pouvoirs de supervision et de sanction sur les modèles GPAI sont actifs (amendes jusqu’à **15 M€ ou 3 %** du chiffre d’affaires mondial) et les obligations de transparence de l’**article 50** (divulgation des chatbots, marquage lisible par machine des contenus générés, étiquetage des hypertrucages) atteignent leur point d’application. Les GPAI mis sur le marché avant le 2 août 2025 ont jusqu’au 2 août 2027 ; les systèmes à haut risque restent repoussés (décembre 2027 / août 2028). L’**EDPB** a par ailleurs adopté le 8 juillet 2026 des lignes directrices sur l’anonymisation et le web scraping pour l’IA générative, en consultation jusqu’au 30 octobre 2026 [S74]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03] ; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37] ; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours (les baisses de prix et sorties de modèles récentes montrent que les alias bougent vite : cf. le retrait des alias DeepSeek le 24 juillet).
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.
6. Documenter la transparence utilisateur (article 50) : divulgation d’interaction avec une IA et marquage des contenus générés, désormais applicables.

## Limite de vérification de cette exécution

L’accès réseau **direct** à la plupart des domaines officiels a été bloqué par la politique de l’environnement (403 proxy) le 3 août 2026. Seuls `github.com` et `platform.claude.com` ont été lus directement ; le reste a été vérifié par recherche restreinte aux domaines officiels, recoupée par des sources secondaires. Les tarifs et dates non lus sur les grilles officielles sont signalés dans [sources.md](sources.md) et devront être recontrôlés à la prochaine exécution.

Détails et sources : [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
