(function() {
  angular
    .module('ucode.data')
    .factory('DataStorage', DataStorage);

  DataStorage.$inject = [];

  function DataStorage() {
    var factory = {
      storePrimaryData: storePrimaryData,
      getPrimaryData: getPrimaryData,
      removePrimaryData: removePrimaryData,
      resetPrimaryData: resetPrimaryData,
      storeProfessionalData: storeProfessionalData,
      getProfessionalData: getProfessionalData,
      removeProfessionalData: removeProfessionalData,
      resetProfessionalData: resetProfessionalData,
      storeSocialData: storeSocialData,
      getSocialData: getSocialData,
      removeSocialData: removeSocialData,
      resetSocialData: resetSocialData
    };

    function storePrimaryData(primaryDataObject) {
      localStorage.setItem('PrimaryData', JSON.stringify(primaryDataObject));
    }

    function getPrimaryData() {
      var primaryDataObject = JSON.parse(localStorage.getItem('PrimaryData'));
      return primaryDataObject;
    }

    function removePrimaryData() {
      localStorage.removeItem('PrimaryData');
    }

    function resetPrimaryData() {
      removePrimaryData();
      var initialPrimaryData = {
        name: {value: null, shared: true, shareIcon: "ion-ios-person", unshareIcon: "ion-ios-person-outline"},
        emails: {value: [], shared: true, shareIcon: "ion-ios-email", unshareIcon: "ion-ios-email-outline"},
        phones: {value: [], shared: true, shareIcon: "ion-ios-telephone", unshareIcon: "ion-ios-telephone-outline"},
        school: {value: null, shared: true, shareIcon: "ion-ios-book", unshareIcon: "ion-ios-book-outline"},
        address: {value: {
          street: null,
          city: null,
          state: null,
          country: null,
          zipcode: null
        }, shared: false, shareIcon: "ion-ios-home", unshareIcon: "ion-ios-home-outline"},
        websites: {value: [], shared: true, shareIcon: "ion-ios-world", unshareIcon: "ion-ios-world-outline"}
      };
      storePrimaryData(initialPrimaryData);
    }

    function storeProfessionalData(professionalDataObject) {
      localStorage.setItem('ProfessionalData', JSON.stringify(professionalDataObject));
    }

    function getProfessionalData() {
      var professionalDataObject = JSON.parse(localStorage.getItem('ProfessionalData'));
      return professionalDataObject;
    }

    function removeProfessionalData() {
      localStorage.removeItem('ProfessionalData');
    }

    function resetProfessionalData() {
      removeProfessionalData();
      var initialProfMedia = {
        linkedin: {data: {shared: false, selected: true, img: 'img/linkedin.png'}, sharePkg: {title: 'LinkedIn', username: null, url: null}},
        googleHangouts: {data: {shared: false, selected: true, img: 'img/google-hangouts.png'}, sharePkg: {title: 'Google-Hangouts', username: null, url: null}},
        skype: {data: {shared: false, selected: true, img: 'img/skype.png'}, sharePkg: {title: 'Skype', username: null, url: null}},
        github: {data: {shared: false, selected: true, img: 'img/github.png'}, sharePkg: {title: 'GitHub', username: null, url: null}},
        angelList: {data: {shared: false, selected: false, img: 'img/angellist.png'}, sharePkg: {title: 'AngelList', username: null, url: null}}
      };
      storeProfessionalData(initialProfMedia);
    }

    function storeSocialData(socialDataObject) {
      localStorage.setItem('SocialData', JSON.stringify(socialDataObject));
    }

    function getSocialData() {
      var socialDataObject = JSON.parse(localStorage.getItem('SocialData'));
      return socialDataObject;
    }

    function removeSocialData() {
      localStorage.removeItem('ProfessionalData');
    }

    function resetSocialData() {
      removeSocialData();
      var initialSocialMedia = {
        facebook: {data: {shared: false, selected: true, img: 'img/facebook.png'}, sharePkg: {title: 'Facebook', username: null, url: null}},
        instagram: {data: {shared: false, selected: true, img: 'img/instagram.png'}, sharePkg: {title: 'Instagram', username: null, url: null}},
        snapchat: {data: {shared: false, selected: true, img: 'img/snapchat.jpg'}, sharePkg: {title: 'SnapChat', username: null, url: null}},
        twitter: {data: {shared: false, selected: true, img: 'img/twitter.png'}, sharePkg: {title: 'Twitter', username: null, url: null}}
      };
      storeSocialData(initialSocialMedia);
    }

    return factory;
  }
}());
