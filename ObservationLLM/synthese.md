# Synthèse décisionnelle — 22 juillet 2026

## Verdict en une minute

Il n’existe pas un « meilleur LLM » unique. Pour un résident belge, le choix dépend surtout de la surface achetée: application grand public, API, plateforme cloud, assistant de code ou agent. Le trio le plus polyvalent reste **OpenAI, Anthropic et Google**, désormais alignés sur **GPT-5.6**, **Claude Fable 5 / Opus 4.8 / Sonnet 5** et **Gemini 3.1 Pro / 3.6 Flash**. **Mistral** reste le choix européen le plus crédible. **AWS, Microsoft et IBM** dominent la gouvernance et l’intégration d’entreprise. **GitHub Copilot et Cursor** restent les comparaisons prioritaires pour le code. **Perplexity** se distingue pour la recherche sourcée. Les modèles open weight de **Meta, Mistral, NVIDIA, Qwen, DeepSeek, Kimi et GLM** réduisent le verrouillage mais transfèrent sécurité et exploitation à l’utilisateur.

## Recommandations par profil

| Profil belge | Premier choix | Alternative | Pourquoi | Vigilance |
|---|---|---|---|---|
| Particulier polyvalent FR/NL | ChatGPT ou Gemini | Mistral Vibe | Multimodal, recherche, mémoire, écosystème | Prix au checkout, TVA, entraînement des données grand public |
| Recherche web sourcée | Perplexity | Gemini / ChatGPT recherche | Citations et recherche intégrées | Vérifier les sources primaires, éviter l’automatisation aveugle |
| Développeur indépendant | OpenAI ou Anthropic API | Gemini / Mistral | SDK matures, outils, sorties structurées | Budgets, snapshots, rétention, clés côté serveur |
| Développement quotidien | GitHub Copilot | Cursor | IDE, agent, revue et choix de modèles | Crédits IA variables, confidentialité du dépôt |
| Agent de code autonome | Claude Code / Codex | Cursor / Kimi Code | Boucles longues, terminal, outils | Exécuter en sandbox, revue humaine, plafond de coût |
| PME Microsoft 365 | Microsoft 365 Copilot + Azure | GitHub Copilot | Identité, Office, gouvernance et agents | **Sous-traitant OpenAI activé par défaut le 24 juillet 2026**; licences imbriquées; TVA hors prix B2B |
| Production UE sensible | Mistral ou cloud avec région UE | IBM / AWS / Azure / Google Cloud | DPA, région, contrôles et déploiement privé | Vérifier service, région et sous-traitants exacts |
| Open weight / sur site | Llama (texte), Mistral, Nemotron | Qwen, Kimi, GLM, DeepSeek | Contrôle et portabilité | Licence, sécurité, capacité GPU, évaluation locale |

## Ce qui a changé depuis le 17 juillet 2026

Cette édition met à jour l’état initial du 17 juillet. Deux catégories: des **nouveautés réelles dans la fenêtre** (17→22 juillet) et des **corrections** de faits erronés ou périmés dans l’édition précédente.

**Nouveautés dans la fenêtre (vérifiées):**

- **Google (21 juillet):** GA de **Gemini 3.6 Flash**, **3.5 Flash-Lite** et **3.5 Flash Cyber**; **Gemini 4** teasé. Gemini 3.6 Flash baisse la sortie à 7,50 USD/M (contre 9 USD pour 3.5 Flash) et gagne en efficacité de jetons [S10, S67].
- **Alibaba/Qwen (19 juillet):** aperçu de **Qwen3.8-Max-Preview** (2,4 T de paramètres, multimodal), vendu par Token Plan plutôt qu’au jeton [S45].
- **Microsoft (24 juillet):** **OpenAI devient sous-traitant** de M365 Copilot et Copilot Studio; **activé par défaut pour tous les tenants le 24 juillet**, sauf opt-out d’un administrateur. Le traitement par ce nouveau chemin peut sortir de l’EU Data Boundary [S16–S17, S19].
- **AWS (13–20 juillet):** GPT-5.6 (Sol/Terra/Luna) GA sur Bedrock, nouvelle console Bedrock, AgentCore étendu à l’Europe (Milan, Espagne) [S21–S24].
- **DeepSeek:** **V4** en production (mi-juillet), tarif heures pleines/creuses; **retrait des alias V3.2 le 24 juillet** [S42–S43].
- **Kimi K3:** poids ouverts **toujours attendus le 27 juillet** (annonce du 16 juillet); l’API est active [S55–S56].

**Corrections de la base précédente:**

- **OpenAI:** la frontière est **GPT-5.6** (Sol/Terra/Luna, GA le 9 juillet), pas GPT-5.5. Sol 5/0,50/30 USD par million (entrée/cache/sortie), 1 M de contexte; Terra 2,50/15; Luna 1/6. Multiplicateur long contexte au-delà de 272 k [S01–S02].
- **Anthropic:** la tête de gamme est **Claude Fable 5** (~10/50 USD, à confirmer), au-dessus d’**Opus 4.8** (5/25); **Sonnet 5** en prix de lancement **2/10 USD jusqu’au 31 août**, puis 3/15, avec 1 M de contexte sans surcoût [S06–S09].
- **Google:** le modèle **flagship est Gemini 3.1 Pro** (2/0,20/12 USD ≤200 k; 4/18 au-delà), le tier rapide passe à 3.6 Flash [S10–S11].
- **Z.AI/GLM:** le flagship est **GLM-5.2** (744B MoE, **1 M de contexte**), pas GLM-5.1 200 k [S59–S60].
- **Cohere:** flagship **Command A+** (mai 2026); **NVIDIA:** **Nemotron 3 Ultra 550B** (juin); **IBM:** **Granite 4.x** et watsonx.ai v2.4 [S26–S33].

## Prix et Belgique

Taux indicatifs BCE du **21 juillet 2026: 1 EUR ≈ 1,1418 USD** [S61]; **1 EUR ≈ 8,26 CNY (à confirmer)**. Donc 20 USD ≈ 17,52 EUR HT; avec 21 % de TVA belge, ≈ 21,20 EUR si la TVA n’est pas déjà incluse. Un prix affiché en EUR à un consommateur peut déjà inclure la TVA; un prix B2B ou API l’exclut souvent. Le checkout et la facture priment toujours.

Les offres explicitement disponibles dans l’EEE incluent Gemini API et Vertex (régions UE) et OpenAI (contrôles de résidence EEE/Suisse pour clients/services éligibles) [S03, S12]. Pour **DeepSeek et Qwen**, la disponibilité commerciale en Belgique, la facturation EUR, la TVA et la localisation des données **restent à confirmer, voire négatives** (DeepSeek: représentant UE rejeté, blocage Garante italien; Qwen: région Francfort existante mais routage Singapour par défaut et absence de représentant RGPD) [S44, S47]. **Kimi et GLM** restent à confirmer côté UE, mais leurs poids ouverts autorisent un auto-hébergement UE.

## Capacités: ne pas confondre les produits

- **Modèle**: moteur probabiliste, par exemple GPT-5.6 Sol, Claude Fable 5 ou Gemini 3.1 Pro.
- **Application**: ChatGPT, Claude, Gemini, Grok, Vibe, Perplexity; elle ajoute recherche, fichiers, mémoire et interface.
- **Plateforme API**: endpoints, SDK, quotas, cache, batch, observabilité et outils.
- **Assistant de code**: Copilot ou Cursor, intégré à l’IDE et au dépôt.
- **Agent autonome**: boucle qui planifie, appelle des outils, modifie des fichiers et peut agir; le coût et le risque s’accumulent à chaque étape.

## Sécurité, RGPD et AI Act

Aucun fournisseur ne rend automatiquement un cas d’usage conforme. Pour toute donnée personnelle: finalité, minimisation, base juridique, DPA, transferts, rétention, droits des personnes, journalisation et analyse d’impact si nécessaire. **Nouveauté réglementaire majeure:** le **Digital Omnibus IA** (accord de mai, adopté par le Parlement le 16 juin et le Conseil le 29 juin, signé vers le 8 juillet 2026) **reporte les obligations des systèmes à haut risque**: Annexe III au **2 décembre 2027**, produits réglementés de l’Annexe I au **2 août 2028**. En revanche, restent applicables **au 2 août 2026**: l’**article 50** (transparence des interactions IA, marquage des contenus générés, étiquetage des deepfakes) et l’**outil d’exécution GPAI** de la Commission avec sanctions (jusqu’à 15 M€ ou 3 % du CA mondial) [S63–S66, S68]. Ceci n’est pas un avis juridique.

Pour les offres grand public, vérifier le réglage d’entraînement. OpenAI API n’entraîne pas par défaut [S03]; GitHub permet l’opt-out pour les plans individuels et n’entraîne pas sur Business/Enterprise [S48]; Cursor Privacy Mode exclut l’entraînement (ZDR) [S51]. Anthropic n’offre **pas de résidence UE native** (passer par AWS Bedrock ou Google Cloud UE) et a basculé l’entraînement grand public en opt-in le 8 octobre 2025 [S06]. xAI reste le **plus exposé** juridiquement en UE (plaintes noyb, enquêtes DPC/CNIL/ICO) [S15]. Les contrats, régions et rétentions se vérifient produit par produit.

## Décisions à prendre

1. Choisir deux fournisseurs maximum pour un pilote de quatre semaines.
2. Définir trois tâches réelles, une enveloppe de coût et un jeu d’évaluation reproductible FR/NL.
3. Interdire les secrets et données personnelles tant que DPA, région et rétention ne sont pas validés.
4. Épingler les versions de modèles en production et mettre en place un fournisseur de secours.
5. Mesurer coût par tâche réussie, latence p95, taux d’intervention humaine et incidents, pas seulement prix par jeton.
6. **Décision M365 avant le 24 juillet:** trancher le basculement du sous-traitant OpenAI ou accepter l’activation automatique.

Détails et sources: [comparatif](comparatif.md), [analyse](analyse-detaillee.md), [bonnes pratiques](bonnes-pratiques-developpement.md), [sources](sources.md), [historique](historique.md).
