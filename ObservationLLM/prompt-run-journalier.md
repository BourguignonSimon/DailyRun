Mets à jour quotidiennement l’Observatoire des LLM et agents IA pour un particulier ou développeur résidant en Belgique.

Dépôt obligatoire : https://github.com/BourguignonSimon/DailyRun
Dossier de publication unique : ObservationLLM

Au début du run, place explicitement toutes les commandes dans le checkout de ce dépôt. Synchronise la branche principale, crée ou réutilise la branche dédiée au run et lis les livrables existants avant toute modification. Lis et modifie uniquement les livrables de ObservationLLM et les fichiers GitHub Pages ou GitHub Actions strictement nécessaires à leur publication. N’écris ailleurs que des fichiers temporaires indispensables à la génération ou à la vérification. Ne crée aucun autre dossier outputs.

## Périmètre courant

1. Repars de zéro sur la recherche factuelle à chaque run et publie l’état actuellement vérifié de tous les écosystèmes LLM, API, assistants de code, agents, orchestrateurs, distributeurs, hébergeurs et plateformes suffisamment importants ou pertinents. Aucun plafond fixe, notamment pas de limite de 20 acteurs.
2. Distingue explicitement modèle, application, plateforme API, assistant de code, agent autonome, orchestrateur, distributeur et hébergeur afin d’éviter les comparaisons trompeuses.
3. Adopte le point de vue belge : disponibilité en Belgique, français et néerlandais, devise de facturation lorsqu’elle est publiée et limitations géographiques. Ne recherche, n’affiche et ne commente pas le taux de TVA belge.

## Cadences de recherche dans le run unique

A. Conserve une seule automatisation quotidienne. Toutes les lignes de temps ci-dessous sont des phases du même run, jamais des crons, tâches ou PR séparés. Utilise le fuseau `Europe/Brussels` et une semaine ISO commençant le lundi.
B. Ligne **Temps réel — chaque jour** : contrôle X, RSS, annonces officielles, incidents, sorties et retraits à chaque run.
C. Ligne **Opérationnelle — chaque semaine** : contrôle prix, API, modèles, outils, disponibilité belge et régions au premier run quotidien réussi de chaque semaine ISO. Si ce run échoue ou n’a pas lieu, effectue la revue au prochain run disponible.
D. Ligne **Approfondie — chaque semaine** : contrôle sécurité, confidentialité, DPA, benchmarks, bonnes pratiques et modèles locaux selon la même règle hebdomadaire avec rattrapage.
E. Ligne **Structurelle — chaque semaine** : réévalue sélection des écosystèmes, classement des 100 outils, méthodologie et sources de confiance selon la même règle hebdomadaire avec rattrapage.
F. Ligne **Événementielle — dès détection** : lorsqu’une annonce importante est détectée pendant la veille quotidienne, effectue dans ce même run une vérification complète des faits et de tous les impacts concernés, sans attendre la revue hebdomadaire et sans déclencher une seconde exécution.
G. Une annonce est importante si elle a un impact matériel sur un lancement ou retrait, un prix, une API, une région, la sécurité, la confidentialité, une licence, une compatibilité ou un incident, avec un signal initial d’au moins 75/100 ou une preuve primaire directe. La publication certaine respecte toujours le barème de confiance général.
H. Maintiens `dashboard/data/research-cadence.json`. Pour chaque ligne, conserve le périmètre, le déclencheur, la dernière exécution réussie, la prochaine échéance et le statut `current`, `due`, `overdue`, `running`, `failed` ou `armed`. Calcule les échéances à chaque run et rattrape toute revue échue avant publication.

## Recherche, fraîcheur et confiance

4. Vérifie sur le web chaque fait susceptible de changer. Privilégie documentation, pages tarifaires, cartes modèles, dépôts, politiques, changelogs, statuts de service, publications de recherche et communiqués officiels.
5. Surveille aussi les signaux rapides : comptes X officiels, blogs, RSS/Atom, GitHub Releases, dépôts Hugging Face et comptes publics identifiés des équipes. Le référentiel commun inclut notamment @OpenAI, @AnthropicAI, @GoogleDeepMind, @AIatMeta, @MistralAI, @nvidia, @Alibaba_Qwen, @huggingface et @ghchangelog. Un post social sert d’abord de signal, pas de preuve contractuelle.
6. Consulte obligatoirement à chaque run les six points d’entrée suivants :
   - TLDR AI : construis le numéro du jour avec `https://tldr.tech/ai/YYYY-MM-DD`; utilise `https://tldr.tech/ai/` comme repli si aucun numéro n’existe pour la date ;
   - TechCrunch AI : `https://techcrunch.com/category/artificial-intelligence/` ;
   - VentureBeat AI : `https://venturebeat.com/category/ai/` ;
   - TestingCatalog : `https://www.testingcatalog.com/` ;
   - AI Frontiers Newsletter : `https://newsletter.ai-frontiers.org/`, avec le site canonique `https://ai-frontiers.org/` si redirection ;
   - NVIDIA Research : `https://research.nvidia.com/`.
7. TLDR AI, TechCrunch, VentureBeat et AI Frontiers sont des sources secondaires de découverte ou de contexte. TestingCatalog est un signal précoce : toute fuite, fonctionnalité en préparation ou rumeur reste « à confirmer » jusqu’à corroboration officielle. NVIDIA Research est une source primaire pour les travaux de NVIDIA, mais ses performances restent des résultats fournisseur tant qu’elles ne sont pas reproduites indépendamment.
8. Pour chaque sujet retenu depuis une source secondaire, ouvre l’article exact puis remonte à la publication, au dépôt, au changelog, à la documentation ou à la politique d’origine. Enregistre l’URL exacte de l’article et celle de la preuve primaire ; ne cite pas seulement la page d’accueil.
9. Pour chaque annonce importante, conserve : titre, acteur, catégorie, date et heure publiées, URL exacte du post ou de l’annonce, compte auteur, statut officiel du compte, résumé, preuve durable associée, date de consultation, réserve et note de confiance sur 100 avec justification.
10. Barème minimal : 90–100 si une source primaire durable confirme le signal ; 75–89 pour un compte officiel ou une presse solide sans documentation complète ; 60–74 pour un membre identifié, une newsletter analytique ou un signal secondaire utile ; moins de 60 = piste non publiée comme fait certain. Un repost, une rumeur ou un compte non authentifié est marqué « à confirmer ».
11. Actualise et déduplique referentiel-sources.md et dashboard/data/source-registry.json avec URL de base, éventuel modèle d’URL, acteur, nature, rôle, sujets, accessibilité, dernière vérification, indice et justification. Actualise dashboard/data/announcements.json avec les annonces principales. Ne conserve pas une annonce obsolète dans la vue courante.
12. Pour chaque fait, conserve l’URL exacte, la date de consultation et la date de publication ou de mise à jour si connue. Utilise « non publié », « non disponible en Belgique », « source inaccessible » ou « à confirmer » plutôt que d’inventer.
13. Sépare capacités déclarées par le fournisseur et mesures indépendantes. Ne rapproche pas de benchmarks incompatibles ; indique modèle, version, date, protocole et limites. Pour les monnaies, conserve prix et devise d’origine, estimation EUR, taux et date de référence, sans analyse de TVA.

## Localisation, sécurité et confidentialité

14. Maintiens localisation-modeles.md et la vue dashboard correspondante : développeur, modèle, distributeur, hébergeur réel, API directe, cloud partenaire ou self-host, régions disponibles, disponibilité belge, résidence de l’inférence, du stockage et des journaux, ainsi que le niveau de confiance. Vérifie le modèle et l’endpoint, pas seulement le cloud.
15. Analyse utilisation des données pour l’entraînement, refus, rétention, chiffrement, DPA, résidence, certifications, incidents publics et contrôles d’entreprise. RGPD et AI Act restent informatifs et ne constituent jamais un avis juridique.

## Développement et exécution locale

16. Compare offres et modèles, prix particuliers et API, contexte, modalités, raisonnement et code, outils, recherche web, mémoire, RAG, sorties structurées, agents, orchestration, SDK, open weights, personnalisation, latence ou classes de service, cache, batch, streaming et limites de débit.
17. Maintiens bonnes-pratiques-developpement.md : recommandations officielles par fournisseur, consensus transversal, checklist de production, évaluations, observabilité, secrets, garde-fous, résilience, coûts et verrouillage. Distingue recommandation officielle, pratique largement admise et déduction analytique.
18. Maintiens modeles-locaux-par-hardware.md pour Raspberry Pi 5 4 Go, RTX 3060 12 Go avec 64 Go RAM, CPU 8/16/32/64 Go, mini-PC 16/32 Go, Apple Silicon 16/32 Go et GPU 8/16/24 Go. Indique version exacte, paramètres, dense ou MoE, quantification, taille, RAM/VRAM, contexte réaliste et cache KV, vitesse sourcée, FR/NL, licence, moteur, offload et modèles à éviter.

## Recommandations par type d’utilisation

19. Maintiens `recommandations-modeles-par-usage.md` et `dashboard/data/use-case-recommendations.json`. Couvre au minimum : conversation et rédaction FR/NL, recherche web, raisonnement complexe, programmation, agent de code, RAG documentaire, appels d’outils et agents métier, vision et documents multimodaux, voix et audio, usage local, confidentialité ou résidence européenne, faible coût et batch.
20. Pour chaque usage, propose une courte liste de un à trois produits et explicite l’angle de chaque proposition : meilleur résultat, qualité-prix, intégration, local/confidentiel ou faible coût. Distingue toujours modèle, application, plateforme API, assistant de code et agent autonome.
21. Pour chaque produit recommandé, conserve fournisseur, type, canal d’accès, disponibilité belge, FR/NL, modalités, contexte, prix et unité en devise d’origine, déploiement, localisation, confidentialité, niveau de confiance, statut de vérification, limite et URL de preuve exacte. Utilise « à confirmer » lorsque le dernier run n’a pas permis de revérifier le fait.
22. Une recommandation n’est jamais fondée sur un benchmark isolé ou incompatible. Croise adéquation fonctionnelle, disponibilité européenne, coût total, confidentialité, maturité et qualité mesurée. Demande implicitement une évaluation sur les tâches réelles avant tout engagement et actualise toute recommandation dès qu’un retrait, un changement de prix, de licence, de région ou de version l’affecte.

## Run unique et catalogue des 100 outils

23. Cette automatisation est l’unique run de l’observatoire. Ne crée, ne déclenche et ne propose aucune seconde automatisation, aucun second cron et aucun run séparé pour les modèles, les annonces, les sources, la localisation ou les outils. Réalise toutes les recherches et mises à jour dans cette même exécution consolidée.
24. Maintiens exactement 100 outils majeurs dans outils-ecosysteme-ia.md et dashboard/data/tools-catalog.json. La limite de 100 concerne seulement ce catalogue d’outils ; elle ne réintroduit aucun plafond pour les écosystèmes LLM suivis ailleurs. Réévalue la sélection à chaque run selon adoption, influence développeur, maturité, portée fonctionnelle, intégrations et pertinence européenne.
25. Pour chacun des 100 outils, actualise lastCheckedAt ou verificationStatus et recherche les nouveautés importantes : lancement ou retrait, changement d’éditeur, version majeure, agent ou modèle ajouté, prix, licence, API, intégration, région, confidentialité, incident, rupture de compatibilité ou dépréciation.
26. Toute nouveauté retenue contient title, publishedAt, sourceUrl exacte, confidence, confidenceReason, belgiumImpact et lastCheckedAt. Relie-la aux annonces et sources existantes sans doublon. En l’absence de nouveauté, ne fabrique aucun récit : actualise seulement le statut de contrôle.

## Livrables, état courant et dashboard public

27. Mets à jour README.md, synthese.md, comparatif.md, analyse-detaillee.md, recommandations-modeles-par-usage.md, bonnes-pratiques-developpement.md, modeles-locaux-par-hardware.md, localisation-modeles.md, referentiel-sources.md, outils-ecosysteme-ia.md, sources.md, dashboard/data/latest.json, dashboard/data/run-status.json, dashboard/data/research-cadence.json, dashboard/data/source-registry.json, dashboard/data/announcements.json, dashboard/data/tools-catalog.json et dashboard/data/use-case-recommendations.json.
28. Les fichiers courants décrivent uniquement le dernier état vérifié. Git assure seul l’historique : ne publie aucune section narrative « changements depuis le run précédent », aucune liste d’entrées ou sorties et aucun historique dans le dashboard ou les rapports courants.
29. Mets à jour le statut de chaque entité à chaque run, y compris « non revérifié » ou « source inaccessible ». Si aucun fait significatif n’est trouvé, renouvelle quand même les dates, statuts et preuves et indique « aucun changement significatif » uniquement dans le compte rendu du run, pas dans le contenu courant.
30. Le dashboard public ouvre sur une page d’accueil courte orientée tâches. Il fournit des pages dédiées pour le choix par type d’utilisation, les actualités, les 100 outils, la localisation, les modèles locaux et les sources, ainsi qu’un mode expert exhaustif. Toutes les vues utilisent le dernier run validé, des liens accessibles sans connexion GitHub, une navigation cohérente, des filtres utilisables au clavier, un libellé de confiance et les limites de vérification.
31. Lorsqu’un post d’un compte X officiel obtient une note d’annonce d’au moins 90/100 grâce à une corroboration primaire durable, marque le compte dans dashboard/data/source-registry.json avec trustedDaily=true, role="Veille quotidienne prioritaire", promotionEvidence et trustBasis. Cette promotion augmente la priorité de surveillance, jamais la véracité automatique des futurs posts. Retire-la si les critères ne sont plus remplis.

## Intégrité et validation

32. Au début du run, écris dashboard/data/run-status.json avec status="running", startedAt et runId. Écris les JSON par remplacement atomique dans leur dossier final ; ne laisse jamais un fichier partiel. Ne remplace dashboard/data/latest.json qu’après validation de tous les livrables. Termine avec status="completed" et completedAt, ou status="failed", failedAt et un message exploitable si la publication ne peut pas être finalisée.
33. Préserve les schémas JSON existants et vérifie JSON, JavaScript, liens, génération GitHub Pages, nombre exact de 100 outils, exactement douze usages recommandés avec des références produits valides, un seul H1 et un lien canonique par page publique, et le rendu des livrables selon les workflows disponibles. Corrige toute erreur avant publication.

## Publication GitHub obligatoire

34. Ne pousse jamais directement sur la branche principale. Utilise une branche dédiée au run, de préférence `automation/observatoire-YYYY-MM-DD`; si une PR ouverte existe déjà pour ce même run et cette même branche, mets-la à jour au lieu d’en créer une seconde.
35. Après validation, crée un commit limité aux fichiers de l’observatoire et aux fichiers de publication nécessaires, pousse la branche et crée ou mets à jour exactement une pull request vers la branche principale. La PR est obligatoire pour qu’un run soit considéré terminé. N’effectue ni fusion automatique, ni force-push, ni contournement des protections de branche.
36. Lance ou consulte les contrôles GitHub disponibles. Termine par un compte rendu bref indiquant la date, la couverture, les annonces principales avec confiance, les fichiers mis à jour, les sources inaccessibles, les décisions humaines nécessaires, la branche, le commit, l’URL de la PR et l’état des contrôles. Si le commit, le push ou la PR échoue, marque le run en échec et explique précisément le blocage.
