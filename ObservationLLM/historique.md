# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-06 — Mise à jour mensuelle

**Périmètre.** Les 20 écosystèmes restent OpenAI, Anthropic, Google, Microsoft, AWS, Meta, Mistral, xAI, DeepSeek, Alibaba/Qwen, NVIDIA, Cohere, IBM, GitHub Copilot, Perplexity, Cursor, Replit, Hugging Face, Moonshot/Kimi et Z.AI/GLM. **Entrées: aucune. Sorties: aucune.** Le maintien est justifié par les cinq signaux pondérés; aucun candidat ne dépasse durablement l’acteur le plus faible sur l’ensemble adoption, modèles, agents, développeurs et pertinence européenne.

**Modèles et capacités.** GPT-5.6 Sol/Terra/Luna remplace GPT-5.5 comme famille OpenAI de référence; Anthropic lance Opus 5 tout en maintenant Fable 5 au plafond; Gemini 3.6 Flash remplace 3.5 Flash dans le comparatif. DeepSeek V4 Pro/Flash remplace les alias V3.2 retirés le 24 juillet. Kimi K3 est documenté à 1 M de contexte et ses poids complets étaient annoncés au 27 juillet. Grok 4.5 est confirmé dans la console UE [S61–S72].

**Prix.** Snapshot recalculé avec 1 EUR = 1,1554 USD, taux BCE du 5 août 2026 [S79]. GPT-5.6 Sol: 5/0,50/30 USD par million entrée/cache lu/sortie; Anthropic Opus 5: 5/25; Gemini 3.6 Flash: 1,50/7,50; DeepSeek V4 Pro: 0,435/0,003625/0,87 miss/hit/sortie; Kimi K3: 3/0,30/15. TVA belge standard 21 %; les checkouts et factures priment [S61–S71, S80].

**Agents et développement.** OpenAI ajoute Programmatic Tool Calling, raisonnement persisté, cache explicite et multi-agent bêta. Cursor Router introduit des modes coût/équilibre/intelligence. GitHub Models est retiré depuis le 30 juillet, mais Copilot accueille GPT-5.6, Opus 5 et Kimi K2.7. AWS a fermé Agents Classic aux nouveaux clients et recommande AgentCore; le namespace Agent Registry évolue. Les guides recommandent aussi de migrer les slugs DeepSeek, de retirer les paramètres d’échantillonnage dépréciés de Gemini 3.6 et de tracer le modèle effectivement routé [S62, S65, S67, S73–S75, S88–S90].

**Sécurité et conformité.** Hugging Face publie une intrusion agentique, la rotation préventive des jetons et une chronologie technique; aucun indice de modification des modèles/datasets/Spaces publics n’est annoncé, mais l’évaluation des données partenaires/clients n’était pas close [S76–S77]. Depuis le 2 août 2026, l’AI Act s’applique en principe, l’article 50 et les pouvoirs de contrôle GPAI sont actifs, avec transition ciblée jusqu’au 2 décembre pour certains systèmes antérieurs; l’analyse reste informative [S57–S59, S78, S92–S93]. La politique Kimi a été mise à jour le 28 juillet, effective le 4 août [S72].

**Disponibilité Belgique.** xAI confirme Grok 4.5 dans la console UE. L’EEE reste documenté pour Gemini API; les contrôles/régions d’entreprise doivent toujours être vérifiés service par service. Pour DeepSeek, Qwen, Kimi et GLM, facture EUR, DPA, résidence, rétention et qualité FR/NL restent à confirmer.

**Fichiers mis à jour.** README.md, synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md et historique.md.

**Limites / décisions humaines.** Plusieurs checkouts belges dynamiques et la page officielle Meta Llama n’étaient pas accessibles de façon stable. Aucun DOCX/XLSX n’existe dans ObservationLLM: contrôle Markdown effectué, règles Excel/Word non applicables. Décision attendue: rotation des jetons Hugging Face si utilisés et choix de deux fournisseurs pour un pilote FR/NL.

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
