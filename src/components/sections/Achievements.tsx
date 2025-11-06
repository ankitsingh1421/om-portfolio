import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { achievements } from "@/data/portfolio-data";
import { Star } from "lucide-react";

export const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Other <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notable accomplishments and contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-6 rounded-xl hover-lift"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-accent/10 rounded-full mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {achievement.description}
                </p>
                {achievement.date && (
                  <span className="text-xs text-muted-foreground">
                    {achievement.date}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
