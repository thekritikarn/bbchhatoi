"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const streamDetails = {
  science: {
    title: "+2 Science Stream Details",
    subtitle: "Affiliated to CHSE Odisha | Stream Code: 11",
    tagline: "Designed for intensive concept building in physical and biological sciences, coupled with integrated training for state & national level competitive exams.",
    tabs: [
      {
        id: "subjects",
        label: "Subject Combinations",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      },
      {
        id: "labs",
        label: "Lab Facilities",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      },
      {
        id: "coaching",
        label: "Integrated Coaching",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        id: "exams",
        label: "Exams & Calendar",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      }
    ]
  },
  arts: {
    title: "+2 Arts Stream Details",
    subtitle: "Affiliated to CHSE Odisha | Stream Code: 12",
    tagline: "Designed to cultivate critical thinking, linguistic capability, and strong conceptual bases in political science, history, economics, and sociology.",
    tabs: [
      {
        id: "subjects",
        label: "Subject Combinations",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      },
      {
        id: "labs",
        label: "Activities & Projects",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      },
      {
        id: "coaching",
        label: "Integrated Coaching",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        id: "exams",
        label: "Exams & Calendar",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      }
    ]
  }
};

export default function CoursesSection({ isPreview = false }) {
  const [activeStream, setActiveStream] = useState("science");
  const [activeTab, setActiveTab] = useState("subjects");
  const detailsRef = useRef(null);

  // URL Hash/Query listener for direct stream linking
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const streamParam = params.get("stream");
      if (streamParam === "science" || streamParam === "arts") {
        setActiveStream(streamParam);
        setTimeout(() => {
          if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  }, []);

  const handleStreamSelect = (streamId) => {
    setActiveStream(streamId);
    setActiveTab("subjects");
    
    if (!isPreview) {
      setTimeout(() => {
        if (detailsRef.current) {
          detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const renderTabContent = () => {
    if (activeStream === "science") {
      switch (activeTab) {
        case "subjects":
          return (
            <div className="tab-subjects-content animate-fade-in">
              <div className="info-alert">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Students must register for <strong>2 Compulsory Subjects</strong> and select exactly <strong>4 Elective Subjects</strong> under the CHSE Odisha guidelines.</span>
              </div>
              
              <div className="subjects-grid">
                {/* Compulsory */}
                <div className="subjects-column">
                  <h4 className="column-title">Compulsory Subjects (100 Marks/Yr)</h4>
                  <div className="subject-item-card">
                    <div className="subject-item-header">
                      <span className="subject-code">ENG</span>
                      <span className="subject-marks">200 Marks Total</span>
                    </div>
                    <h5>English</h5>
                    <p>Core literature, language comprehension, communicative English, writing skills, and grammar syllabus defined by CHSE.</p>
                  </div>
                  <div className="subject-item-card">
                    <div className="subject-item-header">
                      <span className="subject-code">MIL</span>
                      <span className="subject-marks">200 Marks Total</span>
                    </div>
                    <h5>MIL (Odia / Hindi / Sanskrit)</h5>
                    <p>Modern Indian Languages. Alternative English option is also available for eligible candidates.</p>
                  </div>
                  <div className="subject-item-card non-board">
                    <div className="subject-item-header">
                      <span className="subject-code">GRADED</span>
                      <span className="subject-badge-non">Compulsory</span>
                    </div>
                    <h5>EE, Yoga & BCE</h5>
                    <p>Environmental Education (EE), Compulsory Yoga, and Basic Computer Education (BCE). Graded subjects, marks not included in board total.</p>
                  </div>
                </div>

                {/* Electives */}
                <div className="subjects-column">
                  <h4 className="column-title">Elective Subjects (4 Required - 200 Marks each)</h4>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">PHY</span>
                      <span className="subject-marks">70T + 30P / Yr</span>
                    </div>
                    <h5>Physics</h5>
                    <p>Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics. Includes mandatory practical hours in our laboratory.</p>
                  </div>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">CHM</span>
                      <span className="subject-marks">70T + 30P / Yr</span>
                    </div>
                    <h5>Chemistry</h5>
                    <p>Organic, Inorganic, and Physical Chemistry. Detailed chemical reactions, equation balances, and practical laboratory analysis.</p>
                  </div>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">MTH</span>
                      <span className="subject-marks">100T / Yr</span>
                    </div>
                    <h5>Mathematics</h5>
                    <p>Calculus, Algebra, Vector Geometry, Coordinate Geometry, Probability, and Trigonometry. Vital for engineering streams.</p>
                  </div>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">BIO</span>
                      <span className="subject-marks">70T + 30P / Yr</span>
                    </div>
                    <h5>Biology (Botany & Zoology)</h5>
                    <p>Plant structures & biochemistry (Botany), animal physiology, genetics, cell biology, and evolutionary dynamics (Zoology).</p>
                  </div>
                </div>
              </div>

              <div className="stream-combinations-box">
                <h5>Recommended Elective Groupings</h5>
                <div className="combinations-flex">
                  <div className="comb-card">
                    <div className="comb-badge">PCM Group</div>
                    <h6>Engineering & Pure Sciences</h6>
                    <p>Physics, Chemistry, and Mathematics as core electives with Biology or Information Technology (IT) as the 4th elective.</p>
                  </div>
                  <div className="comb-card animate-pulse-gold">
                    <div className="comb-badge gold">PCB Group</div>
                    <h6>Medical & Life Sciences</h6>
                    <p>Physics, Chemistry, and Biology as core electives with Mathematics or Sanskrit as the 4th elective.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        case "labs":
          return (
            <div className="tab-labs-content animate-fade-in">
              <p className="tab-intro">
                Practical application is fundamental to science education. B.B. Chhatoi Higher Secondary School offers fully-equipped, modern laboratories conforming to the CHSE curriculum standards.
              </p>
              <div className="labs-grid">
                <div className="lab-facility-card">
                  <div className="lab-badge">PHY</div>
                  <h5>Physics Laboratory</h5>
                  <p>Equipped with optical benches, spherometers, screw gauges, resonance columns, flywheels, prisms, glass slabs, and electric circuit boards for comprehensive experiments.</p>
                  <span className="lab-stat">Capacity: 32 Students/Batch</span>
                </div>
                <div className="lab-facility-card">
                  <div className="lab-badge">CHM</div>
                  <h5>Chemistry Laboratory</h5>
                  <p>Fully stocked with reagent shelves, chemical balances, titration kits, test tube setups, organic salts, and fume extraction systems. We prioritize chemical safety.</p>
                  <span className="lab-stat">Capacity: 32 Students/Batch</span>
                </div>
                <div className="lab-facility-card">
                  <div className="lab-badge">BIO</div>
                  <h5>Biology Laboratory</h5>
                  <p>Features high-quality compound microscopes, extensive libraries of permanent plant/animal slides, human skeletal models, and preserved botanical and zoological specimens.</p>
                  <span className="lab-stat">Capacity: 32 Students/Batch</span>
                </div>
                <div className="lab-facility-card">
                  <div className="lab-badge">IT</div>
                  <h5>Computer Science Lab</h5>
                  <p>Provides modern computing systems with compiler software for C++, Python, and database management, backed by high-speed broadband and battery backup.</p>
                  <span className="lab-stat">Capacity: 30 Systems</span>
                </div>
              </div>
            </div>
          );
        case "coaching":
          return (
            <div className="tab-coaching-content animate-fade-in">
              <div className="coaching-hero-card">
                <div className="coaching-hero-content">
                  <span className="coaching-label">Board + Competitive Exams</span>
                  <h4>NEET & OJEE / JEE Foundation Classes</h4>
                  <p>
                    To support our rural and tribal students in cracking state and national competitive entrance exams, we offer an integrated competitive coaching framework.
                  </p>
                  <div className="coaching-highlights">
                    <div className="ch-item">
                      <span className="ch-icon">✓</span>
                      <span>Daily 1.5 hours of competitive lectures after standard board classes</span>
                    </div>
                    <div className="ch-item">
                      <span className="ch-icon">✓</span>
                      <span>Regular MCQ practice worksheets & OMR sheet training</span>
                    </div>
                    <div className="ch-item">
                      <span className="ch-icon">✓</span>
                      <span>Weekly Mock Tests aligned with NEET-UG and JEE Main patterns</span>
                    </div>
                    <div className="ch-item">
                      <span className="ch-icon">✓</span>
                      <span>Dedicated doubt clearing classes & performance tracker reports</span>
                    </div>
                  </div>
                </div>
                <div className="coaching-hero-badge">
                  <span className="chb-text">No Extra Fee</span>
                  <span className="chb-sub">Included in regular tuition</span>
                </div>
              </div>
            </div>
          );
        case "exams":
          return (
            <div className="tab-exams-content animate-fade-in">
              <p className="tab-intro">
                Evaluation is continuous and structured to ensure regular progress, tracking student development at every step of the CHSE academic calendar.
              </p>
              <div className="calendar-timeline">
                <div className="timeline-item">
                  <div className="timeline-badge">Jul - Aug</div>
                  <div className="timeline-details">
                    <h6>Quarter-End Examination I (QEE 1)</h6>
                    <p>Internal assessment covering the first 25% of the syllabus. Important for final internal grades.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-badge">Sep - Oct</div>
                  <div className="timeline-details">
                    <h6>Quarter-End Examination II (QEE 2) & Mid-Term</h6>
                    <p>Mid-term examinations matching board question papers to evaluate baseline preparation.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-badge">Nov - Dec</div>
                  <div className="timeline-details">
                    <h6>Quarter-End Examination III (QEE 3) & Pre-Boards</h6>
                    <p>Conducted for 2nd Year students to practice the complete 3-hour exam format under CHSE standards.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-badge">Jan - Feb</div>
                  <div className="timeline-details">
                    <h6>Practical Board Exams & Revision Labs</h6>
                    <p>External practical examinations conducted by CHSE examiners at our center. Extensive revision classes.</p>
                  </div>
                </div>
                <div className="timeline-item special">
                  <div className="timeline-badge">March</div>
                  <div className="timeline-details">
                    <h6>CHSE Board Annual Examinations</h6>
                    <p>Final theory examinations conducted at designated board centers for +2 2nd Year students.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    } else {
      switch (activeTab) {
        case "subjects":
          return (
            <div className="tab-subjects-content animate-fade-in">
              <div className="info-alert">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Arts students must register for <strong>2 Compulsory Subjects</strong> and select exactly <strong>4 Elective Subjects</strong> under CHSE Odisha guidelines.</span>
              </div>
              
              <div className="subjects-grid">
                {/* Compulsory */}
                <div className="subjects-column">
                  <h4 className="column-title">Compulsory Subjects (100 Marks/Yr)</h4>
                  <div className="subject-item-card">
                    <div className="subject-item-header">
                      <span className="subject-code">ENG</span>
                      <span className="subject-marks">200 Marks Total</span>
                    </div>
                    <h5>English</h5>
                    <p>Core language development, comprehension, grammar, and formal letter/report writing skills.</p>
                  </div>
                  <div className="subject-item-card">
                    <div className="subject-item-header">
                      <span className="subject-code">MIL</span>
                      <span className="subject-marks">200 Marks Total</span>
                    </div>
                    <h5>MIL (Odia / Sanskrit / Hindi)</h5>
                    <p>Literature, essay composition, and cultural linguistic modules in mother tongue/regional language.</p>
                  </div>
                  <div className="subject-item-card non-board">
                    <div className="subject-item-header">
                      <span className="subject-code">GRADED</span>
                      <span className="subject-badge-non">Compulsory</span>
                    </div>
                    <h5>EE, Yoga & BCE</h5>
                    <p>Environmental Education (EE), Compulsory Yoga, and Basic Computer Education (BCE). Graded subjects, marks not included in board total.</p>
                  </div>
                </div>

                {/* Electives */}
                <div className="subjects-column">
                  <h4 className="column-title">Elective Subjects (Choose 4 - 200 Marks each)</h4>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">PLS</span>
                      <span className="subject-marks">100 Marks / Yr</span>
                    </div>
                    <h5>Political Science</h5>
                    <p>Indian Constitution, Local Governance, Democratic Systems, Political Theory, and International Relations.</p>
                  </div>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">HIS</span>
                      <span className="subject-marks">100 Marks / Yr</span>
                    </div>
                    <h5>History</h5>
                    <p>Ancient Indian Civilizations, Medieval India, Modern Freedom Struggles, and key milestones in World History.</p>
                  </div>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">ECO</span>
                      <span className="subject-marks">100 Marks / Yr</span>
                    </div>
                    <h5>Economics</h5>
                    <p>Microeconomics, Macroeconomics, Indian Economic Development, and basic statistical tools.</p>
                  </div>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">SOC</span>
                      <span className="subject-marks">100 Marks / Yr</span>
                    </div>
                    <h5>Sociology</h5>
                    <p>Introduction to sociology, Indian social structures, tribal studies, and social change/dynamics in rural India.</p>
                  </div>
                  <div className="subject-item-card elective">
                    <div className="subject-item-header">
                      <span className="subject-code">EDU</span>
                      <span className="subject-marks">70T + 30P / Yr</span>
                    </div>
                    <h5>Education</h5>
                    <p>Principles of education, educational psychology, statistics, and teaching methodologies. Includes practical assessments.</p>
                  </div>
                </div>
              </div>

              <div className="stream-combinations-box">
                <h5>Career Pathways & Selection</h5>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  The Arts stream provides a broad-based humanities portfolio designed specifically to build writing skills, general awareness, and logic. This combination is highly recommended for students preparing for civil service exams, journalism, law, and education certifications.
                </p>
              </div>
            </div>
          );
        case "labs":
          return (
            <div className="tab-labs-content animate-fade-in">
              <p className="tab-intro">
                The humanities stream values communication, creativity, and field investigations. We provide supportive spaces to explore social structures outside the textbooks.
              </p>
              <div className="labs-grid">
                <div className="lab-facility-card">
                  <div className="lab-badge">EDU</div>
                  <h5>Education Laboratory</h5>
                  <p>Designed for Education elective students. Houses psychological tests, statistics board layouts, intelligence scales, and educational guidance models for field demonstrations.</p>
                  <span className="lab-stat">Capacity: 30 Students/Batch</span>
                </div>
                <div className="lab-facility-card">
                  <div className="lab-badge">SPK</div>
                  <h5>Debate & Seminar Club</h5>
                  <p>Weekly organized platform where students present views on socio-economic developments, local administration issues, and historic anniversaries to build public speaking confidence.</p>
                  <span className="lab-stat">Meets: Every Saturday</span>
                </div>
                <div className="lab-facility-card">
                  <div className="lab-badge">LIT</div>
                  <h5>Creative Writing & Wall Magazine</h5>
                  <p>Fosters creative writing in Odia and English. Students compile poems, short stories, essays, and local historical reviews to put together the quarterly Wall Magazine.</p>
                  <span className="lab-stat">Updated: Quarterly</span>
                </div>
                <div className="lab-facility-card">
                  <div className="lab-badge">FLD</div>
                  <h5>Social Surveys & Projects</h5>
                  <p>Encourages students to conduct mini field studies about local crafts, agricultural patterns, and demographics in Nabarangpur, cultivating scientific inquiry in social science.</p>
                  <span className="lab-stat">Focus: Local Heritage</span>
                </div>
              </div>
            </div>
          );
        case "coaching":
          return (
            <div className="tab-coaching-content animate-fade-in">
              <div className="coaching-hero-card arts-theme">
                <div className="coaching-hero-content">
                  <span className="coaching-label">Competitive Foundation</span>
                  <h4>Civil Services & General Entrances Prep</h4>
                  <p>
                    We aim to empower arts graduates to successfully target national and state jobs like UPSC Civil Services, OPSC, Staff Selection Commission (SSC), Banking, and B.Ed admissions.
                  </p>
                  <div className="coaching-highlights">
                    <div className="ch-item">
                      <span className="ch-icon">✓</span>
                      <span>General Studies (GS) basics: Indian Constitution, Economy, & Modern History</span>
                    </div>
                    <div className="ch-item">
                      <span className="ch-icon">✓</span>
                      <span>Weekly Current Affairs discussions and national editorial summaries</span>
                    </div>
                    <div className="ch-item">
                      <span className="ch-icon">✓</span>
                      <span>Basic Mental Ability & Logical Reasoning training classes</span>
                    </div>
                    <div className="ch-item">
                      <span className="ch-icon">✓</span>
                      <span>Answer-writing practice workshops to build descriptive skills for board and state exams</span>
                    </div>
                  </div>
                </div>
                <div className="coaching-hero-badge">
                  <span className="chb-text">No Extra Fee</span>
                  <span className="chb-sub">Included in regular tuition</span>
                </div>
              </div>
            </div>
          );
        case "exams":
          return (
            <div className="tab-exams-content animate-fade-in">
              <p className="tab-intro">
                Evaluation is continuous and structured to ensure regular progress, tracking student development at every step of the CHSE academic calendar.
              </p>
              <div className="calendar-timeline">
                <div className="timeline-item">
                  <div className="timeline-badge">Jul - Aug</div>
                  <div className="timeline-details">
                    <h6>Quarter-End Examination I (QEE 1)</h6>
                    <p>Internal assessment covering the first 25% of the syllabus. Important for final internal grades.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-badge">Sep - Oct</div>
                  <div className="timeline-details">
                    <h6>Quarter-End Examination II (QEE 2) & Mid-Term</h6>
                    <p>Mid-term examinations matching board question papers to evaluate baseline preparation.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-badge">Nov - Dec</div>
                  <div className="timeline-details">
                    <h6>Quarter-End Examination III (QEE 3) & Pre-Boards</h6>
                    <p>Conducted for 2nd Year students to practice the complete 3-hour exam format under CHSE standards.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-badge">Jan - Feb</div>
                  <div className="timeline-details">
                    <h6>Practical/Project Exams & Review Sessions</h6>
                    <p>Submission of Education practical logs and projects for external assessment. Board preparation revision panels.</p>
                  </div>
                </div>
                <div className="timeline-item special">
                  <div className="timeline-badge">March</div>
                  <div className="timeline-details">
                    <h6>CHSE Board Annual Examinations</h6>
                    <p>Final theory examinations conducted at designated board centers for +2 2nd Year students.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    }
  };

  return (
    <section className="section" id="courses">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Academic Programs</span>
          <h2 className="section-title">Courses Offered</h2>
          <p className="section-subtitle">
            Choose from our two comprehensive streams under the Council of Higher Secondary Education (CHSE), Odisha. Click a stream below to explore subject combinations, labs, and competitive coaching details.
          </p>
        </ScrollReveal>

        <ScrollReveal className="course-cards reveal">
          {/* +2 Science */}
          <div 
            className={`course-card interactive-card ${activeStream === "science" ? "active" : ""}`}
            onClick={() => handleStreamSelect("science")}
          >
            <div className="course-card-image">
              <img
                src="/assets/images/science-lab.png"
                alt="Science Laboratory at B.B. Chhatoi HSS"
                width="600"
                height="400"
              />
              <div className="course-card-badge">+2 Science</div>
              <div className="course-card-overlay-indicator">
                <span>{activeStream === "science" ? "Currently Viewing" : "Click to Explore Stream"}</span>
              </div>
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
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Physics, Chemistry, Biology / Mathematics
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  NEET & OJEE/JEE Preparation Support
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Modern Laboratory Facilities
                </div>
              </div>

              <div className="course-card-actions">
                <button 
                  type="button"
                  className={`btn btn-sm ${activeStream === "science" ? "btn-primary" : "btn-outline-dark"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStreamSelect("science");
                  }}
                >
                  {activeStream === "science" ? "Viewing Details" : "Explore Curriculum ↓"}
                </button>
                <Link 
                  href={isPreview ? "/academics?stream=science#fees" : "#fees"} 
                  className="btn btn-secondary btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isPreview) {
                      e.preventDefault();
                      const feesEl = document.getElementById("fees");
                      if (feesEl) {
                        feesEl.scrollIntoView({ behavior: "smooth" });
                      }
                      const event = new CustomEvent("changeFeeTab", { detail: { stream: "science" } });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  View Fees structure →
                </Link>
              </div>
            </div>
          </div>

          {/* +2 Arts */}
          <div 
            className={`course-card interactive-card ${activeStream === "arts" ? "active" : ""}`}
            onClick={() => handleStreamSelect("arts")}
          >
            <div className="course-card-image">
              <img
                src="/assets/images/arts-classroom.png"
                alt="Arts Classroom at B.B. Chhatoi HSS"
                width="600"
                height="400"
              />
              <div className="course-card-badge">+2 Arts</div>
              <div className="course-card-overlay-indicator">
                <span>{activeStream === "arts" ? "Currently Viewing" : "Click to Explore Stream"}</span>
              </div>
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
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  History, Political Science, Economics, Sociology
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Civil Services Foundation Guidance
                </div>
                <div className="course-feature">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Activity-Based Seminar Modules
                </div>
              </div>

              <div className="course-card-actions">
                <button 
                  type="button"
                  className={`btn btn-sm ${activeStream === "arts" ? "btn-primary" : "btn-outline-dark"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStreamSelect("arts");
                  }}
                >
                  {activeStream === "arts" ? "Viewing Details" : "Explore Curriculum ↓"}
                </button>
                <Link 
                  href={isPreview ? "/academics?stream=arts#fees" : "#fees"} 
                  className="btn btn-secondary btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isPreview) {
                      e.preventDefault();
                      const feesEl = document.getElementById("fees");
                      if (feesEl) {
                        feesEl.scrollIntoView({ behavior: "smooth" });
                      }
                      const event = new CustomEvent("changeFeeTab", { detail: { stream: "arts" } });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  View Fees structure →
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* If isPreview is true, show navigation to academics section, otherwise show the Interactive Details Panel */}
        {isPreview ? (
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/academics" className="btn btn-primary">
              Explore Subject Combinations & Full Course Details
            </Link>
          </div>
        ) : (
          <div 
            ref={detailsRef} 
            className="academics-dashboard-container"
            id="academics-dashboard"
          >
            <div className="academics-dashboard-header">
              <span className="dashboard-pre">Stream Curriculum & Schedule</span>
              <h3>{streamDetails[activeStream].title}</h3>
              <p className="dashboard-subtitle-text">{streamDetails[activeStream].subtitle}</p>
              <div className="dashboard-decorator" />
              <p className="dashboard-tagline">{streamDetails[activeStream].tagline}</p>
            </div>

            <div className="academics-tabs-header-wrapper">
              <div className="academics-tabs-header">
                {streamDetails[activeStream].tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`academics-tab ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="tab-icon">{tab.icon}</span>
                    <span className="tab-label">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="academics-dashboard-content">
              {renderTabContent()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
