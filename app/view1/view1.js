'use strict';

var app = angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.controller('View1Ctrl', ['$scope', '$log', '$mdDialog', '$compile', function ($scope, $log, $mdDialog, $compile) {

  $scope.contacts = [
    {
      type: 'Primary',
      firstName: 'Nikki',
      middleName: '',
      lastName: 'Vasquez',
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
          number: '415-786-1111',
          primary: true
        },
        {
          type: 'Home',
          number: '415-786-2222',
          primary: false
        },
        {
          type: 'Work',
          number: '415-786-3333',
          primary: false
        },
        {
          type: 'Other',
          number: '415-786-4444',
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

    },
    {
      type: 'Secondary',
      name: 'Jonathan Vasquez',
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
          person: 'Nikki Vasquez'
        },
        {
          relation: 'Father of',
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
          email: 'jonathan@aaa.com',
          primary: true
        },
        {
          type: 'Work',
          email: 'jonathan@bbb.com',
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

  $scope.showAdvanced = function (contact) {
    $mdDialog.show({
      templateUrl: 'view1/view1-modal.html',
      controller: 'ModalInstanceCtrl',
      targetEvent: contact
    })
      .then(function (answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      });
  };


  $scope.editContact = function (ev, contact) {

    //var modalInstance = $modal.open({
    //  templateUrl: 'view1/view1-modal.html',
    //  controller: 'ModalInstanceCtrl',
    //  resolve: {
    //    contact: function () {
    //      return contact;
    //    }
    //  }
    //});
    //
    //modalInstance.result.then(function (selectedItem) {
    //  $scope.selected = selectedItem;
    //}, function () {
    //  $log.info('Modal dismissed at: ' + new Date());
    //});

    $mdDialog.show({
      templateUrl: 'view1/view1-modal.html',
      controller: ModalInstanceCtrl,
      targetEvent: ev,
      locals: {
        contact: contact
      }
    })
      .then(function (answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      });

  };

  function ModalInstanceCtrl($scope, $mdDialog, contact) {
    $scope.contact = contact;

    $scope.newPhone = {
      type: '',
      number: '',
      primary: null
    };

    $scope.phoneTypes = [
      {type: 'Mobile'},
      {type: 'Home'},
      {type: 'Work'},
      {type: 'Other'}
    ];

    $scope.newPhoneForm = [];


    $scope.addPhone = function () {

      if ($scope.newPhoneForm.length === 0) {
        $scope.newPhoneForm.push({
          id: 1,
          newPhoneNumber: '',
          phoneTypes: [
            {type: 'Mobile'},
            {type: 'Home'},
            {type: 'Work'},
            {type: 'Other'}
          ]
        });
      } else {
        $scope.newPhoneForm.push({
          id: $scope.newPhoneForm.length + 1,
          newPhoneNumber: '',
          phoneTypes: [
            {type: 'Mobile'},
            {type: 'Home'},
            {type: 'Work'},
            {type: 'Other'}
          ]
        });

        console.log($scope.newPhoneForm);

      }


    };

    $scope.removeNewPhone = function (id) {
      $scope.newPhoneForm = _.without($scope.newPhoneForm, _.findWhere($scope.newPhoneForm, {id: id}));
    };

    $scope.clearValue = function (a) {

      console.log(a);

      //$scope.newPhoneForm = undefined;
    };

    $scope.hide = function () {
      $mdDialog.hide();
    };
    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.ok = function (newPhone) {
      $mdDialog.ok
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };

  }


}]);