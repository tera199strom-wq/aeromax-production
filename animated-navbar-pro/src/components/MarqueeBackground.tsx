import React from 'react';
import { servicesData } from '../data/services';

const MarqueeBackground: React.FC = () => {
  const images = servicesData.map(s => s.image);
  
  // Duplicate images to ensure smooth loop
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-15 blur-[2px]">
      <div className="flex flex-col gap-12 rotate-[-12deg] scale-125 -translate-y-20">
        {[...Array(6)].map((_, rowIndex) => (
          <div 
            key={rowIndex} 
            className={`flex gap-12 ${rowIndex % 2 === 0 ? 'animate-marquee-slow' : 'animate-marquee-reverse-slow'}`}
          >
            {duplicatedImages.map((img, idx) => (
              <div key={`row${rowIndex}-${idx}`} className="flex-shrink-0 w-80 h-48 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
    </div>
  );
};

export default MarqueeBackground;
