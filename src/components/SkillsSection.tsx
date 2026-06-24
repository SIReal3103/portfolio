import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "AI / ML",
    accent: "primary",
    skills: ["PyTorch", "CUDA", "Hugging Face", "NeRF", "AI Agents", "RAG", "Computer Vision", "YOLOv8", "NLP"],
  },
  {
    label: "Backend",
    accent: "accent",
    skills: ["Node.js", "NestJS", "Redis", "SQL", "MongoDB", "gRPC", "REST APIs"],
  },
  {
    label: "Web3 / Blockchain",
    accent: "primary",
    skills: ["Web3", "SubGraph", "NFT Marketplace", "DeFi", "Smart Contracts"],
  },
  {
    label: "Game / XR",
    accent: "accent",
    skills: ["Unity", "C#", "MRTK", "WebRTC", "XR", "VR"],
  },
  {
    label: "DevOps / Tools",
    accent: "primary",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Apache Spark", "Git", "Postman"],
  },
  {
    label: "Languages",
    accent: "accent",
    skills: ["Python", "JavaScript", "TypeScript", "C#", "SQL"],
  },
];

const tagStyles: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
  accent: "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20",
};

const labelStyles: Record<string, string> = {
  primary: "text-primary",
  accent: "text-accent",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">04. tech stack</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h3 className={`font-mono text-sm font-semibold mb-4 ${labelStyles[group.accent]}`}>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-xs px-2.5 py-1.5 rounded border transition-colors cursor-default ${tagStyles[group.accent]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Achievements */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/30 rounded-xl p-6"
          >
            <p className="font-mono text-primary text-xs mb-3">education</p>
            <h3 className="font-bold text-foreground mb-1">University of Science, VNU–HCM</h3>
            <p className="text-sm text-muted-foreground mb-2">B.Sc. Computer Science — Advanced Program</p>
            <p className="font-mono text-xs text-muted-foreground">Fall 2020 – Spring 2026</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-bold text-primary text-glow-neon">3.44</span>
              <span className="text-muted-foreground text-sm">/ 4.0 GPA</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Data Structures & Algorithms · AI · NLP · Database Systems · Software Engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-accent/30 rounded-xl p-6"
          >
            <p className="font-mono text-accent text-xs mb-3">achievements</p>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-accent text-lg">🥈</span>
                  <h3 className="font-bold text-foreground text-sm">2nd Prize — National Informatics</h3>
                </div>
                <p className="text-xs text-muted-foreground font-mono pl-7">Vietnam · 2019 · Top 0.1%</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary text-lg">🏆</span>
                  <h3 className="font-bold text-foreground text-sm">3rd Prize — Advantech AIoT InnoWorks</h3>
                </div>
                <p className="text-xs text-muted-foreground font-mono pl-7">2021 · AIoT project</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-accent text-lg">🎬</span>
                  <h3 className="font-bold text-foreground text-sm">8M+ YouTube Views</h3>
                </div>
                <p className="text-xs text-muted-foreground font-mono pl-7">30K subscribers · since 2019</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
