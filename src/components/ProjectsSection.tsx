import { motion } from "framer-motion";
import { Trophy, Cpu, BookOpen } from "lucide-react";

const projects = [
  {
    icon: Cpu,
    title: "Real-Time 3D Model Generation for XR",
    subtitle: "University Thesis · 2024–2025",
    description:
      "Generative AI pipeline transforming raw XR sensor data (RGB-D/IMU) into high-fidelity 3D assets via NeRF and photogrammetry. Built with PyTorch + CUDA, integrated pose estimation, denoising, and sparse-to-dense fusion.",
    tags: ["PyTorch", "CUDA", "NeRF", "Open3D", "gRPC", "Unity", "MRTK"],
    accent: "primary",
    badge: null,
  },
  {
    icon: Trophy,
    title: "AIoT for Swiftlet House Monitoring",
    subtitle: "Advantech AIoT InnoWorks 2021 · 3rd Prize",
    description:
      "AI-IoT monitoring system for Salangane bird nest farms. Combined environmental sensors + YOLOv8 computer vision to detect predators, monitor conditions, and estimate harvest windows. Deployed on AWS with owner dashboards.",
    tags: ["YOLOv8", "PyTorch", "ESP32", "Arduino", "AWS"],
    accent: "accent",
    badge: "🏆 3rd Prize",
  },
  {
    icon: Cpu,
    title: "AI-Driven DeFi Trading System",
    subtitle: "Personal · 2023–2024",
    description:
      "Algorithmic trading system for decentralized exchanges using ML models trained on historical blockchain data for real-time decision-making.",
    tags: ["Python", "ML", "Blockchain", "Quantitative Trading"],
    accent: "primary",
    badge: null,
  },
  {
    icon: BookOpen,
    title: "VR/XR Social Platform",
    subtitle: "Personal · 2023–2024",
    description:
      "Real-time social platform in Unity supporting immersive user interactions via WebRTC. Built alongside a web-based learning marketplace.",
    tags: ["Unity", "WebRTC", "Node.js", "React"],
    accent: "accent",
    badge: null,
  },
];

const accentStyles: Record<string, { border: string; icon: string; tag: string }> = {
  primary: {
    border: "border-primary/30 hover:border-primary/60 hover:shadow-[var(--shadow-neon)]",
    icon: "text-primary bg-primary/10",
    tag: "bg-primary/10 text-primary border-primary/20",
  },
  accent: {
    border: "border-accent/30 hover:border-accent/60 hover:shadow-[var(--shadow-purple)]",
    icon: "text-accent bg-accent/10",
    tag: "bg-accent/10 text-accent border-accent/20",
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">03. what I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const styles = accentStyles[project.accent];
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-card border ${styles.border} rounded-xl p-6 transition-all group`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`p-2.5 rounded-lg ${styles.icon}`}>
                    <Icon size={22} />
                  </div>
                  {project.badge && (
                    <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-foreground mb-1 leading-snug">{project.title}</h3>
                <p className="font-mono text-xs text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`font-mono text-xs px-2 py-1 rounded border ${styles.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
