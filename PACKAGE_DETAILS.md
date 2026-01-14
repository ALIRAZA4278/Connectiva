# Rhy-Connect Package Details & Implementation Notes

> This file contains all package details extracted from design images for frontend implementation and backend/admin panel reference.

---

## Package Tiers Overview

| Feature | Basic | Business+ | Premium | Platinum |
|---------|-------|-----------|---------|----------|
| **Purpose** | Presence only | Higher visibility + leads | Active marketing | Maximum presence + mini website |
| Images | 1 | 3 | 10 | Unlimited |
| Video | ❌ | ❌ | 1 | Multiple |
| Inquiry Button | ❌ | ✅ | ✅ | ✅ |
| Social Media Links | ❌ | ✅ | ✅ | ✅ |
| Blog Posts/year | ❌ | 2 | 4 | Unlimited |
| Promotions/year | ❌ | ❌ | 4 | 12 |
| Partner Badge | ❌ | ❌ | ✅ | ✅ Platinum |
| Partner Slider (Homepage) | ❌ | ❌ | ✅ | ✅ |
| Category Slider | ❌ | ✅ | ✅ | ✅ |
| Hero Slider | ❌ | ❌ | ❌ | ✅ |
| Mini Website | ❌ | ❌ | ❌ | ✅ |
| Dedicated Contact Form | ❌ | ❌ | ❌ | ✅ |
| Company of Week | ❌ | 1x | ❌ | 2x/year |
| Category Header Logo | ❌ | ❌ | ❌ | ✅ |
| Reviews | ✅ | ✅ | ✅ | ✅ |
| Search Priority | Standard | Higher | Highest | TOP |
| **Bonus Cars** | ❌ | ❌ | 5 | 10 |
| **Bonus Real Estate** | ❌ | ❌ | 2 | 4 |
| **Bonus Jobs** | ❌ | ❌ | 2 | 4 |

---

## 1. BASIC Package

### Purpose
Presence only. No active marketing.

### Company Profile Features (Included)
- Company name
- Logo
- Address
- Phone number
- Email
- Website link
- Location on map (Google Maps)
- Category assignment
- Company description (text)
- 1 image in profile
- Opening hours

### Visibility
- Visible in search results
- Visible in category listings
- Standard sorting (no priority)

### Features
- Reviews enabled
- Profile self-managed by the company

### NOT Included
- ❌ Inquiry button
- ❌ Sliders
- ❌ Social media promotion
- ❌ Videos
- ❌ Promotions / actions
- ❌ Blog access
- ❌ Bonus listings
- ❌ Partner badge

---

## 2. BUSINESS+ Package

### Purpose
Higher visibility + first leads.

### Everything from BASIC, plus:

### Leads
- ✅ Inquiry button "Request a quote"
- ✅ Inquiry form directly on the profile
- Requests sent by email + available in dashboard

### Visibility
- ✅ Category slider (rotating)
- ✅ Higher priority in search results
- ✅ 1x Company of the Week on the homepage

### Media & Content
- ✅ Up to 3 images in the profile
- ✅ Social Media links displayed

### Content Tools
- ✅ Mini blog access (max. 2 posts per year)

### Marketing
- 1x Social Media Post (Connectiva channels)

### NOT Included
- ❌ Videos
- ❌ Promotions / actions
- ❌ Partner slider
- ❌ Bonus listings
- ❌ Partner badge

---

## 3. PREMIUM Package

### Purpose
Active marketing + strong visibility. Best value-for-money package.

### Everything from BUSINESS+, plus:

### Media
- ✅ Video section in the company profile (1 video)
- ✅ Image gallery with up to 10 images

### Marketing
- ✅ 1x company presentation video or "behind the scenes" feature
- ✅ Logo displayed in the Connectiva Partner Slider (homepage)

### Media & Content
- ✅ Blog access: up to 4 posts per year
- ✅ Promotions / actions: up to 4 per year

### Visibility
- ✅ Significantly higher priority in all listings

### Branding
- ✅ Partner badge "Connectiva Partner"
- ✅ Badge can be used on website, social media, and printed material

### Bonus Package (Choose 1, as long as subscription is active)
- 🚗 Cars: 5 vehicles listed simultaneously OR
- 🏠 Real estate: 2 listings simultaneously OR
- 💼 Jobs: 2 open positions simultaneously

---

## 4. PLATINUM Package

### Purpose
Maximum presence + own mini website.

### Everything from PREMIUM, plus:

### Visibility
- ✅ Highest priority in all search and category listings
- ✅ 2x Company of the Week per year (homepage)
- ✅ Partner logo visible in category header

### Mini Website Features
- ✅ Dedicated company subpage (full mini-website)
- ✅ Hero slider (large banner images)
- ✅ Image gallery (unlimited)
- ✅ Videos (multiple)
- ✅ Extended text sections (rich content)
- ✅ Contact form (dedicated)

### Content & Marketing
- ✅ Unlimited blog posts (fair use policy)
- ✅ Up to 12 promotions / actions per year

### Branding
- ✅ Platinum Partner badge
- ✅ Badge for website, social media, printed material

### Bonus Package (Choose 1) - DOUBLED
- 🚗 Cars: 10 vehicles listed simultaneously OR
- 🏠 Real estate: 4 listings simultaneously OR
- 💼 Jobs: 4 open positions simultaneously

### Mini Website Layout Structure
```
┌─────────────────────────────────────────┐
│  HERO SECTION                           │
│  - Company logo + "Request a quote"     │
│  - Large hero image/slider              │
│  - Map markers overlay                  │
├─────────────────────────────────────────┤
│  WELCOME SECTION                        │
│  - "Willkommen bei [Company]"           │
│  - Introduction text                    │
│  - Numbered image gallery (1,2,3,4...)  │
├─────────────────────────────────────────┤
│  SERVICES/FEATURES SECTIONS             │
│  - Multiple content blocks              │
│  - Images + descriptions                │
├─────────────────────────────────────────┤
│  ABOUT US SECTION                       │
│  - "Mehr über uns"                      │
│  - Team photos                          │
│  - Company story                        │
├─────────────────────────────────────────┤
│  MISSION/VISION SECTION                 │
│  - Company values                       │
│  - Call to action                       │
├─────────────────────────────────────────┤
│  CONTACT FORM                           │
├─────────────────────────────────────────┤
│  PLATINUM PARTNER BADGE                 │
│  "Offizieller Connectiva PLATINUM       │
│   Partner"                              │
└─────────────────────────────────────────┘
```

---

## ADD-ON PACKAGES (Optional, Bookable Separately)

> All prices are configurable from Admin Panel (CHF currency)

### For Connectiva Customers

| Category | Slot Options |
|----------|--------------|
| **Jobs** | 1 position slot |
| | 3 position slots |
| | 5 position slots |
| **Real Estate** | 1 listing slot |
| | 3 listing slots |
| | 5 listing slots |
| **Vehicles** | 5 vehicles |
| | 15 vehicles |
| | 50 vehicles |

### For NON-Connectiva Customers

| Category | Slot Options |
|----------|--------------|
| **Jobs** | 1 position slot |
| | 3 position slots |
| | 5 position slots |
| **Real Estate** | 1 listing slot |
| | 3 listing slots |
| | 5 listing slots |
| **Vehicles** | 5 vehicles |
| | 15 vehicles |
| | 50 vehicles |

---

## FRONTEND IMPLEMENTATION TASKS

### Company Profile Pages (By Tier)

#### Basic Profile Components:
- [ ] Company header (logo, name)
- [ ] Map integration (Google Maps)
- [ ] Contact info section (address, phone, email, website, hours)
- [ ] Description text area
- [ ] Single image display
- [ ] Reviews section
- [ ] Category badge

#### Business+ Profile Components (adds):
- [ ] "Request a quote" button
- [ ] Inquiry form modal/section
- [ ] Social media links
- [ ] 3-image gallery
- [ ] Category slider appearance

#### Premium Profile Components (adds):
- [ ] Video embed section
- [ ] 10-image gallery with lightbox
- [ ] Partner badge display
- [ ] Promotions/actions section
- [ ] Blog posts section

#### Platinum Mini-Website Components:
- [ ] Hero slider with multiple images
- [ ] Welcome/intro section
- [ ] Services/features blocks (flexible)
- [ ] About us section with team
- [ ] Mission/vision section
- [ ] Dedicated contact form
- [ ] Unlimited image gallery
- [ ] Multiple video embeds
- [ ] Platinum partner badge

### Homepage Components:
- [ ] Partner Slider (Premium + Platinum logos)
- [ ] Category Slider (Business+ and above)
- [ ] Company of the Week section
- [ ] Category headers with Platinum logos

### Pricing Page Updates:
- [ ] Update pricing page with accurate package comparison
- [ ] Add-on packages section
- [ ] Connectiva vs Non-Connectiva pricing toggle (future)

### Add-On Purchase Flow:
- [ ] Add-on selection UI (Jobs, Real Estate, Vehicles)
- [ ] Quantity selector (slot options)
- [ ] Cart/checkout integration

---

## BACKEND/ADMIN PANEL NOTES (For Later Implementation)

### Package Management
- Package tier configuration (Basic, Business+, Premium, Platinum)
- Feature toggles per package
- Image/video limits per tier
- Blog post limits tracking
- Promotions/actions limits tracking

### Inquiry System
- Inquiry form submissions
- Email notifications
- Dashboard for companies to view inquiries

### Content Management
- Blog post system with limits
- Promotions/actions management
- Company of the Week selection
- Partner Slider management
- Category Slider management

### Media Management
- Image upload with tier-based limits
- Video embed management
- Gallery management
- Hero slider management (Platinum)

### Add-On System
- Add-on pricing configuration
- Connectiva vs Non-Connectiva pricing
- Slot quantity management
- Purchase tracking
- Expiry/duration management

### Badge System
- Partner badge generation
- Platinum badge generation
- Downloadable badge assets

### Search & Visibility
- Search priority algorithm (by tier)
- Category listing priority
- Company of the Week rotation

### User Management
- Company self-management portal
- Profile editing (based on tier)
- Dashboard with inquiries, stats

---

## Profile Layout Reference Images

### Basic Profile Layout:
```
┌─────────────────────────────────────────┐
│  [MAP]                                  │
├─────────────────────────────────────────┤
│  [LOGO]  Company Name                   │
├─────────────────────────────────────────┤
│  Company description text...            │
├─────────────────────────────────────────┤
│  Address    │  Opening hours            │
│  Phone      │                           │
│  Email      │                           │
│  Website    │                           │
├─────────────────────────────────────────┤
│  [1 IMAGE]                              │
├─────────────────────────────────────────┤
│  Reviews Section                        │
└─────────────────────────────────────────┘
```

### Business+ Profile Layout:
```
┌─────────────────────────────────────────┐
│  [MAP]                                  │
├─────────────────────────────────────────┤
│  [LOGO]  Company Name  [REQUEST QUOTE]  │
├─────────────────────────────────────────┤
│  Company description text...            │
├─────────────────────────────────────────┤
│  Address    │  Opening hours            │
│  Phone      │  [SOCIAL MEDIA LINKS]     │
│  Email      │                           │
│  Website    │                           │
├─────────────────────────────────────────┤
│  [IMAGE 1] [IMAGE 2] [IMAGE 3]          │
├─────────────────────────────────────────┤
│  Reviews Section                        │
└─────────────────────────────────────────┘
```

### Premium Profile Layout:
```
┌─────────────────────────────────────────┐
│  [MAP]                                  │
├─────────────────────────────────────────┤
│  [LOGO]  Company Name  [REQUEST QUOTE]  │
│                        [PARTNER BADGE]  │
├─────────────────────────────────────────┤
│  Company description text...            │
├─────────────────────────────────────────┤
│  Address    │  Opening hours            │
│  Phone      │  [SOCIAL MEDIA LINKS]     │
│  Email      │                           │
│  Website    │                           │
├─────────────────────────────────────────┤
│  [VIDEO SECTION]                        │
├─────────────────────────────────────────┤
│  [10 IMAGE GALLERY - GRID]              │
├─────────────────────────────────────────┤
│  Our Story / Company History            │
├─────────────────────────────────────────┤
│  Promotions / Actions                   │
├─────────────────────────────────────────┤
│  Blog Posts                             │
├─────────────────────────────────────────┤
│  Reviews Section                        │
├─────────────────────────────────────────┤
│  [PREMIUM PARTNER BADGE]                │
└─────────────────────────────────────────┘
```

---

**Last Updated**: January 14, 2026
**Source**: Design images from client
