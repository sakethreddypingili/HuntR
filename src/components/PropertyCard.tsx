
import { Listing } from '@/lib/listings';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BedDouble, Bath, Building, IndianRupee } from 'lucide-react';

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN').format(price);
}

const formatFurnishing = (status: string) => {
    return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export default function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <Card className="overflow-hidden group border-0 shadow-lg hover:shadow-primary/20 transition-all duration-300 w-full animate-fade-in-up">
      <CardContent className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={listing.main_image_url}
            alt={`Image of ${listing.bhk_or_sharing} in ${listing.location}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full shadow-md">
            {formatFurnishing(listing.furnishing_status)}
          </div>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-lg text-primary truncate">{listing.location}</h3>
          <div className='flex items-center gap-4 text-muted-foreground'>
            <div className="flex items-center gap-1.5" title="Type">
                <Building className="h-4 w-4" />
                <span className="text-sm font-semibold">{listing.bhk_or_sharing}</span>
            </div>
          </div>
          <div className="flex items-baseline justify-between">
             <div className='flex items-center text-xl font-bold text-gray-800' title="Rent">
                <IndianRupee className="h-5 w-5" />
                <span>{formatPrice(listing.rent)}/month</span>
             </div>
          </div>
          <div className="text-sm text-muted-foreground">
             Deposit: ₹{formatPrice(listing.deposit)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
