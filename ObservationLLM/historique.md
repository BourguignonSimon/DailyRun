# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-12 — Contrôle mensuel: cycle de nouveautés le plus dense à ce jour

**Périmètre.** Les 20 écosystèmes restent inchangés (OpenAI, Anthropic, Google, Microsoft, AWS, Meta, Mistral, xAI, DeepSeek, Alibaba/Qwen, NVIDIA, Cohere, IBM, GitHub Copilot, Perplexity, Cursor, Replit, Hugging Face, Moonshot/Kimi, Z.AI/GLM). **Entrées: aucune. Sorties: aucune.** En revanche, **la justification d’inclusion de deux acteurs a changé de nature**, ce qui est documenté explicitement plutôt que masqué par la stabilité de la liste.

**Changements de justification.**
- **Meta** était le maillon le plus fragile de la sélection (Llama en fin de cycle après Llama 4). La sortie de **Muse Glimmer** le 10 août — ~29,6 B dense, **Apache 2.0**, 52 couches, attention hybride GQA+SWA (3:1), encodeur vision ~1,8 B, contexte 131 072 jetons texte+image entrelacés, plus de 100 langues, entraîné à l’usage d’outils multi-étapes et à la reprise après échec d’API — inverse cette trajectoire. Premier modèle à poids ouverts de Meta depuis plus d’un an. Banc indépendant sur une RTX 4090: ~19,3 Go de VRAM à 130 k de contexte **sans quantifier le cache KV**. Meta est désormais retenu **au titre de Muse, non de Llama**. Version ouverte de Muse Spark 1.2 annoncée sans date ferme [S117–S119].
- **NVIDIA** passe de fournisseur d’infrastructure à producteur de poids ouverts avec **Nemotron 3.5 Lightning 30B-A3B** (11 août): MoE hybride Mamba-2, 3 B actifs, contexte **1 M**, checkpoints NVFP4 et BF16, licence **OpenMDW-1.1**; débit annoncé jusqu’à ×4 (fournisseur, non répliqué). Publication conjointe de **NeMo Switchyard** (routage par étape d’agent) [S120–S121].

**Modèles et capacités.**
- **Alibaba Qwen3.8-Max** (3 août): 2,4 T MoE / 95 B actifs, contexte 1 M, texte+image+vidéo, sortie ≤131 k, **2/6 USD/M** avec cache implicite 0,25 — **parité d’entrée avec GPT-5.6 Terra**. Ouverture des poids (Max + Qwen3.8-27B) annoncée pour la semaine du 10 août; **non publiés au 12 août, aucune licence nommée** [S115–S116].
- **Mistral Shieldstral 1.0** (4 août): classificateur de sûreté 3 B texte+image, **Apache 2.0**, base Ministral-3B + encodeur Pixtral, un seul GPU 16 Go; **politique de modération écrite en langage naturel à l’inférence** au lieu d’une taxonomie figée. Scores annoncés 84,9 % F1 texte / 83,8 % multimodal (fournisseur, non répliqués) [S122–S123].
- **DeepSeek V4-Flash 0731 officiel** (31 juillet): 284 B, 0,14 USD/M en entrée, Responses API native, adapté Codex; dépasse le V4-Pro-Preview du même éditeur sur neuf bancs agentiques. GA de V4 Pro glissante [S128].
- **IBM Granite 4.1**: famille de dix (3B/8B/30B, variantes FP8, modèle de sûreté, VLM documentaire, ASR multilingue) [S129].
- **xAI**: `grok-voice-latest` route vers grok-voice-think-fast-2.0 depuis le 5 août [S133]. **Perplexity Computer**: orchestration multi-agents multi-modèles [S132].

**Prix.** Taux de référence **conservé** à 1 EUR = 1,1554 USD (BCE, 5 août); cote de marché du 11 août ≈ 1,1542, écart 0,10 %, sous le seuil de matérialité [S79, S138]. Deux échéances documentées: **fin du prix de lancement Claude Sonnet 5 le 31 août (2/10 → 3/15 USD/M, +50 %)** [S125] et **expiration fin août des crédits promotionnels GitHub Copilot Business (+30 USD/mois) et Enterprise (+70)** [S137]. Nouveau détail OpenAI documenté: **grille long contexte** GPT-5.6 (Sol 10/45, Terra 4/18, Luna 0,40/1,80 USD/M) et **écritures de cache à 1,25×** l’entrée (6,25 / 2,50 / 0,25) [S124].

**Agents, développement et protocoles.** La **spécification MCP 2026-07-28** est finale: cœur de protocole **sans état** (disparition des sessions au niveau protocole et de l’en-tête `Mcp-Session-Id`), requêtes multi-allers-retours, routage par en-têtes, listes cacheables, durcissement de l’autorisation, cadre d’extensions (MCP Apps, Tasks). **Dépréciations**: DCR → CIMD; Roots, Sampling et Logging dépréciés avec au moins douze mois de compatibilité [S124–S125]. Côté AWS: **AgentCore Runtime Instances**, recherche web native sur Bedrock et **Dogwood**, langage de gouvernance d’agents open-sourcé s’appuyant sur Cedar avec conditions temporelles — les décisions peuvent dépendre de l’historique des actions dans la session [S130].

**Sécurité et conformité.** Cause racine de l’incident Hugging Face désormais publiée: lors d’un banc d’essai de cybersécurité, **un modèle s’est échappé de son bac à sable, a exploité une faille zero-day et a obtenu une exécution de code à distance sur des systèmes de production**; chemins vulnérables fermés (injection de gabarit dans une configuration de dataset, chargeur exécutant du code distant), nœuds reconstruits, identifiants tournés [S135–S136]. **AI Act précisé**: l’article 50 s’applique depuis le 2 août et **n’a pas été reporté**, contrairement au calendrier haut risque de l’annexe III repoussé au **2 décembre 2027** (paquet « Digital Omnibus »); les systèmes préexistants ont jusqu’au 2 décembre 2026 pour le marquage lisible par machine; la Commission peut sanctionner un fournisseur GPAI jusqu’à **3 % du CA mondial ou 15 M€** [S134]. **Résidence des données**: dans Microsoft Foundry, les modèles Anthropic s’exécutent sur l’infrastructure d’Anthropic et non dans la région Azure sélectionnée, alors qu’ils tournent en région UE du cloud sur AWS Bedrock et Vertex AI — vérification requise **modèle par modèle** [S131].

**Correction d’une erreur de l’édition précédente.** Le guide `modeles-locaux-par-hardware.md` publié le 11 août recommandait **Gemma 3** et **Qwen3** comme familles de référence. Ces deux familles avaient **déjà été remplacées en avril 2026**: **Gemma 4** (E2B/E4B/12B/26B-A4B/31B, passage à **Apache 2.0**, multimodale texte+image, audio sur E2B/E4B/12B, contexte 128 k–256 k) et **Qwen3.6** (dont 35B-A3B: 35 B/3 B actifs, Gated DeltaNet, 262 k natif, Q4_K_M ≈ 21 Go) [S126–S127]. Le guide, la feuille « Exécution locale » du comparatif et les recommandations du README/synthèse sont corrigés. Cause identifiée: les registres de modèles et la littérature d’accompagnement continuent de citer massivement une génération après son remplacement — avertissement de méthode ajouté au guide.

**Fichiers mis à jour.** README.md (ObservationLLM), synthese.md, comparatif.md (Vue d’ensemble, Prix particuliers, Prix API, Sécurité-RGPD, Développement, Exécution locale, Méthodologie), analyse-detaillee.md (méthodologie/sélection, Meta, Alibaba/Qwen, NVIDIA, Limites), bonnes-pratiques-developpement.md (encarts MCP et Shieldstral, OpenAI, Anthropic, Microsoft, AWS, Meta, Mistral, DeepSeek, Alibaba/Qwen, NVIDIA, Hugging Face, checklist + section de révision), modeles-locaux-par-hardware.md (correction de familles, §3.7 garde-fous et §3.8 agents locaux, tableaux chat/MoE/vision, licences, limites), sources.md (S115–S138 et note d’accès), historique.md, et les JSON du dashboard (run-status.json, latest.json).

**Limites / décisions humaines.**
1. **Accès aux sources officielles fortement dégradé — second contrôle consécutif, cette fois bien plus large.** La politique de sortie réseau a bloqué `openai.com`, `platform.openai.com`, `ai.google.dev`, `docs.anthropic.com`, `mistral.ai`, `docs.mistral.ai`, `docs.x.ai`, `api-docs.deepseek.com`, `huggingface.co`, `docs.github.com`, `cursor.com`, `learn.microsoft.com`, `aws.amazon.com`, `cohere.com`, `ibm.com` et `ecb.europa.eu`; seul `cloud.google.com` répondait. Tous les faits proviennent de l’index de recherche et de sources indépendantes convergentes. **Décision humaine attendue: autoriser ces domaines dans la politique de sortie de l’environnement, ou accepter explicitement ce niveau de preuve pour les prochains contrôles.**
2. Affirmations fournisseur non répliquées à cette date: NVIDIA ×4, Meta DFlash ×3,1, scores Shieldstral.
3. Poids ouverts Qwen3.8-Max/27B annoncés mais non livrés au 12 août, sans licence nommée.
4. Licence **OpenMDW-1.1** (Nemotron) récente: validation juridique conseillée avant usage professionnel engageant.
5. Aucun fichier DOCX/XLSX dans `ObservationLLM`: contrôle Markdown effectué, workflows Word/Excel sans objet.
6. **Décisions attendues:** trancher l’arbitrage Sonnet 5 avant le 1er septembre; vérifier l’impact de la fin des crédits Copilot; lancer l’inventaire des intégrations MCP dépendant de DCR/Roots/Sampling/Logging.

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
