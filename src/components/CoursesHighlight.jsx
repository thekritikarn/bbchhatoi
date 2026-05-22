import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const streams = [
  {
    id: "science",
    badge: "+2 Science",
    heading: "Science Stream",
    tagline: "For future doctors, engineers & researchers",
    image: "/assets/images/science-lab.png",
    accentFrom: "#0F3D26",
    accentTo: "#1B5E3B",
    subjects: [
      { name: "Physics", icon: "⚡" },
      { name: "Chemistry", icon: "🧪" },
      { name: "Biology", icon: "🔬" },
      { name: "Mathematics", icon: "📐" },
      { name: "English", icon: "📖" },
      { name: "MIL (Odia)", icon: "🗣️" },
    ],
    fee: "₹80,000",
    feeLabel: "per year (with hostel)",
    feeAlt: "₹55,000 / year (day scholar)",
    careers: ["NEET · Medical", "OJEE · Engineering", "B.Sc · Research"],
    cta: "/academics",
  },
  {
    id: "arts",
    badge: "+2 Arts",
    heading: "Arts Stream",
    tagline: "For future teachers, officers & entrepreneurs",
    image: "/assets/images/arts-classroom.png",
    accentFrom: "#8A6500",
    accentTo: "#B8860B",
    subjects: [
      { name: "Political Sc.", icon: "🏛️" },
      { name: "History", icon: "📜" },
      { name: "Economics", icon: "📊" },
      { name: "Geography", icon: "🌏" },
      { name: "English", icon: "📖" },
      { name: "MIL (Odia)", icon: "🗣️" },
    ],
    fee: "₹58,000",
    feeLabel: "per year (with hostel)",
    feeAlt: "₹33,000 / year (day scholar)",
    careers: ["OPSC · Civil Services", "B.A / B.Ed", "Business & Law"],
    cta: "/academics",
  },
];

export default function CoursesHighlight() {
  return (
    <section className="section courses-highlight-section" id="courses-highlight">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Academic Programs</span>
          <h2 className="section-title">Choose Your Stream</h2>
          <p className="section-subtitle">
            Two comprehensive CHSE Odisha programmes — designed to open every door, from medicine to civil services.
          </p>
        </ScrollReveal>

        <div className="stream-cards">
          {streams.map((s) => (
            <ScrollReveal key={s.id} className="stream-card reveal">
              {/* Gradient image header */}
              <div
                className="stream-card-header"
                style={{ background: `linear-gradient(160deg, ${s.accentFrom} 0%, ${s.accentTo} 100%)` }}
              >
                <img src={s.image} alt={s.heading} />
                <div className="stream-card-header-overlay" />
                <div className="stream-card-header-content">
                  <span className="stream-badge">{s.badge}</span>
                  <h3>{s.heading}</h3>
                  <p>{s.tagline}</p>
                </div>
              </div>

              {/* Body */}
              <div className="stream-card-body">
                {/* Subjects */}
                <div className="stream-subjects-label">Subjects Offered</div>
                <div className="stream-subjects">
                  {s.subjects.map((sub, i) => (
                    <span key={i} className="stream-subject-chip">
                      <span>{sub.icon}</span> {sub.name}
                    </span>
                  ))}
                </div>

                {/* Fee box */}
                <div className="stream-fee-box">
                  <div className="stream-fee-main">
                    <span className="stream-fee-amount">{s.fee}</span>
                    <span className="stream-fee-label">{s.feeLabel}</span>
                  </div>
                  <div className="stream-fee-alt">{s.feeAlt}</div>
                </div>

                {/* Career paths */}
                <div className="stream-careers-label">Career Pathways</div>
                <div className="stream-careers">
                  {s.careers.map((c, i) => (
                    <span key={i} className="stream-career-tag">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      {c}
                    </span>
                  ))}
                </div>

                <Link href={s.cta} className="stream-cta-btn">
                  Explore Full Curriculum
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
