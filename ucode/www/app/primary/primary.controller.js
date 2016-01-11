angular
  .module('ucode.primary')
  .controller('PrimaryController', PrimaryController);

PrimaryController.$inject = ['$scope', '$state', 'PrimaryModel', '$ionicHistory', '$window', 'AddressService', 'Modal', 'Popup'];

function PrimaryController($scope, $state, PrimaryModel, $ionicHistory, $window, AddressService, Modal, Popup) {
  var vm = this;

  vm.primaryInfo = PrimaryModel.primaryInfo;
  var initialState = {
    name: vm.primaryInfo.name.value,
    email: null,
    phone: null,
    school: vm.primaryInfo.school.value,
    address: {
      street: null,
      city: null,
      state: null,
      country: null,
      zipcode: null
    },
    website: null
  };
  vm.newInputs = initialState;

  vm.isNullAddress = AddressService.isNullAddress;
  vm.formattedAddress = AddressService.formattedAddress;

  vm.addNewEmail = addNewEmail;
  vm.addNewPhone = addNewPhone;
  vm.addNewWebsite = addNewWebsite;
  vm.updateAllPrimary = PrimaryModel.updateAllPrimary;
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
    if (vm.newInputs && vm.newInputs.email.length > 0) {
      PrimaryModel.addNewEmail(vm.newInputs.email);
      vm.newInputs.email = null;
    }
  }

  function addNewPhone() {
    if (vm.newInputs && vm.newInputs.phone.length > 0) {
      PrimaryModel.addNewPhone(vm.newInputs.phone);
      vm.newInputs.phone = null;
    }
  }

  function addNewWebsite() {
    if (vm.newInputs && vm.newInputs.website.length > 0) {
      PrimaryModel.addNewWebsite(vm.newInputs.website);
      vm.newInputs.website = null;
    }
  }

  function updateAllPrimary() {
    PrimaryModel.updateAllPrimary(vm.newInputs);
    vm.newInputs = initialState;
  }

  function showResetWarning() {
    Popup.withFunc("Warning", "Are you sure you want to clear all your primary contact data?", "Clearing Primary data message shown", PrimaryModel.resetPrimaryInfo);
  }

}
