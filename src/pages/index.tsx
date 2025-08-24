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
        <title>GuidixEducation - Study Abroad Made Easy</title>
        <meta
          name="description"
          content="Find your dream university abroad with GuidixEducation. Access 50,000+ programs across 34+ countries with one application."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          {/* Add other sections here: Services, Testimonials, Call to Action etc. */}
        </main>
        <Footer />
      </div>
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
