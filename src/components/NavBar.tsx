"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  const closeMenu = () => setNavOpen(false);

  return (
    <nav className="w-full flex flex-col sm:flex-row sm:justify-center sm:items-center py-6 border-b mb-8 relative">
      {/* Hamburger for mobile */}
      <button
        className="sm:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 z-30"
        aria-label="Toggle navigation menu"
        onClick={() => setNavOpen((open) => !open)}
      >
        {navOpen ? (
          // Close icon (X)
          <>
            <span className="block w-6 h-0.5 bg-white mb-1 transform rotate-45 translate-y-1"></span>
            <span className="block w-6 h-0.5 bg-white transform -rotate-45"></span>
          </>
        ) : (
          // Hamburger icon
          <>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </>
        )}
      </button>

      {/* Mobile menu overlay */}
      {navOpen && (
        <div 
          className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        />
      )}

      {/* Nav links */}
      <div
        className={`flex flex-col sm:flex-row items-center sm:static w-full sm:w-auto bg-black sm:bg-transparent z-20 transition-all duration-200 ${
          navOpen ? 'flex absolute top-full left-0 right-0 shadow-lg' : 'hidden sm:flex'
        }`}
      >
        <Link href="/" className="font-semibold hover:underline block w-full text-center py-2 sm:inline-block sm:w-auto sm:py-0 sm:mx-4" onClick={closeMenu}>Home</Link>
        <Link href="/travelers" className="font-semibold hover:underline block w-full text-center py-2 sm:inline-block sm:w-auto sm:py-0 sm:mx-4" onClick={closeMenu}>Travelers</Link>
        <Link href="/map" className="font-semibold hover:underline block w-full text-center py-2 sm:inline-block sm:w-auto sm:py-0 sm:mx-4" onClick={closeMenu}>Map</Link>
        <Link href="/hotels" className="font-semibold hover:underline block w-full text-center py-2 sm:inline-block sm:w-auto sm:py-0 sm:mx-4" onClick={closeMenu}>Hotels</Link>
        <Link href="/travel-times" className="font-semibold hover:underline block w-full text-center py-2 sm:inline-block sm:w-auto sm:py-0 sm:mx-4" onClick={closeMenu}>Travel Times</Link>
      </div>
    </nav>
  );
} 