import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder - user can replace with actual resume file
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient animate-glow">
                Shree Om
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Full-Stack Developer & Tech Enthusiast
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Crafting elegant solutions to complex problems. Passionate about building
              scalable applications and contributing to open-source projects.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
{/*               
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleDownloadResume}
                className="border-primary/50 hover:bg-primary/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button> */}
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="mailto:john@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};
