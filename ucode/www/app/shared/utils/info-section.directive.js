(function() {
  angular
    .module('ucode.utils')
    .directive('infoSection', infoSection);

  infoSection.$inject = [];

  function infoSection() {
    return {
      restrict: 'AE',
      scope: {
        title: '@'
      },
      transclude: true,
      templateUrl: 'app/shared/utils/info-section.html'
    }
  }
}());
