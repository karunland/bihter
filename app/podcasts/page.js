'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { ArrowLeft, Play, ExternalLink, Calendar, Clock, Filter, SortAsc, SortDesc } from 'lucide-react';

const podcasts = [
  {
    id: 'edebiyat-ve-sanat-soylesileri-1',
    title: 'Edebiyat ve Sanat Söyleşileri #1',
    subtitle: 'Modern Türk Edebiyatında Kadın Yazarlar',
    excerpt: 'Türk edebiyatında kadın yazarların katkıları ve modern edebiyattaki yerleri üzerine kapsamlı bir söyleşi.',
    date: '2024-03-15',
    duration: '45:32',
    platform: 'Spotify',
    platformUrl: 'https://open.spotify.com/episode/example1',
    category: 'Edebiyat'
  },
  {
    id: 'sanat-kritikleri-2',
    title: 'Sanat Kritikleri #2',
    subtitle: 'Çağdaş Sanat ve Toplumsal Sorumluluk',
    excerpt: 'Çağdaş sanatın toplumsal sorumlulukları ve sanatçıların rolü üzerine derinlemesine bir analiz.',
    date: '2024-03-08',
    duration: '52:18',
    platform: 'iVoox',
    platformUrl: 'https://www.ivoox.com/episode-example2',
    category: 'Sanat Eleştirisi'
  },
  {
    id: 'kultur-soylesileri-3',
    title: 'Kültür Söyleşileri #3',
    subtitle: 'Dijital Çağda Edebiyat ve Okuma Kültürü',
    excerpt: 'Teknolojinin gelişimi ile birlikte edebiyatın nasıl değiştiği ve dijital platformların etkisi.',
    date: '2024-03-01',
    duration: '38:45',
    platform: 'Spotify',
    platformUrl: 'https://open.spotify.com/episode/example3',
    category: 'Kültür'
  },
  {
    id: 'felsefe-ve-sanat-4',
    title: 'Felsefe ve Sanat #4',
    subtitle: 'Estetik Deneyim ve Sanatın Felsefi Boyutları',
    excerpt: 'Sanatın felsefi boyutları ve estetik deneyimin insan yaşamındaki yeri üzerine bir söyleşi.',
    date: '2024-02-20',
    duration: '41:12',
    platform: 'iVoox',
    platformUrl: 'https://www.ivoox.com/episode-example4',
    category: 'Felsefe'
  },
  {
    id: 'edebiyat-tarihi-5',
    title: 'Edebiyat Tarihi #5',
    subtitle: 'Cumhuriyet Dönemi Edebiyatının Dönüşümü',
    excerpt: 'Cumhuriyet\'in ilanından günümüze Türk edebiyatının geçirdiği evreler ve dönüşümler.',
    date: '2024-02-10',
    duration: '48:30',
    platform: 'Spotify',
    platformUrl: 'https://open.spotify.com/episode/example5',
    category: 'Edebiyat Tarihi'
  },
  {
    id: 'sanat-ve-teknoloji-6',
    title: 'Sanat ve Teknoloji #6',
    subtitle: 'Dijital Sanat ve Geleneksel Sanat Arasındaki Köprüler',
    excerpt: 'Dijital teknolojilerin sanat üzerindeki etkisi ve geleneksel sanat ile dijital sanat arasındaki ilişki.',
    date: '2024-02-01',
    duration: '35:20',
    platform: 'iVoox',
    platformUrl: 'https://www.ivoox.com/episode-example6',
    category: 'Dijital Sanat'
  }
];

const categories = ['Tümü', 'Edebiyat', 'Sanat Eleştirisi', 'Kültür', 'Felsefe', 'Edebiyat Tarihi', 'Dijital Sanat'];
const platforms = ['Tümü', 'Spotify', 'iVoox'];

export default function PodcastsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedPlatform, setSelectedPlatform] = useState('Tümü');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const filteredAndSortedPodcasts = useMemo(() => {
    let filtered = podcasts;
    
    // Kategori filtreleme
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(podcast => podcast.category === selectedCategory);
    }
    
    // Platform filtreleme
    if (selectedPlatform !== 'Tümü') {
      filtered = filtered.filter(podcast => podcast.platform === selectedPlatform);
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
      } else if (sortBy === 'duration') {
        aValue = a.duration;
        bValue = b.duration;
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    return filtered;
  }, [selectedCategory, selectedPlatform, sortBy, sortOrder]);

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
              Podcastler
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Spotify ve iVoox'ta yayınlanan sanat ve edebiyat podcastleri
            </p>
          </div>
        </div>
      </section>

      {/* Filtreler ve Sıralama */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Kategori ve Platform Filtreleri */}
            <div className="flex flex-col sm:flex-row gap-6">
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

              {/* Platform Filtresi */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Platform:</span>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                        selectedPlatform === platform
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sıralama */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Sırala:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="date">Tarih</option>
                  <option value="title">Başlık</option>
                  <option value="duration">Süre</option>
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

              <div className="text-sm text-gray-500">
                {filteredAndSortedPodcasts.length} podcast bulundu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcastler Listesi */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedPodcasts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Seçilen kriterlere uygun podcast bulunamadı.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredAndSortedPodcasts.map((podcast) => (
                <article
                  key={podcast.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(podcast.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{podcast.duration}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                      {podcast.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {podcast.title}
                  </h2>
                  
                  <h3 className="text-lg font-medium text-gray-700 mb-4">
                    {podcast.subtitle}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {podcast.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <a
                        href={podcast.platformUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        {podcast.platform}'da Dinle
                      </a>
                      
                      <span className="text-sm text-gray-500">
                        Platform: {podcast.platform}
                      </span>
                    </div>

                    <a
                      href={podcast.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={`${podcast.platform} linki`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Platform Bilgileri */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Podcast Platformları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Spotify</h3>
                <p className="text-gray-600 mb-4">
                  Edebiyat ve sanat üzerine söyleşiler, eleştiriler ve analizler
                </p>
                <a
                  href="https://open.spotify.com/show/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Spotify'da takip et
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">iVoox</h3>
                <p className="text-gray-600 mb-4">
                  Kültür, felsefe ve sanat üzerine derinlemesine söyleşiler
                </p>
                <a
                  href="https://www.ivoox.com/podcast-example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  iVoox'ta takip et
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 