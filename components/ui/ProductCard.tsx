'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Rating from './Rating';
import ImageModal from './ImageModal';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews?: number;
}

export default function ProductCard({
  name,
  image,
  price,
  originalPrice,
  discount,
  rating,
  reviews
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const productSlug = name.toLowerCase().replace(/\s+/g, '-');

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: productSlug,
      name,
      image,
      price,
      size: 'M',
      color: 'Default'
    });

    // Show feedback
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <Link href={`/product/${productSlug}`} className="group cursor-pointer max-w-[295px] w-full block">
        <div 
          className="relative bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4 w-full h-[200px] sm:h-[250px] lg:h-[298px]"
        >
          <div 
            className="w-full h-full cursor-zoom-in"
            onClick={handleImageClick}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Add to Cart Button - Appears on Hover */}
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-6 py-3 rounded-full font-satoshi font-medium text-sm flex items-center gap-2 shadow-lg ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
          >
            {isAdded ? (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L17 1H3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M1 5H19M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
        
        <h3 className="font-satoshi font-bold text-base sm:text-lg lg:text-xl leading-[27px] mb-2 text-black group-hover:underline">
          {name}
        </h3>
        
        <div className="mb-2">
          <Rating rating={rating} size="sm" showValue={true} />
        </div>
        
        <div className="flex items-center gap-[10px] flex-wrap">
          <span className="font-satoshi font-bold text-xl sm:text-2xl leading-[32.4px] text-black">
            ${price}
          </span>
          
          {originalPrice && (
            <>
              <span className="font-satoshi font-bold text-xl sm:text-2xl leading-[32.4px] text-[rgba(0,0,0,0.4)] line-through">
                ${originalPrice}
              </span>
              {discount && (
                <div className="px-[14px] py-[6px] bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                  <span className="font-satoshi font-medium text-xs leading-[16.2px] text-[#FF3333]">
                    -{discount}%
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </Link>

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={image}
        imageAlt={name}
      />
    </>
  );
}

