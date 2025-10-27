import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SpeakingTopics from "@/components/SpeakingTopics";
import TrustedBy from "@/components/TrustedBy";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import PartnershipHighlight from "@/components/PartnershipHighlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SpeakingTopics />
        <TrustedBy />
        <Gallery />
        <Pricing />
        <Booking />
        <Blog />
        <Contact />
        <PartnershipHighlight />
      </main>
      <Footer />
    </div>
  );
}
