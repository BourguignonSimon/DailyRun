# 100 outils majeurs de l’écosystème IA

Contrôle : **13 août 2026**. Ce catalogue étend l’observatoire aux outils qui structurent l’usage, le développement, le déploiement et le contrôle des systèmes IA. Il est mis à jour par **le même run quotidien** que les modèles, les plateformes, les sources et les annonces ; aucune seconde automatisation n’est nécessaire.

## Méthode de sélection

La sélection combine adoption visible, influence sur les pratiques de développement, maturité, portée fonctionnelle, qualité de l’écosystème d’intégrations et pertinence pour un utilisateur ou développeur européen. Le numéro stabilise le périmètre de veille ; il ne constitue pas un classement universel de qualité.

Le catalogue contient exactement 100 outils répartis ainsi :

| Catégorie | Nombre | Périmètre |
|---|---:|---|
| Applications | 10 | Assistants généralistes, recherche et productivité |
| Code | 16 | Assistants, IDE et agents de développement |
| Agents & orchestration | 14 | SDK, frameworks, RAG et multi-agents |
| Workflows & interfaces | 10 | Automatisation, interfaces et intégration d’outils |
| Inférence locale | 10 | Runtimes, applications et bibliothèques locales |
| Plateformes & déploiement | 20 | API, clouds, routeurs et serving |
| Évaluation & sécurité | 15 | Traces, évaluations, red teaming et garde-fous |
| Données vectorielles | 5 | Recherche vectorielle et stockage RAG |

## Contrat de mise à jour quotidienne

Pour chacun des 100 outils, le run unique doit vérifier le statut du produit, l’URL officielle, la disponibilité pertinente pour la Belgique et l’existence d’une nouveauté importante. Une nouveauté publiée doit contenir au minimum : titre, date, URL exacte, note de confiance et justification, impact belge éventuel et date de contrôle.

Une mise à jour mineure n’est pas transformée artificiellement en annonce principale. En l’absence de nouveauté qualifiée, l’outil conserve un statut de contrôle actualisé. Les retraits, changements d’éditeur, ruptures de compatibilité, incidents, nouveaux prix, nouvelles régions, modèles ajoutés et changements de licence sont prioritaires.

## État du contrôle du 13 août 2026

La politique de sortie réseau de l’environnement a rendu les sites officiels des outils inaccessibles. En revanche, les **registres de distribution officiels** `pypi.org` et `registry.npmjs.org` répondaient. Ils ont permis d’établir, sur preuve primaire durable, **31 nouveautés qualifiées** parmi les 100 outils ; les 69 autres portent le statut explicite « non revérifié — source officielle inaccessible ». Aucune nouveauté n’a été fabriquée pour combler l’écart.

Trois constats sortent de ce contrôle :

- **Rupture de compatibilité probable chez OpenAI.** Le SDK Python `openai` passe de 2.54.0 (11 août) à **3.0.0** (12 août). Un projet qui n’épingle pas `openai<3` peut casser à la prochaine installation. Le contenu exact des ruptures n’a pas pu être lu.
- **Deux versions majeures discrètes.** `haystack-ai` 3.0.0 (20 juillet) et le client `pymilvus` 3.0.1 (29 juillet) ont franchi un cap majeur sans apparaître dans les annonces principales.
- **Deux projets sans publication récente.** `autogen-agentchat` n’a rien publié depuis le 30 septembre 2025, `ragas` depuis le 13 janvier 2026. C’est un constat de **distribution**, pas un jugement sur la santé des projets : le développement peut se poursuivre sans publication de paquet. À surveiller avant d’en faire une dépendance structurante.

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
