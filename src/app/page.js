"use client";

import { useEffect } from "react";
import Announcements from "@/components/Announcements";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";
import FeesSection from "@/components/FeesSection";
import AdmissionSection from "@/components/AdmissionSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import StudentSupport from "@/components/StudentSupport";
import RulesSection from "@/components/RulesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  // Global click event listener to intercept hash anchor scrolling smoothly
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#" || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbar = document.getElementById("navbar");
        const navHeight = navbar ? navbar.offsetHeight : 80;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <>
      <Announcements />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <CoursesSection />
        <FeesSection />
        <AdmissionSection />
        <FacilitiesSection />
        <StudentSupport />
        <RulesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}