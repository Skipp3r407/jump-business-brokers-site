import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8faf7]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-2xl shadow-emerald-950/10 ring-1 ring-emerald-100">
          <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/10" />
          <Image
            src="/images/favlogo.png"
            alt="Jump International Business Brokers"
            width={150}
            height={150}
            className="relative h-[150px] w-[150px] object-contain"
            priority
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
          Loading
        </p>
      </div>
    </div>
  );
}
