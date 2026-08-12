# LLM exécutables en local — guide par matériel

Contrôle: **12 août 2026**. Point de vue: particulier ou développeur résidant en Belgique qui veut faire tourner un modèle **sur sa propre machine**, sans envoyer de données à un fournisseur cloud. Ce fichier complète l'[observatoire des 20 écosystèmes](README.md); il ne le remplace pas.

> ⚠️ **Correction majeure au contrôle du 12 août 2026.** La première édition de ce guide (11 août) recommandait **Gemma 3** et **Qwen3** comme familles de référence. Ces deux familles avaient en réalité **déjà été remplacées** au moment de la rédaction: **Gemma 4** est sortie en avril 2026 (E2B/E4B/12B/26B-A4B/31B, désormais sous **Apache 2.0**, multimodale, contexte 128 k–256 k) [S126] et **Qwen3.6** en avril 2026 (dont 35B-A3B) [S127]. Les tableaux ci-dessous sont corrigés. Gemma 3 et Qwen3 restent parfaitement fonctionnels — inutile de les désinstaller — mais ils ne constituent plus le premier choix pour une nouvelle installation. Cette édition ajoute par ailleurs quatre sorties d'août directement pertinentes en local: **Muse Glimmer 30B** (Meta), **Nemotron 3.5 Lightning 30B-A3B** (NVIDIA), **Shieldstral 1.0 3B** (Mistral) et **Granite 4.1** (IBM).

> Avertissement de méthode. Les **empreintes mémoire** sont calculées à partir de la taille des poids et de la quantification, puis recoupées avec les cartes de modèles officielles. Les **vitesses en tokens/s** proviennent de bancs d'essai indépendants et **dépendent fortement du matériel exact, du moteur, du contexte et du réglage**: elles sont indicatives et marquées « à tester ». Ne considérez jamais un modèle comme « compatible » s'il ne tient pas réellement en mémoire avec la quantification **et** le contexte visés. En cas de doute: **à tester**.

> Niveau de preuve de cette édition: les domaines officiels (`ai.google.dev`, `huggingface.co`, `mistral.ai`…) étaient **bloqués par la politique de sortie réseau**. Les caractéristiques ci-dessous proviennent de l'index de recherche restituant ces pages officielles et de sources indépendantes convergentes. Les tailles de fichiers GGUF exactes doivent être revérifiées sur la carte du quantifieur choisi avant téléchargement.

## 1. Comment lire les besoins mémoire

Un modèle en RAM/VRAM = **poids quantifiés** + **cache KV** (croît avec le contexte) + **overhead** (moteur, buffers, activations). Règle de travail:

- **Poids** ≈ nombre de paramètres (en milliards) × octets par paramètre.
- **Octets par paramètre selon la quantification** (formats GGUF k-quants) [S94–S95]:

| Quantification | Octets/param | Repère qualité |
|---|---:|---|
| FP16 / BF16 | 2,0 | référence, non quantifié |
| Q8_0 | 1,0 | quasi sans perte |
| Q6_K | ~0,82 | perte négligeable |
| Q5_K_M | ~0,68 | très bon compromis |
| **Q4_K_M** | **~0,57** | **défaut recommandé grand public** |
| Q3_K_M | ~0,43 | dégradation visible, dépannage |
| MXFP4 (gpt-oss) | ~0,53 (4,25 bit) | quantification native d'origine [S100] |

- **Marge de sécurité.** Ajoutez **~1,5 à 2 Go** d'overhead, plus le **cache KV**. Ordre de grandeur du KV: quelques centaines de Mo à quelques Go selon le modèle et le contexte; un contexte long (≥128 k) peut coûter **plus cher que les poids eux-mêmes**. Prévoyez **10–20 % de mémoire libre** en plus de l'estimation.
- **Repère rapide** [S95]: à FP16, ~2 Go de VRAM par milliard de paramètres; Q8 ≈ moitié; **Q4 ≈ quart**. Un 8B en Q4_K_M ≈ **~4,7 Go de poids** (+ KV + overhead ≈ **6–7 Go** en pratique à contexte modéré).

**GPU/mémoire unifiée entièrement** (tous les poids tiennent) est **beaucoup** plus rapide que **l'offload CPU/GPU** (une partie des couches sur le CPU). Un modèle qui « tient » par offload peut être 3 à 10× plus lent. Les modèles **MoE** (Mixture-of-Experts, peu de paramètres actifs par jeton, ex. gpt-oss, Qwen3-30B-A3B) restent rapides même partiellement en RAM, car peu de calcul par jeton.

## 2. Tableau de décision par configuration

Estimations à **Q4_K_M** (sauf mention), contexte modéré (8–16 k). « GPU » = tout en VRAM; « offload » = CPU+GPU; « CPU » = mémoire système seule.

| Configuration | Palier réaliste | Recommandation principale (chat) | Alternatives | À éviter |
|---|---|---|---|---|
| **Raspberry Pi 5 · 4 Go RAM** (CPU ARM) | 0,3–2,3 B | **Gemma 4 E2B** (~1,3 Go, audio+image) | Llama 3.2 1B; Gemma 3 1B; LFM2.5-230M (veille) | ≥4B (swap constant), tout contexte long |
| **CPU seul · 8 Go RAM** | 2–4,5 B | **Gemma 4 E4B** (~2,6 Go) | Qwen3 4B; Llama 3.2 3B; Phi-4-mini 3.8B | 7–8B (tient à peine, lent), 13B+ |
| **CPU seul · 16 Go RAM** | 8–12 B | **Gemma 4 12B** (~6,8 Go) | Qwen3.6 9B; Llama 3.1 8B; gpt-oss-20b (serré) | Denses 24B+, contexte 128k |
| **CPU seul · 32 Go RAM** | 26–35 B (MoE) | **Qwen3.6-35B-A3B** (MoE, 3 B actifs) | Gemma 4 26B-A4B; gpt-oss-20b | Denses 70B (très lent) |
| **CPU seul · 64 Go RAM** | 30–120 B (MoE) | **gpt-oss-120b** (MoE, ~64 Go) | Nemotron 3.5 Lightning 30B-A3B; Llama 3.3 70B dense (lent) | 70B dense pour l'interactif |
| **Mini-PC / portable · 16 Go RAM** (iGPU) | 8–12 B | **Gemma 4 12B** | Qwen3.6 9B; Mistral Nemo 12B | Denses 24B+ |
| **Mini-PC / portable · 32 Go RAM** | 26–35 B | **Qwen3.6-35B-A3B** (MoE) | Gemma 4 26B-A4B; Gemma 4 31B (lent) | 70B dense |
| **Apple Silicon · 16 Go unifiée** (MLX/Metal) | 8–12 B | **Gemma 4 12B** (MLX 4-bit) | Qwen3.6 9B; Gemma 4 E4B | 26B+ (mémoire unifiée partagée avec l'OS) |
| **Apple Silicon · 32 Go unifiée** | 26–35 B | **Qwen3.6-35B-A3B** | **Muse Glimmer 30B**; Gemma 4 31B; gpt-oss-20b | 70B dense (serré, lent) |
| **GPU · 8 Go VRAM** | 4–9 B (GPU) | **Qwen3.6 9B** (~5,1 Go) | Gemma 4 E4B (contexte large); DeepSeek-R1-Distill 7B | Denses 14B+ en tout-GPU |
| **GPU · 12 Go VRAM** (ex. RTX 3060) | 12 B dense (GPU) | **Gemma 4 12B** (~6,8 Go) | Qwen3.6-35B-A3B (offload, +RAM); gpt-oss-20b (offload) | 26–35B en tout-GPU; **Muse Glimmer 30B en tout-GPU** |
| **GPU · 16 Go VRAM** | 20–26 B MoE | **Gemma 4 26B-A4B** (~14,8 Go) | gpt-oss-20b (~13 Go); Nemotron 3.5 Lightning (NVFP4) | 31B dense en tout-GPU |
| **GPU · 24 Go VRAM** (ex. RTX 4090) | 30–35 B (GPU) | **Qwen3.6-35B-A3B** (Q4_K_M ≈ 21 Go) | **Muse Glimmer 30B** (≈19,3 Go à 130 k); Gemma 4 31B; Devstral 24B | 70B en tout-GPU (offload/2-bit seulement) |

**Cas particulier RTX 3060 12 Go + 64 Go RAM** (profil demandé). Tout-GPU confortable jusqu'à **12 B Q4**: **Gemma 4 12B** (~6,8 Go de poids, ~8–9 Go chargé) laisse une marge de contexte confortable. Les 64 Go de RAM permettent l'**offload** de modèles nettement plus gros, et c'est là que les MoE changent tout: **Qwen3.6-35B-A3B** (3 B actifs), **Gemma 4 26B-A4B** (3,8 B actifs), **gpt-oss-20b** et **Nemotron 3.5 Lightning 30B-A3B** restent utilisables malgré l'offload, parce que le calcul par jeton reste petit. En revanche **Muse Glimmer 30B est dense**: à ~19,3 Go en 4 bits il ne tient pas en 12 Go de VRAM et son offload sera lent — sur ce profil, préférez un MoE. Les denses 31–32B fonctionnent par offload mais deviennent lents (~15–20 tok/s selon banc indépendant, à tester) [S108]. Réservez la VRAM au modèle en fermant les applications GPU.

## 3. Recommandations par catégorie

On sépare les usages pour éviter les comparaisons trompeuses: un modèle de **code** ou de **vision** ne se juge pas comme un **chat** généraliste.

### 3.1 Chat généraliste (dense)

**Famille de référence 2026: Gemma 4 (Apache 2.0) et Qwen3.6 (Apache 2.0).** Les lignes Gemma 3 / Qwen3 sont conservées plus bas comme repères historiques encore valides, non comme premier choix.

| Modèle (version) | Params | Archi | Quant. conseillée | Taille fichier ~ | RAM/VRAM au chargement ~ | Contexte réaliste | FR / NL | Licence | Moteurs | Source |
|---|---:|---|---|---:|---:|---|---|---|---|---|
| **Gemma 4 E2B** | 2,3 B effectifs | dense (texte+image+audio) | Q4_K_M | ~1,3 Go | ~2–2,5 Go | 8–32 k (max 128 k) | FR bon, NL correct — à tester | **Apache 2.0** | llama.cpp, Ollama, LM Studio, MLX | S126 |
| **Gemma 4 E4B** | 4,5 B effectifs | dense (texte+image+audio) | Q4_K_M | ~2,6 Go | ~4–5 Go | 8–32 k (max 128 k) | FR bon, NL correct — à tester | **Apache 2.0** | llama.cpp, Ollama, MLX | S126 |
| **Gemma 4 12B** | 12 B | dense (texte+image+audio) | Q4_K_M | ~6,8 Go | ~8–9 Go | 16–32 k (max à confirmer) | FR très bon, NL bon — à tester | **Apache 2.0** | llama.cpp, Ollama, MLX | S126 |
| **Gemma 4 26B-A4B** | 26 B / 3,8 B actifs | **MoE** (texte+image) | Q4_K_M | ~14,8 Go | ~16–17 Go | 32 k+ (max 256 k) | FR excellent, NL bon — à tester | **Apache 2.0** | llama.cpp, Ollama, MLX, vLLM | S126 |
| **Gemma 4 31B** | 31 B | dense (texte+image) | Q4_K_M | ~17,7 Go | ~19–21 Go | 32 k+ (max 256 k) | FR excellent, NL bon — à tester | **Apache 2.0** | llama.cpp, Ollama, MLX, vLLM | S126 |
| **Qwen3.6 9B** | 9 B | dense | Q4_K_M | ~5,1 Go | ~6–7 Go | 32 k+ | FR bon, NL correct — à tester | Apache 2.0 | llama.cpp, Ollama, MLX, vLLM | S127 |
| **Muse Glimmer 30B** | ~29,6 B + vision ~1,8 B | dense, GQA+SWA | 4 bits (NF4) | ~19,3 Go | ~20–22 Go | **130 k mesuré sans quantifier le KV** | 100+ langues; FR/NL à tester | **Apache 2.0** | vLLM, llama.cpp, Unsloth | S117–S118 |
| Gemma 3 1B *(historique)* | 1 B | dense | Q4_K_M | ~0,8 Go | ~1,5–2 Go | 8–32 k | FR bon, NL correct | Gemma (usage) | llama.cpp, Ollama, LM Studio, MLX | S97 |
| Llama 3.2 3B | 3 B | dense | Q4_K_M | ~1,9 Go | ~3–4 Go | 8–32 k | FR bon, NL moyen | Llama Community | llama.cpp, Ollama | S98 |
| Qwen3 4B | 4 B | dense | Q4_K_M | ~2,4 Go | ~4–5 Go | 32 k+ | FR bon, NL correct | Apache 2.0 | llama.cpp, Ollama, MLX, vLLM | S96 |
| Gemma 3 4B | 4 B | dense (vision) | Q4_K_M | ~2,5 Go | ~4–5 Go | 8–32 k | FR bon, NL correct | Gemma (usage) | llama.cpp, Ollama, MLX | S97 |
| Qwen3 8B | 8 B | dense | Q4_K_M | ~4,7 Go | ~6–7 Go | 32 k+ | FR bon, NL correct | Apache 2.0 | llama.cpp, Ollama, MLX, vLLM | S96 |
| Llama 3.1 8B | 8 B | dense | Q4_K_M | ~4,7 Go | ~6–7 Go | 8–128 k | FR bon, NL moyen | Llama Community | llama.cpp, Ollama, vLLM | S98 |
| Gemma 3 12B | 12 B | dense (vision) | Q4_K_M | ~7,3 Go | ~9–10 Go | 8–32 k | FR très bon, NL bon | Gemma (usage) | llama.cpp, Ollama, MLX | S97 |
| Qwen3 14B | 14 B | dense | Q4_K_M | ~8,5 Go | ~10–11 Go | 32 k+ | FR très bon, NL bon | Apache 2.0 | llama.cpp, Ollama, MLX, vLLM | S96 |
| Gemma 3 27B | 27 B | dense (vision) | Q4_K_M | ~16 Go | ~17–19 Go | 8–32 k | FR excellent, NL bon | Gemma (usage) | llama.cpp, Ollama, MLX, vLLM | S97 |
| Qwen3 32B | 32 B | dense | Q4_K_M | ~18 Go | ~19–21 Go | 32 k+ | FR excellent, NL bon | Apache 2.0 | llama.cpp, Ollama, MLX, vLLM | S96 |
| Llama 3.3 70B | 70 B | dense | Q4_K_M | ~40 Go | ~42–46 Go | 8–128 k | FR excellent, NL bon | Llama Community | llama.cpp, Ollama, vLLM | S98 |

### 3.2 Modèles MoE (efficaces mémoire/vitesse)

Peu de paramètres **actifs** par jeton → rapides même en offload CPU. Idéaux dès 32 Go de RAM ou 16 Go de VRAM.

| Modèle | Params totaux / actifs | Quant. | Taille ~ | Mémoire ~ | Contexte | Note | Source |
|---|---|---|---:|---:|---|---|---|
| gpt-oss-20b | 20,9 B / 3,6 B (32 exp., top-4) | MXFP4 natif | ~12 Go | ~13–14 Go | 128 k | Bon raisonnement; ~10 tok/s CPU 14 Go, plus vite en GPU | S100, S110 |
| **Gemma 4 26B-A4B** | 26 B / 3,8 B | Q4_K_M | ~14,8 Go | ~16–17 Go | 256 k | Multimodal, Apache 2.0; bon candidat GPU 16 Go | S126 |
| **Qwen3.6-35B-A3B** | 35 B / 3 B (256 exp., 8+1 actifs) | Q4_K_M | **~21 Go** | ~23–24 Go | 262 k natif (1 M via YaRN) | Attention linéaire Gated DeltaNet; multimodal texte/image/vidéo; Q4_K_M conserve ~99 % de BF16 en code selon l'éditeur | S127 |
| **Nemotron 3.5 Lightning 30B-A3B** | 30 B / 3 B | NVFP4 (ou BF16) | ~16 Go (NVFP4) | ~18–19 Go | **1 M** | MoE hybride Mamba-2 + attention; licence **OpenMDW-1.1**; vitesse annoncée jusqu'à ×4 à taille comparable (fournisseur, à tester) | S120–S121 |
| Qwen3-30B-A3B *(historique)* | 30 B / 3,3 B | Q4_K_M | ~18 Go | ~19–20 Go | 256 k | Remplacé par Qwen3.6-35B-A3B | S96 |
| gpt-oss-120b | 116,8 B / 5,1 B (128 exp.) | MXFP4 natif | ~63 Go | ~64 Go | 128 k | Vise 64 Go RAM; ~40 tok/s grâce au MoE (à tester) | S100, S110 |

### 3.3 Raisonnement

| Modèle | Params | Quant. | Mémoire ~ | Cible matériel | Note | Source |
|---|---:|---|---:|---|---|---|
| DeepSeek-R1-Distill-Qwen 1.5B | 1,5 B | Q4_K_M | ~1,5–2 Go | Pi5 4 Go / CPU 8 Go | Raisonnement compact, sorties longues | S103 |
| DeepSeek-R1-Distill-Qwen 7B | 7 B | Q4_K_M | ~6 Go | GPU 8 Go / CPU 16 Go | Bon compromis raisonnement local | S103 |
| DeepSeek-R1-Distill-Qwen 14B | 14 B | Q4_K_M | ~10–11 Go | GPU 12–16 Go | Raisonnement soutenu | S103 |
| Qwen3 (mode thinking) | 4–32 B | Q4_K_M | selon taille | tous paliers | Raisonnement activable par balise; coûte des jetons | S96 |
| gpt-oss-20b | 20,9 B / 3,6 B | MXFP4 | ~13–14 Go | GPU 16 Go / CPU 16 Go+ | Raisonnement fort pour la taille | S100 |

> Attention: les modèles de raisonnement génèrent de **longues chaînes**; le cache KV et le coût en temps montent vite. Bornez le contexte de sortie.

### 3.4 Code

| Modèle | Params (actifs) | Quant. | Mémoire ~ | Contexte | Repère perf. | Licence | Source |
|---|---|---|---:|---|---|---|---|
| Qwen2.5-Coder 7B | 7 B | Q4_K_M | ~6 Go | 32–128 k | Solide complétion/édition | Apache 2.0 | S96 |
| Qwen2.5-Coder 14B | 14 B | Q4_K_M | ~10–11 Go | 32–128 k | Fort sur 12–16 Go VRAM | Apache 2.0 | S96 |
| **Devstral 24B** | 24 B dense | Q4_K_M | ~14 Go | 128 k | **46,8 % SWE-Bench Verified** (agentique) [S108] | Apache 2.0 | S99, S108 |
| **Qwen3-Coder 30B** | 30 B / 3,3 B (MoE) | Q4_K_M | ~19 Go | 256 k | Meilleur rapport qualité/Go sur 24–32 Go [S108] | Apache 2.0 | S96, S108 |

Devstral 24B est **text-only, dense**, tient en 14 Go et cible un RTX 4090 (24 Go) ou un Mac 32 Go; sur 12 Go il passe par offload (~18 tok/s, à tester). Qwen3-Coder-30B (MoE) reste rapide en offload et gère un très grand contexte [S108].

### 3.5 Vision (multimodal)

| Modèle | Params | Quant. | Mémoire ~ | Cible | Note | Source |
|---|---:|---|---:|---|---|---|
| Moondream / MiniCPM-V (tiny) | ~2–3 B | Q4_K_M | ~2–4 Go | Pi5 (serré) / CPU 8 Go | Légende, OCR simple | S94 |
| Qwen3-VL 2B | 2 B | Q4_K_M | ~3–4 Go | CPU 8 Go / GPU 8 Go | Vision compacte, Apache 2.0 | S96 |
| **Gemma 4 E2B / E4B** | 2,3 / 4,5 B eff. | Q4_K_M | ~2–5 Go | Pi 5 (E2B, serré) / CPU 8 Go | Texte + **image + audio**; Apache 2.0 | S126 |
| **Gemma 4 12B** | 12 B | Q4_K_M | ~8–9 Go | GPU 12 Go / Mac 16 Go | Texte + image + audio; bon FR | S126 |
| **Gemma 4 26B-A4B / 31B** | 26 (3,8 actifs) / 31 B | Q4_K_M | ~16 / ~20 Go | GPU 16–24 Go | Vision + FR/NL forts, contexte 256 k | S126 |
| **Muse Glimmer 30B** | ~29,6 B + vision 1,8 B | 4 bits | ~20 Go | GPU 24 Go / Mac 32 Go | Texte et image **entrelacés** sur 131 k | S117–S118 |
| **Qwen3.6-35B-A3B** | 35 B / 3 B actifs | Q4_K_M | ~23 Go | GPU 24 Go / Mac 32 Go | Texte, image **et vidéo** | S127 |
| Qwen2.5-VL 7B | 7 B | Q4_K_M | ~6–7 Go | GPU 8–12 Go | Vision documentaire solide | S96 |
| Gemma 3 4B / 12B / 27B *(historique)* | 4 / 12 / 27 B | Q4_K_M | ~5 / ~9 / ~17 Go | GPU 8–24 Go | Remplacés par Gemma 4 | S97 |

### 3.6 Embeddings (RAG local)

| Modèle | Params | Dim. | Mémoire ~ | Atouts | Source |
|---|---:|---:|---:|---|---|
| nomic-embed-text-v2 | ~0,5 B | 768 | <1 Go | Rapide, démarrage à froid court, documents longs | S106 |
| EmbeddingGemma (300M) | 0,3 B | configurable | <1 Go | Léger, multilingue, on-device | S107 |
| bge-m3 | ~0,6 B | 1024 | ~1–2 Go | Multilingue, dense + sparse + ColBERT (hybride) | S105 |
| Qwen3-Embedding 0.6B / 4B / 8B | 0,6–8 B | flexible (MRL) | ~1 à ~7 Go | Qualité de récupération au sommet; 32 k contexte | S104 |

Pour un RAG **FR/NL**, privilégier **bge-m3** (hybride multilingue) ou **Qwen3-Embedding** (qualité, dimensions flexibles). nomic/EmbeddingGemma pour l'empreinte minimale sur petit matériel.

### 3.7 Garde-fous locaux (nouveau — août 2026)

Un modèle local n'a **aucun filtre côté fournisseur**: si vous exposez un modèle non aligné à des utilisateurs, à des documents non fiables ou à une boucle agentique, le garde-fou est à vous. Une nouveauté d'août rend cela accessible sur du matériel grand public.

| Modèle | Params | Rôle | Mémoire ~ | Licence | Note | Source |
|---|---:|---|---:|---|---|---|
| **Shieldstral 1.0** (Mistral) | 3 B | Classification de sûreté **texte + image** | Un seul GPU 16 Go en précision native; ~1,7 Go en Q4 | **Apache 2.0** | Base Ministral-3B + encodeur vision Pixtral. **La politique de modération s'écrit en langage naturel au moment de l'inférence**, au lieu d'une taxonomie figée à l'entraînement: un seul passage avant renvoie un score calibré. Le fournisseur annonce 84,9 % de F1 moyen en sûreté texte (à parité avec un modèle 7× plus gros) et 83,8 % en multimodal — **mesures fournisseur, non répliquées indépendamment** | S122–S123 |
| **Granite 4.1 Guardian** (IBM) | selon variante | Modèle de sûreté de la famille Granite 4.1 | Selon variante | Ouverte selon composant | Fait partie d'une famille de 10 modèles (3B/8B/30B, variantes FP8, VLM documentaire, ASR multilingue) | S129 |

Usage recommandé: placer le classificateur **devant et derrière** le modèle génératif (entrée utilisateur, puis sortie), avec une politique écrite pour *votre* cas d'usage — et la tester sur des exemples FR et NL réels, car un score agrégé anglophone ne dit rien de la qualité en néerlandais.

### 3.8 Agents locaux (nouveau — août 2026)

Deux sorties d'août visent explicitement l'**agent qui tourne sur votre machine**, un usage jusque-là mal servi en local:

- **Muse Glimmer 30B** (Meta, Apache 2.0): entraîné pour l'usage d'outils multi-étapes, les appels de fonctions et **la reprise après échec d'une API appelée**. ~19,3 Go en 4 bits avec 131 072 jetons de contexte texte+image entrelacés, sans quantification du cache KV; plus de 100 langues; un drafter spéculatif « DFlash » est annoncé jusqu'à ×3,1 en génération (annonce fournisseur, à tester) [S117–S118].
- **Nemotron 3.5 Lightning 30B-A3B** (NVIDIA, OpenMDW-1.1): pensé pour les agents « toujours actifs » à fort volume, avec 3 B de paramètres actifs seulement et 1 M de contexte [S120].

Rappel de prudence: un agent local qui exécute des commandes ou modifie des fichiers présente **exactement les mêmes risques** qu'un agent cloud. Sandbox, liste blanche de commandes, plafond d'itérations et revue humaine restent obligatoires — l'incident Hugging Face de juillet, causé par un modèle échappé de son bac à sable pendant une évaluation, en est l'illustration la plus directe [S135–S136].

## 4. Modèles à éviter selon le matériel

- **Sur 4 Go (Pi 5) :** tout modèle ≥ 4B, et tout contexte long. Le swap détruit la latence.
- **En tout-GPU quand la VRAM ne suffit pas :** un 32B dense sur 12–16 Go, ou un 70B sur 24 Go, **ne tient pas** sans offload agressif ou quantification 2–3 bit qui dégrade la qualité. Ne les annoncez pas « compatibles ».
- **Quantifications ≤ Q3 pour la production :** dépannage seulement; perte de qualité mesurable, surtout en code et en NL.
- **Denses 70B pour l'interactif sur CPU :** techniquement chargeables en 64 Go, mais ~2–4 tok/s — inutilisable en conversation. Préférez un **MoE** (gpt-oss-120b) à taille mémoire comparable.
- **Contexte annoncé ≠ contexte tenable :** un modèle « 256 k » sur une machine 12 Go ne tiendra pas 256 k de KV. Dimensionnez le contexte à la mémoire libre réelle.

## 5. Marges mémoire — récapitulatif

| Cible | Poids Q4_K_M ~ | + KV + overhead (contexte modéré) | Mémoire libre conseillée |
|---|---:|---:|---:|
| 1–3 B | 0,8–1,9 Go | +1–2 Go | 4 Go |
| 7–8 B | ~4,7 Go | +2–3 Go | 8 Go |
| 12–14 B | 7–9 Go | +2–3 Go | 12–16 Go |
| 24–32 B | 14–18 Go | +3–5 Go | 24 Go |
| 70 B dense | ~40 Go | +6–10 Go | 48–64 Go |
| 120 B MoE (MXFP4) | ~63 Go | +2–4 Go (peu d'actifs) | 64–72 Go |

## 6. Procédure courte de validation locale

À faire **avant** de déclarer un modèle utilisable sur *votre* machine. Commandes stables et sûres uniquement.

1. **Installer un moteur.** Le plus simple: [Ollama](https://ollama.com) (multi-OS, gère le placement GPU/CPU automatiquement) ou [LM Studio](https://lmstudio.ai) (interface). Pour Apple Silicon, MLX offre les meilleures vitesses. Pour le service multi-utilisateur, vLLM.
2. **Tirer un modèle à sa taille.** Exemple Ollama:
   ```
   ollama run gemma4:12b
   ```
   (Remplacez par le tag exact voulu; **vérifiez la quantification par défaut du tag**, qui varie d'un registre à l'autre, ainsi que la date de publication du tag — un nom de famille populaire continue souvent de pointer vers une génération précédente.)
3. **Mesurer la mémoire réelle.** Pendant l'inférence, surveillez RAM/VRAM (Gestionnaire des tâches, `nvidia-smi`, `htop`, ou l'onglet ressources de LM Studio). Confirmez qu'il reste **10–20 %** de libre.
4. **Mesurer la vitesse.** Notez les **tokens/s** affichés (Ollama: `--verbose`; LM Studio: panneau stats). Comparez tout-GPU vs offload.
5. **Tester le contexte visé.** Chargez un prompt long représentatif; vérifiez que le KV ne fait pas déborder la mémoire ni chuter la vitesse.
6. **Tester FR et NL** sur vos tâches réelles: qualité, format, refus appropriés. Un bon score anglais ne garantit pas le néerlandais.
7. **Décider :** garder la config si mémoire libre OK, vitesse acceptable (≥ ~8–10 tok/s pour l'interactif) et qualité FR/NL suffisante; sinon descendre d'un palier de taille ou monter d'un cran de quantification vers le bas.

## 7. Compromis quantification ↔ qualité ↔ vitesse ↔ contexte

- **Baisser la quantification** (Q8 → Q4 → Q3) libère de la mémoire et accélère, mais dégrade la qualité; l'effet est plus marqué en **code** et en **langues moins dotées (NL)**.
- **Monter le contexte** consomme du KV, donc de la mémoire et du temps; à mémoire fixe, un long contexte force une **taille de modèle plus petite**.
- **Passer d'un dense à un MoE** de taille mémoire comparable améliore souvent la **vitesse** à qualité voisine, au prix d'une empreinte disque plus grande.
- **Tout-GPU** > offload pour la latence; si l'offload est inévitable, préférez un **MoE**.
- Défaut raisonnable grand public: **Q4_K_M**, contexte 8–16 k, modèle le plus grand qui laisse 10–20 % de mémoire libre.

## 8. Sécurité et confidentialité en local

L'exécution locale supprime l'envoi de données au cloud, mais **pas** tous les risques:

- **Provenance des poids.** Téléchargez depuis les dépôts officiels (organisations vérifiées sur Hugging Face, registre Ollama). Épinglez les digests; méfiez-vous des ré-uploads non officiels.
- **Pas d'exécution de code implicite.** N'activez pas de chargeurs exécutant du code distant (`trust_remote_code`) sans revue.
- **Licences.** Le paysage s'est nettement assoupli en 2026: **Gemma 4 est passée à Apache 2.0** (première fois dans la lignée Gemma) [S126], **Muse Glimmer est en Apache 2.0** [S117], Qwen3.6 et Shieldstral aussi. Restent à lire avant un déploiement professionnel: **Gemma 3** et **Llama Community** (conditions d'usage), et **OpenMDW-1.1** pour Nemotron 3.5 Lightning — permissive selon le fournisseur, mais c'est une licence récente à faire valider si l'enjeu est contractuel.
- **Garde-fous.** En local, aucun filtre fournisseur ne s'applique. Voir §3.7: un classificateur ouvert comme Shieldstral 1.0 tient sur un GPU 16 Go.
- **RGPD / AI Act.** Le traitement local reste soumis au RGPD si des données personnelles sont concernées; documentez finalité, base juridique et rétention. Analyse informative, pas avis juridique (voir [synthese.md](synthese.md)).

## 9. Limites de ce guide

- Les **vitesses** citées viennent de bancs indépendants sur du matériel proche mais non identique au vôtre: **à tester**.
- Les tailles de fichiers varient selon le fournisseur de quantification (Unsloth, bartowski, officiel); vérifiez la carte du fichier GGUF exact.
- Le **cache KV** dépend de l'implémentation (KV quantifié, flash attention); les marges données sont prudentes.
- Le paysage local évolue vite; ce fichier reflète l'état au **12 août 2026** et sera revu à chaque exécution. La correction Gemma 3 → Gemma 4 et Qwen3 → Qwen3.6 opérée ce mois-ci montre concrètement le risque: **une famille de modèles locaux peut être remplacée en quelques mois sans que les tutoriels et registres cessent de citer l'ancienne**. Vérifiez toujours la date de la carte de modèle, pas seulement le nom.
- Les empreintes des modèles ajoutés en août (Muse Glimmer, Nemotron 3.5 Lightning, Gemma 4, Qwen3.6) ont été établies **sans pouvoir ouvrir les cartes officielles** (domaines bloqués). Le chiffre le mieux étayé est celui de Muse Glimmer (~19,3 Go à 130 k de contexte), issu d'un banc reproductible sur RTX 4090; les autres sont des calculs à partir du nombre de paramètres et de la quantification. **À revérifier sur la carte du GGUF exact avant téléchargement.**
- Les vitesses annoncées par NVIDIA (×4) et Meta (×3,1 avec DFlash) sont des **affirmations fournisseur non répliquées indépendamment** à la date de ce contrôle.

## Sources

Registre complet et dates: [sources.md](sources.md). Les empreintes mémoire s'appuient en priorité sur les cartes de modèles et documentations officielles (S94–S107, S126–S127); les nouveautés d'août sont documentées en S117–S123 et S129; les vitesses et classements proviennent de bancs indépendants clairement identifiés (S108–S110) et sont marqués « à tester ». Les affirmations fournisseur sont signalées comme telles et séparées des mesures indépendantes.
