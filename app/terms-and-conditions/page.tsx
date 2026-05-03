import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "Cookies",
    paragraphs: [
      "We employ the use of cookies. By accessing Jump International Business Brokers, you agreed to use cookies in agreement with the Jump International Business Brokers's Privacy Policy.",
      "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
    ],
  },
  {
    title: "License",
    paragraphs: [
      "Unless otherwise stated, Jump International Business Brokers and/or its licensors own the intellectual property rights for all material on Jump International Business Brokers. All intellectual property rights are reserved. You may access this from Jump International Business Brokers for your own personal use subjected to restrictions set in these terms and conditions.",
      "You must not:",
    ],
    bullets: [
      "Republish material from Jump International Business Brokers",
      "Sell, rent or sub-license material from Jump International Business Brokers",
      "Reproduce, duplicate or copy material from Jump International Business Brokers",
      "Redistribute content from Jump International Business Brokers",
    ],
    after: [
      "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Jump International Business Brokers does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Jump International Business Brokers, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.",
      "To the extent permitted by applicable laws, Jump International Business Brokers shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
      "Jump International Business Brokers reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.",
      "You warrant and represent that:",
    ],
    afterBullets: [
      "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.",
      "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party.",
      "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy.",
      "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
    ],
    closing:
      "You hereby grant Jump International Business Brokers a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.",
  },
  {
    title: "Hyperlinking to our Content",
    paragraphs: [
      "The following organizations may link to our Website without prior written approval:",
    ],
    bullets: [
      "Government agencies",
      "Search engines",
      "News organizations",
      "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses",
      "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site",
    ],
    after: [
      "These organizations may link to our home page, to publications or to other Website information so long as the link is not in any way deceptive, does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services, and fits within the context of the linking party's site.",
      "We may consider and approve other link requests from commonly-known consumer and/or business information sources, dot.com community sites, associations or other groups representing charities, online directory distributors, internet portals, accounting, law and consulting firms, educational institutions and trade associations.",
      "We will approve link requests from these organizations if we decide that the link would not make us look unfavorably to ourselves or to our accredited businesses, the organization does not have any negative records with us, the benefit to us from the visibility of the hyperlink compensates the absence of Jump International Business Brokers, and the link is in the context of general resource information.",
      "Approved organizations may hyperlink to our Website by use of our corporate name, by use of the uniform resource locator being linked to, or by use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.",
      "No use of Jump International Business Brokers's logo or other artwork will be allowed for linking absent a trademark license agreement.",
    ],
  },
  {
    title: "iFrames",
    paragraphs: [
      "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.",
    ],
  },
  {
    title: "Content Liability",
    paragraphs: [
      "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
    ],
  },
  {
    title: "Your Privacy",
    paragraphs: ["Please read Privacy Policy."],
  },
  {
    title: "Reservation of Rights",
    paragraphs: [
      "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.",
    ],
  },
  {
    title: "Removal of links from our website",
    paragraphs: [
      "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.",
      "We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.",
    ],
  },
  {
    title: "Disclaimer",
    paragraphs: [
      "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:",
    ],
    bullets: [
      "Limit or exclude our or your liability for death or personal injury",
      "Limit or exclude our or your liability for fraud or fraudulent misrepresentation",
      "Limit any of our or your liabilities in any way that is not permitted under applicable law",
      "Exclude any of our or your liabilities that may not be excluded under applicable law",
    ],
    after: [
      "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer are subject to the preceding paragraph and govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.",
      "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.",
    ],
  },
];

export const metadata = {
  title: "Terms and Conditions | Jump International Business Brokers",
  description:
    "Official terms and conditions for Jump International Business Brokers.",
};

export default function TermsAndConditionsPage() {
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
            href="/#contact"
            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section
        className="bg-cover bg-center px-4 py-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6, 18, 13, 0.92), rgba(6, 18, 13, 0.55)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Home › Terms and Conditions
          </p>
          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-6xl">
            Terms and Conditions
          </h1>
        </div>
      </section>

      <section className="px-4 py-20">
        <article className="mx-auto max-w-5xl rounded-[2.5rem] border border-neutral-200 bg-white p-7 shadow-2xl shadow-neutral-950/6 md:p-10">
          <div className="space-y-5 text-base leading-8 text-neutral-700">
            <h2 className="text-3xl font-bold text-emerald-700">Terms and Conditions</h2>
            <p>Welcome to Jump International Business Brokers!</p>
            <p>
              These terms and conditions outline the rules and regulations for the use of
              Jump International Business Brokers&apos;s Website, located at
              JumpInternationalBusinessBrokers.com.
            </p>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do
              not continue to use Jump International Business Brokers if you do not agree
              to take all of the terms and conditions stated on this page.
            </p>
            <p>
              The following terminology applies to these Terms and Conditions, Privacy
              Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and
              &quot;Your&quot; refers to you, the person log on this website and compliant to the
              Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
              &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both
              the Client and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our assistance
              to the Client in the most appropriate manner for the express purpose of
              meeting the Client&apos;s needs in respect of provision of the Company&apos;s stated
              services, in accordance with and subject to, prevailing law of Netherlands.
              Any use of the above terminology or other words in the singular, plural,
              capitalization and/or he/she or they, are taken as interchangeable and
              therefore as referring to same.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-emerald-700">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-neutral-700">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.after && (
                  <div className="mt-5 space-y-4 text-base leading-8 text-neutral-700">
                    {section.after.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.afterBullets && (
                  <ul className="mt-5 space-y-3">
                    {section.afterBullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-neutral-700">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.closing && (
                  <p className="mt-5 text-base leading-8 text-neutral-700">{section.closing}</p>
                )}
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
