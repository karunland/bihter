'use client';

import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import UnifiedMediaCard from './UnifiedMediaCard';
import Lightbox from './Lightbox';
import { press } from '@/data/press';

// Sayfa container ile hizalı sol/sağ boşluk:
// max-w-7xl (80rem) + px-8 (2rem) → büyük ekranda tam container kenarına denk gelir
const INSET = 'max(1.5rem, calc((100vw - 80rem) / 2 + 2rem))';

export default function PressSection() {
  const sliderRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pressImages, setPressImages] = useState([]);

  useEffect(() => {
    const flattenedImages = press.flatMap((item) =>
      item.images.map((image) => ({
        ...image,
        pressItemId: item.id,
        pressItemTitle: item.title,
        pressItemDate: item.date,
        pressItemLink: item.link,
      }))
    );
    setPressImages(flattenedImages);
  }, []);

  const openLightbox = (index) => { setCurrentImageIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => prev === pressImages.length - 1 ? 0 : prev + 1);
  const prevImage = () => setCurrentImageIndex((prev) => prev === 0 ? pressImages.length - 1 : prev - 1);
  const goToImage = (index) => setCurrentImageIndex(index);

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft -= 320;
  };
  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft += 320;
  };

  if (pressImages.length === 0) return null;

  return (
    <>
      <section className="py-20 border-t border-gray-100 overflow-hidden">

        {/* Başlık — container hizalı */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[0.6rem] tracking-[0.5em] text-stone-400 uppercase font-sans mb-3">
                Medya
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
                Basında
              </h2>
            </div>

            {/* Minimal ok navigasyon — sağ üst */}
            <div className="flex items-center gap-1 pb-1">
              <button
                onClick={scrollLeft}
                aria-label="Önceki"
                className="p-2 text-stone-300 hover:text-stone-800 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Sonraki"
                className="p-2 text-stone-300 hover:text-stone-800 transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider — soldan ve sağdan container kenarı kadar boşluk */}
        <div
          ref={sliderRef}
          className="overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingLeft: INSET,
            scrollPaddingLeft: INSET,
          }}
        >
          <div className="flex gap-5 pb-2" style={{ minWidth: 'max-content' }}>
            {pressImages.map((image, index) => (
              <div
                key={`${image.pressItemId}-${image.subId}`}
                className="flex-shrink-0 w-60 md:w-68 lg:w-72"
                style={{ scrollSnapAlign: 'start' }}
              >
                <UnifiedMediaCard
                  imageSrc={image.src}
                  imageAlt={image.pressItemTitle}
                  title={image.pressItemTitle}
                  metaLines={[image.pressItemDate].filter(Boolean)}
                  externalHref={image.pressItemLink}
                  onOpen={() => openLightbox(index)}
                />
              </div>
            ))}
            {/* Sağ boşluk spacer — sol ile simetrik */}
            <div className="flex-shrink-0" style={{ width: INSET }} aria-hidden="true" />
          </div>
        </div>

        {/* Alt link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <Link
            href="/press"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors duration-200 group"
          >
            Tüm basın haberlerini görüntüle
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={pressImages.map((img) => ({
          image: img.src,
          title: img.pressItemTitle,
          date: img.pressItemDate || null,
          source: 'Basında',
          link: img.pressItemLink,
        }))}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
        onGoTo={goToImage}
      />
    </>
  );
}
