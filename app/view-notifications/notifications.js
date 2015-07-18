/**
 * Created by flavor on 6/24/15.
 */
var app = angular.module('myApp.notifications', []);

app.controller('notificationsCtrl', ['$scope', 'PEMessagesService', function ($scope, PEMessagesService) {

  PEMessagesService.getAllMessages().then(function (allMessages) {
    $scope.allMessages = _.sortBy(allMessages, 'priority');
  });



}]);