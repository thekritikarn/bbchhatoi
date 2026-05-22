"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection({ isPreview = false }) {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = true;
    if (!formState.phone.trim()) newErrors.phone = true;
    if (!formState.course) newErrors.course = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });

      // Clear success state after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <>
      {/* ============================================================
           CTA BANNER
           ============================================================ */}
      <section className="section cta-banner">
        <div className="container">
          <ScrollReveal className="cta-content reveal">
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Applications for the 2026-27 academic session are now open. Take the first step toward a brighter future
              with B.B. Chhatoi Higher Secondary School.
            </p>
            <div className="cta-actions">
              <Link href={isPreview ? "/contact" : "#contact"} className="btn btn-primary btn-lg">
                Inquire Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+918637264915" className="btn btn-outline btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "18px", height: "18px" }}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +91 8637264915
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
 
      {/* ============================================================
           CONTACT SECTION
           ============================================================ */}
      <section className="section" id="contact">
        <div className="container">
          <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Have questions about admissions, courses, or campus facilities? We&apos;re here to help.
            </p>
          </ScrollReveal>
 
          <div className="contact-grid">
            {/* Left: Contact Info */}
            <ScrollReveal className="contact-info-cards reveal-left">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Campus Address</h4>
                  <p>
                    At/Po: Dhodra, Ps: Umerkote
                    <br />
                    Dist: Nabarangpur
                    <br />
                    Odisha – 764073
                  </p>
                </div>
              </div>
 
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+918637264915">+91 8637264915</a> (Principal)
                    <br />
                    <a href="tel:+919668183662">+91 9668183662</a> (Admission Incharge)
                    <br />
                    <a href="tel:+919937653872">+91 9937653872</a> (Trust)
                  </p>
                </div>
              </div>
 
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:bbchhatoihss@gmail.com">bbchhatoihss@gmail.com</a> (Principal)
                    <br />
                    <a href="mailto:uniquesangram1@gmail.com">uniquesangram1@gmail.com</a> (Admission Incharge)
                  </p>
                </div>
              </div>
 
              {/* Map */}
              {!isPreview && (
                <div className="map-container">
                  <iframe
                    src="https://maps.google.com/maps?q=B.B.%20CHHATOI%20SCHOOL%20%26%20COLLEGE%20OF%20NURSING&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    title="B.B. Chhatoi HSS Location Map"
                  ></iframe>
                </div>
              )}
            </ScrollReveal>
 
            {/* Right: Inquiry Form */}
            <ScrollReveal className="contact-form reveal-right">
              <h3 style={{ marginBottom: "var(--space-lg)", color: "var(--primary)" }}>Send an Inquiry</h3>
              <form id="inquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                      style={{ borderColor: errors.name ? "var(--error)" : "" }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+91 XXXXXXXXXX"
                      required
                      style={{ borderColor: errors.phone ? "var(--error)" : "" }}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="course">
                      Course Interest *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formState.course}
                      onChange={handleChange}
                      className="form-select"
                      required
                      style={{ borderColor: errors.course ? "var(--error)" : "" }}
                    >
                      <option value="" disabled>
                        Select a course
                      </option>
                      <option value="science">+2 Science</option>
                      <option value="arts">+2 Arts</option>
                      <option value="both">Not sure / Both</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your inquiry, questions, or any specific requirements..."
                    rows={5}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    background: success ? "var(--success)" : "",
                    borderColor: success ? "var(--success)" : "",
                  }}
                  disabled={submitting || success}
                >
                  {submitting ? (
                    "Sending..."
                  ) : success ? (
                    "✓ Message Sent!"
                  ) : (
                    <>
                      Send Inquiry
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
