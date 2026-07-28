"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-1)]">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
              A curated selection of work that showcases my skills and passion
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ duration: 0.28 }}
                className="group relative overflow-hidden rounded-[var(--radius-card)]"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: (project as any).images ? '176px' : '240px' }}>
                  {(project as any).images ? (
                    <div className="grid grid-cols-2 h-full">
                      {(project as any).images.map((img: string, i: number) => (
                        <div key={i} className="relative h-full">
                          <Image
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 60%)" }}
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-semibold text-[var(--text-1)]"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold mb-2 text-[var(--text-1)] group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] mb-5 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-xs font-medium text-[var(--text-3)]"
                        style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                                 text-[var(--text-2)] hover:text-[var(--text-1)] transition-all duration-200"
                      style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                                 text-white hover:opacity-90 transition-all duration-200"
                      style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
                    >
                      Live Demo
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
