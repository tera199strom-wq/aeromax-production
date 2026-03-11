import React from 'react';
import FlowingMenu from './FlowingMenu';

const divisiItems = [
  { link: '#', text: 'Sound System', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop' },
  { link: '#', text: 'Concert', image: '/concert-bg.jpeg' },
  { link: '#', text: 'Lighting', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop' },
  { link: '#', text: 'Multimedia', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162&auto=format&fit=crop' }
];

const Divisi = () => {
  return (
    <section id="divisi" className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Divisi Kami</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Layanan profesional kami terbagi menjadi beberapa divisi khusus untuk memastikan setiap aspek acara Anda ditangani oleh ahlinya.
        </p>
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu 
          items={divisiItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#000000"
          marqueeBgColor="#ef4444"
          marqueeTextColor="#ffffff"
          borderColor="#333333"
        />
      </div>
    </section>
  );
};

export default Divisi;
