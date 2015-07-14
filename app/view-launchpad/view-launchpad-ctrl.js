/**
 * Created by flavor on 6/23/15.
 */
var app = angular.module('myApp.viewLaunchPad', ['ngMaterial']);

app.controller('ViewLaunchPadCtrl', ['$scope', '$window', '$mdDialog', '$timeout', '$q', function ($scope, $window, $mdDialog, $timeout, $q) {

  var messages = [
    {
      id: 0,
      acknowledged: false,
      dateAcknowledged: '',
      priority: 'normal',
      title: 'Message Title',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.?'
    },
    {
      id: 1,
      acknowledged: false,
      dateAcknowledged: '',
      priority: 'normal',
      title: 'Message Title',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid blanditiis eveniet excepturi expedita ipsum iste molestiae, mollitia, necessitatibus ratione similique sunt ut? Alias aliquid blanditiis eveniet excepturi expedita ipsum iste molestiae, mollitia, necessitatibus ratione similique sunt ut'
    },
    {
      id: 2,
      acknowledged: false,
      dateAcknowledged: '',
      priority: 'normal',
      title: 'Message Title',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid blanditiis similique sunt ut?'
    },
    {
      id: 3,
      acknowledged: false,
      dateAcknowledged: '',
      priority: 'normal',
      title: 'Message Title',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid blanditiis eveniet excepturi expedita ipsum iste molestiae, mollitia, necessitatibus ratione similique sunt ut? eveniet excepturi expedita ipsum iste molestiae, mollitia, necessitatibus ratione'
    },
    {
      id: 4,
      acknowledged: false,
      dateAcknowledged: '',
      priority: 'normal',
      title: 'Message Title',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid blanditiis ut?'
    }
  ];
  $scope.messages = _.sortBy(messages, 'priority');
  $scope.criticalMessages = _.where(messages, {priority: 'critical'});
  $scope.launchPad = [
    {
      id: 'notifications',
      title: 'Notifications',
      icon: 'fa fa-bullhorn',
      url: 'messageCount'
    },
    {
      id: 'timeSheet',
      title: 'Time Sheet',
      icon: 'fa fa-pencil-square-o',
      url: '#'
    },
    {
      id: 'pay',
      title: 'Pay',
      icon: 'fa fa-usd',
      url: '#'
    },
    {
      id: 'customers',
      title: 'Customers',
      icon: 'fa fa-heart',
      url: '#'
    },
    {
      id: 'university',
      title: 'University',
      icon: 'fa fa-graduation-cap',
      url: '#'
    },
    {
      id: 'teammates',
      title: 'Teammates',
      icon: 'fa fa-users',
      url: '#'
    }
  ];

  $scope.showMessages = function (ev, messages) {
    $mdDialog
      .show({
        controller: DialogController,
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        locals: {
          messages: messages
        },
        clickOutsideToClose: false
      })
      .then(function (answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      });
  };

  if ($scope.criticalMessages.length > 0) {
    $scope.showMessages(null, $scope.messages);
  }

  $scope.goTo = function (url) {
    if (url === 'messageCount') {
      $scope.showMessages(null, $scope.messages);
    } else {
      $window.location.href = url;
    }
  };

}]);

function DialogController($scope, $mdDialog, messages) {

  $scope.criticalMessagesInstructions = 'Read and acknowledge your critical messages to continue';
  $scope.date = moment().format();
  $scope.messages = _.sortBy(messages, 'priority');
  $scope.criticalMessages = _.where(messages, {priority: 'critical'});

  $scope.acknowledgeMessage = function (_msg, _date) {

    var acknowledged = _.findWhere($scope.criticalMessages, {id: _msg.id});

    if (acknowledged) {
      acknowledged.acknowledged = true;
      acknowledged.dateAcknowledged = _date;
      $scope.criticalMessages = _.without($scope.criticalMessages, _.findWhere($scope.criticalMessages, {id: _msg.id}));
      //TODO: Add event listner to transition other cards smoothly upwards as the on that was clicked fades out
    }

    $scope.messages = _.without($scope.messages, _.findWhere($scope.messages, {id: _msg.id}));

    if ($scope.messages.length == 0) {
      $mdDialog.hide();
    }

  };

  $scope.close = function () {
    $mdDialog.hide();
  };
}

