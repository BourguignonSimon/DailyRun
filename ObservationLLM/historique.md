# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-04 — Deuxième édition

**Verdict.** Changements significatifs détectés depuis le 17 juillet 2026. Édition de forte rotation des modèles de tête, plus une décision réglementaire européenne majeure. La liste des 20 acteurs est inchangée (aucune entrée, aucune sortie).

**Nouvelles familles de modèles et prix (vérifiés / recoupés).**

- **OpenAI:** famille **GPT-5.6** (Sol/Terra/Luna) en disponibilité générale depuis le 9 juillet 2026, 1,05 M de contexte sur les trois paliers. Le 30 juillet, baisse Terra -20 % et Luna -80 %; Sol inchangé (5/30 USD). GPT-5.5 passe en génération précédente [S01–S02, S61].
- **Anthropic:** famille **Claude 5** — Opus 5 (5/25), Fable 5 (10/50), Sonnet 5 et Haiku 4.5 (1/5). **Sonnet 5 au prix d’introduction 2/10 USD jusqu’au 31 août 2026, puis 3/15**: hausse programmée. Opus 5 remplace Opus 4.8 en tête [S06–S08, S62].
- **Google:** **Gemini 3.6 Flash** (1,50/7,50 USD, grounding natif), 3.1 Pro Preview (2/12 ≤200 k), 3.5 Flash-Lite (0,30/2,50). Arrêt de Gemini 2.0 Flash-Lite le 1ᵉʳ juin 2026 [S09–S11, S63].
- **Mistral:** **Large 3** (0,50/1,50 USD, 256 k), forte baisse vs Large (2/6); Medium 3.5 agents/code; Small 4 (0,10/0,30) [S19–S21, S64].
- **DeepSeek:** génération **V4** (`v4-pro` 0,435/0,87; `v4-flash` 0,14/0,28); alias `deepseek-chat`/`deepseek-reasoner` retirés après le 24 juillet 2026 [S25–S26, S65].
- **Moonshot/Kimi:** **Kimi K3** en disponibilité générale (2,8 T, 1 M de contexte, 3/15 USD, cache 0,30); passage de l’annonce du 16 juillet à un modèle facturable [S48–S51, S60].
- **Microsoft:** **GPT-5.6 par défaut** dans M365 Copilot; promo Business 18 USD/siège (1ᵉʳ juillet → 30 septembre 2026) [S12, S66].
- **À confirmer:** flagship **Qwen3.5** (≈0,60/3,60) et famille **IBM Granite 4.1** cités par des traceurs, non validés sur page officielle; long contexte Grok 4.5 non recoupé cette fois [S27, S35].

**Réglementation — changement majeur.** Le **Digital Omnibus** a reçu l’approbation finale du Conseil le 29 juin 2026. Il reporte les obligations des systèmes à haut risque autonomes (Annexe III) du 2 août 2026 au **2 décembre 2027**, et celles des systèmes intégrés à des produits réglementés (Annexe I) au **2 août 2028**. Le délai de transparence sur les contenus générés passe de 6 à 3 mois (échéance **2 décembre 2026**); les bacs à sable réglementaires nationaux au 2 août 2027; nouvelle interdiction Article 5 (« nudifiers » et CSAM généré). GPAI en vigueur depuis le 2 août 2025 [S57–S59, S67]. Ceci corrige la première édition, qui présentait le 2 août 2026 comme jalon de transparence.

**Change / prix Belgique.** Taux BCE mis à jour: **1 EUR = 1,1485 USD** au 31 juillet 2026 (vs 1,1405). Le taux EUR/CNY à jour n’a pas pu être confirmé et reste à confirmer. Conversions du comparatif recalculées à 1,1485.

**Sécurité et disponibilité.** Postures inchangées pour les fournisseurs déjà couverts. Pour DeepSeek/Qwen/Kimi/GLM, disponibilité belge, DPA, région, facture EUR/TVA et rétention restent à confirmer avant données sensibles.

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md (ajout S61–S67, mise à jour S55) et historique.md.

**Limites / décisions humaines.** Certains mouvements récents ont été recoupés via des traceurs de prix en complément des pages officielles; les valeurs « à confirmer » doivent être validées sur les pages officielles avant engagement. Les checkouts belges et contrats entreprise n’ont pas été simulés.

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
