import type { Metadata } from "next";
import NoiseOverlay from "@/components/Background/NoiseOverlay";
import Navigation from "@/components/Navigation";
import SplashScreen from "@/components/SplashScreen";
import Footer from "@/components/Footer";

import "@/app/globals.css";
import "@/app/fonts.css";

export const metadata: Metadata = {
  title: "Fadil Hisyam - Portfolio",
  description: "Hello, I'm Fadil Hisyam, bridging code & creativity Front end developer & UI/UX designer with 1+ year of real-world experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="root" className="relative w-full h-full bg-black overflow-x-hidden">
        <SplashScreen />
        <Navigation />
        {children}
        <Footer />
        <NoiseOverlay />
      </body>
    </html>
  );
}
