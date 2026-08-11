# Observatoire LLM et agents IA — Belgique

Contrôle: **11 août 2026, deuxième passe** (socle fournisseurs vérifié au 6 août 2026, deux passes de vérification le 11 août). Cette édition couvre exactement 20 écosystèmes et sépare modèles, applications, plateformes API, assistants de code et agents autonomes. Guide dédié: les **modèles exécutables en local selon le matériel**.

## À traiter avant fin août

| Échéance | Quoi | Pour qui |
|---|---|---|
| **17 août 2026** | Arrêt d’Imagen 4 et des modèles d’image Gemini 3 — **erreur dure**, pas d’avertissement, la forme de l’API change | Tout code appelant `generate_images()` ou `imagen-4.0-*` |
| **31 août 2026** | Fin du tarif d’introduction Claude Sonnet 5: 2/10 → **3/15 USD/M (+50 %)** | Toute charge de production sur Sonnet 5 |
| **Fin août 2026** | Fin des crédits promotionnels Copilot Business (+30 USD/siège) et Enterprise (+70 USD/siège) | Équipes sur Copilot Business ou Enterprise |

Détail et suite du calendrier: [Échéances datées](comparatif.md#échéances-datées).

## Livrables

- [Dashboard interactif et rapports publics](https://bourguignonsimon.github.io/DailyRun/)
- [Synthèse décisionnelle](synthese.md)
- [Comparatif structuré](comparatif.md)
- [Analyse détaillée](analyse-detaillee.md)
- [Bonnes pratiques de développement](bonnes-pratiques-developpement.md)
- [Modèles locaux par matériel](modeles-locaux-par-hardware.md)
- [Registre des sources](sources.md)
- [Historique](historique.md)

Le dashboard résume le dernier run validé. Son contrat de données et son fonctionnement sont documentés dans [`dashboard/README.md`](dashboard/README.md).

## Principaux changements constatés

**Deuxième passe du 11 août**

- **Anthropic, grille ouverte directement:** fin du tarif d’introduction **Sonnet 5 le 31 août** (2/10 → 3/15 USD/M); **Mythos 5** ajouté au catalogue à 10/50 mais **sur invitation uniquement** (Project Glasswing); **le million de jetons est inclus au tarif standard** sur les modèles 4.6+, sans surtaxe long contexte; **le tokenizer des versions 4.7+ produit ~30 % de jetons en plus pour le même texte**, ce qui fausse toute comparaison au prix affiché; agents managés facturés 0,08 USD/heure-session; routage global par défaut, `inference_geo: "us"` à ×1,1 et **pas d’option « UE seulement » en première partie** (S07, S115–S118).
- **Alibaba:** **Qwen3.8-Max** (3 août) remplace Qwen 3.7 Max — MoE 2,4 T paramètres / ~95 B actifs, contexte 1 M, **2/6 USD/M**, soit une parité de prix avec GPT-5.6 Terra (S122–S123).
- **Mistral:** **Shieldstral 1.0**, garde-fou 3B multimodal **Apache 2.0** dont la politique s’écrit en langage naturel à l’inférence, exécutable sur un GPU de 16 Go — option crédible pour modérer sans faire sortir les contenus (S119–S121).
- **Google:** arrêts rapprochés — modèles d’image **17 août**, `gemini-robotics-er-1.6-preview` 31 août, Gemini 2.5 **16 octobre** (S114).
- **GitHub:** Copilot facture **à l’usage** (AI Credits) depuis le 1er juin; complétions inline gratuites; crédits promotionnels Business et Enterprise supprimés **fin août** (S124).
- **xAI:** Grok 4.3 (1,25/2,50) et Grok 4.1 Fast (0,20/0,50, **2 M de contexte**); outils serveur à 5 USD/1 000 appels (S22).
- **Guide local corrigé:** **Gemma 4** (2 avril 2026, Apache 2.0, E2B à 31B, 256 k) et **Qwen3.6-27B** (22 avril 2026, ~17 Go en Q4_K_M) remplacent Gemma 3 et Qwen3 comme choix par défaut. Les éditions précédentes recommandaient une génération dépassée (S127–S129).
- **Conversion:** passage au taux BCE du **7 août 2026, 1 EUR = 1,1535 USD**; toutes les colonnes EUR ont été recalculées.
- **AI Act précisé:** pouvoirs de sanction GPAI actifs depuis le 2 août 2026 (jusqu’à 15 M€ ou 3 % du CA mondial); le délai au **2 décembre 2026** ne couvre que le marquage technique de l’article 50(2) pour les systèmes antérieurs; conformité GPAI des modèles antérieurs au 2 août 2025 due au **2 août 2027**; le Digital Omnibus **reporte** le haut risque à décembre 2027 / août 2028 (S125–S126).

**Faits antérieurs conservés**

- **Baisse tarifaire OpenAI GPT-5.6 (30 juillet):** Terra de 2,50/15 à **2/12 USD/M (−20 %)** et Luna de 1/6 à **0,20/1,20 USD/M (−80 %)**; Sol reste à 5/30, avec un « Fast Mode » remplaçant le Priority Processing (S112–S113).
- Sélection inchangée: aucune entrée ni sortie parmi les 20 écosystèmes.
- Frontière vérifiée: GPT-5.6 Sol/Terra/Luna, Claude Opus 5/Fable 5/Sonnet 5/Mythos 5, Gemini 3.6 Flash et 3.1 Pro, Grok 4.5, DeepSeek V4, Qwen3.8-Max, GLM-5.2 et Kimi K3.
- AWS Bedrock Agents est désormais « Agents Classic », fermé aux nouveaux clients depuis le 30 juillet; AgentCore devient la voie recommandée.
- GitHub Models a été retiré le 30 juillet; GitHub Copilot demeure l’offre code et accueille notamment GPT-5.6 et Claude Opus 5.
- Hugging Face a documenté une intrusion agentique; la rotation des jetons et la revue d’activité sont recommandées par le fournisseur.
- Les offres agents deviennent des produits facturés séparément; **le prix par jeton ne prédit plus la facture** — durée de session, outils serveur et surtaxes long contexte s’y ajoutent et sont publiés à part.
- Pour la Belgique, les prix publics restent souvent en USD hors TVA. TVA belge standard: **21 %**; le traitement réel dépend du statut client et de la facture. ChatGPT Plus est affiché **22,99 EUR TTC** dans la zone euro, soit ≈ 19,00 EUR hors TVA — au-dessus du catalogue américain de 20 USD.

## Lecture rapide

Pour un particulier belge, commencer par OpenAI, Google ou Mistral; ajouter Perplexity si la recherche sourcée domine. Pour le code, comparer GitHub Copilot, Cursor, Claude Code/Codex et Kimi Code sur un dépôt pilote. Pour une production européenne sensible, privilégier un contrat avec DPA, région UE, rétention documentée et évaluation interne; AWS, Azure, Google Cloud, Mistral et IBM offrent les contrôles les plus structurés selon le service choisi. Pour garder les données sur sa propre machine, voir le guide [modèles locaux par matériel](modeles-locaux-par-hardware.md): **Gemma 4** couvre désormais la plupart des paliers grand public, **Qwen3.6-27B** sur 24 Go de VRAM, gpt-oss et les MoE dès 32 Go de RAM, avec **Shieldstral 1.0** en garde-fou local.

## Limites

La disponibilité de certaines offres chinoises en Belgique, la facturation EUR, la TVA au checkout et plusieurs durées de rétention ne sont pas publiées assez précisément: elles sont marquées **à confirmer**. Les prix sont des tarifs catalogue, hors remises. Aucun benchmark hétérogène n’est agrégé en classement numérique.

**Limite d’accès de cette passe.** Le proxy réseau du poste d’exécution a bloqué en sortie `openai.com`, `platform.openai.com`, `ai.google.dev`, `mistral.ai`, `huggingface.co`, `docs.github.com`, `github.blog` et `ecb.europa.eu`. Seul `platform.claude.com` a pu être ouvert directement, ce qui explique la profondeur inégale entre acteurs: c’est un **biais d’accessibilité, pas un jugement de transparence**. Les autres faits nouveaux reposent sur au moins deux sources indépendantes citant la page officielle et sont signalés comme tels dans [sources.md](sources.md).
