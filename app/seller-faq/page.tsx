import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, LockKeyhole, ShieldCheck } from "lucide-react";
import { SellerFaqAccordion } from "./seller-faq-accordion";

const sellerFaqItems = [
  {
    question: "Turn to the Professionals for Best Results",
    answer: [
      "There is a direct relationship between the asking price and the amount of cash on the table at the time of sale. Most businesses involve some level of seller financing, and both buyers and sellers usually have concerns about that structure.",
      "Working with business brokers and M&A advisors can streamline the process, screen out window shoppers, preserve confidentiality, and help match the right seller with the right buyer.",
    ],
    bullets: ["Screen unqualified buyers", "Protect seller time", "Maintain confidentiality", "Structure seller financing"],
  },
  {
    question: "The Main Street Lending Program",
    answer: [
      "The official Seller FAQ discusses lending options that became especially relevant during economic disruption. The Main Street Lending Program was designed for businesses that were financially sound before the pandemic.",
      "Programs like this can help businesses restructure debt, access working capital, and understand lender-driven financing options during changing markets.",
    ],
  },
  {
    question: "Why Does Your Business Need Google Reviews?",
    answer: [
      "Online reviews are a major credibility signal. The official content notes that buyers and customers increasingly research businesses on their own before deciding who to trust.",
      "Google reviews can strengthen reputation, improve visibility, create a customer feedback loop, and support conversion when prospective buyers or customers evaluate the company.",
    ],
    bullets: ["Credibility and trust", "Online reputation", "Customer feedback", "Higher conversion confidence"],
  },
  {
    question: "Seller Financing: It Makes Dollars and Sense",
    answer: [
      "Seller financing can increase the chances that a business will sell. Buyers may not have the capital or lender resources for an all-cash purchase, and many buyers interpret reasonable seller financing as confidence in the business.",
      "The official article explains that seller financing may help command a higher price, add interest income, improve tax outcomes, and support the success of both the sale and the buyer.",
    ],
  },
  {
    question: "Dealing with Economic Impact: Planning and Communication are Key",
    answer: [
      "Business owners are encouraged to be proactive during periods of disruption. Planning, cash-flow review, staff communication, vendor conversations, customer updates, and scenario planning all help preserve business value.",
      "Strong communication reduces uncertainty and helps teams, customers, suppliers, and management stay aligned when market conditions change.",
    ],
  },
  {
    question: "Improving Your Telework Habits",
    answer: [
      "The official FAQ content highlights communication, socialization, and flexibility as key parts of productive remote work. A balanced approach acknowledges challenges while keeping teams focused on business goals.",
      "For owners preparing a business for sale, operational continuity and team productivity can support buyer confidence.",
    ],
  },
  {
    question: "It's Time to Exit. Are you Ready?",
    answer: [
      "Exit readiness starts well before the eleventh hour. Owners should determine value, think honestly about whether they are emotionally and financially ready, and begin organizing the information serious buyers will request.",
      "Buyers commonly want three years of profit and loss statements, tax returns, lease documents, loan schedules, equipment lists, franchise agreements, inventory information, and advisor contacts.",
    ],
  },
  {
    question: "What You Need to Know About the Golden Age of Business Acquisitions",
    answer: [
      "The official content notes that acquisitions are active across businesses of many sizes, not only large companies. Small businesses often buy other small businesses to consolidate markets, expand services, or grow more strategically.",
      "Demographic shifts and retiring owners may create major acquisition opportunities over the coming years.",
    ],
  },
  {
    question: "Determining the Right Time to Sell",
    answer: [
      "The right time to sell can depend on growth, buyer demand, market conditions, comparable transactions, tax environment, interest rates, and broader economic strength.",
      "The official guidance recommends contacting a business broker before you think you might sell, because preparation takes time and the best window may appear unexpectedly.",
    ],
  },
  {
    question: "Selling Your Business, Taxes & Tax Structures",
    answer: [
      "Taxes can significantly affect the proceeds of a business sale. Owners should understand whether the sale is treated as ordinary income or capital gains, how entity structure affects taxes, and how assets are allocated.",
      "The official content encourages sellers to consult experts early, because deal structure, depreciation, installment sales, stock sales, asset sales, and entity choices can all matter.",
    ],
  },
  {
    question: "Understanding M&A Purchasing Agreements",
    answer: [
      "M&A purchase agreements include definitions, representations, warranties, schedules, indemnifications, covenants, closing conditions, and other deal-specific provisions.",
      "Sellers should keep the business performing while the transaction moves forward, prepare financial information early, and rely on trusted professionals who understand negotiation and deal structure.",
    ],
  },
  {
    question: "Effectively Utilizing Confidentiality Agreements",
    answer: [
      "Confidentiality agreements help prevent sensitive information from reaching employees, customers, vendors, or competitors before the proper time. A leak can damage value and create unnecessary disruption.",
      "A strong agreement defines what is confidential, how information is shared, what happens after a breach, how long terms remain enforceable, and whether buyers may contact or recruit key people.",
    ],
  },
];

export const metadata = {
  title: "Seller FAQ | Jump International Business Brokers",
  description:
    "Official seller FAQ guidance from Jump International Business Brokers covering timing, pricing, seller financing, confidentiality, exit readiness, taxes, and transaction preparation.",
};

export default function SellerFaqPage() {
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
            "linear-gradient(135deg, rgba(6, 18, 13, 0.92), rgba(6, 18, 13, 0.55)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
            Seller FAQ
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Answers for owners preparing to sell a business
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Pulled from Jump International&apos;s official Seller FAQ and presented in a
            clearer, premium format for owners researching timeline, pricing,
            confidentiality, financing, taxes, and exit readiness.
          </p>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Clock className="h-7 w-7" />
            </div>
            <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              How long does it take to sell my business?
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-600">
              <p>
                It generally takes, on average, between five to eight months to sell most
                businesses. Some businesses will take longer to sell, while others will sell
                in a shorter period of time.
              </p>
              <p>
                The sooner you have all the information needed to begin the marketing
                process, the shorter the time period should be. It is also important that
                the business be priced properly right from the start.
              </p>
              <p>
                A reasonable down payment can shorten the time to a successful sale and
                tells a potential buyer that the seller has confidence in the business&apos;s
                ability to make payments.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["5-8 month average", "Correct pricing matters", "Preparation shortens timeline"].map(
                (item) => (
                  <div key={item} className="rounded-3xl border border-neutral-200 bg-white p-5">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    <p className="mt-4 text-sm font-bold leading-6 text-neutral-800">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            className="min-h-[28rem] rounded-[2.5rem] bg-cover bg-center shadow-2xl shadow-neutral-950/12"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(6, 18, 13, 0.06), rgba(6, 18, 13, 0.38)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85')",
            }}
          />
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">
                More Seller Guidance
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Official seller FAQ topics
              </h2>
            </div>
            <Link
              href="/whitepaper"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Download Free Whitepaper <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <SellerFaqAccordion items={sellerFaqItems} />
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-neutral-950 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-center">
            <div>
              <ShieldCheck className="h-10 w-10 text-emerald-300" />
              <h2 className="font-display mt-5 text-4xl font-semibold">
                Selling questions are best answered confidentially.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/68">
                Jump International can help you evaluate pricing, readiness, buyer
                screening, confidentiality, financing structure, due diligence, and closing
                preparation.
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
