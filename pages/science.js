import { html, Nav, Footer, EvidenceBadge } from '../shared.js';

const entries = [
  {
    category: 'ACTIVATE · BUILD', title: 'Creatine Monohydrate', level: 'A',
    whatIsIt: 'A naturally occurring compound stored mostly in skeletal muscle, also available as a well-studied dietary supplement.',
    target: 'Skeletal muscle energy metabolism; secondary interest in brain energy metabolism.',
    mechanism: 'Increases phosphocreatine stores, supporting rapid ATP regeneration during short, high-intensity effort.',
    humanResearch: 'Decades of trials show consistent gains in strength, power output and lean mass when combined with resistance training, across young and older adults.',
    doesntProve: 'It does not establish an effect on lifespan, and cognitive benefits are less consistent than the muscular ones.',
    benefits: 'Improved strength and power; modest support for muscle mass, particularly alongside training.',
    risks: 'Generally well tolerated. Water retention is common; long-term high-dose safety data beyond several years is limited.',
    caution: 'People with pre-existing kidney disease should consult a clinician before use.',
    references: 'Reference list — to be added by editorial/clinical review.',
  },
  {
    category: 'ACTIVATE · MEASURE', title: 'Zone 2 Aerobic Exercise', level: 'A',
    whatIsIt: 'Sustained aerobic exercise performed at a low-to-moderate intensity, roughly the pace at which conversation is still possible.',
    target: 'Mitochondrial density and efficiency; cardiovascular and metabolic fitness.',
    mechanism: 'Sustained low-intensity effort favors fat oxidation and is associated with mitochondrial biogenesis and improved metabolic flexibility.',
    humanResearch: 'Strong, consistent evidence links regular aerobic training at this intensity to improved VO2 max, insulin sensitivity and cardiovascular outcomes.',
    doesntProve: 'It does not prove a specific mitochondrial mechanism is what drives the outcome in humans, only that the outcomes are well replicated.',
    benefits: 'Improved cardiovascular fitness, metabolic health, and exercise capacity with low injury risk.',
    risks: 'Low risk for most people; time investment is the main practical limitation.',
    caution: 'Those with uncontrolled cardiovascular conditions should get medical clearance before starting a new program.',
    references: 'Reference list — to be added by editorial/clinical review.',
  },
  {
    category: 'RESTORE', title: 'NAD+ Precursors (NMN / NR)', level: 'C',
    whatIsIt: 'Supplements intended to raise cellular NAD+ levels, a coenzyme involved in energy metabolism and DNA repair.',
    target: 'Cellular energy metabolism and pathways implicated in cellular aging.',
    mechanism: 'NAD+ declines with age in some tissues; raising precursor availability is proposed to support mitochondrial and repair enzyme activity.',
    humanResearch: 'Small human trials show NAD+ levels can be raised, with limited and mixed evidence on functional outcomes such as strength or metabolic markers.',
    doesntProve: 'Raising NAD+ levels has not been shown to extend human lifespan or reverse markers of aging.',
    benefits: 'Plausible metabolic support; specific functional benefits in humans remain unconfirmed.',
    risks: 'Short-term safety data looks reassuring; long-term human safety data is limited.',
    caution: 'Pregnant or breastfeeding people, and anyone on relevant medications, should wait for more data or consult a clinician.',
    references: 'Reference list — to be added by editorial/clinical review.',
  },
];
const upcoming = ['Time-restricted eating','Omega-3 fatty acids','Cold exposure','Senolytic compounds','Photobiomodulation','HRV & recovery tracking','Continuous glucose monitoring','Resistance training protocols'];

function Field({ label, value, accent }) {
  return html`
    <div>
      <p className=${'text-[11px] tracking-wider mb-1 ' + (accent ? 'text-accent' : 'text-muted')}>${label}</p>
      <p className="text-sm text-text/80">${value}</p>
    </div>
  `;
}

function App() {
  return html`
    <div>
      <${Nav} active="The Science" />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <p className="text-[11px] tracking-[0.14em] uppercase text-accent mb-3 font-semibold">The Science</p>
        <h1 className="font-display font-extrabold text-4xl mb-5">What we know. What we think. What's unknown.</h1>
        <p className="text-text/70 text-lg">Every intervention here is rated by the strength of its human evidence. We separate what's established from what's emerging, and what's emerging from what's speculative — that distinction is where the credibility of this library comes from.</p>
      </section>
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="bg-surface border border-border rounded-lg p-6 flex flex-wrap gap-3">
          <${EvidenceBadge} level="A" /><${EvidenceBadge} level="B" /><${EvidenceBadge} level="C" /><${EvidenceBadge} level="D" /><${EvidenceBadge} level="NOT_SUPPORTED" />
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 pb-20 flex flex-col gap-8">
        ${entries.map(e => html`
          <article key=${e.title} className="bg-surface border border-border rounded-lg p-7">
            <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
              <div>
                <p className="text-[11px] text-muted mb-1">${e.category}</p>
                <h2 className="font-display font-bold text-2xl">${e.title}</h2>
              </div>
              <${EvidenceBadge} level=${e.level} />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <${Field} label="WHAT IS IT?" value=${e.whatIsIt} accent=${true} />
                <${Field} label="WHAT DOES IT TARGET?" value=${e.target} accent=${true} />
                <${Field} label="PROPOSED MECHANISM" value=${e.mechanism} accent=${true} />
                <${Field} label="WHAT DOES HUMAN RESEARCH SHOW?" value=${e.humanResearch} accent=${true} />
                <${Field} label="WHAT DOESN'T IT PROVE?" value=${e.doesntProve} accent=${true} />
              </div>
              <div className="flex flex-col gap-4">
                <${Field} label="POTENTIAL BENEFITS" value=${e.benefits} />
                <${Field} label="RISKS / LIMITATIONS" value=${e.risks} />
                <${Field} label="WHO SHOULD BE CAUTIOUS?" value=${e.caution} />
                <div><p className="text-[11px] text-muted mb-1">REFERENCES</p><p className="text-xs italic text-text/50">${e.references}</p></div>
              </div>
            </div>
          </article>
        `)}
      </section>
      <section className="bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-xl mb-2">More entries are on the way</h2>
          <p className="text-text/60 max-w-lg mb-6">The library grows to cover every stage of the Method and every system in the biology map.</p>
          <div className="grid sm:grid-cols-4 gap-3">
            ${upcoming.map(u => html`<div key=${u} className="border border-dashed border-border rounded-lg px-4 py-3 opacity-60"><p className="text-sm">${u}</p></div>`)}
          </div>
        </div>
      </section>
      <${Footer} />
    </div>
  `;
}
ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);
