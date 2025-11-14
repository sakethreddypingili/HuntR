
import Navbar from '@/components/Navbar';
import { listings, Listing } from '@/lib/listings';
import PropertyCard from '@/components/PropertyCard';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const cities = [...new Set(listings.map((listing) => listing.city.toLowerCase()))];
  return cities.map((cityName) => ({
    cityName: encodeURIComponent(cityName),
  }));
}

export default function CityPage({ params }: { params: { cityName: string } }) {
  const cityName = decodeURIComponent(params.cityName);
  const cityListings = listings.filter(
    (listing) => listing.city.toLowerCase() === cityName.toLowerCase()
  );

  if (cityListings.length === 0) {
    notFound();
  }

  const capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return (
    <>
      <Navbar />
      <main className="bg-primary/5">
        <header className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary font-headline">
              Properties in {capitalizedCityName}
            </h1>
            <p className="mt-2 text-muted-foreground">
              Browse all available verified listings in {capitalizedCityName}.
            </p>
          </div>
        </header>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cityListings.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
