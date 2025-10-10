import { Button } from "@/components/ui/button";
import { Calendar, CreditCard } from "lucide-react";

export default function Booking() {
  const handleInquire = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePayment = () => {
    // todo: remove mock functionality - integrate with Razorpay
    console.log('Razorpay payment modal triggered');
    alert('Razorpay payment integration will be added in the next phase');
  };

  return (
    <section id="booking" className="py-20 lg:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-primary-foreground shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
              Bring Dr. Jetawat to Your Next Event
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Transform your organization with powerful, actionable insights that drive real results. Whether it's a corporate event, school assembly, or conference keynote, Dr. Jetawat delivers impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={handleInquire}
              className="w-full sm:w-auto text-lg"
              data-testid="button-inquire-now"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Inquire Now
            </Button>
            <Button 
              size="lg"
              onClick={handlePayment}
              className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg"
              data-testid="button-pay-retainer"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Pay Booking Retainer
            </Button>
          </div>

          <p className="text-center text-sm text-primary-foreground/70 mt-6">
            Custom packages available for corporate programs, educational institutions, and multi-day workshops
          </p>
        </div>
      </div>
    </section>
  );
}
