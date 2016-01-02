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
      var initialProfMedia = [
        {shared: false, selected: true, title: 'LinkedIn', img: 'img/linkedin.png', username: null, url: null},
        {shared: false, selected: true, title: 'Google-Hangouts', img: 'img/google-hangouts.png', username: null, url: null},
        {shared: false, selected: true, title: 'Skype', img: 'img/skype.png', username: null, url: null},
        {shared: false, selected: true, title: 'GitHub', img: 'img/github.png', username: null, url: null},
        {shared: false, selected: false, title: 'AngelList', img: 'img/angellist.png', username: null, url: null},
      ];
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
      var initialSocialMedia = [
        {shared: false, selected: true, title: 'Facebook', img: 'img/facebook.png', username: null, url: null},
        {shared: false, selected: true, title: 'Instagram', img: 'img/instagram.png', username: null, url: null},
        {shared: false, selected: true, title: 'SnapChat', img: 'img/snapchat.jpg', username: null, url: null},
        {shared: false, selected: true, title: 'Twitter', img: 'img/twitter.png', username: null, url: null}
      ];
      storeSocialData(initialSocialMedia);
    }

    return factory;
  }
}());
