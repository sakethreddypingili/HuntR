
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularPlaces from '@/components/PopularPlaces';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('PG/Hostel');

  return (
    <>
      <Navbar />
      <main>
        <Hero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <PopularPlaces 
          searchQuery={searchQuery}
          activeCategory={activeCategory}
        />
      </main>
    </>
  );
}
