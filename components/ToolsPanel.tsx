'use client';

import { useState, useEffect } from 'react';
import { higgsfieldTools } from '@/lib/higgsfield';
import { useStore } from '@/store/useStore';

export default function ToolsPanel() {
  const [activeCategory, setActiveCategory] = useState('imageGeneration');
  const { setSelectedTool, selectedTool } = useStore();

  const categories = [
    { key: 'imageGeneration', label: '🖼️ Image Gen', icon: '🎨' },
    { key: 'videoGeneration', label: '🎬 Video Gen', icon: '🎥' },
    { key: 'enhancement', label: '✨ Enhancement', icon: '⭐' },
    { key: 'faceBody', label: '👤 Face & Body', icon: '👨' },
    { key: 'effects', label: '🌈 Effects', icon: '🎪' },
    { key: 'specialized', label: '🎯 Specialized', icon: '🎯' },
  ];

  const tools = (higgsfieldTools as any)[activeCategory] || [];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-3 py-2 rounded text-sm font-medium transition-all ${
              activeCategory === category.key
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category.icon} {category.label}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-64 overflow-y-auto">
        {tools.map((tool: string) => (
          <button
            key={tool}
            onClick={() => setSelectedTool(selectedTool === tool ? null : tool)}
            className={`p-3 rounded text-sm font-medium text-center break-words transition-all hover:scale-105 ${
              selectedTool === tool
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      {/* Tool Count */}
      <div className="mt-4 text-sm text-gray-400 text-center">
        {tools.length} tools available in this category
      </div>
    </div>
  );
}
