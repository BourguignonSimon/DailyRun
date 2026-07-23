# Synthèse décisionnelle — 23 juillet 2026

> Mise à jour du 23 juillet 2026. Re-vérification à cadence rapprochée (6 jours). **Des changements significatifs ont été détectés** — voir [Ce qui a changé](#ce-qui-a-changé). Limite de cette exécution: plusieurs domaines officiels (OpenAI, DeepSeek, Kimi, une partie de Google, la BCE) étaient bloqués par la politique réseau; les faits issus de ces domaines sont marqués « à confirmer sur source primaire ». Historique complet: [historique.md](historique.md).

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**; leurs frontières respectives sont désormais **GPT-5.6** (à confirmer), **Claude Fable 5** (au-dessus d’Opus 4.8) et **Gemini 3.6 Flash** côté modèle rapide. **Mistral** est le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent les besoins de gouvernance et d’intégration d’entreprise. **GitHub Copilot et Cursor** sont les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage, mais transfèrent la sécurité et l’exploitation à l’utilisateur.

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

## Ce qui a changé

Depuis l’édition du 17 juillet 2026 (fenêtre de 6 jours). Un tri par niveau de preuve est indispensable cette fois, car plusieurs domaines officiels étaient inaccessibles.

**Vérifié sur source primaire lue cette exécution:**

- **Anthropic — correction d’omission majeure:** **Claude Fable 5** (`claude-fable-5`) est le modèle **au-dessus d’Opus 4.8** (1 M de contexte, 128 k de sortie, texte+image, thinking permanent, classificateurs de sûreté). Prix API **10 / 1 / 50 USD** par million; batch −50 %. GA le 9 juin 2026, redéployé mondialement le 1er juillet 2026 après une suspension liée aux contrôles d’export (12–30 juin). Sibling **Mythos 5** sans classificateurs, sur invitation seulement. L’édition initiale l’avait entièrement omis [S61–S63]. Opus 4.8 reste à 5/0,50/25; **Sonnet 5** est en prix de lancement **2/10 USD jusqu’au 31 août 2026**, puis 3/15 au 1er septembre [S06–S08, S61].
- **Google — Gemini 3.6 Flash** (21 juillet 2026): **1,50 / 0,15 / 7,50 USD** par million (la sortie baisse de 9 → 7,50). Aussi Gemini 3.5 Flash-Lite (0,30/0,03/2,50) et 3.5 Flash Cyber; palier Pro courant **Gemini 3.1 Pro Preview**; pré-entraînement de Gemini 4 annoncé [S64].

**Corroboré mais source primaire non lue (à confirmer):**

- **OpenAI — GPT-5.6** (Sol/Terra/Luna) paraît remplacer GPT-5.5 comme frontière (GA ~9 juillet). Prix rapportés Sol 5/30, Terra 2,50/15, Luna 1/6. openai.com bloqué cette exécution [S66].
- **DeepSeek — V4** (`deepseek-v4-pro`/`deepseek-v4-flash`, 1 M de contexte) remplace V3.2; les alias `deepseek-chat`/`deepseek-reasoner` sont retirés le 24 juillet 2026. Grille non vérifiable (domaine bloqué) [S67].
- **Moonshot — Kimi K3** consolidé: MoE 2,8 T, 1 M de contexte, prix **3 / 0,30 / 15 USD**, poids ouverts ~27 juillet [S68].
- **Alibaba/Qwen — Qwen3.8-Max-Preview** (19 juillet, WAIC): ~2,4 T, ~1 M de contexte, preview sans prix au jeton ni poids publiés; **Qwen-Image-3.0** le 21 juillet [S69–S70].

**Réglementaire (majeur):** le paquet **« Digital Omnibus »** de simplification de l’AI Act est adopté (Conseil 29 juin, signature 8 juillet 2026). Les systèmes à **haut risque** sont reportés: Annexe III de 2 août 2026 à **2 décembre 2027**, Annexe I à **2 août 2028**. **Le 2 août 2026 reste** l’échéance des obligations de transparence (Art. 50) et de l’applicabilité des pouvoirs d’exécution/amendes GPAI [S59, S71–S72].

**Inchangé (confirmé):** xAI Grok 4.5 (2/6, 500 k); Mistral Large (2/6) et Medium 3.5 (1,5/7,5); GitHub Copilot, Cursor et Replit (évolutions antérieures au 1er juillet); Z.AI/GLM-5.2; Cohere, Perplexity, Hugging Face, IBM, NVIDIA, Meta [S19–S54].

## Prix et Belgique

Taux indicatifs BCE: **1 EUR = 1,1408 USD (22 juillet 2026) = 7,7255 CNY (21 juillet 2026)** [S55]. Variation quasi nulle vs le 14 juillet (1,1405/7,7327): les conversions EUR ne changent qu’à la marge. Donc 20 USD ≈ 17,53 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,22 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6, Claude Fable 5 / Opus 4.8 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Le 2 août 2026 reste** le jalon des obligations de transparence (Art. 50) et de l’applicabilité des pouvoirs d’exécution/amendes sur les fournisseurs GPAI. En revanche, le paquet de simplification « Digital Omnibus » adopté le 29 juin 2026 **reporte les systèmes à haut risque**: Annexe III à décembre 2027, Annexe I à août 2028; le marquage des contenus générés passe à un délai de 3 mois (échéance décembre 2026) [S57–S59, S71–S72]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
