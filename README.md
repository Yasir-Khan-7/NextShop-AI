# NextShop-AI - E-commerce Website

A modern, fully responsive e-commerce website built with Next.js 15, TypeScript, and Tailwind CSS. This is an exact replica of the SHOP.CO design.

## Features

- ✨ Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 15 App Router
- 🎨 Styled with Tailwind CSS
- 📦 TypeScript for type safety
- 🔄 Reusable component architecture
- 📊 Mock data stored in JSON files

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header & Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── BrandsSection.tsx
│   │   ├── NewArrivalsSection.tsx
│   │   ├── TopSellingSection.tsx
│   │   ├── DressStyleSection.tsx
│   │   └── TestimonialsSection.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Rating.tsx
│       ├── ProductCard.tsx
│       ├── TestimonialCard.tsx
│       └── SectionTitle.tsx
├── data/                  # Mock data (JSON files)
│   ├── newArrivals.json
│   ├── topSelling.json
│   ├── testimonials.json
│   ├── brands.json
│   └── dressStyles.json
└── public/                # Static assets
    ├── images/
    └── fonts/
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Components

### Reusable UI Components

- **Button**: Customizable button with variants (primary, secondary, outline) and sizes
- **Rating**: Star rating display with half-star support
- **ProductCard**: Product display card with image, name, price, and rating
- **TestimonialCard**: Customer testimonial card with verification badge
- **SectionTitle**: Consistent section heading component

### Page Sections

- **HeroSection**: Main banner with headline, CTA, and stats
- **BrandsSection**: Showcase of partner brands
- **NewArrivalsSection**: Latest product arrivals
- **TopSellingSection**: Best-selling products
- **DressStyleSection**: Browse by dress style categories
- **TestimonialsSection**: Customer reviews carousel

## Design System

### Colors
- Primary: `#000000` (Black)
- Background: `#FFFFFF` (White)
- Secondary Background: `#F0F0F0` (Light Gray)
- Text Primary: `#000000`
- Text Secondary: `rgba(0, 0, 0, 0.6)`
- Accent: `#FF3333` (Red for discounts)
- Rating: `#FFC633` (Yellow)

### Typography
- **Integral CF**: Headings and brand name (Bold, 700)
- **Satoshi**: Body text and UI elements (Regular 400, Medium 500, Bold 700)

### Border Radius
- Buttons: `62px` (fully rounded)
- Cards: `20px`
- Sections: `40px`

## Mock Data

All product and content data is stored in JSON files in the `/data` directory:
- Product listings (New Arrivals & Top Selling)
- Customer testimonials
- Brand information
- Dress style categories

## Adding Images

To complete the design, add the following images to the `public/images/` directory:

### Products
- `/images/products/tshirt-tape.png`
- `/images/products/jeans-skinny.png`
- `/images/products/shirt-checkered.png`
- `/images/products/tshirt-striped.png`
- `/images/products/shirt-vertical.png`
- `/images/products/tshirt-courage.png`
- `/images/products/shorts-bermuda.png`
- `/images/products/jeans-faded.png`

### Styles
- `/images/styles/casual.png`
- `/images/styles/formal.png`
- `/images/styles/party.png`
- `/images/styles/gym.png`

### Brands
- `/images/brands/versace.svg`
- `/images/brands/zara.svg`
- `/images/brands/gucci.svg`
- `/images/brands/prada.svg`
- `/images/brands/calvin-klein.svg`

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Best Practices Implemented

- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Responsive design (mobile-first)
- ✅ Reusable components
- ✅ Clean code structure
- ✅ Semantic HTML
- ✅ Accessibility considerations
- ✅ Performance optimizations (Next.js Image component)
- ✅ SEO-friendly metadata

## License

This project is for educational purposes.

