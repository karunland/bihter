'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { writings } from '@/data/writings';

export default function RecentArticlesSection() {
  const [recentWritings, setRecentWritings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const sortedWritings = [...writings].sort((a, b) => new Date(b.date) - new Date(a.date));
      setRecentWritings(sortedWritings.slice(0, 3));
    } catch {
      // ignore
    }
    setLoading(false);
  }, []);

  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bölüm başlığı */}
        <div className="mb-12">
          <p className="text-[0.6rem] tracking-[0.5em] text-stone-400 uppercase font-sans mb-3">
            Seçmeler
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
            Son Yazılar
          </h2>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-3 bg-gray-100 rounded w-1/3" />
                <div className="h-5 bg-gray-100 rounded w-full" />
                <div className="h-5 bg-gray-100 rounded w-4/5" />
                <div className="h-3 bg-gray-100 rounded w-1/4 mt-6" />
              </div>
            ))
          ) : recentWritings.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-stone-400 font-playfair italic">Henüz yazı bulunmuyor.</p>
            </div>
          ) : (
            recentWritings.map((writing, i) => (
              <article key={writing.id} className="group flex flex-col">
                {/* Numara + yayın */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[0.6rem] tracking-[0.4em] uppercase text-stone-300 font-sans">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {writing.publication && (
                    <span className="text-[0.6rem] tracking-[0.35em] uppercase text-stone-400 font-sans">
                      {writing.publication}
                    </span>
                  )}
                </div>

                {/* İnce çizgi */}
                <div className="w-full h-px bg-gray-100 group-hover:bg-stone-300 transition-colors duration-300 mb-5" />

                {/* Başlık */}
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-stone-700 transition-colors flex-1">
                  <a
                    href={writing.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {writing.title}
                  </a>
                </h3>

                {/* Tarih */}
                <p className="text-[0.68rem] text-stone-400 font-sans mb-5">
                  {new Date(writing.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>

                {/* Link */}
                <a
                  href={writing.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-wider uppercase text-stone-400 hover:text-stone-800 transition-colors duration-200 font-medium border-b border-transparent hover:border-stone-600 pb-px w-fit"
                >
                  Okumaya devam
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </article>
            ))
          )}
        </div>

        {/* Tüm yazılar butonu */}
        <div className="mt-14 pt-10 border-t border-gray-100">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors duration-200 group"
          >
            Tüm yazıları görüntüle
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
