'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Search } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const filterCategories = ['PG/Hostel', '1 BHK', '2 BHK', 'Flat/Roommate'];

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState(filterCategories[0]);
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const handleFilterClick = (category: string) => {
    setActiveCategory(category);
  };
  
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1';

  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,20,40,0.85)] to-[rgba(0,86,179,0.6)]" />
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Find verified PGs, 1 & 2 BHKs.
        </h1>
        <h2 className="mt-4 text-3xl font-bold text-accent drop-shadow-lg sm:text-4xl">
          Zero Brokerage.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100/90 sm:text-xl">
          No fake. No spam. No Brokers. Just real homes.
        </p>
        
        <div className="mt-10 mx-auto max-w-2xl">
          <div className="group flex items-center gap-2 rounded-full bg-white p-2 shadow-2xl transition-all duration-300 focus-within:scale-[1.02] focus-within:shadow-primary/30">
            <MapPin className="ml-3 h-6 w-6 shrink-0 text-primary" />
            <Input
              id="hero-search-input"
              type="text"
              placeholder={`Search ${activeCategory} in location (e.g. Koramangala)`}
              className="border-0 bg-transparent text-base text-gray-800 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filterCategories.map((category) => (
            <Button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`rounded-full px-4 py-2 font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground shadow-md'
                  : 'border-white/40 text-blue-500 bg-white hover:bg-blue-100'
              }`}
              variant={activeCategory === category ? 'default' : 'outline'}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-12">
            <Button size="lg" className={`h-14 rounded-full px-8 text-lg font-bold ${gradientButtonClasses}`}>
                <Search className="mr-2 h-5 w-5" /> Search Homes
            </Button>
        </div>
      </div>
    </section>
  );
}
