angular
  .module('ucode')
  .run(function($log, $ionicPlatform, DataStorage, Logger) {
    Logger.setLog($log);
    if (!DataStorage.getPrimaryData() || Object.keys(DataStorage.getPrimaryData()).length == 0) {
      var initialPrimaryData = {
        name: {value: null, shared: false, icon: "ion-ios-contact"},
        emails: {value: [], shared: false, icon: "ion-ios-at"},
        phones: {value: [], shared: false, icon: "ion-iphone"},
        school: {value: null, shared: false, icon: "ion-bookmark"},
        address: {value: {
          street: null,
          city: null,
          state: null,
          country: null,
          zipcode: null
        }, shared: false, icon: "ion-ios-home"},
        websites: {value: [], shared: false, icon: "ion-link"}
      };
      DataStorage.storePrimaryData(initialPrimaryData);
    }
    if (!DataStorage.getSocialData() || Object.keys(DataStorage.getSocialData()).length == 0) {
      var initialSocialMedia = [
        {shared: false, selected: true, title: 'Facebook', img: 'img/facebook.png', username: null, url: null},
        {shared: false, selected: true, title: 'Instagram', img: 'img/instagram.png', username: null, url: null},
        {shared: false, selected: false, title: 'SnapChat', img: 'img/snapchat.jpg', username: null, url: null},
        {shared: false, selected: false, title: 'Twitter', img: 'img/twitter.png', username: null, url: null}
      ];
      DataStorage.storeSocialData(initialSocialMedia);
    }
    if (!DataStorage.getProfessionalData() || Object.keys(DataStorage.getProfessionalData()).length == 0) {
      var initialProfMedia = [
        {shared: false, selected: true, title: 'LinkedIn', img: 'img/linkedin.png', username: null, url: null}
      ];
      DataStorage.storeProfessionalData(initialProfMedia);
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
