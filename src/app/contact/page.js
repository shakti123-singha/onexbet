export const metadata = {
  title: 'Contact 1xBet – Customer Support, Live Chat & Email',
  description: 'Contact 1xBet customer support for account, payment, promotion, game and technical assistance. Get help through 24/7 live chat and email support.',
  alternates: {
    canonical: '/contact', 
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/images/1xbet-.png',
    
  },
  openGraph: {
    title: 'Contact Us | 1x Bet Support',
    description: 'Need help? Contact 1x Bet support via Email, Live Chat, or Phone.',
    url: 'https://www.yourdomain.com/contact',
    siteName: '1x Bet',
    type: 'website',
  },
};



'use client';

import Image from 'next/image';

export default function Contact() {
  const contactOptions = [
    {
      title: "Email Support",
      icon: "📧",
      image: "/images/EMAIL SUPORT.jpg",
      desc: "For general enquiries, assistance with your account, or technical support, send us a message.",
      detail: "support@apexbet.com",
      link: "mailto:support@apexbet.com",
      actionText: "Send an Email"
    },
    {
      title: "Live Chat",
      icon: "💬",
      image: "/images/live chat .jpg",
      desc: "Need quick help? Our Live Chat tool joins you with a support representative, for quick answers, to whatever you're facing.",
      detail: "Availability: 24 Hours a Day, 7 Days a Week",
      link: "#",
      actionText: "Start Live Chat"
    },
    {
      title: "Phone Support",
      icon: "📱",
      image: "/images/PHONE SUPPORT.jpg",
      desc: "Want to talk directly with our customer service representatives for account matters and more.",
      detail: "+1 (000) 000-0000",
      link: "tel:+10000000000",
      actionText: "Call Us Now"
    }
  ];

  const scheduleData = [
    { service: "Live Chat", availability: "24/7" },
    { service: "Email Support", availability: "24/7" },
    { service: "Phone Support", availability: "Monday – Sunday" },
    { service: "Technical Support", availability: "24/7" }
  ];

  

  return (
    <>
   
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 space-y-10 text-slate-300">
        
     
        <header className="text-center space-y-4 max-w-3xl mx-auto border-b border-slate-800 pb-8">
          <h1 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
            Contact Us: <span className="text-orange-500">We're Here to Help</span>
          </h1>
          <p className="text-xs md:text-sm leading-relaxed text-slate-300">
            At 1x Bet, we really do value each customer and we are focused on giving you prompt, cordial and professional support, like you'd expect. If you have any questions about your account, deposits and withdrawals, promotions, game rules, or technical hiccups, our support team will be right there to help you out.
          </p>
          <p className="text-xs md:text-sm font-semibold text-orange-400">
            Our mission is to make sure every player can have a smooth, secure and also enjoyable time on our platform.
          </p>
        </header>

      
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-white italic border-l-4 border-orange-500 pl-3">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((item, index) => (
              <article 
                key={index} 
                className="bg-[#1a2b4c] border border-slate-700/80 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-orange-500/80 transition duration-300 shadow-lg"
              >
                <div>
                 
                  <div className="relative w-full aspect-[3/2] overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                    <Image 
                      src={item.image.trim()} 
                      alt={item.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain group-hover:scale-105 transition duration-500"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    {item.icon && (
                      <div className="absolute top-3 left-3 bg-[#0e182e]/90 text-orange-500 text-lg p-2 rounded-lg border border-slate-700 z-10">
                        {item.icon}
                      </div>
                    )}
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                    <p className="text-xs font-bold text-orange-400 pt-1">{item.detail}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <a 
                    href={item.link} 
                    aria-label={`${item.actionText} for ${item.title}`}
                    className="block w-full text-center bg-slate-800 hover:bg-orange-500 text-white text-xs font-bold py-2.5 rounded-lg transition duration-300"
                  >
                    {item.actionText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-6 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-extrabold text-white border-b border-slate-700 pb-3">
                Customer Support Times
              </h3>
              <p className="text-xs text-slate-300 my-3">
                Our dedicated team of 1x Bet is available to help you whenever you need assistance.
              </p>
              <div className="overflow-x-auto rounded-lg border border-slate-700/80 mt-4">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-[#0e182e] text-orange-400 font-bold uppercase border-b border-slate-700">
                    <tr>
                      <th scope="col" className="py-3 px-4">Service</th>
                      <th scope="col" className="py-3 px-4 text-right">Availability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {scheduleData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#1a2b4c]/80 transition">
                        <td className="py-3 px-4 font-semibold text-slate-200">{row.service}</td>
                        <td className="py-3 px-4 text-right font-bold text-orange-400">{row.availability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-extrabold text-white border-b border-slate-700 pb-3">
              Send Us a Message
            </h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="user-name" className="block text-xs font-bold text-slate-300 mb-1">Your Name</label>
                <input 
                  id="user-name"
                  type="text" 
                  placeholder="Enter your name" 
                  required
                  className="w-full bg-[#0e182e] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="user-email" className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                <input 
                  id="user-email"
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-[#0e182e] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="user-message" className="block text-xs font-bold text-slate-300 mb-1">Message</label>
                <textarea 
                  id="user-message"
                  rows={3} 
                  placeholder="How can we help you?" 
                  required
                  className="w-full bg-[#0e182e] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs py-3 rounded-lg transition duration-300 shadow-md uppercase tracking-wider"
              >
                Submit Query
              </button>
            </form>
          </div>

        </div>

      </section>
    </>
  );
}