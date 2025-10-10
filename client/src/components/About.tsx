import profileImage from "@assets/profile_1760084378944.jpeg";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-testid="about-image">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={profileImage} 
                alt="Dr. Ashok Jetawat" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-lg p-4 shadow-xl">
              <div className="text-2xl font-heading font-bold">PhD, M.Tech, MBA</div>
              <div className="text-sm">Multiple Degrees</div>
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Meet Dr. Ashok Jetawat
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              After completing his graduation in engineering, Dr. Jetawat pursued M.Tech., MBA, and masters in three other disciplines. He earned his Doctorate from MLSU in e-Governance, establishing himself as a multifaceted expert in both technology and human development.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Dr. Jetawat is a Corporate Trainer with specialization in Team Building, Time Management, Productivity, Work Commitment, e-Commerce, e-Governance, Study Techniques, Mind Management, Stress Management, Concentration, Soft Skills, and Personality Development. Thousands of corporate professionals and students from various organizations have been transformed by his seminars.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3" data-testid="achievement-award">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Rashtriya Ratna Award</div>
                  <div className="text-sm text-muted-foreground">2002</div>
                </div>
              </div>
              <div className="flex items-start space-x-3" data-testid="achievement-fellowship">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">ISTD Fellowship</div>
                  <div className="text-sm text-muted-foreground">2019-20</div>
                </div>
              </div>
              <div className="flex items-start space-x-3" data-testid="achievement-publications">
                <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">40+ Publications</div>
                  <div className="text-sm text-muted-foreground">Research Papers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
