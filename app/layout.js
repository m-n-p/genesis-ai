import "./globals.css";
import { Roboto } from "next/font/google";

import App from "./app";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({ weight: ["400", "500", "700"], preload: false });

export const metadata = {
  title: "Market Universe: Real-Time Strategy Insights at Your Fingertips",
  description:
    "Experience the power of Market Universe on the go. Our app delivers up-to-the-minute market intelligence and customized strategies for sectors from EV to Aerospace. Drive growth and outpace competition with us.",
  keywords: ["market universe", "Strategy intelligence"],
  openGraph: {
    title: "Market Universe: Plan Business Growth with Confidence",
    description:
      "Introducing Market Universe—where industry leaders connect with cutting-edge market strategies and insights. Make informed decisions swiftly, wherever you are, in any niche industry from FoodTech to Semiconductors.",
    url: "https://universe.marketunwinded.com/",
    siteName: "Market Universe",
    images: [
      {
        url: "https://res.cloudinary.com/dqicwkkcp/image/upload/v1705689846/organisation/Market_Universe_Market_Unwinded-01_1_xmqbvp.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/dqicwkkcp/image/upload/v1705689846/organisation/Market_Universe_Market_Unwinded-01_1_xmqbvp.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "Market Universe: Plan Business Growth with Confidence",
    title: "Market Universe: Plan Business Growth with Confidence",
    description:
      "Introducing Market Universe—where industry leaders connect with cutting-edge market strategies and insights. Make informed decisions swiftly, wherever you are, in any niche industry from FoodTech to Semiconductors.",
    images: [
      "https://res.cloudinary.com/dqicwkkcp/image/upload/v1705689846/organisation/Market_Universe_Market_Unwinded-01_1_xmqbvp.jpg",
    ], // Must be an absolute URL
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body className={roboto.className}>
        <App>{children}</App>
        <SpeedInsights />
      </body>
    </html>
  );
}
