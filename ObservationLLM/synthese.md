# Synthèse décisionnelle — contrôle du 11 août 2026

> Faits fournisseurs vérifiés au 6 août 2026. Contrôle complémentaire du 11 août: **une baisse tarifaire OpenAI GPT-5.6 (Terra −20 %, Luna −80 %, effective le 30 juillet)** auparavant signalée « à confirmer » est désormais **vérifiée** (annonce officielle + sources indépendantes); Google a par ailleurs programmé l’arrêt de Gemini 2.5 au 16 octobre 2026. Rappel du guide [modèles locaux par matériel](modeles-locaux-par-hardware.md) pour exécuter un LLM sur sa propre machine.

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
| Exécution 100 % locale | Gemma 3, Qwen3 (selon RAM/VRAM) | gpt-oss, Qwen3-30B-A3B (MoE) | Données privées, hors ligne, coût nul par jeton | Mémoire disponible, vitesse, FR/NL à tester — voir [guide local](modeles-locaux-par-hardware.md) |

## Ce qui a changé

La sélection reste inchangée: **aucune entrée, aucune sortie**. Les faits marquants vérifiés depuis le 17 juillet sont:

- **Nouveau (contrôle du 11 août):** OpenAI a baissé les prix API de GPT-5.6 le 30 juillet: **Terra passe de 2,50/15 à 2/12 USD/M (−20 %)** et **Luna de 1/6 à 0,20/1,20 USD/M (−80 %)**; Sol reste à 5/30. Un « Fast Mode » pour Sol remplace Priority Processing (jusqu’à ×2,5 de vitesse, ×2 le prix, intelligence inchangée). Confirmé par l’annonce officielle et des sources indépendantes (CNBC, Axios) [S112–S113].
- **Nouveau (contrôle du 11 août):** Google a programmé l’arrêt de Gemini 2.5 Pro, Flash et Flash-Lite au **16 octobre 2026**; migrer vers la famille 3.x [S114].
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

Taux BCE du 5 août 2026: **1 EUR = 1,1554 USD** [S79]. Donc 20 USD ≈ 17,31 EUR hors TVA; avec 21 % de TVA belge, ≈ 20,95 EUR si la TVA n’est pas déjà incluse. Le taux standard belge reste 21 % [S80]. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. L’AI Act s’applique en principe depuis le 2 août 2026: l’article 50 encadre notamment l’information et le marquage de certains contenus; les pouvoirs de contrôle GPAI sont actifs et une transition ciblée court jusqu’au 2 décembre pour certains systèmes antérieurs [S57–S59, S78, S92–S93]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [modèles locaux](modeles-locaux-par-hardware.md), [sources](sources.md).
