'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import ImageCarouselCard from './ImageCarouselCard';
import Lightbox from './Lightbox';
import { news } from '@/data/news';

export default function PressSection() {
  const sliderRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lightbox fonksiyonları
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === news.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? news.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Basında
            </h2>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide px-4"
          >
            <div className="flex gap-4 md:gap-6 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {news.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 w-64 md:w-72 lg:w-80"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <ImageCarouselCard 
                    image={item.image}
                    type={item.type}
                    onClick={() => openLightbox(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              if (sliderRef.current) {
                const scrollAmount = 300;
                sliderRef.current.scrollLeft -= scrollAmount;
              }
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full p-3 transition-all z-20 shadow-lg"
            aria-label="Önceki"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              if (sliderRef.current) {
                const scrollAmount = 300;
                sliderRef.current.scrollLeft += scrollAmount;
              }
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full p-3 transition-all z-20 shadow-lg"
            aria-label="Sonraki"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Daha fazla göster butonu */}
          <div className="text-center mt-8">
            <Link
              href="/basinda"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
            >
              Tüm basın haberlerini görüntüle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={news}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
        onGoTo={goToImage}
      />
    </>
  );
}