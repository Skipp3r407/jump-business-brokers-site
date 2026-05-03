"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  Handshake,
  LineChart,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  ArrowUp,
  UserRound,
  Users,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Selling a Business",
    description:
      "Jump International Business Brokers is a full-service M&A advisory firm dedicated to providing business owners the guidance needed to confidentially sell their business.",
  },
  {
    icon: Handshake,
    title: "Buying a Business",
    description:
      "Jump International Business Brokers works with independent buyers and buyer mandate clients to make the business acquisition process smooth, strategic, and hassle-free.",
  },
  {
    icon: Building2,
    title: "Business Listings",
    description:
      "Jump International Business Brokers takes time up front with business owners to make sure listings are market ready before presenting them to qualified buyers.",
  },
];

const serviceTopics = [
  "Business valuation",
  "Buyer screening",
  "Financing guidance",
  "Due diligence support",
];

const serviceImages = [
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
];

const newsArticleImages = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85",
];

const transactionImages = [
  "https://images.unsplash.com/photo-1562408589-4b96d09ec657?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1757252872535-01668694fb44?auto=format&fit=crop&w=1200&q=85",
];

const detailSectionImages: Record<string, string> = {
  "about-us": "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85",
  affiliations: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
  careers: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85",
  "knowledge-center": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
  "selling-a-business": "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
  "selling-tutorial": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
  "seller-faq": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85",
  "seller-articles": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  "seller-registration": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85",
  "seller-whitepaper": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=85",
  "seller-terms": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85",
  "buying-a-business": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=85",
  "buying-tutorial": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
  "buyer-faq": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  "buyer-articles": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  "buyer-registration": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  "buyer-terms": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
};

const values = [
  {
    title: "Tenacity",
    description: "Jump International works hard and fast to accomplish the mission of selling a business or assisting in the purchase of one.",
  },
  {
    title: "Service",
    description: "The company supports owners, buyers, and investors with professional guidance through high-stakes transaction decisions.",
  },
  {
    title: "Integrity",
    description: "Honesty and integrity guide every deal, from confidential preparation through buyer selection and closing coordination.",
  },
];

const advantages = [
  {
    icon: Users,
    title: "Experienced Advisors",
    description: "Senior brokerage guidance across main street and lower-middle-market transactions.",
  },
  {
    icon: LockKeyhole,
    title: "Confidential Process",
    description: "Discreet outreach and careful information controls from first conversation to closing.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "A process built to create leverage, keep momentum, and bring serious parties to the table.",
  },
  {
    icon: Target,
    title: "Personalized Strategy",
    description: "Every engagement is shaped around your goals, timeline, risk profile, and market position.",
  },
];

const steps = [
  "Consultation",
  "Valuation",
  "Marketing / Search",
  "Negotiation",
  "Closing",
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "1-800", label: "Toll Free Access" },
  { value: "IBBA", label: "Professional Affiliation" },
];

const newsArticles = [
  {
    slug: "why-early-exit-planning-matters-for-business-owners",
    category: "Seller Articles",
    title: "Why Early Exit Planning Matters for Business Owners",
    date: "May 2, 2026",
    summary:
      "New business owners often are thinking about growth and working to increase revenue. While this is no doubt important, many people overlook a critical part of long-term success, and that is planning...",
  },
  {
    slug: "selling-to-global-buyers-a-modern-guide-for-business-owners",
    category: "Seller Articles",
    title: "Selling to Global Buyers: A Modern Guide for Business Owners",
    date: "April 25, 2026",
    summary:
      "In today’s interconnected economy, the pool of potential business buyers extends far beyond local or even national borders. International buyers were once considered a niche segment. But there is no...",
  },
  {
    slug: "how-to-achieve-better-negotiation-results",
    category: "Buyer Articles, Seller Articles",
    title: "How to Achieve Better Negotiation Results",
    date: "April 18, 2026",
    summary:
      "The term “negotiation” tends to stir mixed reactions. Some people enjoy the challenge, while others would rather avoid it altogether. No matter how you feel about the tactics you might use, the end goal...",
  },
  {
    slug: "high-buyer-success-rates",
    category: "Buyer Articles",
    title: "High Buyer Success Rates",
    date: "April 11, 2026",
    summary:
      "Buying a business can be emotional for buyers and sellers. Business brokers and M&A advisors help ease concerns, clarify steps, and keep momentum moving toward a successful closing.",
  },
  {
    slug: "a-practical-roadmap-for-first-time-business-buyers",
    category: "Buyer Articles",
    title: "A Practical Roadmap for First-Time Business Buyers",
    date: "March 29, 2026",
    summary:
      "An established business can provide customers, revenue, systems, and market presence, but first-time buyers still need careful planning, research, financing preparation, and professional guidance.",
  },
  {
    slug: "confidentiality-as-a-competitive-advantage",
    category: "Seller Articles",
    title: "Confidentiality as a Competitive Advantage",
    date: "March 15, 2026",
    summary:
      "A single forwarded email or casual conversation can disrupt a transaction. Confidentiality protects employees, customers, vendors, competitors, and deal value.",
  },
  {
    slug: "understanding-a-sellers-biggest-concerns",
    category: "Seller Articles",
    title: "Understanding a Seller’s Biggest Concerns",
    date: "February 22, 2026",
    summary:
      "Selling is often the largest financial transaction and emotional milestone in a business owner’s life, making preparation, communication, and trusted guidance essential.",
  },
];

const navMenus = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Affiliations", href: "/affiliations" },
      { label: "Careers", href: "/careers" },
      { label: "The Knowledge Center", href: "/knowledge-center" },
    ],
  },
  {
    label: "Selling",
    href: "/selling-a-business",
    items: [
      { label: "Selling a Business", href: "/selling-a-business" },
      { label: "Selling Tutorial", href: "/selling-tutorial" },
      { label: "Seller FAQ", href: "/seller-faq" },
      { label: "Seller Articles", href: "/seller-articles" },
      { label: "Seller Registration", href: "/seller-registration" },
      { label: "Download Free Whitepaper", href: "/whitepaper" },
      { label: "Brokerage Transaction Terms", href: "/business-brokerage-transaction-terms" },
    ],
  },
  {
    label: "Registration",
    href: "/seller-registration",
    items: [
      { label: "Add Opportunity", href: "/add-opportunity" },
      { label: "Seller Registration", href: "/seller-registration" },
      { label: "Buyer Registration", href: "/buyer-registration" },
    ],
  },
  {
    label: "Buying",
    href: "/buying-a-business",
    items: [
      { label: "Buying a Business", href: "/buying-a-business" },
      { label: "Buying Tutorial", href: "/buying-tutorial" },
      { label: "Buyer FAQ", href: "/buyer-faq" },
      { label: "Buyer Articles", href: "/buyer-articles" },
      { label: "Buyer Registration", href: "/buyer-registration" },
      { label: "Brokerage Transaction Terms", href: "/business-brokerage-transaction-terms" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Listings",
    href: "/businesses-for-sale",
    items: [
      { label: "Businesses for Sale", href: "/businesses-for-sale" },
      { label: "All business for Sale in Florida", href: "/florida-businesses" },
      { label: "Recent Transactions", href: "/recent-transactions" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const socialLinks = {
  facebook: "https://www.facebook.com/707039319152622/",
  linkedin: "https://www.linkedin.com/company/jump-international-business-brokers",
};

const consultationTypes = [
  "Buying",
  "Selling",
  "Valuation",
  "General",
];

const featuredListing = {
  title: "Ceiling Cleaning and Installation Business",
  status: "Under Contract",
  industry: "Other Service Businesses",
  location: "Central Indiana",
  listingId: "8012-00018",
  cashFlow: "$267,747",
  price: "$700,000",
  totalSales: "$921,848",
  ffe: "$80,000",
  inventory: "$15,000",
  broker: "Jeff Jump",
  brokerEmail: "jeff@jumpinternationalbusinessbrokers.com",
  summary:
    "A premium ceiling cleaning, dusting, restoration, repair, coating, and installation company serving commercial, industrial, and institutional buildings. The company is debt-free, has operated for 27 years, and has increased sales to more than 10x its first year sales.",
  detail:
    "All growth has been accomplished without ever taking on debt, and the company has provided profits in each of its 27 years in business. New owners have the option to expand into any chosen geographic market outside Indiana without restrictions. A barn can be leased for storage if interested; the office is run from the seller’s personal residence.",
};

const aboutDetailSections = [
  {
    id: "about-us",
    eyebrow: "About Us",
    title: "Intermediary services for the sale or purchase of a business",
    description:
      "Jump International performs business valuations, finds and pre-screens buyers, helps select the right buyer, assists with financing, manages due diligence, removes contingencies, and prepares the deal for a closing attorney.",
    points: [
      "Sellers can keep managing the business while the brokerage works in the background.",
      "The firm uses its own forms to help reduce unnecessary legal expense during the process.",
      "Consulting services can prepare a business before listing by reviewing operations and recommending profitability improvements.",
    ],
    cta: { label: "Open About Page", href: "/about" },
  },
  {
    id: "affiliations",
    eyebrow: "Affiliations",
    title: "Professional services backed by business brokerage credentials",
    description:
      "Jump International references more than 20 years of client management consulting assistance and a balance of premier consulting expertise with personal service.",
    points: [
      "The International Business Brokers Association is a global non-profit for business brokerage and mergers and acquisitions professionals.",
      "The IBBA provides education, conferences, professional designations, and networking opportunities.",
      "Jeff Jump is a Certified Business Intermediary with the International Business Brokers Association.",
    ],
    cta: { label: "Open Affiliations", href: "/affiliations" },
  },
  {
    id: "careers",
    eyebrow: "Careers",
    title: "A business brokerage career built on integrity and growth",
    description:
      "The company describes business brokerage as an exciting field during one of the greatest periods of business transfers, with Baby Boomers moving into the next stage of life.",
    points: [
      "Jump International is building a high quality and diverse team of business brokers.",
      "Team members receive business brokerage training, technology, processes, administration, advertising, and marketing support.",
      "The opportunity is built for entrepreneurial people who enjoy working with business owners, buyers, financing, franchises, and commercial properties.",
    ],
    cta: { label: "View Careers", href: "/careers" },
  },
  {
    id: "knowledge-center",
    eyebrow: "The Knowledge Center",
    title: "Education for owners, buyers, and transaction-minded investors",
    description:
      "The site’s Knowledge Center connects visitors with seller articles, buyer articles, tutorials, FAQs, and practical guidance on business transfers.",
    points: [
      "Recent seller content covers early exit planning and selling to global buyers.",
      "Buyer and seller articles explain negotiation, business ownership, and transaction readiness.",
      "Tutorial content helps visitors understand what to prepare before beginning a sale or acquisition process.",
    ],
    cta: { label: "Open Knowledge Center", href: "/knowledge-center" },
  },
];

const sellingDetailSections = [
  {
    id: "selling-a-business",
    eyebrow: "Selling a Business",
    title: "Selling your business is a major decision",
    description:
      "The current site reminds owners that they have devoted time, money, and energy into building, running, and operating their business. It may represent their life’s work.",
    points: [
      "Professional guidance can be the difference between simply getting rid of a business and selling it for the best price and terms.",
      "Owners should prepare for valuation, buyer screening, confidentiality, negotiation, due diligence, and closing coordination.",
      "Jump International encourages sellers to ask questions early, especially around pricing, valuation, exit strategy, and financing.",
    ],
    cta: { label: "Open Selling a Business", href: "/selling-a-business" },
  },
  {
    id: "selling-tutorial",
    eyebrow: "Selling Tutorial",
    title: "Prepare before going to market",
    description:
      "The selling tutorial focuses on readiness, reasonable expectations, market-driven valuation, financial preparation, buyer motivation, and eliminating surprises before the sale process begins.",
    points: [
      "Gather three years of profit and loss statements, tax returns, equipment lists, lease documents, loan schedules, equipment leases, franchise agreements, inventory estimates, and outside advisor names.",
      "Make financial statements current, accurate, and presentable because pricing is often based on cash flow.",
      "Improve appearances, repair equipment, maintain inventory, update signage, and create an operations manual to make the business more attractive.",
    ],
    cta: { label: "Open Selling Tutorial", href: "/selling-tutorial" },
  },
  {
    id: "seller-faq",
    eyebrow: "Seller FAQ",
    title: "Common seller questions answered before the first call",
    description:
      "The seller FAQ explains that most businesses take an average of five to eight months to sell, but timing depends on documentation, pricing, buyer quality, down payment structure, financing, and confidentiality.",
    points: [
      "Pricing correctly from the start matters because many buyers will refuse to look at an overpriced business.",
      "A lower, reasonable down payment can shorten the path to a successful sale and signals seller confidence in the business.",
      "Professional brokers protect seller time by screening out window shoppers and preserving confidentiality before sensitive information is released.",
      "Confidentiality protects employees, customers, vendors, competitors, and deal momentum.",
    ],
    cta: { label: "Open Seller FAQ", href: "/seller-faq" },
  },
  {
    id: "seller-articles",
    eyebrow: "Seller Articles",
    title: "Articles for owners planning a stronger exit",
    description:
      "The site’s latest seller articles include early exit planning, selling to global buyers, and improving negotiation results.",
    points: [
      "Early exit planning helps owners avoid waiting until pressure forces a rushed decision.",
      "Global buyer interest can expand the pool of qualified acquisition candidates.",
      "Negotiation planning helps owners stay focused on the best outcome, not only the headline price.",
    ],
    cta: { label: "Open Seller Articles", href: "/seller-articles" },
  },
  {
    id: "seller-registration",
    eyebrow: "Seller Registration",
    title: "Start with a confidential seller intake",
    description:
      "The seller registration page asks owners to share contact information and core business details so Jump International can discuss market conditions, sale readiness, pricing, structure, and next steps.",
    points: [
      "The official form asks for name, address, email, phone, general business location, business name, business type, selling timeframe, and the owner’s story.",
      "Seller registration supports confidential review before sensitive information is shared with any buyer.",
      "The page emphasizes that the decision to sell is serious, and the brokerage can advise on market conditions, preparing the business, pricing, and transaction structure.",
      "The form includes consent to Terms and Conditions and human verification.",
    ],
    cta: { label: "Open Seller Registration", href: "/seller-registration" },
  },
  {
    id: "seller-whitepaper",
    eyebrow: "Download Free Whitepaper",
    title: "Educational guidance before listing a business",
    description:
      "The whitepaper CTA supports owners who want to learn before making a commitment, especially around valuation, readiness, exit strategy, and market expectations.",
    points: [
      "Understand what buyers look for before a business is positioned publicly or confidentially.",
      "Review common documents needed before conversations with buyers begin.",
      "Use educational resources to decide whether now is the right time to sell.",
      "Download the free whitepaper for deeper guidance on selling a main-street business.",
    ],
    cta: { label: "Download the Whitepaper", href: "/whitepaper" },
  },
  {
    id: "seller-terms",
    eyebrow: "Brokerage Transaction Terms",
    title: "Clear expectations for representation and transaction process",
    description:
      "Transaction terms help sellers and buyers understand how brokerage engagement, confidentiality, buyer qualification, offer review, due diligence, and closing preparation fit together.",
    points: [
      "Clear terms reduce confusion before sensitive information is shared.",
      "Transaction structure should define expectations around confidentiality, screening, and advisor coordination.",
      "Legal, financing, and closing professionals remain important partners in the final transaction.",
    ],
    cta: { label: "Open Transaction Terms", href: "/business-brokerage-transaction-terms" },
  },
];

const buyingDetailSections = [
  {
    id: "buying-a-business",
    eyebrow: "Buying a Business",
    title: "Find a business that fits your needs, talents, skills, and lifestyle",
    description:
      "The buying page emphasizes that buying a business can be complicated, from finding the right opportunity to working through the details needed for a smooth transfer of ownership.",
    points: [
      "A business broker helps buyers understand opportunities, seller motivation, financial records, and transaction steps.",
      "Buyers should evaluate fit, cash needed, financing availability, location, operating demands, and lifestyle implications.",
      "Jump International works with independent buyers and buyer mandate clients seeking strategic acquisitions.",
    ],
    cta: { label: "Open Buying a Business", href: "/buying-a-business" },
  },
  {
    id: "buying-tutorial",
    eyebrow: "Buying Tutorial",
    title: "A practical path from search to ownership",
    description:
      "The buying tutorial explains that many buyers have never owned a business before and may ultimately buy a business different from what they first imagined.",
    points: [
      "Buyers commonly seek pride in product or service, flexibility, income, control, recognition, security, privacy, status, and customer or employee contact.",
      "The tutorial recommends getting basic facts, visiting the business, asking questions, making an offer, and then moving into due diligence.",
      "Buyers should be realistic about risk, family support, liquid assets, business fit, and the leap of faith required to own a company.",
    ],
    cta: { label: "Open Buying Tutorial", href: "/buying-tutorial" },
  },
  {
    id: "buyer-faq",
    eyebrow: "Buyer FAQ",
    title: "Questions every buyer should consider",
    description:
      "The buyer FAQ explains why buying an existing business can reduce startup risk: the business has a track record, financial records, demonstrated demand, and often a seller willing to train and help finance the sale.",
    points: [
      "Existing businesses provide history, systems, customer demand, and financial records that startups do not have.",
      "Many sellers will stay and train a new owner, and many small business transfers involve seller financing.",
      "Buyers should find the right business fit, not simply chase growth projections or headline price.",
      "Due diligence, realistic expectations, SBA or lender readiness, and advisor coordination are central to a sound acquisition.",
    ],
    cta: { label: "Open Buyer FAQ", href: "/buyer-faq" },
  },
  {
    id: "buyer-articles",
    eyebrow: "Buyer Articles",
    title: "Education for acquisition-minded buyers",
    description:
      "Buyer-focused content helps prospective owners think through opportunity fit, negotiation, financing, seller expectations, and ownership readiness.",
    points: [
      "Buyers should learn before narrowing their search too quickly.",
      "Open-minded buyers often discover better-fit businesses than the ones they originally imagined.",
      "A structured process helps reduce emotional decision-making during negotiation and diligence.",
    ],
    cta: { label: "Open Buyer Articles", href: "/buyer-articles" },
  },
  {
    id: "buyer-registration",
    eyebrow: "Buyer Registration",
    title: "Help the team understand your acquisition criteria",
    description:
      "The buyer registration page asks prospective buyers to register their acquisition criteria and contact information so they can receive acquisition opportunity announcements.",
    points: [
      "The official form asks for name, address, phone, email, business name, available funds, sources of funds, minimum income needs, target total price, and desired purchase geography.",
      "Qualified buyers can be matched more effectively with listings and confidential opportunities.",
      "Registration helps the brokerage understand financing readiness, seriousness, and acquisition criteria.",
      "The form includes consent to Terms and Conditions and human verification.",
    ],
    cta: { label: "Open Buyer Registration", href: "/buyer-registration" },
  },
  {
    id: "buyer-terms",
    eyebrow: "Brokerage Transaction Terms",
    title: "Know the process before reviewing confidential information",
    description:
      "Buyer-side transaction terms help define confidentiality expectations, information access, offer process, diligence responsibilities, financing steps, and closing coordination.",
    points: [
      "Qualified buyers may need to complete confidentiality steps before receiving sensitive business details.",
      "Offers are commonly subject to verification of financial and operational information.",
      "Buyer advisors, lenders, attorneys, and closing professionals help complete the transaction correctly.",
    ],
    cta: { label: "Open Transaction Terms", href: "/business-brokerage-transaction-terms" },
  },
];

const recentTransactions = [
  {
    title: "Auto Glass Repair & Installation with Real Estate",
    industry: "Auto Repair and Service Shops",
    location: "Pinellas County",
    cashFlow: "$1,671,462",
    summary:
      "A package sale including two businesses and commercial condominium real estate, with mobile auto glass repair, windshield camera services, 12 employees, seven service vehicles, strong systems, clean books, and lending pre-qualification for a qualified buyer.",
  },
  {
    title: "Roofing Business For Sale",
    industry: "Building and Construction",
    location: "Pinellas County, Florida",
    cashFlow: "$472,000",
    summary:
      "A 35-year roofing business with strong cash flow, staff, vehicles, trailers, a retiring seller, and an established reputation in the industry.",
  },
  {
    title: "Dry Cleaners with Multiple Locations",
    industry: "Dry Cleaners",
    location: "Manatee County",
    cashFlow: "$153,065",
    summary:
      "A nearly 50-year dry-cleaning operation with several Suncoast locations, vans, a main plant, and opportunities to expand routes, wash-and-fold, hotel, restaurant, hospitality, and uniform cleaning services.",
  },
];

const availableDates = [
  { day: "Mon", date: "May 4", value: "2026-05-04" },
  { day: "Tue", date: "May 5", value: "2026-05-05" },
  { day: "Wed", date: "May 6", value: "2026-05-06" },
  { day: "Thu", date: "May 7", value: "2026-05-07" },
  { day: "Fri", date: "May 8", value: "2026-05-08" },
  { day: "Mon", date: "May 11", value: "2026-05-11" },
];

const timeSlots = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

type BookingRequest = {
  consultationType: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
  cta?: {
    label: string;
    href: string;
  };
};

type LeadField = "name" | "email" | "phone" | "businessType" | "preferredContact";

type LeadCapture = Record<LeadField, string>;

const quickReplies = [
  "I want to sell a business",
  "I want to buy a business",
  "I need a valuation",
  "Schedule consultation",
  "View listings",
  "Tell me about Jeff Jump",
  "Contact info",
];

const leadFieldPrompts: Record<LeadField, string> = {
  name: "What is your name?",
  email: "What email address should our advisory team use?",
  phone: "What phone number is best for a confidential follow-up?",
  businessType: "What business type, industry, or acquisition interest should we know about?",
  preferredContact: "What is your preferred contact method: phone, email, or text?",
};

const leadFieldOrder: LeadField[] = [
  "name",
  "email",
  "phone",
  "businessType",
  "preferredContact",
];

const chatbotFaqs = [
  {
    keywords: ["sell", "selling", "seller", "owner"],
    answer:
      "Jump International supports owners with confidential preparation, valuation guidance, buyer qualification, negotiations, and closing coordination. The best next step is a private consultation so an advisor can understand your goals and timing.",
  },
  {
    keywords: ["buy", "buyer", "acquire", "acquisition"],
    answer:
      "For buyers, Jump International can help review opportunities, clarify target criteria, discuss financing readiness, and guide the acquisition process from search through closing.",
  },
  {
    keywords: ["valuation", "value", "worth", "pricing"],
    answer:
      "A business valuation typically considers earnings, market conditions, industry trends, assets, risk, growth profile, and buyer demand. A consultation can help determine what valuation approach fits your situation.",
  },
  {
    keywords: ["confidential", "confidentiality", "private", "discreet"],
    answer:
      "Confidentiality is central to the process. Information is shared carefully with qualified parties, usually after screening and appropriate confidentiality controls.",
  },
  {
    keywords: ["financing", "loan", "sba", "funding"],
    answer:
      "Business acquisitions may use SBA financing, seller financing, conventional lending, investor capital, or a mix of structures. Financing fit depends on the buyer, business cash flow, collateral, and deal terms.",
  },
  {
    keywords: ["listing", "listings", "businesses for sale"],
    answer:
      "The featured opportunity is a Ceiling Cleaning and Installation Business in Central Indiana, currently under contract, with $267,747 cash flow and a $700,000 price. Qualified buyers can request details or schedule a consultation.",
  },
  {
    keywords: ["jeff", "jump", "broker", "managing broker", "president"],
    answer:
      "Jeff Jump is President and Managing Broker. He has 30 years of business experience, previously owned two printing companies, has worked across manufacturing, pharmaceutical, distribution, and aviation industries, holds a Florida Real Estate Brokers License, is a Certified Business Intermediary with the IBBA, and is a U.S. military veteran.",
  },
  {
    keywords: ["contact", "phone", "email", "toll free"],
    answer:
      "You can contact Jump International toll free at 1-800-314-1365 or email info@JumpInternationalBusinessBrokers.com. You can also schedule a consultation directly on this page.",
  },
  {
    keywords: ["consultation", "appointment", "schedule", "book", "call"],
    answer:
      "You can schedule a free consultation using the booking section. It lets you choose a consultation type, preferred date, time, and contact details.",
  },
  {
    keywords: ["timeline", "how long", "time to sell"],
    answer:
      "Selling a business often takes several months, depending on preparation, valuation alignment, buyer demand, financing, due diligence, and deal complexity.",
  },
  {
    keywords: ["documents", "records", "financials"],
    answer:
      "Common documents include profit and loss statements, tax returns, balance sheets, lease details, employee information, customer/vendor summaries, equipment lists, and operational notes.",
  },
  {
    keywords: ["exit", "exit strategy", "planning"],
    answer:
      "Exit strategy planning helps owners improve readiness before going to market. It can include valuation planning, financial cleanup, leadership transition, buyer fit, and timing strategy.",
  },
  {
    keywords: ["fee", "commission", "cost"],
    answer:
      "Brokerage fees and engagement terms can vary by transaction type and scope. Jump International can review terms during a confidential consultation.",
  },
  {
    keywords: ["prepare", "preparation", "ready"],
    answer:
      "Preparation usually includes organizing financials, documenting operations, understanding valuation expectations, identifying risks, and building a confidential buyer strategy.",
  },
  {
    keywords: ["qualified buyer", "screen", "screening"],
    answer:
      "Buyer qualification often includes reviewing acquisition criteria, available capital, financing capability, experience, and seriousness before sensitive information is shared.",
  },
  {
    keywords: ["nda", "non disclosure"],
    answer:
      "A non-disclosure agreement is commonly used before sharing sensitive business details with prospective buyers.",
  },
  {
    keywords: ["asking price", "price"],
    answer:
      "An asking price should be grounded in valuation, market demand, financial performance, transferability, and deal structure. Overpricing can slow momentum.",
  },
  {
    keywords: ["marketing", "market"],
    answer:
      "Business marketing is handled carefully to protect confidentiality while positioning the opportunity for qualified strategic or financial buyers.",
  },
  {
    keywords: ["due diligence", "diligence"],
    answer:
      "Due diligence is the buyer review phase where financial, operational, legal, customer, employee, and asset information may be evaluated before closing.",
  },
  {
    keywords: ["closing", "close"],
    answer:
      "Closing typically involves final diligence, purchase documents, financing coordination, transition planning, and transfer of ownership.",
  },
  {
    keywords: ["transition", "training"],
    answer:
      "Many transactions include a transition period where the seller helps train the buyer and support continuity after closing.",
  },
  {
    keywords: ["seller financing"],
    answer:
      "Seller financing can help bridge valuation or financing gaps, but terms should be evaluated carefully with advisors and legal counsel.",
  },
  {
    keywords: ["cash flow", "ebitda", "sde"],
    answer:
      "Cash flow measures such as SDE or EBITDA are often central to valuation and buyer financing discussions, depending on business size and structure.",
  },
  {
    keywords: ["florida"],
    answer:
      "Jump International lists opportunities including Florida-focused businesses when available and market ready.",
  },
  {
    keywords: ["international", "global"],
    answer:
      "The firm's content highlights global buyer interest and the value of preparing businesses for a broader acquisition audience.",
  },
  {
    keywords: ["registration", "register"],
    answer:
      "Buyer and seller registration helps the team understand your goals, match opportunities, and route inquiries appropriately.",
  },
  {
    keywords: ["whitepaper", "guide"],
    answer:
      "Educational resources such as seller articles, buyer articles, tutorials, FAQs, and whitepapers can help you understand the transaction process.",
  },
  {
    keywords: ["affiliation", "ibba", "credential"],
    answer:
      "Jump International references professional affiliations and the International Business Brokers Association, a major organization for business brokerage and M&A professionals.",
  },
  {
    keywords: ["business type", "industry"],
    answer:
      "Business type and industry affect valuation, buyer pool, financing, confidentiality strategy, and likely transaction timeline.",
  },
  {
    keywords: ["tax", "legal", "attorney"],
    answer:
      "Tax and legal questions should be reviewed with qualified professionals. A broker can coordinate the process, but legal and tax advisors are important parts of a transaction team.",
  },
  {
    keywords: ["employees", "staff"],
    answer:
      "Employee information is usually handled carefully and confidentially. Timing of disclosure depends on the transaction stage and seller priorities.",
  },
  {
    keywords: ["real estate", "lease", "property"],
    answer:
      "Lease terms, real estate ownership, landlord consent, and facility needs can all influence business value and deal structure.",
  },
  {
    keywords: ["inventory", "equipment", "assets"],
    answer:
      "Inventory, equipment, and other assets are reviewed as part of valuation and deal terms. Treatment can vary by transaction structure.",
  },
  {
    keywords: ["revenue", "profit", "financial performance"],
    answer:
      "Revenue quality, profitability, trends, customer concentration, and documentation are important factors in buyer confidence and valuation.",
  },
  {
    keywords: ["hello", "hi", "hey"],
    answer:
      "Hello. I can help with buying, selling, valuation questions, current listings, or scheduling a consultation with Jump International.",
  },
];

function getFaqAnswer(message: string) {
  const normalizedMessage = message.toLowerCase();
  const matchedFaq = chatbotFaqs.find((faq) =>
    faq.keywords.some((keyword) => normalizedMessage.includes(keyword)),
  );

  return (
    matchedFaq?.answer ||
    "I can help with selling a business, buying a business, valuation, confidentiality, financing, listings, exit planning, and consultation scheduling. For specific advice, I recommend booking a confidential consultation."
  );
}

function ChatLogo({
  size = "large",
  className = "",
}: {
  size?: "small" | "large";
  className?: string;
}) {
  const [hasImageError, setHasImageError] = useState(false);
  const dimensions = size === "large" ? 52 : 84;
  const sizeClass =
    size === "large"
      ? "h-11 w-11 sm:h-[52px] sm:w-[52px]"
      : "h-16 w-16 sm:h-[84px] sm:w-[84px]";

  if (hasImageError) {
    return (
      <span
        className={`${sizeClass} flex items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white ${className}`}
        aria-label="Jump International Business Brokers"
      >
        JI
      </span>
    );
  }

  return (
    <Image
      src="/images/favlogo.png"
      alt="Jump International Business Brokers"
      width={dimensions}
      height={dimensions}
      onError={() => setHasImageError(true)}
      className={`${sizeClass} rounded-full bg-white object-contain p-1.5 ${className}`}
    />
  );
}

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadField | null>(null);
  const [leadCapture, setLeadCapture] = useState<LeadCapture>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    preferredContact: "",
  });
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi, I’m the Jump Assistant. I can help with buying, selling, valuation questions, or scheduling a consultation.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  function addAssistantMessage(content: string, cta?: ChatMessage["cta"]) {
    setIsTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now(),
          role: "assistant",
          content,
          cta,
        },
      ]);
      setIsTyping(false);
    }, 650);
  }

  function beginLeadCapture(topic: string) {
    setLeadCapture({
      name: "",
      email: "",
      phone: "",
      businessType: topic,
      preferredContact: "",
    });
    setLeadStep("name");
    addAssistantMessage(
      `I can help route your ${topic.toLowerCase()} inquiry to the right advisor. ${leadFieldPrompts.name}`,
    );
  }

  function handleLeadResponse(value: string) {
    if (!leadStep) {
      return;
    }

    const currentIndex = leadFieldOrder.indexOf(leadStep);
    const nextStep = leadFieldOrder[currentIndex + 1] ?? null;
    setLeadCapture((current) => ({ ...current, [leadStep]: value }));

    if (nextStep) {
      setLeadStep(nextStep);
      addAssistantMessage(leadFieldPrompts[nextStep]);
      return;
    }

    setLeadStep(null);
    addAssistantMessage(
      "Thank you. I have captured your basic information locally for this demo. Would you like to schedule a free consultation?",
      { label: "Schedule Free Consultation", href: "#booking" },
    );
  }

  function handleUserMessage(message: string) {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        content: trimmedMessage,
      },
    ]);
    setInput("");

    if (leadStep) {
      handleLeadResponse(trimmedMessage);
      return;
    }

    const normalizedMessage = trimmedMessage.toLowerCase();

    if (normalizedMessage.includes("schedule") || normalizedMessage.includes("consultation")) {
      addAssistantMessage(
        "Absolutely. Use the scheduling section to choose a consultation type, preferred date, time, and contact details.",
        { label: "Open Booking", href: "#booking" },
      );
      return;
    }

    if (normalizedMessage.includes("listing") || normalizedMessage.includes("view listings")) {
      addAssistantMessage(
        getFaqAnswer(trimmedMessage),
        { label: "View Listings", href: "#listings" },
      );
      return;
    }

    if (normalizedMessage.includes("sell")) {
      addAssistantMessage(getFaqAnswer(trimmedMessage));
      beginLeadCapture("Selling a Business");
      return;
    }

    if (normalizedMessage.includes("buy") || normalizedMessage.includes("acquire")) {
      addAssistantMessage(getFaqAnswer(trimmedMessage));
      beginLeadCapture("Buying a Business");
      return;
    }

    if (normalizedMessage.includes("valuation") || normalizedMessage.includes("value")) {
      addAssistantMessage(getFaqAnswer(trimmedMessage));
      beginLeadCapture("Business Valuation");
      return;
    }

    addAssistantMessage(getFaqAnswer(trimmedMessage));
  }

  function handleChatSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleUserMessage(input);
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setHasUnread(false);
        }}
        className="fixed bottom-24 right-4 z-50 flex h-18 w-18 items-center justify-center rounded-full bg-transparent text-white drop-shadow-2xl transition hover:-translate-y-1 sm:h-24 sm:w-24 md:bottom-6 md:right-6"
        aria-label="Open Jump Assistant chat"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        <ChatLogo size="small" />
        {hasUnread && (
          <span className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white ring-4 ring-white sm:right-1 sm:top-1 sm:h-7 sm:w-7">
            1
          </span>
        )}
      </motion.button>

      {isOpen && (
        <motion.aside
          role="dialog"
          aria-label="Jump Assistant chatbot"
          className="fixed inset-x-3 bottom-3 z-[60] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-neutral-950/25 ring-1 ring-neutral-200 sm:left-auto sm:right-6 sm:w-[26rem]"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
        >
          <div className="flex items-center justify-between bg-neutral-950 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <ChatLogo />
              <div>
                <p className="font-bold">Jump Assistant</p>
                <p className="text-xs text-white/60">Business brokerage guidance</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Close Jump Assistant chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[28rem] overflow-y-auto bg-neutral-50 px-4 py-5 sm:max-h-[32rem]">
            <div className="space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-emerald-600 text-white"
                        : "border border-neutral-200 bg-white text-neutral-700 shadow-sm"
                    }`}
                  >
                    <p>{message.content}</p>
                    {message.cta && (
                      <a
                        href={message.cta.href}
                        onClick={() => setIsOpen(false)}
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
                      >
                        {message.cta.label} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-3xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
                        style={{ animationDelay: `${dot * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </div>

          <div className="border-t border-neutral-200 bg-white p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleUserMessage(reply)}
                  className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-100"
                >
                  {reply}
                </button>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="min-w-0 flex-1 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                placeholder={leadStep ? leadFieldPrompts[leadStep] : "Ask about buying, selling, valuation..."}
                aria-label="Message Jump Assistant"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-center text-[0.7rem] leading-5 text-neutral-400">
              Guidance is informational. An advisor can confirm details during a consultation.
            </p>
          </div>
        </motion.aside>
      )}
    </>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-neutral-600">{description}</p>
    </motion.div>
  );
}

function DetailSectionGrid({
  id,
  eyebrow,
  title,
  description,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    cta?: {
      label: string;
      href: string;
    };
  }>;
}) {
  return (
    <section id={id} className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          {items.map((item) => {
            const detailImage = detailSectionImages[item.id];

            return (
              <motion.article
                id={item.id}
                key={item.id}
                variants={fadeUp}
                className={`premium-card scroll-mt-36 overflow-hidden rounded-[2rem] transition ${
                  item.cta ? "hover:-translate-y-1 hover:shadow-2xl" : ""
                }`}
              >
                {detailImage && (
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(6, 18, 13, 0.08), rgba(6, 18, 13, 0.58)), url('${detailImage}')`,
                    }}
                  />
                )}
                <div className="p-7 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-neutral-950 md:text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">{item.description}</p>
                  <div className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        <span className="text-sm font-semibold leading-6 text-neutral-800">{point}</span>
                      </div>
                    ))}
                  </div>
                  {item.cta && (
                    <a
                      href={item.cta.href}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                    >
                      {item.cta.label} <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRequest, setBookingRequest] = useState<BookingRequest>({
    consultationType: consultationTypes[0],
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const bookingProgress = [
    bookingRequest.consultationType,
    bookingRequest.date,
    bookingRequest.time,
    bookingRequest.name && bookingRequest.email && bookingRequest.phone,
  ].filter(Boolean).length;
  const isBookingReady =
    Boolean(bookingRequest.consultationType) &&
    Boolean(bookingRequest.date) &&
    Boolean(bookingRequest.time) &&
    Boolean(bookingRequest.name.trim()) &&
    Boolean(bookingRequest.email.trim()) &&
    Boolean(bookingRequest.phone.trim());

  function updateBookingRequest(field: keyof BookingRequest, value: string) {
    setBookingRequest((current) => ({ ...current, [field]: value }));
    setBookingConfirmed(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  function handleBookingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isBookingReady) {
      return;
    }

    // Keep the request in local component state for now; this is the future API/CRM handoff point.
    setBookingRequest((current) => ({ ...current }));
    setBookingConfirmed(true);
  }

  return (
    <main className="overflow-hidden">
      <a
        href="#booking"
        className="fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-2xl shadow-emerald-950/30 transition hover:bg-emerald-700 md:hidden"
      >
        <CalendarDays className="h-4 w-4" />
        Book Consultation
      </a>
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-[12.5rem] right-8 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow-2xl shadow-neutral-950/15 ring-1 ring-emerald-100 transition hover:-translate-y-1 hover:bg-emerald-600 hover:text-white md:flex"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
      <ChatbotWidget />

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="hidden w-full items-center justify-center gap-5 bg-neutral-950 px-8 py-2 text-xs font-semibold text-white/85 md:flex">
          <a href="tel:18003141365" className="flex items-center gap-2 transition hover:text-emerald-200">
            <Phone className="h-3.5 w-3.5" />
            Toll Free 1-800-314-1365
          </a>
          <a
            href="mailto:info@JumpInternationalBusinessBrokers.com"
            className="flex items-center gap-2 transition hover:text-emerald-200"
          >
            <Mail className="h-3.5 w-3.5" />
            info@JumpInternationalBusinessBrokers.com
          </a>
          <a href="#booking" className="flex items-center gap-2 transition hover:text-emerald-200">
            <CalendarDays className="h-3.5 w-3.5" />
            Schedule a Call
          </a>
          <div className="flex items-center gap-2 border-l border-white/15 pl-4">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jump International on Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[0.7rem] font-bold transition hover:bg-emerald-500"
            >
              f
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jump International on LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[0.7rem] font-bold transition hover:bg-emerald-500"
            >
              in
            </a>
          </div>
        </div>
        <nav className="glass-panel flex w-full items-center justify-center gap-8 rounded-none px-8 py-6">
          <a href="#top" className="flex items-center" aria-label="Jump International home">
            <Image
              src="/images/logo.png"
              alt="Jump International Business Brokers logo"
              width={640}
              height={196}
              className="h-[8.85rem] w-auto rounded-2xl bg-white object-contain p-2 md:h-[11.6rem]"
              priority
            />
          </a>

          <div className="hidden items-center justify-center gap-1 justify-self-center lg:flex">
            {navMenus.map((item) => (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-white hover:text-emerald-700"
                >
                  {item.label}
                  {item.items && <ChevronDown className="h-4 w-4" />}
                </a>
                {item.items && (
                  <div className="invisible absolute left-0 top-full z-[100] w-72 rounded-3xl border border-neutral-100 bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.items.map((link) => (
                      <a
                        key={link.label}
                        className="block rounded-2xl p-3 text-sm text-neutral-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <a
            href="#booking"
            className="hidden rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 lg:inline-flex"
          >
            Schedule a Call
          </a>

          <button
            className="ml-auto rounded-full bg-white p-2 text-neutral-950 shadow-sm lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <motion.div
            className="glass-panel mx-auto mt-3 max-h-[calc(100dvh-12rem)] max-w-7xl overflow-y-auto overscroll-contain rounded-3xl p-4 pb-24 [-webkit-overflow-scrolling:touch] lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              ...navMenus.flatMap((item) => [item, ...(item.items ?? [])]),
              { label: "Book Consultation", href: "#booking" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-neutral-800 hover:bg-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <section
        id="top"
        className="relative min-h-screen bg-cover bg-center px-4 pb-20 pt-64 text-white md:pt-72"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(6, 18, 13, 0.9), rgba(6, 18, 13, 0.62), rgba(6, 18, 13, 0.28)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=85')",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8faf7] to-transparent" />
        <motion.div
          className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              Welcome to Jump International Business Brokers
            </div>
            <h1 className="font-display max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
              Buy or Sell a Business with Confidence
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              Jump International Business Brokers helps business owners, buyers, and investors navigate business sales, acquisitions, valuations, financing questions, exit strategies, and confidential transactions with experienced professional guidance.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-emerald-950/30 transition hover:-translate-y-1 hover:bg-emerald-400"
              >
                Schedule Consultation <CalendarDays className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-neutral-950"
              >
                Request a Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#listings"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                Businesses for Sale
              </a>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-[2rem] p-6 text-neutral-950"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Deal Readiness
                </p>
                <p className="mt-2 text-2xl font-bold">Confidential Review</p>
              </div>
              <ShieldCheck className="h-10 w-10 text-emerald-600" />
            </div>
            <div className="grid gap-4 py-6">
              {["Valuation clarity", "Buyer qualification", "Negotiation strategy"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/70 p-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-neutral-950 p-5 text-white">
              <p className="text-sm text-white/60">Next available advisor call</p>
              <p className="mt-1 text-2xl font-semibold">This Week</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
              About
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              About Jump International Business Brokers
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Jump International Business Brokers offers intermediary services in the sale or purchase of a business. Services include business valuation, buyer screening, selecting the right buyer, helping buyers find financing, managing due diligence, removing contingencies, and preparing the deal for a closing attorney. This allows sellers to keep managing their business while the brokerage works in the background.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Before a business owner decides to sell, Jump International can help prepare the business to achieve the highest possible price by reviewing operations and recommending improvements that may increase profitability.
            </p>
            <a
              href="#booking"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Schedule a Call <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="premium-card col-span-full h-64 overflow-hidden rounded-[2rem] bg-cover bg-center sm:h-80"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(6, 18, 13, 0.18), rgba(6, 18, 13, 0.72)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85')",
              }}
            />
            {serviceTopics.map((topic, index) => {
              const icons = [BarChart3, LineChart, ShieldCheck, Handshake];
              const TopicIcon = icons[index];

              return (
                <motion.div key={topic} variants={fadeUp} className="premium-card rounded-3xl p-6">
                  <TopicIcon className="h-8 w-8 text-emerald-600" />
                  <p className="mt-5 text-lg font-bold text-neutral-950">{topic}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.article variants={fadeUp} className="premium-card rounded-[2rem] p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <Image
                src="https://jumpinternationalbusinessbrokers.com/wp-content/uploads/2021/12/img_7738-3454-min.jpg"
                alt="Jeff Jump, President and Managing Broker"
                width={180}
                height={260}
                className="h-56 w-40 shrink-0 rounded-3xl bg-white object-cover object-top shadow-2xl shadow-neutral-950/15"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                  President and Managing Broker
                </p>
                <h3 className="mt-2 text-3xl font-bold text-neutral-950">Jeff Jump</h3>
                <a
                  href="tel:18003141365"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:text-emerald-900"
                >
                  <Phone className="h-4 w-4" />
                  Toll Free: 1-800-314-1365
                </a>
                <p className="mt-5 leading-7 text-neutral-600">
                  A seasoned business owner and business consultant with 30 years of experience in the business world. Jeff is originally from Fort Wayne, Indiana. Jeff previously owned and operated two printing companies for over 15 years and has also worked in manufacturing, pharmaceutical, distribution, and aviation industries.
                </p>
                <p className="mt-4 leading-7 text-neutral-600">
                  Jeff has a Florida Real Estate Brokers License and is a Certified Business Intermediary with the International Business Brokers Association. He is professionally trained and certified to value, market, and sell businesses. Jeff also represents buyers in their search of an acquisition.
                </p>
                <p className="mt-4 leading-7 text-neutral-600">
                  Jeff served proudly in the U.S. Navy, Army National Guard, and Navy Reserves. He is a proud military veteran and loves opportunities to work with fellow veterans.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article variants={fadeUp} className="premium-card overflow-hidden rounded-[2rem]">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(6, 18, 13, 0.18), rgba(6, 18, 13, 0.72)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85')",
              }}
            />
            <div className="p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Are you interested in our Businesses for Sale?
              </p>
              <h3 className="mt-3 text-2xl font-bold text-neutral-950">
                Begin your search for the ideal business opportunity
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                View the latest listing or browse the complete collection. The featured opportunity is the Ceiling Cleaning and Installation Business, currently under contract in Central Indiana.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#businesses-for-sale"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  View Our Businesses for Sale <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-bold text-neutral-900 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50"
                >
                  More Info
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </section>

      <DetailSectionGrid
        id="about-sections"
        eyebrow="About Directory"
        title="Explore the official Jump International company sections"
        description="Each section below expands the current site’s About menu into detailed, conversion-focused content for visitors researching the firm, credentials, careers, and educational resources."
        items={aboutDetailSections}
      />

      <section className="px-4 py-20">
        <div
          className="mx-auto max-w-7xl rounded-[2.5rem] bg-cover bg-center px-6 py-16 text-white md:px-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(10, 10, 10, 0.94), rgba(10, 10, 10, 0.82)), url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=85')",
          }}
        >
          <motion.div
            className="mx-auto mb-12 max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Company Values
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Tenacity • Service • Integrity
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Tenacity, Service, and Integrity are core to the company. Jump International works hard and fast to accomplish the mission of selling a business or assisting in the purchase of one while maintaining honesty and integrity in every deal.
            </p>
          </motion.div>
          <motion.div
            className="grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7"
              >
                <ShieldCheck className="h-8 w-8 text-emerald-300" />
                <h3 className="mt-6 text-2xl font-semibold">{value.title}</h3>
                <p className="mt-3 leading-7 text-white/66">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Brokerage Services"
            title="Professional guidance for sellers, buyers, and qualified listings"
            description="Jump International combines M&A advisory, buyer support, valuation insight, and confidential transaction management for business owners, buyers, and investors."
          />
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="premium-card group overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/10"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(6, 18, 13, 0.06), rgba(6, 18, 13, 0.48)), url('${serviceImages[index]}')`,
                  }}
                />
                <div className="p-8">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950">{service.title}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">{service.description}</p>
                  <p className="mt-5 text-sm font-semibold leading-6 text-emerald-700">
                    Built from Jump International&apos;s official service focus and enhanced for a clearer visitor path.
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <DetailSectionGrid
        id="selling"
        eyebrow="Selling"
        title="Official seller resources and transaction guidance"
        description="Jump International’s seller content helps owners understand readiness, valuation, buyer expectations, documentation, confidentiality, and transaction terms before going to market."
        items={sellingDetailSections}
      />

      <DetailSectionGrid
        id="buying"
        eyebrow="Buying"
        title="Official buyer resources for acquisition searches"
        description="Buyer content from the current site explains what to look for, how the process works, how financing and seller expectations matter, and why fit is more important than chasing the perfect business."
        items={buyingDetailSections}
      />

      <section id="news" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Latest News and Updates"
            title="All the latest news on selling and buying business"
            description="Browse the complete collection of articles from Jump International’s Knowledge Center, including seller articles, buyer articles, and practical transaction guidance."
          />
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {newsArticles.map((article, index) => (
              <motion.article
                key={article.title}
                variants={fadeUp}
                className="premium-card flex flex-col overflow-hidden rounded-[2rem]"
              >
                <div
                  className="h-44 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(6, 18, 13, 0.08), rgba(6, 18, 13, 0.56)), url('${newsArticleImages[index]}')`,
                  }}
                />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-neutral-950">{article.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-neutral-600">{article.summary}</p>
                  <a
                    href={`/blog/${article.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:text-emerald-900"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div
          className="mx-auto max-w-7xl rounded-[2.5rem] bg-cover bg-center px-6 py-16 text-white md:px-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(10, 10, 10, 0.94), rgba(10, 10, 10, 0.8)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=85')",
          }}
        >
          <motion.div
            className="mx-auto mb-12 max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              High-trust execution for high-stakes decisions
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              We combine market discipline, confidentiality, and personal advisory attention so every move has a clear purpose.
            </p>
          </motion.div>
          <motion.div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {advantages.map((advantage) => (
              <motion.div
                key={advantage.title}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <advantage.icon className="h-8 w-8 text-emerald-300" />
                <h3 className="mt-6 text-xl font-semibold">{advantage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Our Process"
            title="A clear path from first conversation to closing"
            description="Every step is structured to reduce uncertainty, surface the right opportunities, and keep the transaction moving."
          />
          <motion.div
            className="mb-8 overflow-hidden rounded-[2.5rem] bg-cover bg-center p-8 text-white shadow-2xl shadow-neutral-950/10 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(6, 18, 13, 0.9), rgba(6, 18, 13, 0.52)), url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=85')",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="max-w-3xl text-lg font-semibold leading-8">
              From initial valuation and confidential marketing to buyer qualification, diligence,
              financing coordination, and closing preparation, the workflow keeps sensitive
              transaction details organized and moving.
            </p>
          </motion.div>
          <motion.div
            className="relative grid gap-5 lg:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block" />
            {steps.map((step, index) => (
              <motion.div
                key={step}
                variants={fadeUp}
                className="relative rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white shadow-lg shadow-emerald-800/20">
                  {index + 1}
                </span>
                <h3 className="mt-7 text-xl font-bold text-neutral-950">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {index === 0 && "Clarify goals, timeline, risk tolerance, and the right path forward."}
                  {index === 1 && "Build a market-informed view of value and transaction readiness."}
                  {index === 2 && "Position the opportunity or search the market with confidential discipline."}
                  {index === 3 && "Create leverage, evaluate terms, and protect your interests."}
                  {index === 4 && "Coordinate diligence, documentation, and a clean transition."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Broker Profile
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              Jeff Jump
            </h2>
            <p className="mt-3 text-xl font-semibold text-emerald-700">
              President and Managing Broker
            </p>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Jeff Jump is a seasoned business owner and business consultant with 30 years of experience in the business world. He previously owned and operated two printing companies for over 15 years and has worked in manufacturing, pharmaceutical, distribution, and aviation industries.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Jeff has a Florida Real Estate Brokers License and is a Certified Business Intermediary with the International Business Brokers Association. He is trained and certified to value, market, and sell businesses. Jeff also represents buyers in acquisition searches. He is a military veteran who served in the U.S. Navy, Army National Guard, and Navy Reserves.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="premium-card rounded-3xl p-6">
                  <p className="text-4xl font-bold text-emerald-700">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-neutral-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="premium-card rounded-[2.5rem] p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-5">
              <Image
                src="https://jumpinternationalbusinessbrokers.com/wp-content/uploads/2021/12/img_7738-3454-min.jpg"
                alt="Jeff Jump"
                width={120}
                height={160}
                className="h-28 w-24 rounded-3xl bg-white object-cover object-top shadow-2xl shadow-neutral-950/20"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Certified Business Intermediary
                </p>
                <h3 className="mt-2 text-3xl font-bold text-neutral-950">Jeff Jump</h3>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {[
                "30 years of business experience",
                "Former owner/operator of two printing companies",
                "Florida Real Estate Brokers License",
                "Certified Business Intermediary with the IBBA",
                "Represents sellers and buyers in acquisition searches",
                "U.S. Navy, Army National Guard, and Navy Reserves veteran",
              ].map((credential) => (
                <div key={credential} className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="font-semibold text-neutral-800">{credential}</span>
                </div>
              ))}
            </div>
            <a
              href="#booking"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Schedule a Call <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="listings" className="px-4 py-24">
        <div id="businesses-for-sale" className="mx-auto max-w-7xl scroll-mt-36">
          <SectionIntro
            eyebrow="Featured Listings"
            title={featuredListing.title}
            description={featuredListing.summary}
          />
          <motion.div
            className="premium-card mx-auto max-w-5xl overflow-hidden rounded-[2.5rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div
                className="bg-cover bg-center p-8 text-white md:p-10"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(6, 18, 13, 0.92), rgba(6, 18, 13, 0.74)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85')",
                }}
              >
                <span className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  {featuredListing.status}
                </span>
                <h3 className="mt-7 font-display text-4xl font-semibold">{featuredListing.title}</h3>
                <p className="mt-5 leading-7 text-white/65">{featuredListing.summary}</p>
                <p className="mt-4 leading-7 text-white/65">{featuredListing.detail}</p>
                <div className="mt-6 rounded-3xl bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm text-white/60">Listing Broker</p>
                  <p className="mt-1 text-xl font-bold">{featuredListing.broker}</p>
                  <p className="mt-1 text-sm text-white/70">{featuredListing.brokerEmail}</p>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Industry", featuredListing.industry],
                    ["Location", featuredListing.location],
                    ["Listing ID", featuredListing.listingId],
                    ["Total Sales", featuredListing.totalSales],
                    ["Cash Flow", featuredListing.cashFlow],
                    ["FFE", featuredListing.ffe],
                    ["Inventory", featuredListing.inventory],
                    ["Price", featuredListing.price],
                    ["Status", featuredListing.status],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-3xl border border-neutral-200 bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">{label}</p>
                      <p className="mt-2 text-xl font-bold text-neutral-950">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#listings"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    View Businesses for Sale <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50"
                  >
                    Request Listing Details
                  </a>
                </div>
                <div className="mt-6 rounded-3xl bg-emerald-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                    NDA Required
                  </p>
                  <p className="mt-3 leading-7 text-neutral-600">
                    The official listing asks interested buyers to complete a Non-Disclosure Agreement before receiving more information. Contact details requested include name, phone, email, organization, and message.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="florida-businesses" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="All Business for Sale in Florida"
            title="Search support for Florida and regional acquisition opportunities"
            description="The official Listings menu includes a Florida-focused search path. The live business search exposes filters for industry, location, price, cash flow, featured status, year established, type of location, listing ID, agents, and sorting controls."
          />
          <motion.div
            className="mb-8 grid overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-neutral-950/10 ring-1 ring-neutral-200 lg:grid-cols-[0.9fr_1.1fr]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              className="min-h-72 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(6, 18, 13, 0.08), rgba(6, 18, 13, 0.48)), url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85')",
              }}
            />
            <div className="p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Buyer Search Readiness
              </p>
              <h3 className="mt-3 text-3xl font-bold text-neutral-950">
                Qualified buyers need clean criteria before they review confidential listings.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                This section pulls the official listings structure higher into the page so visitors
                can understand how opportunities are filtered, reviewed, and matched before they
                complete a buyer registration or request listing details.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {[
              ["Search Filters", "Industry, location, price, cash flow, featured status, year established, listing ID, agent, and sorting controls."],
              ["Available Categories", "Current visible categories include Other Service Businesses, Auto Repair and Service Shops, Building and Construction, Dry Cleaners, Retail, and Service Businesses."],
              ["Buyer Matching", "Qualified buyers can register criteria so Jump International can route appropriate opportunities and updates."],
            ].map(([title, description]) => (
              <motion.article key={title} variants={fadeUp} className="premium-card rounded-[2rem] p-7">
                <LineChart className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-5 text-2xl font-bold text-neutral-950">{title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="recent-transactions" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Recent Transactions"
            title="Sold businesses that show real transaction experience"
            description="The current site highlights completed sales across auto repair, construction, dry cleaning, pool service, and retail. These examples show the range of businesses represented by Jump International."
          />
          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {recentTransactions.map((transaction, index) => (
              <motion.article
                key={transaction.title}
                variants={fadeUp}
                className="premium-card overflow-hidden rounded-[2rem]"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(6, 18, 13, 0.08), rgba(6, 18, 13, 0.58)), url('${transactionImages[index]}')`,
                  }}
                />
                <div className="p-7">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    Sold
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-neutral-950">{transaction.title}</h3>
                  <div className="mt-5 grid gap-3 text-sm font-semibold text-neutral-600">
                    <p>Industry: {transaction.industry}</p>
                    <p>Location: {transaction.location}</p>
                    <p>Cash Flow: {transaction.cashFlow}</p>
                  </div>
                  <p className="mt-5 leading-7 text-neutral-600">{transaction.summary}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20">
        <motion.div
          className="mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] bg-cover bg-center px-6 py-16 text-center text-white shadow-2xl shadow-emerald-950/20 md:px-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(4, 120, 87, 0.94), rgba(6, 95, 70, 0.86)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85')",
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-100">
            Start the conversation
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl">
            Ready to Buy or Sell a Business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Speak with an advisor about your goals, your market position, and the smartest next move.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#booking"
              className="rounded-full bg-white px-7 py-4 text-sm font-bold text-emerald-800 transition hover:-translate-y-1 hover:bg-emerald-50"
            >
              Book Consultation
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      <section id="booking" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Schedule Consultation"
            title="Book a confidential advisor call"
            description="Choose the type of consultation, select a preferred date and time, and share your contact details. Our team will confirm the appointment before it is finalized."
          />

          <motion.div
            className="premium-card overflow-hidden rounded-[2.75rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <aside
                className="bg-cover bg-center p-8 text-white md:p-10"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(10, 10, 10, 0.94), rgba(10, 10, 10, 0.82)), url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=85')",
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <CalendarDays className="h-7 w-7" />
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold">Consultation Request</h3>
                <p className="mt-4 leading-7 text-white/65">
                  This custom-branded scheduling flow captures your preferred appointment details now and is structured for a later CRM, email, Google Calendar, or backend API integration.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    { label: "Consultation", value: bookingRequest.consultationType || "Select type" },
                    {
                      label: "Date",
                      value:
                        availableDates.find((date) => date.value === bookingRequest.date)?.date ||
                        "Select date",
                    },
                    { label: "Time", value: bookingRequest.time || "Select time" },
                    { label: "Contact", value: bookingRequest.name || "Add details" },
                  ].map((item, index) => (
                    <div key={item.label} className="flex gap-4">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          bookingProgress > index
                            ? "bg-emerald-500 text-white"
                            : "bg-white/10 text-white/60"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                          {item.label}
                        </p>
                        <p className="mt-1 font-semibold text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>

              <form onSubmit={handleBookingSubmit} className="p-6 md:p-10">
                {bookingConfirmed ? (
                  <motion.div
                    className="flex min-h-[34rem] flex-col items-center justify-center rounded-[2rem] bg-emerald-50 p-8 text-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-900/20">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="mt-8 font-display text-4xl font-semibold text-neutral-950">
                      Your consultation request has been received.
                    </h3>
                    <p className="mt-4 max-w-xl text-lg leading-8 text-neutral-600">
                      Our team will contact you to confirm the appointment.
                    </p>
                    <button
                      type="button"
                      onClick={() => setBookingConfirmed(false)}
                      className="mt-8 rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                    >
                      Review Request
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-10">
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-neutral-950">Select consultation type</h3>
                          <p className="text-sm text-neutral-500">Choose the advisory focus for your call.</p>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {consultationTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => updateBookingRequest("consultationType", type)}
                            className={`rounded-2xl border p-4 text-left font-semibold transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-950/5 ${
                              bookingRequest.consultationType === type
                                ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                                : "border-neutral-200 bg-white text-neutral-800"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                      <div>
                        <div className="mb-5 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                            2
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-neutral-950">Choose an available date</h3>
                            <p className="text-sm text-neutral-500">Placeholder availability for upcoming advisor calls.</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {availableDates.map((date) => (
                            <button
                              key={date.value}
                              type="button"
                              onClick={() => updateBookingRequest("date", date.value)}
                              className={`rounded-2xl border p-4 text-center transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-950/5 ${
                                bookingRequest.date === date.value
                                  ? "border-emerald-500 bg-emerald-600 text-white"
                                  : "border-neutral-200 bg-white text-neutral-800"
                              }`}
                            >
                              <span className="block text-xs font-bold uppercase tracking-[0.18em] opacity-70">
                                {date.day}
                              </span>
                              <span className="mt-2 block text-lg font-bold">{date.date}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="mb-5 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                            3
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-neutral-950">Select a time</h3>
                            <p className="text-sm text-neutral-500">Times are shown as preferred appointment windows.</p>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => updateBookingRequest("time", time)}
                              className={`flex items-center justify-between rounded-2xl border p-4 font-bold transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-950/5 ${
                                bookingRequest.time === time
                                  ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                                  : "border-neutral-200 bg-white text-neutral-800"
                              }`}
                            >
                              <span>{time}</span>
                              <Clock className="h-4 w-4" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-neutral-950">Add contact details</h3>
                          <p className="text-sm text-neutral-500">Required fields must be complete before submitting.</p>
                        </div>
                      </div>
                      <div className="grid gap-5 md:grid-cols-3">
                        <label className="space-y-2">
                          <span className="text-sm font-bold text-neutral-700">Name</span>
                          <input
                            required
                            value={bookingRequest.name}
                            onChange={(event) => updateBookingRequest("name", event.target.value)}
                            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            placeholder="Your name"
                          />
                        </label>
                        <label className="space-y-2">
                          <span className="text-sm font-bold text-neutral-700">Email</span>
                          <input
                            required
                            type="email"
                            value={bookingRequest.email}
                            onChange={(event) => updateBookingRequest("email", event.target.value)}
                            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            placeholder="you@example.com"
                          />
                        </label>
                        <label className="space-y-2">
                          <span className="text-sm font-bold text-neutral-700">Phone</span>
                          <input
                            required
                            type="tel"
                            value={bookingRequest.phone}
                            onChange={(event) => updateBookingRequest("phone", event.target.value)}
                            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            placeholder="(555) 123-4567"
                          />
                        </label>
                        <label className="space-y-2 md:col-span-3">
                          <span className="text-sm font-bold text-neutral-700">Message / notes</span>
                          <textarea
                            value={bookingRequest.notes}
                            onChange={(event) => updateBookingRequest("notes", event.target.value)}
                            rows={4}
                            className="w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            placeholder="Share anything helpful before the call."
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-3xl bg-neutral-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3 text-sm font-semibold text-neutral-600">
                        <UserRound className="h-5 w-5 text-emerald-600" />
                        {isBookingReady
                          ? "Ready to submit your consultation request."
                          : "Select a date, time, and complete required contact fields."}
                      </div>
                      <button
                        type="submit"
                        disabled={!isBookingReady}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:shadow-none disabled:hover:translate-y-0"
                      >
                        Request Appointment <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Contact
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              Get a confidential consultation
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Tell us whether you are buying, selling, or seeking a valuation. A senior advisor will review your message and follow up with next steps.
            </p>
            <div className="mt-8 space-y-4">
              {["Private and confidential", "Advisor-led discovery call", "Buyer and seller registration support"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <span className="font-semibold text-neutral-800">{item}</span>
                  </div>
                ),
              )}
            </div>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700">
              <a
                href="tel:18003141365"
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-emerald-200 hover:bg-emerald-50"
              >
                <Phone className="h-5 w-5 text-emerald-600" />
                Toll Free: 1-800-314-1365
              </a>
              <a
                href="mailto:info@JumpInternationalBusinessBrokers.com"
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-emerald-200 hover:bg-emerald-50"
              >
                <Mail className="h-5 w-5 text-emerald-600" />
                info@JumpInternationalBusinessBrokers.com
              </a>
            </div>
            <div
              className="mt-8 min-h-72 rounded-[2rem] bg-cover bg-center shadow-2xl shadow-neutral-950/10"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(6, 18, 13, 0.08), rgba(6, 18, 13, 0.5)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="premium-card rounded-[2.5rem] p-6 md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-bold text-neutral-700">Name</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-bold text-neutral-700">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="you@example.com"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-bold text-neutral-700">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="(555) 123-4567"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-bold text-neutral-700">I am interested in</span>
                <select
                  required
                  name="interest"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Buying</option>
                  <option>Selling</option>
                  <option>Valuation</option>
                </select>
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-bold text-neutral-700">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="Tell us a little about your goals."
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Submit Inquiry <ArrowRight className="h-4 w-4" />
            </button>

            {submitted && (
              <motion.div
                className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 className="h-5 w-5" />
                Thank you. Your inquiry has been received.
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-neutral-200 px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-neutral-500 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="text-lg font-semibold text-neutral-800">Jump International Business Brokers</p>
            <p className="mt-3 leading-7">
              Confidential business brokerage, acquisition advisory, business listings, and valuation guidance for anyone considering buying or selling a business.
            </p>
            <div className="mt-4 grid gap-2">
              <a href="tel:18003141365" className="transition hover:text-emerald-700">
                Toll Free: 1-800-314-1365
              </a>
              <a
                href="mailto:info@JumpInternationalBusinessBrokers.com"
                className="transition hover:text-emerald-700"
              >
                info@JumpInternationalBusinessBrokers.com
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jump International on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                f
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jump International on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                in
              </a>
            </div>
            <p className="mt-4">© 2022 Jump International Business Brokers</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/terms-and-conditions" className="transition hover:text-emerald-700">
                Terms and Conditions
              </Link>
              <Link href="/privacy-cookies-policy" className="transition hover:text-emerald-700">
                Privacy & Cookies Policy
              </Link>
            </div>
            <p className="mt-2">
              Website by{" "}
              <a
                href="https://elevatedigitalstudios.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 transition hover:text-emerald-900"
              >
                Elevate Digital Studios
              </a>
            </p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-neutral-900">Quick Links</p>
            <div className="mt-4 grid gap-2">
              {navMenus.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-emerald-700">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-neutral-900">From Our Blog</p>
            <div className="mt-4 grid gap-3">
              {newsArticles.map((article) => (
                <a
                  key={article.title}
                  href={`/blog/${article.slug}`}
                  className="transition hover:text-emerald-700"
                >
                  <span className="block font-semibold text-neutral-700">{article.title}</span>
                  <span>{article.date}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
