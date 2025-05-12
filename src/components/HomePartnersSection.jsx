import { useNavigate } from "react-router-dom";

const HomePartnersSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/referanslarimiz");
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Sol taraf */}
        <h3 className="text-2xl font-bold text-gray-900 text-center md:text-left">
          Birlikte çalıştığımız <span className="text-blue-600">sigorta şirketleri...</span>
        </h3>

        {/* Sağ taraf: Buton */}
        <button
          onClick={handleClick}
          className="bg-black  text-white font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 duration-300"
        >
          Referanslarımız
        </button>
      </div>
    </section>
  );
};

export default HomePartnersSection;
