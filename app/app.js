'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.d3Directives',
  'myApp.viewNotifications',
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
      //{
      //  title: 'View 1',
      //  url: '/view1'
      //},
      //{
      //  title: 'View 2',
      //  url: '/view2'
      //},
      {
        title: 'Notifications',
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
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      })
      .when('/notifications', {
        templateUrl: 'view-notifications/view-notifications.html',
        controller: 'ViewNotificationsCtrl'
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

