import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 px-6 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Hubungi <span className="text-[#8b0000]">Kami</span>
          </h2>
          <div className="w-24 h-2 bg-[#8b0000]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8b0000] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Alamat</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Kepuh, RT.1/RW.3, Ngaliyan, Lalung, Kec. Karanganyar, <br />
                    Kabupaten Karanganyar, Jawa Tengah 57716
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8b0000] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Telepon</h3>
                  <p className="text-slate-400">0823 2384 1622</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8b0000] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-slate-400">info@aeromaxproduction.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8b0000] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
                  <p className="text-slate-400">Senin - Sabtu: 08:00 - 17:00</p>
                  <p className="text-slate-400">Minggu: Tutup (Kecuali Event)</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700">
              <h4 className="text-2xl font-bold mb-4">Siap Mewujudkan Event Anda?</h4>
              <p className="text-slate-400 mb-6">Konsultasikan kebutuhan perlengkapan acara Anda dengan tim profesional kami secara gratis.</p>
              <a 
                href="https://wa.me/6282323841622" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#8b0000] text-white font-bold rounded-full hover:bg-[#a00000] transition-colors"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[500px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.655597895285!2d110.94353892489352!3d-7.6124033252528545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a2288c62a6d19%3A0x673e1fd28aa3031a!2sAeromax%20Sound%20System!5e0!3m2!1sid!2sid!4v1773222037085!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Aeromax Sound System Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
