# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-02 — Deuxième édition (changements significatifs détectés)

**Contexte.** Deuxième exécution, ~16 jours après l’édition initiale du 17 juillet 2026. Des changements significatifs ont été détectés et intégrés. Périmètre inchangé: les 20 mêmes écosystèmes. Base de conversion actualisée: taux de référence BCE du **30 juillet 2026, 1 EUR = 1,1476 USD** (contre 1,1405 le 14 juillet) [S66]. TVA belge standard 21 %.

**Changements majeurs constatés depuis le 17 juillet.**

- **Anthropic — refonte de la gamme (impact fort).** Claude **Opus 5** annoncé le **24 juillet 2026**, prix Opus inchangé à **5/25 USD** par million entrée/sortie, 1 M de contexte, sortie max 128 k, coupure de connaissances mai 2026, sélecteur d’effort low/medium/high, nouveau modèle par défaut sur Claude Max. **Fable 5** devient le modèle de tête (**10/50 USD**). **Sonnet 5** (30 juin) reste à un prix de lancement **2/10 USD jusqu’au 31 août 2026**, puis **3/15 USD**. **Opus 4.8** passe en héritage [S62, S07].
- **OpenAI — famille GPT-5.6 (impact fort).** GA le **9 juillet 2026** de **Sol/Terra/Luna**. **Sol** devient le modèle de tête: 5/30 USD en contexte court, **10/45 USD au-delà de 272 k**, 1,05 M de contexte, coupure février 2026. Baisses du **30 juillet**: Luna −80 %, Terra −20 %. GPT-5.5 reste disponible mais n’est plus affiché sur la grille principale [S61, S01].
- **Google — Gemini 3.6 Flash (impact moyen).** Lancé le **21 juillet 2026** à **1,50/7,50 USD** (sortie moins chère que 3.5 Flash à 9 USD). Palier **Gemini 3.5 Flash-Lite** à **0,30/2,50 USD** pour sous-agents à haut volume [S63, S09].
- **Moonshot/Kimi — Kimi K3 en poids ouverts (impact moyen).** **Poids publics gratuits publiés le 26 juillet 2026**: 2,8 T de paramètres MoE (16 experts actifs sur 896), 1 M de contexte, multimodal texte/image/vidéo. Plus grand modèle en poids ouverts à ce jour. Moonshot annonce une position compétitive face à Fable 5 et supérieure à Opus 4.8/GPT-5.6 Sol: **revendication fournisseur, vérification indépendante en cours** [S64, S60].
- **AI Act — jalon du 2 août 2026 en application (aujourd’hui).** Les obligations de transparence de l’**article 50** (divulgation des chatbots, marquage des contenus IA, étiquetage des hypertrucages), les **pouvoirs d’exécution GPAI** et le **régime de sanctions** entrent en application ce jour. Les systèmes à haut risque de l’annexe III sont reportés au **2 décembre 2027**, ceux de l’annexe I au **2 août 2028** (amendement de juin 2026). Analyse informative, pas avis juridique [S57–S59].
- **xAI — Grok 4.5** poursuit son déploiement par paliers sur SuperGrok après le lancement du 8 juillet; tarifs API inchangés (2/6 court, 4/12 priorité). Changement mineur [S22–S23].

**Sécurité et disponibilité.** Pas de dégradation constatée sur les acteurs UE/US. Kimi K3 est désormais téléchargeable en poids ouverts, ce qui déplace la sécurité vers l’hébergeur; pour DeepSeek, Qwen, Kimi et GLM en service géré, disponibilité belge, DPA, région, facture EUR/TVA et rétention restent **à confirmer** avant données sensibles.

**Développement.** Recommandations transversales inchangées dans leur principe; épingler explicitement les nouveaux identifiants (Opus 5, GPT-5.6 Sol, Gemini 3.6 Flash) et retester les évaluations FR/NL avant bascule depuis Opus 4.8/GPT-5.5/Gemini 3.5 Flash. La coupure de connaissances des nouveaux modèles se situe en février–mai 2026.

**Fichiers mis à jour.** README.md, synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md, historique.md.

**Limites / décisions humaines.** Prix catalogue, hors remises et hors TVA sauf mention; checkouts belges non simulés. Les revendications de benchmark des fournisseurs (notamment Moonshot sur Kimi K3) ne sont pas agrégées en classement et attendent une vérification indépendante. Choisir deux fournisseurs pour un pilote, trois tâches réelles, une enveloppe de coût et un niveau de sensibilité des données.

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
