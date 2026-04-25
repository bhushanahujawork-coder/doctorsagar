import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStats from "../components/TrustStats";
import Story from "../components/Story";
import Quiz from "../components/Quiz";
import Services from "../components/Services";
import AboutDoctor from "../components/AboutDoctor";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Process from "../components/Process";
import ConversionCTA from "../components/ConversionCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0B0B0B' }}>
      <Navbar />
      <Hero />
      <TrustStats />
      <Story />
      <Quiz />
      <Services />
      <AboutDoctor />
      <WhyChooseUs />
      <Gallery />
      <Process />
      <ConversionCTA />
      <Contact />
      <Footer />
    </main>
  );
}
