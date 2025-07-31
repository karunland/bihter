import Image from 'next/image';

export default function Hero2Section() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Yazar Biyografisi */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Yazar Hakkında
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-4">
                  İngiliz Edebiyatı, Bizans ve klasik sanat tarihinin yanı sıra hiyeroglif, 
                  Osmanlıca, Çince gibi diller üzerine eğitim alan Bihter Sabanoğlu, 
                  edebiyat çevirmeni, editör ve serbest yazar olarak çalışmalarını sürdürüyor.
                </p>
                <p className="mb-4">
                  Çeviri ve edebiyat alanındaki deneyimiyle, geçmişten günümüze uzanan 
                  kültürel köprüler kuruyor. Sanat tarihi ve dil bilgisini harmanlayarak 
                  özgün yazılar kaleme alıyor.
                </p>
                <p>
                  Podcastler, performanslar ve çeşitli etkinliklerle de sanat ve edebiyat 
                  dünyasına katkıda bulunuyor. &quot;Şüpheli Şeylerin Keşfi&quot; romanıyla 
                  okuyucularını İstanbul&apos;un tarihi dokularında bir yolculuğa çıkarıyor.
                </p>
              </div>
            </div>
            
            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Yayınlanan Yazı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1</div>
                <div className="text-sm text-gray-600">Roman</div>
              </div>
            </div>
          </div>

          {/* Sağ taraf - Kare Görsel */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ width: '450px', height: '450px' }}>
                <Image
                  src="/bihterAnimation.png"
                  alt="Bihter Sabanoğlu Portresi"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Dekoratif elementler */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-200 rounded-full -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-gray-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}