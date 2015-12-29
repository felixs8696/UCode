angular
  .module('ucode.menu')
  .controller('MenuController', MenuController);

MenuController.$inject = ['$scope', '$ionicModal', '$timeout', '$ionicHistory', '$state'];

function MenuController($scope, $ionicModal, $timeout, $ionicHistory, $state) {
  var vm = this;
  // Form data for the login modal
  vm.loginData = {};
  vm.goBack = goBack;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    vm.modal = modal;
  });

  function goBack() {
    // $state.go("app.primary");
    // $state.go($ionicHistory.backView().stateId);
    // $ionicHistory.backView().stateName
    $ionicHistory.goBack();
    // console.log($ionicHistory.backView().stateId);
    console.log($ionicHistory.viewHistory());
    console.log("enabledBack: " + $ionicHistory.enabledBack());
    console.log("!!($ionicHistory.backView() && $ionicHistory.backView().historyId === $ionicHistory.currentView().historyId): " + !!($ionicHistory.backView() && $ionicHistory.backView().historyId === $ionicHistory.currentView().historyId));
  }

  // Triggered in the login modal to close it
  function closeLogin() {
    vm.modal.hide();
  };

  // Open the login modal
  function login() {
    vm.modal.show();
  };

  // Perform the login action when the user submits the login form
  function doLogin() {
    console.log('Doing login', vm.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      closeLogin();
    }, 1000);
  };
}
