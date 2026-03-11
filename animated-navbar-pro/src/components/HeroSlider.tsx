import React, { useState } from 'react';

interface SliderItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const initialItems: SliderItem[] = [
  {
    id: 1,
    title: "Sound System",
    description: "Sistem tata suara berstandar internasional untuk konser, festival, dan acara korporat dengan kualitas audio yang jernih dan bertenaga.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Lighting System",
    description: "Pencahayaan artistik yang memukau untuk menciptakan atmosfer yang tepat dan memperkuat visual setiap momen di panggung.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Panggung & Rigging",
    description: "Konstruksi panggung dan sistem rigging yang kokoh dan aman untuk berbagai skala acara, dari panggung mini hingga konser stadion.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Dekorasi Event",
    description: "Sentuhan dekorasi yang elegan dan kreatif untuk mempercantik venue acara Anda, memberikan kesan mewah dan tak terlupakan.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Multimedia & LED",
    description: "Layar LED berkualitas tinggi dan solusi multimedia interaktif untuk penyampaian konten visual yang tajam dan dinamis.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Event Management",
    description: "Dukungan teknis dan manajemen acara yang profesional untuk memastikan seluruh aspek produksi berjalan dengan sempurna.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Videotron",
    description: "Penyewaan videotron LED screen berkualitas tinggi untuk kebutuhan visual event indoor maupun outdoor dengan resolusi tajam.",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function HeroSlider() {
  const [items, setItems] = useState<SliderItem[]>(initialItems);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const resetTimer = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setItems(prevItems => {
        const newItems = [...prevItems];
        const firstItem = newItems.shift()!;
        newItems.push(firstItem);
        return newItems;
      });
    }, 5000);
  }, []);

  const handleNext = React.useCallback(() => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift()!;
      newItems.push(firstItem);
      return newItems;
    });
    resetTimer();
  }, [resetTimer]);

  const handlePrev = React.useCallback(() => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop()!;
      newItems.unshift(lastItem);
      return newItems;
    });
    resetTimer();
  }, [resetTimer]);

  React.useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  return (
    <div id="home" className="slider-container mt-[52px] h-[calc(100vh-52px)]">
      <ul className="slider w-full h-full">
        {items.map((item) => (
          <li 
            key={item.id} 
            className="slider-item" 
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <div className="slider-content">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="slider-nav">
        <div className="btn prev" onClick={handlePrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </div>
        <div className="btn next" onClick={handleNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
