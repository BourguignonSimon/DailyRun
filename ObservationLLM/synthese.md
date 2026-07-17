# Synthèse décisionnelle — 17 juillet 2026

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

## Ce qui a changé

Cette première édition n’avait pas de base antérieure dans le dépôt. Les faits marquants vérifiés sont:

- OpenAI positionne GPT-5.5 comme modèle frontière à 1,05 M de contexte; entrée 5 USD/M, sortie 30 USD/M, cache 0,50 USD/M. Au-delà de 272 k en entrée, un multiplicateur long contexte s’applique [S01–S02].
- Anthropic affiche Opus 4.8 et Sonnet 5, avec 1 M de contexte pour les modèles de tête; batch à moitié prix et mécanismes de cache/résidence [S06–S08].
- Google propose Gemini 3.5 Flash à 1,50 USD/M en entrée et 9 USD/M en sortie, avec cache, batch, Flex, Priority, recherche et agents facturés séparément [S09–S11].
- xAI propose Grok 4.5 à 500 k de contexte, 2/6 USD par million de jetons en contexte court et 4/12 USD en long contexte [S22].
- Mistral met en avant Mistral Medium 3.5 pour agents/code et une API européenne; Mistral Large est affiché à 2/6 USD par million et batch à -50 % [S19–S21].
- GitHub remplace la logique de requêtes premium par des crédits IA: Pro 10 USD, Pro+ 39 USD, Max 100 USD; l’usage agent et les modèles chers consomment davantage [S37–S38].
- Cursor a mis à jour sa politique le 15 juillet 2026: Privacy Mode interdit l’entraînement et s’appuie sur des accords de rétention zéro, sous réserve d’enquêtes d’abus [S42].
- Kimi K3 a été annoncé le 16 juillet 2026; sa nouveauté impose de séparer capacités déclarées, poids disponibles et qualité mesurée indépendamment [S48–S51, S60].

## Prix et Belgique

Taux indicatifs BCE du 14 juillet 2026: **1 EUR = 1,1405 USD = 7,7327 CNY** [S55]. Donc 20 USD ≈ 17,54 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,22 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.5, Claude Opus 4.8 ou Gemini 3.5 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Le 2 août 2026 reste un jalon important de transparence; les dates des systèmes à haut risque ont été révisées en 2026 [S57–S59]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
