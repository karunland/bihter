'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BookSection from '../components/BookSection';

export default function KurguPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Edebiyat dünyasından seçkiler
            </p>
          </div>
        </div>
      </section>

      {/* BookSection */}
      <BookSection />
    </div>
  );
} 