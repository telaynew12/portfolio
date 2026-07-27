import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[var(--text-1)]">Post not found</h1>
          <Link href="/blog" className="hover:underline" style={{ color: "var(--accent)" }}>
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-[var(--bg)] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--text-2)] hover:text-[var(--text-1)] mb-8 transition-colors"
          >
            <ArrowLeft size={18} /> Back to blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-[var(--text-3)] text-sm mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 text-[var(--text-1)] tracking-tight">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-10">
             {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[var(--text-2)]"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <Tag size={12} /> {tag}
                </span>
              ))}
          </div>

          {/* Simple custom prose styling to match the theme without needing tailwind typography plugin (which isn't fully configured for the custom variables) */}
          <div className="space-y-6 text-[var(--text-2)] leading-relaxed text-lg">
            <p className="text-[var(--text-1)] font-medium text-xl leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <p>
              This is a placeholder for the blog post content. In a real application, this would be an MDX file
              with the full article content.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-[var(--text-1)]">Introduction</h2>
            <p>
              This article explores {post.title.toLowerCase()}. We&apos;ll dive deep into the concepts, implementation details,
              and best practices.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-[var(--text-1)]">Key Concepts</h2>
            <ul className="list-disc list-inside space-y-3 mb-6 ml-2">
              <li>Understanding the fundamentals</li>
              <li>Implementation strategies</li>
              <li>Best practices and patterns</li>
              <li>Performance optimization</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-[var(--text-1)]">Conclusion</h2>
            <p>
              Thank you for reading! Feel free to reach out if you have any questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
