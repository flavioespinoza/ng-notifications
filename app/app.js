'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.viewLaunchPad',
  'myApp.notifications',
  'myApp.d3Directives',
  'ui.bootstrap',
  'ngMaterial',
  'ngAnimate',
  'ngFx',
  'slip',
  'elasticsearch',
  'ngCsvImport',
  'firebase'
])
  .controller('MyAppCtrl', ['$scope', function ($scope) {

    $scope.title = 'PE Notifications';

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
      }
    ]

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
      });

  }])
  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('grey', {
        'default': '700'
      })
      .accentPalette('purple', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
      });

  });

