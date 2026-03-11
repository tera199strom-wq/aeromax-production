import React from 'react';

const services = [
  {
    title: 'Soundsystem',
    hue: 220,
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=500&q=60',
    details: ['Konser', 'Karnaval', 'Wedding', 'Hajatan', 'Meeting', 'Ceremony']
  },
  {
    title: 'Lighting',
    hue: 170,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=60',
    details: ['Moving Heads', 'PAR LED', 'Follow Spots', 'Haze Machines', 'Lighting Console']
  },
  {
    title: 'Videotron',
    hue: 350,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=60',
    details: ['Indoor LED Screen', 'Outdoor LED Screen', 'P3.9 / P2.5 Resolution', 'Video Processor', 'Live Visuals']
  },
  {
    title: 'Multicam',
    hue: 280,
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=500&q=60',
    details: ['4K Cameras', 'Video Switcher', 'Live Streaming', 'Camera Crane', 'Professional Crew']
  },
  {
    title: 'Stage rigging',
    hue: 200,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=500&q=60',
    details: ['Aluminum Truss', 'Stage Platforms', 'Roofing Systems', 'Chain Hoists', 'Safety Certified']
  },
  {
    title: 'Tenda sarnavil',
    hue: 40,
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=500&q=60',
    details: ['3x3m Sarnavil', '5x5m Sarnavil', 'Clean White Fabric', 'Flooring Options', 'AC / Cooling']
  },
  {
    title: 'Barikade',
    hue: 0,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=60',
    details: ['Mojo Barriers', 'Crowd Control', 'Row Barricades', 'Safety Gates', 'Heavy Duty']
  },
  {
    title: 'Genset',
    hue: 120,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=60',
    details: ['Silent Generator', '60kVA - 500kVA', 'Fuel Management', 'Power Distribution', 'Operator Standby']
  }
];

const Layanan: React.FC = () => {
  return (
    <section id="layanan" className="py-20 bg-[#12141d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-outfit font-bold text-white mb-4">Layanan Kami</h2>
          <div className="w-24 h-1 bg-[#ef4444] mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Kami menyediakan berbagai kebutuhan produksi event dengan kualitas terbaik dan tim profesional.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flip-card-container" 
              style={{ '--hue': service.hue } as React.CSSProperties}
            >
              <div className="flip-card">
                <div className="card-front">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={service.image} alt={service.title} />
                  </figure>

                  <button className="book-btn">{service.title}</button>
                </div>

                <div className="card-back">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={service.image} alt={service.title} />
                  </figure>

                  <ul>
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
