import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Programming",
    skills: [
      { name: "Java (OOP, DSA)", level: 88 },
      { name: "Python", level: 82 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "AWS Cloud", level: 75 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning Basics", level: 72 },
      { name: "Artificial Intelligence Basics", level: 70 },
    ],
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
            <h3 className="font-display text-lg mb-5 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full gradient-bg" />
              {g.title}
            </h3>
            <div className="space-y-4">
              {g.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground">{s.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full skill-bar rounded-full"
                    />
                  </div>
                </div>
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
