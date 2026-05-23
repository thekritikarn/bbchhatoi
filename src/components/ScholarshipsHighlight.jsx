"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const scholarships = [
  {
    title: "Merit-Based Waiver",
    benefit: "Up to 100% Free Tuition",
    desc: "Rewarding academic excellence. High-scoring students in the 10th Board exams receive direct tuition concessions and recognition.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Orphan Student Relief",
    benefit: "Fully-Funded Education",
    desc: "Under Moonlight Trust commitment, students who have lost parents are supported with full fee waivers to ensure their education never stops.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "EWS Concessions",
    benefit: "Income-Based Concessions",
    desc: "Tailored fee support and flexible installment payment schedules designed for families facing genuine economic hardships.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Tribal Welfare (SC/ST)",
    benefit: "Govt. Scholarship Help",
    desc: "Facilitating post-matric scholarships and welfare benefits from State Government schemes to tribal youth of Nabarangpur.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function ScholarshipsHighlight() {
  return (
    <section className="section scholarships-highlight-section" id="scholarships-highlight">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Scholarships & Support</span>
          <h2 className="section-title">Scholarships & Financial Aid</h2>
          <p className="section-subtitle">
            B.B. Chhatoi HSS is committed to making quality education accessible. We offer multiple financial support initiatives under the Moon Light Charitable Trust guidelines.
          </p>
        </ScrollReveal>

        <div className="scholarships-grid">
          {scholarships.map((s, i) => (
            <ScrollReveal key={i} className="scholarship-card-wrap reveal-stagger">
              <div className="scholarship-card">
                <div className="scholarship-icon-box">{s.icon}</div>
                <div className="scholarship-benefit-badge">{s.benefit}</div>
                <h4 className="scholarship-card-title">{s.title}</h4>
                <p className="scholarship-card-desc">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Action Callout */}
        <ScrollReveal className="text-center reveal" style={{ marginTop: "var(--space-2xl)" }}>
          <div className="scholarships-action-box">
            <p className="scholarships-action-note">
              Are you eligible for fee waivers or trust scholarships? Contact our campus facilitation team for assistance.
            </p>
            <div className="scholarships-actions">
              <Link href="/campus-life#support" className="btn btn-secondary">
                View Support Checklist
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }} className="btn-arrow">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+919668183662" className="btn btn-outline-dark">
                Admission Helpline
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
