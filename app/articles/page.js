'use client';

import { useState, useMemo, useEffect } from 'react';
import { SortAsc, SortDesc, ExternalLink, Download } from 'lucide-react';
import { writings } from '@/data/writings';

export default function ArticlesPage() {
  const [sortOrder, setSortOrder] = useState('desc');
  const [writingsData, setWritingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWritingsData(writings || []);
    setLoading(false);
  }, []);

  const sortedWritings = useMemo(() => {
    let sorted = [...writingsData];
    sorted.sort((a, b) => {
      const aValue = new Date(a.date);
      const bValue = new Date(b.date);
      return sortOrder === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });
    return sorted;
  }, [writingsData, sortOrder]);

  return (
    <div className="bg-white min-h-screen">

      {/* Sayfa Başlığı */}
      <div className="pt-28 pb-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[0.6rem] tracking-[0.5em] text-stone-400 uppercase font-sans mb-4">
            Arşiv
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Yazılar
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
              {sortedWritings.length} yazı
            </span>
          </div>
        </div>
      </div>

      {/* Yazılar Listesi */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-xl border border-gray-100 p-7 animate-pulse">
                  <div className="h-3 bg-gray-100 rounded w-1/3 mb-5" />
                  <div className="h-5 bg-gray-100 rounded w-full mb-3" />
                  <div className="h-5 bg-gray-100 rounded w-4/5 mb-8" />
                  <div className="h-3 bg-gray-100 rounded w-1/4" />
                </div>
              ))}
            </div>
          ) : sortedWritings.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-400 text-base font-playfair italic">
                Henüz yazı bulunmuyor.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sortedWritings.map((writing) => (
                <article
                  key={writing.id}
                  className="group relative bg-white rounded-xl border border-gray-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Sol kenar aksanı - hover'da belirir */}
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-stone-300 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom rounded-full" />

                  <div className="p-7 flex-1">
                    {/* Yayın mecrası */}
                    {writing.publication && (
                      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-stone-400 font-sans mb-4">
                        {writing.publication}
                      </p>
                    )}

                    {/* Başlık */}
                    <h3 className="font-playfair text-[1.1rem] font-semibold text-gray-900 mb-4 leading-snug group-hover:text-stone-700 transition-colors line-clamp-3">
                      <a
                        href={writing.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {writing.title}
                      </a>
                    </h3>

                    {/* Tarih ve okuma süresi */}
                    <div className="flex items-center gap-3 text-[0.7rem] text-stone-400 font-sans">
                      <span>
                        {new Date(writing.date).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      {(writing.readTime || writing.readingTime) && (
                        <>
                          <span className="w-px h-3 bg-stone-200" />
                          <span>{writing.readTime || writing.readingTime}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Alt kısım */}
                  <div className="px-7 pb-6 flex items-center justify-between pt-2 border-t border-gray-50">
                    <a
                      href={writing.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.7rem] tracking-wider uppercase text-stone-400 hover:text-stone-800 transition-colors duration-200 font-medium border-b border-transparent hover:border-stone-600 pb-px"
                    >
                      Okumaya devam
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>

                    {writing.pdfLink && (
                      <a
                        href={writing.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.65rem] bg-red-50 text-red-500 border border-red-100 rounded hover:bg-red-100 transition-colors font-medium"
                      >
                        <Download className="h-2.5 w-2.5" />
                        PDF
                      </a>
                    )}
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
