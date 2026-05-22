import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-display text-lg font-bold">
            <span className="gradient-text">VVSP</span>
            <span className="text-foreground">.dev</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Vedasistla Venkata Sai Pavan Kumar. Crafted with care.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/vvspavankumar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 glass rounded-lg hover:scale-110 hover:text-primary transition-smooth"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/pavan-kumar-vedasistla-venkata-sai-a3590a2ba"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 glass rounded-lg hover:scale-110 hover:text-primary transition-smooth"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:pavanvedasistla@gmail.com"
            aria-label="Email"
            className="p-2 glass rounded-lg hover:scale-110 hover:text-primary transition-smooth"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
