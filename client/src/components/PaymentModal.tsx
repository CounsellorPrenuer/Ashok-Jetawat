import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Building2, Calendar, Mail, Phone, User, CheckCircle2 } from "lucide-react";
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
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    organizationType: '',
    organizationName: '',
    eventDate: '',
    amount: '10000',
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { toast } = useToast();

  const createBookingMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return await response.json();
    },
    onSuccess: (booking) => {
      // Load Razorpay script if not already loaded
      loadRazorpayScript(() => {
        initiateRazorpayPayment(booking);
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const loadRazorpayScript = (callback: () => void) => {
    if (window.Razorpay) {
      callback();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = callback;
    script.onerror = () => {
      toast({
        title: "Error",
        description: "Failed to load payment gateway. Please try again.",
        variant: "destructive",
      });
    };
    document.body.appendChild(script);
  };

  const initiateRazorpayPayment = (booking: any) => {
    if (!booking || !booking.razorpayOrderId) {
      toast({
        title: "Error",
        description: "Invalid booking data. Please try again.",
        variant: "destructive",
      });
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_dummy_key',
      amount: parseInt(formData.amount) * 100,
      currency: 'INR',
      name: 'Asian Counselling Center',
      description: 'Speaking Engagement Booking Retainer',
      image: '/logo.png',
      order_id: booking.razorpayOrderId,
      handler: async function (response: any) {
        try {
          await apiRequest("PATCH", `/api/bookings/${booking.id}/payment`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
          
          setPaymentSuccess(true);
          setTimeout(() => {
            setPaymentSuccess(false);
            setFormData({
              fullName: '',
              email: '',
              phoneNumber: '',
              organizationType: '',
              organizationName: '',
              eventDate: '',
              amount: '10000',
            });
            onClose();
          }, 3000);
        } catch (error: any) {
          toast({
            title: "Payment Verification Failed",
            description: error.message || "Please contact support.",
            variant: "destructive",
          });
        }
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phoneNumber,
      },
      theme: {
        color: '#E63946',
      },
      modal: {
        ondismiss: function() {
          toast({
            title: "Payment Cancelled",
            description: "You cancelled the payment process.",
          });
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createBookingMutation.mutate(formData);
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
                        <span className="text-2xl font-bold text-primary">₹{parseInt(formData.amount).toLocaleString('en-IN')}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        This retainer secures your booking date. Final amount will be discussed based on your requirements.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-lg py-6 mt-6" 
                      size="lg"
                      disabled={createBookingMutation.isPending}
                      data-testid="payment-button-submit"
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      {createBookingMutation.isPending ? "Processing..." : "Proceed to Payment"}
                    </Button>

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
                    <p className="text-muted-foreground">Your booking has been confirmed. We'll contact you within 24 hours.</p>
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
