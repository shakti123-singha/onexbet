'use client';

import { useState, useEffect } from 'react';

export default function Customer() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Clean interface, superb coverage of sports, and an awesome betting experience from start till end.",
      author: "Rahul M."
    },
    {
      id: 2,
      rating: 5,
      text: "Casino games load fast and the platform is working just fine on my mobile.",
      author: "Priya S."
    },
    {
      id: 3,
      rating: 5,
      text: "Live betting is really good since the odds change fast and navigation is quite simple.",
      author: "Amit K."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide timing (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="bg-[#121e36] border border-slate-800 rounded-xl p-6 md:p-8 space-y-6 text-slate-300">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl md:text-2xl font-black text-white italic tracking-wide">
          Customer <span className="text-orange-500">Reviews</span>
        </h2>
      </div>

      {/* Reviews Slider Box */}
      <div className="relative overflow-hidden min-h-[170px] flex items-center justify-center bg-[#0e182e] border border-slate-800 rounded-xl p-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 z-10'
                : 'opacity-0 translate-x-6 pointer-events-none z-0'
            }`}
          >
            {/* Star Rating */}
            <div className="flex space-x-1 text-orange-500 text-base md:text-lg mb-2">
              {'★'.repeat(review.rating)}
            </div>

            {/* Review Text */}
            <p className="text-sm md:text-base font-medium italic text-slate-200 max-w-xl leading-relaxed">
              "{review.text}"
            </p>

            {/* Author */}
            <p className="mt-3 text-xs md:text-sm font-extrabold text-orange-400">
              {review.author}
            </p>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-orange-500 w-6'
                : 'bg-slate-700 w-2 hover:bg-slate-500'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}