/**
 * Created by Flavor on 7/14/15.
 */
app.service('PEMessagesService', ['$http', '$q', '$location', function ($http, $q, $location) {

  var PEMessagesService = this;
  var host = '';
  if ($location.$$host === 'localhost') {
    host = 'https://' + $location.$$host + '/LaunchPad';
  } else {
    host = 'https://' + $location.$$host
  }

  var data = [{
    "MessageID": 26,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-06-26T13:31:55.97",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:31:37.7199643",
    "ExpirationEndDate": "2015-06-26T13:31:37.7199643",
    "ModifyDate": "2015-06-26T13:31:55.97",
    "ModifyBy": 22876
  }, {
    "MessageID": 26,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-06-26T13:31:55.97",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:31:37.7199643",
    "ExpirationEndDate": "2015-06-26T13:31:37.7199643",
    "ModifyDate": "2015-06-26T13:31:55.97",
    "ModifyBy": 22876
  }, {
    "MessageID": 26,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-06-26T13:31:55.97",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:31:37.7199643",
    "ExpirationEndDate": "2015-06-26T13:31:37.7199643",
    "ModifyDate": "2015-06-26T13:31:55.97",
    "ModifyBy": 22876
  }, {
    "MessageID": 26,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-06-26T13:31:55.97",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:31:37.7199643",
    "ExpirationEndDate": "2015-06-26T13:31:37.7199643",
    "ModifyDate": "2015-06-26T13:31:55.97",
    "ModifyBy": 22876
  }, {
    "MessageID": 27,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-26T13:32:05.477",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:32:01.9729643",
    "ExpirationEndDate": "2015-06-26T13:32:01.9729643",
    "ModifyDate": "2015-06-26T13:32:05.477",
    "ModifyBy": 22876
  }, {
    "MessageID": 28,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-06-26T13:32:43.69",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:32:42.2369643",
    "ExpirationEndDate": "2015-06-26T13:32:42.2369643",
    "ModifyDate": "2015-06-26T13:32:43.69",
    "ModifyBy": 22876
  }];

  //var url = host + '/webapi/PEMessageApi/GetUsersMessagesByUserID?userID=';


  PEMessagesService.getAllMessages = function () {
    var array = [];
    //TODO: Need to add date acknowledged
    _.each(data, function (message) {
      array.push(
        {
          id: message.MessageID,
          startDate: message.ExpirationStartDate,
          endDate: message.ExpirationEndDate,
          acknowledged: false,
          dateAcknowledged: '',
          statusID: message.UserMessageStatusTypeID,
          status: message.UserMessageStatusTypeName,
          priority: message.MessagePriorityName.toLowerCase(),
          priorityID: message.MessagePriorityID,
          title: message.MessageTitle,
          msg: message.MessageBody
        }
      )
    });
    return array;

  };

  PEMessagesService.getCurrentMessages = function () {
    var array = [];
    //TODO: Need to add date acknowledged
    _.each(data, function (message) {
      if (message.UserMessageStatusTypeName === 'Unread') {
        array.push(
          {
            id: message.MessageID,
            startDate: message.ExpirationStartDate,
            endDate: message.ExpirationEndDate,
            acknowledged: false,
            dateAcknowledged: '',
            statusID: message.UserMessageStatusTypeID,
            status: message.UserMessageStatusTypeName,
            priority: message.MessagePriorityName.toLowerCase(),
            priorityID: message.MessagePriorityID,
            title: message.MessageTitle,
            msg: message.MessageBody
          }
        )
      }
    });
    return array;
  };

  //
  //PEMessagesService.getCurrentMessages = function (userID) {
  //  var deferred = $q.defer();
  //
  //  $http.get(url)
  //    .success(function (data) {
  //      deferred.resolve(data);
  //      var array = [];
  //      //TODO: Need to add date acknowledged
  //      _.each(data, function (message) {
  //        if (message.UserMessageStatusTypeName === 'Unread') {
  //          array.push(
  //            {
  //              id: message.MessageID,
  //              startDate: message.ExpirationStartDate,
  //              endDate: message.ExpirationEndDate,
  //              acknowledged: false,
  //              dateAcknowledged: '',
  //              statusID: message.UserMessageStatusTypeID,
  //              status: message.UserMessageStatusTypeName,
  //              priority: message.MessagePriorityName.toLowerCase(),
  //              priorityID: message.MessagePriorityID,
  //              title: message.MessageTitle,
  //              msg: message.MessageBody
  //            }
  //          )
  //        }
  //      });
  //      return array;
  //    })
  //    .error(function (error) {
  //      deferred.reject(error);
  //      alert(error)
  //    });
  //
  //  return deferred.promise;
  //
  //};

  function putHelper(acknowledgedMessages){

  }

  //PEMessagesService.putAcknowledgedMessages = function (acknowledgedMessages) {
  //  for (var i = 0; i < acknowledgedMessages.length; i++) {
  //    var url = '';
  //    var deferred = $q.defer();
  //    $http.put(url, acknowledgedMessages[i])
  //      .success(function (data, status, headers, config) {
  //        deferred.resolve(data);
  //      })
  //      .error(function (error, status, headers, config) {
  //        deferred.reject(error);
  //      });
  //    return deferred.promise;
  //  }
  //};

  PEMessagesService.putAcknowledgedMessages = function (acknowledgedMessages) {
    return 'you are awesome';
  };


  return PEMessagesService;

}]);

angular.module('PEMessageApp.service', []).service('PEMessageService', ['$q', '$location', '$http',
  function ($q, $location, $http) {

  }]);


