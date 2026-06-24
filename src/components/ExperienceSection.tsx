import { motion } from "framer-motion";

const experiences = [
  {
    role: "Startup Builder",
    company: "Avibi — AI Agents for Food Supply Chain",
    period: "12/2025 – Present",
    location: "Hà Nội",
    bullets: [
      "Developed AI agents converting unstructured customer orders from chat/sales channels into structured ERP-ready data.",
      "Led customer pilots with food distributors, improving extraction accuracy and workflow fit.",
      "Engineered data pipelines from processed orders into customer ERP systems.",
    ],
    tags: ["AI Agents", "NLP", "ERP", "Python"],
    accent: "primary",
  },
  {
    role: "Founder in Residence",
    company: "NextTech Group of Technopreneurs",
    period: "06/2025 – 10/2025",
    location: "Hà Nội",
    bullets: [
      "High-intensity startup accelerator — developed AI-agent concept for company-process automation.",
      "Learned customer discovery, product validation, and startup execution from corporate CEOs & CTOs.",
    ],
    tags: ["AI Agents", "Startup", "Product"],
    accent: "accent",
  },
  {
    role: "Independent Software Developer",
    company: "Personal Projects",
    period: "08/2023 – 11/2024",
    location: "Hồ Chí Minh",
    bullets: [
      "Built AI-driven trading system for DeFi using ML and real-time blockchain data.",
      "Created web-based learning marketplace + Discord bot for real-time user support.",
      "Built VR/XR social platform in Unity for real-time immersive interactions.",
    ],
    tags: ["Python", "ML", "React", "Node.js", "Unity", "WebRTC"],
    accent: "primary",
  },
  {
    role: "Software Engineer (Mavis Seed)",
    company: "Sky Mavis",
    period: "12/2022 – 07/2023",
    location: "Hồ Chí Minh",
    bullets: [
      "Backend services supporting 100,000+ daily active users and 1M+ total users.",
      "Engineered gameplay systems and mechanics using Unity (C#).",
      "Delivered features within cross-functional Agile teams.",
    ],
    tags: ["Unity", "C#", "Backend", "Agile"],
    accent: "accent",
  },
  {
    role: "Software Engineer",
    company: "Suga Group",
    period: "02/2022 – 11/2022",
    location: "Hồ Chí Minh",
    bullets: [
      "Engineered reusable Web3 integration library for 60+ internal developers.",
      "Aggregated multi-source crypto prices into a unified API.",
      "Architected NFT marketplace ↔ blockchain synchronization layers.",
    ],
    tags: ["Web3", "NestJS", "MongoDB", "JavaScript"],
    accent: "primary",
  },
];

const accentClass: Record<string, string> = {
  primary: "bg-primary",
  accent: "bg-accent",
};

const borderClass: Record<string, string> = {
  primary: "border-primary/30 hover:border-primary/60",
  accent: "border-accent/30 hover:border-accent/60",
};

const tagClass: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  accent: "bg-accent/10 text-accent border-accent/20",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">02. work history</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          <div className="space-y-12 pl-6 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className={`absolute -left-[1.85rem] md:-left-[3.85rem] top-2 w-3 h-3 rounded-full ${accentClass[exp.accent]} shadow-[0_0_10px_hsl(145_100%_50%/0.5)]`} />

                <div className={`bg-card border ${borderClass[exp.accent]} rounded-xl p-6 transition-all`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <p className="text-muted-foreground text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-xs text-primary">{exp.period}</p>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className={`font-mono text-xs px-2 py-1 rounded border ${tagClass[exp.accent]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
