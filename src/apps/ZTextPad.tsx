import React, { useState } from 'react';
import type { AppProps } from '../types';

const ZTextPad: React.FC<AppProps> = ({ className }) => {
  const [content, setContent] = useState('');
  const [fileName, setFileName] = useState('Untitled.txt');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setContent(text);
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
  };

  return (
    <div className={`flex flex-col h-full bg-white ${className || ''}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
        <input
          type="text"
          value={fileName}
          onChange={e => setFileName(e.target.value)}
          className="bg-transparent font-medium text-gray-700 outline-none"
        />
        <span className="text-sm text-gray-500">{wordCount} words</span>
      </div>
      <textarea
        value={content}
        onChange={handleChange}
        className="flex-1 p-4 resize-none outline-none font-mono text-sm"
        placeholder="Start typing..."
        autoFocus
      />
    </div>
  );
};

export default ZTextPad;
