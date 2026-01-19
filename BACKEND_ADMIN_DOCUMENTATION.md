# Rhy-Connect.ch - Complete Backend & Admin Panel Documentation

## Table of Contents
1. [Overview](#overview)
2. [Database Models](#database-models)
3. [Package Tiers System](#package-tiers-system)
4. [Admin Panel Features](#admin-panel-features)
5. [API Endpoints](#api-endpoints)
6. [Frontend-Backend Field Mapping](#frontend-backend-field-mapping)

---

## Overview

**Rhy-Connect.ch** is a regional business hub for the Rhine Valley, Switzerland. The platform connects:
- Companies (directory)
- Jobs (job board)
- Real Estate (property listings)
- Cars/Vehicles (car marketplace)
- Community Requests

All listings have **4 Package Tiers**: Basic, Business+, Premium, Platinum - each with different features and visibility levels.

---

## Database Models

### 1. Users Model

```
User {
  id: UUID (Primary Key)
  email: String (unique, required)
  password: String (hashed, required)
  firstName: String
  lastName: String
  phone: String
  role: Enum ['admin', 'company_owner', 'user']
  profileImage: String (URL)
  isActive: Boolean (default: true)
  isVerified: Boolean (default: false)
  emailVerifiedAt: DateTime
  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  company: Company (one-to-one)
}
```

---

### 2. Companies Model

```
Company {
  id: UUID (Primary Key)
  userId: UUID (Foreign Key -> User)

  // Basic Info
  name: String (required)
  slug: String (unique, auto-generated from name)
  category: String (required) [Technology, Health & Wellness, Restaurants & Cafes, Construction, Automotive, Professional Services, Education, etc.]
  location: String (required) [Chur, Davos, Bad Ragaz, Landquart, St. Moritz, Arosa, etc.]
  address: String
  phone: String
  email: String
  website: String

  // Descriptions
  description: String (short - 200 chars)
  longDescription: Text (detailed - unlimited)

  // Media
  logo: String (URL)
  coverImage: String (URL)
  images: Array<String> (URLs - limited by package)
  video: String (YouTube embed URL - Premium/Platinum only)

  // Ratings & Reviews
  rating: Decimal (1-5, calculated average)
  totalReviews: Integer (auto-calculated)

  // Package & Status
  package: Enum ['Basic', 'Business+', 'Premium', 'Platinum']
  verified: Boolean (default: false)
  featured: Boolean (default: false)
  companyOfTheWeek: Boolean (default: false)
  companyOfTheWeekDate: Date

  // Opening Hours
  openingHours: JSON {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
  }

  // Social Media (Business+ and above)
  socialMedia: JSON {
    facebook: String,
    instagram: String,
    linkedin: String,
    twitter: String
  }

  // Team Members (Premium/Platinum)
  team: Array<JSON> [{
    name: String,
    role: String,
    image: String (URL),
    email: String,
    phone: String
  }]

  // Promotions (Premium/Platinum)
  promotions: Array<JSON> [{
    title: String,
    description: String,
    validUntil: Date,
    isActive: Boolean
  }]

  // Mini Website Fields (Platinum only)
  hasMinWebsite: Boolean
  heroSliderImages: Array<String> (URLs)
  extendedSections: Array<JSON> [{
    title: String,
    content: Text
  }]

  // Timestamps
  createdAt: DateTime
  updatedAt: DateTime
  expiresAt: DateTime (subscription end date)

  // Relations
  user: User
  jobs: Job[]
  properties: Property[]
  cars: Car[]
  reviews: Review[]
  blogPosts: BlogPost[]
}
```

---

### 3. Jobs Model

```
Job {
  id: UUID (Primary Key)
  companyId: UUID (Foreign Key -> Company)

  // Basic Info
  title: String (required)
  slug: String (unique)
  category: String [Technology, Healthcare, Finance, Construction, Hospitality, Education, etc.]
  type: Enum ['Full-time', 'Part-time', 'Internship', 'Contract', 'Temporary']
  location: String

  // Salary
  salary: String (e.g., "CHF 95,000 - 120,000")
  salaryPeriod: Enum ['per year', 'per month', 'per hour']
  salaryMin: Decimal (for filtering)
  salaryMax: Decimal (for filtering)

  // Descriptions
  description: Text (required)
  responsibilities: Array<String>
  requirements: Array<String>
  benefits: Array<String> (Business+ and above)

  // Media (based on company package)
  images: Array<String> (URLs - workplace photos)
  video: String (YouTube embed URL - Premium/Platinum)

  // Contact Person (Business+ and above)
  contactPerson: JSON {
    name: String,
    role: String,
    email: String,
    phone: String,
    image: String (URL)
  }

  // Status & Flags
  featured: Boolean (default: false)
  urgent: Boolean (default: false)
  isActive: Boolean (default: true)

  // Dates
  postedAt: DateTime
  deadline: Date
  expiresAt: DateTime

  // Statistics
  applicants: Integer (default: 0)
  views: Integer (default: 0)

  // Timestamps
  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  company: Company
  applications: JobApplication[]
}
```

---

### 4. Properties (Real Estate) Model

```
Property {
  id: UUID (Primary Key)
  agencyId: UUID (Foreign Key -> Company)

  // Basic Info
  title: String (required)
  slug: String (unique)
  type: Enum ['Apartment', 'House', 'Villa', 'Commercial', 'Land', 'Parking']
  listingType: Enum ['For Sale', 'For Rent']
  location: String
  address: String

  // Pricing
  price: String (e.g., "CHF 850,000")
  priceLabel: String (e.g., "/month" for rentals)
  priceNumeric: Decimal (for filtering/sorting)

  // Property Details
  bedrooms: Integer
  bathrooms: Integer
  area: String (e.g., "120 m²")
  areaNumeric: Decimal (for filtering)
  floor: String (e.g., "3rd Floor", "Ground + 2")
  yearBuilt: String
  parking: String (e.g., "1 Underground", "2 Garage")
  heating: String (e.g., "Underfloor Heating", "Heat Pump")

  // Descriptions
  description: Text
  features: Array<String>

  // Media (based on agency package)
  images: Array<String> (URLs)
  video: String (YouTube embed URL - Premium/Platinum)
  virtualTour: String (Matterport URL - Premium/Platinum)
  floorPlan: String (Image URL - Premium/Platinum)

  // Agent Info (Business+ and above)
  agent: JSON {
    name: String,
    role: String,
    phone: String,
    email: String,
    image: String (URL)
  }

  // Status & Flags
  featured: Boolean (default: false)
  premium: Boolean (default: false)
  isActive: Boolean (default: true)

  // Dates
  postedAt: DateTime
  expiresAt: DateTime

  // Statistics
  views: Integer (default: 0)
  inquiries: Integer (default: 0)

  // Timestamps
  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  agency: Company
  inquiries: PropertyInquiry[]
}
```

---

### 5. Cars (Vehicles) Model

```
Car {
  id: UUID (Primary Key)
  dealerId: UUID (Foreign Key -> Company)

  // Basic Info
  title: String (required, e.g., "BMW X5 xDrive40i")
  slug: String (unique)
  brand: String (required)
  model: String
  type: Enum ['SUV', 'Sedan', 'Electric', 'Sports', 'Van', 'Truck', 'Motorcycle']
  condition: Enum ['New', 'Certified Pre-Owned', 'Used']
  year: Integer (required)
  mileage: String (e.g., "25,000 km")
  mileageNumeric: Integer (for filtering)

  // Pricing
  price: String (e.g., "CHF 89,900")
  priceNumeric: Decimal (for filtering/sorting)

  // Specifications (Business+ and above show full specs)
  specifications: JSON {
    engine: String,
    power: String,
    torque: String,
    transmission: String,
    drivetrain: String,
    fuelType: String,
    fuelConsumption: String,
    range: String (for electric),
    acceleration: String,
    topSpeed: String,
    color: String,
    interior: String,
    capacity: String (for vans)
  }

  // Features
  features: Array<String>
  description: Text

  // Media (based on dealer package)
  images: Array<String> (URLs)
  video: String (YouTube embed URL - Premium/Platinum)

  // Sales Person (Business+ and above)
  salesPerson: JSON {
    name: String,
    role: String,
    phone: String,
    email: String,
    image: String (URL)
  }

  // Financing (Business+ and above)
  financing: JSON {
    available: Boolean,
    monthlyFrom: String,
    downPayment: String,
    term: String,
    rate: String
  }

  // Status & Flags
  featured: Boolean (default: false)
  sold: Boolean (default: false)
  isActive: Boolean (default: true)

  // Dates
  postedAt: DateTime
  expiresAt: DateTime

  // Statistics
  views: Integer (default: 0)
  inquiries: Integer (default: 0)

  // Timestamps
  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  dealer: Company
  inquiries: CarInquiry[]
}
```

---

### 6. Reviews Model

```
Review {
  id: UUID (Primary Key)
  companyId: UUID (Foreign Key -> Company)
  userId: UUID (Foreign Key -> User, nullable for anonymous)

  author: String (display name)
  rating: Integer (1-5, required)
  text: Text

  isApproved: Boolean (default: false - requires admin approval)
  isVisible: Boolean (default: true)

  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  company: Company
  user: User (optional)
}
```

---

### 7. Blog Posts Model

```
BlogPost {
  id: UUID (Primary Key)
  companyId: UUID (Foreign Key -> Company)

  title: String (required)
  slug: String (unique)
  content: Text (rich text/HTML)
  excerpt: String (short summary)
  coverImage: String (URL)

  isPublished: Boolean (default: false)
  publishedAt: DateTime

  views: Integer (default: 0)

  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  company: Company
}
```

---

### 8. Job Applications Model

```
JobApplication {
  id: UUID (Primary Key)
  jobId: UUID (Foreign Key -> Job)

  // Applicant Info
  firstName: String (required)
  lastName: String (required)
  email: String (required)
  phone: String
  linkedinProfile: String
  coverLetter: Text

  // Resume
  cvFile: String (URL to uploaded file)
  cvFileName: String

  status: Enum ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired']
  notes: Text (internal admin notes)

  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  job: Job
}
```

---

### 9. Property Inquiries Model

```
PropertyInquiry {
  id: UUID (Primary Key)
  propertyId: UUID (Foreign Key -> Property)

  firstName: String (required)
  lastName: String (required)
  email: String (required)
  phone: String
  message: Text
  wantsViewing: Boolean (default: false)

  status: Enum ['new', 'contacted', 'scheduled', 'completed']
  notes: Text (internal admin notes)

  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  property: Property
}
```

---

### 10. Car Inquiries Model

```
CarInquiry {
  id: UUID (Primary Key)
  carId: UUID (Foreign Key -> Car)

  firstName: String (required)
  lastName: String (required)
  email: String (required)
  phone: String
  message: Text
  wantsTestDrive: Boolean (default: false)

  status: Enum ['new', 'contacted', 'scheduled', 'completed']
  notes: Text (internal admin notes)

  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  car: Car
}
```

---

### 11. Community Requests Model

```
CommunityRequest {
  id: UUID (Primary Key)
  userId: UUID (Foreign Key -> User, optional)

  title: String (required)
  description: Text (required)
  category: String [Moving Help, Repair Services, Tutoring, Pet Care, etc.]
  location: String
  budget: String (optional)

  contactName: String
  contactEmail: String
  contactPhone: String

  status: Enum ['open', 'in_progress', 'completed', 'cancelled']
  isActive: Boolean (default: true)

  responses: Integer (default: 0)

  createdAt: DateTime
  updatedAt: DateTime
  expiresAt: DateTime

  // Relations
  user: User (optional)
  responses: CommunityResponse[]
}
```

---

### 12. Subscriptions Model

```
Subscription {
  id: UUID (Primary Key)
  companyId: UUID (Foreign Key -> Company)

  package: Enum ['Basic', 'Business+', 'Premium', 'Platinum']

  // Pricing
  priceMonthly: Decimal
  pricePaid: Decimal
  currency: String (default: 'CHF')

  // Dates
  startDate: DateTime
  endDate: DateTime
  nextBillingDate: DateTime

  // Status
  status: Enum ['active', 'cancelled', 'expired', 'pending']
  autoRenew: Boolean (default: true)

  // Bonus Package Selection (Premium/Platinum)
  bonusType: Enum ['cars', 'real_estate', 'jobs', null]
  bonusSlots: Integer
  bonusSlotsUsed: Integer

  // Payment
  paymentMethod: String
  lastPaymentDate: DateTime
  lastPaymentAmount: Decimal

  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  company: Company
  payments: Payment[]
}
```

---

### 13. Add-On Slots Model

```
AddOnSlot {
  id: UUID (Primary Key)
  companyId: UUID (Foreign Key -> Company)

  type: Enum ['jobs', 'real_estate', 'cars']
  totalSlots: Integer
  usedSlots: Integer

  price: Decimal
  purchaseDate: DateTime
  expiresAt: DateTime

  status: Enum ['active', 'expired']

  createdAt: DateTime
  updatedAt: DateTime

  // Relations
  company: Company
}
```

---

## Package Tiers System

### Feature Comparison by Package

| Feature | Basic | Business+ | Premium | Platinum |
|---------|-------|-----------|---------|----------|
| **Company Profile** | No | Yes | Yes | Yes |
| **Profile Created By** | - | Team | Team | Team |
| **Logo & Contact Info** | - | Yes | Yes | Yes |
| **Website Link** | - | Yes | Yes | Yes |
| **Social Media Links** | - | Yes | Yes | Yes |
| **Profile Images** | 1 | 3 | 10 | Unlimited |
| **Video Section** | No | No | 1 | Multiple |
| **Request Quote Button** | No | Yes | Yes | Yes |
| **Inquiry Form** | No | No | No | Yes |
| **Category Slider** | No | Yes | Yes | Yes |
| **Partner Slider (Homepage)** | No | No | Yes | Yes |
| **Blog Posts/Year** | - | 2 | 4 | Unlimited |
| **Promotions/Year** | - | - | 4 | 12 |
| **Company of Week** | - | 1x | - | 2x/year |
| **Partner Badge** | No | No | Yes | Yes |
| **Mini Website** | No | No | No | Yes |
| **Search Priority** | Standard | Higher | Highest | TOP |
| **Reviews Display** | Yes | Yes | Yes | Yes |
| **Team Members Display** | No | No | Yes | Yes |
| **Opening Hours** | Yes | Yes | Yes | Yes |
| **Map Integration** | Yes | Yes | Yes | Yes |

### Bonus Package Options (Premium/Platinum)

Premium can choose ONE of:
- 5 car listings OR
- 2 real estate listings OR
- 2 job postings

Platinum can choose ONE of:
- 10 car listings OR
- 4 real estate listings OR
- 4 job postings

---

## Admin Panel Features

### 1. Dashboard
- Total companies by package
- Active listings count (jobs, properties, cars)
- New registrations (daily/weekly/monthly)
- Revenue overview
- Recent activities
- Pending approvals count

### 2. Company Management
```
CRUD Operations:
- List all companies with filters (package, category, location, status)
- Create new company profile
- Edit company details
- Change company package
- Toggle verified status
- Set as Company of the Week
- View company statistics
- Manage company subscriptions
- Delete/deactivate company

Bulk Actions:
- Bulk verify companies
- Bulk change package
- Export to CSV/Excel
```

### 3. Jobs Management
```
CRUD Operations:
- List all jobs with filters (category, location, company, status)
- Create job on behalf of company
- Edit job details
- Toggle featured/urgent status
- View applications
- Delete/deactivate job

Application Management:
- View all applications
- Change application status
- Download CV files
- Export applications
```

### 4. Real Estate Management
```
CRUD Operations:
- List all properties with filters (type, location, price range, agency)
- Create property on behalf of agency
- Edit property details
- Toggle featured status
- View inquiries
- Delete/deactivate property

Inquiry Management:
- View all inquiries
- Change inquiry status
- Export inquiries
```

### 5. Cars/Vehicles Management
```
CRUD Operations:
- List all vehicles with filters (brand, type, condition, dealer)
- Create vehicle on behalf of dealer
- Edit vehicle details
- Toggle featured status
- Mark as sold
- View inquiries
- Delete/deactivate vehicle

Inquiry Management:
- View all inquiries
- Change inquiry status
- Export inquiries
```

### 6. Reviews Management
```
- List all reviews (pending/approved)
- Approve/reject reviews
- Edit review content
- Delete reviews
- Filter by company/rating
```

### 7. Blog Management
```
- List all blog posts
- Approve/publish posts
- Edit posts
- Delete posts
- Filter by company
```

### 8. Users Management
```
CRUD Operations:
- List all users with filters (role, status)
- Create new user
- Edit user details
- Change user role
- Activate/deactivate users
- Reset passwords
- Delete users
```

### 9. Subscriptions & Billing
```
- View all subscriptions
- Change subscription package
- Extend/cancel subscriptions
- View payment history
- Generate invoices
- Handle refunds
- Manage add-on slots
```

### 10. Community Requests
```
- List all requests
- Edit requests
- Change status
- Delete requests
- View responses
```

### 11. Content Management
```
Categories Management:
- Company categories
- Job categories
- Property types
- Vehicle types

Locations Management:
- Cities/towns
- Regions

Homepage Content:
- Partner Slider companies
- Company of the Week selection
- Banner management
- Featured listings selection
```

### 12. Settings
```
Platform Settings:
- Package pricing
- Add-on pricing
- Sponsorship pricing
- Email templates
- Notification settings

SEO Settings:
- Meta titles/descriptions
- Sitemap configuration

Integration Settings:
- Payment gateway configuration
- Email service configuration
- Analytics integration
```

### 13. Reports & Analytics
```
Reports:
- Revenue reports (by period, package, type)
- Listing reports (new, active, expired)
- User activity reports
- Popular searches
- Conversion rates
- Geographic distribution

Export Options:
- CSV export
- PDF reports
- Excel export
```

---

## API Endpoints

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
GET    /api/auth/me
PUT    /api/auth/update-profile
```

### Companies
```
GET    /api/companies                    - List companies (with filters)
GET    /api/companies/:id                - Get company details
GET    /api/companies/:id/reviews        - Get company reviews
GET    /api/companies/:id/jobs           - Get company jobs
GET    /api/companies/:id/properties     - Get company properties
GET    /api/companies/:id/cars           - Get company cars
POST   /api/companies                    - Create company (admin)
PUT    /api/companies/:id                - Update company
DELETE /api/companies/:id                - Delete company (admin)
POST   /api/companies/:id/inquiry        - Send inquiry to company
```

### Jobs
```
GET    /api/jobs                         - List jobs (with filters)
GET    /api/jobs/:id                     - Get job details
POST   /api/jobs                         - Create job
PUT    /api/jobs/:id                     - Update job
DELETE /api/jobs/:id                     - Delete job
POST   /api/jobs/:id/apply               - Apply for job
```

### Real Estate
```
GET    /api/properties                   - List properties (with filters)
GET    /api/properties/:id               - Get property details
POST   /api/properties                   - Create property
PUT    /api/properties/:id               - Update property
DELETE /api/properties/:id               - Delete property
POST   /api/properties/:id/inquiry       - Send property inquiry
```

### Cars
```
GET    /api/cars                         - List cars (with filters)
GET    /api/cars/:id                     - Get car details
GET    /api/cars/compare                 - Compare multiple cars
POST   /api/cars                         - Create car listing
PUT    /api/cars/:id                     - Update car
DELETE /api/cars/:id                     - Delete car
POST   /api/cars/:id/inquiry             - Send car inquiry
```

### Reviews
```
GET    /api/reviews                      - List reviews (admin)
POST   /api/reviews                      - Create review
PUT    /api/reviews/:id                  - Update review (admin)
DELETE /api/reviews/:id                  - Delete review (admin)
PUT    /api/reviews/:id/approve          - Approve review (admin)
```

### Community
```
GET    /api/community-requests           - List community requests
GET    /api/community-requests/:id       - Get request details
POST   /api/community-requests           - Create request
PUT    /api/community-requests/:id       - Update request
DELETE /api/community-requests/:id       - Delete request
POST   /api/community-requests/:id/respond - Respond to request
```

### Subscriptions
```
GET    /api/subscriptions                - List subscriptions (admin)
GET    /api/subscriptions/:id            - Get subscription details
POST   /api/subscriptions                - Create subscription
PUT    /api/subscriptions/:id            - Update subscription
POST   /api/subscriptions/:id/cancel     - Cancel subscription
POST   /api/subscriptions/:id/renew      - Renew subscription
```

### Admin
```
GET    /api/admin/dashboard              - Dashboard statistics
GET    /api/admin/reports/:type          - Generate reports
POST   /api/admin/company-of-week        - Set company of week
PUT    /api/admin/settings               - Update platform settings
```

---

## Frontend-Backend Field Mapping

### Package Features Configuration (Backend)

```javascript
// Store in database or config file
const packageFeatures = {
  Basic: {
    maxImages: 1,
    hasInquiryButton: false,
    hasSocialMedia: false,
    hasVideo: false,
    hasBlog: false,
    hasPromotions: false,
    hasPartnerBadge: false,
    hasContactForm: false,
    hasTeamDisplay: false,
    blogPostsPerYear: 0,
    promotionsPerYear: 0,
    searchPriority: 1,
  },
  "Business+": {
    maxImages: 3,
    hasInquiryButton: true,
    hasSocialMedia: true,
    hasVideo: false,
    hasBlog: true,
    hasPromotions: false,
    hasPartnerBadge: false,
    hasContactForm: false,
    hasTeamDisplay: false,
    blogPostsPerYear: 2,
    promotionsPerYear: 0,
    searchPriority: 2,
  },
  Premium: {
    maxImages: 10,
    hasInquiryButton: true,
    hasSocialMedia: true,
    hasVideo: true,
    hasBlog: true,
    hasPromotions: true,
    hasPartnerBadge: true,
    hasContactForm: false,
    hasTeamDisplay: true,
    blogPostsPerYear: 4,
    promotionsPerYear: 4,
    searchPriority: 3,
  },
  Platinum: {
    maxImages: 999,
    hasInquiryButton: true,
    hasSocialMedia: true,
    hasVideo: true,
    hasBlog: true,
    hasPromotions: true,
    hasPartnerBadge: true,
    hasContactForm: true,
    hasTeamDisplay: true,
    hasMiniWebsite: true,
    blogPostsPerYear: 999,
    promotionsPerYear: 12,
    searchPriority: 4,
  },
};
```

### Jobs Package Features

```javascript
const jobPackageFeatures = {
  Basic: {
    hasContactForm: false,
    hasDetailedCompanyInfo: false,
    hasImages: false,
    hasVideo: false,
    hasBenefits: false,
    hasContactPerson: false,
    maxResponsibilities: 3,
  },
  "Business+": {
    hasContactForm: true,
    hasDetailedCompanyInfo: true,
    hasImages: true,
    hasVideo: false,
    hasBenefits: true,
    hasContactPerson: true,
    maxResponsibilities: 5,
  },
  Premium: {
    hasContactForm: true,
    hasDetailedCompanyInfo: true,
    hasImages: true,
    hasVideo: true,
    hasBenefits: true,
    hasContactPerson: true,
    maxResponsibilities: 10,
  },
  Platinum: {
    hasContactForm: true,
    hasDetailedCompanyInfo: true,
    hasImages: true,
    hasVideo: true,
    hasBenefits: true,
    hasContactPerson: true,
    maxResponsibilities: 999,
  },
};
```

### Real Estate Package Features

```javascript
const propertyPackageFeatures = {
  Basic: {
    hasContactForm: false,
    hasGallery: false,
    hasVideo: false,
    hasVirtualTour: false,
    hasFloorPlan: false,
    hasAgentInfo: false,
    maxFeatures: 2,
  },
  "Business+": {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: false,
    hasVirtualTour: false,
    hasFloorPlan: false,
    hasAgentInfo: true,
    maxFeatures: 5,
  },
  Premium: {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: true,
    hasVirtualTour: true,
    hasFloorPlan: true,
    hasAgentInfo: true,
    maxFeatures: 10,
  },
  Platinum: {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: true,
    hasVirtualTour: true,
    hasFloorPlan: true,
    hasAgentInfo: true,
    maxFeatures: 999,
  },
};
```

### Cars Package Features

```javascript
const carPackageFeatures = {
  Basic: {
    hasContactForm: false,
    hasGallery: false,
    hasVideo: false,
    hasFinancing: false,
    hasSalesPerson: false,
    hasFullSpecs: false,
    maxFeatures: 2,
  },
  "Business+": {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: false,
    hasFinancing: true,
    hasSalesPerson: true,
    hasFullSpecs: true,
    maxFeatures: 5,
  },
  Premium: {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: true,
    hasFinancing: true,
    hasSalesPerson: true,
    hasFullSpecs: true,
    maxFeatures: 10,
  },
  Platinum: {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: true,
    hasFinancing: true,
    hasSalesPerson: true,
    hasFullSpecs: true,
    maxFeatures: 999,
  },
};
```

---

## Categories & Locations (Static Data)

### Company Categories
```
- Technology
- Health & Wellness
- Restaurants & Cafes
- Construction
- Automotive
- Professional Services
- Education
- Retail
- Finance & Insurance
- Tourism & Hospitality
- Agriculture
- Manufacturing
- Real Estate
- Transportation
- Media & Entertainment
```

### Job Categories
```
- Technology
- Healthcare
- Finance
- Construction
- Hospitality
- Education
- Retail
- Marketing
- Administration
- Engineering
- Legal
- Creative/Design
```

### Property Types
```
- Apartment
- House
- Villa
- Commercial
- Land
- Parking
```

### Vehicle Types
```
- SUV
- Sedan
- Electric
- Sports
- Van
- Truck
- Motorcycle
- Compact
- Luxury
```

### Locations (Rhine Valley Region)
```
- Chur (Capital)
- Davos
- Bad Ragaz
- Landquart
- St. Moritz
- Arosa
- Lenzerheide
- Flims
- Laax
- Klosters
- Pontresina
- Samedan
- Scuol
- Vals
- Thusis
```

---

## Notes for Backend Development

1. **Image Storage**: Use cloud storage (AWS S3, Cloudinary) for all images
2. **File Uploads**: CV/Resume files should have size limits (5MB max)
3. **Caching**: Implement caching for company listings, homepage data
4. **Search**: Consider Elasticsearch for advanced search functionality
5. **Email**: Implement email notifications for inquiries, applications
6. **Security**: Implement rate limiting, input validation, CSRF protection
7. **Localization**: Platform should support German, French, Italian (Swiss languages)
8. **Currency**: All prices in CHF (Swiss Francs)
9. **GDPR**: Implement data export/deletion for user privacy compliance
10. **Analytics**: Track views, clicks, conversions for listings

---

## Document Version

- Version: 1.0
- Created: January 2026
- Last Updated: January 2026
- Author: Claude AI (Backend Documentation Generation)

---

This document contains all the field definitions, models, and admin panel features needed to build the complete backend for Rhy-Connect.ch based on the frontend implementation.
