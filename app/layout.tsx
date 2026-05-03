import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jumpinternationalbusinessbrokers.com"),
  title: "Business Brokers | Buy & Sell Businesses | Jump International",
  description:
    "Professional business brokerage services helping you buy, sell, and value businesses with confidence.",
  icons: {
    icon: "/images/favlogo.png",
    shortcut: "/images/favlogo.png",
    apple: "/images/favlogo.png",
  },
  openGraph: {
    title: "Business Brokers | Buy & Sell Businesses | Jump International",
    description:
      "Professional business brokerage services helping you buy, sell, and value businesses with confidence.",
    images: ["/images/favlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
