# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié. Entrées en ordre antéchronologique (la plus récente en premier).

## 2026-08-03 — Deuxième édition (mise à jour)

**Verdict.** Exécution avec **changements significatifs**. Plusieurs modèles frontières, baisses de prix et un jalon réglementaire majeur sont intervenus entre le 17 juillet et le 3 août 2026. Le périmètre reste **exactement 20 écosystèmes**, sans entrée ni sortie. Aucun candidat de la liste de veille (MiniMax, Databricks, Oracle OCI, Salesforce, orchestrateurs indépendants) n’a franchi le seuil d’un signal durable justifiant un remplacement.

**Changement réglementaire majeur.**

- **AI Act — le jalon du 2 août 2026 est entré en application** [S57–S59]. Il était « à venir » à la dernière exécution ; il est désormais **en vigueur**. Les pouvoirs de supervision et de sanction de la Commission / du Bureau de l’IA sur les modèles GPAI sont actifs, avec des amendes pouvant atteindre **15 M€ ou 3 % du chiffre d’affaires mondial** (art. 101). Les obligations de transparence de l’**article 50** (divulgation des chatbots, marquage lisible par machine des contenus générés, étiquetage des hypertrucages) atteignent leur point d’application principal. Les GPAI mis sur le marché avant le 2 août 2025 disposent jusqu’au **2 août 2027** pour se conformer. Les systèmes à haut risque restent repoussés (décembre 2027 / août 2028). Une période de tolérance autour du **2 décembre 2026** pour les systèmes préexistants est évoquée mais **n’a pas pu être confirmée mot à mot** sur la FAQ primaire de la Commission.
- **EDPB, 8 juillet 2026** : adoption de lignes directrices sur l’anonymisation et sur le web scraping pour l’IA générative, **en consultation publique jusqu’au 30 octobre 2026** ; des lignes directrices conjointes EDPB–Commission sur l’articulation RGPD / AI Act sont attendues fin 2026 [S74]. Aucune publication propre à l’Autorité de protection des données belge n’a été identifiée sur la période.

**Modèles, capacités et prix (changements vérifiés sur la période).**

- **OpenAI** : correction de base — **GPT-5.6 (famille Sol > Terra > Luna)** est le modèle phare depuis le 9 juillet 2026 ; l’ancienne base « GPT-5.5 phare » est **caduque** [S02]. **Baisses de prix du 30 juillet 2026** : Terra −20 % (≈ 2/12 USD), **Luna −80 %** (≈ 0,20/1,20 USD) ; Sol inchangé (5/30 USD) [S61]. Résidence UE : surcoût de +10 % pour les modèles publiés à partir du 5 mars 2026, dont GPT-5.6 [S62].
- **Anthropic** : **Claude Opus 5 lancé le 24 juillet 2026** (5/25 USD, cache-read 0,50, batch 2,50/12,50), nouveau modèle par défaut de Claude Max, molette d’effort, connaissance à mai 2026, couvert par le mode Fast [S06, S08, S75]. Fable 5 / Mythos 5 (9 juin 2026) précèdent la base. **À surveiller** : le prix de lancement de Sonnet 5 (2/10 USD) passe à **3/15 USD le 1er septembre 2026**.
- **Google** : **Gemini 3.6 Flash lancé le 21 juillet 2026** (1,50/7,50 USD ; sortie abaissée de 9 à 7,50), plus **Gemini 3.5 Flash-Lite** (~0,30/2,50) et **Gemini 3.5 Flash Cyber** (sécurité) [S64]. Le raisonnement phare reste Gemini 3.1 Pro (payant). **Gemini 4 « teasé », non publié**.
- **AWS Bedrock** : répercussion des baisses GPT-5.6 le 30 juillet 2026 (Luna −80 %, Terra −20 %) [S65] ; métadonnées produit Bedrock standardisées dans le CUR le 20 juillet 2026 [S66]. Promo Claude Sonnet 5 (2/10 USD) sur Bedrock jusqu’au 31 août 2026, puis 3/15.
- **DeepSeek** : **V4-Flash officiellement publié le 31 juillet 2026** (≈ 0,14 / 0,0028 cache / 0,28 USD), auparavant en préversion ; **retrait des alias `deepseek-chat`/`deepseek-reasoner` le 24 juillet 2026** ; tarification heures pleines/creuses **annoncée mais pas encore active** [S25–S26, S67]. V4-Pro reste en préversion.
- **Alibaba/Qwen** : **Qwen3.8-Max-Preview** (19 juillet 2026, préversion) et **Qwen-Audio-3.0-TTS** (20 juillet 2026) [S68]. Phare GA toujours Qwen3.7-Max.
- **NVIDIA** : **extension de l’Agent Toolkit avec PhysicsNeMo et CUDA-X** le 27 juillet 2026 [S69]. Nemotron 3 (Nano/Super/Ultra) inchangé.
- **Cursor** : **lancement de Cursor Router** (~22 juillet 2026), routage automatique par requête en modes Intelligence/Balance/Cost, d’abord pour Teams/Enterprise [S70]. La politique de données reste la version du 15 juillet 2026 (pas de nouveau changement).
- **Replit** : **baisses de prix Cloud le 1er août 2026** ; changelog du 24 juillet 2026 (intégration Slack de l’Agent, Agent Customization, refonte mobile) [S71]. Core à 20 USD (au lieu de 25).
- **Moonshot/Kimi** : **poids ouverts de Kimi K3 publiés le 27 juillet 2026** (MoE 2,8 T / ~104 B actifs, contexte 1 M, multimodal, architecture KDA+AttnRes), API 3 / 0,30 cache / 15 USD, sous une **« Kimi K3 License » propre** [S48, S51, S60, S72]. Ceci **résout la question ouverte** de la dernière exécution (capacités/poids/prix de K3 alors non confirmés).
- **GitHub Copilot** : changement mineur — **retrait de l’app Copilot Billing Preview le 3 août 2026**, visibilité des dépenses migrée dans les paramètres de facturation [S73]. Prix inchangés (Pro 10, Pro+ 39, Max 100 ; Business 19, Enterprise 39 USD).

**Sans changement matériel sur la période.** Microsoft (les nouveaux SKU/promos datent du 1er juillet), Meta (Llama 4 Scout/Maverick, Behemoth non publié), Mistral (Medium 3.5, Large, Large 3 ouvert), xAI (Grok 4.5 reste phare ; Grok 4.6/4.7 = feuille de route Musk du 28 juillet **non vérifiée**, non livrée), IBM (Granite 4.1 et watsonx.ai v2.4 précèdent la base), Perplexity (mises à jour API de juillet non datables précisément après le 17), Hugging Face, Cohere (conflit non résolu sur le contexte de Command A+ : 128 k vs 256 k), Z.AI/GLM (GLM-5.2 reste phare).

**Prix et change.** Nouvelle base de conversion : **1 EUR = 1,1485 USD** (taux de référence BCE du 31 juillet 2026, obtenu par recherche, accès direct BCE bloqué) [S55]. **EUR/CNY ≈ 7,70** (fin juillet, **approximatif**, non confirmé comme taux de référence BCE exact). L’euro s’est **renforcé** face au dollar (1,1405 → 1,1485) et légèrement affaibli face au yuan (7,7327 → ~7,70). **TVA belge standard : 21 %, inchangée** [S56]. Les estimations EUR des fichiers ont été recalculées avec 1,1485.

**Bonnes pratiques de développement.** Pas de rupture sur la période : consolidation continue autour des défenses contre l’injection de prompt, du durcissement MCP (serveurs tiers traités comme dépendances : revus, épinglés, audités), des sorties structurées comme contrôle de fiabilité et de sûreté, et du triptyque évaluations + garde-fous + mémoire. Nouveau point transversal ajouté : l’entrée en vigueur de l’article 50 impose désormais des obligations concrètes de transparence utilisateur (divulgation, marquage/étiquetage des contenus générés).

**Limite de vérification de cette exécution.** L’accès réseau **direct** à la plupart des domaines officiels a été **bloqué par la politique de l’environnement** (403 proxy). Seuls `github.com` et `platform.claude.com` ont été lus directement ; le reste a été vérifié par recherche restreinte aux domaines officiels, recoupée par des sources secondaires. Les chiffres n’ont donc pas été lus sur les grilles officielles ligne à ligne. Détails et éléments non confirmés : voir [sources.md](sources.md).

**Décisions humaines en attente (rappel).** Choisir deux fournisseurs pour un pilote de quatre semaines, trois tâches réelles, une enveloppe de coût et un niveau de sensibilité des données ; interdire secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.

## 2026-07-17 — Édition initiale

**Périmètre.** Création de l’observatoire avec exactement 20 écosystèmes: OpenAI, Anthropic, Google, Microsoft, AWS, Meta, Mistral, xAI, DeepSeek, Alibaba/Qwen, NVIDIA, Cohere, IBM, GitHub Copilot, Perplexity, Cursor, Replit, Hugging Face, Moonshot/Kimi et Z.AI/GLM. Aucune édition précédente n’existait dans ObservationLLM; donc aucune sortie.

**Modèles et capacités.** État initial établi autour de GPT-5.5, Claude Opus 4.8/Sonnet 5, Gemini 3.5 Flash, Grok 4.5, Mistral Medium 3.5/Large, Qwen 3.7, Nemotron 3, Command A+, Granite 4, Kimi K3/K2.7 et GLM-5.2. Distinction systématique entre modèle, application, API, assistant code et agent. Les fenêtres de contexte ne sont comparées qu’avec la version et la source.

**Prix.** Base de conversion fixée aux taux BCE du 14 juillet 2026: 1 EUR = 1,1405 USD = 7,7327 CNY. TVA belge standard 21 %. Prix API représentatifs documentés avec entrée, sortie, cache, batch/classes et outils lorsque publiés. Prix belges au checkout non stables marqués à confirmer.

**Changements récents significatifs.**

- GPT-5.5: 1,05 M de contexte, 5/0,50/30 USD par million entrée/cache/sortie; multiplicateur long contexte au-delà de 272 k [S01–S02].
- Anthropic: Opus 4.8 présent dans la grille datée du 27 mai 2026; Sonnet 5 bénéficie d’un prix de lancement sur certaines plateformes; batch -50 % [S06–S08].
- Gemini 3.5 Flash: 1,50/9 USD standard; batch/flex, priority et recherche tarifés [S09–S10].
- Grok 4.5: 500 k, grille court/long contexte et nouveaux tarifs média/voix [S22–S23].
- GitHub Copilot: plans Pro/Pro+/Max à crédits IA et facturation variable selon agent/modèle; Actions consommées par certaines revues depuis juin 2026 [S37–S38].
- Cursor: politique de données mise à jour le 15 juillet 2026, Privacy Mode et ZDR détaillés [S42].
- Kimi K3: annonce du 16 juillet 2026; capacités encore à confirmer indépendamment [S60].
- AI Act: transparence en août 2026; calendrier haut risque modifié en 2026 [S57–S59].

**Sécurité et disponibilité.** OpenAI API sans entraînement par défaut et options de résidence EEE pour services éligibles; Gemini API payante disponible en EEE et données payantes exclues de l’amélioration selon la grille; GitHub B/E sans entraînement; Cursor Privacy Mode sans entraînement [S03, S09–S11, S37, S42]. Pour DeepSeek, Qwen, Kimi et GLM, disponibilité belge, DPA, région, facture EUR/TVA et rétention restent à confirmer avant données sensibles.

**Développement.** Guide initial ajouté: modèles épinglés, schémas stricts, RAG avec ACL/citations, évaluations FR/NL, observabilité redacted, cache/batch, retries bornés, sandbox, budgets et validation humaine. Particularités des 20 acteurs documentées.

**Fichiers créés.** README.md, synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md et historique.md.

**Limites / décisions humaines.** Les checkouts belges et contrats entreprise n’ont pas été simulés. Choisir deux fournisseurs pour un pilote, trois tâches réelles, une enveloppe de coût et un niveau de sensibilité des données. Aucun fichier Word/Excel n’a été vérifié: le dépôt a migré ces livrables vers Markdown le 16 juillet 2026.
