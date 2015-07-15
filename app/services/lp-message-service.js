/**
 * Created by Flavor on 7/14/15.
 */
app.service('PEMessagesService', ['$http', '$q', '$firebaseObject', function ($http, $q, $firebaseObject) {

  var PEMessagesService = this;




  var ref = new Firebase('https://boiling-fire-8542.firebaseio.com/');


  https://boiling-fire-8542.firebaseio.com/

  var url = 'https://boiling-fire-8542.firebaseio.com?auth=8dwW03A7m3lGoiAfS6uVDXrsnK0rlWINwAA2gPXK';

  PEMessagesService.getAllMessages = function () {

    $http.get(url)
      .success(function (data) {
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
      })
      .error(function (error) {
        alert(error);
      });

  };

  PEMessagesService.getCurrentMessages = function () {

    var deferred = $q.defer();

    $http.get(url)
      .success(function (data) {
        deferred.resolve(data);
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
      })
      .error(function (error) {
        deferred.reject(error);
        alert(error)
      });

    return deferred.promise;

  };

  PEMessagesService.putAcknowledgedMessages = function (acknowledgedMessages) {

    var url = '/api';
    var deferred = $q.defer();

    $http.put(url, acknowledgedMessages)
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(error, status, headers, config) {
        deferred.reject(error);
      });

    return deferred.promise;

  };

  return PEMessagesService;

}]);