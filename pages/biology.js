import { html, Nav, Footer } from '../shared.js';

const systems = [
  ['Brain', 'Cognition, memory and processing speed across the lifespan.'],
  ['Nervous System', 'Signaling, reflexes and the mind-body connection.'],
  ['Mitochondria', 'Cellular energy production — a core biological pillar.'],
  ['Heart & Vascular', 'Circulation, blood pressure and cardiovascular capacity.'],
  ['Muscle', 'Strength, power and the reserve that protects independence.'],
  ['Bone', 'Structural integrity and fracture resistance.'],
  ['Metabolism', 'Energy balance, insulin sensitivity and metabolic flexibility.'],
  ['Immune System', 'Defense against pathogens and internal repair signaling.'],
  ['Skin', "The body's barrier, and a visible marker of biological age."],
  ['Connective Tissue', "Tendons, ligaments and cartilage — mobility's foundation."],
  ['Digestive System', 'Nutrient absorption and the gut-wide signaling network.'],
  ['Sleep & Circadian', 'The system underneath nearly every other system.'],
];

function App() {
  return html`
    <div>
      <${Nav} active="Your Biology" />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <p className="text-[11px] tracking-[0.14em] uppercase text-accent mb-3 font-semibold">Your Biology</p>
        <h1 className="font-display font-extrabold text-4xl mb-5">Twelve systems. One body.</h1>
        <p className="text-text/70 text-lg">Every system here will eventually open into its own page — what it does, how it changes with age, what protects it, and what the science says. For now, an overview.</p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${systems.map(([name, desc]) => html`
            <div key=${name} className="bg-surface border border-border rounded-lg p-5">
              <div className="w-11 h-11 rounded-full bg-surface2 border border-border flex items-center justify-center text-accent font-display text-xs mb-3">${name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
              <p className="font-display font-bold mb-1">${name}</p>
              <p className="text-sm text-text/60">${desc}</p>
            </div>
          `)}
        </div>
      </section>
      <section className="bg-surface border-y border-border">
        <div className="max-w-xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display font-bold text-xl mb-3">Detailed system pages are coming</h2>
          <p className="text-text/60">Each system will map to what protects it, what can improve it, what can be measured, and what science is investigating — with an evidence level on every claim.</p>
        </div>
      </section>
      <${Footer} />
    </div>
  `;
}
ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);
