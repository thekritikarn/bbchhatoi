"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "A Journey to Excellence in Science & Arts";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/campus.jpg"
          alt="B.B. Chhatoi HSS Campus"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center flex flex-col items-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-gold/50 glass-dark text-gold text-sm font-semibold tracking-wider uppercase animate-fade-in-up">
          Admissions Open 2026-27
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold drop-shadow-sm">
            B.B. Chhatoi HSS
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 h-8 font-light italic">
          &ldquo;{typedText}<span className="animate-pulse">|</span>&rdquo;
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#courses"
            className="px-8 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-lg shadow-xl hover:shadow-gold/20 transition-all transform hover:-translate-y-1"
          >
            Explore Courses
          </a>
          <a
            href="#apply"
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
          >
            Apply for Admission
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            { label: "Founded", value: "2016" },
            { label: "Streams", value: "Science & Arts" },
            { label: "Hostel", value: "Available" },
            { label: "Campus", value: "Green" },
          ].map((stat, idx) => (
            <div key={idx} className="glass-dark rounded-xl p-4 border border-white/10 hover:border-gold/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
