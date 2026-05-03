"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LOADER_DURATION_MS = 3000;

export function SiteLoader({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), LOADER_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      {isVisible ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8faf7]">
          <div className="flex flex-col items-center gap-8">
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-white shadow-2xl shadow-emerald-950/10 ring-1 ring-emerald-100">
              <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/10" />
              <Image
                src="/images/favlogo.png"
                alt="Jump International Business Brokers"
                width={300}
                height={300}
                className="relative h-[300px] w-[300px] object-contain"
                priority
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Loading
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
