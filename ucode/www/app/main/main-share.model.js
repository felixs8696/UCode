angular
  .module('ucode.main')
  .factory('MainShareModel', MainShareModel);

MainShareModel.$inject = ['MainModel', 'DataStorage'];

function MainShareModel(MainModel, DataStorage) {
  var factory = {
    primaryData: MainModel.primaryData,
    profMedia: MainModel.profMedia,
    socialMedia: MainModel.socialMedia,
    togglePrimaryShare: togglePrimaryShare,
    toggleProfShare: toggleProfShare,
    toggleSocialShare: toggleSocialShare
  }

  function togglePrimaryShare(key) {
    factory.primaryData[key].shared = !factory.primaryData[key].shared;
    DataStorage.storePrimaryData(factory.primaryData);
  }

  function toggleProfShare(index) {
    factory.profMedia[index].shared = !factory.profMedia[index].shared;
    DataStorage.storeProfessionalData(factory.profMedia);
  }

  function toggleSocialShare(index) {
    factory.socialMedia[index].shared = !factory.socialMedia[index].shared;
    DataStorage.storeSocialData(factory.socialMedia);
  }

  return factory;
}
