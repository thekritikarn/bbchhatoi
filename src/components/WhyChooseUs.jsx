"use client";

import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    num: "01",
    title: "Quality Education",
    text: "Rigorous CHSE Odisha curriculum delivered by experienced faculty with a focus on conceptual understanding.",
    accent: "primary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Skill-Based Learning",
    text: "Activity-based education approach that develops practical skills alongside academic knowledge.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Competitive Exam Prep",
    text: "Dedicated coaching for NEET, OJEE, and other competitive examinations alongside regular classes.",
    accent: "primary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Affordable & Inclusive",
    text: "Education fees based on guardian's financial capacity. Special support for orphans, economically weaker sections, and tribal students.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Hostel Facility",
    text: "Separate hostel accommodation with food arrangement for outstation students at affordable rates.",
    accent: "primary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Career-Oriented",
    text: "Focus on career guidance and employment-oriented education to prepare students for future success.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Academic Discipline",
    text: "Structured learning environment with regular internal tests, examinations, and academic monitoring systems.",
    accent: "primary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Transport Facility",
    text: "Convenient transport arrangements available to ensure safe and easy commute for day scholars.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-alt" id="why-us">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">What Makes Us Different</h2>
          <p className="section-subtitle">
            We combine academic excellence with a deep commitment to accessible education, creating a nurturing
            environment where every student can thrive.
          </p>
        </ScrollReveal>

        <ScrollReveal className="usp-grid reveal-stagger">
          {cards.map((card, idx) => (
            <div key={idx} className={`usp-card usp-card--${card.accent}`}>
              {/* Number indicator */}
              <span className="usp-card-num">{card.num}</span>

              {/* Icon */}
              <div className="usp-card-icon">
                {card.icon}
              </div>

              <h4 className="usp-card-title">{card.title}</h4>
              <p className="usp-card-text">{card.text}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
