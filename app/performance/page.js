import Link from 'next/link';
import { ArrowLeft, Users, Calendar, MapPin, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Performans - Bihter Sabanoğlu',
  description: 'Bihter Sabanoğlu\'nun sanatsal performansları, sergiler ve yaratıcı işler',
};

const performances = [
  {
    id: 'edebiyat-ve-muzik-performansi',
    title: 'Edebiyat ve Müzik Performansı',
    subtitle: 'Söz ve Ses Buluşması',
    date: '2024-03-20',
    location: 'İstanbul Modern Sanat Müzesi',
    description: 'Edebiyat metinlerinin müzikle buluştuğu, çok disiplinli bir performans. Klasik Türk edebiyatından seçilen metinler, çağdaş müzik aranjmanlarıyla yeniden yorumlanıyor.',
    duration: '90 dakika',
    category: 'Çok Disiplinli Performans'
  },
  {
    id: 'feminist-edebiyat-okumalari',
    title: 'Feminist Edebiyat Okumaları',
    subtitle: 'Kadın Yazarların Sesleri',
    date: '2024-02-15',
    location: 'SALT Galata',
    description: 'Türk edebiyatının önemli kadın yazarlarından seçilen metinlerin canlı okuma performansı. Her metin, yazarın yaşam öyküsü ve dönem koşulları bağlamında sunuluyor.',
    duration: '120 dakika',
    category: 'Edebiyat Performansı'
  },
  {
    id: 'dijital-sanat-installasyonu',
    title: 'Dijital Sanat İnstallasyonu',
    subtitle: 'Metin ve Teknoloji',
    date: '2024-01-30',
    location: 'Arter Sanat Galerisi',
    description: 'Geleneksel edebiyat metinlerinin dijital teknolojilerle yeniden yorumlandığı interaktif bir sanat installasyonu. Ziyaretçiler metinlerle etkileşime geçebiliyor.',
    duration: 'Sürekli',
    category: 'Dijital Sanat'
  },
  {
    id: 'sokak-edebiyati-projesi',
    title: 'Sokak Edebiyatı Projesi',
    subtitle: 'Şehir ve Söz',
    date: '2023-12-10',
    location: 'İstanbul\'un Çeşitli Sokakları',
    description: 'İstanbul\'un farklı semtlerinde gerçekleştirilen, sokak edebiyatı performansları. Şehrin sesleri, kokuları ve dokusuyla edebiyatın buluşması.',
    duration: 'Gün boyu',
    category: 'Sokak Sanatı'
  },
  {
    id: 'multimedya-tiyatro',
    title: 'Multimedya Tiyatro',
    subtitle: 'Edebiyat, Tiyatro ve Teknoloji',
    date: '2023-11-25',
    location: 'BKM (Büyük Kulüp)',
    description: 'Klasik edebiyat eserlerinin multimedya teknolojileriyle sahnelendiği yenilikçi bir tiyatro performansı. Görsel efektler, ses tasarımı ve dijital projeksiyonlar kullanılıyor.',
    duration: '150 dakika',
    category: 'Tiyatro'
  }
];

export default function PerformancePage() {
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
              Performans
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sanatsal performanslar, sergiler ve yaratıcı işler
            </p>
          </div>
        </div>
      </section>

      {/* Performanslar Listesi */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {performances.map((performance) => (
              <article
                key={performance.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(performance.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{performance.location}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {performance.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {performance.title}
                </h2>
                
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  {performance.subtitle}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {performance.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      Süre: {performance.duration}
                    </span>
                    <span className="text-sm text-gray-500">
                      Kategori: {performance.category}
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

      {/* Performans Yaklaşımı */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Performans Yaklaşımı
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Performans çalışmalarımda, edebiyatın sadece yazılı metin olarak 
                değil, canlı bir deneyim olarak sunulmasına odaklanıyorum. 
                Geleneksel edebiyat formlarını çağdaş sanat teknikleriyle 
                birleştirerek, izleyiciye farklı bir deneyim sunmayı hedefliyorum.
              </p>
              <p>
                Çok disiplinli yaklaşımım, edebiyatı müzik, görsel sanatlar, 
                tiyatro ve dijital teknolojilerle buluşturuyor. Bu sayede 
                edebiyatın gücünü farklı duyulara hitap eden bir deneyime 
                dönüştürüyorum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 