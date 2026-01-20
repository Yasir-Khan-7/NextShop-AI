import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-[#F2F0F1] relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-[500px] sm:min-h-[600px] lg:h-[663px] py-8 lg:py-0">
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="font-integral font-bold text-[36px] sm:text-[48px] lg:text-[64px] leading-[36px] sm:leading-[48px] lg:leading-[64px] text-black mb-4 sm:mb-6 lg:mb-8 max-w-[577px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            
            <p className="font-satoshi font-normal text-sm sm:text-base leading-[20px] sm:leading-[22px] text-[rgba(0,0,0,0.6)] mb-6 lg:mb-8 max-w-[545px]">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            
            <div className="mb-8 lg:mb-12">
              <Link href="/category/casual">
                <Button size="lg">Shop Now</Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="flex flex-col gap-[-2px]">
                <h3 className="font-satoshi font-bold text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[43px] lg:leading-[54px] text-black">
                  200+
                </h3>
                <p className="font-satoshi font-normal text-xs sm:text-sm lg:text-base leading-[18px] sm:leading-[20px] lg:leading-[22px] text-[rgba(0,0,0,0.6)]">
                  International Brands
                </p>
              </div>
              
              <div className="w-[1px] h-[42px] sm:h-[52px] bg-[rgba(0,0,0,0.1)]" />
              
              <div className="flex flex-col gap-[-2px]">
                <h3 className="font-satoshi font-bold text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[43px] lg:leading-[54px] text-black">
                  2,000+
                </h3>
                <p className="font-satoshi font-normal text-xs sm:text-sm lg:text-base leading-[18px] sm:leading-[20px] lg:leading-[22px] text-[rgba(0,0,0,0.6)]">
                  High-Quality Products
                </p>
              </div>
              
              <div className="w-[1px] h-[42px] sm:h-[52px] bg-[rgba(0,0,0,0.1)]" />
              
              <div className="flex flex-col gap-[-2px]">
                <h3 className="font-satoshi font-bold text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[43px] lg:leading-[54px] text-black">
                  30,000+
                </h3>
                <p className="font-satoshi font-normal text-xs sm:text-sm lg:text-base leading-[18px] sm:leading-[20px] lg:leading-[22px] text-[rgba(0,0,0,0.6)]">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image - Centered Like Figma */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-full w-full flex items-center justify-center order-1 lg:order-2">
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
              width={64}
              height={64}
              className="absolute top-[40px] sm:top-[60px] lg:top-[86px] right-[15px] sm:right-[20px] lg:right-[31px] z-10 w-[64px] sm:w-[84px] lg:w-[104px] h-[64px] sm:h-[84px] lg:h-[104px]"
            />
            
            <Image 
              src="/images/header-icons/Vector.svg"
              alt="Star"
              width={56}
              height={56}
              className="absolute top-[200px] sm:top-[240px] lg:top-[297px] left-[20px] sm:left-[30px] lg:left-[44px] z-10 w-[36px] sm:w-[46px] lg:w-[56px] h-[36px] sm:h-[46px] lg:h-[56px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

