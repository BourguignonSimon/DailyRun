# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

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

## 2026-07-19 — Deuxième exécution (revérification et corrections)

**Périmètre.** Toujours 20 écosystèmes; aucune entrée ni sortie de la liste. Cette exécution a revérifié les faits volatils face à l’état du 17 juillet et corrigé plusieurs éléments que l’édition initiale avait manqués ou datés de façon obsolète. Trois pistes de recherche parallèles (frontière occidentale, modèles chinois/open weight, entreprise + code + régulation UE) plus vérification directe des deux items les plus sensibles pour un résident belge (AI Act, incident Hugging Face).

**Contexte de fiabilité.** Plusieurs pages officielles (openai.com, x.ai, mistral.ai, ecb.europa.eu, huggingface.co) ont renvoyé un blocage anti-robot au moment du contrôle. Les faits nouveaux issus uniquement de sources secondaires sont marqués « corroboré presse » dans [sources.md](sources.md) (S61–S71) et restent à confirmer sur la page primaire. Cela n’enlève rien à leur caractère significatif, mais impose la prudence avant tout usage engageant.

**Changements significatifs observés depuis le 17 juillet.**

- **OpenAI GPT-5.6 (Sol/Terra/Luna), GA le 9 juillet 2026** — nouvelle famille frontière remplaçant GPT-5.5 comme tête d’affiche; prix par million: Sol 5/30, Terra 2,50/15, Luna 1/6 USD (entrée/sortie), contexte 1 M sur les trois. GPT-5.5 n’est pas retiré (GPT-5.5 Instant reste le modèle de chat ChatGPT par défaut). **Correction: l’édition initiale, pourtant datée du 17 juillet, présentait encore GPT-5.5 comme le modèle frontière** [S61].
- **AI Act — Digital Omnibus IA signé le 8 juillet 2026** — les obligations « haut risque » autonomes (Annexe III) sont reportées du 2 août 2026 au **2 décembre 2027**; celles intégrées à des produits réglementés au 2 août 2028. **En revanche, les obligations de transparence de l’article 50 restent au 2 août 2026** (information d’interaction IA, marquage des contenus générés), avec un délai de grâce du marquage art. 50(2) jusqu’au 2 décembre 2026 pour les systèmes déjà sur le marché. Publication au Journal officiel attendue avant le 2 août 2026 [S63]. C’est le changement le plus structurant pour la Belgique.
- **EDPB — lignes directrices 03/2026 sur le web scraping pour l’IA générative** (+ anonymisation et blockchain), adoptées en plénière le 8 juillet 2026, en consultation publique jusqu’au 30 octobre 2026. Premier cadre détaillé: la visibilité publique ne vaut ni consentement ni base légale; scraping de catégories particulières en principe interdit [S64].
- **xAI Grok 4.5 reste bloqué dans les 27 États de l’UE** au ~16 juillet 2026 (obligations de risque systémique de l’AI Act + RGPD); accès UE « attendu plus tard dans le mois » sans date confirmée. **Cette indisponibilité UE n’était pas signalée dans l’édition initiale** [S66].
- **Kimi K3 (Moonshot), confirmé** — ~2,8 T de paramètres (MoE 16/896 experts actifs), contexte 1 M, vision native; **n° 1 sur LMArena Frontend Code Arena (~1 679), devant Claude Fable 5** (éval tierce en aveugle). Prix API cités: ~0,30 USD/M entrée cache-hit, ~3 USD/M cache-miss, ~15 USD/M sortie. **Les poids ne sont pas encore publiés: promis pour le 27 juillet 2026 sous licence MIT modifiée.** La note « capacités à confirmer » du 17 juillet est donc largement levée, sauf les poids [S62].
- **DeepSeek — passage à V4** — l’édition initiale (V3.2, prix 0,27/0,07/1,10) apparaît obsolète: V4 en préversion le 24 avril 2026, V4 « officiel » à la mi-juillet avec, pour la première fois, une **tarification heures pleines/creuses** (prix doublés 09–12 h et 14–18 h) et retrait des alias hérités le 24 juillet 2026. À confirmer sur la page officielle (accès bloqué au contrôle) [S65].
- **Hugging Face — incident de sécurité divulgué le 16 juillet 2026** — intrusion dans une partie de l’infrastructure de production, pilotée de bout en bout par un système d’agents IA autonomes et détectée en grande partie par IA; accès à un ensemble limité de jeux de données internes et à des identifiants de service. Pas de trace d’altération des modèles/datasets/Spaces publics; chaîne d’approvisionnement vérifiée saine. Point notable: l’attaquant n’était lié par aucune politique d’usage tandis que les garde-fous des modèles hébergés gênaient le travail forensique défensif [S67].
- **Perplexity — SPACE (bac à sable agentique, isolation d’identifiants par session) et Comet Enterprise** (navigateur d’entreprise, MDM, pas d’entraînement sur les données), 15 juillet 2026 [S68].
- **NVIDIA — Nemotron parole (ASR), RAG multimodal et sécurité** et adoption par de grandes entreprises japonaises, 15 juillet 2026 [S69].
- **Replit — tarification de l’Agent basée sur l’effort** (facturation au temps/compute par requête), déploiement depuis le 1er juillet 2026; prix des plans inchangés [S70].
- **Google — Gemini 3.5 Pro** attendu vers le 17 juillet aurait été **reporté** (peut-être en août); non-lancement, ne modifie pas les faits de base. Gemini 3.5 Flash inchangé [S71].
- **Alibaba/Qwen** — pas de nouveau modèle; approbation en Chine d’Apple Intelligence adossé à Qwen le 15 juillet 2026 (contextuel).

**Sans changement significatif dans la fenêtre.** Anthropic (Opus 4.8/Sonnet 5, prix et Claude Code inchangés; entrées de notes de version 10–15 juillet purement fonctionnelles), Mistral (cœur inchangé; écart mineur à revérifier: pages tierces affichent « Mistral Large 3 » et Medium 3.5 ~1,5/7,5 USD), Z.AI/GLM (GLM-5.2 déjà couvert), Meta/Llama (Llama 4 inchangé; restriction UE persistante sur le multimodal), Microsoft, AWS (GA de GPT-5.6 sur Bedrock le 9 juillet), Cohere, IBM, Cursor (mise à jour data-use du 15 juillet = déjà le fait de référence, pas une nouveauté), GitHub Copilot (prix inchangés; évolutions de la liste de modèles seulement).

**Taux de change.** Dernier taux de référence BCE au 17 juillet 2026: **1 EUR = 1,1435 USD = 7,7501 CNY** (contre 1,1405 / 7,7327 au 14 juillet). Dérive < 0,3 %, non matérielle pour les estimations EUR arrondies; base et dates actualisées dans les fichiers [S55].

**Impact sur les livrables.** Mises à jour ciblées de `synthese.md` (section « Ce qui a changé », AI Act art. 50 vs report haut risque, GPT-5.6, blocage UE de Grok, Kimi K3), `comparatif.md` (lignes OpenAI, xAI, DeepSeek, Kimi; base de conversion), `analyse-detaillee.md` (OpenAI, xAI, DeepSeek, Kimi, Hugging Face, lecture régulation), `bonnes-pratiques-developpement.md` (calendrier AI Act, leçon sécurité de l’incident HF, prix heures pleines DeepSeek) et `sources.md` (S61–S71).

**Limites / décisions humaines.** Confidences hétérogènes: haute pour GPT-5.6 et le Digital Omnibus (multiples sources datées), moyenne pour DeepSeek V4 et les prix Kimi K3 (page primaire inaccessible). Ne pas rebâtir les tableaux de prix sur des données « corroboré presse » sans reconfirmation officielle. Décisions humaines inchangées: choisir deux fournisseurs pour un pilote, définir tâches, budget et sensibilité des données. Pour un résident belge visant l’art. 50 au 2 août 2026, prévoir dès maintenant l’étiquetage des contenus IA et l’information des utilisateurs.
