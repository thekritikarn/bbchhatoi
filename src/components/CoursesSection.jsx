import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CoursesSection({ isPreview = false }) {
  return (
    <section className="section" id="courses">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Academic Programs</span>
          <h2 className="section-title">Courses Offered</h2>
          <p className="section-subtitle">
            Choose from our two comprehensive streams under the Council of Higher Secondary Education (CHSE), Odisha.
          </p>
        </ScrollReveal>

        <ScrollReveal className="course-cards reveal">
          {/* +2 Science */}
          <div className="course-card">
            <div className="course-card-image">
              <img
                src="/assets/images/science-lab.png"
                alt="Science Laboratory at B.B. Chhatoi HSS"
                width="600"
                height="400"
              />
              <div className="course-card-badge">+2 Science</div>
            </div>
            <div className="course-card-body">
              <h3>+2 Science</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                Comprehensive science education with focus on Physics, Chemistry, Biology/Mathematics and practical
                laboratory experience.
              </p>

              <div className="course-meta">
                <div className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  2 Years Duration
                </div>
                <div className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Under CHSE, Odisha
                </div>
              </div>

              <div className="course-features">
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Physics, Chemistry, Biology / Mathematics
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  NEET & OJEE Preparation Support
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Modern Laboratory Facilities
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Hostel Available — ₹80,000/year (with hostel)
                </div>
              </div>

              <Link href={isPreview ? "/academics" : "#fees"} className="btn btn-secondary btn-sm" style={{ marginTop: "0.5rem" }}>
                View Fee Structure →
              </Link>
            </div>
          </div>

          {/* +2 Arts */}
          <div className="course-card">
            <div className="course-card-image">
              <img
                src="/assets/images/arts-classroom.png"
                alt="Arts Classroom at B.B. Chhatoi HSS"
                width="600"
                height="400"
              />
              <div className="course-card-badge">+2 Arts</div>
            </div>
            <div className="course-card-body">
              <h3>+2 Arts</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                Broad-based humanities and social science education fostering critical thinking, creativity, and
                cultural awareness.
              </p>

              <div className="course-meta">
                <div className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  2 Years Duration
                </div>
                <div className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Under CHSE, Odisha
                </div>
              </div>

              <div className="course-features">
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  History, Political Science, Economics, Sociology
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Competitive Exam Guidance
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Activity-Based Learning Environment
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Hostel Available — ₹50,000/year (with hostel)
                </div>
              </div>

              <Link href={isPreview ? "/academics" : "#fees"} className="btn btn-secondary btn-sm" style={{ marginTop: "0.5rem" }}>
                View Fee Structure →
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {isPreview && (
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/academics" className="btn btn-primary">
              Explore Subject Combinations & Full Fee Tables
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
