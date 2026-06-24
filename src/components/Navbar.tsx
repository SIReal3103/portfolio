import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-glass" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="font-display font-bold text-xl tracking-tight">
          <span className="gradient-neon-text">H</span>
          <span className="text-foreground">H</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/baocao"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neon text-primary font-semibold text-sm hover:bg-primary/10 transition-all"
          >
            <FileText size={14} />
            Docs
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-glass overflow-hidden"
          >
            <div className="flex flex-col gap-3 px-6 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 font-mono text-sm"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/baocao"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-neon text-primary font-semibold text-sm mt-2"
                onClick={() => setOpen(false)}
              >
                <FileText size={14} />
                Docs
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
