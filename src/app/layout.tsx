import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paulette's France Trip 2025",
  description: "Created by Nolan Betts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-8 py-6 border-b mb-8 relative">
          {/* Hamburger for mobile */}
          <button
            className="sm:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          {/* Nav links */}
          <div
            className={`flex-col sm:flex-row flex sm:static w-full sm:w-auto bg-black sm:bg-transparent z-20 transition-all duration-200 ${
              navOpen ? 'flex' : 'hidden sm:flex'
            }`}
          >
            <Link href="/" className="font-semibold hover:underline px-4 py-2 sm:p-0">Home</Link>
            <Link href="/travelers" className="font-semibold hover:underline px-4 py-2 sm:p-0">Travelers</Link>
            <Link href="/map" className="font-semibold hover:underline px-4 py-2 sm:p-0">Map</Link>
            <Link href="/hotels" className="font-semibold hover:underline px-4 py-2 sm:p-0">Hotels</Link>
            <Link href="/travel-times" className="font-semibold hover:underline px-4 py-2 sm:p-0">Travel Times</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
