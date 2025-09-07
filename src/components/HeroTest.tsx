import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function HeroSection() {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");
  const isAR = i18n.language === "ar";

  const [country, setCountry] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");

  const countries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Sweden",
    "Ireland",
    "Spain",
    "Poland",
    "Italy",
    "Hungary",
    "New Zealand",
    "Switzerland",
    "Japan",
    "South Korea",
    "China",
    "Finland",
    "Malaysia",
    "Turkey",
    "Other Country",
  ];

  const majors = [
    "Engineering",
    "Medicine",
    "Business",
    "Computer Science",
    "Law",
    "Arts & Design",
    "Education",
    "Hospitality",
    "Other",
  ];

  const handleGo = () => {
    router.push(`/apply?country=${country}&degree=${degree}&major=${major}`);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-secondary/10">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Geometric patterns */}
        <div className="absolute top-32 left-20 w-4 h-4 bg-primary/20 rounded-full animate-bounce"></div>
        <div
          className="absolute bottom-40 right-32 w-6 h-6 bg-secondary/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-10 w-3 h-3 bg-primary/30 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div
            className={`w-full lg:w-1/2 space-y-8 ${
              isAR ? "text-right" : "text-left"
            } text-center lg:text-inherit order-2 lg:order-1`}
          >
            {/* Main Interactive Form Card */}
            <div className="bg-white/80 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 lg:p-10 transform hover:scale-[1.02] transition-all duration-300">
              {/* Heading */}
              <div className="space-y-6 mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight">
                  {t("hero.wantToStudyIn")}
                </h1>

                {/* Country Selection */}
                <div className="relative group">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border-2 border-gray-200 bg-white/70 rounded-xl px-5 py-4 text-lg font-semibold text-primary transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-primary/50 appearance-none cursor-pointer"
                    dir={isAR ? "rtl" : "ltr"}
                  >
                    <option value="" className="text-gray-400">
                      {t("hero.countryPlaceholder")}
                    </option>
                    {countries.map((c) => (
                      <option key={c} value={c} className="text-secondary">
                        {c}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Degree Selection */}
              <div className="space-y-4 mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary">
                  {t("hero.toGet")}
                </h2>

                <div className="relative group">
                  <select
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full border-2 border-gray-200 bg-white/70 rounded-xl px-5 py-4 text-lg font-semibold text-primary transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-primary/50 appearance-none cursor-pointer"
                    dir={isAR ? "rtl" : "ltr"}
                  >
                    <option value="" className="text-gray-400">
                      {t("hero.levelPlaceholder")}
                    </option>
                    <option className="text-secondary">Bachelor's</option>
                    <option className="text-secondary">Master's</option>
                    <option className="text-secondary">PhD</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Major Selection */}
              <div className="space-y-4 mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary">
                  {t("hero.in")}
                </h2>

                <div className="relative group">
                  <select
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    className="w-full border-2 border-gray-200 bg-white/70 rounded-xl px-5 py-4 text-lg font-semibold text-primary transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-primary/50 appearance-none cursor-pointer"
                    dir={isAR ? "rtl" : "ltr"}
                  >
                    <option value="" className="text-gray-400">
                      {t("hero.majorPlaceholder")}
                    </option>
                    {majors.map((m) => (
                      <option key={m} value={m} className="text-secondary">
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                {t("hero.desc")}
              </p>

              {/* CTA Button */}
              <button
                onClick={handleGo}
                className="relative w-full bg-primary text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <span>{t("hero.letsGo")}</span>
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Stats Section */}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative order-1 lg:order-2">
            <div className="relative">
              {/* Main image container with enhanced styling */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-full h-full bg-white/90 backdrop-blur-sm border-4 border-white/50 shadow-2xl rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:border-primary/30 group">
                  <Image
                    src={isAR ? "/images/LogoAr.png" : "/images/LogoEn.png"}
                    alt="Students studying abroad"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-secondary"
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    priority
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-bounce"></div>
              <div
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary/20 rounded-full blur-lg animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/3 -right-6 w-10 h-10 bg-primary/30 rounded-full blur-md animate-bounce"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Floating info cards */}
              <div className="absolute -top-6 -left-16 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-xl rounded-2xl p-4 transform rotate-12 hover:rotate-6 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-sm font-bold text-gray-700">
                      Global Education
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-12 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-xl rounded-2xl p-4 transform -rotate-12 hover:-rotate-6 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                    <span className="text-sm font-bold text-gray-700">
                      Bright Future
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-xl rounded-2xl p-4 transform rotate-6 hover:rotate-3 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-700">
                      Dream Big
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
