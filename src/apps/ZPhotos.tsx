import React, { useState } from 'react';
import type { PhotosProps, PhotoItem } from '../types';

const defaultPhotos: PhotoItem[] = [
  { id: '1', src: 'https://picsum.photos/400/300?random=1', alt: 'Photo 1' },
  { id: '2', src: 'https://picsum.photos/400/300?random=2', alt: 'Photo 2' },
  { id: '3', src: 'https://picsum.photos/400/300?random=3', alt: 'Photo 3' },
  { id: '4', src: 'https://picsum.photos/400/300?random=4', alt: 'Photo 4' },
  { id: '5', src: 'https://picsum.photos/400/300?random=5', alt: 'Photo 5' },
  { id: '6', src: 'https://picsum.photos/400/300?random=6', alt: 'Photo 6' },
];

const ZPhotos: React.FC<PhotosProps> = ({ className, photos = defaultPhotos }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedPhoto = photos.find(p => p.id === selectedId);

  return (
    <div className={`flex h-full bg-[#1e1e1e] ${className || ''}`}>
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-700 p-4">
        <div className="text-white font-semibold mb-4">Library</div>
        <div className="space-y-2 text-sm">
          <div className="text-blue-400 cursor-pointer">All Photos</div>
          <div className="text-gray-400 cursor-pointer hover:text-white">Favorites</div>
          <div className="text-gray-400 cursor-pointer hover:text-white">Recently Added</div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {selectedPhoto ? (
          // Full view
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <button
                onClick={() => setSelectedId(null)}
                className="text-blue-400 hover:text-blue-300"
              >
                ← Back
              </button>
              <span className="text-gray-400">{selectedPhoto.alt}</span>
            </div>
            <div className="flex-1 flex items-center justify-center p-8 bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ) : (
          // Grid view
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-3 gap-2">
              {photos.map(photo => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedId(photo.id)}
                  className="aspect-square cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZPhotos;
