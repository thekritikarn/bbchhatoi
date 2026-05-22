import "./globals.css";

export const metadata = {
  title: "B.B. Chhatoi Higher Secondary School — Dhodra, Nabarangpur | Admission 2026-27",
  description: "B.B. Chhatoi Higher Secondary School, Dhodra, Nabarangpur — Quality +2 Science & Arts education under CHSE Odisha. Affordable education for rural and tribal students. Apply for Admission 2026-27.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
