angular
  .module('ucode.social')
  .controller('SocialController', SocialController);

SocialController.$inject = [];

function SocialController() {
  var vm = this;
  vm.selectedMedia = [
    {title: 'Facebook', img: 'img/facebook.png', username: 'felixs8696', url: 'facebook.com/felix.su.37'},
    {title: 'Instagram', img: 'img/instagram.png', username: 'felixs8696', url: 'instagram.com/felixs8696'}
  ]
}
