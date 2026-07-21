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

## 2026-07-21 — Ré-vérification ciblée (changements significatifs détectés)

**Périmètre.** Vérification ciblée quatre jours après l’édition initiale, centrée sur les releases de modèles (OpenAI, Anthropic, Google), le calendrier AI Act et les grilles tarifaires les plus volatiles. Les 20 écosystèmes restent identiques; aucune entrée/sortie de la liste. **Des changements significatifs ont été détectés et intégrés.**

**Changements significatifs confirmés sur sources officielles.**

- **OpenAI — nouvelle série frontière GPT-5.6 (Sol, Terra, Luna).** GPT-5.6 Sol devient le modèle de tête pour développeurs/entreprise, orienté raisonnement frontière et travail agentique de longue durée; annonce/déploiement autour du 9 juillet 2026. Prix API affichés 5 USD/M en entrée et 30 USD/M en sortie (même niveau que GPT-5.5). GPT-5.5 était le phare de l’édition du 17 juillet: **remplacé par GPT-5.6 Sol** [S61]. Note de fiabilité: les pages OpenAI renvoient un HTTP 403 via le proxy; prix et positionnement proviennent de la recherche sur domaines officiels, contexte exact à reconfirmer.
- **Anthropic — Claude Fable 5 et Mythos 5.** `claude-fable-5` est désormais **le modèle le plus capable en disponibilité générale**, au-dessus d’Opus 4.8; GA le 9 juin 2026 sur API, Bedrock, Claude Platform on AWS, Google Cloud et Microsoft Foundry. 1 M de contexte, 128 k de sortie, raisonnement adaptatif toujours actif, prix 10 USD/M entrée et 50 USD/M sortie. `claude-mythos-5` partage ses specs/prix mais reste en accès sur invitation (Project Glasswing, cybersécurité défensive). L’édition du 17 juillet listait Opus 4.8 comme phare et **avait omis Fable 5/Mythos 5**: corrigé [S62]. Un billet « Redeploying Claude Fable 5 » existe côté Anthropic mais n’a pas pu être lu (403); l’événement de redéploiement est signalé sans détail vérifié [S63].
- **Anthropic — tarif Sonnet 5.** Prix d’introduction confirmé à 2 USD/M entrée et 10 USD/M sortie jusqu’au 31 août 2026 (tarif standard 3/15) [S62].
- **Google — Gemma 4 open weight sous Apache 2.0.** Famille de poids ouverts (E2B, E4B, 12B, 26B A4B, 31B), 256 k de contexte, 140+ langues, publiée le 2 avril 2026 puis mise à jour furtive le 16 juillet 2026 (Flash Attention 4, corrections d’appel d’outils, vision), sans changement de version. Le passage à **Apache 2.0** lève les restrictions d’usage commercial de l’ancienne licence Gemma: signal notable pour l’open weight en Belgique [S64].
- **AI Act — jalon du 2 août 2026 imminent (J-12).** Les obligations de transparence de l’article 50 (divulgation chatbot, marquage lisible par machine des contenus générés, étiquetage des deepfakes) et les pouvoirs d’exécution de la Commission sur les GPAI s’appliquent au 2 août 2026, avec amendes jusqu’au plus élevé de 15 M€ ou 3 % du chiffre d’affaires mondial. Report ciblé: systèmes préexistants jusqu’au 2 décembre 2026 pour le marquage lisible par machine; modèles GPAI mis sur le marché avant le 2 août 2025 jusqu’au 2 août 2027 [S65].
- **Moonshot — Kimi K3.** Annoncé le 16 juillet 2026; cinq jours plus tard, capacités et qualité restent à confirmer indépendamment. Statut inchangé par rapport à l’édition initiale [S60].

**Prix et Belgique.** Aucun nouveau taux BCE n’a été re-relevé ce jour; la base du 14 juillet 2026 (1 EUR = 1,1405 USD = 7,7327 CNY) reste utilisée pour les conversions, à reconfirmer à la prochaine édition. TVA belge standard 21 % inchangée. Les nouveaux prix documentés: Fable 5 10/50 USD ≈ 8,77/43,84 € HT; GPT-5.6 Sol 5/30 USD ≈ 4,38/26,30 € HT.

**Sécurité et disponibilité.** Pas de régression détectée sur les réglages vérifiés le 17 juillet. Les points à confirmer pour DeepSeek, Qwen, Kimi et GLM (disponibilité belge, DPA, région UE, facture EUR/TVA, rétention) restent ouverts.

**Sources ajoutées.** S61 (OpenAI GPT-5.6), S62 (Anthropic Fable 5/Mythos 5), S63 (redéploiement Fable 5, non lu), S64 (Google Gemma 4), S65 (AI Act, jalons du 2 août 2026).

**Limites / décisions humaines.** Ré-vérification ciblée, non exhaustive sur les 60 sources initiales: seules les pages à fort risque de changement ont été recontrôlées. Pages OpenAI inaccessibles en lecture directe (403). Décisions humaines à prendre inchangées: pilote à deux fournisseurs, tâches réelles, enveloppe de coût, niveau de sensibilité des données, et — nouveau — vérifier l’exposition aux obligations de transparence de l’article 50 avant le 2 août 2026 pour tout produit destiné au public.
