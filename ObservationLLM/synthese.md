# Synthèse décisionnelle — 26 juillet 2026

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

Édition à **changements significatifs** (voir [historique](historique.md) pour le détail et les niveaux de confiance). Faits marquants:

- **OpenAI** lance la série **GPT-5.6** avec un nouveau nommage: le nombre = génération, **Sol / Terra / Luna** = paliers de capacité. Préversion le 9 juillet, GA en cours de déploiement (déjà GA sur Bedrock ~13 juillet, US uniquement). Prix par million: Sol 5/30, Terra 2,50/15, Luna 1/6 USD. L’édition du 17 juillet n’avait pas capté cette gamme [S61–S62, S67]. **Confiance élevée.**
- **Anthropic** place **Claude Opus 5** en tête (5/0,50/25 USD, 1 M de contexte), plus Fable 5 et Mythos 5 en disponibilité limitée; **Sonnet 5** en prix d’introduction 2/0,20/10 USD jusqu’au 31 août, puis 3/0,30/15 USD. Fast mode documenté [S63]. **Confiance élevée.**
- **Google** ajoute **Gemini 3.6 Flash** (1,50/7,50 USD, soit une baisse de fait en sortie vs 9 USD), **3.5 Flash-Lite** (0,30/2,50 USD) et **3.5 Flash Cyber** [S64]. **Élevée sur l’existence, moyenne sur les décimales.**
- **IBM** publie **Granite 4.1** (modèles denses 3B/8B/30B, Apache 2.0, sur watsonx et Hugging Face) [S65]. **Élevée.**
- **Microsoft** annonce une **hausse tarifaire des déploiements EU Data Zone/régionaux hors US au 1er septembre 2026** et une nouvelle zone APAC — à budgéter pour la résidence UE [S66]. **Moyenne-élevée.**
- **DeepSeek** lance **V4** (flash/pro, 1 M de contexte) et **retire chat/reasoner après le 24 juillet** [S68]; **Alibaba** ouvre **Qwen3.8-Max-Preview** (Token Plan) [S69]; **Moonshot** a livré **Kimi K3** (1 M de contexte; 0,30/3/15 USD) [S70]. **Moyenne** (pages officielles non lues directement).
- **AI Act**: lignes directrices finales de l’**article 50** (transparence) publiées vers le 20 juillet, avant l’application du **2 août 2026** [S72].
- **Sans changement**: xAI (Grok 4.5), Mistral, Meta, Hugging Face, AWS, NVIDIA, Cohere, GitHub Copilot, Cursor (nouveauté non tarifaire), Replit, Perplexity, Z.AI/GLM (promo seulement).

## Prix et Belgique

Taux de référence BCE du **24 juillet 2026: 1 EUR = 1,1377 USD = 7,7047 CNY** (l’euro s’est légèrement affaibli vs le 14 juillet: 1,1405 / 7,7327) [S73]. Donc 20 USD ≈ 17,58 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,27 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 (Sol/Terra/Luna), Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Le **2 août 2026** reste un jalon important de transparence; la Commission a publié vers le 20 juillet 2026 ses **lignes directrices finales sur l’article 50** (transparence des systèmes interactifs et marquage des contenus générés), en amont de cette date [S72]. Les dates des systèmes à haut risque ont été révisées en 2026 [S57–S59]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
