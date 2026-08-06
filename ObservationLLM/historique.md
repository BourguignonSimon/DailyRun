# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-06 — Rattrapage et contrôle journalier

**Périmètre.** Les 20 écosystèmes sont inchangés: OpenAI, Anthropic, Google, Microsoft, AWS, Meta, Mistral, xAI, DeepSeek, Alibaba/Qwen, NVIDIA, Cohere, IBM, GitHub Copilot, Perplexity, Cursor, Replit, Hugging Face, Moonshot/Kimi et Z.AI/GLM. **Entrées: aucune. Sorties: aucune.** Les signaux de MiniMax, Databricks/Mosaic, Oracle OCI et Salesforce ne justifient pas encore un remplacement durable.

**Modèles et capacités.** GPT-5.6 Sol/Terra/Luna remplace GPT-5.5 comme famille phare OpenAI, avec appels d’outils programmatiques, raisonnement persistant et multi-agent bêta [S61–S63]. Claude Opus 5 remplace Opus 4.8; Anthropic ajoute les inference hooks entreprise et retire Opus 4.1 [S64]. Gemini 3.6 Flash devient GA à 1,50/7,50 USD par million entrée/sortie, avec 1 M de contexte et 64 k de sortie [S65–S67].

**Agents et développement.** AWS ferme Agents Classic aux nouveaux clients et recommande AgentCore; le changement de namespace Agent Registry du 6 août impose une migration technique [S68–S69]. GitHub Copilot ajoute Opus 5, Gemini 3.6 Flash, Grok 4.5, contrôles d’automatisation et niveau de raisonnement [S71]. Cursor ajoute Router, contrôles administrateur et surfaces iPhone/iPad [S72]. Meta AI devient agentique dans des marchés sélectionnés [S73]. Kimi K3 documente 1 M de contexte, cache, sorties structurées et outils, avec recherche web temporairement déconseillée [S74].

**Prix et Belgique.** Taux BCE du 5 août: 1 EUR = 1,1554 USD = 7,7989 CNY [S55]; toutes les estimations EUR ont été recalculées. Les prix restent hors TVA sauf mention; la TVA belge standard de 21 % et le checkout/la facture priment. Grok 4.5 est explicitement disponible dans la console API pour les utilisateurs UE [S70].

**Sécurité et réglementation.** Les obligations de transparence de l’article 50 s’appliquent depuis le 2 août 2026; la Commission a publié lignes directrices et code volontaire. Une transition ciblée jusqu’au 2 décembre 2026 peut concerner le marquage de certains systèmes antérieurs [S75–S76]. Analyse informative, pas avis juridique.

**Fichiers mis à jour.** README.md, synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md et historique.md.

**Limites / décision humaine.** Checkouts belges, DPA négociés, résidence effective et disponibilité contractuelle n’ont pas été simulés. Décider si les applications utilisent des contenus relevant de l’article 50, si AWS Agents Classic doit être migré, et quels pilotes FR/NL exécuter avant changement de modèle.

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
