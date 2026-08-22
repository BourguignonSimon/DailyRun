# Modèles recommandés par type d’utilisation

Dernière vérification : **21 août 2026**.

Ce guide transforme le référentiel de l’Observatoire en courtes listes utilisables. Il ne constitue pas un classement universel : le meilleur choix dépend du canal d’accès, du budget, de la sensibilité des données, de la langue et du niveau d’autonomie confié au système.

## Comment choisir

1. Définir la contrainte dominante : qualité, coût, confidentialité, exécution locale ou autonomie.
2. Distinguer le produit comparé : **modèle**, **application**, **plateforme API**, **assistant de code** ou **agent autonome**.
3. Vérifier la disponibilité en Belgique, le français et le néerlandais sur un corpus représentatif.
4. Tester les deux ou trois candidats sur les mêmes tâches et mesurer qualité, latence et coût total.
5. Pour des données sensibles, vérifier le DPA, la région d’inférence, le stockage, les journaux et les sous-traitants. Une région commerciale ne prouve pas à elle seule la résidence.

## Présélection actuelle

| Utilisation | Premier choix à évaluer | Alternatives utiles | Point de vigilance |
|---|---|---|---|
| Conversation et rédaction FR/NL | Claude Sonnet 5 | Gemini 3.7 Flash ; Mistral API en région UE | Tester séparément le français et le néerlandais |
| Recherche web et veille | Perplexity | Gemini 3.7 Flash | Contrôler les citations et ouvrir les sources |
| Raisonnement complexe | GPT-5.6 Sol | Claude Opus 5 ; Claude Sonnet 5 | Coût, latence et reproductibilité |
| Programmation et complétion | GitHub Copilot | Claude Code ; Codex | Un assistant et un agent n’ont pas le même niveau d’accès |
| Agent de code autonome | Claude Code | Codex ; North Mini Code 1.0 | Exiger validation humaine, journalisation et environnement isolé |
| Documents internes et RAG | Command A+ | Claude Sonnet 5 ; Mistral API en région UE | Mesurer retrieval, citations et permissions documentaires |
| Appels d’outils et agents métier | Claude Sonnet 5 | GPT-5.6 Sol ; Gemini 3.7 Flash | Schémas stricts, idempotence et limites d’action |
| Vision et documents multimodaux | Gemini 3.7 Flash | Claude Sonnet 5 ; GPT-5.6 Sol | Qualité variable selon image, PDF et OCR |
| Voix et audio | ChatGPT Voice / Gemini Live | — | Offre applicative, API et rétention peuvent différer |
| Usage local ou hors ligne | Gemma 4 | Qwen3.6 ; gpt-oss | Choisir la quantification selon RAM, VRAM et contexte |
| Confidentialité et résidence européenne | Mistral API en région UE | Claude sur endpoint régional ; Qwen local | Vérifier la portée contractuelle exacte |
| Faible coût, grand volume et batch | Gemini 3.7 Flash | DeepSeek V4 Pro ; Claude Sonnet 5 | Comparer cache, batch, outils et sorties, pas seulement l’entrée |

## Lecture des angles

- **Meilleur résultat** : priorité à la qualité attendue, avec un coût et une latence potentiellement supérieurs.
- **Qualité-prix** : compromis pour les volumes réguliers.
- **Local/confidentiel** : priorité au contrôle de l’environnement et des données.
- **À confirmer** : la source ou la caractéristique n’a pas pu être revérifiée pendant le dernier run ; elle ne doit pas être traitée comme certaine.

Les détails dynamiques, les prix en devise d’origine, les niveaux de confiance, les canaux d’accès et les liens de preuve sont publiés dans [la vue « Choisir »](choisir-un-modele.html). Les recommandations locales par matériel restent détaillées dans [Modèles locaux par hardware](modeles-locaux-par-hardware.md).

## Limites

- Les réponses de modèles sont probabilistes et évoluent avec les versions.
- Les résultats annoncés par un fournisseur ne sont pas directement comparables à un benchmark indépendant utilisant un autre protocole.
- Les langues, la latence et le coût doivent être mesurés sur les données réelles du projet.
- Cette analyse RGPD et AI Act est informative et ne constitue pas un avis juridique.
