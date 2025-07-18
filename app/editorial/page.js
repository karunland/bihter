import Link from 'next/link';
import { ArrowLeft, BookOpen, Calendar, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Editörlük - Bihter Sabanoğlu',
  description: 'Bihter Sabanoğlu\'nun editörlüğünü üstlendiği kitaplar ve yayınlar',
};

const editorialWorks = [
  {
    id: 'modern-turk-edebiyati-antolojisi',
    title: 'Modern Türk Edebiyatı Antolojisi',
    subtitle: '1950-2000 Dönemi',
    publisher: 'Yapı Kredi Yayınları',
    year: '2023',
    description: 'Modern Türk edebiyatının en önemli eserlerini bir araya getiren kapsamlı antoloji. Elli yıllık dönemi kapsayan bu çalışma, edebiyat tarihimizin önemli bir kesitini sunuyor.',
    isbn: '978-975-08-1234-5',
    pages: 450,
    category: 'Antoloji'
  },
  {
    id: 'kadin-yazarlar-ve-feminist-edebiyat',
    title: 'Kadın Yazarlar ve Feminist Edebiyat',
    subtitle: 'Türk Edebiyatında Kadın Sesleri',
    publisher: 'Can Yayınları',
    year: '2022',
    description: 'Türk edebiyatında kadın yazarların katkılarını ve feminist edebiyatın gelişimini inceleyen önemli bir çalışma.',
    isbn: '978-975-07-5678-9',
    pages: 320,
    category: 'Araştırma'
  },
  {
    id: 'sanat-ve-felsefe-dergisi',
    title: 'Sanat ve Felsefe Dergisi',
    subtitle: 'Yıllık Kültür ve Sanat Yayını',
    publisher: 'Sanat ve Felsefe Vakfı',
    year: '2021-2023',
    description: 'Üç yıl boyunca editörlüğünü üstlendiği, sanat ve felsefe alanında önemli makalelerin yer aldığı yıllık dergi.',
    isbn: 'ISSN: 1234-5678',
    pages: 'Yıllık',
    category: 'Dergi'
  },
  {
    id: 'cumhuriyet-donemi-siir-antolojisi',
    title: 'Cumhuriyet Dönemi Şiir Antolojisi',
    subtitle: '1923-2023',
    publisher: 'İş Bankası Kültür Yayınları',
    year: '2023',
    description: 'Cumhuriyet\'in yüzüncü yılına özel olarak hazırlanan, yüz yıllık şiir birikimini yansıtan kapsamlı antoloji.',
    isbn: '978-975-458-9876-5',
    pages: 600,
    category: 'Antoloji'
  },
  {
    id: 'dijital-cagda-edebiyat',
    title: 'Dijital Çağda Edebiyat',
    subtitle: 'Teknoloji ve Edebiyatın Buluşması',
    publisher: 'Metis Yayınları',
    year: '2022',
    description: 'Dijital teknolojilerin edebiyat üzerindeki etkisini inceleyen, güncel konuları ele alan önemli bir çalışma.',
    isbn: '978-975-342-3456-7',
    pages: 280,
    category: 'Araştırma'
  }
];

export default function EditorialPage() {
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
              Editörlük
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Editörlüğünü üstlendiği kitaplar ve yayınlar
            </p>
          </div>
        </div>
      </section>

      {/* Editörlük Çalışmaları */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {editorialWorks.map((work) => (
              <article
                key={work.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{work.publisher}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{work.year}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {work.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {work.title}
                </h2>
                
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  {work.subtitle}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {work.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">ISBN:</span>
                    <span className="text-gray-600 ml-2">{work.isbn}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">Sayfa:</span>
                    <span className="text-gray-600 ml-2">{work.pages}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">Kategori:</span>
                    <span className="text-gray-600 ml-2">{work.category}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Editör: Bihter Sabanoğlu
                  </span>
                  
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

      {/* Editörlük Hakkında */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Editörlük Yaklaşımı
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Editörlük çalışmalarımda, edebiyatın ve sanatın toplumsal değişimdeki 
                rolüne odaklanıyorum. Her projede, yazarın sesini en iyi şekilde 
                yansıtacak şekilde çalışırken, okuyucuya da değerli bir deneyim 
                sunmayı hedefliyorum.
              </p>
              <p>
                Özellikle antoloji çalışmalarında, farklı dönemlerin ve akımların 
                temsil edilmesine özen gösteriyor, edebiyat tarihimizin zengin 
                birikimini günümüz okuyucusuna aktarmayı amaçlıyorum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 