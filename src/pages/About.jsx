import React from 'react';
import { CheckCircle } from 'lucide-react';



const About = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

       
        <div className="flex flex-col items-center md:items-start">
        

          <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" /> Kara Araçları Ekspertiz
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" /> Yangın & Doğal Afet Ekspertiz
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" /> Kaza & Hırsızlık Branşları
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" /> Sigorta Şirketleri ile Çözüm Ortaklığı
            </li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-2xl font-bold mb-4">Hakkımızda</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Bastem Ekspertiz, sigorta sektöründeki köklü bilgi birikimi ve çok yönlü kamu tecrübesiyle 2011 yılında Erzurum’da kurulmuştur. Kurucumuz,
            2009 yılında Hazine Müsteşarlığı tarafından düzenlenen Sigorta Eksperliği sınavını başarıyla tamamlamış, 2011 yılında E11/G0091 levha numarası ile Kara Araçları Sigorta Eksperliği ruhsatını almıştır. Kuruluşumuzdan bu yana Kara Araçları ile Yangın, Doğal Afet, Kaza ve Hırsızlık branşlarında yetkinliğimizi belgeleyerek sigorta ekspertiz hizmetlerimizi genişletmiş bulunmaktayız.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            Adalet Bakanlığı Ceza ve Teftik Evleri Genel Müdürlüğü'nde edinilen yönetimsel tecrübe ve kamu disiplini, hizmet kalitemizi her zaman ileriye taşımaktadır. AXA Sigorta, Türkiye Sigorta, HDI Sigorta, Bereket Sigorta, Neova Sigorta, Corpus Sigorta gibi şirketlerle çözüm ortaklığı yürütmekteyiz.
          </p>
        </div>
      </div>

     
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">Vizyonumuz</h3>
          <p className="text-sm text-gray-700">
            Türkiye genelinde tanınan, güven duyulan ve referans gösterilen lider bir ekspertiz firması olmak; teknolojik gelişmeleri takip ederek
            sürekli yenilenen bir hizmet modeli sunmak.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Misyonumuz</h3>
          <p className="text-sm text-gray-700">
            Sigorta sektöründe tarafsızlık, güvenilirlik ve etik değerlere bağlılık ilkesiyle şeffaf, hızlı ve doğru ekspertiz hizmetleri sunmak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
