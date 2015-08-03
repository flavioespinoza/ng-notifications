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
      "prop": "Note",
      "name": "Note"
    },
    {
      "prop": "Email",
      "name": "Email"
    }];

  var x = [

    {
      "prop": "CountryCode",
      "name": "Country Code"
    },
    {
      "prop": "Fax",
      "name": "Fax"
    }
  ];


  $scope.addresses = [
      {
        property: 'AddressTypeID',
        name: 'Address Type ID'
      },
      {
        property: 'AddressLine1',
        name: 'Address Line 1'
      },
      {
        property: 'AddressLine2',
        name: 'Address Line 2'
      },
      {
        property: 'City',
        name: 'City'
      },
      {
        property: 'State',
        name: 'State'
      },
      {
        property: 'County',
        name: 'County'
      },
      {
        property: 'Zip',
        name: 'Zipcode'
      },
      {
        property: 'ZipPlus4Code',
        name: 'Zipcode + 4 Code'
      },
      {
        property: 'Country',
        name: 'Country'
      },
      {
        property: 'Latitude',
        name: 'Latitude'
      },
      {
        property: 'Longitude',
        name: 'Longitude'
      },
      {
        property: 'Label',
        name: 'Label'
      },
      {
        property: 'SubLabel',
        name: 'Sub Label'
      }
    ];

  var xx = [
    {
      property: 'IsGeoCoded',
      name: 'Is Geo Coded'
    },
    {
      property: 'IsSameAsInstallationAddress',
      name: 'Is Same As Installation Address'
    },
    {
      property: 'IsStandardAddress',
      name: 'Is Standard Address'
    }
  ];

  //function splitCamelCaseToString(s) {
  //  return s.split(/(?=[A-Z])/).join(' ');
  //}
  //
  //for (var i = 0; i < properties.length; i++) {
  //  var str = splitCamelCaseToString(properties[i].property);
  //  $scope.properties.push({
  //    prop: properties[i].property,
  //    name: str
  //  });
  //}

  console.log(JSON.stringify($scope.properties));



  $scope.newContactModel = function (prop) {
    return 'newContact.' + prop;
  };

  $scope.save = function (newContact) {
    console.log(newContact);
    $modalInstance.close(newContact);

  };

});