const pkg = require('./package.json')
const getEnvConfig = require('./config')

const { version } = pkg
const { APP_ENV } = process.env

module.exports = {
  expo: {
    name: 'expo-app-typescript-starter',
    slug: 'expo-app-typescript-starter',
    description: 'A expo app starter!',
    owner: 'aidolfe',
    version,
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.elenh.expoapptypescriptstarter',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.elenh.expoapptypescriptstarter',
      googleServicesFile: './google-services.json',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: getEnvConfig(APP_ENV),
  },
}
