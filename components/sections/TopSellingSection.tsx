import React from 'react';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import topSelling from '@/data/topSelling.json';

export default function TopSellingSection() {
  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 border-t border-[rgba(0,0,0,0.1)]">
      <div className="mx-auto px-4 sm:px-8 lg:px-[100px]">
        <SectionTitle>Top Selling</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 mb-6 sm:mb-9 justify-items-center">
          {topSelling.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" size="md">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}

