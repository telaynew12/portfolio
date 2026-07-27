"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));
  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <div className="pt-32 pb-24 bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-[var(--text-1)]">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-[var(--text-2)] text-lg">
            Lessons from building enterprise software, AI systems, and backend architecture
          </p>
        </motion.div>

        {/* Tag Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          <button
            onClick={() => setActiveTag(null)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white"
            style={
              activeTag === null
                ? { background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }
                : { background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-2)" }
            }
          >
            All Posts
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={
                activeTag === tag
                  ? { background: "linear-gradient(135deg, var(--accent), var(--accent-2))", color: "#fff" }
                  : { background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-2)" }
              }
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Post count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[var(--text-3)] text-sm mb-8"
        >
          {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          {activeTag && ` tagged "${activeTag}"`}
        </motion.p>

        {/* Posts */}
        <div className="space-y-5">
          {filtered.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div
                  className="p-7 rounded-[var(--radius-card)] transition-all duration-300"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 text-[var(--text-3)] text-xs mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-[var(--text-1)] group-hover:gradient-text transition-all duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--text-2)] mb-5 leading-relaxed">{post.excerpt}</p>

                  {/* Tags + Read link */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-[var(--text-3)]"
                          style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                        >
                          <Tag size={9} /> {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                      style={{ color: "var(--accent)" }}
                    >
                      Read article <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
