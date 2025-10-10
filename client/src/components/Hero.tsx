import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "@assets/stock_images/business_conference__1ccecf8f.jpg";
import { TrendingUp, Users, Award, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/85 to-foreground/75" />
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">Igniting Potential.</span>
            <span className="block gradient-text" style={{
              background: 'linear-gradient(135deg, #E63946 0%, #FF6B6B 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Inspiring Action.
            </span>
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Dr. Ashok Jetawat, one of Asia's leading motivational speakers and counselors, empowering individuals and organizations to achieve peak performance.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="text-lg px-8 py-6 animate-glow"
            onClick={scrollToBooking}
            data-testid="hero-button-book"
          >
            Book Me to Speak
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={scrollToAbout}
            data-testid="hero-button-learn"
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div 
            className="glass-effect rounded-xl p-8 hover-elevate transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            data-testid="stat-experience"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <TrendingUp className="w-12 h-12 text-primary" />
              </motion.div>
            </div>
            <div className="text-5xl font-heading font-bold text-primary-foreground mb-2">20+</div>
            <div className="text-sm text-primary-foreground/80">Years of Experience</div>
          </motion.div>

          <motion.div 
            className="glass-effect rounded-xl p-8 hover-elevate transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            data-testid="stat-lives"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <Users className="w-12 h-12 text-primary" />
              </motion.div>
            </div>
            <div className="text-5xl font-heading font-bold text-primary-foreground mb-2">1M+</div>
            <div className="text-sm text-primary-foreground/80">Lives Inspired</div>
          </motion.div>

          <motion.div 
            className="glass-effect rounded-xl p-8 hover-elevate transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            data-testid="stat-clients"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <Award className="w-12 h-12 text-primary" />
              </motion.div>
            </div>
            <div className="text-5xl font-heading font-bold text-primary-foreground mb-2">500+</div>
            <div className="text-sm text-primary-foreground/80">Corporate Clients</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <button 
          onClick={scrollToAbout}
          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          data-testid="scroll-indicator"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
}
