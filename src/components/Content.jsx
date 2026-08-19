'use client';

import { useState } from 'react';
import CustomerReviews from './Customer';
import { Heading1 } from 'lucide-react';

export default function Content() {

const [openIndex, setOpenIndex] = useState(null);

    const gamesList = [
        {
            id: 'g1',
            title: 'World Flight 26',
           
            image: '/images/word fight 26.jpg',
            desc: 'World Flight 26 is the perfect crash game and asks players to guess how far it will fly before crashing. The more the multiplier gets and the more rewards involved, making each round quite interesting and unpredictable. Timing and prompt reaction makes an essential aspect and the game is very challenging, appropriate for skillful players and novices.'
        },
        {
            id: 'g2',
            title: 'Crash',
          
            image: '/images/CRASH .jpg',
            desc: 'One of the most popular games in the Multiplier section of the game, Crash sees players observing an escalating multiplier and determining the ideal time to exit the round before it concludes. With typically brief playtimes ranging from a handful of seconds, as they would in every game, it is great for those who likes some fast entertainment and strategy.'
        },
        {
            id: 'g3',
            title: 'Crystal',
         
            image: '/images/crystal.jpg',
            desc: 'Crystal offers an enjoyable gaming experience that comes with the crystals. Crystal game is designed with crystal elements in visuals and gameplay to keep the player entertained always.'
        },
        {
            id: 'g4',
            title: 'Scratch Card',
          
            image: '/images/scratch card.jpg',
            desc: 'Scratch Card is a variation of the classic paper scratch and reveal to the online games market. Just reveal hidden symbols for possible bonuses. Each card offers a new chance allowing you to play without difficult rules or strategies.'
        },
        {
            id: 'g5',
            title: 'Burning Hot',
           
            image: '/images/BURNING HOT.jpg',
            desc: 'Burning Hot is a classic slot game with fire inspiring graphics, vibrant symbols and fun to play. The game is a quintessential slot with all modern graphics and performance on desktop and mobile.'
        },
        {
            id: 'g6',
            title: 'Western Slot',
           
            image: '/images/westren slot.jpg',
            desc: 'Step into the Wild West with Western Slot and experience frontier fun while playing a cowboy-themed slot. Mixing old-time slot fun and an innocent backdrop, this game includes symbols from the west and has a very distinct feel and atmosphere.'
        },
        {
            id: 'g7',
            title: 'Solitaire',
           
            image: '/images/solitair.jpg',
            desc: 'In this new version of card games, players enjoy a fun online experience. Players will have the opportunity to challenge themselves to complete each game based on skill, patience and strategy level, with familiar, familiar card mechanics! Great for those who like to chill out rather than the action.'
        },
        {
            id: 'g8',
            title: 'Crash Point',
         
            image: '/images/crash point .jpg',
            desc: 'Another cool-multiplier game out there is called Crash Point, in which players try to land out before the multiplier suddenly freezes. Each round is full of a different challenge, and quick thinking and smart timing pays off. This action is so fast and easy to enjoy that its an accident game players favorite game.'
        }
    ];

    const promoTypes = [
        'Welcome Bonuses for New Players',
        'Reload Bonuses',
        'Cashback Promotions',
        'VIP Bonuses',
        'Seasonal Promotions',
        'Event-Based Promotions'
    ];

    const featuresList = [
        'Wide selection of exciting instant games',
        'Fast-paced gameplay with quick results',
        'Smooth experience on desktop and mobile',
        'New games added regularly',
        'Secure and user-friendly platform',
        'Simple interface for easy navigation',
        'Entertainment for beginners and experienced players'
    ];


    const features = [
    {
      id: 'quick-deposits',
      icon: '⚡',
      title: 'Quick Deposits',
      desc: 'You can easily deposit funds into your account in just a few steps and be able to enjoy the games and sports you love without being slowed down by any unnecessary processes.',
      tag: 'INSTANT'
    },
    {
      id: 'secure-payments',
      icon: '🔒',
      title: 'Secure Payments',
      desc: 'Your payments are guaranteed safety from any hacking as we use the latest technologies to encrypt all payment processes and gateways.',
      tag: 'ENCRYPTED'
    },
    {
      id: 'quick-withdrawals',
      icon: '💸',
      title: 'Quick Withdrawals',
      desc: 'We aim at processing withdrawal requests quickly for our users so that they can have quick access to their money.',
      tag: 'FAST PAYOUT'
    },
    {
      id: 'payment-methods',
      icon: '💳',
      title: 'Payment Methods',
      desc: 'Whether it’s an online wallet, bank transfer, a card or any other type of payment, you can pick the most convenient one when using 1x Bet.',
      tag: 'MULTI-OPTION'
    },
    {
      id: 'convenient-management',
      icon: '📊',
      title: 'Convenient Account Management',
      desc: 'Our cashiers are user-friendly and provide you the opportunity to perform deposits, withdrawals, and check the transaction history.',
      tag: '24/7 DASHBOARD'
    }
  ];


    const sportsData = [
        {
            id: 'cricket',
            title: 'Cricket',
            subtitle: 'Savor Every Ball, Boundary and wicket',
            image: '/images/cricket .jpg',
            content: "Cricket is among the best of the bets to watch while playing at 1x Bet. Whether it's international matches, domestic leagues, or fast-paced T20 tournaments, players can explore a variety of betting markets throughout every stage of the game. Whether it's deciding who the winner will be or what the players will do, and of course how many runs will be scored, cricket has a lot to keep people engaged and entertained until the end of the game."
        },
        {
            id: 'football',
            title: 'Football',
            subtitle: "The World's Most Popular Sport",
            image: '/images/FOOTBALL.jpg',
            content: "With games scheduled through leagues and tournaments worldwide, football provides constant entertainment. Players can follow betting on club competitions, international championships and cup tournaments at 1x Bet with a variety of betting options. If it's any kind of prediction you like, whether it's for the winning team, the total of goals or how good they think their players will fare, football offers action all season long."
        },
        {
            id: 'basketball',
            title: 'Basketball',
            subtitle: 'Fast-Paced Action from Tip-Off to Final Buzzer',
            image: '/images/basket ball.jpg',
            content: "If you like playing high-scoring games with lots of changes of pace, then basketball will be great for you. As teams battle for victory in each quarter with jaw-dropping dunks, three-pointers and defense, new opportunities arise every quarter. Leagues, international matches and big tournaments... 1x Bet has the betting markets you need."
        },
        {
            id: 'tennis',
            title: 'Tennis',
            subtitle: 'Every Point Matters',
            image: '/images/TENNIS (1).jpg',
            content: "In a tennis match, there is exciting one-on-one play, with every serve, rally, and set kind of making a difference in real time. Players can also place their bets on the big Grand Slam events, ATP and WTA contests, and even international tournaments, you know. The games get played around the clock all year, and honestly tennis keeps giving ongoing amusement for sports fans, nonstop."
        },
        {
            id: 'volleyball',
            title: 'Volleyball',
            subtitle: 'High-Energy Indoor and Beach Competition',
            image: '/images/VOLLEYBALL.jpg',
            content: "Volleyball is a team sport, it requires skills and quick rallies. Whether it is watching indoor championships or watching players compete in beach volleyball contests, 1x Bet has a number of betting choices available on watching amazing matches taking place amongst teams from all over the world."
        },
        {
            id: 'baseball',
            title: 'Baseball',
            subtitle: 'Fast-paced thrills from the tip-off until the last buzzer',
            image: '/images/BASEBALL.jpg',
            content: "If you really enjoy high scoring matches where the rhythm keeps switching, basketball can be a great fit . Teams are always going at it, chasing victory in every quarter, with jaw dropping dunks, long range shots, and sharp defense… and then, right when you think it’s settled, fresh chances show up again. Leagues, international events, and major tournaments, 1x Bet has the betting markets you’re looking for."
        }
    ];
    const paymentMethods = [
    { name: 'UPI', logo: '/images/upi_-.png' },
    { name: 'Google Pay', logo: '/images/gpay_-.png' },
    { name: 'PhonePe', logo: '/images/phone_pe_.png' },
    { name: 'Paytm', logo: '/images/paytm (1).png' },
    { name: 'Net Banking', logo: '/images/net_backing_-.png' },
    { name: 'Visa', logo: '/images/visa-.png' },
    { name: 'Mastercard', logo: '/images/master_card-.png' },
    { name: 'Debit Cards', logo: '/images/debit_card-.png' },
    { name: 'Credit Cards', logo: '/images/credit_card.png' },
   
  ];

  const faqs = [
    {
      q: "1. How do I get an account?",
      a: "Registering an account with 1x Bet is straightforward. Simply Click on register or create account link, fill in the registration form and verify it. Your account shall be ready and you may be in a position to participate in sports betting and casinos."
    },
    {
      q: "2. Which sport can be bet on at 1x Bet ?",
      a: "1x Bet presents wide options of sports to wager on including cricket betting, football, tennis, basketball, kabaddi, badminton, volleyball, rugby, baseball, motorsports, e-sport and other several sports from all across the globe."
    },
    {
      q: "3. Is my sports betting or gambling possible using my mobile device?",
      a: "Absolutely. 1x Bet is developed for use on any kind of phone(iphone/android), tablet, computer, etc. This ensures sports fans have endless opportunities to place their bets & try the casino games with ultimate fun no matter wherever they go."
    },
    {
      q: "4. Which methods are permitted while making a deposit into the gaming wallet?",
      a: "1x Bet offers a vast collection of approved digital deposit avenues like UPI, Google Pay, PhonePe, Paytm, online banking and direct bank transfers. In addition to the standard credit/debit cards payment as well as various e-wallet options you shall be catered with. (Methods will be dependent on geographical availability)"
    },
    {
      q: "5. What method to use for funding my player account?",
      a: "Post login in your 1x Bet Account, simply navigate your path to the cash point / cashier section to go ahead for desired payment mode to transfer money and play on! Click Cashier and make your deposit and follow prompts."
    },
    {
      q: "6. What methods can be used for transferring my money out from my player account?",
      a: "For cashing out, follow steps similar to making a deposit by going to the cashier section of the user portal and withdraw the money. There you can choose one desired option (debit, credit, bank card etc) and process the withdrawal transaction through a guided prompt."
    },
    {
      q: "7. Are my transactions and personal info secured when betting online?",
      a: "Certainly! All our transactions and sensitive personal data of the clients using the gambling platform online facility from across continents, use the highest levels of sophisticated technology with high level encryption so you can play with peace of mind."
    },
    {
      q: "8. What casino games can I play at 1x Bet ?",
      a: "The 1x Bet offers numerous online gambling game options to all players: slots, live casino games, live and virtual dealer cards games like Blackjack and Baccarat, Live Poker as well as. Roulettes. All these games offer a fun betting experience to all kinds of punters."
    },
    {
      q: "9. Are there promotions or special deals at 1x Bet ?",
      a: "Yes! New and existing members can enjoy generous deposit bonuses, free bet offers, deposit match ups, cash back promotions, vip programs, a loyalty club, seasonal promotions, special offers and other benefits for making deposits. Get familiar with our ”Promotions” to see more."
    },
    {
      q: "10. How do I get in touch with 1x Bet helpdesk?",
      a: "In the event that you find issues or have questions related to your account, deposits, cash transfers, login or maybe some specific promotion; our Customer Care representatives are at disposal around the clock, ready to help. Contact us via the support on the website."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



    return (
        <div>
             <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 space-y-10 text-slate-300">
   
                {/* Main Title Banner */}
                <div className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 space-y-10 text-slate-300">
                    <h1 className="text-xl md:text-2xl font-black text-white italic tracking-wide">
                        Welcome to <span className="text-orange-500">1x Bet</span> – Your Home for Sports Betting & Online Casino Games
                    </h1>
                    <p className="text-orange-400 text-sm font-semibold mt-1">
                        Betting on Your Favorite Sports. Casino Games Available Here!
                    </p>
                </div>

                <p className="text-xs md:text-sm leading-relaxed text-slate-300">
                    <strong className="text-white">1x Bet</strong> is a contemporary online site designed specially for sports lovers and casino aficionados who value security, speed, and ease of use. If you follow some popular cricket competitions, if you cheer for your beloved football team, or just would like to explore various casino games available on our site, you have come to the right place.
                </p>

              
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-[#1a2b4c]/60 border border-slate-800 p-4 rounded-lg space-y-2">
                        <div className="text-orange-500 text-xl font-bold">📱 Cross-Platform</div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider">User-Friendly Platform</h3>
                        <p className="text-xs text-slate-400">
                            We have developed a platform that provides the best performance and convenient navigation across all devices, whether you use a PC or a phone to play.
                        </p>
                    </div>

                    <div className="bg-[#1a2b4c]/60 border border-slate-800 p-4 rounded-lg space-y-2">
                        <div className="text-orange-500 text-xl font-bold">⚽ Pre-Match & Live</div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider">In-Play Betting</h3>
                        <p className="text-xs text-slate-400">
                            Enjoy pre-match, in-play betting and various casino games on our site and get connected to the world of gambling.
                        </p>
                    </div>

                    <div className="bg-[#1a2b4c]/60 border border-slate-800 p-4 rounded-lg space-y-2">
                        <div className="text-orange-500 text-xl font-bold">🔒 Reliable & Trusted</div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider">24/7 Support</h3>
                        <p className="text-xs text-slate-400">
                            Thousands of people choose us for its reliable platform, rich betting options, entertaining casino games and customer care service.
                        </p>
                    </div>
                </div>
            </section>



            <div className="space-y-8 text-slate-300">

              
                 <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-10 space-y-10 text-slate-300">
   
                    <div className="border-b border-slate-800 pb-4">
                        <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide">
                            Begin Your Journey with Our <span className="text-orange-500">Special Offers</span>
                        </h2>
                        <p className="text-slate-400 text-xs md:text-sm mt-1">
                            Enjoy additional value across sports betting and casino gaming with our tailored rewards.
                        </p>
                    </div>

                    <p className="text-xs md:text-sm leading-relaxed">
                        New players receive special promotion opportunities that will make their journey more enjoyable right from the beginning. Eligible customers can benefit from new player offers, while repeat players can benefit from seasonal and loyalty promotions all year round. We have crafted our promotions with the aim of rewarding active players and delivering additional value in both sports betting and casino gaming.
                    </p>

                
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                            Special Promotions Available
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {promoTypes.map((promo, i) => (
                                <div key={i} className="bg-[#1a2b4c]/70 border border-slate-700/60 p-3 rounded-lg flex items-center gap-2 text-xs font-semibold text-slate-100 hover:border-orange-500 transition">
                                    <span className="text-orange-500 font-bold">✓</span> {promo}
                                </div>
                            ))}
                        </div>
                        <p className="text-[11px] text-slate-500 italic mt-2">
                            * Terms and Conditions of the relevant promotions apply.
                        </p>
                    </div>
                </section>

              
                <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-6">
                    <div className="border-b border-slate-800 pb-4">
                        <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide">
                            1x Bet <span className="text-orange-500">Instant Games</span>
                        </h2>
                    </div>

                    <p className="text-xs md:text-sm leading-relaxed">
                        1x Bet  features a great number of instant games tailored for individuals who wish to experience exciting and stimulating games. Instant games range from crash games, scratch cards, dice games, card games, and adventure-themed games that guarantee players a unique, smooth playing experience coupled with high-quality graphics and rapid rounds. Whatever your needs – from having fun during your free time to winning some money through multipliers – 1x Bet  has various instant games designed to meet those needs and suit both beginners and experienced players alike. These games can be played on the website or mobile applications and are always updated to ensure maximum fun and enjoyment.

                    </p>

                  
                    <div className="bg-[#1a2b4c]/50 border border-slate-800 p-5 rounded-lg space-y-3">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700/50 pb-2">
                            Why Play Instant Games at 1x Bet?
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                            {featuresList.map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">⚡</span> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

               
                <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-6">
                    <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                        <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide">
                            Popular <span className="text-orange-500">Games</span>
                        </h2>
                        <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2.5 py-1 rounded font-bold">
                            8 Featured Games
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {gamesList.map((game) => (
                            <div
                                key={game.id}
                                className="bg-[#1a2b4c] border border-slate-700/80 rounded-lg overflow-hidden flex flex-col group hover:border-orange-500 transition duration-300"
                            >
                            
                                <div className="relative w-full h-[180px] overflow-hidden bg-slate-900">
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase shadow">
                                        {game.badge}
                                    </span>
                                </div>

                              
                                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                                    <div>
                                        <h3 className="text-sm font-extrabold text-white group-hover:text-orange-400 transition">
                                            {game.title}
                                        </h3>
                                        <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
                                            {game.desc}
                                        </p>
                                    </div>

                                    <button className="w-full mt-3 bg-slate-800 hover:bg-orange-500 text-white text-xs font-bold py-2 rounded transition">
                                        PLAY NOW
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>





            <div className="space-y-8 text-slate-300">

              
                <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-4">
                    <div className="border-b border-slate-800 pb-4">
                        <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide">
                            Sports <span className="text-orange-500">Betting</span>
                        </h2>
                        <p className="text-orange-400 text-sm font-bold mt-1">
                            Join us for the excitement of every sporting event!
                        </p>
                    </div>

                    <p className="text-xs md:text-sm leading-relaxed text-slate-300">
                        With a variety of sports events and competitive betting markets, sports betting offers the fans an opportunity to be closer to the action but also shake hands with creativity in Anything is possible at 1x Bet. From football to cricket, from basketball to tennis, and from games and videos to esports - our platform is where you can connect with your favourite teams and players.
                    </p>

                    <p className="text-xs md:text-sm leading-relaxed text-slate-300">
                        Expect pre-match and live betting, giving you the chance to make your predictions before the game starts or bet in real-time while it is happening. A simple to utilize, intuitive sports book that sends promptly and provides an easy to use interface for making it effortless to partake in every facet of the sport.
                    </p>
                </section>

              
               <section className="space-y-6">
  {sportsData.map((sport, index) => {
    const isEven = index % 2 === 0;

    return (
      <div
        key={sport.id}
        className="bg-[#121e36] border border-slate-800 rounded-xl overflow-hidden p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
      >
       
        <div className={`w-full flex justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-lg overflow-hidden border border-slate-700/60 shadow-lg bg-slate-900 flex items-center justify-center p-1">
            <img
              src={sport.image.trim()}
              alt={sport.title}
              className="w-full h-full object-contain rounded"
              loading="lazy"
            />
         
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

    
        <div className={`space-y-3 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div>
            <h3 className="text-xl font-extrabold text-white tracking-wide">
              {sport.title}
            </h3>
            <p className="text-xs font-bold text-orange-500 mt-0.5">
              {sport.subtitle}
            </p>
          </div>

          <p className="text-xs md:text-sm leading-relaxed text-slate-300">
            {sport.content}
          </p>

          <button className="bg-[#1a2b4c] hover:bg-orange-500 text-white border border-slate-700 hover:border-orange-500 text-xs font-bold px-4 py-2 rounded transition">
            Bet on {sport.title}
          </button>
        </div>
      </div>
    );
  })}
</section>

            </div>
            {/* -------------------------------------------------------------------- */}
           
  
  
    <div className="space-y-8 text-slate-300 py-5">

      {/* SECURE AND EFFICIENT TRANSACTIONS SECTION */}
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide">
            Secure and Efficient Transactions at <span className="text-orange-500">1x Bet</span>
          </h2>
        </div>

        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          At 1x Bet , we understand that your funds management should be just as easy as making bets. We have various secure and reliable ways of payment that will help you make any deposits and withdrawals easily and quickly using advanced security software.
        </p>

        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          Be it your first deposit or your winnings withdrawal, the payment system will guarantee a fast process, convenience, and easy tracking of all transactions right on the platform. The user-friendly cashier will help you choose the desired payment option, perform a transaction, and monitor your funds.
        </p>

        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          We work with reputable payment systems to guarantee the safety of your financial information at any stage of your transaction. With several payment options, you will have constant access to sports betting, live casinos, slots, and instant games.
        </p>

        <div className="pt-2">
          <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">
            Supported Payment Options
          </h3>

          <p className="text-xs md:text-sm leading-relaxed text-slate-300 mb-6">
            1x Bet supports a variety of popular payment methods to suit players across different regions, including:
          </p>

          
          <div className="relative w-full overflow-hidden bg-white py-4 rounded-xl border border-slate-800">
           
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0e182e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0e182e] to-transparent z-10 pointer-events-none" />

          
            <div className="flex w-max gap-4 animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
             
              {[...paymentMethods, ...paymentMethods].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1a2b4c] border border-slate-700/70 rounded-lg p-2.5 px-4 flex flex-col items-center justify-center min-w-[130px] shadow-sm"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-10 w-24 object-contain rounded"
                  />
                  <span className="text-[11px] font-bold text-slate-200 mt-2 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
    {/* ------------------------------------------------------------------------- */}
    <div className="space-y-8 text-slate-300">

      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-6">
       
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide">
            Why Opt for <span className="text-orange-500">1x Bet Payments?</span>
          </h2>
          <p className="text-slate-300 text-xs md:text-sm mt-1">
            When you go for 1x Bet , you get a payment method focused on speed, security, and convenience.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a2b4c]/80 border border-slate-700/60 hover:border-orange-500 p-5 rounded-xl flex flex-col justify-between space-y-3 transition duration-300 group hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="space-y-3">
               
                <div className="flex items-center justify-between">
                  <span className="text-3xl bg-[#0e182e] p-2.5 rounded-lg border border-slate-700/80 group-hover:border-orange-500/50 transition">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-extrabold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-white group-hover:text-orange-400 transition">
                  {item.title}
                </h3>

               
                <p className="text-xs leading-relaxed text-slate-300">
                  {item.desc}
                </p>
              </div>

             
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-orange-500 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
    {/* ------------------------------------------------------------------------------------------ */}
    <div className="space-y-10 text-slate-300 py-5">
      
      <CustomerReviews />
    </div>
    {/* --------------------------------------------------------------------------------------------- */}
    <section className="relative overflow-hidden bg-gradient-to-r from-[#121e36] via-[#1a2b4c] to-[#121e36] border border-orange-500/30 rounded-xl p-6 md:p-10 text-center text-slate-300 shadow-xl shadow-orange-500/5 py-5">

      <div className="absolute -top-12 -left-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
       
        <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
          Become an <span className="text-orange-500">1x Bet</span> Member Right Now!
        </h2>

      
        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          If you like sports betting, live events, or online gambling, then 1x Bet has a state-of-the-art site that is both entertaining and reliable.
        </p>

        <p className="text-xs md:text-sm font-semibold text-slate-200">
          Join our community today and experience the thrill of sports betting and online gambling.
        </p>

       
        <div className="pt-2">
          <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm md:text-base px-8 py-3.5 rounded-lg transition duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 uppercase tracking-wider transform hover:-translate-y-0.5">
            Become a Member Now
          </button>
        </div>
      </div>
    </section>
    {/* ----------------------------------------------------------------------- */}
    <div className="space-y-10 text-slate-300 py-5">

    
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-6">
        
       
        <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide border-b border-slate-800 pb-4">
          Play Responsibly at <span className="text-orange-500">1x Bet</span>
        </h2>

       
        <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-300">
          <p>
            1x Bet believes that online gaming should be an enjoyable and entertaining experience for all gamers. We urge all our players to play responsibly by controlling their time spent playing and managing their finances accordingly. Responsible gaming is important since it will make sure that betting is just for fun and not a cause of stress.
          </p>
          <p>
            We aim to offer you a secure gaming environment with information and tools to make responsible gambling decisions.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
        
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2">
              Tips for Playing
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Responsible gaming starts with making well-informed decisions and these are:
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Responsible gaming principles start with informed choices that include, Establish and play within a personal gaming budget.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Choose a time frame, how long do you plan on playing for.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Making frequent breaks so as to ensure a good balance.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Remembering that all games rely on luck and no strategy guarantees victory.</span>
              </li>
            </ul>
          </div>

         
          <div className="bg-[#1a2b4c]/60 border border-slate-700/60 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2">
              Recognizing the Signs of Problematic Gaming
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Some of the signs that should alert you that the activity is becoming a problem include:
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Spending more money than one had originally intended.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Playing for a longer period than was intended initially.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Taking loans to gamble.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Placing bets trying to cover up for previously incurred losses.</span>
              </li>
            </ul>
          </div>

        </div>

     
        <div className="bg-[#0e182e] border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <h3 className="text-base md:text-lg font-bold text-white">
              Looking For Help?
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              In case you find it getting out of your hands you are welcome to take a time out and go to and seek advice from institutes that have solutions to problem gambling. Speak to your friends/family about the subject also as this helps you find yourself.
            </p>
          </div>
          <button className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs md:text-sm px-6 py-3 rounded-lg transition duration-300 shadow-md">
            Connect Now
          </button>
        </div>

      </section>

    </div>
    {/* -------------------------------------------------------------------------------------------- */}
    <div className="space-y-10 text-slate-300">

    
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-4">
        <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide border-b border-slate-800 pb-4">
          Our <span className="text-orange-500">Responsibility</span>
        </h2>

        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          Responsible gambling is at the heart of our responsibilities towards our clients here at 1x Bet . We try to create an atmosphere of safety, reliability, and entertainment for each individual. Through promoting responsible gambling and providing our clients with responsible gambling information, we want to make sure that each of them is having a good time.
        </p>

      
        <div className="bg-[#1a2b4c]/80 border-l-4 border-orange-500 p-4 rounded-r-lg mt-2">
          <p className="text-xs md:text-sm font-bold text-white">
            Keep In Mind: <span className="text-slate-300 font-normal">Gambling should always remain entertaining and never go beyond your means!</span>
          </p>
        </div>
      </section>
      </div>
      {/* --------------------------------------faq------------------------------------------------ */}
      <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-6 text-slate-300 py-5">
    
      <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide border-b border-slate-800 pb-4">
        General <span className="text-orange-500">Queries</span>
      </h2>

     
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#1a2b4c] border-orange-500/80 shadow-lg shadow-orange-500/5'
                  : 'bg-[#1a2b4c]/50 border-slate-700/60 hover:border-slate-600'
              }`}
            >
          
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 md:p-5 flex justify-between items-center space-x-4 focus:outline-none"
              >
                <span className="text-sm md:text-base font-extrabold text-white">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full bg-[#0e182e] flex items-center justify-center text-orange-500 text-lg font-bold transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-orange-500 text-white' : ''
                  }`}
                >
                  ↓
                </span>
              </button>

              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'max-h-[300px] opacity-100 p-4 md:p-5 pt-0 border-t border-slate-700/50'
                    : 'max-h-0 opacity-0 p-0 overflow-hidden'
                }`}
              >
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-2">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>

        </div>
    );
}
