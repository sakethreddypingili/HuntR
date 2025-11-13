'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Search } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const filterCategories = ['PG/Hostel', '1 BHK', '2 BHK', 'Flat/Roommate'];

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState(filterCategories[0]);
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const handleFilterClick = (category: string) => {
    setActiveCategory(category);
  };
  
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1';

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden">
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
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-slide-in-down">
          Find verified PGs, 1 & 2 BHKs.
        </h1>
        <h2 className="mt-4 text-3xl font-bold text-accent drop-shadow-lg sm:text-4xl animate-slide-in-up">
          Zero Brokerage.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100/90 sm:text-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          No fake. No spam. No Brokers. Just real homes.
        </p>
        
        <div className="mt-10 mx-auto max-w-2xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
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

        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {filterCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <Button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={cn(
                  'rounded-full px-4 py-2 font-semibold transition-all duration-300 border-2',
                  isActive
                    ? 'bg-green-600 text-white border-blue-500 hover:bg-blue-600 hover:border-green-500'
                    : 'bg-gray-200 text-blue-600 border-blue-500 hover:bg-gray-400 hover:text-green-500 hover:border-green-500'
                )}
                variant={'outline'}
              >
                {category}
              </Button>
            );
          })}
        </div>

        <div className="mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Button size="lg" className={`h-14 rounded-full px-8 text-lg font-bold ${gradientButtonClasses}`}>
                <Search className="mr-2 h-5 w-5" /> Search Homes
            </Button>
        </div>
      </div>
    </section>
  );
}
