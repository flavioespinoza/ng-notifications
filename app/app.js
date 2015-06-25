'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.notifications',
  'myApp.d3Directives',
  'myApp.viewAnalytics',
  'myApp.version',
  'ui.bootstrap',
  'ngMaterial',
  'slip',
  'elasticsearch',
  'ngCsvImport'
])
  .controller('MyAppCtrl', ['$scope', function ($scope) {
    $scope.menu = [
      {
        title: 'notifications',
        url: '/notifications',
        icon: 'fa fa-envelope-o'
      },
      {
        title: 'Analytics',
        url: '/analytics',
        icon: 'fa fa-bar-chart'
      }
    ]
  }])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/notifications'});

    $routeProvider
      .when('/notifications', {
        templateUrl: 'view-notifications/notifications.html',
        controller: 'notificationsCtrl'
      })
      .when('/analytics', {
        templateUrl: 'view-analytics/view-analytics.html',
        controller: 'ViewAnalyticsCtrl'
      });

  }])
  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });

