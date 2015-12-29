angular
    .module('ucode.services')
    .factory('Modal', Modal);

Modal.$inject = ['$ionicModal'];

function Modal($ionicModal) {
    var factory = {
        getModal: getModal,
        getTemplateModal: getTemplateModal
    };

    function getModal(url, scope, vm) {
        return $ionicModal.fromTemplateUrl(url, {
            scope: scope
        });
        // .then(function(modal) {
        //     vm.modal = modal;
        // });
    }

    function getTemplateModal(template, scope) {
        return $ionicModal.fromTemplate(template, {
            scope: scope,
            animation: 'fade-in'
        });
    }

    return factory;
}
