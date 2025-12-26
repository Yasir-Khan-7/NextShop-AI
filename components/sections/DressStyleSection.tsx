import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

export default function DressStyleSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        <div className="bg-[#F0F0F0] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-[70px]">
          <SectionTitle>Browse by dress Style</SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12 lg:mt-16">
            {/* Casual - Small Card */}
            <Link href="/category/casual" className="group bg-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden relative h-[200px] sm:h-[250px] lg:h-[289px] lg:col-span-1 cursor-pointer transition-transform hover:scale-[1.02]">
              <Image 
                src="/images/dress-styles/casualcard.svg"
                alt="Casual Style"
                width={407}
                height={289}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-6 lg:left-9 font-satoshi font-bold text-[24px] sm:text-[32px] lg:text-4xl text-black z-10">
                Casual
              </h3>
            </Link>
            
            {/* Formal - Wide Card */}
            <Link href="/category/formal" className="group bg-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden relative h-[200px] sm:h-[250px] lg:h-[289px] lg:col-span-2 cursor-pointer transition-transform hover:scale-[1.02]">
              <Image 
                src="/images/dress-styles/formalcard.svg"
                alt="Formal Style"
                width={684}
                height={289}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-6 lg:left-9 font-satoshi font-bold text-[24px] sm:text-[32px] lg:text-4xl text-black z-10">
                Formal
              </h3>
            </Link>
            
            {/* Party - Wide Card */}
            <Link href="/category/party" className="group bg-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden relative h-[200px] sm:h-[250px] lg:h-[289px] lg:col-span-2 cursor-pointer transition-transform hover:scale-[1.02]">
              <Image 
                src="/images/dress-styles/partycard.svg"
                alt="Party Style"
                width={684}
                height={289}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-6 lg:left-9 font-satoshi font-bold text-[24px] sm:text-[32px] lg:text-4xl text-black z-10">
                Party
              </h3>
            </Link>
            
            {/* Gym - Small Card */}
            <Link href="/category/gym" className="group bg-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden relative h-[200px] sm:h-[250px] lg:h-[289px] lg:col-span-1 cursor-pointer transition-transform hover:scale-[1.02]">
              <Image 
                src="/images/dress-styles/gymcard.svg"
                alt="Gym Style"
                width={407}
                height={289}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-6 lg:left-9 font-satoshi font-bold text-[24px] sm:text-[32px] lg:text-4xl text-black z-10">
                Gym
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

