'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.viewLaunchPad',
  'myApp.notifications',
  'myApp.contacts',
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
        title: 'Launch Pad',
        url: '/launchpad',
        icon: 'fa fa-rocket'
      },
      {
        title: 'Notifications',
        url: '/notifications',
        icon: 'fa fa-envelope-o'
      },
      {
        title: 'Contacts',
        url: '/contacts',
        icon: 'fa fa-user'
      }
    ];

  }])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/launchpad'});

    $routeProvider
      .when('/launchpad', {
        templateUrl: 'view-launchpad/view-launchpad.html',
        controller: 'ViewLaunchPadCtrl'
      })
      .when('/notifications', {
        templateUrl: 'view-notifications/notifications.html',
        controller: 'notificationsCtrl'
      })
      .when('/contacts', {
        templateUrl: 'view-contacts/contacts.html',
        controller: 'contactsCtrl'
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

