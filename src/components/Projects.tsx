import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import movie from "@/assets/project-movie.jpg";
import ml from "@/assets/project-ml.jpg";
import aws from "@/assets/project-aws.jpg";

const projects = [
  {
    title: "Movie Review & Discovery Platform",
    desc: "Search any movie with dynamic API fetching, posters, ratings and reviews using the OMDb API. Deployed on GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript", "OMDb API"],
    image: movie,
    github: "https://github.com/vvspavankumar",
    demo: "https://github.com/vvspavankumar",
  },
  {
    title: "Employee Salary Prediction with ML",
    desc: "End-to-end ML pipeline using Logistic Regression and Gradient Boosting. Data preprocessing, training and evaluation with Scikit-learn.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    image: ml,
    github: "https://github.com/vvspavankumar",
    demo: "https://github.com/vvspavankumar",
  },
  {
    title: "AWS Bastion Host Infrastructure",
    desc: "Designed a secure SSH access architecture using EC2, VPC, IAM and Security Groups — a hardened entry point into private subnets.",
    stack: ["AWS EC2", "VPC", "IAM", "Security Groups"],
    image: aws,
    github: "https://github.com/vvspavankumar",
    demo: "https://github.com/vvspavankumar",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      title={<>Selected <span className="gradient-text">work</span></>}
      subtitle="Real applications built across web, ML and cloud."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group glass-strong rounded-2xl overflow-hidden hover:-translate-y-2 transition-smooth"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:gradient-text transition-smooth">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-primary/15 text-primary font-mono border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 glass rounded-xl py-2 text-sm hover:bg-white/10 transition-smooth"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 gradient-bg text-primary-foreground rounded-xl py-2 text-sm font-medium hover:opacity-90 transition-smooth"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
