import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection({ isPreview = false }) {
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
                  Directorate of HS Education
                </div>
              </div>

              {isPreview && (
                <div style={{ marginTop: "2rem" }}>
                  <Link href="/about" className="btn btn-secondary">
                    Read Founder&apos;s Vision & History
                  </Link>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
           FOUNDER TRIBUTE (Only visible on full page)
           ============================================================ */}
      {!isPreview && (
        <>
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
              <div className="founder-avatar-wrap">
                <img
                  src="/assets/images/founder.jpg"
                  alt="Late Shri Bhramarbar Chhatoi"
                  className="founder-avatar-img"
                />
              </div>
              <div className="founder-divider"></div>
              <div className="founder-name">Late Shri Bhramarbar Chhatoi</div>
              <div className="founder-title">Founder — Moon Light Charitable Trust</div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============================================================
             LEADERSHIP SECTION
             ============================================================ */}
        <section className="section leadership-section" style={{ background: "var(--off-white)" }}>
          <div className="container">
            <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
              <span className="section-label">Our Leadership</span>
              <h2 className="section-title">Administration & Management</h2>
              <p className="section-subtitle">
                Meet the visionary leaders guiding B.B. Chhatoi Higher Secondary School towards academic and personal excellence.
              </p>
            </ScrollReveal>

            <div className="grid grid-2" style={{ gap: "var(--space-2xl)", maxWidth: "960px", margin: "0 auto" }}>
              {/* Card 1: Principal */}
              <ScrollReveal className="reveal-left">
                <div 
                  className="leadership-card"
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "var(--space-xl)",
                    textAlign: "center",
                    border: "1px solid var(--gray-100)"
                  }}
                >
                  <div 
                    className="leadership-image-wrap"
                    style={{
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "4px solid var(--primary)",
                      marginBottom: "var(--space-lg)",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <img 
                      src="/assets/images/principal.jpg" 
                      alt="Dr. Bijay Kumar Sahu"
                      style={{ width: "100%", height: "100%", objectPosition: "top center", objectFit: "cover" }}
                    />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", margin: "0 0 0.25rem 0" }}>Dr. Bijay Kumar Sahu</h3>
                  <span style={{ fontSize: "0.85rem", color: "var(--gold-dark)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "var(--space-md)" }}>
                    Principal
                  </span>
                  <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "var(--space-md)" }}></div>
                  <p style={{ fontSize: "0.925rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0, fontStyle: "italic" }}>
                    &ldquo;At B.B. Chhatoi Higher Secondary School, we believe in nurturing not just academic excellence, but the character and potential of every student. Our dedicated faculty members and state-of-the-art facilities ensure that students from all backgrounds receive equal opportunities to learn, grow, and succeed in both board examinations and national-level competitive assessments. We welcome you to join our vibrant academic community.&rdquo;
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 2: Academic Coordinator */}
              <ScrollReveal className="reveal-right">
                <div 
                  className="leadership-card"
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "var(--space-xl)",
                    textAlign: "center",
                    border: "1px solid var(--gray-100)"
                  }}
                >
                  <div 
                    className="leadership-image-wrap"
                    style={{
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "4px solid var(--primary)",
                      marginBottom: "var(--space-lg)",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <img 
                      src="/assets/images/coordinator.jpg" 
                      alt="Mrs. Isha Padhi"
                      style={{ width: "100%", height: "100%", objectPosition: "top center", objectFit: "cover" }}
                    />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", margin: "0 0 0.25rem 0" }}>Mrs. Isha Padhi</h3>
                  <span style={{ fontSize: "0.85rem", color: "var(--gold-dark)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "var(--space-md)" }}>
                    Academic Coordinator
                  </span>
                  <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "var(--space-md)" }}></div>
                  <p style={{ fontSize: "0.925rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0, fontStyle: "italic" }}>
                    &ldquo;Our academic structure is designed to promote active learning, critical thinking, and structured discipline. By combining a comprehensive curriculum with personalized mentoring and special coaching modules for NEET/JEE, we ensure our students are well-equipped to excel in board examinations and their future careers. We strive to create an environment where every student can unlock their highest potential.&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        </>
      )}
    </>
  );
}
