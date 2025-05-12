import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TOPBAR – sadece md ve üzeri görünür */}
      <div className="hidden md:block bg-gray-800 text-gray-200 text-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            0 555 123 45 67
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            info@bastemekspertiz.com
          </p>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-black">BASTEM Ekspertiz</h1>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-gray-800">
              <li><Link to="/" className="hover:text-blue-600">Anasayfa</Link></li>
              <li><Link to="/hakkimizda" className="hover:text-blue-600">Hakkımızda</Link></li>
              <li><Link to="/hizmetler" className="hover:text-blue-600">Hizmetler</Link></li>
              <li><Link to="/referanslar" className="hover:text-blue-600">Referanslarımız</Link></li>
              <li><Link to="/iletisim" className="hover:text-blue-600">İletişim</Link></li>
            </ul>
            <Link
              to="/iletisim"
              className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Ulaşın
            </Link>
          </div>

          {/* Hamburger icon - sadece md altı */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(true)}
              className="focus:outline-none text-black"
              aria-label="Menüyü aç"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobil Menü (Tam ekran soldan kayan) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="relative p-6 h-full flex flex-col">
          {/* Çıkış (X) ikonu – sağ üst köşeye sabit */}
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-400 transition"
              aria-label="Menüyü kapat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menü Öğeleri */}
          <ul className="mt-16 space-y-6 text-lg">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Anasayfa</Link></li>
            <li><Link to="/hakkimizda" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Hakkımızda</Link></li>
            <li><Link to="/hizmetler" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Hizmetler</Link></li>
            <li><Link to="/referanslar" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Referanslarımız</Link></li>
            <li><Link to="/iletisim" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">İletişim</Link></li>
          </ul>
        </div>
      </div>

      {/* Menü açıkken arka plan karartma */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
