# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-11 — Deuxième passe (grille Anthropic ouverte, corrections de génération)

**Périmètre.** Les 20 écosystèmes restent inchangés. **Entrées: aucune. Sorties: aucune.** Passe de vérification approfondie, avec ouverture directe de la page tarifaire Anthropic (seul domaine officiel joignable).

**Changements vérifiés.**
- **Anthropic — fin du tarif d’introduction Sonnet 5 le 31 août 2026.** 2/10 → **3/15 USD/M**, batch 1/5 → 1,50/7,50, cache lu 0,20 → 0,30. Vérifié sur la page officielle [S07, S115]. Le fait avait été noté en passe précédente mais n’était pas remonté dans les livrables décisionnels; il l’est désormais, avec échéance datée.
- **Anthropic — Claude Mythos 5** apparaît au catalogue public à 10/50 USD/M: même socle que Fable 5 avec garde-fous cyber et bio/chimie levés, **accès sur invitation (Project Glasswing)**, pas d’inscription libre [S07, S116].
- **Anthropic — tokenizer.** Claude 4.7 et suivants produisent **~30 % de jetons en plus pour le même texte** que Sonnet 4.6 et antérieurs: un prix par million identique ne signifie pas un coût identique [S07].
- **Anthropic — long contexte.** Le million de jetons est **inclus au tarif standard** sur les modèles 4.6+, sans surtaxe, contrairement à GPT-5.6 (Sol 5/30 → 10/45) et Gemini 3.1 Pro (2/12 → 4/18 au-delà de 200 k) [S07, S61–S62, S65].
- **Anthropic — postes hors jetons:** agents managés à 0,08 USD/heure-session, recherche web 10 USD/1 000, web fetch inclus, exécution de code 1 550 h gratuites/mois puis 0,05 USD/h, CCU à 0,01 USD sur AWS Marketplace et Microsoft Foundry [S07, S117].
- **Anthropic — résidence.** Routage global par défaut; `inference_geo: "us"` à ×1,1. **Aucune option « UE seulement » en première partie**: la résidence UE passe par Bedrock ou Vertex avec endpoints régionaux (+10 %) [S07, S118].
- **Alibaba — Qwen3.8-Max (3 août 2026)** remplace Qwen 3.7 Max: MoE 2,4 T paramètres / ~95 B actifs, contexte 1 M, **2/6 USD/M**, cache 0,25, poids ouverts annoncés [S122–S123].
- **Mistral — Shieldstral 1.0 (4 août 2026):** classifieur de sûreté 3B multimodal **Apache 2.0**, politique en langage naturel à l’inférence, un GPU de 16 Go. Limite déclarée par l’éditeur: performance multilingue inégale [S119–S121].
- **Google — arrêts rapprochés:** Imagen 4 et modèles d’image Gemini 3 au **17 août** (erreur dure, changement de forme d’API, cible `gemini-3.1-flash-image`), `gemini-robotics-er-1.6-preview` au 31 août, Gemini 2.5 au 16 octobre [S114].
- **GitHub — Copilot en facturation à l’usage** (AI Credits) depuis le 1er juin 2026; complétions inline gratuites; **crédits promotionnels Business (+30 USD/siège) et Enterprise (+70 USD/siège) supprimés fin août 2026** [S124].
- **xAI — grille élargie:** Grok 4.3 à 1,25/2,50, Grok 4.1 Fast à 0,20/0,50 avec **2 M de contexte**, outils serveur à 5 USD/1 000 appels, `grok-voice-latest` → 2.0 le 5 août à 0,08 USD/minute audio [S22].
- **AI Act — calendrier précisé.** Pouvoirs d’enquête et de sanction GPAI actifs depuis le 2 août 2026 (amendes jusqu’à 15 M€ ou 3 % du CA mondial); article 50 appliqué par les autorités nationales; **délai de grâce au 2 décembre 2026 limité au marquage technique de l’article 50(2)** pour les systèmes antérieurs au 2 août 2026; conformité GPAI des modèles antérieurs au 2 août 2025 due au **2 août 2027**; Digital Omnibus IA (en vigueur le 27 juillet 2026) **reportant** le haut risque au 2 décembre 2027 (annexe III) et au 2 août 2028 (annexe I) [S125–S126]. La mention antérieure « transition ciblée jusqu’au 2 décembre » était exacte mais trop vague: elle est remplacée par le détail ci-dessus.
- **Taux de conversion.** Passage au taux BCE du **7 août 2026: 1 EUR = 1,1535 USD** (au lieu de 1,1554 du 5 août). **Toutes** les colonnes EUR de comparatif.md ont été recalculées, contrairement à la passe précédente qui avait conservé l’ancien taux.

**Correction de fond — guide local.** Les éditions précédentes recommandaient Gemma 3 et Qwen3 alors que deux familles plus récentes étaient déjà disponibles: **Gemma 4** (2 avril 2026; E2B, E4B, 12B, 26B-A4B MoE, 31B; multimodal; jusqu’à 256 k; **premier Gemma sous Apache 2.0**) et **Qwen3.6-27B** (22 avril 2026; dense; Apache 2.0; 256 k; **~17 Go en Q4_K_M**). Le guide local et la section « Exécution locale » de comparatif.md sont corrigés; les modèles de génération précédente sont conservés en alternative, leurs éditeurs ne les ayant ni retirés ni dépréciés. Une section « Garde-fous et modération en local » est ajoutée pour Shieldstral [S119–S121, S127–S129].

**Ajouts structurels.** Nouvelle feuille « Échéances datées » dans comparatif.md (dates butoirs avec effet concret); section « Frais hors jetons publiés »; section « Trois pièges de comparaison » (tokenizer, long contexte, sièges de code); section « À traiter avant fin août » en tête de synthese.md; section « Nouveautés de ce contrôle » dans bonnes-pratiques-developpement.md.

**Fichiers mis à jour.** ObservationLLM/README.md, synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, modeles-locaux-par-hardware.md, sources.md (S115–S129, mise à jour de S07 et S22, dédoublonnage de S87/S130 + note d’accès), historique.md, et les JSON du dashboard (run-status.json, latest.json).

**Limites / décisions humaines.** Le proxy réseau a bloqué en sortie `openai.com`, `platform.openai.com`, `ai.google.dev`, `mistral.ai`, `huggingface.co`, `docs.github.com`, `github.blog` et `ecb.europa.eu`; seul `platform.claude.com` a été ouvert directement. Il en résulte un **biais d’accessibilité**: les faits Anthropic sont plus détaillés que les autres, non parce qu’Anthropic serait plus transparent, mais parce que sa page était joignable. Les autres faits reposent sur au moins deux sources indépendantes citant la page officielle. Les empreintes mémoire de Gemma 4 sont **calculées**, pas lues sur la carte modèle, et portent la mention « à confirmer ». La qualité en néerlandais de Gemma 4 et de Shieldstral n’est documentée par aucune source consultée. **Décision attendue:** autoriser ces domaines depuis l’environnement d’exécution, ou accepter une profondeur de vérification inégale entre acteurs. Aucun DOCX/XLSX dans ObservationLLM: contrôle Markdown effectué, workflows Word/Excel non applicables.

## 2026-08-11 — Contrôle complémentaire (vérification tarifaire et disponibilité)

**Périmètre.** Les 20 écosystèmes restent inchangés. **Entrées: aucune. Sorties: aucune.** Contrôle de vérification des faits les plus volatils (prix API, modèles phares, disponibilité) via recherche web.

**Changements vérifiés.**
- **OpenAI GPT-5.6 — baisse tarifaire confirmée.** Le point « à vérifier » de l’entrée précédente (rumeur d’une baisse Terra/Luna au 30 juillet) est désormais **confirmé**. OpenAI a réduit les prix API le 30 juillet 2026: **Terra de 2,50/15 à 2/12 USD/M (−20 %)** et **Luna de 1/6 à 0,20/1,20 USD/M (−80 %)**; Sol reste à 5/30. Un « Fast Mode » pour Sol remplace le Priority Processing (jusqu’à ×2,5 de vitesse, ×2 le prix, intelligence inchangée). Sources: annonce officielle OpenAI et confirmations indépendantes CNBC/Axios [S112–S113].
- **Google Gemini 2.5 — arrêt programmé.** Gemini 2.5 Pro, Flash et Flash-Lite sont programmés pour arrêt au **16 octobre 2026**; migration recommandée vers la famille 3.x [S114].

**Faits vérifiés stables.** Anthropic (Opus 5 5/25, Sonnet 5 en prix de lancement 2/10 jusqu’au 31 août puis 3/15, Fable 5 10/50, Haiku 4.5 1/5), Grok 4.5 (500 k; 2/6 court, 4/12 long; cache 0,50), Mistral (Le Chat Pro 14,99 USD/mois; Large 3 0,50/1,50 API) restent cohérents avec les livrables. Le taux BCE indicatif du 7 août 2026 (~1,1535 USD/EUR) est proche du 1,1554 documenté (5 août); le taux de référence documenté est conservé pour éviter une recalcul en cascade sur un écart de ~0,16 %.

**Fichiers mis à jour.** README.md (racine inchangée), ObservationLLM/README.md, synthese.md, comparatif.md (Prix API + en-tête), analyse-detaillee.md (OpenAI, Google), sources.md (S112–S114 + note d’accès), historique.md, et les JSON du dashboard (run-status.json, latest.json).

**Limites / décisions humaines.** Les domaines officiels openai.com, platform.openai.com et ecb.europa.eu étaient bloqués par le proxy réseau lors de ce run: la baisse tarifaire OpenAI est confirmée via l’index de recherche citant l’annonce officielle et via des sources indépendantes fiables, mais la page officielle n’a pas pu être ouverte directement. Aucun DOCX/XLSX dans ObservationLLM: contrôle Markdown effectué. Décision attendue: revérifier la grille officielle OpenAI et le taux BCE directement au prochain passage si le proxy le permet.

## 2026-08-11 — Contrôle mensuel et ajout du guide « exécution locale »

**Périmètre.** Les 20 écosystèmes restent inchangés (OpenAI, Anthropic, Google, Microsoft, AWS, Meta, Mistral, xAI, DeepSeek, Alibaba/Qwen, NVIDIA, Cohere, IBM, GitHub Copilot, Perplexity, Cursor, Replit, Hugging Face, Moonshot/Kimi, Z.AI/GLM). **Entrées: aucune. Sorties: aucune.**

**Changements fournisseurs.** **Aucun changement significatif** vérifié depuis l'édition du 6 août: mêmes familles de modèles (GPT-5.6 Sol/Terra/Luna, Opus 5/Fable 5, Gemini 3.6 Flash, DeepSeek V4 Pro/Flash, Grok 4.5, Kimi K3, Qwen 3.7, GLM-5.2). La date de contrôle passe au 11 août 2026; les faits fournisseurs S01–S93 sont conservés en l'état vérifié au 6 août. **À vérifier au prochain passage:** une source d'actualité indépendante évoque une baisse tarifaire GPT-5.6 (Luna ~0,20/1,20, Terra ~2/12 au 30 juillet) non confirmée par la documentation officielle citée (S61–S62) — non reportée dans les prix tant que la page officielle n'est pas revérifiée.

**Nouveau livrable.** Ajout de `modeles-locaux-par-hardware.md`: tableau de décision par configuration matérielle (Raspberry Pi 5 4 Go; CPU seul 8/16/32/64 Go; mini-PC/portable 16/32 Go; Apple Silicon 16/32 Go; GPU 8/12/16/24 Go de VRAM; RTX 3060 12 Go + 64 Go RAM), recommandations principales/alternatives, modèles à éviter, marges mémoire, compromis quantification/qualité/vitesse/contexte et procédure de validation locale. Catégories séparées: chat, MoE, raisonnement, code, vision, embeddings. Modèles couverts vérifiés via cartes officielles et bancs indépendants: Gemma 3 (1B–27B), Qwen3 (4B–32B), Qwen3-30B-A3B, Qwen3-Coder 30B, Llama 3.1/3.2/3.3, Devstral 24B, gpt-oss 20b/120b, DeepSeek-R1 distillés, Qwen2.5-VL/Qwen3-VL, bge-m3, Qwen3-Embedding, nomic-embed, EmbeddingGemma [S94–S111].

**Repères mémoire retenus.** Octets/param GGUF: Q4_K_M ≈ 0,57; Q5_K_M ≈ 0,68; Q8_0 ≈ 1,0; MXFP4 ≈ 0,53. Un 8B en Q4_K_M ≈ ~4,7 Go de poids (~6–7 Go en pratique). Distinction tout-GPU vs offload CPU/GPU; avantage vitesse des MoE en offload. Vitesses tokens/s marquées « à tester » car dépendantes du matériel exact.

**Fichiers mis à jour.** Création de modeles-locaux-par-hardware.md; liens ajoutés dans README.md, ObservationLLM/README.md et synthese.md; section « Exécution locale » ajoutée dans comparatif.md; sources S94–S111 ajoutées dans sources.md; dates de contrôle portées au 11 août 2026.

**Limites / décisions humaines.** Les vitesses tokens/s proviennent de bancs indépendants sur matériel proche mais non identique: à tester localement. Aucun DOCX/XLSX dans ObservationLLM: contrôle Markdown effectué, workflows Word/Excel non applicables. Décision attendue: choisir une configuration matérielle cible et deux modèles locaux pour un pilote FR/NL, et revérifier la grille tarifaire OpenAI officielle au prochain passage.

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
