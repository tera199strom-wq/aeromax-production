import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  Info,
  Settings,
  Image as ImageIcon,
  MessageSquare,
  Phone
} from 'lucide-react';
import StaggeredMenu from './StaggeredMenu';
import aeromaxLogo from '../images/aeromax-1_page-0001.jpg';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={18} className="mr-2" />, href: '/' },
  { id: 'about', label: 'Tentang', icon: <Info size={18} className="mr-2" />, href: '/#about' },
  { id: 'layanan', label: 'Layanan', icon: <Settings size={18} className="mr-2" />, href: '/#layanan' },
  { id: 'gallery', label: 'Galeri', icon: <ImageIcon size={18} className="mr-2" />, href: '/#gallery' },
  { id: 'testimonials', label: 'Testimoni', icon: <MessageSquare size={18} className="mr-2" />, href: '/#testimonials' },
  { id: 'contact', label: 'Kontak', icon: <Phone size={18} className="mr-2" />, href: '/#contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectorStyle, setSelectorStyle] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  const menuItems = navItems.map(item => ({
    label: item.label,
    ariaLabel: `Go to ${item.label}`,
    link: item.href
  }));

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/aeromaxproduction?igsh=MTNkbjFta2twYThlNA==' },
    { label: 'WhatsApp', link: 'https://wa.me/6282323841622' },
    { label: 'TikTok', link: 'https://www.tiktok.com/@aeromaxproduction?_r=1&_t=ZS-950Dbiji65A' }
  ];

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

      if (location.pathname === '/') {
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
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Initial update
    setTimeout(updateSelector, 100);

    // Update on resize
    const handleResize = () => {
      setTimeout(updateSelector, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isScrolled ? 'bg-[#ef4444] shadow-lg' : 'bg-navbar-bg'}
      `}
      style={{ '--nav-bg': '#ef4444' } as React.CSSProperties}
    >
      {/* Mobile Menu (StaggeredMenu) */}
      <div className="lg:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#000000"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={['#ef4444', '#000000']}
          logoUrl={aeromaxLogo}
          accentColor="#ef4444"
          isFixed={true}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 hidden lg:flex items-center justify-between lg:justify-start h-16 lg:h-auto">
        <Link className="py-2 pl-0 pr-4 flex items-center" to="/">
          <img 
            src={aeromaxLogo} 
            alt="Aeromax Production" 
            className="h-9 w-auto object-contain rounded-lg shadow-sm"
            loading="lazy"
          />
        </Link>
        
        <div className={`
          relative top-0 left-0 w-auto 
          bg-transparent
          transition-all duration-300
          flex ml-auto
        `}>
          <ul ref={navRef} className="relative flex flex-row p-0 m-0 list-none">
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
                {item.href.startsWith('/#') ? (
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
                ) : (
                  <Link 
                    to={item.href} 
                    className={`
                      flex items-center px-5 py-5 text-sm no-underline transition-all duration-500
                      ${activeTab === item.id ? 'text-navbar-bg' : 'text-white/50'}
                    `}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
