import React from 'react';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import newArrivals from '@/data/newArrivals.json';

export default function NewArrivalsSection() {
  return (
    <section className="pt-[72px] pb-16">
      <div className="mx-auto px-[100px]">
        <SectionTitle>New Arrivals</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-9">
          {newArrivals.map((product) => (
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

