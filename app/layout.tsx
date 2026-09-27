import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

import type { Metadata } from "next";

import { Barlow } from "next/font/google";

import "./globals.css";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitLog | Workout Libray",
  description: "Explore Workouts, plan today's training , and save exercises for later. ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${barlow.className} min-h-full flex flex-col`}>
        <Navbar />

        {children}

        <Footer />

        <Toaster />
        
      </body>

    </html>
  );
}