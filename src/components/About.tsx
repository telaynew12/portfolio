"use client";

import { motion } from "framer-motion";
import { proofPoints, aboutMetrics } from "@/lib/data";
import { Reveal } from "./Reveal";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-1)]">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[var(--text-2)] leading-relaxed">
                I&apos;m an experienced software engineer specializing in building enterprise-grade software solutions. My expertise spans across backend engineering, AI systems, and cloud architecture.
              </p>
              <p className="text-lg md:text-xl text-[var(--text-2)] leading-relaxed">
                I focus on solving complex business problems through scalable backend systems, intelligent AI applications, and robust system architecture. I have hands-on experience with cloud deployments, particularly on Azure, and building production-ready software that delivers real business impact.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {aboutMetrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-5 rounded-[var(--radius-card)]"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <h3 className="font-black text-2xl gradient-text mb-1">{metric.value}</h3>
                    <p className="text-sm text-[var(--text-2)]">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {proofPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="p-6 rounded-[var(--radius-card)]"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl shrink-0"
                      style={{ background: "linear-gradient(135deg, rgba(232,93,58,0.12), rgba(240,168,48,0.12))" }}
                    >
                      <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-[var(--text-1)]">{point.title}</h4>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed">{point.description}</p>
                    </div>
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
