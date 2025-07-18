# ECD.rs Cryptocurrency Exchange Website

## Overview

This project is a modern web application for ECD.rs, Serbia's first licensed cryptocurrency exchange operating since 2012. The application is built as a full-stack solution featuring a React frontend with a Node.js/Express backend, designed to showcase the company's cryptocurrency services, wallet application, and verification processes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite for development and building
- **Backend**: Node.js with Express, TypeScript-based
- **Database**: PostgreSQL with Drizzle ORM (configured but not yet implemented)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component-based design** using React functional components
- **shadcn/ui component library** providing consistent, accessible UI components
- **Responsive design** with mobile-first approach using Tailwind CSS
- **Modern styling** with CSS custom properties for theming support
- **Landing page structure** optimized for cryptocurrency exchange marketing

### Backend Architecture
- **Express.js server** with TypeScript support
- **Modular route structure** prepared for API endpoints
- **Storage abstraction layer** with in-memory implementation (ready for database integration)
- **Development tooling** with hot reloading via Vite integration

### Database Layer
- **Drizzle ORM** configured for PostgreSQL
- **Schema-first approach** with TypeScript type generation
- **Migration support** through Drizzle Kit
- **Prepared for Neon Database** integration

## Data Flow

1. **Client requests** are handled by Vite dev server in development
2. **API routes** (prefixed with `/api`) are processed by Express server
3. **Static assets** are served through Vite's asset pipeline
4. **Database operations** use Drizzle ORM with connection pooling
5. **Client state** is managed through TanStack Query for server data

## External Dependencies

### Core Technologies
- **React 18** with modern hooks and concurrent features
- **TypeScript** for type safety across the stack
- **Vite** for fast development and optimized builds
- **Express.js** for server-side API handling

### UI and Styling
- **Tailwind CSS** for utility-first styling
- **Radix UI** primitives for accessible component foundation
- **Lucide React** for consistent iconography
- **shadcn/ui** for pre-built component patterns

### Database and Backend
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the primary database
- **Neon Database** for serverless PostgreSQL hosting
- **Zod** for runtime schema validation

### Development Tools
- **tsx** for TypeScript execution in development
- **esbuild** for fast production builds
- **PostCSS** with Autoprefixer for CSS processing

## Deployment Strategy

### Development
- **Local development** uses `npm run dev` with hot reloading
- **Type checking** available via `npm run check`
- **Database operations** managed through `npm run db:push`

### Production Build
- **Frontend build** creates optimized static assets in `dist/public`
- **Backend build** bundles server code using esbuild to `dist/index.js`
- **Single command deployment** via `npm run build`

### Hosting Considerations
- **Static frontend** can be served from any CDN or static host
- **API server** requires Node.js runtime environment
- **Database** configured for PostgreSQL with environment-based connection
- **Environment variables** required for database URL and production settings

### Content Strategy
The application is specifically designed for the Serbian cryptocurrency market, featuring:
- **Serbian language content** throughout the interface
- **Local compliance messaging** highlighting NBS regulation
- **Trust indicators** emphasizing 12+ years of operation
- **Mobile-optimized experience** for the ECD Wallet promotion

## Recent Changes (July 17, 2025)

### Brand Color Implementation
- **Updated color scheme** to match ECD Wallet mobile application
- **Primary color changed** from bright blue to ECD navy (hsl(218, 54%, 20%))
- **Accent color changed** to ECD orange (hsl(28, 100%, 50%))
- **Applied brand colors** across all components:
  - Header with navy branding
  - Hero section with orange accent for tagline
  - CTA buttons using orange for primary actions
  - Footer and CTA section in navy background
  - User advantages section with brand color highlights
  - Trust indicators alternating navy/orange numbers

### Design Consistency
- **Maintained accessibility** while implementing brand colors
- **Preserved component structure** with updated color scheme
- **Enhanced visual hierarchy** through strategic color application

### Conversion Optimization Features
- **Registration Incentives Section** with value propositions:
  - 0% commission on first 3 transactions
  - Up to 2% better exchange rates for registered users
  - Maximum security with 2FA and insurance
  - Social proof with user statistics and app rating
- **Price Comparison Table** showing competitive advantages
- **Customer Testimonials** with authentic user reviews
- **Urgency Elements** for limited-time offers
- **Multiple CTA Opportunities** strategically placed throughout site

### Psychology-Based Features for Registration
- **Social Proof**: 65,000+ users, 4.8/5 rating, 13 years experience
- **Value Proposition**: Clear benefits of registration vs. direct transactions
- **Competitive Advantage**: Side-by-side comparison with competitors
- **Trust Building**: Customer testimonials and regulatory compliance
- **Urgency**: Time-limited offers to encourage immediate action