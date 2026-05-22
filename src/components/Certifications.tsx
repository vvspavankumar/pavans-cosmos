import { motion } from "framer-motion";
import { Award, Trophy, Cloud, Sparkles, Languages, Calculator } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Sparkles, title: "AI Fundamentals", issuer: "FutureSkills Prime" },
  { icon: Trophy, title: "NPTEL Intellectual Property", issuer: "Silver Medal · Top 5%" },
  { icon: Cloud, title: "OCI Generative AI", issuer: "Oracle" },
  { icon: Award, title: "SIH 2K24", issuer: "Smart India Hackathon — Participation" },
  { icon: Languages, title: "Hindi Language Certification", issuer: "Language Proficiency" },
  { icon: Calculator, title: "District Level Math Talent Test", issuer: "Mathematics Excellence" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
    
      title={<>Certifications & <span className="gradient-text">awards</span></>}
      subtitle="Recognitions and credentials I've earned along the way."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-strong rounded-2xl p-5 hover:-translate-y-1 hover:bg-white/10 transition-smooth group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl group-hover:bg-secondary/30 transition-smooth" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-3 group-hover:rotate-6 transition-smooth">
                <it.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
