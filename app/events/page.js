'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, SortAsc, SortDesc, ExternalLink, Clock } from 'lucide-react';
import { events } from '@/data/events';
import Lightbox from '@/app/components/Lightbox';

export default function EventsPage() {
  const [sortOrder, setSortOrder] = useState('desc');
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setEventsData(events || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = eventsData;

    // Sadece tarihe göre sıralama
    filtered.sort((a, b) => {
      const aValue = new Date(a.date);
      const bValue = new Date(b.date);

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [eventsData, sortOrder]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Lightbox için veri hazırlama
  const lightboxImages = useMemo(() => {
    return filteredAndSortedEvents.map(event => ({
      image: event.image,
      title: event.title,
      source: `${event.date !== '' ? formatDate(event.date) : ''} • ${event.location !== '' ? event.location : ''}`,
      link: event.link || '#'
    }));
  }, [filteredAndSortedEvents]);

  // Lightbox kontrol fonksiyonları
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ana Sayfa
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Etkinlikler
            </h1>
          </div>
        </div>
      </section>

      {/* Sıralama */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                title={sortOrder === 'asc' ? 'En yeni önce' : 'En eski önce'}
              >
                {sortOrder === 'asc' ? 'Eski önce' : 'Yeni önce'}
                {sortOrder === 'asc' ? (
                  <SortAsc className="ml-2 h-4 w-4" />
                ) : (
                  <SortDesc className="ml-2 h-4 w-4" />
                )}
              </button>
            </div>

            <div className="text-sm text-gray-500">
              {filteredAndSortedEvents.length} etkinlik
            </div>
          </div>
        </div>
      </section>

      {/* Etkinlikler Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                  <div className="aspect-[3/4] bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredAndSortedEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Etkinlik bulunamadı.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedEvents.map((event, index) => (
                <article
                  key={event.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={(e) => {
                    // Eğer external link butonuna tıklanmadıysa lightbox aç
                    if (!e.target.closest('.external-link-btn') && !e.target.closest('.link-badge')) {
                      openLightbox(index);
                    }
                  }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />

                    {/* External link indicator */}
                   

                    {/* Bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="text-white">
                        <div className="mb-2">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="text-lg font-bold line-clamp-2 flex-1">
                              {event.title}
                            </h3>
                            {event.link && event.link !== '#' && (
                              <div className="ml-2 flex-shrink-0">
                                <div 
                                  className="link-badge bg-blue-500/80 hover:bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1 cursor-pointer transition-all duration-200 hover:scale-105 external-link-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(event.link, '_blank', 'noopener,noreferrer');
                                  }}
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  Linke git
                                </div>
                              </div>
                            )}
                          </div>
                          {event.excerpt && (
                            <p className="text-sm text-white/80 line-clamp-2">
                              {event.excerpt}
                            </p>
                          )}
                        </div>
                        {event.time && event.time !== '' && (
                          <div className="flex items-center text-sm text-white/90 mb-1">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                        )}
                        {event.date && event.date !== '' && (
                          <div className="flex items-center text-sm text-white/90 mb-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date !== '' ? formatDate(event.date) : ''}</span>
                          </div>
                        )}
                        {event.location && event.location !== '' && (
                          <div className="flex items-center text-sm text-white/90">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="line-clamp-1">{event.location !== '' ? event.location : ''}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
        onGoTo={goToImage}
      />
    </div>
  );
} 