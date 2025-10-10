import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const schools = [
  "Indo-American Public School",
  "Guru Nanak Public School",
  "The Study School",
  "Central Academy",
  "Alok Senior Secondary School",
  "Adinath School",
  "Abhinav Sr. Sec. School",
  "Emmanuel Education Center",
];

const corporates = [
  "Fusion Outsourcing",
  "Wolkem India Ltd",
  "Patrika Group",
  "Oriental Insurance",
  "Rama Phosphates",
  "IICE - Computer Education",
  "National Institute Fire & Safety",
  "eGov Infotech",
];

const universities = [
  "Sikkim Manipal University",
  "MLSU Udaipur",
  "Aravali Institute of Technical Studies",
  "Jawahar Navodaya Vidyalaya",
];

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-xl text-muted-foreground">
            Empowering excellence across schools, corporates, and universities
          </p>
        </motion.div>

        <Tabs defaultValue="schools" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8" data-testid="client-tabs">
            <TabsTrigger value="schools" data-testid="tab-schools">Schools</TabsTrigger>
            <TabsTrigger value="corporates" data-testid="tab-corporates">Corporates</TabsTrigger>
            <TabsTrigger value="universities" data-testid="tab-universities">Universities</TabsTrigger>
          </TabsList>

          <TabsContent value="schools" className="mt-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {schools.map((school, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-card border border-card-border rounded-lg p-4 flex items-center justify-center text-center hover-elevate transition-all min-h-24"
                  data-testid={`client-school-${index}`}
                >
                  <span className="text-sm font-medium text-card-foreground">{school}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="corporates" className="mt-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {corporates.map((corporate, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-card border border-card-border rounded-lg p-4 flex items-center justify-center text-center hover-elevate transition-all min-h-24"
                  data-testid={`client-corporate-${index}`}
                >
                  <span className="text-sm font-medium text-card-foreground">{corporate}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="universities" className="mt-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {universities.map((university, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-card border border-card-border rounded-lg p-4 flex items-center justify-center text-center hover-elevate transition-all min-h-24"
                  data-testid={`client-university-${index}`}
                >
                  <span className="text-sm font-medium text-card-foreground">{university}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
