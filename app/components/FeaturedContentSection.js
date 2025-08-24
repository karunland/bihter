import Link from 'next/link';
import { ArrowRight, BookOpen, Mic, Users, Calendar, Video } from 'lucide-react';

export default function FeaturedContentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Öne Çıkan İçerikler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Yazılar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-gray-600" />
              <h3 className="ml-3 text-xl font-semibold text-gray-900">Yazılar</h3>
            </div>
           
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

        </div>
      </div>
    </section>
  );
}