import React from 'react';
import Link from 'next/link';

export default function BrandsSection() {
  const brands = [
    { name: 'VERSACE', href: '/brands' },
    { name: 'ZARA', href: '/brands' },
    { name: 'GUCCI', href: '/brands' },
    { name: 'PRADA', href: '/brands' },
    { name: 'Calvin Klein', href: '/brands' }
  ];
  
  return (
    <section className="bg-black min-h-[80px] sm:min-h-[100px] lg:h-[122px] flex items-center py-6 lg:py-0">
      <div className="mx-auto px-4 sm:px-8 lg:px-[100px] w-full">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <Link 
              key={index} 
              href={brand.href}
              className="text-white font-integral font-bold text-[20px] sm:text-[28px] lg:text-[40px] leading-[24px] sm:leading-[36px] lg:leading-[48px] hover:opacity-80 transition-opacity cursor-pointer"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

