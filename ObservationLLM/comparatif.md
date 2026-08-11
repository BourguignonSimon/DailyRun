# Comparatif structuré — édition Belgique

Contrôle: **11 août 2026, deuxième passe** (socle fournisseurs vérifié au 6 août 2026; deux passes de vérification le 11 août). Nouveautés de cette passe: **fin du tarif d’introduction Claude Sonnet 5 le 31 août**, **Qwen3.8-Max** (3 août) remplace Qwen 3.7, **Shieldstral 1.0** (Mistral, 4 août), arrêt des **modèles d’image Imagen 4 / Gemini 3 Image le 17 août**, et facturation **Copilot AI Credits** avec fin des crédits promotionnels fin août — voir [Prix API](#prix-api) et [Échéances datées](#échéances-datées). Ce fichier remplace le classeur Excel demandé initialement: le dépôt a explicitement migré vers Markdown le 16 juillet 2026. Les « feuilles » sont les sections ci-dessous. Les références Sxx renvoient à [sources.md](sources.md).

Conversion utilisée dans tout ce fichier: **1 EUR = 1,1535 USD**, taux de référence BCE du **7 août 2026** [S79]. TVA belge standard **21 %**, traitée hors prix sauf mention.

- [Échéances datées](#échéances-datées)
- [Vue d’ensemble](#vue-densemble)
- [Prix particuliers](#prix-particuliers)
- [Prix API](#prix-api)
- [Capacités](#capacités)
- [Sécurité-RGPD](#sécurité-rgpd)
- [Développement](#développement)
- [Exécution locale](#exécution-locale)
- [Méthodologie](#méthodologie)
- [Sources](#sources)

## Échéances datées

Feuille de suivi des dates fermes vérifiées à ce contrôle. Elles ont un effet direct sur un budget ou sur du code en production; les autres lignes du fichier décrivent un état, celles-ci décrivent une **date butoir**.

| Date | Acteur | Ce qui change | Effet concret | Source |
|---|---|---|---|---|
| 17 août 2026 | Google | Arrêt d’Imagen 4 et des modèles d’image Gemini 3 (`imagen-4.0-generate-001`, `-ultra-`, `-fast-`) | Les appels `generate_images()` échouent en **erreur dure**, sans période d’avertissement; la forme de l’API change, un simple changement de nom de modèle ne suffit pas. Cible de migration: `gemini-3.1-flash-image` | S114 |
| 31 août 2026 | Anthropic | Fin du tarif d’introduction Claude Sonnet 5 | 2/10 → **3/15 USD/M** (+50 %); batch 1/5 → 1,50/7,50; cache lu 0,20 → 0,30. À budgéter avant le 1er septembre | S07, S115 |
| 31 août 2026 | Google | Arrêt de `gemini-robotics-er-1.6-preview` | Retrait d’un modèle preview | S114 |
| Fin août 2026 | GitHub | Fin des crédits promotionnels Copilot Business (+30 USD/utilisateur/mois) et Enterprise (+70 USD) | Le coût réel par siège remonte vers le crédit de base (19 USD Business, 39 USD Enterprise) sauf achat de crédits supplémentaires | S124 |
| 16 octobre 2026 | Google | Arrêt de Gemini 2.5 Pro, Flash et Flash-Lite | Migrer vers la famille 3.x | S114 |
| 2 décembre 2026 | Union européenne | Fin du délai de grâce de 4 mois sur le marquage technique de l’article 50(2) pour les systèmes mis sur le marché avant le 2 août 2026 | Les solutions de marquage des contenus synthétiques doivent être en place; les autres obligations de l’article 50 s’appliquent déjà | S92–S93, S125 |
| 2 août 2027 | Union européenne | Mise en conformité des modèles GPAI mis sur le marché avant le 2 août 2025 | Échéance de rattrapage pour les modèles antérieurs | S126 |
| 2 décembre 2027 / 2 août 2028 | Union européenne | Obligations « haut risque » reportées par le Digital Omnibus (Annexe III / Annexe I) | Décale, sans supprimer, la charge de conformité haut risque | S125 |

## Vue d’ensemble

| # | Entreprise / écosystème | Catégorie dominante | Offre phare vérifiée | Pertinence Belgique | Force principale | Limite principale | Sources |
|---:|---|---|---|---|---|---|---|
| 1 | OpenAI | Modèles + app + API + agent code | GPT-5.6 Sol/Terra/Luna, ChatGPT, Codex | Élevée | Écosystème complet et outils | Coût frontière et verrouillage | S03–S05, S61–S62 |
| 2 | Anthropic | Modèles + app + API + agent code | Opus 5, Fable 5, Sonnet 5, Claude Code; Mythos 5 en accès limité | Élevée | Raisonnement, code, 1 M de contexte inclus au tarif standard | Prix Fable; hausse Sonnet 5 au 1er septembre | S06–S08, S63–S64, S85, S115–S118 |
| 3 | Google | Modèles + app + API + cloud | Gemini 3.6 Flash, Gemini API | Élevée | Multimodal, 1 M, recherche | Complexité des surfaces et tarifs | S09–S11, S65, S86, S114 |
| 4 | Microsoft | Cloud + productivité + agents | Azure OpenAI, M365 Copilot, Copilot Studio | Très élevée | Intégration M365/Azure, identité | Licences et coûts imbriqués | S12–S14 |
| 5 | AWS | Plateforme multi-modèles + agents | Bedrock, AgentCore; Agents Classic en maintenance | Très élevée | Choix de modèles et régions | Migration Agents Classic/registry | S15–S17, S88–S89 |
| 6 | Meta | Open weight + app | Llama 4, Meta AI | Moyenne | Poids et écosystème open | Licence et disponibilité produit UE à vérifier | S18 |
| 7 | Mistral | Modèles UE + app + API | Medium 3.5, Large, Vibe; Shieldstral 1.0 (garde-fou 3B, Apache 2.0) | Très élevée | Acteur européen, open weight, garde-fou auto-hébergeable | Catalogue et licences variables | S19–S21, S119–S121 |
| 8 | xAI | Modèles + app + API | Grok 4.5 | Élevée | Contexte, temps réel, outils | Gouvernance et rétention à valider | S22–S24 |
| 9 | DeepSeek | Modèles + app + API + poids | DeepSeek V4 Pro/Flash | Moyenne | Rapport coût/capacité, 1 M | Région, données, disponibilité belge | S66–S67 |
| 10 | Alibaba/Qwen | Modèles + cloud + poids | **Qwen3.8-Max** (3 août), Qwen3.6 open weights, Model Studio | Moyenne | Catalogue large, code, prix frontière agressif | Facturation/région et support UE | S27–S28, S122–S123, S128 |
| 11 | NVIDIA | Modèles + déploiement + agents | Nemotron 3, NIM, NeMo | Élevée en entreprise | Exploitation, optimisation, garde-fous | Coût infra et complexité | S29–S31 |
| 12 | Cohere | Modèles entreprise + RAG | Command A+ / North | Élevée en entreprise | RAG, multilingue, privé | Peu d’offre grand public | S32–S34 |
| 13 | IBM | Plateforme + gouvernance + modèles | watsonx.ai, Granite, governance | Élevée en entreprise | Gouvernance et hybride | Coût plateforme; écosystème plus restreint | S35–S36 |
| 14 | GitHub Copilot | Assistant et agents de code | Copilot Pro/Pro+/Max; GPT-5.6/Opus 5 | Très élevée | IDE + GitHub + choix de modèles | Crédits variables; GitHub Models retiré | S37–S38, S73–S74 |
| 15 | Perplexity | Recherche + API | Perplexity, Sonar, Agent API | Élevée | Recherche sourcée | Pas une plateforme générale complète | S39–S40 |
| 16 | Anysphere/Cursor | Éditeur et agents de code | Cursor, Cursor Router | Très élevée pour développeurs | UX agentique et routage multi-modèles | Dépendance aux modèles tiers et crédits | S41–S43, S75 |
| 17 | Replit | Création/déploiement agentique | Replit Agent | Élevée pour prototypes | De l’idée au déploiement | Coût par crédits, contrôle infra | S44 |
| 18 | Hugging Face | Hub + inference open | Hub, Providers, Endpoints | Très élevée pour open source | Portabilité et catalogue | Incident juillet; sécurité supply chain | S45–S47, S76–S77 |
| 19 | Moonshot/Kimi | Modèles + app + agent code | Kimi K3/K2.7, Kimi Code | Moyenne | Open weight, 1 M, code, agents | Offre belge et DPA à confirmer | S48–S51, S70–S72 |
| 20 | Z.AI/GLM | Modèles + API + agent code | GLM-5.2, Coding Plan | Moyenne | Code agentique et prix | Français/NL, région UE et DPA à confirmer | S52–S54 |

## Prix particuliers

Prix catalogue observés. Conversion: USD ÷ **1,1535** (BCE, 7 août 2026). La colonne TVA est prudente: « checkout » signifie que l’inclusion doit être confirmée sur la facture belge.

| Offre | Prix origine | Estimation EUR HT | Estimation EUR avec 21 % si non incluse | TVA / remarque | Source |
|---|---:|---:|---:|---|---|
| ChatGPT Plus (zone euro, App Store) | **22,99 EUR/mois** | 19,00 € | — | Prix EUR observé au 4 août 2026 pour DE/FR/ES/IT; **TVA déjà incluse** dans un prix consommateur App Store. Le checkout belge reste la référence | S04 |
| ChatGPT Go | 8 USD/mois | 6,94 € | 8,39 € | Palier mondial depuis janvier 2026; disponibilité et prix belges à confirmer | S04 |
| GitHub Copilot Pro | 10 USD/mois | 8,67 € | 10,49 € | Checkout; 10 USD de crédits de base + 5 USD flex = 15 USD | S37, S124 |
| GitHub Copilot Pro+ | 39 USD/mois | 33,81 € | 40,91 € | Checkout; 39 USD de base + 31 USD flex = 70 USD | S37, S124 |
| GitHub Copilot Max | 100 USD/mois | 86,69 € | 104,90 € | Checkout; 100 USD de base + 100 USD flex = 200 USD | S37, S124 |
| GitHub Copilot Business | 19 USD/siège/mois | 16,47 € | 19,93 € | 19 USD de crédits inclus; **+30 USD promotionnels par siège jusqu’à fin août 2026** | S37, S124 |
| GitHub Copilot Enterprise | 39 USD/siège/mois | 33,81 € | 40,91 € | 39 USD de crédits inclus; **+70 USD promotionnels par siège jusqu’à fin août 2026** | S37, S124 |
| Cursor Pro | 20 USD/mois | 17,34 € | 20,98 € | Crédits égaux au prix du plan; dépassement facturé en arriérés | S41 |
| Cursor Pro+ / Ultra | 60 / 200 USD/mois | 52,02 € / 173,39 € | 62,94 € / 209,80 € | Paliers d’usage supérieurs pour agents continus | S41 |
| Cursor Teams | 40 USD/siège/mois | 34,68 € | 41,96 € | Deux pools depuis juin 2026: Composer/Auto (modèles Cursor) et API tierce; siège Premium ×5 usage pour ×3 prix | S41, S75 |
| Replit Core annuel | 20 USD/mois équivalent | 17,34 € | 20,98 € | 25 USD de crédits mensuels | S44 |
| Replit Pro annuel | 95 USD/mois équivalent | 82,36 € | 99,65 € | 100 USD de crédits | S44 |
| Z.AI Coding Lite annuel | 12,60 USD/mois | 10,92 € | 13,22 € | Promotion; checkout | S54 |
| Z.AI Coding Pro annuel | 50,40 USD/mois | 43,69 € | 52,87 € | Promotion; checkout | S54 |
| Microsoft 365 Copilot Business annuel | 15,60 EUR/utilisateur/mois | 15,60 € | 18,88 € | Page indique prix hors TVA; plan M365 requis | S12 |
| Mistral Vibe Pro | 14,99 USD/mois | 12,99 € | 15,72 € | Prix catalogue hors taxes; checkout belge à confirmer | S19 |
| Claude, Gemini, Grok, Perplexity | Voir checkout belge | ND | ND | Les pages dynamiques n’ont pas fourni un prix EUR/TVA stable lors du contrôle | S23, S39 |

**Piège de lecture.** Un prix EUR affiché à un consommateur (App Store, abonnement grand public) est généralement **TTC**; un prix USD catalogue ou B2B est généralement **HT**. Comparer 22,99 € TTC à 20 USD HT sans retraitement fausse l’écart d’environ 21 %. Pour ChatGPT Plus: 22,99 € TTC ≈ **19,00 € HT** à 21 %, soit ≈ 21,92 USD — au-dessus du prix catalogue américain de 20 USD.

## Prix API

Prix par **1 million de jetons** sauf mention. HT et hors outils. Les prix EUR sont des estimations arrondies au taux BCE du 7 août 2026. « Modèle dépendant » évite de comparer un agrégateur/cloud à un modèle unique.

| Acteur / modèle représentatif | Contexte | Entrée origine | Cache origine | Sortie origine | Entrée EUR | Sortie EUR | Batch / classe | Outils / remarques | Source |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| OpenAI GPT-5.6 Sol | 1,05 M | 5 USD | lecture 0,50 USD; écriture 6,25 USD | 30 USD | 4,33 € | 26,01 € | Batch à vérifier par endpoint | Terra 2/12 (≈1,73/10,40 €), Luna 0,20/1,20 (≈0,17/1,04 €) depuis le 30/07; **surtaxe long contexte**: Sol 10/45, Terra 4/18, Luna 0,40/1,80; Fast Mode Sol remplace Priority (×2,5 vitesse, ×2 prix) | S61–S62, S112 |
| Anthropic Claude Opus 5, API directe | 1 M | 5 USD | lecture 0,50 USD; écriture 5 min 6,25 USD, 1 h 10 USD | 25 USD | 4,33 € | 21,67 € | Batch −50 % (2,50/12,50) | **1 M inclus au tarif standard, sans surtaxe long contexte**; Fast mode 10/50; `inference_geo:"us"` ×1,1 | S07, S63, S117–S118 |
| Anthropic Claude Sonnet 5 — **jusqu’au 31/08/2026** | 1 M | 2 USD | lecture 0,20 USD | 10 USD | 1,73 € | 8,67 € | Batch 1/5 | Tarif d’introduction | S07, S115 |
| Anthropic Claude Sonnet 5 — **à partir du 01/09/2026** | 1 M | 3 USD | lecture 0,30 USD | 15 USD | 2,60 € | 13,01 € | Batch 1,50/7,50 | **+50 % sur entrée et sortie**; à budgéter dès maintenant | S07, S115 |
| Anthropic Claude Fable 5 / Mythos 5 | 1 M | 10 USD | lecture 1 USD | 50 USD | 8,67 € | 43,35 € | Batch 5/25 | Mythos 5 = même socle que Fable 5, garde-fous cyber/bio levés, **accès sur invitation (Project Glasswing), pas d’inscription libre** | S07, S64, S116 |
| Anthropic Claude Haiku 4.5 | 200 k | 1 USD | lecture 0,10 USD | 5 USD | 0,87 € | 4,33 € | Batch 0,50/2,50 | Palier volume | S07 |
| Google Gemini 3.6 Flash | 1 M | 1,50 USD | Voir grille dynamique | 7,50 USD | 1,30 € | 6,50 € | Batch/Flex/Priority publiés séparément | 64 k sortie; Search/Maps/outils selon grille; Gemini 2.5 arrêté le 16/10/2026; modèles d’image Imagen 4 arrêtés le 17/08/2026 | S65, S114 |
| Google Gemini 3.1 Pro | ≥1 M | 2 USD (≤200 k) | Voir grille dynamique | 12 USD (≤200 k) | 1,73 € | 10,40 € | Batch/Flex/Priority | **Surtaxe au-delà de 200 k: 4/18 USD** | S65 |
| Mistral Large | À confirmer par version | 2 USD | ND | 6 USD | 1,73 € | 5,20 € | Batch −50 % | OCR, audio et autres outils séparés; Shieldstral 1.0 auto-hébergeable pour la modération | S19, S119 |
| xAI Grok 4.5 court | 500 k | 2 USD | 0,30 USD | 6 USD | 1,73 € | 5,20 € | Pas de remise batch publiée pour 4.5 | Long contexte ≥200 k: 4/0,60/12 USD | S22, S68 |
| xAI Grok 4.3 / 4.1 Fast | 4.1 Fast: 2 M | 1,25 / 0,20 USD | ≈0,20 USD | 2,50 / 0,50 USD | 1,08 / 0,17 € | 2,17 / 0,43 € | ND | Paliers volume; **outils serveur (Web Search, X Search, Code Execution) à 5 USD/1000 appels**; `grok-voice-latest` → 2.0 le 05/08/2026 à 0,08 USD/minute audio | S22 |
| DeepSeek V4 Pro | 1 M | 0,435 USD miss | 0,003625 USD hit | 0,87 USD | 0,38 € | 0,75 € | Non publié | V4 Flash: 0,14/0,0028/0,28; sortie max 384 k | S66–S67 |
| **Alibaba Qwen3.8-Max** (3 août 2026) | 1 M | 2 USD | 0,25 USD | 6 USD | 1,73 € | 5,20 € | Batch −50 % si supporté | Remplace Qwen 3.7 Max (2,50/7,50) comme phare: MoE 2,4 T paramètres, ~95 B actifs; poids ouverts annoncés. **Corroboré par sources indépendantes**, page officielle non ouverte pendant ce run | S122–S123 |
| Cohere Command A | 256 k | 2,50 USD | ND | 10 USD | 2,17 € | 8,67 € | ND | Essai 1 000 appels/mois; prod 500 RPM | S32–S34 |
| IBM Granite 4 h small | Selon modèle | 0,0636 USD | ND | 0,265 USD | 0,06 € | 0,23 € | ND | Prix indicatifs, taxes exclues | S35 |
| Z.AI GLM-5.1 | 200 k | 1,40 USD | 0,26 USD | 4,40 USD | 1,21 € | 3,81 € | ND | Web search 0,01 USD/usage; tarif GLM-5.2 à confirmer | S52–S53, S81 |
| AWS Bedrock | Modèle dépendant | Modèle/région | Modèle/région | Modèle/région | — | — | Batch souvent -50 %; Flex/Priority/Reserved | RAG, guardrails, agents et calcul peuvent s’ajouter | S15–S17 |
| Microsoft Azure OpenAI | Modèle/région/déploiement | Modèle | Modèle | Modèle | — | — | Standard/provisionné | Vérifier région et devise dans calculateur | S13 |
| Meta Llama | Auto-hébergé ou provider | Coût infra/provider | — | Coût infra/provider | — | — | Selon hôte | Poids soumis à licence | S18 |
| NVIDIA Nemotron/NIM | Auto-hébergé/licence/cloud | Coût infra/licence | — | Coût infra/licence | — | — | Selon déploiement | NIM, NeMo, GPU et support | S29–S31 |
| GitHub Copilot / Cursor / Replit | Abonnement/crédits | Non comparable par jeton | — | — | — | — | Crédits/usage | Mesurer coût par tâche | S37–S44 |
| Perplexity Sonar/Agent API | Modèle et recherche | Voir grille dynamique | Selon modèle | Voir grille | — | — | Provider/modèle | Frais de recherche possibles | S39–S40 |
| Hugging Face Providers | Provider choisi | Sans majoration HF annoncée | Provider | Provider | — | — | PAYG | Routage ou clé propre; Endpoint à l’heure | S45–S47 |
| Moonshot Kimi K3 | 1 M | 3 USD miss | 0,30 USD hit | 15 USD | 2,60 € | 13,01 € | Batch documenté séparément | Taxes exclues; web search signalée en mise à jour | S70–S72 |

### Frais hors jetons publiés

Le prix par jeton ne suffit plus à estimer une facture d’agent. Ces frais sont facturés **en plus** des jetons.

| Acteur | Poste | Tarif publié | Source |
|---|---|---:|---|
| Anthropic | Recherche web (outil serveur) | 10 USD / 1 000 recherches | S07 |
| Anthropic | Web fetch | Aucun frais au-delà des jetons | S07 |
| Anthropic | Exécution de code | 1 550 heures gratuites/mois par organisation, puis 0,05 USD/heure/conteneur; **gratuit** si combiné à web search ou web fetch | S07 |
| Anthropic | Claude Managed Agents — durée de session | 0,08 USD par heure-session (statut `running` uniquement), en plus des jetons; batch non applicable | S07, S117 |
| Anthropic | Résidence des données | ×1,1 sur tous les postes si `inference_geo: "us"`; routage global par défaut au tarif standard | S07, S118 |
| Anthropic | Facturation via AWS Marketplace / Microsoft Foundry | Claude Consumption Units à 0,01 USD/CCU (100 CCU = 1 USD), métrage horaire, hors taxes | S07 |
| xAI | Web Search, X Search, Code Execution | 5 USD / 1 000 appels | S22 |
| xAI | Voix (`grok-voice-think-fast-2.0`) | 0,08 USD/minute audio (4,80 USD/heure) | S22 |
| Z.AI | Recherche web | 0,01 USD par usage | S52 |
| Google | Search / Maps / outils natifs | Grille dynamique par outil | S65 |

### Trois pièges de comparaison à ce contrôle

1. **Tokenizer Anthropic.** Claude 4.7 et versions ultérieures (dont Opus 5, Fable 5, Mythos 5) utilisent un tokenizer plus récent qui produit **environ 30 % de jetons en plus pour le même texte** que Sonnet 4.6 et antérieurs. Comparer 5 USD/M chez Anthropic à 5 USD/M chez un concurrent **sous-estime le coût réel d’Anthropic**: la comparaison honnête se fait en coût par tâche mesurée, pas en prix affiché par million [S07].
2. **Long contexte.** OpenAI et Google surtaxent au-delà d’un seuil (GPT-5.6 Sol passe de 5/30 à 10/45; Gemini 3.1 Pro de 2/12 à 4/18 au-delà de 200 k). Anthropic inclut le million de jetons au tarif standard sur les modèles 4.6+. Pour une charge à contexte long, l’écart de facture peut s’inverser par rapport au prix d’entrée de gamme [S07, S61–S62, S65].
3. **Coût d’un siège d’assistant de code.** Copilot et Cursor facturent un abonnement **plus** des crédits consommés au tarif jeton du modèle routé. Chez Copilot, les complétions inline et next-edit ne consomment aucun crédit; seuls chat, mode agent, revue de code et CLI en consomment. Le coût réel dépend donc du mix d’usage, pas du prix affiché [S37, S41, S124].

## Capacités

Légende: **Oui** publié; **Partiel** dépend du modèle/produit; **ND** non publié assez précisément. La « mémoire » concerne l’application ou l’agent, pas le modèle brut.

| Acteur | Modalités | Outils / structuré | Web | Mémoire/RAG | Agents/orchestration | SDK | Open weight / privé | Contexte phare |
|---|---|---|---|---|---|---|---|---:|
| OpenAI | texte, image; autres modèles audio/vidéo | Oui | Oui | File search; raisonnement persisté | Agents SDK, multi-agent bêta, Codex | Python, JS, .NET, Go | gpt-oss; API managée | 1,05 M |
| Anthropic | texte, image | Oui | Web search 10 USD/1000; web fetch inclus | Context/caching 5 min ou 1 h; RAG externe | Claude Code, SDK agents, **Managed Agents** (0,08 USD/h-session) | Python, TS, Java… | API/cloud; pas poids phare | 1 M **sans surtaxe** |
| Google | texte, image, audio, vidéo selon modèle | Oui | Search/Maps | File search/cache | Managed agents, ADK | Python, JS, Go, Java | Gemma séparé | 1 M |
| Microsoft | Selon modèle | Oui | Bing/Copilot | Azure AI Search, Graph | Copilot Studio, Foundry | SDK Azure | Région/VNet; modèles tiers | Modèle |
| AWS | Selon catalogue | Oui | Via outils | Knowledge Bases, mémoire | AgentCore; Agents Classic en maintenance | SDK AWS | Modèles tiers/custom import | Modèle |
| Meta | Texte + vision selon Llama | Function calling selon stack | Externe | À construire | Frameworks tiers | Écosystème | Oui, sous licence | Modèle |
| Mistral | Texte, vision, audio, OCR | Oui | App/outils | RAG/agents Studio | Work/Vibe/agents | Python, JS | Plusieurs poids; **Shieldstral 1.0 3B Apache 2.0** (garde-fou texte+image auto-hébergeable) | Modèle |
| xAI | Texte/image; média via Imagine | Oui | Oui | Files/collections | Grok multi-agent | SDK/API compatible | Non pour phare | 500 k–1 M |
| DeepSeek | Texte | Oui | App/outils intégrés selon surface | Cache; RAG externe | Intégrations agents | API OpenAI/Anthropic | Oui, V4 | 1 M |
| Qwen | Texte, vision, audio selon modèle | Oui | Outils cloud | Cache/RAG cloud | Coding plan/agents; Qwen3.8-Max visé sur les tâches longues | SDK/API | Oui selon modèle (Qwen3.6 Apache 2.0) | 1 M (Qwen3.8-Max) |
| NVIDIA | Texte/vision selon Nemotron | Oui | Externe | NeMo Retriever | NeMo Agent Toolkit | Python | Oui/privé selon licence | Modèle |
| Cohere | Texte/image selon Command | Oui | Externe | RAG, citations, rerank | North/agents | SDK | Déploiement privé | 256 k |
| IBM | Texte/vision selon catalogue | Oui | Externe | RAG | Agent Lab | SDK IBM | Granite et on-prem | Modèle |
| GitHub | Modèles multiples | Outils repo/CLI | Recherche code/web selon surface | Index dépôt/Spaces | Coding/cloud agents | Extensions/CLI | Non | Modèle choisi |
| Perplexity | Texte, fichiers selon app | API recherche | Cœur du produit | Collections | Agent API | SDK/API | Sonar managé | Modèle |
| Cursor | Modèles multiples | Terminal/MCP | Agent | Index dépôt, rules | Agents et SDK | Éditeur/CLI | Non | Modèle choisi |
| Replit | Modèles multiples | Shell, DB, déploiement | Agent | Projet | Replit Agent | Plateforme | Non | Produit |
| Hugging Face | Selon modèle | Selon provider | Externe | Hub/Endpoints | Frameworks tiers | Python/JS | Oui, cœur du Hub | Modèle |
| Kimi | Texte/vision/vidéo | Oui, JSON Schema | App/agent; recherche web API en mise à jour | Cache/long contexte | Kimi Code + Agent Swarm | SDK/CLI | Oui | 1 M |
| Z.AI | Texte/vision/audio/vidéo | Oui; web payant | Oui | À construire | GLM Code/Coding Plan | Python/Java/OpenAI | Plusieurs GLM | 1 M (GLM-5.2) |

## Sécurité-RGPD

| Acteur/surface | Entraînement des données | Rétention / chiffrement | DPA / région | Appréciation Belgique |
|---|---|---|---|---|
| OpenAI API | Non par défaut, opt-in | Rétention selon endpoint; chiffrement publié | DPA et résidence EEE pour services éligibles | Bon si endpoint/région vérifiés; app grand public séparée |
| Anthropic API/Cloud | Contrat et surface à vérifier | Cache 5 min ou 1 h documenté; rétention par offre | DPA/résidence avec options et clouds. **Le routage est global par défaut**; `inference_geo: "us"` force les États-Unis avec une surtaxe de ×1,1 (modèles 4.6+). Pas d’option « UE seulement » publiée en première partie: la résidence UE passe par Bedrock ou Vertex avec endpoints régionaux (+10 %) | Solide entreprise; pour un besoin de résidence UE, passer par un cloud partenaire et budgéter la prime régionale |
| Google Gemini API payant | Données payantes non utilisées pour améliorer produits selon grille | Contrôles Cloud selon surface | EEE disponible; Vertex ajoute gouvernance | Bien adapté UE via projet payant/cloud |
| Microsoft/Azure | Données entreprise non utilisées pour entraîner modèles de base selon service | Chiffrement, réseau, politiques Azure | DPA Microsoft, régions UE | Très solide si architecture Azure maîtrisée |
| AWS Bedrock | Isolation service publiée; vérifier chaque provider | KMS/VPC/logs configurables | DPA AWS, régions UE | Solide, responsabilité de configuration élevée |
| Mistral | Opt-out indiqué selon offre | À vérifier par plan | Acteur UE, déploiements privés | Avantage juridiction/région, pas conformité automatique |
| GitHub Copilot | Individuel: opt-out; Business/Enterprise: pas d’entraînement | IDE B/E prompts non retenus; autres surfaces jusqu’à 28 jours | DPA, contrôles organisation | Bon avec plan entreprise et politiques |
| Cursor Privacy Mode | Pas d’entraînement | ZDR providers; chiffrement; exceptions abus | Contrôles équipe, certifications annoncées | Activer et imposer Privacy Mode |
| Hugging Face Endpoints | Payloads non stockés annoncés | Logs 30 jours; TLS; incident juillet 2026 | DPA Enterprise; eu-west-1 disponible | Rotation des jetons et revue d’activité recommandées [S76–S77] |
| DeepSeek/Qwen/Kimi/GLM grand public/API | Informations UE insuffisantes dans les sources accessibles | À confirmer | DPA/région UE non confirmés | Ne pas envoyer de données personnelles/confidentielles avant validation |
| Meta/xAI/Perplexity/Replit/NVIDIA/Cohere/IBM | Dépend du produit et contrat | Dépend de la surface | Contrôles entreprise variables | Exiger DPA, région, sous-traitants et rétention écrits |

## Développement

| Écosystème | Intégration | Versioning/stabilité | Évaluations/observabilité | Coût/verrouillage | Maturité agents code |
|---|---|---|---|---|---|
| OpenAI | Excellente | Snapshots; API v1 | Evals, traces agents | Moyen/élevé; propriétaire | Très élevée |
| Anthropic | Excellente | IDs datés et dépréciations | Outils d’éval + intégrations | Élevé sur Opus | Très élevée |
| Google | Excellente | Previews à surveiller | Vertex/AI Studio | Faible à moyen; cloud | Élevée |
| Azure/AWS | Excellente mais complexe | Gouverné par modèle/région | Cloud-native | Verrouillage cloud | Très élevée |
| Mistral | Bonne | Versions datées | Studio/observabilité à évaluer | Modéré; poids disponibles | Élevée |
| GitHub/Cursor | UX excellente | Produit évolue vite | Analytics selon plan | Crédits et dépendances modèles | Très élevée |
| Replit | Très rapide | Plateforme intégrée | Usage/crédits | Verrouillage fort | Élevée pour greenfield |
| HF/NVIDIA | Flexible | À gérer | Outils d’évaluation et déploiement | Infra/compétences | Élevée comme plateforme |
| DeepSeek/Qwen/Kimi/GLM | API compatibles, poids | Changements rapides | À construire | Prix bas, risque opérationnel | Élevée mais support UE variable |
| Cohere/IBM | Entreprise | Contrats et versions | Gouvernance forte | Contrat/plateforme | Bonne, plutôt entreprise |

## Exécution locale

Résumé par palier matériel pour exécuter un LLM **sur sa propre machine** (Q4_K_M, contexte modéré). Détail, catégories (chat, MoE, raisonnement, code, vision, embeddings), modèles à éviter et procédure de validation: [modeles-locaux-par-hardware.md](modeles-locaux-par-hardware.md).

**Correction de génération à ce contrôle.** Les éditions précédentes recommandaient Gemma 3 et Qwen3. Deux familles plus récentes, sorties au printemps 2026 et disponibles sous **Apache 2.0**, les remplacent sur la plupart des paliers: **Gemma 4** (2 avril 2026; E2B, E4B, 12B, 26B-A4B MoE, 31B; multimodal; jusqu’à 256 k) et **Qwen3.6** (dont le 27B dense du 22 avril 2026, ~17 Go en Q4_K_M, 256 k) [S127–S129]. Les modèles de génération précédente restent valides et sont conservés en alternative; ils ne sont ni retirés ni dépréciés par leurs éditeurs.

| Configuration | Palier réaliste | Modèle principal conseillé | Alternative | Source |
|---|---|---|---|---|
| Raspberry Pi 5 · 4 Go RAM | 0,3–2,5 B | Gemma 4 E2B (~2 Go, 128 k) | Gemma 3 1B; Llama 3.2 1B | S127, S109 |
| CPU seul · 8 Go RAM | 1–5 B | Gemma 4 E4B | Qwen3 4B; Phi-4-mini | S127, S96 |
| CPU seul · 16 Go RAM | 7–14 B | Gemma 4 12B | Qwen3 8B; Llama 3.1 8B | S127, S96 |
| CPU seul · 32 Go RAM | 14–32 B (MoE) | Gemma 4 26B-A4B (MoE, 4 B actifs) | Qwen3-30B-A3B; gpt-oss-20b | S127, S96, S100 |
| CPU seul · 64 Go RAM | 30–120 B (MoE) | gpt-oss-120b | Gemma 4 26B-A4B; Llama 3.3 70B (lent) | S98, S100, S110 |
| Portable/mini-PC · 16 Go | 7–12 B | Gemma 4 12B | Qwen3 8B; Mistral Nemo 12B | S127, S96 |
| Portable/mini-PC · 32 Go | 14–30 B | Gemma 4 26B-A4B | Qwen3-30B-A3B | S127, S96 |
| Apple Silicon · 16 Go | 8–14 B | Gemma 4 12B (MLX) | Qwen3 14B | S127, S102 |
| Apple Silicon · 32 Go | 24–32 B | Qwen3.6-27B | Gemma 4 26B-A4B; gpt-oss-20b | S128–S129, S102 |
| GPU · 8 Go VRAM | 5–8 B (tout-GPU) | Gemma 4 E4B | Qwen3 8B; Llama 3.1 8B | S127, S108 |
| GPU · 12 Go VRAM (RTX 3060) | 12–14 B (tout-GPU) | Gemma 4 12B | Qwen3 14B; Gemma 4 26B-A4B (offload) | S127, S108 |
| GPU · 16 Go VRAM | 14 B / 20–26 B MoE | Gemma 4 26B-A4B (~15 Go) | gpt-oss-20b; Shieldstral 1.0 3B en garde-fou | S127, S100, S119 |
| GPU · 24 Go VRAM (RTX 4090) | 27–32 B (tout-GPU) | Qwen3.6-27B (~17 Go) | Gemma 4 31B; Qwen3-Coder 30B | S128–S129, S127 |

Repères mémoire (octets/param GGUF): Q4_K_M ≈ 0,57; Q5_K_M ≈ 0,68; Q8_0 ≈ 1,0; MXFP4 ≈ 0,53 [S94–S95, S100]. Distinguer **tout-GPU/mémoire unifiée** (rapide) et **offload CPU/GPU** (plus lent, sauf MoE). Vitesses tokens/s indicatives, **à tester** sur le matériel exact [S108–S109].

## Méthodologie

La sélection combine cinq signaux qualitatifs: adoption/présence marché 30 %, qualité/portée des modèles 25 %, maturité API/outils/agents 20 %, écosystème développeur 15 %, disponibilité et pertinence Europe/Belgique 10 %. La liste est plafonnée à exactement 20. Les sorties de la prochaine édition exigeront un signal durable supérieur à l’acteur remplacé; une nouveauté seule ne suffit pas.

Les benchmarks fournisseur restent dans [analyse-detaillee.md](analyse-detaillee.md) avec protocole et avertissements. Aucun score de sources hétérogènes n’est moyenné. Les prix sont des snapshots catalogue vérifiés au 11 août 2026; remises, contrats et taxes varient. Entrées: aucune; sorties: aucune.

Contrôles effectués à cette passe: 20 lignes exactes dans Vue d’ensemble; unités de prix homogènes; **toutes les conversions EUR recalculées au taux BCE du 7 août 2026 (1,1535)** en remplacement du taux du 5 août; liens Markdown relatifs; valeurs inconnues marquées ND/à confirmer; nouvelle feuille « Échéances datées » regroupant les dates butoirs; section « Frais hors jetons publiés » ajoutée parce que le prix par jeton ne prédit plus la facture d’un agent; section « Trois pièges de comparaison » ajoutée (tokenizer, long contexte, sièges de code). Les filtres, volets figés et formules Excel ne sont pas applicables à Markdown; l’équivalent fonctionnel est la table des matières cliquable en tête de fichier et une unité de prix unique par colonne.

Niveau de preuve par ligne: les faits Anthropic de cette passe proviennent de la page officielle **ouverte directement**; les faits OpenAI, Google, Mistral, GitHub, xAI et Alibaba sont **corroborés par au moins deux sources indépendantes citant la page officielle**, le proxy réseau ayant bloqué ces domaines. Voir la note d’accès dans [sources.md](sources.md).

## Sources

Registre complet, dates et URL exactes: [sources.md](sources.md). Les prix, capacités, sécurité et disponibilité sont issus en priorité des sources officielles S01–S93; les affirmations fournisseur restent distinguées des mesures indépendantes.
