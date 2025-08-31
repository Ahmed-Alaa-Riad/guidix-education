"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Type for country
type Country = {
  name: string;
  code: string; // ISO country code
  info: string;
};

const countries: Country[] = [
  {
    name: "Germany",
    code: "DE",
    info: "Study in top universities like LMU Munich and Heidelberg University.",
  },
  {
    name: "China",
    code: "CN",
    info: "Study in world-class universities like Tsinghua and Peking University.",
  },
  {
    name: "UK",
    code: "GB",
    info: "Home to Oxford, Cambridge, and a rich cultural heritage.",
  },
  {
    name: "Canada",
    code: "CA",
    info: "High-quality education with post-graduate work opportunities.",
  },
  {
    name: "Malaysia",
    code: "MY",
    info: "A rapidly growing education hub in Asia.",
  },
  {
    name: "Hungary",
    code: "HU",
    info: "A hidden gem in Europe with affordable tuition.",
  },
  {
    name: "Poland",
    code: "PL",
    info: "Affordable education with a rich cultural experience.",
  },
  {
    name: "Spain",
    code: "ES",
    info: "Home to renowned universities and a vibrant culture.",
  },
  {
    name: "Turkey",
    code: "TR",
    info: "Cutting-edge technology, tradition, and global opportunities.",
  },
];

export default function Destinations() {
  const [selected, setSelected] = useState<Country | null>(null);

  return (
    <div className="p-6 sm:p-8 bg-gray-50">
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {countries.map((country, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(country)}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
          >
            {/* Country Flag */}
            <div className="flex items-center justify-center w-full h-32 sm:h-40 md:h-48 bg-white">
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{ width: "80%", height: "100%" }}
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-lg sm:text-xl md:text-2xl font-extrabold">
                {country.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 sm:p-6 z-50">
          <div className="bg-white rounded-2xl max-w-md sm:max-w-lg w-full p-5 sm:p-6 shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* Flag in Modal */}
            <div className="flex items-center justify-center w-full max-h-64 sm:max-h-80 bg-white rounded-lg mb-4 sm:mb-6">
              <ReactCountryFlag
                countryCode={selected.code}
                svg
                style={{ width: "80%", height: "100%" }}
              />
            </div>

            {/* Title & Info */}
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              {selected.name}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {selected.info}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// 👇 Add this for translations
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
