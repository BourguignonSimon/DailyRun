# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-29 — Deuxième exécution

**Verdict.** Contrairement à un cycle calme, cette exécution détecte **plusieurs changements significatifs** depuis le 17 juillet 2026, dont trois nouveaux modèles phares, un lancement d’open weights de premier plan, une consolidation « IA souveraine » côté UE, un incident de sécurité, et le rappel que le **jalon AI Act du 2 août 2026** est imminent et confirmé.

**Limite de vérification majeure.** Lors de cette exécution, la plupart des pages officielles (openai.com, anthropic.com, ai.google.dev, mistral.ai, api-docs.deepseek.com, platform.moonshot.ai, ecb.europa.eu, news.microsoft.com) ont renvoyé **HTTP 403** au récupérateur web. Seul le dépôt GitHub de Kimi K3 a été chargé et vérifié directement. Les prix et dates ci-dessous reposent donc, sauf mention contraire, sur **des extraits d’annonces officielles indexés + des agrégateurs tiers concordants** (souvent recoupés par plusieurs sources indépendantes). Ils sont marqués « source tierce, officiel à confirmer ». Cette contrainte est propre à l’environnement d’exécution, pas un défaut des fournisseurs.

**Changements significatifs dans la fenêtre (17 → 29 juillet 2026).**

- **Anthropic — Claude Opus 5 (24 juillet 2026).** Nouveau modèle de tête remplaçant Opus 4.8; positionné « proche de la frontière à moitié prix », raisonnement adaptatif par défaut. Prix API annoncés **inchangés vs Opus 4.8: 5/25 USD** entrée/sortie par million, cache 0,50 USD, batch -50 %, « Fast mode » ×2,5 vitesse à 10/50 USD; 1 M de contexte, 128 k de sortie. **Sonnet 5** passe en tarif de lancement **2/10 USD jusqu’au 31 août 2026** et devient le modèle par défaut des offres Free/Pro; mode voix ajouté. Source tierce, officiel à confirmer [S61].
- **Google — Gemini 3.6 Flash (21 juillet 2026).** Nouveau modèle de travail remplaçant 3.5 Flash: 1 M de contexte, cutoff mars 2026, ~17 % de jetons de sortie en moins, meilleurs scores code/long contexte/computer-use. **Prix 1,50/7,50 USD** (la **sortie baisse de 9 → 7,50 USD**). Également lancés le même jour: **Gemini 3.5 Flash-Lite** (0,30/2,50 USD) et **Gemini 3.5 Flash Cyber** (accès restreint gouvernements/partenaires). **Gemini 3.5 Pro n’est PAS sorti** (report interne pour insuffisance code/raisonnement). Source tierce, officiel à confirmer [S62].
- **Microsoft — MAI-Image-2.5-Pro et MAI-Voice-2-Flash (23 juillet 2026).** Modèles maison en préversion publique dans Microsoft/Azure AI Foundry, déployés dans PowerPoint, Bing, OneDrive. Image: 5 USD/M texte, 8 USD/M image en entrée, 106 USD/M image en sortie; Voice: 15 USD/M caractères. Source semi-officielle (blogs Microsoft), officiel à confirmer [S63].
- **Mistral — partenariat Microsoft élargi (21 juillet 2026).** Modèles Mistral (frontière + efficaces) distribués via Foundry, Copilot Studio et Azure, **ciblant explicitement l’Europe et les secteurs régulés: cloud souverain, contrôle des données, déploiements déconnectés/contrôlés par le client.** Fait avancer le point « résidence UE — à confirmer ». Sommet AI Now: agent unifié « Vibe », datacenter d’inférence de Les Ulis (10 MW, Q3 2026), pile industrielle avec Airbus/BMW/ASML. Modèles/prix phares apparemment inchangés (Medium 3.5 ~1,50/7,50 USD, 256 k; Large 3; trackers en désaccord sur Large 3). Source tierce/officielle mixte, à confirmer [S64].
- **Moonshot — Kimi K3, open weights (~26 juillet 2026).** Poids publiés en libre téléchargement sous « Kimi K3 License ». **Dépôt vérifié directement:** 2,8 T de paramètres totaux, 104 B activés (MoE), **1 048 576 jetons de contexte**, encodeur vision MoonViT-V2, poids MXFP4 [S65, vérifié]. API `kimi-k3` (live depuis le 16 juillet): **3/0,30/15 USD** entrée/cache/sortie, source tierce à confirmer. K2.7 reste la génération précédente.
- **DeepSeek — dépréciation d’alias (24 juillet 2026).** Les alias hérités `deepseek-chat` / `deepseek-reasoner` sont dépréciés. **Correction de base:** le phare n’est plus V3.2 mais **V4 Flash** (~0,14/0,0028/0,28 USD) et **V4 Pro** (~0,435/0,87 USD); V4 est antérieur à la fenêtre, seule la dépréciation d’alias est nouvelle. Source tierce à confirmer [S66].
- **Hugging Face — incident de sécurité (divulgation 16 juillet 2026).** Intrusion via agent IA autonome dans une partie de l’infrastructure de production (jeux de données internes limités + plusieurs identifiants de service). Chevauche la date de base et reste d’actualité dans la fenêtre. **Non vérifié sur une page de statut HF officielle** — à confirmer [S67].

**Corrections de base (antérieures à la fenêtre mais l’édition du 17 juillet indiquait autre chose).**

- **OpenAI — GPT-5.6 (Sol/Terra/Luna), GA le 9 juillet 2026.** **Deux passes de recherche indépendantes** situent la sortie au 9 juillet, soit **8 jours avant** la base du 17 juillet qui indiquait « GPT-5.5 ». Il s’agit donc soit d’une **erreur de l’édition initiale**, soit d’une donnée d’agrégateur à corriger. Vu la double corroboration, l’observatoire adopte GPT-5.6 comme famille phare **avec drapeau de vérification**: Sol 5/30, Terra 2,50/15, Luna 1/6 USD; écritures de cache désormais ×1,25 de l’entrée non mise en cache; contexte ~1,05 M (non revérifié officiellement). Source tierce, officiel à confirmer [S68].
- **Meta — Muse Spark 1.1** (modèle de code agentique propriétaire, 9 juillet 2026, hors fenêtre): pivot vers des modèles propriétaires; Llama 4 reste le poids ouvert phare [S69].
- **IBM — Granite 4.1** (mai 2026): la base indiquait Granite 4.
- **Cohere — Command A+** confirmé (mai 2026), cohérent avec la base.

**Sans changement significatif dans la fenêtre.** xAI (Grok 4.5 inchangé; remise de lancement -50 % terminée le 21 juillet), AWS Bedrock (rappel: **Bedrock Agents Classic ferme aux nouveaux clients le 30 juillet 2026**), NVIDIA (Nemotron 3 inchangé; SIGGRAPH 19-23 juillet centré sur Cosmos 3 Edge, pas le LLM phare), Alibaba/Qwen (3.7-Max inchangé), Z.AI/GLM (GLM-5.2 inchangé), GitHub Copilot, Cursor, Replit, Perplexity.

**Réglementation et devise.**

- **AI Act — 2 août 2026 CONFIRMÉ et maintenu.** Les obligations de transparence de l’**article 50** (divulgation d’interaction IA, marquage lisible par machine des contenus générés, étiquetage des deepfakes) s’appliquent à cette date, **sans report**. Les pouvoirs d’exécution GPAI et pénalités (art. 101, jusqu’à 15 M€ ou 3 %) deviennent opérants. Ajustement du **Digital Omnibus** (approbation finale du Conseil le 29 juin 2026): le filigrane de l’art. 50(2) glisse au **2 décembre 2026** pour les systèmes déjà sur le marché; obligations haut risque reportées au **2 décembre 2027** (Annexe III autonome) et **2 août 2028** (Annexe I) [S70].
- **Taux BCE.** **EUR/USD = 1,1367 au 28 juillet 2026** (vs 1,1405 le 14 juillet; euro légèrement plus faible), **EUR/CNY ≈ 7,70** fin juillet (vs 7,7327). Source tierce (snapshot indexé), ECB à confirmer — pages 403 [S71]. Impact sur les estimations EUR: **négligeable** (dans l’arrondi).
- **TVA belge — standard 21 % inchangé** (modifications ciblées au 1er mars 2026, pas le taux standard) [S72].

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md et le présent historique. Les noms de modèles phares, prix API représentatifs et le taux de conversion ont été rafraîchis avec drapeaux de vérification là où l’officiel a renvoyé 403.

**Décisions humaines en attente.** Confirmer les prix des nouveaux modèles sur les pages officielles depuis la Belgique (l’environnement d’exécution est bloqué en 403). Décider si un pilote intègre Opus 5, Gemini 3.6 Flash ou GPT-5.6 (Terra/Luna comme paliers coût). Préparer la conformité **article 50** avant le 2 août 2026 (étiquetage IA, divulgation chatbot). Réévaluer Kimi K3 en open weight une fois la qualité FR/NL mesurée indépendamment.

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
