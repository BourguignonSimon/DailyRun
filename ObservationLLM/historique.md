# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-25 — Renouvellement des modèles de tête et consolidation Cursor

**Périmètre.** Composition inchangée: exactement 20 écosystèmes, aucune entrée ni sortie. Le rachat de Cursor par SpaceX/xAI (annonce du 16 juin 2026, clôture attendue au T3 2026) n’étant pas acté, Cursor reste listé séparément sous surveillance.

**Changements significatifs depuis le 17 juillet 2026.**

- **OpenAI GPT-5.6** remplace GPT-5.5 comme famille frontière, en trois tailles: Luna 1/6, Terra 2,50/15, Sol 5/30 USD par million (entrée/sortie), 1 M de contexte, cutoff février 2026, disponibilité générale le 9 juillet 2026 sur ChatGPT, Codex et l’API. Nouvelles fonctions d’API: appel d’outils programmatique, orchestration multi-agents, points de rupture de cache de prompt [S61].
- **Anthropic Claude Opus 5** (24 juillet 2026) succède à Opus 4.8 au même prix 5/25 USD; 1 M de contexte, 128 k de sortie, raisonnement activé par défaut (changement cassant), échelle d’effort low→max, Fast mode 10/50, minimum de cache abaissé à 512 jetons, changements d’outils en cours de conversation (bêta). Présenté comme « intelligence frontière à la moitié du coût de Fable 5 ». Opus 4.8 et Sonnet 5 restent disponibles [S62].
- **Google Gemini 3.6 Flash** (21 juillet 2026): entrée inchangée à 1,50 USD, sortie abaissée de 9 à 7,50 USD par million (-16,7 %), cache 0,15 + stockage 1 USD/M/h, ~17 % de jetons de sortie en moins à tâche égale; Gemini 3.5 Pro annoncé à venir [S63].
- **Moonshot Kimi K3** (16 juillet 2026) désormais confirmé: MoE 2,8 T de paramètres, 1 M de contexte, entrées texte/image/vidéo, poids sous licence MIT modifiée annoncés pour le 27 juillet 2026; en tête du Frontend Code Arena au lancement. Le statut « à confirmer » du 17 juillet est levé, capacités déclarées toujours à revalider [S64].
- **Consolidation SpaceX/xAI–Cursor**: SpaceX (fusionné avec xAI depuis février 2026) rachète Anysphere/Cursor pour 60 Md USD en actions (annonce 16 juin, clôture T3 2026, sous réserve réglementaire). Grok 4.5 (8 juillet 2026, 2/6 USD court, 4/12 au-delà de 200 k, variante rapide 4/18) a été co-entraîné avec Cursor [S65–S66].
- **Mistral** élargit hors du texte: Robostral Navigate (navigation robotique), Mistral OCR 4 et un nouveau MoE « fat but sparse » en accès anticipé partenaires [S67].
- **AI Act**: confirmation que le 2 août 2026, les obligations de transparence de l’article 50 et les pouvoirs d’exécution GPAI de la Commission deviennent applicables; le Digital Omnibus (approbation finale du Parlement le 16 juin 2026) a repoussé le « haut risque » de 12 à 16 mois mais a laissé ces volets intacts. Sanctions jusqu’au plus élevé de 15 M€ ou 3 % du CA mondial [S57–S59, S68].

**Prix et taux.** Base USD/EUR mise à jour au taux BCE du 23 juillet 2026: 1 EUR = 1,1392 USD (contre 1,1405 le 14 juillet); variation −0,1 %, sans impact sur les estimations EUR arrondies. Le taux CNY (7,7327) n’a pas été revérifié ce cycle.

**Vérification.** Page officielle Opus 5 récupérée directement et confirmée. Pages officielles GPT-5.6 et Gemini 3.6 Flash non récupérables ce cycle (403 proxy): valeurs issues de l’index de recherche citant les pages officielles et de sources presse concordantes, à revérifier au prochain cycle. Le cache de prompt de GPT-5.6 n’a pas de valeur officielle stable relevée (marqué ND).

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md (ajout S61–S68), historique.md.

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
