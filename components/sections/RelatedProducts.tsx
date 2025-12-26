import React from 'react';
import ProductCard from '../ui/ProductCard';
import SectionTitle from '../ui/SectionTitle';

interface RelatedProductsProps {
  products: Array<{
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
  }>;
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 mb-12 sm:mb-16 lg:mb-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        <SectionTitle>You Might Also Like</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 mt-8 sm:mt-12 lg:mt-14 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

