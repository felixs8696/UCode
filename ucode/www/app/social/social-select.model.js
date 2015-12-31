angular
  .module("ucode.social")
  .factory("SocialSelectModel", SocialSelectModel);

SocialSelectModel.$inject = ['DataStorage', '$ionicHistory', '$state'];

function SocialSelectModel(DataStorage, $ionicHistory, $state) {
  var factory = {
    socialMediaData: DataStorage.getSocialData(),
    noMediaSelected: noMediaSelected,
    selectAllMedia: selectAllMedia,
    deselectAllMedia: deselectAllMedia,
    updateAll: updateAll,
    storeSocialData: storeSocialData,
    resetSocialInfo: resetSocialInfo
  }

  function noMediaSelected() {
    for (var i = 0; i < factory.socialMediaData.length; i++) {
      if (factory.socialMediaData[i].selected == true) return false;
    }
    return true;
  }

  function selectAllMedia() {
    for (var i = 0; i < factory.socialMediaData.length; i++) {
      factory.socialMediaData[i].selected = true;
    }
    DataStorage.storeSocialData(factory.socialMediaData);
  }

  function deselectAllMedia() {
    for (var i = 0; i < factory.socialMediaData.length; i++) {
      factory.socialMediaData[i].selected = false;
    }
    DataStorage.storeSocialData(factory.socialMediaData);
  }

  function updateAll(newInputs) {
    for (var i = 0; i < factory.socialMediaData.length; i++) {
      if (newInputs[i]) {
        if (newInputs[i].username) {
            factory.socialMediaData[i].username = newInputs[i].username;
        }
        if (newInputs[i].url) {
            factory.socialMediaData[i].url = newInputs[i].url;
        }
      }
    };
    DataStorage.storeSocialData(factory.socialMediaData);
  }

  function storeSocialData(data) {
    DataStorage.storeSocialData(data);
  }

  function resetSocialInfo() {
    DataStorage.resetSocialData();
    $ionicHistory.clearCache();
    $state.go($state.current, {}, {reload: true});
  }

  return factory;
}
