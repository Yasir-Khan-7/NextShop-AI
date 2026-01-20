'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Mock signup - in real app, this would call an API
    alert('Account created successfully! Welcome to SHOP.CO');
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-black/60 mb-6">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>›</span>
          <span className="text-black">Sign Up</span>
        </div>

        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-integral font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-black mb-4">
              CREATE ACCOUNT
            </h1>
            <p className="font-satoshi text-base text-black/60">
              Join SHOP.CO and get 20% off your first order
            </p>
          </div>

          {/* Signup Form */}
          <div className="border border-black/10 rounded-[20px] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-satoshi font-medium text-sm text-black mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block font-satoshi font-medium text-sm text-black mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block font-satoshi font-medium text-sm text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block font-satoshi font-medium text-sm text-black mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                  placeholder="••••••••"
                  minLength={8}
                />
                <p className="font-satoshi text-xs text-black/60 mt-1">
                  Must be at least 8 characters
                </p>
              </div>

              <div>
                <label className="block font-satoshi font-medium text-sm text-black mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="mt-1 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="terms" className="font-satoshi text-sm text-black/60 cursor-pointer">
                  I agree to the{' '}
                  <Link href="#" className="text-black underline">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-black underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Create Account
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-black/10"></div>
              <span className="font-satoshi text-sm text-black/60">OR</span>
              <div className="flex-1 h-px bg-black/10"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi font-medium text-base text-black hover:bg-black/5 transition-colors flex items-center justify-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19.8 10.2c0-.7-.1-1.4-.2-2H10v3.8h5.5c-.2 1.2-1 2.2-2 2.9v2.5h3.2c1.9-1.7 3-4.3 3-7.2z" fill="#4285F4"/>
                  <path d="M10 20c2.7 0 4.9-.9 6.5-2.4l-3.2-2.5c-.9.6-2 .9-3.3.9-2.5 0-4.7-1.7-5.4-4H1.3v2.6C3 17.9 6.3 20 10 20z" fill="#34A853"/>
                  <path d="M4.6 11.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V5.5H1.3C.5 7.1 0 8.5 0 10s.5 2.9 1.3 4.5l3.3-2.6z" fill="#FBBC05"/>
                  <path d="M10 4c1.4 0 2.7.5 3.7 1.4l2.8-2.8C14.9.9 12.7 0 10 0 6.3 0 3 2.1 1.3 5.5l3.3 2.6C5.3 5.7 7.5 4 10 4z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi font-medium text-base text-black hover:bg-black/5 transition-colors flex items-center justify-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z"/>
                </svg>
                Continue with Facebook
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center font-satoshi text-sm text-black/60 mt-6">
              Already have an account?{' '}
              <Link href="/profile" className="text-black font-medium underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
