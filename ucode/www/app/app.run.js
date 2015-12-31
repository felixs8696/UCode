angular
  .module('ucode')
  .run(function($log, $ionicPlatform, DataStorage, Logger) {
    Logger.setLog($log);
    if (!DataStorage.getPrimaryData() || Object.keys(DataStorage.getPrimaryData()).length == 0) {
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
    if (!DataStorage.getSocialData() || Object.keys(DataStorage.getSocialData()).length == 0) {
      var initialSocialMedia = [
        {selected: true, title: 'Facebook', img: 'img/facebook.png', username: null, url: null},
        {selected: true, title: 'Instagram', img: 'img/instagram.png', username: null, url: null},
        {selected: false, title: 'SnapChat', img: 'img/snapchat.jpg', username: null, url: null},
        {selected: false, title: 'Twitter', img: 'img/twitter.png', username: null, url: null}
      ];
      DataStorage.storeSocialData(initialSocialMedia);
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
