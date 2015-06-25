/**
 * Created by flavor on 6/23/15.
 */
var app = angular.module('myApp.viewAnalytics', []);

app.controller('ViewAnalyticsCtrl', ['$scope', function ($scope) {
  $scope.messageData = {
    totalMessagesSent: 132,
    dateMessagesSent: [
      {
        date: '04/20/2015',
        total: 14
      }
    ]
  };

  $scope.myData = [10,20,30,40,60, 80, 20, 50];

}]);