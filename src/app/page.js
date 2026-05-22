import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import CampusExplorer from "@/components/CampusExplorer";
import CoursesSection from "@/components/CoursesSection";
import AdmissionSection from "@/components/AdmissionSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection isPreview={true} />
      <MissionVision />
      <WhyChooseUs />
      <CampusExplorer />
      <CoursesSection isPreview={true} />
      <AdmissionSection isPreview={true} />
      <FacilitiesSection isPreview={true} />
      <ContactSection isPreview={true} />
    </main>
  );
}