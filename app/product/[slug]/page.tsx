import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductImageGallery from '@/components/ui/ProductImageGallery';
import ProductInfo from '@/components/ui/ProductInfo';
import ProductTabs from '@/components/ui/ProductTabs';
import ReviewsSection from '@/components/ui/ReviewsSection';
import RelatedProducts from '@/components/sections/RelatedProducts';
import productsData from '@/data/products.json';
import reviewsData from '@/data/reviews.json';
import topSellingData from '@/data/topSelling.json';

export default function ProductDetailPage() {
  const product = productsData[0]; // Using first product as example
  const reviews = reviewsData.filter(r => r.productId === product.id);
  const relatedProducts = topSellingData.slice(0, 4);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Men', href: '/shop/men' },
    { label: 'T-shirts', href: '/shop/men/t-shirts' },
    { label: product.name }
  ];

  const tabs = [
    {
      id: 'details',
      label: 'Product Details',
      content: (
        <div className="max-w-3xl">
          <h3 className="font-satoshi font-bold text-lg sm:text-xl text-black mb-3 sm:mb-4">Product Details</h3>
          <p className="font-satoshi text-sm sm:text-base leading-[20px] sm:leading-[22px] text-black/60 mb-4 sm:mb-6">
            {product.description}
          </p>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row">
              <span className="font-satoshi font-medium text-sm sm:text-base text-black/60 sm:w-32">Material:</span>
              <span className="font-satoshi text-sm sm:text-base text-black">100% Cotton</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-satoshi font-medium text-sm sm:text-base text-black/60 sm:w-32">Fit:</span>
              <span className="font-satoshi text-sm sm:text-base text-black">Regular Fit</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-satoshi font-medium text-sm sm:text-base text-black/60 sm:w-32">Care:</span>
              <span className="font-satoshi text-sm sm:text-base text-black">Machine wash cold, tumble dry low</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reviews',
      label: 'Rating & Reviews',
      content: <ReviewsSection reviews={reviews} totalReviews={product.reviewCount} />
    },
    {
      id: 'faqs',
      label: 'FAQs',
      content: (
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <div>
            <h4 className="font-satoshi font-bold text-base sm:text-lg text-black mb-2">
              What is your return policy?
            </h4>
            <p className="font-satoshi text-sm sm:text-base leading-[20px] sm:leading-[22px] text-black/60">
              We offer a 30-day return policy for all unworn items with original tags attached.
            </p>
          </div>
          <div>
            <h4 className="font-satoshi font-bold text-base sm:text-lg text-black mb-2">
              How long does shipping take?
            </h4>
            <p className="font-satoshi text-sm sm:text-base leading-[20px] sm:leading-[22px] text-black/60">
              Standard shipping typically takes 3-5 business days. Express shipping is available for faster delivery.
            </p>
          </div>
          <div>
            <h4 className="font-satoshi font-bold text-base sm:text-lg text-black mb-2">
              What size should I order?
            </h4>
            <p className="font-satoshi text-sm sm:text-base leading-[20px] sm:leading-[22px] text-black/60">
              Please refer to our size guide. If you're between sizes, we recommend sizing up for a more comfortable fit.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 lg:px-24 py-4 sm:py-6">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-11">
          <ProductImageGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Tabs Section */}
        <ProductTabs tabs={tabs} />
      </div>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </>
  );
}

