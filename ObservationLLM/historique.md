# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-01 — Deuxième exécution

**Périmètre.** Les 20 mêmes écosystèmes sont conservés; aucune entrée ni sortie de la liste. Des changements significatifs ont été détectés depuis le 17 juillet 2026 et intégrés à tous les fichiers. Niveaux de confiance explicités car plusieurs pages officielles ont bloqué la récupération automatisée (HTTP 403).

**Changements récents significatifs.**

- **Anthropic — famille Claude 5 confirmée (confiance élevée, source primaire).** La documentation officielle récupérée le 1er août place Claude Fable 5 (`claude-fable-5`, 10/50 USD, GA 9 juin 2026) comme modèle le plus capable et Claude Opus 5 (`claude-opus-5`, 5/25 USD, cutoff mai 2026) comme défaut recommandé pour le code agentique/entreprise; Sonnet 5 à 3/15 USD (promo 2/10 jusqu’au 31 août 2026); Haiku 4.5 à 1/5 USD. Opus 4.8 devient « legacy »; Opus 4.1 retiré le 5 août 2026; variante Mythos 5 (invitation, Projet Glasswing) pour la cybersécurité défensive. Remplace la référence Opus 4.8/Sonnet 5 de l’édition initiale [S06, S61].
- **OpenAI — famille GPT-5.6 (Sol/Terra/Luna) (confiance moyenne-élevée).** Disponibilité générale le 9 juillet 2026 et modèle par défaut de ChatGPT; Sol frontière, Terra équilibré, Luna économique; Programmatic Tool Calling dans l’API Responses; baisses de prix Terra/Luna annoncées le 30 juillet. Remplace GPT-5.5. Tarifs exacts à revalider au barème officiel (page HTTP 403) [S62–S63].
- **Google — Gemini 3.6 Flash / 3.1 Pro (confiance moyenne).** Gemini 3.6 Flash devenu défaut grand public le 21 juillet; Gemini 3.1 Pro modèle de tête (~2/12 USD); Gemini 3.5 Flash maintenu à 1,50/9 USD. Plans grand public en évolution; prix EUR/TVA à confirmer au checkout [S64].
- **xAI — Grok 4.5 public le 8 juillet** (modèle de code ~2/6 USD) et Grok STT 1.0 le 23 juillet (confiance moyenne) [S65].
- **Alibaba — Qwen 3.7 Flash** publié le 27 juillet 2026 (confiance moyenne) [S66].
- **Meta — Muse Spark 1.1** le 9 juillet, présenté comme premier modèle payant (~1,25/4,25 USD); inflexion possible vers une offre commerciale directe, à confirmer sur source primaire (confiance faible-moyenne) [S67].
- **AI Act — jalon du 2 août 2026 (confiance moyenne-élevée).** Entrée en application des pouvoirs de supervision et de sanction de la Commission sur les fournisseurs GPAI (les obligations GPAI s’appliquent depuis le 2 août 2025). Le Digital Omnibus a reporté le « haut risque »: Annexe III (systèmes autonomes) au 2 décembre 2027, Annexe I (produits réglementés) au 2 août 2028 (Parlement le 16 juin, Conseil le 29 juin 2026) [S57–S59, S68].

**Prix et Belgique.** Le taux de référence BCE reste celui du 14 juillet 2026 (1 EUR = 1,1405 USD = 7,7327 CNY): la page BCE a renvoyé un HTTP 403, la valeur est donc reconduite et marquée « à revalider ». TVA belge 21 % inchangée. Les tarifs OpenAI/Google modifiés récemment sont marqués « à confirmer ».

**Sécurité et disponibilité.** Pas de changement de posture par fournisseur au-delà des évolutions de gamme; la nouveauté structurante est réglementaire (pouvoirs d’exécution GPAI actifs). Pour DeepSeek, Qwen, Kimi et GLM, disponibilité belge, DPA, région, facture EUR/TVA et rétention restent à confirmer avant données sensibles.

**Développement.** Ajouts: choix du palier GPT-5.6 par tâche et évaluation du Programmatic Tool Calling; usage du paramètre `effort` et des IDs pinés de la famille Claude 5; planification du retrait d’Opus 4.1; pour les intégrateurs, préférer des fournisseurs GPAI publiant documentation et résumé des données d’entraînement au regard de l’AI Act.

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md (ajout S61–S68) et historique.md.

**Limites / décisions humaines.** Récupération automatisée bloquée (HTTP 403) sur plusieurs pages officielles OpenAI, Google, BCE et institutions UE: la famille Claude 5 est la seule évolution confirmée sur source primaire cette exécution; les autres reposent sur des sources secondaires convergentes et sont marquées en conséquence. Checkouts belges et contrats entreprise non simulés. Revalider au prochain cycle: barèmes OpenAI GPT-5.6 et Google Gemini officiels, taux BCE, et statut exact d’application de l’AI Act après le 2 août.

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
