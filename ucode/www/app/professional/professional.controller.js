angular
  .module('ucode.professional')
  .controller('ProfessionalController', ProfessionalController);

ProfessionalController.$inject = ['$scope', 'Modal', 'ProfSelectModel', 'Popup', '$ionicHistory', '$state'];

function ProfessionalController($scope, Modal, ProfSelectModel, Popup, $ionicHistory, $state) {
  var vm = this;

  vm.allProfMedia = ProfSelectModel.profMediaData;
  vm.newInputs = [];

  vm.editModal = Modal.getModal('app/professional/edit-professional.html', $scope);
  vm.addModal = Modal.getModal('app/professional/professional-select.html', $scope);
  vm.showEditModal = showEditModal;
  vm.closeEditModal = closeEditModal;
  vm.showAddModal = showAddModal;
  vm.closeAddModal = closeAddModal;
  vm.toggleMedia = toggleMedia;
  vm.noMediaSelected = ProfSelectModel.noMediaSelected;
  vm.selectAllMedia = ProfSelectModel.selectAllMedia;
  vm.deselectAllMedia = ProfSelectModel.deselectAllMedia;
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
    ProfSelectModel.updateAll(vm.newInputs);
    vm.newInputs = [];
  }

  function toggleMedia(media) {
    media.selected = !media.selected;
    ProfSelectModel.storeProfessionalData(vm.allProfMedia);
  }

  function showResetWarning() {
    Popup.withFunc("Warning", "Are you sure you want to clear all your professional contact data?", "Clearing professional data message shown", ProfSelectModel.resetProfInfo);
  }

}
