
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
      { name: 'Connaught Place', imageUrl: '/images/delhi-connaught-place.jpg', propertyCount: 120 },
      { name: 'Khan Market', imageUrl: '/images/delhi-khan-market.jpg', propertyCount: 85 },
      { name: 'Hauz Khas', imageUrl: '/images/delhi-hauz-khas.jpg', propertyCount: 250 },
      { name: 'Greater Kailash', imageUrl: '/images/delhi-greater-kailash.jpg', propertyCount: 300 },
      { name: 'Saket', imageUrl: '/images/delhi-saket.jpg', propertyCount: 180 },
      { name: 'Karol Bagh', imageUrl: '/images/delhi-karol-bagh.jpg', propertyCount: 400 },
      { name: 'Vasant Kunj', imageUrl: '/images/delhi-vasant-kunj.jpg', propertyCount: 220 },
      { name: 'Dwarka', imageUrl: '/images/delhi-dwarka.jpg', propertyCount: 500 },
      { name: 'Nehru Place', imageUrl: '/images/delhi-nehru-place.jpg', propertyCount: 95 },
      { name: 'Lajpat Nagar', imageUrl: '/images/delhi-lajpat-nagar.jpg', propertyCount: 350 },
    ],
  },
  {
    name: 'Mumbai',
    places: [
      { name: 'Bandra', imageUrl: '/images/mumbai-bandra.jpg', propertyCount: 450 },
      { name: 'Andheri', imageUrl: '/images/mumbai-andheri.jpg', propertyCount: 600 },
      { name: 'Juhu', imageUrl: '/images/mumbai-juhu.jpg', propertyCount: 320 },
      { name: 'Powai', imageUrl: '/images/mumbai-powai.jpg', propertyCount: 280 },
      { name: 'South Mumbai', imageUrl: '/images/mumbai-south-mumbai.jpg', propertyCount: 400 },
      { name: 'Thane', imageUrl: '/images/mumbai-thane.jpg', propertyCount: 700 },
      { name: 'Navi Mumbai', imageUrl: '/images/mumbai-navi-mumbai.jpg', propertyCount: 800 },
      { name: 'Dadar', imageUrl: '/images/mumbai-dadar.jpg', propertyCount: 250 },
      { name: 'Chembur', imageUrl: '/images/mumbai-chembur.jpg', propertyCount: 300 },
      { name: 'Goregaon', imageUrl: '/images/mumbai-goregaon.jpg', propertyCount: 420 },
    ],
  },
  {
    name: 'Bengaluru',
    places: [
      { name: 'Koramangala', imageUrl: '/images/bengaluru-koramangala.jpg', propertyCount: 550 },
      { name: 'Indiranagar', imageUrl: '/images/bengaluru-indiranagar.jpg', propertyCount: 480 },
      { name: 'HSR Layout', imageUrl: '/images/bengaluru-hsr-layout.jpg', propertyCount: 650 },
      { name: 'Whitefield', imageUrl: '/images/bengaluru-whitefield.jpg', propertyCount: 900 },
      { name: 'Jayanagar', imageUrl: '/images/bengaluru-jayanagar.jpg', propertyCount: 400 },
      { name: 'Marathahalli', imageUrl: '/images/bengaluru-marathahalli.jpg', propertyCount: 800 },
      { name: 'Electronic City', imageUrl: '/images/bengaluru-electronic-city.jpg', propertyCount: 1200 },
      { name: 'JP Nagar', imageUrl: '/images/bengaluru-jp-nagar.jpg', propertyCount: 520 },
      { name: 'Bellandur', imageUrl: '/images/bengaluru-bellandur.jpg', propertyCount: 750 },
      { name: 'Malleshwaram', imageUrl: '/images/bengaluru-malleshwaram.jpg', propertyCount: 300 },
    ],
  },
  {
    name: 'Kolkata',
    places: [
      { name: 'Park Street', imageUrl: '/images/kolkata-park-street.jpg', propertyCount: 150 },
      { name: 'Salt Lake', imageUrl: '/images/kolkata-salt-lake.jpg', propertyCount: 400 },
      { name: 'New Town', imageUrl: '/images/kolkata-new-town.jpg', propertyCount: 500 },
      { name: 'Ballygunge', imageUrl: '/images/kolkata-ballygunge.jpg', propertyCount: 250 },
      { name: 'Howrah', imageUrl: '/images/kolkata-howrah.jpg', propertyCount: 300 },
      { name: 'Dum Dum', imageUrl: '/images/kolkata-dum-dum.jpg', propertyCount: 280 },
      { name: 'Alipore', imageUrl: '/images/kolkata-alipore.jpg', propertyCount: 200 },
      { name: 'Garia', imageUrl: '/images/kolkata-garia.jpg', propertyCount: 350 },
      { name: 'Rajarhat', imageUrl: '/images/kolkata-rajarhat.jpg', propertyCount: 450 },
      { name: 'Tollygunge', imageUrl: '/images/kolkata-tollygunge.jpg', propertyCount: 220 },
    ],
  },
  {
    name: 'Chennai',
    places: [
      { name: 'T. Nagar', imageUrl: '/images/chennai-t-nagar.jpg', propertyCount: 300 },
      { name: 'Adyar', imageUrl: '/images/chennai-adyar.jpg', propertyCount: 250 },
      { name: 'Velachery', imageUrl: '/images/chennai-velachery.jpg', propertyCount: 400 },
      { name: 'Anna Nagar', imageUrl: '/images/chennai-anna-nagar.jpg', propertyCount: 350 },
      { name: 'OMR', imageUrl: '/images/chennai-omr.jpg', propertyCount: 600 },
      { name: 'Nungambakkam', imageUrl: '/images/chennai-nungambakkam.jpg', propertyCount: 200 },
      { name: 'Mylapore', imageUrl: '/images/chennai-mylapore.jpg', propertyCount: 180 },
      { name: 'Guindy', imageUrl: '/images/chennai-guindy.jpg', propertyCount: 220 },
      { name: 'Porur', imageUrl: '/images/chennai-porur.jpg', propertyCount: 380 },
      { name: 'Tambaram', imageUrl: '/images/chennai-tambaram.jpg', propertyCount: 450 },
    ],
  },
  {
    name: 'Hyderabad',
    places: [
      { name: 'Banjara Hills', imageUrl: '/images/hyderabad-banjara-hills.jpg', propertyCount: 300 },
      { name: 'Jubilee Hills', imageUrl: '/images/hyderabad-jubilee-hills.jpg', propertyCount: 350 },
      { name: 'Gachibowli', imageUrl: '/images/hyderabad-gachibowli.jpg', propertyCount: 700 },
      { name: 'HITECH City', imageUrl: '/images/hyderabad-hitech-city.jpg', propertyCount: 800 },
      { name: 'Kondapur', imageUrl: '/images/hyderabad-kondapur.jpg', propertyCount: 650 },
      { name: 'Secunderabad', imageUrl: '/images/hyderabad-secunderabad.jpg', propertyCount: 400 },
      { name: 'Kukatpally', imageUrl: '/images/hyderabad-kukatpally.jpg', propertyCount: 550 },
      { name: 'Miyapur', imageUrl: '/images/hyderabad-miyapur.jpg', propertyCount: 500 },
      { name: 'Begumpet', imageUrl: '/images/hyderabad-begumpet.jpg', propertyCount: 250 },
      { name: 'Madhapur', imageUrl: '/images/hyderabad-madhapur.jpg', propertyCount: 750 },
    ],
  },
  {
    name: 'Ahmedabad',
    places: [
      { name: 'Satellite', imageUrl: '/images/ahmedabad-satellite.jpg', propertyCount: 350 },
      { name: 'Bodakdev', imageUrl: '/images/ahmedabad-bodakdev.jpg', propertyCount: 300 },
      { name: 'Prahlad Nagar', imageUrl: '/images/ahmedabad-prahlad-nagar.jpg', propertyCount: 250 },
      { name: 'Thaltej', imageUrl: '/images/ahmedabad-thaltej.jpg', propertyCount: 280 },
      { name: 'C.G. Road', imageUrl: '/images/ahmedabad-cg-road.jpg', propertyCount: 150 },
      { name: 'Maninagar', imageUrl: '/images/ahmedabad-maninagar.jpg', propertyCount: 400 },
      { name: 'Gota', imageUrl: '/images/ahmedabad-gota.jpg', propertyCount: 450 },
      { name: 'Vastrapur', imageUrl: '/images/ahmedabad-vastrapur.jpg', propertyCount: 200 },
      { name: 'Navrangpura', imageUrl: '/images/ahmedabad-navrangpura.jpg', propertyCount: 220 },
      { name: 'Chandkheda', imageUrl: '/images/ahmedabad-chandkheda.jpg', propertyCount: 380 },
    ],
  },
];
