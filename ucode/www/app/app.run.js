angular
  .module('ucode')
  .run(function($log, $ionicPlatform, DataStorage, Logger) {
    Logger.setLog($log);
    if (!DataStorage.getPrimaryData() || Object.keys(DataStorage.getPrimaryData()).length == 0) {
      var initialPrimaryData = {
        name: {value: 'Felix Su', shared: false, shareIcon: "ion-ios-person", unshareIcon: "ion-ios-person-outline"},
        emails: {value: ['felixs8696@gmail.com'], shared: false, shareIcon: "ion-ios-email", unshareIcon: "ion-ios-email-outline"},
        phones: {value: ['732 673 4738'], shared: false, shareIcon: "ion-ios-telephone", unshareIcon: "ion-ios-telephone-outline"},
        school: {value: 'UC Berkeley', shared: false, shareIcon: "ion-ios-book", unshareIcon: "ion-ios-book-outline"},
        address: {value: {
          street: '2520 Hillegass Ave. Apt 110',
          city: 'Berkeley',
          state: 'CA',
          country: 'United States',
          zipcode: '94704'
        }, shared: false, shareIcon: "ion-ios-home", unshareIcon: "ion-ios-home-outline"},
        websites: {value: ['http://felixsu.com'], shared: false, shareIcon: "ion-ios-world", unshareIcon: "ion-ios-world-outline"}
      };
      DataStorage.storePrimaryData(initialPrimaryData);
    }
    if (!DataStorage.getSocialData() || Object.keys(DataStorage.getSocialData()).length == 0) {
      var initialSocialMedia = [
        {shared: false, selected: true, title: 'Facebook', img: 'img/facebook.png', username: null, url: null},
        {shared: false, selected: true, title: 'Instagram', img: 'img/instagram.png', username: null, url: null},
        {shared: false, selected: true, title: 'SnapChat', img: 'img/snapchat.jpg', username: null, url: null},
        {shared: false, selected: true, title: 'Twitter', img: 'img/twitter.png', username: null, url: null}
      ];
      DataStorage.storeSocialData(initialSocialMedia);
    }
    if (!DataStorage.getProfessionalData() || Object.keys(DataStorage.getProfessionalData()).length == 0) {
      var initialProfMedia = [
        {shared: false, selected: true, title: 'LinkedIn', img: 'img/linkedin.png', username: null, url: null},
        {shared: false, selected: true, title: 'Google-Hangouts', img: 'img/google-hangouts.png', username: null, url: null},
        {shared: false, selected: true, title: 'Skype', img: 'img/skype.png', username: null, url: null},
        {shared: false, selected: true, title: 'GitHub', img: 'img/github.png', username: null, url: null},
        {shared: false, selected: false, title: 'AngelList', img: 'img/angellist.png', username: null, url: null},
      ];
      DataStorage.storeProfessionalData(initialProfMedia);
    }
    if (!DataStorage.getShareObj() || Object.keys(DataStorage.getShareObj()).length == 0) {
      var initialShareObj = {
        primary: {},
        social: [],
        professional: []
      };
      DataStorage.storeShareObj(initialShareObj);
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
