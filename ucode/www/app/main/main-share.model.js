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
    toggleSocialShare: toggleSocialShare,
    createShareObject: createShareObject
  }

  function togglePrimaryShare(key) {
    factory.primaryData[key].shared = !factory.primaryData[key].shared;
    DataStorage.storePrimaryData(factory.primaryData);
  }

  function toggleProfShare(key) {
    factory.profMedia[key].data.shared = !factory.profMedia[key].data.shared;
    DataStorage.storeProfessionalData(factory.profMedia);
  }

  function toggleSocialShare(key) {
    factory.socialMedia[key].data.shared = !factory.socialMedia[key].data.shared;
    DataStorage.storeSocialData(factory.socialMedia);
  }

  function createShareObject(primaryToggle, socialToggle, profToggle) {
    var shareObj = [];
    if (primaryToggle)
      shareObj['primary'] = DataStorage.getPrimaryData();
    if (socialToggle)
      shareObj['social'] = DataStorage.getSocialData();
    if (profToggle)
      shareObj['professional'] = DataStorage.getProfessionalData();
    DataStorage.storeShareObj(shareObj);
    return shareObj;
  }

  return factory;
}
