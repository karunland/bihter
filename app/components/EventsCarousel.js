'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import Lightbox from './Lightbox';
import { events } from '@/data/events';

const EventCard = ({ event, onClick }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  return (
    <button
      onClick={onClick}
      className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] relative group cursor-pointer w-full"
    >
      {/* Ana Görsel - Dikey Format */}
      <div className="relative h-[400px] w-full">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover" 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Yaklaşan Etkinlik Badge - Üst Sol */}
        {isUpcoming(event.date) && (
          <div className="absolute top-4 left-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
              Yaklaşan
            </span>
          </div>
        )}

        {/* External Link Badge - Üst Sağ */}
        {event.link && event.link !== '#' && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 p-2 rounded-full">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-white">
            <h3 className="text-lg font-bold mb-2 line-clamp-2">
              {event.title}
            </h3>
            <div className="flex items-center text-sm text-white/90 mb-1">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-sm text-white/90">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{event.location}</span>
            </div>
          </div>
        </div>
        
        {/* Hover efekti - Büyüteç ikonu */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <div className="bg-white/70 backdrop-blur-sm rounded-full p-4">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default function EventsCarousel() {
  const sliderRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // İlk 9 etkinliği al
  const featuredEvents = events.slice(0, 9);

  // Lightbox için veri hazırlama
  const lightboxImages = featuredEvents.map(event => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('tr-TR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    return {
      image: event.image,
      title: event.title,
      source: `${formatDate(event.date)} • ${event.location}`,
      link: event.link || '#'
    };
  });

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
      prev === featuredEvents.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? featuredEvents.length - 1 : prev - 1
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
              Etkinlikler
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
              {featuredEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className="flex-shrink-0 w-64 md:w-72 lg:w-80"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <EventCard 
                    event={event}
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
              href="/events"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
            >
              Tüm etkinlikleri görüntüle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
        onGoTo={goToImage}
      />
    </>
  );
}