import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ReactCountryFlag from "react-country-flag";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");

  const switchLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
            {t("header.logo")}
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-semibold uppercase tracking-wide text-dark text-sm xl:text-base">
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-200"
          >
            {t("header.nav.home")}
          </Link>
          <Link
            href="/destinations"
            className="hover:text-primary transition-colors duration-200"
          >
            {t("header.nav.destinations")}
          </Link>
          <Link
            href="/courses"
            className="hover:text-primary transition-colors duration-200"
          >
            {t("header.nav.courses")}
          </Link>
          <Link
            href="/blog"
            className="hover:text-primary transition-colors duration-200"
          >
            {t("header.nav.blog")}
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition-colors duration-200"
          >
            {t("header.nav.about")}
          </Link>

          {/* Desktop Language Switcher */}
          <div className="flex items-center space-x-4 ml-4 xl:ml-6">
            <button
              onClick={() => switchLanguage("ar")}
              className="transition-all duration-200 hover:scale-105"
              aria-label={t("header.lang.switchToArabic")}
            >
              <ReactCountryFlag
                countryCode="EG"
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  borderRadius: "4px",
                  boxShadow: "0 0 2px rgba(0,0,0,0.3)",
                }}
              />
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className="transition-all duration-200 hover:scale-105"
              aria-label={t("header.lang.switchToEnglish")}
            >
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  borderRadius: "4px",
                  boxShadow: "0 0 2px rgba(0,0,0,0.3)",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Tablet/Mobile Language Switcher + Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          {/* Language Switcher for tablet/mobile */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => switchLanguage("ar")}
              className="transition-all duration-200 hover:scale-105"
              aria-label={t("header.lang.switchToArabic")}
            >
              <ReactCountryFlag
                countryCode="EG"
                svg
                style={{
                  width: "1.2em",
                  height: "1.2em",
                  borderRadius: "3px",
                  boxShadow: "0 0 1px rgba(0,0,0,0.3)",
                }}
              />
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className="transition-all duration-200 hover:scale-105"
              aria-label={t("header.lang.switchToEnglish")}
            >
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{
                  width: "1.2em",
                  height: "1.2em",
                  borderRadius: "3px",
                  boxShadow: "0 0 1px rgba(0,0,0,0.3)",
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${
                menuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm my-0.5 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${
                menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-200 font-semibold py-3 border-b border-gray-100 text-sm sm:text-base"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.nav.home")}
          </Link>
          <Link
            href="/destinations"
            className="hover:text-primary transition-colors duration-200 font-semibold py-3 border-b border-gray-100 text-sm sm:text-base"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.nav.destinations")}
          </Link>
          <Link
            href="/courses"
            className="hover:text-primary transition-colors duration-200 font-semibold py-3 border-b border-gray-100 text-sm sm:text-base"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.nav.courses")}
          </Link>
          <Link
            href="/blog"
            className="hover:text-primary transition-colors duration-200 font-semibold py-3 border-b border-gray-100 text-sm sm:text-base"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.nav.blog")}
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition-colors duration-200 font-semibold py-3 text-sm sm:text-base"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.nav.about")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
