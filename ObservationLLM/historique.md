# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-24 — Deuxième exécution (changements détectés)

**Résumé.** Une semaine après l’édition initiale, plusieurs mouvements significatifs sont observés, surtout côté modèles frontière et outils de code, plus une échéance réglementaire imminente. Aucun des 20 écosystèmes n’est retiré ni ajouté; la liste reste plafonnée à 20.

**Fiabilité de cette exécution (important).** La politique d’egress du réseau a bloqué l’accès direct (WebFetch) à la plupart des domaines officiels (openai.com, ai.google.dev, docs.x.ai, api-docs.deepseek.com, docs.z.ai, help.aliyun.com, platform.moonshot.ai, cursor.com, github.blog, replit.com, huggingface.co, docs.perplexity.ai, europa.eu, ecb.europa.eu, finance.belgium.be, ainsi que les pages AWS/Mistral/Cohere/IBM). Le proxy renvoie 403 sur CONNECT: il s’agit d’un refus de politique organisationnelle, non contourné. La vérification a donc reposé sur la recherche web restreinte aux domaines officiels. Ont pu être lues directement: les pages Anthropic (platform.claude.com), la page de prix Microsoft 365 Copilot, et github.com/features/copilot/plans. **Les faits issus uniquement de la recherche sont marqués [recherche] ou [secondaire] ci-dessous et doivent être revérifiés sur la source primaire quand l’accès direct sera rétabli.**

**Modèles frontière.**

- **OpenAI — GPT-5.6 (Sol/Terra/Luna).** Nouvelle famille; GPT-5.6 Sol devient le modèle phare au-dessus de GPT-5.5, déployé sur ChatGPT, Codex et l’API. Sol: contexte 1,05 M, sortie max 128 k, prix affichés 5 USD entrée / 30 USD sortie par million (identiques à GPT-5.5). GPT-5.5 reste disponible; GPT-5.5 Instant reste le défaut quotidien de ChatGPT. Aperçu daté du 9 juillet; la date exacte de disponibilité générale n’a pas pu être fixée strictement dans la fenêtre 17→24 juillet. [recherche, domaines officiels; pages openai.com bloquées à la lecture directe]
- **Google — Gemini 3.6 Flash (GA).** Annoncé vers le 21 juillet; sortie ramenée à 7,50 USD/M (contre 9 USD/M pour 3.5 Flash), entrée 1,50 USD/M, contexte 1 M. Ajout de **Gemini 3.5 Flash-Lite** (GA, 1,50/7,50 USD/M) et de **Gemini 3.5 Flash Cyber** (pilote à accès restreint, sécurité, non GA). Disponibilité EEE des nouveaux modèles **non confirmée**. [recherche, domaines officiels; ai.google.dev bloqué à la lecture directe]
- **Anthropic — pas de changement dans la fenêtre.** Correction de périmètre: le catalogue vérifié en direct comprend **Claude Fable 5** (10/50 USD/M, 1 M), Opus 4.8 (5/25), Sonnet 5 (3/15; prix de lancement 2/10 jusqu’au 31 août 2026), Haiku 4.5 (1/5), et Mythos 5 en disponibilité limitée. Fable 5/Mythos 5 étaient en GA depuis le 9 juin 2026 (avant l’instantané du 17 juillet) et manquaient à l’édition initiale: ils sont désormais intégrés. Retrait du mode « fast » d’Opus 4.7 daté du 24 juillet 2026. [vérifié en lecture directe, platform.claude.com]
- **xAI — pas de changement détecté.** Grok 4.5 inchangé (500 k, 2/6 USD/M, cache 0,30). Le palier long contexte 4/12 n’a pas pu être reconfirmé (docs.x.ai bloqué). [recherche]
- **Alibaba/Qwen — Qwen3.8-Max-Preview** annoncé le 19 juillet (WAIC Shanghai): 2,4 T de paramètres, multimodal, via Model Studio; poids ouverts « promis » sans date ni licence. **Qwen-Audio-3.0-TTS** publié le 20 juillet (16 langues). Remplace Qwen 3.7 comme tête d’affiche. [secondaire; help.aliyun.com bloqué]
- **DeepSeek — bascule V4.** Les alias `deepseek-chat`/`deepseek-reasoner` cessent de servir le 24 juillet 2026 (routés vers V4-Flash/V4-Pro); nouvelle tarification API heures pleines/creuses (×2 en pointe). Le phare passe de V3.2 à V4. [secondaire; api-docs.deepseek.com bloqué]
- **Moonshot/Kimi — poids K3 datés du 27 juillet 2026** (licence MIT modifiée, ~1,4 To), pas encore publiés au 24 juillet. Le dépôt `kimi-code` (CLI) a été mis à jour le 24 juillet [officiel, GitHub]. Spécifications qui circulent: MoE 2,8 T, 1 M de contexte, multimodal. [K3: secondaire]
- **Z.AI/GLM — pas de changement.** GLM-5.2 reste le phare (livré le 13 juin, avant l’instantané). [secondaire; docs.z.ai bloqué]
- **AWS, Meta (Llama), Mistral, Cohere, IBM, NVIDIA — pas de changement confirmé dans la fenêtre.** Beaucoup d’annonces de juillet (Muse Spark 1.1 le 8 juillet chez Meta, Granite 4.1 le 9 juillet chez IBM, North GA le 14 juillet chez Cohere) précèdent l’instantané du 17 juillet. Plusieurs pages de prix officielles étaient inaccessibles: deltas de prix non revérifiés. [recherche/secondaire]

**Outils de code et productivité.**

- **Microsoft — OpenAI comme sous-traitant.** Activation automatique d’OpenAI comme sous-traitant pour M365 Copilot et Copilot Studio le 24 juillet 2026 (sauf opt-out administrateur), ajoutant des modèles opérés par OpenAI (à partir de GPT-5.6) sur l’infrastructure OpenAI, distincts d’Azure OpenAI. Nouveau réglage: Copilot > Paramètres > fournisseurs d’IA sous-traitants. Point RGPD à traiter: mise à jour de la liste des sous-traitants et information des personnes. Prix M365 Copilot inchangé (15,60 €/utilisateur/mois HT, promotion jusqu’au 30 septembre 2026). [message center MC1422074, via miroir; page de prix lue en direct]
- **GitHub Copilot — 3 entrées de changelog.** 20 juillet: crédits IA utilisés visibles par cycle de facturation pour Business/Enterprise même sans budget individuel. 21 juillet: Gemini 3.6 Flash disponible dans Copilot (Pro→Enterprise). 22 juillet: nouveau tableau de bord « usage-metrics impact » pour admins entreprise. Prix des plans inchangés (Pro 10, Pro+ 39, Max 100 USD). [changelog domaine officiel]
- **Cursor — deux évolutions.** ~21 juillet: usage inclus doublé sur les plans à l’usage (modèles Cursor de première partie, ex. Grok 4.5 et Composer 2.5). 22 juillet: **Cursor Router** — le mode Auto s’appuie sur un routeur intelligent à trois modes (Intelligence/Balance/Coût) avec contrôles admin. Politique d’usage des données **inchangée** (toujours datée du 15 juillet 2026, Privacy Mode + ZDR). [blog/changelog officiels via recherche; data-use lu via recherche]
- **Replit, Hugging Face, Perplexity — pas de changement** dans la fenêtre (mises à jour post-instantané mineures ou correctifs).

**Réglementaire et RGPD.**

- **AI Act — jalon du 2 août 2026 confirmé et imminent (~9 jours).** Entrée en application des obligations de transparence (art. 50: marquage des contenus générés, information des personnes), des pouvoirs d’exécution GPAI de la Commission (dont amendes) et des pouvoirs pleins des autorités nationales de surveillance. Le **Digital Omnibus IA** (signé le 8 juillet 2026, avant l’instantané) ne touche pas au 2 août mais **reporte le haut risque**: systèmes autonomes de l’annexe III → 2 décembre 2027; IA intégrée aux produits réglementés de l’annexe I → 2 août 2028. Ajout d’une interdiction art. 5 (images intimes non consenties/« nudifiers » et CSAM). Signataires du code de bonnes pratiques GPAI à publier en juillet 2026. [secondaire; pages europa.eu/consilium bloquées]
- **RGPD/Belgique — rien de nouveau dans la fenêtre.** L’item récent le plus pertinent, les lignes directrices EDPB 03/2026 sur le web scraping pour l’IA générative (8 juillet 2026), précède l’instantané. Taux de TVA standard belge inchangé à 21 %. [secondaire]

**Taux de change.** Indications secondaires: EUR/USD ≈ 1,1408 au 22 juillet (contre 1,1405 au 14 juillet), EUR/CNY ≈ 7,72–7,73 (contre 7,7327). Mouvement négligeable. La page ECB étant bloquée cette fois, **l’ancrage de conversion reste le taux BCE vérifié du 14 juillet 2026** (1 EUR = 1,1405 USD = 7,7327 CNY); les estimations EUR des livrables sont donc inchangées. Une valeur erronée de 8,2650 CNY renvoyée par une recherche a été écartée comme aberrante.

**Décisions humaines toujours ouvertes.** Le choix des deux fournisseurs pour un pilote, les tâches réelles, l’enveloppe de coût et le niveau de sensibilité des données restent à trancher. Nouveau point d’attention: la préparation au 2 août 2026 (transparence, inventaire des systèmes, mise à jour des sous-traitants — dont OpenAI côté Microsoft).

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
