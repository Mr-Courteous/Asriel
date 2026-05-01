import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asriel Foundation | Christian Non-Profit Education Ministry",
  description:
    "Asriel Foundation is a 501(c)(3) non-profit providing scholarships, STEM training, mentorship, and discipleship to underprivileged students in Richmond, Texas.",
  keywords: [
    "non-profit",
    "education",
    "scholarship",
    "STEM",
    "mentorship",
    "Christian ministry",
    "Richmond Texas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${inter.variable} font-body bg-cream text-navy antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}