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

  function addNewEmail(email) {
    if (email) {
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
    var primaryData = factory.primaryInfo;
    if (newInputs != null) {
      if (newInputs.name != null) primaryData.name.value = newInputs.name;
      if (newInputs.email) primaryData.emails.value.push(newInputs.email);
      if (newInputs.phone) primaryData.phones.value.push(newInputs.phone);
      if (newInputs.school != null) primaryData.school.value = newInputs.school;
      if (!AddressService.isNullAddress(newInputs.address)) primaryData.address.value = newInputs.address;
      if (newInputs.website) primaryData.websites.value.push(newInputs.website);
    }
    primaryData.name.value = deleteEmptyInput(primaryData.name);
    primaryData.emails.value = deleteEmptyArrayInputs(primaryData.emails.value);
    primaryData.phones.value = deleteEmptyArrayInputs(primaryData.phones.value);
    primaryData.school.value = deleteEmptyInput(primaryData.school);
    primaryData.websites.value = deleteEmptyArrayInputs(primaryData.websites.value);
    console.log(primaryData);
    DataStorage.storePrimaryData(primaryData);
    console.log(DataStorage.getPrimaryData());
  }

  function deleteEmptyArrayInputs(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].length == 0) array.splice(i, 1);
    }
    return array;
  }

  function deleteEmptyInput(object) {
    if (object.value != null && object.value.length == 0) {
      return null;
    }
    return object.value;
  }

  function resetPrimaryInfo() {
    DataStorage.resetPrimaryData();
    $ionicHistory.clearCache();
    $state.go($state.current, {}, {reload: true});
  }

  return factory;
}
