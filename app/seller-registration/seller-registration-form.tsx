"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Illinois",
  "Indiana",
  "Michigan",
  "New York",
  "North Carolina",
  "Ohio",
  "Pennsylvania",
  "Tennessee",
  "Texas",
  "Virginia",
  "Washington",
];

export function SellerRegistrationForm() {
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
          <input required name="firstName" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="First name" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Last Name</span>
          <input required name="lastName" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="Last name" />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-bold text-neutral-700">Street Address</span>
          <input required name="street" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="Street address" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">City</span>
          <input required name="city" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="City" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">State</span>
          <select required name="state" defaultValue="" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100">
            <option value="" disabled>
              Select state
            </option>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">ZIP Code</span>
          <input required name="zip" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="ZIP code" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Email</span>
          <input required type="email" name="email" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="you@example.com" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Phone</span>
          <input required type="tel" name="phone" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="(555) 123-4567" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">General Business Location</span>
          <input required name="businessLocation" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="City, state, or region" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Business Name</span>
          <input required name="businessName" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="Business name" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Business Type</span>
          <input required name="businessType" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="Industry or business type" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-neutral-700">Selling Timeframe</span>
          <select required name="sellingTimeframe" defaultValue="" className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100">
            <option value="" disabled>
              Select timeframe
            </option>
            <option>Immediately</option>
            <option>3-6 months</option>
            <option>6-12 months</option>
            <option>1+ year</option>
            <option>Researching options</option>
          </select>
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-bold text-neutral-700">Tell your story</span>
          <textarea required name="story" rows={5} className="w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="Tell us about the business, your goals, and what you would like to understand before selling." />
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
        Seller information is handled confidentially before any buyer details are shared.
      </div>

      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700">
        Submit Seller Registration <ArrowRight className="h-4 w-4" />
      </button>

      {submitted && (
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          <CheckCircle2 className="h-5 w-5" />
          Thank you. Your seller registration has been received.
        </div>
      )}
    </form>
  );
}
