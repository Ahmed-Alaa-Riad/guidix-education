// import { useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { useTranslation } from "next-i18next";

// export default function HeroSection() {
//   const router = useRouter();
//   const { t, i18n } = useTranslation("common");
//   const isAR = i18n.language === "ar";

//   const [country, setCountry] = useState("");
//   const [degree, setDegree] = useState("");
//   const [major, setMajor] = useState("");

//   const countries = [
//     "USA",
//     "UK",
//     "Canada",
//     "Australia",
//     "Germany",
//     "France",
//     "Netherlands",
//     "Sweden",
//     "Ireland",
//     "Spain",
//     "Poland",
//     "Italy",
//     "Hungary",
//     "New Zealand",
//     "Switzerland",
//     "Japan",
//     "South Korea",
//     "China",
//     "Finland",
//     "Malaysia",
//     "Turkey",
//     "Other Country",
//   ];

//   const majors = [
//     "Engineering",
//     "Medicine",
//     "Business",
//     "Computer Science",
//     "Law",
//     "Arts & Design",
//     "Education",
//     "Hospitality",
//     "Other",
//   ];

//   const handleGo = () => {
//     // if (!country || !degree || !major) {
//     //   alert(
//     //     isAR
//     //       ? "من فضلك اختر الدولة والدرجة والتخصص"
//     //       : "Please select Country, Degree, and Major"
//     //   );
//     //   return;
//     // }
//     router.push(`/apply?country=${country}&degree=${degree}&major=${major}`);
//   };

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-20">
//         {/* Left content */}
//         <div
//           className={`w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 ${
//             isAR ? "text-right" : "text-left"
//           } text-center lg:text-inherit order-2 lg:order-1`}
//         >
//           {/* Main heading with inline select */}
//           <div className="space-y-2 sm:space-y-4">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-secondary">
//               <span className="block sm:inline">{t("hero.wantToStudyIn")}</span>{" "}
//               <select
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//                 className="bg-primary/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2
//                  text-primary font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer
//                  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
//                  min-w-0 max-w-full inline-block mt-2 sm:mt-0"
//                 dir={isAR ? "rtl" : "ltr"}
//               >
//                 <option
//                   value=""
//                   className="text-secondary text-sm sm:text-base"
//                 >
//                   {t("hero.countryPlaceholder")}
//                 </option>
//                 {countries.map((c) => (
//                   <option
//                     key={c}
//                     value={c}
//                     className="text-secondary bg-white text-xs sm:text-sm"
//                   >
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </h1>

//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary">
//               <span className="block sm:inline">{t("hero.toGet")}</span>{" "}
//               <select
//                 value={degree}
//                 onChange={(e) => setDegree(e.target.value)}
//                 className="bg-primary/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2
//                  text-primary font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer
//                  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                  min-w-0 max-w-full inline-block mt-2 sm:mt-0"
//                 dir={isAR ? "rtl" : "ltr"}
//               >
//                 <option
//                   value=""
//                   className="text-secondary text-sm sm:text-base"
//                 >
//                   {t("hero.levelPlaceholder")}
//                 </option>
//                 <option className="text-secondary bg-white text-xs sm:text-sm">
//                   Bachelor&apos;s
//                 </option>
//                 <option className="text-secondary bg-white text-xs sm:text-sm">
//                   Master&apos;s
//                 </option>
//                 <option className="text-secondary bg-white text-xs sm:text-sm">
//                   PhD
//                 </option>
//               </select>
//             </h2>

//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary">
//               <span className="block sm:inline">{t("hero.in")}</span>{" "}
//               <select
//                 value={major}
//                 onChange={(e) => setMajor(e.target.value)}
//                 className="bg-primary/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2
//                  text-primary font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer
//                  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                  min-w-0 max-w-full inline-block mt-2 sm:mt-0"
//                 dir={isAR ? "rtl" : "ltr"}
//               >
//                 <option
//                   value=""
//                   className="text-secondary text-sm sm:text-base"
//                 >
//                   {t("hero.majorPlaceholder")}
//                 </option>
//                 {majors.map((m) => (
//                   <option
//                     key={m}
//                     className="text-secondary bg-white text-xs sm:text-sm"
//                     value={m}
//                   >
//                     {m}
//                   </option>
//                 ))}
//               </select>
//             </h2>
//           </div>

//           <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 text-gray-600 leading-relaxed px-2 sm:px-0">
//             {t("hero.desc")}
//           </p>

//           <button
//             onClick={handleGo}
//             className="bg-primary text-white font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full shadow-lg
//             transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base lg:text-lg
//             active:scale-95"
//           >
//             {t("hero.letsGo")}
//           </button>

//           {/* Stats */}
//           <div
//             className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 lg:pt-12 text-secondary ${
//               isAR ? "text-right" : ""
//             }`}
//           >
//             <div className="text-center lg:text-inherit">
//               <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-primary">
//                 50K+
//               </p>
//               <p className="text-xs sm:text-sm lg:text-sm xl:text-base uppercase tracking-wide mt-1">
//                 {t("hero.stats.programs")}
//               </p>
//             </div>
//             <div className="text-center lg:text-inherit">
//               <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-primary">
//                 34+
//               </p>
//               <p className="text-xs sm:text-sm lg:text-sm xl:text-base uppercase tracking-wide mt-1">
//                 {t("hero.stats.countries")}
//               </p>
//             </div>
//             <div className="text-center lg:text-inherit">
//               <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-primary">
//                 $22B
//               </p>
//               <p className="text-xs sm:text-sm lg:text-sm xl:text-base uppercase tracking-wide mt-1">
//                 {t("hero.stats.scholarships")}
//               </p>
//             </div>
//             <div className="text-center lg:text-inherit">
//               <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-primary">
//                 One
//               </p>
//               <p className="text-xs sm:text-sm lg:text-sm xl:text-base uppercase tracking-wide mt-1">
//                 {t("hero.stats.application")}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="w-full lg:w-1/2 flex justify-center items-start relative order-1 lg:order-2 lg:-mt-8 xl:-mt-12">
//           <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80">
//             <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-3 sm:ring-4 lg:ring-6 ring-primary/30 transition-transform duration-300 hover:scale-105">
//               <Image
//                 src={isAR ? "/images/LogoAr.png" : "/images/LogoEn.png"}
//                 alt="Students studying abroad"
//                 fill
//                 className="object-cover transition-transform duration-300 hover:scale-110 bg-secondary"
//                 sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 320px"
//                 priority
//               />
//             </div>
//             {/* Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-primary/20 rounded-full blur-sm"></div>
//             <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-full blur-sm"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 sm:w-56 md:w-72 lg:w-96 h-40 sm:h-56 md:h-72 lg:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-primary/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left content */}
          <div
            className={`w-full lg:w-1/2 space-y-6 sm:space-y-8 lg:space-y-10 ${
              isAR ? "text-right" : "text-left"
            } text-center lg:text-inherit order-2 lg:order-1`}
          >
            {/* Main heading with interactive selects */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-secondary mb-4 sm:mb-6">
                  <span className="block">{t("hero.wantToStudyIn")}</span>

                  {/* Country Select */}
                  <div className="group relative inline-block w-full max-w-xs sm:max-w-sm md:max-w-md mt-3 sm:mt-4">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full border-2 border-gray-200 bg-white/50 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300 appearance-none cursor-pointer"
                      dir={isAR ? "rtl" : "ltr"}
                    >
                      <option
                        value=""
                        className="text-gray-400 text-sm sm:text-base"
                      >
                        {t("hero.countryPlaceholder")}
                      </option>
                      {countries.map((c) => (
                        <option
                          key={c}
                          value={c}
                          className="text-secondary bg-white text-sm sm:text-base"
                        >
                          {c}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 sm:right-5 md:right-6 flex items-center pointer-events-none">
                      <svg
                        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                  <span className="block">{t("hero.toGet")}</span>

                  {/* Degree Select */}
                  <div className="group relative inline-block w-full max-w-xs sm:max-w-sm md:max-w-md mt-3 sm:mt-4">
                    <select
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      className="w-full border-2 border-gray-200 bg-white/50 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300 appearance-none cursor-pointer"
                      dir={isAR ? "rtl" : "ltr"}
                    >
                      <option
                        value=""
                        className="text-gray-400 text-sm sm:text-base"
                      >
                        {t("hero.levelPlaceholder")}
                      </option>
                      <option className="text-secondary bg-white text-sm sm:text-base">
                        Bachelor&apos;s
                      </option>
                      <option className="text-secondary bg-white text-sm sm:text-base">
                        Master&apos;s
                      </option>
                      <option className="text-secondary bg-white text-sm sm:text-base">
                        PhD
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-4 sm:right-5 md:right-6 flex items-center pointer-events-none">
                      <svg
                        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </h2>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary">
                  <span className="block">{t("hero.in")}</span>

                  {/* Major Select */}
                  <div className="group relative inline-block w-full max-w-xs sm:max-w-sm md:max-w-md mt-3 sm:mt-4">
                    <select
                      value={major}
                      onChange={(e) => setMajor(e.target.value)}
                      className="w-full border-2 border-gray-200 bg-white/50 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300 appearance-none cursor-pointer"
                      dir={isAR ? "rtl" : "ltr"}
                    >
                      <option
                        value=""
                        className="text-gray-400 text-sm sm:text-base"
                      >
                        {t("hero.majorPlaceholder")}
                      </option>
                      {majors.map((m) => (
                        <option
                          key={m}
                          className="text-secondary bg-white text-sm sm:text-base"
                          value={m}
                        >
                          {m}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 sm:right-5 md:right-6 flex items-center pointer-events-none">
                      <svg
                        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 text-gray-700 leading-relaxed">
                {t("hero.desc")}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={handleGo}
                className="relative bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl overflow-hidden group"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>{t("hero.letsGo")}</span>
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-300"
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

            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <div
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-secondary ${
                  isAR ? "text-right" : ""
                }`}
              >
                <div className="text-center lg:text-inherit group">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 group-hover:from-primary/20 group-hover:to-secondary/20 group-hover:scale-105">
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      50K+
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg uppercase tracking-wide mt-2 sm:mt-3 text-gray-600 font-semibold">
                      {t("hero.stats.programs")}
                    </p>
                  </div>
                </div>

                <div className="text-center lg:text-inherit group">
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 group-hover:from-secondary/20 group-hover:to-primary/20 group-hover:scale-105">
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      34+
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg uppercase tracking-wide mt-2 sm:mt-3 text-gray-600 font-semibold">
                      {t("hero.stats.countries")}
                    </p>
                  </div>
                </div>

                <div className="text-center lg:text-inherit group">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 group-hover:from-primary/20 group-hover:to-secondary/20 group-hover:scale-105">
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      $22B
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg uppercase tracking-wide mt-2 sm:mt-3 text-gray-600 font-semibold">
                      {t("hero.stats.scholarships")}
                    </p>
                  </div>
                </div>

                <div className="text-center lg:text-inherit group">
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 group-hover:from-secondary/20 group-hover:to-primary/20 group-hover:scale-105">
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      One
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg uppercase tracking-wide mt-2 sm:mt-3 text-gray-600 font-semibold">
                      {t("hero.stats.application")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative order-1 lg:order-2">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                <div className="relative w-full h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl group">
                  <Image
                    src={isAR ? "/images/LogoAr.png" : "/images/LogoEn.png"}
                    alt="Students studying abroad"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-secondary"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-sm animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-sm animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-4 w-8 h-8 sm:w-10 sm:h-10 bg-primary/30 rounded-full blur-sm animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Floating cards */}
              <div className="absolute -top-4 -left-12 hidden sm:block">
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-xl p-3 sm:p-4 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      Global Education
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-8 hidden sm:block">
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-xl p-3 sm:p-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      Bright Future
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
