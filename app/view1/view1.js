'use strict';

var app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.controller('View1Ctrl', ['$scope', function($scope, ericService) {

  $scope.editContact = function (contact) {
    window.alert(contact.name);
  };

  $scope.contacts = [
    {
      type: 'Primary',
      name: 'Nikki Vasquez',
      credit: '650 < 750',
      property_relationship: 'Owner',
      contracts_signed: [
        {
          contract: 'PPA',
          position: '1'
        },
        {
          contract: 'Lease',
          position: '1'
        }
      ],
      relationships: [
        {
          relation: 'Spouse of',
          person: 'Jonathan Vasquez'
        },
        {
          relation: 'Mother of',
          person: 'Gabby Vasquez'
        }
      ],
      phone: [
        {
          type: 'Mobile',
          number: '415-786-9876',
          primary: true
        },
        {
          type: 'Home',
          number: '415-786-9876',
          primary: false
        },
        {
          type: 'Work',
          number: '415-786-9876',
          primary: false
        },
        {
          type: 'Other',
          number: '415-786-9876',
          primary: false
        }
      ],
      email: [
        {
          type: 'Home',
          email: 'nikki@aaa.com',
          primary: true
        },
        {
          type: 'Work',
          email: 'nikki@bbb.com',
          primary: false
        }
      ],
      address: [
        {
          type: 'Installation',
          street: '234 W 500 N',
          city: 'Helper',
          state: 'UT',
          zipcode: '84551'
        },
        {
          type: 'Billing',
          street: '234 W 500 N',
          city: 'Helper',
          state: 'UT',
          zipcode: '84551'
        },
        {
          type: 'Home',
          street: '234 W 500 N',
          city: 'Helper',
          state: 'UT',
          zipcode: '84551'
        }
      ]

    }
  ];

}]);

