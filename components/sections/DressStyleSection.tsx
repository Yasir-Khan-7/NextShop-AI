import React from 'react';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

export default function DressStyleSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="bg-[#F0F0F0] rounded-[40px] p-16">
          <SectionTitle>Browse by dress Style</SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Casual */}
            <div className="bg-white rounded-[20px] overflow-hidden relative h-[289px] lg:col-span-1">
              <Image 
                src="/images/dress-styles/casualcard.svg"
                alt="Casual Style"
                fill
                className="object-cover object-center"
              />
            </div>
            
            {/* Formal */}
            <div className="bg-white rounded-[20px] overflow-hidden relative h-[289px] lg:col-span-2">
              <Image 
                src="/images/dress-styles/formalcard.svg"
                alt="Formal Style"
                fill
                className="object-cover object-center"
              />
            </div>
            
            {/* Party */}
            <div className="bg-white rounded-[20px] overflow-hidden relative h-[289px] lg:col-span-2">
              <Image 
                src="/images/dress-styles/partycard.svg"
                alt="Party Style"
                fill
                className="object-cover object-center"
              />
            </div>
            
            {/* Gym */}
            <div className="bg-white rounded-[20px] overflow-hidden relative h-[289px] lg:col-span-1">
              <Image 
                src="/images/dress-styles/gymcard.svg"
                alt="Gym Style"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

