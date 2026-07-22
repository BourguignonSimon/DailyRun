# Bonnes pratiques de développement

État vérifié le **22 juillet 2026**. Les mentions distinguent **[Officiel]** recommandation publiée par un fournisseur, **[Consensus]** pratique convergente entre plusieurs fournisseurs et **[Déduction]** conclusion analytique de cet observatoire.

## Architecture de référence

1. **[Consensus]** Commencer par le modèle le moins coûteux qui réussit l’évaluation; réserver le modèle frontière aux cas difficiles. Les nouveaux tiers (GPT-5.6 Terra/Luna, Gemini 3.6 Flash, Sonnet 5) élargissent la marge de manœuvre coût/qualité.
2. **[Consensus]** Séparer instructions système, contexte récupéré, données utilisateur et schéma de sortie avec délimiteurs explicites.
3. **[Consensus]** Donner aux outils des noms, descriptions et schémas stricts; valider côté serveur tous les arguments et toutes les sorties.
4. **[Consensus]** Utiliser RAG pour les connaissances privées ou changeantes; conserver provenance, date, score et droit d’accès avec chaque passage.
5. **[Consensus]** Résumer/compacter l’historique; ne pas remplir la fenêtre de contexte par défaut. Le long contexte (jusqu’à 1 M chez la plupart des frontières) n’est ni une mémoire fiable ni un substitut au retrieval.
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
- Conserver un budget de jetons pour la réponse et les appels d’outils. **Tester les seuils de tarification long contexte** (272 k chez GPT-5.6, 200 k chez Gemini 3.1 Pro et Grok 4.5).
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
- Canari sur petite part du trafic avant migration; rollback immédiat par alias interne. **Utile en ce moment** vu la cadence de sorties (GPT-5.6, Gemini 3.6 Flash, DeepSeek V4, Qwen3.8-Max, Kimi K3).

### Télémétrie

Tracer request ID, version modèle, version prompt, outils, temps, jetons/cache, classe de service, résultat de validation et coût estimé. Ne pas journaliser les secrets ni le contenu brut par défaut. Définir rétention, accès, redaction et localisation des traces.

## Sécurité et conformité

- Inventorier finalité, données, fournisseur, modèle, région, sous-traitants et responsable interne. **Documenter chaque chemin de modèle**: la nouveauté Microsoft (sous-traitant OpenAI activé par défaut le 24 juillet) montre qu’un sous-traitant peut apparaître et déplacer le traitement hors EU Data Boundary [S16–S17, S19].
- Classer les données avant envoi; minimiser et pseudonymiser.
- Signer DPA et clauses de transfert; vérifier durée de rétention, entraînement, suppression, chiffrement, SSO/RBAC, audit et certifications. **Pour DeepSeek, Qwen, Kimi et GLM (fournisseurs chinois), ne pas envoyer de données personnelles en direct** tant que région UE, représentant RGPD et facturation ne sont pas validés [S44, S47].
- Modéliser prompt injection, exfiltration, tool poisoning, SSRF, code arbitraire, escalade de privilèges, supply chain et fuite inter-utilisateurs.
- Filtrer entrée et sortie selon le risque, mais ne jamais considérer un garde-fou fournisseur comme contrôle unique.
- Documenter supervision humaine, transparence à l’utilisateur et limites. **Calendrier AI Act révisé (Digital Omnibus):** haut risque reporté (Annexe III au 2 déc. 2027, Annexe I au 2 août 2028), mais **article 50 (transparence) et exécution GPAI applicables au 2 août 2026** [S63–S66, S68]. Prévoir dès maintenant marquage des contenus générés et étiquetage des interactions IA.

## Coût, performance et résilience

- Routeur simple: petit modèle d’abord, escalade sur faible confiance ou cas critique.
- Cache exact pour instructions stables; cache sémantique seulement avec règles de confidentialité et invalidation.
- Batch/flex pour extraction, évaluation et résumé non urgent; priority/réservé uniquement avec SLO justifié.
- Réduire le contexte avant de changer de modèle. Mesurer le coût des jetons de raisonnement et des résultats d’outils réinjectés.
- Attention aux **tarifs heures pleines/creuses** (DeepSeek V4) et aux **plans à crédits/quotas** (Copilot, Cursor, Replit, Kimi, GLM Coding Plan): le prix par jeton n’est pas la bonne unité.
- Limites par utilisateur/projet; alertes 50/80/100 %; kill switch central.
- Backoff exponentiel avec jitter sur 429/5xx, respect Retry-After, timeout total et retries bornés.
- Tester indisponibilité région, quota épuisé, réponse invalide, outil lent et changement de comportement.

## Particularités des 20 fournisseurs

### 1. OpenAI

**[Officiel, S01–S05]** Utiliser snapshots, Responses/Agents SDK, structured outputs, streaming, batch/flex et IDs de requête; GPT-5.6 Sol/Terra/Luna permet un routage par difficulté. **[Déduction]** Tester le seuil >272 k avant d’autoriser des contextes géants; séparer budget outils et tokens.

### 2. Anthropic

**[Officiel, S06–S09]** Exploiter prompt caching (lecture ≈-90 %), batch -50 %, modèles datés et budget de raisonnement approprié; Sonnet 5 donne 1 M sans surcoût au prix de lancement. **[Déduction]** Réserver Fable 5/Opus aux tâches où le gain compense le prix; **router via Bedrock/Vertex UE** si la résidence est requise (pas de résidence first-party UE).

### 3. Google

**[Officiel, S10–S12]** Le payant exclut l’usage d’amélioration selon la grille; cache, batch, Flex, Priority, Search grounding et file search ont des unités séparées; Gemini 3.6 Flash réduit le coût de sortie. **[Déduction]** Pour production UE, préférer projet payant et contrôles Vertex plutôt que tier gratuit; surveiller 3.5 Pro et Gemini 4.

### 4. Microsoft

**[Officiel, S16–S20]** Utiliser Entra, politiques, budgets et capacité Copilot Studio/Azure adaptée. **[Déduction]** **Trancher le sous-traitant OpenAI avant le 24 juillet** et documenter la frontière des données par chemin de modèle; modéliser la facture complète licence + crédits agent + modèle + recherche/connecteurs.

### 5. AWS

**[Officiel, S21–S25]** Choisir Standard/Flex/Priority/Reserved, batch quand supporté, IAM minimal, Guardrails, Knowledge Bases et AgentCore (désormais Milan/Espagne). **[Déduction]** Fixer une région UE et bloquer le cross-region non approuvé; tracer chaque coût aval d’un agent; profiter du cache -90 % sur GPT-5.6.

### 6. Meta

**[Officiel, S38–S39]** Vérifier licence et carte du modèle avant téléchargement/déploiement. **[Déduction]** **Le multimodal Llama 4 est interdit aux entreprises UE** et Muse Spark est US-only: se limiter aux modèles texte auto-hébergés en UE, avec serveur d’inférence, isolation, modération, évaluation et procédure de mise à jour.

### 7. Mistral

**[Officiel, S35–S37]** Choisir Large 3 généraliste, Medium 3.5 pour agents/code, batch -50 %, agents distants/RAG/OCR. **[Déduction]** Profiter de la proximité UE mais valider contrat et licence de chaque poids/version; confirmer le prix exact de Large 3 (trackers divergents).

### 8. xAI

**[Officiel, S13–S14]** Tenir compte des paliers court/long contexte (seuil 200 k), cache, coûts média et outils. **[Déduction]** **Exposition RGPD élevée**: éviter les données personnelles UE; ne pas laisser un agent franchir le seuil long contexte sans alerte; tester les redirects de modèles retirés.

### 9. DeepSeek

**[Officiel, S42–S43]** Utiliser cache lorsque le préfixe est identique, vérifier le modèle exact derrière les alias (**V3.2 retiré le 24 juillet**) et intégrer le **tarif heures pleines/creuses**. **[Déduction]** Héberger les poids via fournisseur UE pour données sensibles; ne pas utiliser l’API directe pour des données personnelles.

### 10. Alibaba/Qwen

**[Officiel, S45–S47]** Respecter l’allowlist exacte du Coding Plan et la clé/base URL dédiée; Qwen3.8-Max-Preview passe par Token Plan. **[Déduction]** Épingler région (Francfort, pas Singapour), devise et version; préférer Bedrock Francfort pour la résidence; tester FR/NL avant engagement.

### 11. NVIDIA

**[Officiel, S32–S34]** NeMo couvre personnalisation, évaluation, observabilité et sécurité des agents; NIM industrialise l’inférence; Nemotron 3 Ultra pour les agents longs. **[Déduction]** Scanner images et poids, pinner digests, mesurer GPU-utilisation/jeton et définir une stratégie de patch.

### 12. Cohere

**[Officiel, S29–S31]** Command A+ cible RAG, citations, outils et multilingue; North/North Mini Code pour l’agentique privée; respecter limites essai/production, employer Embed/Rerank. **[Déduction]** Évaluer le gain du reranker séparément et conserver les citations comme données structurées; exploiter l’air-gap pour la souveraineté.

### 13. IBM

**[Officiel, S26–S28]** Utiliser Agent Lab, RAG et watsonx.governance pour inventaire/évaluation; Granite 4.x pour l’économie; les prix varient par pays et taxes. **[Déduction]** Justifier le surcoût de gouvernance par exigences d’audit et intégration hybride; exploiter la région Francfort.

### 14. GitHub Copilot

**[Officiel, S48–S49]** Plans payants incluent des crédits IA à l’usage (1 crédit = 0,01 USD); modèles et tâches consomment différemment; complétions illimitées. B/E n’entraîne pas sur données client. **[Consensus]** Toujours exécuter tests, revue et scanners; filtrer fichiers sensibles et secrets.

### 15. Perplexity

**[Officiel, S53–S54]** API et abonnement facturés séparément; modèle, recherche, contexte et preset changent le coût; l’Agentic Research API facture les modèles tiers au tarif fournisseur. **[Consensus]** Ouvrir les citations, privilégier sources primaires et conserver URL/date/extrait justificatif.

### 16. Cursor

**[Officiel, S50–S51]** Imposer Privacy Mode, ZDR providers, règles de projet, SSO et contrôles d’équipe (politique maj 15 juillet). **[Déduction]** Limiter commandes, MCP et répertoire; suivre l’usage par agent/modèle (siège Premium) et revoir chaque diff.

### 17. Replit

**[Officiel, S52]** Les plans incluent des crédits (Core 20 USD sans report, Pro avec report) et builds autonomes. **[Déduction]** Séparer prototype et production; exporter code/données et tester restauration avant dépendance forte; surveiller le burn de crédits.

### 18. Hugging Face

**[Officiel, S40–S41]** Le routage Providers est sans majoration; Endpoints facture le calcul; eu-west-1, DPA Enterprise et scale-to-zero disponibles. **[Déduction]** Évaluer licence, code distant, scan pickle/malware et provider final pour chaque modèle.

### 19. Moonshot/Kimi

**[Officiel, S55–S58]** Kimi recommande instructions claires, délimiteurs, étapes, exemples, texte de référence et résumé des longues conversations; Kimi Code peut utiliser sous-agents, hooks et MCP. **[Déduction]** Activer hooks d’approbation et sandbox; ne pas exposer une clé API côté client; attendre les poids (27 juillet) pour un auto-hébergement UE.

### 20. Z.AI/GLM

**[Officiel, S59–S60]** Prix distincts entrée/cache/sortie/outils, API OpenAI-compatible, contexte 1 M (GLM-5.2) et plans code à quotas. **[Déduction]** Fixer un plafond web search, vérifier GLM-5.2 contre la grille avant production, exploiter la licence MIT pour un déploiement UE et tester FR/NL.

## Checklist de mise en production

- [ ] Cas d’usage, propriétaire, risque et métrique de réussite documentés.
- [ ] Fournisseur, modèle, snapshot, région et fallback choisis; **chemins de modèle et sous-traitants inventoriés**.
- [ ] Prix origine, cache, batch, outils, tarif heures pleines/creuses, crédits, TVA et plafond mensuel vérifiés.
- [ ] DPA, sous-traitants, rétention, entraînement, chiffrement et suppression validés; résidence UE confirmée (via cloud si nécessaire).
- [ ] Secrets côté serveur; RBAC minimal; environnements séparés.
- [ ] Prompts et schémas versionnés; sorties validées.
- [ ] RAG avec ACL, citations, fraîcheur et tests de retrieval.
- [ ] Dataset FR/NL, cas limites et attaques; seuils de qualité définis.
- [ ] Traces redacted, métriques coût/latence/erreurs, alertes et kill switch.
- [ ] Retries bornés, idempotence, timeouts, circuit breaker et test de panne.
- [ ] Agent sandboxé, outils allowlistés, étapes/coût bornés, approbations humaines.
- [ ] Tests, SAST, scan secrets/licences et revue humaine pour code généré.
- [ ] Transparence AI Act (article 50): marquage des contenus générés et étiquetage des interactions prêts pour le 2 août 2026.
- [ ] Canari, rollback, calendrier de dépréciation et revue mensuelle.
