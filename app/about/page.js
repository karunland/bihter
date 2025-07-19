import Link from 'next/link';
import { ArrowLeft, GraduationCap, BookOpen, Award, Users } from 'lucide-react';

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
                  1985 yılında İstanbul&apos;da doğan Bihter Sabanoğlu, edebiyat ve sanat 
                  alanında uzmanlaşmış bir akademisyen, yazar ve sanat eleştirmenidir. 
                  İstanbul Üniversitesi Türk Dili ve Edebiyatı bölümünden mezun olduktan 
                  sonra, aynı üniversitede yüksek lisans ve doktora eğitimini tamamlamıştır.
                </p>
                
                <p>
                  Akademik kariyerine İstanbul Üniversitesi&apos;nde başlayan Sabanoğlu, 
                  Türk edebiyatı, özellikle modern Türk edebiyatı ve feminist edebiyat 
                  eleştirisi alanlarında çalışmalar yapmaktadır. Çağdaş edebiyat 
                  akımları, kadın yazarlar ve postmodern edebiyat üzerine kapsamlı 
                  araştırmaları bulunmaktadır.
                </p>
                
                <p>
                  Sanat eleştirisi alanında da aktif olan Sabanoğlu, çeşitli sanat 
                  dergilerinde yazılar yazmakta, sanat galerilerinde sergi eleştirileri 
                  yapmakta ve kültür sanat programlarında yer almaktadır. Edebiyatın 
                  diğer sanat dallarıyla ilişkisi üzerine çalışmalar yapmaktadır.
                </p>
                
                <p>
                  Podcast ve video içerikleri üreten Sabanoğlu, edebiyat ve sanatı 
                  daha geniş kitlelere ulaştırmayı hedeflemektedir. Spotify ve iVoox&apos;ta 
                  yayınlanan podcastleri, edebiyat ve sanat üzerine derinlemesine 
                  söyleşiler içermektedir.
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
                    <strong>Doktora:</strong> İstanbul Üniversitesi<br/>
                    Türk Dili ve Edebiyatı (2015)
                  </li>
                  <li>
                    <strong>Yüksek Lisans:</strong> İstanbul Üniversitesi<br/>
                    Türk Dili ve Edebiyatı (2010)
                  </li>
                  <li>
                    <strong>Lisans:</strong> İstanbul Üniversitesi<br/>
                    Türk Dili ve Edebiyatı (2008)
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
                  <li>• Modern Türk Edebiyatı</li>
                  <li>• Feminist Edebiyat Eleştirisi</li>
                  <li>• Postmodern Edebiyat</li>
                  <li>• Sanat Eleştirisi</li>
                  <li>• Kültür Çalışmaları</li>
                  <li>• Dijital Edebiyat</li>
                </ul>
              </div>

              {/* Ödüller */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-gray-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Ödüller</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <strong>2023:</strong> Türk Edebiyatı Araştırma Ödülü<br/>
                    Türk Dil Kurumu
                  </li>
                  <li>
                    <strong>2021:</strong> Sanat Eleştirisi Ödülü<br/>
                    İstanbul Sanat Vakfı
                  </li>
                  <li>
                    <strong>2019:</strong> Genç Akademisyen Ödülü<br/>
                    İstanbul Üniversitesi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Akademik Çalışmalar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Akademik Çalışmalar
            </h2>
            <p className="text-lg text-gray-600">
              Yayınlar, araştırmalar ve akademik katkılar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Akademik Makale</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
              <div className="text-gray-600">Editörlük Çalışması</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Konferans Katılımı</div>
            </div>
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