import React from 'react';

const testimonials = [
  { name: 'Andi Pratama', text: 'Layanan sound system yang sangat profesional. Suara jernih dan tim sangat kooperatif.', role: 'Event Organizer' },
  { name: 'Siti Aminah', text: 'Pernikahan saya jadi luar biasa berkat dekorasi dan tata cahaya dari Aeromax.', role: 'Bride' },
  { name: 'Budi Santoso', text: 'Panggung kokoh dan aman. Sangat merekomendasikan untuk konser skala besar.', role: 'Promoter' },
  { name: 'Dewi Lestari', text: 'Tim teknis sangat sigap. Masalah kecil langsung teratasi sebelum acara dimulai.', role: 'Corporate Client' },
  { name: 'Rizky Fauzi', text: 'Harga kompetitif dengan kualitas perlengkapan yang sangat premium.', role: 'Wedding Planner' },
  { name: 'Maya Sari', text: 'Sangat puas dengan hasil kerja Aeromax Production. Sukses terus!', role: 'Birthday Party' },
];

const MarqueeRow = ({ items, direction = 'left' }: { items: typeof testimonials, direction?: 'left' | 'right' }) => {
  return (
    <div className="flex overflow-hidden select-none gap-6 group">
      <div className={`flex flex-shrink-0 gap-6 min-w-full ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'} group-hover:pause`}>
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[350px] p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-slate-600 italic mb-6">"{item.text}"</p>
            <div>
              <h4 className="font-bold text-slate-900">{item.name}</h4>
              <p className="text-sm text-[#8b0000] font-medium">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={`flex flex-shrink-0 gap-6 min-w-full ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'} group-hover:pause`} aria-hidden="true">
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[350px] p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-slate-600 italic mb-6">"{item.text}"</p>
            <div>
              <h4 className="font-bold text-slate-900">{item.name}</h4>
              <p className="text-sm text-[#8b0000] font-medium">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
          Testimoni <span className="text-[#8b0000]">Klien</span>
        </h2>
        <div className="w-24 h-2 bg-[#8b0000]"></div>
      </div>

      <div className="flex flex-col gap-8">
        <MarqueeRow items={testimonials} direction="left" />
        <MarqueeRow items={[...testimonials].reverse()} direction="right" />
        <MarqueeRow items={testimonials.slice(2).concat(testimonials.slice(0, 2))} direction="left" />
      </div>
    </section>
  );
}
