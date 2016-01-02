angular
  .module('ucode.main')
  .controller('MainController', MainController);

MainController.$inject = ['MainModel', 'AddressService', 'MainModel', 'MainShareModel'];

function MainController(MainModel, AddressService, MainModel, MainShareModel) {
  var vm = this;
  vm.primaryData = MainModel.primaryData;
  vm.socialMedia = MainModel.socialMedia;
  vm.profMedia = MainModel.profMedia;

  vm.name = vm.primaryData.name.value || "UCode";
  vm.valueIsNotNull = MainModel.valueIsNotNull;

  vm.contactIcon = "img/contact.png";
  vm.primaryToggle = true;
  vm.profToggle = true;
  vm.socialToggle = true;
  vm.togglePrimary = togglePrimary;
  vm.toggleSocial = toggleSocial;
  vm.toggleProf = toggleProf;
  vm.qrType = qrType;

  vm.togglePrimaryShare = MainShareModel.togglePrimaryShare;
  vm.toggleProfShare = MainShareModel.toggleProfShare;
  vm.toggleSocialShare = MainShareModel.toggleSocialShare;
  vm.printAllData = printAllData;

  function printAllData() {
    console.log(MainShareModel.createShareObject(vm.primaryToggle, vm.socialToggle, vm.profToggle));
  }

  function togglePrimary() {
    vm.primaryToggle = !vm.primaryToggle;
  }

  function toggleSocial() {
    vm.socialToggle = ! vm.socialToggle;
  }

  function toggleProf() {
    vm.profToggle = !vm.profToggle;
  }

  function qrType() {
    if (vm.socialToggle && !vm.profToggle) {
      return 'social';
    }
    if (!vm.socialToggle && vm.profToggle) {
      return 'professional';
    }
    if (!vm.socialToggle && !vm.profToggle && !vm.primaryToggle) {
      return 'none';
    }
    return 'general';
  }
}
