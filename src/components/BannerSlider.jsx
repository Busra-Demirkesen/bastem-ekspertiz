import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import banner1 from "../assets/images/banner-car.jpg";
import banner2 from "../assets/images/banner-house.jpg";
import banner3 from "../assets/images/banner-3.jpg";

const images = [banner1, banner2, banner3];

function BannerSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      className="w-full h-auto"
    >
      {images.map((src, index) => (
<SwiperSlide key={index}>
  <div className="relative w-full h-[500px] md:h-[650px] xl:h-[800px]">

    {/* Arka plan görseli */}
    <img
      src={src}
      alt={`banner-${index}`}
      className="absolute inset-0 w-full h-full object-contain md:object-contain xl:object-cover z-0"
    />

    {/* Koyu arka plan katmanı */}
    <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

    {/* Yazı ve butonlar */}
    <div className="text-center text-white z-20 px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h3 className="text-lg md:text-2xl tracking-widest mb-2">BASTEM Ekspertiz</h3>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Değeriniz Bizimle Güvende.</h1>
 <Link
  to="/iletisim"
  className="inline-block bg-gray-800 text-white px-6 py-2 rounded shadow hover:-translate-y-1 transition-all duration-300 ease-in-out"
>
  İletişim
</Link>

    </div>
  </div>
</SwiperSlide>


      ))}
    </Swiper>
  );
}

export default BannerSlider;
