angular
  .module('ucode.main')
  .factory('MainModel', MainModel);

MainModel.$inject = ['DataStorage'];

function MainModel(DataStorage) {
  var factory = {
    socialMedia: DataStorage.getSocialData()
  }

  return factory;
}
