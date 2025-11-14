
import listingsData from '@/app.json';

export interface Listing {
  id: number;
  listing_type: string;
  bhk_or_sharing: string;
  rent: number;
  deposit: number;
  furnishing_status: string;
  main_image_url: string;
  location: string;
  city: string;
}

export const listings: Listing[] = listingsData as Listing[];
