"use client";

import { motion } from "framer-motion";
import { techStack, engineeringHighlights } from "@/lib/data";
import { Reveal } from "./Reveal";

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-1)]">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Engineering highlights */}
          <Reveal>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--text-1)]">Core Engineering Highlights</h3>
              <div className="flex flex-wrap gap-3">
                {engineeringHighlights.map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-1)] cursor-default"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    {item.title}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Tech groups */}
          <div className="space-y-5">
            {techStack.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-[var(--radius-card)]"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <h4 className="text-base font-bold mb-1" style={{ color: "var(--accent)" }}>
                    {group.title}
                  </h4>
                  <p className="text-xs text-[var(--text-3)] mb-4">{group.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-full text-xs font-medium text-[var(--text-2)]"
                        style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
