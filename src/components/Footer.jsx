import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        

        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Bastem Ekspertiz</h2>
          <p className="text-sm leading-relaxed text-center md:text-left">
            2011 yılında Doğu Anadolu Sigorta Ekspertiz Ltd. Şti. unvanı ile Erzurum'da eksperlik faaliyetine başlamıştır...
          </p>
        </div>

 
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h3 className="text-lg font-semibold mb-2">Erzurum Şube</h3>
          <p className="text-sm">
            Lalapaşa Mah. Mumcu Cad. Deniz Aprt. Kat:5 No:31 Yakutiye / ERZURUM
          </p>

          <div className="flex items-center gap-2 mt-3 text-sm">
            <Phone size={16} /> (0442) 234 89 37
          </div>
          <div className="flex items-center gap-2 text-sm mt-1">
            <Mail size={16} /> msbastem@hotmail.com
          </div>
        </div>
      </div>


      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        2025 © Tüm hakları saklıdır. | Büşra DEMİRKESEN
      </div>
    </footer>
  );
};

export default Footer;
