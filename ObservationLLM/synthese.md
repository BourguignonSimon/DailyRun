# Synthèse décisionnelle — 29 juillet 2026

> **Note d’édition.** Réexécution du 29 juillet 2026. Cette édition intègre **plusieurs changements significatifs** depuis le 17 juillet (Opus 5, Gemini 3.6 Flash, MAI de Microsoft, Kimi K3 open weights, partenariat Mistral–Microsoft souverain, dépréciations DeepSeek) et rappelle que le **jalon AI Act du 2 août 2026 est imminent**. La plupart des pages officielles ont renvoyé **HTTP 403** au récupérateur; les faits nouveaux sont donc **à confirmer sur les pages officielles depuis la Belgique** (détails et drapeaux dans [historique](historique.md) et [sources](sources.md)).

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**. **Mistral** est le choix européen le plus crédible, renforcé par un partenariat souverain avec Microsoft (21 juillet). **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi (K3) et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral Vibe | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût |
| Open weight souverain / sur site | Kimi K3, Llama, Mistral | Qwen, GLM, DeepSeek V4 | Contrôle total, portabilité, pas de dépendance API | Licence, capacité GPU, qualité FR/NL à mesurer localement |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | Licences imbriquées, TVA hors prix B2B |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | Llama, Mistral, Nemotron | Qwen, Kimi, GLM, DeepSeek | Contrôle et portabilité | Licence, sécurité, capacité GPU, évaluation locale |

## Ce qui a changé depuis le 17 juillet 2026

Faits nouveaux dans la fenêtre 17 → 29 juillet (sauf mention, **source tierce, officiel à confirmer** car pages officielles en 403):

- **Anthropic — Claude Opus 5 (24 juillet).** Nouveau phare remplaçant Opus 4.8, prix **inchangé 5/25 USD**, 1 M de contexte, raisonnement adaptatif; Sonnet 5 en tarif de lancement **2/10 USD jusqu’au 31 août** et modèle par défaut Free/Pro [S61].
- **Google — Gemini 3.6 Flash (21 juillet).** Remplace 3.5 Flash; **sortie 9 → 7,50 USD** (entrée 1,50). Ajout de 3.5 Flash-Lite (0,30/2,50) et 3.5 Flash Cyber (accès restreint). Gemini 3.5 Pro non sorti (reporté) [S62].
- **Microsoft — MAI-Image-2.5-Pro et MAI-Voice-2-Flash (23 juillet).** Modèles maison en préversion dans Azure AI Foundry [S63].
- **Mistral — partenariat Microsoft élargi (21 juillet).** Distribution via Foundry/Azure ciblant l’**Europe régulée: cloud souverain, contrôle des données, déploiements contrôlés**; datacenter de Les Ulis (Q3 2026). Renforce l’argument juridiction UE [S64].
- **Moonshot — Kimi K3 open weights (~26 juillet).** Poids publiés sous « Kimi K3 License »: **2,8 T params / 104 B activés, 1 M de contexte** ([S65], **dépôt vérifié directement**). API 3/0,30/15 USD (tiers, à confirmer).
- **DeepSeek — dépréciation d’alias (24 juillet)** `deepseek-chat`/`deepseek-reasoner`; le phare est désormais **V4 Flash/Pro** (bien plus économique) [S66].
- **Hugging Face — incident de sécurité (16 juillet).** Intrusion par agent IA autonome dans une partie de l’infrastructure; identifiants de service exposés. Renforce l’exigence de rotation des clés et de moindre privilège [S67].
- **Correction OpenAI.** Deux recherches indépendantes situent **GPT-5.6 (Sol/Terra/Luna) en GA le 9 juillet**, avant la base du 17 juillet qui indiquait « GPT-5.5 ». Adopté avec **drapeau de vérification**: Sol 5/30, Terra 2,50/15, Luna 1/6 USD; écritures de cache ×1,25 [S68].
- **Sans changement significatif:** xAI Grok 4.5, AWS Bedrock (mais Bedrock Agents Classic ferme aux nouveaux clients le 30 juillet), NVIDIA Nemotron 3, Alibaba Qwen 3.7-Max, Z.AI GLM-5.2, GitHub Copilot, Cursor, Replit, Perplexity.

## Prix et Belgique

Taux indicatifs BCE (snapshot indexé, ECB en 403): **1 EUR ≈ 1,1367 USD (28 juillet 2026) ≈ 7,70 CNY** [S71]; l’édition précédente utilisait 1,1405 USD / 7,7327 CNY au 14 juillet [S55]. L’écart est **négligeable** sur les estimations arrondies. Donc 20 USD ≈ 17,60 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,30 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 (Sol/Terra/Luna), Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Le 2 août 2026 est imminent et confirmé**: les obligations de transparence de l’**article 50** (divulgation d’interaction IA, marquage des contenus générés, étiquetage des deepfakes) s’appliquent à cette date, ainsi que les pouvoirs d’exécution et pénalités GPAI. Le filigrane de l’art. 50(2) glisse au 2 décembre 2026 pour les systèmes déjà sur le marché; les obligations haut risque sont reportées à 2027-2028 (Digital Omnibus, approbation du Conseil le 29 juin 2026) [S57–S59, S70]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
