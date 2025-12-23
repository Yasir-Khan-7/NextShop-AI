import React from 'react';

export default function BrandsSection() {
  const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];
  
  return (
    <section className="bg-black h-[122px] flex items-center">
      <div className="mx-auto px-[100px] w-full">
        <div className="flex items-center justify-between">
          {brands.map((brand, index) => (
            <div key={index} className="text-white font-integral font-bold text-[32px] lg:text-[40px] leading-[48px]">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

