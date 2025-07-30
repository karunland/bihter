'use client';

import React from 'react';

const MediaCard = ({ title, image, link, source, type }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl shadow hover:shadow-lg transition-all bg-white"
    >
      <img 
        src={image} 
        alt={title} 
        className="rounded-t-2xl w-full h-56 object-cover" 
      />
      <div className="p-4">
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
          {type}
        </span>
        <h3 className="text-lg font-semibold mt-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500">
          {source}
        </p>
      </div>
    </a>
  );
};

export default MediaCard;