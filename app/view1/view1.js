'use strict';

var app = angular.module('myApp.view1', []);


app.service('es', function (esFactory) {
  return esFactory({
    host: 'localhost:9200',
    apiVersion: '1.2',
    log: 'trace'
  });
});

app.controller('View1Ctrl', ['$scope', '$log', '$mdDialog', 'es', 'esFactory',
  function ($scope, $log, $mdDialog, es, esFactory) {

  //$scope.contacts = [];
  //
  //var query = {
  //  "query": {
  //    "term": {
  //      "_id": "nikki_vasquez"
  //    }
  //  }
  //};
  //
  //es.search({
  //  index: 'contacts',
  //  type: 'contact',
  //  body: query
  //})
  //  .then(function (resp) {
  //    var _source = resp.hits.hits[0]._source;
  //    $scope.contacts.push(_source);
  //  })
  //  .catch(function (err) {
  //    $scope.contacts = null;
  //    $scope.error = err;
  //
  //    if (err instanceof esFactory.errors.NoConnections) {
  //      $scope.error = new Error('Unable to connect to elasticsearch. ' +
  //        'Make sure that it is running and listening at http://localhost:9200');
  //    }
  //  });



  $scope.contacts = [
    {
      id: '111111',
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
          email: 'nikki@home.com',
          primary: true
        },
        {
          type: 'Work',
          email: 'nikki@work.com',
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
      id: '222222',
      type: 'Secondary',
      firstName: 'Jonathan',
      middleName: '',
      lastName: 'Vasquez',
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


    $mdDialog.show({
      templateUrl: 'view1/view1-modal.html',
      controller: ModalInstanceCtrl,
      targetEvent: ev,
      locals: {
        contact: contact
      }
    })
      .then(function (editedContact) {

        console.log(editedContact);

      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      });

  };

  function ModalInstanceCtrl($scope, $mdDialog, contact) {

    $scope.contact = contact;

    $scope.types = [
      {type: 'Mobile'},
      {type: 'Home'},
      {type: 'Work'},
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
        scopeListItem = $scope.contact.phone;
      } else if (item === 'email') {
        scopeListItem = $scope.contact.email;
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

    $scope.phoneNumberPattern = (function() {
      var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
      return {
        test: function(value) {
          if( $scope.requireTel === false ) {
            return true;
          }
          return regexp.test(value);
        }
      };
    })();

    $scope.addItem = function (item) {

      var scopeAddListItem;

      if (item === 'phone') {
        scopeAddListItem = $scope.contact.phone;
        for (var i = 0; i < scopeAddListItem.length; i++) {
          if (!scopeAddListItem[i].number || !scopeAddListItem[i].type) {
            $scope.addPhoneAlert = true;
          }
        }
        if (scopeAddListItem.length === 0) {
          scopeAddListItem.push({
            type: '',
            number: '',
            primary: true
          });
        } else {
          if (!$scope.addPhoneAlert) {
            scopeAddListItem.push({
              type: '',
              number: '',
              primary: false
            });
          }
        }
      } else if (item === 'email') {
        scopeAddListItem = $scope.contact.email;
        for (var i = 0; i < scopeAddListItem.length; i++) {
          if (!scopeAddListItem[i].email || !scopeAddListItem[i].type) {
            $scope.addEmailAlert = true;
          }
        }
        if (scopeAddListItem.length === 0) {
          scopeAddListItem.push({
            type: '',
            email: '',
            primary: true
          });
        } else {
          if (!$scope.addEmailAlert) {
            scopeAddListItem.push({
              type: '',
              email: '',
              primary: false
            });
          }
        }
      }
    };

    $scope.hideAlert = function (item) {
      if (item === 'phone') {
        $scope.addPhoneAlert = false;
      } else if (item === 'email') {
        $scope.addEmailAlert = false;
      }
    };

    $scope.removeItem = function (item, value) {
      if (item === 'phone') {
        $scope.contact.phone = _.without($scope.contact.phone, _.findWhere($scope.contact.phone, {number: value}));
      } else if (item === 'email') {
        $scope.contact.email = _.without($scope.contact.email, _.findWhere($scope.contact.email, {email: value}));
      }
    };

    $scope.hide = function () {
      $mdDialog.hide();
    };
    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.save = function (contact) {

      var editedContact = contact;
      editedContact.phone = _.without(editedContact.phone, _.findWhere(editedContact.phone, {number: ''}));
      editedContact.phone = _.without(editedContact.phone, _.findWhere(editedContact.phone, {type: ''}));
      editedContact.email = _.without(editedContact.email, _.findWhere(editedContact.email, {email: ''}));
      editedContact.email = _.without(editedContact.email, _.findWhere(editedContact.email, {type: ''}));

      $mdDialog.hide(editedContact);

    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };

  }

}]);

app.directive('addressVerify', function ($modal) {
  return {
    require: 'ngModel',
    scope: {
      addressVerify: '='
    },
    link: function (scope, element, attrs, ctrl) {

      // on focus show modal
      element.bind('focus', function () {
        showModal();
      });

      function showModal() {
        scope.modalInstance = $modal.open({
          templateUrl: 'app/views/modals/addressVerify.html',
          size: 'lg',
          scope: scope
        });
      }

      scope.closeVerifyAddressModal = function (result, addressObj) {
        ctrl.$setValidity('addressVerify', result);
        if (result) {
          scope.addressVerify = addressObj;
        }
        scope.modalInstance.dismiss('close');
      };

    }
  };
});


