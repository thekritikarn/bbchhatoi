import CoursesSection from "@/components/CoursesSection";
import FeesSection from "@/components/FeesSection";

export const metadata = {
  title: "Academics & Fee Structure | B.B. Chhatoi Higher Secondary School",
  description: "Explore the CHSE Odisha +2 Science and Arts streams, subject combinations, syllabus, and affordable fee structure at B.B. Chhatoi HSS.",
};

export default function AcademicsPage() {
  return (
    <main>
      <CoursesSection isPreview={false} />
      <FeesSection />
    </main>
  );
}
