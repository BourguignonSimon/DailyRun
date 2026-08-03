# Bonnes pratiques de développement

État vérifié le **3 août 2026** (édition précédente : 17 juillet 2026). Les mentions distinguent **[Officiel]** recommandation publiée par un fournisseur, **[Consensus]** pratique convergente entre plusieurs fournisseurs et **[Déduction]** conclusion analytique de cet observatoire.

> **Évolutions de la période.** Pas de rupture méthodologique : consolidation continue autour des défenses contre l’injection de prompt, du durcissement des serveurs MCP (traités comme des dépendances tierces : revus, épinglés par version, audités) et des sorties structurées comme contrôle de fiabilité et de sûreté. **Nouveauté contraignante** : le jalon AI Act du **2 août 2026 est entré en application** — les obligations de transparence de l’article 50 (divulgation d’interaction avec une IA, marquage lisible par machine et étiquetage des contenus générés) imposent désormais des contrôles produit concrets [S57–S59]. Les sorties rapprochées de modèles (GPT-5.6, Claude Opus 5, Gemini 3.6 Flash, DeepSeek V4-Flash, Kimi K3) et le retrait d’alias (DeepSeek, 24 juillet) confirment l’importance d’épingler les versions.

## Architecture de référence

1. **[Consensus]** Commencer par le modèle le moins coûteux qui réussit l’évaluation; réserver le modèle frontière aux cas difficiles.
2. **[Consensus]** Séparer instructions système, contexte récupéré, données utilisateur et schéma de sortie avec délimiteurs explicites.
3. **[Consensus]** Donner aux outils des noms, descriptions et schémas stricts; valider côté serveur tous les arguments et toutes les sorties.
4. **[Consensus]** Utiliser RAG pour les connaissances privées ou changeantes; conserver provenance, date, score et droit d’accès avec chaque passage.
5. **[Consensus]** Résumer/compacter l’historique; ne pas remplir la fenêtre de contexte par défaut. Le long contexte n’est ni une mémoire fiable ni un substitut au retrieval.
6. **[Consensus]** Tester sur données réelles: exactitude, citations, format, sécurité, coût, latence, multilingue FR/NL et intervention humaine.
7. **[Consensus]** Diffuser en streaming pour l’interactif; utiliser cache pour préfixes stables et batch/flex pour tâches asynchrones.
8. **[Consensus]** Implémenter délais, retries avec jitter, idempotency, circuit breaker, quotas et fournisseur/modèle de secours.
9. **[Consensus]** Garder les secrets côté serveur; jamais dans prompt, navigateur, dépôt, logs ou sortie modèle.
10. **[Déduction]** Pour un agent, l’unité économique correcte est la tâche réussie: jetons + outils + recherche + sandbox + stockage + retries + revue humaine.

## Prompting et contexte

- Écrire l’objectif, les contraintes, les données autorisées, les critères d’acceptation et le format attendu.
- Fournir quelques exemples représentatifs seulement quand ils améliorent une métrique; éviter les exemples contradictoires.
- Demander une sortie JSON sous schéma lorsque la machine consomme le résultat. Rejeter et relancer de façon bornée si validation échoue.
- Ne jamais injecter aveuglément une page web, un email ou un document dans les instructions prioritaires. Les contenus récupérés sont des données non fiables.
- Pour les gros documents, découper selon la structure, récupérer un petit top-k, reranker, citer, puis demander au modèle de déclarer l’absence de preuve.
- Conserver un budget de jetons pour la réponse et les appels d’outils. Tester les seuils de tarification long contexte.
- Versionner prompt, modèle, outils, dataset et évaluateur ensemble.

## Outils, agents et mémoire

- Outils en lecture seule par défaut; élévation temporaire pour écrire.
- Liste blanche d’hôtes, commandes et chemins; sandbox réseau et système de fichiers.
- Confirmation humaine pour paiement, suppression, permission, envoi externe et changement irréversible.
- Limites: nombre d’étapes, temps, jetons, coût, appels par outil et taille de sortie.
- Idempotency key pour toute action répétable; journal d’audit liant intention, arguments validés, résultat et approbation.
- Mémoire structurée avec type, source, date, expiration et consentement. Permettre affichage, correction et suppression.
- Détecter boucle, répétition, dérive d’objectif et absence de progrès; arrêter avec état explicite.
- Pour le code: branche isolée, diff minimal, tests, lint, SAST, scan secrets et revue humaine avant fusion.

## Évaluations et observabilité

### Jeu minimal

- 50 à 200 cas réels, dont erreurs, adversarial, français, néerlandais et entrées longues.
- Résultat attendu ou grille humaine; tolérances explicites.
- Mesures: réussite de tâche, exactitude/citation, respect schéma, refus approprié, coût, latence p50/p95, jetons, appels d’outils, retries et interventions.
- Comparaison par paire aveugle quand la vérité n’est pas unique; échantillon humain régulier pour calibrer un juge LLM.
- Canari sur petite part du trafic avant migration; rollback immédiat par alias interne.

### Télémétrie

Tracer request ID, version modèle, version prompt, outils, temps, jetons/cache, classe de service, résultat de validation et coût estimé. Ne pas journaliser les secrets ni le contenu brut par défaut. Définir rétention, accès, redaction et localisation des traces.

## Sécurité et conformité

- Inventorier finalité, données, fournisseur, modèle, région, sous-traitants et responsable interne.
- Classer les données avant envoi; minimiser et pseudonymiser.
- Signer DPA et clauses de transfert; vérifier durée de rétention, entraînement, suppression, chiffrement, SSO/RBAC, audit et certifications.
- Modéliser prompt injection, exfiltration, tool poisoning, SSRF, code arbitraire, escalade de privilèges, supply chain et fuite inter-utilisateurs.
- Filtrer entrée et sortie selon le risque, mais ne jamais considérer un garde-fou fournisseur comme contrôle unique.
- Documenter supervision humaine, transparence à l’utilisateur et limites. **L’article 50 de l’AI Act est applicable depuis le 2 août 2026** : prévoir la divulgation explicite d’une interaction avec une IA, le marquage lisible par machine des contenus générés et l’étiquetage des hypertrucages. Pour les modèles GPAI, les pouvoirs de sanction (jusqu’à 15 M€ ou 3 %) sont actifs ; les systèmes à haut risque restent repoussés (décembre 2027 / août 2028) [S57–S59].

## Coût, performance et résilience

- Routeur simple: petit modèle d’abord, escalade sur faible confiance ou cas critique.
- Cache exact pour instructions stables; cache sémantique seulement avec règles de confidentialité et invalidation.
- Batch/flex pour extraction, évaluation et résumé non urgent; priority/réservé uniquement avec SLO justifié.
- Réduire le contexte avant de changer de modèle. Mesurer le coût des jetons de raisonnement et des résultats d’outils réinjectés.
- Limites par utilisateur/projet; alertes 50/80/100 %; kill switch central.
- Backoff exponentiel avec jitter sur 429/5xx, respect Retry-After, timeout total et retries bornés.
- Tester indisponibilité région, quota épuisé, réponse invalide, outil lent et changement de comportement.

## Particularités des 20 fournisseurs

### 1. OpenAI

**[Officiel, S01/S05/S61]** Utiliser snapshots pour stabilité, Responses/Agents SDK pour outils, structured outputs, streaming, batch/flex et IDs de requête. Le phare est **GPT-5.6 (Sol/Terra/Luna)** ; Terra et Luna ont baissé le 30 juillet 2026 (Luna −80 %). **[Déduction]** Exploiter la baisse via un routage petit modèle d’abord ; tester le seuil >272 k de Sol avant d’autoriser des contextes géants ; budgéter le surcoût de résidence UE (+10 %) et séparer budget outils et tokens.

### 2. Anthropic

**[Officiel, S06–S08]** Exploiter prompt caching, batch -50 %, modèles datés et budget de raisonnement approprié. Le nouveau phare est **Claude Opus 5** (24 juillet 2026, molette d’effort). **[Déduction]** Réserver Opus aux tâches où le gain de réussite compense le prix ; anticiper la remontée de Sonnet 5 à 3/15 USD le 1er septembre 2026 ; surveiller dépréciations et options de résidence (`inference_geo`).

### 3. Google

**[Officiel, S09–S11/S64]** Le payant exclut l’usage d’amélioration selon la grille ; cache, batch, Flex, Priority, Search grounding et file search ont des unités séparées. **Gemini 3.6 Flash** (21 juillet 2026) abaisse la sortie à 7,50 USD ; le raisonnement phare reste Gemini 3.1 Pro. **[Déduction]** Pour production UE, préférer projet payant et contrôles Vertex plutôt que tier gratuit ; ne pas présumer de Gemini 4 (teasé, non publié).

### 4. Microsoft

**[Officiel, S12–S14]** Utiliser Entra, politiques, budgets et capacité Copilot Studio/Azure adaptée. **[Déduction]** Modéliser la facture complète licence + crédits agent + modèle + recherche/connecteurs; éviter le double comptage des offres.

### 5. AWS

**[Officiel, S15–S17]** Choisir Standard/Flex/Priority/Reserved, batch lorsque supporté, IAM minimal, Guardrails, Knowledge Bases et AgentCore. **[Déduction]** Fixer une région et bloquer le cross-region non approuvé; tracer chaque coût aval d’un agent.

### 6. Meta

**[Officiel, S18]** Vérifier licence et carte du modèle avant téléchargement/déploiement. **[Déduction]** Pour Llama auto-hébergé, ajouter serveur d’inférence, isolation, modération, évaluation et procédure de mise à jour; « open weight » ne signifie pas open source complet.

### 7. Mistral

**[Officiel, S19–S21]** Choisir Large généraliste, Medium 3.5 pour agents/code, Small pour coût; batch -50 %, agents/RAG/OCR disponibles. **[Déduction]** Profiter de la proximité UE mais valider contrat et licence de chaque poids/version.

### 8. xAI

**[Officiel, S22–S23]** Grok 4.5 (500 k) : tenir compte des paliers court/long contexte (>200 k : 4/12 USD), cache (0,30 USD), coûts voix/image/vidéo et outils. **[Déduction]** Ne pas laisser un agent franchir le seuil long contexte sans alerte ; tester les redirects de modèles retirés ; ne pas planifier sur Grok 4.6/4.7 (feuille de route non vérifiée).

### 9. DeepSeek

**[Officiel, S25–S26/S67]** **V4-Flash** est GA depuis le 31 juillet 2026 ; les alias `deepseek-chat`/`deepseek-reasoner` ont été retirés le 24 juillet — vérifier le modèle exact et anticiper la tarification heures pleines/creuses annoncée. Utiliser le cache lorsque le préfixe est identique. **[Déduction]** L’API directe étant non conforme au RGPD, héberger les poids via un fournisseur UE pour données sensibles ; ajouter délais plus longs, fallback et revue de politique de données.

### 10. Alibaba/Qwen

**[Officiel, S27–S28]** Respecter l’allowlist exacte du Coding Plan et utiliser la clé/base URL dédiée; sinon PAYG peut être facturé. **[Déduction]** Épingler région, devise et version; tester FR/NL et disponibilité avant engagement.

### 11. NVIDIA

**[Officiel, S29–S31]** NeMo couvre personnalisation, évaluation, observabilité et sécurité des agents; NIM industrialise l’inférence. **[Déduction]** Scanner images et poids, pinner digests, mesurer GPU-utilisation/jeton et définir une stratégie de patch.

### 12. Cohere

**[Officiel, S32–S34]** Command cible RAG, citations, outils et multilingue; respecter limites essai/production, employer Embed/Rerank pour retrieval. **[Déduction]** Évaluer le gain du reranker séparément et conserver les citations comme données structurées.

### 13. IBM

**[Officiel, S35–S36]** Utiliser Agent Lab, RAG et watsonx.governance pour inventaire/évaluation; les prix varient par pays et taxes. **[Déduction]** Justifier le surcoût de gouvernance par exigences d’audit et intégration hybride.

### 14. GitHub Copilot

**[Officiel, S37–S38]** Plans payants incluent crédits IA; modèles et tâches consomment différemment. B/E n’entraîne pas sur données client. **[Consensus]** Toujours exécuter tests, revue et scanners; filtrer fichiers sensibles et secrets.

### 15. Perplexity

**[Officiel, S39–S40]** API et abonnement sont facturés séparément; modèle, recherche et preset changent le coût. **[Consensus]** Ouvrir les citations, privilégier sources primaires et conserver URL/date/extrait justificatif.

### 16. Cursor

**[Officiel, S42–S43/S70]** Imposer Privacy Mode, ZDR providers, règles de projet et contrôles d’équipe. **Cursor Router** (~22 juillet 2026) route automatiquement en modes Intelligence/Balance/Cost (par défaut pour Teams). **[Déduction]** Fixer le mode Router selon le budget/criticité ; limiter commandes, MCP et répertoire ; suivre usage par agent/modèle et revoir chaque diff.

### 17. Replit

**[Officiel, S44/S71]** Les plans incluent des crédits et builds autonomes (Agent 4) ; baisses de prix Cloud le 1er août 2026 ; intégration Slack et Agent Customization depuis le 24 juillet. **[Déduction]** Séparer prototype et production ; exporter code/données et tester restauration avant dépendance forte.

### 18. Hugging Face

**[Officiel, S45–S47]** Le routage Providers est annoncé sans majoration; Endpoints facture le calcul; eu-west-1, PrivateLink, DPA Enterprise et logs 30 jours sont documentés. **[Déduction]** Évaluer licence, code distant, pickle/malware scan et provider final pour chaque modèle.

### 19. Moonshot/Kimi

**[Officiel, S49–S50/S72]** Kimi recommande instructions claires, détails, délimiteurs, étapes, exemples, texte de référence et résumé des longues conversations ; Kimi Code peut utiliser sous-agents, hooks et MCP. **Poids ouverts de Kimi K3** publiés le 27 juillet 2026 sous « Kimi K3 License » (clauses à examiner avant redistribution/dérivés). **[Déduction]** L’API hébergée traitant les données en Chine, préférer l’auto-hébergement des poids en UE pour données sensibles ; activer hooks d’approbation et sandbox ; ne pas exposer une clé API côté client.

### 20. Z.AI/GLM

**[Officiel, S52–S54]** Prix distincts entrée/cache/sortie/outils, API OpenAI-compatible, contexte 1 M (GLM-5.2), heures creuses ×0,5 et plans code à quotas. **[Déduction]** Fixer un plafond web search, vérifier GLM-5.2 contre la grille tarifaire avant production et tester FR/NL ; données traitées à Singapour, pas de DPA UE confirmé.

## Checklist de mise en production

- [ ] Cas d’usage, propriétaire, risque et métrique de réussite documentés.
- [ ] Fournisseur, modèle, snapshot, région et fallback choisis.
- [ ] Prix origine, cache, batch, outils, TVA et plafond mensuel vérifiés.
- [ ] DPA, sous-traitants, rétention, entraînement, chiffrement et suppression validés.
- [ ] Secrets côté serveur; RBAC minimal; environnements séparés.
- [ ] Prompts et schémas versionnés; sorties validées.
- [ ] RAG avec ACL, citations, fraîcheur et tests de retrieval.
- [ ] Dataset FR/NL, cas limites et attaques; seuils de qualité définis.
- [ ] Traces redacted, métriques coût/latence/erreurs, alertes et kill switch.
- [ ] Retries bornés, idempotence, timeouts, circuit breaker et test de panne.
- [ ] Agent sandboxé, outils allowlistés, étapes/coût bornés, approbations humaines.
- [ ] Tests, SAST, scan secrets/licences et revue humaine pour code généré.
- [ ] Canari, rollback, calendrier de dépréciation et revue mensuelle.
