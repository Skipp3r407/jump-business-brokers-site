export type SitePage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
    links?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  cta?: {
    label: string;
    href: string;
  };
};

export const sitePages: SitePage[] = [
  {
    slug: "about",
    eyebrow: "About Us",
    title: "About Jump International Business Brokers",
    description:
      "Intermediary services for owners, buyers, and investors navigating business sales, acquisitions, valuation, financing questions, and confidential transactions.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Intermediary services for business sales and purchases",
        paragraphs: [
          "Jump International Business Brokers offers intermediary services in the sale or purchase of a business. The firm performs a valuation on the business being sold, finds buyers, and pre-screens them.",
          "The company uses its own forms to help save sellers thousands on legal fees. It also helps select the right buyer, find financing for buyers, manage due diligence, remove contingencies, and get the deal ready for a closing attorney.",
          "This frees the seller to keep managing their business while Jump International works in the background.",
        ],
        bullets: [
          "Business valuation and pricing guidance",
          "Buyer screening and confidentiality",
          "Due diligence and closing preparation",
          "Consulting before a business goes to market",
        ],
      },
      {
        title: "Business consulting before you sell",
        paragraphs: [
          "Jump International also offers business consulting services. Before an owner decides to sell, the firm can help prepare the business to achieve the highest possible price.",
          "The process includes a thorough review of the business and recommendations for changes that may increase profitability before listing the business.",
        ],
      },
      {
        title: "Tenacity, Service, and Integrity",
        paragraphs: [
          "Tenacity, Service, and Integrity are core to the company. Jump International works hard and fast to accomplish the mission of selling a business or assisting in the purchase of one while maintaining honesty and integrity in every deal.",
        ],
      },
      {
        title: "Jeff Jump, President and Managing Broker",
        paragraphs: [
          "Jeff Jump is a seasoned business owner and business consultant with 30 years of experience in the business world. Originally from Fort Wayne, Indiana, Jeff previously owned and operated two printing companies for more than 15 years.",
          "He has worked in manufacturing, pharmaceutical, distribution, and aviation industries. Jeff has a Florida Real Estate Brokers License and is a Certified Business Intermediary with the International Business Brokers Association.",
          "Jeff is professionally trained and certified to value, market, and sell businesses. He also represents buyers in their search for an acquisition.",
          "Jeff served proudly in the U.S. Navy for four years, served in the Army National Guard as an Air Traffic Controller, and served in the Navy Reserves with two tours on aircraft carriers. He is a proud military veteran and enjoys opportunities to work with fellow veterans.",
        ],
      },
    ],
    cta: { label: "Schedule a Call", href: "/#booking" },
  },
  {
    slug: "affiliations",
    eyebrow: "Affiliations",
    title: "Professional credentials and business brokerage standards",
    description:
      "Jump International aligns brokerage work with professional education, business brokerage standards, and intermediary experience.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Business brokerage credentials",
        paragraphs: [
          "Jump International's professional services are based on more than 20 years of experience providing clients with management consulting assistance and services.",
          "The firm offers the expertise found in premier management consulting organizations and balances it with personal service designed to resolve modern business challenges.",
          "The International Business Brokers Association is the largest international non-profit association operating exclusively for people and firms engaged in business brokerage and mergers and acquisitions.",
          "The IBBA provides business broker education, conferences, professional designations, and networking opportunities. Formed in 1984, the IBBA has members across the world.",
        ],
        bullets: [
          "Certified Business Intermediary",
          "Florida Real Estate Brokers License",
          "Business valuation and marketing training",
          "Buyer and seller representation experience",
        ],
      },
    ],
  },
  {
    slug: "knowledge-center",
    eyebrow: "The Knowledge Center",
    title: "Education for owners, buyers, and transaction-minded investors",
    description:
      "Seller articles, buyer articles, tutorials, FAQs, and practical guidance for understanding business transfers.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Learn before you make a major transaction decision",
        paragraphs: [
          "The Knowledge Center connects owners, buyers, and transaction-minded investors with the latest educational content from Jump International.",
          "Recent content includes Why Early Exit Planning Matters for Business Owners, Selling to Global Buyers: A Modern Guide for Business Owners, and How to Achieve Better Negotiation Results.",
        ],
        bullets: [
          "Seller education and exit planning",
          "Buyer acquisition guidance",
          "Negotiation and due diligence resources",
          "Confidentiality and transaction readiness",
        ],
      },
    ],
    cta: { label: "Read the Blog", href: "/blog" },
  },
  {
    slug: "selling-a-business",
    eyebrow: "Selling",
    title: "Selling a Business",
    description:
      "Professional guidance can be the difference between simply getting rid of a business and selling it for the best price and terms.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Is it time to sell?",
        paragraphs: [
          "Selling your business is a major decision. You have devoted your time, money, and energy into building, running, and operating your business. It may well represent your life's work.",
          "If you have already decided that now is the right time to sell, you want the very best professional guidance you can get.",
          "Working in tandem with a professional business broker can make the difference between just getting rid of the business and selling it for the very best price and terms.",
          "Jump International encourages sellers to ask questions about pricing, buyer screening, confidentiality, financing, due diligence, and closing readiness before going to market.",
        ],
        bullets: [
          "Professional guidance before listing",
          "Confidential seller representation",
          "Buyer qualification and transaction management",
          "Preparation for better price and terms",
        ],
      },
      {
        title: "Common seller topics",
        paragraphs: [
          "Business owners often want to understand what their business is worth, whether they are truly ready to sell, what buyers will expect, and what can be done before market to make the business more attractive.",
          "The selling process works best when owners have reasonable expectations, clean records, clear motivation, and professional support.",
        ],
      },
    ],
    cta: { label: "Seller Registration", href: "/seller-registration" },
  },
  {
    slug: "selling-tutorial",
    eyebrow: "Selling Tutorial",
    title: "Selling Tutorial",
    description:
      "Official seller education for valuation, preparation, buyer expectations, financial records, and improving transfer readiness.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Is it time to sell?",
        paragraphs: [
          "Selling your business is a major decision. You have devoted your time, money, and energy into building, running, and operating your business. It may well represent your life's work.",
          "If you have already decided that now is the right time to sell, you want the very best professional guidance you can get.",
          "Working with a professional Business Broker can make the difference between just getting rid of the business and selling it for the very best price and terms.",
        ],
      },
      {
        title: "For Business Sellers",
        paragraphs: [
          "If selling your business has aroused enough curiosity that you are taking the first step, you do not have to make a commitment yet. You are simply getting informed about what is necessary to successfully sell your business.",
          "The first question almost every seller asks is what the business is worth. Before asking that question, the owner has to be ready to sell for what the marketplace is willing to pay.",
          "Only the marketplace can decide what the value of a business is. It does not matter what the owner, accountant, banker, attorney, or best friend thinks the business is worth if buyers will not support that value.",
        ],
      },
      {
        title: "Do you really want to sell this business?",
        paragraphs: [
          "The second question sellers should consider is whether they really want to sell the business. If the owner is serious and has solid reasons for selling, the sale is more likely to happen.",
          "Owners can increase their chances of selling if they also have reasonable expectations. A yes answer to seriousness and reasonable expectations means the owner is more prepared to sell.",
        ],
      },
      {
        title: "The first steps",
        paragraphs: [
          "Before placing the business for sale, owners should gather important information about the company and organize it in a format that can eventually be presented to a serious prospective purchaser.",
          "Everything starts with this information. Many small business owners have to search for these items, update them, and fill in missing details.",
        ],
        bullets: [
          "Three years' profit and loss statements",
          "Federal Income Tax returns for the business",
          "List of fixtures and equipment",
          "The lease and lease-related documents",
          "Loans against the business, including amounts and payment schedule",
          "Copies of any equipment leases",
          "Franchise agreement, if applicable",
          "Approximate inventory on hand, if applicable",
          "Names of outside advisors",
        ],
      },
      {
        title: "Make financial statements current and accurate",
        paragraphs: [
          "If the business is halfway through the current year, the seller should have last year's figures and tax returns as well as year-to-date figures.",
          "Financial statements should be presentable. Pricing a small business is usually based on cash flow, including business profit, owner's salary and benefits, depreciation, and other non-cash items.",
          "Prospective buyers will eventually want to review financial figures, so the information should be organized and accurate before serious conversations begin.",
        ],
      },
      {
        title: "Tax implications matter",
        paragraphs: [
          "The big question is not only how much the business will sell for, but how much of it the seller can keep. Federal tax laws determine how much money will actually be available after the sale.",
          "How the business is legally formed can be important. A corporation, partnership, proprietorship, C corporation, or S corporation can each create different tax considerations.",
          "Before considering price or selling, owners should discuss the tax implications of a sale with a tax advisor.",
        ],
      },
      {
        title: "Who are the buyers?",
        paragraphs: [
          "Buyers buy businesses for many of the same reasons sellers sell businesses. The buyer must be as serious as the seller when it comes time to purchase a business.",
          "Buyers who want to go into business strictly for the money usually are not realistic buyers for small businesses.",
          "The average individual buyer may be replacing a lost job or trying to get out of an uncomfortable job situation. Many have never owned a business before and may buy a business they had not previously considered until introduced to it.",
        ],
        bullets: [
          "Laid off, fired, or being transferred",
          "Early retirement",
          "Job dissatisfaction",
          "Desire for more control",
          "Desire to do their own thing",
          "Financial resources and urgency to buy",
          "Ability to make independent decisions",
          "Reasonable expectations of ownership",
        ],
      },
      {
        title: "What buyers want",
        paragraphs: [
          "The vast majority of buyers want to buy cash flow. Sellers should sit down with an accountant or bookkeeper and begin getting financial statements in order with cash flow as the order of business.",
          "Cash flow is not the same thing as profit. Buyers look at profit and loss statements, tax returns, owner or family compensation, excess compensation, one-time expenses, depreciation, amortization, interest expenses, and owner perquisites.",
          "These are items a professional Business Broker considers when advising a selling client on a selling price.",
        ],
        bullets: [
          "How much money is required to buy the business?",
          "What is the annual increase in sales?",
          "How much is the inventory?",
          "What is the debt?",
          "Will the seller train and stay on for a while?",
          "What makes the business different or unique?",
          "What can be done to grow the business?",
          "What is the profit picture in bad times as well as good?",
        ],
      },
      {
        title: "What sellers can do before market",
        paragraphs: [
          "Sellers should create an operations manual and improve the appearance of the business before deciding to sell.",
          "The time to replace worn-out equipment, fix signs, replace carpet, paint the place, and make the business look good is before a buyer visits.",
          "Customer lists, proprietary products, well-maintained equipment, secret recipes, custom software, and good employees can add value even when they are not reflected directly on the balance sheet.",
        ],
      },
      {
        title: "Eliminate surprises",
        paragraphs: [
          "Long before putting a business on the market, sellers should review every facet of the business and remedy problems that could appear during the sale process.",
          "No one likes surprises, especially potential buyers. Legal, accounting, environmental, operational, or equipment problems should be solved before they affect a transaction.",
        ],
        bullets: [
          "Tidy up outside premises",
          "Repair or remove non-operating equipment",
          "Remove items not included in the sale",
          "Maintain inventory at a constant level",
          "Repair signs and outside lights",
          "Keep normal operating hours",
          "Spruce up the inside of the business",
        ],
      },
    ],
    cta: { label: "Download the Whitepaper", href: "/whitepaper" },
  },
  {
    slug: "seller-articles",
    eyebrow: "Seller Articles",
    title: "Articles for owners planning a stronger exit",
    description:
      "Seller-focused articles covering exit planning, confidentiality, global buyers, valuation expectations, and negotiation.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Plan, prepare, and protect value",
        paragraphs: [
          "Seller articles help owners avoid rushed decisions, understand buyer expectations, maintain confidentiality, and prepare for a stronger transaction outcome.",
          "The official seller articles archive includes guidance on exit planning, global buyers, negotiation, failed transactions, confidentiality, seller concerns, lease issues, deal breakers, LinkedIn, first impressions, retirement transitions, and employee engagement.",
        ],
        bullets: [
          "Why early exit planning matters",
          "Selling to global buyers",
          "How to achieve better negotiation results",
          "Why business sales break down",
          "Confidentiality as a competitive advantage",
          "Planning your exit before you need it",
          "Common misunderstandings that can undermine an M&A deal",
          "Understanding a seller's biggest concerns",
          "Who really shows up when you sell a business?",
          "The lease factor: why real estate can make or break a business sale",
          "Avoiding the deal breakers in business transactions",
          "Leverage LinkedIn to grow your business",
        ],
        links: [
          {
            label: "Why Early Exit Planning Matters for Business Owners",
            href: "/blog/why-early-exit-planning-matters-for-business-owners",
          },
          {
            label: "Selling to Global Buyers: A Modern Guide for Business Owners",
            href: "/blog/selling-to-global-buyers-a-modern-guide-for-business-owners",
          },
          {
            label: "How to Achieve Better Negotiation Results",
            href: "/blog/how-to-achieve-better-negotiation-results",
          },
          { label: "Why Business Sales Break Down", href: "/blog/why-business-sales-break-down" },
          {
            label: "Confidentiality as a Competitive Advantage",
            href: "/blog/confidentiality-as-a-competitive-advantage",
          },
          {
            label: "Common Misunderstandings That Can Undermine an M&A Deal",
            href: "/blog/common-misunderstandings-that-can-undermine-an-ma-deal",
          },
          {
            label: "The Lease Factor: Why Real Estate Can Make or Break a Business Sale",
            href: "/blog/the-lease-factor-why-real-estate-can-make-or-break-a-business-sale",
          },
          {
            label: "Avoiding the Deal Breakers in Business Transactions",
            href: "/blog/avoiding-the-deal-breakers-in-business-transactions",
          },
          {
            label: "Leverage LinkedIn to Grow Your Business",
            href: "/blog/leverage-linkedin-to-grow-your-business",
          },
        ],
      },
    ],
    cta: { label: "Read Seller Articles", href: "/blog" },
  },
  {
    slug: "business-brokerage-transaction-terms",
    eyebrow: "Transaction Terms",
    title: "Business Brokerage Transaction Terms",
    description:
      "A practical dictionary of business brokerage, acquisition, financing, and transaction terms.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Currently 156 terms in dictionary",
        paragraphs: [
          "This glossary helps buyers and sellers understand common business brokerage transaction terms before reviewing offers, financing documents, purchase agreements, due diligence items, and closing paperwork.",
        ],
        bullets: [
          "Acceleration Clause",
          "Acceptance",
          "Addendum",
          "Agency Listing",
          "Agent",
          "Allocation",
          "Amendment",
          "Amortization",
          "APA",
          "Appreciation",
          "Arbitration",
          "Asking Price",
          "Asset Sale",
          "Assignment",
          "Attorney-In-Fact",
        ],
      },
      {
        title: "Acceleration Clause",
        paragraphs: [
          "A clause used in a note and/or security agreement which gives the lender the right to demand payment in full if a certain event occurs such as default or if the ownership of the business changes without the lender's consent; sometimes referred to as a due on sale clause.",
        ],
      },
      {
        title: "Acceptance",
        paragraphs: ["The act of accepting an offer which results in a binding contract."],
      },
      {
        title: "Addendum",
        paragraphs: ["A written instrument that adds something to a written contract."],
      },
      {
        title: "Agency Listing",
        paragraphs: [
          "Also known as an Exclusive Agency Listing. A written instrument giving the agent the right to sell property for a specified time. However, the owner may sell the property himself or herself to a buyer who was not introduced to the business by the agent without the payment of a commission to the agent.",
        ],
      },
      {
        title: "Agent",
        paragraphs: [
          "One acting under authority of a principal to do the principal's business. The agent must use his or her best efforts and keep the principal fully informed of all material facts.",
        ],
      },
      {
        title: "Allocation",
        paragraphs: [
          "A breakdown of the purchase price usually required when a business is sold. For example, the allocation might contain a breakdown of the inventories, fixtures and equipment, leasehold improvements, goodwill, and any other purchased assets.",
          "Generally, value is placed on each component of the allocation and the buyer and seller agree on this breakdown. The IRS requires that such an allocation be part of the buyer's and seller's tax return when a sale takes place; Form 8594, the Asset Acquisition Statement, must be filed with the buyer's and seller's tax return for the year in which an applicable asset acquisition takes place.",
        ],
      },
      {
        title: "Amendment",
        paragraphs: [
          "A written instrument that changes something previously agreed to. This is different than an addendum.",
        ],
      },
      {
        title: "Amortization",
        paragraphs: [
          "A reduction in a debt obligation by periodic payments covering interest and part of the principal.",
          "The writing off or expensing of the cost of intangible assets over a period of time, usually in years. Intangible assets purchased, such as goodwill and covenants-not-to-compete, can be written off over 15 years.",
        ],
      },
      {
        title: "APA",
        paragraphs: ["Asset purchase agreement."],
      },
      {
        title: "Appreciation",
        paragraphs: [
          "A gain in value due to any cause. Real estate is an asset that often appreciates in value over time.",
        ],
      },
      {
        title: "Arbitration",
        paragraphs: [
          "The submission of a disputed matter for resolution outside the normal judicial system. It is often speedier and less costly than courtroom procedures.",
          "An arbitration award can be enforced legally in court. If one or more parties cannot agree on a single arbitrator, they can select arbitrators under the rules of the American Arbitration Association. Arbitration clauses are often inserted into contracts as the forum to settle disputes arising out of the contract.",
        ],
      },
      {
        title: "Asking Price",
        paragraphs: [
          "The total amount for which a business or an ownership interest is offered for sale.",
        ],
      },
      {
        title: "Asset Sale",
        paragraphs: [
          "This term has two definitions. The proper definition depends on its usage: the means by which a business owner transfers ownership of tangible and intangible assets to another owner without transferring the ownership structure, or the sale of a business enterprise at a price based solely upon the value of the tangible assets.",
          "In an asset sale, the buyer acquires only specific assets and may assume certain liabilities. Unlike a stock sale, the buyer usually obtains the assets free and clear of seller liabilities and may receive a step-up in basis on the assets purchased based on their allocated fair market values.",
        ],
      },
      {
        title: "Assignment",
        paragraphs: [
          "A transfer in writing of an interest in property or other things of value from one person or entity to another.",
        ],
      },
      {
        title: "Attorney-In-Fact",
        paragraphs: [
          "One who is appointed, in writing, to perform a specific act for and in place of another, such as signing documents for someone in their absence.",
          "Credits to Len Krick.",
        ],
      },
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    slug: "buying-a-business",
    eyebrow: "Buying",
    title: "Buying a Business",
    description:
      "Jump International works with independent buyers and buyer mandate clients to make business acquisitions smoother and more strategic.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Do you dream of owning your own business?",
        paragraphs: [
          "From finding the right one to working out all the details required for a smooth transfer of ownership, buying a business is a major decision.",
          "While there is no such thing as the perfect business, a business broker knows the importance of finding one that fits your needs, talents, skills, and lifestyle.",
          "A business broker has many different types of businesses for you to consider and the knowledge and experience to walk you through the entire process.",
        ],
        bullets: [
          "Opportunity discovery",
          "Buyer fit and lifestyle alignment",
          "Confidential listing review",
          "Guided transfer of ownership",
        ],
      },
      {
        title: "Are you interested in our Businesses for Sale?",
        paragraphs: [
          "Begin your search for the ideal business opportunity by viewing Jump International's latest listing or browsing the whole collection.",
          "The current featured opportunity is Ceiling Cleaning and Installation Business, an Other Service Businesses listing in Central Indiana that is currently Under Contract.",
        ],
        bullets: [
          "Price: $700,000",
          "Listing ID: 8012-00018",
          "Location: Central Indiana",
          "Industry: Other Service Businesses",
        ],
      },
    ],
    cta: { label: "Buyer Registration", href: "/buyer-registration" },
  },
  {
    slug: "buying-tutorial",
    eyebrow: "Buying Tutorial",
    title: "Buying Tutorial",
    description:
      "Helpful information for buyers considering whether business ownership is the right next step.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Do you dream of owning your own business?",
        paragraphs: [
          "Buying a business can be a complicated procedure, from finding the right one to working out all the details required for a smooth transfer of ownership.",
          "While there is no such thing as the perfect business, a Business Broker knows the importance of finding one that fits your needs, talents, skills and lifestyle.",
          "A Business Broker has many different types of businesses for you to consider and the knowledge and experience to walk you through the entire process.",
          "Below you will find some helpful information as you consider whether buying a business is right for you.",
        ],
      },
      {
        title: "For Business Buyers",
        paragraphs: [
          "Going into business for yourself is a big step, one that can be full of apprehension and even fear.",
          "Almost 90 percent of all those who purchase a small business have never owned a business. Most of them bought a business that was different than what they had been looking for. These buyers had the opportunity to explore the marketplace and subsequently found a business more to their liking. In most cases, the seller financed the sale.",
          "Most buyers are seeking to obtain the following when considering the purchase of a business:",
        ],
        bullets: [
          "Pride in the service or the product",
          "Flexibility",
          "Income",
          "Control of own destiny",
          "Recognition",
          "Security",
          "Privacy",
          "Status",
          "Customer and employee contact",
        ],
      },
      {
        title: "Business ownership is a lifestyle change",
        paragraphs: [
          "As you begin your search, keep in mind that running your own business is more than a job; it is a lifestyle change. In most cases, it is a very big lifestyle change.",
          "Usually, you will be working longer hours, making all of the decisions, and, as the expression goes, you will be the chief cook and bottle washer. In other words, you will be doing all of the work from running the business to, in many cases, sweeping the floor and changing the light bulbs.",
        ],
      },
      {
        title: "What to look for",
        paragraphs: [
          "A business with a long track record means there are good reasons to be operating. It will be well known in the area, and people will be used to patronizing the business or using its services. The longer it has been in operation, generally, the better the business.",
          "The longer the present owner has been in business, the more likely he or she has been successful. People do not stay in business if they are not making money.",
          "Why the seller is selling is an important question. The more valid the reason for sale, the more realistic the seller will be in considering your offer.",
        ],
        bullets: [
          "How long the business has been operating",
          "How long the present owner has owned the business",
          "Why the present owner is selling",
          "Whether the reason for sale appears valid and realistic",
        ],
      },
      {
        title: "Why books and records are important",
        paragraphs: [
          "The financial records are a good indication of how well the business has been doing over the years. Keep in mind that tax records are not designed to show the business in the best light; no one likes to pay more taxes than they have to, and business owners are no different.",
          "Generally, tax returns are a worst case scenario. You need to be able to look at the expenses and discover which ones are non-cash items, such as depreciation and business use of home and vehicles. A professional Business Broker can point these items out to you.",
          "Financial records are only history. There are no guarantees that they will or can be duplicated or repeated. All of your profits are future. In the final analysis, the financial records of the business are an indicator of what the business has done; what you do with its future is up to you.",
        ],
      },
      {
        title: "How to determine if the seller is reporting all income",
        paragraphs: [
          "The simple answer is that you cannot. Not reporting income is against the law.",
          "You should consider only the income that the seller can show you. Many sellers may talk about unreported income, but buyers should ignore statements that cannot be proven.",
          "In determining whether a business is the right one for you, base the decision on the figures actually supplied to you by the seller.",
        ],
      },
      {
        title: "The bottom line",
        paragraphs: [
          "Being in business for yourself can be a daunting prospect. There are no guarantees. At some point, after all of your investigation is completed, you will still have to make the leap of faith that is necessary to proceed with the purchase of the business.",
          "You will have to work hard, perhaps even tighten your belt a little, and perform many different jobs to be successful in your own business.",
          "But if running your own show, making your own decisions, not having to worry about job security, and being on your own are important, then owning a business may be for you.",
        ],
      },
      {
        title: "What should you look for when considering a business to purchase?",
        paragraphs: [
          "Too many prospective buyers want to know the asking price first and then ask how much money they can make. These are the wrong questions to ask initially.",
          "You need to know how much cash the seller requires as a down payment. No matter how good the numbers are, there is no point in looking at a business if the seller wants three times as much cash as you are willing to invest.",
          "The actual amount of money a business earns is usually much more than just the bottom line. A smart approach is to get more information on the business, and even make a visit, before ruling it out or getting too involved in the numbers.",
        ],
      },
      {
        title: "Steps to buying a business",
        paragraphs: [
          "There is no right or wrong way to buy a business. However, it is important that you get answers to all of your questions and that you have all the information necessary to make an informed decision.",
          "Over the years, the following steps have become efficient and practical for buyers considering a business acquisition.",
        ],
        bullets: [
          "Get the basic facts",
          "Visit the business",
          "Get questions answered",
          "Make an offer",
          "Complete due diligence",
        ],
      },
      {
        title: "Get the basic facts",
        paragraphs: [
          "Get preliminary information on price, terms, income, cash flow, and general location. There is no point in continuing the buying process if the amount of cash necessary to buy the business is more than you are willing to invest.",
          "At this point, do not worry about the full price. The key factor is the amount of cash that is necessary to buy the business. The great majority of business purchases are financed by the seller.",
          "The business also has to be able to meet your basic financial needs. You should expect a business to improve under your ownership, but you have to be able to meet your living expenses as well as the debt service of the business.",
        ],
      },
      {
        title: "Visit the business",
        paragraphs: [
          "Visit the business to see if you like the location and the look of the business, both inside and outside. This is a visual inspection. Pretend you are a customer.",
          "It is not time yet to talk to the owner. If the business is the type that does not lend itself to a visit, make an appointment with the seller to inspect the business, or have the seller representative schedule a visit.",
          "There is no point in going any further if you do not like the physical location of the business or the appearance of it.",
        ],
      },
      {
        title: "Get questions answered",
        paragraphs: [
          "If you like the business so far, it is time to get your questions answered. Ask about rent, lease terms, sales history, and whether the seller can support the figures you have been told.",
          "Now is not the time to have the seller's books and records completely checked. There will be plenty of time to review those issues during due diligence.",
          "This is the time to get answers that affect whether you may want to own and operate this particular business.",
        ],
      },
      {
        title: "Make an offer",
        paragraphs: [
          "If your basic questions have been answered and you want to proceed, it is time to make an offer, subject to verification of all the information you have received.",
          "The main purpose in making an offer is to see if the seller will accept your terms, price, and structure of the sale itself.",
          "It does not make sense to employ outside advisors and go through the time and expense of due diligence unless you can come to financial terms with the seller.",
        ],
      },
      {
        title: "Due diligence",
        paragraphs: [
          "At this point, you hopefully have arrived at a meeting of minds with the seller and are ready to begin removing contingencies through due diligence.",
          "Unless you are completely familiar with the type of business purchased, it can be beneficial to include an agreement that the seller will stay with you for a sufficient length of time to teach you the business.",
          "Thirty days is often fair, with perhaps another 30 to 60 days of telephone consultation. If you want the seller to stay longer, it may be best to offer a consulting fee.",
        ],
      },
      {
        title: "Questions before taking the next step",
        paragraphs: [
          "The next step to buying your own business is to make sure it is the right move for you and your family. Owning one's own business is still very much the great American dream, but it is not for everybody.",
          "Buyers should be honest about motivation, timeline, financial risk, family support, open-mindedness, expectations, and the ability to make the leap of faith required to buy a business.",
        ],
        bullets: [
          "How long have you been thinking about buying a business?",
          "What is your time frame to find a business?",
          "What is your primary reason for buying a business?",
          "Are you willing to invest a majority of your liquid assets?",
          "Are you independent enough to make your own decisions?",
          "Is your family supportive of your owning a business?",
          "Are you open-minded about different opportunities?",
          "Do you have reasonable expectations?",
          "Can you make the leap of faith necessary to buy a business?",
          "Do you need a guarantee?",
        ],
      },
      {
        title: "Do you have other questions?",
        paragraphs: [
          "Jump International encourages buyers to review the Buyer FAQ for more answers about buying an existing business, business pricing, business broker support, attorney involvement, and what happens when a buyer finds a business they want to purchase.",
        ],
        bullets: [
          "Why should I buy a business rather than start one?",
          "What is the real reason people go into business for themselves?",
          "How are businesses priced?",
          "What should I look for?",
          "What does it take to be successful?",
          "What happens when I find a business I want to buy?",
          "Why should I go to a Business Broker?",
          "Do I need an attorney?",
        ],
      },
    ],
    cta: { label: "View Businesses for Sale", href: "/businesses-for-sale" },
  },
  {
    slug: "buyer-faq",
    eyebrow: "Buyer FAQ",
    title: "Buyer FAQ",
    description:
      "Answers and buyer education for people considering the purchase of an existing business.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Why should I buy a business rather than start one?",
        paragraphs: [
          "An existing business has a track record. The failure rate in small business is largely in the start-up phase.",
          "The existing business has demonstrated that there is a need for that product or service in a particular locale. Financial records are available along with other information on the business.",
          "Most sellers will stay and train a new owner and most will also supply financing.",
          "Finding someone who will teach you the intricacies of running a business and who is also willing to finance the sale can make all the difference.",
        ],
      },
      {
        title: "Finding the best business for you",
        paragraphs: [
          "Owning a business and owning the right kind of business for you are two very different things. Buyers should invest the time and effort to determine the best kind of business for their needs, personality, skills, and goals.",
          "A strong fit starts with honest self-assessment. The most important driving factor of the revenues and profits of any business you consider purchasing should connect to what you do best.",
          "Before buying, you must understand every aspect of the business and make certain it is a good fit for you. If you do not love the business, it will have trouble growing.",
        ],
      },
      {
        title: "Tackling growth delusions when buying a business",
        paragraphs: [
          "Buying a new business can be exciting, but buyers should avoid becoming unrealistic about future growth. If a business is positioned to quickly grow substantially, the seller may be less interested in selling.",
          "The seductive lure of growth should not be the determining factor. Stability is often more important. Buyers should ask whether the business can maintain revenue and profit levels after the sale.",
          "A professional business broker can help determine which opportunities are best aligned with the buyer and can help avoid common mistakes.",
        ],
      },
      {
        title: "Business buyers can leverage SBA lending",
        paragraphs: [
          "The Small Business Administration helps entrepreneurs by facilitating lending through partner lenders. The SBA does not provide loans itself, but the government backing can make lenders more willing to provide financing.",
          "Buyers should be bank ready, with organized and clear financial documentation. They must also confirm eligibility, find a lender, and complete the necessary SBA forms.",
          "For buyers looking to purchase a business, working with a broker and understanding lending options can help turn the dream of owning a business into a reality.",
        ],
      },
      {
        title: "M&A myths buyers and sellers should understand",
        paragraphs: [
          "Several common M&A myths can create problems during a transaction. One major myth is that negotiating is over once the letter of intent is signed. Negotiations are not truly complete until a purchase agreement is in place.",
          "Other myths include assuming every offer is backed by funds, believing sellers do not need a deal team, or assuming a sale must always involve the entire business.",
          "Business brokers help buyers and sellers avoid myths by understanding the transaction process and the issues that commonly appear during due diligence and negotiations.",
        ],
      },
      {
        title: "Questions everyone should ask before signing on the dotted line",
        paragraphs: [
          "Before buying any business, buyers should ask many questions. There are no stupid questions when deciding whether to purchase a company.",
          "Important questions include: What are the biggest challenges right now? What would the owner have done differently? How was the asking price determined? What happens if the owner cannot sell? How will the financials be documented?",
          "Buyers should also ask what skills are needed to run the business effectively, whether there are lawsuits, how procedures are documented, how dependent the business is on key customers or vendors, and what employees will do after the sale.",
        ],
      },
      {
        title: "A step by step overview of the first time buyer process",
        paragraphs: [
          "First-time buyers should gather information on businesses to understand which types of opportunities are appealing. The next step is to begin working with a business broker.",
          "After signing a confidentiality agreement, buyers can learn more about businesses that interest them, review marketing packages, prepare questions, and evaluate the information received from the seller.",
          "Once a buyer decides to make an offer, the offer should be written and include contingencies. If accepted, due diligence begins, including review of financial statements, tax returns, assets, and other important details.",
        ],
      },
      {
        title: "The importance of understanding leases",
        paragraphs: [
          "Leases should never be overlooked when buying or selling a business. Where the business is located and how long it can stay at that location can play a key role in the health of the business.",
          "Common lease situations include a sub-lease, a new lease, and an assignment of lease. Each can affect the buyer differently.",
          "Buyers should work early to understand all aspects of the lease so there are no unwelcome surprises after purchase.",
        ],
      },
      {
        title: "What should you evaluate when buying a business?",
        paragraphs: [
          "Buying a business can be exciting, but buyers should step back and evaluate whether the opportunity is the best financial and life decision for them.",
          "Buyers should evaluate what is being sold, the quality of the business plan, overall performance, financial records, and customer demographics.",
          "Do not rush into buying a business. Carefully evaluate every aspect of the company and how ownership will affect both your life and your long-term financial prospects.",
        ],
        bullets: [
          "What is being sold?",
          "How good is the business plan?",
          "How is overall performance?",
          "What do the financials look like?",
          "What are the demographics?",
        ],
      },
      {
        title: "What is the value of your business? It all depends.",
        paragraphs: [
          "The first question behind valuation is why the owner needs to know the value of the business. Estate planning, lending, partners, selling, divorce, disputes, and buy-sell agreements can all create different valuation needs.",
          "In many cases, owners who ask about value really want to know price, meaning how much they may receive if they decide to sell. Until the business sells, there is not truly a price.",
          "Business brokers can be a big help in establishing value or price and in explaining what the market may support.",
        ],
      },
      {
        title: "Do I need an attorney?",
        paragraphs: [
          "It may be advisable to have an attorney review legal documents. The attorney should be familiar with the business buying process and have the time to handle paperwork on a timely basis.",
          "If the attorney does not have experience handling business sales, the buyer may be paying for the attorney's education. Many business brokers know attorneys who are familiar with business transactions.",
          "Business brokers are not qualified to give legal advice, but attorneys are also not always qualified to give business advice. The transaction must be fair for all parties.",
        ],
      },
      {
        title: "Why should I go to a business broker?",
        paragraphs: [
          "A professional business broker can provide access to a selection of different and often unique businesses, including opportunities buyers may not find on their own.",
          "Business brokers are an excellent source of information about small business and the business buying process. They are familiar with the market and can advise on trends, pricing, and local conditions.",
          "A broker can handle transaction details and help guide the buyer in the right direction, including coordinating with other professionals when needed.",
        ],
      },
      {
        title: "What happens when I find a business I want to buy?",
        paragraphs: [
          "When a buyer finds a business, the business broker can answer many questions immediately or research them. Once preliminary questions are answered, the next step is usually preparing an offer based on the buyer's desired price and terms.",
          "The offer is generally subject to approval of the books and records supporting the figures that have been supplied. The main purpose of the offer is to see if the seller is willing to accept the proposed price and terms.",
          "If buyer and seller agree, the buyer proceeds into due diligence. After the buyer checks and approves the areas of concern, closing documents can be prepared and the purchase can close.",
        ],
      },
      {
        title: "What does it take to be successful?",
        paragraphs: [
          "Buyers need adequate capital to buy the business, make improvements, and maintain reserves in case things start slowly.",
          "Successful owners must be willing to work hard and often put in long hours. Owners of small businesses must be doers.",
          "A buyer should be ready to handle many roles in the business and stay engaged in the daily realities of ownership.",
        ],
      },
      {
        title: "What should I look for?",
        paragraphs: [
          "Buyers should consider only businesses they would feel comfortable owning and operating. Pride of ownership is an important ingredient for success.",
          "The business must be affordable with the buyer's available cash and should provide enough income, after payments, to cover the buyer's bills.",
          "Buyers should also look at a business with an eye toward how they can improve it and make it more productive and profitable.",
        ],
      },
      {
        title: "How are businesses priced?",
        paragraphs: [
          "A business broker usually reviews financial information before suggesting a price or range of prices for a business.",
          "Most sellers have some idea of what they feel their business should sell for, but the market, financial records, down payment, and sale terms all influence pricing.",
          "Since many business sales are seller-financed, the down payment and terms of sale can be more important than the full selling price.",
        ],
      },
      {
        title: "What is the real reason people go into business for themselves?",
        paragraphs: [
          "Surveys often show that people go into business for themselves to do their own thing, control their own destiny, avoid working for someone else, better use their skills and abilities, and make money.",
          "Interestingly, money is usually not at the top of the list. Control, independence, and personal ability often matter more.",
        ],
        bullets: [
          "To do my own thing and control my own destiny",
          "Do not want to work for someone else",
          "To better utilize my skills and abilities",
          "To make money",
        ],
      },
    ],
    cta: { label: "Buyer Registration", href: "/buyer-registration" },
  },
  {
    slug: "buyer-articles",
    eyebrow: "Buyer Articles",
    title: "Education for acquisition-minded buyers",
    description:
      "Buyer-focused content helps prospective owners think through opportunity fit, negotiation, financing, seller expectations, and ownership readiness.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Learn before narrowing the search",
        paragraphs: [
          "Buyer articles help prospective owners prepare for acquisition decisions, understand the process, and reduce emotional decision-making during negotiation and diligence.",
          "The official buyer articles archive includes topics on negotiation, buyer success rates, first-time buyer roadmaps, essential first steps, lease considerations, SBA loans, employee engagement, and key questions to ask before buying.",
        ],
        bullets: [
          "How to achieve better negotiation results",
          "High buyer success rates",
          "A practical roadmap for first-time buyers",
          "Thinking about buying a business? Start with these essential steps",
          "The lease factor: why real estate can make or break a business sale",
          "You might be more ready for business ownership than you think",
          "Why business buyers often choose proven companies",
          "Your roadmap to a smooth business acquisition",
          "Unlocking SBA loans for small business buyers",
          "7 essential questions to ask before buying a business",
        ],
        links: [
          {
            label: "How to Achieve Better Negotiation Results",
            href: "/blog/how-to-achieve-better-negotiation-results",
          },
          { label: "High Buyer Success Rates", href: "/blog/high-buyer-success-rates" },
          {
            label: "A Practical Roadmap for First-Time Business Buyers",
            href: "/blog/a-practical-roadmap-for-first-time-business-buyers",
          },
          {
            label: "Thinking About Buying a Business? Start With These Essential Steps",
            href: "/blog/thinking-about-buying-a-business-start-with-these-essential-steps",
          },
          {
            label: "You Might Be More Ready for Business Ownership Than You Think",
            href: "/blog/you-might-be-more-ready-for-business-ownership-than-you-think",
          },
          {
            label: "Why Business Buyers Often Choose Proven Companies",
            href: "/blog/why-business-buyers-often-choose-proven-companies",
          },
          {
            label: "Your Roadmap to a Smooth Business Acquisition",
            href: "/blog/your-roadmap-to-a-smooth-business-acquisition",
          },
          {
            label: "Unlocking SBA Loans for Small Business Buyers",
            href: "/blog/unlocking-sba-loans-for-small-business-buyers",
          },
          {
            label: "7 Essential Questions to Ask Before Buying a Business",
            href: "/blog/7-essential-questions-to-ask-before-buying-a-business",
          },
        ],
      },
    ],
    cta: { label: "Read Buyer Articles", href: "/blog" },
  },
  {
    slug: "businesses-for-sale",
    eyebrow: "Listings",
    title: "Businesses for Sale",
    description:
      "Browse market-ready business opportunities represented by Jump International Business Brokers.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Featured listing: Ceiling Cleaning and Installation Business",
        paragraphs: [
          "This is a premium ceiling cleaning, dusting, restoration, repair, coating, and installation company operating in the commercial, industrial, and institutional building space.",
          "The company is totally debt-free. In 27 years, it has increased sales to more than 10 times first-year sales, accomplished without ever taking on debt and while providing profits in each of the 27 years in business.",
          "For the new owners, the seller provides the option to expand into any chosen geographic market outside Indiana without restrictions. The seller will provide new ownership with a profitable, debt-free company with unlimited growth options.",
          "A barn can be leased if interested for storage. The office is not available because it is run from the seller's personal residence.",
        ],
        bullets: [
          "Status: Under Contract",
          "Industry: Other Service Businesses",
          "Location: Central Indiana",
          "Listing ID: 8012-00018",
          "Cash Flow: $267,747",
          "Price: $700,000",
        ],
      },
      {
        title: "Official search filters",
        paragraphs: [
          "The official listings page includes search filters for industry, location, price, cash flow, featured status, year established, type of location, listing ID, agents, and sorting controls.",
          "Available listing IDs shown on the official page include 8012-00018, 8012-00010, 8012-00014, 8012-00017, and 85979036.",
        ],
      },
      {
        title: "Full Florida database",
        paragraphs: [
          "If the office listings are not of interest, Jump International invites buyers to search the full Florida database from the listings page.",
        ],
      },
    ],
    cta: { label: "Request Listing Details", href: "/contact" },
  },
  {
    slug: "florida-businesses",
    eyebrow: "Florida Listings",
    title: "All business for Sale in Florida",
    description:
      "A Florida-focused search path for acquisition opportunities by industry, location, price, cash flow, and buyer criteria.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Search support for Florida and regional opportunities",
        paragraphs: [
          "The official listings search includes filters for industry, location, price, cash flow, featured status, year established, type of location, listing ID, agents, and sorting controls.",
          "Qualified buyers can register their acquisition criteria so Jump International can route appropriate opportunities and updates.",
        ],
      },
    ],
    cta: { label: "Buyer Registration", href: "/buyer-registration" },
  },
  {
    slug: "recent-transactions",
    eyebrow: "Recent Transactions",
    title: "Sold businesses that show real transaction experience",
    description:
      "Completed sales across auto repair, construction, dry cleaning, pool service, retail, and other service businesses.",
    image:
      "https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "Representative completed and sold transactions",
        paragraphs: [
          "The official Recent Transactions page highlights completed sales across auto glass, roofing, dry cleaning, pool service, retail camera services, and other service businesses.",
          "These examples show the range of businesses represented by Jump International and the importance of industry-specific preparation.",
        ],
      },
      {
        title: "Auto Glass Repair & Installation with Real Estate",
        paragraphs: [
          "This sold transaction included two businesses sold as a package. The commercial condominium where the businesses are located was also available for lease or sale.",
          "The business specializes in convenient on-site auto glass repair and replacement services including windshield chip repair, windshield crack repair, windshield replacement, side and rear window replacement, plus a second business that sells, installs, and repairs windshield cameras.",
          "The businesses were fully staffed with 12 employees and a fleet of 7 vehicles, offering premium auto glass services across Tampa, St. Petersburg, Pinellas Park, Sarasota, Clearwater, Brandon, Palm Harbor, Lakeland, Jacksonville, Orange Park, and surrounding areas.",
        ],
        bullets: [
          "Industry: Auto Repair and Service Shops",
          "Location: Pinellas County",
          "Listing ID: 8012-00010",
          "Cash Flow: $1,671,462",
        ],
      },
      {
        title: "Roofing Business For Sale",
        paragraphs: [
          "A 35-year roofing business with strong cash flow, full staffing, work vehicles, and trailers. The seller was retiring and had a strong reputation in the industry, with a superintendent and crew supervisors overseeing jobs.",
        ],
        bullets: ["Location: Pinellas County, Florida", "Listing ID: 85979036", "Cash Flow: $472,000"],
      },
      {
        title: "Dry Cleaners with Multiple Locations",
        paragraphs: [
          "Established for nearly fifty years with several Suncoast locations, this full-service dry-cleaning operation included two vans and one plant where all cleaning was performed. Other locations were drop-off and pick-up only.",
          "The business offered expansion potential into route service, pick-up and drop-off, wash and fold services, hospitality, restaurant, hotel, and uniform cleaning.",
        ],
        bullets: ["Location: Manatee County", "Listing ID: 8012-00017", "Cash Flow: $153,065"],
      },
      {
        title: "Pool Service and Repair Business",
        paragraphs: [
          "A professional full-service pool cleaning and maintenance company offering weekly maintenance, repairs, resurfacing, remodeling, heat pump installation, equipment pad installation, tile work, deck painting, acid wash, green-to-clean, new construction start-ups, leak detection, and automation installations.",
          "The business was fully staffed and owned 10 service vehicles, each supplied with equipment needed to perform duties. It experienced accelerated growth through acquisition and a reputation for outstanding service.",
        ],
        bullets: ["Location: Pinellas County, Florida", "Listing ID: 8012-00001", "Cash Flow: $235,109"],
      },
      {
        title: "Camera Business with 29 year History",
        paragraphs: [
          "This organized camera business had a 29-year history, no county competition, low rent, and no employees beyond the husband-and-wife ownership team. The husband was willing to stay onboard as needed for a smooth transition.",
          "Products and services included cameras, lenses, flashes, bags, batteries and chargers, binoculars, accessories, darkroom supplies, warranties, studio lighting, tripods, used equipment, video transfers, camera and lens repairs, photo restorations, reprints, enlargements, and film developing.",
        ],
        bullets: ["Location: Pasco County, Florida", "Listing ID: 8012-00014", "Cash Flow: $109,133"],
      },
    ],
  },
  {
    slug: "contact",
    eyebrow: "Contact",
    title: "Contact Jump International Business Brokers",
    description:
      "Reach out for confidential guidance about buying, selling, valuation, listings, registration, and business transfer questions.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=85",
    sections: [
      {
        title: "We always want to hear from you",
        paragraphs: [
          "At Jump International Business Brokers, the team always wants to hear from visitors and get feedback.",
          "For more information on how Jump International helps business intermediaries, buyers, and sellers, use the contact form, schedule a call, or call the toll-free number.",
          "Address: 5225 Tech Data Dr, Fl 2, Clearwater, FL 33760.",
          "Office: 1-800-314-1365. Mobile: 727-554-6569. Email: info@JumpInternationalBusinessBrokers.com.",
          "Jump International Business Brokers is designed to boost sales and improve the operations of your business. The goal is to provide exceptional services at a tremendous price point and help clients take advantage of the firm's network.",
        ],
        bullets: [
          "Buying a business",
          "Selling a business",
          "Business valuation",
          "Listings and registration questions",
          "Weekly buyer and seller information",
        ],
      },
    ],
    cta: { label: "Go to Contact Form", href: "/#contact" },
  },
];

export function getSitePage(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}
