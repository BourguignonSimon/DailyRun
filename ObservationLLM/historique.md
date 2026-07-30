# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-30 — Deuxième exécution : cycle de modèles frontière et compte à rebours AI Act

**Verdict.** Changements significatifs confirmés depuis le 17 juillet. Trois des plus grands fournisseurs ont livré un nouveau modèle de tête en moins de deux semaines, la vague open weight chinoise (Kimi K3) est passée de « annonce à confirmer » à réalité mesurée et médiatisée, et l’échéance du 2 août 2026 de l’AI Act européen est désormais imminente. La composition des 20 écosystèmes reste inchangée : aucun signal durable ne justifie une sortie ou une entrée. Les mises à jour portent sur les modèles, les prix et le calendrier réglementaire.

**Modèles et prix — changements vérifiés.**

- **OpenAI — GPT-5.6 (9 juillet 2026).** Nouvelle famille en trois paliers : Sol (5/30 USD par M entrée/sortie), Terra (2,50/15) et Luna (1/6). GPT-5.5 reste disponible comme modèle à raisonnement intégré (1,05 M de contexte). Quatre classes Batch/Flex/Standard/Priority; lecture de cache -90 %, écriture de cache ×1,25 [S61]. L’édition initiale ne mentionnait que GPT-5.5 : correction et mise à jour.
- **Anthropic — Claude Opus 5 (24 juillet 2026).** Opus 4.8, tête de l’édition précédente, est remplacé. Opus 5 est affiché à 5/25 USD, environ la moitié du prix de **Fable 5** (10/50 USD), modèle le plus capable (nouveau palier « Mythos »). Opus 5 remporterait sept des huit évaluations quantifiées face à Fable 5 à moitié prix. Sonnet 5 (30 juin) garde un prix de lancement 2/10 USD jusqu’au 31 août, puis 3/15; Haiku 4.5 à 1/5 [S62–S63].
- **Google — Gemini 3.6 Flash (21 juillet 2026).** 1,50/7,50 USD, soit -17 % sur la sortie face à 3.5 Flash. Gemini 3.1 Pro à 2/12 (long contexte >200 k : 4/18); Flash-Lite à 0,30/2,50. Batch -50 % [S64].
- **xAI — Grok 4.5 (8 juillet).** 2/6 USD sur 500 k confirmé; Grok 4.3 devient l’option longue (1 M) économique à 1,25/2,50. Doublement des tarifs au-delà de 200 k; cache 0,20–0,50; outils serveur 5 USD/1 000 appels [S65].
- **Mistral.** Grille observée nettement plus basse : Large 3 à 0,50/1,50, Medium 3.5 à 1,50/7,50, Small 4 à 0,15/0,60. Écart notable avec la ligne « Large 2/6 » de l’édition initiale : **à revérifier sur la page officielle** (versions et libellés variables) [S66].
- **Chine / open weight.** **Kimi K3** (16 juillet), ~2,8 T de paramètres (MoE, 16/896 experts actifs), 1 M de contexte, vision native, présenté au niveau de Fable 5 pour une fraction du coût; désormais benchmarké indépendamment et à l’origine d’une secousse boursière (« nouveau moment DeepSeek »). **DeepSeek V4** annoncé au niveau frontière à très bas prix (~0,87 USD/M sortie). **Z.AI GLM-5.2** (juin) fort en code/design. Signal marché : des entreprises (ex. Coinbase, selon la presse) revendiquent une réduction de moitié de leurs dépenses IA en basculant vers Kimi/GLM [S67–S69].

**Réglementaire — jalon imminent.**

- **AI Act, 2 août 2026 (dans 3 jours).** Entrée en application des obligations de transparence (article 50 : divulgation des chatbots, marquage des contenus générés par IA, étiquetage des deepfakes), des pouvoirs de sanction relatifs aux GPAI et de la surveillance du marché. Sanctions : jusqu’au plus élevé de 15 M€ ou 3 % du chiffre d’affaires mondial. Le « Digital Omnibus » (accord provisoire du 7 mai 2026) a différé une partie des obligations haut risque mais **maintient fermement le 2 août**. Report ciblé : les systèmes préexistants ont jusqu’au 2 décembre 2026 pour le marquage lisible par machine [S70–S71].

**Change (Belgique).** Taux BCE : 1 EUR = 1,1367 USD (28 juillet 2026), contre 1,1405 le 14 juillet; CNY ≈ 7,74 (mi-juillet). Impact mineur sur les estimations EUR; conversions recalculées [S72].

**Sécurité / disponibilité.** Aucun changement de fond sur la disponibilité belge et les DPA de DeepSeek/Qwen/Kimi/GLM : disponibilité commerciale, région UE, facture EUR/TVA et rétention restent à confirmer avant toute donnée personnelle ou confidentielle. La pression prix des modèles chinois ne modifie pas ces réserves.

**Développement.** Bonnes pratiques inchangées sur le fond; particularités par fournisseur mises à jour pour GPT-5.6 (paliers Sol/Terra/Luna), Anthropic (arbitrage Opus 5 vs Fable 5), Gemini 3.6 et le compte à rebours AI Act. Recommandation renforcée : auditer avant le 2 août la divulgation utilisateur (chatbots) et le marquage des contenus IA.

**Limites / méthodologie.** Cette exécution s’est appuyée davantage sur des sources secondaires réputées (presse spécialisée, agrégateurs de prix) que sur les pages officielles : plusieurs pages officielles (Anthropic, Google, Commission européenne, BCE) ont renvoyé un HTTP 403 lors de la récupération automatisée. Les nouveaux prix et dates sont marqués comme **à revérifier sur source officielle** dans [sources.md](sources.md). Aucun checkout belge ni contrat entreprise n’a été simulé.

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
