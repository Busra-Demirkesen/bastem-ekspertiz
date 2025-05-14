import ekspertizImg from "../assets/images/services.jpg";


function Services() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* SOL – Görsel */}
        <div>
          <img
            src={ekspertizImg}
            alt="Ekspertiz Görevlisi"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* SAĞ – Metin */}
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
    </section>
  );
}

export default Services;
