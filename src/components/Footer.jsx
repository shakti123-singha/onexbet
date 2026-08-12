'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Send, ArrowUp, ShieldCheck, HelpCircle } from 'lucide-react';

export default function WebsiteFooter() {
  const [userMessage, setUserMessage] = useState('');

 
  const whatsappNumber = '1234567890'; 

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;
    const encodedMsg = encodeURIComponent(userMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
    setUserMessage('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
   
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-[#0e182e] text-white text-xs font-semibold px-3 py-2 rounded-xl border border-emerald-500/30 shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Need Help? Chat on WhatsApp
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative group p-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-7 h-7 fill-white stroke-emerald-500" />
        </a>
      </div>

    
      <footer className="bg-[#0e182e] border-t border-slate-800 text-slate-400 pt-12 pb-8 px-4 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto space-y-10">
          
         
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#13223f] border border-slate-800 p-6 rounded-2xl">
            <div className="lg:col-span-6 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <MessageCircle className="w-4 h-4" /> WhatsApp Support
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white italic">
                Have questions? Message us directly
              </h3>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleWhatsAppSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-[#0e182e] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm shrink-0 transition"
                >
                  <span>Send</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

       
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs md:text-sm">
            
          
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs tracking-wider uppercase border-b border-slate-800 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-orange-500 transition">Home</Link></li>
                <li><Link href="/games" className="hover:text-orange-500 transition">Games at 1xbet</Link></li>
                <li><Link href="/bets" className="hover:text-orange-500 transition">Types of bets</Link></li>
                <li><Link href="/termandconditions" className="hover:text-orange-500 transition">Terms & Conditions</Link></li>
                <li><Link href="/contact" className="hover:text-orange-500 transition">Contact Us</Link></li>
              </ul>
            </div>

           
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs tracking-wider uppercase border-b border-slate-800 pb-2">
                Popular Markets
              </h4>
              <ul className="space-y-2">
                <li><Link href="/bets" className="hover:text-orange-500 transition">Bet Slip Sale</Link></li>
                <li><Link href="/bets" className="hover:text-orange-500 transition">Accumulators</Link></li>
                <li><Link href="/bets" className="hover:text-orange-500 transition">Live Sports</Link></li>
                <li><Link href="/games" className="hover:text-orange-500 transition">Live Casino</Link></li>
              </ul>
            </div>

           
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs tracking-wider uppercase border-b border-slate-800 pb-2">
                Support
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Licensed & Secure</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <HelpCircle className="w-4 h-4 text-orange-400" />
                  <span>24/7 Assistance</span>
                </li>
                <li><Link href="/contact" className="hover:text-orange-500 transition">Customer Care</Link></li>
              </ul>
            </div>

            {/* Action */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs tracking-wider uppercase border-b border-slate-800 pb-2">
                Back To Top
              </h4>
              <button
                onClick={scrollToTop}
                className="w-full bg-[#13223f] hover:bg-[#1b2a47] border border-slate-700 text-slate-200 py-2.5 rounded-xl flex items-center justify-center gap-2 font-semibold transition"
              >
                <ArrowUp className="w-4 h-4 text-orange-500" />
                <span>Top</span>
              </button>
            </div>

          </div>

        
          <div className="border-t border-slate-800/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} 1XBET. All rights reserved.</p>
            <p>18+ | Play Responsibly</p>
          </div>

        </div>
      </footer>
    </>
  );
}