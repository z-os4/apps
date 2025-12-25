/**
 * @z-os/apps v4.2.0 - zOS Applications
 */

// Core Apps
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

// Extended Apps
export { default as ZFinder } from './apps/ZFinder';
export type { FileItem, FinderConfig } from './apps/ZFinder';

export { default as ZSafari } from './apps/ZSafari';
export type { SafariConfig } from './apps/ZSafari';

export { default as ZMail } from './apps/ZMail';
export type { MailConfig } from './apps/ZMail';

export { default as ZContacts } from './apps/ZContacts';
export type { Contact, ContactProfile, ContactsConfig } from './apps/ZContacts';

export { default as ZGitHubStats } from './apps/ZGitHubStats';
export type { GitHubStatsData, GitHubStatsConfig } from './apps/ZGitHubStats';

export { default as ZAssistant } from './apps/ZAssistant';
export type { AssistantMessage, AssistantTip, AssistantConfig } from './apps/ZAssistant';

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
