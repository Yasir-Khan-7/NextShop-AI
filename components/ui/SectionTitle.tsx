import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
}

export default function SectionTitle({ children, align = 'center' }: SectionTitleProps) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  
  return (
    <h2 className={`font-integral font-bold text-5xl leading-[57.6px] text-black uppercase mb-[55px] ${alignClass}`}>
      {children}
    </h2>
  );
}

