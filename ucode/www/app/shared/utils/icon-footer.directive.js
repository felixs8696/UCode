(function() {
  angular
    .module('ucode.utils')
    .directive('iconFooter', iconFooter);

  iconFooter.$inject = [];

  function iconFooter() {
    return {
      restrict: 'AE',
      scope: {
        sectionList: '='
      },
      templateUrl: 'app/shared/utils/icon-footer.html'
    }
  }
}());
