'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, SortAsc, SortDesc, ExternalLink } from 'lucide-react';
import { roportajlar } from '@/data/roportajlar';
import { news } from '@/data/news';
import Lightbox from '@/app/components/Lightbox';

export default function BasindaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [sortOrder, setSortOrder] = useState('desc');
  const [roportajlarData, setRoportajlarData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState('news'); // 'news' or 'roportajlar'

  useEffect(() => {
    const fetchData = async () => {
      setRoportajlarData(roportajlar || []);
      setNewsData(news || []);
      
      // Get unique categories from both data sources
      const roportajCategories = [...new Set(roportajlar.map(item => item.type))];
      const newsCategories = [...new Set(news.map(item => item.type))];
      const allCategories = [...new Set([...roportajCategories, ...newsCategories])];
      allCategories.unshift('Tümü');
      setCategoriesData(allCategories);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredAndSortedNews = useMemo(() => {
    let filtered = newsData;
    
    // Kategori filtreleme
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(item => item.type === selectedCategory);
    }
    
    // Sadece ID'ye göre sıralama (tarih bilgisi olmadığı için)
    filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    
    return filtered;
  }, [newsData, selectedCategory, sortOrder]);

  const filteredAndSortedRoportajlar = useMemo(() => {
    let filtered = roportajlarData;
    
    // Kategori filtreleme
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(item => item.type === selectedCategory);
    }
    
    // Sadece ID'ye göre sıralama
    filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    
    return filtered;
  }, [roportajlarData, selectedCategory, sortOrder]);

  // Lightbox için veri hazırlama
  const lightboxImages = useMemo(() => {
    const currentData = currentSection === 'news' ? filteredAndSortedNews : filteredAndSortedRoportajlar;
    return currentData.map(item => ({
      image: item.image,
      title: item.title || item.source || 'Basında',
      source: item.source || item.type || 'Medya',
      link: item.link || '#'
    }));
  }, [filteredAndSortedNews, filteredAndSortedRoportajlar, currentSection]);

  // Lightbox kontrol fonksiyonları
  const openLightbox = (index, section) => {
    setCurrentSection(section);
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
              Basında
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
              {filteredAndSortedNews.length + filteredAndSortedRoportajlar.length} içerik
            </div>
          </div>
        </div>
      </section>

      {/* Gazete Küpürleri Bölümü */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3 mb-8">
            📰 Gazete Küpürleri
          </h2>
          
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
          ) : filteredAndSortedNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Seçilen kategoride içerik bulunamadı.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedNews.map((item, index) => (
                <article
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(index, 'news')}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title || item.source || 'Gazete küpürü'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* External link indicator */}
                    {item.link && item.link !== '#' && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 p-2 rounded-full">
                          <ExternalLink className="h-4 w-4 text-gray-600" />
                        </div>
                      </div>
                    )}

                    {/* Bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-2 line-clamp-2">
                          {item.title || item.source || 'Gazete Küpürü'}
                        </h3>
                        <div className="flex items-center text-sm text-white/90">
                          <span>{item.source || item.type || 'Medya'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Röportajlar Bölümü */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3 mb-8">
            🎤 Röportajlar
          </h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                  <div className="aspect-[3/4] bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredAndSortedRoportajlar.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Seçilen kategoride röportaj bulunamadı.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedRoportajlar.map((item, index) => (
                <article
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(index, 'roportajlar')}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* External link indicator */}
                    {item.link && item.link !== '#' && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 p-2 rounded-full">
                          <ExternalLink className="h-4 w-4 text-gray-600" />
                        </div>
                      </div>
                    )}

                    {/* Bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-sm text-white/90">
                          <span>{item.source}</span>
                        </div>
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