import Image from 'next/image';
import { Lightbulb, ShieldCheck, TrendingUp, NotebookPen, Trophy, Smile, Sparkles } from 'lucide-react';

export default function TypesOfBets() {
  const whyPlayItems = [
    "Easy for beginners",
    "One prediction only",
    "Quick settlement",
    "Straightforward return calculation",
    "Suitable for all sports"
  ];

  const benefitsList = [
    "Higher combined odds",
    "Bigger potential returns",
    "Multiple selections are included in one stake.",
    "Great for sporting events over the weekend.",
    "This is a nice option to be used by the more advanced players."
  ];
  const reasons = [
    "Multiple betting combinations",
    "Greater flexibility",
    "This game is suitable for experienced players.",
    "Perfect for tournaments and league games."
  ];
  const multibetAdvantages = [
    "Flexible combinations",
    "Multiple betting options",
    "Greater strategic possibilities",
    "Suitable for experienced players"
  ];
  const luckyBenefits = [
    { title: "Multiple combinations", desc: "Covers diverse cluster outcomes effortlessly." },
    { title: "Several possible returns", desc: "Payouts trigger across various win stages." },
    { title: "Flexible betting style", desc: "Adapts smoothly to changing game conditions." },
    { title: "Excellent tournament option", desc: "Ideal for long-term championship tracking." }
  ];

  const tips = [
    {
      title: "Know the Mechanics",
      text: "Before placing a bet, know the different types of bets and how they operate.",
      icon: Lightbulb,
    },
    {
      title: "Manage Your Budget",
      text: "Set a budget for yourself when betting and be strict with yourself.",
      icon: ShieldCheck,
    },
    {
      title: "Control Strategy",
      text: "Never chase losses.",
      icon: TrendingUp,
    },
    {
      title: "Track Your Progress",
      text: "Keep records of all your bets.",
      icon: NotebookPen,
    },
    {
      title: "Leverage Expertise",
      text: "Look around at sports that you know well.",
      icon: Trophy,
    },
    {
      title: "Prioritize Entertainment",
      text: "Betting should always be fun.",
      icon: Smile,
    },
  ];
  return (
    <div>
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 space-y-6 text-slate-300">

        {/* Main Title & Subtitle */}
        <header className="space-y-2 border-b border-slate-800 pb-6">
          <h1 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
            Types of Bets at <span className="text-orange-500">1x Bet</span>
          </h1>
          <p className="text-sm md:text-base font-semibold text-orange-400">
            Find the best wagering strategies for each game
          </p>
        </header>

        {/* Paragraph Content */}
        <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
          <p>
            Going into sports betting isn't only about foreseeing which team will win a game. Players at 1x Bet have the option of playing through a number of betting formats, aligning these to various winning methods, experience levels and preferences. From placing a single bet on your favorite team to consolidating several bets into a juicy combination, knowing the types of bets you can play can make optimal decisions and raise your betting experience.
          </p>

          <p>
            There are pros and cons to each of the options. Some are simple, some offer greater possibilities of big returns with several choices. Accumulators or System Bets (multi-hand) may be suitable for more advanced players, who will understand how to use these, while Single Bets are straightforward to understand and typically a great option for beginners.
          </p>

          <p>
            It is always best to know the specifics so that you can make a successful selection before deciding who you want to wager on.Before placing your bet, it is important to understand each type of betting, the wager returns and the chance of being a winner.
          </p>
        </div>

      </section>
      {/* ----------------------------------------------------------------------------- */}

      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 text-slate-300">

        {/* Content Container (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Side: All Text & Points */}
          <div className="lg:col-span-7 space-y-6">

            <header className="space-y-2 border-b border-slate-800 pb-4">
              <h1 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
                Single Bet
              </h1>
              <p className="text-sm md:text-base font-semibold text-orange-400">
                Knowing the best place to put a bet.
              </p>
            </header>

            <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
              <p>
                The simplest way to bet at 1x Bet is called a Single Bet. You make a wager on a particular possibility from a sporting activity occasion. If you make a right selection then you will play the odds that were set for that selection.
              </p>
              <p>
                Players who prefer not to involve two or more events in their bets will find single bets to be the best choice. Only one prediction is used; this makes them easy to follow and understand.
              </p>
            </div>

            {/* Why to play single bets */}
            <div className="space-y-4 pt-2">
              <h2 className="text-lg md:text-xl font-extrabold text-white italic border-l-4 border-orange-500 pl-3">
                Why to play single bets:
              </h2>
              <ul className="space-y-2.5">
                {whyPlayItems.map((item, index) => (
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
            </div>

            <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-2 border-t border-slate-800">
              Single bets are widely favored due to their ability to concentrate on a particular result, which is one of the many sports they are wagered on, among them football, cricket, basketball, tennis, esports, and more.
            </p>

          </div>

          {/* Right Side: Single Animated Image Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-6">
            <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900 aspect-[5/4]">
              <Image
                src="/images/single bet .jpg"
                alt="Single Bet Strategy"
                width={500}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0e182e]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/50">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  1x Bet Single Bet Guide
                </span>
              </div>
            </div>
          </div>

        </div>

      </section>
      {/* ---------------------------------------------------------------------------- */}
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 text-slate-300">

        {/* Content Container (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Side: Animated Image Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-6 order-2 lg:order-1">
            <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900 aspect-[5/4]">
              <Image
                src="/images/Accumulator Bet.jpg"
                alt="Accumulator Bet Strategy"
                width={500}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0e182e]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/50">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  1x Bet Accumulator Guide
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content & Benefits List */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">

            <header className="space-y-2 border-b border-slate-800 pb-4">
              <h1 className="text-2xl md:text-4xl font-black text-white italic tracking-wide">
                Accumulator Bet
              </h1>
              <p className="text-sm md:text-base font-semibold text-orange-400">
                Click on Multiple Selections to form an exciting combination bet
              </p>
            </header>

            <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
              <p>
                An Accumulator Bet (also known as an Acca) is a bet that brings together two optional or more selections in a single wager. All of the selections placed in the accumulator have to be correct for the bet to win.
              </p>
              <p>
                The odds to all selections are multiplied so accumulator bets can have much higher potential returns than individual bets.
              </p>
              <p>
                Accumulators are a type of bet that a lot of people like in sports, as they allow you to also bet on the results of different games, in one bet.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 pt-2">
              <h2 className="text-lg md:text-xl font-extrabold text-white italic border-l-4 border-orange-500 pl-3">
                Benefits of Accumulator Bets:
              </h2>
              <ul className="space-y-2.5">
                {benefitsList.map((item, index) => (
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
            </div>

            <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-2 border-t border-slate-800">
              While accumulator bets may pay off big payouts, you need to capture all of the selections to make the bet a winner.
            </p>

          </div>

        </div>

      </section>
      {/* --------------------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e182e] via-[#121e36] to-[#1a2b4c] border border-slate-800 rounded-2xl p-6 md:p-10 text-slate-300 shadow-2xl">

        {/* Background Decorative Glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Banner */}
        <header className="relative z-10 text-center space-y-3 pb-8 border-b border-slate-800/80 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest rounded-full">
            Advanced Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white italic tracking-wide">
            System <span className="text-orange-500">Bet</span>
          </h1>
          <p className="text-sm md:text-base font-medium text-slate-300">
            More flexibility with multiple combinations. More flex with multiple combinations
          </p>
        </header>

        {/* Hero Section: Center Animated Visual Card */}
        <div className="relative z-10 my-8">
        
<div className="relative group w-full max-w-[800px] aspect-[2/1] mx-auto rounded-2xl overflow-hidden border border-slate-700/80  bg-slate-900">
  <Image
    src="/images/System Bet.jpg"
    alt="System Bet Combination Engine"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
    priority
  />


            <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-[#0e182e]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-orange-400 font-bold uppercase tracking-widest">Combination Engine</p>
                <p className="text-lg md:text-xl font-black text-white italic">Automated Multi-Wager Architecture</p>
              </div>
              <span className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition duration-300">
                System Active
              </span>
            </div>
          </div>
        </div>

        {/* Content Grid: Interactive Floating Text Blocks */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 p-5 rounded-xl hover:border-orange-500/50 transition duration-300 backdrop-blur-sm">
            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              Instead, A System Bet is a wager individual who desires more versatility than the classic Accumulator. A system will automatically generate all of the combinations your selections can make using a system instead of having to manually create all of the combinations, you allow every selection to win.
            </p>
          </div>

          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 p-5 rounded-xl hover:border-orange-500/50 transition duration-300 backdrop-blur-sm">
            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              Even in the event you make a poor selection(s) you still might find a return as long as you select the proper system.
            </p>
          </div>

          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 p-5 rounded-xl hover:border-orange-500/50 transition duration-300 backdrop-blur-sm">
            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              This betting option is particularly favored by seasoned bettors who appreciate the chance to bet on a multitude of potentialities whilst minimizing their risk.
            </p>
          </div>
        </div>

        {/* Reasons Section: Animated Numbered Cards */}
        <div className="relative z-10 space-y-6 pt-6 border-t border-slate-800">
          <h2 className="text-xl md:text-2xl font-black text-white italic text-center">
            What are the reasons for the selection of <span className="text-orange-500">System Bets?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-[#1a2b4c] border border-slate-700/80 p-5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-bl-full transition-all group-hover:w-20 group-hover:h-20 group-hover:bg-orange-500/20" />
                <span className="text-2xl font-black text-orange-500/40 group-hover:text-orange-400 transition-colors duration-300">
                  0{index + 1}
                </span>
                <p className="text-xs md:text-sm font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mt-4">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
      {/* ------------------------------------------------------------------------------------------- */}
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 text-slate-300">

        {/* Side-by-Side Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* SECTION 1: CHAIN BET */}
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-orange-500/50 transition duration-300 shadow-xl">
            <div className="space-y-6">

              {/* Header */}
              <header className="space-y-2 border-b border-slate-700/80 pb-4">
                <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full inline-block">
                  Sequential Strategy
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
                  Chain Bet
                </h2>
                <p className="text-xs md:text-sm font-semibold text-orange-400">
                  Attain Every Winning Selection, Remember to build Momentum from every win.
                </p>
              </header>

              {/* Animated Card Image */}
              <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 shadow-lg bg-slate-900 aspect-[5/4]">
                <Image
                  src="/images/CHAN BET.jpg"
                  alt="Chain Bet Strategy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0e182e]/90 backdrop-blur-md p-2.5 rounded-lg border border-slate-700/50">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    Sequential Link System
                  </span>
                </div>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-300">
                <p>
                  Chain Bet consists of several individual bets that are played in a row. Upon winning each time a winning selection is made, the balance moves to the next link in the chain.
                </p>
                <p>
                  This also means the visitors get a thrilling betting experience, with each success increasing the value of the next bet.
                </p>
              </div>

            </div>

            {/* Footer Note */}
            <p className="text-xs md:text-sm leading-relaxed text-slate-300 pt-3 border-t border-slate-700/80 font-medium">
              Players who like to plan a betting game over multiple sporting events are likely to use chain bets.
            </p>
          </div>

          {/* SECTION 2: MULTIBET */}
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-orange-500/50 transition duration-300 shadow-xl">
            <div className="space-y-6">

              {/* Header */}
              <header className="space-y-2 border-b border-slate-700/80 pb-4">
                <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full inline-block">
                  Hybrid Combination
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
                  Multibet
                </h2>
                <p className="text-xs md:text-sm font-semibold text-orange-400">
                  Combine betting styles and techniques.Combine different betting styles and techniques.
                </p>
              </header>

              {/* Animated Card Image */}
              <div className="relative group rounded-xl overflow-hidden border border-slate-700/80 shadow-lg bg-slate-900 aspect-[5/4]">
                <Image
                  src="/images/multibet.jpg"
                  alt="Multibet Hybrid Strategy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e182e] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0e182e]/90 backdrop-blur-md p-2.5 rounded-lg border border-slate-700/50">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    Multi-Style Integration
                  </span>
                </div>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-300">
                <p>
                  A Multibet is a gamble that incorporates various gaming type into the same wager, typically bringing in various selections.
                </p>
                <p>
                  This enables players to have plenty of flexibility in making far more complicated wagers on more than one event.
                </p>
              </div>

            </div>

            {/* Advantages List */}
            <div className="space-y-3 pt-3 border-t border-slate-700/80">
              <h3 className="text-sm md:text-base font-extrabold text-white italic border-l-4 border-orange-500 pl-3">
                Advantages
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {multibetAdvantages.map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#0e182e] border border-slate-700/70 p-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 hover:border-orange-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-xs font-semibold text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </section>
      {/* ------------------------------------------------------------------------------------------- */}
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 text-slate-300">

        {/* Side-by-Side Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* SECTION 1: CONDITIONAL BET */}
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-orange-500/50 transition duration-300 shadow-xl">
            <div className="space-y-6">

              {/* Header */}
              <header className="space-y-2 border-b border-slate-700/80 pb-4">
                <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full inline-block">
                  Risk Management
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
                  Conditional Bet
                </h2>
                <p className="text-xs md:text-sm font-semibold text-orange-400">
                  Practical examples of risk management in sports: Smart Betting with Planned Sequences
                </p>
              </header>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
                <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-lg">
                  A Conditional Bet lets you get a chain of bets set up in a certain sequence. The stakes to each wager are determined by the other wager.
                </p>
                <p>
                  This betting option is beneficial for those who like to have a structured betting strategy and control the wager over the course of activities.
                </p>
              </div>

            </div>
          </div>

          {/* SECTION 2: ANTI-ACCUMULATOR */}
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-orange-500/50 transition duration-300 shadow-xl">
            <div className="space-y-6">

              {/* Header */}
              <header className="space-y-2 border-b border-slate-700/80 pb-4">
                <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full inline-block">
                  Alternative Strategy
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
                  Anti-Accumulator
                </h2>
                <p className="text-xs md:text-sm font-semibold text-orange-400">
                  A Different Approach to Combination Betting.
                </p>
              </header>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
                <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-lg">
                  A flip over Accumulator betting is an alternative to the Accumulator betting. In this type of wager, which is based on a situation where one or more selections fail to win, instead of having to bet all selections to win a payout, only the winning selections are required to win.
                </p>
                <p>
                  This unique structure provides experienced players with another strategic betting option.
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>
      {/* --------------------------------------------------------------- */}
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 text-slate-300 space-y-8">

        {/* TOP CARD: LUCKY BET (Dashboard Style) */}
        <div className="bg-[#1a2b4c]/70 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-6">
            <div>
              <span className="text-[10px] uppercase font-black text-orange-400 tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full">
                Multi-Hop Betting
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white italic mt-2">
                Lucky Bet
              </h2>
            </div>
            <p className="text-xs md:text-sm font-semibold text-orange-400 max-w-md">
              Multi-Hop Betting – several betting opportunities on one list.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm leading-relaxed">
            <div className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl">
              <p>
                The Lucky Bet is a combination of 1, several accumulator bet combinations, which gives the opportunity to multiple bets on the same cluster.
              </p>
            </div>
            <div className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl">
              <p>
                This type of betting is favored as it offers greater opportunities for winning the return depending on how the player's bets go.
              </p>
            </div>
          </div>

          {/* Interactive Stats Badge Grid */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider text-slate-200">
              Why Players Like Lucky Bets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {luckyBenefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0e182e] border border-slate-700/80 p-3.5 rounded-xl transition duration-300 hover:border-orange-500 hover:-translate-y-1"
                >
                  <div className="text-orange-500 font-mono text-xs font-bold mb-1">0{index + 1}</div>
                  <p className="text-xs font-bold text-white mb-0.5">{item.title}</p>
                  <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CONTAINER: STRATEGY MATRIX GUIDE */}
        <div className="bg-[#1a2b4c]/40 border border-slate-700/60 rounded-2xl p-6 md:p-8 space-y-6">

          <header className="text-center space-y-2 max-w-2xl mx-auto border-b border-slate-700/80 pb-4">
            <h2 className="text-2xl md:text-3xl font-black text-white italic">
              Determine which game to choose
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              Choosing the right type of betting involves a question of what some person is attempting to attain and what some person likes.
            </p>
          </header>

          {/* Timeline Path Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">

            {/* Beginner Stage */}
            <div className="relative bg-[#0e182e] border-t-4 border-orange-500 rounded-xl p-5 space-y-3 shadow-lg">
              <span className="text-[10px] font-bold uppercase text-orange-400 tracking-wider bg-orange-500/10 px-2.5 py-0.5 rounded">
                Starting Out
              </span>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Single Bets are a good option when you're first starting out as they don't have an over-complex formula and only need one winning prediction to make money.
              </p>
            </div>

            {/* Intermediate Stage */}
            <div className="relative bg-[#0e182e] border-t-4 border-blue-500 rounded-xl p-5 space-y-3 shadow-lg">
              <span className="text-[10px] font-bold uppercase text-blue-400 tracking-wider bg-blue-500/10 px-2.5 py-0.5 rounded">
                High Returns & Flexibility
              </span>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                However, players with gamblers personalities may like to go with Accumulator Bets to have greater chances of getting higher returns, while those with flexible personalities may consider System Bets or Lucky Bets to have more options to play.
              </p>
            </div>

            {/* Advanced Stage */}
            <div className="relative bg-[#0e182e] border-t-4 border-emerald-500 rounded-xl p-5 space-y-3 shadow-lg">
              <span className="text-[10px] font-bold uppercase text-emerald-400 tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded">
                Personalized Plans
              </span>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Advanced players may delve into Chain Bets, Conditional Bets and Multibets to construct more personalized betting plans.
              </p>
            </div>

          </div>

        </div>

      </section>
      {/* ------------------------------------------------------------------------- */}
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 text-slate-300 space-y-10">

        {/* SECTION 1: HOW TO BET BETTER - TIPS */}
        <div className="space-y-6">
          <header className="border-b border-slate-800 pb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
              Smart Play Guide
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white italic mt-2">
              How to bet better – <span className="text-orange-500">Tips</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              For an enhanced betting experience:
            </p>
          </header>

          {/* Responsive Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-[#1a2b4c]/60 border border-slate-700/60 hover:border-orange-500/80 p-5 rounded-xl transition duration-300 flex flex-col justify-between space-y-3 shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-[#0e182e] border border-slate-700/80 rounded-lg text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-orange-400 transition">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: WHY GAMBLE WITH 1X BET */}
        <div className="bg-gradient-to-r from-[#1a2b4c] via-[#121e36] to-[#0e182e] border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">

          <header className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
            <div className="p-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white italic">
              Why Gamble with <span className="text-orange-500">1x Bet?</span>
            </h2>
          </header>

          <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
            <p className="bg-[#0e182e]/80 border border-slate-700/70 p-4 rounded-xl">
              With 1x Bet, gamblers have access to a contemporary betting website that caters to bettors of all skill levels. 1x Bet sportsbook boasts competitive odds, numerous options for sports to gamble on, easy navigation and diverse betting options.
            </p>
            <p className="p-2">
              Whether you make your first Single Bet, try your luck with an Accumulator, or test your skills with more advanced bet combinations – with 1x Bet, you have the opportunity to have fun watching any sporting event.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}