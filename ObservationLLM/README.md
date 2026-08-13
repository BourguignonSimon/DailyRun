# Observatoire LLM et agents IA — Belgique

Contrôle: **13 août 2026**. Une revérification primaire corrige deux faits publiés plus tôt dans la journée : le prix promotionnel de Claude Sonnet 5 reste fixé à **2/10 USD/M jusqu’au 31 août**, puis passe à **3/15 USD/M le 1er septembre 2026**; côté Google, l’arrêt confirmé au 17 août concerne trois endpoints Imagen 4, sans échéance officielle trouvée au 31 août pour `gemini-robotics-er-1.6-preview`. Par ailleurs, **ChatGPT affiche désormais des publicités dans neuf pays, dont aucun n’est la Belgique**, et Mistral commence à héberger des modèles ouverts tiers derrière ses endpoints régionaux européens. Cette édition suit 20 écosystèmes et sépare modèles, applications, plateformes API, assistants de code et agents autonomes. Guide dédié: les **modèles exécutables en local selon le matériel**, enrichi ce mois-ci d’un agent de code ouvert.

> ⚠️ **Niveau de preuve.** Le run initial a subi un blocage réseau étendu. Une revérification corrective a ensuite consulté les documentations officielles Anthropic et Google pour Sonnet 5 et Imagen; les autres faits conservent le niveau de preuve indiqué dans leurs fiches. Revérifiez prix, régions et conditions avant tout engagement contractuel ou budgétaire.
>
> ✅ **Exception, nouvelle ce contrôle:** les registres de distribution officiels (`pypi.org`, `registry.npmjs.org`) et `blog.modelcontextprotocol.io` sont joignables et fournissent une **preuve primaire durable** pour les versions de bibliothèques et la spécification MCP. Détail: note d’accès dans [sources.md](sources.md).

## Livrables

- [Dashboard interactif et rapports publics](https://bourguignonsimon.github.io/DailyRun/)
- [Synthèse décisionnelle](synthese.md)
- [Comparatif structuré](comparatif.md)
- [Analyse détaillée](analyse-detaillee.md)
- [Bonnes pratiques de développement](bonnes-pratiques-developpement.md)
- [Modèles locaux par matériel](modeles-locaux-par-hardware.md)
- [Localisation, distribution et hébergement des modèles](localisation-modeles.md)
- [Sources de référence et indices de confiance](referentiel-sources.md)
- [100 outils majeurs de l’écosystème IA](outils-ecosysteme-ia.md)
- [Prompt consolidé du run journalier](prompt-run-journalier.md)
- [Registre des sources](sources.md)

Le dashboard résume le dernier run validé. Son contrat de données et son fonctionnement sont documentés dans [`dashboard/README.md`](dashboard/README.md).

## À faire ce mois-ci

1. **Claude Sonnet 5: la hausse au 1er septembre reste programmée.** Les pages officielles indiquent **2/10 USD/M jusqu’au 31 août 2026**, puis **3/15 USD/M à partir du 1er septembre** (+50 %) (S158–S159).
2. **Vérifier les crédits GitHub Copilot Business/Enterprise**: les crédits promotionnels (+30 et +70 USD/mois) **expirent fin août 2026** (S137).
3. **Chiffrer l’option « région UE » chez Mistral**: endpoints régionaux GA à **1,1×**, Priority Tier à **1,75× avec SLA 99,5 %** — en exigeant la liste des sous-traitants pouvant recevoir un transfert hors région (S142–S144).

## Principaux changements constatés

- **Mistral vend la souveraineté comme un produit** (11 août): **Regional Endpoints en GA** — inférence au choix en Europe ou aux États-Unis, à **1,1× le tarif global**; **Priority Tier en préversion publique** à **1,75× le catalogue** avec limites de débit personnalisées et **SLA de disponibilité 99,5 %** (~3 h 39/mois); coalition d’entreprises européennes finançant **200 MW fin 2027** et **1 GW fin 2030**. Réserve essentielle: des **transferts encadrés vers des sous-traitants hors région restent possibles** — « endpoint UE » ≠ « aucune donnée ne quitte l’UE » (S142–S144).
- **xAI sort Grok 4.6** (12 août): 500 k de contexte, **2/6 USD/M** sous 200 k jetons (cache 0,50), **4/12** au-delà — et la grille haute s’applique à **toute la requête**, pas seulement au dépassement. Variante rapide à 2×, **aucune remise batch**. Parité annoncée avec GPT-5.6 Sol sur l’Artificial Analysis Intelligence Index, mesure tierce. Disponibilité console UE **à confirmer** pour 4.6; aucune résidence UE annoncée (S139–S141).
- **Consolidation xAI + Cursor**: procédures réglementaires de l’acquisition d’Anysphere par SpaceX (60 Md USD) **finalisées le 12 août**, clôture attendue **avant fin août**, **non actée** à la date de contrôle. Les deux entrées restent distinctes dans la sélection; une fusion est probable à la prochaine édition, ce qui libérera une place. Premier produit de la combinaison: **Grok Bot**, à partir de 120 USD/mois (S147–S148).
- **OpenAI ouvre GPT-5.6-Cyber** (10 août): dérivé de GPT-5.6 Sol, **12,50/75 USD/M** (cache 1,25), refus réduits sur la recherche de vulnérabilités. **Accès sur dossier uniquement** via le palier Daybreak Red — à considérer comme indisponible pour un particulier ou un développeur indépendant (S145–S146).
- **Lacune corrigée — Cohere a une offre ouverte depuis juin**: **North Mini Code 1.0** (9 juin), 30B-A3B MoE, **Apache 2.0**, **256 k de contexte / 64 k de sortie**, poids BF16, FP8 et **w4a16** (~18–20 Go, tient sur une seule carte 24 Go), GGUF communautaires et image Ollama. Ajouté au guide local et au comparatif (S149–S150).
- **Lacune corrigée — lettre « Open Weights and American AI Leadership »** (24 juillet, 25 signataires: NVIDIA, Microsoft, Meta, IBM, Mistral, Hugging Face, Mozilla, Dell, Palantir, Replit, Perplexity, Linux Foundation, a16z, Y Combinator). **OpenAI, Anthropic et Google ne l’ont pas signée** (S151).
- **Lacune corrigée — Google**: **Gemini Omni Flash** est bien en préversion publique depuis le 30 juin; le journal officiel confirme aussi l’arrêt, le **17 août 2026**, de `imagen-4.0-generate-001`, `imagen-4.0-ultra-generate-001` et `imagen-4.0-fast-generate-001`. Aucune échéance officielle au 31 août n’a été trouvée pour `gemini-robotics-er-1.6-preview`; elle est donc retirée du calendrier (S152). **Perplexity**: Terra et Luna dans Computer, Terra par défaut pour les sous-agents (S154).
- **Qwen3.8-Max**: les poids ouverts annoncés pour la semaine du 10 août **ne sont toujours pas publiés au 13 août, sans licence nommée**. La promesse est désormais dépassée de plusieurs jours (S157).
- Sélection inchangée: aucune entrée ni sortie parmi les 20 écosystèmes.
- Rappels toujours valides du cycle précédent: Muse Glimmer 30B (Apache 2.0) et Nemotron 3.5 Lightning côté poids ouverts; Shieldstral 1.0 comme garde-fou ouvert; spécification MCP 2026-07-28 finale avec dépréciation de DCR, Roots, Sampling et Logging; baisses GPT-5.6 Terra (−20 %) et Luna (−80 %) du 30 juillet; arrêt de Gemini 2.5 au **16 octobre 2026**; grille long contexte GPT-5.6 (Sol 10/45, Terra 4/18, Luna 0,40/1,80) et écriture de cache à 1,25×.
- **Résidence des données**: dans Microsoft Foundry, les modèles Anthropic s’exécutent sur l’infrastructure d’Anthropic, **pas dans la région Azure sélectionnée**; sur AWS Bedrock et Vertex AI ils tournent en région UE du cloud. À vérifier **modèle par modèle** (S131).
- Pour la Belgique, les prix publics restent souvent en USD. Conversion indicative avec le taux BCE du 5 août 2026: **1 EUR = 1,1554 USD**; taux de référence BCE du 11 août **1,1540**, écart 0,12 %, taux documenté conservé (S156). Le montant réellement facturé se vérifie au checkout.
- **AI Act**: la Commission exerce ses pouvoirs d’enquête et de sanction sur les modèles à usage général **depuis le 2 août 2026**; les modèles mis sur le marché avant le 2 août 2025 ont jusqu’au **2 août 2027** pour se conformer. L’article 50 s’applique et **n’a pas été reporté**, contrairement au calendrier haut risque de l’annexe III repoussé au **2 décembre 2027**. Amendes jusqu’à **3 % du CA mondial ou 15 M€** (S134, S155). Analyse informative, pas avis juridique.

## Lecture rapide

Pour un particulier belge, commencer par OpenAI, Google ou Mistral; ajouter Perplexity si la recherche sourcée domine. Pour le code, comparer GitHub Copilot, Cursor, Claude Code/Codex et Kimi Code sur un dépôt pilote — en gardant en tête que le contrat Cursor peut changer d’entité fin août. Pour une production européenne sensible, l’option la plus lisible à cette date est l’**endpoint UE de Mistral à +10 %**, avec Priority Tier si la disponibilité est critique; AWS, Azure, Google Cloud et IBM restent pertinents en vérifiant la résidence **modèle par modèle**. Pour garder les données sur sa propre machine, voir le guide [modèles locaux par matériel](modeles-locaux-par-hardware.md): **Gemma 4** et **Qwen3.6** couvrent la plupart des paliers grand public, gpt-oss et Qwen3.6-35B-A3B dès 32 Go de RAM, **Muse Glimmer 30B** ou **Nemotron 3.5 Lightning** pour un agent généraliste local, et **North Mini Code 1.0** pour un agent de **code** sur une seule carte 24 Go.

## Limites

La disponibilité de certaines offres chinoises en Belgique, la facturation EUR, la TVA au checkout et plusieurs durées de rétention ne sont pas publiées assez précisément: elles sont marquées **à confirmer**. Les prix sont des tarifs catalogue, hors remises. Aucun benchmark hétérogène n’est agrégé en classement numérique.

**Limites principales de cette édition:** hors des corrections Anthropic et Google revérifiées sur sources primaires, une partie des faits provient encore de l’index de recherche et de sources indépendantes convergentes. La **disponibilité de Grok 4.6 dans la console UE n’a pas pu être confirmée**, ni sa résidence de données. Le **SLA de 99,5 % du Priority Tier Mistral est annoncé en préversion publique**, pas en disponibilité générale: sa valeur contractuelle reste à établir. La **clôture de l’acquisition Cursor n’est pas actée**. Les scores de l’Artificial Analysis Intelligence Index pour Grok 4.6 et les bancs de Muse Glimmer sont des mesures non répliquées par cet observatoire. Les poids ouverts de Qwen3.8-Max restent **annoncés mais non livrés**.
