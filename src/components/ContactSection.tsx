import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Youtube, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-primary text-sm mb-2">05. what's next</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get In <span className="gradient-neon-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Open to full-time roles, freelance projects, and collaborations in AI, backend, or XR engineering.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "hiep.cbla5@gmail.com",
                href: "mailto:hiep.cbla5@gmail.com",
                accent: "primary",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+84 36 908 8090",
                href: "tel:+84369088090",
                accent: "accent",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "hiep-hoang-0026b8208",
                href: "https://www.linkedin.com/in/hiep-hoang-0026b8208/",
                accent: "primary",
              },
              {
                icon: Youtube,
                label: "YouTube",
                value: "8M+ views · 30K subs",
                href: "#",
                accent: "accent",
              },
            ].map(({ icon: Icon, label, value, href, accent }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl bg-card border ${
                  accent === "primary"
                    ? "border-primary/30 hover:border-primary/60 hover:shadow-[var(--shadow-neon)]"
                    : "border-accent/30 hover:border-accent/60 hover:shadow-[var(--shadow-purple)]"
                } transition-all group text-left`}
              >
                <div className={`p-2.5 rounded-lg ${accent === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{label}</p>
                  <p className={`text-sm font-semibold ${accent === "primary" ? "text-primary" : "text-accent"} group-hover:underline`}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hiep.cbla5@gmail.com"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base hover:shadow-[var(--shadow-neon)] transition-all"
            >
              Send Email
            </a>
            <Link
              to="/baocao"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-neon-strong text-primary font-semibold text-base hover:bg-primary/10 transition-all"
            >
              <FileText size={16} />
              View Docs
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Built with React · Vite · Tailwind ·{" "}
            <span className="gradient-neon-text">Hiep Hoang</span>
            {" "}© 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
