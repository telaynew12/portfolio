"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { githubSnapshot, siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ContributionChart } from "./ContributionChart";

export function GitHubStats() {
  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-1)]">
              GitHub <span className="gradient-text">Activity</span>
            </h2>
            <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
              An open source presence that reflects my engineering focus
            </p>
          </div>
        </Reveal>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {githubSnapshot.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 rounded-[var(--radius-card)] text-center"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="text-3xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-[var(--text-2)]">{stat.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contribution chart */}
          <Reveal>
            <div
              className="p-6 rounded-[var(--radius-card)]"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="p-2 rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(232,93,58,0.12), rgba(240,168,48,0.12))" }}
                >
                  <Github className="w-5 h-5" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-1)]">Contribution Graph</h3>
              </div>
              <div
                className="rounded-xl overflow-hidden p-5"
                style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
              >
                <ContributionChart />
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
                >
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {/* Languages */}
            <Reveal delay={0.1}>
              <div
                className="p-6 rounded-[var(--radius-card)]"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <h3 className="text-base font-bold mb-4 text-[var(--text-1)]">Primary Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {githubSnapshot.languages.map((lang, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium text-[var(--text-2)] cursor-default"
                      style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Pinned repos */}
            {githubSnapshot.pinned.map((repo, i) => (
              <Reveal key={repo.name} delay={0.15 + i * 0.1}>
                <motion.a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="block p-6 rounded-[var(--radius-card)] group transition-all duration-300"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="p-2 rounded-lg"
                        style={{ background: "linear-gradient(135deg, rgba(232,93,58,0.12), rgba(240,168,48,0.12))" }}
                      >
                        <Github className="w-4 h-4" style={{ color: "var(--accent)" }} />
                      </div>
                      <span className="font-bold text-sm text-[var(--text-1)] group-hover:gradient-text transition-all">
                        {repo.name}
                      </span>
                    </div>
                    <span className="flex items-center gap-2 text-xs text-[var(--text-3)]">
                      <Star className="w-3.5 h-3.5" />
                      <GitFork className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-2)] mb-4 leading-relaxed">{repo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {repo.stack.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-full text-xs font-medium text-[var(--text-3)]"
                        style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
