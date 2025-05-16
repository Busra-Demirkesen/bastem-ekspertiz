import ekspertizImg from "../assets/images/services.jpg";
import carImg from "../assets/images/insurance-car-ai.jpg"
import houseImg from "../assets/images/insurance-house-ai.jpg";
import cargoImg from "../assets/images/insurance-ai.jpg";


function Services() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
  
        <div>
          <img
            src={ekspertizImg}
            alt="Ekspertiz Görevlisi"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

  
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Hizmetlerimiz</h1>
          <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside">
            <li><strong>Motorlu Kara Araçları:</strong> Otomobil, kamyon, otobüs vb. araçların ekspertiz işlemleri.</li>
            <li><strong>Hava, Deniz ve Demiryolu Araçları:</strong> Uçak, gemi, tren gibi taşıtların değerlendirilmesi.</li>
            <li><strong>Emtia ve Kıymete İlişkin Nakliyat:</strong> Taşınan malların hasar ve değer tespiti.</li>
            <li><strong>Yangın, Doğal Afet, Kaza ve Hırsızlık:</strong> Olay sonrası oluşan hasarların ekspertizi.</li>
            <li><strong>Mühendislik:</strong> Endüstriyel tesisler, makineler ve yapılar için değerleme hizmetleri.</li>
          </ul>
        </div>
      </div>

  
      <div className="mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Kart 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={carImg} alt="Araçlar" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Kara, Hava ve Deniz Araçları</h3>
                <p className="text-gray-600 text-sm">Tüm taşıma araçlarına yönelik güvenilir ekspertiz hizmetleri sunuyoruz.</p>
              </div>
            </div>

            {/* Kart 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={houseImg} alt="Ev Koruması" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Yangın ve Afet Ekspertizi</h3>
                <p className="text-gray-600 text-sm">Ev, iş yeri ve mülkleriniz için hasar sonrası hızlı ve tarafsız raporlama.</p>
              </div>
            </div>

            {/* Kart 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={cargoImg} alt="Nakliyat" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Emtia ve Nakliyat</h3>
                <p className="text-gray-600 text-sm">Taşınan ürünleriniz için güvenilir değer tespiti ve zarar analizi.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


export default Services;
