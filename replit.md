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
- Modular component architecture with dedicated sections (Navbar, Hero, About, SpeakingTopics, TrustedBy, Gallery, Booking, Blog, Contact, Footer)
- Each major section is a self-contained component with its own animations and state management
- Example components provided for isolated development and testing

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
- Extensible design for adding counseling sessions, bookings, blog posts, etc.

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