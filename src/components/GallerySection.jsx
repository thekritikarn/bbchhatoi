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
    },
    {
      src: "/assets/images/science-lab.png",
      alt: "Students in Science Laboratory",
      label: "Science Laboratory",
    },
    {
      src: "/assets/images/arts-classroom.png",
      alt: "Arts Classroom Session",
      label: "Classroom Learning",
    },
    {
      src: "/assets/images/hostel.png",
      alt: "Student Hostel Building",
      label: "Hostel Facility",
    },
    {
      src: "/assets/images/sports.png",
      alt: "Students Playing Sports",
      label: "Sports Activities",
    },
    {
      src: "/assets/images/cultural.png",
      alt: "Cultural Program Performance",
      label: "Cultural Events",
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
            A glimpse into our vibrant campus, academic activities, and student life.
          </p>
        </ScrollReveal>

        <ScrollReveal className="gallery-grid reveal">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item" onClick={() => setSelectedImage(img)}>
              <img src={img.src} alt={img.alt} width="600" height="400" />
              <div className="gallery-overlay">
                <span>{img.label}</span>
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
            // Close if clicking outside the image itself
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
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </section>
  );
}
