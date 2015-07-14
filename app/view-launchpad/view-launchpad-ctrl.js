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
      priority: 'critical',
      title: 'Message Title',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid blanditiis eveniet excepturi expedita ipsum iste molestiae, mollitia, necessitatibus ratione similique sunt ut? eveniet excepturi expedita ipsum iste molestiae, mollitia, necessitatibus ratione'
    },
    {
      id: 4,
      acknowledged: false,
      dateAcknowledged: '',
      priority: 'critical',
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
    $mdDialog.show({
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


  var cleanOut;
  var playTime;
  $scope.demo = {};
  $scope.demo.cards = [];
  $scope.demo.ease = 'back';
  $scope.demo.speed = 500;
  $scope.demo.speeds = [100];
  getSpeeds();
  function getSpeeds(){
    for(var i = 200; i < 1500; i+=100){
      $scope.demo.speeds.push(i);
    }
  }
  $scope.demo.mainAnimation = null;
  var animations = [
    'zoom-right',
    'zoom-left',
    'zoom-down',
    'zoom-up',
    'zoom-normal',
    'rotate-counterclock-up',
    'rotate-clock',
    'rotate-counterclock',
    'rotate-clock-left',
    'fade-normal',
    'fade-down',
    'fade-down-big',
    'fade-left',
    'fade-left-big',
    'fade-right',
    'fade-right-big',
    'fade-up',
    'fade-up-big',
    'bounce-normal',
    'bounce-down',
    'bounce-left',
    'bounce-up',
    'bounce-right'
  ];
  $scope.demo.animations = shuffle(animations);
  $scope.demo.easings = [
    'quad',
    'cubic',
    'quart',
    'quint',
    'strong',
    'back',
    'bounce',
    'circ',
    'elastic',
    'expo',
    'sine'
  ];

  $scope.demo.clear = function(animation){
    $scope.demo.stop();
    var cache = $scope.demo.animations;
    $scope.animations = [];
    $scope.demo.animations = cache;
    $scope.demo.addCards(animation);
  };
  $scope.demo.setSpeed = function(speed){
    $scope.demo.speed = speed;
  };

  $scope.demo.setEase = function(ease){
    $scope.demo.ease = ease;
  };



  function populate(animation){
    if(cleanOut){
      $scope.demo.stop();
    }

    $scope.demo.mainAnimation = animation;
    var pushToCards = function(data){
      return function (){
        $scope.demo.cards.push({'header': data, 'type': animation});
      };
    };
    var i   = 1,
      end = 10;
    for( ; i < end; i++){
      $timeout(pushToCards('Item: '+i), i * 300);
    }
  }

  $scope.demo.addCards = function(animation){
    if($scope.demo.cards && $scope.demo.cards.length){
      $scope.demo.clean().then(function(){
        populate(animation);
      });
    } else {
      populate(animation);

    }
  };

  $scope.demo.removeCard = function(index){
    $scope.demo.cards.splice(index, 1);
  };

  $scope.demo.erase = function(){
    $scope.demo.clean().then(function(){
      $scope.demo.mainAnimation = null;
    });
  };

  $scope.demo.clean = function(){
    var dfrd = $q.defer();
    var popCards = function(index){
      return function(){
        $scope.demo.cards.pop();
        if(!$scope.demo.cards.length){

          dfrd.resolve(index);
        }
      };
    };
    angular.forEach($scope.demo.cards, function (card, index){
      $timeout(popCards(index), 400 * index);
    });
    return dfrd.promise;
  };

  $scope.demo.play = function(index){
    var animation = $scope.demo.animations[index];
    if(animation){
      $scope.demo.mainAnimation = animation;
      $scope.demo.addCards(animation);
      cleanOut = $timeout(function(){
        $scope.demo.clean();
      }, $scope.demo.speed * 6.5);
      playTime = $timeout(function(){
        $scope.demo.play(++index);
      }, $scope.demo.speed * 14.5);
    }
  };

  $scope.demo.stop = function(){
    $timeout.cancel(cleanOut);
    $timeout.cancel(playTime);
  };

  $timeout(function(){
    $scope.demo.play(0);
  }, 1500);

  function shuffle (obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    angular.forEach(obj, function(value) {
      rand = random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  }

  function random (min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  }




}]);


function DialogController($scope, $mdDialog, messages) {


  $scope.date = moment().format();
  $scope.messages = _.sortBy(messages, 'priority');
  $scope.criticalMessages = _.where(messages, {priority: 'critical'});

  $scope.acknowledgeMessage = function (_msg, _date) {


    var acknowledged = _.findWhere($scope.criticalMessages, {id: _msg.id});
    if (acknowledged) {
      acknowledged.acknowledged = true;
      acknowledged.dateAcknowledged = _date;
      //$scope.criticalMessages = _.without($scope.criticalMessages, _.findWhere($scope.criticalMessages, {id: _msg.id}));
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

app.directive('fadeOnClick', function($animate){
  return function($scope, elem){

    debugger;

    elem.on('click', function(){
      $animate.animate(elem, 'fx-fade-up')
        .then(function(){
          console.log('Done pulsing');
        });
      $scope.$apply();
    });
  };
});

