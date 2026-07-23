# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-23 — Re-vérification (cadence rapprochée)

**Périmètre.** Toujours exactement 20 écosystèmes; aucune entrée ni sortie. La méthodologie exige un signal durable pour remplacer un acteur; les nouveautés de la semaine sont des évolutions internes aux 20 acteurs, pas de nouveaux entrants. Fenêtre observée: 2026-07-17 → 2026-07-23 (6 jours). **Changements significatifs détectés**, contrairement à ce qu’un simple intervalle de 6 jours laisserait attendre.

**Limite technique de cette exécution.** La politique de sortie réseau de la session a bloqué (403 au niveau du proxy) plusieurs domaines officiels: `openai.com`, `developers.openai.com`, `platform.openai.com`, `blog.google`, `ai.google.dev`, `docs.cloud.google.com`, `api-docs.deepseek.com`, `platform.kimi.ai`, `www.ecb.europa.eu`, ainsi que WebFetch/curl vers tout hôte pour deux des cinq axes de recherche. Les faits issus de ces domaines reposent donc sur des extraits de recherche citant la page officielle, **non sur une lecture directe de la page**. Ils sont marqués « à confirmer sur source primaire » ci-dessous et dans les fichiers. Les sources effectivement lues cette fois: `platform.claude.com` (Anthropic) et `cloud.google.com/vertex-ai` (Google Vertex).

**Correction majeure (omission de l’édition initiale).**

- **Anthropic Claude Fable 5** (`claude-fable-5`) existe et est le modèle **au-dessus d’Opus 4.8**: modèle le plus capable largement diffusé, 1 M de contexte, 128 k de sortie (300 k en batch bêta), texte+image en entrée, « thinking » toujours actif, classificateurs de sûreté pouvant refuser. Prix API: **10 / 1 (cache read) / 50 USD** par million; écritures cache 12,50 (5 min) et 20 (1 h); batch −50 % (5/25). Tokenizer récent (~30 % de jetons en plus). GA **9 juin 2026** (Claude API, Bedrock, AWS, Google Cloud, MS Foundry); suspendu 12–30 juin 2026 (contrôles d’export US) puis **redéployé mondialement le 1er juillet 2026**. Sibling **Mythos 5** (`claude-mythos-5`): mêmes specs/prix mais sans classificateurs, disponibilité restreinte sur invitation (Project Glasswing, cybersécurité défensive), rétention 30 jours, pas de ZDR. Source: platform.claude.com [S61–S63]. L’édition du 17 juillet omettait entièrement ce palier: corrigé ici.

**Changements de modèles (dans ou autour de la fenêtre).**

- **Google Gemini 3.6 Flash**, publié le **21 juillet 2026** (dans la fenêtre), confirmé sur la grille officielle Vertex: **1,50 / 0,15 / 7,50 USD** par million (la sortie baisse de 9 → 7,50 vs 3.5 Flash). Également le 21 juillet: **Gemini 3.5 Flash-Lite** (0,30/0,03/2,50) et **Gemini 3.5 Flash Cyber** (sécurité). Le palier Pro courant est **Gemini 3.1 Pro Preview** (2/4 en entrée, 12/18 en sortie selon contexte); pas de Gemini 3.5 Pro. Google annonce le pré-entraînement de **Gemini 4**. Gemini 3.5 Flash reste listé (9 en sortie). Grounding Search/Maps 14 USD/1 000 requêtes après 5 000 gratuites/mois [S64].
- **OpenAI GPT-5.6** (famille Sol/Terra/Luna) semble être la nouvelle frontière (GA ~9–10 juillet 2026, avant l’édition du 17 qui listait encore GPT-5.5). Prix rapportés: Sol 5/30, Terra 2,50/15, Luna 1/6; cache ~10 % de l’entrée; batch −50 %. **Non vérifié sur source primaire** cette exécution (openai.com bloqué) [S66].
- **DeepSeek V4** (`deepseek-v4-pro`, `deepseek-v4-flash`, 1 M de contexte) remplace la famille V3.2; les noms hérités `deepseek-chat`/`deepseek-reasoner` sont **retirés à compter du 24 juillet 2026**. Preview annoncée le 24 avril 2026; date de lancement complet non confirmée officiellement. **Prix non vérifiables** (api-docs.deepseek.com bloqué) [S67].
- **Kimi K3** (annoncé le 16 juillet): specs/prix consolidés dans la fenêtre — MoE 2,8 T, multimodal natif, 1 M de contexte, « thinking » permanent; prix **3 / 0,30 / 15 USD**; poids ouverts attendus ~27 juillet 2026. Page tarifaire officielle bloquée (403): **corroboré, non primaire** [S68].
- **Alibaba/Qwen**: **Qwen3.8-Max-Preview** annoncé le **19 juillet 2026** (WAIC, Shanghai) — MoE clairsemé ~2,4 T, multimodal, ~1 M de contexte, preview via Token Plan/Qoder à ~10 % du tarif standard, sans poids/licence/prix au jeton publiés. **Qwen-Image-3.0** publié le 21 juillet. Annonce corroborée (Bloomberg/SCMP), page Qwen non lue directement [S69–S70].

**Réglementaire (changement majeur).**

- **AI Act — paquet de simplification « Digital Omnibus » désormais adopté** (proposition 19 nov. 2025; accord provisoire 7 mai 2026; Parlement 16 juin 2026; Conseil 29 juin 2026; signature 8 juillet 2026; publication au JO imminente). Report des systèmes à **haut risque**: Annexe III (recrutement, scoring crédit, police, éducation, frontières) de 2 août 2026 à **2 décembre 2027**; Annexe I (produits réglementés) à **2 août 2028**. Délai de marquage des contenus générés réduit de 6 à **3 mois** (échéance 2 déc. 2026); bacs à sable nationaux reportés au 2 déc. 2027; nouvelles interdictions Art. 5 (imagerie intime non consentie, CSAM). **Le 2 août 2026 reste en vigueur** pour les obligations de transparence (Art. 50), l’applicabilité des pouvoirs d’exécution et amendes sur les fournisseurs GPAI (Art. 101) et les nouvelles interdictions Art. 5 [S59, S71–S72]. Sources institutionnelles lues via extraits (proxy bloquant la lecture directe): à re-confirmer sur eur-lex à la publication au JO.

**Prix et taux.** Nouveaux taux BCE: **1 EUR = 1,1408 USD (22 juillet 2026)** et **7,7255 CNY (21 juillet 2026)** [S55]. Variation minime vs le 14 juillet (1,1405 / 7,7327); les conversions EUR ne bougent qu’à la marge. TVA belge standard **21 % inchangée** (des reclassements sectoriels au 1er mars 2026 ne touchent pas le taux standard) [S56].

**Inchangés (confirmés).** xAI **Grok 4.5** (2/6, 500 k, cache 0,50); « Grok 4.3 » est un modèle distinct, moins cher, 1 M de contexte. **Mistral** Large (2/6) et Medium 3.5 (1,5/7,5) inchangés; sorties périphériques de juillet (Leanstral 1.5, Robostral Navigate, Mistral OCR 4). **GitHub Copilot**, **Cursor**, **Replit**: aucun changement dans la fenêtre (leurs évolutions de facturation datent du 1er juillet ou avant). **Z.AI/GLM-5.2** inchangé (une évaluation tierce NIST/CAISI de GLM-5.2 publiée le 17 juillet est une évaluation externe, pas un changement d’offre) [S75]. **Cohere, Perplexity, Hugging Face, IBM, NVIDIA, Meta**: rien de significatif dans la fenêtre.

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md et historique.md. README.md inchangé.

**Décisions humaines qui restent ouvertes.** Re-vérifier depuis un réseau non restreint: la famille GPT-5.6 et la clause EEE de gouvernance des données Google; la grille tarifaire DeepSeek V4; le prix Kimi K3; la publication au JO de l’AI Act simplifié. Le report du haut risque n’allège pas les obligations GPAI ni la transparence du 2 août 2026.

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
