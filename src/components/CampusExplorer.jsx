"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const spaces = [
  {
    id: "classrooms",
    title: "Classrooms",
    subtitle: "Where Learning Begins",
    desc: "Spacious, well-ventilated classrooms with modern teaching aids, green chalkboards, and a disciplined yet friendly learning environment for every student.",
    image: "/assets/images/classroom.png",
    tag: "Academic",
    tagColor: "var(--primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "science-lab",
    title: "Science Laboratories",
    subtitle: "Hands-On Discovery",
    desc: "Fully equipped Physics, Chemistry and Biology labs where students carry out CHSE practical experiments and build a strong foundation for NEET & OJEE.",
    image: "/assets/images/science-lab.png",
    tag: "Science",
    tagColor: "var(--primary-light)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: "library",
    title: "School Library",
    subtitle: "Knowledge at Your Fingertips",
    desc: "A well-stocked library with CHSE textbooks, reference books, competitive exam guides, and a dedicated quiet reading area for focused self-study.",
    image: "/assets/images/library.png",
    tag: "Resources",
    tagColor: "var(--gold-dark)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    id: "sports",
    title: "Sports Ground",
    subtitle: "Fit Body, Sharp Mind",
    desc: "Open sports grounds for cricket, football, athletics and more. Physical education is an integral part of our holistic development programme.",
    image: "/assets/images/sports.png",
    tag: "Sports",
    tagColor: "#2EA765",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M14.12 9.88l4.24-4.24M9.88 14.12l-4.24 4.24M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    subtitle: "Digital Skills for Tomorrow",
    desc: "Modern computer lab with internet connectivity, enabling students to build digital literacy and access online learning resources alongside their curriculum.",
    image: "/assets/images/computer-lab.png",
    tag: "Technology",
    tagColor: "#3B82F6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "hostel",
    title: "Student Hostel",
    subtitle: "A Home Away From Home",
    desc: "Safe, comfortable hostel facilities for outstation students with nutritious food, regular supervision, and a conducive environment for study and rest.",
    image: "/assets/images/hostel.png",
    tag: "Residential",
    tagColor: "var(--gold)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 22V8l9-6 9 6v14" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
];

export default function CampusExplorer() {
  const [active, setActive] = useState(null);

  const opened = active ? spaces.find((s) => s.id === active) : null;

  return (
    <section className="section campus-explorer-section" id="campus">
      {/* Header */}
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Campus Tour</span>
          <h2 className="section-title">Explore Our Campus</h2>
          <p className="section-subtitle">
            From modern laboratories to serene reading spaces — discover the facilities that make learning at B.B. Chhatoi a complete, enriching experience.
          </p>
        </ScrollReveal>

        {/* Card Grid */}
        <ScrollReveal className="campus-grid reveal-stagger">
          {spaces.map((space) => (
            <button
              key={space.id}
              className="campus-card"
              onClick={() => setActive(space.id)}
              aria-label={`Explore ${space.title}`}
            >
              {/* Image */}
              <div className="campus-card-img-wrap">
                <img
                  src={space.image}
                  alt={space.title}
                  width="480"
                  height="300"
                  loading="lazy"
                />
                {/* Tag badge */}
                <span className="campus-tag" style={{ background: space.tagColor }}>
                  {space.tag}
                </span>
                {/* Hover overlay */}
                <div className="campus-card-overlay">
                  <span className="campus-explore-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                    View Details
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="campus-card-body">
                <div className="campus-card-icon" style={{ color: space.tagColor }}>
                  {space.icon}
                </div>
                <div className="campus-card-text">
                  <h3 className="campus-card-title">{space.title}</h3>
                  <p className="campus-card-subtitle">{space.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </ScrollReveal>
      </div>

      {/* ── Lightbox Modal ── */}
      {opened && (
        <div
          className="campus-modal-backdrop"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Details: ${opened.title}`}
        >
          <div
            className="campus-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="campus-modal-close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <div className="campus-modal-img-wrap">
              <img src={opened.image} alt={opened.title} />
              <span className="campus-tag campus-modal-tag" style={{ background: opened.tagColor }}>
                {opened.tag}
              </span>
            </div>

            {/* Content */}
            <div className="campus-modal-content">
              <div className="campus-modal-icon" style={{ color: opened.tagColor }}>
                {opened.icon}
              </div>
              <h3 className="campus-modal-title">{opened.title}</h3>
              <p className="campus-modal-sub">{opened.subtitle}</p>
              <p className="campus-modal-desc">{opened.desc}</p>

              {/* Nav between cards */}
              <div className="campus-modal-nav">
                <button
                  className="campus-nav-btn"
                  onClick={() => {
                    const idx = spaces.findIndex((s) => s.id === active);
                    setActive(spaces[(idx - 1 + spaces.length) % spaces.length].id);
                  }}
                >
                  ← Previous
                </button>
                <span className="campus-nav-dots">
                  {spaces.map((s) => (
                    <span
                      key={s.id}
                      className={`campus-dot ${s.id === active ? "active" : ""}`}
                      onClick={() => setActive(s.id)}
                    />
                  ))}
                </span>
                <button
                  className="campus-nav-btn"
                  onClick={() => {
                    const idx = spaces.findIndex((s) => s.id === active);
                    setActive(spaces[(idx + 1) % spaces.length].id);
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
