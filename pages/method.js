import { html, Nav, Footer } from '../shared.js';

const data = [
  ['KNOW', 'You cannot optimize what you cannot understand or measure.', 'Understand your biology across the systems that determine how you function.', ['Sleep','Nutrition','Metabolism','Cardiovascular','Brain','Biomarkers']],
  ['ACTIVATE', 'Support the cellular energy your body runs on.', 'Mitochondrial function and metabolic flexibility, built through exercise, nutrition and sleep — not shortcuts.', ['Mitochondrial function','Metabolic flexibility','Exercise','Oxygen utilization']],
  ['BUILD', 'A strong body has more reserve when life gets difficult.', 'Increase biological reserve — muscle, bone, cardiovascular fitness, mobility and cognitive resilience.', ['Muscle','Bone','Cardio fitness','Balance','Cognitive reserve']],
  ['CLEANSE', 'Repair, recycle, clear, maintain.', 'Support the biology of cellular maintenance — not a simplistic detox, but genuine repair processes.', ['Autophagy','Proteostasis','Mitophagy','Senescent-cell biology']],
  ['RESTORE', 'Every intervention is treated by its evidence level.', 'Explore biological repair and regeneration, from established therapies to emerging research.', ['Tissue repair','Peptides','Regenerative medicine','Epigenetics']],
  ['ADAPT', 'Controlled stress can produce adaptation.', 'The biology of resilience — hormesis, recovery and challenge, applied deliberately rather than for trend.', ['Exercise','Recovery','Thermal exposure','Hormesis']],
  ['MEASURE', 'Track what actually changes.', 'Close the loop: measure sleep, strength, fitness, cognition and biomarkers, then feed it back into the cycle.', ['Sleep','Strength','Cognition','Biomarkers','Biological age']],
];

function App() {
  return html`
    <div>
      <${Nav} active="The Method" />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <p className="text-[11px] tracking-[0.14em] uppercase text-accent mb-3 font-semibold">The Method</p>
        <h1 className="font-display font-extrabold text-4xl mb-5">Know. Activate. Build. Cleanse. Restore. Adapt. Measure.</h1>
        <p className="text-text/70 text-lg">Seven stages that repeat across a lifetime — not a program you finish, but a cycle your biology moves through as it changes.</p>
      </section>
      <section className="max-w-5xl mx-auto px-6 pb-20 flex flex-col gap-4">
        ${data.map(([name, principle, desc, topics], i) => html`
          <div key=${name} className="bg-surface border border-border rounded-lg p-6 flex flex-wrap gap-6">
            <div className="min-w-[140px]">
              <p className="text-[11px] tracking-wider text-muted mb-1">STAGE ${String(i+1).padStart(2,'0')}</p>
              <p className="font-display font-bold text-xl text-accent">${name}</p>
            </div>
            <div className="flex-1 min-w-[240px]">
              <p className="font-semibold mb-2">${principle}</p>
              <p className="text-sm text-text/60 mb-3">${desc}</p>
              <div className="flex flex-wrap gap-1.5">
                ${topics.map(t => html`<span key=${t} className="text-[11px] bg-surface2 border border-border rounded-full px-3 py-1 text-text/70">${t}</span>`)}
              </div>
            </div>
          </div>
        `)}
      </section>
      <section className="bg-surface border-y border-border">
        <div className="max-w-xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display font-bold text-2xl mb-3">Measure → Learn → Adapt → Repeat</h2>
          <p className="text-text/60">This cycle is the engine of the entire platform — and, eventually, the foundation of your personal biological dashboard.</p>
        </div>
      </section>
      <${Footer} />
    </div>
  `;
}
ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);
