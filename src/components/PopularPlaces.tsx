
'use client';

import * as React from 'react';
import Image from 'next/image';
import { listings, Listing } from '@/lib/listings';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

interface PopularPlacesProps {
  searchQuery: string;
  activeCategory: string;
}

interface Place {
  name: string;
  imageUrl: string;
  propertyCounts: {
    'PG/Hostel': number;
    '1 BHK': number;
    '2 BHK': number;
    'Flat/Roommate': number;
  };
}

interface City {
  name: string;
  places: Place[];
}

const mapBhkOrSharingToCategory = (listing: Listing): string => {
    if (listing.listing_type === 'PG') return 'PG/Hostel';
    if (listing.bhk_or_sharing.includes('SHARING')) return 'Flat/Roommate';
    if (listing.bhk_or_sharing === '1BK' || listing.bhk_or_sharing === '1BHK') return '1 BHK';
    if (listing.bhk_or_sharing === '2BHK') return '2 BHK';
    return 'Flat/Roommate'; // Fallback for other types
}

const processListings = (listings: Listing[]): City[] => {
  const citiesMap: { [cityName: string]: { [placeName: string]: Place } } = {};

  listings.forEach((listing) => {
    if (!citiesMap[listing.city]) {
      citiesMap[listing.city] = {};
    }

    if (!citiesMap[listing.city][listing.location]) {
      citiesMap[listing.city][listing.location] = {
        name: listing.location,
        imageUrl: listing.main_image_url, // Use first image found for the location
        propertyCounts: {
          'PG/Hostel': 0,
          '1 BHK': 0,
          '2 BHK': 0,
          'Flat/Roommate': 0,
        },
      };
    }

    const category = mapBhkOrSharingToCategory(listing);
    if (category) {
      if (category === 'PG/Hostel') {
          citiesMap[listing.city][listing.location].propertyCounts['PG/Hostel']++;
      } else if (category === '1 BHK') {
          citiesMap[listing.city][listing.location].propertyCounts['1 BHK']++;
      } else if (category === '2 BHK') {
          citiesMap[listing.city][listing.location].propertyCounts['2 BHK']++;
      } else if (category === 'Flat/Roommate') {
          citiesMap[listing.city][listing.location].propertyCounts['Flat/Roommate']++;
      }
    }
  });
  
  const cities: City[] = Object.keys(citiesMap).map(cityName => ({
      name: cityName,
      places: Object.values(citiesMap[cityName])
  }));

  return cities;
};


export default function PopularPlaces({ searchQuery, activeCategory }: PopularPlacesProps) {
  
  const citiesData = React.useMemo(() => processListings(listings), []);

  const filteredCities = React.useMemo(() => {
    if (!searchQuery) {
      return citiesData;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    
    // First, filter by city name
    const cityMatch = citiesData.filter(city => 
      city.name.toLowerCase().includes(lowercasedQuery)
    );
    if (cityMatch.length > 0) return cityMatch;

    // If no city matches, filter by place name within each city
    return citiesData
      .map(city => ({
        ...city,
        places: city.places.filter(place => place.name.toLowerCase().includes(lowercasedQuery))
      }))
      .filter(city => city.places.length > 0);

  }, [searchQuery, citiesData]);

  const getPropertyCountForCategory = (place: Place, category: string) => {
     switch (category) {
      case 'PG/Hostel':
        return place.propertyCounts['PG/Hostel'];
      case '1 BHK':
        return place.propertyCounts['1 BHK'];
      case '2 BHK':
        return place.propertyCounts['2 BHK'];
      case 'Flat/Roommate':
        return place.propertyCounts['Flat/Roommate'];
      default:
        return 0;
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
                {city.places.length > 10 && (
                  <Button asChild variant="link" className="text-primary font-semibold">
                    <Link href={`/city/${encodeURIComponent(city.name.toLowerCase())}`}>
                      See More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                )}
              </div>
              <Carousel
                opts={{
                  align: 'start',
                }}
                className="w-full"
              >
                <CarouselContent>
                  {city.places.slice(0, 10).map((place, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/8">
                      <Card className="overflow-hidden group border-0 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative h-48 w-full">
                            {place.imageUrl && (
                              <Image
                                src={place.imageUrl}
                                alt={`Image of ${place.name}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 12.5vw"
                                unoptimized
                              />
                            )}
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
              <p className="text-lg text-muted-foreground">No cities or places found for your search. Try another query!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

    