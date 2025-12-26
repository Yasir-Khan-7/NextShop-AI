'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const { cartCount } = useCart();
  
  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  const closeDropdown = () => {
    setIsShopDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white h-[38px] flex items-center justify-center relative px-4">
        <p className="text-xs sm:text-sm font-satoshi font-normal leading-[18.9px] text-center">
          Sign up and get 20% off to your first order.{' '}
          <Link href="/signup" className="underline font-medium">
            Sign Up Now
          </Link>
        </p>
        <button className="absolute right-4 sm:right-8 lg:right-[100px] top-1/2 -translate-y-1/2 text-white">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Main Header */}
      <header className="bg-white border-b border-black/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-[100px]">
          <div className="flex items-center justify-between lg:justify-center gap-4 lg:gap-10 h-[70px] sm:h-[80px] lg:h-[96px]">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="font-integral font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[34px] lg:leading-[38.4px] text-black">
              SHOP.CO
            </Link>
            
            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="relative">
                <button 
                  onClick={toggleShopDropdown}
                  className="flex items-center gap-1 font-satoshi font-normal text-base leading-[21.6px] text-black hover:text-black/70 transition-colors"
                >
                  Shop
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`}>
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isShopDropdownOpen && (
                  <>
                    {/* Backdrop to close dropdown when clicking outside */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={closeDropdown}
                    />
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-[20px] shadow-lg border border-black/10 py-2 z-50">
                      <Link 
                        href="/product/one-life-graphic-t-shirt"
                        onClick={closeDropdown}
                        className="block px-6 py-3 font-satoshi text-base text-black hover:bg-[#F0F0F0] transition-colors"
                      >
                        Men
                      </Link>
                    </div>
                  </>
                )}
              </div>
              <Link href="/on-sale" className="font-satoshi font-normal text-base leading-[21.6px] text-black hover:text-black/70 transition-colors">
                On Sale
              </Link>
              <Link href="/new-arrivals" className="font-satoshi font-normal text-base leading-[21.6px] text-black hover:text-black/70 transition-colors">
                New Arrivals
              </Link>
              <Link href="/brands" className="font-satoshi font-normal text-base leading-[21.6px] text-black hover:text-black/70 transition-colors">
                Brands
              </Link>
            </nav>
            
            {/* Search Bar - Desktop */}
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
            <div className="flex items-center gap-3 sm:gap-[14px]">
              <button className="lg:hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="black" strokeWidth="1.5"/>
                  <path d="M20 20L17 17" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              
              <Link href="/cart" className="w-5 h-5 sm:w-6 sm:h-6 relative">
                <Image src="/images/header-icons/cart.svg" alt="Cart" width={24} height={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF3333] text-white text-xs font-satoshi font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              <Link href="/profile" className="w-5 h-5 sm:w-6 sm:h-6">
                <Image src="/images/header-icons/profile.svg" alt="Profile" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-black/10 bg-white">
            <nav className="flex flex-col py-4 px-4 sm:px-8">
              <div className="relative">
                <button 
                  onClick={toggleShopDropdown}
                  className="w-full flex items-center justify-between py-3 font-satoshi font-normal text-base text-black"
                >
                  Shop
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`}>
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {isShopDropdownOpen && (
                  <div className="pl-4 pb-2">
                    <Link 
                      href="/product/one-life-graphic-t-shirt"
                      onClick={() => {
                        closeDropdown();
                        toggleMenu();
                      }}
                      className="block py-2 font-satoshi text-base text-black/70"
                    >
                      Men
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/on-sale" 
                onClick={toggleMenu}
                className="py-3 font-satoshi font-normal text-base text-black border-t border-black/10"
              >
                On Sale
              </Link>
              <Link 
                href="/new-arrivals"
                onClick={toggleMenu}
                className="py-3 font-satoshi font-normal text-base text-black border-t border-black/10"
              >
                New Arrivals
              </Link>
              <Link 
                href="/brands"
                onClick={toggleMenu}
                className="py-3 font-satoshi font-normal text-base text-black border-t border-black/10"
              >
                Brands
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

