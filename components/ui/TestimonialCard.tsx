import React from 'react';
import Rating from './Rating';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  verified?: boolean;
}

export default function TestimonialCard({
  name,
  rating,
  text,
  verified
}: TestimonialCardProps) {
  return (
    <div className="border border-black/10 rounded-[20px] w-[400px] h-[240px] px-8 py-7 flex flex-col">
      <div className="mb-[15px]">
        <Rating rating={rating} showValue={false} size="md" />
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <h4 className="font-satoshi font-bold text-[20px] leading-[22px] text-black">
            {name}
          </h4>
          {verified && (
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#01AB31"/>
              <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        
        <p className="font-satoshi font-normal text-base leading-[22px] text-black/60">
          {text}
        </p>
      </div>
    </div>
  );
}

