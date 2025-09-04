import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Hero from "./marketing/components/Hero";
import FeatureGrid from "./marketing/components/FeatureGrid";
import Destacados from "./marketing/components/Destacados";
import Proceso from "./marketing/components/Process";
import Testimonios from "./marketing/components/Testimonials";
import CTA from "./marketing/components/CTA";


export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Destacados />
      <Proceso />
      {/* <Testimonios /> */}
      <CTA />
      <Footer />
    </>
  );
}
