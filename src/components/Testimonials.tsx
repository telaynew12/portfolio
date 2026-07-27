"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-1)]">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
              Feedback from colleagues and collaborators I have worked with
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -7, scale: 1.01 }}
                transition={{ duration: 0.28 }}
                className="relative p-7 rounded-[var(--radius-card)] flex flex-col h-full"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 opacity-15">
                  <Quote className="w-9 h-9" style={{ color: "var(--accent)" }} />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className="text-amber-400 text-base">★</span>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm text-[var(--text-2)] leading-relaxed mb-7 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-1)]">{t.name}</div>
                    <div className="text-xs text-[var(--text-3)]">
                      {t.role} @ {t.company}
                    </div>
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
