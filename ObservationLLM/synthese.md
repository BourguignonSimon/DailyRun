# Synthèse décisionnelle — 6 août 2026

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

Depuis l’édition du 17 juillet 2026, la sélection reste identique, mais plusieurs offres phares et chemins de migration ont changé:

- OpenAI positionne GPT-5.6 Sol comme modèle frontière (1,05 M de contexte, 128 k de sortie, 5/0,50/30 USD par million entrée/cache-lecture/sortie). Terra et Luna ajoutent des paliers moins coûteux; GPT-5.6 introduit cache explicite, raisonnement persistant, appels d’outils programmatiques et multi-agent bêta [S61–S63].
- Anthropic a lancé Claude Opus 5 le 24 juillet au même tarif 5/25 USD que 4.8, avec 1 M de contexte et 128 k de sortie. Le 5 août, les inference hooks entreprise sont entrés en bêta et Opus 4.1 a été retiré [S64].
- Google a rendu Gemini 3.6 Flash GA le 21 juillet: 1,50 USD/M en entrée et 7,50 USD/M en sortie, 1 M de contexte et 64 k de sortie. La migration exige de retirer les paramètres d’échantillonnage dépréciés et les tours modèle préremplis [S65–S67].
- AWS a fermé Bedrock Agents Classic aux nouveaux clients le 30 juillet et recommande AgentCore. Le namespace Agent Registry change le 6 août, ce qui impose de mettre à jour endpoints, IAM, SDK et données de registre [S68–S69].
- GitHub Copilot a ajouté Opus 5, Gemini 3.6 Flash et Grok 4.5, les contrôles d’automatisation, le niveau de raisonnement des cloud agents et a retiré l’ancienne app Billing Preview [S71]. Cursor a ajouté Router, des contrôles administrateur et une surface mobile/iPad; le routage Balance/Intelligence est facturé au tarif du modèle choisi [S72].
- xAI propose Grok 4.5 à 500 k de contexte, 2/6 USD par million de jetons en contexte court et 4/12 USD en long contexte [S22].
- Mistral met en avant Mistral Medium 3.5 pour agents/code et une API européenne; Mistral Large est affiché à 2/6 USD par million et batch à -50 % [S19–S21].
- GitHub remplace la logique de requêtes premium par des crédits IA: Pro 10 USD, Pro+ 39 USD, Max 100 USD; l’usage agent et les modèles chers consomment davantage [S37–S38].
- Cursor a mis à jour sa politique le 15 juillet 2026: Privacy Mode interdit l’entraînement et s’appuie sur des accords de rétention zéro, sous réserve d’enquêtes d’abus [S42].
- Kimi K3 dispose désormais d’une documentation API officielle décrivant 1 M de contexte, raisonnement configurable, cache, outils et sorties structurées; la page avertit toutefois que la recherche web est en mise à jour [S74].

## Prix et Belgique

Taux indicatifs BCE du 5 août 2026: **1 EUR = 1,1554 USD = 7,7989 CNY** [S55]. Donc 20 USD ≈ 17,31 EUR hors TVA; avec 21 % de TVA belge, ≈ 20,95 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Depuis le 2 août 2026, l’article 50 impose notamment l’information lors d’une interaction avec une IA et, selon le cas, le marquage ou l’étiquetage de contenus générés/manipulés; la Commission publie des lignes directrices et un code volontaire. Une transition ciblée au 2 décembre 2026 concerne certains systèmes antérieurs [S75–S76]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
