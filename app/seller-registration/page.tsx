import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { SellerRegistrationForm } from "./seller-registration-form";

export const metadata = {
  title: "Seller Registration | Jump International Business Brokers",
  description:
    "Register seller information with Jump International Business Brokers to discuss market conditions, sale readiness, pricing, structure, and confidential buyer opportunities.",
};

export default function SellerRegistrationPage() {
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
        className="bg-cover bg-center px-4 py-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6, 18, 13, 0.92), rgba(6, 18, 13, 0.54)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
            Seller Registration
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
            Register your business for confidential sale guidance
          </h1>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 rounded-[2.5rem] border border-neutral-200 bg-white p-8 shadow-2xl shadow-neutral-950/6 md:p-10">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-700">
              The decision to sell your business is a serious one, and we can&apos;t make it on your behalf!
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-neutral-600">
              <p>
                To receive announcements of new buyer opportunities please register your
                acquisition criteria with us and provide us with your contact information.
              </p>
              <p>
                We can tell you about current market conditions, getting the business ready
                for sale, advice on pricing and structuring the business sale transaction,
                and answer any other questions you might have. We would love to hear from you!
              </p>
            </div>
          </div>

          <SellerRegistrationForm />
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-neutral-950 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-center">
            <div>
              <ShieldCheck className="h-10 w-10 text-emerald-300" />
              <h2 className="font-display mt-5 text-4xl font-semibold">
                Want to talk before completing the form?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/68">
                Schedule a confidential call to discuss whether now is the right time,
                what your business may be worth, and how the process works.
              </p>
            </div>
            <Link href="/#booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-500">
              Schedule a Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
