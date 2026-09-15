'use client';

import { useStore } from '@/store/useStore';
import ChatInterface from '@/components/ChatInterface';
import ToolsPanel from '@/components/ToolsPanel';
import Gallery from '@/components/Gallery';
import UserProfile from '@/components/UserProfile';

export default function ResponsiveLayout() {
  const { activeTab, setActiveTab } = useStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="border-b border-gray-700 px-4 sm:px-6 py-4 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            🎨 Higgsfield AI Studio
          </h1>
          <div className="text-xs sm:text-sm text-gray-400">v1.0.0</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Chat & Tools */}
          <div className="lg:col-span-2 space-y-6">
            {/* Chat */}
            <div className="h-96 sm:h-[500px]">
              <ChatInterface />
            </div>

            {/* Tools */}
            <ToolsPanel />
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Profile */}
            <UserProfile />

            {/* Quick Stats */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 space-y-3">
              <h3 className="font-semibold text-white">📊 Quick Stats</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-gray-700 p-3 rounded">
                  <p className="text-gray-400 text-xs">Messages</p>
                  <p className="text-lg font-bold text-indigo-400">-</p>
                </div>
                <div className="bg-gray-700 p-3 rounded">
                  <p className="text-gray-400 text-xs">Generated</p>
                  <p className="text-lg font-bold text-purple-400">-</p>
                </div>
                <div className="bg-gray-700 p-3 rounded col-span-2">
                  <p className="text-gray-400 text-xs">Active Tool</p>
                  <p className="text-sm font-bold text-white truncate">Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gray-800 border-t border-gray-700">
        <div className="flex">
          {[
            { id: 'chat', label: '💬', icon: 'Chat' },
            { id: 'tools', label: '🎨', icon: 'Tools' },
            { id: 'gallery', label: '🖼️', icon: 'Gallery' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-indigo-400 border-t-2 border-indigo-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
              <div className="text-xs mt-1">{tab.icon}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
