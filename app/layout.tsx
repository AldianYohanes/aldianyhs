import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../shared/styles/globals.css";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aldianyhs.vercel.app"), // TODO: replace with the final domain
  title: { default: "Aldian Yohanes | Full-Stack Developer", template: "%s | Aldian Yohanes" },
  description:
    "Portfolio of Aldian Yohanes, a full-stack developer and student founder in Jakarta building software for healthcare and small business.",
  openGraph: {
    title: "Aldian Yohanes | Full-Stack Developer",
    description: "Projects, experience and contact for Aldian Yohanes.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0a1315" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <div className="aurora" aria-hidden />
        <div className="grain" aria-hidden />
        <Nav />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
