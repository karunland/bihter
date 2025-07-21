'use client';

import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import { ArrowLeft, Calendar, Clock, User, BookOpen } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Image from 'next/image';

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

export default function WritingDetailPage({ params }) {
  const unwrappedParams = use(params);
  const [writing, setWriting] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadContentData();
        const foundWriting = data.writings.find(w => w.id === unwrappedParams.id);
        
        if (foundWriting) {
          setWriting(foundWriting);
        } else {
          setError('Yazı bulunamadı');
        }
      } catch (err) {
        setError('Veri yüklenirken hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [unwrappedParams.id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === 'paragraph') {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
            {item.text}
          </p>
        );
      } else if (item.type === 'image') {
        return (
          <div key={index} className="my-8">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
            {item.caption && (
              <p className="text-sm text-gray-500 text-center mt-2 italic">
                {item.caption}
              </p>
            )}
          </div>
        );
      }
      return null;
    });
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
                <div className="h-96 bg-gray-200 rounded mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }

  if (error || !writing) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'Yazı bulunamadı'}
            </h1>
            <Link
              href="/writings"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Yazılara dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative">
        {/* Kapak Resmi */}
        {writing.coverImage && (
          <div className="relative w-full h-96 lg:h-[500px]">
            <Image
              src={writing.coverImage}
              alt={writing.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        )}
        
        {/* Header İçeriği */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 text-white">
                <Link
                  href="/writings"
                  className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Yazılara dön
                </Link>
                
                <div className="flex items-center text-sm text-white/80 mb-4">
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {writing.category}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {writing.title}
                </h1>
                
                {/* <p className="text-xl text-white/90 mb-6 max-w-3xl">
                  {writing.excerpt}
                </p> */}
                
                <div className="flex items-center space-x-6 text-sm text-white/80">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{writing.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(writing.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{writing.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Ana İçerik */}
            <div className="flex-1">
              <article className="prose prose-lg max-w-none">
                {writing.content && renderContent(writing.content)}
              </article>
            </div>

            {/* Sidebar */}
            <Sidebar showOnList={true} />
          </div>
        </div>
      </section>
    </div>
  );
} 