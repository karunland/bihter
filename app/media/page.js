import Link from 'next/link';
import { ArrowLeft, Video, Calendar, Clock, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Medya - Bihter Sabanoğlu',
  description: 'Bihter Sabanoğlu\'nun belgesel ve video içerikleri',
};

const mediaContent = [
  {
    id: 'edebiyat-belgeseli',
    title: 'Türk Edebiyatının Kadın Kahramanları',
    subtitle: 'Belgesel Serisi',
    date: '2024-02-15',
    duration: '45:30',
    description: 'Türk edebiyatında kadın yazarların ve kadın karakterlerin rolünü inceleyen kapsamlı belgesel serisi. Üç bölümden oluşan bu çalışma, edebiyat tarihimizin önemli bir kesitini görsel olarak sunuyor.',
    platform: 'TRT Belgesel',
    category: 'Belgesel'
  },
  {
    id: 'sanat-eleştirisi-programi',
    title: 'Sanat Eleştirisi Programı',
    subtitle: 'Çağdaş Sanat Analizi',
    date: '2024-01-20',
    duration: '30:15',
    description: 'Çağdaş sanat eserlerinin analiz edildiği, sanatçılarla söyleşilerin yer aldığı televizyon programı. Her bölümde farklı bir sanat dalı ele alınıyor.',
    platform: 'Kültür TV',
    category: 'Televizyon Programı'
  },
  {
    id: 'edebiyat-soylesileri',
    title: 'Edebiyat Söyleşileri',
    subtitle: 'Yazarlarla Buluşma',
    date: '2023-12-10',
    duration: '60:00',
    description: 'Türk edebiyatının önemli yazarlarıyla gerçekleştirilen söyleşi serisi. Her programda bir yazarın eserleri ve yaşamı ele alınıyor.',
    platform: 'YouTube',
    category: 'Söyleşi'
  },
  {
    id: 'kultur-sanat-haberleri',
    title: 'Kültür Sanat Haberleri',
    subtitle: 'Güncel Sanat Dünyası',
    date: '2023-11-25',
    duration: '25:45',
    description: 'Güncel kültür sanat haberlerinin sunulduğu, etkinliklerin tanıtıldığı haber programı. Sanat dünyasından en son gelişmeler.',
    platform: 'Kültür Radyo',
    category: 'Haber Programı'
  },
  {
    id: 'edebiyat-workshop-video',
    title: 'Edebiyat Workshop Video Serisi',
    subtitle: 'Yaratıcı Yazarlık',
    date: '2023-10-15',
    duration: '90:00',
    description: 'Yaratıcı yazarlık tekniklerinin öğretildiği, interaktif workshop videoları. Katılımcılarla birlikte gerçekleştirilen pratik çalışmalar.',
    platform: 'Online Platform',
    category: 'Eğitim Videosu'
  }
];

export default function MediaPage() {
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
              Medya
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Belgesel ve video içerikleri
            </p>
          </div>
        </div>
      </section>

      {/* Medya İçerikleri */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {mediaContent.map((content) => (
              <article
                key={content.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(content.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{content.duration}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {content.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {content.title}
                </h2>
                
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  {content.subtitle}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      Platform: {content.platform}
                    </span>
                    <span className="text-sm text-gray-500">
                      Kategori: {content.category}
                    </span>
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
                  >
                    İzle
                    <Video className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Bilgileri */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Medya Platformları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">TRT Belgesel</h3>
                <p className="text-gray-600 mb-4">
                  Edebiyat ve sanat belgeselleri
                </p>
                <a
                  href="https://www.trtbelgesel.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  TRT Belgesel
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">YouTube</h3>
                <p className="text-gray-600 mb-4">
                  Edebiyat söyleşileri ve workshop videoları
                </p>
                <a
                  href="https://www.youtube.com/@bihtersabanoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  YouTube Kanalı
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kültür TV</h3>
                <p className="text-gray-600 mb-4">
                  Sanat eleştirisi programları
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Kültür TV
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