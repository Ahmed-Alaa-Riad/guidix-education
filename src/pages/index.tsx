import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
// Import required for translations
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Head>
        <title>GuidixEducation</title>
      </Head>
      <Header />
      <main>
        <HeroSection />
        {/* Add Services, Testimonials, Call to Action etc. */}
      </main>
      <Footer />
    </>
  );
}

// This is REQUIRED for translations to work on this page
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      // Load the 'common' namespace for translations
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
