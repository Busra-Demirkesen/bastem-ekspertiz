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

      

        {/* 3. Sütun */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Erzurum Şube</h3>
          <p className="text-sm"> Lalapaşa Mah.Mumcu Cad.Deniz Aprt.Kat :5 No:31 Yakutiye/ERZURUM </p>
          <p className="text-sm mt-2">📞 (0442) 234 89 37</p>
          <p className="text-sm">✉️  msbastem@hotmail.com</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
       2025 © Tüm hakları saklıdır. | Büşra DEMİRKESEN
      </div>
    </footer>
  );
};

export default Footer;
