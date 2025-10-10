import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, GraduationCap, Brain, Focus, Users, Lightbulb } from "lucide-react";

const topics = [
  {
    icon: Target,
    title: "Leadership Development",
    description: "Empower your team with proven leadership strategies and executive mindset coaching for organizational excellence.",
  },
  {
    icon: TrendingUp,
    title: "Sales Motivation & Performance",
    description: "Drive sales teams to peak performance with motivational techniques that deliver measurable results.",
  },
  {
    icon: GraduationCap,
    title: "Student Success & Academic Excellence",
    description: "Transform students' approach to learning with effective study techniques and concentration methods.",
  },
  {
    icon: Brain,
    title: "Stress Management & Resilience",
    description: "Build mental resilience and manage workplace stress with practical, science-backed strategies.",
  },
  {
    icon: Focus,
    title: "Mind Management & Focus",
    description: "Master your mind with techniques for enhanced concentration, clarity, and decision-making power.",
  },
  {
    icon: Users,
    title: "Team Building & Productivity",
    description: "Create high-performing teams through proven productivity frameworks and collaborative strategies.",
  },
  {
    icon: Lightbulb,
    title: "Soft Skills & Personality Development",
    description: "Develop essential soft skills and unlock your full potential for personal and professional growth.",
  },
];

export default function SpeakingTopics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="topics" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4">
            Speaking Topics & Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformative programs designed to ignite potential and drive measurable results across organizations and institutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="p-6 h-full hover-elevate active-elevate-2 transition-all cursor-pointer group"
                data-testid={`topic-card-${index}`}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <topic.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">{topic.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
