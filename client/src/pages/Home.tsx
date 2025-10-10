import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SpeakingTopics from "@/components/SpeakingTopics";
import TrustedBy from "@/components/TrustedBy";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
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
        <Booking />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
