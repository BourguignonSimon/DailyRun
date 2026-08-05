# Bonnes pratiques de développement

État vérifié le **5 août 2026**. Les mentions distinguent **[Officiel]** recommandation publiée par un fournisseur, **[Consensus]** pratique convergente entre plusieurs fournisseurs et **[Déduction]** conclusion analytique de cet observatoire.

## Nouveautés de cette édition (depuis le 17 juillet 2026)

- **[Consensus]** L’isolation des agents se raisonne par **dimensions**: système de fichiers **et** réseau. Choisir l’isolant selon la charge (conteneurs pour le batch, micro-VM pour l’isolation maximale, isolats V8 pour outils JS, WASM pour un contrôle fin des capacités). Un agent compromis isolé sur une seule dimension peut toujours exfiltrer des secrets [S70].
- **[Consensus]** Traiter **chaque serveur MCP comme une attribution IAM**: cadrer les outils à la tâche, épingler et auditer chaque serveur comme une dépendance tierce. Surveiller l’OWASP MCP Top 10 (exposition de jetons, dérive de privilèges, empoisonnement d’outil, injection de commande, télémétrie absente) [S70].
- **[Consensus]** **Développement piloté par l’évaluation + épinglage prompt/modèle**: prompts comme configuration versionnée, skills comme paquets versionnés; A/B de deux prompts système sur un jeu d’éval figé, avec rapport de variance.
- **[Consensus/Déduction]** **Verrouiller les actions irréversibles derrière une validation humaine appliquée dans l’implémentation de l’outil, pas dans le prompt** (déploiement, suppression, envoi, paiement). Un garde-fou de prompt est contournable; un garde-fou de code ne l’est pas.
- **[Déduction]** **Re-mesurer le coût réel** après un changement de tokenizer côté fournisseur (le tokenizer Anthropic 4.7+ produit ~30 % de jetons en plus) et anticiper les hausses datées (Sonnet 5 passe de 2/10 à 3/15 USD le 1er sept. 2026).
- **[Déduction]** Épingler explicitement les endpoints: la retraite des slugs `deepseek-chat`/`deepseek-reasoner` (24 juil. 2026) montre qu’un alias non versionné peut casser en production sans préavis.

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
- Documenter supervision humaine, transparence à l’utilisateur et limites. **La transparence de l’article 50 et les obligations GPAI de l’AI Act s’appliquent depuis le 2 août 2026** (chatbots signalés, contenus IA marqués en lisible-machine, deepfakes étiquetés; sanctions jusqu’à 15 M€ ou 3 % du CA mondial); les obligations « haut risque » sont reportées à décembre 2027 / août 2028 [S57–S59, S68].

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

**[Officiel, S01/S05]** Sur GPT-5.6 (Sol/Terra/Luna), utiliser les points de rupture de cache explicites (durée minimale 30 min, écritures 1,25×), Programmatic Tool Calling, snapshots, structured outputs, streaming et batch/flex. **[Déduction]** Router vers Terra/Luna (baisses du 30 juil.) par défaut et n’escalader vers Sol que sur faible confiance; tester le seuil long contexte >272 k (à confirmer pour la 5.6) avant d’autoriser des contextes géants; séparer budget outils et tokens.

### 2. Anthropic

**[Officiel, S06–S08]** Exploiter prompt caching (lecture 0,1×, écriture 5 min 1,25×, 1 h 2×), batch -50 %, modèles datés et budget de raisonnement. **[Déduction]** Réserver Opus 5 (et le palier Fable/Mythos 5 à 10/50 USD) aux tâches où le gain compense le prix; **re-mesurer le coût après le nouveau tokenizer 4.7+ (~+30 % jetons)** et **provisionner la hausse Sonnet 5 au 1er septembre**; tenir compte de `inference_geo:"us"` ×1,1 et du +10 % régional Bedrock/Vertex.

### 3. Google

**[Officiel, S09–S11]** Le payant exclut l’usage d’amélioration selon la grille; cache, batch, Flex, Priority, Search grounding (14 USD/1 000 après 5 000 gratuites) et file search ont des unités séparées; les endpoints non-global sont +10 % depuis le 1er juil. **[Déduction]** Gemini 3.6 Flash offre une sortie moins chère (7,50 vs 9 USD) que 3.5 Flash à entrée égale — le préférer par défaut; pour production UE, imposer le tier payant, l’endpoint `eu` et les contrôles Vertex.

### 4. Microsoft

**[Officiel, S12–S14]** Utiliser Entra, politiques, budgets et capacité Copilot Studio/Azure; GPT-5.6 est déployable en **EU Data Zone Standard** (résidence UE). **[Déduction]** Privilégier EU Data Zone pour la résidence; modéliser la facture complète licence + crédits agent + modèle + recherche/connecteurs; éviter le double comptage des offres.

### 5. AWS

**[Officiel, S15–S17]** Choisir Standard/Flex/Priority/Reserved, batch lorsque supporté, IAM minimal, Guardrails, Knowledge Bases et AgentCore (facturé par composants/session). **[Déduction]** **GPT-5.6 est US-only sur Bedrock à ce jour** — ne pas l’employer si la résidence UE est exigée; fixer une région, bloquer le cross-region non approuvé et tracer chaque coût aval d’un agent.

### 6. Meta

**[Officiel, S18, S61–S63]** **Alerte licence UE**: la licence communautaire Llama 4 exclut les personnes/sociétés domiciliées dans l’UE des modèles **multimodaux** (vision) — vérifier l’éligibilité avant tout déploiement UE; les chemins texte restent utilisables. Muse Spark est propriétaire, hébergé US, API OpenAI-compatible. **[Déduction]** Pour Llama auto-hébergé, ajouter serveur d’inférence, isolation, modération, évaluation et procédure de mise à jour; « open weight » ne signifie pas open source complet, et Muse Spark exige la diligence RGPD d’un service US.

### 7. Mistral

**[Officiel, S19–S21]** Large 3 (Apache 2.0, 0,50/1,50 USD, 256 k) généraliste ouvert, Medium 3.5 pour agents/code, Small 4 pour coût; batch -50 %, agents/RAG/OCR et **Studio Prompt & Skills** (référentiel versionné) disponibles; ZDR sur plan Scale (appels stateless). **[Déduction]** Profiter de la proximité UE (Paris, SecNumCloud, EUR) mais valider contrat et licence de chaque poids/version; le néerlandais reste à tester.

### 8. xAI

**[Officiel, S22–S24]** Grok 4.5 (2/0,50/6 USD court; 4/12 long, 500 k) et Grok 4.1 Fast + Agent Tools API; ZDR API requis pour données personnelles d’entreprise, DPA/SCC disponibles. **[Déduction]** Confirmer le seuil exact du long contexte (~200 k selon une source); ne pas laisser un agent le franchir sans alerte; tester les redirects de modèles retirés.

### 9. DeepSeek

**[Officiel, S25–S26]** Migrer vers V4-Pro/V4-Flash: **les alias `deepseek-chat`/`deepseek-reasoner` (V3.2) ont été retirés le 24 juil.** — épingler les IDs V4 exacts. Le cache disque automatique rend l’entrée en cache ~50–100× moins chère. **[Déduction]** Ne jamais utiliser l’API directe (données en Chine, pas de représentant RGPD UE) pour des données personnelles; héberger V4 via Azure Foundry/Bedrock Frankfurt ou auto-héberger les poids en UE; ajouter délais plus longs, fallback et revue de politique de données.

### 10. Alibaba/Qwen

**[Officiel, S27–S28]** Qwen3.8-Max (2/6 USD, cache 0,25, 1 M) remplace 3.7 Max; poids ouverts annoncés vers le 10 août (à confirmer). Respecter l’allowlist exacte du Coding Plan et la clé/base URL dédiée; sinon PAYG peut être facturé. **[Déduction]** Préférer Bedrock Frankfurt ou l’auto-hébergement des poids ouverts en UE (routage international via Singapour par défaut); épingler région, devise et version; tester FR/NL avant engagement.

### 11. NVIDIA

**[Officiel, S29–S31]** NeMo couvre personnalisation, évaluation, observabilité et sécurité des agents; NIM industrialise l’inférence. **[Déduction]** Scanner images et poids, pinner digests, mesurer GPU-utilisation/jeton et définir une stratégie de patch.

### 12. Cohere

**[Officiel, S32–S34]** Command cible RAG, citations, outils et multilingue; respecter limites essai/production, employer Embed/Rerank pour retrieval. **[Déduction]** Évaluer le gain du reranker séparément et conserver les citations comme données structurées.

### 13. IBM

**[Officiel, S35–S36]** Granite 4 (modèles **signés cryptographiquement**), Agent Lab, RAG et watsonx.governance pour inventaire/évaluation et conformité AI Act; les prix varient par pays et taxes. **[Déduction]** Coupler Granite 4 + governance pour la traçabilité/lineage; justifier le surcoût par exigences d’audit et intégration hybride.

### 14. GitHub Copilot

**[Officiel, S37–S38]** Crédits de base 1:1 avec l’abonnement (10/39/100 USD) + « flex allotment » variable; l’app Billing Preview a été retirée le 3 août. B/E n’entraîne pas sur données client. L’agent tourne en sandbox Actions avec pare-feu/allow-list et gating par revue requise. **[Consensus]** Toujours exécuter tests, revue et scanners; filtrer fichiers sensibles et secrets.

### 15. Perplexity

**[Officiel, S39–S40]** API et abonnement facturés séparément (crédits grand public désormais explicites: Pro 4 000 bonus, Max 35 000 + 10 000/mois); **l’API applique le Zero Data Retention**, le grand public a la rétention activée par défaut (opt-out possible). **[Consensus]** Ouvrir les citations, privilégier sources primaires et conserver URL/date/extrait justificatif.

### 16. Cursor

**[Officiel, S42–S43]** Imposer Privacy Mode, ZDR providers, SOC 2 Type II, règles `.cursor/rules` et contrôles d’équipe; Grok 4.5 a rejoint le pool first-party. **[Déduction]** Limiter commandes (allow/deny + gate terminal), MCP et répertoire; suivre usage par agent/modèle et revoir chaque diff; pas de région UE dédiée, s’appuyer sur Privacy Mode + ZDR.

### 17. Replit

**[Officiel, S44]** Les plans incluent des crédits et builds autonomes; le déploiement privé est réservé au niveau supérieur. **[Déduction]** Séparer prototype et production; exporter code/données et tester restauration avant dépendance forte.

### 18. Hugging Face

**[Officiel, S45–S47]** Le routage Providers est annoncé sans majoration; Endpoints facture le calcul; eu-west-1, PrivateLink, DPA Enterprise et logs 30 jours sont documentés. **[Déduction]** Évaluer licence, code distant, pickle/malware scan et provider final pour chaque modèle.

### 19. Moonshot/Kimi

**[Officiel, S49–S51]** Kimi K3 (poids ouverts depuis le 27 juil., 3/15 USD, 1 M) recommande instructions claires, délimiteurs, étapes, texte de référence et résumé des longues conversations; Kimi Code peut utiliser sous-agents, hooks et MCP. **[Déduction]** **Vérifier la licence à paliers de revenus (Kimi K3 License, pas MIT)** avant usage commercial; API directe traitée en Chine — auto-héberger les poids en UE pour données personnelles; activer hooks d’approbation et sandbox; ne pas exposer une clé API côté client.

### 20. Z.AI/GLM

**[Officiel, S52–S54]** GLM-5.2 (poids MIT, 1,40/4,40 USD, cache 0,26, contexte porté vers 1 M à confirmer); prix distincts entrée/cache/sortie/outils, API OpenAI-compatible, Coding Plan Lite/Pro/Max. **[Déduction]** Grand avantage: **poids MIT auto-hébergeables en UE sans contrainte de licence** — voie propre RGPD (l’API hébergée route par la Chine); fixer un plafond web search, confirmer le palier de contexte réel et tester FR/NL avant production.

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
