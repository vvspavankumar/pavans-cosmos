import { motion } from "framer-motion";
import { Code2, Layout, Database, Brain } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java (OOP, DSA)", "Python", "C"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["MySQL", "AWS Cloud"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["Machine Learning Basics", "Artificial Intelligence Basics"],
  },
];

const soft = ["Communication", "Leadership", "Teamwork", "Time Management"];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// skills"
      title={<>Tech <span className="gradient-text">stack</span> & strengths</>}
      subtitle="A curated set of tools I use to build, analyze, and ship."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-strong rounded-2xl p-6"
          >
            <h3 className="font-display text-lg mb-5 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <g.icon size={18} className="text-primary-foreground" />
              </span>
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg glass text-sm text-foreground hover:bg-white/10 hover:scale-105 transition-smooth cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-strong rounded-2xl p-6 mt-6"
      >
        <h3 className="font-display text-lg mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 rounded-full gradient-bg" />
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {soft.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full glass text-sm text-foreground hover:bg-white/10 hover:scale-105 transition-smooth cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
