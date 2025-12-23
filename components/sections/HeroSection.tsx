import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-[#F2F0F1] relative overflow-hidden">
      <div className="mx-auto px-[100px]">
        <div className="grid grid-cols-2 gap-8 items-center h-[663px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-integral font-bold text-[64px] leading-[64px] text-black mb-8 max-w-[577px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            
            <p className="font-satoshi font-normal text-base leading-[22px] text-[rgba(0,0,0,0.6)] mb-8 max-w-[545px]">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            
            <div className="mb-12">
              <Button size="lg">Shop Now</Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-[-2px]">
                <h3 className="font-satoshi font-bold text-[40px] leading-[54px] text-black">
                  200+
                </h3>
                <p className="font-satoshi font-normal text-base leading-[22px] text-[rgba(0,0,0,0.6)]">
                  International Brands
                </p>
              </div>
              
              <div className="w-[1px] h-[52px] bg-[rgba(0,0,0,0.1)]" />
              
              <div className="flex flex-col gap-[-2px]">
                <h3 className="font-satoshi font-bold text-[40px] leading-[54px] text-black">
                  2,000+
                </h3>
                <p className="font-satoshi font-normal text-base leading-[22px] text-[rgba(0,0,0,0.6)]">
                  High-Quality Products
                </p>
              </div>
              
              <div className="w-[1px] h-[52px] bg-[rgba(0,0,0,0.1)]" />
              
              <div className="flex flex-col gap-[-2px]">
                <h3 className="font-satoshi font-bold text-[40px] leading-[54px] text-black">
                  30,000+
                </h3>
                <p className="font-satoshi font-normal text-base leading-[22px] text-[rgba(0,0,0,0.6)]">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image - Centered Like Figma */}
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/images/hero-section/heroimg.svg" 
                alt="Hero" 
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            
            {/* Decorative Stars - Using Vector Icon */}
            <Image 
              src="/images/header-icons/Vector.svg"
              alt="Star"
              width={104}
              height={104}
              className="absolute top-[86px] right-[31px] z-10"
            />
            
            <Image 
              src="/images/header-icons/Vector.svg"
              alt="Star"
              width={56}
              height={56}
              className="absolute top-[297px] left-[44px] z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

