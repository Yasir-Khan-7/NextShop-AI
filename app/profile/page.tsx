'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Fashion Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  });

  const orders = [
    {
      id: '#3456_768',
      date: 'March 27, 2024',
      status: 'Delivered',
      total: 467,
      items: 3,
    },
    {
      id: '#3456_765',
      date: 'March 20, 2024',
      status: 'In Transit',
      total: 345,
      items: 2,
    },
    {
      id: '#3456_742',
      date: 'March 15, 2024',
      status: 'Processing',
      total: 289,
      items: 1,
    },
  ];

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24 pb-32">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-black/60 mb-6">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>›</span>
          <span className="text-black">My Account</span>
        </div>

        {/* Title */}
        <h1 className="font-integral font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-black mb-8">
          MY ACCOUNT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="border border-black/10 rounded-[20px] p-6">
              {/* Profile Avatar */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white font-integral font-bold text-[32px] mb-4">
                  {userData.firstName[0]}
                  {userData.lastName[0]}
                </div>
                <h3 className="font-satoshi font-bold text-xl text-black">
                  {userData.firstName} {userData.lastName}
                </h3>
                <p className="font-satoshi text-sm text-black/60">{userData.email}</p>
              </div>

              {/* Menu Items */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-satoshi text-base transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-black text-white'
                      : 'text-black/60 hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10ZM10 12.5C6.66667 12.5 0 14.1667 0 17.5V20H20V17.5C20 14.1667 13.3333 12.5 10 12.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    Profile Details
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-satoshi text-base transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-black text-white'
                      : 'text-black/60 hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M3 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L17 1H3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M1 5H19M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    My Orders
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-satoshi text-base transition-colors ${
                    activeTab === 'wishlist'
                      ? 'bg-black text-white'
                      : 'text-black/60 hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
                        fill="currentColor"
                      />
                    </svg>
                    Wishlist
                  </div>
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg font-satoshi text-base text-[#FF3333] hover:bg-[#FF3333]/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Logout
                  </div>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Details Tab */}
            {activeTab === 'profile' && (
              <div className="border border-black/10 rounded-[20px] p-6 sm:p-8">
                <h2 className="font-satoshi font-bold text-2xl text-black mb-6">
                  Personal Information
                </h2>
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={userData.firstName}
                        onChange={(e) =>
                          setUserData({ ...userData, firstName: e.target.value })
                        }
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={userData.lastName}
                        onChange={(e) =>
                          setUserData({ ...userData, lastName: e.target.value })
                        }
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-satoshi font-medium text-sm text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block font-satoshi font-medium text-sm text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block font-satoshi font-medium text-sm text-black mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={userData.address}
                      onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                      className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={userData.city}
                        onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        value={userData.state}
                        onChange={(e) => setUserData({ ...userData, state: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-satoshi font-medium text-sm text-black mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        value={userData.zipCode}
                        onChange={(e) => setUserData({ ...userData, zipCode: e.target.value })}
                        className="w-full border border-black/10 rounded-lg px-4 py-3 font-satoshi text-base focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg">
                    Save Changes
                  </Button>
                </form>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="border border-black/10 rounded-[20px] p-6 sm:p-8">
                <h2 className="font-satoshi font-bold text-2xl text-black mb-6">My Orders</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-black/10 rounded-lg p-4 sm:p-6 hover:border-black/30 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <p className="font-satoshi font-bold text-lg text-black">
                            Order {order.id}
                          </p>
                          <p className="font-satoshi text-sm text-black/60">{order.date}</p>
                        </div>
                        <span
                          className={`px-4 py-2 rounded-full font-satoshi font-medium text-sm w-fit ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-700'
                              : order.status === 'In Transit'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-satoshi text-sm text-black/60">
                            {order.items} items • ${order.total}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="border border-black/10 rounded-[20px] p-6 sm:p-8">
                <h2 className="font-satoshi font-bold text-2xl text-black mb-6">My Wishlist</h2>
                <div className="text-center py-12">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    className="mx-auto mb-4 text-black/20"
                  >
                    <path
                      d="M40 70L34.2 64.7C16 48.1 4 37.1 4 23.5C4 12.4 12.4 4 23.5 4C29.24 4 34.76 6.44 40 10.32C45.24 6.44 50.76 4 56.5 4C67.6 4 76 12.4 76 23.5C76 37.1 64 48.1 45.8 64.7L40 70Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="font-satoshi text-lg text-black/60">Your wishlist is empty</p>
                  <Link href="/category/casual" className="inline-block mt-4">
                    <Button size="md">Start Shopping</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

