"use client";

import ScrollReveal from "./ScrollReveal";

export default function AdmissionSection() {
  const steps = [
    {
      num: 1,
      title: "Apply through SAMS Odisha",
      text: "Complete the SAMS (Student Academic Management System) online application for +2 admission in Odisha.",
    },
    {
      num: 2,
      title: "Receive Allotment",
      text: "Get your Govt. Counselling Allotment Card from SAMS after the merit-based selection process.",
    },
    {
      num: 3,
      title: "Submit Documents",
      text: "Visit the campus with all required original documents and the SAMS allotment card for verification.",
    },
    {
      num: 4,
      title: "Pay Fees & Complete Admission",
      text: "Pay the applicable fees, complete the admission form, and finalize enrollment. Welcome to B.B. Chhatoi HSS!",
    },
  ];

  const documents = [
    "10th Board Certificate & Marksheet (Original)",
    "Migration Certificate",
    "SLC / CLC & Conduct Certificate",
    "Medical Fitness Certificate",
    "Govt. Counselling Allotment Card",
    "Caste Certificate",
    "Resident Certificate",
    "Income Certificate",
    "Aadhaar Card of Candidate",
    "Passport Size Photographs",
    "Bank Passbook with Aadhaar Seeding",
    "Aadhaar of Parents / Local Guardian",
    "Parent & Guardian Photos",
    "Other Form-C Documents",
  ];

  return (
    <section className="section" id="admission">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Admission 2026-27</span>
          <h2 className="section-title">Admission Process</h2>
          <p className="section-subtitle">
            Follow these simple steps to secure your admission to B.B. Chhatoi Higher Secondary School.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal className="admission-timeline reveal">
          {steps.map((step) => (
            <div key={step.num} className="timeline-step">
              <div className="timeline-dot">{step.num}</div>
              <div className="timeline-content">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* Required Documents */}
        <ScrollReveal className="documents-wrapper reveal">
          <h3 className="text-center" style={{ marginBottom: "var(--space-xl)", color: "var(--primary)" }}>
            Required Documents
          </h3>
          <ScrollReveal className="documents-grid reveal-stagger">
            {documents.map((doc, idx) => (
              <div key={idx} className="doc-item">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {doc}
              </div>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
