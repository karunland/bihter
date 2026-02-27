'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Lightbox from '@/app/components/Lightbox';
import press from '@/data/press';

// ─── Basın Kartı ────────────────────────────────────────────────────────────
// Birden fazla görseli olan haberlerde otomatik yatay kayma yapar.
// cardIndex → her kart farklı bir gecikmeyle başlar (stagger efekti).
function PressCard({ item, cardIndex, onOpen }) {
  const [currentImg, setCurrentImg] = useState(0);
  const hasMultiple = item.images.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;

    // Her kart farklı bir gecikmeyle başlasın (max 8 farklı zaman dilimi)
    const staggerDelay = (cardIndex % 8) * 600; // 0, 600, 1200 … 4200 ms
    const slideInterval = 3400;

    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % item.images.length);
      }, slideInterval);
    }, staggerDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [cardIndex, hasMultiple, item.images.length]);

  return (
    <article
      className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-stone-200 hover:shadow-xl transition-all duration-300"
      onClick={() => onOpen(currentImg)}
    >
      {/* Görsel alanı — yatay kayma efekti */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <div
          className="flex h-full"
          style={{
            width: `${item.images.length * 100}%`,
            transform: `translateX(-${(currentImg / item.images.length) * 100}%)`,
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {item.images.map((img) => (
            <div
              key={img.subId}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / item.images.length}%` }}
            >
              <Image
                src={img.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>

        {/* Dot göstergesi — yalnızca birden fazla görsel varsa */}
        {hasMultiple && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {item.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
                className={`rounded-full transition-all duration-400 ${
                  i === currentImg
                    ? 'w-3.5 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/70'
                }`}
                aria-label={`Görsel ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Kart alt bilgisi */}
      <div className="p-4">
        <h3 className="font-playfair text-sm font-semibold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-stone-700 transition-colors">
          {item.title}
          {item.subtitle && (
            <span className="ml-1.5 text-[0.65rem] text-stone-400 font-sans font-normal">
              ({item.subtitle})
            </span>
          )}
        </h3>
        <div className="flex items-center justify-between">
          {item.date ? (
            <p className="text-[0.6rem] tracking-wider uppercase text-stone-400 font-sans">
              {item.date}
            </p>
          ) : (
            <span />
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-stone-300 hover:text-stone-700 transition-colors"
              aria-label="Linke git"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Basında Sayfası ─────────────────────────────────────────────────────────
export default function PressPage() {
  const [selectedYear, setSelectedYear] = useState('Tümü');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPress, setSelectedPress] = useState(null);

  const years = useMemo(() => {
    const yearSet = new Set();
    press.forEach((item) => {
      if (typeof item.date === 'string') {
        const match = item.date.match(/(20\d{2})/);
        if (match) yearSet.add(match[1]);
      }
    });
    const list = Array.from(yearSet).sort((a, b) => Number(b) - Number(a));
    list.unshift('Tümü');
    return list;
  }, []);

  const filteredPress = useMemo(() => {
    if (selectedYear === 'Tümü') return press;
    return press.filter((item) => {
      if (typeof item.date !== 'string') return false;
      const match = item.date.match(/(20\d{2})/);
      return match ? match[1] === selectedYear : false;
    });
  }, [selectedYear]);

  const lightboxImages = useMemo(() => {
    if (!selectedPress) return [];
    return (selectedPress.images || []).map((img) => ({
      image: img.src,
      title: selectedPress.title,
      date: selectedPress.date || null,
      source: 'Basında',
      link: selectedPress.link || '#',
    }));
  }, [selectedPress]);

  const openLightbox = (item, imgIndex = 0) => {
    setSelectedPress(item);
    setCurrentImageIndex(imgIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((p) => (p === lightboxImages.length - 1 ? 0 : p + 1));
  const prevImage = () => setCurrentImageIndex((p) => (p === 0 ? lightboxImages.length - 1 : p - 1));
  const goToImage = (i) => setCurrentImageIndex(i);

  return (
    <div className="bg-white min-h-screen">

      {/* Sayfa Başlığı */}
      <div className="pt-28 pb-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[0.6rem] tracking-[0.5em] text-stone-400 uppercase font-sans mb-4">
            Medya
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Basında
          </h1>
          <div className="w-10 h-px bg-stone-300" />
        </div>
      </div>

      {/* Yıl filtresi */}
      <div className="py-5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    selectedYear === y
                      ? 'bg-gray-900 text-white'
                      : 'text-stone-500 hover:text-stone-800 border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
            <span className="text-xs text-stone-400 font-sans flex-shrink-0">
              {filteredPress.length} içerik
            </span>
          </div>
        </div>
      </div>

      {/* Kartlar */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPress.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-400 text-base font-playfair italic">
                Seçilen yılda içerik bulunamadı.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredPress.map((item, index) => (
                <PressCard
                  key={item.id}
                  item={item}
                  cardIndex={index}
                  onOpen={(imgIndex) => openLightbox(item, imgIndex)}
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
