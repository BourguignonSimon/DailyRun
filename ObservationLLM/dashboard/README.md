# Dashboard de l’observatoire

Ce dossier contient le tableau de bord statique publié par GitHub Pages.

## Contrat de données

- `data/latest.json` représente uniquement le dernier run terminé et validé.
- `data/run-status.json` décrit l’état du run courant ou du dernier run.
- `data/research-cadence.json` coordonne les cinq lignes de temps dans l’unique run quotidien et conserve leurs échéances.
- `data/source-registry.json` contient les sources de référence, leur portée et leur indice de confiance.
- `data/announcements.json` contient les annonces principales, leurs signaux de détection, leurs preuves et une note de confiance expliquée.
- `data/tools-catalog.json` contient exactement 100 outils IA majeurs, leur catégorie, leur source officielle et leur dernière nouveauté qualifiée lorsqu’elle existe.
- `data/formations.json` contient le catalogue contrôlé des formations gratuites ou accessibles sans paiement et les signaux de nouveauté des grands acteurs.
- `data/use-case-recommendations.json` contient les recommandations par usage, les types de produits, les limites, les prix repères et les sources associées.
- Tous les fichiers de données utilisent UTF-8 et doivent rester des JSON valides.
- `latest.json` n’est remplacé qu’après la validation de tous les livrables Markdown.

Le dashboard peut être ouvert avec n’importe quel serveur HTTP statique. Une ouverture directe en `file://` ne permet généralement pas à JavaScript de charger les fichiers JSON.

## Génération des pages de contenu

`build-content.mjs` transforme les livrables Markdown courants en pages HTML et copie le dashboard dans un dossier de publication. La page d’accueil reste courte et dirige vers des vues dédiées : choix par usage, actualités, outils, localisation, exécution locale et sources. L’ancien tableau de bord exhaustif reste disponible comme **mode expert** dans `explorer.html`. L’historique éditorial reste dans Git et n’est pas exposé comme contenu courant. Le générateur utilise uniquement Node.js, sans dépendance externe. Le workflow GitHub Pages exécute automatiquement cette génération avant le déploiement.

Exemple local :

```powershell
node ObservationLLM/dashboard/build-content.mjs "$env:TEMP\observation-llm-site"
```

## États de run

`run-status.json` accepte les valeurs `running`, `completed` et `failed`. Pendant un run local, le dashboard actualise ce fichier toutes les 30 secondes. Sur GitHub Pages, les changements deviennent visibles après leur commit, leur push et le déploiement Pages.

## Cadences de recherche

`research-cadence.json` contient une ligne quotidienne, trois lignes hebdomadaires et une ligne événementielle. Les revues hebdomadaires sont dues au premier run réussi de la semaine ISO et sont rattrapées au prochain run en cas d’échec. Une annonce importante déclenche sa vérification complète dans le même run quotidien : aucun cron supplémentaire n’est créé.
