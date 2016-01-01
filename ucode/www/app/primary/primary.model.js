angular
  .module('ucode.primary')
  .factory('PrimaryModel', PrimaryModel);

PrimaryModel.$inject = ['DataStorage', '$ionicHistory', '$state', 'AddressService'];

function PrimaryModel(DataStorage, $ionicHistory, $state, AddressService) {
  var factory = {
    primaryInfo: DataStorage.getPrimaryData(),
    addNewEmail: addNewEmail,
    addNewPhone: addNewPhone,
    addNewWebsite: addNewWebsite,
    updateAllPrimary: updateAllPrimary,
    resetPrimaryInfo: resetPrimaryInfo
  }

  // function storePrimaryData() {
  //   DataStorage.storePrimaryData(factory.primaryInfo);
  // }

  function addNewEmail(email) {
    console.log("adding email");
    if (email) {
      console.log(email);
      factory.primaryInfo.emails.value.push(email);
      DataStorage.storePrimaryData(factory.primaryInfo);
    }
  }

  function addNewPhone(phone) {
    if (phone) {
      factory.primaryInfo.phones.value.push(phone);
      DataStorage.storePrimaryData(factory.primaryInfo);
    }
  }

  function addNewWebsite(website) {
    if (website) {
      factory.primaryInfo.websites.value.push(website);
      DataStorage.storePrimaryData(factory.primaryInfo);
    }
  }

  function updateAllPrimary(newInputs) {
    if (newInputs) {
      if (newInputs.name) factory.primaryInfo.name.value = newInputs.name;
      if (newInputs.email) factory.primaryInfo.emails.value.push(newInputs.email);
      if (newInputs.phone) factory.primaryInfo.phones.value.push(newInputs.phone);
      if (newInputs.school) factory.primaryInfo.school.value = newInputs.school;
      if (!AddressService.isNullAddress(newInputs.address)) factory.primaryInfo.address.value = newInputs.address;
      if (newInputs.website) factory.primaryInfo.websites.value.push(newInputs.website);
    }
    DataStorage.storePrimaryData(factory.primaryInfo);
  }

  function resetPrimaryInfo() {
    DataStorage.resetPrimaryData();
    $ionicHistory.clearCache();
    $state.go($state.current, {}, {reload: true});
  }

  return factory;
}
