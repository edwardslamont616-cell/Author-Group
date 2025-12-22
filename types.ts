export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  originalPrice?: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  garage: number;
  description: string;
  features: string[];
  images: string[];
  status: 'Active' | 'Pending' | 'Sold' | 'Coming Soon';
  openHouse?: {
    date: string;
    time: string;
  }[];
  agent: Agent;
}

export interface Agent {
  name: string;
  title: string;
  brokerage: string;
  phone: string;
  email: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}