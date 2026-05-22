"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/academics", label: "Academics" },
    { path: "/admission", label: "Admission" },
    { path: "/campus-life", label: "Campus Life" },
    { path: "/rules", label: "Rules" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar (events-bar is 40px high)
      setScrolled(window.scrollY >= 40);
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

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <>
      <nav className={`navbar ${scrolled || pathname !== "/" ? "scrolled" : ""}`} id="navbar">
        <div className="container">
          <Link
            href="/"
            className="nav-logo"
            aria-label="B.B. Chhatoi Higher Secondary School — Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src="/assets/images/logo.jpg" alt="B.B. Chhatoi HSS Logo" width="48" height="48" />
            <div className="nav-logo-text">
              <h1>B.B. Chhatoi Higher Secondary School</h1>
              <span>(Under Moon Light Charitable Trust)</span>
            </div>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={isActive(item.path) ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admission"
              className="nav-cta"
            >
              Apply Now
            </Link>
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
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className={isActive(item.path) ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/admission"
          className="btn btn-primary"
          style={{ marginTop: "1rem" }}
          onClick={() => setMobileMenuOpen(false)}
        >
          Apply Now
        </Link>
      </div>
    </>
  );
}
