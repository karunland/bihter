'use client';

import React from 'react';

const ImageCarouselCard = ({ image, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] relative group cursor-pointer w-full"
    >
      {/* Ana Görsel - Dikey Format */}
      <div className="relative h-[500px] w-full">
        <img 
          src={image} 
          alt="Gazete küpürü" 
          className="w-full h-full object-cover object-top" 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Type Badge - Üst Sol */}
        <div className="absolute top-6 left-6">
          <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {type}
          </span>
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

export default ImageCarouselCard;