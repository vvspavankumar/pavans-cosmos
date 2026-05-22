import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const titles = [
  "Aspiring Software Developer",
  "Java Developer",
  "Data Analytics Enthusiast",
  "AWS Cloud Learner",
];

function useTypewriter() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => (i + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return text;
}

export function Hero() {
  const typed = useTypewriter();

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 px-4">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5">
            Hi, I'm <span className="gradient-text animate-gradient">Vedasistla Venkata Sai Pavan Kumar</span>
          </h1>

          <div className="h-8 mb-6 text-lg sm:text-xl font-mono">
            <span className="text-accent">{">"}</span>{" "}
            <span className="text-foreground">{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse align-middle" />
          </div>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            Passionate Computer Science student building real-world applications and continuously
            learning modern technologies across Java, Cloud, and Machine Learning.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 gradient-bg text-primary-foreground font-medium px-6 py-3 rounded-xl glow hover:glow-lg transition-smooth hover:-translate-y-0.5"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-xl text-foreground hover:bg-white/10 transition-smooth hover:-translate-y-0.5"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-white/5 transition-smooth"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/vvspavankumar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 glass rounded-xl hover:scale-110 hover:text-primary transition-smooth"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/pavan-kumar-vedasistla-venkata-sai-a3590a2ba"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 glass rounded-xl hover:scale-110 hover:text-primary transition-smooth"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:pavanvedasistla@gmail.com"
              aria-label="Email"
              className="p-3 glass rounded-xl hover:scale-110 hover:text-primary transition-smooth"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-40 scale-90" />
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-full gradient-bg opacity-70 blur-md" />
            <div className="relative rounded-full p-[3px] gradient-bg">
              <img
                src={avatar}
                alt="Vedasistla Venkata Sai Pavan Kumar"
                width={320}
                height={320}
                className="rounded-full w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover bg-card"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
