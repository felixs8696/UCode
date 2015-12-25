(function () {
  angular
    .module("ucode.services")
    .factory("AddressService", AddressService);

  AddressService.$inject = [];

  function AddressService() {
    var factory = {
      isNullAddress: isNullAddress,
      formattedAddress: formattedAddress
    }

    function isNullAddress(addressObject) {
      if (!addressObject.street && !addressObject.city && !addressObject.state && !addressObject.country && !addressObject.zipcode) {
        return true;
      }
      return false;
    }

    function formattedAddress(addressObject) {
      var formatted = "";
      if (addressObject.street) {
        formatted += addressObject.street;
      }
      if (addressObject.city || addressObject.state || addressObject.zipcode) {
        if (formatted.length == 0) {
          formatted += addressObject.street;
        } else {
          formatted += '\n' + addressObject.city;
          if (addressObject.city && (addressObject.state || addressObject.zipcode)) {
            formatted += ', ' + addressObject.state + ' ' + addressObject.zipcode;
          }
        }
      }
      if (addressObject.country) {
        if (formatted.length == 0) {
          formatted += addressObject.country;
        } else {
          formatted += '\n' + addressObject.country;
        }
      }
      return formatted;
    }

    return factory;
  };
}());
