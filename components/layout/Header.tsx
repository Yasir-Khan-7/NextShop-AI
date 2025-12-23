'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white h-[38px] flex items-center justify-center relative">
        <p className="text-sm font-satoshi font-normal leading-[18.9px]">
          Sign up and get 20% off to your first order.{' '}
          <Link href="/signup" className="underline font-medium">
            Sign Up Now
          </Link>
        </p>
        <button className="absolute right-[100px] top-1/2 -translate-y-1/2 text-white">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Main Header */}
      <header className="bg-white">
        <div className="mx-auto px-[100px]">
          <div className="flex items-center justify-center gap-10 h-[96px]">
            {/* Logo */}
            <Link href="/" className="font-integral font-bold text-[32px] leading-[38.4px] text-black">
              SHOP.CO
            </Link>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="relative group">
                <button className="flex items-center gap-1 font-satoshi font-normal text-base leading-[21.6px] text-black">
                  Shop
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <Link href="/on-sale" className="font-satoshi font-normal text-base leading-[21.6px] text-black">
                On Sale
              </Link>
              <Link href="/new-arrivals" className="font-satoshi font-normal text-base leading-[21.6px] text-black">
                New Arrivals
              </Link>
              <Link href="/brands" className="font-satoshi font-normal text-base leading-[21.6px] text-black">
                Brands
              </Link>
            </nav>
            
            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-[577px]">
              <div className="relative w-full">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <circle cx="9.5" cy="9.5" r="6.5" stroke="rgba(0, 0, 0, 0.4)" strokeWidth="1.5"/>
                  <path d="M16 16L14 14" stroke="rgba(0, 0, 0, 0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full h-12 bg-[#F0F0F0] rounded-[62px] py-3 pl-12 pr-4 font-satoshi font-normal text-base leading-[21.6px] text-black placeholder:text-[rgba(0,0,0,0.4)] focus:outline-none"
                />
              </div>
            </div>
            
            {/* Icons */}
            <div className="flex items-center gap-[14px]">
              <button className="lg:hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="black" strokeWidth="1.5"/>
                  <path d="M20 20L17 17" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              
              <button className="w-6 h-6">
                <Image src="/images/header-icons/cart.svg" alt="Cart" width={24} height={24} />
              </button>
              
              <button className="w-6 h-6">
                <Image src="/images/header-icons/profile.svg" alt="Profile" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

