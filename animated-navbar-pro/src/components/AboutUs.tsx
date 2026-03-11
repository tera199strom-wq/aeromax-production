import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the image so it follows the scroll until the last paragraph
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 150px",
        end: "bottom bottom", // Pin until the bottom of the text container
        pin: followerRef.current,
        pinSpacing: false,
        scrub: true,
        invalidateOnRefresh: true,
      });

      // Subtle floating movement on the inner wrapper to avoid conflict with pinning
      gsap.to(".floating-content", {
        y: "+=20",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animation to the text paragraphs as they enter
      gsap.utils.toArray<HTMLElement>(".about-text").forEach((text) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
            Tentang <span className="text-[#8b0000]">Kami</span>
          </h2>
          <div className="w-24 h-2 bg-[#8b0000]"></div>
        </div>

        <div ref={triggerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Left Side: Text Content */}
          <div className="space-y-16">
            <div className="about-text">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Profil Perusahaan</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Aeromax Production adalah perusahaan jasa penyedia perlengkapan acara (event vendor) 
                dan ritel yang berbasis di Karanganyar, Jawa Tengah. Kami telah membangun reputasi 
                sebagai mitra terpercaya bagi ribuan penyelenggara acara di wilayah Solo Raya dan 
                sekitarnya. Fokus utama kami adalah memberikan kualitas perlengkapan premium 
                yang didukung oleh tim teknis yang sangat berpengalaman.
              </p>
            </div>

            <div className="about-text">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Solusi Terpadu</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Kami dikenal sebagai penyedia solusi "one-stop service" untuk berbagai skala acara. 
                Mulai dari konser musik berskala stadion, festival budaya, pameran korporat, 
                hingga momen sakral seperti pernikahan. Kami memahami bahwa setiap detail sangat 
                berarti, itulah sebabnya kami mengintegrasikan seluruh kebutuhan teknis dalam 
                satu manajemen yang solid.
              </p>
            </div>

            <div className="about-text">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Layanan Profesional</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Inventaris kami mencakup teknologi panggung terkini, sistem tata suara (sound system) 
                berstandar internasional, pencahayaan (lighting) artistik, hingga dekorasi yang 
                elegan. Setiap unit perlengkapan kami melalui proses pemeliharaan rutin yang ketat 
                untuk memastikan performa maksimal saat digunakan di lapangan.
              </p>
            </div>

            <div className="about-text">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Visi & Misi</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Visi kami adalah menjadi vendor event terdepan di Jawa Tengah yang mengedepankan 
                inovasi dan kepuasan pelanggan. Misi kami adalah memberdayakan setiap penyelenggara 
                acara dengan alat dan dukungan teknis yang mereka butuhkan untuk menciptakan 
                pengalaman yang tak terlupakan bagi audiens mereka.
              </p>
            </div>

            <div className="about-text">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Wilayah Layanan</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Meskipun berbasis di Karanganyar, jangkauan layanan kami mencakup seluruh wilayah 
                Jawa Tengah dan Daerah Istimewa Yogyakarta. Kami memiliki armada logistik mandiri 
                yang siap mengirimkan dan memasang perlengkapan di berbagai lokasi, baik indoor 
                maupun outdoor, dengan ketepatan waktu yang menjadi prioritas utama kami.
              </p>
            </div>

            <div className="about-text">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Komitmen Kualitas</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Di Aeromax Production, kualitas bukan sekadar janji, melainkan standar kerja. 
                Kami terus memperbarui inventaris kami dengan tren teknologi terbaru di industri 
                event. Kami percaya bahwa kesuksesan acara Anda adalah cerminan dari dedikasi 
                kami dalam menyediakan perlengkapan yang andal dan estetis.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-start justify-center relative">
            <div 
              ref={followerRef} 
              className="w-full max-w-sm will-change-transform"
            >
              <div className="floating-content aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1-internal.aliyuncs.com/company-logo/b4e3ba9218f0884ab493e54dbde3814c.jpg" 
                  alt="Aeromax Production" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
