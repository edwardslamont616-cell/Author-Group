import React, { useState } from 'react';
import { LISTING_AMBERLY } from '../constants';
import { BedIcon, BathIcon, SquareIcon, CarIcon, MapPinIcon, CheckCircleIcon } from '../components/Icons';

const ListingDetail: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const property = LISTING_AMBERLY;

  // Calculate savings
  const savings = property.originalPrice ? property.originalPrice - property.price : 0;

  return (
    <div className="bg-brand-bg min-h-screen pb-20">
      {/* Listing Header */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-brand-accent text-brand-bg text-xs font-bold rounded-full uppercase tracking-wide">
                Price Improved
              </span>
              <span className="px-3 py-1 bg-[#333] text-white text-xs font-medium rounded-full uppercase tracking-wide flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Active
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{property.address}</h1>
            <div className="flex items-center text-gray-400 gap-2">
              <MapPinIcon />
              <span>{property.city}, {property.state} {property.zip}</span>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-gray-400 text-sm line-through decoration-red-500 decoration-2">
              ${property.originalPrice?.toLocaleString()}
            </p>
            <p className="text-4xl font-bold text-brand-accent">${property.price.toLocaleString()}</p>
            <p className="text-sm text-green-400 mt-1 font-medium">Save ${savings.toLocaleString()} today</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px] mb-12">
          {/* Main Hero Image */}
          <div className="md:col-span-3 h-full relative group">
            <img 
              src={property.images[activeImage]} 
              alt="Property Hero" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">View Full Gallery</p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-4 h-full overflow-y-auto pr-2 custom-scrollbar">
            {property.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative h-28 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-brand-accent opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-brand-card p-6 rounded-2xl border border-brand-border">
              <div className="flex flex-col items-center justify-center p-2 border-r border-brand-border last:border-0">
                <BedIcon />
                <span className="text-2xl font-bold mt-2">{property.bedrooms}</span>
                <span className="text-xs text-gray-400 uppercase">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-r border-brand-border last:border-0">
                <BathIcon />
                <span className="text-2xl font-bold mt-2">{property.bathrooms}</span>
                <span className="text-xs text-gray-400 uppercase">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-r border-brand-border last:border-0">
                <SquareIcon />
                <span className="text-2xl font-bold mt-2">{property.sqft.toLocaleString()}</span>
                <span className="text-xs text-gray-400 uppercase">Sq Ft</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <CarIcon />
                <span className="text-2xl font-bold mt-2">{property.garage}</span>
                <span className="text-xs text-gray-400 uppercase">Car Garage</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Property Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300 bg-[#1a1a1a] p-3 rounded-lg">
                    <div className="text-brand-accent"><CheckCircleIcon /></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Open House */}
            {property.openHouse && (
               <div className="bg-gradient-to-r from-brand-accent/10 to-transparent border border-brand-accent/20 p-6 rounded-2xl">
                 <h3 className="text-xl font-bold text-brand-accent mb-4 flex items-center gap-2">
                   <span className="material-icons-outlined">event</span> Open House
                 </h3>
                 <div className="space-y-2">
                   {property.openHouse.map((oh, idx) => (
                     <div key={idx} className="flex justify-between items-center text-gray-200 border-b border-white/10 pb-2 last:border-0 last:pb-0">
                       <span className="font-semibold">{oh.date}</span>
                       <span>{oh.time}</span>
                     </div>
                   ))}
                 </div>
               </div>
            )}
          </div>

          {/* Sidebar / Sticky Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-brand-card p-6 rounded-2xl border border-brand-border shadow-xl">
              <div className="text-center mb-6">
                <img 
                  src={property.agent.image} 
                  alt={property.agent.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-accent object-cover"
                />
                <h3 className="text-xl font-bold text-white">{property.agent.name}</h3>
                <p className="text-sm text-brand-accent">{property.agent.title}</p>
                <p className="text-xs text-gray-500 mt-1">{property.agent.brokerage}</p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-brand-accent text-brand-bg font-bold py-4 rounded-xl hover:bg-brand-accentHover transition-colors flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(67,255,168,0.2)]">
                  Schedule a Tour
                </button>
                <button className="w-full bg-[#333] text-white font-bold py-4 rounded-xl hover:bg-[#444] transition-colors border border-gray-600">
                  Make an Offer
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-brand-border text-center">
                <p className="text-gray-400 text-sm mb-2">Have questions?</p>
                <a href={`tel:${property.agent.phone}`} className="text-white font-semibold text-lg hover:text-brand-accent transition-colors block">
                  {property.agent.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListingDetail;