'use client';

import StructuredData from './components/StructuredData';
import Hero4Section from './components/Hero4Section';
import EventsCarousel from './components/EventsCarousel';
import FeaturedContentSection from './components/FeaturedContentSection';
import RecentArticlesSection from './components/RecentArticlesSection';

export default function Home() {
  return (
    <div className="bg-white page-transition">
      <StructuredData />
      <Hero4Section />
      <EventsCarousel />
      <RecentArticlesSection />
      <FeaturedContentSection />
    </div>
  );
}
