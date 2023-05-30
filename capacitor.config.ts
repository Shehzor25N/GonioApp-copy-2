import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.GaitTime.app',
  appName: 'GaitTracker',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    // Add debug signing configuration
    debug: {
      signingConfig: 'debug',
    },
  },
  // Other configuration options
};



export default config;
