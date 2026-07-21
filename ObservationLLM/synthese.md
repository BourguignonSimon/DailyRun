# Synthèse décisionnelle — 21 juillet 2026

> Ré-vérification ciblée du 21 juillet 2026 (base: édition du 17 juillet). Changements significatifs intégrés: nouvelle série frontière **OpenAI GPT-5.6 (Sol/Terra/Luna)**, **Anthropic Claude Fable 5** désormais modèle le plus capable en disponibilité générale (+ Mythos 5 sur invitation), **Google Gemma 4** repassé sous licence Apache 2.0, et **jalon AI Act du 2 août 2026 à J-12**. Détail dans [historique.md](historique.md).

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

## Ce qui a changé depuis le 17 juillet 2026

Ré-vérification ciblée quatre jours après l’édition initiale. Faits marquants nouveaux, confirmés sur sources officielles:

- **OpenAI lance la série GPT-5.6 (Sol, Terra, Luna).** GPT-5.6 Sol devient le modèle de tête, orienté raisonnement frontière et travail agentique de longue durée; annonce/déploiement vers le 9 juillet 2026, prix API 5 USD/M entrée et 30 USD/M sortie. Il **remplace GPT-5.5** comme phare OpenAI de l’observatoire [S61]. Fiabilité: pages OpenAI en 403 via le proxy, contexte exact à reconfirmer.
- **Anthropic — Claude Fable 5 est désormais le modèle le plus capable en disponibilité générale**, au-dessus d’Opus 4.8: GA le 9 juin 2026, 1 M de contexte, 128 k de sortie, raisonnement adaptatif toujours actif, 10 USD/M entrée et 50 USD/M sortie. Claude Mythos 5 partage ses specs mais reste sur invitation (Project Glasswing, cybersécurité défensive). L’édition du 17 juillet avait omis ce duo: corrigé [S62].
- **Sonnet 5** conserve un prix d’introduction 2/10 USD par million jusqu’au 31 août 2026 (standard 3/15) [S62].
- **Google Gemma 4** repasse sous **licence Apache 2.0** (levée des restrictions commerciales de l’ancienne licence Gemma): poids ouverts E2B/E4B/12B/26B A4B/31B, 256 k de contexte, 140+ langues, avec une mise à jour furtive le 16 juillet 2026 (Flash Attention 4, corrections d’outils, vision) [S64].
- **AI Act — J-12 avant le 2 août 2026.** Obligations de transparence (article 50) et pouvoirs d’exécution sur les GPAI applicables à cette date, amendes jusqu’au plus élevé de 15 M€ ou 3 % du CA mondial; report ciblé au 2 décembre 2026 (marquage lisible par machine des systèmes préexistants) et au 2 août 2027 (GPAI d’avant août 2025) [S65].
- **Kimi K3** (annoncé le 16 juillet) reste trop récent pour une conclusion indépendante robuste [S60].

Rappel des faits déjà établis le 17 juillet (inchangés): Gemini 3.5 Flash 1,50/9 USD [S09–S11]; Grok 4.5 500 k, 2/6 court et 4/12 long [S22]; Mistral Medium 3.5/Large et API UE [S19–S21]; GitHub Copilot Pro/Pro+/Max à crédits IA [S37–S38]; Cursor Privacy Mode/ZDR [S42].

## Prix et Belgique

Taux indicatifs BCE du 14 juillet 2026: **1 EUR = 1,1405 USD = 7,7327 CNY** [S55]. Donc 20 USD ≈ 17,54 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,22 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Fable 5, Claude Opus 4.8 ou Gemini 3.5 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Le **2 août 2026 (J-12)** est un jalon imminent: obligations de transparence de l’article 50 (divulgation chatbot, marquage des contenus générés, étiquetage des deepfakes) et pouvoirs d’exécution sur les GPAI, amendes jusqu’au plus élevé de 15 M€ ou 3 % du CA mondial; reports ciblés au 2 décembre 2026 et au 2 août 2027 [S57–S59, S65]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
