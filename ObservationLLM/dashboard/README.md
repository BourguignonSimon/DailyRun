# Dashboard de l’observatoire

Ce dossier contient le tableau de bord statique publié par GitHub Pages.

## Contrat de données

- `data/latest.json` représente uniquement le dernier run terminé et validé.
- `data/run-status.json` décrit l’état du run courant ou du dernier run.
- Les deux fichiers utilisent UTF-8 et doivent rester des JSON valides.
- `latest.json` n’est remplacé qu’après la validation de tous les livrables Markdown.

Le dashboard peut être ouvert avec n’importe quel serveur HTTP statique. Une ouverture directe en `file://` ne permet généralement pas à JavaScript de charger les fichiers JSON.

## États de run

`run-status.json` accepte les valeurs `running`, `completed` et `failed`. Pendant un run local, le dashboard actualise ce fichier toutes les 30 secondes. Sur GitHub Pages, les changements deviennent visibles après leur commit, leur push et le déploiement Pages.
