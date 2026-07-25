# Bonnes pratiques de développement

État vérifié le **25 juillet 2026** (édition précédente: 17 juillet 2026). Les mentions distinguent **[Officiel]** recommandation publiée par un fournisseur, **[Consensus]** pratique convergente entre plusieurs fournisseurs et **[Déduction]** conclusion analytique de cet observatoire.

> Nouveautés de la semaine à intégrer: OpenAI GPT-5.6 ajoute l’appel d’outils programmatique, l’orchestration multi-agents et les points de rupture de cache de prompt [S61]; Anthropic Claude Opus 5 active le raisonnement par défaut, généralise l’échelle d’effort (low→max) et permet des changements d’outils en cours de conversation en préservant le cache [S62]; Google Gemini 3.6 Flash réduit la sortie et le nombre de jetons produits [S63]. Revérifier les IDs de modèles épinglés avant migration.

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
- Documenter supervision humaine, transparence à l’utilisateur et limites. **Échéance imminente**: le 2 août 2026, les obligations de transparence de l’article 50 (marquage des contenus IA, divulgation des chatbots, étiquetage des hypertrucages) et les pouvoirs d’exécution GPAI deviennent applicables; vérifier le marquage et la divulgation dès maintenant [S57–S59, S68].

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

**[Officiel, S01/S05/S61]** Utiliser snapshots pour stabilité, Responses/Agents SDK pour outils, structured outputs, streaming, batch/flex et IDs de requête. GPT-5.6 apporte l’appel d’outils programmatique, l’orchestration multi-agents et les points de rupture de cache de prompt. **[Déduction]** Choisir la taille GPT-5.6 (Luna/Terra/Sol) par évaluation coût/qualité, épingler le snapshot, tester le comportement long contexte par modèle et séparer budget outils et tokens.

### 2. Anthropic

**[Officiel, S06–S08/S62]** Exploiter prompt caching (minimum abaissé à 512 jetons sur Opus 5), batch -50 %, modèles datés et échelle d’effort low→max. Sur Opus 5, le raisonnement est activé par défaut: revoir `max_tokens` (il borne raisonnement + réponse) et noter que désactiver le raisonnement est refusé aux efforts `xhigh`/`max`. Les changements d’outils en cours de conversation (bêta) préservent le cache. **[Déduction]** Réserver Opus aux tâches où le gain de réussite compense le prix; retirer les instructions d’auto-vérification héritées (sur-vérification sur Opus 5); surveiller dépréciations et options de résidence.

### 3. Google

**[Officiel, S09–S11/S63]** Le payant exclut l’usage d’amélioration selon la grille; cache, batch, Flex, Priority, Search grounding et file search ont des unités séparées. Gemini 3.6 Flash baisse la sortie (7,50 USD) et produit ~17 % de jetons en moins à tâche égale: le gain réel dépasse le prix affiché. **[Déduction]** Pour production UE, préférer projet payant et contrôles Vertex plutôt que tier gratuit; réévaluer les budgets après passage à 3.6.

### 4. Microsoft

**[Officiel, S12–S14]** Utiliser Entra, politiques, budgets et capacité Copilot Studio/Azure adaptée. **[Déduction]** Modéliser la facture complète licence + crédits agent + modèle + recherche/connecteurs; éviter le double comptage des offres.

### 5. AWS

**[Officiel, S15–S17]** Choisir Standard/Flex/Priority/Reserved, batch lorsque supporté, IAM minimal, Guardrails, Knowledge Bases et AgentCore. **[Déduction]** Fixer une région et bloquer le cross-region non approuvé; tracer chaque coût aval d’un agent.

### 6. Meta

**[Officiel, S18]** Vérifier licence et carte du modèle avant téléchargement/déploiement. **[Déduction]** Pour Llama auto-hébergé, ajouter serveur d’inférence, isolation, modération, évaluation et procédure de mise à jour; « open weight » ne signifie pas open source complet.

### 7. Mistral

**[Officiel, S19–S21]** Choisir Large généraliste, Medium 3.5 pour agents/code, Small pour coût; batch -50 %, agents/RAG/OCR disponibles. **[Déduction]** Profiter de la proximité UE mais valider contrat et licence de chaque poids/version.

### 8. xAI

**[Officiel, S22/S65]** Tenir compte des paliers court/long contexte (doublement au-delà de 200 k: 4/12 USD, variante rapide 4/18), cache, coûts voix/image/vidéo et outils. **[Déduction]** Ne pas laisser un agent franchir le seuil 200 k sans alerte de coût; tester les redirects de modèles retirés; suivre la gouvernance après le rapprochement SpaceX/xAI–Cursor.

### 9. DeepSeek

**[Officiel, S25–S26]** Utiliser cache lorsque le préfixe est identique et vérifier le modèle exact derrière les alias. **[Déduction]** Héberger les poids via fournisseur UE pour données sensibles; ajouter délais plus longs, fallback et revue de politique de données.

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

**[Officiel, S42–S43]** Imposer Privacy Mode, ZDR providers, règles de projet et contrôles d’équipe. **[Déduction]** Limiter commandes, MCP et répertoire; suivre usage par agent/modèle et revoir chaque diff. Suivre l’évolution de la politique de données après le rachat par SpaceX/xAI (clôture attendue T3 2026) [S66].

### 17. Replit

**[Officiel, S44]** Les plans incluent des crédits et builds autonomes; le déploiement privé est réservé au niveau supérieur. **[Déduction]** Séparer prototype et production; exporter code/données et tester restauration avant dépendance forte.

### 18. Hugging Face

**[Officiel, S45–S47]** Le routage Providers est annoncé sans majoration; Endpoints facture le calcul; eu-west-1, PrivateLink, DPA Enterprise et logs 30 jours sont documentés. **[Déduction]** Évaluer licence, code distant, pickle/malware scan et provider final pour chaque modèle.

### 19. Moonshot/Kimi

**[Officiel, S49–S50/S64]** Kimi recommande instructions claires, détails, délimiteurs, étapes, exemples, texte de référence et résumé des longues conversations; Kimi Code peut utiliser sous-agents, hooks et MCP. Kimi K3 (MoE 2,8 T, 1 M de contexte) publie ses poids sous licence MIT modifiée: vérifier la licence exacte avant tout déploiement. **[Déduction]** Activer hooks d’approbation et sandbox; ne pas exposer une clé API côté client; revalider les scores en interne.

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
