import { html, Nav, Footer, EvidenceBadge, Arrow } from '../shared.js';
const { useEffect, useRef, useState } = React;

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { setVisible(true); io.unobserve(el); } });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return html`<div ref=${ref} className=${className + ' reveal' + (visible ? ' is-visible' : '')}>${children}</div>`;
}

function HeroImage() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    requestAnimationFrame(() => { el.style.transform = 'scale(1)'; });
    const onScroll = () => { el.style.transform = 'translateY(' + Math.min(window.scrollY * 0.08, 40) + 'px) scale(1)'; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return html`<div className="hero-img-wrap rounded-2xl w-full aspect-[4/5]"><img ref=${ref} src="hero-photo.jpg" alt="" className="hero-img w-full h-full object-cover grayscale-[30%] contrast-90" style=${{ transform: 'scale(1.12)' }} /></div>`;
}

const stages = ['KNOW','ACTIVATE','BUILD','CLEANSE','RESTORE','ADAPT','MEASURE'];
const levels = [
  { num: '01', title: 'Foundation', desc: 'Sleep, nutrition, movement, strength, cardiovascular health and recovery — accessible to almost everyone.' },
  { num: '02', title: 'Optimization', desc: 'Personalized nutrition, advanced training, biomarker tracking and evidence-based technologies.' },
  { num: '03', title: 'Regeneration', desc: 'Peptides, regenerative medicine and epigenetics — the frontier, clearly labeled by evidence.' },
];
const systems = ['Brain','Nervous System','Mitochondria','Heart & Vascular','Muscle','Bone','Metabolism','Immune System','Skin','Connective Tissue','Digestive System','Sleep & Circadian'];
const signals = ['SOUND','ULTRASOUND','LIGHT','ELECTROMAGNETIC FIELDS','CELLULAR SIGNALING'];
const pipeline = ['Learn','Assess','Build profile','Track','Adapt','Repeat'];

function App() {
  return html`
    <div>
      <${Nav} active="Home" />
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[11px] tracking-[0.14em] uppercase text-accent mb-3 font-semibold">A lifelong healthspan system</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-5">
            <span className="block cascade-line" style=${{ animationDelay: '0.05s' }}>Better biology.</span>
            <span className="block cascade-line" style=${{ animationDelay: '0.2s' }}>Better capacity.</span>
            <span className="block cascade-line" style=${{ animationDelay: '0.35s' }}>Better life, longer.</span>
          </h1>
          <p className="text-text/70 max-w-md mb-7">A lifelong system for understanding your biology, building capacity, protecting function, and adapting as you age.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="bg-accent text-bg font-bold text-sm px-7 py-3.5 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-5px_rgba(200,255,91,0.4)]">Start Your Journey</a>
            <a href="method.html" className="border border-border text-sm font-semibold px-7 py-3.5 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60">Explore the Method</a>
          </div>
        </div>
        <${HeroImage} />
      </section>

      <section className="bg-surface border-y border-border">
        <${Reveal} className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-3xl mb-5">You don't need to fight aging.<br/>You need to understand it.</h2>
          <p className="text-text/70 mb-3">Most healthcare is reactive: something changes, symptoms appear, and we respond. Better, Longer takes a different approach — understand your biology while it's still functioning well, build capacity before you need it, and adapt as your biology changes.</p>
          <p className="text-text/70">The goal isn't simply a longer life. It's preserving the capacity to think, move, recover, create and remain independent, for as long as possible.</p>
        <//>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <${Reveal}>
          <h2 className="font-display font-bold text-2xl mb-6">What is Better, Longer?</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div><p className="font-display font-bold text-xl text-accent mb-1">Know</p><p className="text-sm text-text/70">Understand what is happening in your biology.</p></div>
            <div><p className="font-display font-bold text-xl text-accent mb-1">Build</p><p className="text-sm text-text/70">Develop the physical, cognitive and metabolic capacity that supports a longer healthspan.</p></div>
            <div><p className="font-display font-bold text-xl text-accent mb-1">Protect</p><p className="text-sm text-text/70">Preserve biological function and adapt as your body changes.</p></div>
          </div>
          <p className="text-sm text-text/60 max-w-xl mt-6">Better, Longer brings biology, evidence, behavior, measurement and emerging science into one lifelong framework.</p>
        <//>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <${Reveal}>
          <h2 className="font-display font-bold text-2xl mb-2">The Method</h2>
          <p className="text-text/60 max-w-md mb-6">Seven stages. Repeated across a lifetime.</p>
          <div className="flex flex-wrap items-center gap-2">
            ${stages.map((s, i) => html`
              <span key=${s} className="flex items-center gap-2">
                <span className="text-xs border border-border rounded-full px-4 py-2 text-text/80">${String(i+1).padStart(2,'0')} · ${s}</span>
                ${i < stages.length - 1 ? html`<${Arrow} />` : ''}
              </span>
            `)}
          </div>
          <a href="method.html" className="inline-block mt-6 text-accent text-sm font-semibold">See how it works →</a>
        <//>
      </section>

      <section className="bg-surface border-y border-border">
        <${Reveal} className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-2xl mb-2">Your Journey</h2>
          <p className="text-text/60 max-w-md mb-6">Three levels, from fundamentals to the frontier.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            ${levels.map(lv => html`
              <div key=${lv.num} className="bg-surface2 border border-border rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-8px_rgba(200,255,91,0.25)] hover:border-accent/40">
                <p className="text-[11px] text-accent mb-1">${lv.num}</p>
                <p className="font-display font-bold text-lg mb-2">${lv.title}</p>
                <p className="text-sm text-text/60">${lv.desc}</p>
              </div>
            `)}
          </div>
          <a href="journey.html" className="inline-block mt-6 text-accent text-sm font-semibold">Explore your journey →</a>
        <//>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <${Reveal}>
          <h2 className="font-display font-bold text-2xl mb-2">Understand Your Biology</h2>
          <p className="text-text/60 max-w-md mb-8">Twelve systems. What they do, how they age, what protects them.</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            ${systems.map(sys => html`
              <div key=${sys} className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-surface2 border border-border flex items-center justify-center text-accent font-display text-xs">${sys.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                <p className="text-xs text-text/70">${sys}</p>
              </div>
            `)}
          </div>
          <a href="biology.html" className="inline-block mt-8 text-accent text-sm font-semibold">Explore the biology map →</a>
        <//>
      </section>

      <section className="bg-surface border-y border-border">
        <${Reveal} className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-2xl mb-2">The Science</h2>
          <p className="text-text/60 max-w-lg mb-6">Every intervention is rated by how strong the human evidence actually is. Uncertainty is never hidden.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="badge-pop inline-block" style=${{ animationDelay: '0.05s' }}><${EvidenceBadge} level="A" /></span>
            <span className="badge-pop inline-block" style=${{ animationDelay: '0.15s' }}><${EvidenceBadge} level="B" /></span>
            <span className="badge-pop inline-block" style=${{ animationDelay: '0.25s' }}><${EvidenceBadge} level="C" /></span>
            <span className="badge-pop inline-block" style=${{ animationDelay: '0.35s' }}><${EvidenceBadge} level="D" /></span>
            <span className="badge-pop inline-block" style=${{ animationDelay: '0.45s' }}><${EvidenceBadge} level="NOT_SUPPORTED" /></span>
          </div>
          <a href="science.html" className="text-accent text-sm font-semibold">Read the science →</a>
        <//>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <${Reveal}>
          <h2 className="font-display font-bold text-2xl mb-2">The Toolbox</h2>
          <p className="text-text/60 max-w-lg mb-6">Nutrition, movement, sleep, recovery, measurement and emerging technologies — every tool evaluated through the same evidence framework, not sold as a shopping list.</p>
          <a href="toolbox.html" className="text-accent text-sm font-semibold">Browse the toolbox →</a>
        <//>
      </section>

      <section className="bg-surface border-y border-border">
        <${Reveal} className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-2xl mb-2">The Frontier</h2>
          <p className="text-text/60 max-w-xl mb-6">Physical signals — sound, light, electromagnetic fields — may interact with biological systems. We separate what's known from what's plausible, what's plausible from what's uncertain, and what's uncertain from what's unsupported.</p>
          <div className="flex flex-wrap items-center gap-2">
            ${signals.map((s, i) => html`
              <span key=${s} className="flex items-center gap-2">
                <span className="text-xs border border-border rounded-full px-4 py-2 text-text/80">${s}</span>
                ${i < signals.length - 1 ? html`<${Arrow} />` : ''}
              </span>
            `)}
          </div>
        <//>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <${Reveal}>
          <h2 className="font-display font-bold text-2xl mb-3">From knowledge to a personal system</h2>
          <p className="text-text/60 mb-6">This is the first layer. What you see today is the beginning — a personal biological operating system that learns with you as you age.</p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            ${pipeline.map((p, i) => html`
              <span key=${p} className="flex items-center gap-2">
                <span className="text-xs bg-surface2 border border-border rounded-full px-4 py-2 text-text/80">${p}</span>
                ${i < pipeline.length - 1 ? html`<${Arrow} />` : ''}
              </span>
            `)}
          </div>
        <//>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <${Reveal}>
          <h2 className="font-display font-bold text-3xl mb-6">Your biology is changing every day.<br/>Start understanding it.</h2>
          <a href="#" className="inline-block bg-accent text-bg font-bold text-sm px-8 py-3.5 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-5px_rgba(200,255,91,0.4)]">Start Your Journey</a>
        <//>
      </section>
      <${Footer} />
    </div>
  `;
}

ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);
