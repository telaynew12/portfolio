"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

const inputClass = `
  w-full px-4 py-3 rounded-xl text-[var(--text-1)] text-sm
  bg-[var(--bg-subtle)] border border-[var(--border)]
  placeholder:text-[var(--text-3)]
  focus:outline-none focus:border-[var(--accent)] transition-colors
`;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[var(--bg)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-[var(--text-2)]">Available for new projects</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-[var(--text-1)]">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-[var(--text-2)] text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I would love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Contact info */}
            <div
              className="p-6 rounded-[var(--radius-card)]"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-lg font-bold mb-5 text-[var(--text-1)]">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-xl shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(232,93,58,0.12), rgba(240,168,48,0.12))" }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5 text-[var(--text-1)]">Email</h4>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-xl shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(240,168,48,0.12), rgba(232,93,58,0.12))" }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: "var(--accent-2)" }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5 text-[var(--text-1)]">Location</h4>
                    <p className="text-sm text-[var(--text-2)]">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div
              className="p-6 rounded-[var(--radius-card)]"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-base font-bold mb-4 text-[var(--text-1)]">Connect With Me</h3>
              <div className="flex gap-3">
                {[
                  { href: siteConfig.github,   icon: Github,   label: "GitHub" },
                  { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 p-4 rounded-xl text-[var(--text-2)]
                               hover:text-[var(--text-1)] group transition-all duration-200"
                    style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div
              className="p-6 rounded-[var(--radius-card)]"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-base font-bold mb-2 text-[var(--text-1)]">Response Time</h3>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">
                I typically respond within{" "}
                <span className="font-semibold text-[var(--text-1)]">24–48 hours</span>.
                For urgent matters, feel free to reach out directly via email.
              </p>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-[var(--radius-card)] flex flex-col items-center justify-center text-center gap-6 min-h-96"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
                >
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--text-1)]">Message Sent!</h3>
                  <p className="text-[var(--text-2)] text-sm">Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl text-sm font-medium text-[var(--text-1)] transition-all duration-200"
                  style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-[var(--radius-card)] space-y-5"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <h3 className="text-xl font-bold text-[var(--text-1)]">Send a Message</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-2 text-[var(--text-2)] uppercase tracking-wide">Name</label>
                    <input type="text" name="name" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 text-[var(--text-2)] uppercase tracking-wide">Email</label>
                    <input type="email" name="email" required className={inputClass} placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 text-[var(--text-2)] uppercase tracking-wide">Subject</label>
                  <input type="text" name="subject" required className={inputClass} placeholder="Project inquiry, collaboration..." />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 text-[var(--text-2)] uppercase tracking-wide">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    className={inputClass + " resize-none"}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                             font-semibold text-white hover:opacity-90 hover:scale-[1.02]
                             disabled:opacity-60 disabled:scale-100 transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
