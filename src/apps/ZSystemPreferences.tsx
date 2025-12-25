import React, { useState } from 'react';
import type { SystemPreferencesProps } from '../types';

const sections = [
  { id: 'general', icon: '⚙️', name: 'General' },
  { id: 'appearance', icon: '🎨', name: 'Appearance' },
  { id: 'dock', icon: '📱', name: 'Dock' },
  { id: 'display', icon: '🖥️', name: 'Display' },
];

const ZSystemPreferences: React.FC<SystemPreferencesProps> = ({ className, section = 'general' }) => {
  const [activeSection, setActiveSection] = useState(section);

  const renderContent = () => {
    switch (activeSection) {
      case 'general':
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">General</h2>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span>Appearance</span>
                <select className="bg-gray-700 rounded px-2 py-1">
                  <option>Auto</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </label>
              <label className="flex items-center justify-between">
                <span>Accent Color</span>
                <div className="flex gap-1">
                  {['blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green'].map(c => (
                    <button key={c} className={`w-5 h-5 rounded-full bg-${c}-500`} />
                  ))}
                </div>
              </label>
            </div>
          </div>
        );
      case 'appearance':
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Appearance</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg text-black text-center cursor-pointer">
                Light
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-white text-center cursor-pointer ring-2 ring-blue-500">
                Dark
              </div>
            </div>
          </div>
        );
      case 'dock':
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Dock</h2>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span>Size</span>
                <input type="range" min="0" max="100" defaultValue="50" className="w-32" />
              </label>
              <label className="flex items-center justify-between">
                <span>Magnification</span>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </label>
              <label className="flex items-center justify-between">
                <span>Position</span>
                <select className="bg-gray-700 rounded px-2 py-1">
                  <option>Bottom</option>
                  <option>Left</option>
                  <option>Right</option>
                </select>
              </label>
            </div>
          </div>
        );
      case 'display':
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Display</h2>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span>Resolution</span>
                <select className="bg-gray-700 rounded px-2 py-1">
                  <option>Default for display</option>
                  <option>Scaled</option>
                </select>
              </label>
              <label className="flex items-center justify-between">
                <span>Brightness</span>
                <input type="range" min="0" max="100" defaultValue="75" className="w-32" />
              </label>
              <label className="flex items-center justify-between">
                <span>Night Shift</span>
                <input type="checkbox" className="w-5 h-5" />
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex h-full bg-[#2a2a2a] text-white ${className || ''}`}>
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-700 p-4">
        <div className="space-y-1">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full px-3 py-2 rounded text-left flex items-center gap-2 ${
                activeSection === s.id ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <span>{s.icon}</span>
              <span>{s.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default ZSystemPreferences;
