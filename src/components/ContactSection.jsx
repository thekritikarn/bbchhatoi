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

  const handleInquireClick = (e) => {
    if (!isPreview) {
      e.preventDefault();
      const element = document.getElementById("inquiry-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ============================================================
           CTA BANNER
           ============================================================ */}
      <section className="section cta-banner">
        <div className="container">
          <ScrollReveal className="cta-content reveal">
            <span className="cta-subtitle-badge">Admissions 2026-27</span>
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Enrollment is now officially open for both Science and Arts streams. Visit our campus facilitation center or submit an online inquiry to secure your seat.
            </p>
            <div className="cta-actions">
              <Link 
                href={isPreview ? "/contact#inquiry-section" : "#inquiry-section"} 
                onClick={handleInquireClick}
                className="btn btn-primary btn-lg cta-primary-btn"
              >
                Inquire Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+918637264915" className="btn btn-outline btn-lg cta-secondary-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-phone-icon">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Office: +91 86372 64915
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
            <span className="section-label">Connect With Us</span>
            <h2 className="section-title">Contact Our Campus</h2>
            <p className="section-subtitle">
              Have questions regarding admissions, course selection, eligibility criteria, or hostel accommodation? Reach out to our facilitation desk.
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
                <div className="contact-card-body">
                  <h4>Campus Location</h4>
                  <p>
                    B.B. Chhatoi Higher Secondary School
                    <br />
                    At/Po: Dhodra, Ps: Umerkote
                    <br />
                    Dist: Nabarangpur, Odisha – 764073
                  </p>
                  <span className="contact-landmark-tag">📍 Landmark: Opposite Dhodra Forest Range Office</span>
                </div>
              </div>
 
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="contact-card-body">
                  <h4>Helplines & Office Hours</h4>
                  <p>
                    Principal Office: <a href="tel:+918637264915">+91 86372 64915</a>
                    <br />
                    Admission Incharge: <a href="tel:+919668183662">+91 96681 83662</a>
                    <br />
                    Governing Trust Desk: <a href="tel:+919937653872">+91 99376 53872</a>
                  </p>
                  <span className="contact-timing-tag">🕒 Timing: 10:00 AM - 4:00 PM (Monday - Saturday)</span>
                </div>
              </div>
 
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-card-body">
                  <h4>Official Emails</h4>
                  <p>
                    Principal: <a href="mailto:bbchhatoihss@gmail.com">bbchhatoihss@gmail.com</a>
                    <br />
                    Admission Desk: <a href="mailto:uniquesangram1@gmail.com">uniquesangram1@gmail.com</a>
                  </p>
                  <span className="contact-response-tag">✉ Response Rate: Within 24-48 Business Hours</span>
                </div>
              </div>
 
            </ScrollReveal>
 
            {/* Right: Interactive Map */}
            {!isPreview && (
              <ScrollReveal className="contact-map-card-wrapper reveal-right">
                <div className="map-wrapper-card">
                  <div className="map-card-header">
                    <span className="map-badge">Interactive Map</span>
                    <h5>Dhodra Campus Location</h5>
                  </div>
                  <div className="map-container">
                    <iframe
                      src="https://maps.google.com/maps?q=B.B.%20CHHATOI%20SCHOOL%20%26%20COLLEGE%20OF%20NURSING&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      allowFullScreen=""
                      loading="lazy"
                      title="B.B. Chhatoi HSS Location Map"
                    ></iframe>
                  </div>
                  <a
                    href="https://maps.google.com/?q=B.B.+CHHATOI+SCHOOL+%26+COLLEGE+OF+NURSING"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-directions-btn"
                  >
                    Open in Google Maps
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-directions-arrow">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Centered Inquiry Form Section Below */}
          <ScrollReveal className="contact-form-section reveal">
            <div id="inquiry-section" className="contact-form-card">
              <div className="form-card-header">
                <span className="form-badge">Inquiry Desk</span>
                <h3>Send an Inquiry</h3>
                <p>Please fill out the form below, and our admission facilitation team will contact you back shortly.</p>
              </div>

              <form id="inquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <div className="input-with-icon">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter student name"
                        required
                        style={{ borderColor: errors.name ? "var(--error)" : "" }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <div className="input-with-icon">
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <div className="input-with-icon">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="student.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="course">
                      Select Stream / Interest *
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
                        Select a stream
                      </option>
                      <option value="science">+2 Science Stream</option>
                      <option value="arts">+2 Arts Stream</option>
                      <option value="both">General / Other Queries</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message / Question
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Describe your questions regarding admissions, fees, certificates, or hostel..."
                    rows={5}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  style={{
                    width: "100%",
                    background: success ? "var(--success)" : "",
                    borderColor: success ? "var(--success)" : "",
                  }}
                  disabled={submitting || success}
                >
                  {submitting ? (
                    "Sending Inquiry..."
                  ) : success ? (
                    "✓ Inquiry Sent Successfully!"
                  ) : (
                    <>
                      Submit Inquiry
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="submit-btn-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
