# Backend Tasks - Connectiva Platform

> Last Updated: January 24, 2026
> Status: Not Started
> Database: Supabase (PostgreSQL)

---

## Overview

This document outlines all backend development tasks required for the Connectiva platform. The backend will be built using Supabase with Next.js API routes.

---

## 1. Database Setup (Supabase)

### Tables to Create

#### Core Tables
- [ ] `users` - User accounts (private & company owners)
- [ ] `companies` - Company profiles
- [ ] `subscriptions` - Package subscriptions
- [ ] `packages` - Package tiers configuration

#### Listings Tables
- [ ] `jobs` - Job listings
- [ ] `job_applications` - Job applications
- [ ] `properties` - Real estate listings
- [ ] `property_inquiries` - Property inquiries
- [ ] `cars` - Vehicle listings
- [ ] `car_inquiries` - Vehicle inquiries

#### Content Tables
- [ ] `reviews` - Company reviews
- [ ] `blog_posts` - Blog/news articles
- [ ] `community_requests` - Community service requests
- [ ] `community_responses` - Responses to requests

#### Support Tables
- [ ] `categories` - All category types
- [ ] `locations` - Rhine Valley locations
- [ ] `add_on_slots` - Purchased add-on packages
- [ ] `payments` - Payment history
- [ ] `media` - Uploaded images/files

---

## 2. Database Schema Implementation

### Users Table
```sql
- [ ] id (UUID, Primary Key)
- [ ] email (unique, required)
- [ ] password_hash
- [ ] first_name
- [ ] last_name
- [ ] phone
- [ ] role (enum: admin, company_owner, user)
- [ ] profile_image (URL)
- [ ] is_active (default: true)
- [ ] is_verified (default: false)
- [ ] email_verified_at
- [ ] created_at
- [ ] updated_at
```

### Companies Table
```sql
- [ ] id (UUID, Primary Key)
- [ ] user_id (FK -> users)
- [ ] name (required)
- [ ] slug (unique, auto-generated)
- [ ] category
- [ ] location
- [ ] address
- [ ] phone
- [ ] email
- [ ] website
- [ ] description (short)
- [ ] long_description (detailed)
- [ ] logo (URL)
- [ ] cover_image (URL)
- [ ] images (JSON array)
- [ ] video (YouTube URL)
- [ ] rating (decimal 1-5)
- [ ] total_reviews
- [ ] package (enum: Basic, Business+, Premium, Platinum)
- [ ] verified (boolean)
- [ ] featured (boolean)
- [ ] company_of_the_week (boolean)
- [ ] company_of_the_week_date
- [ ] opening_hours (JSON)
- [ ] social_media (JSON)
- [ ] team (JSON array)
- [ ] promotions (JSON array)
- [ ] has_mini_website (boolean)
- [ ] hero_slider_images (JSON array)
- [ ] extended_sections (JSON array)
- [ ] created_at
- [ ] updated_at
- [ ] expires_at
```

### Jobs Table
```sql
- [ ] id (UUID, Primary Key)
- [ ] company_id (FK -> companies)
- [ ] title (required)
- [ ] slug (unique)
- [ ] category
- [ ] type (enum: Full-time, Part-time, etc.)
- [ ] location
- [ ] salary
- [ ] salary_period
- [ ] salary_min
- [ ] salary_max
- [ ] description
- [ ] responsibilities (JSON array)
- [ ] requirements (JSON array)
- [ ] benefits (JSON array)
- [ ] images (JSON array)
- [ ] video (URL)
- [ ] contact_person (JSON)
- [ ] featured (boolean)
- [ ] urgent (boolean)
- [ ] is_active (boolean)
- [ ] posted_at
- [ ] deadline
- [ ] expires_at
- [ ] applicants_count
- [ ] views_count
- [ ] created_at
- [ ] updated_at
```

### Properties Table
```sql
- [ ] id (UUID, Primary Key)
- [ ] agency_id (FK -> companies)
- [ ] user_id (FK -> users, for private listings)
- [ ] title (required)
- [ ] slug (unique)
- [ ] type (enum: Apartment, House, Villa, etc.)
- [ ] listing_type (enum: For Sale, For Rent)
- [ ] location
- [ ] address
- [ ] price
- [ ] price_label
- [ ] price_numeric
- [ ] bedrooms
- [ ] bathrooms
- [ ] area
- [ ] area_numeric
- [ ] floor
- [ ] year_built
- [ ] parking
- [ ] heating
- [ ] description
- [ ] features (JSON array)
- [ ] images (JSON array)
- [ ] video (URL)
- [ ] virtual_tour (URL)
- [ ] floor_plan (URL)
- [ ] agent (JSON)
- [ ] featured (boolean)
- [ ] premium (boolean)
- [ ] is_active (boolean)
- [ ] posted_at
- [ ] expires_at
- [ ] views_count
- [ ] inquiries_count
- [ ] created_at
- [ ] updated_at
```

### Cars Table
```sql
- [ ] id (UUID, Primary Key)
- [ ] dealer_id (FK -> companies)
- [ ] user_id (FK -> users, for private listings)
- [ ] title (required)
- [ ] slug (unique)
- [ ] brand (required)
- [ ] model
- [ ] type (enum: SUV, Sedan, Electric, etc.)
- [ ] condition (enum: New, Certified Pre-Owned, Used)
- [ ] year (required)
- [ ] mileage
- [ ] mileage_numeric
- [ ] price
- [ ] price_numeric
- [ ] specifications (JSON)
- [ ] features (JSON array)
- [ ] description
- [ ] images (JSON array)
- [ ] video (URL)
- [ ] sales_person (JSON)
- [ ] financing (JSON)
- [ ] featured (boolean)
- [ ] sold (boolean)
- [ ] is_active (boolean)
- [ ] posted_at
- [ ] expires_at
- [ ] views_count
- [ ] inquiries_count
- [ ] created_at
- [ ] updated_at
```

### Other Tables (Schema needed)
- [ ] `reviews` table schema
- [ ] `blog_posts` table schema
- [ ] `job_applications` table schema
- [ ] `property_inquiries` table schema
- [ ] `car_inquiries` table schema
- [ ] `community_requests` table schema
- [ ] `community_responses` table schema
- [ ] `subscriptions` table schema
- [ ] `packages` table schema
- [ ] `add_on_slots` table schema
- [ ] `payments` table schema

---

## 3. Authentication System

### Supabase Auth Setup
- [ ] Email/Password authentication
- [ ] Email verification flow
- [ ] Password reset flow
- [ ] Session management
- [ ] Protected routes middleware

### User Registration
- [ ] Private user registration
- [ ] Company owner registration
- [ ] Email verification
- [ ] Profile creation on signup

### Authorization
- [ ] Role-based access control (RBAC)
- [ ] Row Level Security (RLS) policies
- [ ] Package-based feature access

---

## 4. API Endpoints (Next.js API Routes)

### Authentication APIs
- [ ] `POST /api/auth/register` - Register new user
- [ ] `POST /api/auth/login` - User login
- [ ] `POST /api/auth/logout` - User logout
- [ ] `POST /api/auth/forgot-password` - Request password reset
- [ ] `POST /api/auth/reset-password` - Reset password
- [ ] `GET /api/auth/me` - Get current user
- [ ] `PUT /api/auth/update-profile` - Update profile

### Companies APIs
- [ ] `GET /api/companies` - List companies (with filters)
- [ ] `GET /api/companies/:slug` - Get company details
- [ ] `GET /api/companies/:id/reviews` - Get company reviews
- [ ] `GET /api/companies/:id/jobs` - Get company jobs
- [ ] `POST /api/companies` - Create company (admin)
- [ ] `PUT /api/companies/:id` - Update company
- [ ] `DELETE /api/companies/:id` - Delete company (admin)
- [ ] `POST /api/companies/:id/inquiry` - Send inquiry

### Jobs APIs
- [ ] `GET /api/jobs` - List jobs (with filters)
- [ ] `GET /api/jobs/:slug` - Get job details
- [ ] `POST /api/jobs` - Create job
- [ ] `PUT /api/jobs/:id` - Update job
- [ ] `DELETE /api/jobs/:id` - Delete job
- [ ] `POST /api/jobs/:id/apply` - Apply for job
- [ ] `GET /api/jobs/:id/applications` - Get applications (company)

### Properties APIs
- [ ] `GET /api/properties` - List properties (with filters)
- [ ] `GET /api/properties/:slug` - Get property details
- [ ] `POST /api/properties` - Create property
- [ ] `PUT /api/properties/:id` - Update property
- [ ] `DELETE /api/properties/:id` - Delete property
- [ ] `POST /api/properties/:id/inquiry` - Send inquiry

### Cars APIs
- [ ] `GET /api/cars` - List cars (with filters)
- [ ] `GET /api/cars/:slug` - Get car details
- [ ] `GET /api/cars/compare` - Compare cars
- [ ] `POST /api/cars` - Create car listing
- [ ] `PUT /api/cars/:id` - Update car
- [ ] `DELETE /api/cars/:id` - Delete car
- [ ] `POST /api/cars/:id/inquiry` - Send inquiry

### Reviews APIs
- [ ] `GET /api/reviews` - List reviews (admin)
- [ ] `POST /api/reviews` - Create review
- [ ] `PUT /api/reviews/:id` - Update review (admin)
- [ ] `DELETE /api/reviews/:id` - Delete review (admin)
- [ ] `PUT /api/reviews/:id/approve` - Approve review

### Community APIs
- [ ] `GET /api/community` - List community requests
- [ ] `GET /api/community/:id` - Get request details
- [ ] `POST /api/community` - Create request
- [ ] `PUT /api/community/:id` - Update request
- [ ] `DELETE /api/community/:id` - Delete request
- [ ] `POST /api/community/:id/respond` - Respond to request

### Blog APIs
- [ ] `GET /api/blog` - List blog posts
- [ ] `GET /api/blog/:slug` - Get post details
- [ ] `POST /api/blog` - Create post
- [ ] `PUT /api/blog/:id` - Update post
- [ ] `DELETE /api/blog/:id` - Delete post

### Subscription APIs
- [ ] `GET /api/subscriptions` - List subscriptions
- [ ] `POST /api/subscriptions` - Create subscription
- [ ] `PUT /api/subscriptions/:id` - Update subscription
- [ ] `POST /api/subscriptions/:id/cancel` - Cancel subscription

### Admin APIs
- [ ] `GET /api/admin/dashboard` - Dashboard stats
- [ ] `GET /api/admin/users` - List users
- [ ] `PUT /api/admin/users/:id` - Update user
- [ ] `POST /api/admin/company-of-week` - Set company of week
- [ ] `GET /api/admin/moderation` - Moderation queue
- [ ] `PUT /api/admin/settings` - Update settings

---

## 5. Business Logic Implementation

### Package System
- [ ] Package tier validation
- [ ] Feature access based on package
- [ ] Listing limits enforcement
- [ ] Package upgrade/downgrade logic
- [ ] Subscription expiry handling

### Listing Limits
```
Private User:
- 1 property (rent/sale)
- 1 vehicle
- 0 jobs
- Unlimited community requests

Company (Basic):
- 1 property
- 1 vehicle
- 0 jobs

Company (Business+/Premium/Platinum):
- Based on package + add-ons
```

### Community Requests Logic
- [ ] Any registered user can post
- [ ] Only Business+/Premium/Platinum can respond
- [ ] Manual moderation before publishing responses

### Search & Filtering
- [ ] Full-text search implementation
- [ ] Category filtering
- [ ] Location filtering
- [ ] Price range filtering
- [ ] Sorting (newest, price, rating)
- [ ] Search priority by package tier

---

## 6. File Storage (Supabase Storage)

### Storage Buckets
- [ ] `logos` - Company logos
- [ ] `images` - Listing images
- [ ] `documents` - CVs, floor plans
- [ ] `videos` - Video uploads (if needed)

### Upload Implementation
- [ ] Image upload with resizing
- [ ] File type validation
- [ ] Size limits enforcement
- [ ] Secure URL generation
- [ ] Image optimization

---

## 7. Email Notifications

### Email Templates
- [ ] Welcome email
- [ ] Email verification
- [ ] Password reset
- [ ] New inquiry notification
- [ ] Job application notification
- [ ] Review notification
- [ ] Subscription expiry reminder

### Email Service
- [ ] Setup email provider (Resend, SendGrid, etc.)
- [ ] Email template rendering
- [ ] Email sending queue

---

## 8. Admin Panel

### Dashboard
- [ ] Total companies by package
- [ ] Active listings count
- [ ] New registrations stats
- [ ] Revenue overview
- [ ] Recent activities
- [ ] Pending approvals

### Management Features
- [ ] Companies CRUD
- [ ] Jobs CRUD
- [ ] Properties CRUD
- [ ] Cars CRUD
- [ ] Users management
- [ ] Reviews moderation
- [ ] Blog management
- [ ] Community moderation

### Settings
- [ ] Package pricing configuration
- [ ] Add-on pricing configuration
- [ ] Categories management
- [ ] Locations management
- [ ] Email templates
- [ ] Site settings

---

## 9. Security

### Implementation
- [ ] Input validation (Zod)
- [ ] SQL injection prevention (Supabase handles)
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Secure headers

### GDPR Compliance
- [ ] Cookie consent
- [ ] Data export functionality
- [ ] Data deletion functionality
- [ ] Privacy policy acceptance

---

## 10. Analytics & Tracking

### Implementation
- [ ] Page views tracking
- [ ] Listing views tracking
- [ ] Click tracking (inquiries, applications)
- [ ] Search analytics
- [ ] Conversion tracking

---

## 11. Integrations

### Required
- [ ] Google Maps API (locations)
- [ ] YouTube embed (videos)
- [ ] Payment gateway (Stripe/other)

### Optional (Future)
- [ ] Google Analytics
- [ ] Social media OAuth
- [ ] SMS notifications

---

## Priority Order

### Phase 1 - Core (Must Have)
1. Database setup & schema
2. Authentication system
3. Companies API
4. Jobs API with applications
5. Properties API with inquiries
6. Cars API with inquiries
7. Basic admin panel

### Phase 2 - Features
1. Reviews system
2. Community requests
3. Blog system
4. Email notifications
5. File storage
6. Search improvements

### Phase 3 - Advanced
1. Subscription/Payment system
2. Full admin panel
3. Analytics
4. Advanced features

---

## Notes

- Use Supabase Row Level Security (RLS) for data protection
- Implement proper error handling and logging
- Create database migrations for version control
- Write API documentation (Swagger/OpenAPI)
- Consider caching for frequently accessed data
- Implement proper pagination for all list endpoints

---

## Client Meeting Notes (Jan 24, 2026)

### NEW DATABASE REQUIREMENTS

#### 1. Sub-Categories System
- [ ] Create `sub_categories` table
  ```sql
  - id (UUID)
  - category_id (FK -> categories)
  - name
  - slug
  - is_active
  - created_at
  ```
- [ ] Create `company_sub_categories` junction table
  ```sql
  - company_id (FK -> companies)
  - sub_category_id (FK -> sub_categories)
  ```
- [ ] Companies can select MULTIPLE sub-categories
- [ ] Sub-categories are filtered dynamically (only show if company exists)

#### 2. Users Table Update
- [ ] Add `user_type` field: enum ('user', 'company')
- [ ] Add `can_upgrade_to_company` field (boolean, default: true for users)

### NEW API REQUIREMENTS

#### 3. Registration Flow
- [ ] `POST /api/auth/register` - Accept `user_type` parameter
- [ ] Different validation for User vs Company registration
- [ ] User registration: basic fields only
- [ ] Company registration: includes category + sub-categories selection

#### 4. User to Company Upgrade
- [ ] `POST /api/users/upgrade-to-company` - Upgrade user account to company
- [ ] Creates company profile linked to existing user
- [ ] Updates user role to `company_owner`

#### 5. Sub-Categories APIs
- [ ] `GET /api/categories/:id/sub-categories` - Get sub-categories for a category
- [ ] `GET /api/sub-categories/active` - Get only sub-categories with companies
- [ ] Dynamic filtering: only return sub-categories that have at least 1 company

#### 6. Companies Search Enhancement
- [ ] Update `GET /api/companies` to support sub-category filter
- [ ] Filter by: name, category, location, AND sub-categories

### BUSINESS LOGIC UPDATES

#### 7. User Permissions (Private Users)
```
- Car listing: MAX 1 (FREE)
- Property listing: MAX 1 (FREE)
- Community requests: UNLIMITED (no limit)
- Job posting: NOT ALLOWED (only companies)
- Can upgrade to Company: YES
```

#### 8. Community Requests
- [ ] No limit on quantity for posting requests
- [ ] No monetary limit either
- [ ] Only Business+/Premium/Platinum companies can RESPOND

### DATABASE SCHEMA ADDITIONS

#### Companies Table - Add Field
```sql
- [ ] sub_categories (JSON array of sub_category IDs)
```

#### Categories Table Structure
```sql
- [ ] id (UUID)
- [ ] name (Construction, Health, etc.)
- [ ] slug
- [ ] icon
- [ ] is_active
```

#### Sub-Categories Examples
```
Construction:
- Roofing
- Flooring
- Plumbing
- Electrical
- Painting
- Landscaping

Health & Wellness:
- General Practice
- Dental
- Physiotherapy
- Mental Health
- Pharmacy
```
