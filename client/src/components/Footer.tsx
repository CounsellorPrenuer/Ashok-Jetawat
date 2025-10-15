import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", testId: "social-instagram" },
    { icon: Linkedin, label: "LinkedIn", testId: "social-linkedin" },
    { icon: Youtube, label: "YouTube", testId: "social-youtube" },
    { icon: Facebook, label: "Facebook", testId: "social-facebook" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-heading font-bold text-xl mb-4 text-primary">
              Asian Counselling Center
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering individuals and organizations to achieve peak performance through transformative motivation and counseling.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['about', 'topics', 'gallery', 'blog'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-sm text-background/80 hover:text-primary transition-colors hover-elevate px-2 py-1 rounded text-left w-full"
                  data-testid={`footer-link-${section}`}
                  whileHover={{ x: 4 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('topics', 'Speaking Topics')}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/80">
              <motion.p whileHover={{ x: 4 }} data-testid="footer-email">drashokjetawat@gmail.com</motion.p>
              <motion.p whileHover={{ x: 4 }} data-testid="footer-phone">+91 90015 56010</motion.p>
              <motion.p whileHover={{ x: 4 }} data-testid="footer-location">Udaipur, Rajasthan, India</motion.p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.testId}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    size="icon" 
                    variant="secondary"
                    className="bg-background/10 hover:bg-primary text-background"
                    data-testid={social.testId}
                    onClick={() => console.log(`${social.label} clicked`)}
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="pt-8 border-t border-background/20 text-center text-sm text-background/60"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; {new Date().getFullYear()} Asian Counselling Center. All rights reserved.</p>
          <p className="mt-2" data-testid="text-mentoria-partnership">In partnership with Mentoria for enhanced career guidance services.</p>
        </motion.div>
      </div>
    </footer>
  );
}
