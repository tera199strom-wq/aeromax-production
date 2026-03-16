import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayobg9rjyJssjyfkmQ6MxLWdeZzpZtCALgg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPp-pibJvamQ18xyrzniaQrHsVeXRqAuyKQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSVJnpwfubHDaC4edGY89b05o3pcbmK2k8w&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UaZJ5JUp_54x-vk22PsPQu1OxKBSYW0FjA&s',
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg transition-transform duration-500 hover:-translate-y-2"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                <p className="text-white font-medium">Aeromax Production Event</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
