import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "B.B. Chhatoi Higher Secondary School — Dhodra, Nabarangpur | Admission 2026-27",
  description: "B.B. Chhatoi HSS, founded by Moon Light Charitable Trust, offers +2 Science and +2 Arts with hostel facilities. Apply now for the 2026-27 session.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
