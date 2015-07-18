/**
 * Created by flavor on 6/23/15.
 */
var app = angular.module('myApp.viewLaunchPad', ['ngMaterial']);

app.controller('ViewLaunchPadCtrl', ['$scope', '$window', '$mdDialog', 'PEMessagesService', function ($scope, $window, $mdDialog, PEMessagesService) {

  var messages = PEMessagesService.getCurrentMessages();

  $scope.messages = _.sortBy(messages, 'priority');
  $scope.criticalMessages = _.where(messages, {priority: 'critical'});

  $scope.notificationButton = [
    {
      id: 'notifications',
      title: 'Notifications',
      icon: 'fa fa-bullhorn',
      url: 'messageCount'
    }
  ];

  $scope.launchPad = [
    {
      id: 'timeSheet',
      title: 'Time Sheet',
      icon: 'fa fa-pencil-square-o',
      url: 'TimeSheet.html#pageTimeSheetCrewList'
    },
    {
      id: 'pay',
      title: 'Pay',
      icon: 'fa fa-usd',
      url: 'TimeSheetReview.html'
    },
    {
      id: 'customers',
      title: 'Customers',
      icon: 'fa fa-heart',
      url: 'Customer.html'
    },
    {
      id: 'university',
      title: 'University',
      icon: 'fa fa-graduation-cap',
      url: 'Training.html#pageTraining'
    },
    {
      id: 'teammates',
      title: 'Teammates',
      icon: 'fa fa-users',
      url: 'Teammates.html'
    }
  ];

  $scope.acknowledgeMessage = function (message) {

    $scope.messages = _.without($scope.messages, message);

    $scope.$watch('messages',
      function() {
        $scope.criticalMessages = _.where($scope.messages, {priority: 'critical'});
      });

    //PEMessagesService.putAcknowledgedMessages(message).then(function (res) {
    //  $scope.messages = _.without($scope.messages, message);
    //})
  }

}]);


