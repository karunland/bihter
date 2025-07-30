'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Filter, SortAsc, SortDesc, Music, Theater, Users } from 'lucide-react';
import { performances } from '@/data/performances';

export default function PerformancePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' veya 'desc'
  const [performances, setPerformances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPerformances(performances || []);
      var uniqueCategories = [...new Set(performances.map(performance => performance.category))];
      uniqueCategories.unshift('Tümü');
      setCategories(uniqueCategories);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredAndSortedPerformances = useMemo(() => {
    let filtered = performances;
    
    // Kategori filtreleme
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(perf => perf.category === selectedCategory);
    }
    
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
  }, [performances, selectedCategory, sortOrder]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Tiyatro':
        return Theater;
      case 'Müzik':
        return Music;
      case 'Dans':
        return Users;
      default:
        return Music;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
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
              Performanslar
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tiyatro, müzik ve dans performansları
            </p>
          </div>
        </div>
      </section>

      {/* Filtreler ve Sıralama */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Filtreler */}
          <div className="hidden md:flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Kategori Filtresi */}
            <div className="flex items-center space-x-4">
              {/* <Filter className="h-5 w-5 text-gray-500" /> */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sadece Tarih Sıralaması */}
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
          </div>

          {/* Mobile Filtreler */}
          <div className="md:hidden space-y-4">
            {/* Kategori Filtresi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sadece Tarih Sıralaması */}
            <div>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                title={sortOrder === 'asc' ? 'En yeni önce' : 'En eski önce'}
              >
                <span>{sortOrder === 'asc' ? 'Eski önce' : 'Yeni önce'}</span>
                {sortOrder === 'asc' ? (
                  <SortAsc className="h-4 w-4" />
                ) : (
                  <SortDesc className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="text-sm text-gray-500 text-center">
              {filteredAndSortedPerformances.length} performans bulundu
            </div>
          </div>
        </div>
      </section>

      {/* Performanslar Listesi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Ana İçerik */}
            <div className="flex-1">
              {loading ? (
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  ))}
                </div>
              ) : filteredAndSortedPerformances.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Seçilen kategoride performans bulunamadı.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredAndSortedPerformances.map((performance) => {
                    const IconComponent = getCategoryIcon(performance.category);
                    return (
                      <article
                        key={performance.id}
                        className={`bg-white rounded-lg shadow-sm border p-8 hover:shadow-md transition-shadow ${
                          isUpcoming(performance.date) 
                            ? 'border-purple-200 bg-purple-50' 
                            : 'border-gray-100'
                        }`}
                      >
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{formatDate(performance.date)}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{performance.time}</span>
                          <span className="mx-2">•</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            isUpcoming(performance.date)
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {isUpcoming(performance.date) ? 'Yaklaşan' : 'Geçmiş'}
                          </span>
                          <span className="mx-2">•</span>
                          <span className="bg-gray-100 px-2 py-1 rounded-full text-xs flex items-center">
                            <IconComponent className="h-3 w-3 mr-1" />
                            {performance.category}
                          </span>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                          <Link
                            href={`/performance/${performance.id}`}
                            className="hover:text-gray-700 transition-colors"
                          >
                            {performance.title}
                          </Link>
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {performance.excerpt}
                        </p>

                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{performance.location}</span>
                        </div>

                        <Link
                          href={`/performance/${performance.id}`}
                          className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        >
                          Detayları gör
                          <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                        </Link>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Sidebar - sadece detay sayfalarında gösterilecek */}
          </div>
        </div>
      </section>
    </div>
  );
} 