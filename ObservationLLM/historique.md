# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-05 — Deuxième édition (mise à jour mensuelle)

**Verdict.** Changements **significatifs** détectés depuis le 17 juillet: nouvelles têtes de gamme chez presque tous les acteurs, un virage stratégique de Meta vers le propriétaire, un changement d’API cassant chez DeepSeek, et l’entrée en vigueur d’un jalon majeur de l’AI Act. Les 20 écosystèmes restent identiques (aucune entrée/sortie).

**Périmètre et méthode.** Recherche répartie sur cinq grappes (labos frontière, cloud entreprise, UE/open weight, outils code, modèles chinois + réglementaire/change). **Limite importante de cette édition**: la politique réseau a bloqué l’accès direct (HTTP 403) à la plupart des domaines officiels et institutionnels. Seules les grilles Anthropic (S07) et Google/Vertex (S09) ont été lues directement; le reste provient de restitutions de recherche des pages officielles et de sources indépendantes datées. Les valeurs non confirmées sur source primaire sont marquées « à confirmer » dans tous les fichiers.

**Modèles — nouvelles têtes de gamme.**

- **OpenAI:** famille **GPT-5.6 (Sol / Terra / Luna)** remplace GPT-5.5. Sol flagship 5/30 USD, 1,05 M. **Baisse du 30 juillet:** Terra -20 % (2/12), Luna -80 % (0,20/1,20). Nouveautés: Programmatic Tool Calling, points de rupture de cache explicites (min 30 min), Fast mode Sol [S01–S05].
- **Anthropic:** **Opus 5** flagship (5/25, 1 M); paliers premium **Fable 5 et Mythos 5** (10/50). **Sonnet 5 en prix de lancement 2/10 jusqu’au 31 août, puis 3/15 le 1er septembre.** Nouveau **tokenizer 4.7+ (~+30 % jetons)**. Résidence `inference_geo:"us"` ×1,1 [S07].
- **Google:** **Gemini 3.6 Flash** (1,50/7,50, sortie moins chère que 3.5 Flash), **3.5 Flash-Lite** (0,30/2,50) et **3.1 Pro Preview**. Endpoints non-global +10 % depuis le 1er juillet [S09].
- **Meta:** virage vers le propriétaire — **Muse Spark** (API 1.1 à 1,25/4,25, OpenAI-compatible) devient la tête de gamme. **Llama 4 multimodal reste exclu des licenciés UE** par la licence [S18, S61–S63].
- **DeepSeek:** génération **V4** (V4-Pro 0,435/0,87; V4-Flash 0,14/0,28; 1 M). **Changement cassant:** endpoints V3.2 (`deepseek-chat`/`deepseek-reasoner`) retirés le 24 juillet; V4-Flash en beta le 31 juillet [S25, S64–S65].
- **Alibaba/Qwen:** **Qwen3.8-Max** (2/6, cache 0,25, 1 M) remplace 3.7 Max; premier Max à poids ouverts (publication ~10 août, à confirmer) [S27, S66].
- **Moonshot/Kimi:** **Kimi K3 désormais vérifiable** — poids ouverts publiés le 27 juillet, 3/15 USD, 1 M, meilleur indice open weight (AAII 57), licence propriétaire à paliers de revenus [S48–S51, S60].
- **Z.AI/GLM:** **GLM-5.2** confirmé flagship (1,40/4,40, poids MIT); contexte porté vers 1 M (à confirmer); palier Coding Max (~112 USD/mois) visible [S52–S54, S67].
- **Cursor** ajoute **Grok 4.5** au pool first-party; **GitHub Copilot** clarifie les crédits (base 1:1 + flex) et retire l’app Billing Preview le 3 août; **Perplexity** explicite les crédits grand public [S37–S39, S43].
- Sans changement significatif dans la fenêtre: **xAI** (Grok 4.5), **NVIDIA** (Nemotron 3), **Cohere** (Command A/A+), **IBM** (Granite 4 signés), **Replit**, **Hugging Face**.

**Prix et change.** Nouveaux taux BCE (miroirs, direct bloqué): **1 EUR = 1,1535 USD** (3 août) **= 8,1478 CNY** (5 août) [S55, S69]. L’euro s’est renforcé face au dollar et nettement face au yuan depuis le 17 juillet (baseline 1,1405 / 7,7327). Conversions recalculées dans tous les fichiers. **TVA belge standard: 21 % inchangée** [S56].

**Réglementaire — jalon AI Act.** Le **2 août 2026 est entré en vigueur**: obligations GPAI applicables et **transparence de l’article 50** (chatbots signalés, contenus IA marqués en lisible-machine, notice de reconnaissance d’émotions, étiquetage des deepfakes). Sanctions GPAI jusqu’à **15 M€ ou 3 % du CA mondial**. Carve-out: filigrane lisible-machine des systèmes déjà sur le marché jusqu’au 2 décembre 2026. En sens inverse, un **amendement du 16 juin 2026 reporte la plupart des obligations « haut risque » à décembre 2027 et août 2028** (à confirmer sur EUR-Lex) [S57–S59, S68].

**Sécurité et disponibilité.** Modèles chinois (DeepSeek, Qwen, Kimi, GLM): API directe **non conforme RGPD** (données en Chine/Singapour, pas de représentant UE clair) — voie propre = hébergement UE (Azure Foundry, Bedrock Frankfurt) ou auto-hébergement des poids ouverts (GLM-5.2 MIT est le plus simple). Meilleure souveraineté du panel: **Mistral** (Paris, SecNumCloud, EUR). **Llama 4 multimodal juridiquement bloqué pour les entités UE.** GPT-5.6 disponible en EU Data Zone sur Azure mais **US-only sur Bedrock**.

**Développement.** Ajout de bonnes pratiques transversales: isolation d’agent par dimensions (fichiers + réseau), traiter chaque serveur MCP comme une attribution IAM (OWASP MCP Top 10), développement piloté par l’évaluation avec épinglage prompt/modèle, verrouillage des actions irréversibles dans l’implémentation de l’outil (pas le prompt). Alertes de coût: nouveau tokenizer Anthropic (+30 %), hausse Sonnet 5 (1er sept.), retrait d’alias DeepSeek.

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md, historique.md.

**Limites / décisions humaines.** Blocage réseau des pages officielles: revalider les valeurs « à confirmer » (surtout prix OpenAI/xAI, contexte GLM-5.2, poids Qwen3.8-Max, taux BCE même-jour USD+CNY, dates AI Act haut risque sur EUR-Lex) avant tout engagement. Les checkouts belges et contrats entreprise n’ont pas été simulés.

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
