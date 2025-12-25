import React, { useState, useEffect } from 'react';
import type { AppProps } from '../types';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
}

interface InstalledApp {
  name: string;
  version: string;
  source: string;
}

const ZAppStore: React.FC<AppProps> = ({ className }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [installedApps, setInstalledApps] = useState<InstalledApp[]>([]);
  const [activeTab, setActiveTab] = useState<'discover' | 'installed' | 'updates'>('discover');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch repos from z-os4 organization
  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.github.com/orgs/z-os4/repos?per_page=100');
      if (!response.ok) throw new Error('Failed to fetch apps');
      const data = await response.json();
      setRepos(data.filter((repo: GitHubRepo) =>
        repo.name !== '.github' && !repo.name.startsWith('.')
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const installApp = async (repo: GitHubRepo) => {
    // Dynamic import from GitHub (using esm.sh or skypack)
    const moduleUrl = `https://esm.sh/gh/z-os4/${repo.name}`;

    try {
      // In a real implementation, this would dynamically import the module
      // const module = await import(moduleUrl);

      const app: InstalledApp = {
        name: repo.name,
        version: '1.0.0',
        source: moduleUrl
      };

      setInstalledApps(prev => [...prev, app]);

      // Store in localStorage for persistence
      const installed = JSON.parse(localStorage.getItem('zos-installed-apps') || '[]');
      localStorage.setItem('zos-installed-apps', JSON.stringify([...installed, app]));

      alert(`Installed ${repo.name}! The app is now available in your dock.`);
    } catch (err) {
      alert(`Failed to install ${repo.name}`);
    }
  };

  const uninstallApp = (name: string) => {
    setInstalledApps(prev => prev.filter(app => app.name !== name));
    const installed = JSON.parse(localStorage.getItem('zos-installed-apps') || '[]');
    localStorage.setItem('zos-installed-apps',
      JSON.stringify(installed.filter((app: InstalledApp) => app.name !== name))
    );
  };

  const isInstalled = (name: string) => installedApps.some(app => app.name === name);

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repo.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getAppIcon = (name: string) => {
    const icons: Record<string, string> = {
      'calculator': '🧮',
      'terminal': '⬛',
      'notes': '📝',
      'calendar': '📅',
      'weather': '🌤️',
      'photos': '🖼️',
      'music': '🎵',
      'mail': '✉️',
      'safari': '🧭',
      'finder': '📁',
      'sdk': '🔧',
      'ui': '🎨',
      'apps': '📦',
      'desktop': '🖥️'
    };
    return icons[name.toLowerCase()] || '📱';
  };

  return (
    <div className={`flex flex-col h-full bg-[#1c1c1c] ${className || ''}`}>
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white">App Store</h1>
          <button onClick={fetchApps} className="text-blue-400 hover:text-blue-300">
            Refresh
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search apps..."
          className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 outline-none"
        />

        {/* Tabs */}
        <div className="flex gap-4 mt-4">
          {(['discover', 'installed', 'updates'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize ${
                activeTab === tab ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {loading ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Loading apps from github.com/z-os4...
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-full text-red-400">
            {error}
          </div>
        ) : activeTab === 'discover' ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredRepos.map(repo => (
              <div
                key={repo.id}
                className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl">
                    {getAppIcon(repo.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold truncate">{repo.name}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {repo.description || 'No description'}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-gray-500 text-sm">{repo.stargazers_count}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => isInstalled(repo.name) ? uninstallApp(repo.name) : installApp(repo)}
                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                      isInstalled(repo.name)
                        ? 'bg-gray-600 text-gray-300'
                        : 'bg-blue-500 text-white hover:bg-blue-400'
                    }`}
                  >
                    {isInstalled(repo.name) ? 'Installed' : 'Get'}
                  </button>
                </div>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {repo.topics.slice(0, 3).map(topic => (
                      <span key={topic} className="px-2 py-0.5 bg-gray-700 rounded text-xs text-gray-400">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : activeTab === 'installed' ? (
          <div className="space-y-4">
            {installedApps.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                No apps installed yet. Browse the Discover tab to find apps.
              </div>
            ) : (
              installedApps.map(app => (
                <div key={app.name} className="bg-gray-800 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                    {getAppIcon(app.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{app.name}</h3>
                    <p className="text-gray-500 text-sm">v{app.version}</p>
                  </div>
                  <button
                    onClick={() => uninstallApp(app.name)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Uninstall
                  </button>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-8">
            All apps are up to date
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 p-4 border-t border-gray-700 text-center text-gray-500 text-sm">
        Apps from <a href="https://github.com/z-os4" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">github.com/z-os4</a>
      </div>
    </div>
  );
};

export default ZAppStore;
