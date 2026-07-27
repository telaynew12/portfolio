import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-3 gradient-text">{siteConfig.name}</h3>
            <p className="text-sm text-[var(--text-2)] mb-6 leading-relaxed">{siteConfig.description}</p>
            <div className="flex gap-3">
              {[
                { href: siteConfig.github, icon: Github },
                { href: siteConfig.linkedin, icon: Linkedin },
                { href: `mailto:${siteConfig.email}`, icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-[var(--text-2)] hover:text-[var(--text-1)]
                             hover:scale-110 transition-all duration-200"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-[var(--text-1)] uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/",          label: "Home" },
                { href: "/#about",    label: "About" },
                { href: "/#projects", label: "Projects" },
                { href: "/blog",      label: "Blog" },
                { href: "/contact",   label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-[var(--text-1)] uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--text-2)]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--accent)" }} />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--text-1)] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center shrink-0">📍</span>
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 text-center text-sm text-[var(--text-3)]"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
