# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-20 — Deuxième exécution : changements significatifs détectés

**Verdict.** Des changements significatifs ont été détectés depuis le 17 juillet 2026. Ils se répartissent en deux catégories : (a) de **vrais événements récents** (fenêtre 15–20 juillet) et (b) des **omissions de l’édition initiale désormais corrigées** — l’édition du 17 juillet désignait GPT-5.5 et Claude Opus 4.8 comme modèles de tête alors que **GPT-5.6 (disponibilité générale le 9 juillet)** et **Claude Fable 5 (disponibilité générale le 9 juin)** existaient déjà à cette date. Les deux points de tête ont donc été corrigés.

**Niveau de vérification (important).** Le proxy de sortie de cette exécution a refusé (HTTP 403) l’accès direct à de nombreuses pages primaires : openai.com et sous-domaines, anthropic.com (pages presse), et **toutes les pages de la BCE**. Les faits sont donc de niveaux inégaux :

- **Vérifié source primaire :** tarifs et fenêtres de contexte Anthropic (platform.claude.com, récupéré le 2026-07-20).
- **Vérifié multi-sources secondaires convergentes :** Kimi K3, Inkling, Meta Muse Spark 1.1, DeepSeek V4, calendrier AI Act, changelog GitHub.
- **Rapporté, source primaire non atteinte :** famille GPT-5.6 (Sol/Terra/Luna), ChatGPT Work — snippets de recherche concordants mais openai.com bloqué.

**Corrections de tête (déjà valables au 17 juillet, manquées).**

- **OpenAI GPT-5.6 (Sol/Terra/Luna).** Disponibilité générale rapportée le 9 juillet 2026. Sol frontière (5/30 USD/M), Terra équilibré (2,50/15), **Luna nouveau palier bon marché (1/6 USD/M)**. Contexte ~1,05 M, sortie 128 k ; la rumeur de 1,5 M ne s’est pas concrétisée. GPT-5.5 reste en ligne, non déprécié. **ChatGPT Work** (agent produisant documents/feuilles/présentations) rapporté le 9 juillet. [Rapporté ; openai.com bloqué] [S61–S63].
- **Anthropic Claude Fable 5.** Modèle le plus capable largement diffusé, **10/50 USD/M, 1 M de contexte** sans surcoût long contexte, disponibilité générale le 9 juin 2026 ; Claude Mythos 5 est la variante à diffusion restreinte (mêmes specs, sans classifieurs). Fable 5/Mythos 5 sont des « Covered Models » : rétention 30 jours, **pas de zéro-rétention**. Opus 4.8 confirmé 5/25 USD/M ; mode Fast en préversion à 10/50 (contre 30/150 pour Opus 4.7). [Vérifié primaire] [S06–S08, S64].
- **Anthropic Sonnet 5.** Prix d’introduction **2/10 USD/M jusqu’au 31 août 2026**, puis **3/15 à partir du 1er septembre 2026** (batch au même palier). Résidence : `inference_geo:"us"` applique ×1,1 ; endpoints régionaux Bedrock/Google Cloud +10 %. [Vérifié primaire] [S07–S08].
- **Meta.** **Muse Spark 1.1** (9 juillet 2026), modèle agentique multimodal 1 M de contexte via la **nouvelle Meta Model API payante (1,25/4,25 USD/M)** : Meta ne se limite plus aux poids ouverts. Changement stratégique pour l’entrée #6. [Multi-sources] [S65].

**Vrais événements récents (15–20 juillet).**

- **Moonshot Kimi K3.** API en ligne depuis le 16 juillet (`api.moonshot.ai/v1`, `kimi-k3`), **2,8 T de paramètres MoE (~50 B actifs, « 2,8T-A50B »)**, plus grand modèle open weight à ce jour, 1 M de contexte, tarif **3/0,30/15 USD/M** (entrée/cache/sortie). **Poids annoncés « d’ici le 27 juillet 2026 », non encore publiés.** Benchmarks : #1 Frontend Code Arena (1 679, arène publique observable) ; 3e sur GDPval-AA v2 (1 687, éval tierce Artificial Analysis) derrière Fable 5 et GPT-5.6 Sol. Passage de « trop récent » à « API et prix publiés, poids en attente ». [Multi-sources + docs plateforme] [S48–S51, S66].
- **Thinking Machines « Inkling ».** Premier modèle de Mira Murati, 15 juillet 2026 : **975 B / 41 B actifs MoE**, 45 T jetons multimodaux, 1 M de contexte, **poids sous Apache 2.0 sur Hugging Face**, plus grand open weight d’origine américaine. Positionné comme base généraliste pour fine-tuning (Tinker), pas comme meilleur modèle absolu. **Nouveau candidat à surveiller.** [Multi-sources] [S67].
- **DeepSeek V4.** Passage préversion → version officielle « mi-juillet » (imminent, non confirmé expédié au 19 juillet) ; V4-Pro (1,6 T/49 B) et V4-Flash (284 B/13 B), 1 M de contexte. Première **tarification heure pleine/creuse** : prix ×2 de 9h–12h et 14h–18h (Beijing), alerte e-mail 24 h avant. Le temps devient une dimension de routage. [Multi-sources] [S68].
- **xAI Grok 4.5** (8 juillet, déjà couvert) : premier modèle xAI pensé pour le code/agentique, entraîné sur des sessions Cursor réelles ; nouvelles intégrations Perplexity, Notion, Convex (9 juillet). Grok 4.3 sur Amazon Bedrock (juin, 1,25/2,50 USD/M). [Multi-sources] [S22, S69].

**Écosystèmes de code et productivité.**

- **GitHub Copilot.** **Kimi K2.7 Code disponible (premier modèle open weight sélectionnable)** ; Copilot vision généralisé ; **Gemini 2.5 Pro et Gemini 3 Flash dépréciés le 31 juillet** sur toutes les surfaces Copilot. [Changelog GitHub] [S70].
- **Microsoft Copilot.** Bibliothèque centrale des sorties, **GPT-5 dans Agent Builder**, Agent Store section « Built by your org » après validation admin. [Release notes] [S71].
- **Mistral.** **Mistral Small 4** (hybride instruct/raisonnement/code, 256 k), **Robostral Navigate** (robotique 8 B), **Leanstral 1.5** (preuve Lean 4), et un nouveau MoE open weight « fat but sparse » en accès anticipé partenaires. [Multi-sources] [S72].

**Réglementaire (Belgique/UE).**

- **AI Act — jalon du 2 août 2026 précisé.** À partir de cette date, la Commission (AI Office) peut **sanctionner les fournisseurs de GPAI** (jusqu’à 15 M€ ou 3 % du CA mondial) et dispose de pleins pouvoirs d’enquête (documentation, accès modèle, inspections). Le **Digital Omnibus** reporte les obligations « haut risque » : Annexe III autonome au **2 décembre 2027**, Annexe I intégrée au **2 août 2028**. [Multi-sources institutionnelles] [S57–S59, S73].
- **DeepSeek et Belgique (contexte, non nouveau) :** un groupe de consommateurs belge a déposé plainte sur les transferts de données vers la Chine ; scrutin réglementaire UE en cours. Renforce l’avertissement « ne pas envoyer de données personnelles avant validation ». [S74].

**Taux de change.** BCE EUR/USD = **1,1435 le 17 juillet 2026** (contre 1,1405 le 14 juillet). Le taux CNY **n’a pas pu être revérifié** cette exécution (pages BCE inaccessibles via le proxy) ; 7,7327 conservé du 14 juillet à titre indicatif. Impact des conversions < 0,3 %.

**Sorties/entrées du panel des 20.** Aucun changement de composition. Les 20 acteurs restent identiques ; **Thinking Machines/Inkling** rejoint la liste des candidats à surveiller (avec MiniMax, Databricks, Oracle, Salesforce). Une entrée future exigera un signal durable et une sortie motivée.

**Limites de cette exécution.** Sources primaires OpenAI et BCE inaccessibles (403 proxy) ; chiffres OpenAI et taux CNY à revérifier hors environnement contraint. Benchmarks Kimi/Inkling repris de leaderboards/évals tierces sans réexécution locale. Checkouts belges et contrats non simulés.

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
