import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Masonry from '../components/Masonry';
import Navbar from '../components/Navbar';

import img1 from '../images/AERO TEAM.jpeg';
import img2 from '../images/JUDIKA.jpeg';
import img3 from '../images/DJ YASMIN.jpeg';
import img4 from '../images/JIKUSTIK.jpeg';
import img5 from '../images/NDARBOY 4.jpg';
import img6 from '../images/DENNY 4.jpg';
import img7 from '../images/AU.jpeg';
import img8 from '../images/DENNY 2.jpg';
import img9 from '../images/DENNY 3.jpg';
import img10 from '../images/DSC04565.jpg';
import img11 from '../images/DSC04569.jpg';
import img12 from '../images/DSC04598.jpg';
import img13 from '../images/DSC04631.jpg';
import img14 from '../images/DSC04640.jpg';
import img15 from '../images/KHATULISTIWA.jpeg';
import img16 from '../images/LAVORA.jpg';
import img17 from '../images/NANDA XTREME.jpeg';
import img18 from '../images/SETUP.jpeg';
import img19 from '../images/WhatsApp Image 2026-03-13 at 12.02.06.jpeg';
import img20 from '../images/WhatsApp Image 2026-03-13 at 12.02.09.jpeg';
import img21 from '../images/WhatsApp Image 2026-03-13 at 12.02.11 (1).jpeg';
import img22 from '../images/WhatsApp Image 2026-03-13 at 12.02.11.jpeg';
import img23 from '../images/WhatsApp Image 2026-03-13 at 12.02.12.jpeg';
import img24 from '../images/WhatsApp Image 2026-03-13 at 14.47.28.jpeg';
import img25 from '../images/WhatsApp Image 2026-03-13 at 14.50.22.jpeg';
import img26 from '../images/WhatsApp Image 2026-03-13 at 14.51.11.jpeg';
import img27 from '../images/WhatsApp Image 2026-03-13 at 14.51.22.jpeg';
import img28 from '../images/WhatsApp Image 2026-03-13 at 14.56.55.jpeg';
import img29 from '../images/DIREKTORAT JENDRAL PAJAK.jpeg';
import img30 from '../images/IMG_2450.PNG';
import img31 from '../images/IMG_2451.PNG';
import img32 from '../images/IMG_2445.PNG';
import img33 from '../images/IMG_2449.PNG';
import img34 from '../images/C0117T01.jpg';
import img35 from '../images/lighting.jpg';

const galleryItems = [
  { id: '1', img: img1, height: 600 },
  { id: '2', img: img2, height: 400 },
  { id: '3', img: img3, height: 700 },
  { id: '4', img: img4, height: 500 },
  { id: '5', img: img5, height: 800 },
  { id: '6', img: img6, height: 450 },
  { id: '7', img: img7, height: 650 },
  { id: '8', img: img8, height: 550 },
  { id: '9', img: img9, height: 750 },
  { id: '10', img: img10, height: 480 },
  { id: '11', img: img11, height: 620 },
  { id: '12', img: img12, height: 580 },
  { id: '13', img: img13, height: 640 },
  { id: '14', img: img14, height: 420 },
  { id: '15', img: img15, height: 720 },
  { id: '16', img: img16, height: 530 },
  { id: '17', img: img17, height: 780 },
  { id: '18', img: img18, height: 460 },
  { id: '19', img: img19, height: 670 },
  { id: '20', img: img20, height: 590 },
  { id: '21', img: img21, height: 710 },
  { id: '22', img: img22, height: 490 },
  { id: '23', img: img23, height: 630 },
  { id: '24', img: img24, height: 560 },
  { id: '25', img: img25, height: 680 },
  { id: '26', img: img26, height: 440 },
  { id: '27', img: img27, height: 740 },
  { id: '28', img: img28, height: 510 },
  { id: '29', img: img29, height: 600 },
  { id: '30', img: img30, height: 400 },
  { id: '31', img: img31, height: 700 },
  { id: '32', img: img32, height: 500 },
  { id: '33', img: img33, height: 800 },
  { id: '34', img: img34, height: 450 },
  { id: '35', img: img35, height: 650 },
];

export default function GalleryPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Helmet>
        <title>Galeri Event - Aeromax Production</title>
        <meta name="description" content="Lihat dokumentasi lengkap berbagai event yang telah kami tangani dengan dedikasi dan profesionalisme di Aeromax Production." />
        <meta name="keywords" content="galeri event, dokumentasi event, aeromax production, event organizer" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Kembali</span>
          </button>

          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              Full <span className="text-red-600">Gallery</span>
            </h1>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dokumentasi lengkap berbagai event yang telah kami tangani dengan dedikasi dan profesionalisme.
            </p>
          </div>

          <div className="min-h-[800px]">
            <Masonry 
              items={galleryItems}
              animateFrom="top"
              stagger={0.03}
              scaleOnHover={true}
              hoverScale={1.02}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
