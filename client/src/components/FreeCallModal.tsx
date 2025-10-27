import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle2, XCircle, Clock, CheckCheck, Target } from "lucide-react";
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

interface FreeCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeCallModal({ isOpen, onClose }: FreeCallModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    background: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const createLeadMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: '', phoneNumber: '', background: '' });
        onClose();
      }, 2000);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createLeadMutation.mutate(formData);
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              className="bg-background border border-border rounded-xl shadow-2xl max-w-lg w-full my-4"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-5 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="close-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl">Free Discovery Call</h2>
                    <p className="text-xs text-muted-foreground">
                      ⭐ Trusted by 3,725+ professionals
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-sm">10-Minute Free Call</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Get personalized career guidance & actionable next steps—no strings attached</p>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="text-xs font-medium mb-1 block">Full Name *</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        data-testid="modal-input-name"
                        className="h-9"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium mb-1 block">Phone Number *</label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                        data-testid="modal-input-phone"
                        className="h-9"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium mb-1 block">Current Background *</label>
                      <Select 
                        value={formData.background} 
                        onValueChange={(value) => setFormData({ ...formData, background: value })}
                        required
                      >
                        <SelectTrigger data-testid="modal-select-background" className="h-9">
                          <SelectValue placeholder="Select your current background" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="working-professional">Working Professional</SelectItem>
                          <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                          <SelectItem value="career-break">Career Break</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={createLeadMutation.isPending}
                      data-testid="modal-button-submit"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {createLeadMutation.isPending ? "Submitting..." : "Book Free Call"}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCheck className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-base mb-1">Call Scheduled!</h3>
                    <p className="text-sm text-muted-foreground">We'll reach out within 4 hours</p>
                  </motion.div>
                )}

                <div className="mt-3 pt-3 border-t border-border flex items-center justify-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    10 minutes
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    100% Free
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    Actionable
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
