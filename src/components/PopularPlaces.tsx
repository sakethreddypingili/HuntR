
'use client';

import * as React from 'react';
import Image from 'next/image';
import { popularCities, City } from '@/lib/popular-places';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';

interface PopularPlacesProps {
  searchQuery: string;
  activeCategory: string;
}

export default function PopularPlaces({ searchQuery, activeCategory }: PopularPlacesProps) {
  
  const filteredCities = React.useMemo(() => {
    if (!searchQuery) {
      return popularCities;
    }
    return popularCities.filter(city => 
      city.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const getPropertyCountForCategory = (place: any, category: string) => {
    switch (category) {
      case 'PG/Hostel':
        return place.propertyCounts.pg;
      case '1 BHK':
        return place.propertyCounts.oneBhk;
      case '2 BHK':
        return place.propertyCounts.twoBhk;
      default:
        return place.propertyCount;
    }
  };


  return (
    <section className="py-12 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {filteredCities.map((city) => (
            <div key={city.name}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-headline flex items-center">
                  {activeCategory} in {city.name}
                  <ChevronRight className="h-7 w-7 text-primary ml-1" />
                </h2>
              </div>
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {city.places.map((place, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/8">
                      <Card className="overflow-hidden group border-0 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative h-48 w-full">
                            <Image
                              src={place.imageUrl}
                              alt={`Image of ${place.name}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 12.5vw"
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                             <div className="absolute bottom-0 left-0 p-3">
                                <h3 className="font-bold text-white text-lg">{place.name}</h3>
                                <p className="text-sm text-gray-200">{getPropertyCountForCategory(place, activeCategory)} Properties</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:flex" />
                <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:flex" />
              </Carousel>
            </div>
          ))}
           {filteredCities.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-muted-foreground">No cities found for your search. Try another city!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
