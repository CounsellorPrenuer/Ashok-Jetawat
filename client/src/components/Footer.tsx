import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 text-primary">
              Asian Counselling Center
            </h3>
            <p className="text-background/80 text-sm">
              Empowering individuals and organizations to achieve peak performance through transformative motivation and counseling.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-sm text-background/80 hover:text-primary transition-colors"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('topics')}
                className="block text-sm text-background/80 hover:text-primary transition-colors"
                data-testid="footer-link-topics"
              >
                Speaking Topics
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block text-sm text-background/80 hover:text-primary transition-colors"
                data-testid="footer-link-gallery"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="block text-sm text-background/80 hover:text-primary transition-colors"
                data-testid="footer-link-blog"
              >
                Blog
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p data-testid="footer-email">drashokjetawat@gmail.com</p>
              <p data-testid="footer-phone">+91 90015 56010</p>
              <p data-testid="footer-location">Udaipur, Rajasthan, India</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="secondary"
                className="bg-background/10 hover:bg-primary text-background"
                data-testid="social-instagram"
                onClick={() => console.log('Instagram clicked')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="secondary"
                className="bg-background/10 hover:bg-primary text-background"
                data-testid="social-linkedin"
                onClick={() => console.log('LinkedIn clicked')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="secondary"
                className="bg-background/10 hover:bg-primary text-background"
                data-testid="social-youtube"
                onClick={() => console.log('YouTube clicked')}
              >
                <Youtube className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="secondary"
                className="bg-background/10 hover:bg-primary text-background"
                data-testid="social-facebook"
                onClick={() => console.log('Facebook clicked')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Asian Counselling Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
