angular
  .module('ucode.primary')
  .controller('PrimaryController', PrimaryController);

PrimaryController.$inject = ['$scope', '$state', 'DataStorage', '$ionicHistory', '$window', 'AddressService', 'Modal', 'Popup'];

function PrimaryController($scope, $state, DataStorage, $ionicHistory, $window, AddressService, Modal, Popup) {
  var vm = this;

  var initialState = {
    name: null,
    email: null,
    phone: null,
    school: null,
    address: {
      street: null,
      city: null,
      state: null,
      country: null,
      zipcode: null
    },
    website: null
  };

  vm.primaryInfo = DataStorage.getPrimaryData();
  vm.newInputs = initialState;

  vm.isNullAddress = AddressService.isNullAddress;
  vm.formattedAddress = AddressService.formattedAddress;

  vm.addNewEmail = addNewEmail;
  vm.addNewPhone = addNewPhone;
  vm.addNewWebsite = addNewWebsite;
  vm.updateAllPrimary = updateAllPrimary;
  vm.showResetWarning = showResetWarning;
  vm.showEditModal = showEditModal;
  vm.closeEditModal = closeEditModal;

  vm.editModal = Modal.getModal('app/primary/edit-primary.html', $scope);

  function showEditModal() {
    vm.editModal
      .then(function(modal) {
        modal.show();
      });
  }

  function closeEditModal() {
    updateAllPrimary();
    vm.editModal
      .then(function(modal) {
        modal.hide();
      });
  }

  function addNewEmail() {
    if (vm.newInputs) {
      if (vm.newInputs.email) {
        vm.primaryInfo.emails.push(vm.newInputs.email);
        vm.newInputs.email = null;
      }
    }
  }

  function addNewPhone() {
    if (vm.newInputs) {
      if (vm.newInputs.phone) {
        vm.primaryInfo.phones.push(vm.newInputs.phone);
        vm.newInputs.phone = null;
      }
    }
  }

  function addNewWebsite() {
    if (vm.newInputs) {
      if (vm.newInputs.website) {
        vm.primaryInfo.websites.push(vm.newInputs.website);
        vm.newInputs.website = null;
      }
    }
  }

  function updateAllPrimary() {
    if (vm.newInputs) {
      if (vm.newInputs.name) vm.primaryInfo.name = vm.newInputs.name;
      if (vm.newInputs.email) vm.primaryInfo.emails.push(vm.newInputs.email);
      if (vm.newInputs.phone) vm.primaryInfo.phones.push(vm.newInputs.phone);
      if (vm.newInputs.school) vm.primaryInfo.school = vm.newInputs.school;
      if (!AddressService.isNullAddress(vm.newInputs.address)) vm.primaryInfo.address = vm.newInputs.address;
      if (vm.newInputs.website) vm.primaryInfo.websites.push(vm.newInputs.website);
    }
    DataStorage.storePrimaryData(vm.primaryInfo);
    vm.newInputs = initialState;
  }

  function resetPrimaryInfo() {
    DataStorage.resetPrimaryData();
    $ionicHistory.clearCache();
    $state.go($state.current, {}, {reload: true});
  }

  function showResetWarning() {
    Popup.withFunc("Warning", "Are you sure you want to clear all your primary contact data?", "Clearing Primary data message shown", resetPrimaryInfo);
  }

}
