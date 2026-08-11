# Observatoire LLM et agents IA — Belgique

Contrôle: **11 août 2026** (faits fournisseurs vérifiés au 6 août 2026, sans changement significatif depuis). Cette édition couvre exactement 20 écosystèmes et sépare modèles, applications, plateformes API, assistants de code et agents autonomes. Nouveau ce mois-ci: un guide des **modèles exécutables en local selon le matériel**.

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

- **Nouveau livrable** [modeles-locaux-par-hardware.md](modeles-locaux-par-hardware.md): tableau de décision par configuration (Raspberry Pi 5, CPU seul 8–64 Go, Apple Silicon 16/32 Go, GPU 8–24 Go, RTX 3060 12 Go), recommandations par catégorie (chat, MoE, raisonnement, code, vision, embeddings), modèles à éviter, marges mémoire et procédure de validation locale.
- Contrôle du 11 août: **aucun changement significatif** côté fournisseurs depuis le 6 août (mêmes familles de modèles et prix vérifiés).
- Sélection inchangée: aucune entrée ni sortie parmi les 20 écosystèmes.
- Frontière vérifiée: GPT-5.6 Sol/Terra/Luna, Claude Opus 5/Fable 5/Sonnet 5, Gemini 3.6 Flash, Grok 4.5, DeepSeek V4, Qwen 3.7, GLM-5.2 et Kimi K3.
- AWS Bedrock Agents est désormais « Agents Classic », fermé aux nouveaux clients depuis le 30 juillet; AgentCore devient la voie recommandée.
- GitHub Models a été retiré le 30 juillet; GitHub Copilot demeure l’offre code et accueille notamment GPT-5.6 et Claude Opus 5.
- Hugging Face a documenté une intrusion agentique; la rotation des jetons et la revue d’activité sont recommandées par le fournisseur.
- Les offres agents deviennent des produits facturés séparément ou des boucles consommant modèle, outils et calcul; le coût par tâche remplace progressivement le seul coût par jeton.
- Pour la Belgique, les prix publics restent souvent en USD hors TVA. Conversion indicative avec le taux BCE du 5 août 2026: **1 EUR = 1,1554 USD**. TVA belge standard: **21 %**; le traitement réel dépend du statut client et de la facture.
- L’AI Act s’applique en principe depuis le 2 août 2026; l’article 50 et les pouvoirs de contrôle GPAI sont actifs, avec une transition ciblée jusqu’au 2 décembre pour certains systèmes antérieurs. Analyse informative, pas avis juridique.

## Lecture rapide

Pour un particulier belge, commencer par OpenAI, Google ou Mistral; ajouter Perplexity si la recherche sourcée domine. Pour le code, comparer GitHub Copilot, Cursor, Claude Code/Codex et Kimi Code sur un dépôt pilote. Pour une production européenne sensible, privilégier un contrat avec DPA, région UE, rétention documentée et évaluation interne; AWS, Azure, Google Cloud, Mistral et IBM offrent les contrôles les plus structurés selon le service choisi. Pour garder les données sur sa propre machine, voir le guide [modèles locaux par matériel](modeles-locaux-par-hardware.md): Gemma 3 et Qwen3 couvrent la plupart des paliers grand public, gpt-oss et Qwen3-30B-A3B (MoE) pour plus de puissance dès 32 Go de RAM.

## Limites

La disponibilité de certaines offres chinoises en Belgique, la facturation EUR, la TVA au checkout et plusieurs durées de rétention ne sont pas publiées assez précisément: elles sont marquées **à confirmer**. Les prix sont des tarifs catalogue, hors remises. Aucun benchmark hétérogène n’est agrégé en classement numérique.
