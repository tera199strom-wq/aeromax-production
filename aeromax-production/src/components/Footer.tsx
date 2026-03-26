import React from 'react';
import { Instagram } from 'lucide-react';
import aeromaxLogo from '../images/aeromax-1_page-0001.jpg';

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
              <div className="space-y-6">
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
                <div className="flex items-center gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#ef4444] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
                  >
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
                  </a>
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
                  <p>+62 812-3456-7890</p>
                  <p>info@aeromaxproduction.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>© 2024 Aeromax Production. All rights reserved.</p>
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
