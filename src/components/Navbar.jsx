import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TOPBAR */}
      <div className="bg-gray-800 text-gray-200 text-sm">
        <div className="max-w-6xl mx-auto px-10 py-6 flex justify-between items-center">
          <p>📞 0 555 123 45 67</p>
          <p>✉️ info@bastemekspertiz.com</p>
        </div>
      </div>

      {/* NAVBAR */}
      {/* NAVBAR */}
<header className="bg-white shadow sticky top-0 z-50">
  <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo */}
    <h1 className="text-xl font-bold text-black">BASTEM Ekspertiz</h1>

    {/* Menü ve Buton - sadece md ve üzeri */}
    <div className="hidden md:flex items-center space-x-6">
      <ul className="flex space-x-6 text-black">
        <li>
          <Link to="/" className="hover:text-gray-300">Anasayfa</Link>
        </li>
        <li>
          <Link to="/hakkimizda" className="hover:text-gray-300">Hakkımızda</Link>
        </li>
        <li>
          <Link to="/hizmetler" className="hover:text-gray-300">Hizmetler</Link>
        </li>
        <li>
          <Link to="/iletisim" className="hover:text-gray-300">İletişim</Link>
        </li>
      </ul>

      {/* Sağdaki Buton */}
      <Link
        to="/iletisim"
        className="bg-black text-white px-4 py-2 rounded shadow  hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
       Ulaşın
      </Link>
    </div>

    {/* Hamburger icon - md altı görünsün */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none text-black"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  </nav>

  {/* Mobil menü */}
  {isOpen && (
    <ul className="md:hidden px-4 pb-4 space-y-2 text-white">
      <li>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="block hover:text-gray-300"
        >
          Anasayfa
        </Link>
      </li>
      <li>
        <Link
          to="/hakkimizda"
          onClick={() => setIsOpen(false)}
          className="block hover:text-gray-300"
        >
          Hakkımızda
        </Link>
      </li>
      <li>
        <Link
          to="/hizmetler"
          onClick={() => setIsOpen(false)}
          className="block hover:text-gray-300"
        >
          Hizmetler
        </Link>
      </li>
      <li>
        <Link
          to="/iletisim"
          onClick={() => setIsOpen(false)}
          className="block hover:text-gray-300"
        >
          İletişim
        </Link>
      </li>
    </ul>
  )}
</header>

    </>
  );
}

export default Navbar;
