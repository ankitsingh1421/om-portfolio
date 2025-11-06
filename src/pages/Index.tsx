import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Competitions } from "@/components/sections/Competitions";
import { Achievements } from "@/components/sections/Achievements";
import { Courses } from "@/components/sections/Courses";
import { Contact } from "@/components/sections/Contact";
import type { NavItem } from "@/types/portfolio";
import Education from "@/components/sections/Education";

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "competitions", label: "Competitions" },
  { id: "achievements", label: "Achievements" },
  { id: "courses", label: "Courses" },
  { id: "contact", label: "Contact" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar navItems={navItems} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education/>
        {/* <Projects /> */}
        {/* <Experience /> */}
        <Certifications />
        {/* <Competitions /> */}
        {/* <Achievements /> */}
        <Courses />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Om Developer. Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
