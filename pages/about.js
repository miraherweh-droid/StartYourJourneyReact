import { html, Nav, Footer } from '../shared.js';

const phases = ['Education','Assessment','Biological profile','Personalized program','Tracking','Continuous adaptation','Advanced technologies'];

function App() {
  return html`
    <div>
      <${Nav} active="About" />
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-8">
        <p className="text-[11px] tracking-[0.14em] uppercase text-accent mb-3 font-semibold">About</p>
        <h1 className="font-display font-extrabold text-3xl mb-6">Your body is not something you simply grow older in.</h1>
        <p className="text-text/70 mb-4">It's a biological system you can learn to understand, protect, strengthen and continuously adapt. Better, Longer is a lifelong healthspan system designed to help people understand their biology, build physical and cognitive capacity, protect biological function, measure what changes, and responsibly explore the science of regeneration and healthy aging.</p>
        <p className="text-text/60">This isn't only for people already worried about aging. The philosophy is to start understanding your biology before you're forced to — whether you're establishing healthy foundations in your twenties or preserving capacity in your sixties.</p>
      </section>
      <section className="bg-surface border-y border-border">
        <div className="max-w-2xl mx-auto px-6 py-14">
          <h2 className="font-display font-bold text-2xl mb-3">Our differentiator is how we handle uncertainty</h2>
          <p className="text-text/70">We don't pretend to know everything. We separate what is established from what is emerging, and what is emerging from what is speculative — and we say so clearly, on every topic, every time.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="font-display font-bold text-2xl mb-2">Where this is headed</h2>
        <p className="text-text/60 max-w-lg mb-6">This website is phase one of a longer roadmap.</p>
        <div className="grid sm:grid-cols-4 gap-3">
          ${phases.map((p, i) => html`
            <div key=${p} className="bg-surface border border-border rounded-lg px-4 py-3">
              <p className="text-[11px] text-accent mb-1">PHASE ${i+1}</p>
              <p className="text-sm font-semibold">${p}</p>
            </div>
          `)}
        </div>
      </section>
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto bg-surface border border-border rounded-lg p-6">
          <p className="text-sm text-text/60">Better, Longer is an educational and scientific platform. It does not diagnose, prescribe or promise disease prevention or treatment. Nothing here replaces the advice of a qualified clinician.</p>
        </div>
      </section>
      <${Footer} />
    </div>
  `;
}
ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);
