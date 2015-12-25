angular
  .module('ucode.primary')
  .controller('PrimaryController', PrimaryController);

PrimaryController.$inject = ['$state', 'DataStorage', '$ionicHistory', '$window', 'AddressService'];

function PrimaryController($state, DataStorage, $ionicHistory, $window, AddressService) {
  var vm = this;
  var nullAddress = {
    street: null,
    city: null,
    state: null,
    country: null,
    zipcode: null
  };

  vm.replaceNameToggle = false;
  vm.addEmailToggle = false;
  vm.addPhoneToggle = false;
  vm.replaceSchoolToggle = false;
  vm.replaceAddressToggle = false;
  vm.addWebsiteToggle = false;

  vm.newEmail = null;
  vm.newName = null;
  vm.newPhone = null;
  vm.newSchool = null;
  vm.newAddress = {
    street: null,
    city: null,
    state: null,
    country: null,
    zipcode: null
  };
  vm.newWebsite = null;

  vm.primaryInfo = DataStorage.getPrimaryData();

  vm.toggleReplaceName = toggleReplaceName;
  vm.saveName = saveName;
  vm.toggleAddEmail = toggleAddEmail;
  vm.saveEmail = saveEmail;
  vm.toggleAddPhone = toggleAddPhone;
  vm.savePhone = savePhone;
  vm.toggleReplaceSchool = toggleReplaceSchool;
  vm.saveSchool = saveSchool;
  vm.toggleReplaceAddress = toggleReplaceAddress;
  vm.saveAddress = saveAddress;
  vm.toggleAddWebsite = toggleAddWebsite;
  vm.saveWebsite = saveWebsite;
  vm.isNullAddress = AddressService.isNullAddress;
  vm.formattedAddress = AddressService.formattedAddress;
  vm.resetInfo = resetInfo;

  function toggleReplaceName() {
    vm.replaceNameToggle = true;
  }

  function saveName(name) {
    vm.replaceNameToggle = false;
    vm.newName = null;
    if (name) {
        vm.primaryInfo.name = name;
        DataStorage.storePrimaryData(vm.primaryInfo);
    }
  }

  function toggleAddEmail() {
    vm.addEmailToggle = true;
  }

  function saveEmail(email) {
    vm.addEmailToggle = false;
    vm.newEmail = null;
    if (email) {
        vm.primaryInfo.emails.push(email);
        DataStorage.storePrimaryData(vm.primaryInfo);
    }
  }

  function toggleAddPhone() {
    vm.addPhoneToggle = true;
  }

  function savePhone(number) {
    vm.addPhoneToggle = false;
    vm.newPhone = null;
    if (number) {
        vm.primaryInfo.phones.push(number);
        DataStorage.storePrimaryData(vm.primaryInfo);
    }
  }

  function toggleReplaceSchool() {
    vm.replaceSchoolToggle = true;
  }

  function saveSchool(school) {
    vm.replaceSchoolToggle = false;
    vm.newSchool = null;
    if (school) {
        vm.primaryInfo.school = school;
        DataStorage.storePrimaryData(vm.primaryInfo);
    }
  }

  function toggleReplaceAddress() {
    vm.replaceAddressToggle = true;
  }

  function saveAddress(address) {
    vm.replaceAddressToggle = false;
    vm.newAddress = nullAddress;
    if (!AddressService.isNullAddress(address)) {
        vm.primaryInfo.address = address;
        DataStorage.storePrimaryData(vm.primaryInfo);
    }
  }

  function toggleAddWebsite() {
    vm.addWebsiteToggle = true;
  }

  function saveWebsite(site) {
    vm.addWebsiteToggle = false;
    vm.newWebsite = null;
    if (site) {
        vm.primaryInfo.websites.push(site);
        DataStorage.storePrimaryData(vm.primaryInfo);
    }
  }

  function resetInfo() {
    DataStorage.resetPrimaryData();
    $ionicHistory.clearCache();
    $state.go($state.current, {}, {reload: true});
    // $window.location.reload(true)
  }

}
