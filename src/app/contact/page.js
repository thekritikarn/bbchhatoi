import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us | B.B. Chhatoi Higher Secondary School",
  description: "Get in touch with B.B. Chhatoi HSS. Send an admission inquiry, find our campus address in Dhodra, Nabarangpur, or contact the Principal and Admission Incharge directly.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection isPreview={false} />
    </main>
  );
}
