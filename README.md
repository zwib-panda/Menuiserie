# Book

Site statique, sans dépendance. Ouvre `index.html` dans un navigateur pour le voir.

## Personnaliser
- Ouvre `script.js` : la zone en haut contient ton nom, ta ligne de présentation, ton contact et la liste des pièces.
- Dépose tes photos dans `images/` et mets leur nom dans la liste (`01-a.jpg`, `01-b.jpg`, ...).
- Une seule photo pour une pièce : supprime la deuxième dans `photos: [...]`.
- Pour ajouter ou retirer une pièce, ajoute ou supprime une ligne dans `PIECES`.
- Couleurs : variables en haut de `style.css`.

## Mettre en ligne avec GitHub Pages
1. Crée un dépôt GitHub (public) et envoie-y tous ces fichiers à la racine.
2. Dépôt > Settings > Pages > Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site est en ligne après une minute, à l'adresse `https://ton-compte.github.io/nom-du-depot/`.

Conseil : redimensionne les photos à environ 1600 px de large (JPG) avant de les ajouter.
