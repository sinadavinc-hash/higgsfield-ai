'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <nav className="border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Higgsfield AI Studio
          </h1>
          <div className="text-sm text-gray-400">v1.0.0</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Chat Interface */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 flex flex-col h-96">
            <h2 className="text-xl font-semibold mb-4">Chat with Gemini</h2>
            <div className="flex-1 bg-gray-900 rounded p-4 mb-4 overflow-y-auto">
              <p className="text-gray-400 text-sm">Loading chat interface...</p>
            </div>
            <input
              type="text"
              placeholder="Type your prompt..."
              className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400"
              disabled={loading}
            />
          </div>

          {/* Right: Tools */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Available Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Image Gen', icon: '🖼️' },
                { name: 'Video Gen', icon: '🎬' },
                { name: 'Upscale', icon: '⬆️' },
                { name: 'Face Swap', icon: '👤' },
              ].map((tool) => (
                <button
                  key={tool.name}
                  className="bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg p-4 text-center transition-all duration-200 hover:scale-105"
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <div className="text-sm font-medium">{tool.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 bg-gray-800 rounded-lg border border-gray-700 p-4">
          <p className="text-sm text-gray-400">
            🚀 Setup complete! Configure your API keys in <code className="bg-gray-900 px-2 py-1 rounded">.env.local</code> to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
