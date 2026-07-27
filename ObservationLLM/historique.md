# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-27 — Deuxième édition

**Résumé.** Des changements significatifs ont été détectés depuis le 17 juillet 2026. Deux nouveaux modèles frontière ont été lancés dans la fenêtre (Anthropic Claude Opus 5 le 24 juillet, Google Gemini 3.6 Flash le 21 juillet avec baisse de prix en sortie), un partenariat de distribution UE structurant a été annoncé (Microsoft × Mistral le 21 juillet), et plusieurs migrations/dépréciations de modèles ont pris effet (DeepSeek, Qwen). La liste des 20 écosystèmes est **inchangée**: aucune entrée, aucune sortie.

**Limite majeure de cette exécution — à lire avant d’utiliser les chiffres.** Contrairement au 17 juillet, la politique de sortie réseau de l’environnement a bloqué (403 CONNECT) l’accès direct à la quasi-totalité des pages officielles (OpenAI, Google, xAI, DeepSeek, Cohere, IBM, BCE, finance.belgium.be, digital-strategy.ec.europa.eu, docs.z.ai, Hugging Face…). Seuls la recherche web et l’API GitHub authentifiée étaient utilisables. **Les faits ci-dessous proviennent donc de résultats de recherche sur des domaines officiels, non d’un rendu direct de la page**, sauf la vérification GitHub. Les figures non reconfirmées conservent la valeur vérifiée du 17 juillet et sont signalées « à revérifier ».

**Changements confirmés dans la fenêtre 2026-07-18 → 2026-07-27.**

- **Anthropic — Claude Opus 5 (2026-07-24).** Nouveau modèle de tête `claude-opus-5`: 1 M de contexte (pas de variante réduite), 128 k de sortie, raisonnement activé par défaut, coupure de connaissances mai 2026. Prix **identiques à Opus 4.8: 5 USD/M entrée, 25 USD/M sortie**. Disponible sur API Claude, Bedrock, Vertex et Microsoft Foundry. **Rupture d’API**: désactiver le raisonnement (`thinking:disabled`) n’est autorisé qu’à effort ≤ `high`; `xhigh`/`max` renvoie HTTP 400. Fast mode (aperçu) étendu à Opus 5 (10/50 USD, API Claude seulement) et **retiré pour Opus 4.7**. Nouveaux betas (changement d’outils en cours de conversation, mode `fallbacks` côté serveur); prompt cacheable minimal abaissé à 512 jetons sur Opus 5. Opus 4.8 devient « legacy » [S63–S65].
- **Google — Gemini 3.6 Flash + variantes (2026-07-21).** Gemini 3.6 Flash **remplace** Gemini 3.5 Flash: entrée inchangée à 1,50 USD/M, **sortie abaissée de 9 à 7,50 USD/M** (~-17 %), 1 M d’entrée / 64 k de sortie. Ajout de Gemini 3.5 Flash-Lite (0,30/2,50 USD) et Gemini 3.5 Flash Cyber (orienté sécurité). Tarifs cache/batch/flex/priority de la 3.6 non reconfirmés sur page officielle [S66–S67].
- **Microsoft × Mistral (2026-07-21).** Extension du partenariat: Mistral Medium 3.5 et Mistral OCR 4 arrivent dans Microsoft Foundry; Medium 3.5 arrive dans Copilot Studio. Cadrage explicite marchés UE/secteurs régulés, Microsoft Sovereign Cloud, déploiement cloud/Azure Local/déconnecté. Concerne à la fois l’entrée Microsoft et l’entrée Mistral [S68–S69].
- **DeepSeek — retrait de noms hérités (2026-07-24 15:59 UTC).** `deepseek-chat` et `deepseek-reasoner` sont retirés et pointent vers les modes non-raisonnant / raisonnant de **`deepseek-v4-flash`**. Le passage à V4 (aperçu depuis avril 2026) précède la fenêtre; seul le retrait des noms est daté dans la fenêtre. Prix/contexte V4 rapportés (~0,14 USD entrée, ~0,28 USD sortie, cache ~0,028 USD, 1 M) très différents de la base V3.2 — **à revérifier** [S70].
- **Alibaba/Qwen — fin de promotions (fenêtre).** Remise de 50 % sur Qwen3.7-Max expirant vers le 22–23 juillet (hausse effective du prix), 200 requêtes gratuites/jour jusqu’au 31 juillet, et avis de fin de mises à jour de Qwen-Turbo (migration vers Qwen-Flash) [S71].
- **GitHub Copilot (2026-07-22).** Nouveau tableau de bord « usage metrics impact » pour administrateurs entreprise. Reporting uniquement: aucun changement de plan, prix, crédits ou données [S72].
- **Cursor (2026-07-22).** Le mode Auto est désormais propulsé par « Cursor Router » (modes Intelligence/Balance/Cost), activé par défaut pour les plans Teams, restrictions administrateur possibles. Fonction d’optimisation de coût, pas une refonte tarifaire; la politique de données reste celle du 15 juillet [S73].
- **Moonshot/Kimi — K3 (fenêtre, non confirmé sur canal officiel).** Sortie des poids ouverts annoncée pour le 27 juillet 00:00 UTC sur l’organisation Hugging Face officielle; au moment du contrôle, **l’organisation GitHub officielle ne contenait aucun dépôt Kimi-K3** (seulement K2, K2.5 et un nouveau dépôt `nano-kpu` du 23 juillet). Prix API rapporté 3/15 USD, licence « Modified MIT » attendue. À traiter comme **capacité déclarée non vérifiée indépendamment** [S75].
- **UE — AI Act (2026-07-20).** La Commission a publié des lignes directrices sur les obligations de transparence pour fournisseurs/déployeurs. **Le jalon du 2 août 2026 (transparence Art. 50, pouvoirs GPAI) reste inchangé** [S57, S74].

**Corrections de base (antérieures à la fenêtre, absentes ou incomplètes le 17 juillet).**

- **OpenAI — GPT-5.6 (Sol/Terra/Luna), GA le 2026-07-09.** GPT-5.6 Sol est le modèle de tête depuis le 9 juillet, avec structure tarifaire de tête identique (5/30 USD, multiplicateur au-delà de 272 k). La base du 17 juillet citait encore GPT-5.5 comme phare: **correction**. GPT-5.5 reste documenté comme cible de remplacement de modèles plus anciens dépréciés (échéance 2026-12-11) [S61–S62].
- **Anthropic — Fable 5 et Mythos 5 (GA 2026-06-09), Sonnet 5 (GA 2026-06-30, prix de lancement 2/10 USD jusqu’au 31 août puis 3/15 USD).** Contexte utile pour situer Opus 5, positionné « intelligence frontière à la moitié du coût de Fable 5 » [S65].
- **Cohere — Command A+ (2026-05-20): 128 k de contexte, 64 k de sortie, 48 langues dont toutes les langues officielles de l’UE.** La base décrivait « Command A / 256 k »: précision utile pour la pertinence FR/NL [S32].
- **IBM — watsonx.ai v2.4 (2026-06-19): IBM Z/LinuxONE avec Spyre, Model Gateway en préversion, Granite 4.1 (3b/8b/30b) et granite-vision-4-1-4b** [S35].
- **Z.AI/GLM — GLM-5.2 (2026-06-16)**, déjà mis en avant dans la base; grille de prix inchangée dans les résultats.

**Prix et Belgique.** Base de conversion **maintenue** aux taux BCE du 14 juillet 2026 (1 EUR = 1,1405 USD = 7,7327 CNY) faute d’accès direct. Un léger tassement de l’euro a été observé par recherche autour des 23–24 juillet (~1,139 USD, ~7,70 CNY) mais **n’a pas pu être vérifié directement** cette fois; l’impact sur les conversions est négligeable (<0,2 %). TVA belge standard confirmée à 21 %.

**Inchangé / aucune évolution détectée dans la fenêtre.** AWS Bedrock, Meta/Llama, xAI/Grok 4.5, NVIDIA/Nemotron 3, Cohere (au-delà de la correction), IBM (au-delà de v2.4), Perplexity (éléments de juillet non datables dans la fenêtre), Replit, Hugging Face, Z.AI/GLM. Pour ces acteurs, les figures du 17 juillet sont conservées et signalées à revérifier lorsque l’accès direct sera rétabli.

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
