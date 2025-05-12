const LocationMap = () => {
  return (
    <section className="w-full mb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 text-center">
          Erzurum Şube Lokasyonu
        </h3>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <iframe
            title="Erzurum Şube"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.1944283186135!2d41.28531747638114!3d39.90833817153081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5b9a71b8ab4b%3A0x1f9229b39279b12b!2zSXNtZXQgw5xwLiBDZC4gRW1lw59oIEFwdC4gS2F0OjQsIDY1MDcwIEVyenVydW0!5e0!3m2!1str!2str!4v1715523645889!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
