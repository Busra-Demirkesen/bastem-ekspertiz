const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1. Sütun */}
        <div>
          <h2 className="text-xl font-bold mb-4">Bastem Ekspertiz</h2>
          <p className="text-sm leading-relaxed">
            2011 yılında Doğu Anadolu Sigorta Ekspertiz Ltd. Şti. unvanı ile Erzurum'da eksperlik faaliyetine başlamıştır...
          </p>
        </div>

        {/* 2. Sütun */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Merkez Ofis</h3>
          <p className="text-sm">Evliya Çelebi Mh. Meşrutiyet Cd. No:68/A Kat:1/1 Beyoğlu/İstanbul</p>
          <p className="text-sm mt-2">📞 0212 292 92 73</p>
          <p className="text-sm">✉️ bilgi@arpaekspertiz.com</p>
        </div>

        {/* 3. Sütun */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Erzurum Şube</h3>
          <p className="text-sm">Muratpaşa Mah. İsmet Paşa Cad. Emeç Apt. Kat:4 No:4 Yakutiye / Erzurum</p>
          <p className="text-sm mt-2">📞 0442 234 60 60</p>
          <p className="text-sm">✉️ bilgi@arpaekspertiz.com</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
       2025 © Tüm hakları saklıdır. | Büşra DEMİRKESEN
      </div>
    </footer>
  );
};

export default Footer;
