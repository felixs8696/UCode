angular
  .module('ucode.primary')
  .controller('PrimaryController', PrimaryController);

PrimaryController.$inject = [];

function PrimaryController() {
  var vm = this;

  vm.replaceNameToggle = false;
  vm.addEmailToggle = false;
  vm.addPhoneToggle = false;
  vm.addSchoolToggle = false;
  vm.replaceAddressToggle = false;
  vm.addWebsitesToggle = false;

  vm.newEmail = null;
  vm.newName = null;

  vm.primaryInfo = {
    name: null,
    emails: [],
    phones: [],
    school: null,
    address: {
      street: null,
      city: null,
      state: null,
      country: null,
      zipcode: null
    },
    websites: []
  };

  vm.saveEmail = saveEmail;
  vm.toggleAddEmail = toggleAddEmail;
  vm.toggleReplaceName = toggleReplaceName;
  vm.saveName = saveName;

  function toggleAddEmail() {
    vm.addEmailToggle = true;
  }

  function saveEmail(email) {
    console.log(email);
    vm.addEmailToggle = false;
    vm.newEmail = null;
    if (email) {
        vm.primaryInfo.emails.push(email);
    }
  }

  function toggleReplaceName() {
    vm.replaceNameToggle = true;
  }

  function saveName(name) {
    console.log(name);
    vm.replaceNameToggle = false;
    vm.newName = null;
    if (name) {
        vm.primaryInfo.name = name;
    }
  }
}
