var app = require('app');

var addressVerifyModalController = function ($scope, modal, commonService) {

    $scope.formattedAddress = true;
    $scope.addressSelected = false;
    var autocomplete;
    $scope.fullAddressObject = {};
    $scope.locationData = {};

    var components = {
        street_number: true,
        route: true,
        locality: true,
        administrative_area_level_1: true,
        administrative_area_level_2: true,
        country: true,
        postal_code: true,
        postal_code_suffix: true,
        neighborhood: true,
    };

    $scope.initializeAddressObject = function () {
        $scope.addressSelected = false;
        var newAddress = {};
        for (var key in components) {
            newAddress[key] = {
                long_name: null,
                short_name: null
            }
        }
        newAddress.formatted_address = null;
        newAddress.longitude = null;
        newAddress.latitude = null;
        $scope.fullAddressObject = newAddress;
    };

    function initialize() {
        // check to see if address has already been chosen. if so, set it
        var previous = $scope.addressVerify.type;
        if (previous) {
            $scope.addressSelected = true;
            $scope.fullAddressObject = $scope.addressVerify.fullAddressObject;
            
            if (previous == 'formatted') {
                $scope.formattedAddress = true;
            }
            else if (previous == 'non-formatted') {
                $scope.getCities();
                $scope.getPostalCodes();
                $scope.formattedAddress = false;
            }
            initializeMap($scope.fullAddressObject.latitude, $scope.fullAddressObject.longitude);
        }
        else {
            $scope.initializeAddressObject();
        }
 
        var element = document.getElementById('address-verify-input');
        // Create the autocomplete object
        autocomplete = new google.maps.places.Autocomplete(element, {});
        // When the user selects an address from the dropdown,
        // populate the address fields in the form.
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            selectAddress();
        });
        // TO FIX - (not working)
        // set focus on input element 
        element.focus();
    }

    function initializeMap(lat, long) {
        var latlng = new google.maps.LatLng(lat, long);
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: latlng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions)

        var marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
    }

    function selectAddress() {
        $scope.addressSelected = true;
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
        // Initialize map
        if (place) {
            deserializePlaceObject(place);
        }
    }

    // Get each component of the address from the place details
    function deserializePlaceObject(place) {
        $scope.$apply(function () {
            $scope.fullAddressObject = {
                formatted_address: place.formatted_address,
                latitude: place.geometry.location.A,
                longitude: place.geometry.location.F
            }
        });
        initializeMap($scope.fullAddressObject.latitude, $scope.fullAddressObject.longitude);
        for (var i = 0; i < place.address_components.length; i++) {
            var google_address_type = place.address_components[i].types[0];
            if (components[google_address_type]) {
                $scope.$apply(function () {
                    $scope.fullAddressObject[google_address_type] = {
                        long_name: place.address_components[i].long_name,
                        short_name: place.address_components[i].short_name,
                    }
                });
            }
        }
    }

    commonService.GetCountry(null).then(function (data) {
        $scope.locationData.countries = data;
    });

    commonService.GetStates().then(function (data) {
        $scope.locationData.states = data;
    });

    $scope.getCities = function () {
        var filter = {
            state: $scope.fullAddressObject.administrative_area_level_1.long_name
        };
        commonService.GetCityByState(filter).then(function (data) {
            $scope.locationData.cities = data;
        });
        return true;
    };

    $scope.getPostalCodes = function () {
        var filter = {
            country: $scope.fullAddressObject.country.long_name,
            city: $scope.fullAddressObject.locality.long_name,
            state: $scope.fullAddressObject.administrative_area_level_1.long_name,
            zipcode: null
        };
        commonService.GetZipCode(filter).then(function (data) {
            $scope.locationData.postalCodes = data;
        });
        return true;
    };

    $scope.clearCities = function () {
        $scope.fullAddressObject.locality.long_name = null;
        return true;
    };

    $scope.clearPostalCodes = function () {
        $scope.fullAddressObject.postal_code.long_name = null;
        return true;
    };

    $scope.sendAddressBack = function () {
        saveCountryCode();
        var returnObj = {}
        returnObj.fullAddressObject = $scope.fullAddressObject;
        // formatting address 2
        var addr2 = returnObj.fullAddressObject.non_formatted_address_2;
        if (addr2) {
            addr2 = addr2 + ', ';
        }
        else {
            addr2 = '';
        }

        if ($scope.formattedAddress) {
            returnObj.type = 'formatted';
            returnObj.fullAddressObject.formatted_address =
                returnObj.fullAddressObject.street_number.long_name + ' ' +
                returnObj.fullAddressObject.route.long_name + ', ' +
                addr2 +
                returnObj.fullAddressObject.locality.long_name + ', ' +
                returnObj.fullAddressObject.administrative_area_level_1.long_name + ', ' +
                returnObj.fullAddressObject.postal_code.long_name + ', ' +
                returnObj.fullAddressObject.country.long_name;
        }
        else {
            returnObj.type = 'non-formatted';
            returnObj.fullAddressObject.formatted_address =
                returnObj.fullAddressObject.non_formatted_address_1 + ', ' +
                addr2 +
                returnObj.fullAddressObject.locality.long_name + ', ' +
                returnObj.fullAddressObject.administrative_area_level_1.long_name + ', ' +
                returnObj.fullAddressObject.postal_code.long_name + ', ' +
                returnObj.fullAddressObject.country.long_name;
        }
        $scope.closeVerifyAddressModal(true, returnObj);
    };

    $scope.checkAddressValid = function () {
        var test = $scope.fullAddressObject.formatted_address || $scope.fullAddressObject.non_formatted_address_1;
        return test;
    };

    function saveCountryCode() {
        var country;
        for (var i = 0; i < $scope.locationData.countries.length; i++) {
            country = $scope.locationData.countries[i];
            if (country.country == $scope.fullAddressObject.country.long_name) {
                break;
            }
        }
        $scope.fullAddressObject.country.short_name = country.countryCode;
    }

    initialize();

};

app.register.controller('addressVerifyModalController', ['$scope', '$modal', 'commonService', addressVerifyModalController]);
