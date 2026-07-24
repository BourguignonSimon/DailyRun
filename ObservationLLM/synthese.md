# Synthèse décisionnelle — 24 juillet 2026

> Mise à jour du 24 juillet 2026. Changements marquants depuis le 17 juillet: OpenAI **GPT-5.6** (Sol/Terra/Luna, Sol devient le phare), Google **Gemini 3.6 Flash** (sortie à 7,50 USD/M), **Qwen3.8-Max-Preview** et **DeepSeek V4**, poids **Kimi K3** attendus le 27 juillet, Microsoft ajoutant **OpenAI comme sous-traitant** de M365 Copilot, et le jalon **AI Act du 2 août 2026** désormais imminent. Détail et réserves de vérification: [historique](historique.md). Cette exécution a subi un blocage réseau des accès directs aux sources officielles: plusieurs faits sont issus de la recherche et à revérifier (voir historique).

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

Changements significatifs observés en une semaine (détail et niveau de preuve dans [historique](historique.md); certains faits sont issus de la recherche, l’accès direct aux sources officielles ayant été bloqué cette fois):

- **OpenAI — GPT-5.6.** Nouvelle famille Sol/Terra/Luna; **Sol** devient le modèle phare au-dessus de GPT-5.5, sur ChatGPT, Codex et l’API. Sol: 1,05 M de contexte, prix affichés 5 USD entrée / 30 USD sortie par million. GPT-5.5 reste disponible [S61].
- **Google — Gemini 3.6 Flash (GA).** Sortie ramenée à **7,50 USD/M** (contre 9), entrée 1,50 USD/M, contexte 1 M. Ajout de 3.5 Flash-Lite (GA) et 3.5 Flash Cyber (pilote sécurité restreint). Disponibilité EEE des nouveaux modèles à confirmer [S62].
- **Anthropic — inchangé dans la fenêtre**, mais le catalogue vérifié inclut désormais **Claude Fable 5** (10/50 USD/M, 1 M) au-dessus d’Opus 4.8 et Sonnet 5 (correction de périmètre; Fable 5 en GA depuis le 9 juin) [S06–S08].
- **Alibaba/Qwen — Qwen3.8-Max-Preview** (19 juillet, 2,4 T, multimodal) et **Qwen-Audio-3.0-TTS** (20 juillet), via Model Studio; à confirmer [S63].
- **DeepSeek — bascule V4**: retrait des alias `deepseek-chat`/`deepseek-reasoner` le 24 juillet, tarification heures pleines/creuses; à confirmer [S25].
- **Moonshot/Kimi — poids K3** annoncés pour le 27 juillet 2026 (pas encore publiés), CLI `kimi-code` mise à jour le 24 juillet [S48–S51, S64].
- **Microsoft — OpenAI sous-traitant** de M365 Copilot et Copilot Studio (activation par défaut le 24 juillet, opt-out possible): point RGPD à traiter [S65].
- **GitHub Copilot** ajoute Gemini 3.6 Flash, la visibilité des crédits par cycle et un tableau de bord d’impact (20–22 juillet); prix inchangés [S37–S38]. **Cursor** double l’usage inclus des modèles maison et lance **Cursor Router** (mode Auto à trois profils) le 22 juillet; politique de données inchangée [S41–S42].
- **AI Act — le 2 août 2026 est imminent**: transparence (art. 50), pouvoirs GPAI et surveillance nationale. Le Digital Omnibus (signé le 8 juillet) reporte le haut risque à décembre 2027/août 2028 [S57–S59, S66].
- **xAI, AWS, Meta, Mistral, Cohere, IBM, NVIDIA, Z.AI/GLM, Replit, Hugging Face, Perplexity** — pas de changement confirmé dans la fenêtre.

## Prix et Belgique

Taux indicatifs BCE du 14 juillet 2026: **1 EUR = 1,1405 USD = 7,7327 CNY** [S55]. Donc 20 USD ≈ 17,54 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,22 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Fable 5/Opus 4.8 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Le 2 août 2026 est désormais imminent** (~9 jours): transparence (art. 50), pouvoirs d’exécution GPAI de la Commission et pouvoirs pleins des autorités nationales de surveillance. Le Digital Omnibus IA (signé le 8 juillet 2026) reporte les obligations à haut risque à décembre 2027 (annexe III) et août 2028 (annexe I) [S57–S59, S66]. Point d’actualité RGPD: Microsoft ajoute OpenAI à la liste des sous-traitants de M365 Copilot le 24 juillet — vérifier l’opt-out et informer les personnes [S65]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
