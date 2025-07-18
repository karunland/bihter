import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Etkinlikler - Bihter Sabanoğlu',
  description: 'Bihter Sabanoğlu\'nun katıldığı konferanslar, paneller ve sempozyumlar',
};

const events = [
  {
    id: 'edebiyat-festivali-2024',
    title: 'İstanbul Edebiyat Festivali 2024',
    subtitle: 'Modern Edebiyatta Kadın Yazarlar Paneli',
    date: '2024-04-15',
    location: 'İstanbul Kongre Merkezi',
    description: 'Türk edebiyatında kadın yazarların katkıları ve modern edebiyattaki yerleri üzerine panel. Diğer akademisyenler ve yazarlarla birlikte katılım.',
    type: 'Panel',
    duration: '90 dakika'
  },
  {
    id: 'sanat-eleştirisi-sempozyumu',
    title: 'Uluslararası Sanat Eleştirisi Sempozyumu',
    subtitle: 'Çağdaş Sanat ve Toplumsal Sorumluluk',
    date: '2024-03-20',
    location: 'Ankara Üniversitesi',
    description: 'Çağdaş sanatın toplumsal sorumlulukları ve sanatçıların rolü üzerine sunum. Uluslararası katılımcılarla birlikte gerçekleştirilen sempozyum.',
    type: 'Sempozyum',
    duration: '2 gün'
  },
  {
    id: 'dijital-edebiyat-konferansi',
    title: 'Dijital Edebiyat Konferansı',
    subtitle: 'Teknoloji ve Edebiyatın Buluşması',
    date: '2024-02-10',
    location: 'Boğaziçi Üniversitesi',
    description: 'Dijital teknolojilerin edebiyat üzerindeki etkisi ve gelecekteki yönelimler üzerine konferans. Akademik çevrelerden katılımcılarla.',
    type: 'Konferans',
    duration: '1 gün'
  },
  {
    id: 'feminist-edebiyat-workshop',
    title: 'Feminist Edebiyat Workshop',
    subtitle: 'Kadın Yazarların Sesleri',
    date: '2024-01-25',
    location: 'SALT Galata',
    description: 'Feminist edebiyat üzerine interaktif workshop. Katılımcılarla birlikte metin analizi ve tartışma oturumları.',
    type: 'Workshop',
    duration: '4 saat'
  },
  {
    id: 'kultur-sanat-forumu',
    title: 'Kültür ve Sanat Forumu',
    subtitle: 'Sanatın Toplumsal İşlevi',
    date: '2023-12-15',
    location: 'İzmir Kültür Sanat Merkezi',
    description: 'Sanatın toplumsal değişimdeki rolü ve kültür politikaları üzerine forum. Farklı disiplinlerden katılımcılarla tartışma.',
    type: 'Forum',
    duration: '1 gün'
  }
];

export default function EventsPage() {
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
              Katıldığı konferanslar, paneller ve sempozyumlar
            </p>
          </div>
        </div>
      </section>

      {/* Etkinlikler Listesi */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {events.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {event.type}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h2>
                
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  {event.subtitle}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      Süre: {event.duration}
                    </span>
                    <span className="text-sm text-gray-500">
                      Tür: {event.type}
                    </span>
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
                  >
                    Detayları görüntüle
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gelecek Etkinlikler */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Gelecek Etkinlikler
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Yaklaşan Etkinlikler
              </h3>
              <p className="text-gray-600 mb-6">
                Önümüzdeki aylarda gerçekleşecek etkinlikler için takipte kalın. 
                Yeni etkinlikler burada duyurulacaktır.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 