import { html, Nav, Footer } from '../shared.js';

const categories = [
  ['Lifestyle', 'Established', 'Sleep, nutrition, exercise, recovery and stress management — the foundation everything else builds on.'],
  ['Nutrients', 'Mostly established', 'Vitamins, minerals, omega-3s, creatine, CoQ10 and other well-studied nutrients.'],
  ['Compounds', 'Mixed evidence', 'Polyphenols, NAD-related interventions, and other emerging compounds under active study.'],
  ['Peptides', 'Early evidence', 'Signaling molecules explored for tissue repair and regeneration.'],
  ['Light', 'Early evidence', 'Photobiomodulation and related light-based approaches.'],
  ['Sound / Ultrasound', 'Early evidence', 'Acoustic and ultrasound signals studied for tissue and nervous-system effects.'],
  ['Electromagnetic', 'Experimental', 'Electromagnetic field technologies, an active and still-young research area.'],
  ['Regenerative Medicine', 'Mixed evidence', 'Stem-cell research, tissue engineering and related emerging therapies.'],
  ['Diagnostics', 'Established', 'Laboratory biomarkers and biological-age measurements that make the rest measurable.'],
];

function App() {
  return html`
    <div>
      <${Nav} active="The Toolbox" />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <p className="text-[11px] tracking-[0.14em] uppercase text-accent mb-3 font-semibold">The Toolbox</p>
        <h1 className="font-display font-extrabold text-4xl mb-5">Every category of intervention, one evidence standard.</h1>
        <p className="text-text/70 text-lg">From lifestyle basics to regenerative medicine, everything here will eventually carry the same evidence template found in The Science.</p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          ${categories.map(([name, range, desc]) => html`
            <div key=${name} className="bg-surface border border-border rounded-lg p-6">
              <p className="text-[11px] text-accent mb-2">${range}</p>
              <p className="font-display font-bold text-lg mb-2">${name}</p>
              <p className="text-sm text-text/60">${desc}</p>
            </div>
          `)}
        </div>
      </section>
      <${Footer} />
    </div>
  `;
}
ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);
