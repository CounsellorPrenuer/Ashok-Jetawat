import heroImage from "@assets/stock_images/business_conference__1ccecf8f.jpg";
import { TrendingUp, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-foreground/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-primary-foreground mb-6 tracking-tight">
          Igniting Potential.<br />Inspiring Action.
        </h1>
        <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12">
          Dr. Ashok Jetawat, one of Asia's leading motivational speakers and counselors, empowering individuals and organizations to achieve peak performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-background/10 border border-primary-foreground/20 rounded-lg p-6 hover-elevate transition-all" data-testid="stat-experience">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <div className="text-4xl font-heading font-bold text-primary-foreground mb-2">20+</div>
            <div className="text-sm text-primary-foreground/80">Years of Experience</div>
          </div>

          <div className="backdrop-blur-md bg-background/10 border border-primary-foreground/20 rounded-lg p-6 hover-elevate transition-all" data-testid="stat-lives">
            <div className="flex justify-center mb-3">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <div className="text-4xl font-heading font-bold text-primary-foreground mb-2">1M+</div>
            <div className="text-sm text-primary-foreground/80">Lives Inspired</div>
          </div>

          <div className="backdrop-blur-md bg-background/10 border border-primary-foreground/20 rounded-lg p-6 hover-elevate transition-all" data-testid="stat-clients">
            <div className="flex justify-center mb-3">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <div className="text-4xl font-heading font-bold text-primary-foreground mb-2">500+</div>
            <div className="text-sm text-primary-foreground/80">Corporate Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
