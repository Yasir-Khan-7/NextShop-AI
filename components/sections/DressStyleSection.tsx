import React from 'react';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

export default function DressStyleSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="bg-[#F0F0F0] rounded-[40px] px-16 py-[70px]">
          <SectionTitle>Browse by dress Style</SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
            {/* Casual - Small Card */}
            <div className="bg-white rounded-[20px] overflow-hidden relative h-[289px] lg:col-span-1">
              <Image 
                src="/images/dress-styles/casualcard.svg"
                alt="Casual Style"
                width={407}
                height={289}
                className="w-full h-full"
              />
              <h3 className="absolute top-6 left-9 font-satoshi font-bold text-4xl text-black z-10">
                Casual
              </h3>
            </div>
            
            {/* Formal - Wide Card */}
            <div className="bg-white rounded-[20px] overflow-hidden relative h-[289px] lg:col-span-2">
              <Image 
                src="/images/dress-styles/formalcard.svg"
                alt="Formal Style"
                width={684}
                height={289}
                className="w-full h-full"
              />
              <h3 className="absolute top-6 left-9 font-satoshi font-bold text-4xl text-black z-10">
                Formal
              </h3>
            </div>
            
            {/* Party - Wide Card */}
            <div className="bg-white rounded-[20px] overflow-hidden relative h-[289px] lg:col-span-2">
              <Image 
                src="/images/dress-styles/partycard.svg"
                alt="Party Style"
                width={684}
                height={289}
                className="w-full h-full"
              />
              <h3 className="absolute top-6 left-9 font-satoshi font-bold text-4xl text-black z-10">
                Party
              </h3>
            </div>
            
            {/* Gym - Small Card */}
            <div className="bg-white rounded-[20px] overflow-hidden relative h-[289px] lg:col-span-1">
              <Image 
                src="/images/dress-styles/gymcard.svg"
                alt="Gym Style"
                width={407}
                height={289}
                className="w-full h-full"
              />
              <h3 className="absolute top-6 left-9 font-satoshi font-bold text-4xl text-black z-10">
                Gym
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

