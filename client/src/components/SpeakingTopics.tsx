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
  return (
    <section id="topics" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Speaking Topics & Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformative programs designed to ignite potential and drive measurable results across organizations and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid={`topic-card-${index}`}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{topic.title}</h3>
              <p className="text-muted-foreground">{topic.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
