'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { ArrowLeft, Calendar, Clock, Filter, SortAsc, SortDesc } from 'lucide-react';

const writings = [
  {
    id: 'modern-edebiyatta-kadin-yazarlar',
    title: 'Modern Edebiyatta Kadın Yazarların Rolü',
    excerpt: 'Türk edebiyatında kadın yazarların katkıları ve modern edebiyattaki yerleri üzerine kapsamlı bir değerlendirme. Kadın yazarların seslerini duyurma mücadelesi ve edebiyat dünyasındaki etkileri.',
    date: '2024-03-15',
    readTime: '8 dk',
    category: 'Edebiyat Eleştirisi'
  },
  {
    id: 'sanat-ve-toplumsal-degisim',
    title: 'Sanat ve Toplumsal Değişim',
    excerpt: 'Sanatın toplumsal değişimdeki rolü ve günümüz sanatçılarının sorumlulukları hakkında derinlemesine bir analiz. Sanatın gücü ve toplumu dönüştürme kapasitesi.',
    date: '2024-03-08',
    readTime: '12 dk',
    category: 'Sanat Eleştirisi'
  },
  {
    id: 'dijital-cagda-edebiyat',
    title: 'Dijital Çağda Edebiyat',
    excerpt: 'Teknolojinin gelişimi ile birlikte edebiyatın nasıl değiştiği ve dijital platformların edebiyat üzerindeki etkisi. Geleneksel edebiyat ile dijital edebiyat arasındaki köprüler.',
    date: '2024-03-01',
    readTime: '10 dk',
    category: 'Kültür Yazısı'
  },
  {
    id: 'postmodern-roman-teknigi',
    title: 'Postmodern Roman Tekniği ve Anlatım',
    excerpt: 'Postmodern edebiyatın teknik özellikleri ve roman sanatındaki yenilikçi yaklaşımlar. Metinlerarasılık, parodi ve ironi kullanımı.',
    date: '2024-02-20',
    readTime: '15 dk',
    category: 'Edebiyat Eleştirisi'
  },
  {
    id: 'sanat-ve-felsefe',
    title: 'Sanat ve Felsefe: Estetik Deneyim',
    excerpt: 'Sanatın felsefi boyutları ve estetik deneyimin insan yaşamındaki yeri. Güzellik, hakikat ve iyi kavramlarının sanat eserlerindeki yansımaları.',
    date: '2024-02-10',
    readTime: '14 dk',
    category: 'Felsefe'
  },
  {
    id: 'cumhuriyet-donemi-edebiyati',
    title: 'Cumhuriyet Dönemi Edebiyatının Dönüşümü',
    excerpt: 'Cumhuriyet\'in ilanından günümüze Türk edebiyatının geçirdiği evreler ve dönüşümler. Toplumsal değişimlerin edebiyata yansımaları.',
    date: '2024-01-25',
    readTime: '18 dk',
    category: 'Edebiyat Tarihi'
  }
];

const categories = ['Tümü', 'Edebiyat Eleştirisi', 'Sanat Eleştirisi', 'Kültür Yazısı', 'Felsefe', 'Edebiyat Tarihi'];

export default function WritingsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [sortBy, setSortBy] = useState('date'); // 'date' veya 'title'
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' veya 'desc'

  const filteredAndSortedWritings = useMemo(() => {
    let filtered = writings;
    
    // Kategori filtreleme
    if (selectedCategory !== 'Tümü') {
      filtered = writings.filter(writing => writing.category === selectedCategory);
    }
    
    // Sıralama
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      if (sortBy === 'date') {
        aValue = new Date(a.date);
        bValue = new Date(b.date);
      } else if (sortBy === 'title') {
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
      } else if (sortBy === 'readTime') {
        aValue = parseInt(a.readTime);
        bValue = parseInt(b.readTime);
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    return filtered;
  }, [selectedCategory, sortBy, sortOrder]);

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
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Kategori Filtresi */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
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
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              >
                <option value="date">Tarih</option>
                <option value="title">Başlık</option>
                <option value="readTime">Okuma Süresi</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                title={sortOrder === 'asc' ? 'Azalan sıralama' : 'Artan sıralama'}
              >
                {sortOrder === 'asc' ? (
                  <SortAsc className="h-5 w-5" />
                ) : (
                  <SortDesc className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Yazılar Listesi */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedWritings.length === 0 ? (
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
      </section>
    </div>
  );
} 