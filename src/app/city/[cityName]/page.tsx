
'use client';

import { useState, useMemo, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { listings, Listing } from '@/lib/listings';
import PropertyCard from '@/components/PropertyCard';
import { notFound } from 'next/navigation';
import PropertyFilters from '@/components/PropertyFilters';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SlidersHorizontal } from 'lucide-react';

export default function CityPage({ params }: { params: { cityName: string } }) {
  const cityName = decodeURIComponent(params.cityName);
  const cityListings = useMemo(() => listings.filter(
    (listing) => listing.city.toLowerCase() === cityName.toLowerCase()
  ), [cityName]);

  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [bhkTypes, setBhkTypes] = useState<string[]>([]);
  const [furnishing, setFurnishing] = useState('any');
  const [filteredListings, setFilteredListings] = useState<Listing[]>(cityListings);

  useEffect(() => {
    const filtered = cityListings.filter(listing => {
      const rent = listing.rent;
      const [minPrice, maxPrice] = priceRange;
      if (rent < minPrice || rent > maxPrice) {
        return false;
      }

      if (furnishing !== 'any' && listing.furnishing_status.toLowerCase().replace(/_/g, ' ') !== furnishing) {
        return false;
      }

      if (bhkTypes.length > 0) {
        const listingCategory = getListingCategory(listing).toLowerCase();
        const selectedCategories = bhkTypes.map(b => b.toLowerCase());
        if (!selectedCategories.includes(listingCategory)) {
          return false;
        }
      }

      return true;
    });
    setFilteredListings(filtered);
  }, [cityListings, priceRange, bhkTypes, furnishing]);

  if (cityListings.length === 0) {
    notFound();
  }

  const capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  const filterProps = {
    priceRange,
    setPriceRange,
    bhkTypes,
    setBhkTypes,
    furnishing,
    setFurnishing,
    cityName: capitalizedCityName,
  };

  return (
    <>
      <Navbar />
      <main className="bg-primary/5">
        <header className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-primary font-headline">
                  Properties in {capitalizedCityName}
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Showing {filteredListings.length} of {cityListings.length} verified listings in {capitalizedCityName}.
                </p>
              </div>
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <SlidersHorizontal className="h-5 w-5" />
                      <span className="sr-only">Open Filters</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                    <PropertyFilters {...filterProps} />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <aside className="hidden lg:block col-span-1 lg:col-span-1">
                    <PropertyFilters {...filterProps} />
                </aside>
                <div className="col-span-1 lg:col-span-3">
                    {filteredListings.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredListings.map((listing) => (
                                <PropertyCard key={listing.id} listing={listing} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center bg-white p-12 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-primary mb-2">No Matches Found</h3>
                            <p className="text-muted-foreground">Try adjusting your filters to find more properties.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </main>
    </>
  );
}

function getListingCategory(listing: Listing): string {
    if (listing.listing_type === 'PG') return 'PG/Hostel';
    if (listing.bhk_or_sharing.includes('SHARING')) return 'Flat/Roommate';
    if (listing.bhk_or_sharing === '1BK' || listing.bhk_or_sharing === '1BHK') return '1 BHK';
    if (listing.bhk_or_sharing === '2BHK') return '2 BHK';
    return 'Other';
}
