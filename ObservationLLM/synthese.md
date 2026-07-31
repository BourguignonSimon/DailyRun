# Synthèse décisionnelle — 31 juillet 2026

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
| Open weight / sur site | Llama, Mistral, Nemotron | Qwen, Kimi, GLM, DeepSeek | Contrôle et portabilité | Licence, sécurité, capacité GPU, évaluation locale |

## Ce qui a changé depuis le 17 juillet 2026

Cycle **dense**: trois familles de modèles de tête ont bougé et un jalon réglementaire européen arrive. Niveau de confiance indiqué (**[Vérifié]** lecture directe, **[Corroboré]** recoupement, **[À confirmer]** source unique). Détail et méthode dans [historique.md](historique.md).

- **OpenAI [Corroboré].** Le frontière est désormais la famille **GPT-5.6** (Sol/Terra/Luna), lancée le 9 juillet mais manquée par l’édition précédente. Le 30 juillet, **baisses de prix**: Terra −20 % (2/12 USD), Luna −80 % (0,20/1,20 USD); Sol reste à 5/30 USD. « Priority » renommé « Fast mode » [S61–S62].
- **Anthropic [Vérifié].** **Claude Opus 5** publié le 24 juillet, au **même prix qu’Opus 4.8 (5/25 USD)**; Fast mode en préversion; Sonnet 5 en prix d’intro 2/10 USD jusqu’au 31 août, puis 3/15 USD [S07, S63].
- **Google [Corroboré].** **Gemini 3.6 Flash** (21 juillet): sortie ramenée de 9 à **7,50 USD/M**, entrée 1,50 USD inchangée, ~17 % de jetons de sortie en moins; nouveaux paliers 3.5 Flash-Lite et 3.5 Flash Cyber [S64].
- **DeepSeek [À confirmer].** Bascule vers **DeepSeek V4** (contexte 1 M); `deepseek-chat`/`deepseek-reasoner` retirés le 24 juillet [S71].
- **Alibaba/Qwen [À confirmer].** **Qwen3.8-Max-Preview** (~19 juillet), nouveau phare, tarif de préversion réduit [S72].
- **Code:** **Cursor Router** (routage multi-modèles, 22 juillet) [S68]; **GitHub Copilot** compétences d’agent + MCP en GA pour la revue de code (29 juillet) [S67]; **Kimi K3** poids ouverts publiés (27 juillet) [S70]; baisse Replit Cloud au 1ᵉʳ août [S69].
- **Microsoft [À confirmer], pertinent RGPD.** **OpenAI ajouté comme sous-traitant** de M365 Copilot/Copilot Studio le 24 juillet (activation automatique sauf opt-out); à auditer [S73].
- **Rumeurs exclues:** Meta « Muse Spark »/Llama 4.5, Qwen « 2,4T », Grok 4.3, tarification « heures de pointe » DeepSeek — non confirmées, non retenues.

## Prix et Belgique

Taux BCE mis à jour: **1 EUR = 1,1476 USD au 30 juillet 2026** (contre 1,1405 le 14 juillet; l’euro se renforce légèrement) [S55]. Donc 20 USD ≈ 17,43 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,09 EUR si la TVA n’est pas déjà incluse. Le taux **EUR/CNY n’a pas pu être reconfirmé** ce cycle (sources divergentes ~7,69 à 8,22): les conversions CNY (Qwen) restent **à confirmer**. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Jalon imminent: les obligations de transparence de l’article 50 s’appliquent au 2 août 2026** — déclarer les chatbots, marquer le contenu synthétique en lecture machine, étiqueter les deepfakes; sanctions jusqu’à 15 M€ ou 3 % du CA mondial. Le **règlement (UE) 2026/1744 « Digital Omnibus on AI »** (en vigueur le 27 juillet 2026) a **reporté** les obligations « haut risque » (Annexe III au 2 décembre 2027, Annexe I au 2 août 2028) mais **n’a pas déplacé** l’échéance du 2 août 2026 [S65–S66, S57–S59]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
