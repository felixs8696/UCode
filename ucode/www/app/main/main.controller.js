angular
  .module('ucode.main')
  .controller('MainController', MainController);

MainController.$inject = ['MainModel', 'AddressService', 'MainModel'];

function MainController(MainModel, AddressService, MainModel) {
  var vm = this;
  vm.primaryData = MainModel.primaryData;
  vm.name = vm.primaryData.name.value || "UCode";
  vm.valueIsNotNull = MainModel.valueIsNotNull;

  vm.contactIcon = "img/contact.png";

  vm.socialMedia = MainModel.socialMedia;
  vm.profMedia = MainModel.profMedia;

}
