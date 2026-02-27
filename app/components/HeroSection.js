import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        {/* Mobile: prefer WebM */}
        <source src="/heroAnimation.webm" type="video/webm" media="(max-width: 767px)" />
        {/* Default / desktop fallback */}
        <source src="/heroAnimation.mp4" type="video/mp4" />
        <Image
          src="/bihtersabanoglu.webp"
          alt="Bihter Sabanoğlu"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </video>

      {/* Gradient overlay: üstte navbar okunurluğu + altta metin okunurluğu */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/80 pointer-events-none" />

      {/* İsim ve unvan - sol alt köşe */}
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-16 lg:px-20 lg:pb-24">
        <p className="text-white/55 text-[0.62rem] tracking-[0.55em] uppercase font-sans mb-5 font-light">
          Yazarlık &amp; Sanat &amp; Tarih
        </p>
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-[5.5rem] text-white font-bold leading-[0.92] tracking-tight">
          Bihter<br />Sabanoğlu
        </h1>
      </div>

      {/* Aşağı kaydır göstergesi */}
      <div className="absolute bottom-10 right-8 lg:right-16 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown className="w-5 h-5 text-white/35" />
      </div>
    </section>
  );
}
