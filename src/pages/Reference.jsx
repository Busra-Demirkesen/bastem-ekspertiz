import React from "react";

// 8 logoyu import et
import anadoluSigorta from "../assets/images/sigorta/anadoluSigorta.jpg";
import axaSigorta from "../assets/images/sigorta/axaSigorta.jpg";
import bereketSigorta from "../assets/images/sigorta/bereketsigorta.jpg";
import corpusSigorta from "../assets/images/sigorta/corpus.jpg";
import hdiKatilim from "../assets/images/sigorta/hdi-katilim.jpg";
import hdiSigorta from "../assets/images/sigorta/hdiSigorta.jpg";
import noevaSigorta from "../assets/images/sigorta/noeva.jpg";
import trSigorta from "../assets/images/sigorta/türkiyeSigorta.jpg";

const logos = [
  { src: anadoluSigorta, alt: "Anadolu Sigorta" },
  { src: axaSigorta, alt: "AXA Sigorta" },
  { src: bereketSigorta, alt: "Bereket Sigorta" },
  { src: corpusSigorta, alt: "Corpus Sigorta" },
  { src: hdiKatilim, alt: "HDİ Katılım Sigorta" },
  { src: hdiSigorta, alt: "HDİ Sigorta" },
  { src: noevaSigorta, alt: "Noeva Sigorta" },
  { src: trSigorta, alt: "Zurich Sigorta" },
];

const Reference = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Referanslarımız</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-[100px] h-[60px] flex items-center justify-center bg-white shadow rounded"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reference;
