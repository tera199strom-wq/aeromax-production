import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

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
        end: () => {
          const triggerHeight = triggerRef.current?.offsetHeight || 0;
          const followerHeight = followerRef.current?.offsetHeight || 0;
          // Stop pinning exactly when the image reaches the bottom of the text container
          return `+=${Math.max(0, triggerHeight - followerHeight)}`;
        },
        pin: followerRef.current,
        pinSpacing: false,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-2">
            Aeromax <span className="text-[#8b0000]">Production</span>
          </h2>
          <p className="text-2xl font-serif italic text-slate-500 mb-4">"Partner Your Entertainment"</p>
          <div className="w-24 h-2 bg-[#8b0000] mb-8"></div>
          <h3 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">Tentang Kami</h3>
        </div>

        <div ref={triggerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Left Side: Text Content */}
          <div className="space-y-12">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={2}
              blurStrength={4}
              textClassName="text-lg text-slate-600 leading-relaxed"
            >
              Aeromax Production adalah perusahaan yang bergerak di industri entertainment dan penyedia kebutuhan produksi event profesional. Kami hadir sebagai partner terpercaya dalam mendukung berbagai jenis acara dengan konsep yang kreatif, teknis yang profesional, dan eksekusi yang terorganisir dengan baik.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={2}
              blurStrength={4}
              textClassName="text-lg text-slate-600 leading-relaxed"
            >
              Sebagai “Partner Your Entertainment”, Aeromax Production berkomitmen untuk membantu mewujudkan setiap event menjadi pengalaman yang berkesan, aman, dan berkualitas. Dengan dukungan tim berpengalaman serta peralatan produksi yang lengkap dan terawat, kami siap mendukung berbagai kebutuhan teknis acara.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={2}
              blurStrength={4}
              textClassName="text-lg text-slate-600 leading-relaxed"
            >
              Layanan kami meliputi penyediaan panggung dan rigging, sound system, lighting, videotron, multimedia, hingga tenda sarnafil untuk berbagai jenis kegiatan seperti konser, festival, event perusahaan, kegiatan komunitas, hingga acara pemerintahan.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={2}
              blurStrength={4}
              textClassName="text-lg text-slate-600 leading-relaxed"
            >
              Dengan semangat profesionalitas dan pelayanan terbaik, Aeromax Production terus berinovasi untuk memberikan solusi produksi event yang kreatif, modern, dan terpercaya bagi setiap klien dan mitra kami. Kami adalah perusahaan vendor event yang menyewakan berbagai peralatan untuk menunjang kebutuhan berbagai acara seperti Konser, Festival, Karnaval, Wedding, Seminar, dan segala acara yang membutuhkan peralatan entertainment. Dengan dukungan peralatan lengkap, tenaga profesional, serta komitmen terhadap kualitas dan keselamatan, kami siap menjadi mitra terpercaya dalam mewujudkan acara yang sukses dan berkesan.
            </ScrollReveal>
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
