# Synthèse décisionnelle — 1er août 2026

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

Depuis la dernière édition (17 juillet 2026), deux mouvements dominent: la montée en gamme des frontières (**famille Claude 5** chez Anthropic et **famille GPT-5.6** chez OpenAI, désormais l’état vérifié) et l’entrée en application, le **2 août 2026**, des pouvoirs de supervision et de sanction de la Commission européenne sur les fournisseurs de modèles à usage général (GPAI) au titre de l’AI Act.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral / Claude | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | Licences imbriquées, TVA hors prix B2B |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | Llama, Mistral, Nemotron | Qwen, Kimi, GLM, DeepSeek | Contrôle et portabilité | Licence, sécurité, capacité GPU, évaluation locale |

## Ce qui a changé depuis le 17 juillet 2026

Les faits marquants vérifiés cette édition (voir [historique](historique.md) pour le détail et les niveaux de confiance):

- **Anthropic — famille Claude 5 confirmée.** La documentation officielle place **Claude Opus 5** (`claude-opus-5`, 5/25 USD par million entrée/sortie, 1 M de contexte, cutoff mai 2026) comme choix par défaut pour le code agentique et l’entreprise, et **Claude Fable 5** (`claude-fable-5`, 10/50 USD, 1 M, GA le 9 juin 2026) comme modèle le plus capable. **Sonnet 5** reste à 3/15 USD avec un prix de lancement 2/10 USD jusqu’au 31 août 2026. Opus 4.8 passe en « legacy »; Opus 4.1 sera retiré le 5 août 2026 [S06, S61].
- **OpenAI — famille GPT-5.6 (Sol, Terra, Luna).** Disponibilité générale le 9 juillet 2026, désormais modèle par défaut de ChatGPT; Sol est le modèle frontière, Terra l’équilibré, Luna le plus économique. Nouveauté API notable: le *Programmatic Tool Calling* dans l’API Responses. Des baisses de prix ont été annoncées le 30 juillet 2026 (Luna et Terra), donc les tarifs exacts sont à revalider au barème officiel [S62–S63].
- **Google — Gemini 3.6 Flash et 3.1 Pro.** Gemini 3.6 Flash est devenu le modèle par défaut grand public le 21 juillet 2026; Gemini 3.1 Pro est le modèle de tête (preview, ~2/12 USD) et Gemini 3.5 Flash reste à 1,50/9 USD. Côté grand public: AI Plus ~4,99 USD, AI Pro ~19,99 USD, AI Ultra ~99,99–199,99 USD (sources secondaires; checkout belge à confirmer) [S64].
- **xAI — Grok 4.5** rendu public le 8 juillet 2026 comme modèle de code économique (~2/6 USD) [S65].
- **Alibaba — Qwen 3.7 Flash** publié le 27 juillet 2026 [S66].
- **Meta — Muse Spark 1.1** lancé le 9 juillet 2026, présenté comme premier modèle payant (~1,25/4,25 USD, source secondaire à confirmer) [S67].
- **AI Act — jalon du 2 août 2026.** Les pouvoirs de supervision et de sanction de la Commission sur les fournisseurs GPAI deviennent applicables; les obligations GPAI elles-mêmes s’appliquent depuis le 2 août 2025. Le *Digital Omnibus* a reporté les obligations « haut risque »: systèmes autonomes de l’Annexe III au **2 décembre 2027**, IA intégrée à des produits réglementés (Annexe I) au **2 août 2028** (Parlement le 16 juin, Conseil le 29 juin 2026) [S57–S59, S68].

## Prix et Belgique

Taux indicatifs de référence (dernière valeur vérifiée, BCE du 14 juillet 2026): **1 EUR = 1,1405 USD = 7,7327 CNY** [S55]. À revalider à chaque exécution; les pages officielles de la BCE et de plusieurs fournisseurs ont bloqué la récupération automatisée cette fois. Donc 20 USD ≈ 17,54 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,22 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.1 Pro.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Le 2 août 2026 active les pouvoirs d’exécution de la Commission sur les GPAI**; les obligations « haut risque » ont été repoussées (Annexe III au 2 décembre 2027, Annexe I au 2 août 2028) [S57–S59, S68]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production (par ex. `claude-opus-5`, snapshot GPT-5.6) et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
