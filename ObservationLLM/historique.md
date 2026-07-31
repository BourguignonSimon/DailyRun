# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-31 — Deuxième édition: cycle de changements significatifs

**Verdict.** Contrairement à un cycle calme, la période du 17 au 31 juillet 2026 a été **dense**. Trois familles de modèles de tête ont bougé, un jalon réglementaire européen majeur arrive le 2 août 2026, et plusieurs assistants de code ont publié des nouveautés. Le périmètre reste **20 écosystèmes**; aucune entrée ni sortie de la liste.

**Note de méthode et de confiance.** Ce cycle, la plupart des pages officielles fournisseurs ont renvoyé un blocage réseau (HTTP 403) à l’outil de récupération automatique. Seule la **grille de prix Anthropic** a pu être lue directement. Les autres faits sont **corroborés par plusieurs sources indépendantes** citant les pages officielles. Le niveau de confiance est indiqué: **[Vérifié]** lecture primaire directe; **[Corroboré]** plusieurs sources concordantes; **[À confirmer]** source unique ou date non certaine. Les rumeurs non confirmées (Meta « Muse Spark »/Llama 4.5, Qwen « 2,4T paramètres », Grok 4.3, tarification « heures de pointe » DeepSeek) ont été **exclues**.

**Changements de modèles.**

- **OpenAI — [Corroboré].** La famille **GPT-5.6** (Sol, Terra, Luna) est le nouveau frontière; elle a été lancée le **9 juillet 2026**, donc *avant* le dernier relevé, mais avait été manquée par l’édition du 17 juillet (qui listait encore GPT-5.5). Correction appliquée. Le **30 juillet 2026**, baisse de prix: **Terra −20 % → 2/12 USD**, **Luna −80 % → 0,20/1,20 USD** par million entrée/sortie; **Sol reste à 5/30 USD** (même point que GPT-5.5). Le « Priority Processing » est renommé **« Fast mode »** (`service_tier=fast`), sans rupture [S61–S62].
- **Anthropic — [Vérifié].** **Claude Opus 5** publié le **24 juillet 2026**, au **même prix qu’Opus 4.8: 5/25 USD**, cache lecture 0,50 USD, batch 2,50/12,50 USD, contexte 1 M, sortie max 128 k. **Fast mode** en préversion recherche pour Opus 5/4.8 (10/50 USD). **Sonnet 5** en prix d’introduction **2/10 USD jusqu’au 31 août 2026**, puis 3/15 USD au 1ᵉʳ septembre. Apparaissent aussi **Fable 5** (10/50 USD) et **Mythos 5** (disponibilité limitée) [S07, S63].
- **Google — [Corroboré].** **Gemini 3.6 Flash** publié le **21 juillet 2026**: entrée **1,50 USD inchangée, sortie ramenée de 9 à 7,50 USD**, contexte 1 M (1 048 576 entrée / 65 536 sortie), ~17 % de jetons de sortie en moins, usage ordinateur intégré. Nouveaux paliers **Gemini 3.5 Flash-Lite** (~0,30/2,50 USD) et **Gemini 3.5 Flash Cyber** (variante sécurité) [S64].
- **DeepSeek — [À confirmer].** Retrait de `deepseek-chat` et `deepseek-reasoner` le **24 juillet 2026**; bascule vers **DeepSeek V4** (contexte 1 M). Tarifs rapportés: V4-Pro ~1,74/3,48 USD, V4-Flash ~0,14/0,28 USD. V4 lui-même date d’avril 2026; l’événement du cycle est l’achèvement de la migration [S71].
- **Alibaba/Qwen — [À confirmer].** **Qwen3.8-Max-Preview** annoncé le **~19 juillet 2026**, nouveau modèle phare au-dessus de Qwen 3.7 Max; tarif de préversion ~10 % du tarif normal plus remise nocturne. Prix par jeton et contexte exacts non extraits d’une page officielle lisible [S72].
- **xAI — [À confirmer].** Grok 4.5 ouvert aux utilisateurs UE dans la console API (doc datée du 17 juillet). Prix et contexte inchangés (2/6 USD court contexte, 500 k) [S22].
- **Mistral, Meta, IBM, Z.AI/GLM — [Corroboré] aucun changement dans la fenêtre.**

**Assistants de code et agents.**

- **GitHub Copilot — [À confirmer].** Compétences d’agent (SKILL.md) et serveurs **MCP** en disponibilité générale pour la revue de code le **29 juillet 2026** (appels d’outils MCP en lecture seule); préversion « Agent » dans Visual Studio le 30 juillet. Prix inchangés [S67].
- **Cursor — [À confirmer].** **Cursor Router** lancé le **22 juillet 2026**: routage intelligent par requête (modes Intelligence/Balance/Cost), activé par défaut pour les équipes, économies annoncées ~30–60 %. Politique de données inchangée (dernière mise à jour 15 juillet) [S68].
- **Replit — [À confirmer].** Baisse des prix Replit Cloud effective le **1ᵉʳ août 2026**, plus flexibilité de changement de plan/cadence (changelog du 24 juillet) [S69].
- **Moonshot/Kimi — [À confirmer].** **Poids ouverts de Kimi K3** publiés le **27 juillet 2026** sur Hugging Face, après le lancement hébergé du 16 juillet [S70].

**Plateformes entreprise.**

- **Microsoft — [À confirmer], pertinent RGPD.** **OpenAI ajouté comme sous-traitant** pour Microsoft 365 Copilot et Copilot Studio le **24 juillet 2026** (modèles opérés par OpenAI sur son infrastructure, distincts d’Azure OpenAI); activation automatique sauf opt-out préalable des administrateurs [S73]. À noter aussi: le prix M365 Copilot Business du dernier relevé (15,60 €) paraît périmé depuis une refonte tarifaire du 1ᵉʳ juillet 2026 (hors fenêtre).
- **AWS — [À confirmer].** Baisse Bedrock des GPT-5.6 (Luna −80 %/Terra −20 %) le 30 juillet; métadonnées produit Bedrock standardisées dans les Data Exports (20 juillet) [S74].
- **NVIDIA — [À confirmer].** **NVIDIA Agent Toolkit** (successeur du NeMo Agent Toolkit) enrichi de PhysicsNeMo et CUDA-X le 27 juillet [S75].
- **Perplexity — [À confirmer].** Agent de bureau « Personal Computer » lancé sur Windows le 28 juillet (200 USD/mois); migration Sonar → Agent API rapportée mais date non certaine [S76].
- **Cohere — [À confirmer].** Partenariat Carahsoft/North pour le secteur public américain (30 juillet); pas de changement de prix ni de modèle. **Hugging Face:** piste de changelog fin juillet non confirmée.

**Réglementation UE — [Corroboré].** Le **règlement (UE) 2026/1744 « Digital Omnibus on AI »**, modifiant le règlement (UE) 2024/1689, a été publié au Journal officiel le **24 juillet 2026** et est **entré en vigueur le 27 juillet 2026**. Il **reporte** les obligations « haut risque »: Annexe III (cas d’usage) du 2 août 2026 au **2 décembre 2027**; Annexe I (sécurité des produits) au **2 août 2028**. En revanche, les **obligations de transparence de l’article 50 s’appliquent bien au 2 août 2026** (chatbots à déclarer, contenu synthétique à marquer en lecture machine, deepfakes à étiqueter); sanctions jusqu’à 15 M€ ou 3 % du CA mondial. Ce jalon est **imminent** [S65–S66, S57–S59].

**Devises et TVA — [Corroboré partiel].** Nouveau taux de référence BCE **EUR/USD = 1,1476 au 30 juillet 2026** (contre 1,1405 le 14 juillet); l’euro se renforce légèrement face au dollar. Le taux **EUR/CNY n’a pas pu être reconfirmé** de façon fiable ce cycle (sources divergentes entre ~7,69 et 8,2216): il est marqué **à confirmer** et les conversions CNY (Qwen) conservent l’avertissement. **TVA standard belge inchangée à 21 %** (le relèvement à 22 % envisagé a été écarté) [S55–S56].

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md, historique.md et README.md. Conversions recalculées avec 1 EUR = 1,1476 USD.

**Limites / décisions humaines.** Le blocage réseau des pages officielles impose une **revérification humaine** des éléments marqués [À confirmer] avant tout engagement contractuel. Les prix sont des tarifs catalogue. Aucun checkout belge ni contrat n’a été simulé. Priorité d’action recommandée: (1) préparer la conformité à l’article 50 pour le 2 août; (2) réévaluer le rapport coût/qualité après les baisses OpenAI/Google et l’arrivée d’Opus 5; (3) auditer l’ajout d’OpenAI comme sous-traitant Microsoft si M365 Copilot est utilisé.

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
