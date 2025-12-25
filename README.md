# @z-os/apps

[![npm version](https://img.shields.io/npm/v/@z-os/apps.svg)](https://www.npmjs.com/package/@z-os/apps)
[![Documentation](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](https://z-os4.github.io/apps/)
[![CI](https://github.com/z-os4/apps/actions/workflows/ci.yml/badge.svg)](https://github.com/z-os4/apps/actions/workflows/ci.yml)

zOS Apps - Built-in applications for zOS desktop environment. v4.2.0

**[📚 Full Documentation](https://z-os4.github.io/apps/)**

## Install
```bash
npm install @z-os/apps
```

## Apps
- ZCalculator - Scientific calculator
- ZTerminal - Terminal emulator
- ZFinder - File browser
- ZMail - Email client
- ZWeather - Weather app
- ZNotes - Notes app
- ZMusic - Music player
- ZPhotos - Photo gallery
- ZCalendar - Calendar app
- ZClock - World clock
- ZTextPad - Text editor
- ZCode - IDE (Xcode-style)
- ZSafari - Web browser
- ZStickies - Sticky notes
- ZSystemPreferences - System settings

## Usage
```tsx
import { ZCalculator, ZTerminal, ZFinder } from '@z-os/apps';

// Use with ZWindow from @z-os/ui
<ZWindow>
  <ZCalculator />
</ZWindow>
```
