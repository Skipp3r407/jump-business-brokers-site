import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhitepaperForm } from "./whitepaper-form";

export const metadata = {
  title:
    "Download Free Whitepaper | Selling a Main-Street Business | Jump International",
  description:
    "Download Jump International Business Brokers' free whitepaper, Selling a Main-Street Business, the Critical Factors.",
};

export default function WhitepaperPage() {
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
          backgroundImage:
            "linear-gradient(135deg, rgba(6, 18, 13, 0.92), rgba(6, 18, 13, 0.6)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
              Free Seller Whitepaper
            </p>
            <h1 className="font-display mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
              Selling a Main-Street Business, the Critical Factors
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
              Official Jump International guidance for owners preparing to evaluate,
              position, and eventually sell a main-street business with more confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-emerald-400"
              >
                Get the Whitepaper <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/#selling"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-neutral-950"
              >
                Seller Resources
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <Image
              src="/images/whitepaper-cover-transparent.png"
              alt="Selling a Main-Street Business, The Critical Factors whitepaper cover"
              width={625}
              height={723}
              className="h-auto w-full drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">
              Official Resource
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Selling a main-street business, the critical factors
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-neutral-600">
              <p>
                Selling a Main-Street Business, by Jump International&apos;s definition, is
                a company with less than $1,000,000 in annual owner benefit. It is one of
                the most misunderstood and poorly managed processes in small business
                today.
              </p>
              <p>
                This is unfortunate because many high-energy, risk-taking entrepreneurs
                have spent years bare-knuckle brawling with lenders, suppliers, employees,
                competitors, and governments to provide for families, create wealth, and
                serve their communities.
              </p>
              <p>
                To have the advantage, or at least an opportunity to get to the closing
                table, owners must see the business through the eyes of a buyer and
                lender, so they are prepared for the incoming fire that will inevitably
                come their way.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Buyer and lender perspective",
                "Main-street sale readiness",
                "Critical factors before market",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-neutral-200 bg-white p-5">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  <p className="mt-4 text-sm font-bold leading-6 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="download" className="scroll-mt-36">
            <WhitepaperForm />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-neutral-950 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-center">
            <div>
              <ShieldCheck className="h-10 w-10 text-emerald-300" />
              <h2 className="font-display mt-5 text-4xl font-semibold">
                Want a confidential review before you sell?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/68">
                Jump International can help owners understand valuation, preparation,
                confidentiality, buyer screening, financing questions, due diligence, and
                closing readiness.
              </p>
            </div>
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-500"
            >
              Schedule a Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
