/**
 * Created by flavor on 6/24/15.
 */
var app = angular.module('myApp.viewNotifications', []);

app.controller('ViewNotificationsCtrl', ['$scope', '$http', '$parse', function ($scope, $http, $parse) {
  //
  //$http.get('user')
  //  .success(function (data) {
  //    $scope.user = data.user;
  //  })
  //  .error(function (err) {
  //    console.log(err);
  //  });

  
  $scope.userObj = {
    name: 'Ender Wiggin',
    title: 'PE Admin',
    email: 'ender.wiggin@solarcity.com'
  };

  $scope.composer = _.map($scope.userObj, function(val, key){
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
    {title: 'All Employees', value: 'allEmployees'},
    {title: 'Department', value: 'department'},
    {title: 'Office', value: 'office'},
    {title: 'State', value: 'state'}
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
    }
  ];

  $scope.recipient = {
    selected: ''

  };

  $scope.$watch(
    function( $scope ) {
      return($scope.recipient.selected);

    },
    function( newValue ) {

      if (newValue === 'All Employees'){

        for (var i = 0; i < $scope.checkboxes.length; i++) {
          var obj = $scope.checkboxes[i];
          
        }

        $scope.checkboxes[0].visible = true;
        $scope.checkboxes[1].visible = false;
        $scope.checkboxes[2].visible = false;
        $scope.checkboxes[3].visible = false;
      } else if (newValue === 'Department'){
        $scope.checkboxes[0].visible = false;
        $scope.checkboxes[1].visible = true;
        $scope.checkboxes[2].visible = false;
        $scope.checkboxes[3].visible = false;
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
  };


  $scope.userGroups = ['Sales', 'Techs', 'New Hire', 'Need I-9', 'Need to Sign Up for Benefits'];


}]);