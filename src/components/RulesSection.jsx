"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function RulesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: "conduct",
      title: "Code of Conduct",
      subtitle: "General expectations regarding discipline, behavior, and campus decorum.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="tab-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      rules: [
        {
          title: "Campus Decorum",
          desc: "Students must maintain discipline, respect faculty, staff, and peers, and uphold institutional dignity at all times.",
          tag: "Mandatory",
          tagType: "mandatory"
        },
        {
          title: "Mobile Phone Ban",
          desc: "Cell phones, smartwatches, and personal electronic devices are strictly prohibited inside classrooms, laboratories, and examination halls.",
          tag: "Strictly Prohibited",
          tagType: "prohibited"
        },
        {
          title: "Cleanliness & Hygiene",
          desc: "Classrooms, laboratories, corridors, and campus green zones must be kept clean. Littering is strictly prohibited.",
          tag: "Official Policy",
          tagType: "policy"
        },
        {
          title: "Property Safety",
          desc: "Any damage to institutional assets, library books, lab equipment, or furniture must be fully compensated by the student and guardian.",
          tag: "Mandatory",
          tagType: "mandatory"
        }
      ]
    },
    {
      id: "academics",
      title: "Attendance & Academics",
      subtitle: "Mandated classroom attendance, internal assessments, and academic tracking guidelines.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="tab-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      rules: [
        {
          title: "75% Attendance Rule",
          desc: "A minimum of 75% classroom attendance in both theory and practical classes is compulsory for appearing in CHSE final board examinations.",
          tag: "Mandatory",
          tagType: "mandatory"
        },
        {
          title: "Internal Assessments",
          desc: "Participation in all internal examinations, unit tests, monthly reviews, and practical evaluations is mandatory.",
          tag: "Mandatory",
          tagType: "mandatory"
        },
        {
          title: "Absence Leave Request",
          desc: "Any absence from classes must be pre-authorized via a written application signed by the parent or authorized local guardian.",
          tag: "Official Policy",
          tagType: "policy"
        },
        {
          title: "Assignment Timelines",
          desc: "Lab reports, projects, and assignments must be submitted strictly within the specified deadlines to secure internal grading points.",
          tag: "Mandatory",
          tagType: "mandatory"
        }
      ]
    },
    {
      id: "uniform",
      title: "Dress Code & Identity",
      subtitle: "Uniform standards to maintain institutional identity, pride, and parity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="tab-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      rules: [
        {
          title: "Standard Uniform",
          desc: "Steel grey trousers, white shirt, school tie, blazer, and polished black leather shoes are mandatory from Monday to Friday (excluding Wednesdays).",
          tag: "Mandatory",
          tagType: "mandatory"
        },
        {
          title: "Sports/Wednesday Uniform",
          desc: "Designated physical education t-shirts and sportswear are required on Wednesdays and Saturdays.",
          tag: "Mandatory",
          tagType: "mandatory"
        },
        {
          title: "Identity Card (ID)",
          desc: "The official school ID card must be worn visibly around the neck at all times on the school campus.",
          tag: "Mandatory",
          tagType: "mandatory"
        },
        {
          title: "Grooming Standards",
          desc: "Students must maintain neat hair and clean grooming standards in compliance with institutional guidelines.",
          tag: "Official Policy",
          tagType: "policy"
        }
      ]
    },
    {
      id: "hostel",
      title: "Hostel Guidelines",
      subtitle: "Living regulations for boarders residing in the school hosteling facilities.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="tab-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      rules: [
        {
          title: "Curfew & Timings",
          desc: "Hostel boarders must return to their rooms by 7:00 PM. Unauthorized campus leaves or outings are strictly prohibited.",
          tag: "Strictly Prohibited",
          tagType: "prohibited"
        },
        {
          title: "Mandatory Study Hours",
          desc: "Quiet study hours from 6:30 PM to 9:00 PM must be observed daily under the supervision of the hostel warden.",
          tag: "Mandatory",
          tagType: "mandatory"
        },
        {
          title: "Room Audits",
          desc: "Rooms must be kept tidy. Bi-weekly audits are conducted by the hostel management committee for safety and cleanliness.",
          tag: "Official Policy",
          tagType: "policy"
        },
        {
          title: "Visitor Policies",
          desc: "Parents and designated local guardians are only allowed inside visiting rooms during specific visiting hours and must register at the security gate.",
          tag: "Official Policy",
          tagType: "policy"
        }
      ]
    },
    {
      id: "disciplinary",
      title: "Compliance & Safety",
      subtitle: "Statutory rules, anti-ragging measures, and guardian undertakings.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="tab-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      rules: [
        {
          title: "Zero-Tolerance Ragging",
          desc: "Ragging in any form is a criminal offense. Violators will face immediate expulsion, rustication, and referral to law enforcement.",
          tag: "Strictly Prohibited",
          tagType: "prohibited"
        },
        {
          title: "Guardian Undertaking",
          desc: "A signed local guardian undertaking form is mandatory at admission. The guardian assumes behavioral responsibility for the student.",
          tag: "Mandatory",
          tagType: "mandatory"
        },
        {
          title: "Misconduct Penalties",
          desc: "Any form of harassment, bunking, or substance violation results in immediate suspension and referral to the Disciplinary Committee.",
          tag: "Strictly Prohibited",
          tagType: "prohibited"
        },
        {
          title: "Grievance Redressal",
          desc: "Students can report any issues or seek counseling at the school Grievance Cell in confidence. Security & mental health are highly valued.",
          tag: "Official Policy",
          tagType: "policy"
        }
      ]
    }
  ];

  return (
    <section className="section section-alt" id="rules">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Institutional Guidelines</span>
          <h2 className="section-title">Rules & Regulations</h2>
          <p className="section-subtitle">
            Upholding discipline, academic integrity, and dress code standards to cultivate a productive educational environment.
          </p>
        </ScrollReveal>

        <div className="rules-dashboard">
          {/* Left Navigation (Sidebar) */}
          <ScrollReveal className="rules-sidebar reveal-left">
            <div className="rules-tabs-list">
              {categories.map((cat, idx) => (
                <button
                  key={cat.id}
                  className={`rules-tab-btn ${activeTab === idx ? "active" : ""}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="rules-tab-icon-wrapper">{cat.icon}</div>
                  <span className="rules-tab-title">{cat.title}</span>
                  <svg className="rules-tab-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Rules Grid Content */}
          <ScrollReveal className="rules-content-pane reveal-right">
            <div className="rules-pane-header">
              <span className="rules-pane-badge">Category Details</span>
              <h3>{categories[activeTab].title}</h3>
              <p>{categories[activeTab].subtitle}</p>
            </div>

            <div className="rules-cards-grid">
              {categories[activeTab].rules.map((rule, idx) => (
                <div key={idx} className={`rule-detail-card ${rule.tagType}`}>
                  <div className="rule-card-header">
                    <span className={`rule-tag ${rule.tagType}`}>{rule.tag}</span>
                    <span className="rule-number">{(idx + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h4 className="rule-card-title">{rule.title}</h4>
                  <p className="rule-card-desc">{rule.desc}</p>
                  <div className="rule-card-decoration" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Anti-Ragging compliance callout */}
        <ScrollReveal className="rules-compliance-banner reveal" style={{ marginTop: "var(--space-3xl)" }}>
          <div className="compliance-banner-inner">
            <div className="compliance-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0-8v6m0 5h.01M5.938 18h12.124c1.347 0 2.189-1.458 1.515-2.625L13.515 5.375c-.674-1.167-2.356-1.167-3.03 0L4.423 15.375c-.674 1.167.168 2.625 1.515 2.625z" />
              </svg>
            </div>
            <div className="compliance-banner-body">
              <div className="compliance-badge">UGC & State Government Directive</div>
              <h3>Zero-Tolerance Anti-Ragging Campus</h3>
              <p>
                As per Supreme Court directives and UGC guidelines, ragging is completely banned on our campus. Anyone found guilty of ragging, harassment, or intimidation inside the school premises or hostel will face immediate expulsion and criminal prosecution.
              </p>
            </div>
            <div className="compliance-banner-cta">
              <a href="tel:18001805522" className="btn btn-primary compliance-btn">
                National Helpline: 1800-180-5522
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
