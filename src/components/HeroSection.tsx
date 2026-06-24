import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Youtube } from "lucide-react";
import aiBg from "@/assets/ai-network-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={aiBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon bg-muted/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold leading-none mb-6 tracking-tight">
            <span className="gradient-neon-text text-glow-neon">Hiep</span>
            <br />
            <span className="text-foreground">Hoang</span>
          </h1>

          <div className="font-mono text-muted-foreground text-lg md:text-xl mb-4">
            <span className="text-primary">{"<"}</span>
            <span>Software Engineer</span>
            <span className="text-primary mx-2">·</span>
            <span>AI Builder</span>
            <span className="text-primary mx-2">·</span>
            <span>Founder</span>
            <span className="text-primary">{">"}</span>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            Building AI agents, XR systems, and scalable backends.
            From blockchain infrastructure at Sky Mavis to food-supply AI at Avibi.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {[
              { value: "8M+", label: "YouTube Views" },
              { value: "30K", label: "Subscribers" },
              { value: "Top 0.1%", label: "National Informatics" },
              { value: "100K+", label: "DAU at Sky Mavis" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary text-glow-neon">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base hover:shadow-[var(--shadow-neon)] transition-all"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-8 py-4 rounded-lg border border-neon-strong text-primary font-semibold text-base hover:bg-primary/10 transition-all"
            >
              View Work
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 mt-10">
            {[
              { icon: Mail, href: "mailto:hiep.cbla5@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/hiep-hoang-0026b8208/", label: "LinkedIn" },
              { icon: Youtube, href: "#", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-3 rounded-lg border border-border hover:border-neon text-muted-foreground hover:text-primary transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-primary/50" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
