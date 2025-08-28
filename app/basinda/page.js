'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Lightbox from '@/app/components/Lightbox';
import press from '@/data/press';

export default function BasindaPage() {
  const [selectedYear, setSelectedYear] = useState('Tümü');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPress, setSelectedPress] = useState(null);

  // Tüm yılları çıkar (string tarihlerden yıl ayıkla)
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

  // Filtrelenmiş liste
  const filteredPress = useMemo(() => {
    if (selectedYear === 'Tümü') return press;
    return press.filter((item) => {
      if (typeof item.date !== 'string') return false;
      const match = item.date.match(/(20\d{2})/);
      return match ? match[1] === selectedYear : false;
    });
  }, [selectedYear]);

  // Lightbox için görüntü listesi (seçili basın öğesinin görselleri)
  const lightboxImages = useMemo(() => {
    if (!selectedPress) return [];
    return (selectedPress.images || []).map((img) => ({
      image: img.src,
      title: selectedPress.title,
      source: selectedPress.date || 'Basında',
      link: selectedPress.link || '#',
    }));
  }, [selectedPress]);

  const openLightbox = (item) => {
    setSelectedPress(item);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((p) => (p === lightboxImages.length - 1 ? 0 : p + 1));
  const prevImage = () => setCurrentImageIndex((p) => (p === 0 ? lightboxImages.length - 1 : p - 1));
  const goToImage = (i) => setCurrentImageIndex(i);

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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Basında</h1>
          </div>
        </div>
      </section>

      {/* Filtreler */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                title="Yıla göre filtrele"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <div className="text-sm text-gray-500">{filteredPress.length} içerik</div>
          </div>
        </div>
      </section>

      {/* Liste */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPress.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Seçilen yılda içerik bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredPress.map((item) => (
                <div key={item.id} className="space-y-4">
                  {/* Başlık */}
                                     <div className="text-center">
                     <h3 className="text-lg font-bold text-gray-900 mb-2">
                       {item.link && item.link !== '#' ? (
                         <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-800 hover:underline inline-flex items-center gap-2">
                           {item.title}
                           <ExternalLink className="h-4 w-4" />
                         </a>
                       ) : (
                         <span className="text-lg font-bold text-gray-900 mb-2">
                           {item.title}
                         </span>
                       )}
                     </h3>
                     <p className="text-sm text-gray-600">{item.date || '—'}</p>
                   </div>
                  
                  {/* Görseller */}
                  <div className="grid grid-cols-1 gap-4">
                    {item.images && item.images.map((img, imgIndex) => (
                      <article
                        key={`${item.id}-${img.subId}`}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                        onClick={() => openLightbox(item)}
                      >
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={img.src}
                            alt={`${item.title} - ${img.subId}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
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