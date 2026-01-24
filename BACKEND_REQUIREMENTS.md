# Backend Requirements - Connectiva Platform

## General Rules

### Rule 1 – Access
- Everyone can visit the platform, browse listings, and read content without any restriction
- Only **registered users** and **registered companies** are allowed to post, list, or offer anything (vehicles, jobs, properties, services)

### Rule 2 – Private Individuals (Free / Basic Level)
A registered private individual can:
- Create and manage a personal profile
- List **maximum 1 vehicle** for sale
- List **maximum 1 property** for rent or sale
- Create **1 job-seeker profile** (applying for jobs only, NOT posting jobs)
- Post requests in the Community Request section
- **NO job postings allowed** for private individuals

### Rule 3 – Companies & Packages
The number of listings a company can publish (jobs, vehicles, properties) is defined by the selected package.

| Package | Listing Limits |
|---------|---------------|
| Basic (Free) | Same rights as private profile - Max 1 listing per category |
| Business+ | Higher listing limits (defined by package) |
| Premium | Higher listing limits (defined by package) |
| Platinum | Unlimited or highest limits |

**Upgrade Path:**
If a company wants to list more than 1 job, vehicle, or property, they must either:
- Upgrade to a subscription package, OR
- Purchase a one-time listing package (Add-On)

### Rule 4 – Community Requests
- Only **registered users or companies** can create a Community Request
- Only companies with **Business+, Premium, or Platinum** packages are allowed to respond to Community Requests
- Basic/Free users and private individuals CANNOT respond to community requests

### Rule 5 – Moderation
- All Community Request comments and responses are **manually reviewed** before being published
- Only content that complies with Terms & Conditions will be approved
- This ensures protection against spam, scams, and misuse of the platform

---

## User Types & Permissions Matrix

| Feature | Visitor | Private (Free) | Company (Free) | Business+ | Premium | Platinum |
|---------|---------|----------------|----------------|-----------|---------|----------|
| Browse platform | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Read all content | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Register account | ✓ | - | - | - | - | - |
| Personal profile | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Company profile | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ |
| List 1 vehicle | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| List 1 property | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| List multiple vehicles | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ |
| List multiple properties | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ |
| Job-seeker profile | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Apply for jobs | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Post jobs | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ |
| Post community request | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reply to community request | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ |

---

## Backend Implementation Checklist

### User Authentication & Roles
- [ ] User registration (Private Person / Company)
- [ ] User authentication (Login/Logout)
- [ ] Email verification
- [ ] Password reset
- [ ] Role-based access control:
  - Visitor (not logged in)
  - Private User (Free/Basic)
  - Company (Free/Basic)
  - Company (Business+)
  - Company (Premium)
  - Company (Platinum)
- [ ] Company verification system

### Profile Management
- [ ] Personal profile CRUD
- [ ] Company profile CRUD
- [ ] Job-seeker profile CRUD
- [ ] Profile image upload
- [ ] Profile completeness check

### Package Management
- [ ] Package subscription system
- [ ] Package limits tracking (listings count per category)
- [ ] Package expiry handling
- [ ] Upgrade/Downgrade flow
- [ ] One-time listing package purchase (Add-Ons)

### Listing Management

#### Vehicles
- [ ] Vehicle listing CRUD
- [ ] Limit check: Private users max 1
- [ ] Limit check: Companies based on package
- [ ] Image upload (multiple)
- [ ] Listing status (draft, active, sold, expired)

#### Properties
- [ ] Property listing CRUD
- [ ] Type: Rent or Sale
- [ ] Limit check: Private users max 1
- [ ] Limit check: Companies based on package
- [ ] Image upload (multiple)
- [ ] Listing status management

#### Jobs
- [ ] Job posting CRUD
- [ ] **Private users CANNOT post jobs**
- [ ] Companies need Business+ or higher to post
- [ ] Limit based on package
- [ ] Job application system
- [ ] Application tracking

### Community Module
- [ ] Community request posting (any registered user)
- [ ] Reply permissions (Business+, Premium, Platinum only)
- [ ] **Moderation queue** for all comments/responses
- [ ] Manual approval workflow
- [ ] Spam/scam detection flags
- [ ] Request status management

### Moderation System
- [ ] Content moderation queue
- [ ] Admin review interface
- [ ] Approve/Reject workflow
- [ ] Terms & Conditions compliance check
- [ ] User reporting system
- [ ] Ban/suspend user capability

---

## Package Tiers Reference

| Package | Price | Vehicles | Properties | Job Posts | Community Reply |
|---------|-------|----------|------------|-----------|-----------------|
| Free/Basic (Private) | CHF 0 | 1 | 1 | 0 | ✗ |
| Free/Basic (Company) | CHF 0 | 1 | 1 | 0 | ✗ |
| Business+ | CHF XX/mo | 5 | 5 | 2 | ✓ |
| Premium | CHF XX/mo | 15 | 15 | 5 | ✓ |
| Platinum | CHF XX/mo | Unlimited | Unlimited | Unlimited | ✓ |

### Add-On Packages (One-Time Purchase)
| Category | Options |
|----------|---------|
| Jobs | 1 position, 3 positions, 5 positions |
| Real Estate | 1 listing, 3 listings, 5 listings |
| Vehicles | 5 vehicles, 15 vehicles, 50 vehicles |

---

## API Endpoints Needed

### Auth
- POST /api/auth/register (type: private/company)
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/forgot-password
- POST /api/auth/reset-password
- GET /api/auth/me
- POST /api/auth/verify-email

### Users & Profiles
- GET /api/users/profile
- PUT /api/users/profile
- GET /api/users/package
- POST /api/users/job-seeker-profile
- PUT /api/users/job-seeker-profile

### Companies
- GET /api/companies
- GET /api/companies/:id
- PUT /api/companies/:id
- GET /api/companies/:id/listings

### Vehicles
- GET /api/vehicles
- GET /api/vehicles/:id
- POST /api/vehicles (check: registered user, check limits)
- PUT /api/vehicles/:id
- DELETE /api/vehicles/:id

### Properties
- GET /api/properties
- GET /api/properties/:id
- POST /api/properties (check: registered user, check limits)
- PUT /api/properties/:id
- DELETE /api/properties/:id

### Jobs
- GET /api/jobs
- GET /api/jobs/:id
- POST /api/jobs (check: company only, Business+ or higher)
- PUT /api/jobs/:id
- DELETE /api/jobs/:id
- POST /api/jobs/:id/apply (any registered user)
- GET /api/jobs/:id/applications (company only)

### Community
- GET /api/community
- GET /api/community/:id
- POST /api/community (any registered user)
- POST /api/community/:id/reply (Business+, Premium, Platinum only)
- GET /api/community/:id/replies

### Moderation (Admin)
- GET /api/admin/moderation/queue
- POST /api/admin/moderation/:id/approve
- POST /api/admin/moderation/:id/reject
- GET /api/admin/users
- POST /api/admin/users/:id/ban

---

## Database Schema Suggestions

### Users Table
```sql
id, email, password_hash, name, type (private/company),
email_verified, created_at, updated_at, status (active/banned)
```

### Companies Table
```sql
id, user_id, name, description, logo, address, phone,
website, social_links, verified, created_at
```

### Packages Table
```sql
id, name, price, vehicle_limit, property_limit, job_limit,
can_reply_community, features (JSON), created_at
```

### User_Subscriptions Table
```sql
id, user_id, package_id, start_date, end_date,
status (active/expired/cancelled), created_at
```

### Vehicles Table
```sql
id, user_id, title, make, model, year, price,
description, images (JSON), status, created_at
```

### Properties Table
```sql
id, user_id, title, type (rent/sale), price,
address, description, images (JSON), status, created_at
```

### Jobs Table
```sql
id, company_id, title, description, requirements,
salary_range, location, type (full-time/part-time),
status, created_at
```

### Job_Applications Table
```sql
id, job_id, user_id, resume_url, cover_letter,
status (pending/reviewed/accepted/rejected), applied_at
```

### Job_Seeker_Profiles Table
```sql
id, user_id, headline, summary, experience (JSON),
education (JSON), skills (JSON), resume_url, created_at
```

### Community_Requests Table
```sql
id, user_id, title, description, category,
status (pending/approved/rejected), created_at
```

### Community_Replies Table
```sql
id, request_id, company_id, message,
moderation_status (pending/approved/rejected), created_at
```

### Moderation_Queue Table
```sql
id, content_type (community_reply/listing), content_id,
status (pending/approved/rejected), reviewed_by, reviewed_at
```
