import React from 'react';
import Image from 'next/image';
import Rating from './Rating';

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
  return (
    <div className="group cursor-pointer w-[295px]">
      <div className="relative bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4 w-[295px] h-[298px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <h3 className="font-satoshi font-bold text-xl leading-[27px] mb-2 text-black">
        {name}
      </h3>
      
      <div className="mb-2">
        <Rating rating={rating} size="sm" showValue={true} />
      </div>
      
      <div className="flex items-center gap-[10px]">
        <span className="font-satoshi font-bold text-2xl leading-[32.4px] text-black">
          ${price}
        </span>
        
        {originalPrice && (
          <>
            <span className="font-satoshi font-bold text-2xl leading-[32.4px] text-[rgba(0,0,0,0.4)] line-through">
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
    </div>
  );
}

