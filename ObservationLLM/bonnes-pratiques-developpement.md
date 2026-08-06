# Bonnes pratiques de développement

État vérifié le **6 août 2026**. Les mentions distinguent **[Officiel]** recommandation publiée par un fournisseur, **[Consensus]** pratique convergente entre plusieurs fournisseurs et **[Déduction]** conclusion analytique de cet observatoire.

> **Avertissement de ce cycle.** L’accès direct aux pages officielles a été bloqué (HTTP 403) ; les recommandations « [Officiel] » ci-dessous reposent, pour ce cycle, sur des recherches indexant ces pages et la documentation publique. Voir [sources.md](sources.md).

## Nouveautés et renforcements depuis le 17 juillet 2026

Quatre inflexions se dégagent de la documentation fournisseur et de la communauté (S86–S87) :

1. **[Renforcé] Le prompt caching est devenu le premier levier coût/latence.** Placer le contenu stable (prompt système, définitions d’outils) avant le point de cache ; économies annoncées jusqu’à ~90 % de coût et ~85 % de latence sur longs prompts. **Attention :** ajouter ou réordonner un seul outil **invalide le cache du préfixe d’outils** pour tous les prompts — figer les définitions d’outils.
2. **[Nouveau] Gérer le contexte par élagage (context editing / compaction), pas seulement par résumé.** Purger les résultats d’outils et blocs de raisonnement obsolètes au franchissement de seuils, en préservant la structure de conversation — moins coûteux et moins lossy que re-résumer.
3. **[Nouveau] MCP (Model Context Protocol) est la couche d’intégration par défaut** pour connecter agents, outils et données. **Mais** la propagation de données inter-serveurs en configuration multi-MCP est un risque de sécurité actif (cadre d’évaluation MCPHunt) : restreindre finement les permissions de chaque serveur MCP et cloisonner les frontières de confiance.
4. **[Renforcé] Garde-fous comme architecture porteuse, à plusieurs couches** : valider avant l’entrée modèle, avant l’exécution d’outil, et après la sortie — pas un filtre de sortie unique. À traiter comme architecture de premier jour pour un agent.

Rappel de contexte réglementaire : **les obligations de transparence de l’AI Act (art. 50) s’appliquent depuis le 2 août 2026** ; prévoir la divulgation d’interaction IA et le marquage des contenus synthétiques. Le haut risque est reporté à 2027/2028 (Digital Omnibus) [S57, S62, S63].

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
- Documenter supervision humaine, transparence à l’utilisateur et limites. **Depuis le 2 août 2026, les obligations de transparence de l’art. 50 s’appliquent** (divulgation d’interaction IA, marquage des contenus synthétiques/deepfakes) ; le haut risque est reporté (Annexe III 02/12/2027, Annexe I 02/08/2028) [S57, S62–S63].
- **Sécuriser les intégrations MCP** : restreindre les permissions par serveur, cloisonner les frontières de confiance, surveiller la propagation de données inter-serveurs (MCPHunt) [S87].

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

**[Officiel, S01/S05/S66]** Utiliser snapshots pour stabilité, Responses/Agents SDK pour outils, structured outputs, streaming, batch/flex et IDs de requête. **[Déduction]** La famille GPT-5.6 (Sol/Terra/Luna) permet un routage par tâche : réserver Sol aux cas difficiles, Terra/Luna (baisses du 30/07) au volume. Tester le seuil >272 k de Sol avant d’autoriser des contextes géants ; séparer budget outils et tokens.

### 2. Anthropic

**[Officiel, S06–S08/S67–S68]** Exploiter prompt caching (−90 %), batch −50 %, modèles datés et budget de raisonnement approprié. **[Déduction]** Claude Opus 5 (24/07) remplace Opus 4.8 à prix égal ; le réserver aux tâches où le gain compense le coût, Sonnet 5 pour le compromis (attention : fin du tarif intro le 31/08 → 3/15 USD). Résidence UE seulement via Bedrock/Vertex : en tenir compte pour données personnelles.

### 3. Google

**[Officiel, S09–S11/S69]** Le payant exclut l’usage d’amélioration selon la grille ; cache, batch, Flex, Priority, Search grounding et file search ont des unités séparées. **[Déduction]** Gemini 3.6 Flash (21/07) abaisse la sortie à 7,50 USD ; Gemini 3.1 Pro reste le flagship (3.5 Pro non sorti). Pour production UE, préférer projet payant et contrôles Vertex plutôt que tier gratuit, et vérifier que le modèle récent est bien servi depuis une région UE.

### 4. Microsoft

**[Officiel, S12–S14/S79]** Utiliser Entra, politiques, budgets et capacité Copilot Studio/Azure Foundry adaptée (GPT-5.6 en preview). **[Déduction]** La grille M365 Copilot a été repricée en USD (21/18) sans prix EUR publié : **confirmer le tarif belge hors TVA auprès d’un partenaire avant achat**. Modéliser la facture complète licence + crédits agent + modèle + recherche/connecteurs ; éviter le double comptage.

### 5. AWS

**[Officiel, S15–S17/S80]** Choisir Standard/Flex/Priority/Reserved, batch lorsque supporté, IAM minimal, Guardrails, Knowledge Bases et **AgentCore (GA : harness sans code, Policy, Guardrails intégrés, régions Milan/Espagne)**. **[Déduction]** Fixer une région UE et bloquer le cross-region non approuvé ; activer les Guardrails AgentCore sur chaque action ; tracer chaque coût aval d’un agent.

### 6. Meta

**[Officiel, S18/S70–S71]** Vérifier licence et carte du modèle avant téléchargement/déploiement. **[Déduction]** Le nouveau modèle de tête **Muse Spark 1.1 (poids fermés) est indisponible en UE**, et **Llama 4 est interdit aux domiciliés UE** : pour un résident belge, Meta est peu exploitable hors app intégrée. Si Llama auto-hébergé (hors contrainte de licence), ajouter serveur d’inférence, isolation, modération, évaluation et procédure de mise à jour ; « open weight » ≠ open source complet.

### 7. Mistral

**[Officiel, S19–S21/S72–S73]** Choisir Large 3 généraliste (≈0,50/1,50 USD), Medium 3.5 pour agents/code (≈1,50/7,50 USD), Small pour coût ; batch −50 %, agents/RAG/OCR disponibles ; app Vibe (ex-Le Chat). **[Déduction]** Meilleure option de résidence UE (RGPD-native, ZDR sur payant, FR/NL) : profiter de la proximité UE mais valider DPA, région et licence de chaque poids/version.

### 8. xAI

**[Officiel, S22/S74]** Tenir compte des paliers court/long contexte, cache, coûts voix/image/vidéo et outils (Grok 4.5, pas de Grok 5). **[Déduction]** **Vigilance données : l’incident Grok Build (14/07) illustre le risque d’exfiltration de dépôts par un CLI agentique** — sandboxer, interdire l’accès réseau sortant non approuvé et les secrets. Ne pas laisser un agent franchir le seuil long contexte sans alerte ; tester les redirects de modèles retirés.

### 9. DeepSeek

**[Officiel, S25–S26/S75]** Génération V4 (Pro/Flash, MIT, 1 M) : **les alias `deepseek-chat`/`deepseek-reasoner` ont été retirés le 24/07** — épingler les ID `deepseek-v4-*`. Utiliser cache si préfixe identique. **[Déduction]** Service direct hébergé en Chine (sous enquête en Belgique) : héberger les poids MIT via fournisseur UE ou hyperscaler UE (Azure/Bedrock/Vertex) pour données sensibles ; délais plus longs, fallback et revue de politique de données.

### 10. Alibaba/Qwen

**[Officiel, S27–S28/S76]** Qwen3.8-Max (GA 03/08, 1 M) ; respecter l’allowlist exacte du Coding Plan et utiliser la clé/base URL dédiée, sinon PAYG peut être facturé. **[Déduction]** La **région Frankfurt (UE)** de Model Studio est la seule piste de résidence UE directe des acteurs chinois (EUR/TVA/DPA à confirmer ; pas de quota gratuit hors Singapour). Épingler région, devise et version ; tester FR/NL avant engagement.

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

**[Officiel, S42–S43/S85]** Imposer Privacy Mode, ZDR providers, règles de projet et contrôles d’équipe ; **BAA disponible en Enterprise** (Privacy Mode verrouillé org). **[Déduction]** Limiter commandes, MCP et répertoire ; suivre usage par agent/modèle et revoir chaque diff.

### 17. Replit

**[Officiel, S44]** Les plans incluent des crédits et builds autonomes; le déploiement privé est réservé au niveau supérieur. **[Déduction]** Séparer prototype et production; exporter code/données et tester restauration avant dépendance forte.

### 18. Hugging Face

**[Officiel, S45–S47]** Le routage Providers est annoncé sans majoration; Endpoints facture le calcul; eu-west-1, PrivateLink, DPA Enterprise et logs 30 jours sont documentés. **[Déduction]** Évaluer licence, code distant, pickle/malware scan et provider final pour chaque modèle.

### 19. Moonshot/Kimi

**[Officiel, S49–S50/S77]** Kimi K3 (2,8 T, 1 M) désormais documenté ; instructions claires, délimiteurs, étapes, texte de référence et résumé des longues conversations ; Kimi Code peut utiliser sous-agents, hooks et MCP. **[Déduction]** Poids ouverts sous **licence custom « Kimi K3 » (pas MIT)** : examiner l’usage commercial. Données hébergées Chine/Singapour → passer par un hébergeur UE pour données sensibles ; activer hooks d’approbation et sandbox ; ne pas exposer une clé API côté client.

### 20. Z.AI/GLM

**[Officiel, S52–S54/S78]** GLM-5.2 est le flagship API courant (MIT, **contexte porté à 1 M**, 1,40/0,26/4,40 USD) ; API OpenAI-compatible ; **Coding Plan repricé (Lite ≈18 / Pro ≈72 / Max ≈160 USD, fin de promo)**. **[Déduction]** Poids MIT → auto-hébergement UE possible pour données sensibles. Fixer un plafond web search, vérifier GLM-5.2 contre la grille avant production et tester FR/NL.

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
