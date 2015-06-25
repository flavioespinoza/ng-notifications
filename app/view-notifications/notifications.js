/**
 * Created by flavor on 6/24/15.
 */
var app = angular.module('myApp.notifications', []);

app.controller('notificationsCtrl', ['$scope', '$http', '$parse', function ($scope, $http, $parse) {

  $scope.userObj = {
    name: 'Ender Wiggin',
    title: 'PE Admin',
    email: 'ender.wiggin@solarcity.com'
  };

  $scope.composer = _.map($scope.userObj, function (val, key) {
    return {
      title: key,
      value: val
    }
  });

  $scope.priorityList = [
    {title: 'Normal'},
    {title: 'Medium'},
    {title: 'High'},
    {title: 'Critical'}
  ];

  $scope.recipientList = [
    {title: 'All Employees'},
    {title: 'Department'},
    {title: 'Office'},
    {title: 'State'},
    {title: 'Upload CSV'}
  ];

  $scope.notification = {
    composer: '',
    title: '',
    startDate: '',
    endDate: '',
    priority: '',
    message: ''
  };

  $scope.checkboxes = [
    {
      name: 'All Employees',
      visible: false,
      boxes: [
        {title: 'All Employees', checked: false}
      ]
    },
    {
      name: 'Department',
      visible: false,
      boxes: [
        {title: 'Dept 1', checked: false},
        {title: 'Dept 2', checked: false},
        {title: 'Dept 3', checked: false},
        {title: 'Dept 4', checked: false},
        {title: 'Dept 5', checked: false},
        {title: 'Dept 6', checked: false},
        {title: 'Dept 7', checked: false},
        {title: 'Dept 8', checked: false},
        {title: 'Dept 9', checked: false},
        {title: 'Dept 10', checked: false}
      ]
    },
    {
      name: 'Office',
      visible: false,
      boxes: [
        {title: 'Office 1', checked: false},
        {title: 'Office 3', checked: false},
        {title: 'Office 4', checked: false},
        {title: 'Office 5', checked: false}
      ]
    },
    {
      name: 'State',
      visible: false,
      boxes: [
        {title: 'CA'},
        {title: 'TX'},
        {title: 'AZ'},
        {title: 'UT'}
      ]
    },
    {
      name: 'Upload CSV',
      visible: false,
      boxes: [
        {title: '', checked: false}
      ]
    }
  ];

  $scope.recipient = {
    selected: ''

  };

  $scope.$watch(
    function ($scope) {
      return ($scope.recipient.selected);
    },
    function (newValue) {
      for (var i = 0; i < $scope.checkboxes.length; i++) {
        for (var j = 0; j < $scope.checkboxes[i].boxes.length; j++) {
          if ($scope.checkboxes[i].name === newValue) {
            $scope.checkboxes[i].visible = true;
          } else {
            $scope.checkboxes[i].visible = false;
            $scope.checkboxes[i].boxes[j].checked = false;
          }
        }
      }
    }
  );

  $scope.csv = {
    content: null,
    header: true,
    separator: ',',
    result: null
  };

  $scope.sendToGroup = function (group) {

  };

  $scope.sendNotification = function (csvContent, notification, userObj) {
    $scope.notification = {
      composer: userObj,
      title: notification.title,
      startDate: notification.startDate,
      endDate: notification.endDate,
      priority: notification.priority,
      message: notification.message,
      recipients: csvContent
    };
    console.log($scope.notification);
  };


  $scope.userGroups = ['Sales', 'Techs', 'New Hire', 'Need I-9', 'Need to Sign Up for Benefits'];


}]);