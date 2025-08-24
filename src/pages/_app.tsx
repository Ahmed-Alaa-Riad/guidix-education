import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale ?? "en";

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  return (
    <>
      <Component {...pageProps} />

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/201557572727"
        className="fixed bottom-4 right-4 p-4 hover:scale-130 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/whatsapp.jpg"
          alt="WhatsApp"
          className="w-20 h-20 rounded-full"
        />
      </a>
    </>
  );
}

export default appWithTranslation(MyApp);
