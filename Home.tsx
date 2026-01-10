import React from 'react';
import { Link } from 'react-router-dom';
import { LISTING_AMBERLY } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

            {/* Title Page Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-bg via-black/95 to-brand-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            Author Group
          </h1>
          <p className="text-2xl md:text-3xl text-brand-accent mb-8 font-light">
            POWERED BY FIVE STAR
          </p>
          <div className="h-px w-32 bg-brand-accent mx-auto mb-12"></div>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed">
            Transforming Real Estate Through Data-Driven Strategy<br/>
            and Community-Focused Innovation
          </p>
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent border-2 border-brand-accent rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            Enter Platform
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/15/1920/1080" 
            alt="Modern Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-bg"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/50 text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Real Estate Reimagined
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Strategy Driven.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">
              Results Oriented.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            We combine data-driven personas, advanced scenario planning, and community advocacy to sell homes faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
             <Link 
               to={`/listings/${LISTING_AMBERLY.id}`}
               className="px-8 py-4 bg-brand-accent text-brand-bg font-bold rounded-full hover:bg-brand-accentHover transition-all shadow-[0_0_30px_rgba(67,255,168,0.3)] hover:scale-105"
             >
               View Featured Listing
             </Link>
             <button className="px-8 py-4 bg-white/10 text-white backdrop-blur-sm border border-white/20 font-bold rounded-full hover:bg-white/20 transition-all">
               Our Strategy
             </button>
          </div>
        </div>
      </section>

      {/* Featured Listing Teaser */}
      <section className="py-20 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Property</h2>
              <p className="text-gray-400">Hand-picked value in Grand Rapids</p>
            </div>
            <Link to="/listings" className="hidden md:block text-brand-accent hover:text-white transition-colors font-medium">
              View All Listings &rarr;
            </Link>
          </div>

          <div className="bg-brand-card rounded-3xl overflow-hidden border border-brand-border shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={LISTING_AMBERLY.images[0]} 
                  alt={LISTING_AMBERLY.address}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-accent text-brand-bg font-bold px-3 py-1 rounded-full text-sm">
                  Price Drop
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{LISTING_AMBERLY.address}</h3>
                <p className="text-brand-accent text-3xl font-bold mb-6">${LISTING_AMBERLY.price.toLocaleString()}</p>
                
                <div className="flex gap-6 mb-8 text-gray-400">
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-lg">{LISTING_AMBERLY.bedrooms}</span>
                    <span className="text-xs uppercase">Beds</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-lg">{LISTING_AMBERLY.bathrooms}</span>
                    <span className="text-xs uppercase">Baths</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-lg">{LISTING_AMBERLY.sqft.toLocaleString()}</span>
                    <span className="text-xs uppercase">Sq Ft</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-8 line-clamp-3">
                  {LISTING_AMBERLY.description}
                </p>

                <Link 
                  to={`/listings/${LISTING_AMBERLY.id}`}
                  className="inline-block text-center w-full bg-brand-bg text-white border border-brand-border py-4 rounded-xl hover:border-brand-accent hover:text-brand-accent transition-all font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-5xl font-bold text-brand-accent mb-2">7 Days</h3>
            <p className="text-gray-400">Average time to contract with our Strategy</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-brand-accent mb-2">102%</h3>
            <p className="text-gray-400">Sale to List Price Ratio</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-brand-accent mb-2">$500+</h3>
            <p className="text-gray-400">In Referral Rewards Paid Out</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
