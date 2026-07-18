# Historique de l’observatoire

Les entrées sont ajoutées sans supprimer les précédentes. Les fichiers courants décrivent toujours le dernier état vérifié.

## 2026-07-18 — Révision de suivi

**Verdict.** Changements significatifs détectés depuis l’édition du 17 juillet. Trois évolutions vérifiées ont été intégrées; le périmètre reste 20 écosystèmes (aucune entrée/sortie).

**1. OpenAI — GPT-5.6 (Sol, Terra, Luna).** La famille GPT-5.6 est généralement disponible en API et dans Codex depuis le 9 juillet 2026 et remplace GPT-5.5 comme frontière. L’édition du 17 juillet ne l’avait pas captée (lacune corrigée). Contexte 1,05 M, sortie max 128 k. Prix entrée/sortie par million: Luna 1/6, Terra 2,50/15, Sol 5/30 USD. Nouveautés: réglage Max, Ultra Mode (agents parallèles), Programmatic Tool Calling (le modèle écrit du JavaScript pour orchestrer des outils), bêta multi-agents dans l’API Responses [S61–S62]. Le prix du palier phare (Sol, 5/30) est inchangé par rapport à ce qui était attribué à GPT-5.5.

**2. Anthropic — Claude Fable 5 (« Mythos-class »).** Palier au-dessus d’Opus 4.8, introduit le 9 juin 2026: 10 USD/M entrée, 50 USD/M sortie (le plus cher du catalogue), contexte 1 M, sortie max 128 k; disponible via API Anthropic, Amazon Bedrock, Google Cloud et Microsoft Foundry. Non mentionné dans l’édition initiale (ajout). **Point sensible Belgique/UE: l’accès inclus sur Pro/Max/Team a été étendu jusqu’au 19 juillet 2026, puis bascule vers une facturation à crédits mesurés (10/50 USD par million) à partir du 20 juillet 2026** [S63].

**3. Moonshot — Kimi K3 confirmé par des mesures indépendantes.** Les capacités « à confirmer » le 17 juillet sont désormais étayées: Artificial Analysis publie Intelligence Index 57, Coding Index 76, Agentic Index 50. Modèle MoE 2,8 T (16 experts actifs sur 896), contexte 1 M, vision native. Prix 0,30 (cache) / 3 (entrée) / 15 (sortie) USD par million. Poids ouverts annoncés pour le 27 juillet 2026 sous licence MIT modifiée [S64–S65]. Disponibilité commerciale belge, facture EUR et DPA restent à confirmer.

**Éléments inchangés / non confirmés.** Google (Gemini 3.5 Flash), xAI (Grok 4.5), Mistral, AWS, Microsoft, Meta, DeepSeek, Qwen, NVIDIA, Cohere, IBM, GitHub Copilot, Perplexity, Cursor, Replit, Hugging Face et Z.AI/GLM: aucun changement significatif vérifié dans cette fenêtre d’un jour. Calendrier AI Act: transparence (Article 50) confirmée au 2 août 2026, avec période de grâce jusqu’au 2 décembre 2026 pour le filigrane des systèmes déjà sur le marché; obligations GPAI en vigueur depuis août 2025; simplification « omnibus » (accord politique du 7 mai 2026) — cohérent avec [S57–S59], pas de nouvelle échéance intégrée.

**Fichiers modifiés.** sources.md (S61–S65), comparatif.md, synthese.md, analyse-detaillee.md, bonnes-pratiques-developpement.md, historique.md.

**Limites / décisions humaines.** Tarifs Fable 5 en crédits mesurés et disponibilité exacte des paliers GPT-5.6 par région/checkout belge non simulés. Décision à cadrer avant le 20 juillet: budget et plafond pour tout usage de Fable 5; sinon rester sur Opus 4.8/Sonnet. Les taux de change (S55, BCE 14/07) n’ont pas été rafraîchis; conversions EUR inchangées.

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
