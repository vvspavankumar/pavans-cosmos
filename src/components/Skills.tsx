import { motion } from "framer-motion";
import {
  SiC,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiJupyter,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Section } from "./Section";

type Chip = { name: string; icon: React.ReactNode; color: string };

const skills: Chip[] = [
  { name: "C", icon: <SiC />, color: "#A8B9CC" },
  { name: "Java", icon: <FaJava />, color: "#E76F00" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#8CC84B" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Machine Learning", icon: <SiScikitlearn />, color: "#F7931E" },
  { name: "Pandas", icon: <SiPandas />, color: "#150458" },
  { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
];

const tools: Chip[] = [
  { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Jupyter Notebook", icon: <SiJupyter />, color: "#F37626" },
  { name: "Google Chrome", icon: <SiGooglechrome />, color: "#4285F4" },
  { name: "AWS Console", icon: <SiAmazon />, color: "#FF9900" },
];

const soft = ["Communication", "Leadership", "Teamwork", "Time Management"];

function ChipGrid({ items }: { items: Chip[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {items.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          whileHover={{ y: -4, scale: 1.05 }}
          className="group relative flex items-center gap-2.5 px-4 md:px-5 py-2.5 rounded-full glass-strong font-mono text-sm md:text-base cursor-default transition-smooth"
          style={{
            boxShadow: `0 0 0 1px ${s.color}40, 0 8px 24px -12px ${s.color}66`,
          }}
        >
          <span
            className="text-xl md:text-2xl transition-transform group-hover:scale-110"
            style={{ color: s.color }}
            aria-hidden
          >
            {s.icon}
          </span>
          <span className="text-foreground">{s.name}</span>
          <span
            className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              boxShadow: `0 0 24px ${s.color}55, inset 0 0 16px ${s.color}22`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// skills"
      title={<>Professional <span className="gradient-text">Skillset</span></>}
      subtitle="Languages, frameworks, and platforms I work with across web, ML, and cloud."
    >
      <ChipGrid items={skills} />

      <div className="mt-20 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl mb-10"
        >
          Tools <span className="gradient-text">I use</span>
        </motion.h3>
        <ChipGrid items={tools} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-strong rounded-2xl p-6 mt-20 max-w-3xl mx-auto"
      >
        <h3 className="font-display text-lg mb-4 flex items-center justify-center gap-2">
          <span className="w-1.5 h-6 rounded-full gradient-bg" />
          Soft Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
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
