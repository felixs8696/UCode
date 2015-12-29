angular
  .module('ucode')
  .run(function($log, $ionicPlatform, DataStorage, Logger) {
    Logger.setLog($log);
    if (!DataStorage.getPrimaryData()) {
      var initialPrimaryData = {
        name: null,
        emails: [],
        phones: [],
        school: null,
        address: {
          street: null,
          city: null,
          state: null,
          country: null,
          zipcode: null
        },
        websites: []
      };
      DataStorage.storePrimaryData(initialPrimaryData);
    }
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  });
