import React from "react";
import {
  MapPin,
  Phone,
  Printer,
  Mail
} from "lucide-react";

const Contact = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">İletişim</h2>

      {/* Harita ve İletişim Bilgileri */}
      <div className="flex flex-col lg:flex-row gap-10 mb-12">
        {/* Harita */}
        <div className="flex-1">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.9051388350755!2d32.85404911534344!3d39.92077047942227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f20696aa8a5%3A0x5dceef7d2e3c49d2!2sAnkara!5e0!3m2!1str!2str!4v1628775319382!5m2!1str!2str"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl w-full h-[350px]"
          ></iframe>
        </div>

        {/* Adres Bilgileri */}
        <div className="flex-1 text-lg space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="text-black mt-1" />
            <p>
              <strong>Adres:</strong><br />
              Lalapaşa Mah.Mumcu Cad.Deniz Aprt.Kat :5 No:31 Yakutiye/ERZURUMm
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-black" />
            <p>
              <strong>Telefon:</strong> (0442) 234 89 37
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="text-black" />
            <p>
              <strong>E-mail:</strong> msbastem@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* İletişim Formu */}
      <form className="max-w-3xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Ad Soyad"
          className="w-full p-3 border rounded-xl"
        />
        <input
          type="email"
          placeholder="E-posta"
          className="w-full p-3 border rounded-xl"
        />
        <input
          type="text"
          placeholder="Konu"
          className="w-full p-3 border rounded-xl"
        />
        <textarea
          placeholder="Mesajınız"
          rows={5}
          className="w-full p-3 border rounded-xl"
        ></textarea>
        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-3 rounded-md  hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact;
