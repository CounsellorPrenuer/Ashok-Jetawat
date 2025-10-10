import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

// todo: remove mock functionality - replace with real blog posts
const blogPosts = [
  {
    title: "5 Strategies to Boost Team Productivity",
    excerpt: "Discover proven techniques to enhance workplace efficiency and drive organizational success through effective team management.",
    date: "March 15, 2024",
    category: "Leadership",
  },
  {
    title: "The Power of Mindfulness in Stress Management",
    excerpt: "Learn how mindfulness practices can transform your approach to workplace stress and improve overall well-being.",
    date: "March 10, 2024",
    category: "Wellness",
  },
  {
    title: "Effective Study Techniques for Academic Excellence",
    excerpt: "Evidence-based learning strategies that help students maximize retention and achieve outstanding academic results.",
    date: "March 5, 2024",
    category: "Education",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Insights & Articles
          </h2>
          <p className="text-xl text-muted-foreground">
            Expert perspectives on personal development, leadership, and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all"
              data-testid={`blog-post-${index}`}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-primary font-medium">{post.category}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="group" data-testid={`button-read-more-${index}`}>
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
