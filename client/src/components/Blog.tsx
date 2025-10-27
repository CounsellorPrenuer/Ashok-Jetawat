import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users, Heart, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "5 Strategies to Boost Team Productivity",
    excerpt: "Discover proven techniques to enhance workplace efficiency and drive organizational success through effective team management.",
    date: "March 15, 2024",
    category: "Leadership",
    icon: Users,
  },
  {
    title: "The Power of Mindfulness in Stress Management",
    excerpt: "Learn how mindfulness practices can transform your approach to workplace stress and improve overall well-being.",
    date: "March 10, 2024",
    category: "Wellness",
    icon: Heart,
  },
  {
    title: "Effective Study Techniques for Academic Excellence",
    excerpt: "Evidence-based learning strategies that help students maximize retention and achieve outstanding academic results.",
    date: "March 5, 2024",
    category: "Education",
    icon: BookOpen,
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="blog" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4">
            Insights & Articles
          </h2>
          <p className="text-xl text-muted-foreground">
            Expert perspectives on personal development, leadership, and success
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <Card 
                  className="overflow-hidden h-full flex flex-col hover-elevate active-elevate-2 transition-all group"
                  data-testid={`blog-post-${index}`}
                >
                  <motion.div 
                    className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    data-testid={`blog-image-${index}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <IconComponent 
                      className="w-24 h-24 text-primary/30 relative z-10 group-hover:text-primary/50 transition-colors" 
                      strokeWidth={1.5}
                    />
                  </motion.div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-primary font-medium">{post.category}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
                  <Button variant="ghost" className="group/btn w-full justify-between" data-testid={`button-read-more-${index}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
