import React from 'react';

interface RatingProps {
  rating: number;
  maxRating?: number;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Rating({ 
  rating, 
  maxRating = 5, 
  showValue = true,
  size = 'md' 
}: RatingProps) {
  const sizes = {
    sm: 'w-[18.49px] h-[18.49px]',
    md: 'w-[22.58px] h-[22.58px]',
    lg: 'w-5 h-5'
  };
  
  const gaps = {
    sm: 'gap-[5.31px]',
    md: 'gap-[6.49px]',
    lg: 'gap-2'
  };
  
  const textSizes = {
    sm: 'text-sm leading-[18.9px]',
    md: 'text-base leading-[21.6px]',
    lg: 'text-base'
  };
  
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-[13px]">
      <div className={`flex ${gaps[size]}`}>
        {[...Array(maxRating)].map((_, index) => {
          if (index < fullStars) {
            return (
              <svg key={index} className={sizes[size]} viewBox="0 0 19 19" fill="none">
                <path d="M9.24494 0.255005L11.8641 6.09786L18.1739 6.89383L13.5324 11.0762L14.8489 17.245L9.24494 14.0821L3.64099 17.245L4.95746 11.0762L0.315979 6.89383L6.62573 6.09786L9.24494 0.255005Z" fill="#FFC633"/>
              </svg>
            );
          } else if (index === fullStars && hasHalfStar) {
            return (
              <svg key={index} className={sizes[size]} viewBox="0 0 19 19" fill="none">
                <defs>
                  <linearGradient id={`half-${index}`}>
                    <stop offset="50%" stopColor="#FFC633" />
                    <stop offset="50%" stopColor="#E5E5E5" />
                  </linearGradient>
                </defs>
                <path fill={`url(#half-${index})`} d="M9.24494 0.255005L11.8641 6.09786L18.1739 6.89383L13.5324 11.0762L14.8489 17.245L9.24494 14.0821L3.64099 17.245L4.95746 11.0762L0.315979 6.89383L6.62573 6.09786L9.24494 0.255005Z" />
              </svg>
            );
          } else {
            return (
              <svg key={index} className={sizes[size]} viewBox="0 0 19 19" fill="none">
                <path d="M9.24494 0.255005L11.8641 6.09786L18.1739 6.89383L13.5324 11.0762L14.8489 17.245L9.24494 14.0821L3.64099 17.245L4.95746 11.0762L0.315979 6.89383L6.62573 6.09786L9.24494 0.255005Z" fill="#E5E5E5"/>
              </svg>
            );
          }
        })}
      </div>
      {showValue && (
        <span className={`${textSizes[size]} font-satoshi font-normal text-black`}>
          {rating}/5
        </span>
      )}
    </div>
  );
}

