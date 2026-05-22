import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/certifications", label: "Awards" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-smooth ${scrolled ? "glass-strong" : ""}`}>
          <Link to="/" className="font-display text-lg font-bold">
            <span className="gradient-text">VVSP</span>
            <span className="text-foreground">.dev</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-lg bg-white/10" }}
                inactiveProps={{ className: "px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLight((v) => !v)}
              className="p-2 rounded-lg glass hover:scale-110 transition-smooth"
              aria-label="Toggle theme"
            >
              {light ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              className="lg:hidden p-2 rounded-lg glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-lg bg-white/10" }}
                inactiveProps={{ className: "px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
