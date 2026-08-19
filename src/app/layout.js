// src/app/layout.js
import './globals.css';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 
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
  
        <Header />

      
        <main className="flex-grow">
          {children}
        </main>

       
        <Footer/>
      </body>
    </html>
  );
}                                        