# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-26 — Deuxième édition (changements significatifs)

**Résumé.** Neuf jours après l’édition initiale, plusieurs mouvements notables sont confirmés. Contrairement à un cycle calme, cette édition enregistre des **changements significatifs** chez OpenAI, Anthropic, Google, IBM, Microsoft, DeepSeek, Alibaba/Qwen et Moonshot/Kimi, ainsi qu’une évolution réglementaire (AI Act, article 50) et un nouveau taux de change BCE. Les 20 écosystèmes restent inchangés; aucune entrée/sortie de la liste.

**Note de méthode et de fiabilité.** Lors de cette exécution, la plupart des pages officielles ont renvoyé HTTP 403 à la récupération directe (pages dynamiques/anti-bot). Seules les pages Anthropic et GitHub Copilot ont été lues directement. Les autres faits proviennent de recherches ciblées sur les domaines officiels (extraits d’index), ce qui plafonne la confiance à **MOYENNE** pour les décimales de prix non lues directement. Ces éléments sont marqués « à confirmer » et devront être revérifiés par lecture directe au prochain cycle. Confiance **ÉLEVÉE** pour: OpenAI GPT-5.6 (blog officiel), Anthropic (page lue + cohérence avec l’environnement d’exécution), IBM Granite 4.1 (blog recherche daté).

**Changements confirmés (fenêtre 2026-07-17 → 2026-07-26).**

- **OpenAI — nouvelle gamme GPT-5.6.** Série GPT-5.6 avec un nouveau schéma de nommage: le nombre marque la génération, **Sol / Terra / Luna** désignent des paliers de capacité durables. Préversion annoncée le 9 juillet 2026, disponibilité générale « dans les prochaines semaines »; déjà GA sur AWS Bedrock (~13 juillet, régions US uniquement). Prix par million: **Sol 5/30, Terra 2,50/15, Luna 1/6 USD** (entrée/sortie). Terra ≈ performance de GPT-5.5 pour 2× moins cher. L’édition initiale du 17 juillet n’avait pas capté cette préversion; elle est donc consignée ici [S61–S62, S67]. ÉLEVÉE.
- **Anthropic — Opus 5 en tête de gamme.** La grille officielle liste désormais **Claude Opus 5** comme modèle phare (5/0,50/25 USD entrée/cache/sortie, 1 M de contexte), plus **Fable 5** et **Mythos 5** en disponibilité limitée (10/1/50 USD). **Sonnet 5** bénéficie d’un prix d’introduction **2/0,20/10 USD jusqu’au 31 août 2026**, puis **3/0,30/15 USD au 1er septembre 2026**. Opus 4.8 reste disponible au même tarif. **Fast mode** (aperçu recherche) documenté pour Opus 5/Opus 4.8 à 10/50 USD, hors Batch [S63]. ÉLEVÉE.
- **Google — nouvelle gamme Flash.** Annonce vers le 22–23 juillet de **Gemini 3.6 Flash** (1,50/7,50 USD entrée/sortie, ~17 % de jetons de sortie en moins), **Gemini 3.5 Flash-Lite** (0,30/2,50 USD) et **Gemini 3.5 Flash Cyber** (variante sécurité). Le passage de 9 → 7,50 USD en sortie constitue une baisse de fait sur le palier Flash. Gemini 3.5 Pro non GA; pas de Gemini 4 annoncé [S64]. ÉLEVÉE (existence) / MOYENNE (décimales, page prix non lue directement).
- **IBM — Granite 4.1.** Nouvelle famille **dense** decoder-only 3B/8B/30B (base + instruct), plus mises à jour speech/vision/embeddings/Guardian. Licence **Apache 2.0**, disponible sur watsonx et Hugging Face. IBM annonce le 4.1 8B au niveau du 4.0 32B MoE. Tarif par jeton du 4.1 non publié séparément; référence par jeton conservée sur Granite 4 h small [S65]. ÉLEVÉE (release datée 2026-07-22).
- **Microsoft — hausse tarifaire zones de données.** Mise à jour de la tarification de déploiement Foundry: **hausse pour EU Data Zone et déploiements régionaux hors US, effective le 1er septembre 2026**, et nouvelle **APAC Data Zone**. En Standard/PAYG, la hausse ne vise que les modèles lancés à partir du 1er septembre; en Provisioned Throughput, elle vise tous les clients EU Data Zone/régionaux hors US. Élément **directement pertinent** pour un résident belge choisissant la résidence UE [S66]. MOYENNE-ÉLEVÉE.
- **DeepSeek — V4.** Lancement de **deepseek-v4-flash** et **deepseek-v4-pro** (1 M de contexte, modes Thinking/Non-Thinking). Les anciens endpoints `deepseek-chat`/`deepseek-reasoner` (V3.2) sont **retirés après le 24 juillet 2026 15:59 UTC**. Prix indicatifs USD/million: V4-pro 1,74/3,48 (cache 0,145); V4-flash 0,14/0,28 (cache 0,028). Contexte et structure de prix modifiés vs base 64 k [S68]. MOYENNE.
- **Alibaba/Qwen — Qwen3.8-Max-Preview.** Nouveau palier phare en préversion, réservé au « Token Plan » par abonnement (à partir de ~6 USD/mois), tarif par jeton autonome non publié. La page internationale Model Studio affiche Qwen3-Max/3.7-Max en **USD** par paliers d’entrée; la console Chine reste en CNY [S69]. MOYENNE.
- **Moonshot/Kimi — K3 livré.** Kimi K3 (annoncé le 16 juillet) est désormais **livré** (~23 juillet) avec specs et prix: 2,8 T de paramètres, vision native, 1 M de contexte, orienté code/agents long-horizon. Prix USD/million: **0,30 cache / 3,00 entrée / 15,00 sortie** [S70]. MOYENNE-ÉLEVÉE.
- **AI Act — lignes directrices article 50.** La Commission a publié (~20 juillet 2026) ses **lignes directrices finales sur les obligations de transparence de l’article 50** (systèmes IA interactifs, marquage des contenus générés), en amont de l’application du **2 août 2026** [S72]. MOYENNE.
- **Change BCE.** Nouveau taux de référence au **24 juillet 2026: 1 EUR = 1,1377 USD = 7,7047 CNY** (l’euro s’est légèrement affaibli vs 14 juillet: 1,1405 / 7,7327). TVA belge standard **21 %** inchangée [S73]. MOYENNE-ÉLEVÉE.

**Sans changement dans la fenêtre.** xAI (Grok 4.5 reste le dernier modèle), Mistral (Large 3 / Medium 3.5 inchangés; voir correction de base ci-dessous), Meta (Llama 4), Hugging Face, AWS Bedrock (la GA GPT-5.6 date du ~13 juillet, juste avant la fenêtre), NVIDIA (Nemotron 3), Cohere (Command A+), GitHub Copilot, Cursor (seule nouveauté: mode « Auto » via Cursor Router le 22 juillet, non tarifaire), Replit, Perplexity (aucun changement daté confirmé), Z.AI/GLM (GLM-5.2 déjà en tête; promo Coding Plan jusqu’au 31 juillet, sans changement de prix catalogue).

**Correction de base (qualité de donnée, pas un changement du cycle).** Les recherches sur docs.mistral.ai indiquent le généraliste phare **Mistral Large 3** à ~0,5/1,5 USD (modèle de décembre 2025), et non « ~2/6 USD » comme noté au 17 juillet. À revérifier par lecture directe; corrigé prudemment dans le comparatif avec mention « à confirmer ».

**À revérifier au prochain cycle (lecture directe requise).** Décimales exactes: DeepSeek V4 (api-docs.deepseek.com/quick_start/pricing/), Qwen3.8/3.7-Max (alibabacloud.com Model Studio), GLM-5.2 (docs.z.ai/guides/overview/pricing), Kimi K3 (platform.moonshot.ai), grille Gemini (ai.google.dev), tarifs Grok long contexte/cache (docs.x.ai). Statut de GA effective de GPT-5.6 et disponibilité UE (Bedrock/Foundry).

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md et cette entrée.

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
