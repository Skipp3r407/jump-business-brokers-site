import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Add Opportunity | Jump International Business Brokers",
  description:
    "The Add Opportunity area from Jump International Business Brokers is a protected internal submission page.",
};

export default function AddOpportunityPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7] text-neutral-950">
      <section className="border-b border-neutral-200 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700 transition hover:text-emerald-900">
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
          <Link href="/#booking" className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700">
            Schedule a Call
          </Link>
        </div>
      </section>

      <section
        className="bg-cover bg-center px-4 py-28 text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6, 18, 13, 0.94), rgba(6, 18, 13, 0.58)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Home › Protected: Add Existing Opportunity
          </p>
          <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
            Protected: Add Existing Opportunity
          </h1>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg leading-8 text-neutral-700">
            This content is password-protected. To view it, please enter the password below.
          </p>
          <form className="mt-8 max-w-6xl">
            <label className="block">
              <span className="text-sm font-bold text-neutral-900">Password:</span>
              <div className="mt-3 grid gap-4 md:grid-cols-[1fr_14rem]">
                <input
                  type="password"
                  className="w-full border border-neutral-300 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  aria-label="Password"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Enter
                </button>
              </div>
            </label>
          </form>
          <div className="mt-10 rounded-3xl bg-emerald-50 p-6 text-sm font-semibold leading-7 text-emerald-900">
            Need access? Contact Jump International Business Brokers or schedule a call so
            the team can route you to the correct protected opportunity workflow.
          </div>
        </div>
      </section>
    </main>
  );
}
