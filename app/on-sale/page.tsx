'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import onSaleProducts from '@/data/onSale.json';

export default function OnSalePage() {
  const [sortBy, setSortBy] = useState('discount-high');

  // Sort products
  let sortedProducts = [...onSaleProducts];
  if (sortBy === 'discount-high') {
    sortedProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
  } else if (sortBy === 'price-low') {
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
          <span className="text-black">On Sale</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="font-integral font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-black mb-2">
              ON SALE
            </h1>
            <p className="font-satoshi text-base text-black/60">
              Showing {sortedProducts.length} products
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-satoshi text-sm text-black/60">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-satoshi font-medium text-sm text-black bg-transparent border border-black/10 rounded-lg px-4 py-2 cursor-pointer focus:outline-none focus:border-black"
            >
              <option value="discount-high">Highest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Sale Banner */}
        <div className="bg-black rounded-[20px] p-8 sm:p-12 mb-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90"></div>
          <div className="relative max-w-2xl">
            <h2 className="font-integral font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight mb-4">
              BIG SALE!
            </h2>
            <p className="font-satoshi text-lg sm:text-xl mb-6">
              Up to 50% off on selected items. Don't miss out on these amazing deals!
            </p>
            <div className="flex gap-4 text-center">
              <div className="bg-white text-black rounded-lg px-4 py-3 border border-white/10">
                <p className="font-integral font-bold text-2xl">23</p>
                <p className="font-satoshi text-xs">DAYS</p>
              </div>
              <div className="bg-white text-black rounded-lg px-4 py-3 border border-white/10">
                <p className="font-integral font-bold text-2xl">18</p>
                <p className="font-satoshi text-xs">HOURS</p>
              </div>
              <div className="bg-white text-black rounded-lg px-4 py-3 border border-white/10">
                <p className="font-integral font-bold text-2xl">42</p>
                <p className="font-satoshi text-xs">MINS</p>
              </div>
              <div className="bg-white text-black rounded-lg px-4 py-3 border border-white/10">
                <p className="font-integral font-bold text-2xl">15</p>
                <p className="font-satoshi text-xs">SECS</p>
              </div>
            </div>
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

