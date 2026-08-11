# Synthèse décisionnelle — contrôle du 11 août 2026 (deuxième passe)

> Socle fournisseurs vérifié au 6 août 2026, deux passes de vérification le 11 août. Cette passe a ouvert directement la grille tarifaire Anthropic et corrigé plusieurs points. Rappel du guide [modèles locaux par matériel](modeles-locaux-par-hardware.md) pour exécuter un LLM sur sa propre machine.

## À traiter avant fin août

Trois échéances tombent dans les trois prochaines semaines et ont un effet direct sur une facture ou sur du code en production.

| Échéance | Qui est concerné | Action |
|---|---|---|
| **17 août** — arrêt d’Imagen 4 et des modèles d’image Gemini 3 | Tout code appelant `generate_images()` ou `imagen-4.0-*` | Migrer vers `gemini-3.1-flash-image`. L’arrêt provoque une **erreur dure**, pas un avertissement, et la forme de l’API change: un simple changement de nom de modèle ne suffit pas [S114] |
| **31 août** — fin du tarif d’introduction Claude Sonnet 5 | Toute charge de production sur Sonnet 5 | Le prix passe de 2/10 à **3/15 USD/M (+50 %)**, batch de 1/5 à 1,50/7,50. Refaire le budget, ou tester si Haiku 4.5 (1/5) passe l’évaluation sur une partie du trafic [S07, S115] |
| **Fin août** — fin des crédits promotionnels Copilot | Équipes sur Copilot Business (+30 USD/siège) ou Enterprise (+70 USD/siège) | Mesurer la consommation réelle de crédits en août pour savoir si le crédit de base (19 / 39 USD) suffira en septembre [S124] |

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral Vibe | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | Licences imbriquées, TVA hors prix B2B |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | Llama, Mistral, Nemotron | Qwen, Kimi, GLM, DeepSeek | Contrôle et portabilité | Licence, sécurité, capacité GPU, évaluation locale |
| Exécution 100 % locale | **Gemma 4** (E2B à 31B, selon RAM/VRAM) | Qwen3.6-27B; gpt-oss; Gemma 4 26B-A4B (MoE) | Données privées, hors ligne, coût nul par jeton, Apache 2.0 | Mémoire disponible, vitesse, FR/NL à tester — voir [guide local](modeles-locaux-par-hardware.md) |
| Modération / garde-fou sans sortie de données | Shieldstral 1.0 3B (Apache 2.0) | Modération hébergée du fournisseur choisi | Politique en langage naturel à l’inférence, texte + image, un GPU de 16 Go suffit | Performance multilingue inégale annoncée par l’éditeur; **tester explicitement FR et NL** avant mise en production [S119–S121] |

## Ce qui a changé

La sélection reste inchangée: **aucune entrée, aucune sortie**. Les faits marquants vérifiés depuis le 17 juillet sont:

**Nouveautés de la deuxième passe du 11 août**

- **Anthropic — fin du tarif d’introduction Sonnet 5 le 31 août.** 2/10 → 3/15 USD/M, batch 1/5 → 1,50/7,50, cache lu 0,20 → 0,30. Vérifié sur la page officielle ouverte directement [S07, S115].
- **Anthropic — le million de jetons est inclus au tarif standard** sur les modèles 4.6 et ultérieurs: pas de surtaxe long contexte, contrairement à GPT-5.6 (Sol 5/30 → 10/45) et à Gemini 3.1 Pro (2/12 → 4/18 au-delà de 200 k) [S07, S61–S62, S65].
- **Anthropic — piège de tokenizer.** Claude 4.7 et suivants produisent **~30 % de jetons en plus pour le même texte** que Sonnet 4.6 et antérieurs. Un prix par million identique ne signifie donc pas un coût identique: comparer en coût par tâche mesurée [S07].
- **Anthropic — Claude Mythos 5**, à 10/50 USD/M comme Fable 5, partage le socle de Fable 5 avec les garde-fous cyber et bio/chimie levés. Accès **sur invitation uniquement** (Project Glasswing), sans inscription libre [S07, S116].
- **Anthropic — agents managés et outils facturés à part:** 0,08 USD par heure-session, recherche web à 10 USD/1 000, web fetch inclus, exécution de code 1 550 h gratuites/mois puis 0,05 USD/h [S07, S117].
- **Anthropic — résidence des données:** le routage est global par défaut; `inference_geo: "us"` force les États-Unis avec une surtaxe de ×1,1. Aucune option « UE seulement » n’est publiée en première partie: pour une résidence UE, passer par Bedrock ou Vertex avec endpoints régionaux (+10 %) [S07, S118].
- **Alibaba — Qwen3.8-Max (3 août)** remplace Qwen 3.7 Max comme modèle phare: MoE de 2,4 T paramètres, ~95 B actifs, contexte 1 M, **2/6 USD/M** avec cache à 0,25, soit une parité de prix avec GPT-5.6 Terra. Poids ouverts annoncés [S122–S123].
- **Mistral — Shieldstral 1.0 (4 août):** classifieur de sûreté 3B multimodal sous **Apache 2.0**, qui accepte une politique de modération en langage naturel à l’inférence au lieu d’une taxonomie figée, et tourne sur un seul GPU de 16 Go. Intérêt direct pour un garde-fou auto-hébergé quand les contenus ne peuvent pas sortir vers une API tierce. Limite déclarée par l’éditeur: performance multilingue inégale, en retrait en arabe et en indonésien [S119–S121].
- **Google — arrêts rapprochés:** modèles d’image Imagen 4 et Gemini 3 Image au **17 août**, `gemini-robotics-er-1.6-preview` au 31 août, Gemini 2.5 Pro/Flash/Flash-Lite au **16 octobre** [S114].
- **GitHub — Copilot est passé à la facturation à l’usage** (GitHub AI Credits) le 1er juin 2026. Les complétions inline et next-edit restent gratuites sur les plans payants; chat, mode agent, revue de code et CLI consomment des crédits. Les crédits promotionnels Business (+30 USD/siège) et Enterprise (+70 USD/siège) s’arrêtent **fin août** [S124].
- **xAI — grille élargie:** Grok 4.3 à 1,25/2,50, Grok 4.1 Fast à 0,20/0,50 avec **2 M de contexte**; Web Search, X Search et Code Execution à 5 USD/1 000 appels; `grok-voice-latest` bascule sur la 2.0 le 5 août à 0,08 USD/minute audio [S22].
- **Guide local — correction de génération.** Les éditions précédentes recommandaient Gemma 3 et Qwen3. **Gemma 4** (2 avril 2026, Apache 2.0, E2B à 31B, multimodal, 256 k) et **Qwen3.6-27B** (22 avril 2026, dense, Apache 2.0, ~17 Go en Q4_K_M) étaient déjà disponibles et n’avaient pas été retenus. Le guide local est corrigé [S127–S129].

**Faits antérieurs conservés**

- OpenAI a baissé les prix API de GPT-5.6 le 30 juillet: **Terra de 2,50/15 à 2/12 USD/M (−20 %)** et **Luna de 1/6 à 0,20/1,20 USD/M (−80 %)**; Sol reste à 5/30. Un « Fast Mode » pour Sol remplace Priority Processing (jusqu’à ×2,5 de vitesse, ×2 le prix, intelligence inchangée) [S112–S113].
- OpenAI a généralisé la famille GPT-5.6: Sol (5/30 USD/M), Terra (2/12 depuis le 30/07) et Luna (0,20/1,20 depuis le 30/07), tous à 1,05 M de contexte; cache lu à -90 %, écritures explicites à 1,25× [S61–S62, S112].
- Anthropic a lancé Opus 5 le 24 juillet à 5/25 USD/M, avec effort configurable et mode Fast à 2×; Fable 5 reste le plafond général à 10/50 USD/M avec garde-fous et fallback possibles [S63–S64].
- Google a mis Gemini 3.6 Flash en GA à 1,50/7,50 USD/M, 1 M de contexte, 64 k de sortie et outils natifs; Gemini 3.5 Flash-Lite vise le volume à 0,30/2,50 [S65].
- AWS a fermé Bedrock Agents Classic aux nouveaux clients le 30 juillet et recommande AgentCore; le changement de namespace Agent Registry impose de revoir endpoints, IAM, SDK et données de registre [S88–S89].
- xAI propose Grok 4.5 à 500 k de contexte, 2/6 USD par million de jetons en contexte court et 4/12 USD en long contexte [S22].
- xAI confirme Grok 4.5 dans la console API pour les utilisateurs UE depuis le 17 juillet [S68].
- DeepSeek V4 Pro/Flash remplace les alias historiques retirés le 24 juillet: contexte 1 M, cache, outils et API OpenAI/Anthropic compatibles [S66–S67].
- GitHub Models a été totalement retiré le 30 juillet; Copilot demeure et propose notamment GPT-5.6, Opus 5 et Kimi K2.7 [S73–S74].
- Cursor Router route les requêtes selon coût, équilibre ou intelligence; les plans belges restent à confirmer au checkout [S75].
- Cursor a mis à jour sa politique le 15 juillet 2026: Privacy Mode interdit l’entraînement et s’appuie sur des accords de rétention zéro, sous réserve d’enquêtes d’abus [S42].
- Kimi K3 est disponible en API à 1 M de contexte; les poids complets ont été annoncés pour le 27 juillet et la politique de confidentialité a été mise à jour le 28 juillet [S70–S72].
- Hugging Face a publié une intrusion agentique et recommande la rotation préventive des jetons; sa reconstruction technique du 27 juillet confirme l’importance de l’isolation, des identités courtes et du blocage de l’accès metadata [S76–S77].

## Prix et Belgique

Taux BCE du **7 août 2026: 1 EUR = 1,1535 USD** [S79] — il remplace le taux du 5 août (1,1554) dans tous les livrables. Donc 20 USD ≈ 17,34 EUR hors TVA; avec 21 % de TVA belge, ≈ 20,98 EUR si la TVA n’est pas déjà incluse. Le taux standard belge reste 21 % [S80]. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

**Repère grand public vérifié à cette passe.** ChatGPT Plus est affiché à **22,99 EUR/mois** dans la zone euro (Allemagne, France, Espagne, Italie) au 4 août 2026, prix consommateur donc TVA incluse. Retraité à 21 %, cela fait ≈ 19,00 EUR hors TVA, soit ≈ 21,92 USD: **au-dessus du prix catalogue américain de 20 USD**. Le prix belge exact reste à confirmer au checkout [S04].

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Ceci n’est pas un avis juridique.

Calendrier AI Act précisé à cette passe [S57–S59, S78, S92–S93, S125–S126]:

- **Depuis le 2 août 2026**, la Commission, via le Bureau européen de l’IA, peut effectivement **enquêter et sanctionner** les fournisseurs de modèles GPAI: demandes d’information, accès aux modèles pour évaluation, mesures correctives, amendes jusqu’au montant le plus élevé entre **15 millions d’euros et 3 % du chiffre d’affaires mondial annuel**. Les obligations de fond existaient déjà; c’est le pouvoir de les faire appliquer qui s’ouvre.
- **L’article 50** (information que l’on parle à une IA, marquage des contenus synthétiques, étiquetage des deepfakes) s’applique depuis le 2 août 2026 et relève des **autorités nationales de surveillance du marché**.
- **Jusqu’au 2 décembre 2026**, un délai de grâce de quatre mois couvre la seule obligation de marquage technique de l’article 50(2) pour les systèmes mis sur le marché avant le 2 août 2026. Les autres obligations de l’article 50 ne bénéficient pas de ce délai.
- **Jusqu’au 2 août 2027** pour la mise en conformité des modèles GPAI mis sur le marché avant le 2 août 2025.
- Le **Digital Omnibus IA**, en vigueur depuis le 27 juillet 2026, **reporte** les obligations « haut risque »: 2 décembre 2027 pour les systèmes autonomes de l’annexe III, 2 août 2028 pour l’IA intégrée aux produits réglementés de l’annexe I. Report, pas suppression.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [modèles locaux](modeles-locaux-par-hardware.md), [sources](sources.md).
