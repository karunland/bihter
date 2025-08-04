import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, ExternalLink, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ContactPage() {

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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              İletişim
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sorularınız, işbirlikleri veya söyleşi talepleri için benimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri ve Form */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                    <p className="text-gray-600">iletisim@bihtersabanoglu.com</p>
                    <p className="text-gray-600">akademik@bihtersabanoglu.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">+90 (212) XXX XX XX</p>
                    <p className="text-sm text-gray-500">Pazartesi - Cuma, 09:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      İstanbul Üniversitesi<br/>
                      Edebiyat Fakültesi<br/>
                      Türk Dili ve Edebiyatı Bölümü<br/>
                      Beyazıt, İstanbul
                    </p>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Sosyal Medya
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/bihtersabanoglu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/bihtersabanoglu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com/bihtersabanoglu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />

                  </a>
                </div>
              </div>
            </div>

            {/* E-posta İletişim */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                E-posta İletişim
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bihter Sabanoğlu
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Sorularınız, işbirlikleri veya söyleşi talepleri için benimle iletişime geçin
                  </p>
                </div>

                <div className="mb-6">
                  <div className="inline-flex items-center text-lg text-gray-700">
                    <Mail className="h-5 w-5 mr-3" />
                    <span className="font-medium">iletisim@bihtersabanoglu.com</span>
                  </div>
                </div>

                <a
                  href="mailto:iletisim@bihtersabanoglu.com?subject=İletişim&body=Merhaba Bihter Hanım,%0D%0A%0D%0A"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  E-posta Gönder
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}