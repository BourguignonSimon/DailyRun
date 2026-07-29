# Observatoire LLM et agents IA — Belgique

Édition vérifiée le **29 juillet 2026** (réexécution; base initiale 17 juillet). Elle couvre exactement 20 écosystèmes et sépare modèles, applications, plateformes API, assistants de code et agents autonomes.

> **Vérification.** Cette réexécution a été bloquée en **HTTP 403** sur la plupart des pages officielles; les faits du 17 → 29 juillet reposent sur annonces officielles indexées + agrégateurs tiers concordants (sauf le dépôt Kimi K3, vérifié directement) et portent le drapeau « officiel à confirmer ». Détails dans [historique.md](historique.md).

## Livrables

- [Synthèse décisionnelle](synthese.md)
- [Comparatif structuré](comparatif.md)
- [Analyse détaillée](analyse-detaillee.md)
- [Bonnes pratiques de développement](bonnes-pratiques-developpement.md)
- [Registre des sources](sources.md)
- [Historique](historique.md)

## Principaux changements constatés (17 → 29 juillet 2026)

- **Trois nouveaux modèles phares:** Anthropic **Opus 5** (24/07, prix inchangé 5/25 USD), Google **Gemini 3.6 Flash** (21/07, sortie 9 → 7,50 USD), Microsoft **MAI-Image-2.5-Pro / MAI-Voice-2-Flash** (23/07).
- **Moonshot Kimi K3 en open weights** (~26/07): 2,8 T/104 B params, 1 M de contexte, « Kimi K3 License » (dépôt vérifié directement).
- **Mistral × Microsoft** (21/07): partenariat « IA souveraine » pour l’Europe régulée (cloud contrôlé, déploiements déconnectés).
- **DeepSeek:** alias `deepseek-chat`/`reasoner` dépréciés (24/07); phare = **V4 Flash/Pro**.
- **Sécurité:** incident Hugging Face divulgué le 16/07 (intrusion par agent autonome) — faire tourner les clés.
- **Correction:** OpenAI **GPT-5.6 (Sol/Terra/Luna)** GA au 09/07 (l’édition initiale indiquait GPT-5.5) — drapeau de vérification.
- **Frontière fin juillet 2026:** GPT-5.6, Claude Opus 5/Sonnet 5, Gemini 3.6 Flash, Grok 4.5, Mistral Medium 3.5/Large 3, Qwen 3.7-Max, GLM-5.2, Kimi K3, DeepSeek V4.
- Pour la Belgique, prix publics souvent en USD hors TVA. Conversions indicatives BCE ~28/07/2026: **1 EUR ≈ 1,1367 USD ≈ 7,70 CNY** (snapshot, ECB à confirmer). TVA belge standard: **21 %** (inchangé).
- **AI Act — 2 août 2026 imminent:** obligations de transparence de l’article 50 (divulgation IA, marquage des contenus générés, deepfakes) applicables; haut risque reporté à 2027-2028. Analyse informative, pas avis juridique.

## Lecture rapide

Pour un particulier belge, commencer par OpenAI, Google ou Mistral; ajouter Perplexity si la recherche sourcée domine. Pour le code, comparer GitHub Copilot, Cursor, Claude Code/Codex et Kimi Code sur un dépôt pilote. Pour une production européenne sensible, privilégier un contrat avec DPA, région UE, rétention documentée et évaluation interne; AWS, Azure, Google Cloud, Mistral et IBM offrent les contrôles les plus structurés selon le service choisi.

## Limites

La disponibilité de certaines offres chinoises en Belgique, la facturation EUR, la TVA au checkout et plusieurs durées de rétention ne sont pas publiées assez précisément: elles sont marquées **à confirmer**. Les prix sont des tarifs catalogue, hors remises. Aucun benchmark hétérogène n’est agrégé en classement numérique.
