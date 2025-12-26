'use client';

import React, { useState } from 'react';
import Rating from './Rating';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

interface ReviewsSectionProps {
  reviews: Review[];
  totalReviews: number;
}

export default function ReviewsSection({ reviews, totalReviews }: ReviewsSectionProps) {
  const [sortBy, setSortBy] = useState('latest');

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-satoshi font-bold text-2xl text-black">
          All Reviews <span className="text-black/60">({totalReviews})</span>
        </h3>
        
        <div className="flex items-center gap-3">
          {/* Filter Button */}
          <button className="p-3 bg-[#F0F0F0] rounded-full hover:bg-black/5 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.5 5.83333H17.5M5.83333 10H14.1667M8.33333 14.1667H11.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-5 py-3 bg-[#F0F0F0] rounded-full font-satoshi text-base text-black border-none outline-none cursor-pointer"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>

          {/* Write Review Button */}
          <button className="px-6 py-3 bg-black text-white rounded-full font-satoshi font-medium text-base hover:bg-black/90 transition-colors">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-9">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-black/10 rounded-[20px] p-7 relative"
          >
            {/* Stars */}
            <Rating rating={review.rating} size="md" showValue={false} />

            {/* Name and Verified Badge */}
            <div className="flex items-center gap-1 mt-4 mb-3">
              <h4 className="font-satoshi font-bold text-xl text-black">
                {review.name}
              </h4>
              {review.verified && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#01AB31"/>
                  <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>

            {/* Review Text */}
            <p className="font-satoshi text-base leading-[22px] text-black/60 mb-6">
              &quot;{review.text}&quot;
            </p>

            {/* Posted Date */}
            <p className="font-satoshi font-medium text-base text-black/60">
              Posted on {review.date}
            </p>

            {/* More Options */}
            <button className="absolute top-7 right-7 text-black/60 hover:text-black">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="4" r="1.5" fill="currentColor"/>
                <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center">
        <button className="px-14 py-4 border border-black/10 rounded-full font-satoshi font-medium text-base text-black hover:bg-black/5 transition-colors">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}

