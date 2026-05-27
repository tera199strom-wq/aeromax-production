import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import HeicImage from './HeicImage';
import './Masonry.css';

interface MasonryItem {
  id: string;
  img: string;
  url?: string;
  height: number;
  rotateLeft?: boolean;
}

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const get = () => {
    if (typeof window === 'undefined' || !window.matchMedia) return defaultValue;
    const index = queries.findIndex(q => window.matchMedia(q).matches);
    return index !== -1 ? values[index] : defaultValue;
  };
  const [value, setValue] = useState(get);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const handler = () => setValue(get);
    const mqls = queries.map(q => window.matchMedia(q));
    mqls.forEach(mql => mql.addEventListener('change', handler));
    return () => mqls.forEach(mql => mql.removeEventListener('change', handler));
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'top',
  scaleOnHover = true,
  hoverScale = 1.02,
  blurToFocus = true,
  colorShiftOnHover = false
}: MasonryProps) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [selectedItem, setSelectedItem] = useState<MasonryItem | null>(null);

  const getInitialPosition = (item: any) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right'];
      direction = directions[Math.floor(Math.random() * directions.length)] as any;
    }

    switch (direction) {
      case 'top': return { x: item.x, y: item.y - 30 };
      case 'bottom': return { x: item.x, y: item.y + 30 };
      case 'left': return { x: item.x - 30, y: item.y };
      case 'right': return { x: item.x + 30, y: item.y };
      case 'center': return { x: item.x, y: item.y, scale: 0.95 };
      default: return { x: item.x, y: item.y + 30 };
    }
  };

  const { grid, totalHeight } = useMemo(() => {
    if (!width) return { grid: [], totalHeight: 0 };
    
    // Ensure columns is a positive integer to avoid RangeError: Invalid array length
    const safeColumns = Math.max(1, Math.floor(columns || 1));
    const colHeights = new Array(safeColumns).fill(0);
    const columnWidth = width / safeColumns;

    const gridData = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = child.height / 2;
      const y = colHeights[col];
      colHeights[col] += height;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    return { grid: gridData, totalHeight: Math.max(...colHeights) };
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (width === 0) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(8px)' })
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.6,
          ease: 'power2.out',
          delay: index * stagger,
          clearProps: 'filter'
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [grid, stagger, animateFrom, blurToFocus, duration, ease, width]);

  const handleMouseEnter = (e: React.MouseEvent, item: any) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover) {
      gsap.to(selector, { scale: hoverScale, duration: 0.3, ease: 'power2.out', zIndex: 20 });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent, item: any) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover) {
      gsap.to(selector, { scale: 1, duration: 0.3, ease: 'power2.out', zIndex: 10 });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <>
      <div ref={containerRef} className="list" style={{ height: `${totalHeight + 20}px` }}>
        {grid.map(item => (
          <div
            key={item.id}
            data-key={item.id}
            className="item-wrapper"
            onClick={() => setSelectedItem(item)}
            onMouseEnter={e => handleMouseEnter(e, item)}
            onMouseLeave={e => handleMouseLeave(e, item)}
          >
            <div className="item-img overflow-hidden">
              <HeicImage 
                src={item.img} 
                alt={`Gallery item ${item.id}`}
                className={item.rotateLeft ? 'rotate-left-img' : 'w-full h-full object-cover'}
                style={item.rotateLeft ? {
                  width: `${item.h}px`,
                  height: `${item.w}px`,
                } : undefined}
                loading="lazy"
                decoding="async"
              />
              {colorShiftOnHover && (
                <div
                  className="color-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                    opacity: 0,
                    pointerEvents: 'none',
                    borderRadius: '8px'
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="lightbox-overlay" onClick={() => setSelectedItem(null)}>
          <button className="lightbox-close" onClick={() => setSelectedItem(null)}>&times;</button>
          <HeicImage 
            src={selectedItem.img} 
            alt="Enlarged gallery item" 
            className={`lightbox-content ${selectedItem.rotateLeft ? 'rotate-left-lightbox' : ''}`} 
            decoding="async"
          />
        </div>
      )}
    </>
  );
};

export default Masonry;
