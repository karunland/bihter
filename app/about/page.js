import Image from 'next/image';

export const metadata = {
  title: 'Hakkında',
  description: 'Bihter Sabanoğlu\'nun biyografisi ve akademik geçmişi',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Sayfa Başlığı */}
      <div className="pt-28 pb-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[0.6rem] tracking-[0.5em] text-stone-400 uppercase font-sans mb-4">
            Biyografi
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hakkında
          </h1>
          <div className="w-10 h-px bg-stone-300" />
        </div>
      </div>

      {/* İçerik */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Portre */}
            <div className="lg:col-span-2">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/bihtersabanoglu.webp"
                  alt="Bihter Sabanoğlu"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Biyografi */}
            <div className="lg:col-span-3 lg:pt-2">
              {/* Lede paragrafı - büyük */}
              <p className="font-playfair text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                1980 yılında İstanbul&apos;da doğan Bihter Sabanoğlu, Paris–İstanbul arasında
                yaşayan yazar ve AICA üyesi sanat eleştirmenidir.
              </p>

              <div className="w-8 h-px bg-stone-200 mb-8" />

              {/* Geri kalan paragraflar */}
              <div className="space-y-6 text-stone-600 leading-relaxed text-[0.95rem]">
                <p>
                  Notre Dame de Sion Fransız Kız Lisesi&apos;ni tamamladıktan sonra İstanbul
                  Üniversitesi&apos;nde eğitimine devam etmiştir. Paris III Sorbonne
                  Üniversitesi&apos;nde İngiliz Dili ve Edebiyatı alanında yüksek lisans derecesi
                  alan Sabanoğlu, ardından Ecole du Louvre&apos;da epigrafi, hiyeroglif
                  çözümlemesi ve Bizans sanatı tarihi gibi farklı disiplinlerde eğitim görmüştür.
                </p>

                <p>
                  Halihazırda Sorbonne Paris III Üniversitesi&apos;nde Bizans Sanat Tarihi üzerine
                  doktorasını sürdürmektedir. Bağımsız tarih araştırmalarının yanı sıra sanat
                  tarihi, çağdaş sanat ve edebiyat üzerine yazdığı makaleler{' '}
                  <span className="text-gray-800 font-medium">Toplumsal Tarih</span>,{' '}
                  <span className="text-gray-800 font-medium">Yıllık: Annual of Istanbul Studies</span>,{' '}
                  <span className="text-gray-800 font-medium">Art Unlimited</span>,{' '}
                  <span className="text-gray-800 font-medium">Manifold</span>,{' '}
                  <span className="text-gray-800 font-medium">Sanat Kritik</span>,{' '}
                  <span className="text-gray-800 font-medium">Sanat Dünyamız</span> ve{' '}
                  <span className="text-gray-800 font-medium">T24</span> gibi dergiler, platformlar
                  ve akademik mecralarda yayımlanmıştır.
                </p>

                <p>
                  Arketon Yayınları için{' '}
                  <em className="font-playfair text-gray-800">Jacques Derrida - Mimarlık ve Dekonstrüksiyon</em>{' '}
                  (2023) ve{' '}
                  <em className="font-playfair text-gray-800">Ricardo Porro - Mimarlıkta İçeriğin Beş Görünümü</em>{' '}
                  (2021) kitaplarının editörlüğünü üstlenmiştir. 2022&apos;de ilk romanı{' '}
                  <em className="font-playfair text-gray-800">&quot;Şüpheli Şeylerin Keşfi&quot;</em>&apos;ni
                  yayımlamıştır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
