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
    var dataObj = factory.primaryData[key];
    dataObj.shared = !dataObj.shared;
    DataStorage.storePrimaryData(factory.primaryData);
  }

  function toggleProfShare(key) {
    var dataObj = factory.profMedia[key];
    dataObj.data.shared = !dataObj.data.shared;
    DataStorage.storeProfessionalData(factory.profMedia);
  }

  function toggleSocialShare(key) {
    var dataObj = factory.socialMedia[key];
    dataObj.data.shared = !dataObj.data.shared;
    DataStorage.storeSocialData(factory.socialMedia);
  }

  function createShareObject(primaryToggle, socialToggle, profToggle) {
    var finalShareObj = {
      primary: {},
      social: {},
      professional: {}
    };
    if (primaryToggle) {
      var primaryData = factory.primaryData;
      for (var key in primaryData) {
        if (primaryData.hasOwnProperty(key)) {
          if (primaryData[key].shared == true && MainModel.valueIsNotNull(key, primaryData[key].value)) {
            finalShareObj['primary'][key] = primaryData[key].value;
          }
        }
      }
    }
    if (socialToggle) {
      var socialMedia = factory.socialMedia;
      for (var key in socialMedia) {
        if (socialMedia.hasOwnProperty(key)) {
          if (socialMedia[key].data.shared == true && MainModel.valueIsNotNull('sharePkg', socialMedia[key].sharePkg)) {
            finalShareObj['social'][key] = socialMedia[key].sharePkg;
          }
        }
      }
    }
    if (profToggle) {
      var profMedia = factory.profMedia;
      for (var key in profMedia) {
        if (profMedia.hasOwnProperty(key)) {
          if (profMedia[key].data.shared == true && MainModel.valueIsNotNull('sharePkg', profMedia[key].sharePkg)) {
            finalShareObj['professional'][key] = profMedia[key].sharePkg;
          }
        }
      }
    }
    return finalShareObj;
  }

  return factory;
}
