# Bonnes pratiques de développement

État vérifié le **11 août 2026** (socle du 6 août, révisé à la deuxième passe du 11 août). Les mentions distinguent **[Officiel]** recommandation publiée par un fournisseur, **[Consensus]** pratique convergente entre plusieurs fournisseurs et **[Déduction]** conclusion analytique de cet observatoire.

## Nouveautés de ce contrôle

Quatre points ajoutés ou corrigés le 11 août 2026, chacun avec une conséquence concrète sur du code ou un budget.

1. **Le prix par million de jetons ne prédit plus la facture.** Trois mécanismes s'y ajoutent désormais et sont publiés séparément: la **durée de session** des agents managés (0,08 USD/heure chez Anthropic), les **outils serveur** facturés à l'appel (recherche web 10 USD/1 000 chez Anthropic; Web/X Search et Code Execution 5 USD/1 000 chez xAI; 0,01 USD/usage chez Z.AI), et la **surtaxe long contexte** (GPT-5.6 Sol 5/30 → 10/45; Gemini 3.1 Pro 2/12 → 4/18 au-delà de 200 k). **[Déduction]** Instrumentez ces trois postes séparément dans votre télémétrie de coût, sinon vos prévisions dériveront sans que vous sachiez pourquoi [S07, S65, S22].
2. **Le nombre de jetons n'est pas comparable entre versions d'un même fournisseur.** Claude 4.7 et suivants utilisent un tokenizer qui produit **~30 % de jetons en plus pour le même texte** que Sonnet 4.6 et antérieurs. **[Officiel, S07]** Une migration de version à prix affiché identique **augmente** donc la facture. **[Déduction]** Rejouez votre jeu d'évaluation et comparez le coût réel mesuré, jamais le prix catalogue.
3. **Un garde-fou de modération peut désormais rester chez vous.** Shieldstral 1.0 (3 B, Apache 2.0) juge texte et image contre une politique écrite **en langage naturel à l'inférence**, sur un seul GPU de 16 Go. **[Déduction]** C'est l'option à considérer quand les contenus utilisateurs ne peuvent légalement pas sortir vers une API tierce. **Testez FR et NL:** l'éditeur annonce une performance multilingue inégale [S119–S121].
4. **Les retraits de modèles ne sont pas toujours progressifs.** L'arrêt des modèles d'image Google du 17 août provoque une **erreur dure sans période d'avertissement**, et la forme de l'API change: renommer le modèle ne suffit pas. **[Consensus]** Épinglez les identifiants datés, surveillez les pages de dépréciation de chaque fournisseur utilisé, et prévoyez que certaines migrations demandent une réécriture d'appel, pas une substitution [S114].

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
- Documenter supervision humaine, transparence à l’utilisateur et limites. Depuis le 2 août 2026, traiter l’application générale de l’AI Act et les pouvoirs de contrôle et de sanction GPAI comme exigences actives à qualifier avec le conseil juridique [S57–S59, S78].
- Après l’incident Hugging Face, interdire l’exécution implicite de code provenant de datasets/modèles, isoler les workers, bloquer l’accès metadata, réduire la portée/durée des identités et préparer une rotation de secrets [S76–S77].

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

**[Officiel, S05/S61–S62]** Pour GPT-5.6, conserver l’effort actuel comme baseline puis tester un niveau inférieur; utiliser Responses, outils structurés, cache explicite et raisonnement persisté. Encadrer autonomie et approbations dans une politique concise. **[Déduction]** Réserver Sol aux tâches où le gain sur Terra/Luna est mesuré; budgéter cache écrit, outils et multi-agent séparément.

### 2. Anthropic

**[Officiel, S63–S64/S85]** Exploiter prompt caching, batch -50 %, modèles datés et effort approprié. Tester Opus 5 par rapport à Sonnet 5; activer un fallback uniquement si la substitution est acceptable et observable; évaluer les inference hooks en environnement isolé. **[Officiel, S07]** Choisir la durée de cache selon le nombre de relectures attendues: une écriture 5 minutes (×1,25) est rentable dès **une** relecture, une écriture 1 heure (×2) à partir de **deux**. Le million de jetons est inclus au tarif standard sur les modèles 4.6+, donc inutile de découper artificiellement un contexte long pour le prix — le découper reste justifié pour la qualité. **[Officiel, S115]** Le tarif d'introduction de Sonnet 5 s'arrête le **31 août 2026** (2/10 → 3/15): rebudgétez et vérifiez si Haiku 4.5 passe votre évaluation sur une part du trafic. **[Officiel, S118]** Le routage est **global par défaut**; `inference_geo: "us"` force les États-Unis avec une surtaxe ×1,1 — ce n'est pas une option de résidence UE, qui passe par Bedrock ou Vertex avec endpoints régionaux (+10 %). **[Déduction]** Réserver Fable 5 aux tâches où son plafond compense prix et faux positifs potentiels des garde-fous; Mythos 5 n'est pas une option de plan produit, l'accès étant sur invitation [S116].

### 3. Google

**[Officiel, S09–S11/S65/S86, S114]** Le payant exclut l’usage d’amélioration selon la grille; cache, batch, Flex, Priority, Search grounding et file search ont des unités séparées. Pour Gemini 3.6, retirer les paramètres d’échantillonnage dépréciés, éliminer les tours modèle préremplis et tester Computer Use. **[Déduction]** Pour production UE, préférer projet payant et contrôles Vertex au tier gratuit.

### 4. Microsoft

**[Officiel, S12–S14]** Utiliser Entra, politiques, budgets et capacité Copilot Studio/Azure adaptée. **[Déduction]** Modéliser la facture complète licence + crédits agent + modèle + recherche/connecteurs; éviter le double comptage des offres.

### 5. AWS

**[Officiel, S15–S17/S88–S89]** Choisir Standard/Flex/Priority/Reserved, batch lorsque supporté, IAM minimal, Guardrails, Knowledge Bases et AgentCore. Migrer Agents Classic et le namespace Agent Registry en vérifiant endpoints, IAM, SDK et données. **[Déduction]** Fixer une région et bloquer le cross-region non approuvé; tracer chaque coût aval d’un agent.

### 6. Meta

**[Officiel, S18]** Vérifier licence et carte du modèle avant téléchargement/déploiement. **[Déduction]** Pour Llama auto-hébergé, ajouter serveur d’inférence, isolation, modération, évaluation et procédure de mise à jour; « open weight » ne signifie pas open source complet.

### 7. Mistral

**[Officiel, S19–S21]** Choisir Large généraliste, Medium 3.5 pour agents/code, Small pour coût; batch -50 %, agents/RAG/OCR disponibles. **[Officiel, S119–S120]** Pour la modération, **Shieldstral 1.0 3B** (Apache 2.0) accepte une politique en langage naturel à l'inférence et couvre texte et image sur un GPU de 16 Go: pas de réentraînement pour ajuster une catégorie ou un niveau de sévérité. **[Déduction]** Profiter de la proximité UE mais valider contrat et licence de chaque poids/version; sur Shieldstral, tester explicitement FR et NL, les limites multilingues étant annoncées par l'éditeur [S121].

### 8. xAI

**[Officiel, S22/S68/S84]** Tenir compte des paliers court/long contexte, cache, coûts voix/image/vidéo et outils; utiliser `prompt_cache_key` pour stabiliser les hits de cache. Grok 4.5 est confirmé dans la console UE. **[Déduction]** Ne pas laisser un agent franchir le seuil 200 k sans alerte.

### 9. DeepSeek

**[Officiel, S66–S67]** Migrer explicitement vers `deepseek-v4-pro` ou `deepseek-v4-flash`; les anciens alias sont retirés. Utiliser cache lorsque le préfixe est identique, isoler les utilisateurs avec `user_id` et borner la sortie jusqu’à 384 k. **[Déduction]** Héberger les poids via fournisseur UE pour données sensibles.

### 10. Alibaba/Qwen

**[Officiel, S27–S28/S69]** Respecter l’allowlist exacte du Coding Plan et utiliser la clé/base URL dédiée; sinon PAYG peut être facturé. Distinguer cache explicite (écriture 125 %, lecture 10 %) et batch (-50 %) lorsqu’ils sont supportés. **[Déduction, S122–S123]** **Qwen3.8-Max** (3 août 2026, 2/6 USD/M, cache 0,25, contexte 1 M) place Alibaba à parité de prix avec GPT-5.6 Terra: c'est un candidat sérieux à un banc d'essai comparatif, mais la disponibilité commerciale en Belgique, la facturation EUR, le DPA et la résidence des données restent **non confirmés** — ne l'utilisez pas avec des données personnelles ou confidentielles avant validation contractuelle. **[Déduction]** Épingler région, devise et snapshot; tester FR/NL et disponibilité.

### 11. NVIDIA

**[Officiel, S29–S31]** NeMo couvre personnalisation, évaluation, observabilité et sécurité des agents; NIM industrialise l’inférence. **[Déduction]** Scanner images et poids, pinner digests, mesurer GPU-utilisation/jeton et définir une stratégie de patch.

### 12. Cohere

**[Officiel, S32–S34]** Command cible RAG, citations, outils et multilingue; respecter limites essai/production, employer Embed/Rerank pour retrieval. **[Déduction]** Évaluer le gain du reranker séparément et conserver les citations comme données structurées.

### 13. IBM

**[Officiel, S35–S36]** Utiliser Agent Lab, RAG et watsonx.governance pour inventaire/évaluation; les prix varient par pays et taxes. **[Déduction]** Justifier le surcoût de gouvernance par exigences d’audit et intégration hybride.

### 14. GitHub Copilot

**[Officiel, S37–S38/S73–S74/S124]** Depuis le 1er juin 2026, Copilot facture **à l'usage via des GitHub AI Credits**, au tarif jeton du modèle effectivement routé (entrée, sortie, cache). **Les complétions inline et next-edit ne consomment aucun crédit** sur les plans payants; seuls chat, mode agent, revue de code et CLI en consomment — le coût réel dépend donc du mix d'usage, pas du prix affiché. Les crédits promotionnels Business (+30 USD/siège) et Enterprise (+70 USD/siège) s'arrêtent **fin août 2026**. B/E n’entraîne pas sur données client. Ne plus dépendre de GitHub Models, retiré le 30 juillet. **[Déduction]** Relevez la consommation réelle de crédits d'août avant la fin du mois: c'est la seule mesure qui dira si le crédit de base suffira en septembre. **[Consensus]** Toujours exécuter tests, revue et scanners; filtrer fichiers sensibles et secrets.

### 15. Perplexity

**[Officiel, S39–S40]** API et abonnement sont facturés séparément; modèle, recherche et preset changent le coût. **[Consensus]** Ouvrir les citations, privilégier sources primaires et conserver URL/date/extrait justificatif.

### 16. Cursor

**[Officiel, S42–S43/S75]** Imposer Privacy Mode, ZDR providers, règles de projet et contrôles d’équipe. Avec Cursor Router, journaliser le modèle réellement routé, le mode et le coût. **[Déduction]** Limiter commandes, MCP et répertoire; revoir chaque diff.

### 17. Replit

**[Officiel, S44]** Les plans incluent des crédits et builds autonomes; le déploiement privé est réservé au niveau supérieur. **[Déduction]** Séparer prototype et production; exporter code/données et tester restauration avant dépendance forte.

### 18. Hugging Face

**[Officiel, S45–S47/S76–S77]** Le routage Providers est annoncé sans majoration; Endpoints facture le calcul; eu-west-1, PrivateLink, DPA Enterprise et logs 30 jours sont documentés. Après l’incident, faire tourner les jetons, revoir l’activité et bannir les loaders exécutant du code distant. **[Déduction]** Pinner digests, isoler le traitement des datasets et prévoir un modèle défensif auto-hébergé.

### 19. Moonshot/Kimi

**[Officiel, S49–S50/S70–S71]** Kimi recommande instructions claires, délimiteurs et résumés; K3 ajoute effort low/high/max, cache automatique, tools dynamiques et JSON Schema. Kimi Code peut utiliser sous-agents, hooks et MCP. **[Déduction]** Activer approbations et sandbox; ne pas exposer de clé côté client ni utiliser le web search tant que sa mise à jour n’est pas stabilisée.

### 20. Z.AI/GLM

**[Officiel, S52–S54/S81]** Prix distincts entrée/cache/sortie/outils, API compatible et plans code à quotas; GLM-5.2 publie contexte 1 M, effort configurable et poids MIT. **[Déduction]** Fixer un plafond web search, confirmer le tarif GLM-5.2 avant production et tester FR/NL.

## Checklist de mise en production

- [ ] Cas d’usage, propriétaire, risque et métrique de réussite documentés.
- [ ] Fournisseur, modèle, snapshot, région et fallback choisis.
- [ ] Prix origine, cache, batch, outils, TVA et plafond mensuel vérifiés.
- [ ] **Postes hors jetons** budgétés séparément: durée de session d’agent, appels d’outils serveur, surtaxe long contexte, prime de résidence régionale.
- [ ] **Coût mesuré, pas affiché**: coût réel par tâche réussie relevé après changement de version de modèle (le nombre de jetons pour un même texte varie d’une génération à l’autre).
- [ ] **Calendrier de retrait** des modèles utilisés relevé chez chaque fournisseur, avec la distinction entre substitution d’identifiant et réécriture d’appel.
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
