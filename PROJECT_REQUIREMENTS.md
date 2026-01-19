# connectiva - Project Requirements & Documentation

## Project Overview
**connectiva** - Regional Business Hub for the Rhine Valley

A central digital platform where local companies, service providers, craftsmen, real estate agents, car dealers, and employers can showcase their businesses. Long-term vision is to build a digital ecosystem connecting companies, individuals, and customers within the region.

---

## MVP Features (Initial Version)

### 1. Company Listings (Directory)
- Registration for companies (Basic to Platinum packages)
- Company profile with:
  - Logo
  - Contact info
  - Description
  - Images
  - External website link
- Category and location-based search functionality
- Integration of banners, sponsor boxes, and social media links
- SEO-optimized company pages for Google indexing

### 2. Administration Panel (Backend)
- Easy management of listings, categories, banners, and sponsors
- Blog content management (expert articles, regional news)

### 3. Design / User Interface
- Modern, colorful, and easy-to-navigate layout
- Fully responsive and mobile-friendly
- Homepage features:
  - Slider
  - News section
  - Company highlights
  - Search bar

### 4. User Login (Future Extension)
- Login area for partner companies
- Profile management
- Invoices and account settings
- Future: Complete customer dashboard

---

## Future Extensions (Scalable Architecture)
- [ ] Marketplace and classified ads section
- [ ] Job portal and employment listings
- [x] Real estate listings (rent/sale) - **IMPLEMENTED**
- [ ] Mini e-commerce or voucher section
- [ ] Regional events calendar
- [ ] Optional API connection for mobile app

---

## Platform Feature Clarifications

### Real Estate Module
- **Buy/Sell**: Supported ✓
- **Rentals**: Supported ✓ (Finding tenants for rental properties)
- **Browsing**: FREE for all users (no restrictions)
- **Listing Properties**: Requires purchasing a package
  - Property owners, agents, or companies must buy a package to create listings
  - Same rules apply for both selling and renting properties
- **Logic**: Rental and sale listings follow the **same subscription and slot system**

### Cars/Vehicles Module
- **Buy/Sell**: Supported ✓
- **Browsing**: FREE for all users (no restrictions)
- **Car Comparison Feature**: FREE for all users ✓
  - Users can compare multiple cars side by side
  - View differences in specifications, features, pricing, and attributes
  - No subscription required to compare
- **Listing Vehicles**: Requires purchasing a package
  - Only sellers or dealers who want to list vehicles must purchase a package

### Company Directory Access
- **IMPORTANT**: NO free company profiles on the platform
- **Profile Creation Process**:
  1. Client submits a request on platform OR purchases a package
  2. **Rhy-Connect team creates the company profile** (not self-service)
  3. Profiles are professionally created by the team
- **Browsing**: All users (including free) can browse and view company listings
- **Platinum Clients**: Receive a **mini website within the platform**
  - This is treated as a **separate small project** for development team
  - More Platinum clients = More ongoing development work

### Community Requests Feature
- **Posting Requests**: All users can post service requests for free
- **Responding to Requests**: Only paid package members can respond
- This ensures businesses get quality leads from verified providers

### Key Principle
> **Browsing is always FREE** - Users can browse companies, properties, vehicles, and jobs without any restrictions.
> **Creating listings requires a PAID package** - Only package holders can list their businesses, properties, or vehicles.

---

## Technical Requirements
- **Framework**: Next.js (React-based, already set up)
- **Architecture**: Modular, scalable structure
- **Languages**: Multilingual setup (German and English)
- **SEO**: SEO-friendly architecture with fast load times and structured data
- **Security**: High security and GDPR compliance
  - Contact forms protection
  - Cookie consent
  - SSL encryption

---

## Business Model

**Project by**: ARFI Werbetechnik GmbH
**Tagline**: "Stronger Together in the Rhine Valley"
**Currency**: CHF (Swiss Francs)

---

### Pricing Strategy

> **IMPORTANT**: Final pricing is NOT fixed yet. Platform is in **market validation phase**.
> Pricing will be tested with selected customers before public launch.

**Technical Requirements for Pricing:**
- ✅ All package prices must be **configurable from Admin Panel**
- ✅ Pricing values must be **editable without code changes**
- ✅ Add-ons follow **slot-based pricing** (configurable: price, duration, quantity)
- ✅ No hardcoded prices in the codebase

**Customer Pricing:**
- Currently: **Same pricing for all customers** (Connectiva & Non-Connectiva)
- Future: Differentiation can be added later if needed via admin panel

---

### Partner Packages (Structure)

> Note: Prices shown are PLACEHOLDERS. Final pricing will be set via Admin Panel.

#### 1. Basic Package (Browse Only - Free)
| Feature | Included |
|---------|----------|
| Price | **CHF 0** (Free) |
| Browse companies, jobs, real estate, cars | ✅ |
| Use car comparison feature | ✅ |
| Post community service requests | ✅ |
| Create company profile | ❌ |
| Create listings | ❌ |
| Respond to community requests | ❌ |
| **Target** | Individual users exploring the platform |

#### 2. Business+ Package (Entry Business Tier)
| Feature | Included |
|---------|----------|
| Price | **CHF XX/month** (Placeholder) |
| Company profile (created by team) | ✅ |
| Logo, address, contact details | ✅ |
| Link to website | ✅ |
| Searchable in directory | ✅ |
| Respond to community requests | ✅ |
| Job posting slots | Based on add-on purchase |
| **Target** | Small to medium businesses |

#### 3. Premium Package (Advanced Features)
| Feature | Included |
|---------|----------|
| Price | **CHF XX/month** (Placeholder) |
| All Business+ features | ✅ |
| Logo in category slider | ✅ |
| Article in Industry Guide / Expert Blog | ✅ |
| Highlighted listing | ✅ |
| Priority in search results | ✅ |
| Banner placement (limited duration) | ✅ |
| **Target** | Growing, regionally focused companies |

#### 4. Platinum Package (Maximum Presence)
| Feature | Included |
|---------|----------|
| Price | **CHF XX/month** (Placeholder) |
| All Premium features | ✅ |
| **Custom Mini Website** within platform | ✅ |
| - Photo gallery | ✅ |
| - Extended description | ✅ |
| - Contact form | ✅ |
| - Google Maps integration | ✅ |
| - SEO optimized | ✅ |
| Dedicated account manager | ✅ |
| **Target** | Companies aiming for maximum online presence |

> **Note**: Platinum mini-websites are created as **separate small projects** by the development team.

---

### Add-On Packages (Slot-Based)

All add-ons are **slot-based** and **fully configurable** from Admin Panel.

#### Jobs Add-On
| Configuration | Description |
|---------------|-------------|
| Price per slot | CHF XX (Placeholder) |
| Duration | Configurable (e.g., 30/60/90 days) |
| Quantity | Configurable per package |

#### Real Estate Add-On
| Configuration | Description |
|---------------|-------------|
| Price per slot | CHF XX (Placeholder) |
| Duration | Configurable |
| Listing types | Sale & Rental (same pricing logic) |
| Quantity | Configurable per package |

#### Vehicles Add-On
| Configuration | Description |
|---------------|-------------|
| Price per slot | CHF XX (Placeholder) |
| Duration | Configurable |
| Quantity | Configurable per package |

---

### Admin Panel Pricing Configuration

The admin panel must allow configuration of:
```
- Package prices (monthly/yearly)
- Add-on slot prices
- Slot durations
- Slot quantities per package tier
- Discounts (future: Connectiva vs Non-Connectiva)
- Currency display
```

### Additional Services & Sponsorships

| Sponsorship Type | Description |
|------------------|-------------|
| **Homepage Banner (Slider)** | Rotating banner on homepage with companies from various sectors |
| **Category Page Banner (Slider)** | Rotating banner on category pages with same-industry companies |
| **Premium Sponsor** | Fixed medium-size banner on homepage (visible all year) |
| **Gold Sponsor** | Large full-width banner on homepage (fixed, all year) |
| **Elite Sponsor** | Large homepage banner + footer banner on ALL pages |

### Partnership Benefits

**General Benefits:**
- Increased visibility throughout Rhine Valley region
- Strengthening of local economy and business network
- Image building as engaged regional company
- Part of growing community with shared goals
- Regular mentions through social media

**Online Benefits:**
- Professional online presence without major investment
- SEO-friendly company profiles (Google Index)
- Direct links to own website and social media
- Options for online job listings and ad banners
- Access to future features (real estate, marketplace, events)

### Revenue Model
- Annual membership fees
- Recurring income from subscriptions
- Platinum clients = Mini website projects
- Sponsorship deals (banners, premium placements)
- Continuous new partner acquisition

---

## Platform Vision
connectiva aims to become a long-term digital ecosystem for the Rhine Valley:
- Connecting local companies
- Fostering regional collaboration
- Driving visibility and cooperation
- Sustainable economic growth

---

## Development Notes
*Add development-specific notes here as the project progresses*

---

**Last Updated**: January 14, 2026

---

## Changelog

- **Jan 14, 2026 (Update 3)**: Pricing Strategy & Admin Configuration
  - Platform is in **market validation phase** - no fixed pricing yet
  - All pricing must be **configurable from Admin Panel** (no hardcoded values)
  - Add-ons are **slot-based** with configurable: price, duration, quantity
  - Currency: **CHF** (Swiss Francs)
  - Connectiva vs Non-Connectiva: **Same pricing for now** (can be added later)
  - Updated package structure with placeholder pricing
  - Added Admin Panel pricing configuration requirements

- **Jan 14, 2026 (Update 2)**: Major clarifications on platform access
  - Browsing is FREE for all modules (Real Estate, Cars, Companies)
  - Car Comparison: Now FREE for all users
  - Listing requires PAID package (no free listings anywhere)
  - Company profiles created BY THE TEAM (not self-service)
  - Platinum clients get mini website as separate project

- **Jan 14, 2026**: Added Platform Feature Clarifications section
  - Real Estate: Rentals supported with same logic as sales
  - Cars: Comparison feature added
  - Company Profiles: Restricted to paid tiers only
