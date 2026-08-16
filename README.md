# Better, Longer — no-build static site

Pure HTML + React (CDN) + Tailwind (CDN) + native ES modules. No npm, no build step, no Babel/eval — JSX is written with `htm` tagged templates instead.

## Run it
Serve the folder with any static file server or host it directly (GitHub Pages, Netlify, etc). Needs to be served over http(s) — native ES modules (`type="module"`) don't reliably load via a plain double-clicked `file://` path in every browser.

## Trade-offs vs the npm/Vite version
- Tailwind compiles classes live in the browser (larger, slower than a production build).
- Each page is its own HTML file with plain <a> links between them (no client-side router).
- Shared components (Nav, Footer, EvidenceBadge) live in shared.js, imported as an ES module by each page script in pages/.

Not recommended as the long-term production setup — good for zero-tooling hosting or a quick static preview.