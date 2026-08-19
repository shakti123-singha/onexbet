'use client';

import { useState, useEffect } from 'react';

// Slides data with split layout support (video on left, image/content on right)
const slides = [
  {
    id: 1,
    title: 'BEST ODDS',
    highlight: '& LIVE CASINO',
    subtitle: '100% WELCOME BONUS',
    cta: 'EXPLORE BETTING',
    videoSrc: '/images/casino.mp4',
    imageSrc: '/images/hockey.jpg',
  },
  {
    id: 2,
    title: 'SPORTS BETTING',
    highlight: 'HIGH ODDS & LIVESTREAM',
    subtitle: 'BET ON YOUR FAVORITE TEAMS',
    cta: 'BET NOW',
    videoSrc: '/images/cricket.mp4',
    imageSrc: '/images/SportsBetting.jpg',
  },
  {
    id: 3,
    title: 'SLOT GAMES',
    highlight: 'MEGA JACKPOT $1,000,000',
    subtitle: 'SPIN AND WIN DAILY TOURNAMENTS',
    cta: 'PLAY SLOTS',
    videoSrc: '/images/onexbet.mp4',
    imageSrc: '/images/SLOTS.jpg',
  },
  {
    id: 4,
    title: 'VIP CLUB',
    highlight: 'EXCLUSIVE REWARDS',
    subtitle: 'GET UP TO 20% WEEKLY CASHBACK',
    cta: 'CLAIM VIP',
    videoSrc: '/images/vip club.mp4',
    imageSrc: '/images/kabbadi .jpg',
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0e182e] border border-slate-800 shadow-2xl h-[380px] md:h-[420px]">

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out grid grid-cols-1 md:grid-cols-2 h-full ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          {/* LEFT SIDE: Text Overlay & Auto-playing Video */}
          <div className="relative flex flex-col justify-center p-6 md:p-10 space-y-4 bg-gradient-to-r from-slate-950 via-[#0e182e] to-transparent z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold italic tracking-tight text-white leading-tight">
              {slide.title} <br />
              <span className="text-orange-500">{slide.highlight}</span>
            </h1>
            <p className="text-slate-200 text-xs md:text-sm font-medium">
              JOIN NOW! <span className="text-orange-400 font-bold">{slide.subtitle}</span>
            </p>
            <div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg uppercase tracking-wider text-xs transition transform hover:scale-105 shadow-lg">
                {slide.cta}
              </button>
            </div>
          </div>

        
          <div className="relative hidden md:grid grid-cols-2 h-full border-l border-slate-800/50">
            {/* Left 50% Partition: Video */}
            <div className="relative h-full overflow-hidden border-r border-slate-800/80">
              <video
                src={slide.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              <span className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded animate-pulse">
                LIVE STREAM
              </span>
            </div>

            {/* Right 50% Partition: Image */}
            <div className="relative h-full overflow-hidden">
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      ))}
l
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition text-xs"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition text-xs"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Carousel Indicator Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-orange-500 w-6' : 'bg-slate-500/70 w-2.5 hover:bg-slate-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}