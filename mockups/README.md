# Maquettes du portfolio

Fichiers HTML/CSS autonomes (ouvrir directement dans le navigateur ; les images et le CV sont lus via `../public/`).
Contenu repris du projet : textes de Home/About/Contact, 11 compétences de `skills.json`, 3 catégories de projets, liens LinkedIn/GitHub.

| Fichier | Direction |
|---|---|
| `maquette-1-clair-raffine.html` | Clair, bleu #2563eb (proche de l'actuel #3a86ff), cartes douces, police Inter |
| `maquette-2-sombre-aurore.html` | Sombre, halos vert/bleu (écho au fond Orb/Aurora), verre dépoli, Space Grotesk |
| `maquette-3-editorial-gamedev.html` | Éditorial type "neo-brutalist", orange, ombres franches, accents monospace (univers jeu vidéo) |

## Changements communs
- Hiérarchie : titre hero fluide (clamp), eyebrow, soulignement d'accent sous chaque h2.
- Une seule page structurée en sections, nav sticky avec burger mobile, lien d'évitement.
- Variables CSS (couleurs, rayons, ombres) : un seul endroit pour changer le thème.
- Barres de compétences en grille 2 colonnes, animées au scroll, avec rôle/aria.
- Cartes projets homogènes (image 16/10, tag, titre, description, lien) au lieu d'overlay noir.
- Formulaire : labels empilés, focus visible, cibles tactiles 44px.
- Animations légères (apparition au scroll, mot rotatif) désactivées avec `prefers-reduced-motion`.
- Contrastes AA, `:focus-visible`, responsive 360px et plus.

## Comment appliquer
1. Copier les variables `:root` de la maquette choisie dans `src/index.css` (et définir `body{background:var(--bg)}`).
2. Dans les composants styled-components, remplacer les couleurs en dur (#3a86ff, #f8f9fa, azure...) par `var(--ac)`, `var(--card)`, etc.
3. Reprendre les blocs CSS `.hero`, `.pcard`, `.skills`, `.form`, `nav` comme styled components (Header, ProjectCard, About, Contact).
4. Ajouter la police via Google Fonts dans `public/index.html`.
5. Supprimer le CSS global `button{...}` de `App.css` (il impacte tous les boutons) au profit de styles par composant.

## Images des catégories de projets (maquette 2)

La maquette 2 n'utilise plus les photos de `public/imgs` pour les 3 types de projets. Trois illustrations SVG originales, dessinées à la main (aucune ressource externe, fonctionne hors ligne), sont dans `mockups/images/` :

| Fichier | Thème |
|---|---|
| `images/projet-universitaire.svg` | fenêtre de code, toque universitaire, chevrons `< >` |
| `images/projet-game-jam.svg` | chronomètre "48h GAME JAM", pixels de jeu, éclair |
| `images/projet-personnel.svg` | fusée en orbite autour d'une planète, invite de terminal |

Style : fond #070b14, halos bleu (#38bdf8) et vert (#4ade80), traits en dégradé, panneaux translucides. Format 800x500 (16/10). Les images des projets individuels ne sont pas modifiées.

### Les réutiliser dans le vrai site
1. Copier les 3 SVG dans `public/imgs/` (par exemple `public/imgs/categories/`).
2. Dans `src/pages/Projects.js`, remplacer les URL `https://ThomL69.github.io/my-portfolio/imgs/university.jpg`, `gamejam.jpg` et `personnel.jpg` par `process.env.PUBLIC_URL + '/imgs/categories/projet-universitaire.svg'` (idem pour les deux autres).
3. Les SVG sont vectoriels : pas de flou sur écran HD, quelques Ko chacun. Le texte "48h" utilise Space Grotesk avec repli sur une police système (pour un rendu identique partout, convertir le texte en tracés ou exporter en PNG/WebP).
