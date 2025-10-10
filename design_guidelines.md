# Design Guidelines: Asian Counselling Center - Dr. Ashok Jetawat

## Design Approach
**Reference-Based Approach**: Drawing inspiration from leadcrestconsulting.com's polished UI/UX, adapted for a dynamic, high-energy motivational speaker brand. Modern corporate consulting aesthetic with energetic, inspiring visual language.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- **Energy Red/Orange**: `#E63946` or `12 86% 60%` - For CTAs, headlines, accents (passion, action, motivation)
- **Deep Charcoal**: `#2B2D42` or `235 20% 21%` - For text, dark sections (professional, authoritative)
- **Clean Off-White**: `#F8F9FA` or `210 17% 98%` - For backgrounds (modern, breathable)

**Supporting Colors:**
- Subtle gradients with primary colors for depth
- Semi-transparent overlays for glassmorphism effects
- White for contrast on dark sections

### B. Typography
**Font Families** (via Google Fonts CDN):
- **Headings**: "Oswald" or "Anton" - Bold, impactful, attention-grabbing
- **Body Text**: "Montserrat" - Clean, professional, highly readable
- **Accents**: Montserrat SemiBold/Bold for sub-headings

**Hierarchy**:
- Hero Headlines: text-5xl to text-7xl, font-bold
- Section Titles: text-3xl to text-5xl, font-bold
- Body: text-base to text-lg, font-normal
- CTAs: text-lg, font-semibold

### C. Layout System
**Spacing Units**: Tailwind spacing of 4, 8, 12, 16, 20, 24, 32 (p-4, p-8, py-12, py-16, py-20, py-24, py-32)

**Container Strategy**:
- Full-width sections: `w-full` with inner `max-w-7xl mx-auto px-4`
- Content sections: `max-w-6xl mx-auto`
- Text content: `max-w-4xl` for optimal readability

**Vertical Rhythm**: py-20 to py-32 for desktop sections, py-12 to py-16 for mobile

### D. Component Library

**Navigation**:
- Sticky navbar with glassmorphism (backdrop-blur-lg, bg-white/80)
- Logo left, nav links center, prominent CTA button right
- Smooth scroll behavior with active state indicators

**Hero Section**:
- Full-width, high-impact layout with stage photo background
- Dark overlay for text readability
- Headline + subheadline + 3 stat cards in grid layout
- Large, prominent CTA button

**Service Cards**:
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Glassmorphism effect with hover elevation
- Icon + Title + Description structure
- Smooth hover transitions with scale and shadow effects

**Client Logos**:
- Marquee-style infinite scroll or grid display
- Grayscale logos with color on hover
- Separated sections for Schools, Corporates, Universities

**Media Gallery**:
- Masonry grid for photos (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Lightbox effect on image click
- Embedded YouTube videos in responsive iframe containers

**Forms**:
- Clean, modern input fields with floating labels
- Validation states (success/error colors)
- Large, prominent submit button
- Success message overlay after submission

**Footer**:
- Multi-column layout (grid-cols-1 md:grid-cols-3 lg:grid-cols-4)
- Quick links, contact info, social media icons
- Copyright and branding at bottom

### E. Visual Effects & Animations

**Glassmorphism**: 
- `backdrop-blur-lg bg-white/10 border border-white/20`
- Used for navbar, cards, overlays

**Shadows**:
- Soft: `shadow-lg` for cards
- Dramatic: `shadow-2xl` for floating elements
- Hover states: `hover:shadow-3xl transition-shadow`

**Animations** (Minimal, purposeful):
- Scroll-triggered fade-in: opacity-0 to opacity-100
- Slide-in from bottom: `translate-y-8 to translate-y-0`
- Smooth transitions: `transition-all duration-300 ease-in-out`
- Hover scale: `hover:scale-105 transform`

**NO** distracting background animations, parallax, or excessive motion

### F. Responsiveness
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Stack columns on mobile, expand to grids on desktop
- Adjust font sizes and spacing for each breakpoint

## Page Structure & Content

### 1. Navbar
Sticky, glassmorphism effect, semi-transparent with blur
- Left: Asian Counselling Center logo
- Center: About | Speaking Topics | Gallery | Blog | Contact
- Right: "Book Me to Speak" CTA button (bg-red-600, white text)

### 2. Hero Section
**Large hero image**: Stage photo of Dr. Jetawat speaking (dramatic, energetic)
- Dark gradient overlay for text contrast
- **Headline**: "Igniting Potential. Inspiring Action."
- **Subheadline**: "Dr. Ashok Jetawat, one of Asia's leading motivational speakers..."
- **3 Stat Cards**: 20+ Years | 1M+ Lives | 500+ Corporates (glassmorphism design)

### 3. About Me Section
- Two-column layout: Professional headshot left, bio content right
- Synthesized bio highlighting: PhD, M.Tech, MBA credentials, Rashtriya Ratna Award, ISTD fellowship
- Mission statement and unique philosophy on motivation
- "Learn More" CTA button

### 4. Speaking Topics & Programs
Grid of service cards (2-3 columns):
- Leadership Development
- Sales Motivation & Performance
- Student Success & Academic Excellence
- Stress Management & Resilience
- Mind Management & Focus
- Productivity & Work Commitment
- Soft Skills & Personality Development

Each card: Icon + Title + Brief description + Hover effect

### 5. Trusted By - Client Logos
**Three subsections**:
- Schools: Indo-American, Guru Nanak, Central Academy, etc.
- Corporates: Fusion, Wolkem, Patrika, Oriental Insurance
- Universities/Institutions

Grayscale logos, color on hover, grid or marquee layout

### 6. Media Gallery
**Title**: "Dr. Jetawat in Action"
- Masonry image grid with action photos from events
- 2-3 embedded YouTube videos (testimonials, speaking clips)
- Lightbox for image viewing

### 7. Booking & Payment Section
**Title**: "Bring Dr. Jetawat to Your Next Event"
- Compelling copy about event impact
- Large "Inquire Now" button (smooth scroll to contact)
- Separate "Pay Booking Retainer" button (triggers Razorpay modal)
- No fixed pricing displayed

### 8. Testimonials (Placeholder)
Quote cards with student/corporate testimonial placeholders
2-3 column grid with author info

### 9. Blog (Placeholder)
Featured blog post cards (3 columns)
Image + Title + Excerpt + "Read More" link

### 10. Contact Section
Two-column layout:
- Left: Contact form (Name, Email, Phone, Message fields)
- Right: Contact details (email, phone, office hours)
- Success message on submission
- Razorpay integration for retainer payment

### 11. Footer
Comprehensive footer with:
- Asian Counselling Center branding
- Quick navigation links
- Social media icons (Instagram, LinkedIn, YouTube, Facebook) - prominent, colorful
- Copyright and "Powered by" attribution

## Images
- **Hero**: Large, dramatic image of Dr. Jetawat on stage speaking (audience visible, energy captured)
- **About**: Professional headshot of Dr. Jetawat (corporate, approachable)
- **Gallery**: 8-12 action photos from various events, awards, speaking engagements
- **Client Logos**: PNG logos from both websites
- **Service Cards**: Optional icons (use Heroicons)

## SEO & Metadata
- **Title**: "Dr. Ashok Jetawat | Asian Counselling Center | Motivational Speaker"
- **Description**: "Dr. Ashok Jetawat, leading motivational speaker in Asia, offers inspiring talks and counseling for corporates, schools, and colleges through Asian Counselling Center."
- **Keywords**: motivational speaker, Dr. Ashok Jetawat, corporate trainer, Asian Counselling Center, keynote speaker

## Technical Notes
- Smooth scroll behavior for all anchor links
- Razorpay modal integration for "Pay Retainer" button
- Form validation with real-time feedback
- Lazy loading for images
- Mobile menu hamburger with slide-in navigation