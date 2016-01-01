angular
  .module('ucode.services')
  .factory('SharedMediaService', SharedMediaService);

SharedMediaService.$inject = ['DataStorage'];

function SharedMediaService(DataStorage) {
  var factory = {
    primaryData: DataStorage.getPrimaryData(),
    socialMediaData: DataStorage.getSocialData(),
    profMediaData: DataStorage.getProfessionalData(),
  }

  function shareAllSelectedMedia() {
    shareOnlyPrimaryData();
    shareOnlySocialMedia();
    shareOnlyProfessional();
  }

  function shareOnlyPrimaryData() {
    
  }

  function shareOnlySocialMedia() {
    for (var i = 0; i < factory.socialMediaData.length; i++) {
      factory.socialMediaData[i].shared = true;
    }
    DataStorage.storeSocialData(factory.socialMediaData);
  }

  function shareOnlyProfessional() {
    for (var i = 0; i < factory.profMediaData.length; i++) {
      factory.profMediaData[i].shared = true;
    }
    DataStorage.storeSocialData(factory.profMediaData);
  }

  function unShareAllMedia() {
    for (var i = 0; i < factory.socialMediaData.length; i++) {
      factory.socialMediaData[i].selected = false;
    }
    DataStorage.storeSocialData(factory.socialMediaData);
  }

  // function updateAll(newInputs) {
  //   for (var i = 0; i < factory.socialMediaData.length; i++) {
  //     if (newInputs[i]) {
  //       if (newInputs[i].username) {
  //           factory.socialMediaData[i].username = newInputs[i].username;
  //       }
  //       if (newInputs[i].url) {
  //           factory.socialMediaData[i].url = newInputs[i].url;
  //       }
  //     }
  //   };
  //   DataStorage.storeSocialData(factory.socialMediaData);
  // }

  return factory;
}
