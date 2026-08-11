'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-[#0e182e] border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Desktop Navigation */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/1xbet-.png"
              alt="1XBET Logo" 
              width={130} 
              height={40} 
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-xs font-bold tracking-wide uppercase text-slate-300">
            <Link href="/" className="hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/games" className="hover:text-orange-500 transition">
              Games at 1xbet
            </Link>
            <Link href="/bets" className="hover:text-orange-500 transition">
              Types of bets
            </Link>
            <Link href="/termandconditions" className="hover:text-orange-500 transition">
              Terms and Conditions
            </Link>
            <Link href="/contact" className="hover:text-orange-500 transition">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Action Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 text-sm font-semibold">
          {/* Action Buttons (Desktop & Mobile) */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-5 py-2 rounded-md transition shadow-md text-xs sm:text-sm">
            REGISTER
          </button>
          <button className="bg-[#1b2a47] hover:bg-[#25395f] text-white px-3 sm:px-5 py-2 rounded-md transition border border-slate-700 text-xs sm:text-sm">
            LOGIN
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-500" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#0a1223] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-bold tracking-wide uppercase text-slate-200 hover:text-orange-500 py-2 border-b border-slate-800/50"
          >
            Home
          </Link>
          <Link 
            href="/games" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-bold tracking-wide uppercase text-slate-200 hover:text-orange-500 py-2 border-b border-slate-800/50"
          >
            Games at 1xbet
          </Link>
          <Link 
            href="/bets" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-bold tracking-wide uppercase text-slate-200 hover:text-orange-500 py-2 border-b border-slate-800/50"
          >
            Types of bets
          </Link>
          <Link 
            href="/termandconditions" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-bold tracking-wide uppercase text-slate-200 hover:text-orange-500 py-2 border-b border-slate-800/50"
          >
            Terms and Conditions
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-bold tracking-wide uppercase text-slate-200 hover:text-orange-500 py-2"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}