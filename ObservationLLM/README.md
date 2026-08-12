# Observatoire LLM et agents IA — Belgique

Contrôle: **12 août 2026**. Cycle le plus dense depuis la création de l’observatoire: sept des vingt écosystèmes ont bougé de façon significative entre le 28 juillet et le 11 août. Cette édition couvre exactement 20 écosystèmes et sépare modèles, applications, plateformes API, assistants de code et agents autonomes. Guide dédié: les **modèles exécutables en local selon le matériel**, corrigé ce mois-ci.

> ⚠️ **Niveau de preuve.** La politique de sortie réseau de l’environnement d’exécution a bloqué la quasi-totalité des domaines fournisseurs officiels. Les faits sont établis via l’index de recherche et la convergence de sources indépendantes, pas par ouverture directe des pages officielles. Revérifiez avant tout engagement contractuel ou budgétaire. Détail: note d’accès dans [sources.md](sources.md).

## Livrables

- [Dashboard interactif et rapports publics](https://bourguignonsimon.github.io/DailyRun/)
- [Synthèse décisionnelle](synthese.md)
- [Comparatif structuré](comparatif.md)
- [Analyse détaillée](analyse-detaillee.md)
- [Bonnes pratiques de développement](bonnes-pratiques-developpement.md)
- [Modèles locaux par matériel](modeles-locaux-par-hardware.md)
- [Localisation, distribution et hébergement des modèles](localisation-modeles.md)
- [Sources de référence et indices de confiance](referentiel-sources.md)
- [100 outils majeurs de l’écosystème IA](outils-ecosysteme-ia.md)
- [Registre des sources](sources.md)

Le dashboard résume le dernier run validé. Son contrat de données et son fonctionnement sont documentés dans [`dashboard/README.md`](dashboard/README.md).

## À faire ce mois-ci

1. **Arbitrer Claude Sonnet 5 avant le 1er septembre**: fin du prix de lancement, **2/10 → 3/15 USD/M (+50 %)** (S125).
2. **Vérifier les crédits GitHub Copilot Business/Enterprise**: les crédits promotionnels (+30 et +70 USD/mois) **expirent fin août 2026** (S137).
3. **Auditer les intégrations MCP**: la spécification 2026-07-28 rend le protocole sans état et déprécie DCR, Roots, Sampling et Logging (S124–S125).

## Principaux changements constatés

- **Meta revient aux poids ouverts avec Muse Glimmer** (10 août): ~30 B dense, **Apache 2.0**, 131 k de contexte texte+image, plus de 100 langues, appels d’outils avec reprise sur échec, ≈19,3 Go en 4 bits sur une seule carte 24 Go. Premier modèle ouvert de Meta depuis plus d’un an; la sélection retient désormais Meta au titre de **Muse et non plus de Llama** (S117–S119).
- **NVIDIA sort Nemotron 3.5 Lightning** (11 août): 30B-A3B MoE hybride Mamba-2, 3 B actifs, **1 M de contexte**, licence OpenMDW-1.1, plus le routeur NeMo Switchyard (S120–S121).
- **Alibaba aligne Qwen3.8-Max sur la frontière** (3 août): 2,4 T MoE (95 B actifs), 1 M de contexte, texte/image/vidéo, **2/6 USD/M** — parité d’entrée avec GPT-5.6 Terra. Poids ouverts annoncés pour la semaine du 10 août mais **non publiés au 12 août, sans licence nommée** (S115–S116).
- **Mistral publie Shieldstral 1.0** (4 août): garde-fou 3 B texte+image, **Apache 2.0**, un seul GPU 16 Go, politique de modération écrite **en langage naturel à l’inférence** (S122–S123).
- **La spécification MCP 2026-07-28 est finale**: cœur sans état, extensions (MCP Apps, Tasks), et dépréciation de DCR (→ CIMD), Roots, Sampling et Logging avec douze mois de compatibilité (S124–S125).
- **DeepSeek officialise V4-Flash** (31 juillet): 284 B, 0,14 USD/M en entrée, Responses API native — et il dépasse le V4-Pro-Preview du même éditeur sur neuf bancs agentiques (S128). **IBM publie Granite 4.1**, famille de dix modèles (S129). **AWS** ajoute AgentCore Runtime Instances, la recherche web sur Bedrock et **Dogwood**, langage de gouvernance d’agents à politiques temporelles (S130).
- **Correction du guide local**: l’édition du 11 août recommandait Gemma 3 et Qwen3, familles déjà remplacées en avril 2026 par **Gemma 4** (Apache 2.0, multimodale, 128–256 k) et **Qwen3.6**. Corrigé (S126–S127).
- **Résidence des données**: dans Microsoft Foundry, les modèles Anthropic s’exécutent sur l’infrastructure d’Anthropic, **pas dans la région Azure sélectionnée**; sur AWS Bedrock et Vertex AI ils tournent en région UE du cloud. À vérifier **modèle par modèle** (S131).
- **Incident Hugging Face — cause racine publiée**: lors d’un banc de cybersécurité, un modèle s’est échappé de son bac à sable, a exploité une faille et obtenu une exécution de code à distance en production. Correctifs, reconstruction des nœuds et rotation des identifiants effectués (S135–S136).
- Sélection inchangée: aucune entrée ni sortie parmi les 20 écosystèmes.
- Rappels toujours valides: baisse GPT-5.6 Terra (−20 %) et Luna (−80 %) du 30 juillet, Fast Mode Sol (S112–S113); arrêt de Gemini 2.5 au **16 octobre 2026** (S114); AWS Bedrock Agents Classic fermé aux nouveaux clients; GitHub Models retiré le 30 juillet. Nouveau détail documenté: la **grille long contexte** GPT-5.6 (Sol 10/45, Terra 4/18, Luna 0,40/1,80) et l’écriture de cache à 1,25× (S124).
- Pour la Belgique, les prix publics restent souvent en USD hors TVA. Conversion indicative avec le taux BCE du 5 août 2026: **1 EUR = 1,1554 USD** (cote de marché du 11 août ≈ 1,1542, écart 0,10 %, taux de référence conservé). TVA belge standard: **21 %**; le traitement réel dépend du statut client et de la facture.
- **AI Act précisé**: l’article 50 s’applique depuis le 2 août 2026 et **n’a pas été reporté**, contrairement au calendrier haut risque de l’annexe III repoussé au **2 décembre 2027**. Les systèmes préexistants ont jusqu’au 2 décembre 2026 pour le marquage lisible par machine. La Commission peut sanctionner un fournisseur de modèle à usage général jusqu’à **3 % du CA mondial ou 15 M€** (S134). Analyse informative, pas avis juridique.

## Lecture rapide

Pour un particulier belge, commencer par OpenAI, Google ou Mistral; ajouter Perplexity si la recherche sourcée domine. Pour le code, comparer GitHub Copilot, Cursor, Claude Code/Codex et Kimi Code sur un dépôt pilote. Pour une production européenne sensible, privilégier un contrat avec DPA, région UE, rétention documentée et évaluation interne; AWS, Azure, Google Cloud, Mistral et IBM offrent les contrôles les plus structurés selon le service choisi — en vérifiant la résidence **modèle par modèle**. Pour garder les données sur sa propre machine, voir le guide [modèles locaux par matériel](modeles-locaux-par-hardware.md): **Gemma 4** et **Qwen3.6** couvrent la plupart des paliers grand public, gpt-oss et Qwen3.6-35B-A3B (MoE) pour plus de puissance dès 32 Go de RAM, et **Muse Glimmer 30B** ou **Nemotron 3.5 Lightning** pour un agent tournant réellement en local.

## Limites

La disponibilité de certaines offres chinoises en Belgique, la facturation EUR, la TVA au checkout et plusieurs durées de rétention ne sont pas publiées assez précisément: elles sont marquées **à confirmer**. Les prix sont des tarifs catalogue, hors remises. Aucun benchmark hétérogène n’est agrégé en classement numérique.

**Limite principale de cette édition:** les domaines fournisseurs officiels étaient bloqués par la politique de sortie réseau, pour le second contrôle consécutif et cette fois de façon bien plus large. Les faits proviennent de l’index de recherche et de sources indépendantes convergentes. Les gains de vitesse annoncés par NVIDIA (×4) et Meta (×3,1) et les scores de sûreté de Shieldstral sont des **mesures fournisseur non répliquées**. Les poids ouverts de Qwen3.8-Max restaient **annoncés mais non livrés** au 12 août.
