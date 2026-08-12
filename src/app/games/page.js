'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useMemo } from 'react';
import {
  UserPlus,
  LogIn,
  Wallet,
  Gamepad2,
  BookOpenCheck,
  Coins,
  Play,
  Trophy,
  ArrowRightLeft,
  Sparkles,
  CheckCircle2,
  Plane,
  Disc,
  Bomb,
  Dices,
  CircleDot,
  Spade,
  Award,
  Tv,
  Flame,
  Ticket,
  Hash,
  Compass,
  Calendar,
  Zap,
} from 'lucide-react';

export default function GamesPage() {
  const gameSections = useMemo(
    () => [
      {
        title: 'Aviator-Style Games',
        icon: Plane,
        color: 'from-cyan-500 to-blue-600',
        accent: 'text-cyan-400',
        image: '/images/aviator .jpg',
        desc: 'Embark on exciting aviation-inspired games and where timing is key. As the Multiplier increases, so does the height of your aircraft: be sure to select the correct time to complete the round.',
        subtitle: 'Popular titles include:',
        games: ['Sky Flight', 'Air Adventure', 'Rocket Flight', 'Flight Challenge', 'Space Flight', 'Air Pilot', 'Sky Explorer'],
      },
      {
        title: 'Plinko Games',
        icon: Disc,
        color: 'from-purple-500 to-pink-600',
        accent: 'text-purple-400',
        image: '/images/plinko.jpg',
        desc: 'Plinko games are based on the classic dropping-ball concept challenge and give players the opportunity to see the result where their ball ends up when they drop it. There is always an element of suspense in each round, as it is never the same bounce.',
        subtitle: 'Popular variations include:',
        games: ['Classic Plinko', 'Mega Plinko', 'Lucky Plinko', 'Gold Plinko', 'Rainbow Plinko'],
      },
      {
        title: 'Mines Games',
        icon: Bomb,
        color: 'from-amber-500 to-orange-600',
        accent: 'text-amber-400',
        image: '/images/mines game .jpg',
        desc: 'Players will show concealed tiles, while hiding up, mines and mix strategy alongside the excitement. As the selection is successful, the potential amount of rewards becomes greater and greater, so that the individual who is careful in selecting can make a better choice if he repeated the action in each round.',
        subtitle: 'Popular games include:',
        games: ['Mines', 'Treasure Mines', 'Diamond Mines', 'Lucky Mines', 'Gold Miner'],
      },
      {
        title: 'Dice Games',
        icon: Dices,
        color: 'from-emerald-500 to-teal-600',
        accent: 'text-emerald-400',
        image: '/images/dice.jpg',
        desc: "Dice games are easy, fun and quick. It's a prediction game before even rolling the dice, and the game is upwards compatible, making it fun for all experience levels.",
        subtitle: 'Popular titles include:',
        games: ['Lucky Dice', 'Dice Duel', 'Dice Roll', 'High Dice', 'Dice Master'],
      },
      {
        title: 'Roulette Games',
        icon: CircleDot,
        color: 'from-rose-500 to-red-600',
        accent: 'text-rose-400',
        image: '/images/Roulette Games.jpg',
        desc: "The roulette game is one of the most iconic casino games. Play with one of the different types of bets and see who wins – it's the wheel's job.",
        subtitle: 'Popular versions include:',
        games: ['European Roulette', 'American Roulette', 'French Roulette', 'Lightning Roulette', 'Live Roulette', 'Speed Roulette'],
      },
      {
        title: 'Blackjack Games',
        icon: Spade,
        color: 'from-indigo-500 to-blue-700',
        accent: 'text-indigo-400',
        image: '/images/black jack .jpg',
        desc: "Live Blackjack mixes skill ,strategy and a kind of jumpy thrill in one of the world’s most recognizable casino games. The idea is pretty straight forward: you want to make a hand with a total value that lands near 21, but you don’t want to go over. And yes, you also need that number to beat the dealer’s hand, no matter what they’re showing.",
        subtitle: 'Available variations include:',
        games: ['Classic Blackjack', 'Live Blackjack', 'Infinite Blackjack', 'Speed Blackjack', 'VIP Blackjack'],
      },
      {
        title: 'Baccarat Games',
        icon: Award,
        color: 'from-yellow-500 to-amber-600',
        accent: 'text-yellow-400',
        image: '/images/BASEBALL.jpg',
        desc: 'Live Baccarat is one of the more popular casino table games, it is kinda known for simple rules and a fast, paced action. In each round, gamblers are able to place a wager on the Player side, the Banker side, or a Tie situation before the cards are dealt by a real live dealer, not a bot.',
        subtitle: 'Popular options include:',
        games: ['Classic Baccarat', 'Live Baccarat', 'Speed Baccarat', 'No Commission Baccarat'],
      },
      {
        title: 'Poker Games',
        icon: Spade,
        color: 'from-fuchsia-500 to-purple-700',
        accent: 'text-fuchsia-400',
        image: '/images/poker  (1).jpg',
        desc: 'Poker is a game that involves strategy, decision making and competition.',
        subtitle: 'The most popular games of poker are:',
        games: ["Omaha Poker", "Caribbean Stud", "Casino Hold'em", "Three Card Poker", "Video Poker"],
      },
      {
        title: 'Live Casino Games',
        icon: Tv,
        color: 'from-orange-500 to-red-600',
        accent: 'text-orange-400',
        image: '/images/live casino (1).jpg',
        desc: 'In our Live Casino section you’ll find professional dealers, real time HD streaming, and a more engaging kind of interactive play that kind of brings the genuine casino atmosphere straight to your screen, like it’s already there.',
        subtitle: 'Featured games include:',
        games: ['Live Blackjack', 'Live Roulette', 'Live Baccarat', 'Dragon Tiger', 'Sic Bo', 'Teen Patti', 'Andar Bahar', 'Dream Catcher', 'Monopoly Live'],
      },
      {
        title: 'Slot Games',
        icon: Flame,
        color: 'from-amber-400 to-red-500',
        accent: 'text-amber-300',
        image: '/images/SLOTS .jpg',
        desc: 'Slot games are rich in colour, fun themes and a lot of fun bonuses for all players.',
        subtitle: 'Popular categories include:',
        games: ['Classic Slots', 'Fruit Slots', 'Adventure Slots', 'Egyptian Slots', 'Fantasy Slots', 'Mythology Slots', 'Pirate Slots', 'Animal Slots', 'Megaways Slots', 'Progressive Jackpot Slots'],
      },
      {
        title: 'Arcade Games',
        icon: Gamepad2,
        color: 'from-green-400 to-emerald-600',
        accent: 'text-green-400',
        image: '/images/Arcade Games.jpg',
        desc: 'Arcade games are playing styles that feature bright and colorful graphics and quick action, and are generally played with basic skill.',
        subtitle: 'Popular games include:',
        games: ['Coin Flip', 'Wheel Spin', 'Lucky Wheel', 'Treasure Hunt', 'Tower Challenge', 'Penalty Challenge', 'Goal Rush', 'Football Stars', 'Basketball Shootout', 'Baseball Challenge'],
      },
      {
        title: 'Scratch Games',
        icon: Ticket,
        color: 'from-teal-400 to-cyan-600',
        accent: 'text-teal-300',
        image: '/images/scratch game .jpg',
        desc: 'Scratch games provide instant entertainment because random symbols are uncovered on every play.',
        subtitle: 'Popular titles include:',
        games: ['Lucky Scratch', 'Gold Scratch', 'Diamond Scratch', 'Treasure Scratch', 'Mystery Scratch'],
      },
      {
        title: 'Number Games',
        icon: Hash,
        color: 'from-sky-400 to-blue-600',
        accent: 'text-sky-300',
        image: '/images/numbergame.jpg',
        desc: 'Those who will enjoy more play with numbers are likely to find several different exciting options to play.',
        subtitle: 'Popular games include:',
        games: ['Keno', 'Bingo', 'Lucky Numbers', 'Number Draw', 'Pick Three', 'Pick Five'],
      },
      {
        title: 'Sports-Themed Games',
        icon: Trophy,
        color: 'from-yellow-400 to-orange-500',
        accent: 'text-yellow-400',
        image: '/images/sports (1).jpg',
        desc: "Try out games from the world's most popular games.",
        subtitle: 'Available themes include:',
        games: ['Football Challenge', 'Cricket Stars', 'Tennis Ace', 'Basketball Pro', 'Hockey Arena', 'Rugby Clash', 'Baseball League', 'Golf Masters'],
      },
      {
        title: 'Fantasy Adventure Games',
        icon: Compass,
        color: 'from-violet-500 to-purple-700',
        accent: 'text-violet-300',
        image: '/images/FANTASY.jpg',
        desc: 'Adventure games are games that have a plot about adventure and go along to make it fun.',
        subtitle: 'Popular titles include:',
        games: ['Treasure Island', 'Lost Kingdom', 'Dragon Quest', 'Pirate Gold', 'Jungle Adventure', 'Temple Riches', 'Mystic Forest', 'Magic Kingdom'],
      },
      {
        title: 'Seasonal Games',
        icon: Calendar,
        color: 'from-rose-400 to-pink-600',
        accent: 'text-rose-300',
        image: '/images/seasonal.jpg',
        desc: 'Enjoy themed challenges all year around for holidays, special events or anything else.',
        subtitle: 'Examples include:',
        games: ['Christmas Slots', 'Halloween Adventure', 'Easter Treasure', 'Summer Paradise', 'Winter Festival', 'New Year Fortune'],
      },
    ],
    []
  );

  const steps = useMemo(
    () => [
      {
        num: '01',
        title: 'Step 1 : Make an account',
        icon: UserPlus,
        color: 'from-blue-500 to-cyan-500',
        accent: 'text-cyan-400',
        desc: 'Sign up by sharing your basic info, and then set up a secure account so everything stays protected.',
      },
      {
        num: '02',
        title: 'Step 2 : Log in',
        icon: LogIn,
        color: 'from-indigo-500 to-blue-500',
        accent: 'text-indigo-400',
        desc: 'Use the email or username you registered with, plus your password , to get into your account.',
      },
      {
        num: '03',
        title: 'Step 3 : Put money in',
        icon: Wallet,
        color: 'from-emerald-500 to-teal-500',
        accent: 'text-emerald-400',
        desc: 'Go to the Cashier area and add funds using the payment method you like most.',
      },
      {
        num: '04',
        title: 'Step 4 : Pick a game',
        icon: Gamepad2,
        color: 'from-purple-500 to-pink-500',
        accent: 'text-purple-400',
        desc: 'Look through the game categories, then choose the one you want to play right now.',
      },
      {
        num: '05',
        title: 'Step 5 : Go over the rules',
        icon: BookOpenCheck,
        color: 'from-amber-500 to-orange-500',
        accent: 'text-amber-400',
        desc: 'Before you hit start , read the rules first so you understand the gameplay and what to expect.',
      },
      {
        num: '06',
        title: 'Step 6 : Set your stake',
        icon: Coins,
        color: 'from-yellow-500 to-amber-600',
        accent: 'text-yellow-400',
        desc: 'Decide the stake amount you want to use, based on what fits your budget. Don’t overspend, even if it looks fun.',
      },
      {
        num: '07',
        title: 'Step 7 : Start playing',
        icon: Play,
        color: 'from-orange-500 to-red-500',
        accent: 'text-orange-400',
        desc: 'Hit the Play button and go ahead with your chosen game.',
      },
      {
        num: '08',
        title: 'Step 8 : See what happened',
        icon: Trophy,
        color: 'from-rose-500 to-pink-600',
        accent: 'text-rose-400',
        desc: 'When the round ends, your results and any winnings should show up in your account balance, based on the game rules.',
      },
      {
        num: '09',
        title: 'Step 9 : Take out your winnings',
        icon: ArrowRightLeft,
        color: 'from-cyan-500 to-teal-500',
        accent: 'text-teal-300',
        desc: 'If you’ve got available funds, request a withdrawal from the Cashier, and choose your preferred payment method.',
      },
    ],
    []
  );

  const crashGames = useMemo(
    () => ['Crash', 'Crash X', 'Rocket Crash', 'Space Crash', 'Turbo Crash', 'Jet Crash', 'Lucky Crash'],
    []
  );

  return (
   <main className="min-h-screen bg-[#070c18] text-slate-200 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
 
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
  <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

  <div className="max-w-6xl mx-auto space-y-10 relative z-10">
    
    <section className="bg-[#0e172a] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4 text-center relative overflow-hidden">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-widest uppercase">
        <Sparkles className="w-4 h-4 animate-spin" />
        Official Platform
      </div>

      <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white italic">
        Games at <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">1x Bet</span>
      </h1>

      <p className="text-base sm:text-lg text-orange-400 font-semibold">
        Explore a World of Online Games
      </p>

      <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
        <p>
          1x Bet offers a wide selection of online games, providing plenty of fun, immersive and smooth gaming experience through the desktop and mobile platforms. From traditional casino gaming to accelerating slot machines to live dealer options to recent video slots, our website features something for any type of player.
        </p>
        <p>
          The gameplay is decorated with some nice graphics, intuitive controls so that beginners will be able to play easily but will still offer some good value to more experienced gamers. We add new games regularly, so there's always new fun available!
        </p>
      </div>
    </section>

   
    <section className="bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Crash Games
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          One of the most prevalent instant games is crash games on 1x Bet. Each player observes a progression of multipliers noticed in real time and the best time to cash out at the end of the round. Each additional second brings with it drama and these games are perfect for those who like quick judgment and drama.
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <p className="text-sm font-semibold text-slate-200">
          Crash-style games are popular, such as:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {crashGames.map((game, index) => (
            <div
              key={index}
              className="bg-[#14223d] border border-slate-700/60 hover:border-orange-500/50 rounded-lg p-3 text-sm font-medium text-slate-200 flex items-center space-x-2 transition"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
              <span>{game}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

  
    <div className="space-y-8">
      {gameSections.map((cat, idx) => {
        const IconComp = cat.icon;
        return (
          <section
            key={idx}
            className="group bg-[#0e172a]/90 backdrop-blur-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch"
          >
         
            <div className="w-full md:w-[380px] lg:w-[450px] shrink-0 relative aspect-[5/4] bg-[#0a1223] overflow-hidden flex items-center justify-center p-3">
              <div className="relative w-full h-full">
                <Image
                  src={cat.image.trim()}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  unoptimized
                  priority={idx < 2}
                  className="object-contain rounded-xl"
                />
              </div>

            
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e172a]/90 backdrop-blur-md border border-slate-700/60">
                <IconComp className={`w-5 h-5 ${cat.accent}`} />
                <span className="text-xs font-bold text-white uppercase">{cat.title}</span>
              </div>
            </div>

          
            <div className="flex-1 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white tracking-wide">
                  {cat.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {cat.desc}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <p className={`text-xs font-bold uppercase tracking-wider ${cat.accent}`}>
                  {cat.subtitle}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {cat.games.map((game, gIdx) => (
                    <div
                      key={gIdx}
                      className="bg-[#142342] hover:bg-[#1b2f59] border border-slate-800 hover:border-orange-500/40 rounded-xl p-2.5 text-xs font-semibold text-slate-200 flex items-center gap-2 transition cursor-pointer shadow-sm hover:-translate-y-0.5"
                    >
                      <Zap className={`w-3.5 h-3.5 shrink-0 ${cat.accent}`} />
                      <span className="truncate">{game}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>

   
    <section className="bg-[#0e172a] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 my-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Step-By-Step Guide
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide italic">
          How to Play Games on <span className="text-orange-500">1x Bet</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          Getting started is kinda quick and easy, you just follow a few steps to start playing your favorite games , no big deal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="group relative bg-[#131f38] hover:bg-[#182848] border border-slate-800 hover:border-orange-500/40 transition-all duration-300 rounded-2xl p-5 space-y-3 shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-wider text-slate-500 uppercase bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
                  {item.num}
                </span>
                <div className={`p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 ${item.accent} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Step</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </div>
</main>
  );
}