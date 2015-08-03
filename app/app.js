'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.manageContacts',
  'myApp.contacts',
  'myApp.addContact',
  'myApp.notifications',
  'myApp.d3Directives',
  'ui.bootstrap',
  'ngMaterial',
  'ngAnimate',
  'ngFx',
  'slip',
  'elasticsearch',
  'ngCsvImport'
])
  .controller('MyAppCtrl', ['$scope', function ($scope) {

    $scope.title = 'Solar City';

    $scope.menu = [
      {
        title: 'Manage Contacts',
        url: '/manage-contacts',
        icon: 'fa fa-edit'
      },
      {
        title: 'Contacts',
        url: '/contacts',
        icon: 'fa fa-user'
      },
      //{
      //  title: 'Launch Pad',
      //  url: '/launchpad',
      //  icon: 'fa fa-rocket'
      //},
      {
        title: 'Notifications',
        url: '/notifications',
        icon: 'fa fa-envelope-o'
      }
    ];

  }])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/manage-contacts'});

    $routeProvider

      .when('/manage-contacts', {
        templateUrl: 'view-manage-contacts/manage-contacts.html',
        controller: 'manageContactsCtrl'
      })

      .when('/contacts', {
        templateUrl: 'view-contacts/contacts.html',
        controller: 'contactsCtrl'
      })
      //.when('/launchpad', {
      //  templateUrl: 'view-launchpad/view-launchpad.html',
      //  controller: 'ViewLaunchPadCtrl'
      //})
      .when('/notifications', {
        templateUrl: 'view-notifications/notifications.html',
        controller: 'notificationsCtrl'
      });

  }])
  .config(function ($mdThemingProvider, $mdIconProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('grey', {
        'default': '700'
      })
      .accentPalette('purple', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
      });

    $mdIconProvider
      .defaultFontSet('fontawesome');


  });

