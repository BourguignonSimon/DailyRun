# 100 outils majeurs de l’écosystème IA

Contrôle : **17 août 2026**. Ce catalogue étend l’observatoire aux outils qui structurent l’usage, le développement, le déploiement et le contrôle des systèmes IA. Il est mis à jour par **le même run quotidien** que les modèles, les plateformes, les sources et les annonces ; aucune seconde automatisation n’est nécessaire.

## Méthode de sélection

La sélection combine adoption visible, influence sur les pratiques de développement, maturité, portée fonctionnelle, qualité de l’écosystème d’intégrations et pertinence pour un utilisateur ou développeur européen. Le numéro stabilise le périmètre de veille ; il ne constitue pas un classement universel de qualité.

Le catalogue contient exactement 100 outils répartis ainsi :

| Catégorie | Nombre | Périmètre |
|---|---:|---|
| Applications | 10 | Assistants généralistes, recherche et productivité |
| Code | 17 | Assistants, IDE et agents de développement |
| Agents & orchestration | 14 | SDK, frameworks, RAG et multi-agents |
| Workflows & interfaces | 10 | Automatisation, interfaces et intégration d’outils |
| Inférence locale | 10 | Runtimes, applications et bibliothèques locales |
| Plateformes & déploiement | 20 | API, clouds, routeurs et serving |
| Évaluation & sécurité | 14 | Traces, évaluations, red teaming et garde-fous |
| Données vectorielles | 5 | Recherche vectorielle et stockage RAG |

> **Revue structurelle hebdomadaire — semaine ISO 2026-W34, exécutée le 17 août 2026.** Un mouvement retenu et motivé. **Patronus AI sort du catalogue**: son SDK Python n’a pas été publié depuis le **9 janvier 2026**, quand tous les autres outils d’évaluation du catalogue ont publié dans les six dernières semaines — Guardrails AI et TruLens le 14 août, Weaviate le 13 août, DeepEval le 12 août. **Z.ai — GLM Coding Plan entre au rang 95**, dans la catégorie Code, au titre de la présence de marché de son offre de code par abonnement et de l’activité de sa ligne de modèles, attestée en source primaire par le dépôt public officiel GLM. Cette entrée tranche la réserve de sélection ouverte à la revue précédente. **Réserve publiée avec l’entrée**: le SDK Python de Z.ai n’a lui-même pas été publié depuis le 16 juin 2026, et les domaines `z.ai` et `docs.z.ai` sont refusés, de sorte que les conditions de l’abonnement, ses tarifs et sa disponibilité belge **ne sont pas établis**. L’admission repose sur l’adoption et la portée fonctionnelle, non sur la cadence de publication.
>
> **Ce que « statut renouvelé » signifie.** Les sites éditeurs de la grande majorité des cent outils sont refusés par la politique réseau sortante. Leur statut de contrôle est renouvelé à la date du jour avec la mention **« non revérifié »**, qui signifie *non relu à la source* et **non pas** *inchangé*. Cinq outils portent une nouveauté qualifiée ce contrôle: la plateforme Claude, l’API OpenAI, l’API Gemini, DeepSeek et Z.ai.

## Contrat de mise à jour quotidienne

Pour chacun des 100 outils, le run unique doit vérifier le statut du produit, l’URL officielle, la disponibilité pertinente pour la Belgique et l’existence d’une nouveauté importante. Une nouveauté publiée doit contenir au minimum : titre, date, URL exacte, note de confiance et justification, impact belge éventuel et date de contrôle.

Une mise à jour mineure n’est pas transformée artificiellement en annonce principale. En l’absence de nouveauté qualifiée, l’outil conserve un statut de contrôle actualisé. Les retraits, changements d’éditeur, ruptures de compatibilité, incidents, nouveaux prix, nouvelles régions, modèles ajoutés et changements de licence sont prioritaires.

## État du contrôle du 16 août 2026

La politique de sortie réseau de l’environnement rend la majorité des sites officiels des outils inaccessibles. **Deux canaux de preuve primaire ont été ouverts pour la première fois ce contrôle** et changent la nature de ce qui peut être établi : `code.claude.com`, qui sert la documentation et le **journal de version** de Claude Code, et `raw.githubusercontent.com`, qui sert le **contenu brut des fichiers versionnés** des dépôts publics — donc les journaux de version et fichiers de licence des éditeurs — alors que l’interface `github.com` reste refusée. Jusqu’ici, les registres de distribution officiels `pypi.org` et `registry.npmjs.org` prouvaient qu’une version existait et à quelle date, sans rien dire de son contenu. **Cette limite est levée pour trois chaînes SDK sur quatre**; elle demeure pour les SDK Anthropic Python et Mistral.

Les cent outils ont vu leur statut de contrôle renouvelé. **Six portent une nouveauté qualifiée**, dont **quatre établies en source primaire durable** : Claude Code, l’API OpenAI, Vertex AI et Claude. Aucun récit n’est fabriqué pour les autres : seul le statut de contrôle est actualisé.

Constats de ce contrôle :

- **Claude Code change de posture de sécurité par défaut.** Depuis le **14 août**, les nouvelles sessions démarrent en **mode automatique** sur les formules Pro, Max et Team : un classificateur arbitre les actions à la place de l’utilisateur. Le défaut ne s’applique qu’à partir de **2.1.228** sur macOS, Linux et WSL et de **2.1.233** sur Windows natif ; en deçà, le mode de départ reste Manuel. Un `permissions.defaultMode` posé par l’utilisateur n’est pas écrasé, et les défauts gérés par une organisation ne bougent pas. Enterprise, l’API Claude, Claude Platform on AWS, Amazon Bedrock, Google Cloud Agent Platform et Microsoft Foundry ne sont pas concernés [S191–S192].
- **Cinq correctifs de sécurité pour le même outil, les 13 et 14 août.** La **2.1.233** corrige un vecteur de **fuite d’identifiants NTLM sous Windows** ; la **2.1.232** un contournement de permissions PowerShell, un contournement par liens symboliques de style Cygwin, et l’héritage de la confiance du dépôt parent par les dépôts git imbriqués, en ajoutant la rédaction des jetons GitLab. **Aucun bulletin formel ni identifiant CVE** n’accompagne ces correctifs : aucun scanner de vulnérabilités ne peut les suivre automatiquement. Point d’attention de distribution : l’étiquette npm `stable` est restée à **2.1.224**, donc une installation qui la suit ne reçoit ni ces correctifs ni le plancher du nouveau défaut [S193, S202].
- **Rupture de compatibilité confirmée chez OpenAI, et non plus seulement probable.** Le journal de version officiel, désormais lisible, documente la **3.0.0** (12 août) sous une rubrique explicite de rupture : **HTTPX2 devient le client HTTP par défaut** et `httpx` n’est plus installé automatiquement. La **3.1.0** (14 août) ajoute le palier **Ultrafast** et **déprécie les API vidéo Sora**, dont l’arrêt est annoncé au **24 septembre 2026** — échéance à confirmer, la page officielle des dépréciations étant refusée [S195, S201].
- **Vertex AI ouvre publiquement son palier de service différé** (12 août), établi sur le journal de version officiel du SDK Google. **Tarif, latence contractuelle et régions ne sont pas établis** : la documentation Vertex AI et les pages tarifaires Google Cloud sont refusées, et ces trois éléments conditionnent tout arbitrage de coût [S196].
- **La Compliance API de Claude couvre les transcriptions de sessions Cowork et Claude Code**, pour les organisations Claude Enterprise, avec une limite partagée de 600 requêtes par minute par organisation parente. Statut de bêta et exclusions rapportées à confirmer [S194].
- **Rupture de compatibilité programmée chez GitHub Copilot.** Quatre modèles Anthropic, OpenAI et Google quittent toutes les surfaces Copilot le **1er septembre 2026**, MAI-Code-1-Flash le 10 septembre [S167].
- **Deux projets sans publication récente.** `autogen-agentchat` n’a rien publié depuis le 30 septembre 2025, `ragas` depuis le 13 janvier 2026. C’est un constat de **distribution**, pas d’abandon.

**Réserve de sélection portée à la revue structurelle du 17 août 2026.** Z.ai n’a aucune entrée dans ce catalogue alors que son offre de code par abonnement — GLM Coding Plan et ZCode — pèse désormais dans l’écosystème des assistants de code.

## Répartition des outils

- **Applications :** ChatGPT, Claude, Gemini, Microsoft Copilot, Le Chat, Perplexity, Grok, Kimi, DeepSeek Chat, Meta AI.
- **Code :** GitHub Copilot, Cursor, Claude Code, OpenAI Codex, Gemini Code Assist, Windsurf, JetBrains AI Assistant, Amazon Q Developer, Replit Agent, Cline, Roo Code, Continue, Aider, Zed AI, Sourcegraph Cody, Devin.
- **Agents & orchestration :** OpenAI Agents SDK, Claude Agent SDK, Google Agent Development Kit, Microsoft AutoGen, Semantic Kernel, LangChain, LangGraph, LlamaIndex, CrewAI, PydanticAI, smolagents, DSPy, Haystack, Mastra.
- **Workflows & interfaces :** n8n, Make, Zapier, Dify, Flowise, Langflow, Open WebUI, AnythingLLM, LibreChat, Composio.
- **Inférence locale :** LM Studio, Ollama, llama.cpp, vLLM, TensorRT-LLM, MLX, LocalAI, Jan, text-generation-webui, Transformers.
- **Plateformes & déploiement :** OpenAI API, Anthropic API, Gemini API, Azure AI Foundry, Amazon Bedrock, Vertex AI, La Plateforme, Cohere Platform, NVIDIA NIM, IBM watsonx.ai, GroqCloud, Together AI, Fireworks AI, OpenRouter, Replicate, Cloudflare Workers AI, Cerebras Inference, Baseten, Modal, BentoML.
- **Évaluation & sécurité :** Weights & Biases Weave, LangSmith, Langfuse, Arize Phoenix, Helicone, Braintrust, promptfoo, Ragas, DeepEval, TruLens, Guardrails AI, NeMo Guardrails, Lakera Guard, Galileo, Patronus AI.
- **Données vectorielles :** Qdrant, Pinecone, Weaviate, Milvus, Chroma.

Le fichier structuré utilisé par le dashboard est `dashboard/data/tools-catalog.json`. Les sources probantes de chaque nouveauté restent enregistrées dans le registre général et dans les annonces qualifiées.
