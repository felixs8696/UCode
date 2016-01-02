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
    for (var key in factory.socialMediaData) {
      if (factory.socialMediaData.hasOwnProperty(key)) {
        if (factory.socialMediaData[key].data.selected == true) return false;
      }
    }
    return true;
  }

  function setMediaSelectedValue(bool) {
    for (var key in factory.socialMediaData) {
      if (factory.socialMediaData.hasOwnProperty(key)) {
        factory.socialMediaData[key].data.selected = bool;
      }
    }
    DataStorage.storeSocialData(factory.socialMediaData);
  }

  function selectAllMedia() {
    setMediaSelectedValue(true);
  }

  function deselectAllMedia() {
    setMediaSelectedValue(false);
  }

  function updateAll(newInputs) {
    for (var key in factory.socialMediaData) {
      if (factory.socialMediaData.hasOwnProperty(key)) {
        if (newInputs[key]) {
          if (newInputs[key].sharePkg.username) {
              factory.socialMediaData[key].sharePkg.username = newInputs[key].sharePkg.username;
          }
          if (newInputs[key].sharePkg.url) {
              factory.socialMediaData[key].sharePkg.url = newInputs[key].sharePkg.url;
          }
        }
      }
    }
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
