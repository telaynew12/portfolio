"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const navLinks = [
    { href: "/#about",      label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects",   label: "Projects" },
    { href: "/#tech-stack", label: "Stack" },
    { href: "/blog",        label: "Blog" },
    { href: "/contact",     label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg)]/85 backdrop-blur-2xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center
                         text-white text-sm font-black tracking-tight
                         transition-all duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
            >
              TA
            </div>
            <span
              className="font-bold text-lg tracking-tight hidden sm:block text-[var(--text-1)]"
            >
              {siteConfig.shortName}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium relative group transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[var(--text-1)]"
                    : "text-[var(--text-2)] hover:text-[var(--text-1)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300
                    ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`}
                  style={{ background: "var(--accent)" }}
                />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-[var(--text-2)] hover:text-[var(--text-1)]
                           hover:bg-[var(--surface)] transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-[var(--text-2)] hover:text-[var(--text-1)]
                           hover:bg-[var(--surface)] transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-[var(--text-2)]
                         hover:bg-[var(--surface)] transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-t border-[var(--border)] overflow-hidden bg-[var(--bg)]"
            >
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-medium py-3 px-4 rounded-xl transition-all ${
                        isActive(link.href)
                          ? "text-[var(--text-1)] bg-[var(--surface)]"
                          : "text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--surface)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex items-center gap-3 pt-4 px-4 border-t border-[var(--border)] mt-2">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-[var(--text-2)] hover:text-[var(--text-1)]
                               hover:bg-[var(--surface)] transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-[var(--text-2)] hover:text-[var(--text-1)]
                               hover:bg-[var(--surface)] transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
