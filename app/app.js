'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.ripometer',
  'myApp.socialWeedia',
  'myApp.ripSession',
  'myApp.statsAndStash',
  'myApp.globalFeed',
  'myApp.settings',
  'ui.bootstrap',
  'ngMaterial',
  'ngAnimate',
  'ngFx',
  'slip',
  'elasticsearch',
  'ngCsvImport',
  'myApp.d3Directives'
])
  .controller('MyAppCtrl',function($scope, $location, $log){

    $scope.tabs = [
      //{
      //  labelIcon: 'fa fa-rocket',
      //  bodyTitle: 'Touch to rip',
      //  html: '/app/view-ripometer/ripometer.html'
      //},
      {
        labelIcon: 'fa fa-rocket',
        bodyTitle: 'SOCIAL WEEDIA',
        html: '/app/view-social-weedia/social-weedia.html'
      },
      {
        labelIcon: 'fa fa-rocket',
        bodyTitle: 'RIP SESSION',
        html: '/app/view-rip-session/rip-session.html'
      },
      {
        labelIcon: 'fa fa-rocket',
        bodyTitle: 'STATS AND STASH',
        html: '/app/view-stats-and-stash/stats-and-stash.html'
      },
      {
        labelIcon: 'fa fa-rocket',
        bodyTitle: 'GLOBAL FEED',
        html: '/app/view-global-feed/global-feed.html'
      },
      {
        labelIcon: 'fa fa-ellipsis-v',
        bodyTitle: 'SETTINGS',
        html: '/app/view-settings/settings.html'
      }
    ];

  })
  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.otherwise({redirectTo: '/'});

    //$routeProvider
    //  .when('/', {
    //    templateUrl: 'view-launchpad/launchpad.html',
    //    controller: 'launchPadCtrl'
    //  });

  }])
  .config( function($mdThemingProvider){

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('grey', {
        'default': '700'
      })
      .accentPalette('purple', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
      });

  });

