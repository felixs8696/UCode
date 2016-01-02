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
      var initialSocialMedia = {
        facebook: {data: {shared: false, selected: true, img: 'img/facebook.png'}, sharePkg: {title: 'Facebook', username: null, url: null}},
        instagram: {data: {shared: false, selected: true, img: 'img/instagram.png'}, sharePkg: {title: 'Instagram', username: null, url: null}},
        snapchat: {data: {shared: false, selected: true, img: 'img/snapchat.jpg'}, sharePkg: {title: 'SnapChat', username: null, url: null}},
        twitter: {data: {shared: false, selected: true, img: 'img/twitter.png'}, sharePkg: {title: 'Twitter', username: null, url: null}}
      };
      DataStorage.storeSocialData(initialSocialMedia);
    }
    if (!DataStorage.getProfessionalData() || Object.keys(DataStorage.getProfessionalData()).length == 0) {
      var initialProfMedia = {
        linkedin: {data: {shared: false, selected: true, img: 'img/linkedin.png'}, sharePkg: {title: 'LinkedIn', username: null, url: null}},
        googleHangouts: {data: {shared: false, selected: true, img: 'img/google-hangouts.png'}, sharePkg: {title: 'Google-Hangouts', username: null, url: null}},
        skype: {data: {shared: false, selected: true, img: 'img/skype.png'}, sharePkg: {title: 'Skype', username: null, url: null}},
        github: {data: {shared: false, selected: true, img: 'img/github.png'}, sharePkg: {title: 'GitHub', username: null, url: null}},
        angelList: {data: {shared: false, selected: false, img: 'img/angellist.png'}, sharePkg: {title: 'AngelList', username: null, url: null}}
      };
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
