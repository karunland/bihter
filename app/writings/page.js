'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Filter, SortAsc, SortDesc } from 'lucide-react';
import Sidebar from '../components/Sidebar';

// JSON dosyasından veri yükleme fonksiyonu
const loadContentData = async () => {
  try {
    const response = await fetch('/data/content.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Veri yüklenirken hata oluştu:', error);
    return { writings: [] };
  }
};

const categories = ['Tümü', 'Edebiyat Eleştirisi', 'Sanat Eleştirisi', 'Kültür Yazısı', 'Felsefe', 'Edebiyat Tarihi'];

export default function WritingsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' veya 'desc'
  const [writings, setWritings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadContentData();
      setWritings(data.writings || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredAndSortedWritings = useMemo(() => {
    let filtered = writings;
    
    // Kategori filtreleme
    if (selectedCategory !== 'Tümü') {
      filtered = writings.filter(writing => writing.category === selectedCategory);
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
  }, [writings, selectedCategory, sortOrder]);

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
              Yazılar
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Edebiyat eleştirileri, sanat yazıları ve kültür denemeleri
            </p>
          </div>
        </div>
      </section>

      {/* Filtreler ve Sıralama */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Filtreler */}
          <div className="hidden md:flex flex-col gap-6">
            {/* Kategori Filtresi */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Kategori:</span>
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

            {/* Sıralama */}
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
                {filteredAndSortedWritings.length} yazı bulundu
              </div>
            </div>
          </div>

          {/* Mobile Filtreler */}
          <div className="md:hidden space-y-4">
            {/* Kategori Filtresi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sıralama */}
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
              {filteredAndSortedWritings.length} yazı bulundu
            </div>
          </div>
        </div>
      </section>

      {/* Yazılar Listesi */}
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
              ) : filteredAndSortedWritings.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Seçilen kategoride yazı bulunamadı.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredAndSortedWritings.map((writing) => (
                    <article
                      key={writing.id}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(writing.date).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{writing.readTime}</span>
                        <span className="mx-2">•</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {writing.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        <Link
                          href={`/writings/${writing.id}`}
                          className="hover:text-gray-700 transition-colors"
                        >
                          {writing.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {writing.excerpt}
                      </p>

                      <Link
                        href={`/writings/${writing.id}`}
                        className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
                      >
                        Devamını oku
                        <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                      </Link>
                    </article>
                  ))}
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