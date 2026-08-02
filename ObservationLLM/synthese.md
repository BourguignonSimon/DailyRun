# Synthèse décisionnelle — 2 août 2026

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral Vibe | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code (Opus 5) / Codex (GPT-5.6) | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | Licences imbriquées, TVA hors prix B2B |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | Llama, Mistral, Nemotron | Qwen, Kimi, GLM, DeepSeek | Contrôle et portabilité | Licence, sécurité, capacité GPU, évaluation locale |

## Ce qui a changé depuis le 17 juillet 2026

Deuxième édition. Les évolutions marquantes vérifiées depuis la première publication sont:

- **Anthropic a restructuré sa gamme.** Claude **Opus 5** (24 juillet 2026) au prix Opus inchangé de **5/25 USD** par million, 1 M de contexte, coupure de connaissances mai 2026, sélecteur d’effort low/medium/high, désormais par défaut sur Claude Max. **Fable 5** est le modèle de tête (**10/50 USD**); **Sonnet 5** garde un prix de lancement 2/10 USD jusqu’au 31 août 2026, puis 3/15 USD. Opus 4.8 passe en héritage [S62, S07].
- **OpenAI a livré la famille GPT-5.6** (Sol/Terra/Luna, GA le 9 juillet 2026). **Sol** devient le modèle de tête à 5/30 USD en contexte court et **10/45 USD au-delà de 272 k**, contexte 1,05 M, coupure février 2026. Le 30 juillet, Luna a baissé de 80 % et Terra de 20 %. GPT-5.5 reste disponible mais sort de la grille principale [S61, S01].
- **Google a lancé Gemini 3.6 Flash** (21 juillet 2026) à **1,50/7,50 USD** — sortie moins chère que 3.5 Flash (9 USD) — et un palier **3.5 Flash-Lite** à 0,30/2,50 USD pour sous-agents à haut volume [S63, S09].
- **Moonshot a publié les poids ouverts de Kimi K3** le 26 juillet 2026: 2,8 T de paramètres MoE, 1 M de contexte, multimodal. Moonshot le présente comme compétitif face à Fable 5 et supérieur à Opus 4.8/GPT-5.6 Sol; **c’est une revendication fournisseur, la vérification indépendante est en cours** [S64, S60].
- **AI Act: le jalon du 2 août 2026 est en application aujourd’hui** — transparence de l’article 50, pouvoirs d’exécution GPAI et régime de sanctions. Le haut risque (annexe III) est reporté au 2 décembre 2027, l’annexe I au 2 août 2028 [S57–S59].
- xAI continue le déploiement par paliers de **Grok 4.5** sur SuperGrok (lancement du 8 juillet); tarifs API inchangés [S22–S23]. GitHub Copilot (crédits IA Pro/Pro+/Max) et Cursor (Privacy Mode, politique du 15 juillet) sont stables sur cette période [S37–S38, S42].

## Prix et Belgique

Taux de référence BCE du 30 juillet 2026: **1 EUR = 1,1476 USD** [S66]. Donc 20 USD ≈ 17,43 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,09 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Le **2 août 2026 est désormais en application**: transparence de l’article 50 (divulgation des chatbots, marquage des contenus IA, étiquetage des hypertrucages), pouvoirs d’exécution GPAI et régime de sanctions. Le haut risque (annexe III) est reporté au 2 décembre 2027, l’annexe I au 2 août 2028 [S57–S59]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
