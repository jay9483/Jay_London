import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prithvi Jayaprakash | Business Analyst & Data Specialist",
  description: "Portfolio of Prithvi Jayaprakash, a results-driven Business Analyst specialising in process automation and data visualisation.",
  metadataBase: new URL("https://jaypru.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://jaypru.vercel.app",
    title: "Prithvi Jayaprakash | Business Analyst & Data Specialist",
    description: "Portfolio of Prithvi Jayaprakash, a results-driven Business Analyst specialising in process automation and data visualisation.",
    siteName: "Prithvi Jayaprakash Portfolio",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Prithvi Jayaprakash Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prithvi Jayaprakash | Business Analyst & Data Specialist",
    description: "Portfolio of Prithvi Jayaprakash, a results-driven Business Analyst specialising in process automation and data visualisation.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
