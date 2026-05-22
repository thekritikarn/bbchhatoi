import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    initials: "RS",
    name: "Ritu Sahu",
    meta: "+2 Science, 2024 Batch",
    quote:
      "The teachers here genuinely care. I scored 89% in my CHSE boards and got into OJEE thanks to the extra coaching they provided — all within the school fees.",
    color: "#1B5E3B",
  },
  {
    initials: "PB",
    name: "Prakash Behera",
    meta: "Parent · Dhodra Village",
    quote:
      "As a farmer, I was worried about affording +2 for my son. The school adjusted fees based on our income. I can never thank them enough for this opportunity.",
    color: "#B8860B",
  },
  {
    initials: "SM",
    name: "Sunita Majhi",
    meta: "+2 Arts, 2023 Batch",
    quote:
      "Coming from a tribal background, I never thought I'd get this quality of education so close to home. The hostel facility made it possible for me to study safely.",
    color: "#0F3D26",
  },
  {
    initials: "AK",
    name: "Akash Kumar",
    meta: "+2 Science, 2025 Batch",
    quote:
      "Biology sir used to take extra doubt classes every evening. That dedication helped me clear my NEET prelims. The lab facilities here are genuinely good.",
    color: "#2A7B50",
  },
  {
    initials: "DN",
    name: "Deepa Nayak",
    meta: "Parent · Nabarangpur",
    quote:
      "Safe hostel, good food, caring teachers — as a mother sending her daughter away from home, I couldn't have asked for a better school.",
    color: "#966D09",
  },
  {
    initials: "MH",
    name: "Manoj Harijan",
    meta: "+2 Arts, 2022 Batch",
    quote:
      "I was on scholarship and the school helped me fill every form. Today I'm preparing for OPSC. This school changed my life completely.",
    color: "#144A2E",
  },
];

export default function TestimonialsStrip() {
  // Duplicate for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Student &amp; Parent Voices</span>
          <h2 className="section-title">Stories That Inspire Us</h2>
          <p className="section-subtitle">
            Real words from the students and families who have trusted B.B. Chhatoi HSS with their futures.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-width scrolling track (outside container for edge-to-edge) */}
      <div className="testimonials-track-wrap">
        <div className="testimonials-track">
          {doubled.map((t, i) => (
            <div key={i} className="testimonial-card">
              {/* Quote icon */}
              <div className="testimonial-quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
