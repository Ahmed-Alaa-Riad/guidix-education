// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-secondary text-white">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <Image
//             src="/logo.png"
//             alt="GuidixEducation"
//             width={40}
//             height={40}
//             className="rounded"
//           />
//           <span className="text-2xl font-bold">GuidixEducation</span>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-primary font-semibold">
//             Home
//           </Link>
//           <Link
//             href="/destinations"
//             className="hover:text-primary font-semibold"
//           >
//             Destinations
//           </Link>
//           <Link href="/courses" className="hover:text-primary font-semibold">
//             Courses
//           </Link>
//           <Link href="/blog" className="hover:text-primary font-semibold">
//             Blog
//           </Link>
//           <Link href="/about" className="hover:text-primary font-semibold">
//             About Us
//           </Link>
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {menuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="md:hidden bg-secondary px-4 pb-4 space-y-2">
//           <Link href="/" className="block hover:text-primary font-semibold">
//             Home
//           </Link>
//           <Link
//             href="/destinations"
//             className="block hover:text-primary font-semibold"
//           >
//             Destinations
//           </Link>
//           <Link
//             href="/courses"
//             className="block hover:text-primary font-semibold"
//           >
//             Courses
//           </Link>
//           <Link href="/blog" className="block hover:text-primary font-semibold">
//             Blog
//           </Link>
//           <Link
//             href="/about"
//             className="block hover:text-primary font-semibold"
//           >
//             About Us
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="GuidixEducation"
            width={50}
            height={50}
            className="rounded"
          />
          <span className="text-2xl font-extrabold text-primary">
            GuidixEducation
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-semibold uppercase tracking-wide text-gray-700">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/destinations" className="hover:text-primary">
            Destinations
          </Link>
          <Link href="/courses" className="hover:text-primary">
            Courses
          </Link>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <Link href="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link
            href="/login"
            className="ml-6 bg-primary text-white px-5 py-2 rounded-full shadow-lg hover:bg-primary/90 transition"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-700"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-3 text-gray-700 font-semibold uppercase tracking-wide">
          <Link href="/" className="block hover:text-primary">
            Home
          </Link>
          <Link href="/destinations" className="block hover:text-primary">
            Destinations
          </Link>
          <Link href="/courses" className="block hover:text-primary">
            Courses
          </Link>
          <Link href="/blog" className="block hover:text-primary">
            Blog
          </Link>
          <Link href="/about" className="block hover:text-primary">
            About Us
          </Link>
          <Link
            href="/login"
            className="inline-block mt-2 bg-primary text-white px-5 py-2 rounded-full shadow-lg hover:bg-primary/90 transition"
          >
            Login
          </Link>
        </nav>
      )}
    </header>
  );
}
