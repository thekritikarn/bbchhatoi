import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    id: "mission",
    tag: "Our Mission",
    heading: "Empowering Every Learner",
    body:
      "To provide accessible, affordable, and high-quality higher secondary education to every student in the tribal and rural heartland of Nabarangpur, Odisha — regardless of economic background, caste, or gender — and to equip them with the knowledge, skills, and values needed to build a self-reliant future.",
    accent: "var(--primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "vision",
    tag: "Our Vision",
    heading: "Education Without Boundaries",
    body:
      "To become the leading centre of excellence for higher secondary education in rural Odisha — a place where every student, from the most marginalised background, can access quality Science and Arts education, emerge as a confident graduate, and contribute meaningfully to society and the nation.",
    accent: "var(--gold-dark)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8l4 4-4 4-4-4 4-4z" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Equity",
    desc: "Education fees based on guardian's financial capacity. No student is turned away due to poverty.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    desc: "Rigorous CHSE curriculum, experienced faculty, and dedicated NEET/OJEE coaching in one institution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Inclusion",
    desc: "Special support for orphans, tribal, and SC/ST students with government scholarship facilitation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    desc: "Transparent administration, honest governance under the Moon Light Charitable Trust since 2009.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "Deeply rooted in the tribal villages of Nabarangpur — we exist to serve our community.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "Modern pedagogy and activity-based learning methods to prepare students for a rapidly changing world.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function MissionVision() {
  return (
    <>
      {/* ── Mission & Vision ────────────────────────────────────── */}
      <section className="section mv-section" id="mission-vision">
        {/* Decorative background blobs */}
        <div className="mv-blob mv-blob-1" aria-hidden="true" />
        <div className="mv-blob mv-blob-2" aria-hidden="true" />

        <div className="container">
          <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
            <span className="section-label">Purpose &amp; Direction</span>
            <h2 className="section-title">Mission &amp; Vision</h2>
            <p className="section-subtitle">
              Two pillars that have guided every decision at B.B. Chhatoi Higher Secondary School since our founding
              under the Moon Light Charitable Trust in 2009.
            </p>
          </ScrollReveal>

          {/* Mission + Vision cards side by side */}
          <div className="mv-cards">
            {pillars.map((p) => (
              <ScrollReveal key={p.id} className="mv-card reveal">
                <div className="mv-card-accent" style={{ background: p.accent }} />
                <div className="mv-card-icon" style={{ color: p.accent }}>
                  {p.icon}
                </div>
                <div className="mv-card-tag" style={{ color: p.accent }}>
                  {p.tag}
                </div>
                <h3 className="mv-card-heading">{p.heading}</h3>
                <p className="mv-card-body">{p.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────── */}
      <section className="section section-alt mv-values-section" id="core-values">
        <div className="container">
          <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              Six principles that shape our teaching, our culture, and our relationship with every student and family we serve.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mv-values-grid reveal-stagger">
            {values.map((v, i) => (
              <div key={i} className="mv-value-card">
                <div className="mv-value-icon">{v.icon}</div>
                <h4 className="mv-value-title">{v.title}</h4>
                <p className="mv-value-desc">{v.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Commitment Strip ────────────────────────────────────── */}
      <section className="mv-commitment-strip">
        <div className="container">
          <ScrollReveal className="mv-commitment-inner reveal">
            <div className="mv-commitment-stat">
              <span className="mv-stat-num">15+</span>
              <span className="mv-stat-label">Years of<br />Service</span>
            </div>
            <div className="mv-commitment-divider" />
            <div className="mv-commitment-stat">
              <span className="mv-stat-num">1000+</span>
              <span className="mv-stat-label">Students<br />Educated</span>
            </div>
            <div className="mv-commitment-divider" />
            <div className="mv-commitment-stat">
              <span className="mv-stat-num">100%</span>
              <span className="mv-stat-label">Commitment to<br />Affordability</span>
            </div>
            <div className="mv-commitment-divider" />
            <div className="mv-commitment-stat">
              <span className="mv-stat-num">2</span>
              <span className="mv-stat-label">CHSE<br />Streams</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
