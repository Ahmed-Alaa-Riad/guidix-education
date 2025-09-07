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
    // if (!country || !degree || !major) {
    //   alert(
    //     isAR
    //       ? "من فضلك اختر الدولة والدرجة والتخصص"
    //       : "Please select Country, Degree, and Major"
    //   );
    //   return;
    // }
    router.push(`/apply?country=${country}&degree=${degree}&major=${major}`);
  };

  return (
    <section className="relative  flex items-center overflow-hidden  mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-20 ">
      {/* <div
        className="absolute inset-0 w-full h-full -z-10 blur bg-white bg-cover bg-center"
        style={{ backgroundImage: 'url("/BgImage1.jpg")' }}
      ></div> */}

      {/* Left content */}
      <div
        className={`w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 ${
          isAR ? "text-right" : "text-left"
        } text-center lg:text-inherit order-2 lg:order-1`}
      >
        {/* Main heading with inline select */}
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-secondary">
            <span className="block sm:inline">{t("hero.wantToStudyIn")}</span>{" "}
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-primary/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2
                 text-primary font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer
                 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                 min-w-0 max-w-full inline-block mt-2 sm:mt-0"
              dir={isAR ? "rtl" : "ltr"}
            >
              <option value="" className="text-secondary text-sm sm:text-base">
                {t("hero.countryPlaceholder")}
              </option>
              {countries.map((c) => (
                <option
                  key={c}
                  value={c}
                  className="text-secondary bg-white text-xs sm:text-sm"
                >
                  {c}
                </option>
              ))}
            </select>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary">
            <span className="block sm:inline">{t("hero.toGet")}</span>{" "}
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="bg-primary/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2
                 text-primary font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer
                 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                 min-w-0 max-w-full inline-block mt-2 sm:mt-0"
              dir={isAR ? "rtl" : "ltr"}
            >
              <option value="" className="text-secondary text-sm sm:text-base">
                {t("hero.levelPlaceholder")}
              </option>
              <option className="text-secondary bg-white text-xs sm:text-sm">
                Bachelor&apos;s
              </option>
              <option className="text-secondary bg-white text-xs sm:text-sm">
                Master&apos;s
              </option>
              <option className="text-secondary bg-white text-xs sm:text-sm">
                PhD
              </option>
            </select>
          </h2>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary">
            <span className="block sm:inline">{t("hero.in")}</span>{" "}
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="bg-primary/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2
                 text-primary font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer
                 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                 min-w-0 max-w-full inline-block mt-2 sm:mt-0"
              dir={isAR ? "rtl" : "ltr"}
            >
              <option value="" className="text-secondary text-sm sm:text-base">
                {t("hero.majorPlaceholder")}
              </option>
              {majors.map((m) => (
                <option
                  key={m}
                  className="text-secondary bg-white text-xs sm:text-sm"
                  value={m}
                >
                  {m}
                </option>
              ))}
            </select>
          </h2>
        </div>

        <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 text-gray-600 leading-relaxed px-2 sm:px-0">
          {t("hero.desc")}
        </p>

        <button
          onClick={handleGo}
          className="bg-primary text-white font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full shadow-lg
            transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base lg:text-lg
            active:scale-95"
        >
          {t("hero.letsGo")}
        </button>
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2 flex justify-center items-start relative order-1 lg:order-2 lg:-mt-8 xl:-mt-12">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80">
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-3 sm:ring-4 lg:ring-6 ring-primary/30 transition-transform duration-300 hover:scale-105">
            <Image
              src={isAR ? "/images/LogoAr.png" : "/images/LogoEn.png"}
              alt="Students studying abroad"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110 bg-secondary"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 320px"
              priority
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-primary/20 rounded-full blur-sm"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-full blur-sm"></div>
        </div>
      </div>
    </section>
  );
}
