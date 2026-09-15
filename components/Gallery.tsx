'use client';

import { useStore } from '@/store/useStore';
import { GeneratedContent } from '@/lib/storage';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const { gallery, removeFromGallery } = useStore();
  const [selectedItem, setSelectedItem] = useState<GeneratedContent | null>(null);

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
      {gallery.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-40 text-gray-400">
          <div className="text-4xl mb-2">🖼️</div>
          <p className="text-sm">No generated content yet</p>
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="relative group cursor-pointer rounded overflow-hidden bg-gray-700 aspect-square"
              >
                {/* Image/Video */}
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.prompt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={item.url}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromGallery(item.id);
                      }}
                      className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-sm"
                    >
                      🗑️
                    </button>
                    <a
                      href={item.url}
                      download
                      className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded text-sm"
                    >
                      ⬇️
                    </a>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  {item.status === 'completed' && (
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">✓</span>
                  )}
                  {item.status === 'pending' && (
                    <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded">⏳</span>
                  )}
                  {item.status === 'failed' && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">✗</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detail Modal */}
          {selectedItem && (
            <div
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-800 rounded-lg max-w-2xl w-full overflow-hidden"
              >
                {/* Media */}
                {selectedItem.type === 'image' ? (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.prompt}
                    className="w-full h-auto max-h-96 object-cover"
                  />
                ) : (
                  <video
                    src={selectedItem.url}
                    controls
                    className="w-full h-auto max-h-96 object-cover"
                  />
                )}

                {/* Info */}
                <div className="p-4 border-t border-gray-700">
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 mb-1">Tool</p>
                    <p className="text-sm font-medium">{selectedItem.tool}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 mb-1">Prompt</p>
                    <p className="text-sm text-gray-300">{selectedItem.prompt}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">
                      {new Date(selectedItem.timestamp).toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => removeFromGallery(selectedItem.id)}
                        className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                      <a
                        href={selectedItem.url}
                        download
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded text-sm"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
