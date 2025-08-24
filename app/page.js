'use client';

import StructuredData from './components/StructuredData';
import Hero4Section from './components/Hero4Section';
import PressSection from './components/PressSection';
import EventsCarousel from './components/EventsCarousel';
import BookSection from './components/BookSection';
import FeaturedContentSection from './components/FeaturedContentSection';
import RecentArticlesSection from './components/RecentArticlesSection';

export default function Home() {
  return (
    <div className="bg-white page-transition">
      <StructuredData />
      {/* <HeroSection />
      <Hero2Section /> */}
      <Hero4Section />
      <PressSection />
      <EventsCarousel />
      {/* <BookSection /> */}
      <RecentArticlesSection />
      <FeaturedContentSection />
    </div>
  );
}
