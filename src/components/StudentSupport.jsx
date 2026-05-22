"use client";

import ScrollReveal from "./ScrollReveal";

export default function StudentSupport() {
  const supports = [
    {
      title: "Orphan Students",
      desc: "Special fee support for students without parents — education as a fundamental right.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Economically Weak",
      desc: "Fee concessions and flexible payment based on family's financial situation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Single Guardians",
      desc: "Comprehensive support for children from widow and single-parent households.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Merit Scholars (90%+)",
      desc: "Rewarding academic excellence with special recognition and fee concessions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: "Tribal Students",
      desc: "Empowering tribal youth from Nabarangpur with quality education close to home.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Physically Challenged",
      desc: "Accessible education and special consideration for differently-abled students.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="2"/><path d="M12 7v8m-4 4h8M8 15l-2 4M16 15l2 4"/>
        </svg>
      ),
    },
    {
      title: "Helpless Families",
      desc: "Holistic support for students from families facing extreme hardship or crisis.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Guardian Support",
      desc: "Local guardian undertaking system for outstation students — safety and discipline assured.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section" id="support">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Student Support</span>
          <h2 className="section-title">Supporting Those Who Need It Most</h2>
          <p className="section-subtitle">
            We provide special consideration and support for students from underprivileged backgrounds. Education is
            a right, not a privilege — and we mean it.
          </p>
        </ScrollReveal>

        <ScrollReveal className="support-cards reveal-stagger">
          {supports.map((sup, idx) => (
            <div key={idx} className="support-card">
              {/* Eligible badge */}
              <div className="support-eligible-badge">
                <svg viewBox="0 0 16 16" fill="currentColor" width="10" height="10">
                  <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/>
                </svg>
                Eligible
              </div>

              <div className="support-icon">{sup.icon}</div>
              <h4>{sup.title}</h4>
              <p>{sup.desc}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Trust philosophy strip */}
        <ScrollReveal className="support-philosophy reveal" style={{ marginTop: "var(--space-3xl)" }}>
          <div className="support-philosophy-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="support-philosophy-icon">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <div className="support-philosophy-heading">Moon Light Charitable Trust&apos;s Commitment</div>
              <div className="support-philosophy-text">
                &ldquo;No student shall be denied quality education due to financial hardship. Fee is always adjusted to what a guardian can genuinely afford.&rdquo;
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
