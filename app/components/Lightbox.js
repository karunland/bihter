'use client';

import React, { useEffect } from 'react';
import { Youtube, ExternalLink } from 'lucide-react';

const Lightbox = ({ isOpen, onClose, images, currentIndex, onNext, onPrev, onGoTo }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Body scroll'u engelle
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Kapatma butonu */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all"
        aria-label="Kapat"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Ana görsel container */}
      <div className="h-full w-full flex items-center justify-center p-4 relative z-10">
        <div className="relative max-w-4xl max-h-full">
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />

          {/* İçerik bilgileri - Alt overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
            <div className="flex items-center justify-between mb-2">
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white/80 text-sm">
                {currentImage.source}
              </p>
              {currentImage.link && currentImage.link !== '#' && (
                <a
                  href={currentImage.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    currentImage.linkType === 'youtube'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2`}
                >
                  {currentImage.linkType === 'youtube' ? (
                    <>
                      <Youtube className="w-4 h-4" />
                      YouTube'da İzle
                    </>
                  ) : (
                    <>
                      Linke git
                      <ExternalLink className="w-4 h-4" />
                    </>
                  )}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sol navigation */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all z-50"
          aria-label="Önceki görsel"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Sağ navigation */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all z-50"
          aria-label="Sonraki görsel"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Thumbnail navigation - Alt */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 z-50">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onGoTo && onGoTo(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`${index + 1}. görsele git`}
            />
          ))}
        </div>
      )}

      {/* Background click to close */}
      <div
        className="absolute inset-0 z-0"
        onClick={onClose}
      />
    </div>
  );
};

export default Lightbox;