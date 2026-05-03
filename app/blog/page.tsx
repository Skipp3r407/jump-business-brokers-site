import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Business Brokerage Blog | Jump International Business Brokers",
  description:
    "Read official Jump International Business Brokers articles about selling a business, buying a business, valuation, confidentiality, negotiation, and exit planning.",
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7] text-neutral-950">
      <section className="border-b border-neutral-200 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Jump International
          </Link>
          <Link
            href="/#booking"
            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">
            From Our Blog
          </p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Official guidance for business buyers and sellers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            These pages pull from Jump International Business Brokers&apos; official article content
            and present it in a modern, easier-to-read format for owners, buyers, and investors.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-2xl shadow-neutral-950/5 transition hover:-translate-y-1 hover:shadow-emerald-950/10"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(6, 18, 13, 0.08), rgba(6, 18, 13, 0.56)), url('${post.image}')`,
                  }}
                />
                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    <CalendarDays className="h-4 w-4" />
                    {post.date}
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                    {post.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-neutral-950">
                    {post.title}
                  </h2>
                  <p className="mt-4 leading-7 text-neutral-600">{post.summary}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:text-emerald-900"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
