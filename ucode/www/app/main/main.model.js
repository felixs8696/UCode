angular
  .module('ucode.main')
  .factory('MainModel', MainModel);

MainModel.$inject = ['DataStorage', 'AddressService'];

function MainModel(DataStorage, AddressService) {
  var factory = {
    valueIsNotNull: valueIsNotNull,
    primaryData: DataStorage.getPrimaryData(),
    socialMedia: DataStorage.getSocialData(),
    profMedia: DataStorage.getProfessionalData()
  }

  function valueIsNotNull(key, val) {
    if ((key == 'emails' || key == 'phones' || key == 'websites') && val.length != 0) {
      return true;
    }
    if ((key == 'name' || key == 'school') && val) {
      return true;
    }
    if (key == 'address' && !AddressService.isNullAddress(val)) {
      return true;
    }
    if (key == 'sharePkg' && (val.username || val.url)) {
      // console.log(val.username || val.url);
      return true;
    }
    return false;
  }

  return factory;
}
