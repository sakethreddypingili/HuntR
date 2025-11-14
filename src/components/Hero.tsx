
'use client';

import Image from 'next/image';
import { MapPin, Search } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';


const filterCategories = ['PG/Hostel', '1 BHK', '2 BHK', 'Flat/Roommate'];

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const allowedCities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata'];

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory 
}: HeroProps) {
  const router = useRouter();
  const { toast } = useToast();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleFilterClick = (category: string) => {
    setActiveCategory(category);
  };
  
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1';

  const suggestions = useMemo(() => {
    if (!searchQuery) {
      return allowedCities; 
    }
    return allowedCities.filter(city => 
      city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSuggestionClick = (city: string) => {
    setSearchQuery(city);
    setShowSuggestions(false);
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const lowercasedQuery = searchQuery.toLowerCase();
    const matchedCity = allowedCities.find(city => city.toLowerCase() === lowercasedQuery);

    if (matchedCity) {
      router.push(`/city/${encodeURIComponent(matchedCity.toLowerCase())}`);
    } else {
      toast({
        variant: "destructive",
        title: "City not found",
        description: "Please select one of the supported cities from the list.",
      });
    }
  };

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
        
        <form onSubmit={handleSearch} className="mt-10 mx-auto max-w-2xl animate-fade-in-up relative" style={{animationDelay: '0.4s'}}>
          <div className="group flex items-center gap-2 rounded-full bg-white p-2 shadow-2xl transition-all duration-300 focus-within:scale-[1.02] focus-within:shadow-primary/30">
            <MapPin className="ml-3 h-6 w-6 shrink-0 text-primary" />
            <Input
              id="hero-search-input"
              type="text"
              placeholder={`Search in a city (e.g. Bengaluru)`}
              className="border-0 bg-transparent text-base text-gray-800 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              autoComplete="off"
            />
          </div>
          {showSuggestions && suggestions.length > 0 && (
             <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border text-left">
               <ul className="py-2">
                 {suggestions.map(city => (
                    <li 
                      key={city}
                      className="px-4 py-2 hover:bg-primary/10 cursor-pointer text-gray-800"
                      onMouseDown={() => handleSuggestionClick(city)}
                    >
                      {city}
                    </li>
                 ))}
               </ul>
             </div>
          )}
        
            <div className="mt-8 flex flex-wrap justify-center gap-3" style={{animationDelay: '0.6s'}}>
              {filterCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <Button
                    key={category}
                    type="button"
                    onClick={() => handleFilterClick(category)}
                    className={cn(
                      'rounded-full px-4 py-2 font-semibold transition-all duration-300 border-2',
                      isActive
                        ? 'bg-accent text-white border-primary hover:bg-primary hover:border-accent'
                        : 'bg-gray-300 text-primary border-primary hover:bg-gray-300 hover:text-accent hover:border-accent'
                    )}
                    variant={'outline'}
                  >
                    {category}
                  </Button>
                );
              })}
            </div>

            <div className="mt-12" style={{animationDelay: '0.8s'}}>
                <Button type="submit" size="lg" className={`h-14 rounded-full px-8 text-lg font-bold ${gradientButtonClasses}`}>
                    <Search className="mr-2 h-5 w-5" /> Search Homes
                </Button>
            </div>
        </form>
      </div>
    </section>
  );
}
