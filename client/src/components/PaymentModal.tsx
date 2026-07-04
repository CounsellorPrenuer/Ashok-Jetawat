import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Building2, Calendar, Mail, Phone, User, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONTACT_EMAIL } from "@/lib/config";
import { formatCurrency } from "@/lib/currency";
import { workerPost } from "@/lib/workerApi";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OrderResult = {
  key_id: string;
  order_id: string;
  amount: number;
  currency: string;
  lead_id: string;
  final_amount: number;
};

function loadRazorpayScript() {
  return new Promise<boolean>((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    organizationType: "",
    organizationName: "",
    eventDate: "",
    amount: "10000",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const retainerAmount = Number(formData.amount) || 10000;

  const openMailDraft = () => {
    const subject = encodeURIComponent("Speaking engagement booking retainer enquiry");
    const body = encodeURIComponent(
      `Hello,\n\nI would like to pay a booking retainer of ${formatCurrency(retainerAmount)}.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nOrganization: ${formData.organizationName} (${formData.organizationType})\nEvent date: ${formData.eventDate || "TBD"}\n`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      if (!(await loadRazorpayScript()) || !window.Razorpay) {
        throw new Error("Razorpay could not load on this browser.");
      }
      const order = await workerPost<OrderResult>("/api/payments/create-order", {
        plan_id: "booking-retainer",
        amount: retainerAmount,
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phoneNumber.trim(),
      });

      const checkout = new window.Razorpay({
        key: order.key_id,
        amount: order.amount,
        currency: order.currency,
        name: "Asian Counselling Center",
        description: "Speaking Engagement Booking Retainer",
        order_id: order.order_id,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phoneNumber,
        },
        theme: { color: "#E63946" },
        handler: async (response: Record<string, string>) => {
          try {
            await workerPost("/api/payments/verify", {
              plan_id: "booking-retainer",
              lead_id: order.lead_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            setPaymentSuccess(true);
            setTimeout(() => {
              setPaymentSuccess(false);
              setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                organizationType: "",
                organizationName: "",
                eventDate: "",
                amount: "10000",
              });
              onClose();
            }, 3000);
          } catch (error) {
            toast({
              title: "Payment Verification Failed",
              description: error instanceof Error ? error.message : "Please contact support.",
              variant: "destructive",
            });
          } finally {
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: () => setIsProcessing(false),
        },
      });
      checkout.open();
    } catch (error) {
      setIsProcessing(false);
      toast({
        title: "Checkout unavailable",
        description: error instanceof Error ? `${error.message} You can email us instead.` : "Please use the email fallback.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-background border border-border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="close-payment-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl">Book Dr. Jetawat</h2>
                    <p className="text-sm text-muted-foreground">
                      Secure your speaking engagement with a retainer payment
                    </p>
                  </div>
                </div>

                {!paymentSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block flex items-center gap-1">
                          <User className="w-4 h-4" />
                          Full Name *
                        </label>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                          data-testid="payment-input-name"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="payment-input-email"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          required
                          data-testid="payment-input-phone"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          Organization Type *
                        </label>
                        <Select
                          value={formData.organizationType}
                          onValueChange={(value) => setFormData({ ...formData, organizationType: value })}
                          required
                        >
                          <SelectTrigger data-testid="payment-select-org-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="school">School</SelectItem>
                            <SelectItem value="college">College/University</SelectItem>
                            <SelectItem value="corporate">Corporate</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          Organization Name *
                        </label>
                        <Input
                          placeholder="Your organization name"
                          value={formData.organizationName}
                          onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                          required
                          data-testid="payment-input-org-name"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Preferred Event Date
                        </label>
                        <Input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          data-testid="payment-input-date"
                        />
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Booking Retainer Amount</span>
                        <span className="text-2xl font-bold text-primary">{formatCurrency(retainerAmount)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        This retainer secures your booking date. Final amount will be discussed based on your requirements.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                      <Button type="button" variant="outline" onClick={openMailDraft}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email Instead
                      </Button>
                      <Button type="submit" className="text-lg py-6" size="lg" disabled={isProcessing} data-testid="payment-button-submit">
                        {isProcessing ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <CreditCard className="w-5 h-5 mr-2" />}
                        {isProcessing ? "Processing..." : "Proceed to Payment"}
                      </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Secure payment powered by Razorpay. Your payment information is encrypted and secure.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Payment Successful!</h3>
                    <p className="text-muted-foreground">Your booking has been confirmed. We&apos;ll contact you within 24 hours.</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
