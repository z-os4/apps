import React, { useState } from 'react';
import type { MusicProps, MusicTrack } from '../types';

const defaultPlaylist: MusicTrack[] = [
  { id: '1', title: 'Digital Dreams', artist: 'Synthwave', album: 'Neon Nights', duration: 245 },
  { id: '2', title: 'Midnight Drive', artist: 'RetroWave', album: 'City Lights', duration: 198 },
  { id: '3', title: 'Electric Sunset', artist: 'Vaporwave', album: 'Palm Beach', duration: 312 },
  { id: '4', title: 'Cosmic Journey', artist: 'Ambient', album: 'Space Time', duration: 420 },
  { id: '5', title: 'Neon Paradise', artist: 'Synthwave', album: 'Neon Nights', duration: 267 },
];

const ZMusic: React.FC<MusicProps> = ({ className, playlist = defaultPlaylist }) => {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const playTrack = (track: MusicTrack) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setProgress(0);
  };

  return (
    <div className={`flex flex-col h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e] ${className || ''}`}>
      {/* Now Playing */}
      {currentTrack && (
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-3xl">
              🎵
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-lg">{currentTrack.title}</div>
              <div className="text-gray-400">{currentTrack.artist}</div>
              <div className="text-gray-500 text-sm">{currentTrack.album}</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>{formatTime(Math.floor(progress / 100 * currentTrack.duration))}</span>
              <span>{formatTime(currentTrack.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button className="text-white/70 hover:text-white text-xl">⏮</button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="text-white/70 hover:text-white text-xl">⏭</button>
          </div>
        </div>
      )}

      {/* Playlist */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 text-gray-400 text-sm font-medium">Playlist</div>
        {playlist.map((track, idx) => (
          <div
            key={track.id}
            onClick={() => playTrack(track)}
            className={`flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-white/5 ${
              currentTrack?.id === track.id ? 'bg-white/10' : ''
            }`}
          >
            <div className="w-8 text-center text-gray-500">{idx + 1}</div>
            <div className="flex-1">
              <div className="text-white">{track.title}</div>
              <div className="text-gray-500 text-sm">{track.artist}</div>
            </div>
            <div className="text-gray-500 text-sm">{formatTime(track.duration)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZMusic;
