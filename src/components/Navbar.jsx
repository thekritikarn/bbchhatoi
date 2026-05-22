"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "fees", label: "Fees" },
    { id: "admission", label: "Admission" },
    { id: "facilities", label: "Facilities" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar (events-bar is 40px high)
      setScrolled(window.scrollY >= 40);

      // Active section highlight
      const sections = ["home", "about", "courses", "fees", "admission", "facilities", "gallery", "contact"];
      const scrollPos = window.scrollY + 180; // offset for nav height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sync body overflow when mobile menu is toggled
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = scrolled ? 80 : 120; // estimate navbar height
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="container">
          <a
            href="#home"
            className="nav-logo"
            aria-label="B.B. Chhatoi Higher Secondary School — Home"
            onClick={(e) => handleSmoothScroll(e, "home")}
          >
            <img src="/assets/images/logo.jpg" alt="B.B. Chhatoi HSS Logo" width="48" height="48" />
            <div className="nav-logo-text">
              <h1>B.B. Chhatoi Higher Secondary School</h1>
              <span>(Under Moon Light Charitable Trust)</span>
            </div>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => handleSmoothScroll(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admission"
              className="nav-cta"
              onClick={(e) => handleSmoothScroll(e, "admission")}
            >
              Apply Now
            </a>
          </div>

          <button
            className={`nav-toggle ${mobileMenuOpen ? "active" : ""}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleSmoothScroll(e, item.id)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#admission"
          className="btn btn-primary"
          style={{ marginTop: "1rem" }}
          onClick={(e) => handleSmoothScroll(e, "admission")}
        >
          Apply Now
        </a>
      </div>
    </>
  );
}
