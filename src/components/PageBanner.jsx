import React from "react";
import bannerImage from "../assets/images/banner.jpg"; // src içindeyse

const PageBanner = () => {
  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      {/* Görsel */}
      <img
        src={bannerImage}
        alt="Sayfa Bannerı"
        className="w-full h-full object-cover"
      />

      {/* Siyah şeffaf overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Banner üzerine metin koymak istersen buraya yazabilirsin */}
    </div>
  );
};

export default PageBanner;
