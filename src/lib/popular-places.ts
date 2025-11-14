
export interface Place {
  name: string;
  imageUrl: string;
  propertyCount: number;
  propertyCounts: {
    pg: number;
    oneBhk: number;
    twoBhk: number;
  }
}

export interface City {
  name: string;
  places: Place[];
}

export const popularCities: City[] = [
  {
    name: 'Delhi',
    places: [
      { name: 'Connaught Place', imageUrl: 'https://picsum.photos/seed/delhi1/300/200', propertyCount: 120, propertyCounts: { pg: 50, oneBhk: 40, twoBhk: 30 } },
      { name: 'Khan Market', imageUrl: 'https://picsum.photos/seed/delhi2/300/200', propertyCount: 85, propertyCounts: { pg: 20, oneBhk: 35, twoBhk: 30 } },
      { name: 'Hauz Khas', imageUrl: 'https://picsum.photos/seed/delhi3/300/200', propertyCount: 250, propertyCounts: { pg: 120, oneBhk: 80, twoBhk: 50 } },
      { name: 'Greater Kailash', imageUrl: 'https://picsum.photos/seed/delhi4/300/200', propertyCount: 300, propertyCounts: { pg: 100, oneBhk: 100, twoBhk: 100 } },
      { name: 'Saket', imageUrl: 'https://picsum.photos/seed/delhi5/300/200', propertyCount: 180, propertyCounts: { pg: 70, oneBhk: 60, twoBhk: 50 } },
      { name: 'Karol Bagh', imageUrl: 'https://picsum.photos/seed/delhi6/300/200', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 120, twoBhk: 80 } },
      { name: 'Vasant Kunj', imageUrl: 'https://picsum.photos/seed/delhi7/300/200', propertyCount: 220, propertyCounts: { pg: 80, oneBhk: 90, twoBhk: 50 } },
      { name: 'Dwarka', imageUrl: 'https://picsum.photos/seed/delhi8/300/200', propertyCount: 500, propertyCounts: { pg: 250, oneBhk: 150, twoBhk: 100 } },
      { name: 'Nehru Place', imageUrl: 'https://picsum.photos/seed/delhi9/300/200', propertyCount: 95, propertyCounts: { pg: 45, oneBhk: 30, twoBhk: 20 } },
      { name: 'Lajpat Nagar', imageUrl: 'https://picsum.photos/seed/delhi10/300/200', propertyCount: 350, propertyCounts: { pg: 150, oneBhk: 120, twoBhk: 80 } },
    ],
  },
  {
    name: 'Mumbai',
    places: [
      { name: 'Bandra', imageUrl: 'https://picsum.photos/seed/mumbai1/300/200', propertyCount: 450, propertyCounts: { pg: 200, oneBhk: 150, twoBhk: 100 } },
      { name: 'Andheri', imageUrl: 'https://picsum.photos/seed/mumbai2/300/200', propertyCount: 600, propertyCounts: { pg: 300, oneBhk: 200, twoBhk: 100 } },
      { name: 'Juhu', imageUrl: 'https://picsum.photos/seed/mumbai3/300/200', propertyCount: 320, propertyCounts: { pg: 150, oneBhk: 100, twoBhk: 70 } },
      { name: 'Powai', imageUrl: 'https://picsum.photos/seed/mumbai4/300/200', propertyCount: 280, propertyCounts: { pg: 120, oneBhk: 100, twoBhk: 60 } },
      { name: 'South Mumbai', imageUrl: 'https://picsum.photos/seed/mumbai5/300/200', propertyCount: 400, propertyCounts: { pg: 100, oneBhk: 150, twoBhk: 150 } },
      { name: 'Thane', imageUrl: 'https://picsum.photos/seed/mumbai6/300/200', propertyCount: 700, propertyCounts: { pg: 300, oneBhk: 250, twoBhk: 150 } },
      { name: 'Navi Mumbai', imageUrl: 'https://picsum.photos/seed/mumbai7/300/200', propertyCount: 800, propertyCounts: { pg: 350, oneBhk: 250, twoBhk: 200 } },
      { name: 'Dadar', imageUrl: 'https://picsum.photos/seed/mumbai8/300/200', propertyCount: 250, propertyCounts: { pg: 130, oneBhk: 80, twoBhk: 40 } },
      { name: 'Chembur', imageUrl: 'https://picsum.photos/seed/mumbai9/300/200', propertyCount: 300, propertyCounts: { pg: 140, oneBhk: 100, twoBhk: 60 } },
      { name: 'Goregaon', imageUrl: 'https://picsum.photos/seed/mumbai10/300/200', propertyCount: 420, propertyCounts: { pg: 200, oneBhk: 150, twoBhk: 70 } },
    ],
  },
  {
    name: 'Bengaluru',
    places: [
      { name: 'Koramangala', imageUrl: 'https://picsum.photos/seed/bengaluru1/300/200', propertyCount: 550, propertyCounts: { pg: 300, oneBhk: 150, twoBhk: 100 } },
      { name: 'Indiranagar', imageUrl: 'https://picsum.photos/seed/bengaluru2/300/200', propertyCount: 480, propertyCounts: { pg: 250, oneBhk: 130, twoBhk: 100 } },
      { name: 'HSR Layout', imageUrl: 'https://picsum.photos/seed/bengaluru3/300/200', propertyCount: 650, propertyCounts: { pg: 400, oneBhk: 150, twoBhk: 100 } },
      { name: 'Whitefield', imageUrl: 'https://picsum.photos/seed/bengaluru4/300/200', propertyCount: 900, propertyCounts: { pg: 500, oneBhk: 250, twoBhk: 150 } },
      { name: 'Jayanagar', imageUrl: 'https://picsum.photos/seed/bengaluru5/300/200', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 120, twoBhk: 80 } },
      { name: 'Marathahalli', imageUrl: 'https://picsum.photos/seed/bengaluru6/300/200', propertyCount: 800, propertyCounts: { pg: 450, oneBhk: 250, twoBhk: 100 } },
      { name: 'Electronic City', imageUrl: 'https://picsum.photos/seed/bengaluru7/300/200', propertyCount: 1200, propertyCounts: { pg: 700, oneBhk: 300, twoBhk: 200 } },
      { name: 'JP Nagar', imageUrl: 'https://picsum.photos/seed/bengaluru8/300/200', propertyCount: 520, propertyCounts: { pg: 280, oneBhk: 150, twoBhk: 90 } },
      { name: 'Bellandur', imageUrl: 'https://picsum.photos/seed/bengaluru9/300/200', propertyCount: 750, propertyCounts: { pg: 400, oneBhk: 200, twoBhk: 150 } },
      { name: 'Malleshwaram', imageUrl: 'https://picsum.photos/seed/bengaluru10/300/200', propertyCount: 300, propertyCounts: { pg: 150, oneBhk: 100, twoBhk: 50 } },
    ],
  },
  {
    name: 'Kolkata',
    places: [
      { name: 'Park Street', imageUrl: 'https://picsum.photos/seed/kolkata1/300/200', propertyCount: 150, propertyCounts: { pg: 70, oneBhk: 50, twoBhk: 30 } },
      { name: 'Salt Lake', imageUrl: 'https://picsum.photos/seed/kolkata2/300/200', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 120, twoBhk: 80 } },
      { name: 'New Town', imageUrl: 'https://picsum.photos/seed/kolkata3/300/200', propertyCount: 500, propertyCounts: { pg: 250, oneBhk: 150, twoBhk: 100 } },
      { name: 'Ballygunge', imageUrl: 'https://picsum.photos/seed/kolkata4/300/200', propertyCount: 250, propertyCounts: { pg: 100, oneBhk: 90, twoBhk: 60 } },
      { name: 'Howrah', imageUrl: 'https://picsum.photos/seed/kolkata5/300/200', propertyCount: 300, propertyCounts: { pg: 150, oneBhk: 100, twoBhk: 50 } },
      { name: 'Dum Dum', imageUrl: 'https://picsum.photos/seed/kolkata6/300/200', propertyCount: 280, propertyCounts: { pg: 140, oneBhk: 90, twoBhk: 50 } },
      { name: 'Alipore', imageUrl: 'https://picsum.photos/seed/kolkata7/300/200', propertyCount: 200, propertyCounts: { pg: 80, oneBhk: 70, twoBhk: 50 } },
      { name: 'Garia', imageUrl: 'https://picsum.photos/seed/kolkata8/300/200', propertyCount: 350, propertyCounts: { pg: 180, oneBhk: 110, twoBhk: 60 } },
      { name: 'Rajarhat', imageUrl: 'https://picsum.photos/seed/kolkata9/300/200', propertyCount: 450, propertyCounts: { pg: 220, oneBhk: 150, twoBhk: 80 } },
      { name: 'Tollygunge', imageUrl: 'https://picsum.photos/seed/kolkata10/300/200', propertyCount: 220, propertyCounts: { pg: 110, oneBhk: 70, twoBhk: 40 } },
    ],
  },
  {
    name: 'Chennai',
    places: [
      { name: 'T. Nagar', imageUrl: 'https://picsum.photos/seed/chennai1/300/200', propertyCount: 300, propertyCounts: { pg: 150, oneBhk: 100, twoBhk: 50 } },
      { name: 'Adyar', imageUrl: 'https://picsum.photos/seed/chennai2/300/200', propertyCount: 250, propertyCounts: { pg: 120, oneBhk: 80, twoBhk: 50 } },
      { name: 'Velachery', imageUrl: 'https://picsum.photos/seed/chennai3/300/200', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 130, twoBhk: 70 } },
      { name: 'Anna Nagar', imageUrl: 'https://picsum.photos/seed/chennai4/300/200', propertyCount: 350, propertyCounts: { pg: 170, oneBhk: 110, twoBhk: 70 } },
      { name: 'OMR', imageUrl: 'https://picsum.photos/seed/chennai5/300/200', propertyCount: 600, propertyCounts: { pg: 300, oneBhk: 200, twoBhk: 100 } },
      { name: 'Nungambakkam', imageUrl: 'https://picsum.photos/seed/chennai6/300/200', propertyCount: 200, propertyCounts: { pg: 90, oneBhk: 70, twoBhk: 40 } },
      { name: 'Mylapore', imageUrl: 'https://picsum.photos/seed/chennai7/300/200', propertyCount: 180, propertyCounts: { pg: 80, oneBhk: 60, twoBhk: 40 } },
      { name: 'Guindy', imageUrl: 'https://picsum.photos/seed/chennai8/300/200', propertyCount: 220, propertyCounts: { pg: 110, oneBhk: 70, twoBhk: 40 } },
      { name: 'Porur', imageUrl: 'https://picsum.photos/seed/chennai9/300/200', propertyCount: 380, propertyCounts: { pg: 190, oneBhk: 120, twoBhk: 70 } },
      { name: 'Tambaram', imageUrl: 'https://picsum.photos/seed/chennai10/300/200', propertyCount: 450, propertyCounts: { pg: 220, oneBhk: 150, twoBhk: 80 } },
    ],
  },
  {
    name: 'Hyderabad',
    places: [
      { name: 'Banjara Hills', imageUrl: 'https://picsum.photos/seed/hyderabad1/300/200', propertyCount: 300, propertyCounts: { pg: 120, oneBhk: 100, twoBhk: 80 } },
      { name: 'Jubilee Hills', imageUrl: 'https://picsum.photos/seed/hyderabad2/300/200', propertyCount: 350, propertyCounts: { pg: 150, oneBhk: 120, twoBhk: 80 } },
      { name: 'Gachibowli', imageUrl: 'https://picsum.photos/seed/hyderabad3/300/200', propertyCount: 700, propertyCounts: { pg: 350, oneBhk: 250, twoBhk: 100 } },
      { name: 'HITECH City', imageUrl: 'https://picsum.photos/seed/hyderabad4/300/200', propertyCount: 800, propertyCounts: { pg: 400, oneBhk: 250, twoBhk: 150 } },
      { name: 'Kondapur', imageUrl: 'https://picsum.photos/seed/hyderabad5/300/200', propertyCount: 650, propertyCounts: { pg: 320, oneBhk: 200, twoBhk: 130 } },
      { name: 'Secunderabad', imageUrl: 'https://picsum.photos/seed/hyderabad6/300/200', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 130, twoBhk: 70 } },
      { name: 'Kukatpally', imageUrl: 'https://picsum.photos/seed/hyderabad7/300/200', propertyCount: 550, propertyCounts: { pg: 280, oneBhk: 170, twoBhk: 100 } },
      { name: 'Miyapur', imageUrl: 'https://picsum.photos/seed/hyderabad8/300/200', propertyCount: 500, propertyCounts: { pg: 250, oneBhk: 150, twoBhk: 100 } },
      { name: 'Begumpet', imageUrl: 'https://picsum.photos/seed/hyderabad9/300/200', propertyCount: 250, propertyCounts: { pg: 120, oneBhk: 80, twoBhk: 50 } },
      { name: 'Madhapur', imageUrl: 'https://picsum.photos/seed/hyderabad10/300/200', propertyCount: 750, propertyCounts: { pg: 370, oneBhk: 250, twoBhk: 130 } },
    ],
  },
  {
    name: 'Ahmedabad',
    places: [
      { name: 'Satellite', imageUrl: 'https://picsum.photos/seed/ahmedabad1/300/200', propertyCount: 350, propertyCounts: { pg: 170, oneBhk: 110, twoBhk: 70 } },
      { name: 'Bodakdev', imageUrl: 'https://picsum.photos/seed/ahmedabad2/300/200', propertyCount: 300, propertyCounts: { pg: 140, oneBhk: 100, twoBhk: 60 } },
      { name: 'Prahlad Nagar', imageUrl: 'https://picsum.photos/seed/ahmedabad3/300/200', propertyCount: 250, propertyCounts: { pg: 120, oneBhk: 80, twoBhk: 50 } },
      { name: 'Thaltej', imageUrl: 'https://picsum.photos/seed/ahmedabad4/300/200', propertyCount: 280, propertyCounts: { pg: 130, oneBhk: 90, twoBhk: 60 } },
      { name: 'C.G. Road', imageUrl: 'https://picsum.photos/seed/ahmedabad5/300/200', propertyCount: 150, propertyCounts: { pg: 70, oneBhk: 50, twoBhk: 30 } },
      { name: 'Maninagar', imageUrl: 'https://picsum.photos/seed/ahmedabad6/300/200', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 130, twoBhk: 70 } },
      { name: 'Gota', imageUrl: 'https://picsum.photos/seed/ahmedabad7/300/200', propertyCount: 450, propertyCounts: { pg: 220, oneBhk: 150, twoBhk: 80 } },
      { name: 'Vastrapur', imageUrl: 'https://picsum.photos/seed/ahmedabad8/300/200', propertyCount: 200, propertyCounts: { pg: 100, oneBhk: 60, twoBhk: 40 } },
      { name: 'Navrangpura', imageUrl: 'https://picsum.photos/seed/ahmedabad9/300/200', propertyCount: 220, propertyCounts: { pg: 110, oneBhk: 70, twoBhk: 40 } },
      { name: 'Chandkheda', imageUrl: 'https://picsum.photos/seed/ahmedabad10/300/200', propertyCount: 380, propertyCounts: { pg: 190, oneBhk: 120, twoBhk: 70 } },
    ],
  },
];
