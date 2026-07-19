# Synthèse décisionnelle — 19 juillet 2026

*Revérification du 19 juillet 2026 par rapport à l’état du 17 juillet. Faits nouveaux marqués « corroboré presse » dans [sources.md](sources.md) lorsque la page officielle était inaccessible au contrôle: à confirmer avant tout usage engageant.*

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

Cette exécution a détecté plusieurs changements significatifs, dont certains que l’édition initiale (pourtant très récente) avait manqués ou datés de façon obsolète. Détail complet et confidences dans [historique.md](historique.md).

- **AI Act — le calendrier a bougé.** Le Digital Omnibus IA (signé le 8 juillet 2026) reporte les obligations « haut risque » autonomes au **2 décembre 2027** (et 2 août 2028 pour les produits réglementés), mais **les obligations de transparence de l’article 50 restent au 2 août 2026** (déclarer l’interaction IA, marquer les contenus générés; grâce du marquage jusqu’au 2 décembre 2026 pour les systèmes déjà en marché). Ne pas confondre report du haut risque et maintien de la transparence [S63].
- **RGPD — nouvelles lignes directrices EDPB** sur le web scraping pour l’IA générative, l’anonymisation et la blockchain (8 juillet 2026, consultation jusqu’au 30 octobre): la visibilité publique ne vaut pas base légale [S64].
- **OpenAI GPT-5.6 (Sol/Terra/Luna), GA le 9 juillet 2026**, remplace GPT-5.5 en tête d’affiche; prix Sol 5/30, Terra 2,50/15, Luna 1/6 USD par million, contexte 1 M. GPT-5.5 reste disponible [S61].
- **xAI Grok 4.5 reste bloqué dans l’UE** (27 États) au ~16 juillet, au titre de l’AI Act et du RGPD; pas de date d’ouverture confirmée. Point à connaître avant de bâtir sur Grok depuis la Belgique [S66].
- **Kimi K3 (Moonshot) confirmé**: ~2,8 T de paramètres, contexte 1 M, n° 1 sur LMArena Frontend Code Arena devant Claude Fable 5; prix API ~0,30/3 USD entrée (cache-hit/miss), ~15 USD sortie. **Poids pas encore publiés (attendus le 27 juillet, licence MIT modifiée)** [S62].
- **DeepSeek passe à V4** avec une **tarification heures pleines/creuses** (prix doublés en heures de pointe) et retrait des alias hérités le 24 juillet; la grille V3.2 de l’édition initiale est probablement dépassée (à confirmer sur la page officielle) [S65].
- **Hugging Face — incident de sécurité (16 juillet)**: intrusion pilotée par un système d’agents IA autonomes, accès limité à des jeux de données internes et à des identifiants; modèles/datasets/Spaces publics non altérés. Rappel: un attaquant agentique n’est lié par aucune politique d’usage [S67].
- **Autres**: Perplexity SPACE + Comet Enterprise (15 juillet) [S68]; NVIDIA Nemotron parole/RAG/sécurité (15 juillet) [S69]; Replit passe l’Agent à une tarification « à l’effort » [S70]; Gemini 3.5 Pro reporté [S71]. Anthropic, Mistral, Z.AI/GLM, Meta, Microsoft, AWS, Cohere, IBM, Cursor, GitHub Copilot: pas de changement de fond dans la fenêtre.

## Prix et Belgique

Dernier taux de référence BCE au 17 juillet 2026: **1 EUR = 1,1435 USD = 7,7501 CNY** [S55] (contre 1,1405 / 7,7327 au 14 juillet; dérive < 0,3 %, non matérielle pour les estimations arrondies). Donc 20 USD ≈ 17,49 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,16 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.5, Claude Opus 4.8 ou Gemini 3.5 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Le 2 août 2026 reste la date des obligations de transparence de l’article 50** (interaction IA déclarée, contenus générés marqués), y compris après le Digital Omnibus; ce dernier a en revanche reporté les obligations « haut risque » autonomes au **2 décembre 2027** (produits réglementés: 2 août 2028) [S57–S59, S63]. Les nouvelles lignes directrices EDPB sur le web scraping, l’anonymisation et la blockchain (8 juillet 2026) précisent le volet RGPD [S64]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
