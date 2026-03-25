import React from 'react';
import { Link } from 'react-router-dom';
import HeicImage from './HeicImage';

import img1 from '../images/AERO TEAM.jpeg';
import img2 from '../images/JUDIKA.jpeg';
import img3 from '../images/DJ YASMIN.jpeg';
import img4 from '../images/JIKUSTIK.jpeg';
import img5 from '../images/NDARBOY 4.jpg';
import img6 from '../images/DENNY 4.jpg';
import img29 from '../images/DIREKTORAT JENDRAL PAJAK.jpeg';
import img30 from '../images/IMG_2450.PNG';

const galleryImages = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
            Galeri <span className="text-[#8b0000]">Event</span>
          </h2>
          <div className="w-24 h-2 bg-[#8b0000]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg transition-transform duration-500 hover:-translate-y-2"
            >
              <HeicImage 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                <p className="text-white font-medium">Aeromax Production Event</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/gallery">
            <button className="px-12 py-4 bg-red-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all duration-300 shadow-xl hover:shadow-red-600/20">
              Selebihnya
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
