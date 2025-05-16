import React from "react";
import bannerImage from "../assets/images/banner.jpg"; 

const PageBanner = () => {
  return (
    <div className="relative w-full h-[200px] overflow-hidden">
    
      <img
        src={bannerImage}
        alt="Sayfa Bannerı"
        className="w-full h-full object-cover"
      />

  
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

    
    </div>
  );
};

export default PageBanner;
