
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
      { name: 'Connaught Place', imageUrl: '/images/delhi-connaught-place.jpg', propertyCount: 120, propertyCounts: { pg: 50, oneBhk: 40, twoBhk: 30 } },
      { name: 'Khan Market', imageUrl: '/images/delhi-khan-market.jpg', propertyCount: 85, propertyCounts: { pg: 20, oneBhk: 35, twoBhk: 30 } },
      { name: 'Hauz Khas', imageUrl: '/images/delhi-hauz-khas.jpg', propertyCount: 250, propertyCounts: { pg: 120, oneBhk: 80, twoBhk: 50 } },
      { name: 'Greater Kailash', imageUrl: '/images/delhi-greater-kailash.jpg', propertyCount: 300, propertyCounts: { pg: 100, oneBhk: 100, twoBhk: 100 } },
      { name: 'Saket', imageUrl: '/images/delhi-saket.jpg', propertyCount: 180, propertyCounts: { pg: 70, oneBhk: 60, twoBhk: 50 } },
      { name: 'Karol Bagh', imageUrl: '/images/delhi-karol-bagh.jpg', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 120, twoBhk: 80 } },
      { name: 'Vasant Kunj', imageUrl: '/images/delhi-vasant-kunj.jpg', propertyCount: 220, propertyCounts: { pg: 80, oneBhk: 90, twoBhk: 50 } },
      { name: 'Dwarka', imageUrl: '/images/delhi-dwarka.jpg', propertyCount: 500, propertyCounts: { pg: 250, oneBhk: 150, twoBhk: 100 } },
      { name: 'Nehru Place', imageUrl: '/images/delhi-nehru-place.jpg', propertyCount: 95, propertyCounts: { pg: 45, oneBhk: 30, twoBhk: 20 } },
      { name: 'Lajpat Nagar', imageUrl: '/images/delhi-lajpat-nagar.jpg', propertyCount: 350, propertyCounts: { pg: 150, oneBhk: 120, twoBhk: 80 } },
    ],
  },
  {
    name: 'Mumbai',
    places: [
      { name: 'Bandra', imageUrl: '/images/mumbai-bandra.jpg', propertyCount: 450, propertyCounts: { pg: 200, oneBhk: 150, twoBhk: 100 } },
      { name: 'Andheri', imageUrl: '/images/mumbai-andheri.jpg', propertyCount: 600, propertyCounts: { pg: 300, oneBhk: 200, twoBhk: 100 } },
      { name: 'Juhu', imageUrl: '/images/mumbai-juhu.jpg', propertyCount: 320, propertyCounts: { pg: 150, oneBhk: 100, twoBhk: 70 } },
      { name: 'Powai', imageUrl: '/images/mumbai-powai.jpg', propertyCount: 280, propertyCounts: { pg: 120, oneBhk: 100, twoBhk: 60 } },
      { name: 'South Mumbai', imageUrl: '/images/mumbai-south-mumbai.jpg', propertyCount: 400, propertyCounts: { pg: 100, oneBhk: 150, twoBhk: 150 } },
      { name: 'Thane', imageUrl: '/images/mumbai-thane.jpg', propertyCount: 700, propertyCounts: { pg: 300, oneBhk: 250, twoBhk: 150 } },
      { name: 'Navi Mumbai', imageUrl: '/images/mumbai-navi-mumbai.jpg', propertyCount: 800, propertyCounts: { pg: 350, oneBhk: 250, twoBhk: 200 } },
      { name: 'Dadar', imageUrl: '/images/mumbai-dadar.jpg', propertyCount: 250, propertyCounts: { pg: 130, oneBhk: 80, twoBhk: 40 } },
      { name: 'Chembur', imageUrl: '/images/mumbai-chembur.jpg', propertyCount: 300, propertyCounts: { pg: 140, oneBhk: 100, twoBhk: 60 } },
      { name: 'Goregaon', imageUrl: '/images/mumbai-goregaon.jpg', propertyCount: 420, propertyCounts: { pg: 200, oneBhk: 150, twoBhk: 70 } },
    ],
  },
  {
    name: 'Bengaluru',
    places: [
      { name: 'Koramangala', imageUrl: '/images/bengaluru-koramangala.jpg', propertyCount: 550, propertyCounts: { pg: 300, oneBhk: 150, twoBhk: 100 } },
      { name: 'Indiranagar', imageUrl: '/images/bengaluru-indiranagar.jpg', propertyCount: 480, propertyCounts: { pg: 250, oneBhk: 130, twoBhk: 100 } },
      { name: 'HSR Layout', imageUrl: '/images/bengaluru-hsr-layout.jpg', propertyCount: 650, propertyCounts: { pg: 400, oneBhk: 150, twoBhk: 100 } },
      { name: 'Whitefield', imageUrl: '/images/bengaluru-whitefield.jpg', propertyCount: 900, propertyCounts: { pg: 500, oneBhk: 250, twoBhk: 150 } },
      { name: 'Jayanagar', imageUrl: '/images/bengaluru-jayanagar.jpg', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 120, twoBhk: 80 } },
      { name: 'Marathahalli', imageUrl: '/images/bengaluru-marathahalli.jpg', propertyCount: 800, propertyCounts: { pg: 450, oneBhk: 250, twoBhk: 100 } },
      { name: 'Electronic City', imageUrl: '/images/bengaluru-electronic-city.jpg', propertyCount: 1200, propertyCounts: { pg: 700, oneBhk: 300, twoBhk: 200 } },
      { name: 'JP Nagar', imageUrl: '/images/bengaluru-jp-nagar.jpg', propertyCount: 520, propertyCounts: { pg: 280, oneBhk: 150, twoBhk: 90 } },
      { name: 'Bellandur', imageUrl: '/images/bengaluru-bellandur.jpg', propertyCount: 750, propertyCounts: { pg: 400, oneBhk: 200, twoBhk: 150 } },
      { name: 'Malleshwaram', imageUrl: '/images/bengaluru-malleshwaram.jpg', propertyCount: 300, propertyCounts: { pg: 150, oneBhk: 100, twoBhk: 50 } },
    ],
  },
  {
    name: 'Kolkata',
    places: [
      { name: 'Park Street', imageUrl: '/images/kolkata-park-street.jpg', propertyCount: 150, propertyCounts: { pg: 70, oneBhk: 50, twoBhk: 30 } },
      { name: 'Salt Lake', imageUrl: '/images/kolkata-salt-lake.jpg', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 120, twoBhk: 80 } },
      { name: 'New Town', imageUrl: '/images/kolkata-new-town.jpg', propertyCount: 500, propertyCounts: { pg: 250, oneBhk: 150, twoBhk: 100 } },
      { name: 'Ballygunge', imageUrl: '/images/kolkata-ballygunge.jpg', propertyCount: 250, propertyCounts: { pg: 100, oneBhk: 90, twoBhk: 60 } },
      { name: 'Howrah', imageUrl: '/images/kolkata-howrah.jpg', propertyCount: 300, propertyCounts: { pg: 150, oneBhk: 100, twoBhk: 50 } },
      { name: 'Dum Dum', imageUrl: '/images/kolkata-dum-dum.jpg', propertyCount: 280, propertyCounts: { pg: 140, oneBhk: 90, twoBhk: 50 } },
      { name: 'Alipore', imageUrl: '/images/kolkata-alipore.jpg', propertyCount: 200, propertyCounts: { pg: 80, oneBhk: 70, twoBhk: 50 } },
      { name: 'Garia', imageUrl: '/images/kolkata-garia.jpg', propertyCount: 350, propertyCounts: { pg: 180, oneBhk: 110, twoBhk: 60 } },
      { name: 'Rajarhat', imageUrl: '/images/kolkata-rajarhat.jpg', propertyCount: 450, propertyCounts: { pg: 220, oneBhk: 150, twoBhk: 80 } },
      { name: 'Tollygunge', imageUrl: '/images/kolkata-tollygunge.jpg', propertyCount: 220, propertyCounts: { pg: 110, oneBhk: 70, twoBhk: 40 } },
    ],
  },
  {
    name: 'Chennai',
    places: [
      { name: 'T. Nagar', imageUrl: '/images/chennai-t-nagar.jpg', propertyCount: 300, propertyCounts: { pg: 150, oneBhk: 100, twoBhk: 50 } },
      { name: 'Adyar', imageUrl: '/images/chennai-adyar.jpg', propertyCount: 250, propertyCounts: { pg: 120, oneBhk: 80, twoBhk: 50 } },
      { name: 'Velachery', imageUrl: '/images/chennai-velachery.jpg', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 130, twoBhk: 70 } },
      { name: 'Anna Nagar', imageUrl: '/images/chennai-anna-nagar.jpg', propertyCount: 350, propertyCounts: { pg: 170, oneBhk: 110, twoBhk: 70 } },
      { name: 'OMR', imageUrl: '/images/chennai-omr.jpg', propertyCount: 600, propertyCounts: { pg: 300, oneBhk: 200, twoBhk: 100 } },
      { name: 'Nungambakkam', imageUrl: '/images/chennai-nungambakkam.jpg', propertyCount: 200, propertyCounts: { pg: 90, oneBhk: 70, twoBhk: 40 } },
      { name: 'Mylapore', imageUrl: '/images/chennai-mylapore.jpg', propertyCount: 180, propertyCounts: { pg: 80, oneBhk: 60, twoBhk: 40 } },
      { name: 'Guindy', imageUrl: '/images/chennai-guindy.jpg', propertyCount: 220, propertyCounts: { pg: 110, oneBhk: 70, twoBhk: 40 } },
      { name: 'Porur', imageUrl: '/images/chennai-porur.jpg', propertyCount: 380, propertyCounts: { pg: 190, oneBhk: 120, twoBhk: 70 } },
      { name: 'Tambaram', imageUrl: '/images/chennai-tambaram.jpg', propertyCount: 450, propertyCounts: { pg: 220, oneBhk: 150, twoBhk: 80 } },
    ],
  },
  {
    name: 'Hyderabad',
    places: [
      { name: 'Banjara Hills', imageUrl: '/images/hyderabad-banjara-hills.jpg', propertyCount: 300, propertyCounts: { pg: 120, oneBhk: 100, twoBhk: 80 } },
      { name: 'Jubilee Hills', imageUrl: '/images/hyderabad-jubilee-hills.jpg', propertyCount: 350, propertyCounts: { pg: 150, oneBhk: 120, twoBhk: 80 } },
      { name: 'Gachibowli', imageUrl: '/images/hyderabad-gachibowli.jpg', propertyCount: 700, propertyCounts: { pg: 350, oneBhk: 250, twoBhk: 100 } },
      { name: 'HITECH City', imageUrl: '/images/hyderabad-hitech-city.jpg', propertyCount: 800, propertyCounts: { pg: 400, oneBhk: 250, twoBhk: 150 } },
      { name: 'Kondapur', imageUrl: '/images/hyderabad-kondapur.jpg', propertyCount: 650, propertyCounts: { pg: 320, oneBhk: 200, twoBhk: 130 } },
      { name: 'Secunderabad', imageUrl: '/images/hyderabad-secunderabad.jpg', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 130, twoBhk: 70 } },
      { name: 'Kukatpally', imageUrl: '/images/hyderabad-kukatpally.jpg', propertyCount: 550, propertyCounts: { pg: 280, oneBhk: 170, twoBhk: 100 } },
      { name: 'Miyapur', imageUrl: '/images/hyderabad-miyapur.jpg', propertyCount: 500, propertyCounts: { pg: 250, oneBhk: 150, twoBhk: 100 } },
      { name: 'Begumpet', imageUrl: '/images/hyderabad-begumpet.jpg', propertyCount: 250, propertyCounts: { pg: 120, oneBhk: 80, twoBhk: 50 } },
      { name: 'Madhapur', imageUrl: '/images/hyderabad-madhapur.jpg', propertyCount: 750, propertyCounts: { pg: 370, oneBhk: 250, twoBhk: 130 } },
    ],
  },
  {
    name: 'Ahmedabad',
    places: [
      { name: 'Satellite', imageUrl: '/images/ahmedabad-satellite.jpg', propertyCount: 350, propertyCounts: { pg: 170, oneBhk: 110, twoBhk: 70 } },
      { name: 'Bodakdev', imageUrl: '/images/ahmedabad-bodakdev.jpg', propertyCount: 300, propertyCounts: { pg: 140, oneBhk: 100, twoBhk: 60 } },
      { name: 'Prahlad Nagar', imageUrl: '/images/ahmedabad-prahlad-nagar.jpg', propertyCount: 250, propertyCounts: { pg: 120, oneBhk: 80, twoBhk: 50 } },
      { name: 'Thaltej', imageUrl: '/images/ahmedabad-thaltej.jpg', propertyCount: 280, propertyCounts: { pg: 130, oneBhk: 90, twoBhk: 60 } },
      { name: 'C.G. Road', imageUrl: '/images/ahmedabad-cg-road.jpg', propertyCount: 150, propertyCounts: { pg: 70, oneBhk: 50, twoBhk: 30 } },
      { name: 'Maninagar', imageUrl: '/images/ahmedabad-maninagar.jpg', propertyCount: 400, propertyCounts: { pg: 200, oneBhk: 130, twoBhk: 70 } },
      { name: 'Gota', imageUrl: '/images/ahmedabad-gota.jpg', propertyCount: 450, propertyCounts: { pg: 220, oneBhk: 150, twoBhk: 80 } },
      { name: 'Vastrapur', imageUrl: '/images/ahmedabad-vastrapur.jpg', propertyCount: 200, propertyCounts: { pg: 100, oneBhk: 60, twoBhk: 40 } },
      { name: 'Navrangpura', imageUrl: '/images/ahmedabad-navrangpura.jpg', propertyCount: 220, propertyCounts: { pg: 110, oneBhk: 70, twoBhk: 40 } },
      { name: 'Chandkheda', imageUrl: '/images/ahmedabad-chandkheda.jpg', propertyCount: 380, propertyCounts: { pg: 190, oneBhk: 120, twoBhk: 70 } },
    ],
  },
];
