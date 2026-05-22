import FacilitiesSection from "@/components/FacilitiesSection";
import StudentSupport from "@/components/StudentSupport";
import CampusExplorer from "@/components/CampusExplorer";

export const metadata = {
  title: "Campus Life & Student Support | B.B. Chhatoi Higher Secondary School",
  description: "Learn about life at B.B. Chhatoi HSS. Safe hostel facilities, convenient school transport, modern science labs, library, and comprehensive student scholarship support.",
};

export default function CampusLifePage() {
  return (
    <main>
      <CampusExplorer />
      <FacilitiesSection isPreview={false} />
      <StudentSupport />
    </main>
  );
}
