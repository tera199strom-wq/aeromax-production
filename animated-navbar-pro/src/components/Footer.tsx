import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import aeromaxLogo from '../images/aeromax-1_page-0001.jpg';

const TikTokIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const socialLinks = [
  { 
    name: 'Instagram', 
    icon: <Instagram size={20} />, 
    url: 'https://www.instagram.com/aeromaxproduction?igsh=MTNkbjFta2twYThlNA==',
    color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]'
  },
  { 
    name: 'TikTok', 
    icon: <TikTokIcon />, 
    url: 'https://www.tiktok.com/@aeromaxproduction?_r=1&_t=ZS-950Dbiji65A',
    color: 'hover:bg-black'
  },
  { 
    name: 'Instagram Media', 
    icon: <Instagram size={20} />, 
    url: 'https://www.instagram.com/aeromediaproduction?igsh=MTJ2NzZ2Nm9lN2I5Yg==',
    color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]'
  },
  { 
    name: 'TikTok Media', 
    icon: <TikTokIcon />, 
    url: 'https://www.tiktok.com/@aeromedia.production?_r=1&_t=ZS-950DhEHjdDe',
    color: 'hover:bg-black'
  },
  { 
    name: 'YouTube', 
    icon: <Youtube size={20} />, 
    url: 'https://youtube.com/@aeromedia.production?si=VagfPXwXbJfSNiTg',
    color: 'hover:bg-[#ff0000]'
  },
  { 
    name: 'Facebook', 
    icon: <Facebook size={20} />, 
    url: 'https://www.facebook.com/share/1QBKwCztpq/',
    color: 'hover:bg-[#1877f2]'
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="footer-magic-wrapper z-0">
          <div className="bg-white rounded-[36px] shadow-2xl p-12 relative overflow-hidden w-full h-full z-10">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef4444]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b0000]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="space-y-6 lg:col-span-1">
                <div className="flex items-center">
                  <img 
                    src={aeromaxLogo} 
                    alt="Aeromax Production" 
                    className="h-14 w-auto rounded-2xl"
                    loading="lazy"
                  />
                </div>
                <p className="text-slate-500 leading-relaxed">
                  Penyedia perlengkapan acara premium dan solusi terpadu untuk setiap momen spesial Anda di wilayah Solo Raya dan sekitarnya.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`
                        shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 text-slate-600 
                        ${social.color} hover:text-white transition-colors duration-300 shadow-sm
                      `}
                      title={social.name}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Navigasi</h4>
                <ul className="space-y-4">
                  {['Home', 'Tentang', 'Galeri', 'Testimoni', 'Kontak'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-[#ef4444] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Layanan</h4>
                <ul className="space-y-4 text-slate-500">
                  <li>Sound System</li>
                  <li>Lighting System</li>
                  <li>Panggung & Rigging</li>
                  <li>Dekorasi Event</li>
                  <li>Multimedia & LED</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Hubungi Kami</h4>
                <div className="space-y-4 text-slate-500">
                  <p>Jl. Raya Solo-Tawangmangu, Karanganyar, Jawa Tengah</p>
                  <p>0823 2384 1622</p>
                  <p>info@aeromaxproduction.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>© 2026 Aeromax Production. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
