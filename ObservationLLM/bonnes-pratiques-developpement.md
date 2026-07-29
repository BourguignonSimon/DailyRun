# Bonnes pratiques de développement

État vérifié le **29 juillet 2026** (réexécution; base 17 juillet). Les mentions distinguent **[Officiel]** recommandation publiée par un fournisseur, **[Consensus]** pratique convergente entre plusieurs fournisseurs et **[Déduction]** conclusion analytique de cet observatoire.

> **À faire avant le 2 août 2026 (AI Act, article 50).** Si vous exposez un système IA à des personnes en UE: divulguer l’interaction avec une IA (chatbots), **marquer de façon lisible par machine les contenus générés** et étiqueter les deepfakes. Ces obligations de transparence s’appliquent dès le 2 août 2026 [S70]. Le filigrane de l’art. 50(2) glisse au 2 décembre 2026 pour les systèmes déjà sur le marché; les obligations haut risque sont reportées à 2027-2028.
>
> **Leçon de l’incident Hugging Face (16 juillet 2026).** Un agent IA autonome aurait compromis des identifiants de service [S67]. Traiter les agents et intégrations comme des identités à part entière: clés à courte durée, rotation automatique, moindre privilège, isolation réseau et journal d’audit des actions d’outils.

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
- Documenter supervision humaine, transparence à l’utilisateur et limites. Revoir le calendrier AI Act [S57–S59, S70]: **article 50 (transparence) applicable dès le 2 août 2026**; filigrane art. 50(2) au 2 décembre 2026 pour l’existant; haut risque en 2027-2028.

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

**[Officiel, S01/S05, S68]** Utiliser snapshots pour stabilité, Responses/Agents SDK pour outils, structured outputs, streaming, batch/flex et IDs de requête. Choisir le palier GPT-5.6 adapté (Sol frontière, Terra équilibré, Luna haut volume). **[Déduction]** Le changement de tarification du cache (**écritures ×1,25 de l’entrée non mise en cache**) rend le préfixe stable encore plus rentable en lecture mais plus coûteux à (ré)écrire: regrouper les écritures de cache et éviter d’invalider inutilement. Séparer budget outils et tokens.

### 2. Anthropic

**[Officiel, S06–S08, S61]** Exploiter prompt caching, batch -50 %, modèles datés et budget de raisonnement approprié. Opus 5 (prix inchangé vs 4.8) et le raisonnement adaptatif par défaut invitent à mesurer le coût réel des jetons de raisonnement. **[Déduction]** Profiter du **tarif de lancement Sonnet 5 (2/10 USD jusqu’au 31 août)** pour l’évaluation et le volume; réserver Opus aux tâches où le gain de réussite compense le prix; surveiller dépréciations (Opus 4.8) et options de résidence.

### 3. Google

**[Officiel, S09–S11, S62]** Le payant exclut l’usage d’amélioration selon la grille; cache, batch, Flex, Priority, Search grounding et file search ont des unités séparées. Gemini 3.6 Flash (sortie 7,50 USD, ~17 % de jetons de sortie en moins) améliore le coût par tâche; 3.5 Flash-Lite (0,30/2,50) pour le très haut volume. **[Déduction]** Pour production UE, préférer projet payant et contrôles Vertex plutôt que tier gratuit; réévaluer le routage vers 3.6 Flash / Flash-Lite selon la complexité.

### 4. Microsoft

**[Officiel, S12–S14]** Utiliser Entra, politiques, budgets et capacité Copilot Studio/Azure adaptée. **[Déduction]** Modéliser la facture complète licence + crédits agent + modèle + recherche/connecteurs; éviter le double comptage des offres.

### 5. AWS

**[Officiel, S15–S17]** Choisir Standard/Flex/Priority/Reserved, batch lorsque supporté, IAM minimal, Guardrails, Knowledge Bases et AgentCore. **[Déduction]** Fixer une région et bloquer le cross-region non approuvé; tracer chaque coût aval d’un agent.

### 6. Meta

**[Officiel, S18]** Vérifier licence et carte du modèle avant téléchargement/déploiement. **[Déduction]** Pour Llama auto-hébergé, ajouter serveur d’inférence, isolation, modération, évaluation et procédure de mise à jour; « open weight » ne signifie pas open source complet.

### 7. Mistral

**[Officiel, S19–S21, S64]** Choisir Large 3 généraliste, Medium 3.5 pour agents/code, Small pour coût; batch -50 %, agents/RAG/OCR disponibles. Le partenariat souverain avec Microsoft (21 juillet) ouvre des déploiements contrôlés/déconnectés via Azure pour secteurs régulés. **[Déduction]** Profiter de la proximité UE et de la voie souveraine, mais **ne pas confondre « souverain » et conforme**: valider contrat, région, rétention et licence de chaque poids/version et de chaque surface (API directe vs Azure).

### 8. xAI

**[Officiel, S22]** Tenir compte des paliers court/long contexte, cache, coûts voix/image/vidéo et outils. **[Déduction]** Ne pas laisser un agent franchir le seuil long contexte sans alerte; tester les redirects de modèles retirés.

### 9. DeepSeek

**[Officiel, S25–S26, S66]** Utiliser cache lorsque le préfixe est identique et vérifier le modèle exact derrière les alias — **les alias `deepseek-chat`/`deepseek-reasoner` sont dépréciés (24 juillet); épingler `deepseek-v4-flash`/`v4-pro` explicitement**. **[Déduction]** Ne jamais dépendre d’un alias hérité en production; héberger les poids via fournisseur UE pour données sensibles; ajouter délais plus longs, fallback et revue de politique de données.

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

**[Officiel, S42–S43]** Imposer Privacy Mode, ZDR providers, règles de projet et contrôles d’équipe. **[Déduction]** Limiter commandes, MCP et répertoire; suivre usage par agent/modèle et revoir chaque diff.

### 17. Replit

**[Officiel, S44]** Les plans incluent des crédits et builds autonomes; le déploiement privé est réservé au niveau supérieur. **[Déduction]** Séparer prototype et production; exporter code/données et tester restauration avant dépendance forte.

### 18. Hugging Face

**[Officiel, S45–S47]** Le routage Providers est annoncé sans majoration; Endpoints facture le calcul; eu-west-1, PrivateLink, DPA Enterprise et logs 30 jours sont documentés. **[Déduction]** Évaluer licence, code distant, pickle/malware scan et provider final pour chaque modèle. **Après l’incident du 16 juillet [S67]:** faire tourner tout token HF, restreindre les scopes, préférer des jetons à durée courte et vérifier les avis de sécurité officiels avant d’élargir l’usage.

### 19. Moonshot/Kimi

**[Officiel, S49–S50, S65]** Kimi recommande instructions claires, détails, délimiteurs, étapes, exemples, texte de référence et résumé des longues conversations; Kimi Code peut utiliser sous-agents, hooks et MCP. **Kimi K3 est disponible en open weights (2,8 T/104 B, 1 M contexte) sous « Kimi K3 License »**: lire la licence (usage code + poids) avant tout déploiement. **[Déduction]** Pour l’auto-hébergement K3, prévoir capacité GPU (MoE, MXFP4), isolation, modération et évaluation FR/NL locale; activer hooks d’approbation et sandbox; ne pas exposer une clé API côté client.

### 20. Z.AI/GLM

**[Officiel, S52–S54]** Prix distincts entrée/cache/sortie/outils, API OpenAI-compatible, contexte 200 k et plans code à quotas. **[Déduction]** Fixer un plafond web search, vérifier GLM-5.2 contre la grille tarifaire avant production et tester FR/NL.

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
