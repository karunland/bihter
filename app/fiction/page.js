import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BookSection from '../components/BookSection';
import GallerySection from '../components/GallerySection';

export const metadata = {
  title: 'Kurgu',
  description: '',
  keywords: [
    'Bihter Sabanoğlu kurgu',
    'edebiyat kurgu',
  ],
};

export default function KurguPage() {
  return (
    <div className="bg-white min-h-screen">
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
              Kurgu
            </h1>
          </div>
        </div>
      </section>

      <BookSection />

      <GallerySection />
    </div>
  );
} 