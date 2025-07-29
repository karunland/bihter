import Link from 'next/link';
import { ArrowLeft, GraduationCap, BookOpen, Users } from 'lucide-react';

export const metadata = {
  title: 'Hakkında - Bihter Sabanoğlu',
  description: 'Bihter Sabanoğlu&apos;nun biyografisi ve akademik geçmişi',
};

export default function AboutPage() {
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
              Hakkında
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Biyografi ve akademik geçmiş
            </p>
          </div>
        </div>
      </section>

      {/* Biyografi */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Ana İçerik */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Bihter Sabanoğlu
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  1980 yılında İstanbul&apos;da doğan Bihter Sabanoğlu, Paris-İstanbul arasında 
                  yaşayan yazar ve AICA üyesi sanat eleştirmenidir. Notre Dame de Sion 
                  Fransız Kız Lisesi&apos;ni tamamladıktan sonra İstanbul Üniversitesi&apos;nde 
                  eğitimine devam etmiştir.
                </p>
                
                <p>
                  Paris III Sorbonne Üniversitesi&apos;nde İngiliz Dili ve Edebiyatı alanında 
                  yüksek lisans derecesi alan Sabanoğlu, ardından Ecole du Louvre&apos;da 
                  epigrafi, hiyeroglif çözümlemesi ve Bizans sanatı tarihi gibi farklı 
                  disiplinlerde eğitim görmüştür. Halihazırda Sorbonne Paris III 
                  Üniversitesi&apos;nde Bizans Sanat Tarihi üzerine doktorasını sürdürmektedir.
                </p>
                
                <p>
                  Bağımsız tarih araştırmalarının yanı sıra sanat tarihi, çağdaş sanat 
                  ve edebiyat üzerine yazdığı makaleler Toplumsal Tarih, Yıllık: Annual 
                  of Istanbul Studies, Art Unlimited, Manifold, Sanat Kritik, Sanat 
                  Dünyamız, T24 gibi dergiler, platformlar ve akademik mecralarda yayımlanmıştır.
                </p>
                
                <p>
                  Arketon Yayınları için Jacques Derrida - Mimarlık ve Dekonstrüksiyon (2023) 
                  ve Ricardo Porro - Mimarlıkta İçeriğin Beş Görünümü (2021) kitaplarının 
                  editörlüğünü üstlenmiştir. 2022&apos;de ilk romanı &quot;Şüpheli Şeylerin Keşfi&quot;ni yayımlamıştır.
                </p>
              </div>
            </div>

            {/* Yan Panel */}
            <div className="space-y-8">
              {/* Eğitim */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-gray-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Eğitim</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <strong>Doktora:</strong> Sorbonne Paris III Üniversitesi<br/>
                    Bizans Sanat Tarihi (devam ediyor)
                  </li>
                  <li>
                    <strong>Yüksek Lisans:</strong> Paris III Sorbonne Üniversitesi<br/>
                    İngiliz Dili ve Edebiyatı
                  </li>
                  <li>
                    <strong>Lisans:</strong> İstanbul Üniversitesi
                  </li>
                  <li>
                    <strong>Lise:</strong> Notre Dame de Sion<br/>
                    Fransız Kız Lisesi
                  </li>
                  <li>
                    <strong>Özel Eğitim:</strong> Ecole du Louvre<br/>
                    Epigrafi, Hiyeroglif, Bizans Sanatı
                  </li>
                </ul>
              </div>

              {/* Uzmanlık Alanları */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-gray-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Uzmanlık Alanları</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bizans Sanat Tarihi</li>
                  <li>• Sanat Tarihi</li>
                  <li>• Epigrafi</li>
                  <li>• Hiyeroglif Çözümlemesi</li>
                  <li>• Sanat Eleştirisi</li>
                  <li>• Edebiyat</li>
                  <li>• Çağdaş Sanat</li>
                  <li>• Bağımsız Tarih Araştırmaları</li>
                </ul>
              </div>

              {/* Öne Çıkan Çalışmalar */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-gray-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Öne Çıkan Çalışmalar</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <strong>2023:</strong> Jacques Derrida - Mimarlık ve Dekonstrüksiyon<br/>
                    <span className="text-xs text-gray-500">Editörlük - Arketon Yayınları</span>
                  </li>
                  <li>
                    <strong>2022:</strong> Şüpheli Şeylerin Keşfi<br/>
                    <span className="text-xs text-gray-500">Roman</span>
                  </li>
                  <li>
                    <strong>2021:</strong> Ricardo Porro - Mimarlıkta İçeriğin Beş Görünümü<br/>
                    <span className="text-xs text-gray-500">Editörlük - Arketon Yayınları</span>
                  </li>
                </ul>
              </div>

              {/* Üyelikler */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-gray-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Üyelikler</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AICA (Uluslararası Sanat Eleştirmenleri Derneği)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yayınlar ve Araştırmalar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Yayınlar ve Araştırmalar
            </h2>
            <p className="text-lg text-gray-600">
              Sanat tarihi, edebiyat ve kültür alanlarında yayınlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
              <div className="text-gray-600">Roman</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
              <div className="text-gray-600">Editörlük Çalışması</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600">Dergi ve Platform</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Toplumsal Tarih, Yıllık: Annual of Istanbul Studies, Art Unlimited, 
              Manifold, Sanat Kritik, Sanat Dünyamız, T24 gibi prestijli dergiler, 
              platformlar ve akademik mecralarda makaleleri yayımlanmıştır.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Akademik işbirlikleri, söyleşi talepleri veya sorularınız için 
            benimle iletişime geçebilirsiniz.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            İletişim
          </Link>
        </div>
      </section>
    </div>
  );
} 