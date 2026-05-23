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

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="contact-card-body">
                  <h4>Social & Support Channels</h4>
                  <p>
                    Chat with our desk or follow our official social handles for news and updates.
                  </p>
                  <div className="contact-social-links-grid">
                    <a 
                      href="https://wa.me/918637264915" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-social-link-btn whatsapp"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>WhatsApp Support Desk</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/bbchhatoihss" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-social-link-btn instagram"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      <span>Instagram (@bbchhatoihss)</span>
                    </a>
                  </div>
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
