'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Filter, SortAsc, SortDesc } from 'lucide-react';
import { events } from '@/data/events';

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setEvents(events || []);
      var uniqueCategories = [...new Set(events.map(event => event.category))];
      uniqueCategories.unshift('Tümü');
      setCategories(uniqueCategories);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = events;
    
    // Kategori filtreleme
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(event => event.category === selectedCategory);
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
      } else if (sortBy === 'time') {
        aValue = a.time;
        bValue = b.time;
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    return filtered;
  }, [events, selectedCategory, sortBy, sortOrder]);

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
              Etkinlikler
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Edebiyat, sanat ve kültür etkinlikleri
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

            {/* Sıralama */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              >
                <option value="date">Tarih</option>
                <option value="title">Başlık</option>
                <option value="time">Saat</option>
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

      {/* Etkinlikler Listesi */}
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
              ) : filteredAndSortedEvents.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Seçilen kategoride etkinlik bulunamadı.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredAndSortedEvents.map((event) => (
                    <article
                      key={event.id}
                      className={`bg-white rounded-lg shadow-sm border p-8 hover:shadow-md transition-shadow ${
                        isUpcoming(event.date) 
                          ? 'border-blue-200 bg-blue-50' 
                          : 'border-gray-100'
                      }`}
                    >
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(event.date)}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                        <span className="mx-2">•</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          isUpcoming(event.date)
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {isUpcoming(event.date) ? 'Yaklaşan' : 'Geçmiş'}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {event.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        <Link
                          href={`/events/${event.id}`}
                          className="hover:text-gray-700 transition-colors"
                        >
                          {event.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {event.excerpt}
                      </p>

                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>

                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
                      >
                        Detayları gör
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