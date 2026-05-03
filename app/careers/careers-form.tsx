"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2.5rem] border border-neutral-200 bg-white p-6 shadow-2xl shadow-neutral-950/8 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
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
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Email Address</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            placeholder="you@example.com"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Phone Number</span>
          <input
            required
            type="tel"
            name="phone"
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            placeholder="(555) 123-4567"
          />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-bold text-neutral-700">Subject</span>
          <input
            required
            name="subject"
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            placeholder="Career opportunity"
          />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-bold text-neutral-700">Message</span>
          <textarea
            required
            name="message"
            rows={6}
            className="w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            placeholder="Tell us about your background and interest in business brokerage."
          />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-bold text-neutral-700">Attach Your Resume</span>
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Upload className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-bold text-neutral-800">Upload PDF resume</p>
                  <p className="text-xs font-semibold text-neutral-500">
                    Accepted file type: PDF. Max file size: 10 MB.
                  </p>
                </div>
              </div>
              <input
                type="file"
                name="resume"
                accept="application/pdf"
                className="text-sm font-semibold text-neutral-700 file:mr-4 file:rounded-full file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white"
              />
            </div>
          </div>
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700"
      >
        Submit Application <ArrowRight className="h-4 w-4" />
      </button>

      {submitted && (
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          <CheckCircle2 className="h-5 w-5" />
          Thank you. Your career application has been received.
        </div>
      )}
    </form>
  );
}
