import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Handshake, TrendingUp, Users } from "lucide-react";
import { CareersForm } from "./careers-form";

export const metadata = {
  title: "Careers | Jump International Business Brokers",
  description:
    "Explore business brokerage career opportunities with Jump International Business Brokers.",
};

export default function CareersPage() {
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
            "linear-gradient(135deg, rgba(6, 18, 13, 0.9), rgba(6, 18, 13, 0.5)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
            Careers
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Build a career in business brokerage
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Jump International is building a high quality and diverse team of business
            brokers to deliver superior services to the business community.
          </p>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">
              Culture
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Our culture is built upon integrity, collaboration, development and continuous improvement
            </h2>
            <p className="mt-5 max-w-5xl text-lg leading-8 text-neutral-600">
              There is no better time than the present to enter the exciting field of
              Business Brokerage. We are in one of the greatest periods of business
              transfers. As the Baby Boomers move on to next stage in their lives, there
              will be an unprecedented opportunity for growth in the Business Brokerage
              Industry.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-bold leading-tight text-emerald-700">
                We are working on building a high quality and diverse team of business
                brokers, that deliver superior services to the Business Community in our area.
              </h3>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                We&apos;re always looking to add members to our team of sales
                representatives and brokers. We provide our team members with excellent
                business brokerage training, and support them with subject matter
                technology, processes, administration, advertising and marketing.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  "Are you an entrepreneur at heart?",
                  "Do you enjoy working with people and thrive in a dynamic and exciting business environment?",
                  "Are you enthusiastic about supporting entrepreneurs within buying, selling, financing, franchises, or commercial properties?",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-neutral-950/5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="font-semibold leading-6 text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                If you answered yes to these questions, we can offer you an extraordinary
                career opportunity and enormous growth potential.
              </p>
            </div>

            <div
              className="min-h-[30rem] rounded-[2.5rem] bg-cover bg-center shadow-2xl shadow-neutral-950/12"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(6, 18, 13, 0.04), rgba(6, 18, 13, 0.28)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85')",
              }}
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Users, title: "People-first advisory work" },
              { icon: Handshake, title: "Support entrepreneurs through transactions" },
              { icon: TrendingUp, title: "Growth in a major business transfer era" },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-neutral-200 bg-white p-6">
                <item.icon className="h-8 w-8 text-emerald-600" />
                <p className="mt-5 text-lg font-bold text-neutral-950">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-semibold">
            Please fill up this form to apply
          </h2>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <CareersForm />
        </div>
      </section>
    </main>
  );
}
