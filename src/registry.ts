/**
 * zOS App Registry
 *
 * Central registry for app discovery, installation, and version management.
 * Apps are fetched from github.com/z-os4 and can be installed dynamically.
 */

export interface AppManifest {
  id: string;
  name: string;
  version: string;
  description: string;
  icon: string;
  category: 'productivity' | 'utilities' | 'entertainment' | 'developer' | 'system';
  author: string;
  repository: string;
  minSdkVersion: string;
  permissions: string[];
  screenshots?: string[];
  releaseNotes?: string;
}

export interface InstalledApp extends AppManifest {
  installedAt: string;
  installedVersion: string;
  source: 'bundled' | 'github' | 'local';
  modulePath?: string;
}

export interface AppUpdate {
  id: string;
  currentVersion: string;
  latestVersion: string;
  releaseNotes?: string;
}

// Built-in app manifests
export const BUNDLED_APPS: AppManifest[] = [
  {
    id: 'ai.hanzo.calculator',
    name: 'Calculator',
    version: '4.2.0',
    description: 'Beautiful calculator with standard and scientific modes',
    icon: '🧮',
    category: 'utilities',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: [],
  },
  {
    id: 'ai.hanzo.terminal',
    name: 'Terminal',
    version: '4.2.0',
    description: 'Command-line interface with zsh-like shell',
    icon: '⬛',
    category: 'developer',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['filesystem', 'shell'],
  },
  {
    id: 'ai.hanzo.notes',
    name: 'Notes',
    version: '4.2.0',
    description: 'Elegant note-taking with rich text support',
    icon: '📝',
    category: 'productivity',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['storage'],
  },
  {
    id: 'ai.hanzo.textpad',
    name: 'TextPad',
    version: '4.2.0',
    description: 'Simple text editor for quick edits',
    icon: '📄',
    category: 'productivity',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['storage'],
  },
  {
    id: 'ai.hanzo.clock',
    name: 'Clock',
    version: '4.2.0',
    description: 'World clock with multiple timezones',
    icon: '🕐',
    category: 'utilities',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: [],
  },
  {
    id: 'ai.hanzo.calendar',
    name: 'Calendar',
    version: '4.2.0',
    description: 'Beautiful calendar with event support',
    icon: '📅',
    category: 'productivity',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['storage'],
  },
  {
    id: 'ai.hanzo.weather',
    name: 'Weather',
    version: '4.2.0',
    description: 'Real-time weather forecasts',
    icon: '🌤️',
    category: 'utilities',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['network'],
  },
  {
    id: 'ai.hanzo.photos',
    name: 'Photos',
    version: '4.2.0',
    description: 'Photo viewer and gallery',
    icon: '🖼️',
    category: 'entertainment',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['storage'],
  },
  {
    id: 'ai.hanzo.music',
    name: 'Music',
    version: '4.2.0',
    description: 'Music player with playlist support',
    icon: '🎵',
    category: 'entertainment',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['storage'],
  },
  {
    id: 'ai.hanzo.stickies',
    name: 'Stickies',
    version: '4.2.0',
    description: 'Desktop sticky notes',
    icon: '📌',
    category: 'productivity',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['storage'],
  },
  {
    id: 'ai.hanzo.preferences',
    name: 'System Preferences',
    version: '4.2.0',
    description: 'Customize your zOS experience',
    icon: '⚙️',
    category: 'system',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['system'],
  },
  {
    id: 'ai.hanzo.appstore',
    name: 'App Store',
    version: '4.2.0',
    description: 'Discover and install apps from github.com/z-os4',
    icon: '🏪',
    category: 'system',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['network'],
  },
  {
    id: 'ai.hanzo.finder',
    name: 'Finder',
    version: '4.2.0',
    description: 'File manager with sidebar navigation and quick look',
    icon: '📁',
    category: 'system',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['filesystem'],
  },
  {
    id: 'ai.hanzo.safari',
    name: 'Safari',
    version: '4.2.0',
    description: 'Web browser with search and navigation',
    icon: '🧭',
    category: 'productivity',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['network'],
  },
  {
    id: 'ai.hanzo.mail',
    name: 'Mail',
    version: '4.2.0',
    description: 'Email composer with rich formatting',
    icon: '✉️',
    category: 'productivity',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['network'],
  },
  {
    id: 'ai.hanzo.contacts',
    name: 'Contacts',
    version: '4.2.0',
    description: 'Contact manager with social profiles',
    icon: '👤',
    category: 'productivity',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['storage'],
  },
  {
    id: 'ai.hanzo.githubstats',
    name: 'GitHub Stats',
    version: '4.2.0',
    description: 'View GitHub contribution statistics',
    icon: '📊',
    category: 'developer',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['network'],
  },
  {
    id: 'ai.hanzo.assistant',
    name: 'AI Assistant',
    version: '4.2.0',
    description: 'AI-powered chat assistant',
    icon: '🤖',
    category: 'productivity',
    author: 'Hanzo AI',
    repository: 'https://github.com/z-os4/apps',
    minSdkVersion: '4.0.0',
    permissions: ['network'],
  },
];

// Storage keys
const INSTALLED_APPS_KEY = 'zos:apps:installed';
const APP_CACHE_KEY = 'zos:apps:cache';

/**
 * App Registry class for managing installed apps
 */
export class AppRegistry {
  private installedApps: Map<string, InstalledApp> = new Map();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem(INSTALLED_APPS_KEY);
      if (stored) {
        const apps: InstalledApp[] = JSON.parse(stored);
        apps.forEach(app => this.installedApps.set(app.id, app));
      }

      // Register bundled apps
      BUNDLED_APPS.forEach(manifest => {
        if (!this.installedApps.has(manifest.id)) {
          this.installedApps.set(manifest.id, {
            ...manifest,
            installedAt: new Date().toISOString(),
            installedVersion: manifest.version,
            source: 'bundled',
          });
        }
      });
    } catch (e) {
      console.error('[zOS Registry] Failed to load apps:', e);
    }
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') return;

    try {
      const apps = Array.from(this.installedApps.values());
      localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(apps));
    } catch (e) {
      console.error('[zOS Registry] Failed to save apps:', e);
    }
  }

  /**
   * Get all installed apps
   */
  getInstalledApps(): InstalledApp[] {
    return Array.from(this.installedApps.values());
  }

  /**
   * Get an installed app by ID
   */
  getApp(id: string): InstalledApp | undefined {
    return this.installedApps.get(id);
  }

  /**
   * Check if an app is installed
   */
  isInstalled(id: string): boolean {
    return this.installedApps.has(id);
  }

  /**
   * Install an app from a manifest
   */
  async install(manifest: AppManifest, source: 'github' | 'local' = 'github'): Promise<InstalledApp> {
    const app: InstalledApp = {
      ...manifest,
      installedAt: new Date().toISOString(),
      installedVersion: manifest.version,
      source,
    };

    this.installedApps.set(app.id, app);
    this.saveToStorage();

    // Dispatch event for UI updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('zos:app-installed', { detail: app }));
    }

    return app;
  }

  /**
   * Uninstall an app
   */
  uninstall(id: string): boolean {
    const app = this.installedApps.get(id);
    if (!app) return false;

    // Don't allow uninstalling bundled apps
    if (app.source === 'bundled') {
      console.warn('[zOS Registry] Cannot uninstall bundled app:', id);
      return false;
    }

    this.installedApps.delete(id);
    this.saveToStorage();

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('zos:app-uninstalled', { detail: { id } }));
    }

    return true;
  }

  /**
   * Check for app updates from GitHub
   */
  async checkForUpdates(): Promise<AppUpdate[]> {
    const updates: AppUpdate[] = [];

    try {
      const response = await fetch('https://api.github.com/repos/z-os4/apps/releases/latest');
      if (!response.ok) return updates;

      const release = await response.json();
      const latestVersion = release.tag_name.replace(/^v/, '');

      // Check bundled apps against latest release
      for (const app of this.installedApps.values()) {
        if (app.source === 'bundled' && this.compareVersions(app.installedVersion, latestVersion) < 0) {
          updates.push({
            id: app.id,
            currentVersion: app.installedVersion,
            latestVersion,
            releaseNotes: release.body,
          });
        }
      }
    } catch (e) {
      console.error('[zOS Registry] Failed to check updates:', e);
    }

    return updates;
  }

  /**
   * Update an installed app
   */
  async update(id: string, newVersion: string): Promise<boolean> {
    const app = this.installedApps.get(id);
    if (!app) return false;

    app.installedVersion = newVersion;
    app.version = newVersion;
    this.saveToStorage();

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('zos:app-updated', { detail: app }));
    }

    return true;
  }

  /**
   * Compare semantic versions
   */
  private compareVersions(v1: string, v2: string): number {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
      const p1 = parts1[i] || 0;
      const p2 = parts2[i] || 0;
      if (p1 < p2) return -1;
      if (p1 > p2) return 1;
    }

    return 0;
  }
}

// Singleton instance
let registryInstance: AppRegistry | null = null;

export function getAppRegistry(): AppRegistry {
  if (!registryInstance) {
    registryInstance = new AppRegistry();
  }
  return registryInstance;
}

/**
 * Fetch available apps from GitHub organization
 */
export async function fetchGitHubApps(): Promise<AppManifest[]> {
  try {
    const response = await fetch('https://api.github.com/orgs/z-os4/repos?per_page=100');
    if (!response.ok) throw new Error('Failed to fetch repos');

    const repos = await response.json();
    const apps: AppManifest[] = [];

    for (const repo of repos) {
      if (repo.name.startsWith('.') || repo.name === 'docs') continue;

      // Try to fetch manifest from repo
      try {
        const manifestResponse = await fetch(
          `https://raw.githubusercontent.com/z-os4/${repo.name}/main/zos.manifest.json`
        );

        if (manifestResponse.ok) {
          const manifest = await manifestResponse.json();
          apps.push(manifest);
        } else {
          // Create manifest from repo info
          apps.push({
            id: `ai.hanzo.${repo.name}`,
            name: repo.name,
            version: '1.0.0',
            description: repo.description || 'No description',
            icon: getRepoIcon(repo.name),
            category: getRepoCategory(repo.topics || []),
            author: 'Hanzo AI',
            repository: repo.html_url,
            minSdkVersion: '4.0.0',
            permissions: [],
          });
        }
      } catch {
        // Skip repos without valid manifests
      }
    }

    return apps;
  } catch (e) {
    console.error('[zOS Registry] Failed to fetch GitHub apps:', e);
    return [];
  }
}

function getRepoIcon(name: string): string {
  const icons: Record<string, string> = {
    sdk: '🔧',
    ui: '🎨',
    apps: '📦',
    desktop: '🖥️',
    docs: '📚',
    calculator: '🧮',
    terminal: '⬛',
    notes: '📝',
  };
  return icons[name.toLowerCase()] || '📱';
}

function getRepoCategory(topics: string[]): AppManifest['category'] {
  if (topics.includes('developer') || topics.includes('dev')) return 'developer';
  if (topics.includes('entertainment') || topics.includes('media')) return 'entertainment';
  if (topics.includes('system')) return 'system';
  if (topics.includes('utilities')) return 'utilities';
  return 'productivity';
}

export default AppRegistry;
