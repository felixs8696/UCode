(function() {
  angular
    .module('ucode.data')
    .factory('DataStorage', DataStorage);

  DataStorage.$inject = [];

  function DataStorage() {
    var factory = {
      storePrimaryData: storePrimaryData,
      getPrimaryData: getPrimaryData,
      storeProfessionalData: storeProfessionalData,
      getProfessionalData: getProfessionalData,
      storeSocialData: storeSocialData,
      getSocialData: getSocialData
    };

    function storePrimaryData(primaryDataObject) {
      localStorage.setItem('PrimaryData', JSON.stringify(primaryDataObject));
    }

    function getPrimaryData() {
      var primaryDataObject = JSON.parse(localStorage.getItem('PrimaryData'));
      return primaryDataObject;
    }

    function storeProfessionalData(professionalDataObject) {
      localStorage.setItem('ProfessionalData', JSON.stringify(professionalDataObject));
    }

    function getProfessionalData() {
      var professionalDataObject = JSON.parse(localStorage.getItem('ProfessionalData'));
      return professionalDataObject;
    }

    function storeSocialData(socialDataObject) {
      localStorage.setItem('SocialData', JSON.stringify(socialDataObject));
    }

    function getSocialData() {
      var socialDataObject = JSON.parse(localStorage.getItem('SocialData'));
      return socialDataObject;
    }

    return factory;
  }
}());
