import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function BookSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Kitap Kapağı */}
              <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/dr.jpeg"
                    alt="Şüpheli Şeylerin Keşfi - Bihter Sabanoğlu"
                    width={256}
                    height={384}
                    className="w-64 h-auto rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  {/* Dekoratif element */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Kitap Bilgileri */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Şüpheli Şeylerin Keşfi
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    <span className="font-medium">Yazar:</span> Bihter Sabanoğlu
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Her gün çehresi değişen kadim kenti farklı bir gözle izleyen bir roman. 
                    Tesadüf süsü verilmiş bir karşılaşmanın ardından eski mektuplar kutulardan 
                    çıkıyor ve geçmiş ile şimdi arasında bir yolculuk başlıyor. İstanbul&apos;un 
                    tarihi mekânlarında geçen 29 günlük Şubat ayı boyunca süren hikâye.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-500">Yayın Yılı:</span>
                    <div className="font-medium text-gray-900">2022</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Yayınevi:</span>
                    <div className="font-medium text-gray-900">Edisyon Kitap</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Sayfa Sayısı:</span>
                    <div className="font-medium text-gray-900">260</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Boyut:</span>
                    <div className="font-medium text-gray-900">13,5 x 21 cm</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.kitapyurdu.com/kitap/supheli-seylerin-kesfi/606867.html&filter_name=%C5%9F%C3%BCpheli+%C5%9Feylerin+ke%C5%9Ffi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Satın Al
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}