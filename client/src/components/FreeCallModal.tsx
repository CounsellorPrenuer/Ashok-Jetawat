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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Free call booking:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', phoneNumber: '', background: '' });
      onClose();
    }, 2000);
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
              className="bg-background border border-border rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
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
                  data-testid="close-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl">Free Discovery Call</h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      ⭐ Trusted by 3,725+ professionals
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" />
                      <span className="font-semibold text-sm">What You'll Get (Free)</span>
                    </div>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-500 mt-0.5">•</span>
                        <span><strong>10-min focused discussion</strong> about your career situation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-500 mt-0.5">•</span>
                        <span><strong>Actionable roadmap</strong> with 2-3 immediate next steps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-500 mt-0.5">•</span>
                        <span><strong>Expert assessment</strong> of your primary career challenge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-500 mt-0.5">•</span>
                        <span><strong>Personalized guidance</strong> based on your background</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-muted-foreground" />
                      <span className="font-semibold text-sm">Not Included (Paid Only)</span>
                    </div>
                    <ul className="space-y-2 text-xs text-muted-foreground line-through">
                      <li>Full psychometric assessment & detailed report</li>
                      <li>60-90 minute deep-dive counseling session</li>
                      <li>Career compatibility analysis</li>
                      <li>Ongoing mentorship support</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Quick & Valuable</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Get clarity in just 10 minutes—no strings attached</p>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Full Name *</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        data-testid="modal-input-name"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                        data-testid="modal-input-phone"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Current Background *</label>
                      <Select 
                        value={formData.background} 
                        onValueChange={(value) => setFormData({ ...formData, background: value })}
                        required
                      >
                        <SelectTrigger data-testid="modal-select-background">
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
                      className="w-full text-lg py-6" 
                      size="lg"
                      data-testid="modal-button-submit"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Book a Free Call
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCheck className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Call Scheduled!</h3>
                    <p className="text-muted-foreground">We'll reach out to you within 4 hours</p>
                  </motion.div>
                )}

                <div className="mt-6 bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    <span className="font-semibold text-sm">Your 10-Minute Call Timeline</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                      <div>
                        <div className="font-semibold text-sm">Minutes 0-3: Quick Introduction</div>
                        <div className="text-xs text-muted-foreground">We'll understand your current situation & immediate concerns</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                      <div>
                        <div className="font-semibold text-sm">Minutes 3-7: Problem Diagnosis</div>
                        <div className="text-xs text-muted-foreground">We'll identify your core challenges & its root causes</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                      <div>
                        <div className="font-semibold text-sm">Minutes 7-10: Action Plan</div>
                        <div className="text-xs text-muted-foreground">You'll get 2-3 specific steps to implement immediately</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-800 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      We'll call within 4 hours
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      100% Free
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      Results-focused
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
