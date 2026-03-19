import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Masonry from '../components/Masonry';
import Navbar from '../components/Navbar';

const galleryItems = [
  { id: '1', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop', height: 600 },
  { id: '2', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop', height: 400 },
  { id: '3', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop', height: 700 },
  { id: '4', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop', height: 500 },
  { id: '5', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop', height: 800 },
  { id: '6', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop', height: 450 },
  { id: '7', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop', height: 650 },
  { id: '8', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop', height: 550 },
  { id: '9', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop', height: 750 },
  { id: '10', img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop', height: 480 },
  { id: '11', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop', height: 620 },
  { id: '12', img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop', height: 580 },
  { id: '13', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop', height: 640 },
  { id: '14', img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop', height: 420 },
  { id: '15', img: 'https://images.unsplash.com/photo-1481162854517-d9e353af153d?auto=format&fit=crop', height: 720 },
  { id: '16', img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop', height: 530 },
  { id: '17', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop', height: 780 },
  { id: '18', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop', height: 460 },
  { id: '19', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop', height: 670 },
  { id: '20', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop', height: 590 },
  { id: '21', img: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?auto=format&fit=crop', height: 710 },
  { id: '22', img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop', height: 490 },
  { id: '23', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop', height: 630 },
  { id: '24', img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop', height: 560 },
  { id: '25', img: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop', height: 680 },
  { id: '26', img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop', height: 440 },
  { id: '27', img: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop', height: 740 },
  { id: '28', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop', height: 510 },
  { id: '29', img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop', height: 610 },
  { id: '30', img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop', height: 790 },
  { id: '31', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop', height: 470 },
  { id: '32', img: 'https://images.unsplash.com/photo-1486591913781-4bee9ed65bfe?auto=format&fit=crop', height: 660 },
  { id: '33', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop', height: 540 },
  { id: '34', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop', height: 700 },
  { id: '35', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop', height: 430 },
  { id: '36', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop', height: 620 },
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
