import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram } from 'lucide-react';

const navLinks = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Kurgu', href: '/fiction' },
  { name: 'Yazılar', href: '/articles' },
  { name: 'Podcastler', href: '/podcasts' },
  { name: 'Basında', href: '/press' },
  { name: 'Etkinlikler', href: '/events' },
  { name: 'Hakkında', href: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Sol: İsim & kısa tanıtım */}
          <div>
            <p className="font-playfair text-2xl font-bold text-gray-900 mb-2">
              Bihter Sabanoğlu
            </p>
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-stone-400 font-sans mb-5">
              Yazar &amp; Sanat Eleştirmeni
            </p>
            <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
              Paris–İstanbul arasında yaşayan yazar ve AICA üyesi sanat eleştirmeni.
            </p>
          </div>

          {/* Orta: Navigasyon */}
          <div>
            <p className="text-[0.6rem] tracking-[0.45em] uppercase text-stone-400 font-sans mb-5">
              Sayfalar
            </p>
            <nav className="space-y-2.5">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Sağ: İletişim & sosyal */}
          <div>
            <p className="text-[0.6rem] tracking-[0.45em] uppercase text-stone-400 font-sans mb-5">
              İletişim
            </p>
            <div className="space-y-4">
              <a
                href="mailto:bihtersabanoglu@gmail.com"
                className="flex items-center gap-3 text-sm text-stone-500 hover:text-gray-900 transition-colors duration-200 group"
              >
                <Mail className="h-4 w-4 text-stone-300 group-hover:text-stone-600 transition-colors" />
                bihtersabanoglu@gmail.com
              </a>
              <a
                href="https://instagram.com/bihtersabanoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-stone-500 hover:text-gray-900 transition-colors duration-200 group"
              >
                <Instagram className="h-4 w-4 text-stone-300 group-hover:text-stone-600 transition-colors" />
                @bihtersabanoglu
              </a>
              <a
                href="https://univ-paris3.academia.edu/BihterSabanoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-stone-500 hover:text-gray-900 transition-colors duration-200 group"
              >
                <Image
                  src="/academiaLogo.avif"
                  alt="Academia"
                  width={16}
                  height={16}
                  className="h-4 w-4 opacity-40 group-hover:opacity-70 transition-opacity"
                />
                Academia.edu
              </a>
            </div>
          </div>
        </div>

        {/* Alt çizgi */}
        {/* <div className="mt-14 pt-8 border-t border-gray-100">
          <p className="text-xs text-stone-400 font-sans">
            © {new Date().getFullYear()} Bihter Sabanoğlu. Tüm hakları saklıdır.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
