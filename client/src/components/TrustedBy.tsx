import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, GraduationCap, Briefcase, Star, TrendingUp, Users2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const allClients = [
  { name: "Indo-American Public School", type: "school", icon: GraduationCap },
  { name: "Fusion Outsourcing", type: "corporate", icon: Briefcase },
  { name: "Guru Nanak Public School", type: "school", icon: GraduationCap },
  { name: "Wolkem India Ltd", type: "corporate", icon: Briefcase },
  { name: "Sikkim Manipal University", type: "university", icon: Building2 },
  { name: "Patrika Group", type: "corporate", icon: Briefcase },
  { name: "The Study School", type: "school", icon: GraduationCap },
  { name: "Oriental Insurance", type: "corporate", icon: Briefcase },
  { name: "MLSU Udaipur", type: "university", icon: Building2 },
  { name: "Central Academy", type: "school", icon: GraduationCap },
  { name: "Rama Phosphates", type: "corporate", icon: Briefcase },
  { name: "Alok Senior Secondary School", type: "school", icon: GraduationCap },
  { name: "IICE - Computer Education", type: "corporate", icon: Briefcase },
  { name: "Aravali Institute of Technical Studies", type: "university", icon: Building2 },
  { name: "Adinath School", type: "school", icon: GraduationCap },
  { name: "National Institute Fire & Safety", type: "corporate", icon: Briefcase },
  { name: "Abhinav Sr. Sec. School", type: "school", icon: GraduationCap },
  { name: "Emmanuel Education Center", type: "school", icon: GraduationCap },
  { name: "eGov Infotech", type: "corporate", icon: Briefcase },
  { name: "Jawahar Navodaya Vidyalaya", type: "university", icon: Building2 },
];

const stats = [
  { icon: Building2, value: "500+", label: "Organizations Served", color: "text-blue-600 dark:text-blue-400" },
  { icon: Users2, value: "1M+", label: "Lives Transformed", color: "text-green-600 dark:text-green-400" },
  { icon: TrendingUp, value: "20+", label: "Years of Excellence", color: "text-purple-600 dark:text-purple-400" },
  { icon: Award, value: "98%", label: "Client Satisfaction", color: "text-amber-600 dark:text-amber-400" },
];

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [filter, setFilter] = useState<string>("all");

  const filteredClients = filter === "all" 
    ? allClients 
    : allClients.filter(client => client.type === filter);

  const duplicatedClients = [...filteredClients, ...filteredClients];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary">Trusted Nationwide</span>
          </motion.div>
          
          <h2 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl mb-4">
            <span className="block text-foreground">Empowering Excellence</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Across Leading Organizations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Fortune 500 companies to prestigious educational institutions, we've transformed thousands of lives
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover-elevate active-elevate-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-3`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "all", label: "All", icon: Star },
            { value: "school", label: "Schools", icon: GraduationCap },
            { value: "corporate", label: "Corporates", icon: Briefcase },
            { value: "university", label: "Universities", icon: Building2 },
          ].map((item) => (
            <motion.div
              key={item.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={filter === item.value ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all ${
                  filter === item.value 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                    : 'hover-elevate'
                }`}
                onClick={() => setFilter(item.value)}
                data-testid={`filter-${item.value}`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <motion.div 
          className="relative overflow-hidden py-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-4"
            animate={{
              x: [0, -1 * (filteredClients.length * 280)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: filteredClients.length * 3,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64"
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-card to-card/80 border-primary/10 hover-elevate transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                      <client.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {client.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 capitalize">
                        {client.type}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Active Partnerships</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Verified Results</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <span>Award-Winning Programs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
