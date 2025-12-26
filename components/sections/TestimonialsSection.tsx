'use client';

import React, { useState } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import testimonials from '@/data/testimonials.json';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Title and Navigation - With Container */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-10">
          <h2 className="font-integral font-bold text-[24px] sm:text-[36px] lg:text-[48px] leading-[28px] sm:leading-[43px] lg:leading-[57.6px] text-black">
            OUR HAPPY CUSTOMERS
          </h2>
          
          <div className="flex gap-2 sm:gap-3 lg:gap-4">
            <button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - 1}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Testimonials Carousel - Full Width on Desktop, Contained on Mobile */}
      <div className="relative overflow-hidden w-full">
        {/* Mobile: Show one card at a time */}
        <div className="block lg:hidden">
          <div className="px-4 sm:px-8">
            <TestimonialCard
              name={testimonials[currentIndex].name}
              rating={testimonials[currentIndex].rating}
              text={testimonials[currentIndex].text}
              verified={testimonials[currentIndex].verified}
            />
          </div>
        </div>

        {/* Desktop: Show carousel with multiple cards */}
        <div className="hidden lg:block">
          <div 
            className="flex gap-5 transition-transform duration-500 ease-in-out pl-[100px]"
            style={{
              transform: `translateX(-${currentIndex * 420}px)` // 400px card + 20px gap
            }}
          >
            {testimonials.map((testimonial, index) => {
              // Middle 3 cards are fully visible (currentIndex, currentIndex+1, currentIndex+2)
              const isInVisibleRange = index >= currentIndex && index <= currentIndex + 2;
              const shouldBlur = !isInVisibleRange;
              
              return (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 transition-all duration-500 ${
                    shouldBlur ? 'blur-[4px]' : 'blur-0'
                  }`}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    rating={testimonial.rating}
                    text={testimonial.text}
                    verified={testimonial.verified}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

