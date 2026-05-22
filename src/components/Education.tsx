import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    school: "Madanapalle Institute of Technology & Science",
    degree: "B.Tech, Computer Science Engineering",
    period: "2023 – Present",
    score: "CGPA: 9.1",
  },
  {
    school: "Sri Chaitanya Jr. College",
    degree: "Intermediate (MPC)",
    period: "2021 – 2023",
    score: "Percentage: 96.6%",
  },
  {
    school: "Sanghamitra High School",
    degree: "SSC",
    period: "2020 – 2021",
    score: "Percentage: 100%",
  },
];

export function Education() {
  return (
    <Section
      id="education"
    
      title={<>Academic <span className="gradient-text">journey</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px gradient-bg opacity-40 md:-translate-x-1/2" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full gradient-bg glow -translate-x-1/2 mt-6 md:-translate-y-0" />
              <div className="md:w-1/2 pl-12 md:pl-0">
                <div className="glass-strong rounded-2xl p-6 hover:bg-white/10 transition-smooth">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <GraduationCap size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-primary font-mono">{it.period}</div>
                      <h3 className="font-display font-semibold text-lg mt-0.5">{it.school}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-13 pl-0 md:pl-1">{it.degree}</p>
                  <div className="mt-3 inline-block px-3 py-1 rounded-full glass text-xs gradient-text font-semibold">
                    {it.score}
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
