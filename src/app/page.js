import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSnapshot from "@/components/AboutSnapshot";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesHighlight from "@/components/CoursesHighlight";
import AdmissionCTA from "@/components/AdmissionCTA";
import CampusExplorer from "@/components/CampusExplorer";
import TestimonialsStrip from "@/components/TestimonialsStrip";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "B.B. Chhatoi Higher Secondary School | Quality +2 Education in Nabarangpur, Odisha",
  description:
    "B.B. Chhatoi HSS, Nabarangpur — Providing affordable CHSE Odisha +2 Science & Arts education to rural and tribal students since 2009. Hostel, NEET coaching, SAMS admission.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <AboutSnapshot />
      <WhyChooseUs />
      <CoursesHighlight />
      <AdmissionCTA />
      <CampusExplorer />
      <TestimonialsStrip />
      <ContactCTA />
    </main>
  );
}