"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Apply via SAMS Odisha",
    desc: "Complete the online SAMS application for +2 admission on the Govt. portal.",
  },
  {
    num: "02",
    title: "Receive Allotment Card",
    desc: "Download your official allotment card from the SAMS portal once the selection list is published.",
  },
  {
    num: "03",
    title: "Submit Documents",
    desc: "Visit the school campus with your original documents and certificates for verification.",
  },
  {
    num: "04",
    title: "Pay Fees & Enrol",
    desc: "Complete the admission fee payment and officially enroll as a member of the B.B. Chhatoi HSS family!",
  },
];

export default function AdmissionCTA() {
  return (
    <section className="admission-cta-section" id="admission-cta">
      <div className="container">
        <div className="admission-cta-grid">
          {/* Left — urgency panel */}
          <ScrollReveal className="admission-cta-left reveal-left">
            {/* Pulsing badge */}
            <div className="admission-open-badge-wrapper">
              <div className="admission-open-badge">
                <span className="admission-pulse" />
                Admissions Open 2026–27
              </div>
              <div className="admission-helpdesk-pill">
                Free SAMS Helpdesk on Campus
              </div>
            </div>

            <h2 className="admission-cta-heading">
              Secure Your Seat Today
              <br />
              <span>Limited Intake Available</span>
            </h2>
            <p className="admission-cta-sub">
              Admissions for +2 Science and +2 Arts streams have officially commenced. Secure your future with our expert faculty and fully-equipped laboratories. Apply online via SAMS Odisha or visit our campus facilitation desk for free assistance.
            </p>

            {/* CTA buttons */}
            <div className="admission-cta-buttons">
              <a
                href="https://samsodisha.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg sams-btn"
              >
                Apply via SAMS Odisha
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link href="/admission" className="btn btn-outline admission-outline-btn">
                View Checklist & Details
              </Link>
            </div>

            {/* Contact line */}
            <div className="admission-contact-line">
              <div className="contact-line-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                Questions? Call Admission Incharge:
                <a href="tel:+919668183662">+91 96681 83662</a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — steps panel */}
          <ScrollReveal className="admission-cta-right reveal-right">
            <div className="admission-steps-header">
              <span className="section-label" style={{ color: "var(--gold-light)" }}>Quick Guide</span>
              <h3>4 Steps to Join Us</h3>
            </div>
            <div className="admission-steps">
              {steps.map((step, i) => (
                <div key={i} className="admission-step">
                  <div className="admission-step-num-wrapper">
                    <div className="admission-step-num">{step.num}</div>
                  </div>
                  <div className="admission-step-body">
                    <div className="admission-step-title">{step.title}</div>
                    <div className="admission-step-desc">{step.desc}</div>
                  </div>
                  {i < steps.length - 1 && <div className="admission-step-connector" />}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

