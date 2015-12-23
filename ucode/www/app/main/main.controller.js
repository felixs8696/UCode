angular
  .module('ucode.main')
  .controller('MainController', MainController);

MainController.$inject = ['DataStorage'];

function MainController(DataStorage) {
  var vm = this;
  vm.primaryData = DataStorage.getPrimaryData();
  console.log(vm.primaryData);
}
