# Portfolio - Thomas Lieghio

Portfolio personnel présentant mon profil, mes compétences et mes projets (universitaires, game jams, personnels).
Site en ligne : https://ThomL69.github.io/my-portfolio

## Technologies

- React 19 (Create React App) et React Router
- styled-components, Bootstrap 4 (CDN) et Tailwind (CDN)
- motion (animations), ogl (fond WebGL "Orb")
- Formspree pour le formulaire de contact

## Structure

- `src/pages` : pages (Accueil, À propos, Projets, Contact, listes de projets)
- `src/components` : Header, Footer, cartes et modal de projet, fonds animés
- `src/data` : données des projets et des compétences (fichiers JSON)
- `public` : images, CV (`docs/cv.pdf`), `index.html`, manifest

## Scripts

- `npm start` : serveur de développement sur http://localhost:3000
- `npm run build` : build de production dans `build/`
- `npm test` : lance les tests
- `npm run deploy` : build puis publication sur GitHub Pages (`gh-pages`)

## Ajouter un projet

Ajouter une entrée dans le fichier JSON correspondant de `src/data` (`id`, `title`, `description`,
`description_modal`, `imageCard`, `technologies`, et optionnellement `image`, `images`, `videos`, `link`, `codeLink`).
