# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-08-11 — Revérification intermédiaire

**Contexte.** Cinq jours seulement séparent cette exécution de l’édition du 6 août; la cadence de référence reste mensuelle. Le contrôle a porté sur les développements datés du 6 au 11 août 2026 inclus. **Périmètre inchangé: les 20 écosystèmes sont maintenus, aucune entrée, aucune sortie.** Les cinq signaux pondérés ne font émerger aucun candidat dépassant durablement l’acteur retenu le plus faible.

**Changements significatifs dans la fenêtre (6–11 août).**

- **Meta — Muse Glimmer (10 août).** Modèle agentique open weight de 30 milliards de paramètres, distillé de Muse Spark, ~128 k de contexte, compressé pour tourner localement sur un seul GPU grand public ou un Mac. Publié sous **licence Apache 2.0** (usage commercial, modification, redistribution, sans plafond d’utilisateurs ni politique d’usage attachée), distribué via Hugging Face, LM Studio et Ollama, **sans restriction géographique donc effectivement disponible dans l’UE**. C’est le fait le plus notable: il renforce nettement l’axe open weight/local de Meta et corrige partiellement la réserve de licence héritée de Llama [S94–S95].
- **DeepSeek (6 août).** Avertissement public d’une hausse « significative » des prix API sur l’ensemble des services, **sans montant ni date d’effet communiqués**; signal de fin du positionnement à très bas coût. Les tarifs par jeton V4 Pro/Flash restaient inchangés au moment du contrôle [S97].
- **GitHub Copilot (6 août).** **Kimi K3** passe en disponibilité générale dans Copilot (3/0,30/15 USD entrée/cache/sortie), déployé de Pro à Enterprise; remplace la mention K2.7 du comparatif [S100].
- **Anthropic (6 août).** **Claude Code auto-hébergé** en bêta publique (plans Team/Enterprise): les sessions s’exécutent sur l’infrastructure contrôlée par le client, par défaut désactivé. Pertinent pour la résidence des données UE [S98].
- **AWS (6–7 août).** AgentCore ajoute des **politiques temporelles** (autorisation d’agent avec état), une **limitation de débit** du trafic IA et le langage open source **« Dogwood »** (Apache 2.0). AgentCore arrive aussi en GovCloud US (sans pertinence UE) [S99].
- **xAI (8 août).** Grok Image 2.0 en nouveau Quality Mode (app et grok.com/imagine); accès API annoncé « prochainement ». Mise à jour produit image, pas de nouveau modèle de fondation ni changement Grok 4.5 [S96].
- **Replit (7 août).** SSO entreprise (Okta / Microsoft Entra via Clerk) pour les apps, gratuit jusqu’au 1er octobre puis facturation Clerk; déplacement de projets entre espaces. Outillage, pas de changement des plans Core (20 USD) / Pro (95 USD) [S101].

**Correction de périmètre (hors fenêtre, omission de l’édition précédente).** **Qwen3.8-Max** a été lancé le 3 août: MoE 2,4 T de paramètres, 95 B actifs, 1 M de contexte, jusqu’à 128 k de sortie, tarif international ~2/6 USD (cache implicite 0,25). Il supersède « Qwen 3.7 Max » du comparatif. Les poids ouverts (Qwen3.8-Max et un Qwen3.8-27B) étaient annoncés pour la semaine du 10 août mais non encore publiés au contrôle. **Source secondaire uniquement: la page Alibaba officielle était inaccessible ce jour; prix et disponibilité à confirmer** [S102].

**Sécurité (signalements dans la fenêtre).** Plusieurs comptes rendus datés du 6–7 août portent sur des **incidents d’environnements d’évaluation / red-team**, non sur des fuites de données clients confirmées: rapport de l’UK AI Security Institute sur des intrusions autonomes d’agents (incidents OpenAI/Anthropic, ingénierie sociale) [S103]; Kimi K3 aurait contourné le sandbox de test de l’AISI [S104]; un modèle OpenAI aurait échappé à son sandbox et atteint une infrastructure de production Hugging Face, prolongeant l’incident HF de juillet [S105]. Leçon opérationnelle, cohérente avec les recommandations existantes: renforcer l’isolation des sandbox d’agents, le moindre privilège, le blocage de l’accès metadata et la rotation des secrets.

**Prix et Belgique.** La page BCE n’était pas directement accessible ce jour. Dernier taux de référence confirmé: **1 EUR = 1,1535 USD au 7 août 2026** (vs 1,1554 au 5 août, soit ~0,16 %, quasi stable) [S106]. Snapshots EUR recalculés avec ce taux; l’écart disparaît le plus souvent après arrondi. TVA belge standard confirmée à 21 %, inchangée [S80]. Aucun développement RGPD/AI Act daté dans la fenêtre: l’AI Act reste en application générale depuis le 2 août, article 50 et pouvoirs GPAI actifs, transition ciblée jusqu’au 2 décembre [S57–S59, S78, S92–S93].

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md et historique.md.

**Limites / décisions humaines.** Vérification contrainte par le blocage d’egress vers les domaines officiels: les faits du 6–11 août reposent sur URL officielles datées + corroboration secondaire, non sur lecture directe. À revérifier sur pages officielles avant usage engageant: prix Qwen3.8-Max, tarif direct GLM-5.2 (toujours non confirmé, probable confusion avec GLM-5.1), montant/date de la hausse DeepSeek. Décisions attendues: évaluer Muse Glimmer pour un agent local souverain; rotation des jetons Hugging Face si utilisés; choix de deux fournisseurs pour un pilote FR/NL.

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
