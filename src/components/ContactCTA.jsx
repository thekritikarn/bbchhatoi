import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const contacts = [
  {
    label: "Principal",
    value: "+91 82492 38846",
    href: "tel:+918249238846",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
  {
    label: "Admission Incharge",
    value: "+91 96681 83662",
    href: "tel:+919668183662",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
  {
    label: "Email (Principal)",
    value: "bbchhatoihss@gmail.com",
    href: "mailto:bbchhatoihss@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Dhodra, Papadahandi, Nabarangpur, Odisha — 764059",
    href: "https://maps.google.com/?q=Dhodra+Nabarangpur+Odisha",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactCTA() {
  return (
    <section className="contact-cta-section" id="contact-cta">
      {/* Decorative dot pattern */}
      <div className="contact-cta-pattern" aria-hidden="true" />

      <div className="container">
        <div className="contact-cta-grid">
          {/* Left — headline */}
          <ScrollReveal className="contact-cta-left reveal-left">
            <span className="section-label" style={{ color: "var(--gold-light)" }}>
              Get In Touch
            </span>
            <h2 className="contact-cta-heading">
              We&apos;d Love to<br />
              <span>Hear From You</span>
            </h2>
            <p className="contact-cta-sub">
              Whether you have questions about admission, fee structure, hostel, or anything else — reach out and
              we&apos;ll get back to you promptly.
            </p>

            <div className="contact-cta-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Send an Enquiry
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+919668183662" className="btn btn-outline contact-cta-call">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                Call Now
              </a>
            </div>
          </ScrollReveal>

          {/* Right — contact details */}
          <ScrollReveal className="contact-cta-right reveal-right">
            {contacts.map((c, i) => (
              <a key={i} href={c.href} className="contact-cta-item" target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <div className="contact-cta-item-icon">{c.icon}</div>
                <div>
                  <div className="contact-cta-item-label">{c.label}</div>
                  <div className="contact-cta-item-value">{c.value}</div>
                </div>
                <svg className="contact-cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
