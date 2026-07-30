# Synthèse décisionnelle — 30 juillet 2026

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée : application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**, qui viennent tous les trois de rafraîchir leur modèle de tête en juillet. **Mistral** demeure le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent la gouvernance et l’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage et le coût — la vague chinoise s’est nettement renforcée — mais transfèrent la sécurité, la conformité et l’exploitation à l’utilisateur.

**Deux faits nouveaux dominent cette édition :** (1) un cycle de modèles frontière très rapide (OpenAI GPT-5.6, Anthropic Opus 5 / Fable 5, Google Gemini 3.6 Flash, Kimi K3) ; (2) l’entrée en application, le **2 août 2026**, des obligations de transparence et des pouvoirs GPAI de l’AI Act européen.

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
| Coût agressif / open weight | Llama, Mistral, Nemotron | Qwen, Kimi K3, GLM-5.2, DeepSeek V4 | Contrôle, portabilité, prix bas | Licence, sécurité, capacité GPU, DPA/UE à confirmer |

## Ce qui a changé depuis le 17 juillet

Changements significatifs confirmés. La liste des 20 écosystèmes est inchangée ; les faits marquants vérifiés sont :

- **OpenAI GPT-5.6** (9 juillet) : nouvelle famille Sol (5/30 USD), Terra (2,50/15), Luna (1/6). GPT-5.5 reste disponible (raisonnement, 1,05 M) [S61].
- **Anthropic Opus 5** (24 juillet) à 5/25 USD, ~moitié du prix de **Fable 5** (10/50, modèle le plus capable, palier « Mythos »). Opus 5 gagnerait 7 des 8 évaluations quantifiées face à Fable 5. Sonnet 5 : lancement 2/10 jusqu’au 31 août, puis 3/15 ; Haiku 4.5 à 1/5 [S62–S63].
- **Google Gemini 3.6 Flash** (21 juillet) à 1,50/7,50 USD (-17 % sortie vs 3.5 Flash) ; Gemini 3.1 Pro 2/12 (>200 k : 4/18) [S64].
- **xAI Grok 4.5** (8 juillet) confirmé à 2/6 sur 500 k ; Grok 4.3 économique en 1 M à 1,25/2,50 [S65].
- **Mistral** : grille observée nettement plus basse (Large 3 0,50/1,50 ; Medium 3.5 1,50/7,50 ; Small 4 0,15/0,60) — **à revérifier officiellement** [S66].
- **Kimi K3** (16 juillet) : ~2,8 T de paramètres, plus grand modèle open weight publié, niveau ~Fable 5 pour une fraction du coût ; désormais mesuré indépendamment et à l’origine d’une secousse de marché. **DeepSeek V4** et **GLM-5.2** renforcent la pression prix chinoise [S67–S69].
- **AI Act** : le **2 août 2026**, obligations de transparence (article 50), pouvoirs GPAI et surveillance du marché entrent en application ; sanctions jusqu’au plus élevé de 15 M€ ou 3 % du CA mondial. Le Digital Omnibus (7 mai) a différé une partie du haut risque mais maintient le 2 août [S70–S71].

## Prix et Belgique

Taux indicatifs BCE : **1 EUR = 1,1367 USD** (28 juillet 2026) ; **CNY ≈ 7,74** (mi-juillet) [S72]. Donc 20 USD ≈ 17,60 EUR HT ; avec 21 % de TVA belge, ≈ 21,30 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA ; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API ; OpenAI publie des contrôles de résidence européenne pour certains clients/services. Pour **DeepSeek, Qwen, Kimi et GLM**, la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données **restent à confirmer** avant tout usage de données personnelles ou confidentielles — la baisse de prix ne change rien à cette réserve.

## Capacités : ne pas confondre les produits

- **Modèle** : moteur probabiliste, par exemple GPT-5.6, Claude Opus 5, Gemini 3.6 Flash ou Kimi K3.
- **Application** : ChatGPT, Claude, Gemini, Grok, Le Chat, Perplexity ; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API** : endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code** : Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome** : boucle qui planifie, appelle des outils, modifie des fichiers et peut agir ; coût et risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle : finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire.

**Action immédiate — 2 août 2026.** Si vous exploitez un chatbot, générez des images/vidéos/textes par IA ou publiez des deepfakes, vérifiez avant cette date : divulgation claire à l’utilisateur qu’il interagit avec une IA, et marquage des contenus générés. Les systèmes préexistants disposent d’un sursis jusqu’au 2 décembre 2026 pour le marquage lisible par machine [S70–S71]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement : OpenAI API n’entraîne pas par défaut ; GitHub permet l’opt-out individuel et n’entraîne pas sur Business/Enterprise ; Cursor Privacy Mode exclut l’entraînement. Contrats, régions et rétentions se vérifient produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production (le cycle de juillet montre à quelle vitesse un modèle de tête est remplacé) et mettre en place un fournisseur de secours.
5. Mettre en conformité transparence/marquage IA avant le 2 août 2026.
6. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement le prix par jeton.

Détails et sources : [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md), [historique](historique.md).
