import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-heading font-bold text-primary"
              data-testid="link-logo"
            >
              Asian Counselling Center
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('topics')}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
              data-testid="link-topics"
            >
              Speaking Topics
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
              data-testid="link-gallery"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
              data-testid="link-blog"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              variant="default"
              data-testid="button-book-speaker"
            >
              Book Me to Speak
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2"
              data-testid="mobile-link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('topics')}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2"
              data-testid="mobile-link-topics"
            >
              Speaking Topics
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2"
              data-testid="mobile-link-gallery"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2"
              data-testid="mobile-link-blog"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2"
              data-testid="mobile-link-contact"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="w-full mt-2"
              data-testid="mobile-button-book-speaker"
            >
              Book Me to Speak
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
