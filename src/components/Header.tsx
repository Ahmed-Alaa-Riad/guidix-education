import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ReactCountryFlag from "react-country-flag";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const switchLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <header className=" fixed w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo - working properly */}
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-primary">
            {t("header.logo")}
          </span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold uppercase tracking-wide text-dark">
          <Link href="/" className="hover:text-primary transition-colors">
            {t("header.nav.home")}
          </Link>
          <Link
            href="/destinations"
            className="hover:text-primary transition-colors"
          >
            {t("header.nav.destinations")}
          </Link>
          <Link
            href="/courses"
            className="hover:text-primary transition-colors"
          >
            {t("header.nav.courses")}
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            {t("header.nav.blog")}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {t("header.nav.about")}
          </Link>

          {/* Language Switcher */}
          <div className="flex items-center space-x-3 ml-6">
            <button
              onClick={() => switchLanguage("ar")}
              className="transition-all duration-200 hover:scale-105"
              aria-label={t("header.lang.switchToArabic")}
            >
              <ReactCountryFlag
                countryCode="EG"
                svg
                style={{
                  width: "2em",
                  height: "2em",
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
                  width: "2em",
                  height: "2em",
                  borderRadius: "4px",
                  boxShadow: "0 0 2px rgba(0,0,0,0.3)",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              menuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden  border-t shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <Link
              href="/"
              className="hover:text-primary transition-colors font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {t("header.nav.home")}
            </Link>
            <Link
              href="/destinations"
              className="hover:text-primary transition-colors font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {t("header.nav.destinations")}
            </Link>
            <Link
              href="/courses"
              className="hover:text-primary transition-colors font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {t("header.nav.courses")}
            </Link>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {t("header.nav.blog")}
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {t("header.nav.about")}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-3 pt-4 border-t">
              <span className="text-sm font-semibold text-gray-600">
                {t("header.lang.language")}:
              </span>
              <button
                onClick={() => {
                  switchLanguage("ar");
                  setMenuOpen(false);
                }}
                className={`transition-all duration-200 ${
                  i18n.language === "ar"
                    ? "ring-2 ring-primary ring-offset-2"
                    : ""
                }`}
              >
                <ReactCountryFlag
                  countryCode="EG"
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "4px",
                  }}
                />
              </button>
              <button
                onClick={() => {
                  switchLanguage("en");
                  setMenuOpen(false);
                }}
                className={`transition-all duration-200 ${
                  i18n.language === "en"
                    ? "ring-2 ring-primary ring-offset-2"
                    : ""
                }`}
              >
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "4px",
                  }}
                />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
