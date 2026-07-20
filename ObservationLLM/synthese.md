# Synthèse décisionnelle — 20 juillet 2026

> Deuxième exécution de l’observatoire. Des changements significatifs ont été détectés depuis le 17 juillet ; le détail daté figure dans [historique.md](historique.md). Les niveaux de vérification sont inégaux cette fois : les tarifs Anthropic sont vérifiés en source primaire ; les chiffres OpenAI (GPT-5.6) sont **rapportés** car openai.com était inaccessible via le proxy ; les pages BCE étaient également bloquées.

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi, GLM** — et désormais **Inkling (Thinking Machines)** — réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

**Modèles de tête actualisés (juillet 2026).** OpenAI a généralisé la **famille GPT-5.6** (Sol frontière 5/30 USD/M, Terra 2,50/15, **Luna nouveau palier bon marché 1/6**) le 9 juillet [rapporté, S61–S62]. Anthropic diffuse **Claude Fable 5** (10/50 USD/M, 1 M de contexte), au-dessus d’Opus 4.8 (5/25), avec Sonnet 5 en prix d’introduction 2/10 jusqu’au 31 août puis 3/15 [vérifié, S06–S08, S64]. **Kimi K3** (2,8 T de paramètres, API en ligne, poids attendus le 27 juillet) devient un acteur open weight majeur [S66]. L’édition du 17 juillet, qui nommait GPT-5.5 et Opus 4.8 comme têtes de série, sous-estimait donc la frontière : c’est corrigé ici.

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

Deux natures de changement (détail : [historique.md](historique.md)).

**Corrections de tête (déjà valables au 17 juillet, manquées par l’édition initiale).**

- **OpenAI GPT-5.6** généralisé le 9 juillet : Sol 5/30, Terra 2,50/15, **Luna 1/6 USD/M** (nouveau palier volume). Contexte ~1,05 M, sortie 128 k. GPT-5.5 reste en ligne. **ChatGPT Work** (agent bureautique) lancé le même jour. [Rapporté ; openai.com bloqué, S61–S63].
- **Anthropic Claude Fable 5** (10/50 USD/M, 1 M de contexte, disponibilité générale 9 juin) au-dessus d’Opus 4.8 (5/25) ; **Mythos 5** est la variante restreinte. Fable 5/Mythos 5 = rétention 30 jours, **pas de zéro-rétention**. [Vérifié primaire, S64].
- **Anthropic Sonnet 5** : introduction **2/10 jusqu’au 31 août**, puis **3/15 dès le 1er septembre**. Résidence `us` ×1,1 ; endpoints régionaux Bedrock/Google Cloud +10 %. [Vérifié primaire, S07–S08].
- **Meta Muse Spark 1.1** (9 juillet) via une **Meta Model API payante (1,25/4,25)** : Meta n’est plus seulement « poids ouverts ». [S65].

**Vrais événements récents (15–20 juillet).**

- **Kimi K3** : API en ligne le 16 juillet, **2,8 T de paramètres (≈50 B actifs)**, 1 M de contexte, **3/0,30/15 USD/M** ; poids ouverts annoncés **d’ici le 27 juillet** (non publiés au 20). #1 Frontend Code Arena ; 3e GDPval-AA v2 (éval tierce). [S66].
- **Thinking Machines « Inkling »** (15 juillet) : 975 B/41 B actifs, 1 M de contexte, **poids Apache 2.0 sur Hugging Face**. Nouveau candidat à surveiller. [S67].
- **DeepSeek V4** : version officielle « mi-juillet » (imminente) ; V4-Pro (1,6 T) et V4-Flash (284 B), 1 M de contexte, **tarification heure pleine/creuse** (×2 en journée, Beijing). [S68].
- **GitHub Copilot** : **Kimi K2.7 Code** (1er open weight sélectionnable), vision généralisée, dépréciation de Gemini 2.5 Pro / 3 Flash le 31 juillet. [S70]. **Mistral** : Small 4 (256 k), Robostral Navigate, Leanstral 1.5, MoE open weight en accès anticipé. [S72].

## Prix et Belgique

Taux BCE **1 EUR = 1,1435 USD le 17 juillet 2026** [S55] (contre 1,1405 le 14 juillet). Le **taux CNY n’a pas pu être revérifié** cette exécution (pages BCE bloquées par le proxy) : 7,7327 conservé du 14 juillet à titre indicatif. Donc 20 USD ≈ 17,49 EUR hors TVA ; avec 21 % de TVA belge, ≈ 21,16 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA ; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Repères API en EUR HT (÷1,1435) : GPT-5.6 Sol ≈ 4,37/26,24 € ; Terra ≈ 2,19/13,12 € ; **Luna ≈ 0,87/5,25 €** ; Fable 5 ≈ 8,75/43,73 € ; Opus 4.8 ≈ 4,37/21,86 € ; Sonnet 5 (intro) ≈ 1,75/8,75 € ; Kimi K3 ≈ 2,62/13,12 € ; Gemini 3.5 Flash ≈ 1,31/7,87 €.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Fable 5 ou Gemini 3.5 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Jalon précisé : à partir du 2 août 2026, l’AI Office peut sanctionner les fournisseurs de GPAI** (jusqu’à 15 M€ ou 3 % du CA mondial) et mener des enquêtes ; le Digital Omnibus **reporte** les obligations « haut risque » (Annexe III autonome au 2 décembre 2027, Annexe I intégrée au 2 août 2028) [S57–S59, S73]. Contexte belge : plainte d’un groupe de consommateurs contre DeepSeek sur les transferts vers la Chine [S74]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
