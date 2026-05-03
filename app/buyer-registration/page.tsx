import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Search, ShieldCheck, Target } from "lucide-react";
import { BuyerRegistrationForm } from "./buyer-registration-form";

export const metadata = {
  title: "Buyer Registration | Jump International Business Brokers",
  description:
    "Register your acquisition criteria with Jump International Business Brokers to receive announcements of new business acquisition opportunities.",
};

export default function BuyerRegistrationPage() {
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
            "linear-gradient(135deg, rgba(6, 18, 13, 0.92), rgba(6, 18, 13, 0.52)), url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
            Buyer Registration
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Register your acquisition criteria
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            The decision to buy a business is serious. Jump International can help qualified
            buyers define criteria, review opportunities, and receive announcements of new
            acquisition opportunities.
          </p>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <div className="rounded-[2.5rem] border border-neutral-200 bg-white p-8 shadow-2xl shadow-neutral-950/6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight">
                Help us understand your ideal acquisition.
              </h2>
              <p className="mt-5 leading-7 text-neutral-600">
                To receive announcements of new acquisition opportunities, register your
                acquisition criteria and provide contact information so the team can match
                you with relevant business opportunities.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  ["Acquisition Criteria", "Industry, geography, target price, and income needs."],
                  ["Financial Readiness", "Available funds and sources of capital."],
                  ["Confidential Matching", "Criteria are used to route appropriate opportunities."],
                ].map(([title, description]) => (
                  <div key={title} className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <p className="font-bold text-neutral-950">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 min-h-64 rounded-[2rem] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(6, 18, 13, 0.06), rgba(6, 18, 13, 0.38)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85')",
                }}
              />
            </div>
          </aside>

          <div>
            <div className="mb-6 rounded-[2rem] bg-neutral-950 p-6 text-white">
              <div className="flex items-start gap-4">
                <Search className="mt-1 h-6 w-6 shrink-0 text-emerald-300" />
                <div>
                  <p className="font-bold">Official buyer registration intake</p>
                  <p className="mt-2 leading-7 text-white/68">
                    This page mirrors the official buyer registration questions and improves
                    the layout for a faster, cleaner user experience.
                  </p>
                </div>
              </div>
            </div>
            <BuyerRegistrationForm />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-neutral-950 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-center">
            <div>
              <ShieldCheck className="h-10 w-10 text-emerald-300" />
              <h2 className="font-display mt-5 text-4xl font-semibold">
                Want help evaluating a business opportunity?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/68">
                Schedule a confidential consultation to discuss financing readiness,
                search criteria, due diligence, listings, and acquisition strategy.
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
