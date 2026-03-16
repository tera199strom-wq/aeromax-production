// Import local images
import soundsystemImg from '../components/soundsystem.JPG';
import lightingImg from '../components/lighting.JPG';
import videotronImg from '../components/videotron.JPG';
import multicamImg from '../components/multicam.jpg';
import riggingImg from '../components/rigging.JPG';
import sarnafilImg from '../components/sarnafil.jpg';
import barikadeImg from '../components/barikade.jpg';
import gensetImg from '../components/genset.jpg';

export interface SliderItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  models?: string[];
  specs?: { label: string; value: string }[];
}

export const divisionsData = [
  {
    id: 1,
    slug: "soundsystem",
    title: "Divisi Sound System",
    description: "Menyediakan sistem tata suara profesional untuk berbagai skala acara, mulai dari meeting, seminar, hingga konser musik dan event berskala besar.",
    image: soundsystemImg,
  },
  {
    id: 2,
    slug: "lighting",
    title: "Divisi Lighting",
    description: "Menangani kebutuhan pencahayaan panggung dan area acara dengan berbagai jenis lighting modern seperti moving head, spotlight, wash light, dan efek pencahayaan lainnya.",
    image: lightingImg,
  },
  {
    id: 3,
    slug: "videotron",
    title: "Divisi LED / Videotron",
    description: "Menyediakan layar LED atau videotron dengan resolusi tinggi untuk kebutuhan visual seperti tampilan live camera, presentasi, video, hingga konten grafis acara.",
    image: videotronImg,
  },
  {
    id: 4,
    slug: "multimedia",
    title: "Divisi Multimedia",
    description: "Mendukung kebutuhan anda untuk mengabadikan momen penting dalam sebuah acara dengan media foto, video, live streaming, multirecord, dan pengolahan konten digital lainnya.",
    image: multicamImg,
    menuImage: '/aeromedia-logo.png',
  },
  {
    id: 5,
    slug: "genset",
    title: "Genset",
    description: "Dirancang dengan teknologi modern, efisiensi bahan bakar yang baik, serta performa yang kuat untuk berbagai kebutuhan.",
    image: gensetImg,
  },
  {
    id: 6,
    slug: "stage-rigging",
    title: "Divisi Rigging / Stage",
    description: "Menyediakan Sistem ringging profesional untuk pemasangan lighting , sound system , Videotron dan dekorasi stage secara aman dan sesuai standar keselamatan.",
    image: riggingImg,
    menuImage: '/panggung-logo.jpeg',
  }
];

export const servicesData: SliderItem[] = [
  {
    id: 1,
    slug: "soundsystem",
    title: "Soundsystem",
    description: "Menyediakan sistem tata suara profesional untuk berbagai skala acara, mulai dari meeting, seminar, hingga konser musik dan event berskala besar.",
    image: soundsystemImg,
    longDescription: "Menyediakan sistem tata suara profesional untuk berbagai skala acara, mulai dari meeting, seminar, hingga konser musik dan event berskala besar. Kami menggunakan peralatan berkualitas tinggi dengan penataan audio yang optimal sehingga suara terdengar jelas, merata, dan nyaman di seluruh area acara.",
    models: [
      "JBL",
      "Sound Karnaval Indonesia",
      "Digital Mixer",
      "Analog mixer",
      "Audio Power Amplifier",
      "Speaker",
      "Subwoofer",
      "Line Array",
      "Set Microphone",
      "Music Instrument"
    ]
  },
  {
    id: 2,
    slug: "lighting",
    title: "Lighting",
    description: "Menangani kebutuhan pencahayaan panggung dan area acara dengan berbagai jenis lighting modern seperti moving head, spotlight, wash light, dan efek pencahayaan lainnya.",
    image: lightingImg,
    longDescription: "Menangani kebutuhan pencahayaan panggung dan area acara dengan berbagai jenis lighting modern seperti moving head, spotlight, wash light, dan efek pencahayaan lainnya. Sistem lighting kami dirancang untuk menciptakan suasana yang menarik, dramatis, dan sesuai dengan konsep acara.",
    models: [
      "Beam Orios",
      "Parled Orios",
      "Fressnell",
      "Follow Spot",
      "Smoke",
      "Hazer",
      "Strobo",
      "Wall Washer"
    ]
  },
  {
    id: 3,
    slug: "videotron",
    title: "Videotron",
    description: "Menyediakan layar LED atau videotron dengan resolusi tinggi untuk kebutuhan visual seperti tampilan live camera, presentasi, video, hingga konten grafis acara.",
    image: videotronImg,
    longDescription: "Menyediakan layar LED atau videotron dengan resolusi tinggi untuk kebutuhan visual seperti tampilan live camera, presentasi, video, hingga konten grafis acara. Layanan ini sangat cocok untuk konser, konferensi, pameran, maupun event promosi.",
    models: [
      "Qiang Li : 24 m",
      "NCled : 60 m",
      "GKGD : 30 m"
    ]
  },
  {
    id: 4,
    slug: "multimedia",
    title: "Multicam",
    description: "Mendukung kebutuhan anda untuk mengabadikan momen penting dalam sebuah acara dengan media foto, video, live streaming, multirecord, dan pengolahan konten digital lainnya.",
    image: multicamImg,
    longDescription: "Mendukung kebutuhan anda untuk mengabadikan momen penting dalam sebuah acara dengan media foto, video, live streaming, multirecord, dan pengolahan konten digital lainnya.",
    models: [
      "Sony NX200 4K Camera video",
      "Sony Alpha Series 4K mirrorles",
      "Drone record, live, FPV",
      "Gopro",
      "Jimmy JIB",
      "Blackmagic 4k video switching",
      "Intercom Hollyland",
      "LED TV 32inchi, 43inchi",
      "Avmatrix",
      "Starlink"
    ]
  },
  {
    id: 5,
    slug: "stage-rigging",
    title: "Stage rigging",
    description: "Menyediakan Sistem ringging profesional untuk pemasangan lighting , sound system , Videotron dan dekorasi stage secara aman dan sesuai standar keselamatan.",
    image: riggingImg,
    longDescription: "Menyediakan Sistem ringging profesional untuk pemasangan lighting, sound system, Videotron dan dekorasi stage secara aman dan sesuai standar keselamatan. Pemasangan dilakukan oleh teknisi berpengalaman dengan perhitungan struktur yang tepat. Menyediakan Berbagai jenis stage dengan konstruksi yang kuat dan aman, mulai dari panggung kecil untuk acara indoor hingga panggung besar untuk acara konser dan festival. Desain panggung dapat di sesuaikan dengan kebutuhan dan konsep acara.",
    models: [
      "Ringging 16 x 20",
      "Bariccade",
      "Channel Cable",
      "FOH double deck",
      "Sarnavil"
    ]
  },
  {
    id: 6,
    slug: "sarnafil",
    title: "Tenda sarnavil",
    description: "Menyediakan tenda sarnafil berkualitas untuk berbagai kebutuhan acara outdoor Anda.",
    image: sarnafilImg,
    longDescription: "Menyediakan tenda sarnafil berkualitas untuk berbagai kebutuhan acara outdoor Anda. Tenda sarnafil kami memiliki desain elegan dan kokoh, cocok untuk pameran, bazar, VIP area, maupun acara pernikahan.",
    models: [
      "Sarnafil 3x3m",
      "Sarnafil 5x5m"
    ]
  },
  {
    id: 7,
    slug: "barikade",
    title: "Barikade",
    description: "Sistem barikade pengaman untuk mengatur alur penonton dan menjaga keamanan area acara.",
    image: barikadeImg,
    longDescription: "Sistem barikade pengaman untuk mengatur alur penonton dan menjaga keamanan area acara. Kami menyediakan barikade kokoh yang sesuai dengan standar keamanan konser dan event besar.",
    models: [
      "Barikade Mojo",
      "Barikade BRC",
      "Crowd Control Barrier"
    ]
  },
  {
    id: 8,
    slug: "genset",
    title: "Genset",
    description: "Dirancang dengan teknologi modern, efisiensi bahan bakar yang baik, serta performa yang kuat untuk berbagai kebutuhan.",
    image: gensetImg,
    longDescription: "Genset yang kami sediakan dirancang dengan teknologi modern, efisiensi bahan bakar yang baik, serta performa yang kuat untuk berbagai kebutuhan. Produk ini cocok digunakan untuk sektor industri, perkantoran, proyek konstruksi, rumah sakit, hotel, maupun kebutuhan komersial lainnya. Tersedia dalam berbagai pilihan kapasitas daya sesuai kebutuhan pelanggan, dilengkapi dengan sistem kontrol yang mudah dioperasikan serta konstruksi yang kokoh untuk memastikan kinerja optimal dan umur pemakaian yang panjang. Kami juga menyediakan layanan konsultasi, instalasi, dan dukungan teknis untuk memastikan genset beroperasi dengan maksimal.",
    models: [
      "MERCY 20 KVA",
      "MERCY 60 KVA",
      "MERCY 100 KVA",
      "PANTHER 50 KVA",
      "MITSUBISHI 100 KVA",
      "NISSAN 125 KVA",
      "PERKIN 150 KVA"
    ]
  }
];
