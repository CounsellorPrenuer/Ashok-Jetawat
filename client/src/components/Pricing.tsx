import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingPackage {
  name: string;
  planName: string;
  price: string;
  features: Feature[];
  buttonText: string;
}

interface CategoryData {
  standard: PricingPackage;
  premium: PricingPackage;
}

const pricingData: Record<string, CategoryData> = {
  "8-9": {
    standard: {
      name: "Standard",
      planName: "Discover",
      price: "₹ 5,500",
      features: [
        { text: "Psychometric assessment to measure your interests", included: true },
        { text: "1 career counselling session with Mentoria's expert career coaches", included: true },
        { text: "Lifetime access to Knowledge Gateway", included: true },
        { text: "Invites to live webinars by industry experts", included: true },
        { text: "Customized reports after each session with education pathways", included: false },
        { text: "Guidance on studying abroad", included: false },
        { text: "CV building during internship/graduation", included: false },
      ],
      buttonText: "BUY NOW",
    },
    premium: {
      name: "Premium",
      planName: "Discover plus+",
      price: "₹ 15,000",
      features: [
        { text: "Psychometric assessments to measure your interests, personality and abilities", included: true },
        { text: "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation", included: true },
        { text: "Lifetime access to Knowledge Gateway", included: true },
        { text: "Invites to live webinars by industry experts", included: true },
        { text: "Customized reports after each session with education pathways", included: true },
        { text: "Guidance on studying abroad", included: true },
        { text: "CV building during internship/graduation", included: true },
      ],
      buttonText: "BUY NOW",
    },
  },
  "10-12": {
    standard: {
      name: "Standard",
      planName: "Achieve Online",
      price: "₹ 5,999",
      features: [
        { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
        { text: "1 career counselling session", included: true },
        { text: "Lifetime access to Knowledge Gateway", included: true },
        { text: "Pre-recorded webinars by industry experts", included: true },
        { text: "Customized reports after each session with education pathways", included: false },
        { text: "Guidance on studying abroad", included: false },
        { text: "CV reviews during internship/graduation", included: false },
      ],
      buttonText: "BUY NOW",
    },
    premium: {
      name: "Premium",
      planName: "Achieve Plus+",
      price: "₹ 10,599",
      features: [
        { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
        { text: "4 career counselling sessions", included: true },
        { text: "Lifetime access to Knowledge Gateway", included: true },
        { text: "Attend live webinars by industry experts", included: true },
        { text: "Customized reports after each session with education pathways", included: true },
        { text: "Guidance on studying abroad", included: true },
        { text: "CV reviews during internship/graduation", included: true },
      ],
      buttonText: "BUY NOW",
    },
  },
  "college": {
    standard: {
      name: "Standard",
      planName: "Ascend Online",
      price: "₹ 6,499",
      features: [
        { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
        { text: "1 career counselling session", included: true },
        { text: "Lifetime access to Knowledge Gateway", included: true },
        { text: "Pre-recorded webinars by industry experts", included: true },
        { text: "Customized reports after each session with information on certificate/online courses", included: false },
        { text: "Guidance on studying abroad", included: false },
        { text: "CV reviews for job application", included: false },
      ],
      buttonText: "BUY NOW",
    },
    premium: {
      name: "Premium",
      planName: "Ascend Plus+",
      price: "₹ 10,599",
      features: [
        { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
        { text: "3 career counselling sessions", included: true },
        { text: "Lifetime access to Knowledge Gateway", included: true },
        { text: "Attend live webinars by industry experts", included: true },
        { text: "Customized reports after each session with information on certificate/online courses", included: true },
        { text: "Guidance on studying abroad", included: true },
        { text: "CV reviews for job application", included: true },
      ],
      buttonText: "BUY NOW",
    },
  },
  "working": {
    standard: {
      name: "Standard",
      planName: "Ascend Online",
      price: "₹ 6,499",
      features: [
        { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
        { text: "1 career counselling session", included: true },
        { text: "Lifetime access to Knowledge Gateway", included: true },
        { text: "Pre-recorded webinars by industry experts", included: true },
        { text: "Customized reports after each session with information on certificate/online courses", included: false },
        { text: "Guidance on studying abroad", included: false },
        { text: "CV reviews for job application", included: false },
      ],
      buttonText: "BUY NOW",
    },
    premium: {
      name: "Premium",
      planName: "Ascend Plus+",
      price: "₹ 10,599",
      features: [
        { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
        { text: "2 career counselling sessions", included: true },
        { text: "Lifetime access to Knowledge Gateway", included: true },
        { text: "Attend live webinars by industry experts", included: true },
        { text: "Customized reports after each session with information on certificate/online courses", included: true },
        { text: "Guidance on studying abroad", included: true },
        { text: "CV reviews for job application", included: true },
      ],
      buttonText: "BUY NOW",
    },
  },
};

function PricingCard({ pkg, delay, isPremium = false }: { pkg: PricingPackage; delay: number; isPremium?: boolean }) {
  const planSlug = pkg.planName.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col p-8 rounded-lg relative ${
        isPremium 
          ? 'border-2 border-primary bg-card shadow-2xl hover:shadow-2xl ring-2 ring-primary/20' 
          : 'border border-border bg-card shadow-lg hover:shadow-xl'
      } transition-all`}
      data-testid={`pricing-card-${planSlug}`}
    >
      {isPremium && (
        <div 
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
          data-testid="badge-recommended"
        >
          RECOMMENDED
        </div>
      )}
      
      <div className="mb-6">
        <p 
          className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2"
          data-testid={`text-package-type-${planSlug}`}
        >
          {pkg.name}
        </p>
        <h3 
          className="text-2xl font-bold mb-2"
          data-testid={`text-plan-name-${planSlug}`}
        >
          {pkg.planName}
        </h3>
        <p 
          className={`text-4xl font-bold ${isPremium ? 'text-primary' : 'text-primary'}`}
          data-testid={`text-price-${planSlug}`}
        >
          {pkg.price}
        </p>
      </div>

      <div className="flex-1 mb-8">
        <ul className="space-y-3">
          {pkg.features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3"
              data-testid={`feature-item-${planSlug}-${index}`}
            >
              <div className={`flex-shrink-0 mt-1 ${feature.included ? "text-green-500" : "text-red-500"}`}>
                {feature.included ? (
                  <Check className="w-5 h-5" data-testid={`icon-check-${planSlug}-${index}`} />
                ) : (
                  <X className="w-5 h-5" data-testid={`icon-cross-${planSlug}-${index}`} />
                )}
              </div>
              <span 
                className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground"}`}
                data-testid={`text-feature-${planSlug}-${index}`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Button 
        className="w-full" 
        size="lg"
        variant={isPremium ? "default" : "outline"}
        data-testid={`button-buy-${planSlug}`}
      >
        {pkg.buttonText}
      </Button>
    </motion.div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("8-9");

  return (
    <section className="py-20 md:py-32 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            data-testid="text-pricing-heading"
          >
            Career Counselling Programs
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-pricing-subtitle"
          >
            In partnership with Mentoria - Choose the perfect program for your career journey
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto" data-testid="pricing-tabs">
            <TabsTrigger 
              value="8-9" 
              className="py-4 text-sm md:text-base"
              data-testid="tab-8-9-students"
            >
              8-9 STUDENTS
            </TabsTrigger>
            <TabsTrigger 
              value="10-12" 
              className="py-4 text-sm md:text-base"
              data-testid="tab-10-12-students"
            >
              10-12 STUDENTS
            </TabsTrigger>
            <TabsTrigger 
              value="college" 
              className="py-4 text-sm md:text-base"
              data-testid="tab-college-graduates"
            >
              COLLEGE GRADUATES
            </TabsTrigger>
            <TabsTrigger 
              value="working" 
              className="py-4 text-sm md:text-base"
              data-testid="tab-working-professionals"
            >
              WORKING PROFESSIONALS
            </TabsTrigger>
          </TabsList>

          {Object.entries(pricingData).map(([key, data]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-12">
                <PricingCard pkg={data.standard} delay={0} isPremium={false} />
                <PricingCard pkg={data.premium} delay={0.1} isPremium={true} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
