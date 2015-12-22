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
        title: "@"
      },
      templateUrl: "app/shared/utils/info-card.html"
    }
  }
}());
