'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const deliveryFee = 15;
  const total = cartTotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock order placement
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    router.push('/profile');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 sm:px-8 lg:px-24 text-center">
          <h1 className="font-integral font-bold text-[32px] sm:text-[40px] text-black mb-6">
            YOUR CART IS EMPTY
          </h1>
          <p className="font-satoshi text-lg text-black/60 mb-8">
            Add some products to your cart before checking out.
          </p>
          <Link href="/">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 pb-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-black/60 mb-6">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>›</span>
          <Link href="/cart" className="hover:text-black">
            Cart
          </Link>
          <span>›</span>
          <span className="text-black">Checkout</span>
        </div>

        {/* Title */}
        <h1 className="font-integral font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-black mb-8">
          CHECKOUT
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="border border-black/10 rounded-[20px] p-6">
                <h2 className="font-satoshi font-bold text-xl text-black mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-satoshi font-medium text-sm text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-satoshi font-medium text-sm text-black mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="border border-black/10 rounded-[20px] p-6">
                <h2 className="font-satoshi font-bold text-xl text-black mb-6">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-satoshi font-medium text-sm text-black mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      placeholder="123 Fashion Street"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="border border-black/10 rounded-[20px] p-6">
                <h2 className="font-satoshi font-bold text-xl text-black mb-6">
                  Payment Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-satoshi font-medium text-sm text-black mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  <div>
                    <label className="block font-satoshi font-medium text-sm text-black mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cardName}
                      onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                      className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border border-black/10 rounded-[20px] p-6 sticky top-24">
                <h2 className="font-satoshi font-bold text-xl text-black mb-6">
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                  {cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex gap-3">
                      <div className="w-16 h-16 flex-shrink-0 bg-[#F0EEED] rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-satoshi font-medium text-sm text-black line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="font-satoshi text-xs text-black/60">
                          {item.size} • {item.color}
                        </p>
                        <p className="font-satoshi font-bold text-sm text-black">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-black/10 pt-4 space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-satoshi text-base text-black/60">Subtotal</span>
                    <span className="font-satoshi font-bold text-base text-black">
                      ${cartTotal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-satoshi text-base text-black/60">Delivery Fee</span>
                    <span className="font-satoshi font-bold text-base text-black">
                      ${deliveryFee}
                    </span>
                  </div>
                </div>

                <div className="border-t border-black/10 pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-satoshi text-lg text-black">Total</span>
                    <span className="font-satoshi font-bold text-2xl text-black">
                      ${total}
                    </span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Place Order
                </Button>

                <p className="font-satoshi text-xs text-black/60 text-center mt-4">
                  By placing this order, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
