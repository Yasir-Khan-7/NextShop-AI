'use client';

import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ProductTabsProps {
  tabs: Tab[];
}

export default function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="mt-16">
      {/* Tab Headers */}
      <div className="flex border-b border-black/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-6 font-satoshi text-xl transition-all ${
              activeTab === tab.id
                ? 'text-black border-b-2 border-black font-medium'
                : 'text-black/60 hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-10">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

