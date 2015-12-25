(function() {
  angular
    .module('ucode.utils')
    .directive('aboutSection', aboutSection);

  aboutSection.$inject = [];

  function aboutSection() {
    return {
      restrict: 'AE',
      scope: {
        sectionList: '='
      },
      templateUrl: 'app/shared/utils/about.html'
    }
  }
}());
