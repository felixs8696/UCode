angular
  .module('ucode.social')
  .controller('SocialController', SocialController);

SocialController.$inject = ['$scope', 'Modal', 'DataStorage', 'Popup', '$ionicHistory', '$state'];

function SocialController($scope, Modal, DataStorage, Popup, $ionicHistory, $state) {
  var vm = this;

  vm.allSocialMedia = DataStorage.getSocialData();
  vm.newInputs = [];

  vm.editModal = Modal.getModal('app/social/edit-social.html', $scope);
  vm.addModal = Modal.getModal('app/social/social-select.html', $scope);
  vm.showEditModal = showEditModal;
  vm.closeEditModal = closeEditModal;
  vm.showAddModal = showAddModal;
  vm.closeAddModal = closeAddModal;
  vm.toggleMedia = toggleMedia;
  vm.allMediaSelected = allMediaSelected;
  vm.selectAllMedia = selectAllMedia;
  vm.deselectAllMedia = deselectAllMedia;
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
    for (var i = 0; i<vm.allSocialMedia.length; i++) {
      if (vm.newInputs[i]) {
        if (vm.newInputs[i].username) {
            vm.allSocialMedia[i].username = vm.newInputs[i].username;
        }
        if (vm.newInputs[i].url) {
            vm.allSocialMedia[i].url = vm.newInputs[i].url;
        }
      }
    };
    DataStorage.storeSocialData(vm.allSocialMedia);
    vm.newInputs = [];
  }

  function toggleMedia(media) {
    media.selected = !media.selected;
    DataStorage.storeSocialData(vm.allSocialMedia);
  }

  function allMediaSelected() {
    for (var i = 0; i<vm.allSocialMedia.length; i++) {
      if (vm.allSocialMedia[i].selected == false) return false;
    };
    return true;
  }

  function selectAllMedia() {
    for (var i = 0; i<vm.allSocialMedia.length; i++) {
      vm.allSocialMedia[i].selected = true;
    };
  }

  function deselectAllMedia() {
    for (var i = 0; i < vm.allSocialMedia.length; i++) {
      vm.allSocialMedia[i].selected = false;
    };
  }

  function resetSocialInfo() {
    DataStorage.resetSocialData();
    $ionicHistory.clearCache();
    $state.go($state.current, {}, {reload: true});
  }

  function showResetWarning() {
    Popup.withFunc("Warning", "Are you sure you want to clear all your social contact data?", "Clearing social data message shown", resetSocialInfo);
  }

}
