import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  {
    label: "Est. 2009",
    sub: "Under Moon Light Charitable Trust",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Dhodra, Nabarangpur",
    sub: "Serving tribal & rural Odisha",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "CHSE Odisha",
    sub: "+2 Science & +2 Arts streams",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function AboutSnapshot() {
  return (
    <section className="section about-snapshot-section" id="about-snapshot">
      <div className="container">
        <div className="about-snapshot-grid">
          {/* Left — Image column */}
          <ScrollReveal className="about-snapshot-img reveal-left">
            <div className="about-snapshot-img-wrap">
              <img
                src="/assets/images/hero-campus.png"
                alt="B.B. Chhatoi HSS Campus"
                width="600"
                height="420"
              />
              {/* Floating founder card */}
              <div className="about-snapshot-founder">
                <div className="about-snapshot-founder-avatar" style={{ overflow: "hidden", background: "none" }}>
                  <img
                    src="/assets/images/founder.jpg"
                    alt="Late Shri Bhramarbar Chhatoi"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div className="about-snapshot-founder-name">Late Shri Bhramarbar Chhatoi</div>
                  <div className="about-snapshot-founder-role">Founder &amp; Visionary</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Content column */}
          <ScrollReveal className="about-snapshot-content reveal-right">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              Quality Education for <span style={{ color: "var(--gold)" }}>Every Child</span>,<br />
              Regardless of Background
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.0625rem", lineHeight: 1.85, marginBottom: "2rem" }}>
              Named after the visionary <strong>Late Shri Bhramarbar Chhatoi</strong>, our institution is a beacon of
              educational empowerment in the tribal heartland of Nabarangpur. We believe fees should never stand
              between a student and their future — so we charge based on what families can afford.
            </p>

            {/* Three highlights */}
            <div className="about-snapshot-highlights">
              {highlights.map((h, i) => (
                <div key={i} className="about-snapshot-highlight">
                  <div className="about-snapshot-highlight-icon">{h.icon}</div>
                  <div>
                    <div className="about-snapshot-highlight-label">{h.label}</div>
                    <div className="about-snapshot-highlight-sub">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-snapshot-actions">
              <Link href="/about" className="btn btn-secondary">
                Our Full Story
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-outline-dark">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
