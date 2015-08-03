/**
 * Created by flavor on 6/24/15.
 */
var app = angular.module('myApp.manageContacts', []);

app.controller('manageContactsCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {

  $scope.title = 'Contact Information';

  $scope.job = {
    number: 'Job#: JB-941391-00',
    type: 'EV Charging Station',
    installAddress: '852 Chenery St, SAN FRANCISCO CA 94131, US'
  };

  $scope.countryCode = function (code) {
    if (code) {
      var str = code.replace('+', '');
      var str2 = str.replace('-', '');
      var parse = parseInt(str2);
      return (parse == 1);
    } else {
      return false;
    }
  };

  $scope.contacts = [
    {
      "ContactID": 4492664,
      "ContactGUID": "6579625C-AC2D-4508-B1C4-98EB50F8A200",
      "SourceApplication": "rohitChauhan",
      "ContactImage": null,
      "IsDefaultEmail": true,
      "Title": null,
      "Prefix": null,
      "DisplayName": "Betty White",
      "FirstName": "Betty",
      "MiddleName": null,
      "LastName": "White",
      "Suffix": null,
      "DateOfBirth": "1984-03-14T00:00:00",
      "Gender": "Z",
      "CountryCode": 1,
      "DoNotEmail": true,
      "DoNotCall": false,
      "Note": "Any special Comments",
      "CreateBy": 1201,
      "CreateDate": "0001-01-01T00:00:00",
      "ModifyBy": 1201,
      "ModifyDate": "0001-01-01T00:00:00",
      "FacebookUserId": null,
      "GoogleUserId": null,
      "HasConfirmedContactInfo": false,
      "EmailAddress": "betty@goldengirls.com",
      "ContactTypes": [
        {
          "ContactTypeID": 3,
          "ContactTypeName": "Customer"
        }
      ],
      "Relationships": [
        {
          "ContactName": "Blanche Dubois",
          "RelationContactName": "Blanche Dubois",
          "RelationshipType": "Parent",
          "RelationshipTypeDescription": "Parent"
        },
        {
          "ContactName": "Rhett Butler",
          "RelationContactName": "Rhett Butler",
          "RelationshipType": "Spouse",
          "RelationshipTypeDescription": "Spouse"
        }
      ],
      "Phones": [
        {
          "PhoneGUID": "6E083E95-0143-4254-8864-AD6DA745968D",
          "CountryCode": "+1",
          "PhoneNo": "817-504-1111",
          "Extension": null,
          "DNCFederal": false,
          "DNCState": false,
          "DNCSolarcity": false,
          "PhoneType": "Home",
          "PhoneTypeDescription": "Home",
          "isPreferredPhone": true,
          "ContactPreferenceNote": null
        },
        {
          "PhoneGUID": "6E083E95-0143-4254-8864-AD6DA745968D",
          "CountryCode": "+1",
          "PhoneNo": "817-504-2222",
          "Extension": "3241",
          "DNCFederal": false,
          "DNCState": false,
          "DNCSolarcity": false,
          "PhoneType": "Work",
          "PhoneTypeDescription": "Work",
          "isPreferredPhone": true,
          "ContactPreferenceNote": null
        },
        {
          "PhoneGUID": "6E083E95-0143-4254-8864-AD6DA745968D",
          "CountryCode": "+1",
          "PhoneNo": "817-504-3333",
          "Extension": null,
          "DNCFederal": false,
          "DNCState": false,
          "DNCSolarcity": false,
          "PhoneType": "Other",
          "PhoneTypeDescription": "Other",
          "isPreferredPhone": true,
          "ContactPreferenceNote": null
        }
      ],
      "Addresses": [
        {
          "IsActive": true,
          "IsStandardAddress": false,
          "FormattedStreetAddress": "704 Benvenue AvenueLos AltosCA94024SANTA CLARAUS",
          "AddressLine1": "704 Benvenue Avenue",
          "AddressLineTwo": "North West",
          "City": "Los Altos",
          "County": "SANTA CLARA",
          "State": "CA",
          "Country": "US",
          "PostalCode": "94024",
          "Latitude": 37.3746020000,
          "Longitude": -122.0995850000,
          "AddressTypeID": 4,
          "isSameAsInstallAddress": true,
          "AddressId": 20090297,
          "Label": null,
          "SubLabel": null,
          "AddressGUID": "4AEC7549-CB6D-4C5A-872A-1BCF74E926C8",
          "IsGeoCoded": null,
          "IsGeoCodeOverride": null,
          "AddressType": "Billing",
          "AddressTypeDescription": "Billing"
        },
        {
          "IsActive": true,
          "IsStandardAddress": false,
          "FormattedStreetAddress": "171 E Floresta WayPortola ValleyCA94028SAN MATEOUS",
          "AddressLine1": "171 E Floresta Way",
          "AddressLineTwo": "",
          "City": "Portola Valley",
          "County": "SAN MATEO",
          "Country": "US",
          "State": "CA",
          "PostalCode": "94028",
          "Latitude": 37.4012760000,
          "Longitude": -122.1958870000,
          "AddressTypeID": 5,
          "isSameAsInstallAddress": true,
          "AddressId": 20090298,
          "Label": null,
          "SubLabel": null,
          "AddressGUID": "F0C766B8-B0E5-4048-8B56-4134E49AF339",
          "IsGeoCoded": null,
          "IsGeoCodeOverride": null,
          "AddressType": "Mailing",
          "AddressTypeDescription": "Mailing"
        }
      ]
    }
  ];

  $scope.addContact = function () {
    var modalInstance = $modal.open({
      templateUrl: 'view-manage-contacts/add-contact-modal.html',
      controller: 'addContactModalCtrl'
    });

    modalInstance.result.then(function (res) {

    }, function () {

    });
  };

  $scope.flexLength = function () {
    if ($scope.contacts.length > 1) {
      return '49';
    } else {
      return '100';
    }
  };

  $scope.editContact = function (contact) {

    var modalInstance = $modal.open({
      templateUrl: 'view-manage-contacts/contacts-modal.html',
      controller: 'editContactModalCtrl',
      resolve: {
        contactToEdit: function () {
          return contact;
        }
      }
    });

    modalInstance.result.then(function (editedContact) {
      var index = _.findIndex($scope.contact, {'ContactID': editedContact.ContactID});
      $scope.contact[index] = editedContact;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

}]);


app.controller('editContactModalCtrl', function ($scope, $modalInstance, contactToEdit) {

  $scope.contactToEdit = contactToEdit;
  var originalContactBackup = angular.copy(contactToEdit);

  console.log(contactToEdit);

  $scope.types = [
    {type: 'Mobile'},
    {type: 'Home'},
    {type: 'Work'},
    {type: 'Other'}
  ];

  $scope.addressTypes = [
    {type: 'Home'},
    {type: 'Work'},
    {type: 'Shipping'},
    {type: 'Billing'},
    {type: 'Mailing'},
    {type: 'Other'}
  ];

  $scope.beforeReorder = function (e) {
    if (/demo-no-reorder/.test(e.target.className)) {
      e.preventDefault();
    }
  };

  $scope.beforeSwipe = function (e) {
    if (e.target.nodeName == 'INPUT' || /demo-no-swipe/.test(e.target.className)) {
      e.preventDefault();
    }
  };

  $scope.beforeWait = function (e) {
    if (e.target.className.indexOf('instant') > -1) {
      e.preventDefault();
    }
  };

  $scope.afterSwipe = function (e) {
    e.target.parentNode.appendChild(e.target);
  };

  $scope.reorder = function (e, spliceIndex, originalIndex, item) {
    var scopeListItem;
    if (item === 'phone') {
      scopeListItem = $scope.contactToEdit.Phones;
    } else if (item === 'address') {
      scopeListItem = $scope.contactToEdit.Addresses;
    }
    var listItem = scopeListItem[originalIndex];
    scopeListItem.splice(originalIndex, 1);
    scopeListItem.splice(spliceIndex, 0, listItem);
    for (var i = 0; i < scopeListItem.length; i++) {
      if (i === 0) {
        scopeListItem[i].primary = true;
      } else {
        scopeListItem[i].primary = false;
      }
    }

    console.error(scopeListItem);

    return true;
  };

  $scope.addPhoneAlert = false;
  $scope.addEmailAlert = false;
  $scope.addAddressAlert = false;

  $scope.phoneNumberPattern = (function () {
    var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
    return {
      test: function (value) {
        if ($scope.requireTel === false) {
          return true;
        }
        return regexp.test(value);
      }
    };
  })();

  $scope.addItem = function (item) {

    var scopeAddListItem;

    if (item === 'phone') {
      scopeAddListItem = $scope.contactToEdit.Phones;
      for (var i = 0; i < scopeAddListItem.length; i++) {
        if (!scopeAddListItem[i].PhoneNo || !scopeAddListItem[i].PhoneType) {
          $scope.addPhoneAlert = true;
        }
      }
      if (scopeAddListItem.length === 0) {
        scopeAddListItem.push({
          PhoneGUID: null,
          CountryCode: null,
          PhoneNo: null,
          Extension: null,
          DNCFederal: null,
          DNCState: null,
          DNCSolarcity: null,
          PhoneType: null,
          PhoneTypeDescription: null,
          isPreferredPhone: null,
          ContactPreferenceNote: null
        });
      } else {
        if (!$scope.addPhoneAlert) {
          scopeAddListItem.push({
            PhoneGUID: null,
            CountryCode: null,
            PhoneNo: null,
            Extension: null,
            DNCFederal: null,
            DNCState: null,
            DNCSolarcity: null,
            PhoneType: null,
            PhoneTypeDescription: null,
            isPreferredPhone: null,
            ContactPreferenceNote: null
          });
        }
      }
    } else if (item === 'address') {
      scopeAddListItem = $scope.contact.Addresses;
      for (var i = 0; i < scopeAddListItem.length; i++) {
        if (!scopeAddListItem[i].AddressId) {
          $scope.addAddressAlert = true;
        }
      }
      if (scopeAddListItem.length === 0) {
        scopeAddListItem.push({
          IsActive: null,
          IsStandardAddress: null,
          FormattedStreetAddress: null,
          LongStreetNumber: null,
          LongRoute: null,
          AddressLineTwo: null,
          LongSublocality: null,
          LongLocality: null,
          LongAdministrativeAreaLevel2: null,
          LongAdministrativeAreaLevel1: null,
          LongCountry: null,
          LongPostalCode: null,
          ShortPostalCode: null,
          Latitude: null,
          Longitude: null,
          AddressTypeID: null,
          isSameAsInstallAddress: null,
          AddressId: null,
          RecipientName: null,
          Label: null,
          SubLabel: null,
          AddressGUID: null,
          CompanyName: null,
          IsGeoCoded: null,
          GeoCodeProvider: null,
          IsGeoCodeOverride: null,
          AddressType: null,
          AddressTypeDescription: null
        });
      } else {
        if (!$scope.addAddressAlert) {
          scopeAddListItem.push({
            IsActive: null,
            IsStandardAddress: null,
            FormattedStreetAddress: null,
            LongStreetNumber: null,
            LongRoute: null,
            AddressLineTwo: null,
            LongSublocality: null,
            LongLocality: null,
            LongAdministrativeAreaLevel2: null,
            LongAdministrativeAreaLevel1: null,
            LongCountry: null,
            LongPostalCode: null,
            ShortPostalCode: null,
            Latitude: null,
            Longitude: null,
            AddressTypeID: null,
            isSameAsInstallAddress: null,
            AddressId: null,
            RecipientName: null,
            Label: null,
            SubLabel: null,
            AddressGUID: null,
            CompanyName: null,
            IsGeoCoded: null,
            GeoCodeProvider: null,
            IsGeoCodeOverride: null,
            AddressType: null,
            AddressTypeDescription: null
          })
        }
      }
    }
  };

  $scope.hideAlert = function (item) {
    if (item === 'phone') {
      $scope.addPhoneAlert = false;
    } else if (item === 'address') {
      $scope.addAddressAlert = false;
    }
  };

  $scope.removeItem = function (item, value) {
    if (item === 'phone') {
      $scope.contactToEdit.Phones = _.without($scope.contactToEdit.Phones, _.findWhere($scope.contactToEdit.Phones, {PhoneNo: value}));
    } else if (item === 'address') {
      $scope.contactToEdit.Addresses = _.without($scope.contactToEdit.Addresses, _.findWhere($scope.contactToEdit.Addresses, {AddressId: value}));
    }
  };

  $scope.cancel = function () {
    $modalInstance.close(originalContactBackup);
  };

  var userID = 123456;

  $scope.save = function (editedContact) {

    editedContact.ModifyBy = userID;
    editedContact.ModifyDate = moment().format();

    console.log(editedContact);

    $modalInstance.close(editedContact);

  };


});
