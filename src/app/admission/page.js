import AdmissionSection from "@/components/AdmissionSection";

export const metadata = {
  title: "Admissions 2026-27 | B.B. Chhatoi Higher Secondary School",
  description: "Learn about the SAMS Odisha +2 admission process, check key eligibility rules, and view the list of required documents for B.B. Chhatoi HSS.",
};

export default function AdmissionPage() {
  return (
    <main>
      <AdmissionSection isPreview={false} />
    </main>
  );
}
