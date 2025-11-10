import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#575757] text-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand and description */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-24 bg-white/90 rounded-sm flex items-center justify-center text-sm font-bold text-[#1e3a8a]">
                MatriX
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-200/90">
              Matrix Solutions transforms education with innovative technology, offering high‑quality audiovisual
              equipment and smart classroom solutions. Our expert team is dedicated to enhancing learning experiences
              for educators and students alike.
            </p>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-4 text-gray-200/90">
              <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.2 8.4h3.6V22H1.2V8.4zM8.2 8.4h3.4v1.9h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 6V22h-3.6v-6.1c0-1.5 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.4V22H8.2V8.4z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold text-white">Menu</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white">Get in touch</h4>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="font-medium text-white/95">Locations</p>
                <p className="text-gray-200/90 mt-1">182E-6, Rajarishi Complex, S.N High Road, Tirunelveli, 627001.</p>
                <p className="text-gray-200/90 mt-2">173, Nanjundapuram Road, Ramanathapuram, Coimbatore, 641045.</p>
              </div>
              <div>
                <p className="font-medium text-white/95">Email address</p>
                <p className="text-gray-200/90">matrixeduworld@gmail.com</p>
              </div>
              <div>
                <p className="font-medium text-white/95">Contact number</p>
                <p className="text-gray-200/90">+91 848991 8000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
