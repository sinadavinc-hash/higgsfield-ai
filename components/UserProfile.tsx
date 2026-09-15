'use client';

import { useStore } from '@/store/useStore';

export default function UserProfile() {
  const { currentUser } = useStore();

  if (!currentUser) {
    return (
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 text-gray-400">
        Loading user info...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 p-4 space-y-3">
      {/* Username */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">Username</p>
        <p className="text-lg font-semibold text-white">{currentUser.username}</p>
      </div>

      {/* Email */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
        <p className="text-sm text-gray-300 break-all">{currentUser.email}</p>
      </div>

      {/* Device */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Device</p>
          <p className="text-sm font-medium text-white">
            {currentUser.deviceBrand === 'Apple' ? '🍎' : '🤖'}
            {' '}
            {currentUser.deviceModel}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">OS</p>
          <p className="text-sm font-medium text-white">
            {currentUser.os} {currentUser.osVersion}
          </p>
        </div>
      </div>

      {/* User ID */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">User ID</p>
        <p className="text-xs text-gray-500 break-all font-mono">{currentUser.userId}</p>
      </div>

      {/* Created */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">Session Started</p>
        <p className="text-xs text-gray-500">
          {new Date(currentUser.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
