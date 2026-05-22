"use client";

import { useEffect, useState, useRef } from "react";

function StatCounter({ target, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let startTime = null;
            const duration = 2000;

            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // Ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(target);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return (
    <div className="hero-stat" ref={elementRef}>
      <div className="number">
        {count}
        {suffix}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

const words = ["Excellence", "Leadership", "Knowledge", "Success"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState({ opacity: 1, transform: "translateY(0)" });
  const heroBgRef = useRef(null);

  useEffect(() => {
    // Word cycling typing animation
    const cycleInterval = setInterval(() => {
      // Fade out
      setFadeState({ opacity: 0, transform: "translateY(10px)" });

      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        // Fade in
        setFadeState({ opacity: 1, transform: "translateY(0)" });
      }, 400);
    }, 3000);

    // Subtle parallax effect on scroll
    const handleScroll = () => {
      if (heroBgRef.current) {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroBgRef.current.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0) scale(1.1)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(cycleInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          ref={heroBgRef}
          src="/assets/images/hero-campus.png"
          alt="B.B. Chhatoi Higher Secondary School Campus"
          width="1920"
          height="1080"
          style={{ transition: "transform 0.1s ease-out" }}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-pattern"></div>

      {/* Decorative elements */}
      <div className="hero-decor hero-decor-1"></div>
      <div className="hero-decor hero-decor-2"></div>
      <div className="hero-decor hero-decor-3"></div>

      <div className="container">
        <div className="hero-content">
          <h1>
            Nurturing{" "}
            <span
              className="highlight hero-cycle"
              style={{
                display: "inline-block",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                opacity: fadeState.opacity,
                transform: fadeState.transform,
              }}
            >
              {words[wordIndex]}
            </span>
            ,<br />
            Growing Future Leaders
          </h1>

          <p className="hero-subtitle">
            Education should not be restricted by money. We provide quality +2 Science & Arts education under CHSE,
            Odisha — empowering rural and tribal students with affordable, career-oriented learning.
          </p>

          <div className="hero-actions">
            <a
              href="#admission"
              className="btn btn-primary btn-lg"
              onClick={(e) => handleSmoothScroll(e, "admission")}
            >
              Apply for Admission 2026-27
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#courses"
              className="btn btn-outline btn-lg"
              onClick={(e) => handleSmoothScroll(e, "courses")}
            >
              Explore Courses
            </a>
          </div>

          <div className="hero-stats">
            <StatCounter target={500} suffix="+" label="Students Enrolled" />
            <StatCounter target={15} suffix="+" label="Expert Faculty" />
            <StatCounter target={2} suffix="" label="Academic Streams" />
            <StatCounter target={15} suffix="+" label="Years of Trust" />
          </div>
        </div>
      </div>
    </section>
  );
}
