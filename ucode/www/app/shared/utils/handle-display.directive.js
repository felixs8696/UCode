(function() {
  angular
    .module('ucode.utils')
    .directive('handleDisplay', handleDisplay);

  handleDisplay.$inject = [];

  function handleDisplay() {
    return {
      restrict: 'AE',
      scope: {
        iconImg: '=',
        title: '=',
        username: '=',
        url: '='
      },
      templateUrl: 'app/shared/utils/handle-display.html'
    }
  }
}());
