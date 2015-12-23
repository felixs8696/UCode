angular
  .module('ucode.menu')
  .controller('MenuController', MenuController);

MenuController.$inject = ['$scope', '$ionicModal', '$timeout', '$ionicHistory'];

function MenuController($scope, $ionicModal, $timeout, $ionicHistory) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
    console.log($ionicHistory.backView());
    console.log($ionicHistory.viewHistory());
    console.log("enabledBack: " + $ionicHistory.enabledBack());
    console.log("!!($ionicHistory.backView() && $ionicHistory.backView().historyId === $ionicHistory.currentView().historyId): " + !!($ionicHistory.backView() && $ionicHistory.backView().historyId === $ionicHistory.currentView().historyId));
  }

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}
