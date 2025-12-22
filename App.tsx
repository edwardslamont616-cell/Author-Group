import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListingDetail from './pages/ListingDetail';
import AIChatWidget from './components/AIChatWidget';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-bg text-white font-sans antialiased selection:bg-brand-accent selection:text-brand-bg">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Home />} /> {/* For demo, listings goes to home/featured */}
            <Route path="/listings/:id" element={<ListingDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </HashRouter>
  );
};

export default App;