# AME Group – Multi-Listing Platform

## Project Overview
A modern, AI-powered real estate platform for Author Group LLC showcasing premium properties across Grand Rapids, Michigan. This platform transforms a single-listing showcase into a comprehensive multi-listing real estate website with advanced search, filtering, and AI-powered customer support.

## Current Features ✅
- Dark theme with cyan/green accent (#00D9A3)
- React 18+ with TypeScript
- React Router DOM for navigation
- AI-powered chat using Gemini API
- Responsive design
- Single property showcase (Amberly property)

## Transformation Plan: Multi-Listing Platform

### Phase 1: Data Infrastructure (Week 1-2) ✅ IN PROGRESS

#### Completed:
- ✅ Enhanced `Property` interface with `neighborhood` and `propertyType` fields
- ✅ Updated existing LISTING_AMBERLY with new fields
- ✅ Created 3 additional property listings:
  - LISTING_HERITAGE (Heritage Hill Victorian - $425K)
  - LISTING_EASTHILLS (East Hills Condo - $240K)
  - LISTING_CASCADE (Cascade Luxury - $625K)
- ✅ Created ALL_LISTINGS array for centralized property management

#### Remaining Work:
- Add 12-16 more property listings to reach 15-20+ total
- Diversify across Grand Rapids neighborhoods:
  - Eastown
  - Heritage Hill
  - East Hills
  - Cascade
  - Wealthy Street
  - Downtown
  - Gaslight Village
- Include various property types: Single Family, Condo, Townhouse, Multi-Family
- Price range: $200K - $750K to represent realistic market

### Phase 2: Listings Page & Components (Week 3-4) 📋 PENDING

#### New Components Needed:

**1. Listings.tsx**
- Grid layout displaying all properties
- Responsive grid (1 col mobile, 2-3 col tablet, 3-4 col desktop)
- Integration with FilterBar and PropertyCard

**2. PropertyCard.tsx**
- Reusable card component for each listing
- Display: image, price, beds/baths/sqft, address, key features
- Link to detail page
- "New", "Price Drop", "Open House" badges

**3. FilterBar.tsx**
- Search by address/neighborhood
- Filter by:
  - Price range (min/max sliders)
  - Bedrooms (1+ to 5+)
  - Bathrooms (1+ to 4+)
  - Property Type (checkboxes)
  - Neighborhoods (checkboxes)
- Clear filters button
- Results count display

**4. SortControls.tsx**
- Sort by: Price (low/high), Date Listed, Sq Ft, Bedrooms
- View toggle: Grid/List views

### Phase 3: Enhanced Detail Pages (Week 4-5) 📋 PENDING

#### ListingDetail.tsx Enhancements:
- **Image Gallery Component**
  - Thumbnail navigation
  - Full-screen lightbox
  - Image counter (1/12)
  - Arrow navigation

- **Mortgage Calculator Component**
  - Inputs: Home price, down payment %, interest rate, loan term
  - Display: Monthly payment, total interest, total cost
  - Adjustable sliders
  - "Get Pre-Approved" CTA

- **Property Details Tabs**
  - Overview: Description, features, status
  - Details: Full specs, HOA info, tax info
  - Location: Map integration, neighborhood info
  - History: Price history, days on market

-**Similar Listings Section**
  - Show 3-4 similar properties
  - Based on: price range, neighborhood, property type

### Phase 4: Perplexity AI Integration (Week 5-6) 📋 PENDING

#### Enhanced AI Chat Features:
- Query across ALL listings simultaneously
- Natural language search: "Show me 3-bedroom homes under $400K in Heritage Hill"
- Comparison queries: "Compare the Cascade and Easttown properties"
- Neighborhood questions: "Tell me about schools near the Heritage Hill listing"
- Update `geminiService.ts` to pass ALL_LISTINGS context
- Implement property-specific responses with listing links

### Phase 5: SEO & Neighborhood Pages (Week 6-7) 📋 PENDING

#### Neighborhood Landing Pages:
Create dedicated pages for each major neighborhood:
- `/neighborhoods/heritage-hill`
- `/neighborhoods/east-hills`
- `/neighborhoods/cascade`
- `/neighborhoods/eastown`

#### Content for Each Page:
- Neighborhood overview and history
- Current listings in that neighborhood
- Average price data
- Key amenities and attractions
- School information
- Transportation and walkability
- Photos and highlights

#### SEO Enhancements:
- Meta tags for all property pages
- Structured data (JSON-LD) for real estate listings
- OpenGraph tags for social sharing
- Sitemap generation
- Robots.txt optimization

### Phase 6: App Routing Updates (Week 7) 📋 PENDING

#### Updated Routes:
```typescript
<Route path="/" element={<Home />} />
<Route path="/listings" element={<Listings />} />  // Enable this!
<Route path="/listings/:id" element={<ListingDetail />} />
<Route path="/neighborhoods/:slug" element={<NeighborhoodPage />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
```

#### Navigation Updates:
- Update Navbar with "Browse Listings" link
- Add neighborhood dropdown menu
- Implement breadcrumb navigation

### Phase 7: Performance & Polish (Week 8) 📋 PENDING

- Image optimization and lazy loading
- Code splitting for faster initial load
- Implement loading skeletons
- Add page transitions
- Mobile optimization
- Cross-browser testing
- Accessibility audit (WCAG 2.1 AA compliance)
- Performance audit (Lighthouse score 90+)

## Technical Stack

- **Frontend**: React 18+ with TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS (utility-first)
- **AI**: Google Gemini API
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file:
```
GEMINI_API_KEY=your_api_key_here
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
Author-Group/
├── src/
│   ├── components/
│   │   ├── AIChatWidget.tsx
│   │   ├── FilterBar.tsx         # NEW
│   │   ├── PropertyCard.tsx      # NEW
│   │   ├── ImageGallery.tsx      # NEW
│   │   ├── MortgageCalculator.tsx # NEW
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Listings.tsx          # NEW
│   │   ├── ListingDetail.tsx     # Enhanced
│   │   └── NeighborhoodPage.tsx  # NEW
│   ├── data/
│   │   ├── constants.ts          # Enhanced with 15-20+ listings
│   │   └── neighborhoods.ts      # NEW
│   ├── types.ts                  # Enhanced
│   ├── geminiService.ts          # Enhanced for multi-listing
│   └── App.tsx                   # Updated routing
├── README.md                     # This file
└── package.json
```

## Team Deliverables (8-Week Timeline)

### Sophia Chen - Strategic Director
- Multi-listing platform architecture
- User experience flow design
- Content strategy for neighborhoods
- SEO strategy and metadata

### Marcus Johnson - UX Designer
- FilterBar and search UI/UX
- Property card design system
- Image gallery interaction design
- Mobile-responsive layouts

### Aisha Patel - Content Strategist
- Property descriptions (15-20+ listings)
- Neighborhood page content
- SEO-optimized copy
- Feature highlights for each listing

### James Ko - Back-End Engineer
- Enhanced TypeScript types
- Perplexity AI integration for multi-listing
- Filter and search logic
- State management for listings

### Taylor Kim - Marketing Lead
- Social media integration
- OpenGraph metadata
- Email capture strategy
- Analytics implementation

## Success Metrics

- ✅ 15-20+ property listings
- ✅ Real-time search & filters
- ✅ AI chat queries across all listings
- ✅ Enhanced detail pages with galleries
- ✅ SEO-optimized neighborhood pages
- ✅ Mobile-responsive design
- ✅ Lighthouse performance score 90+
- ✅ WCAG 2.1 AA accessibility

## Contact

**Author Group LLC**  
Angelique Edwards

📧 angeliquedwards616@gmail.com  
📱 (616) 432-0126  
🏢 Powered by Five Star Real Estate Leaders

## License

Private - Author Group LLC © 2026


---
*Last updated: January 10, 2026 - Production deployment*
