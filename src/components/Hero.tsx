"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { siteConfig, heroStats, heroHighlights } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Ambient blobs — warm tones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(232,93,58,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(240,168,48,0.10) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Avatar with online dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <div
                className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg"
                style={{ border: "2px solid var(--border)" }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="Telaynew Ambachew"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Online dot */}
              <div
                className="absolute bottom-1 right-1 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: "#22c55e", border: "2.5px solid var(--bg)" }}
              >
                <div className="w-2 h-2 rounded-full bg-green-300 animate-ping absolute" />
              </div>
            </div>
          </motion.div>

          {/* Availability badge + Name stacked */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-[var(--text-2)]">Available for new projects</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight text-[var(--text-1)]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[var(--text-2)]"
          >
            {siteConfig.title}
            <span className="inline-block ml-3 text-sm font-normal text-[var(--text-3)]">
              — Addis Ababa
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl mb-8 text-[var(--text-2)] max-w-3xl mx-auto leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>



          {/* Highlight pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {heroHighlights.map((highlight, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: i === 0 ? "var(--accent)" : "var(--text-2)",
                }}
              >
                {highlight}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                         font-semibold text-white hover:scale-105 hover:shadow-glow transition-all duration-300"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                         font-semibold text-[var(--text-1)] hover:scale-105 transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              Download Resume
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                         font-semibold text-[var(--text-1)] hover:scale-105 transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              Get In Touch
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-4 mb-16"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-[var(--text-2)] hover:text-[var(--text-1)]
                         hover:scale-110 transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-[var(--text-2)] hover:text-[var(--text-1)]
                         hover:scale-110 transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-[var(--radius-card)] text-center"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[var(--text-2)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{ border: "2px solid var(--border)" }}
        >
          <div className="w-1.5 h-3 rounded-full" style={{ background: "var(--text-3)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
