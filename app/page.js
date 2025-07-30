'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Mic, Users, Calendar, Video, ExternalLink } from 'lucide-react';
import StructuredData from './components/StructuredData';
import { useState, useEffect } from 'react';

export default function Home() {
  const [recentWritings, setRecentWritings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWritings = async () => {
      try {
        const response = await fetch('/data/content.json');
        const data = await response.json();
        
        // En son 3 yazıyı al (harici ve normal yazılar dahil)
        const allWritings = data.writings || [];
        const sortedWritings = allWritings.sort((a, b) => new Date(b.date) - new Date(a.date));
        const recent = sortedWritings.slice(0, 3);
        
        setRecentWritings(recent);
        setLoading(false);
      } catch (error) {
        console.error('Yazılar yüklenirken hata oluştu:', error);
        setLoading(false);
      }
    };

    fetchWritings();
  }, []);

  return (
    <div className="bg-white page-transition">
      <StructuredData />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/banner-2.png')`,
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pt-20">
          <div className="text-left">
            {/* daha ince bir font kullanalim bihter Sabanoğlu basliginda */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-light drop-shadow-lg">
              Bihter Sabanoğlu
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 sm:mb-8 max-w-2xl font-light drop-shadow-md">
              İngiliz Edebiyatı, Bizans ve klasik sanat tarihinin yanı sıra hiyeroglif, 
              Osmanlıca, Çince gibi diller üzerine eğitim alan Bihter Sabanoğlu edebiyat 
              çevirmeni, editör ve serbest yazar olarak çalışmalarını sürdürüyor.
            </p>
            <div className="flex flex-row gap-4 sm:gap-6" >
              <Link
                href="/writings"
                className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-2xl text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl"
              >
                Yazılarımı Oku
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-2xl text-gray-700 bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg"
              >
                Hakkımda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Öne Çıkan İçerikler */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Öne Çıkan İçerikler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Yazılarımdan, podcastlerimden ve etkinliklerimden seçmeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Yazılar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-gray-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Yazılar</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Edebiyat eleştirileri, sanat yazıları ve kültür denemeleri
              </p>
              <Link
                href="/writings"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Yazıları görüntüle
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Podcastler */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Mic className="h-8 w-8 text-gray-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Podcastler</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Spotify ve iVoox&apos;ta yayınlanan sanat ve edebiyat podcastleri
              </p>
              <Link
                href="/podcasts"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Podcastleri dinle
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Performans */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-gray-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Performans</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Sanatsal performanslar, sergiler ve yaratıcı işler
              </p>
              <Link
                href="/performance"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Performansları görüntüle
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Etkinlikler */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-gray-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Etkinlikler</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Konferanslar, paneller ve sempozyum katılımları
              </p>
              <Link
                href="/events"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Etkinlikleri görüntüle
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Editörlük */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-gray-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Editörlük</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Editörlüğünü üstlendiği kitaplar ve yayınlar
              </p>
              <Link
                href="/editorial"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Editörlük çalışmaları
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Medya */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Video className="h-8 w-8 text-gray-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Medya</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Belgesel ve video içerikleri
              </p>
              <Link
                href="/media"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Medya içerikleri
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kitabım */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kitabım
            </h2>
            <p className="text-lg text-gray-600">
              İlk romanım &quot;Şüpheli Şeylerin Keşfi&quot;
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Kitap Kapağı */}
                <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 flex items-center justify-center">
                  <div className="relative">
                    <Image
                      src="/dr.jpg"
                      alt="Şüpheli Şeylerin Keşfi - Bihter Sabanoğlu"
                      width={256}
                      height={384}
                      className="w-64 h-auto rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                    {/* Dekoratif element */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                  </div>
                </div>

                {/* Kitap Bilgileri */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      Şüpheli Şeylerin Keşfi
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      <span className="font-medium">Yazar:</span> Bihter Sabanoğlu
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Her gün çehresi değişen kadim kenti farklı bir gözle izleyen bir roman. 
                      Tesadüf süsü verilmiş bir karşılaşmanın ardından eski mektuplar kutulardan 
                      çıkıyor ve geçmiş ile şimdi arasında bir yolculuk başlıyor. İstanbul&apos;un 
                      tarihi mekânlarında geçen 29 günlük Şubat ayı boyunca süren hikâye.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-500">Yayın Yılı:</span>
                      <div className="font-medium text-gray-900">2022</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Yayınevi:</span>
                      <div className="font-medium text-gray-900">Edisyon Kitap</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Sayfa Sayısı:</span>
                      <div className="font-medium text-gray-900">260</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Boyut:</span>
                      <div className="font-medium text-gray-900">13,5 x 21 cm</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.dr.com.tr/Kitap/supheli-seylerin-Kesfi/Edebiyat/Roman/Turkiye-Roman/urunno=0001959706001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      Satın Al
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Son Yazılar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Son Yazılar
            </h2>
            <p className="text-lg text-gray-600">
              En güncel yazılarımdan birkaçı
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Loading skeleton
              <>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    </div>
                  </div>
                ))}
              </>
            ) : recentWritings.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">Henüz yazı bulunmuyor.</p>
              </div>
            ) : (
              recentWritings.map((writing) => (
                <article key={writing.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(writing.date).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {writing.isExternal ? (
                        <a
                          href={writing.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-700 transition-colors inline-flex items-center"
                        >
                          {writing.title}
                          <ExternalLink className="ml-2 h-4 w-4 text-gray-400" />
                        </a>
                      ) : (
                        <Link
                          href={`/writings/${writing.id}`}
                          className="hover:text-gray-700 transition-colors"
                        >
                          {writing.title}
                        </Link>
                      )}
                    </h3>
                    {!writing.isExternal && writing.excerpt && (
                      <p className="text-gray-600 mb-4">
                        {typeof writing.excerpt === 'string' && writing.excerpt.length > 150 
                          ? writing.excerpt.substring(0, 150) + '...' 
                          : writing.excerpt
                        }
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      {writing.isExternal ? (
                        <a
                          href={writing.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center"
                        >
                          Harici siteye git
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      ) : (
                        <Link
                          href={`/writings/${writing.id}`}
                          className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        >
                          Devamını oku →
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/writings"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Tüm yazıları görüntüle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
