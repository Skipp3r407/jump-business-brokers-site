import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, ExternalLink } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Jump International Business Brokers`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f8faf7] text-neutral-950">
      <section className="border-b border-neutral-200 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700 transition hover:text-emerald-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog
          </Link>
          <Link
            href="/#booking"
            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      <article>
        <section
          className="bg-cover bg-center px-4 py-28 text-white"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(6, 18, 13, 0.92), rgba(6, 18, 13, 0.58)), url('${post.image}')`,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur">
              <CalendarDays className="h-4 w-4 text-emerald-300" />
              {post.date}
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
              {post.category}
            </p>
            <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">{post.summary}</p>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
            <div className="rounded-[2.5rem] border border-neutral-200 bg-white p-7 shadow-2xl shadow-neutral-950/5 md:p-10">
              <div className="rounded-3xl bg-emerald-50 p-5 text-sm font-semibold leading-7 text-emerald-900">
                This page is based on official content from Jump International Business Brokers and
                enhanced with a modern article layout for readability and conversion.
              </div>

              <div className="mt-10 space-y-10">
                {post.sections.map((section, index) => (
                  <section key={`${post.slug}-${index}`}>
                    {section.heading && (
                      <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
                        {section.heading}
                      </h2>
                    )}
                    <div className={section.heading ? "mt-5 space-y-5" : "space-y-5"}>
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="text-lg leading-8 text-neutral-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <div className="mt-6 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                            <span className="font-semibold leading-6 text-neutral-800">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-12 flex flex-col gap-3 rounded-[2rem] bg-neutral-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                    Ready to talk?
                  </p>
                  <p className="mt-2 text-xl font-bold">Get confidential guidance before your next move.</p>
                </div>
                <Link
                  href="/#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
                >
                  Schedule a Call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="sticky top-8 space-y-6">
              <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Official Source
                </p>
                <p className="mt-3 text-lg font-bold text-neutral-950">{post.officialTitle}</p>
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:text-emerald-900"
                >
                  View Original <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                  More Articles
                </p>
                <div className="mt-5 space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="block rounded-2xl bg-neutral-50 p-4 transition hover:bg-emerald-50"
                    >
                      <span className="block text-sm font-bold leading-6 text-neutral-950">
                        {related.title}
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-emerald-700">
                        {related.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
