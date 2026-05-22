import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      
      title={<>Let's <span className="gradient-text">connect</span></>}
      subtitle="Open to internships, collaborations and interesting conversations."
    >
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-6 flex flex-col gap-4"
        >
          <a
            href="mailto:pavanvedasistla@gmail.com"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-smooth group"
          >
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
              <Mail size={16} className="text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm truncate group-hover:gradient-text">pavanvedasistla@gmail.com</div>
            </div>
          </a>
          <div className="flex items-center gap-3 p-3 rounded-xl">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
              <Phone size={16} className="text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="text-sm">+91 · Available on request</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
              <MapPin size={16} className="text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Location</div>
              <div className="text-sm">Nellore, Andhra Pradesh</div>
            </div>
          </div>

          <div className="border-t border-border pt-4 mt-2 flex gap-2">
            <a
              href="https://github.com/vvspavankumar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex-1 inline-flex items-center justify-center gap-2 glass rounded-xl py-2.5 text-sm hover:bg-white/10 transition-smooth"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/pavan-kumar-vedasistla-venkata-sai-a3590a2ba"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex-1 inline-flex items-center justify-center gap-2 glass rounded-xl py-2.5 text-sm hover:bg-white/10 transition-smooth"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="glass-strong rounded-2xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground font-mono mb-1.5 block">NAME</label>
              <input
                required
                className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-mono mb-1.5 block">EMAIL</label>
              <input
                required
                type="email"
                className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-mono mb-1.5 block">SUBJECT</label>
            <input
              required
              className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-mono mb-1.5 block">MESSAGE</label>
            <textarea
              required
              rows={5}
              className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth resize-none"
              placeholder="Tell me about your project, idea or opportunity…"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 gradient-bg text-primary-foreground font-medium py-3 rounded-xl glow hover:glow-lg transition-smooth"
          >
            {sent ? "Message sent ✓" : (<><Send size={16} /> Send message</>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
