import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in">
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Bachelor in Computer Applications
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Renaissance University, Indore
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2022 — Jun 2025</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Indore, Madhya Pradesh, India
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">
                BCA graduate driven by curiosity and a love for coding. Focused on building smart, 
                user-friendly digital solutions and growing with every project. Gained comprehensive 
                knowledge in computer applications, programming, and software development.
              </p>
            </CardContent>
          </Card>
           <Card className="shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Master in Computer Applications
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Lovely professional University Punjab
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2025 — Jun 2027</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                 Punjab, India
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">
                MCA graduate fueled by passion for technology and innovation. Skilled in developing intelligent, user-centric web and software solutions with a strong foundation in computer science, programming, and system design. Continuously learning and evolving through every project to create impactful digital experiences.

              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
