import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Building2, GraduationCap, PlayCircle, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PartnershipHighlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Users,
      number: "3,50,000+",
      label: "Students and Professionals Mentored",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500"
    },
    {
      icon: Building2,
      number: "240+",
      label: "Corporate Partners",
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-500"
    },
    {
      icon: GraduationCap,
      number: "350+",
      label: "Schools and College Partners",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-500"
    },
    {
      icon: PlayCircle,
      number: "1000+",
      label: "Hours of Career Webinars",
      color: "from-orange-500 to-red-500",
      iconBg: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Mentoria's</span>
            <br />
            Career Discovery Platform
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            Every Leadcrest Consulting plan includes lifetime access to Mentoria: India's most trusted platform for career discovery, mentorship, and lifelong upskilling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 lg:p-8 text-center hover-elevate border-2 h-full" data-testid={`card-stat-${index}`}>
                <motion.div
                  className={`w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="font-heading font-bold text-4xl lg:text-5xl mb-3"
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.number}
                  </span>
                </motion.div>
                
                <p className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-6 lg:p-8 hover-elevate border-2 inline-flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-primary tracking-wide">
                MENTORIA
              </div>
              <div className="h-8 w-px bg-border" />
              <a
                href="https://mentoria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                data-testid="link-mentoria"
              >
                <span className="text-sm lg:text-base font-medium">Career Discovery Platform</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </Card>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Click to explore Mentoria's comprehensive career platform
          </p>
        </motion.div>
      </div>
    </section>
  );
}
