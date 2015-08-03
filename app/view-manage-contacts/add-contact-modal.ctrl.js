/**
 * Created by sespinoza1 on 7/31/15.
 */
var app = angular.module('myApp.addContact', []);

app.controller('addContactModalCtrl', function ($scope, $modalInstance) {

  $scope.newContact = {
    "SourceApplication": null,
    "ContactImage": null,
    "DisplayName": null,
    "Title": null,
    "FirstName": null,
    "MiddleName": null,
    "LastName": null,
    "Prefix": null,
    "Suffix": null,
    "DateOFBirth": null,
    "Gender": null,
    "SSN": null,
    "CountryCode": null,
    "Fax": null,
    "DoNotEmail": null,
    "DoNotCall": null,
    "FacebookUserID": null,
    "GoogleUserID": null,
    "ConfirmedContactInfo": null,
    "Note": null,
    "CreateBy": null,
    "Email": null,
    "Addresses": [
      {
        "AddressTypeID": null,
        "AddressLine1": null,
        "AddressLine2": null,
        "City": null,
        "State": null,
        "County": null,
        "Zip": null,
        "ZipPlus4Code": null,
        "Country": null,
        "Latitude": null,
        "Longitude": null,
        "IsGeoCoded": null,
        "IsSameAsInstallationAddress": null,
        "IsStandardAddress": null,
        "Label": null,
        "SubLabel": null
      }
    ],
    "Phone": [
      {
        "PhoneTypeID": null,
        "CountryCode": null,
        "PhoneNumber": null,
        "Extension": null,
        "DNCFederal": null,
        "DNCState": null,
        "DNCSolarcity": null,
        "IsPreferredContact": null,
        "ContactPreferenceNote": null
      }
    ],
    "ContactTypeIds": [],
    "Relationships": [
      {
        "RelationContactID": null,
        "RelationshipTypeID": null
      }
    ]
  };

  $scope.getModel = function (prop) {
    return $scope.newContact[prop]
  };

  $scope.properties = [
    {
      "prop": "FirstName",
      "name": "First Name"
    },
    {
      "prop": "MiddleName",
      "name": "Middle Name"
    },
    {
      "prop": "LastName",
      "name": "Last Name"
    },
    {
      "prop": "Title",
      "name": "Title"
    },
    {
      "prop": "DisplayName",
      "name": "Display Name"
    },
    {
      "prop": "Prefix",
      "name": "Prefix"
    },
    {
      "prop": "Suffix",
      "name": "Suffix"
    },
    {
      "prop": "SSN",
      "name": "SSN"
    },
    {
      "prop": "FacebookUserID",
      "name": "Facebook User ID"
    },
    {
      "prop": "GoogleUserID",
      "name": "Google User ID"
    },
    {
      "prop": "Fax",
      "name": "Fax"
    },
    {
      "prop": "Email",
      "name": "Email"
    }];

  $scope.newContactModel = function (prop) {
    return 'newContact.' + prop;
  };

  $scope.save = function (newContact) {
    console.log(JSON.stringify(newContact));
    $modalInstance.close(newContact);

  };



});