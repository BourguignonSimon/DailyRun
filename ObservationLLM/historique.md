# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-22 — Mise à jour (changements significatifs détectés)

**Périmètre.** Les 20 écosystèmes sont inchangés (aucune entrée ni sortie). Cette édition **corrige** des faits erronés/périmés de la base du 17 juillet et **intègre** les évolutions du 17 au 22 juillet. Recherche menée par cinq axes parallèles (frontières, cloud/entreprise, européens/open weight, code/agents, taux et réglementation), sources recoupées dans [sources.md](sources.md). Plusieurs pages primaires ont renvoyé HTTP 403; chiffres recoupés via sources secondaires et signalés « à confirmer » le cas échéant.

**Nouveautés réelles dans la fenêtre (17→22 juillet).**

- **Google — 21 juillet:** GA de **Gemini 3.6 Flash** (1,50/0,15/7,50 USD, sortie moins chère que 3.5 Flash), **3.5 Flash-Lite** et **3.5 Flash Cyber**; **Gemini 4** teasé [S10, S67]. Seul lancement de modèle nettement dans la fenêtre.
- **Alibaba/Qwen — 19 juillet:** aperçu **Qwen3.8-Max-Preview** (2,4 T, multimodal), vendu via Token Plan [S45].
- **Microsoft — 24 juillet:** **OpenAI activé par défaut comme sous-traitant** de M365 Copilot/Copilot Studio pour tous les tenants (sauf opt-out); peut sortir de l’EU Data Boundary [S16–S17, S19]. Décision urgente pour les tenants belges.
- **AWS — 13–20 juillet:** GPT-5.6 (Sol/Terra/Luna) GA sur Bedrock, nouvelle console, AgentCore étendu à l’Europe (Milan, Espagne) [S21–S24].
- **DeepSeek:** **V4** en production (mi-juillet), tarif heures pleines/creuses; **retrait des alias V3.2 le 24 juillet** [S42–S43].
- **Kimi K3:** poids ouverts **toujours attendus le 27 juillet** (annonce du 16 juillet); API active [S55–S56].

**Corrections de la base du 17 juillet.**

- **OpenAI:** frontière = **GPT-5.6** (Sol 5/0,50/30, Terra 2,50/15, Luna 1/6, 1 M de contexte), GA le 9 juillet — pas GPT-5.5/1,05 M [S01–S02].
- **Anthropic:** tête de gamme = **Claude Fable 5** (~10/50 USD, à confirmer) au-dessus d’**Opus 4.8** (5/25); **Sonnet 5** en intro 2/10 jusqu’au 31 août puis 3/15, 1 M sans surcoût [S06–S09].
- **Google:** flagship = **Gemini 3.1 Pro** (2/0,20/12; 4/18 >200 k) [S11].
- **Z.AI/GLM:** flagship = **GLM-5.2** (744B MoE, 1 M de contexte, MIT), pas GLM-5.1 200 k [S59–S60].
- **Cohere:** flagship **Command A+** (mai); **NVIDIA:** **Nemotron 3 Ultra 550B** (juin); **IBM:** Granite 4.x, watsonx.ai v2.4 [S26–S33].
- **Meta:** **Muse Spark 1.1** (9 juillet, US-only); rappel que le multimodal Llama 4 est **interdit aux entreprises UE** [S38–S39].
- **Mistral:** « Le Chat » renommé **Vibe** (agents distants sur Medium 3.5); prix Large 3 disputé [S35–S36].

**Prix et taux.** Base BCE actualisée: **1 EUR ≈ 1,1418 USD** (21 juillet, contre 1,1405 le 14 juillet) [S61]; **1 EUR ≈ 8,26 CNY (à confirmer**, remplace la valeur 7,7327 jugée erronée). TVA belge standard maintenue à 21 %; changements sectoriels 2026 sans effet sur le taux standard [S62].

**Réglementation — changement majeur.** **Digital Omnibus IA** (accord 7 mai, Parlement 16 juin, Conseil 29 juin, signé vers le 8 juillet 2026): **report des échéances haut risque** (Annexe III → 2 décembre 2027; Annexe I → 2 août 2028). Restent applicables **au 2 août 2026**: **article 50** (transparence, marquage des contenus générés, deepfakes) et **outil d’exécution GPAI** avec sanctions (jusqu’à 15 M€ ou 3 % du CA mondial) [S63–S66, S68]. Date exacte d’entrée en vigueur du texte à confirmer sur EUR-Lex.

**Sécurité et disponibilité.** OpenAI API sans entraînement par défaut, résidence EEE/Suisse pour services éligibles; Gemini/Vertex UE; GitHub B/E sans entraînement; Cursor Privacy Mode/ZDR (maj 15 juillet). **Anthropic sans résidence UE native** (via Bedrock/Vertex). **xAI: exposition RGPD la plus élevée** (plaintes noyb, enquêtes DPC/CNIL/ICO). **DeepSeek: non défendable en direct** (représentant UE rejeté, blocage Garante). **Qwen: région Francfort mais routage Singapour et pas de représentant RGPD.** Kimi/GLM: UE à confirmer, poids ouverts pour auto-hébergement.

**Fichiers mis à jour.** synthese.md, comparatif.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, sources.md (registre S01–S68) et historique.md.

**Limites / décisions humaines.** Checkouts belges et contrats non simulés; plusieurs pages primaires inaccessibles (403). Éléments « à confirmer »: prix Fable 5 et caches Terra/Luna, prix Large 3, taux EUR/CNY, date d’entrée en vigueur du Digital Omnibus, disponibilité UE de DeepSeek/Qwen/Kimi/GLM. Décision M365 (sous-traitant OpenAI) à trancher avant le 24 juillet.

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
