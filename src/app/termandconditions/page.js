'use client';
import { ShieldAlert, BookOpen, UserCheck, CheckCircle2, FileText, Coins,Table, DollarSign, RefreshCw,PieChart, RefreshCcw, Trash2, PlusCircle, SaveCheck} from 'lucide-react';
import Image from 'next/image';

export default function TermsAndConditions() {

     const bonusRules = [
    "Minimum deposit requirements",
    "Wagering requirements",
    "Expiration dates",
    "The sport or game suitable for the situation.",
    "Maximum withdrawal limits",
    "Other promotional conditions"
  ];

  const privacyTopics = [
    "Personal information collection",
    "Identity verification",
    "Payment information",
    "What do cookies and tracking technologies mean?",
    "Data security",
    "Protecting Customers' Rights to Personal Information"
  ];
  const securityResponsibilities = [
    "Monitoring account activity",
    "The deposit and withdrawal process is reviewed.",
    "Detecting suspicious transactions",
    "Preventing fraud",
    "Investigating security concerns",
    "Protecting customer accounts"
  ];

  const supportAreas = [
    "Account registration",
    "Login issues",
    "Deposits and withdrawals",
    "Betting questions",
    "Promotion enquiries",
    "Technical support",
    "Responsible gaming requests",
    "General information"
  ];

  const cancellationRules = [
    "The stake (wager) becomes invalid.",
    "Original stake restored in customer's account.",
    "There are no payouts dished out.",
    "If a selection was cancelled, then it will be decided on the grounds of the platform's betting policies."
  ];

  const regularTimeExclusions = [
    "Extra Time",
    "Overtime",
    "Penalty Shootouts",
    "Golden Goal periods",
    "Sudden Death periods",
    "Play after the end of regular time."
  ];

  const abbreviationsData = [
    { abbreviation: "CK", meaning: "Corner Kicks" },
    { abbreviation: "ACE", meaning: "Aces" },
    { abbreviation: "SO", meaning: "Sendings-Off" },
    { abbreviation: "PT", meaning: "Penalty Time" },
    { abbreviation: "YC", meaning: "Yellow Cards" },
    { abbreviation: "YRC", meaning: "Yellow & Red Cards" },
    { abbreviation: "MS", meaning: "Misses" },
    { abbreviation: "SOT", meaning: "Shots on Target" },
    { abbreviation: "OFF", meaning: "Offsides" },
    { abbreviation: "F", meaning: "Fouls" },
    { abbreviation: "SOG", meaning: "Shots on Goal" },
    { abbreviation: "EB", meaning: "Extra Bets" },
    { abbreviation: "S", meaning: "Series" },
    { abbreviation: "FT", meaning: "Successful Free Throws" },
    { abbreviation: "2P", meaning: "Successful 2-Point Field Goals" },
    { abbreviation: "3P", meaning: "Successful 3-Point Field Goals" },
    { abbreviation: "R", meaning: "Rebounds" },
    { abbreviation: "AST", meaning: "Assists" },
    { abbreviation: "TOV", meaning: "Turnovers" },
    { abbreviation: "BLK", meaning: "Blocks" },
    { abbreviation: "DF", meaning: "Double Faults" },
    { abbreviation: "PC", meaning: "Hit Post or Crossbar" },
    { abbreviation: "BS", meaning: "Blocked Shots" },
    { abbreviation: "C", meaning: "Checking" },
    { abbreviation: "I", meaning: "Icing" },
    { abbreviation: "WF", meaning: "Winning Face-Off" },
  ];
  const replacementExamples = [
    "Home Win > Draw",
    "Draw > Away Win",
    "Over Goals > Under Goals (as applicable)"
  ];
  return (
    <div>
    <section className="bg-[#121e36] border border-slate-800 rounded-2xl p-6 md:p-10 text-slate-300 space-y-8">
      
      {/* 1. Header Hero Banner */}
      <header className="relative bg-gradient-to-r from-[#1a2b4c] via-[#121e36] to-[#0e182e] border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-4 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white italic tracking-wide">
          Terms & <span className="text-orange-500">Conditions</span>
        </h1>

        <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          You've arrived at 1x Bet! The following General Terms and Definitions help clarify key terms and phrases in our Terms of Service. Use of our website, account and services are governed by our terms of use, and by accepting their use you agree that you have read, understood and accepted them.
        </p>
      </header>

      {/* 2. Overview Card */}
      <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-5 md:p-6 flex items-start gap-4 shadow-lg hover:border-orange-500/40 transition duration-300">
        <div className="p-2.5 bg-[#0e182e] border border-slate-700/80 rounded-lg text-orange-400 shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
          These definitions have been prepared as clarification and to provide consistency and meaning when interpreting the rights, responsibilities and obligations between 1x Bet and its customers.
        </p>
      </div>

      {/* 3. Customer Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Customer Definition Box */}
        <div className="lg:col-span-7 bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3 border-b border-slate-700/80 pb-3">
              <div className="p-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white italic">
                Customer
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed pt-1">
              A Customer is anyone who accesses the 1x Bet website, registers on the website or uses any services provided by it. In these Terms of Service, the expressions "Customer", "User", "You" and "Your" refer to the user of the website and its services.
            </p>
          </div>
        </div>

        {/* Compliance Notice Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0e182e] to-[#121e36] border border-slate-700/80 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Using 1x Bet implies that you're of legal betting age in your jurisdiction and agree to abide by all policies and rules of the platform.
            </p>
          </div>
        </div>

      </div>

    </section>

   
    <section className="bg-[#121e36] border border-slate-800 rounded-2xl p-6 md:p-10 text-slate-300 space-y-8">
      
      {/* 1. Terms of Service Section */}
      <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <header className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
          <div className="p-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
            Terms of <span className="text-orange-500">Service</span>
          </h1>
        </header>

        <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
          <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl">
            Terms of Service (ToS) lay out the lawful relationship between 1x Bet and its consumers. These terms describe the conditions for registering and betting on an account, deposit, withdrawal, promotions, dispute resolution, responsible gambling and how users use this platform.
          </p>
          <p className="p-2">
            You are hereby granted access to the website on the condition that you agree to adhere to these terms and any further conditions that may exist in relation to particular services and/or promotions to which you are offered the choice of access.
          </p>
        </div>
      </div>

      {/* 2. Bet Section */}
      <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <header className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
          <div className="p-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400">
            <Coins className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
            <span className="text-orange-500">Bet</span>
          </h2>
        </header>

        <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
          <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl">
            Bet is a type of wagering that is predominantly between a person and 1x Bet in anticipation of a future sporting event or gaming outcome. They act on each bet based on the odds and conditions that are valid at the time that the wager was accepted.
          </p>
          <p className="p-2">
            The winning is only determined by the success or failure of the event chosen - all winnings won are settled with the official 1x Bet rules and betting policies.
          </p>
        </div>
      </div>

    </section>
    {/* ----------------------------------------------------------------- */}
 

  
    <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 text-slate-300 space-y-12">
      
      {/* SECTION 1: BONUS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Animated Image Box (Left) */}
        <div className="lg:col-span-5 lg:sticky lg:top-6">
          <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900 aspect-[5/4]">
            <Image 
              src="/images/bonus.jpg" 
              alt="1x Bet Bonus Incentives" 
              width={500}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0e182e]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/50">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                1x Bet Promotional Rewards
              </span>
            </div>
          </div>
        </div>

        {/* Text Content (Right) */}
        <div className="lg:col-span-7 space-y-6">
          
          <header className="space-y-2 border-b border-slate-800 pb-4">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
              Bonus
            </h2>
          </header>

          <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
            <p className="bg-[#1a2b4c]/60 border border-slate-700/60 p-4 rounded-xl">
              A Bonus is an incentive that 1x Bet offers to its customers that have certain requirements met. Betting bonuses can take the form of extra betting money, free spins, cash back offers, free bets, or other bonuses.
            </p>
            <p className="font-semibold text-white">
              Each bonus will come with their own set of rules, such as:
            </p>
          </div>

          {/* Rules List */}
          <ul className="space-y-2.5">
            {bonusRules.map((rule, index) => (
              <li 
                key={index}
                className="bg-[#1a2b4c] border border-slate-700/70 p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:border-orange-500 hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  {rule}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-2 border-t border-slate-800">
            Be sure customers check the details of each promotion before taking part.
          </p>

        </div>

      </div>

      {/* DIVIDER */}
      <hr className="border-slate-800" />

      {/* SECTION 2: PRIVACY POLICY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Text Content (Left) */}
        <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
          
          <header className="space-y-2 border-b border-slate-800 pb-4">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
              Privacy Policy
            </h2>
            <p className="text-sm md:text-base font-semibold text-orange-400">
              Privacy Matters at 1x Bet
            </p>
          </header>

          <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
            <p className="bg-[#1a2b4c]/60 border border-slate-700/60 p-4 rounded-xl">
              Your privacy is kind of a big deal to us at 1x Bet. This Privacy Policy explains, in a practical way, how we collect, use, store, process, and also safeguard your personal data when you’re browsing our website and using our services. If you keep using our website or you register with us, you’re confirming that you agree with the ways described here in this Privacy Policy, even if it’s not always presented in the most obvious manner.
            </p>
            <p className="font-semibold text-white">
              This policy covers:
            </p>
          </div>

          {/* Privacy Topics List */}
          <ul className="space-y-2.5">
            {privacyTopics.map((topic, index) => (
              <li 
                key={index}
                className="bg-[#1a2b4c] border border-slate-700/70 p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:border-orange-500 hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  {topic}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-2 border-t border-slate-800">
            Balance privacy and security of the sensitive information of our customers while ensuring transparency.
          </p>

        </div>

        {/* Animated Image Box (Right) */}
        <div className="lg:col-span-5 lg:sticky lg:top-6 order-1 lg:order-2">
          <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900 aspect-[5/4]">
            <Image 
              src="/images/PRIVACY POLICI .jpg" 
              alt="1x Bet Privacy and Data Protection" 
              width={500}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0e182e]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/50">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Data Protection & Transparency
              </span>
            </div>
          </div>
        </div>

      </div>

    </section>
    {/* --------------------------------------------------------------------------- */}
    <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 text-slate-300 space-y-12">
      
      {/* SECTION 1: SECURITY TEAM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Animated Image Box (Left) */}
        <div className="lg:col-span-5 lg:sticky lg:top-6">
          <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900 aspect-[5/4]">
            <Image 
              src="/images/SECURITY TEAM.jpg" 
              alt="1x Bet Security Team" 
              width={500}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0e182e]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/50">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Platform Protection & Fraud Prevention
              </span>
            </div>
          </div>
        </div>

        {/* Text Content (Right) */}
        <div className="lg:col-span-7 space-y-6">
          
          <header className="space-y-2 border-b border-slate-800 pb-4">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
              Security Team
            </h2>
          </header>

          <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
            <p className="bg-[#1a2b4c]/60 border border-slate-700/60 p-4 rounded-xl">
              The 1x Bet Security Team ensures the integrity and safety of the 1x Bet Platform.
            </p>
            <p className="font-semibold text-white">
              Its responsibilities include:
            </p>
          </div>

          {/* Responsibilities List */}
          <ul className="space-y-2.5">
            {securityResponsibilities.map((item, index) => (
              <li 
                key={index}
                className="bg-[#1a2b4c] border border-slate-700/70 p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:border-orange-500 hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-2 border-t border-slate-800">
            The Security Team may require further confirmation if it is required to make sure that the account will be safe.
          </p>

        </div>

      </div>

      {/* DIVIDER */}
      <hr className="border-slate-800" />

      {/* SECTION 2: CUSTOMER SUPPORT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Text Content (Left) */}
        <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
          
          <header className="space-y-2 border-b border-slate-800 pb-4">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
              Customer Support
            </h2>
          </header>

          <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
            <p className="bg-[#1a2b4c]/60 border border-slate-700/60 p-4 rounded-xl">
              All queries relating to the Customer Account, Customer Platform will be answered by the Customer Support Team.
            </p>
            <p className="font-semibold text-white">
              You can find support to help with areas when you need it such as:
            </p>
          </div>

          {/* Support Areas List */}
          <ul className="space-y-2.5">
            {supportAreas.map((area, index) => (
              <li 
                key={index}
                className="bg-[#1a2b4c] border border-slate-700/70 p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:border-orange-500 hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  {area}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-2 border-t border-slate-800">
            They can reach out to support via the official methods provided on the 1x Bet website.
          </p>

        </div>

       
        <div className="lg:col-span-5 lg:sticky lg:top-6 order-1 lg:order-2">
          <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900 aspect-[5/4]">
            <Image 
              src="/images/SECURITY TEAM.jpg" 
              alt="1x Bet Customer Support" 
              width={500}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0e182e]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/50">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                24/7 Platform Assistance
              </span>
            </div>
          </div>
        </div>

      </div>

    </section>
    {/* -------------------------------------------------------------- */}
    <section className="bg-[#121e36] border border-slate-800 rounded-2xl p-6 md:p-10 text-slate-300 space-y-8">
      
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
    
        <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-orange-500/50 transition duration-300 shadow-xl">
          <div className="space-y-6">
            
          
            <header className="space-y-2 border-b border-slate-700/80 pb-4">
              <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full inline-block">
                Policy & Settlement
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
                Bet Cancellation
              </h2>
            </header>

           
            <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-lg text-xs md:text-sm leading-relaxed text-slate-300">
              A Bet Cancellation is when the wager cannot be settled within the given betting rules.
            </p>

            {/* Rules Subtitle & List */}
            <div className="space-y-3">
              <p className="text-xs md:text-sm font-semibold text-white">
                If a bet is cancelled:
              </p>
              <ul className="space-y-2.5">
                {cancellationRules.map((rule, index) => (
                  <li 
                    key={index}
                    className="bg-[#0e182e] border border-slate-700/70 p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:border-orange-500 hover:translate-x-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-xs md:text-sm font-semibold text-white">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

         
          <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-3 border-t border-slate-700/80">
            Some cancellations of bets can be brought on due to event cancellations, rule violation or incorrect market publication.
          </p>
        </div>

       
        <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-orange-500/50 transition duration-300 shadow-xl">
          <div className="space-y-6">
            
           
            <header className="space-y-2 border-b border-slate-700/80 pb-4">
              <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full inline-block">
                Match Duration
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
                Regular Time
              </h2>
            </header>

          
            <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-lg text-xs md:text-sm leading-relaxed text-slate-300">
              The official playing time as set in the rules of a sport including injury time or stoppage time added by the referee, where applicable, is regular time.
            </p>

          
            <div className="space-y-3">
              <p className="text-xs md:text-sm font-semibold text-white">
                Regular Time does NOT include:
              </p>
              <ul className="space-y-2.5">
                {regularTimeExclusions.map((item, index) => (
                  <li 
                    key={index}
                    className="bg-[#0e182e] border border-slate-700/70 p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:border-orange-500 hover:translate-x-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-xs md:text-sm font-semibold text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

         
          <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-3 border-t border-slate-700/80">
            If not otherwise noted, the betting markets will be determined at the end of Regular Time.
          </p>
        </div>

      </div>

    </section>
    {/* --------------------------------------------------------------- */}
    <section className="bg-[#121e36] border border-slate-800 rounded-2xl p-6 md:p-10 text-slate-300 space-y-8">
      
    
      <header className="relative bg-gradient-to-r from-[#1a2b4c] via-[#121e36] to-[#0e182e] border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-3 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400">
            <Table className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
            Market Glossary
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-wide">
          Accepted betting <span className="text-orange-500">abbreviations</span>
        </h2>

        <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          In sports betting, most markets tend to use abbreviations so the info shows up faster , kind of cleaner , and more efficient. Below are some of the most common abbreviation forms that you will usually see across different sports on 1x Bet.
        </p>
      </header>

    
      <div className="bg-[#1a2b4c]/60 border border-slate-700/70 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
           
            <thead>
              <tr className="bg-[#0e182e] border-b border-slate-700/80 text-orange-400 font-mono text-xs uppercase tracking-wider">
                <th className="py-4 px-6 w-1/3">Abbreviation</th>
                <th className="py-4 px-6 w-2/3">Meaning</th>
              </tr>
            </thead>

           
            <tbody className="divide-y divide-slate-800/80 text-xs md:text-sm">
              {abbreviationsData.map((item, index) => (
                <tr 
                  key={index}
                  className="hover:bg-[#1a2b4c] transition-colors duration-200 group"
                >
                  <td className="py-3.5 px-6 font-mono font-bold text-orange-400 group-hover:text-white transition-colors">
                    <span className="inline-block px-2.5 py-1 bg-[#0e182e] border border-slate-700/80 rounded-md group-hover:border-orange-500/50">
                      {item.abbreviation}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 font-semibold text-slate-200 group-hover:text-orange-300 transition-colors">
                    {item.meaning}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </section>
    {/* ---------------------------------------------------------------------------------- */}
    <section className="bg-[#121e36] border border-slate-800 rounded-2xl p-6 md:p-10 text-slate-300 space-y-8">
      
   
      <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <header className="space-y-3 border-b border-slate-700/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
              Cash Out Feature
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-wide">
            Bet Slip <span className="text-orange-500">Sale</span>
          </h2>

          <p className="text-sm md:text-base font-semibold text-orange-400">
            Cash out your bet , before the event ends
          </p>
        </header>

        <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
          <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl">
            With the Bet Slip Sale feature , eligible customers can close a qualifying bet before it gets officially settled. Instead of waiting until the sporting event has finished, players can decide to sell their bet back to 1x Bet and receive the current offered value, right away, like immediately.
          </p>
          <p className="p-2">
            This option gives players extra flexibility for handling active wagers and it can be pretty handy when match conditions shift, pretty sudden, without much warning.
          </p>
        </div>
      </div>

     
      <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <header className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
            Full Bet Slip <span className="text-emerald-400">Sale</span>
          </h2>
        </header>

        <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
          <div className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              For a Full Bet Slip Sale , the whole bet is closed. The offered amount then gets credited to the customer’s account once the transaction has been confirmed, and processed properly.
            </p>
          </div>
          <p className="p-2">
            After a full sale, the bet is treated as completed, and the original outcome from the sporting event will no longer matter for that wager at all.
          </p>
        </div>
      </div>

    </section>
    {/* ------------------------------------------------------------------------- */}
  <section className="bg-[#121e36] border border-slate-800 rounded-2xl p-6 md:p-10 text-slate-300 space-y-8">
      
     
      <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <header className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
          <div className="p-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400">
            <PieChart className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
            Partial Bet Slip <span className="text-orange-500">Sale</span>
          </h2>
        </header>

        <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
          <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl">
            Eligible bets may also support a Partial Bet Slip Sale. Rather than selling the entire bet, customers may choose to sell only a portion of their stake, while letting the rest keep running until settlement.
          </p>
          <p className="p-2">
            That means more control—players can lock in some of the available value while still keeping a bit of exposure to how the event turns out.
          </p>
        </div>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
       
        <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-6">
            <header className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
              <div className="p-2.5 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-400">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white italic tracking-wide">
                Replacement of a Selection
              </h3>
            </header>

            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              In case an available market allows for that, the customer can replace one of the selections with another choice in the same betting market.
            </p>

            <div className="space-y-3">
              <p className="text-xs md:text-sm font-semibold text-white">For instance:</p>
              <ul className="space-y-2">
                {replacementExamples.map((ex, idx) => (
                  <li key={idx} className="bg-[#0e182e] border border-slate-700/70 p-3 rounded-lg text-xs md:text-sm font-semibold text-orange-400 font-mono">
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-3 border-t border-slate-700/80">
            Only those markets that stay available and open can be chosen.
          </p>
        </div>

      
        <div className="space-y-8 flex flex-col justify-between">
          
        
          <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
            <header className="flex items-center gap-3 border-b border-slate-700/80 pb-3">
              <div className="p-2 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-2xl font-black text-white italic tracking-wide">
                Deletion of a Selection
              </h3>
            </header>
            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              It is possible for customers to delete one or several selections from qualifying accumulators. As applicable, changes may be done according to the betting regulations of the platform.
            </p>
          </div>

          
          <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
            <header className="flex items-center gap-3 border-b border-slate-700/80 pb-3">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
                <PlusCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-2xl font-black text-white italic tracking-wide">
                Add New Selections
              </h3>
            </header>
            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              New selections may also be added to qualifying accumulators. Adding new selections will allow customers to have more betting possibilities without altering the initial bet.
            </p>
          </div>

        </div>

      </div>

     
      <div className="bg-gradient-to-r from-[#1a2b4c] via-[#121e36] to-[#0e182e] border border-orange-500/40 rounded-2xl p-6 md:p-8 space-y-4 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        <header className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
          <div className="p-2.5 bg-orange-500/20 border border-orange-500/40 rounded-xl text-orange-400">
            <SaveCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
            Save Your <span className="text-orange-500">Changes</span>
          </h3>
        </header>

        <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-300">
          <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl font-semibold text-white">
            Any changes done to a bet slip need to be saved in order to take effect.
          </p>
          <p className="p-1">
            The customer needs to check the changes and choose <span className="text-orange-400 font-bold uppercase tracking-wider">"Save Changes"</span>.
          </p>
        </div>
      </div>

    </section>
  </div>
  );
}