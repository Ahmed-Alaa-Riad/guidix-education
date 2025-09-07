"use client";

import { useTranslation } from "next-i18next";

interface StatsProps {
  isAR?: boolean;
}

export default function Stats({ isAR = false }: StatsProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 lg:p-8">
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${
          isAR ? "text-right" : "text-left"
        } text-center`}
      >
        {/* Programs */}
        <div className="group cursor-pointer">
          <div className="bg-primary/10 rounded-xl p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
            <p className="text-2xl lg:text-3xl font-bold text-primary">50K+</p>
            <p className="text-sm font-semibold text-gray-600 mt-1 uppercase tracking-wide">
              {t("hero.stats.programs")}
            </p>
          </div>
        </div>

        {/* Countries */}
        <div className="group cursor-pointer">
          <div className="bg-secondary/10 rounded-xl p-4 transition-all duration-300 group-hover:bg-secondary/20 group-hover:scale-105">
            <p className="text-2xl lg:text-3xl font-bold text-secondary">34+</p>
            <p className="text-sm font-semibold text-gray-600 mt-1 uppercase tracking-wide">
              {t("hero.stats.countries")}
            </p>
          </div>
        </div>

        {/* Scholarships */}
        <div className="group cursor-pointer">
          <div className="bg-primary/10 rounded-xl p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
            <p className="text-2xl lg:text-3xl font-bold text-primary">$22B</p>
            <p className="text-sm font-semibold text-gray-600 mt-1 uppercase tracking-wide">
              {t("hero.stats.scholarships")}
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="group cursor-pointer">
          <div className="bg-secondary/10 rounded-xl p-4 transition-all duration-300 group-hover:bg-secondary/20 group-hover:scale-105">
            <p className="text-2xl lg:text-3xl font-bold text-secondary">One</p>
            <p className="text-sm font-semibold text-gray-600 mt-1 uppercase tracking-wide">
              {t("hero.stats.application")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
