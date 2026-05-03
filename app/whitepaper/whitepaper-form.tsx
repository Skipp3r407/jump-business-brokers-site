"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, LockKeyhole } from "lucide-react";

export function WhitepaperForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-2xl shadow-neutral-950/8 md:p-8"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        <Download className="h-7 w-7" />
      </div>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-neutral-950">
        Download your PDF copy
      </h2>
      <p className="mt-3 leading-7 text-neutral-600">
        Fill out the information below and our team will prepare the whitepaper request for
        follow-up.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">First Name</span>
          <input
            required
            name="firstName"
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            placeholder="First name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Last Name</span>
          <input
            required
            name="lastName"
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            placeholder="Last name"
          />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-bold text-neutral-700">Email Address</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 rounded-2xl bg-neutral-50 p-4">
        <input required type="checkbox" className="mt-1 h-4 w-4 accent-emerald-600" />
        <span className="text-sm font-semibold leading-6 text-neutral-700">
          By checking this box you agree to our{" "}
          <Link href="/terms-and-conditions" className="text-emerald-700 underline-offset-4 hover:underline">
            Terms and Conditions
          </Link>
          .
        </span>
      </label>

      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
        <LockKeyhole className="h-5 w-5 shrink-0" />
        Your information is handled confidentially by Jump International Business Brokers.
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700"
      >
        Submit Whitepaper Request <ArrowRight className="h-4 w-4" />
      </button>

      {submitted && (
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          <CheckCircle2 className="h-5 w-5" />
          Thank you. Your whitepaper request has been received.
        </div>
      )}
    </form>
  );
}
