import React, { useState, useEffect, useRef } from 'react';
import { 
  Home,
  Info,
  Settings,
  Image as ImageIcon,
  MessageSquare,
  Phone,
  Menu, 
  X 
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={18} className="mr-2" />, href: '#' },
  { id: 'about', label: 'Tentang', icon: <Info size={18} className="mr-2" />, href: '#about' },
  { id: 'layanan', label: 'Layanan', icon: <Settings size={18} className="mr-2" />, href: '#layanan' },
  { id: 'gallery', label: 'Galeri', icon: <ImageIcon size={18} className="mr-2" />, href: '#gallery' },
  { id: 'testimonials', label: 'Testimoni', icon: <MessageSquare size={18} className="mr-2" />, href: '#testimonials' },
  { id: 'contact', label: 'Kontak', icon: <Phone size={18} className="mr-2" />, href: '#contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectorStyle, setSelectorStyle] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const updateSelector = () => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector('.active') as HTMLElement;
      if (activeElement) {
        setSelectorStyle({
          top: activeElement.offsetTop,
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
          height: activeElement.offsetHeight,
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = navItems.map(item => ({
        id: item.id,
        offset: item.id === 'home' ? 0 : document.getElementById(item.id)?.offsetTop || 0
      })).filter(s => s.id === 'home' || s.offset > 0);

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          const newId = sections[i].id;
          setActiveTab(prev => {
            if (prev !== newId) return newId;
            return prev;
          });
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initial update
    setTimeout(updateSelector, 100);

    // Update on resize
    const handleResize = () => {
      setTimeout(updateSelector, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab, isMenuOpen]);

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isScrolled ? 'bg-[#ef4444] shadow-lg' : 'bg-navbar-bg'}
      `}
      style={{ '--nav-bg': '#ef4444' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between lg:justify-start h-16 lg:h-auto">
        <a className="py-2 pl-0 pr-4 flex items-center" href="#">
          <img 
            src="/aeromax-1_page-0001.jpg" 
            alt="Aeromax Production" 
            className="h-9 w-auto object-contain rounded-lg shadow-sm"
          />
        </a>
        
        <button 
          className="lg:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`
          absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto 
          bg-navbar-bg lg:bg-transparent
          transition-all duration-300 overflow-hidden
          ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'}
          lg:flex lg:ml-auto
        `}>
          <ul ref={navRef} className="relative flex flex-col lg:flex-row p-0 m-0 list-none">
            <div 
              className="hori-selector"
              style={{
                top: `${selectorStyle.top}px`,
                left: `${selectorStyle.left}px`,
                width: `${selectorStyle.width}px`,
                height: `${selectorStyle.height}px`,
              }}
            >
              <div className="left"></div>
              <div className="right"></div>
            </div>

            {navItems.map((item) => (
              <li 
                key={item.id} 
                className={`nav-item relative z-10 ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                }}
              >
                <a 
                  href={item.href} 
                  className={`
                    flex items-center px-5 py-5 text-sm no-underline transition-all duration-500
                    ${activeTab === item.id ? 'text-navbar-bg' : 'text-white/50'}
                  `}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
