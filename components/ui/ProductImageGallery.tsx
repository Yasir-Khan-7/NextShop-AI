'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-3.5">
        {/* Thumbnail Images */}
        <div className="flex lg:flex-col gap-3.5 overflow-x-auto lg:overflow-y-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-[80px] h-[80px] sm:w-[112px] sm:h-[106px] lg:w-[152px] lg:h-[167px] rounded-[12px] lg:rounded-[20px] overflow-hidden border-2 transition-all ${
                selectedImage === index ? 'border-black' : 'border-transparent'
              }`}
            >
              <Image
                src={image}
                alt={`${productName} view ${index + 1}`}
                width={152}
                height={167}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div 
          className="flex-1 w-full lg:w-[444px] h-[290px] sm:h-[400px] lg:h-[530px] rounded-[12px] lg:rounded-[20px] overflow-hidden bg-[#F0EEED] cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={images[selectedImage]}
            alt={productName}
            width={444}
            height={530}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={images[selectedImage]}
        imageAlt={`${productName} - View ${selectedImage + 1}`}
      />
    </>
  );
}

