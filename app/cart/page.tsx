'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const deliveryFee = 15;
  const subtotal = cartTotal;
  const total = subtotal - discount + deliveryFee;

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save20') {
      setDiscount(subtotal * 0.2);
    } else {
      alert('Invalid promo code');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 sm:px-8 lg:px-24 text-center">
          <h1 className="font-integral font-bold text-[32px] sm:text-[40px] text-black mb-6">
            YOUR CART IS EMPTY
          </h1>
          <p className="font-satoshi text-lg text-black/60 mb-8">
            Add some products to your cart to see them here.
          </p>
          <Link href="/">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24 pb-40 sm:pb-48 lg:pb-56">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-black/60 mb-6">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>›</span>
          <span className="text-black">Cart</span>
        </div>

        {/* Title */}
        <h1 className="font-integral font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-black mb-6 sm:mb-8">
          YOUR CART
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${item.color}-${index}`}
                className="border border-black/10 rounded-[20px] p-4 sm:p-6 flex gap-4"
              >
                {/* Product Image */}
                <div className="w-[100px] h-[100px] sm:w-[124px] sm:h-[124px] flex-shrink-0 bg-[#F0EEED] rounded-[8px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={124}
                    height={124}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-satoshi font-bold text-base sm:text-lg lg:text-xl text-black pr-4">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#FF3333] hover:opacity-70 transition-opacity flex-shrink-0"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="space-y-1">
                      <p className="font-satoshi text-sm text-black/60">
                        Size: <span className="text-black">{item.size}</span>
                      </p>
                      <p className="font-satoshi text-sm text-black/60">
                        Color: <span className="text-black">{item.color}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <p className="font-satoshi font-bold text-xl sm:text-2xl text-black">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 sm:gap-4 bg-[#F0F0F0] rounded-full px-4 sm:px-5 py-2 sm:py-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-black hover:opacity-70 transition-opacity"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M4.16667 10H15.8333"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <span className="font-satoshi font-medium text-sm sm:text-base min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-black hover:opacity-70 transition-opacity"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M10 4.16667V15.8333M4.16667 10H15.8333"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-black/10 rounded-[20px] p-5 sm:p-6 sticky top-24">
              <h2 className="font-satoshi font-bold text-xl sm:text-2xl text-black mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-satoshi text-base sm:text-lg text-black/60">Subtotal</span>
                  <span className="font-satoshi font-bold text-base sm:text-lg text-black">
                    ${subtotal}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="font-satoshi text-base sm:text-lg text-black/60">
                      Discount (-20%)
                    </span>
                    <span className="font-satoshi font-bold text-base sm:text-lg text-[#FF3333]">
                      -${discount.toFixed(0)}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-satoshi text-base sm:text-lg text-black/60">
                    Delivery Fee
                  </span>
                  <span className="font-satoshi font-bold text-base sm:text-lg text-black">
                    ${deliveryFee}
                  </span>
                </div>
              </div>

              <div className="border-t border-black/10 pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-satoshi text-lg sm:text-xl text-black">Total</span>
                  <span className="font-satoshi font-bold text-xl sm:text-2xl text-black">
                    ${total.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-3 mb-6">
                <div className="flex-1 relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 14L15 8M9.5 9H9.51M14.5 14H14.51M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Add promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-[#F0F0F0] rounded-full py-3 pl-12 pr-4 font-satoshi text-sm sm:text-base text-black placeholder:text-black/40 focus:outline-none"
                  />
                </div>
                <button
                  onClick={applyPromoCode}
                  className="bg-black text-white rounded-full px-6 sm:px-8 py-3 font-satoshi font-medium text-sm sm:text-base hover:bg-black/90 transition-colors"
                >
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <Button size="lg" className="w-full">
                  Go to Checkout
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-2">
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

