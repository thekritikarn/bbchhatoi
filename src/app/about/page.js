import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";

export const metadata = {
  title: "About Us | B.B. Chhatoi Higher Secondary School",
  description: "Learn about the history, vision of Late Shri Bhramarbar Chhatoi, Moonlight Trust board members, Principal message, and affiliations of B.B. Chhatoi HSS.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection isPreview={false} />
      <MissionVision />
    </main>
  );
}
