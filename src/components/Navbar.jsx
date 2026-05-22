"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The events bar takes up ~40px. 
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out top-0 left-0 ${
        scrolled ? "glass shadow-md py-2" : "bg-transparent py-4 mt-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/logo.jpg"
                alt="B.B. Chhatoi HSS Logo"
                fill
                className="object-contain rounded-full shadow-sm"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1
                className={`font-bold transition-colors duration-300 ${
                  scrolled ? "text-primary text-sm sm:text-base" : "text-white text-base sm:text-lg"
                }`}
              >
                B.B. Chhatoi Higher Secondary School
              </h1>
              <span
                className={`text-xs transition-colors duration-300 ${
                  scrolled ? "text-primary-light" : "text-gray-200"
                }`}
              >
                (Under Moon Light Charitable Trust)
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Courses", "Facilities", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  scrolled ? "text-primary hover:text-primary-light" : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}
            <a
              href="#apply"
              className={`px-5 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-light"
                  : "bg-gold text-primary hover:bg-gold-light"
              }`}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                scrolled ? "text-primary" : "text-white"
              } hover:bg-black/10 transition`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-xl absolute w-full`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {["Home", "About", "Courses", "Facilities", "Gallery", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-primary hover:text-gold hover:bg-gray-50 rounded-md"
            >
              {item}
            </Link>
          ))}
          <a
            href="#apply"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold bg-primary text-white hover:bg-primary-light shadow-md"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
