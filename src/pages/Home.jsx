import HomeServicesCards from "../components/HomeServicesCards";
import HomePartnersSection from "../components/HomePartnersSection";
import LocationMap from "../components/LocationMap";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="text-center">
      {/* Sayfa Başlığı */}
      <div className="p-10">
  
      </div>

      {/* Hizmet Kartları */}
      <HomeServicesCards />

      {/* Sigorta Şirketleri + Referans Butonu */}
      <HomePartnersSection />

      {/* Erzurum Harita */}
      <LocationMap />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
