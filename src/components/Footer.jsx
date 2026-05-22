import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300 pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-full p-1">
                <Image
                  src="/assets/images/logo.jpg"
                  alt="B.B. Chhatoi HSS Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">
                B.B. Chhatoi<br />
                <span className="text-sm font-normal text-gold">Higher Secondary School</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Empowering students through quality education, modern infrastructure, and a green campus environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Courses", "Facilities", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="hover:text-gold transition-colors flex items-center gap-2">
                    <span className="text-gold">›</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-gold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>
                  <strong>Campus:</strong> At/Po- Dhodra, Umerkote, Dist- Nabarangpur, Odisha - 764073
                </span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>
                  <strong>Phone:</strong><br />
                  <a href="tel:+918637264915" className="hover:text-gold transition-colors">+91 8637264915</a> (Principal)<br />
                  <a href="tel:+919668183662" className="hover:text-gold transition-colors">+91 9668183662</a> (Admission Incharge)<br />
                  <a href="tel:+919937653872" className="hover:text-gold transition-colors">+91 9937653872</a> (Trust)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>
                  <strong>Email:</strong><br />
                  <a href="mailto:bbchhatoihss@gmail.com" className="hover:text-gold transition-colors">bbchhatoihss@gmail.com</a> (Principal)<br />
                  <a href="mailto:uniquesangram1@gmail.com" className="hover:text-gold transition-colors">uniquesangram1@gmail.com</a> (Admission Incharge)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} B.B. Chhatoi Higher Secondary School. All rights reserved.</p>
          <p className="mt-2 text-xs">Under Moon Light Charitable Trust</p>
        </div>
      </div>
    </footer>
  );
}
