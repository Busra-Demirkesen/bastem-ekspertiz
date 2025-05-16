import { FaCar, FaBriefcase, FaFireExtinguisher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: <FaCar size={40} className="text-black mb-4" />,
    title: "Kara, Hava, Deniz ve Demiryolu Araçları",
  },
  {
    id: 2,
    icon: <FaBriefcase size={40} className="text-black mb-4" />,
    title: "Emtia ve Kıymete İlişkin Nakliyat",
  },
  {
    id: 3,
    icon: <FaFireExtinguisher size={40} className="text-black mb-4" />,
    title: "Yangın, Doğal Afet, Kaza ve Hırsızlık",
  },
];

const HomeServicesCards = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Size Özel Hizmetlerimiz
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate("/hizmetler")}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center cursor-pointer hover:-translate-y-1 transform duration-300"
            >
              {service.icon}
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesCards;
