/**
 * @z-os/apps v4.2.0 - zOS Applications
 */

// Apps
export { default as ZCalculator } from './apps/ZCalculator';
export { default as ZTerminal } from './apps/ZTerminal';
export { default as ZNotes } from './apps/ZNotes';
export { default as ZTextPad } from './apps/ZTextPad';
export { default as ZClock } from './apps/ZClock';
export { default as ZCalendar } from './apps/ZCalendar';
export { default as ZWeather } from './apps/ZWeather';
export { default as ZPhotos } from './apps/ZPhotos';
export { default as ZMusic } from './apps/ZMusic';
export { default as ZStickies } from './apps/ZStickies';
export { default as ZSystemPreferences } from './apps/ZSystemPreferences';
export { default as ZAppStore } from './apps/ZAppStore';

// App Registry - Install, update, manage apps
export {
  AppRegistry,
  getAppRegistry,
  fetchGitHubApps,
  BUNDLED_APPS,
} from './registry';
export type { AppManifest, InstalledApp, AppUpdate } from './registry';

// App Types
export * from './types';
