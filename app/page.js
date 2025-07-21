import Link from 'next/link';
import { ArrowRight, BookOpen, Mic, Users, Calendar, Video } from 'lucide-react';
import StructuredData from './components/StructuredData';

export default function Home() {
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
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 sm:mb-8 max-w-xl font-light drop-shadow-md">
              Sanat eleştirmeni, yazar ve akademisyen. Edebiyat, sanat ve kültür 
              üzerine yazıları, podcastleri ve performansları ile tanınır.
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
            {/* Örnek yazılar - gerçek içeriklerle değiştirilecek */}
            <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">15 Mart 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Modern Edebiyatta Kadın Yazarların Rolü
                </h3>
                <p className="text-gray-600 mb-4">
                  Türk edebiyatında kadın yazarların katkıları ve modern edebiyattaki 
                  yerleri üzerine bir değerlendirme...
                </p>
                <Link
                  href="/writings/modern-edebiyatta-kadin-yazarlar"
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  Devamını oku →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">8 Mart 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sanat ve Toplumsal Değişim
                </h3>
                <p className="text-gray-600 mb-4">
                  Sanatın toplumsal değişimdeki rolü ve günümüz sanatçılarının 
                  sorumlulukları hakkında bir analiz...
                </p>
                <Link
                  href="/writings/sanat-ve-toplumsal-degisim"
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  Devamını oku →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">1 Mart 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Dijital Çağda Edebiyat
                </h3>
                <p className="text-gray-600 mb-4">
                  Teknolojinin gelişimi ile birlikte edebiyatın nasıl değiştiği 
                  ve dijital platformların etkisi...
                </p>
                <Link
                  href="/writings/dijital-cagda-edebiyat"
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  Devamını oku →
                </Link>
              </div>
            </article>
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
