# Plott Labs Website

A modern, enterprise-grade website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components. This website showcases Plott Labs' incident response platform including CAD, Map, Mobile, and Analytics solutions.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Enterprise Design**: Clean, professional design inspired by modern SaaS platforms
- **Responsive**: Fully responsive design optimized for all device sizes
- **Component Library**: Built with shadcn/ui for consistent, accessible components
- **SEO Optimized**: Proper meta tags and structured content
- **Performance**: Optimized for Core Web Vitals and fast loading times

## Pages Structure

- **Homepage** (`/`) - Hero section, value propositions, platform overview
- **Solutions** (`/solutions`) - Overview of all four core tools
  - **OneNet Suite** (`/onenetsuite`) - OneNet Suite Incident Response Cloud
  - **CAD** (`/solutions/cad`) - Computer-Aided Dispatch details
  - **Map** (`/solutions/map`) - Mapping application features
  - **Mobile** (`/solutions/mobile`) - Mobile app capabilities
  - **Analytics** (`/solutions/analytics`) - Reporting and analytics
- **About** (`/about`) - Company mission, values, and story
- **Pricing** (`/pricing`) - Flexible SaaS pricing tiers
- **Contact** (`/contact`) - Demo request form and contact information
- **Industries** (`/industries`) - Target industries and use cases
- **Case Studies** (`/case-studies`) - Success stories and testimonials
- **Resources** (`/resources`) - Blog posts, whitepapers, and videos

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd plott-labs-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── about/          # About page
│   ├── contact/        # Contact/demo page
│   ├── pricing/        # Pricing page
│   ├── solutions/      # Solutions pages
│   └── ...
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── layout/        # Layout components
│   ├── sections/      # Page sections
│   └── forms/         # Form components
├── lib/               # Utility functions
├── types/             # TypeScript type definitions
├── data/              # Static data
└── hooks/             # Custom React hooks
```

### Styling

This project uses Tailwind CSS for styling with a custom design system based on the shadcn/ui color palette. The design follows modern enterprise SaaS aesthetics with:

- Gradient text treatments
- Glass morphism effects
- Consistent spacing and typography
- Accessible color contrasts
- Responsive breakpoints

### Components

The project uses shadcn/ui components for consistency and accessibility:

- **Button** - Various button styles and sizes
- **Card** - Content containers with headers and footers
- **Input** - Form input fields
- **Navigation** - Mobile-responsive navbar

## Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=your-contact@email.com
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by Plott Labs.

## Support

For technical support or questions about this website, please contact the development team.
# plottlabs
