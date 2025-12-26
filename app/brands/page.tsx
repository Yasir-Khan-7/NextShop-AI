'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BrandModal from '@/components/ui/BrandModal';

export default function BrandsPage() {
  const brands = [
    {
      name: 'VERSACE',
      description: 'Luxury Italian fashion house known for bold designs and vibrant prints',
      products: 124,
      logo: 'V',
    },
    {
      name: 'ZARA',
      description: 'Spanish fast-fashion brand offering trendy and affordable clothing',
      products: 298,
      logo: 'Z',
    },
    {
      name: 'GUCCI',
      description: 'Iconic Italian luxury brand recognized worldwide for premium quality',
      products: 87,
      logo: 'G',
    },
    {
      name: 'PRADA',
      description: 'Prestigious Italian fashion label synonymous with sophistication',
      products: 156,
      logo: 'P',
    },
    {
      name: 'Calvin Klein',
      description: 'American fashion brand known for minimalist and modern designs',
      products: 203,
      logo: 'CK',
    },
    {
      name: 'DIOR',
      description: 'French luxury goods company offering haute couture and ready-to-wear',
      products: 94,
      logo: 'D',
    },
    {
      name: 'BURBERRY',
      description: 'British luxury brand famous for trench coats and check pattern',
      products: 145,
      logo: 'B',
    },
    {
      name: 'ARMANI',
      description: 'Italian luxury fashion house specializing in elegant menswear',
      products: 178,
      logo: 'A',
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBrandClick = (brand: typeof brands[0]) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBrand(null), 300);
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24 pb-32">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-black/60 mb-6">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>›</span>
          <span className="text-black">Brands</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-integral font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-black mb-4">
            SHOP BY BRANDS
          </h1>
          <p className="font-satoshi text-lg text-black/60 max-w-2xl">
            Discover your favorite fashion brands all in one place. From luxury labels to everyday essentials.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {brands.map((brand) => (
            <button
              key={brand.name}
              onClick={() => handleBrandClick(brand)}
              className="group border border-black/10 rounded-[20px] p-6 hover:border-black hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-black text-white rounded-full font-integral font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                {brand.logo}
              </div>
              <h3 className="font-integral font-bold text-xl text-black mb-2">
                {brand.name}
              </h3>
              <p className="font-satoshi text-sm text-black/60 mb-4 line-clamp-2">
                {brand.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-satoshi text-sm text-black/60">
                  {brand.products} Products
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Featured Section */}
        <div className="bg-black rounded-[20px] p-8 sm:p-12 text-white text-center mb-20">
          <h2 className="font-integral font-bold text-[24px] sm:text-[32px] lg:text-[36px] mb-4">
            CAN'T FIND YOUR FAVORITE BRAND?
          </h2>
          <p className="font-satoshi text-lg mb-6 max-w-2xl mx-auto">
            We're constantly adding new brands. Subscribe to our newsletter to stay updated on the latest additions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-black rounded-full px-6 py-3 font-satoshi focus:outline-none"
            />
            <button className="bg-white text-black rounded-full px-8 py-3 font-satoshi font-medium hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Brand Modal */}
      <BrandModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        brand={selectedBrand}
      />
    </div>
  );
}

