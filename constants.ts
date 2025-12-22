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
  state: "MI",
  zip: "49508",
  price: 319900,
  originalPrice: 354900,
  bedrooms: 4,
  bathrooms: 2,
  sqft: 1850,
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