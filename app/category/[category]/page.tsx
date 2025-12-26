'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ui/ProductCard';
import categoryProducts from '@/data/categoryProducts.json';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  
  // State for filters
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([50, 400]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('most-popular');

  // Filter products by category
  const categoryProductsList = categoryProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  // Apply filters
  let filteredProducts = [...categoryProductsList];

  if (selectedSubcategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedSubcategories.includes(product.subcategory)
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Sort products
  if (sortBy === 'most-popular') {
    filteredProducts.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  } else if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Get unique subcategories for this category
  const subcategories = Array.from(
    new Set(categoryProductsList.map((p) => p.subcategory))
  );

  const colors = [
    { name: 'Green', hex: '#00C12B' },
    { name: 'Red', hex: '#F50606' },
    { name: 'Yellow', hex: '#F5DD06' },
    { name: 'Orange', hex: '#F57906' },
    { name: 'Blue', hex: '#06CAF5' },
    { name: 'Navy', hex: '#063AF5' },
    { name: 'Purple', hex: '#7D06F5' },
    { name: 'Pink', hex: '#F506A4' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#000000' },
  ];

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((s) => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24 py-6 sm:py-8 mb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-black/60 mb-6">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <span>›</span>
          <span className="text-black capitalize">{category}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-[295px] border border-black/10 rounded-[20px] p-5 lg:p-6 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-satoshi font-bold text-xl text-black">Filters</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black/40">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="space-y-6">
              {/* Subcategories */}
              <div className="border-b border-black/10 pb-6">
                <h4 className="font-satoshi font-bold text-base text-black mb-4">Categories</h4>
                <div className="space-y-3">
                  {subcategories.map((subcategory) => (
                    <label key={subcategory} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSubcategories.includes(subcategory)}
                        onChange={() => toggleSubcategory(subcategory)}
                        className="w-4 h-4 rounded border-black/20"
                      />
                      <span className="font-satoshi text-base text-black/60 capitalize">
                        {subcategory}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="border-b border-black/10 pb-6">
                <h4 className="font-satoshi font-bold text-base text-black mb-4">Price</h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="50"
                    max="400"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-satoshi font-bold text-sm">${priceRange[0]}</span>
                    <span className="font-satoshi font-bold text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="border-b border-black/10 pb-6">
                <h4 className="font-satoshi font-bold text-base text-black mb-4">Colors</h4>
                <div className="grid grid-cols-5 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${
                        selectedColors.includes(color.name)
                          ? 'border-black ring-2 ring-offset-1 ring-black'
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="border-b border-black/10 pb-6">
                <h4 className="font-satoshi font-bold text-base text-black mb-4">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-4 py-2 rounded-full font-satoshi text-sm transition-all ${
                        selectedSizes.includes(size)
                          ? 'bg-black text-white'
                          : 'bg-[#F0F0F0] text-black/60 hover:bg-black/5'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply Filter Button */}
              <button className="w-full bg-black text-white rounded-full py-3 font-satoshi font-medium text-base hover:bg-black/90 transition-colors">
                Apply Filter
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <h1 className="font-integral font-bold text-[24px] sm:text-[32px] text-black capitalize">
                {category}
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="font-satoshi text-sm text-black/60">
                  Showing {filteredProducts.length} of {categoryProductsList.length} Products
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-satoshi text-sm text-black/60">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="font-satoshi font-medium text-sm text-black bg-transparent border-none cursor-pointer"
                  >
                    <option value="most-popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 justify-items-center mb-12">
              {filteredProducts.map((product) => (
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

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8 mb-12">
              <button className="p-2 hover:bg-black/5 rounded-lg transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-lg font-satoshi text-sm transition-colors ${
                    page === 1
                      ? 'bg-black text-white'
                      : 'text-black/60 hover:bg-black/5'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 hover:bg-black/5 rounded-lg transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

