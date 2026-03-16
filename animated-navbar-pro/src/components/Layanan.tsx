import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Layanan: React.FC = () => {
  return (
    <section id="layanan" className="w-full bg-slate-50 py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 mb-6">
              Layanan <span className="text-red-600">Kami</span>
            </h2>
            <div className="w-24 h-2 bg-red-600 mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Kami menyediakan berbagai kebutuhan produksi event dengan kualitas terbaik dan tim profesional yang berpengalaman di bidangnya.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className="flip-card-container"
              style={{ '--hue': (index * 45) % 360 } as React.CSSProperties}
            >
              <div className="flip-card">
                <div className="card-front">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={service.image} alt={service.title} />
                    <figcaption>{service.title}</figcaption>
                  </figure>
                </div>

                <div className="card-back">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={service.image} alt={service.title} />
                  </figure>
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{service.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-4">
                      {service.description}
                    </p>
                  </div>
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
