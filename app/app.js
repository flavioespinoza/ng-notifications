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
      {
        labelIcon: 'icon-rip-ripometer',
        bodyTitle: 'Touch to rip',
        html: '/app/view-ripometer/ripometer.html'
      },
      {
        labelIcon: 'icon-rip-social-weedia',
        bodyTitle: 'SOCIAL WEEDIA',
        html: '/app/view-social-weedia/social-weedia.html'
      },
      {
        labelIcon: 'icon-rip-rip-session',
        bodyTitle: 'RIP SESSION',
        html: '/app/view-rip-session/rip-session.html'
      },
      {
        labelIcon: 'icon-rip-stats-and-stash',
        bodyTitle: 'STATS AND STASH',
        html: '/app/view-stats-and-stash/stats-and-stash.html'
      },
      {
        labelIcon: 'icon-rip-global-feed',
        bodyTitle: 'GLOBAL FEED',
        html: '/app/view-global-feed/global-feed.html'
      },
      {
        labelIcon: 'icon-rip-settings',
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

