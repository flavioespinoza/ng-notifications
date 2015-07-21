/**
 * Created by flavor on 6/23/15.
 */
var app = angular.module('myApp.viewLaunchPad', ['ngMaterial']);

app.controller('ViewLaunchPadCtrl', ['$scope', '$window', '$mdDialog', 'PEMessagesService', function ($scope, $window, $mdDialog, PEMessagesService) {

  var messages = PEMessagesService.getCurrentMessages();

  $scope.messages = _.sortBy(messages, 'priority');
  $scope.criticalMessages = _.where(messages, {priority: 'critical'});
  $scope.allMessages =  PEMessagesService.getAllMessages();

  console.log($scope.allMessages);

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

  };

  $scope.data = {
    selectedIndex: 0,
    secondLocked:  true,
    secondLabel:   "Item Two",
    bottom:        false
  };
  $scope.next = function() {
    $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
  };
  $scope.previous = function() {
    $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
  };

  $scope.tabClicked = function (event) {
    console.log(event);
  };

  $scope.selectedIndex = 0;
  $scope.$watch('selectedIndex', function(current, old) {
    switch (current) {
      case 0:
        $location.url("/view1");
        break;
      case 1:
        $location.url("/view2");
        break;
      case 2:
        $location.url("/view3");
        break;
    }
  });


  $scope.trigger = false;
  $scope.messageDetails = {};
  $scope.goToMessage = function(message, event) {
    $scope.messageDetails = message;
    $scope.trigger = false;

  };

  $scope.doSecondaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Secondary Action')
        .content('Secondary actions can be used for one click actions')
        .ariaLabel('Secondary click demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

}]);


