'use client';

import React, { useRef, useState } from 'react';
import ImageCarouselCard from '../components/ImageCarouselCard';
import Lightbox from '../components/Lightbox';
import { roportajlar } from '@/data/roportajlar';
import { news } from '@/data/news';

const BasindaPage = () => {
  // Slider referansı
  const sliderRef = useRef(null);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Slider'ı belirli karta kaydırma fonksiyonu
  const scrollToCard = (index) => {
    if (sliderRef.current) {
      const cardWidth = 320; // Optimized scroll distance
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

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
    <div className="pt-32 pb-10">

      {/* Gazete Küpürleri Bölümü - Slider */}
      <section className="mb-16">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
            📰 Gazete Küpürleri
          </h2>
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
                  className="flex-shrink-0 w-72 md:w-80 lg:w-96"
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
                const scrollAmount = 320;
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
                const scrollAmount = 320;
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
          
          {/* Slider Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {news.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-600 focus:bg-gray-600 transition-all duration-300 hover:scale-125"
                aria-label={`${index + 1}. habere git`}
              />
            ))}
          </div>
          
          
        </div>
      </section>

      {/* Röportajlar Bölümü */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-3">
          🎤 Röportajlar
        </h2>
        <div className="space-y-6">
          {roportajlar.map((item) => (
            <div key={item.id} className="flex bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-48 h-32 object-cover flex-shrink-0" 
              />
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {item.source}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Röportajı Oku
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default BasindaPage;