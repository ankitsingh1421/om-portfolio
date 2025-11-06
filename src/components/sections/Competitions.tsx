import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { competitions } from "@/data/portfolio-data";
import { Trophy } from "lucide-react";

export const Competitions = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="competitions" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Competitions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hackathons and programming contests
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((comp, index) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-6 rounded-xl hover-lift text-center"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{comp.name}</h3>
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-3">
                {comp.position}
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {comp.organizer}
              </p>
              <p className="text-xs text-muted-foreground mb-3">{comp.date}</p>
              {comp.description && (
                <p className="text-sm text-muted-foreground italic">
                  {comp.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
