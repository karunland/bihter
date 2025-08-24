import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BookSection from '../components/BookSection';

export const metadata = {
  title: 'Kurgu - Bihter Sabanoğlu',
  description: '1980 yılında İstanbul\'da doğan Bihter Sabanoğlu, Paris-İstanbul arasında yaşayan yazar ve AICA üyesi sanat eleştirmenidir.',
  openGraph: {
    title: 'Kurgu - Bihter Sabanoğlu',
    description: '1980 yılında İstanbul\'da doğan Bihter Sabanoğlu, Paris-İstanbul arasında yaşayan yazar ve AICA üyesi sanat eleştirmenidir.',
    images: [
      {
        url: '/portrait.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bihter Sabanoğlu',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kurgu - Bihter Sabanoğlu',
    description: '1980 yılında İstanbul\'da doğan Bihter Sabanoğlu, Paris-İstanbul arasında yaşayan yazar ve AICA üyesi sanat eleştirmenidir.',
    images: ['/portrait.jpeg'],
  },
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

      {/* BookSection */}
      <BookSection />
    </div>
  );
} 