"use client";

import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <>
      {/* ============================================================
           ABOUT SECTION
           ============================================================ */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal className="about-image reveal-left">
              <img
                src="/assets/images/hero-campus.png"
                alt="B.B. Chhatoi Higher Secondary School Campus"
                width="600"
                height="400"
              />
              <div className="about-image-badge">Est. under MLCT (Regd. No. 48/09)</div>
            </ScrollReveal>
            <ScrollReveal className="about-content reveal-right">
              <span className="section-label">About Our Institution</span>
              <h2 className="section-title">B.B. Chhatoi Higher Secondary School</h2>
              <p>
                Named after the visionary <strong>Late Shri Bhramarbar Chhatoi</strong>, our institution stands as a beacon
                of educational empowerment in the tribal belt of Nabarangpur, Odisha. Operating under the{" "}
                <strong>Moon Light Charitable Trust</strong>, we are committed to providing quality education that is
                accessible to all, regardless of financial background.
              </p>
              <p>
                We offer +2 Science and +2 Arts programs affiliated to the{" "}
                <strong>Council of Higher Secondary Education (CHSE), Odisha</strong>, with dedicated support for
                competitive examinations including NEET and OJEE. Our mission is simple — equal education opportunities
                for every student.
              </p>

              <div className="recognition-badges">
                <div className="recognition-badge">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  CHSE Odisha
                </div>
                <div className="recognition-badge">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  SAMS Odisha
                </div>
                <div className="recognition-badge">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Director of HS Education
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
           FOUNDER TRIBUTE
           ============================================================ */}
      <section className="section founder-section">
        <div className="container">
          <ScrollReveal className="founder-content reveal">
            <span className="section-label" style={{ color: "var(--gold-light)" }}>
              Founder&apos;s Vision
            </span>
            <div className="founder-quote">
              Education is the most powerful tool for service to mankind. Every student, regardless of economic status,
              deserves access to quality learning. Our mission is to empower the tribal and rural youth of Odisha
              through education, creating employment opportunities and building a brighter future.
            </div>
            <div className="founder-divider"></div>
            <div className="founder-name">Late Shri Bhramarbar Chhatoi</div>
            <div className="founder-title">Founder — Moon Light Charitable Trust</div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
