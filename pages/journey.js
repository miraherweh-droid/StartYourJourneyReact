import { html, Nav, Footer } from '../shared.js';

const levels = [
  { num: '01', title: 'Foundation', subtitle: 'For almost everyone', desc: 'Build the fundamentals: sleep, nutrition, movement, strength, cardiovascular health, recovery and body awareness, with appropriate baseline testing.', topics: ['Sleep','Nutrition','Movement','Strength','Recovery','Baseline testing'] },
  { num: '02', title: 'Optimization', subtitle: 'Improve what already works', desc: 'Personalized nutrition, targeted supplementation, advanced training and recovery strategies, guided by biomarker tracking.', topics: ['Personalized nutrition','Advanced training','Biomarker tracking','Recovery strategies'] },
  { num: '03', title: 'Regeneration', subtitle: 'The frontier — clearly labeled', desc: 'Peptides, regenerative medicine, advanced diagnostics and epigenetics. Established science and experimental science are always distinguished.', topics: ['Peptides','Regenerative medicine','Epigenetics','Advanced diagnostics'] },
];
const quarters = [
  { months: 'MONTHS 1–3', title: 'Foundation', desc: 'Understand and stabilize.' },
  { months: 'MONTHS 4–6', title: 'Build', desc: 'Increase capacity.' },
  { months: 'MONTHS 7–9', title: 'Maintain / Repair', desc: 'Cellular maintenance and resilience.' },
  { months: 'MONTHS 10–12', title: 'Restore / Integrate', desc: 'Evaluate, personalize, prepare the next cycle.' },
];

function App() {
  return html`
    <div>
      <${Nav} active="Your Journey" />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <p className="text-[11px] tracking-[0.14em] uppercase text-accent mb-3 font-semibold">Your Journey</p>
        <h1 className="font-display font-extrabold text-4xl mb-5">Three levels. One lifelong program.</h1>
        <p className="text-text/70 text-lg">You don't have to arrive with advanced biomarkers or an interest in the frontier. Start with the fundamentals — the rest follows as your biology and goals change.</p>
      </section>
      <section className="max-w-5xl mx-auto px-6 pb-20 flex flex-col gap-6">
        ${levels.map(lv => html`
          <div key=${lv.num} className="bg-surface border border-border rounded-lg p-7 flex flex-wrap gap-6">
            <div className="min-w-[180px]">
              <p className="text-[11px] text-accent mb-1">${lv.num}</p>
              <p className="font-display font-bold text-2xl">${lv.title}</p>
              <p className="text-xs text-muted mt-1">${lv.subtitle}</p>
            </div>
            <div className="flex-1 min-w-[240px]">
              <p className="text-sm text-text/70 mb-3">${lv.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                ${lv.topics.map(t => html`<span key=${t} className="text-[11px] border border-accent/40 text-accent rounded-full px-3 py-1">${t}</span>`)}
              </div>
            </div>
          </div>
        `)}
      </section>
      <section className="bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-2xl mb-2">The first cycle: roughly one year</h2>
          <p className="text-text/60 max-w-lg mb-8">Not a 12-week transformation. A structured first year, followed by cycles that evolve with your biology.</p>
          <div className="grid sm:grid-cols-4 gap-4">
            ${quarters.map(q => html`
              <div key=${q.months} className="bg-surface2 border border-border rounded-lg p-4">
                <p className="text-[11px] text-accent mb-1">${q.months}</p>
                <p className="font-display font-bold mb-1">${q.title}</p>
                <p className="text-xs text-text/60">${q.desc}</p>
              </div>
            `)}
          </div>
          <p className="mt-8 text-sm italic text-text/60">Your biology changes. Your program should change with it — Year 2 adapts, it doesn't repeat.</p>
        </div>
      </section>
      <${Footer} />
    </div>
  `;
}
ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);
