"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}>) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={alignment}
    >
      <span
        className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]"
        style={{
          color: "var(--accent)",
          background: "rgba(232,93,58,0.1)",
          border: "1px solid rgba(232,93,58,0.2)",
        }}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-[var(--text-1)]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--text-2)] sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
