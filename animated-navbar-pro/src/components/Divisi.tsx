import React from 'react';
import FlowingMenu from './FlowingMenu';
import { divisionsData } from '../data/services';

const Divisi = () => {
  const menuItems = divisionsData.map((divisi) => ({
    link: `/service/${divisi.slug}`,
    text: divisi.title,
    image: (divisi as any).menuImage || divisi.image,
    imageFit: divisi.slug === 'multimedia' ? 'contain' : 'cover'
  }));

  return (
    <section id="divisi" className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
          Divisi <span className="text-red-600">Kami</span>
        </h2>
        <div className="w-24 h-2 bg-red-600 mb-8"></div>
        <p className="text-xl text-gray-400 max-w-2xl">
          Layanan profesional kami terbagi menjadi beberapa divisi khusus untuk memastikan setiap aspek acara Anda ditangani oleh ahlinya.
        </p>
      </div>

      <div style={{ height: '700px', position: 'relative' }} className="border-y border-white/10">
        <FlowingMenu 
          items={menuItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#000000"
          marqueeBgColor="#dc2626"
          marqueeTextColor="#ffffff"
          borderColor="#1f2937"
        />
      </div>
    </section>
  );
};

export default Divisi;
