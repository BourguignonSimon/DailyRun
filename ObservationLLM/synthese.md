# Synthèse décisionnelle — 4 août 2026

> Deuxième édition. Elle actualise la première édition du 17 juillet 2026. Les changements significatifs constatés depuis sont résumés plus bas et détaillés dans [historique.md](historique.md).

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible et a fortement baissé ses prix. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

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

Édition de forte rotation: plusieurs familles de tête ont été renouvelées et une décision réglementaire majeure a été adoptée. Faits vérifiés:

- **OpenAI — nouvelle famille GPT-5.6.** GPT-5.6 Sol/Terra/Luna en disponibilité générale depuis le 9 juillet 2026, 1,05 M de contexte sur les trois paliers. Le 30 juillet, baisse de prix Terra -20 % et Luna -80 %; Sol reste à son tarif de lancement. Sol 5/30, Terra 2/12, Luna 0,20/1,20 USD par million entrée/sortie. GPT-5.5 devient un modèle de génération précédente [S01–S02, S61].
- **Anthropic — famille Claude 5.** Opus 5 (5/25 USD), Fable 5 (10/50 USD), Sonnet 5 et Haiku 4.5 (1/5 USD). **Sonnet 5 est à un prix d’introduction de 2/10 USD jusqu’au 31 août 2026, puis 3/15 USD**: hausse programmée à budgéter. Opus 5 remplace Opus 4.8 en tête de gamme [S06–S08, S62].
- **Google — Gemini 3.6 Flash.** 1,50/7,50 USD par million (contre 9 en sortie pour la 3.5 Flash), grounding natif; Gemini 3.1 Pro Preview 2/12 USD jusqu’à 200 k; 3.5 Flash-Lite 0,30/2,50 USD. Gemini 2.0 Flash-Lite arrêté le 1ᵉʳ juin 2026 [S09–S11, S63].
- **Mistral — Large 3.** Large 3 affiché à 0,50/1,50 USD par million, 256 k de contexte, soit une forte baisse par rapport à Large (2/6 USD). Medium 3.5 reste orienté agents/code; Small 4 à 0,10/0,30 USD [S19–S21, S64].
- **DeepSeek — génération V4.** `deepseek-v4-pro` 0,435/0,87 USD et `deepseek-v4-flash` 0,14/0,28 USD par million; les alias `deepseek-chat`/`deepseek-reasoner` ont été retirés après le 24 juillet 2026 (migrer vers les identifiants V4). Disponibilité belge, DPA, région et facture EUR/TVA restent à confirmer [S25–S26, S65].
- **Moonshot — Kimi K3 en disponibilité générale.** 2,8 T de paramètres, 1 M de contexte, 3/15 USD par million (cache 0,30 USD); passage de l’annonce du 16 juillet à un modèle facturable [S48–S51, S60].
- **Microsoft — GPT-5.6 par défaut** dans Microsoft 365 Copilot; promotion Business à 18 USD/siège/mois du 1ᵉʳ juillet au 30 septembre 2026 (vs 21 USD) [S12, S66].
- **Qwen (à confirmer) et IBM Granite 4.1 (à confirmer).** Des traceurs citent un flagship Qwen3.5 et une famille Granite 4.1; à vérifier sur les pages officielles avant décision [S27, S35].

## Prix et Belgique

Taux BCE du 31 juillet 2026: **1 EUR = 1,1485 USD** [S55]; le taux EUR/CNY à jour n’a pas pu être confirmé et reste **à confirmer** (dernière valeur retenue 7,7327). Donc 20 USD ≈ 17,42 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,08 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Changement majeur: le « Digital Omnibus » a été approuvé définitivement par le Conseil le 29 juin 2026.** Il reporte les obligations des systèmes à haut risque autonomes (Annexe III) du 2 août 2026 au **2 décembre 2027**, et celles des systèmes intégrés à des produits réglementés (Annexe I) au **2 août 2028**. Le délai de mise en œuvre de la transparence sur les contenus générés par IA passe de 6 à 3 mois, avec une échéance au **2 décembre 2026**; la date des bacs à sable réglementaires nationaux est portée au 2 août 2027. Une nouvelle interdiction (Article 5) vise les « nudifiers » et le matériel pédopornographique généré. Les obligations GPAI restent en vigueur depuis le 2 août 2025 [S57–S59, S67]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
