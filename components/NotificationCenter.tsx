'use client';

import { useStore } from '@/store/useStore';
import { useEffect } from 'react';

export default function NotificationCenter() {
  const { notification, setNotification } = useStore();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

  if (!notification) return null;

  const colors = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
  };

  const icons = {
    success: '✓',
    error: '✗',
    info: 'ℹ️',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 rounded-lg p-4 flex items-center gap-3 shadow-lg animate-slide-up ${colors[notification.type]} z-50`}
    >
      <span className="text-xl">{icons[notification.type]}</span>
      <p className="text-sm font-medium">{notification.message}</p>
    </div>
  );
}
