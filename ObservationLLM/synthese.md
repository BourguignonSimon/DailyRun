# Synthèse décisionnelle — 27 juillet 2026

> Deuxième édition. Des changements significatifs ont été détectés depuis le 17 juillet: Claude Opus 5, Gemini 3.6 Flash (baisse de prix), partenariat Microsoft × Mistral, bascule DeepSeek V4. **Limite d’exécution:** l’accès direct aux pages officielles a été bloqué par la politique réseau (403); les faits proviennent de la recherche web sur domaines officiels, non d’un rendu direct. Voir [historique](historique.md) et [sources](sources.md).

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

Changements significatifs confirmés dans la fenêtre (détail et sources dans [historique](historique.md)):

- **Anthropic Claude Opus 5 (24 juillet)** devient le modèle de tête: 1 M de contexte, raisonnement activé par défaut, **prix inchangés 5/25 USD par million** (entrée/sortie). Rupture d’API: désactiver le raisonnement n’est permis qu’à effort ≤ `high`. Fast mode étendu à Opus 5, retiré pour Opus 4.7. Opus 4.8 passe « legacy » [S63–S65].
- **Google Gemini 3.6 Flash (21 juillet)** remplace la 3.5 Flash: entrée inchangée 1,50 USD/M, **sortie abaissée 9 → 7,50 USD/M**. Ajout de 3.5 Flash-Lite (0,30/2,50) et 3.5 Flash Cyber (sécurité) [S66–S67].
- **Microsoft × Mistral (21 juillet):** Mistral Medium 3.5 et OCR 4 dans Microsoft Foundry, Medium 3.5 dans Copilot Studio, cadrage UE/souverain/secteurs régulés. Renforce l’option européenne côté Microsoft [S68–S69].
- **DeepSeek (24 juillet):** retrait de `deepseek-chat`/`deepseek-reasoner` au profit de `deepseek-v4-flash` (prix/contexte V4 très inférieurs, **à revérifier**) [S70].
- **Alibaba/Qwen:** fin de la remise 50 % sur Qwen3.7-Max (~22–23 juillet) et de l’offre 200 requêtes gratuites/jour (31 juillet); fin des mises à jour de Qwen-Turbo [S71].
- **Outillage code:** GitHub Copilot ajoute un tableau de bord d’usage entreprise (reporting seul); Cursor introduit « Cursor Router » pour le mode Auto (Intelligence/Balance/Cost). Aucun changement de prix ni de données [S72–S73].
- **Kimi K3 (Moonshot):** sortie de poids ouverts annoncée le 27 juillet, **non confirmée sur canal officiel** au moment du contrôle (dépôt GitHub absent). À traiter en capacité déclarée [S75].
- **UE — AI Act (20 juillet):** lignes directrices sur les obligations de transparence publiées; **jalon du 2 août 2026 inchangé** [S57, S74].

**Corrections de base** (antérieures à la fenêtre, manquées le 17 juillet): OpenAI **GPT-5.6 (Sol/Terra/Luna)** est le phare depuis le 9 juillet, structure tarifaire de tête identique [S61–S62]; Anthropic **Fable 5/Mythos 5** (9 juin) et **Sonnet 5** (30 juin, lancement 2/10 puis 3/15) [S65]; Cohere **Command A+** couvre 48 langues dont toutes celles de l’UE [S32]; IBM **watsonx.ai v2.4** [S35].

**Limite de méthode cette édition:** aucune page officielle n’a pu être rendue directement (blocage réseau 403). Les faits ci-dessus reposent sur la recherche web ciblant les domaines officiels, sauf la vérification GitHub. Les figures non reconfirmées gardent la valeur du 17 juillet et sont marquées « à revérifier ».

## Prix et Belgique

Taux indicatifs BCE **maintenus au 14 juillet 2026** faute d’accès direct: **1 EUR = 1,1405 USD = 7,7327 CNY** [S55]. Donc 20 USD ≈ 17,54 EUR hors TVA; avec 21 % de TVA belge, ≈ 21,22 EUR si la TVA n’est pas déjà incluse. Un léger tassement de l’euro (~1,139 USD, ~7,70 CNY) a été observé par recherche autour des 23–24 juillet, **non vérifié directement**; impact négligeable (<0,2 %). Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent notamment Gemini API; OpenAI publie des contrôles de résidence européenne pour certains clients/services [S03, S11]. Pour DeepSeek, Qwen, Kimi et GLM, **la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données restent à confirmer** avant usage de données personnelles ou confidentielles.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Opus 5 ou Gemini 3.6 Flash.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. Le 2 août 2026 reste un jalon important de transparence; les dates des systèmes à haut risque ont été révisées en 2026 [S57–S59]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S37]; Cursor Privacy Mode exclut l’entraînement [S42]. Les contrats, régions et rétentions doivent être vérifiés produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md).
