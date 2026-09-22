# js-bases-dom — Bases de JavaScript (tableaux, DOM, manipulation de données)

*(TP1 de l'UE JavaScript)*

Premier TP de l'UE JavaScript : trois exercices indépendants en JavaScript "vanilla" (pas de build, pas de dépendances), à exécuter directement dans le navigateur.

## Structure du projet

```
tp1/
├── html/
│   ├── exercice1.html      # Exercice 1 & 2 : fonctions sur tableaux, map/filter
│   ├── murImages.html      # Exercice 3 : mur d'images filtrable
│   └── pays.html           # Exercice 4 : manipulation de données (pays)
├── scripts/
│   ├── exercice1.js
│   ├── murImages.js
│   └── pays.js
├── styles/
│   ├── exercices.css
│   └── murImages.css
├── data/
│   ├── dataImages.js       # données pour le mur d'images
│   └── dataPays.js         # données pour l'exercice pays
└── images/                 # images utilisées par le mur d'images
```

## Prérequis

Aucun. Pas de `package.json`, pas de Node.js nécessaire : ce sont de simples pages HTML avec du JavaScript classique.

## Comment lancer le projet

Il suffit d'ouvrir les fichiers HTML directement dans un navigateur (double-clic, ou `Fichier > Ouvrir`) :

- `html/exercice1.html`
- `html/murImages.html`
- `html/pays.html`

> 💡 Optionnel : si vous préférez servir les fichiers via un petit serveur local (plus proche des conditions réelles), vous pouvez utiliser par exemple l'extension **Live Server** de VS Code, ou lancer :
> ```bash
> npx serve .
> ```
> depuis le dossier `tp1/`.

Les résultats de chaque exercice s'affichent dans la **console du navigateur** :

```
Ctrl + Shift + K   (Firefox)
Ctrl + Shift + J   (Chrome)
```

## Contenu des exercices

- **`exercice1.html` / `exercice1.js`** — manipulation de tableaux avec les méthodes fonctionnelles de JavaScript (`map`, `filter`), écriture de fonctions fléchées, capitalisation de chaînes, décalage de points de code Unicode.
- **`murImages.html` / `murImages.js`** — génération dynamique d'un mur d'images à partir d'un jeu de données (`dataImages.js`), affichage d'un aperçu au survol, filtrage des images par texte saisi dans un champ.
- **`pays.html` / `pays.js`** — traitement d'un jeu de données de pays (`dataPays.js`) : formatage des nombres, calculs sur la population, tri et sélection des pays les plus peuplés.
