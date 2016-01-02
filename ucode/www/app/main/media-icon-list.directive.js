(function() {
  angular
    .module('ucode.utils')
    .directive('mediaIconList', mediaIconList);

  mediaIconList.$inject = [];

  function mediaIconList() {
    return {
      restrict: 'AE',
      scope: {
        mediaList: '=',
        socialList: '=',
        profList: '='
      },
      controller: 'MainController as vm',
      templateUrl: 'app/shared/utils/media-icon-list.html'
    }
  }
}());
