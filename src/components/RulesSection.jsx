"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function RulesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Student Responsibilities",
      rules: [
        "Maintain discipline and decorum at all times on campus",
        "Attend all examinations, internal tests, and academic activities",
        "Participate actively in campus activities and events",
        "Maintain hygiene and cleanliness in classrooms, hostels, and campus",
        "Follow all institutional rules and regulations without exception",
        "Respect faculty, staff, and fellow students",
      ],
    },
    {
      title: "Institutional Policies",
      rules: [
        "Fees once paid are non-refundable under any circumstances",
        "Original certificates may remain deposited with the institution during the course",
        "Misconduct, indiscipline, or violation of rules may lead to removal or rustication",
        "Any damage to institutional property must be compensated by the student/guardian",
        "Providing false or misleading information can lead to cancellation of admission",
        "The institution's decision on disciplinary matters shall be final",
      ],
    },
    {
      title: "Local Guardian Requirements",
      rules: [
        "A local guardian undertaking form must be submitted at the time of admission",
        "Parent authorization is required for local guardian designation",
        "The local guardian assumes discipline responsibility during the study period",
        "Guardian must be available for parent-teacher meetings and emergencies",
        "Change of local guardian requires prior written approval from the institution",
      ],
    },
    {
      title: "Academic Requirements",
      rules: [
        "Minimum 75% attendance is mandatory for appearing in examinations",
        "All internal tests and evaluations are compulsory",
        "Students must complete all assignments and practical work on time",
        "Academic progress is monitored regularly and reported to parents/guardians",
        "Students scoring below minimum grades may be given additional support or counseling",
      ],
    },
  ];

  return (
    <section className="section section-alt" id="rules">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Guidelines</span>
          <h2 className="section-title">Rules & Regulations</h2>
          <p className="section-subtitle">
            Maintaining discipline and academic integrity for a productive learning environment.
          </p>
        </ScrollReveal>

        <ScrollReveal className="accordion reveal">
          {sections.map((section, idx) => (
            <div key={idx} className={`accordion-item ${openIndex === idx ? "active" : ""}`}>
              <button className="accordion-header" onClick={() => toggleAccordion(idx)}>
                {section.title}
                <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="accordion-body"
                style={{
                  maxHeight: openIndex === idx ? "400px" : "0",
                  transition: "max-height 0.4s ease-out",
                }}
              >
                <div className="accordion-body-inner">
                  <ul>
                    {section.rules.map((rule, rIdx) => (
                      <li key={rIdx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
