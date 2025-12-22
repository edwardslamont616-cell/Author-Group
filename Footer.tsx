import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-brand-bg font-bold">AG</div>
              <span className="font-bold text-xl">Author Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining real estate with modern strategies and community advocacy. 
              Helping you buy, sell, and invest in Grand Rapids.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/listings" className="text-gray-400 hover:text-brand-accent transition-colors">Featured Listings</Link></li>
              <li><Link to="/strategy" className="text-gray-400 hover:text-brand-accent transition-colors">Selling Strategy</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-brand-accent transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Brokerage Info</h3>
            <p className="text-gray-400 text-sm mb-2 font-semibold">Five Star Real Estate Leaders</p>
            <p className="text-gray-500 text-sm">
              Angelique Edwards, Realtor®<br />
              Grand Rapids, MI 49508<br />
              (616) 555-0123
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Author Group LLC. All rights reserved. Powered by Five Star Real Estate Leaders.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-gray-600 border border-gray-700 px-2 py-1 rounded">Equal Housing Opportunity</span>
            <span className="text-xs text-gray-600 border border-gray-700 px-2 py-1 rounded">Realtor®</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;