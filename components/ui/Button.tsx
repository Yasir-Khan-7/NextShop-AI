import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'font-satoshi font-medium text-base leading-[21.6px] rounded-[62px] transition-all duration-200 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed',
    secondary: 'bg-white text-black border border-gray-200 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed',
    outline: 'bg-transparent text-black border border-[rgba(0,0,0,0.1)] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
  };
  
  const sizes = {
    sm: 'px-[54px] py-4 h-[52px]',
    md: 'px-[54px] py-4 h-[52px] w-[218px]',
    lg: 'px-[54px] py-4 h-[52px] w-[210px]'
  };
  
  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

