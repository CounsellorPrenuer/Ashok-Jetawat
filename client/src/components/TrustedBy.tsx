import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// todo: remove mock functionality - replace with real client logos
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
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-xl text-muted-foreground">
            Empowering excellence across schools, corporates, and universities
          </p>
        </div>

        <Tabs defaultValue="schools" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8" data-testid="client-tabs">
            <TabsTrigger value="schools" data-testid="tab-schools">Schools</TabsTrigger>
            <TabsTrigger value="corporates" data-testid="tab-corporates">Corporates</TabsTrigger>
            <TabsTrigger value="universities" data-testid="tab-universities">Universities</TabsTrigger>
          </TabsList>

          <TabsContent value="schools" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {schools.map((school, index) => (
                <div 
                  key={index}
                  className="bg-card border border-card-border rounded-lg p-4 flex items-center justify-center text-center hover-elevate transition-all min-h-24"
                  data-testid={`client-school-${index}`}
                >
                  <span className="text-sm font-medium text-card-foreground">{school}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="corporates" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {corporates.map((corporate, index) => (
                <div 
                  key={index}
                  className="bg-card border border-card-border rounded-lg p-4 flex items-center justify-center text-center hover-elevate transition-all min-h-24"
                  data-testid={`client-corporate-${index}`}
                >
                  <span className="text-sm font-medium text-card-foreground">{corporate}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="universities" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {universities.map((university, index) => (
                <div 
                  key={index}
                  className="bg-card border border-card-border rounded-lg p-4 flex items-center justify-center text-center hover-elevate transition-all min-h-24"
                  data-testid={`client-university-${index}`}
                >
                  <span className="text-sm font-medium text-card-foreground">{university}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
