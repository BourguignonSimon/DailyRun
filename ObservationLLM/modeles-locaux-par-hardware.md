# LLM exécutables en local — guide par matériel

Contrôle: **11 août 2026 (deuxième passe)**. Point de vue: particulier ou développeur résidant en Belgique qui veut faire tourner un modèle **sur sa propre machine**, sans envoyer de données à un fournisseur cloud. Ce fichier complète l'[observatoire des 20 écosystèmes](README.md); il ne le remplace pas.

> Avertissement de méthode. Les **empreintes mémoire** sont calculées à partir de la taille des poids et de la quantification, puis recoupées avec les cartes de modèles officielles. Les **vitesses en tokens/s** proviennent de bancs d'essai indépendants et **dépendent fortement du matériel exact, du moteur, du contexte et du réglage**: elles sont indicatives et marquées « à tester ». Ne considérez jamais un modèle comme « compatible » s'il ne tient pas réellement en mémoire avec la quantification **et** le contexte visés. En cas de doute: **à tester**.

## 0. Correction de génération (11 août 2026)

Les éditions précédentes de ce guide s'appuyaient sur **Gemma 3** et **Qwen3**. La vérification de cette passe montre que deux familles plus récentes étaient déjà disponibles et n'avaient pas été retenues. Elles deviennent la recommandation par défaut sur la plupart des paliers.

| Famille | Sortie | Ce qu'elle apporte | Licence | Statut de vérification |
|---|---|---|---|---|
| **Gemma 4** (E2B, E4B, 12B, 26B-A4B MoE, 31B dense) | 2 avril 2026; cinquième taille en juin 2026 | Multimodal natif, contexte jusqu'à **256 k** sur les grandes variantes, **premier Gemma sous Apache 2.0**. E2B: 5,1 B de paramètres totaux mais **2,3 B actifs**, ~2 Go de RAM, 128 k — tourne sur un Raspberry Pi 5. 26B-A4B: 128 experts dont 8 actifs, soit l'empreinte d'un 26 B pour un coût de calcul proche d'un 4 B | Apache 2.0 | Corroboré par plusieurs sources citant la carte modèle officielle; **carte modèle non ouverte directement** (domaine bloqué en sortie) [S127] |
| **Qwen3.6** (dont 27B dense) | 22 avril 2026 pour le 27B | Dense, contexte **256 k**, **~17 Go en Q4_K_M**, outils et raisonnement actifs par défaut. Quantifications GGUF et NVFP4 disponibles | Apache 2.0 | Tag Ollama officiel vérifié; empreinte corroborée [S128–S129] |
| **Shieldstral 1.0 3B** (Mistral) | 4 août 2026 | Garde-fou de modération **texte et image**, politique écrite en langage naturel à l'inférence plutôt qu'une taxonomie figée. Tient sur un GPU de 16 Go, verdict en un seul jeton | Apache 2.0 | Corroboré par sources indépendantes; pages officielles bloquées en sortie [S119–S121] |

**Ce que cela ne veut pas dire.** Gemma 3, Qwen3 et gpt-oss ne sont ni retirés ni dépréciés par leurs éditeurs; ils restent parfaitement utilisables et sont conservés en alternative dans tout ce guide. Le changement porte sur le **choix par défaut**, pas sur la validité des anciens.

**Réserve honnête.** Les empreintes mémoire des modèles Gemma 4 ci-dessous sont **calculées** avec les mêmes règles octets/param que le reste du guide, à partir des tailles annoncées, et non lues sur une carte modèle ouverte directement. Elles sont marquées **à confirmer** tant que le domaine officiel reste inaccessible depuis le poste d'exécution. Appliquez la procédure de validation de la section finale avant de vous engager sur une configuration.

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
| **Raspberry Pi 5 · 4 Go RAM** (CPU ARM) | 0,3–2,5 B actifs | **Gemma 4 E2B** (~2 Go, 2,3 B actifs, 128 k) | Gemma 3 1B (~0,8 Go, plus sûr si la RAM est disputée); Llama 3.2 1B; Qwen3 1.7B (serré) | ≥4B dense (swap constant), tout contexte long |
| **CPU seul · 8 Go RAM** | 1–5 B | **Gemma 4 E4B** (~4,5 B effectifs) | Qwen3 4B; Gemma 3 4B; Phi-4-mini 3.8B | 7–8B (tient à peine, lent), 13B+ |
| **CPU seul · 16 Go RAM** | 7–14 B | **Gemma 4 12B** (~7 Go) | Qwen3 8B; Llama 3.1 8B; gpt-oss-20b (MoE, ~13 Go, serré) | Denses 24B+, contexte 128k |
| **CPU seul · 32 Go RAM** | 14–32 B | **Gemma 4 26B-A4B** (MoE, ~15 Go, 4 B actifs) | Qwen3-30B-A3B; Qwen3.6-27B (~17 Go, dense donc lent en CPU); gpt-oss-20b | Denses 70B (très lent) |
| **CPU seul · 64 Go RAM** | 30–120 B (MoE) | **gpt-oss-120b** (MoE, ~64 Go) | Gemma 4 26B-A4B (bien plus rapide); Llama 3.3 70B dense (lent, ~2–4 tok/s) | 70B dense pour l'interactif |
| **Mini-PC / portable · 16 Go RAM** (iGPU) | 7–12 B | **Gemma 4 12B** | Qwen3 8B; Mistral Nemo 12B | Denses 24B+ |
| **Mini-PC / portable · 32 Go RAM** | 14–30 B | **Gemma 4 26B-A4B** (MoE) | Qwen3-30B-A3B; Qwen3 14B (rapide) | 70B dense |
| **Apple Silicon · 16 Go unifiée** (MLX/Metal) | 8–14 B | **Gemma 4 12B** (MLX 4-bit) | Qwen3 14B; Qwen3 8B | 26B+ (mémoire unifiée partagée avec l'OS) |
| **Apple Silicon · 32 Go unifiée** | 24–32 B | **Qwen3.6-27B** (~17 Go) | Gemma 4 26B-A4B (plus rapide, MoE); Qwen3-Coder-30B; gpt-oss-20b | 70B dense (serré, lent) |
| **GPU · 8 Go VRAM** | 5–8 B (GPU) | **Gemma 4 E4B** ou **Qwen3 8B** | Llama 3.1 8B; DeepSeek-R1-Distill 7B | Denses 14B+ en tout-GPU |
| **GPU · 12 Go VRAM** (ex. RTX 3060) | 12–14 B (GPU) | **Gemma 4 12B** (~7 Go) | Qwen3 14B; Gemma 4 26B-A4B (offload, +RAM) | 27–32B dense en tout-GPU |
| **GPU · 16 Go VRAM** | 14 B dense / 26 B MoE | **Gemma 4 26B-A4B** (~15 Go, serré) | gpt-oss-20b (~13 Go, plus de marge); Qwen3 14B; **Shieldstral 1.0 3B** en garde-fou parallèle | Qwen3.6-27B en tout-GPU (~17 Go, ne tient pas) |
| **GPU · 24 Go VRAM** (ex. RTX 4090) | 27–32 B (GPU) | **Qwen3.6-27B** (~17 Go, 256 k) | Gemma 4 31B (~18 Go); Qwen3-Coder-30B (19 Go); Devstral 24B | 70B en tout-GPU (offload/2-bit seulement) |

**Cas particulier RTX 3060 12 Go + 64 Go RAM** (profil demandé). Tout-GPU confortable jusqu'à **12–14B Q4**: **Gemma 4 12B** (~7 Go de poids) laisse une marge nette pour le cache KV, Qwen3 14B (~8–9 Go) est plus serré. Les 64 Go de RAM permettent l'**offload** de modèles plus gros: **Gemma 4 26B-A4B** et **Qwen3-30B-A3B** tournent correctement malgré l'offload car ce sont des MoE (peu de paramètres actifs par jeton). **Qwen3.6-27B est dense (~17 Go)**: il ne tient pas en 12 Go de VRAM et son offload sera nettement plus lent qu'un MoE de taille comparable — c'est le principal arbitrage de ce profil. Les autres denses 32B fonctionnent par offload mais deviennent lents (~15–20 tok/s selon banc indépendant, à tester) [S108]. Réservez la VRAM au modèle en fermant les applications GPU.

**Garde-fou local.** Sur un GPU de 16 Go ou plus, **Shieldstral 1.0 3B** peut tourner à côté du modèle principal pour filtrer entrées et sorties sans qu'aucun contenu ne quitte la machine — utile précisément dans les cas où l'on a choisi le local pour ne pas envoyer de données à un tiers. Sa politique se rédige en langage naturel, ce qui évite de réentraîner un classifieur. **Testez explicitement le français et le néerlandais**: l'éditeur annonce une performance multilingue inégale [S119–S121].

## 3. Recommandations par catégorie

On sépare les usages pour éviter les comparaisons trompeuses: un modèle de **code** ou de **vision** ne se juge pas comme un **chat** généraliste.

### 3.1 Chat généraliste (dense)

| Modèle (version) | Params | Archi | Quant. conseillée | Taille fichier ~ | RAM/VRAM au chargement ~ | Contexte réaliste | FR / NL | Licence | Moteurs | Source |
|---|---:|---|---|---:|---:|---|---|---|---|---|
| **Gemma 4 E2B** | 5,1 B tot. / 2,3 B actifs | MoE léger (multimodal) | Q4_K_M | ~2 Go | ~2,5–3,5 Go | 128 k annoncé; **8–32 k réaliste** sur 4 Go de RAM | FR bon, NL à tester | **Apache 2.0** | llama.cpp, Ollama, LM Studio, MLX | S127 (à confirmer) |
| **Gemma 4 E4B** | ~4,5 B effectifs | MoE léger (multimodal) | Q4_K_M | ~2,8 Go | ~4–5 Go | 128 k annoncé; 32 k réaliste | FR bon, NL à tester | **Apache 2.0** | llama.cpp, Ollama, MLX | S127 (à confirmer) |
| **Gemma 4 12B** | 12 B | dense (multimodal) | Q4_K_M | ~7 Go | ~9–10 Go | jusqu'à 256 k annoncé | FR très bon, NL à tester | **Apache 2.0** | llama.cpp, Ollama, MLX, vLLM | S127 (à confirmer) |
| **Gemma 4 31B** | 31 B | dense (multimodal) | Q4_K_M | ~18 Go | ~19–21 Go | jusqu'à 256 k annoncé | FR excellent, NL à tester | **Apache 2.0** | llama.cpp, Ollama, MLX, vLLM | S127 (à confirmer) |
| **Qwen3.6-27B** | 27 B | dense | Q4_K_M | **~17 Go (sourcé)** | ~18–20 Go | 256 k | FR excellent, NL bon | **Apache 2.0** | Ollama (`qwen3.6:27b`), llama.cpp, vLLM | S128–S129 |
| Gemma 3 1B | 1 B | dense | Q4_K_M | ~0,8 Go | ~1,5–2 Go | 8–32 k | FR bon, NL correct | Gemma (usage) | llama.cpp, Ollama, LM Studio, MLX | S97 |
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
| **Gemma 4 26B-A4B** | 26 B / ~4 B (128 exp., top-8) | Q4_K_M | ~15 Go | ~16–17 Go | jusqu'à 256 k annoncé | Empreinte d'un 26 B pour un coût de calcul proche d'un 4 B; **serré sur 16 Go de VRAM**, confortable en RAM 32 Go. Apache 2.0 | S127 (à confirmer) |
| gpt-oss-20b | 20,9 B / 3,6 B (32 exp., top-4) | MXFP4 natif | ~12 Go | ~13–14 Go | 128 k | Bon raisonnement; ~10 tok/s CPU 14 Go, plus vite en GPU | S100, S110 |
| Qwen3-30B-A3B | 30 B / 3,3 B | Q4_K_M | ~18 Go | ~19–20 Go | 256 k | Excellent rapport vitesse/qualité en offload | S96 |
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
| Gemma 3 4B (vision) | 4 B | Q4_K_M | ~4–5 Go | GPU 8 Go / Mac 16 Go | Texte+image intégrés | S97 |
| Qwen2.5-VL 7B | 7 B | Q4_K_M | ~6–7 Go | GPU 8–12 Go | Vision documentaire solide | S96 |
| Gemma 3 12B / 27B (vision) | 12 / 27 B | Q4_K_M | ~9 / ~17 Go | GPU 12–24 Go | Vision + FR/NL forts | S97 |

### 3.6 Embeddings (RAG local)

| Modèle | Params | Dim. | Mémoire ~ | Atouts | Source |
|---|---:|---:|---:|---|---|
| nomic-embed-text-v2 | ~0,5 B | 768 | <1 Go | Rapide, démarrage à froid court, documents longs | S106 |
| EmbeddingGemma (300M) | 0,3 B | configurable | <1 Go | Léger, multilingue, on-device | S107 |
| bge-m3 | ~0,6 B | 1024 | ~1–2 Go | Multilingue, dense + sparse + ColBERT (hybride) | S105 |
| Qwen3-Embedding 0.6B / 4B / 8B | 0,6–8 B | flexible (MRL) | ~1 à ~7 Go | Qualité de récupération au sommet; 32 k contexte | S104 |

Pour un RAG **FR/NL**, privilégier **bge-m3** (hybride multilingue) ou **Qwen3-Embedding** (qualité, dimensions flexibles). nomic/EmbeddingGemma pour l'empreinte minimale sur petit matériel.

### 3.7 Garde-fous et modération en local

Nouveauté de ce contrôle. Jusqu'ici, filtrer les entrées et sorties d'un modèle local imposait soit d'appeler une API de modération tierce — ce qui annule l'intérêt du local — soit d'auto-héberger un modèle de garde de 8 à 12 B.

| Modèle | Params | Modalités | Quant. | Mémoire ~ | Comment il s'utilise | Licence | Source |
|---|---:|---|---|---:|---|---|---|
| **Shieldstral 1.0 3B** | 3 B | texte **et** image | Q4_K_M / FP16 | ~2 Go (Q4) à ~6 Go (FP16); l'éditeur annonce **un seul GPU de 16 Go** pour l'exécution de référence | Trois blocs: `<Instruct>` (contexte d'évaluation, niveau de sévérité, définition du contenu interdit), `<Query>` (une question fermée, ex. « ce contenu promeut-il la violence physique ? »), `<Document>` (le contenu à juger: invite, réponse, paire, ou image). Verdict rendu en **un seul jeton**, donc assez peu coûteux pour tourner sur chaque requête | **Apache 2.0** | S119–S121 |

**Ce que cela change.** La politique de modération s'écrit **en langage naturel au moment de l'inférence** au lieu d'être figée dans une taxonomie apprise: on peut ajuster la sévérité ou ajouter une catégorie sans réentraîner. L'éditeur annonce des résultats au niveau de modèles de garde jusqu'à sept fois plus gros.

**Limite à ne pas ignorer pour un usage belge.** Le rapport technique de l'éditeur signale une **performance multilingue inégale**, en retrait sur certaines langues, et présente l'élargissement linguistique comme un chantier ouvert. Le français et le néerlandais ne sont pas documentés comme validés: **construisez un petit jeu de test FR et NL avec vos propres cas limites avant de vous appuyer dessus** [S121].

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
   ollama run qwen3:8b
   ```
   (Remplacez par le tag exact voulu; vérifiez la quantification par défaut du tag.)
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
- **Licences.** Apache 2.0 (Qwen, Devstral) et MIT sont permissives; **Gemma** et **Llama Community** imposent des conditions d'usage à lire avant un déploiement pro.
- **RGPD / AI Act.** Le traitement local reste soumis au RGPD si des données personnelles sont concernées; documentez finalité, base juridique et rétention. Analyse informative, pas avis juridique (voir [synthese.md](synthese.md)).

## 9. Limites de ce guide

- Les **vitesses** citées viennent de bancs indépendants sur du matériel proche mais non identique au vôtre: **à tester**.
- Les tailles de fichiers varient selon le fournisseur de quantification (Unsloth, bartowski, officiel); vérifiez la carte du fichier GGUF exact.
- Le **cache KV** dépend de l'implémentation (KV quantifié, flash attention); les marges données sont prudentes.
- Le paysage local évolue vite; ce fichier reflète l'état au **11 août 2026** et sera revu à chaque exécution.
- **Spécifique à cette passe:** les empreintes des modèles **Gemma 4** sont **calculées** à partir des tailles annoncées et des règles octets/param de la section 1, et non lues sur une carte modèle ouverte directement — le domaine officiel était bloqué en sortie depuis le poste d'exécution. Elles portent la mention « à confirmer ». L'empreinte de **Qwen3.6-27B (~17 Go)** est en revanche sourcée. La qualité en **néerlandais** de Gemma 4 et de Shieldstral n'est documentée par aucune source consultée: elle est marquée « à tester » partout et ne doit pas être supposée.

## Sources

Registre complet et dates: [sources.md](sources.md). Les empreintes mémoire s'appuient en priorité sur les cartes de modèles et documentations officielles (S94–S107, S127–S129); les vitesses et classements proviennent de bancs indépendants clairement identifiés (S108–S110) et sont marqués « à tester ». Le garde-fou Shieldstral est documenté par S119–S121.
