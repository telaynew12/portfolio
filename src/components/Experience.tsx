"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-1)]">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--accent), var(--accent-2))" }}
          />

          {experiences.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ scale: 1.005 }}
                className={`relative mb-12 flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content card */}
                <div className="w-full md:w-1/2 px-0 md:px-12">
                  <div
                    className="p-6 rounded-[var(--radius-card)]"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-3 rounded-xl shrink-0"
                        style={{ background: "linear-gradient(135deg, rgba(232,93,58,0.12), rgba(240,168,48,0.12))" }}
                      >
                        <Briefcase className="w-5 h-5" style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-1)]">{exp.role}</h3>
                        <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-xs text-[var(--text-3)] mb-3 font-medium tracking-wide uppercase">{exp.period}</p>
                    <p className="text-[var(--text-2)] text-sm mb-4 leading-relaxed">{exp.summary}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium text-[var(--text-2)]"
                          style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: "var(--accent)" }}
                          />
                          <p className="text-xs text-[var(--text-2)] leading-relaxed">{resp}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full -translate-x-1/2 mt-8 z-10 hidden md:block"
                  style={{ background: "var(--bg)", border: "3px solid var(--accent)" }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
