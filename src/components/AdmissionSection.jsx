import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AdmissionSection({ isPreview = false }) {
  const steps = [
    {
      num: 1,
      title: "Apply through SAMS Odisha",
      text: "Register and complete the online Common Application Form (CAF) on the official state portal.",
      link: {
        text: "Apply Online (SAMS Portal)",
        url: "https://hss.samsodisha.gov.in/newHSS/index.aspx",
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      num: 2,
      title: "Receive Allotment",
      text: "Check selection lists and download your official allotment letter from SAMS based on merit lists.",
      link: {
        text: "Check Selection Status",
        url: "https://online.samsodisha.gov.in/online_caf/junuserregistration.aspx",
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: 3,
      title: "Submit Documents",
      text: "Visit the school campus with your SAMS allotment letter and all original certificates for verification.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: 4,
      title: "Pay Fees & Enrol",
      text: "Pay the required admission fee, submit the final enrollment forms, and secure your seat at B.B. Chhatoi HSS.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  const intakeStreams = [
    {
      name: "+2 Science",
      seats: "128 Seats",
      board: "CHSE Odisha",
      eligibility: "Candidates must have passed the High School Certificate (10th) examination conducted by BSE Odisha, or equivalent boards (CBSE, ICSE, etc.). Admission is merit-based according to SAMS selection list cutoffs.",
      subjects: "Physics, Chemistry, Mathematics, Biology, English, MIL (Odia/Alternative English)",
      colorClass: "science-card",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "+2 Arts",
      seats: "256 Seats",
      board: "CHSE Odisha",
      eligibility: "Candidates must have passed the High School Certificate (10th) examination conducted by BSE Odisha, or equivalent boards (CBSE, ICSE, etc.). Reservation quotas and weightage points apply as per State Government rules.",
      subjects: "Political Science, History, Economics, Geography, English, MIL (Odia/Alternative English)",
      colorClass: "arts-card",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const documentCategories = [
    {
      title: "Academic Credentials",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      items: [
        "10th Board Certificate & Marksheet (Original)",
        "School Leaving Certificate (SLC/CLC) (Original)",
        "Conduct & Character Certificate (Original)",
        "Migration Certificate (For CBSE/ICSE/Outside Boards)"
      ]
    },
    {
      title: "Identity & Verification",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 1 4 3v1H5v-1c0-2 2.667-3 4-3z" />
        </svg>
      ),
      items: [
        "Aadhaar Card of the Student",
        "Aadhaar Card of Parents / Local Guardian",
        "Passport Size Photographs of Student (5 Copies)",
        "Passport Size Photos of Parents / Guardian"
      ]
    },
    {
      title: "CAF & Official Forms",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      items: [
        "SAMS Online Counselling Allotment Card",
        "Common Application Form (CAF) Printout",
        "Form-C (Weightage claim and Declarations)",
        "Medical Fitness Certificate (Original)"
      ]
    },
    {
      title: "Reservations & Welfare",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        "Caste Certificate (For SC/ST/OBC category weightage)",
        "Resident / Nativity Certificate (For state quota)",
        "Income Certificate (For scholarship applications)",
        "Student Bank Passbook (Must be seeded with Aadhaar)"
      ]
    }
  ];

  return (
    <section className="section" id="admission">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Admission 2026-27</span>
          <h2 className="section-title">Admission Process & Details</h2>
          <p className="section-subtitle">
            Find complete guidelines, stream details, eligibility criteria, and required documents for securing admission to B.B. Chhatoi HSS.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal className="admission-timeline reveal" style={{ marginBottom: "var(--space-4xl)" }}>
          {steps.map((step) => (
            <div key={step.num} className="timeline-step">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot-number">{step.num}</div>
                <div className="timeline-dot-icon">{step.icon}</div>
              </div>
              <div className="timeline-content">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
                {step.link && (
                  <div className="timeline-action-wrapper">
                    <a
                      href={step.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-action-btn"
                    >
                      <span>{step.link.text}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="timeline-btn-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </ScrollReveal>

        {!isPreview ? (
          <>
            {/* Direct Admission Support Card */}
            <ScrollReveal className="reveal" style={{ marginBottom: "var(--space-4xl)" }}>
              <div 
                style={{
                  background: "var(--primary-50)",
                  border: "1px solid var(--primary-100)",
                  borderLeft: "4px solid var(--gold)",
                  padding: "var(--space-xl)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                <div style={{ display: "flex", gap: "var(--space-md)", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.75rem", lineHeight: "1", flexShrink: 0, marginTop: "-0.1rem" }}>ℹ️</span>
                  <div>
                    <h4 style={{ color: "var(--primary-dark)", margin: "0 0 0.5rem 0", fontWeight: "700", fontFamily: "var(--font-body)" }}>
                      Direct Admission & Helpline Support
                    </h4>
                    <p style={{ color: "var(--text-body)", margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
                      Unable to apply via the SAMS Portal? You can visit the school campus directly for walk-in admissions. Our dedicated admission facilitation desk will assist you with the registration process and document submission. For immediate queries, contact our Admission Incharge directly at <strong><a href="tel:+919668183662" style={{ color: "var(--primary)", textDecoration: "underline" }}>+91 96681 83662</a></strong>.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Stream Eligibility & Intake Section */}
            <ScrollReveal className="intake-wrapper reveal" style={{ marginBottom: "var(--space-4xl)" }}>
              <div className="text-center" style={{ marginBottom: "var(--space-2xl)" }}>
                <span className="section-label" style={{ color: "var(--gold-dark)" }}>Streams & Seats</span>
                <h3 style={{ color: "var(--primary)", marginTop: "0.5rem" }}>Eligibility & Intake Capacity</h3>
              </div>
              <div className="intake-grid">
                {intakeStreams.map((stream, idx) => (
                  <div key={idx} className={`intake-card ${stream.colorClass}`}>
                    <div className="intake-card-header">
                      <div className="intake-icon-box">{stream.icon}</div>
                      <div className="intake-header-text">
                        <h4>{stream.name}</h4>
                        <span className="intake-badge-pill">{stream.board}</span>
                      </div>
                    </div>
                    <div className="intake-card-body">
                      <div className="intake-stat">
                        <span className="stat-label">Intake Capacity:</span>
                        <span className="stat-value">{stream.seats}</span>
                      </div>
                      <div className="intake-detail-item">
                        <h5>Subjects Offered:</h5>
                        <div className="intake-subject-tags">
                          {stream.subjects.split(", ").map((subject, subIdx) => (
                            <span key={subIdx} className="subject-tag">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="intake-detail-item">
                        <h5>Eligibility Criteria:</h5>
                        <p>{stream.eligibility}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Required Documents Section */}
            <ScrollReveal className="documents-wrapper reveal" style={{ marginBottom: "var(--space-4xl)" }}>
              <div className="text-center" style={{ marginBottom: "var(--space-2xl)" }}>
                <span className="section-label" style={{ color: "var(--primary-dark)" }}>Checklist</span>
                <h3 style={{ color: "var(--primary)", marginTop: "0.5rem" }}>Required Documents</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
                  Please keep all original certificates and self-attested photocopies ready for verification at the time of admission to ensure a smooth enrollment process.
                </p>
              </div>
              <div className="documents-categories-grid">
                {documentCategories.map((cat, idx) => (
                  <div key={idx} className="doc-category-card">
                    <div className="doc-category-header">
                      <div className="doc-category-icon">{cat.icon}</div>
                      <h4>{cat.title}</h4>
                    </div>
                    <ul className="doc-category-list">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <svg viewBox="0 0 20 20" fill="currentColor" className="check-icon">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Guidance Desk Support Banner */}
            <ScrollReveal className="guidance-banner reveal">
              <div className="guidance-banner-content">
                <div className="guidance-badge">SAMS Facilitation Desk</div>
                <h3>Facing issues with the SAMS Online Application?</h3>
                <p>
                  B.B. Chhatoi HSS runs a dedicated <strong>Free Application Guidance Desk</strong> on campus to support students and parents. You can visit our school computer lab with your original documents, and our admission committee will assist you in filling out the online SAMS form free of cost.
                </p>
                <div className="guidance-meta">
                  <div className="guidance-meta-item">
                    <span className="meta-icon">📅</span>
                    <span>Timing: 9:00 AM - 4:00 PM (Mon-Sat)</span>
                  </div>
                  <div className="guidance-meta-item">
                    <span className="meta-icon">📍</span>
                    <span>Location: Main Computer Lab, School Campus</span>
                  </div>
                </div>
              </div>
              <div className="guidance-banner-actions">
                <a href="tel:+919668183662" className="btn btn-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                  Admission Helpline
                </a>
              </div>
            </ScrollReveal>

            {/* Brochure Download Banner */}
            <ScrollReveal className="guidance-banner reveal" style={{ marginTop: "2rem", background: "linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%)", borderColor: "var(--gold-200)" }}>
              <div className="guidance-banner-content">
                <div className="guidance-badge" style={{ background: "var(--primary-dark)", color: "var(--white)" }}>Prospectus</div>
                <h3 style={{ color: "var(--primary-dark)" }}>Download School Brochure & Prospectus</h3>
                <p style={{ color: "var(--primary-dark)", opacity: 0.9 }}>
                  Get comprehensive details about school rules, fee structures, curriculum plans, teacher credentials, laboratory assets, and school highlights in one single document.
                </p>
                <div className="guidance-meta">
                  <div className="guidance-meta-item" style={{ color: "var(--primary-dark)" }}>
                    <span className="meta-icon">📂</span>
                    <span>Format: PDF</span>
                  </div>
                  <div className="guidance-meta-item" style={{ color: "var(--primary-dark)" }}>
                    <span className="meta-icon">💾</span>
                    <span>Size: 15.3 MB</span>
                  </div>
                  <div className="guidance-meta-item" style={{ color: "var(--primary-dark)" }}>
                    <span className="meta-icon">📅</span>
                    <span>Year: 2026-27</span>
                  </div>
                </div>
              </div>
              <div className="guidance-banner-actions">
                <a 
                  href="/assets/pdfs/brochure.pdf" 
                  download="BB_Chhatoi_School_Brochure_2026_27.pdf" 
                  className="btn btn-primary"
                  style={{ background: "var(--primary-dark)", borderColor: "var(--primary-dark)", color: "var(--white)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </ScrollReveal>
          </>
        ) : (
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/admission" className="btn btn-primary">
              View Required Documents & Eligibility Criteria
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}



