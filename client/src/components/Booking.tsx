import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, Sparkles } from "lucide-react";
import FreeCallModal from "./FreeCallModal";
import PaymentModal from "./PaymentModal";

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isFreeCallModalOpen, setIsFreeCallModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <section id="booking" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-2xl blur-lg opacity-75 animate-pulse" />
          
          <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 lg:p-12 text-primary-foreground shadow-2xl">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-8 h-8" />
                <h2 className="font-heading font-bold text-4xl lg:text-5xl">
                  Bring Dr. Jetawat to Your Next Event
                </h2>
                <Sparkles className="w-8 h-8" />
              </motion.div>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Transform your organization with powerful, actionable insights that drive real results. Whether it's a corporate event, school assembly, or conference keynote, Dr. Jetawat delivers impact.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsFreeCallModalOpen(true)}
                  className="w-full sm:w-auto text-lg px-8 py-6 font-semibold"
                  data-testid="button-inquire-now"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Free Call
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 font-semibold animate-glow"
                  data-testid="button-pay-retainer"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay Booking Retainer
                </Button>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-center text-sm text-primary-foreground/70 mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Custom packages available for corporate programs, educational institutions, and multi-day workshops
            </motion.p>
          </div>
        </motion.div>
      </div>

      <FreeCallModal isOpen={isFreeCallModalOpen} onClose={() => setIsFreeCallModalOpen(false)} />
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </section>
  );
}
