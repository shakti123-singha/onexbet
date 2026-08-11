// src/app/layout.js
import './globals.css';
import Header from '@/components/Header'; // Apne Header component ka correct path verify karein
import WebsiteFooter from '@/components/Footer'; // Apne Footer component ka correct path verify karein

export const metadata = {
  title: '1BETMAX - Best Odds & Live Casino',
  description: 'Online Sportsbook, Live Casino, Slots & Promotions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="bg-[#0b1426] text-white antialiased font-sans flex flex-col min-h-screen"
        suppressHydrationWarning={true}
      >
        {/* Persistent Header across all pages */}
        <Header />

        {/* Dynamic page content rendering */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Persistent Footer & WhatsApp Widget across all pages */}
        <WebsiteFooter />
      </body>
    </html>
  );
}