# Better, Longer — no-build static site

Pure HTML + React (CDN) + Tailwind (CDN) + in-browser Babel. No npm, no build step.

## Run it
Just open index.html in a browser, or serve the folder with any static file server / host it directly (GitHub Pages, Netlify drag-and-drop, etc). No install step needed.

## Trade-offs vs the npm/Vite version
- Tailwind compiles classes live in the browser (larger, slower than a production build).
- JSX is compiled by Babel in the browser on every page load (no bundling, no minification).
- Each page is its own HTML file with plain <a> links between them (no client-side router).
- Shared components (Nav, Footer, EvidenceBadge) are loaded as global scripts before each page's own script.

Not recommended as the long-term production setup — good for zero-tooling hosting or a quick static preview.