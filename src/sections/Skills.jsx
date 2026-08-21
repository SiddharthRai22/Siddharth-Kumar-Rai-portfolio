import React from "react";
import { motion } from "motion/react";
import { skillCategories } from "../data/portfolio";
import { BorderGlow } from "@/components/ui/border-glow";

export default function Skills() {
  const categoryGlowConfig = [
    {
      colors: ["#f27d26", "#f472b6", "#fbbf24"],
      glowColor: "30 90 60",
    },
    {
      colors: ["#38bdf8", "#818cf8", "#c084fc"],
      glowColor: "210 90 60",
    },
    {
      colors: ["#ec4899", "#a855f7", "#38bdf8"],
      glowColor: "280 85 65",
    },
    {
      colors: ["#34d399", "#38bdf8", "#fbbf24"],
      glowColor: "160 80 60",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            My <span className="text-accent">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm md:text-base"
          >
            Technologies and tools I leverage to engineer scalable web architectures and autonomous AI pipelines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const config = categoryGlowConfig[index % categoryGlowConfig.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <BorderGlow
                  className="h-full p-6 transition-all duration-300"
                  backgroundColor="#0d0b12"
                  borderRadius={24}
                  edgeSensitivity={25}
                  glowRadius={35}
                  glowIntensity={0.9}
                  coneSpread={30}
                  colors={config.colors}
                  glowColor={config.glowColor}
                  fillOpacity={0.4}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 transition-transform group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/5 text-xs md:text-sm text-neutral-300 rounded-lg border border-white/10 hover:border-accent/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

