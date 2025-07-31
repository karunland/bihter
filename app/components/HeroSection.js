import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/banner-2.png')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pt-20">
        <div className="text-left">
          {/* daha ince bir font kullanalim bihter Sabanoğlu basliginda */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-light drop-shadow-lg">
            Bihter Sabanoğlu
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 sm:mb-8 max-w-2xl font-light drop-shadow-md">
            İngiliz Edebiyatı, Bizans ve klasik sanat tarihinin yanı sıra hiyeroglif, 
            Osmanlıca, Çince gibi diller üzerine eğitim alan Bihter Sabanoğlu edebiyat 
            çevirmeni, editör ve serbest yazar olarak çalışmalarını sürdürüyor.
          </p>
          <div className="flex flex-row gap-4 sm:gap-6" >
            <Link
              href="/writings"
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-2xl text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl"
            >
              Yazılarımı Oku
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-2xl text-gray-700 bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg"
            >
              Hakkımda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}