import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { divisionsData } from '../data/services';

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const items = divisionsData;

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, 5000);
  }, [items.length]);

  const handleNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % items.length);
    resetTimer();
  }, [items.length, resetTimer]);

  const handlePrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + items.length) % items.length);
    resetTimer();
  }, [items.length, resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  return (
    <div id="home" className="slider-container mt-[52px] h-[calc(100vh-52px)] relative overflow-hidden">
      <ul 
        className="slider flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => (
          <li 
            key={item.id} 
            className="slider-item shrink-0 w-full h-full relative bg-center bg-cover" 
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="slider-content relative z-10 flex flex-col justify-center h-full px-6 md:px-24 max-w-4xl">
              <h2 className="title text-white font-black uppercase text-3xl md:text-6xl mb-4 drop-shadow-lg" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                {item.title}
              </h2>
              <p className="description text-white text-base md:text-xl mb-8 drop-shadow-md leading-relaxed line-clamp-3 md:line-clamp-none">
                {item.description}
              </p>
              <Link to={`/service/${item.slug}`}>
                <button className="w-fit bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-md px-8 py-3 cursor-pointer hover:bg-white hover:text-black transition-all font-bold tracking-wider">
                  Selengkapnya
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="slider-nav absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        <div className="btn prev bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border-2 border-white/50 p-3 rounded-full cursor-pointer transition-all flex items-center justify-center" onClick={handlePrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </div>
        <div className="btn next bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border-2 border-white/50 p-3 rounded-full cursor-pointer transition-all flex items-center justify-center" onClick={handleNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
