'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { SortAsc, SortDesc } from 'lucide-react';
import { events } from '@/data/events';
import Lightbox from '@/app/components/Lightbox';
import UnifiedMediaCard from '@/app/components/UnifiedMediaCard';

export default function EventsPage() {
  const [sortOrder, setSortOrder] = useState('desc');
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setEventsData(events || []);
    setLoading(false);
  }, []);

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = [...eventsData];
    filtered.sort((a, b) => {
      const aDate = a.date ? a.date.trim() : '';
      const bDate = b.date ? b.date.trim() : '';
      if (!aDate && !bDate) return 0;
      if (!aDate) return 1;
      if (!bDate) return -1;
      let aValue, bValue;
      if (aDate.match(/^\d{4}-\d{2}$/)) {
        const [year, monthStr] = aDate.split('-');
        aValue = new Date(parseInt(year), parseInt(monthStr), 0);
      } else {
        aValue = new Date(aDate);
      }
      if (bDate.match(/^\d{4}-\d{2}$/)) {
        const [year, monthStr] = bDate.split('-');
        bValue = new Date(parseInt(year), parseInt(monthStr), 0);
      } else {
        bValue = new Date(bDate);
      }
      const aIsValid = !isNaN(aValue.getTime());
      const bIsValid = !isNaN(bValue.getTime());
      if (!aIsValid && !bIsValid) return 0;
      if (!aIsValid) return 1;
      if (!bIsValid) return -1;
      return sortOrder === 'asc'
        ? aValue > bValue ? 1 : aValue < bValue ? -1 : 0
        : aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    });
    return filtered;
  }, [eventsData, sortOrder]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const isYouTubeLink = useCallback((link) => {
    if (!link || link === '#') return false;
    return link.includes('youtube.com') || link.includes('youtu.be') || link.includes('virginiawoolf.org.tr');
  }, []);

  const getLinkType = useCallback((event) => {
    if (event.linkType === 'youtube') return 'youtube';
    if (isYouTubeLink(event.link)) return 'youtube';
    return 'external';
  }, [isYouTubeLink]);

  const lightboxImages = useMemo(() => {
    return filteredAndSortedEvents.map(event => ({
      image: event.image,
      title: event.title,
      source: `${event.date !== '' ? formatDate(event.date) : ''} • ${event.location !== '' ? event.location : ''}`,
      link: event.link || '#',
      linkType: getLinkType(event),
    }));
  }, [filteredAndSortedEvents, getLinkType]);

  const openLightbox = (index) => { setCurrentImageIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => prev === lightboxImages.length - 1 ? 0 : prev + 1);
  const prevImage = () => setCurrentImageIndex((prev) => prev === 0 ? lightboxImages.length - 1 : prev - 1);
  const goToImage = (index) => setCurrentImageIndex(index);

  return (
    <div className="bg-white min-h-screen">

      {/* Sayfa Başlığı */}
      <div className="pt-28 pb-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[0.6rem] tracking-[0.5em] text-stone-400 uppercase font-sans mb-4">
            Takvim
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Etkinlikler
          </h1>
          <div className="w-10 h-px bg-stone-300" />
        </div>
      </div>

      {/* Sıralama */}
      <div className="py-5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-800 border border-stone-200 hover:border-stone-400 rounded-md bg-white hover:bg-stone-50 transition-all duration-200"
            >
              {sortOrder === 'asc' ? (
                <>Eskiden yeniye <SortAsc className="h-3.5 w-3.5" /></>
              ) : (
                <>Yeniden eskiye <SortDesc className="h-3.5 w-3.5" /></>
              )}
            </button>
            <span className="text-xs text-stone-400 font-sans">
              {filteredAndSortedEvents.length} etkinlik
            </span>
          </div>
        </div>
      </div>

      {/* Etkinlikler Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden animate-pulse">
                  <div className="aspect-[3/4] bg-gray-100" />
                  <div className="p-5">
                    <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredAndSortedEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-400 text-base font-playfair italic">Etkinlik bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedEvents.map((event, index) => (
                <UnifiedMediaCard
                  key={event.id}
                  imageSrc={event.image}
                  imageAlt={event.title}
                  title={event.title}
                  description={event.excerpt}
                  metaLines={[
                    event.time || null,
                    event.date ? formatDate(event.date) : null,
                    event.location || null,
                  ]}
                  externalHref={event.link && event.link !== '#' ? event.link : null}
                  externalLabel={event.link && event.link !== '#' ? (getLinkType(event) === 'youtube' ? "YouTube'da İzle" : 'Linke git') : undefined}
                  externalVariant={getLinkType(event) === 'youtube' ? 'youtube' : 'default'}
                  onOpen={() => openLightbox(index)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

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
