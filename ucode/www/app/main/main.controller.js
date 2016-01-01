angular
  .module('ucode.main')
  .controller('MainController', MainController);

MainController.$inject = ['DataStorage', 'AddressService', 'MainModel'];

function MainController(DataStorage, AddressService, MainModel) {
  var vm = this;
  vm.primaryData = DataStorage.getPrimaryData();
  vm.primaryIconList = primaryIconList();
  vm.name = vm.primaryData.name.value || "UCode";

  function primaryIconList() {
    var iconList = [];
    data = vm.primaryData;
    if (data.emails.length != 0) {
      iconList.push("ion-ios-email-outline");
    }
    if (data.phones.length != 0) {
      iconList.push("ion-ios-telephone-outline");
    }
    if (data.school) {
      iconList.push("ion-ios-bookmarks-outline");
    }
    if (!AddressService.isNullAddress(data.address)) {
      iconList.push("ion-ios-home-outline");
    }
    if (data.websites.length != 0) {
      iconList.push("ion-ios-world-outline");
    }
    return iconList;
  }

  vm.contactIcon = "img/contact.png";

  vm.socialMedia = MainModel.socialMedia;
  // vm.profMedia =
  vm.profIconList = ['img/linkedin.png'];

}
