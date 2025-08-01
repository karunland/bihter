'use client';

import StructuredData from './components/StructuredData';
import HeroSection from './components/HeroSection';
import Hero2Section from './components/Hero2Section';
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
      <BookSection />
      <FeaturedContentSection />
      <RecentArticlesSection />
    </div>
  );
}
