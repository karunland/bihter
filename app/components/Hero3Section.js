'use client';

import { useState } from 'react';

export default function Hero3Section() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (videoRef) => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Video Galeri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sanatsal çalışmalarımdan ve performanslarımdan özel anlar
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-md w-full">
            {/* Video Container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto"
                controls
                poster="/banner-2.png" // Placeholder poster
                preload="metadata"
                style={{ aspectRatio: '9/16' }} // Dikey video için
              >
                <source src="/video-placeholder.webm" type="video/webm" />
                <source src="/video-placeholder.mp4" type="video/mp4" />
                <p className="text-white p-8 text-center">
                  Tarayıcınız video oynatmayı desteklemiyor.
                </p>
              </video>
              
              {/* Video olmazsa placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Video Yakında</h3>
                  <p className="text-sm text-gray-300">
                    Özel video içeriklerimiz hazırlanıyor
                  </p>
                </div>
              </div>
            </div>

            {/* Video Bilgileri */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sanatsal Performans
              </h3>
              <p className="text-gray-600">
                İstanbul&apos;un tarihi mekânlarında gerçekleştirilen özel bir performanstan kesitler
              </p>
              
              {/* Video Stats */}
              <div className="flex justify-center space-x-8 mt-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900">2:30</div>
                  <div className="text-xs text-gray-600">Süre</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900">9:16</div>
                  <div className="text-xs text-gray-600">Format</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900">HD</div>
                  <div className="text-xs text-gray-600">Kalite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}