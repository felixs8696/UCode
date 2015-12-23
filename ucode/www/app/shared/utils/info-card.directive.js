(function() {
  angular
    .module('ucode.utils')
    .directive('infoCard', infoCard);

  infoCard.$inject = [];

  function infoCard() {
    return {
      restrict: 'AE',
      transclude: true,
      scope: {
        title: "@",
        showFooter:"@",
        footerAction: "&",
        toggleSave: "@",
        saveAction: "&",
        replace: "@"
      },
      templateUrl: "app/shared/utils/info-card.html"
    }
  }
}());
