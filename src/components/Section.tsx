import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-4 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
       {eyebrow && (
  <div className="inline-block glass px-4 py-1 rounded-full text-xs text-primary font-mono mb-4">
    {eyebrow}
  </div>
)}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
