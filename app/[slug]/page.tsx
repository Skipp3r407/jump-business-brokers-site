import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getSitePage, sitePages } from "@/lib/site-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Jump International Business Brokers`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}

export default async function NavSectionPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8faf7] text-neutral-950">
      <section className="border-b border-neutral-200 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700 transition hover:text-emerald-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="/#booking"
            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      <section
        className="bg-cover bg-center px-4 py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(6, 18, 13, 0.92), rgba(6, 18, 13, 0.54)), url('${page.image}')`,
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
            {page.eyebrow}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">{page.description}</p>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-start">
          <article className="rounded-[2.5rem] border border-neutral-200 bg-white p-7 shadow-2xl shadow-neutral-950/6 md:p-10">
            <div className="space-y-12">
              {page.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-lg leading-8 text-neutral-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <div className="mt-7 grid gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                          <span className="text-sm font-semibold leading-6 text-neutral-800">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.links && (
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-4 text-sm font-bold leading-6 text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                        >
                          {link.label}
                          <ArrowRight className="h-4 w-4 shrink-0 text-emerald-600 transition group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-8">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Next Step
              </p>
              <p className="mt-3 text-lg font-bold leading-7 text-neutral-950">
                Ready to discuss your goals confidentially?
              </p>
              <Link
                href={page.cta?.href ?? "/#booking"}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                {page.cta?.label ?? "Schedule a Call"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                Contact
              </p>
              <a href="tel:18003141365" className="mt-4 block font-bold text-neutral-950 transition hover:text-emerald-700">
                1-800-314-1365
              </a>
              <a
                href="mailto:info@JumpInternationalBusinessBrokers.com"
                className="mt-3 block text-sm font-semibold leading-6 text-neutral-600 transition hover:text-emerald-700"
              >
                info@JumpInternationalBusinessBrokers.com
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
