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
    if (!country || !degree || !major) {
      alert(
        isAR
          ? "من فضلك اختر الدولة والدرجة والتخصص"
          : "Please select Country, Degree, and Major"
      );
      return;
    }
    router.push(`/apply?country=${country}&degree=${degree}&major=${major}`);
  };

  return (
    <section className="relative  min-h-screen flex items-center overflow-hidden pt-28">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left text */}
        <div
          className={`lg:w-1/2 space-y-8 ${
            isAR ? "text-right" : "text-left"
          } text-center lg:text-inherit`}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-dark">
            {t("hero.wantToStudyIn")}{" "}
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-primary/10 rounded-lg px-3 py-1 text-primary font-bold focus:outline-none cursor-pointer"
              dir="ltr"
            >
              <option value="">{t("hero.countryPlaceholder")}</option>
              {countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </h1>

          <h2 className="text-3xl lg:text-4xl font-bold text-dark">
            {t("hero.toGet")}{" "}
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="bg-primary/10 rounded-lg px-3 py-1 text-primary font-bold focus:outline-none cursor-pointer"
            >
              <option value="">{t("hero.levelPlaceholder")}</option>
              <option>Bachelor&apos;s</option>
              <option>Master&apos;s</option>
              <option>PhD</option>
            </select>
          </h2>

          <h2 className="text-3xl lg:text-4xl font-bold text-dark">
            {t("hero.in")}{" "}
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="bg-primary/10 rounded-lg px-3 py-1 text-primary font-bold focus:outline-none cursor-pointer"
            >
              <option value="">{t("hero.majorPlaceholder")}</option>
              {majors.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </h2>

          <p className="text-lg max-w-lg mx-auto lg:mx-0 text-gray-600 leading-relaxed">
            {t("hero.desc")}
          </p>

          <button
            onClick={handleGo}
            className="bg-primary text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            {t("hero.letsGo")}
          </button>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 text-dark ${
              isAR ? "text-right" : ""
            }`}
          >
            <div>
              <p className="text-3xl font-extrabold text-primary">50 000+</p>
              <p className="text-sm uppercase tracking-wide">
                {t("hero.stats.programs")}
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary">34+</p>
              <p className="text-sm uppercase tracking-wide">
                {t("hero.stats.countries")}
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary">$22B</p>
              <p className="text-sm uppercase tracking-wide">
                {t("hero.stats.scholarships")}
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary">One</p>
              <p className="text-sm uppercase tracking-wide">
                {t("hero.stats.application")}
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative w-100 h-100">
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl ring-[12px] ring-primary/30">
              <Image
                src="/images/1.jpg"
                alt="Students studying abroad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
