import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

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
