import Link from 'next/link';
import { Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Ana Bilgiler */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Bihter Sabanoğlu
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Sanat eleştirmeni, yazar ve akademisyen. Edebiyat, sanat ve kültür 
              üzerine yazıları, podcastleri ve performansları ile tanınır.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:iletisim@bihtersabanoglu.com"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="E-posta"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/bihtersabanoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/bihtersabanoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/bihtersabanoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              İçerikler
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/writings" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Yazılar
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Podcastler
                </Link>
              </li>
              <li>
                <Link href="/performance" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Performans
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Etkinlikler
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              İletişim
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/editorial" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Editörlük
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Medya
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Bihter Sabanoğlu. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Sanat, edebiyat ve kültür üzerine çalışmalar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 