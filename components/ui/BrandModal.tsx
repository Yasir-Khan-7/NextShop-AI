'use client';

import React from 'react';
import Image from 'next/image';

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: {
    name: string;
    description: string;
    products: number;
    logo: string;
  } | null;
}

export default function BrandModal({ isOpen, onClose, brand }: BrandModalProps) {
  if (!isOpen || !brand) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[20px] max-w-2xl w-full p-8 sm:p-12 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Brand Logo */}
        <div className="flex items-center justify-center w-24 h-24 bg-black text-white rounded-full font-integral font-bold text-4xl mb-6 mx-auto">
          {brand.logo}
        </div>

        {/* Brand Name */}
        <h2 className="font-integral font-bold text-[28px] sm:text-[36px] text-black text-center mb-4">
          {brand.name}
        </h2>

        {/* Brand Description */}
        <p className="font-satoshi text-lg text-black/60 text-center mb-6">
          {brand.description}
        </p>

        {/* Products Count */}
        <div className="bg-[#F0F0F0] rounded-[20px] p-6 mb-6">
          <div className="text-center">
            <p className="font-integral font-bold text-4xl text-black mb-2">
              {brand.products}
            </p>
            <p className="font-satoshi text-base text-black/60">
              Products Available
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="font-satoshi font-bold text-black">Authentic Products</p>
              <p className="font-satoshi text-sm text-black/60">100% genuine items guaranteed</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="font-satoshi font-bold text-black">Free Shipping</p>
              <p className="font-satoshi text-sm text-black/60">On orders over $100</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
              <path
                d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="font-satoshi font-bold text-black">Easy Returns</p>
              <p className="font-satoshi text-sm text-black/60">30-day return policy</p>
            </div>
          </div>
        </div>

        {/* Shop Button */}
        <button className="w-full bg-black text-white rounded-full py-4 font-satoshi font-medium text-base hover:bg-black/90 transition-colors">
          Shop {brand.name}
        </button>
      </div>
    </div>
  );
}

