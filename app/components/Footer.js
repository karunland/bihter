import Link from 'next/link';
import { Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Alt Bilgi */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bihter Sabanoğlu.
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
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Sanat, edebiyat ve kültür üzerine çalışmalar
          </p>
        </div>
      </div>
    </footer>
  );
} 