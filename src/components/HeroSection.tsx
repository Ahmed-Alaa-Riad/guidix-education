// // components/LandingHero.tsx
// import { useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// export default function HeroSection() {
//   const router = useRouter();
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
//     if (!country || !degree || !major) {
//       alert("Please select Country, Degree, and Major");
//       return;
//     }
//     router.push(`/apply?country=${country}&degree=${degree}&major=${major}`);
//   };

//   return (
//     <section className="relative overflow-hidden bg-background min-h-screen">
//       {/* Purple left gradient shape */}
//       <div className="absolute top-0 left-0 w-2/5 h-full bg-secondary rounded-br-[120px] hidden lg:block"></div>

//       <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center min-h-screen">
//         {/* Left content */}
//         <div className="lg:w-1/2 text-center lg:text-left space-y-8">
//           <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-primary">
//             I WANT TO STUDY IN <br className="hidden lg:block" />
//             <select
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="bg-transparent border-b-2 border-primary focus:outline-none text-primary font-bold text-5xl lg:text-6xl cursor-pointer"
//             >
//               <option value="">COUNTRY</option>
//               {countries.map((c) => (
//                 <option key={c}>{c}</option>
//               ))}
//             </select>
//           </h1>

//           <h2 className="text-3xl lg:text-4xl font-bold text-primary">
//             TO GET{" "}
//             <select
//               value={degree}
//               onChange={(e) => setDegree(e.target.value)}
//               className="bg-transparent border-b-2 border-primary focus:outline-none text-primary font-bold text-3xl lg:text-4xl cursor-pointer"
//             >
//               <option value="">STUDY LEVEL</option>
//               <option>Bachelor's</option>
//               <option>Master's</option>
//               <option>PhD</option>
//             </select>
//           </h2>

//           <h2 className="text-3xl lg:text-4xl font-bold text-primary">
//             IN{" "}
//             <select
//               value={major}
//               onChange={(e) => setMajor(e.target.value)}
//               className="bg-transparent border-b-2 border-primary focus:outline-none text-primary font-bold text-3xl lg:text-4xl cursor-pointer"
//             >
//               <option value="">MAJOR</option>
//               {majors.map((m) => (
//                 <option key={m}>{m}</option>
//               ))}
//             </select>
//           </h2>

//           <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
//             Find and apply to your best-fit programs and scholarships in 34
//             countries.
//           </p>

//           <button
//             onClick={handleGo}
//             className="bg-primary hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
//           >
//             Let's go!
//           </button>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
//             <div className="text-center lg:text-left">
//               <p className="text-3xl font-bold text-primary">50 000+</p>
//               <p className="text-sm text-gray-500 uppercase tracking-wide">
//                 Programs
//               </p>
//             </div>
//             <div className="text-center lg:text-left">
//               <p className="text-3xl font-bold text-primary">34+</p>
//               <p className="text-sm text-gray-500 uppercase tracking-wide">
//                 Countries
//               </p>
//             </div>
//             <div className="text-center lg:text-left">
//               <p className="text-3xl font-bold text-primary">$22B</p>
//               <p className="text-sm text-gray-500 uppercase tracking-wide">
//                 Scholarships
//               </p>
//             </div>
//             <div className="text-center lg:text-left">
//               <p className="text-3xl font-bold text-primary">One</p>
//               <p className="text-sm text-gray-500 uppercase tracking-wide">
//                 Application
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="lg:w-1/2 flex justify-center mt-16 lg:mt-0 relative">
//           <div className="relative w-96 h-96 lg:w-[420px] lg:h-[420px]">
//             <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-primary shadow-2xl">
//               <Image
//                 src="/images/3331.png"
//                 alt="Students studying abroad"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/20 blur-sm"></div>
//           </div>
//         </div>
//       </div>

//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-3 pointer-events-none bg-[url('/pattern.svg')] bg-repeat"></div>
//     </section>
//   );
// }
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter();
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
      alert("Please select Country, Degree, and Major");
      return;
    }
    router.push(`/apply?country=${country}&degree=${degree}&major=${major}`);
  };

  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center overflow-hidden pt-28">
      {/* Purple left background shape */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-secondary rounded-br-[150px] hidden lg:block"></div>

      {/* Decorative yellow circle */}
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-secondary rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* Left text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8 text-white lg:text-gray-900">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            I WANT TO STUDY IN{" "}
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-transparent border-b-4 border-primary focus:outline-none text-primary font-extrabold cursor-pointer"
            >
              <option value="">COUNTRY</option>
              {countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </h1>

          <h2 className="text-3xl lg:text-4xl font-bold">
            TO GET{" "}
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="bg-transparent border-b-4 border-primary focus:outline-none text-primary font-bold cursor-pointer"
            >
              <option value="">STUDY LEVEL</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>
          </h2>

          <h2 className="text-3xl lg:text-4xl font-bold">
            IN{" "}
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="bg-transparent border-b-4 border-primary focus:outline-none text-primary font-bold cursor-pointer"
            >
              <option value="">MAJOR</option>
              {majors.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </h2>

          <p className="text-lg max-w-lg mx-auto lg:mx-0 text-gray-200 lg:text-gray-600 leading-relaxed">
            Find and apply to your best-fit programs and scholarships in 34
            countries.
          </p>

          <button
            onClick={handleGo}
            className="bg-primary hover:bg-green-500 text-gray-900 font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            Let's go!
          </button>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 text-white lg:text-gray-900">
            <div>
              <p className="text-3xl font-extrabold">50 000+</p>
              <p className="text-sm uppercase tracking-wide">Programs</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">34+</p>
              <p className="text-sm uppercase tracking-wide">Countries</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">$22B</p>
              <p className="text-sm uppercase tracking-wide">Scholarships</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">One</p>
              <p className="text-sm uppercase tracking-wide">Application</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2 flex justify-center mt-16 lg:mt-0 relative">
          <div className="relative w-96 h-96 lg:w-[420px] lg:h-[420px]">
            <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-secondary shadow-2xl">
              <Image
                src="/images/3331.png"
                alt="Students studying abroad"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative blur */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary/30 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
