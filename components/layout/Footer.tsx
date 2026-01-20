'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#F0F0F0] pt-20 sm:pt-24 lg:pt-32 relative">
      {/* Newsletter Section - Overlapping */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[70px] sm:-top-[80px] lg:-top-[90px] w-full max-w-[1240px] px-4 lg:px-0">
        <div className="bg-black rounded-[16px] sm:rounded-[20px] px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-9 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <h2 className="font-integral font-bold text-[24px] sm:text-[32px] lg:text-[40px] leading-[28px] sm:leading-[36px] lg:leading-[45px] text-white max-w-[551px] text-center lg:text-left">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 sm:gap-3.5 w-full lg:w-auto">
            <div className="relative">
              <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#00000066" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full lg:w-[349px] bg-white rounded-full py-2.5 sm:py-3 pl-10 sm:pl-12 pr-4 font-satoshi text-sm sm:text-base placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            
            <button type="submit" className="w-full lg:w-[349px] bg-white text-black rounded-full py-2.5 sm:py-3 px-4 font-satoshi font-medium text-sm sm:text-base hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        
        {/* Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12 border-b border-black/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-28">
            {/* Brand Column */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <Link href="/" className="font-integral font-bold text-[28px] sm:text-[30px] lg:text-[33px] text-black mb-4 sm:mb-6 inline-block">
                SHOP.CO
              </Link>
              <p className="font-satoshi text-sm text-black/60 leading-[22px] mb-6 sm:mb-9 max-w-[248px] mx-auto sm:mx-0">
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3 justify-center sm:justify-start">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 border border-black/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="currentColor">
                    <path d="M13.5 1.4C13 1.6 12.5 1.8 12 1.9C12.5 1.6 13 1.1 13.2 0.5C12.7 0.8 12.1 1 11.5 1.1C11 0.6 10.3 0.3 9.5 0.3C8 0.3 6.8 1.5 6.8 3C6.8 3.2 6.8 3.4 6.9 3.6C4.5 3.5 2.4 2.4 1 0.8C0.8 1.2 0.6 1.6 0.6 2.1C0.6 2.9 1 3.6 1.6 4C1.2 4 0.8 3.9 0.5 3.7C0.5 4.9 1.4 5.9 2.5 6.1C2.3 6.2 2.1 6.2 1.8 6.2C1.6 6.2 1.5 6.2 1.3 6.2C1.6 7.2 2.5 7.9 3.6 7.9C2.7 8.6 1.6 9 0.5 9C0.3 9 0.1 9 0 9C1.1 9.7 2.4 10 3.8 10C9.5 10 12.6 6.2 12.6 3.2V2.8C13.2 2.4 13.7 2 14 1.5L13.5 1.4Z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 border border-black/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M11 0H1C0.4 0 0 0.4 0 1V11C0 11.6 0.4 12 1 12H6.5V7.5H5V5.5H6.5V4C6.5 2.6 7.4 1.5 9 1.5H10.5V3.5H9.5C9 3.5 8.5 3.8 8.5 4.5V5.5H10.5L10 7.5H8.5V12H11C11.6 12 12 11.6 12 11V1C12 0.4 11.6 0 11 0Z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 border border-black/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                    <path d="M6.5 0C3 0 0 3 0 6.5C0 10 3 13 6.5 13C10 13 13 10 13 6.5C13 3 10 0 6.5 0ZM9.3 4.7H8.3C7.7 4.7 7.6 5 7.6 5.4V6.3H9.2L9 7.9H7.6V13H5.9V7.9H4.5V6.3H5.9V5.2C5.9 3.8 6.7 3.1 8 3.1C8.6 3.1 9.1 3.2 9.3 3.2V4.7Z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 border border-black/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 0C3.1 0 0 3.1 0 7C0 10.9 3.1 14 7 14C10.9 14 14 10.9 14 7C14 3.1 10.9 0 7 0ZM9.8 5.2L8.7 10.3C8.6 10.7 8.4 10.8 8.1 10.6L6.3 9.3L5.4 10.2C5.3 10.3 5.2 10.4 5 10.4L5.1 8.5L8.5 5.5C8.6 5.4 8.5 5.3 8.3 5.4L4.1 8L2.3 7.4C1.9 7.3 1.9 7 2.4 6.8L9.3 4C9.6 3.9 9.9 4.1 9.8 5.2Z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Company Column */}
            <div className="text-center sm:text-left">
              <h3 className="font-satoshi font-medium text-sm sm:text-base tracking-[3px] uppercase text-black mb-4 sm:mb-6">
                Company
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><Link href="/category/casual" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">About</Link></li>
                <li><Link href="/brands" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Features</Link></li>
                <li><Link href="/new-arrivals" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Works</Link></li>
                <li><Link href="/profile" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Career</Link></li>
              </ul>
            </div>
            
            {/* Help Column */}
            <div className="text-center sm:text-left">
              <h3 className="font-satoshi font-medium text-sm sm:text-base tracking-[3px] uppercase text-black mb-4 sm:mb-6">
                Help
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><Link href="/profile" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Customer Support</Link></li>
                <li><Link href="/cart" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Delivery Details</Link></li>
                <li><Link href="/category/casual" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/category/casual" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            {/* FAQ Column */}
            <div className="text-center sm:text-left">
              <h3 className="font-satoshi font-medium text-sm sm:text-base tracking-[3px] uppercase text-black mb-4 sm:mb-6">
                FAQ
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><Link href="/profile" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Account</Link></li>
                <li><Link href="/profile" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Manage Deliveries</Link></li>
                <li><Link href="/profile" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Orders</Link></li>
                <li><Link href="/checkout" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Payments</Link></li>
              </ul>
            </div>
            
            {/* Resources Column */}
            <div className="text-center sm:text-left">
              <h3 className="font-satoshi font-medium text-sm sm:text-base tracking-[3px] uppercase text-black mb-4 sm:mb-6">
                Resources
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><Link href="/category/casual" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Free eBooks</Link></li>
                <li><Link href="/new-arrivals" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Development Tutorial</Link></li>
                <li><Link href="/on-sale" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">How to - Blog</Link></li>
                <li><Link href="/brands" className="font-satoshi text-sm sm:text-base text-black/60 hover:text-black transition-colors">Youtube Playlist</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-satoshi text-xs sm:text-sm text-black/60 text-center md:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <div className="w-[40px] sm:w-[46px] h-[26px] sm:h-[30px] bg-white rounded flex items-center justify-center">
              <svg width="33" height="11" viewBox="0 0 33 11" fill="none" className="w-[28px] sm:w-[33px]">
                <rect width="33" height="11" rx="2" fill="white"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#1434CB" fontSize="8" fontWeight="bold">VISA</text>
              </svg>
            </div>
            <div className="w-[40px] sm:w-[46px] h-[26px] sm:h-[30px] bg-white rounded flex items-center justify-center">
              <svg width="26" height="16" viewBox="0 0 26 16" fill="none" className="w-[22px] sm:w-[26px]">
                <circle cx="10" cy="8" r="8" fill="#EB001B"/>
                <circle cx="16" cy="8" r="8" fill="#F79E1B"/>
              </svg>
            </div>
            <div className="w-[40px] sm:w-[46px] h-[26px] sm:h-[30px] bg-white rounded flex items-center justify-center">
              <svg width="35" height="10" viewBox="0 0 35 10" fill="none" className="w-[30px] sm:w-[35px]">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#179BD7" fontSize="8" fontWeight="bold">PayPal</text>
              </svg>
            </div>
            <div className="w-[40px] sm:w-[46px] h-[26px] sm:h-[30px] bg-white rounded flex items-center justify-center">
              <svg width="29" height="12" viewBox="0 0 29 12" fill="none" className="w-[25px] sm:w-[29px]">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#5F6368" fontSize="7" fontWeight="bold">Pay</text>
              </svg>
            </div>
            <div className="w-[40px] sm:w-[46px] h-[26px] sm:h-[30px] bg-white rounded flex items-center justify-center">
              <svg width="29" height="12" viewBox="0 0 29 12" fill="none" className="w-[25px] sm:w-[29px]">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#000" fontSize="7" fontWeight="bold">G Pay</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
