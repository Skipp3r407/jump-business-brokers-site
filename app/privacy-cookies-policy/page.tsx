import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const privacySections = [
  {
    title: "Automatic collection of information",
    paragraphs: [
      "Our top priority is customer data security and, as such, we exercise the no logs policy. We may process only minimal user data, only as much as it is absolutely necessary to maintain the Website and Services.",
      "Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding the usage and traffic of the Website and Services. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system.",
    ],
  },
  {
    title: "Collection of personal information",
    paragraphs: [
      "You can access and use the Website and Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual.",
      "If, however, you wish to use some of the features on the Website, you may be asked to provide certain Personal Information, for example your name and e-mail address. We receive and store any information you knowingly provide to us when you fill any online forms on the Website.",
      "When required, this information may include the following:",
    ],
    bullets: [
      "Personal details such as name, country of residence, etc.",
      "Contact information such as email address, address, etc.",
    ],
    after: [
      "Some of the information we collect is directly from you via the Website and Services. However, we may also collect Personal Information about you from other sources such as public databases and our joint marketing partners.",
      "You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the Website. Users who are uncertain about what information is mandatory are welcome to contact us.",
    ],
  },
  {
    title: "Use and processing of collected information",
    paragraphs: [
      "In order to make the Website and Services available to you, or to meet a legal obligation, we need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services.",
      "Any of the information we collect from you may be used for the following purposes:",
    ],
    bullets: [
      "Send marketing and promotional communications",
      "Respond to inquiries and offer support",
      "Request user feedback",
      "Deliver targeted advertising",
      "Run and operate the Website and Services",
    ],
    after: [
      "Processing your Personal Information depends on how you interact with the Website and Services, where you are located in the world and if one of the following applies: you have given your consent for one or more specific purposes; provision of information is necessary for the performance of an agreement with you; processing is necessary for compliance with a legal obligation; processing is related to a task carried out in the public interest; or processing is necessary for the purposes of legitimate interests pursued by us or by a third party.",
      "Under some legislations we may be allowed to process information until you object to such processing by opting out, without having to rely on consent or any other legal basis. We will be happy to clarify the specific legal basis that applies to the processing.",
    ],
  },
  {
    title: "Disclosure of information",
    paragraphs: [
      "Depending on the requested Services or as necessary to complete any transaction or provide any service you have requested, we may share your information with your consent with our trusted third parties that work with us, any other affiliates and subsidiaries we rely upon to assist in the operation of the Website and Services available to you.",
      "We do not share Personal Information with unaffiliated third parties. Service providers are not authorized to use or disclose your information except as necessary to perform services on our behalf or comply with legal requirements.",
      "We will disclose any Personal Information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.",
      "In the event we go through a business transition, such as a merger or acquisition by another company, or sale of all or a portion of its assets, your user account and Personal Information will likely be among the assets transferred.",
    ],
  },
  {
    title: "Retention of information",
    paragraphs: [
      "We will retain and use your Personal Information for the period necessary to comply with our legal obligations, resolve disputes, and enforce our agreements unless a longer retention period is required or permitted by law.",
      "We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted.",
    ],
  },
  {
    title: "The rights of users",
    paragraphs: [
      "You may exercise certain rights regarding your information processed by us. In particular, you have the right to withdraw consent where you have previously given your consent; object to processing; learn if information is being processed by us; verify accuracy and ask for updates or corrections; restrict processing under certain circumstances; obtain erasure of Personal Information under certain circumstances; and receive your information in a structured, commonly used and machine readable format where applicable.",
    ],
  },
  {
    title: "North Carolina privacy rights",
    paragraphs: [
      "In addition to the rights explained in this Policy, North Carolina residents who provide Personal Information to obtain products or services for personal, family, or household use are entitled to request and obtain from us, once a calendar year, information about the Personal Information we shared, if any, with other businesses for marketing uses.",
      "If applicable, this information would include the categories of Personal Information and the names and addresses of those businesses with which we shared such personal information for the immediately prior calendar year. To obtain this information please contact us.",
    ],
  },
  {
    title: "How to exercise these rights",
    paragraphs: [
      "Any requests to exercise your rights can be directed to Jump International Business Brokers through the contact details provided in this document. Please note that we may ask you to verify your identity before responding to such requests.",
      "Your request must provide sufficient information that allows us to verify that you are the person you are claiming to be or that you are the authorized representative of such person. We cannot respond to your request or provide you with Personal Information unless we first verify your identity or authority to make such a request and confirm that the Personal Information relates to you.",
    ],
  },
  {
    title: "Privacy of children",
    paragraphs: [
      "We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Website and Services.",
      "We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Website and Services without their permission.",
      "If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Website and Services, please contact us.",
    ],
  },
  {
    title: "Do Not Track signals",
    paragraphs: [
      "Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website.",
      "The Website and Services do not track its visitors over time and across third party websites. However, some third party sites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you.",
    ],
  },
  {
    title: "Advertisements",
    paragraphs: [
      "We may permit certain third party companies to help us tailor advertising that we think may be of interest to users and to collect and use other data about user activities on the Website. These companies may deliver ads that might place cookies and otherwise track user behavior.",
    ],
  },
  {
    title: "Affiliates",
    paragraphs: [
      "We may disclose information about you to our affiliates for the purpose of being able to offer you related or additional products and services. Any information relating to you that we provide to our affiliates will be treated by those affiliates in accordance with the terms of this Policy.",
    ],
  },
  {
    title: "Email marketing",
    paragraphs: [
      "We offer electronic newsletters to which you may voluntarily subscribe at any time. We are committed to keeping your e-mail address confidential and will not disclose your email address to any third parties except as allowed in the information use and processing section or for the purposes of utilizing a third party provider to send such emails.",
      "In compliance with the CAN-SPAM Act, all e-mails sent from us will clearly state who the e-mail is from and provide clear information on how to contact the sender. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us.",
    ],
  },
  {
    title: "Links to other resources",
    paragraphs: [
      "The Website and Services contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties.",
      "We encourage you to be aware when you leave the Website and Services and to read the privacy statements of each and every resource that may collect Personal Information.",
    ],
  },
  {
    title: "Information security",
    paragraphs: [
      "We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in its control and custody.",
      "However, no data transmission over the Internet or wireless network can be guaranteed. While we strive to protect your Personal Information, you acknowledge that there are security and privacy limitations of the Internet beyond our control.",
    ],
  },
  {
    title: "Data breach",
    paragraphs: [
      "In the event we become aware that the security of the Website and Services has been compromised or users Personal Information has been disclosed to unrelated third parties as a result of external activity, including security attacks or fraud, we reserve the right to take reasonably appropriate measures.",
      "In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the user as a result of the breach or if notice is otherwise required by law. When we do, we will send you an email.",
    ],
  },
  {
    title: "Changes and amendments",
    paragraphs: [
      "We reserve the right to modify this Policy or its terms relating to the Website and Services from time to time in our discretion and will notify you of any material changes to the way in which we treat Personal Information.",
      "Any updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy will constitute your consent to those changes.",
    ],
  },
  {
    title: "Acceptance of this policy",
    paragraphs: [
      "You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services.",
    ],
  },
  {
    title: "Contacting us",
    paragraphs: [
      "If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to info@JumpInternationalBusinessBrokers.com.",
      "This document was last updated on January 22, 2021.",
    ],
  },
];

export const metadata = {
  title: "Privacy & Cookies Policy | Jump International Business Brokers",
  description:
    "Official privacy and cookies policy for Jump International Business Brokers.",
};

export default function PrivacyCookiesPolicyPage() {
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
            href="/terms-and-conditions"
            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Terms
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
            Home › Privacy & Cookies Policy
          </p>
          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-6xl">
            Privacy & Cookies Policy
          </h1>
        </div>
      </section>

      <section className="px-4 py-20">
        <article className="mx-auto max-w-5xl rounded-[2.5rem] border border-neutral-200 bg-white p-7 shadow-2xl shadow-neutral-950/6 md:p-10">
          <div className="space-y-5 text-base leading-8 text-neutral-700">
            <h2 className="text-3xl font-bold text-emerald-700">Privacy policy</h2>
            <p>
              This privacy policy describes how the personally identifiable information you
              may provide on the JumpInternationalBusinessBrokers.com website and any of
              its related products and services is collected, protected and used.
            </p>
            <p>
              It also describes the choices available to you regarding our use of your
              Personal Information and how you can access and update this information. This
              Policy is a legally binding agreement between you and Jump International
              Business Brokers.
            </p>
            <p>
              By accessing and using the Website and Services, you acknowledge that you
              have read, understood, and agree to be bound by the terms of this Agreement.
              This Policy does not apply to the practices of companies that we do not own
              or control, or to individuals that we do not employ or manage.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {privacySections.map((section) => (
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
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
