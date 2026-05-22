import { motion } from "framer-motion";
import { Code2, Brain, Users, Rocket } from "lucide-react";
import { Section } from "./Section";

const traits = [
  { icon: Code2, title: "Software Development", desc: "Building real-world applications with Java, Python and modern web." },
  { icon: Brain, title: "AI & Analytics", desc: "Exploring Machine Learning and Data Analytics to solve practical problems." },
  { icon: Rocket, title: "Cloud & Emerging Tech", desc: "Hands-on with AWS Cloud, always learning what's next." },
  { icon: Users, title: "Teamwork & Leadership", desc: "Collaborative mindset with strong problem-solving and leadership." },
];

export function About() {
  return (
   <Section
  id="about"
  title={<>A bit <span className="gradient-text">about me</span></>}
  subtitle="A Computer Science Engineering student driven by curiosity and a love for building."
>
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a Computer Science Engineering student with a strong interest in software
            development and analytics. I enjoy turning ideas into clean, working products and I'm
            constantly experimenting with new tools and frameworks.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My toolkit spans <span className="text-foreground font-medium">Java, Python, AWS Cloud,
            and Machine Learning</span>. I bring a problem-solving mindset, a passion for emerging
            technologies, and the soft skills to thrive in a team.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I believe great engineers blend technical depth with empathy — and I'm building both,
            one project at a time.
          </p>

          <div className="grid grid-cols-3 gap-3 mt-8">
            {[
              { k: "9.1", l: "CGPA" },
              { k: "4+", l: "Projects" },
              { k: "5+", l: "Certifications" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 hover:bg-white/10 transition-smooth group"
            >
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-3 group-hover:scale-110 transition-smooth">
                <t.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
