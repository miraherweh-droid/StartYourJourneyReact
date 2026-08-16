import htm from 'https://unpkg.com/htm@3.1.1?module';
export const html = htm.bind(React.createElement);

const NAV_LINKS = [
  ['Home', 'index.html'],
  ['The Method', 'method.html'],
  ['Your Journey', 'journey.html'],
  ['Your Biology', 'biology.html'],
  ['The Science', 'science.html'],
  ['The Toolbox', 'toolbox.html'],
  ['About', 'about.html'],
];

export function Nav({ active }) {
  return html`
    <nav className="sticky top-0 z-30 bg-bg/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6">
        <a href="index.html" className="font-display font-bold text-lg mr-auto">Better, Longer</a>
        <div className="flex flex-wrap gap-5">
          ${NAV_LINKS.map(([label, href]) => html`
            <a key=${href} href=${href} className=${label === active ? 'text-accent text-sm font-semibold' : 'text-text/80 text-sm hover:text-text transition-colors'}>${label}</a>
          `)}
        </div>
        <a href="#" className="bg-accent text-bg text-sm font-bold px-4 py-2 rounded-md hover:bg-accent/90 transition-colors">Start Your Journey</a>
      </div>
    </nav>
  `;
}

export function Footer() {
  return html`
    <footer className="bg-surface border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <p className="font-display font-bold text-lg mb-2">Better, Longer</p>
          <p className="text-xs text-muted max-w-[220px]">Working name — final brand identity in progress.</p>
        </div>
        <div>
          <p className="text-[11px] tracking-wider uppercase text-muted mb-3">Platform</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="method.html" className="hover:text-accent transition-colors">The Method</a>
            <a href="journey.html" className="hover:text-accent transition-colors">Your Journey</a>
            <a href="biology.html" className="hover:text-accent transition-colors">Your Biology</a>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-wider uppercase text-muted mb-3">Research</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="science.html" className="hover:text-accent transition-colors">The Science</a>
            <a href="toolbox.html" className="hover:text-accent transition-colors">The Toolbox</a>
            <a href="about.html" className="hover:text-accent transition-colors">About</a>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-wider uppercase text-muted mb-3">Important</p>
          <p className="text-xs text-muted leading-relaxed">Educational content only. Not medical advice, diagnosis or treatment. Speak with a qualified clinician about your individual health.</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 text-[11px] text-muted">© 2026 Better, Longer. All content illustrative pending clinical review.</div>
      </div>
    </footer>
  `;
}

const EVIDENCE_MAP = {
  A: { text: 'LEVEL A — Strong human evidence', className: 'bg-accent text-bg font-semibold' },
  B: { text: 'LEVEL B — Moderate human evidence', className: 'border border-accent/60 text-accent' },
  C: { text: 'LEVEL C — Early / emerging evidence', className: 'bg-surface2 text-text/80 border border-border' },
  D: { text: 'LEVEL D — Experimental / insufficient', className: 'border border-muted text-muted' },
  NOT_SUPPORTED: { text: 'NOT SUPPORTED', className: 'border border-dashed border-muted text-muted' },
};

export function EvidenceBadge({ level, label }) {
  const m = EVIDENCE_MAP[level] || EVIDENCE_MAP.C;
  return html`<span className=${'inline-flex items-center text-[11px] tracking-wide px-3 py-1 rounded-full ' + m.className}>${label || m.text}</span>`;
}

export function Arrow() { return html`<span className="text-accent">→</span>`; }
