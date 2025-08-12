// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <a
        href="https://wa.me/201557572727"
        className="fixed bottom-4 right-4  p-4  hover:scale-130 transition"
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
