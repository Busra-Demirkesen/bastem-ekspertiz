import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">BASTEM Ekspertiz</h1>

        {/* Hamburger icon - md altı görünsün */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menü öğeleri - sadece md ve üzeri */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:underline">Anasayfa</Link></li>
          <li><Link to="/hakkimizda" className="hover:underline">Hakkımızda</Link></li>
          <li><Link to="/hizmetler" className="hover:underline">Hizmetler</Link></li>
          <li><Link to="/iletisim" className="hover:underline">İletişim</Link></li>
        </ul>
      </nav>

      {/* Mobil menü - sadece açıkken ve md altında */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Anasayfa</Link></li>
          <li><Link to="/hakkimizda" onClick={() => setIsOpen(false)}>Hakkımızda</Link></li>
          <li><Link to="/hizmetler" onClick={() => setIsOpen(false)}>Hizmetler</Link></li>
          <li><Link to="/iletisim" onClick={() => setIsOpen(false)}>İletişim</Link></li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
