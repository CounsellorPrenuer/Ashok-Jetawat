import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@assets/profile_1760084378944.jpeg";
import csiLogo from "@assets/logo-1_1761560597253.png";
import ucciLogo from "@assets/logo-2_1761560597254.png";
import indiaLogo from "@assets/logo-3_1761560597255.png";
import istdLogo from "@assets/logo-4_1761560597256.png";
import iiieLogo from "@assets/logo-5_1761560597257.png";
import iimmLogo from "@assets/logo-6_1761560597258.png";
import jsgLogo from "@assets/logo-7_1761560597258.png";
import { Award, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="relative order-2 lg:order-1"
            variants={itemVariants}
            data-testid="about-image"
          >
            <div className="relative">
              <motion.div 
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profileImage} 
                  alt="Dr. Ashok Jetawat" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-2xl z-20"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-heading font-bold flex items-center gap-2">
                  <Sparkles className="w-8 h-8" />
                  PhD, M.Tech, MBA
                </div>
                <div className="text-sm text-primary-foreground/90">Multiple Degrees</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" variants={itemVariants}>
            <motion.h2 
              className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6"
              variants={itemVariants}
            >
              Meet Dr. Ashok Jetawat
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              variants={itemVariants}
            >
              After completing his graduation in engineering, Dr. Jetawat pursued M.Tech., MBA, and masters in three other disciplines. He earned his Doctorate from MLSU in e-Governance, establishing himself as a multifaceted expert in both technology and human development.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Dr. Jetawat is a Corporate Trainer with specialization in Team Building, Time Management, Productivity, Work Commitment, e-Commerce, e-Governance, Study Techniques, Mind Management, Stress Management, Concentration, Soft Skills, and Personality Development. Thousands of corporate professionals and students from various organizations have been transformed by his seminars.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Card className="p-4 hover-elevate active-elevate-2 transition-all" data-testid="achievement-award">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Rashtriya Ratna Award</div>
                      <div className="text-sm text-muted-foreground">2002</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="p-4 hover-elevate active-elevate-2 transition-all" data-testid="achievement-fellowship">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">ISTD Fellowship</div>
                      <div className="text-sm text-muted-foreground">2019-20</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="p-4 hover-elevate active-elevate-2 transition-all" data-testid="achievement-publications">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">40+ Publications</div>
                      <div className="text-sm text-muted-foreground">Research Papers</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-20 pt-12 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-center mb-12" data-testid="text-memberships-heading">
            Active member of:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 items-center justify-items-center">
            <motion.div 
              className="flex flex-col items-center gap-3 text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="membership-csi"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={csiLogo} 
                  alt="Computer Society of India" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-muted-foreground max-w-[120px] leading-tight">
                Computer Society of India (CSI)
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center gap-3 text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="membership-ucci"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={ucciLogo} 
                  alt="Udaipur Chamber of Commerce & Industry" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-muted-foreground max-w-[120px] leading-tight">
                Udaipur Chamber of Commerce & Industry (UCCI)
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center gap-3 text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="membership-india"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={indiaLogo} 
                  alt="The Institution of Engineers" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-muted-foreground max-w-[120px] leading-tight">
                The Institution of Engineers (INDIA)
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center gap-3 text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="membership-istd"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={istdLogo} 
                  alt="The Indian Society for Training and Development" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-muted-foreground max-w-[120px] leading-tight">
                The Indian Society for Training and Development (ISTD)
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center gap-3 text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="membership-iiie"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={iiieLogo} 
                  alt="Indian Institution of Industrial Engineering" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-muted-foreground max-w-[120px] leading-tight">
                Indian Institution of Industrial Engineering (IIIE)
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center gap-3 text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="membership-iimm"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={iimmLogo} 
                  alt="Indian Institute Materials Management" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-muted-foreground max-w-[120px] leading-tight">
                Indian Institute Materials Management (IIMM)
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center gap-3 text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="membership-jsg"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={jsgLogo} 
                  alt="Jain Social Group" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-muted-foreground max-w-[120px] leading-tight">
                Jain Social Group (JSG)
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
