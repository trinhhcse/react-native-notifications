module.exports = {
  dependency: {
    platforms: {
      ios: {},
      android: {
        sourceDir: './lib/android/app',
        packageInstance: 'new RNNotificationsPackage(getApplication())',
      }
    },
    assets: []
  },
};
