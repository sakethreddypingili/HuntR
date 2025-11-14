
export interface Place {
  name: string;
  imageUrl: string;
  propertyCount: number;
}

export interface City {
  name: string;
  places: Place[];
}

export const popularCities: City[] = [
  {
    name: 'Delhi',
    places: [
      { name: 'Connaught Place', imageUrl: 'https://picsum.photos/seed/delhi1/300/200', propertyCount: 120 },
      { name: 'Khan Market', imageUrl: 'https://picsum.photos/seed/delhi2/300/200', propertyCount: 85 },
      { name: 'Hauz Khas', imageUrl: 'https://picsum.photos/seed/delhi3/300/200', propertyCount: 250 },
      { name: 'Greater Kailash', imageUrl: 'https://picsum.photos/seed/delhi4/300/200', propertyCount: 300 },
      { name: 'Saket', imageUrl: 'https://picsum.photos/seed/delhi5/300/200', propertyCount: 180 },
      { name: 'Karol Bagh', imageUrl: 'https://picsum.photos/seed/delhi6/300/200', propertyCount: 400 },
      { name: 'Vasant Kunj', imageUrl: 'https://picsum.photos/seed/delhi7/300/200', propertyCount: 220 },
      { name: 'Dwarka', imageUrl: 'https://picsum.photos/seed/delhi8/300/200', propertyCount: 500 },
      { name: 'Nehru Place', imageUrl: 'https://picsum.photos/seed/delhi9/300/200', propertyCount: 95 },
      { name: 'Lajpat Nagar', imageUrl: 'https://picsum.photos/seed/delhi10/300/200', propertyCount: 350 },
    ],
  },
  {
    name: 'Mumbai',
    places: [
      { name: 'Bandra', imageUrl: 'https://picsum.photos/seed/mumbai1/300/200', propertyCount: 450 },
      { name: 'Andheri', imageUrl: 'https://picsum.photos/seed/mumbai2/300/200', propertyCount: 600 },
      { name: 'Juhu', imageUrl: 'https://picsum.photos/seed/mumbai3/300/200', propertyCount: 320 },
      { name: 'Powai', imageUrl: 'https://picsum.photos/seed/mumbai4/300/200', propertyCount: 280 },
      { name: 'South Mumbai', imageUrl: 'https://picsum.photos/seed/mumbai5/300/200', propertyCount: 400 },
      { name: 'Thane', imageUrl: 'https://picsum.photos/seed/mumbai6/300/200', propertyCount: 700 },
      { name: 'Navi Mumbai', imageUrl: 'https://picsum.photos/seed/mumbai7/300/200', propertyCount: 800 },
      { name: 'Dadar', imageUrl: 'https://picsum.photos/seed/mumbai8/300/200', propertyCount: 250 },
      { name: 'Chembur', imageUrl: 'https://picsum.photos/seed/mumbai9/300/200', propertyCount: 300 },
      { name: 'Goregaon', imageUrl: 'https://picsum.photos/seed/mumbai10/300/200', propertyCount: 420 },
    ],
  },
  {
    name: 'Bengaluru',
    places: [
      { name: 'Koramangala', imageUrl: 'https://picsum.photos/seed/bengaluru1/300/200', propertyCount: 550 },
      { name: 'Indiranagar', imageUrl: 'https://picsum.photos/seed/bengaluru2/300/200', propertyCount: 480 },
      { name: 'HSR Layout', imageUrl: 'https://picsum.photos/seed/bengaluru3/300/200', propertyCount: 650 },
      { name: 'Whitefield', imageUrl: 'https://picsum.photos/seed/bengaluru4/300/200', propertyCount: 900 },
      { name: 'Jayanagar', imageUrl: 'https://picsum.photos/seed/bengaluru5/300/200', propertyCount: 400 },
      { name: 'Marathahalli', imageUrl: 'https://picsum.photos/seed/bengaluru6/300/200', propertyCount: 800 },
      { name: 'Electronic City', imageUrl: 'https://picsum.photos/seed/bengaluru7/300/200', propertyCount: 1200 },
      { name: 'JP Nagar', imageUrl: 'https://picsum.photos/seed/bengaluru8/300/200', propertyCount: 520 },
      { name: 'Bellandur', imageUrl: 'https://picsum.photos/seed/bengaluru9/300/200', propertyCount: 750 },
      { name: 'Malleshwaram', imageUrl: 'https://picsum.photos/seed/bengaluru10/300/200', propertyCount: 300 },
    ],
  },
  {
    name: 'Kolkata',
    places: [
      { name: 'Park Street', imageUrl: 'https://picsum.photos/seed/kolkata1/300/200', propertyCount: 150 },
      { name: 'Salt Lake', imageUrl: 'https://picsum.photos/seed/kolkata2/300/200', propertyCount: 400 },
      { name: 'New Town', imageUrl: 'https://picsum.photos/seed/kolkata3/300/200', propertyCount: 500 },
      { name: 'Ballygunge', imageUrl: 'https://picsum.photos/seed/kolkata4/300/200', propertyCount: 250 },
      { name: 'Howrah', imageUrl: 'https://picsum.photos/seed/kolkata5/300/200', propertyCount: 300 },
      { name: 'Dum Dum', imageUrl: 'https://picsum.photos/seed/kolkata6/300/200', propertyCount: 280 },
      { name: 'Alipore', imageUrl: 'https://picsum.photos/seed/kolkata7/300/200', propertyCount: 200 },
      { name: 'Garia', imageUrl: 'https://picsum.photos/seed/kolkata8/300/200', propertyCount: 350 },
      { name: 'Rajarhat', imageUrl: 'https://picsum.photos/seed/kolkata9/300/200', propertyCount: 450 },
      { name: 'Tollygunge', imageUrl: 'https://picsum.photos/seed/kolkata10/300/200', propertyCount: 220 },
    ],
  },
  {
    name: 'Chennai',
    places: [
      { name: 'T. Nagar', imageUrl: 'https://picsum.photos/seed/chennai1/300/200', propertyCount: 300 },
      { name: 'Adyar', imageUrl: 'https://picsum.photos/seed/chennai2/300/200', propertyCount: 250 },
      { name: 'Velachery', imageUrl: 'https://picsum.photos/seed/chennai3/300/200', propertyCount: 400 },
      { name: 'Anna Nagar', imageUrl: 'https://picsum.photos/seed/chennai4/300/200', propertyCount: 350 },
      { name: 'OMR', imageUrl: 'https://picsum.photos/seed/chennai5/300/200', propertyCount: 600 },
      { name: 'Nungambakkam', imageUrl: 'https://picsum.photos/seed/chennai6/300/200', propertyCount: 200 },
      { name: 'Mylapore', imageUrl: 'https://picsum.photos/seed/chennai7/300/200', propertyCount: 180 },
      { name: 'Guindy', imageUrl: 'https://picsum.photos/seed/chennai8/300/200', propertyCount: 220 },
      { name: 'Porur', imageUrl: 'https://picsum.photos/seed/chennai9/300/200', propertyCount: 380 },
      { name: 'Tambaram', imageUrl: 'https://picsum.photos/seed/chennai10/300/200', propertyCount: 450 },
    ],
  },
  {
    name: 'Hyderabad',
    places: [
      { name: 'Banjara Hills', imageUrl: 'https://picsum.photos/seed/hyderabad1/300/200', propertyCount: 300 },
      { name: 'Jubilee Hills', imageUrl: 'https://picsum.photos/seed/hyderabad2/300/200', propertyCount: 350 },
      { name: 'Gachibowli', imageUrl: 'https://picsum.photos/seed/hyderabad3/300/200', propertyCount: 700 },
      { name: 'HITECH City', imageUrl: 'https://picsum.photos/seed/hyderabad4/300/200', propertyCount: 800 },
      { name: 'Kondapur', imageUrl: 'https://picsum.photos/seed/hyderabad5/300/200', propertyCount: 650 },
      { name: 'Secunderabad', imageUrl: 'https://picsum.photos/seed/hyderabad6/300/200', propertyCount: 400 },
      { name: 'Kukatpally', imageUrl: 'https://picsum.photos/seed/hyderabad7/300/200', propertyCount: 550 },
      { name: 'Miyapur', imageUrl: 'https://picsum.photos/seed/hyderabad8/300/200', propertyCount: 500 },
      { name: 'Begumpet', imageUrl: 'https://picsum.photos/seed/hyderabad9/300/200', propertyCount: 250 },
      { name: 'Madhapur', imageUrl: 'https://picsum.photos/seed/hyderabad10/300/200', propertyCount: 750 },
    ],
  },
  {
    name: 'Ahmedabad',
    places: [
      { name: 'Satellite', imageUrl: 'https://picsum.photos/seed/ahmedabad1/300/200', propertyCount: 350 },
      { name: 'Bodakdev', imageUrl: 'https://picsum.photos/seed/ahmedabad2/300/200', propertyCount: 300 },
      { name: 'Prahlad Nagar', imageUrl: 'https://picsum.photos/seed/ahmedabad3/300/200', propertyCount: 250 },
      { name: 'Thaltej', imageUrl: 'https://picsum.photos/seed/ahmedabad4/300/200', propertyCount: 280 },
      { name: 'C.G. Road', imageUrl: 'https://picsum.photos/seed/ahmedabad5/300/200', propertyCount: 150 },
      { name: 'Maninagar', imageUrl: 'https://picsum.photos/seed/ahmedabad6/300/200', propertyCount: 400 },
      { name: 'Gota', imageUrl: 'https://picsum.photos/seed/ahmedabad7/300/200', propertyCount: 450 },
      { name: 'Vastrapur', imageUrl: 'https://picsum.photos/seed/ahmedabad8/300/200', propertyCount: 200 },
      { name: 'Navrangpura', imageUrl: 'https://picsum.photos/seed/ahmedabad9/300/200', propertyCount: 220 },
      { name: 'Chandkheda', imageUrl: 'https://picsum.photos/seed/ahmedabad10/300/200', propertyCount: 380 },
    ],
  },
];
