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
      console.log(key);
      console.log(val);
      return true;
    }
    if ((key == 'name' || key == 'school') && val) {
      return true;
    }
    if (key == 'address' && !AddressService.isNullAddress(val)) {
      return true;
    }
    return false;
  }

  return factory;
}
