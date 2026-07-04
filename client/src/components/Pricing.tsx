import { useState } from "react";
import { motion } from "framer-motion";
import PricingTabs from "@/components/PricingTabs";
import CustomPlans from "@/components/CustomPlans";
import BookingModal from "@/components/BookingModal";
import { useCms } from "@/hooks/useCms";

type SelectedPlan = {
  planId: string;
  title: string;
  category: string;
  price: number;
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const { data } = useCms();
  const standardPlans = data?.standardPlans ?? [];
  const customPlans = data?.customPlans ?? [];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading" data-testid="text-pricing-heading">
            Career Counselling Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
            In partnership with Mentoria - Choose the perfect program for your career journey
          </p>
        </motion.div>

        <PricingTabs
          plans={standardPlans}
          onBuyClick={(plan, category) =>
            setSelectedPlan({ planId: plan.planId, title: plan.title, category, price: plan.price })
          }
        />
        <CustomPlans
          plans={customPlans}
          onBuyClick={(plan) =>
            setSelectedPlan({ planId: plan.planId, title: plan.title, category: "Custom Mentorship", price: plan.price })
          }
        />
      </div>

      {selectedPlan && (
        <BookingModal
          open
          onOpenChange={(open) => !open && setSelectedPlan(null)}
          {...selectedPlan}
        />
      )}
    </section>
  );
}
