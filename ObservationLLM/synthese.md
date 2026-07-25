# Synthèse décisionnelle — 25 juillet 2026

> Mise à jour du 25 juillet 2026. Édition précédente: 17 juillet 2026. Cette semaine a été marquée par un renouvellement des modèles de tête chez les trois principaux fournisseurs (**OpenAI GPT-5.6**, **Anthropic Claude Opus 5**, **Google Gemini 3.6 Flash**), la confirmation de **Kimi K3** en open weight et une consolidation structurelle majeure (**SpaceX/xAI rachète Cursor**). Détails datés dans [historique.md](historique.md).

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

Semaine de renouvellement des modèles de tête. Faits marquants vérifiés:

- **OpenAI GPT-5.6** remplace GPT-5.5 comme famille frontière, en trois tailles: **Luna** (1/6 USD par million entrée/sortie), **Terra** (2,50/15 USD) et **Sol** (5/30 USD), 1 M de contexte, cutoff connaissance février 2026, disponibilité générale le 9 juillet 2026 sur ChatGPT, Codex et l’API. Nouvelles fonctions d’API: appel d’outils programmatique, orchestration multi-agents et points de rupture de cache de prompt [S61]. GPT-5.5 reste disponible; revérifier le comportement long contexte par modèle.
- **Anthropic Claude Opus 5** (24 juillet 2026) succède à Opus 4.8 au **même prix, 5/25 USD** par million entrée/sortie; 1 M de contexte, 128 k de sortie, raisonnement activé par défaut (changement cassant), Fast mode à 10/50 USD, minimum de cache abaissé à 512 jetons, changements d’outils en cours de conversation (bêta). Anthropic le présente comme « intelligence frontière à la moitié du coût de Fable 5 ». Opus 4.8 et Sonnet 5 restent disponibles [S62].
- **Google Gemini 3.6 Flash** (21 juillet 2026): entrée inchangée à **1,50 USD**, sortie abaissée de 9 à **7,50 USD** par million (-16,7 %), cache 0,15 USD + stockage 1 USD/M/h, et ~17 % de jetons de sortie en moins à tâche égale. Gemini 3.5 Pro annoncé à venir [S63].
- **Moonshot Kimi K3** (16 juillet 2026) est désormais confirmé: MoE 2,8 T de paramètres, 1 M de contexte, entrées texte/image/vidéo, poids sous licence MIT modifiée annoncés pour le 27 juillet 2026; premier au Frontend Code Arena au moment de l’annonce. Rappel: capacités déclarées à revalider en interne [S64].
- **Consolidation majeure**: SpaceX (fusionné avec xAI depuis février 2026) a conclu le 16 juin 2026 le rachat d’**Anysphere/Cursor pour 60 Md USD** en actions, clôture attendue au T3 2026 sous réserve réglementaire. Grok 4.5 (8 juillet 2026, 2/6 USD court contexte, 4/12 au-delà de 200 k) a été co-entraîné avec Cursor. L’indépendance de Cursor (n°16) devient un point de vigilance [S65–S66].
- **Mistral** élargit hors du texte: modèle de navigation robotique Robostral Navigate, Mistral OCR 4 (boîtes englobantes, scores de confiance) et un nouveau MoE « fat but sparse » en accès anticipé partenaires [S67].
- **AI Act — échéance imminente**: le 2 août 2026, les obligations de transparence de l’article 50 (marquage des contenus, divulgation des chatbots, étiquetage des hypertrucages) et les pouvoirs d’exécution GPAI de la Commission entrent en vigueur. Le Digital Omnibus (approbation finale du Parlement le 16 juin 2026) a repoussé de 12 à 16 mois les obligations « haut risque » mais a laissé l’article 50 et les GPAI intacts. Sanctions jusqu’au plus élevé de 15 M€ ou 3 % du CA mondial [S57–S59, S68].

## Prix et Belgique

Taux indicatif BCE du 23 juillet 2026: **1 EUR = 1,1392 USD** [S55]; le taux CNY (7,7327 le 14 juillet) n’a pas été revérifié ce cycle et reste indicatif. La légère variation USD (−0,1 %) ne modifie pas les estimations EUR arrondies. Donc 20 USD ≈ 17,56 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,25 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Le 2 août 2026 (dans quelques jours)**, les obligations de transparence de l’article 50 et les pouvoirs d’exécution GPAI de la Commission deviennent applicables; le Digital Omnibus a repoussé le « haut risque » de 12 à 16 mois mais a laissé ces deux volets intacts [S57–S59, S68]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
