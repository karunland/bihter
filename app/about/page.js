import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Hakkında - Bihter Sabanoğlu',
  description: 'Bihter Sabanoğlu&apos;nun biyografisi ve akademik geçmişi',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ana Sayfa
            </Link>
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Hakkında
            </h1>
          </div>
        </div>
      </section>

      {/* Biyografi ve Animasyon */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Portre */}
            <div className="relative">
              <img 
                src="/portrait.jpeg" 
                alt="Bihter Sabanoğlu"
                className="w-3/4 h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Biyografi */}
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
        </div>
      </section>
    </div>
  );
} 