import { Property } from './types';

export const AGENT_PROFILE = {
  name: "Angelique Edwards",
  title: "Real Estate Leader",
  brokerage: "Five Star Real Estate Leaders",
  phone: "(616) 555-0123", // Placeholder
  email: "angelique@authorgroup.com",
  image: "https://picsum.photos/id/64/200/200" // Placeholder for agent
};

export const LISTING_AMBERLY: Property = {
  id: "1563-amberly-se",
  address: "1563 Amberly SE",
  city: "Grand Rapids",
    neighborhood: "Easttown",
  state: "MI",
  zip: "49508",
  price: 319900,
  originalPrice: 354900,
  bedrooms: 4,
  bathrooms: 2,
  sqft: 1850,
    propertyType: 'Single Family',
  garage: 2,
  status: 'Active',
  description: "Experience the best value in SE Grand Rapids! This stunning 4-bedroom, 2-bathroom bi-level home offers 1,850 sq ft of move-in ready living space. Featuring a finished basement perfect for a family room or home office, a spacious 2-car garage, and a location that can't be beat near top-rated Forest Hills & Kentwood schools. Recently improved price makes this the deal of the season.",
  features: [
    "Move-in Ready",
    "Finished Basement",
    "2-Car Garage",
    "Near Top Schools",
    "Updated Kitchen",
    "Large Backyard",
    "Quiet Neighborhood",
    "Recent Mechanical Updates"
  ],
  openHouse: [
    { date: "Saturday", time: "1:00 PM - 3:00 PM" },
    { date: "Sunday", time: "12:00 PM - 2:00 PM" }
  ],
  images: [
    "https://picsum.photos/id/15/800/600", // Hero exterior
    "https://picsum.photos/id/16/800/600", // Living room
    "https://picsum.photos/id/18/800/600", // Kitchen
    "https://picsum.photos/id/20/800/600", // Bedroom
    "https://picsum.photos/id/24/800/600", // Backyard
    "https://picsum.photos/id/28/800/600", // Basement
  ],
  agent: AGENT_PROFILE
};


export const LISTING_HERITAGE: Property = {
  id: "heritage-hill-victorian",
  address: "456 College Ave SE",
  city: "Grand Rapids",
  neighborhood: "Heritage Hill",
  state: "MI",
  zip: "49503",
  price: 425000,
  originalPrice: 449000,
  bedrooms: 3,
  bathrooms: 2,
  sqft: 2200,
  propertyType: 'Single Family',
  garage: 1,
  status: 'Active',
  description: 'Beautiful Victorian home in historic Heritage Hill neighborhood. Original hardwood floors, high ceilings, and modern updates throughout.',
  features: [
    "Historic Architecture",
    "Original Hardwood",
    "Updated Kitchen",
    "Walk to Downtown",
    "Covered Porch"
  ],
  openHouse: [
    { date: "Saturday", time: "10:00 AM - 12:00 PM" }
  ],
  images: [
    "https://picsum.photos/id/1018/800/600",
    "https://picsum.photos/id/1019/800/600",
    "https://picsum.photos/id/1020/800/600"
  ],
  agent: AGENT_PROFILE
};

export const LISTING_EASTHILLS: Property = {
  id: "easthills-condo",
  address: "789 Wealthy Street SE",
  city: "Grand Rapids",
  neighborhood: "East Hills",
  state: "MI",
  zip: "49506",
  price: 240000,
  originalPrice: 240000,
  bedrooms: 2,
  bathrooms: 2,
  sqft: 1100,
  propertyType: 'Condo',
  garage: 1,
  status: 'Active',
  description: 'Modern condo in vibrant East Hills. Walk to restaurants, shops, and entertainment. Low maintenance living with all the amenities.',
  features: [
    "Modern Design",
    "Open Floor Plan",
    "In-Unit Laundry",
    "Fitness Center",
    "Rooftop Deck"
  ],
  openHouse: [],
  images: [
    "https://picsum.photos/id/1021/800/600",
    "https://picsum.photos/id/1022/800/600"
  ],
  agent: AGENT_PROFILE
};

export const LISTING_CASCADE: Property = {
  id: "cascade-luxury",
  address: "2100 Cascade Road SE",
  city: "Grand Rapids",
  neighborhood: "Cascade",
  state: "MI",
  zip: "49546",
  price: 625000,
  originalPrice: 650000,
  bedrooms: 4,
  bathrooms: 3,
  sqft: 3200,
  propertyType: 'Single Family',
  garage: 3,
  status: 'Active',
  description: 'Stunning luxury home in prestigious Cascade. Premium finishes, gourmet kitchen, finished walkout basement with theater room.',
  features: [
    "Gourmet Kitchen",
    "Master Suite",
    "Home Theater",
    "3-Car Garage",
    "Premium Lot"
  ],
  openHouse: [
    { date: "Sunday", time: "1:00 PM - 3:00 PM" }
  ],
  images: [
    "https://picsum.photos/id/1023/800/600",
    "https://picsum.photos/id/1024/800/600",
    "https://picsum.photos/id/1025/800/600"
  ],
  agent: AGENT_PROFILE
};
// Array of all property listings
export const ALL_LISTINGS: Property[] = [
  LISTING_AMBERLY,
    LISTING_HERITAGE,
  LISTING_EASTHILLS,
  LISTING_CASCADE,
];
