"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/assets/images/hero-campus.png",
      alt: "B.B. Chhatoi HSS Campus Building",
      label: "Our Campus",
      icon: "🏫",
    },
    {
      src: "/assets/images/science-lab.png",
      alt: "Students in Science Laboratory",
      label: "Science Laboratory",
      icon: "🔬",
    },
    {
      src: "/assets/images/arts-classroom.png",
      alt: "Arts Classroom Session",
      label: "Classroom Learning",
      icon: "📚",
    },
    {
      src: "/assets/images/hostel.png",
      alt: "Student Hostel Building",
      label: "Hostel Facility",
      icon: "🏠",
    },
    {
      src: "/assets/images/sports.png",
      alt: "Students Playing Sports",
      label: "Sports Activities",
      icon: "⚽",
    },
    {
      src: "/assets/images/cultural.png",
      alt: "Cultural Program Performance",
      label: "Cultural Events",
      icon: "🎭",
    },
  ];

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Campus Life</span>
          <h2 className="section-title">Life at B.B. Chhatoi HSS</h2>
          <p className="section-subtitle">
            A glimpse into our vibrant campus, academic activities, and student life. Click any photo to enlarge.
          </p>
        </ScrollReveal>

        <ScrollReveal className="gallery-grid reveal">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item" onClick={() => setSelectedImage(img)}>
              <img src={img.src} alt={img.alt} width="600" height="400" />

              {/* Always-visible caption bar at bottom */}
              <div className="gallery-caption">
                <span className="gallery-caption-icon">{img.icon}</span>
                <span className="gallery-caption-label">{img.label}</span>
                <span className="gallery-caption-zoom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox active"
          role="dialog"
          aria-label="Image lightbox"
          onClick={(e) => {
            if (e.target.classList.contains("lightbox")) {
              setSelectedImage(null);
            }
          }}
        >
          <button
            className="lightbox-close"
            aria-label="Close lightbox"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div className="lightbox-inner">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-label">
              <span>{selectedImage.icon}</span> {selectedImage.label}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
