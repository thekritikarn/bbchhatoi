"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function FacilitiesSection({ isPreview = false }) {
  const facilities = [
    {
      title: "Student Hostel",
      desc: "Separate hostel with safe accommodation",
      detail: "Separate male & female blocks · Nutritious meals · 24/7 supervision",
      accent: "#1B5E3B",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "School Transport",
      desc: "Convenient transport arrangements",
      detail: "Daily bus routes · Safe commute · Covers nearby villages",
      accent: "#D4A017",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
    },
    {
      title: "Science Labs",
      desc: "Modern laboratory equipment",
      detail: "Physics · Chemistry · Biology · NEET-standard practical setup",
      accent: "#1B5E3B",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "School Library",
      desc: "Reference books & study materials",
      detail: "CHSE textbooks · Competitive exam guides · Quiet reading area",
      accent: "#D4A017",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Fooding Facility",
      desc: "Quality food arrangement available",
      detail: "Hygienic kitchen · Balanced meals · Affordable for hostel students",
      accent: "#1B5E3B",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/>
        </svg>
      ),
    },
    {
      title: "Exam Preparation",
      desc: "NEET & OJEE coaching support",
      detail: "Regular mock tests · Expert faculty · Doubt sessions every evening",
      accent: "#D4A017",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
        </svg>
      ),
    },
    {
      title: "Academic Monitoring",
      desc: "Regular tests & internal exams",
      detail: "Weekly tests · Parent reports · Student progress tracking",
      accent: "#1B5E3B",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Cultural Activities",
      desc: "Events, programs & celebrations",
      detail: "Annual day · Sports meet · Republic & Independence Day events",
      accent: "#D4A017",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
  ];

  const displayedFacilities = isPreview ? facilities.slice(0, 4) : facilities;

  return (
    <section className="section section-alt" id="facilities">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Campus Facilities</span>
          <h2 className="section-title">Everything You Need to Succeed</h2>
          <p className="section-subtitle">
            Our campus is equipped with modern facilities to ensure a comfortable and productive learning experience for every student.
          </p>
        </ScrollReveal>

        <ScrollReveal className="facilities-grid reveal-stagger">
          {displayedFacilities.map((fac, idx) => (
            <div key={idx} className="facility-card">
              {/* Top accent bar */}
              <div className="facility-card-accent" style={{ background: fac.accent }} />

              <div className="facility-card-body">
                <div className="facility-icon" style={{ background: `${fac.accent}15`, color: fac.accent }}>
                  {fac.icon}
                </div>
                <h4>{fac.title}</h4>
                <p className="facility-desc">{fac.desc}</p>
                <p className="facility-detail">{fac.detail}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>

        {isPreview && (
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/campus-life" className="btn btn-primary">
              View All Facilities &amp; Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
