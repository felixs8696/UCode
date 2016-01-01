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
    for (var i = 0; i < factory.profMediaData.length; i++) {
      if (factory.profMediaData[i].selected == true) return false;
    }
    return true;
  }

  function selectAllMedia() {
    for (var i = 0; i < factory.profMediaData.length; i++) {
      factory.profMediaData[i].selected = true;
    }
    DataStorage.storeProfessionalData(factory.profMediaData);
  }

  function deselectAllMedia() {
    for (var i = 0; i < factory.profMediaData.length; i++) {
      factory.profMediaData[i].selected = false;
    }
    DataStorage.storeProfessionalData(factory.profMediaData);
  }

  function updateAll(newInputs) {
    for (var i = 0; i < factory.profMediaData.length; i++) {
      if (newInputs[i]) {
        if (newInputs[i].username) {
            factory.profMediaData[i].username = newInputs[i].username;
        }
        if (newInputs[i].url) {
            factory.profMediaData[i].url = newInputs[i].url;
        }
      }
    };
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
