'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import newArrivals from '@/data/newArrivals.json';

export default function NewArrivalsPage() {
  const [sortBy, setSortBy] = useState('newest');

  // Sort products  
  let sortedProducts = [...newArrivals];
  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24 pb-32">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-black/60 mb-6">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>›</span>
          <span className="text-black">New Arrivals</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="font-integral font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-black mb-2">
              NEW ARRIVALS
            </h1>
            <p className="font-satoshi text-base text-black/60">
              Fresh styles just landed • {sortedProducts.length} products
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-satoshi text-sm text-black/60">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-satoshi font-medium text-sm text-black bg-transparent border border-black/10 rounded-lg px-4 py-2 cursor-pointer focus:outline-none focus:border-black"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-[#F0F0F0] rounded-[20px] p-8 sm:p-12 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block bg-black text-white px-4 py-2 rounded-full font-satoshi font-medium text-sm mb-4">
              NEW COLLECTION
            </span>
            <h2 className="font-integral font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-black mb-4">
              DISCOVER THE LATEST TRENDS
            </h2>
            <p className="font-satoshi text-lg text-black/60">
              Be the first to explore our newest collection of handpicked styles
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 justify-items-center mb-20">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

