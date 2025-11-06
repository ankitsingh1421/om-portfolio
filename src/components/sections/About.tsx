import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Rocket, Users, Award } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    { icon: Code2, label: "2 Years Experience", value: "Building web apps" },
    { icon: Rocket, label: "10+ Projects", value: "Completed successfully" },
    { icon: Users, label: "10+ Teams", value: "Collaborated with" },
    { icon: Award, label: "15+ Awards", value: "Recognition received" },
  ];

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="../../../public/om.jpg"
                alt="Profile"
                className="relative rounded-2xl w-full aspect-square object-cover border border-border/50"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
  <p className="text-muted-foreground leading-relaxed">
    I'm a passionate full-stack web developer eager to build innovative and efficient web applications. 
    As a fresher, I enjoy learning new technologies and applying them to create clean, user-friendly designs 
    and responsive interfaces.
  </p>
  <p className="text-muted-foreground leading-relaxed">
    I love exploring modern web tools, contributing to small projects, and continuously improving my 
    development skills. I believe in writing clean code, learning from real-world projects, and growing 
    through collaboration and creativity.
  </p>
</div>


            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="card-glass p-4 rounded-xl hover-lift"
                >
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
