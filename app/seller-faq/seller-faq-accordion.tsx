"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type SellerFaqItem = {
  question: string;
  answer: string[];
  bullets?: string[];
};

export function SellerFaqAccordion({ items }: { items: SellerFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-950/4"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-lg font-bold text-neutral-950">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-emerald-700 transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="border-t border-neutral-100 px-6 pb-6 pt-1">
                <div className="space-y-4 text-base leading-7 text-neutral-600">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {item.bullets && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-900"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
