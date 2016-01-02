angular
  .module('ucode.social')
  .controller('SocialController', SocialController);

SocialController.$inject = ['$scope', 'Modal', 'SocialSelectModel', 'Popup', '$ionicHistory', '$state'];

function SocialController($scope, Modal, SocialSelectModel, Popup, $ionicHistory, $state) {
  var vm = this;

  vm.socialMedia = SocialSelectModel.socialMediaData;
  vm.newInputs = {};

  vm.editModal = Modal.getModal('app/social/edit-social.html', $scope);
  vm.addModal = Modal.getModal('app/social/social-select.html', $scope);
  vm.showEditModal = showEditModal;
  vm.closeEditModal = closeEditModal;
  vm.showAddModal = showAddModal;
  vm.closeAddModal = closeAddModal;
  vm.toggleMedia = toggleMedia;
  vm.noMediaSelected = SocialSelectModel.noMediaSelected;
  vm.selectAllMedia = SocialSelectModel.selectAllMedia;
  vm.deselectAllMedia = SocialSelectModel.deselectAllMedia;
  vm.showResetWarning = showResetWarning;

  function showEditModal() {
    vm.editModal
      .then(function(modal) {
        modal.show();
      });
  }

  function closeEditModal() {
    updateAll();
    vm.editModal
      .then(function(modal) {
        modal.hide();
      });
  }

  function showAddModal() {
    vm.addModal
      .then(function(modal) {
        modal.show();
      });
  }

  function closeAddModal() {
    vm.addModal
      .then(function(modal) {
        modal.hide();
      });
  }

  function updateAll() {
    SocialSelectModel.updateAll(vm.newInputs);
    vm.newInputs = {};
  }

  function toggleMedia(key) {
    vm.socialMedia[key].data.selected = !vm.socialMedia[key].data.selected;
    SocialSelectModel.storeSocialData(vm.socialMedia);
  }

  function showResetWarning() {
    Popup.withFunc("Warning", "Are you sure you want to clear all your social contact data?", "Clearing social data message shown", SocialSelectModel.resetSocialInfo);
  }

}
