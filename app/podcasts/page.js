'use client';

import Image from 'next/image';
import { useState, useMemo, useEffect } from 'react';
import { Play, ExternalLink, Calendar, Clock, SortAsc, SortDesc, Youtube } from 'lucide-react';
import { podcasts } from '@/data/podcasts';

export default function PodcastsPage() {
  const [sortOrder, setSortOrder] = useState('desc');
  const [podcastsData, setPodcastsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPodcastsData(podcasts || []);
    setLoading(false);
  }, []);

  const filteredAndSortedPodcasts = useMemo(() => {
    let filtered = [...podcastsData];
    filtered.sort((a, b) => {
      const aValue = new Date(a.date);
      const bValue = new Date(b.date);
      return sortOrder === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });
    return filtered;
  }, [podcastsData, sortOrder]);

  return (
    <div className="bg-white min-h-screen">

      {/* Sayfa Başlığı */}
      <div className="pt-28 pb-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[0.6rem] tracking-[0.5em] text-stone-400 uppercase font-sans mb-4">
            Dinle & İzle
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Podcastler
          </h1>
          <div className="w-10 h-px bg-stone-300" />
        </div>
      </div>

      {/* Sıralama */}
      <div className="py-5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-800 border border-stone-200 hover:border-stone-400 rounded-md bg-white hover:bg-stone-50 transition-all duration-200"
            >
              {sortOrder === 'asc' ? (
                <>Eskiden yeniye <SortAsc className="h-3.5 w-3.5" /></>
              ) : (
                <>Yeniden eskiye <SortDesc className="h-3.5 w-3.5" /></>
              )}
            </button>
            <span className="text-xs text-stone-400 font-sans">
              {filteredAndSortedPodcasts.length} bölüm
            </span>
          </div>
        </div>
      </div>

      {/* Podcastler Listesi */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-6 p-6 border border-gray-100 rounded-xl animate-pulse">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-3 bg-gray-100 rounded w-1/4 mb-4" />
                    <div className="h-5 bg-gray-100 rounded w-3/4 mb-3" />
                    <div className="h-3 bg-gray-100 rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredAndSortedPodcasts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-400 text-base font-playfair italic">
                Henüz bölüm bulunmuyor.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAndSortedPodcasts.map((podcast) => (
                <article
                  key={podcast.id}
                  className="group flex gap-5 p-6 border border-gray-100 hover:border-stone-200 rounded-xl hover:shadow-md transition-all duration-300 bg-white"
                >
                  {/* Kapak */}
                  <div className="flex-shrink-0 w-18">
                    <div className="relative w-[4.5rem] h-[4.5rem]">
                      <Image
                        src={podcast.image}
                        alt={podcast.title}
                        fill
                        className="rounded-lg object-cover"
                        sizes="72px"
                      />
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="flex-1 min-w-0">
                    {/* Tarih & süre */}
                    <div className="flex items-center gap-3 text-[0.65rem] text-stone-400 font-sans mb-2.5">
                      <span>
                        {new Date(podcast.date).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      {podcast.duration && (
                        <>
                          <span className="w-px h-3 bg-stone-200" />
                          <span>{podcast.duration}</span>
                        </>
                      )}
                    </div>

                    {/* Başlık */}
                    <h2 className="font-playfair text-lg font-semibold text-gray-900 mb-3 leading-snug group-hover:text-stone-700 transition-colors line-clamp-2">
                      {podcast.title}
                    </h2>

                    {/* Platform linki */}
                    <a
                      href={podcast.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-[0.65rem] tracking-wider uppercase font-medium border-b border-transparent pb-px transition-all duration-200 ${
                        podcast.platform === 'YouTube'
                          ? 'text-red-400 hover:text-red-600 hover:border-red-600'
                          : podcast.platform === 'iVoox'
                          ? 'text-orange-400 hover:text-orange-600 hover:border-orange-600'
                          : 'text-stone-400 hover:text-stone-700 hover:border-stone-700'
                      }`}
                    >
                      {podcast.platform === 'YouTube' ? (
                        <Youtube className="h-3 w-3" />
                      ) : (
                        <Play className="h-3 w-3" />
                      )}
                      {podcast.platform === 'YouTube' ? "YouTube'da İzle" : `${podcast.platform}'da Dinle`}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
