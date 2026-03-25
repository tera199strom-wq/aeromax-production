import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ArrowLeft } from 'lucide-react';
import MarqueeBackground from '../components/MarqueeBackground';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#12141d] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-red-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* Marquee Background */}
      <MarqueeBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col">
        <Link to="/" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8 transition-colors group">
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Home
        </Link>

        {/* Big Horizontal Card */}
        <div className="bg-[#12141d]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Banner Image */}
          <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white leading-tight mb-2">
                {service.title}
              </h1>
              <div className="w-24 h-2 bg-red-600"></div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
            {/* Left Column: Description */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-600/20 text-red-500 rounded-lg flex items-center justify-center mr-3 text-sm">01</span>
                  Penjelasan Layanan
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {service.longDescription}
                </p>
              </section>

              {service.models && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-red-600/20 text-red-500 rounded-lg flex items-center justify-center mr-3 text-sm">02</span>
                    Model & Peralatan
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.models.map((model, idx) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-red-500/50 transition-colors">
                        <p className="text-gray-200 font-medium">{model}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column: Specs & CTA */}
            <div className="space-y-8">
              {service.specs && (
                <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-red-500">Spesifikasi Teknis</h3>
                  <div className="space-y-4">
                    {service.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="text-gray-400 text-sm">{spec.label}</span>
                        <span className="text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <div className="pt-4">
                <a 
                  href={`https://wa.me/6281234567890?text=Halo Aeromax, saya tertarik dengan layanan ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-8 py-5 rounded-2xl font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-red-600/20"
                >
                  Hubungi Kami Sekarang
                </a>
                <p className="text-center text-gray-500 text-sm mt-4 italic">
                  Tersedia untuk berbagai skala acara di seluruh Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
