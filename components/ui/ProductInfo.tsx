'use client';

import React, { useState } from 'react';
import Rating from './Rating';
import Button from './Button';

interface Product {
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  description: string;
  colors: { name: string; hex: string; available: boolean }[];
  sizes: string[];
  inStock: boolean;
}

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2); // Default to "Large"
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="flex-1">
      {/* Product Name */}
      <h1 className="font-integral font-bold text-[24px] sm:text-[32px] lg:text-[40px] leading-[28px] sm:leading-[38px] lg:leading-[48px] text-black mb-3 sm:mb-3.5">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-3.5">
        <Rating rating={product.rating} size="lg" />
        <span className="font-satoshi text-sm text-black">
          {product.rating}/5
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 flex-wrap">
        <span className="font-satoshi font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[38px] lg:leading-[43px] text-black">
          ${product.price}
        </span>
        {product.originalPrice && (
          <>
            <span className="font-satoshi font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[38px] lg:leading-[43px] text-black/40 line-through">
              ${product.originalPrice}
            </span>
            {product.discount && (
              <span className="bg-[rgba(255,51,51,0.1)] text-[#FF3333] font-satoshi font-medium text-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
                -{product.discount}%
              </span>
            )}
          </>
        )}
      </div>

      {/* Description */}
      <p className="font-satoshi text-sm sm:text-base leading-[20px] sm:leading-[22px] text-black/60 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-black/10">
        {product.description}
      </p>

      {/* Color Selection */}
      <div className="mb-5 sm:mb-6">
        <p className="font-satoshi text-sm sm:text-base text-black/60 mb-3 sm:mb-4">Select Colors</p>
        <div className="flex gap-3 sm:gap-4">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`w-[32px] h-[32px] sm:w-[37px] sm:h-[37px] rounded-full border-2 transition-all ${
                selectedColor === index
                  ? 'border-black ring-2 ring-offset-2 ring-black'
                  : 'border-transparent'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              disabled={!color.available}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-black/10">
        <p className="font-satoshi text-sm sm:text-base text-black/60 mb-3 sm:mb-4">Choose Size</p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-satoshi text-sm sm:text-base transition-all ${
                selectedSize === index
                  ? 'bg-black text-white'
                  : 'bg-[#F0F0F0] text-black/60 hover:bg-black/5'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
        {/* Quantity Selector */}
        <div className="flex items-center gap-4 sm:gap-5 bg-[#F0F0F0] rounded-full px-4 sm:px-5 py-3 sm:py-4 w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="text-black hover:opacity-70 transition-opacity"
            disabled={quantity <= 1}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
              <path d="M4.16667 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <span className="font-satoshi font-medium text-base min-w-[20px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="text-black hover:opacity-70 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
              <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Add to Cart Button */}
        <Button size="lg" className="flex-1 w-full sm:w-auto">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

