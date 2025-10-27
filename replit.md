# Asian Counselling Center - Dr. Ashok Jetawat Website

## Overview

This is a modern, single-page website for Dr. Ashok Jetawat and the Asian Counselling Center, designed to showcase his expertise as a motivational speaker and counselor. The site features a dynamic, high-energy design inspired by modern corporate consulting aesthetics, with smooth scrolling sections, engaging animations, and clear calls-to-action to convert visitors into leads.

The application serves as a professional portfolio and booking platform for speaking engagements, corporate training, and educational seminars across schools, colleges, and corporate organizations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Framework**: React 18 with TypeScript, built using Vite for fast development and optimized production builds.

**Routing**: Wouter for lightweight client-side routing (single-page application with fallback to 404 page).

**Component Structure**: 
- Modular component architecture with dedicated sections (Navbar, Hero, About, SpeakingTopics, TrustedBy, Gallery, Pricing, Booking, Blog, Contact, Footer)
- Each major section is a self-contained component with its own animations and state management
- Example components provided for isolated development and testing
- Pricing section: Interactive tab-based component for Mentoria partnership with 4 student categories and dynamic pricing cards

**UI Library**: Shadcn/ui components built on Radix UI primitives, providing:
- Comprehensive set of accessible, customizable components
- Consistent design system using CSS variables for theming
- Pre-built components for forms, dialogs, cards, buttons, and more

**Styling System**:
- Tailwind CSS for utility-first styling
- Custom design tokens defined in CSS variables (colors, spacing, typography)
- Responsive design with mobile-first approach
- Custom color palette: Primary accent (Energy Red/Orange #E63946), Deep Charcoal (#2B2D42), Clean Off-White (#F8F9FA)
- Typography: Google Fonts (Oswald/Anton for headings, Montserrat for body text)

**Animation & Interactions**:
- Framer Motion for smooth, performant animations
- Scroll-triggered animations using `useInView` hook
- Parallax effects and micro-interactions throughout
- Glassmorphism and modern UI effects (backdrop-blur, gradients, soft shadows)

**State Management**: 
- React Query (@tanstack/react-query) for server state and API interactions
- React Hook Form with Zod resolvers for form validation
- Local component state using React hooks

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js

**Build & Development**:
- Vite for frontend development with HMR (Hot Module Replacement)
- TSX for running TypeScript in development
- ESBuild for production server bundling
- Separate development and production modes

**Middleware Setup**:
- JSON and URL-encoded body parsing
- Request logging with duration tracking
- Error handling middleware with status codes
- CORS and security considerations handled by Vite proxy in development

**Routing Structure**:
- API routes prefixed with `/api`
- Centralized route registration in `server/routes.ts`
- HTTP server creation with support for WebSocket upgrades

**Storage Interface**: 
- Abstract storage interface (`IStorage`) for CRUD operations
- In-memory implementation (`MemStorage`) for development
- Designed to be easily swapped with database implementation
- User entity schema defined with validation

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL

**Database Configuration**:
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Schema-first approach with TypeScript types
- Migration system using drizzle-kit
- Database URL from environment variables

**Schema Design**:
- User table with UUID primary keys, unique usernames, and password fields
- Zod schemas for runtime validation
- Type inference for compile-time type safety
- Integration with connect-pg-simple for session storage

**Current Schema**:
- Users table: id (UUID), username (unique), password
- Leads table: id (UUID), fullName, phoneNumber, background (student/working-professional/etc), createdAt
- Bookings table: id (UUID), fullName, email, phoneNumber, organizationType, organizationName, eventDate, amount, razorpayOrderId, razorpayPaymentId, paymentStatus, createdAt

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives (@radix-ui/*) for accessible component foundations
- Embla Carousel for image galleries
- Lucide React for consistent iconography
- Framer Motion for animations

**Form Management**:
- React Hook Form for form state management
- @hookform/resolvers for validation integration
- Zod for schema validation

**Development Tools**:
- Replit-specific plugins (runtime error modal, cartographer, dev banner)
- Vite plugins for enhanced DX in Replit environment

**Data Fetching**:
- @tanstack/react-query for server state management
- Built-in fetch API with custom error handling

**Session Management**:
- Express session with PostgreSQL store (connect-pg-simple)
- Secure session handling with database persistence

**Styling Utilities**:
- class-variance-authority for variant-based component styling
- clsx and tailwind-merge for conditional class composition
- PostCSS with Tailwind and Autoprefixer

**Date Handling**: date-fns for date manipulation and formatting

**Command Palette**: cmdk for keyboard-driven navigation (if implemented)

**Assets**: Images stored in `attached_assets` directory, referenced via Vite alias (@assets)

### Payment Integration

**Razorpay**: Integrated for booking retainer payments with full security implementation

**Payment Flow**:
1. Frontend creates booking via POST /api/bookings
2. Backend generates Razorpay order and stores order ID with booking
3. Frontend opens Razorpay checkout modal
4. On payment success, frontend sends payment details to backend
5. Backend verifies payment signature using HMAC SHA256
6. Backend validates order ID matches booking's stored order ID
7. Only after complete verification, booking status updated to "completed"

**Security Features**:
- HMAC-SHA256 signature verification for all payments
- Order-to-booking correlation prevents payment spoofing
- Numeric amount validation prevents invalid payment amounts
- Server-side secret key management (RAZORPAY_KEY_SECRET)
- Client-side public key (VITE_RAZORPAY_KEY_ID) for checkout UI
- Comprehensive error handling with secure logging

**API Endpoints**:
- POST /api/leads - Save lead from "Book a Free Call" modal
- GET /api/leads - Retrieve all leads (admin)
- POST /api/bookings - Create booking and Razorpay order
- GET /api/bookings/:id - Get booking details
- PATCH /api/bookings/:id/payment - Verify and complete payment
- GET /api/bookings - Retrieve all bookings (admin)

## Recent Changes

**October 27, 2025**:
- Updated Gallery section ("Dr. Jetawat in Action") with 5 authentic images of Dr. Jetawat's speaking engagements
- Added 2 featured videos in Gallery section: Dr. Jetawat's featured video and student testimonial
- Added Pricing navigation link to navbar (positioned between Gallery and Blog)
- Added Mentoria partnership acknowledgment to footer: "In partnership with Mentoria for enhanced career guidance services."
- Premium pricing cards enhanced with "RECOMMENDED" badge, thicker borders, enhanced shadows, and subtle ring glow
- Gallery now showcases real photos: corporate training, school assemblies, outdoor gatherings, and seminar presentations
- Added "Active member of:" section in About component displaying 7 professional organization memberships with authentic logos (CSI, UCCI, INDIA, ISTD, IIIE, IIMM, JSG) and hover animations

**October 10, 2025**:
- Implemented complete backend functionality with PostgreSQL schema for leads and bookings
- Created secure Razorpay payment integration with HMAC-SHA256 signature verification
- Added order-to-booking correlation to prevent payment spoofing attacks
- Built FreeCallModal for lead capture with backend integration
- Created PaymentModal for booking retainer payments (₹10,000 default)
- Added comprehensive error handling and validation throughout
- All security implementations architect-approved
- E2E tests passing for lead capture and payment modal workflows
- Built interactive Pricing section for Mentoria partnership with 4 student categories (8-9 Students, 10-12 Students, College Graduates, Working Professionals)
- Implemented tab-based navigation with dynamic pricing cards (Standard and Premium tiers)
- Added visual feature lists with checkmarks for included features and crosses for excluded features
- Full responsive design with smooth animations using Framer Motion
- Complete data-testid coverage for automated testing