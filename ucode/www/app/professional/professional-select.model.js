angular
  .module("ucode.professional")
  .factory("ProfSelectModel", ProfSelectModel);

ProfSelectModel.$inject = ['DataStorage', '$ionicHistory', '$state'];

function ProfSelectModel(DataStorage, $ionicHistory, $state) {
  var factory = {
    profMediaData: DataStorage.getProfessionalData(),
    noMediaSelected: noMediaSelected,
    selectAllMedia: selectAllMedia,
    deselectAllMedia: deselectAllMedia,
    updateAll: updateAll,
    storeProfessionalData: storeProfessionalData,
    resetProfInfo: resetProfInfo
  }

  function noMediaSelected() {
    for (var key in factory.profMediaData) {
      if (factory.profMediaData.hasOwnProperty(key)) {
        if (factory.profMediaData[key].data.selected == true) return false;
      }
    }
    return true;
  }

  function setMediaSelectedValue(bool) {
    for (var key in factory.profMediaData) {
      if (factory.profMediaData.hasOwnProperty(key)) {
        factory.profMediaData[key].data.selected = bool;
      }
    }
    DataStorage.storeProfessionalData(factory.profMediaData);
  }

  function selectAllMedia() {
    setMediaSelectedValue(true);
  }

  function deselectAllMedia() {
    setMediaSelectedValue(false);
  }

  function updateAll(newInputs) {
    for (var key in factory.profMediaData) {
      if (factory.profMediaData.hasOwnProperty(key)) {
        if (newInputs[key]) {
          if (newInputs[key].sharePkg.username) {
              factory.profMediaData[key].sharePkg.username = newInputs[key].sharePkg.username;
          }
          if (newInputs[key].sharePkg.url) {
              factory.profMediaData[key].sharePkg.url = newInputs[key].sharePkg.url;
          }
        }
      }
    }
    DataStorage.storeProfessionalData(factory.profMediaData);
  }

  function storeProfessionalData(data) {
    DataStorage.storeProfessionalData(data);
  }

  function resetProfInfo() {
    DataStorage.resetProfessionalData();
    $ionicHistory.clearCache();
    $state.go($state.current, {}, {reload: true});
  }

  return factory;
}
