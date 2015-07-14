/**
 * Created by Flavor on 7/14/15.
 */
app.service('PEMessagesService', ['$http', function ($http) {

  var PEMessagesService = this;
  var today = moment().format();

  var data = [{
    "MessageID": 26,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 1,
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
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 1,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-06-26T13:32:05.477",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:32:01.9729643",
    "ExpirationEndDate": "2015-06-26T13:32:01.9729643",
    "ModifyDate": "2015-06-26T13:32:05.477",
    "ModifyBy": 22876
  }, {
    "MessageID": 28,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 1,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-06-26T13:32:43.69",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:32:42.2369643",
    "ExpirationEndDate": "2015-06-26T13:32:42.2369643",
    "ModifyDate": "2015-06-26T13:32:43.69",
    "ModifyBy": 22876
  }, {
    "MessageID": 29,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-26T13:32:43.897",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:32:43.1059643",
    "ExpirationEndDate": "2015-06-26T13:32:43.1059643",
    "ModifyDate": "2015-06-26T13:32:43.897",
    "ModifyBy": 22876
  }, {
    "MessageID": 31,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-26T13:50:19.923",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:50:19.0019643",
    "ExpirationEndDate": "2015-06-26T13:50:19.0019643",
    "ModifyDate": "2015-06-26T13:50:19.923",
    "ModifyBy": 22876
  }, {
    "MessageID": 32,
    "MessagePriorityName": "Normal",
    "MessagePriorityID": 3,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-26T13:52:08.42",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:52:07.4909643",
    "ExpirationEndDate": "2015-06-26T13:52:07.4909643",
    "ModifyDate": "2015-06-26T13:52:08.42",
    "ModifyBy": 22876
  }, {
    "MessageID": 30,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-26T13:49:23.663",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:49:20.4619643",
    "ExpirationEndDate": "2015-06-26T13:49:20.4619643",
    "ModifyDate": "2015-06-26T13:49:23.663",
    "ModifyBy": 22876
  }, {
    "MessageID": 33,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-26T13:52:59.573",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T13:52:58.6369643",
    "ExpirationEndDate": "2015-06-26T13:52:58.6369643",
    "ModifyDate": "2015-06-26T13:52:59.573",
    "ModifyBy": 22876
  }, {
    "MessageID": 34,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-26T14:15:22.813",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T14:15:20.8219643",
    "ExpirationEndDate": "2015-06-26T14:15:20.8219643",
    "ModifyDate": "2015-06-26T14:15:22.813",
    "ModifyBy": 22876
  }, {
    "MessageID": 35,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-26T14:18:08.607",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-26T14:18:07.3849643",
    "ExpirationEndDate": "2015-06-26T14:18:07.3849643",
    "ModifyDate": "2015-06-26T14:18:08.607",
    "ModifyBy": 22876
  }, {
    "MessageID": 36,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T09:04:20.603",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T09:04:19.6455271",
    "ExpirationEndDate": "2015-06-29T09:04:19.6455271",
    "ModifyDate": "2015-06-29T09:04:20.603",
    "ModifyBy": 22876
  }, {
    "MessageID": 37,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T09:17:27.563",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T09:17:26.743379",
    "ExpirationEndDate": "2015-06-29T09:17:26.743379",
    "ModifyDate": "2015-06-29T09:17:27.563",
    "ModifyBy": 22876
  }, {
    "MessageID": 38,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T09:19:25.907",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T09:19:25.0730402",
    "ExpirationEndDate": "2015-06-29T09:19:25.0730402",
    "ModifyDate": "2015-06-29T09:19:25.907",
    "ModifyBy": 22876
  }, {
    "MessageID": 39,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T10:32:13.42",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T10:32:12.7508866",
    "ExpirationEndDate": "2015-06-29T10:32:12.7508866",
    "ModifyDate": "2015-06-29T10:32:13.42",
    "ModifyBy": 22876
  }, {
    "MessageID": 40,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T10:46:46.07",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T10:46:45.5304682",
    "ExpirationEndDate": "2015-06-29T10:46:45.5304682",
    "ModifyDate": "2015-06-29T10:46:46.07",
    "ModifyBy": 22876
  }, {
    "MessageID": 41,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T10:52:03.003",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T10:52:02.4858529",
    "ExpirationEndDate": "2015-06-29T10:52:02.4858529",
    "ModifyDate": "2015-06-29T10:52:03.003",
    "ModifyBy": 22876
  }, {
    "MessageID": 42,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T10:56:13.173",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T10:56:12.6628681",
    "ExpirationEndDate": "2015-06-29T10:56:12.6628681",
    "ModifyDate": "2015-06-29T10:56:13.173",
    "ModifyBy": 22876
  }, {
    "MessageID": 43,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T11:12:04.287",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T11:12:03.7369707",
    "ExpirationEndDate": "2015-06-29T11:12:03.7369707",
    "ModifyDate": "2015-06-29T11:12:04.287",
    "ModifyBy": 22876
  }, {
    "MessageID": 44,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-29T11:39:31.407",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-29T11:39:30.8378576",
    "ExpirationEndDate": "2015-06-29T11:39:30.8378576",
    "ModifyDate": "2015-06-29T11:39:31.407",
    "ModifyBy": 22876
  }, {
    "MessageID": 45,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-30T14:29:49.383",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-30T14:29:48.8264029",
    "ExpirationEndDate": "2015-06-30T14:29:48.8264029",
    "ModifyDate": "2015-06-30T14:29:49.383",
    "ModifyBy": 22876
  }, {
    "MessageID": 46,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-30T14:33:17.9",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-30T14:33:17.3492531",
    "ExpirationEndDate": "2015-06-30T14:33:17.3492531",
    "ModifyDate": "2015-06-30T14:33:17.9",
    "ModifyBy": 22876
  }, {
    "MessageID": 51,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-30T17:46:03.227",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-30T17:45:34.2955541",
    "ExpirationEndDate": "2015-06-30T17:45:34.0966138",
    "ModifyDate": "2015-06-30T17:46:03.227",
    "ModifyBy": 22876
  }, {
    "MessageID": 52,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-30T17:46:36.263",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-30T17:46:33.7808487",
    "ExpirationEndDate": "2015-06-30T17:46:33.7808487",
    "ModifyDate": "2015-06-30T17:46:36.263",
    "ModifyBy": 22876
  }, {
    "MessageID": 54,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-30T18:25:33.987",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-30T18:24:46.0640842",
    "ExpirationEndDate": "2015-06-30T18:24:45.5578818",
    "ModifyDate": "2015-06-30T18:25:33.987",
    "ModifyBy": 22876
  }, {
    "MessageID": 55,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-06-30T18:25:42.43",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-30T18:25:39.451234",
    "ExpirationEndDate": "2015-06-30T18:25:39.451234",
    "ModifyDate": "2015-06-30T18:25:42.43",
    "ModifyBy": 22876
  }, {
    "MessageID": 62,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:30:27.533",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:30:26.6590023",
    "ExpirationEndDate": "2015-07-02T13:30:26.6590023",
    "ModifyDate": "2015-07-02T13:30:27.533",
    "ModifyBy": 22876
  }, {
    "MessageID": 63,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:32:21.95",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:32:21.367472",
    "ExpirationEndDate": "2015-07-02T13:32:21.367472",
    "ModifyDate": "2015-07-02T13:32:21.95",
    "ModifyBy": 22876
  }, {
    "MessageID": 66,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:41:43.503",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:41:42.4772958",
    "ExpirationEndDate": "2015-07-02T13:41:42.4772958",
    "ModifyDate": "2015-07-02T13:41:43.503",
    "ModifyBy": 22876
  }, {
    "MessageID": 67,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:43:24.497",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:43:23.8417175",
    "ExpirationEndDate": "2015-07-02T13:43:23.8417175",
    "ModifyDate": "2015-07-02T13:43:24.497",
    "ModifyBy": 22876
  }, {
    "MessageID": 68,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:01.463",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:00.8594189",
    "ExpirationEndDate": "2015-07-02T13:44:00.8594189",
    "ModifyDate": "2015-07-02T13:44:01.463",
    "ModifyBy": 22876
  }, {
    "MessageID": 69,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:36.97",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:36.3489675",
    "ExpirationEndDate": "2015-07-02T13:44:36.3489675",
    "ModifyDate": "2015-07-02T13:44:36.97",
    "ModifyBy": 22876
  }, {
    "MessageID": 70,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:37.327",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:37.2260552",
    "ExpirationEndDate": "2015-07-02T13:44:37.2260552",
    "ModifyDate": "2015-07-02T13:44:37.327",
    "ModifyBy": 22876
  }, {
    "MessageID": 71,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:37.397",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:37.2970623",
    "ExpirationEndDate": "2015-07-02T13:44:37.2970623",
    "ModifyDate": "2015-07-02T13:44:37.397",
    "ModifyBy": 22876
  }, {
    "MessageID": 72,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:37.42",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:37.3230649",
    "ExpirationEndDate": "2015-07-02T13:44:37.3230649",
    "ModifyDate": "2015-07-02T13:44:37.42",
    "ModifyBy": 22876
  }, {
    "MessageID": 73,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:37.437",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:37.3390665",
    "ExpirationEndDate": "2015-07-02T13:44:37.3390665",
    "ModifyDate": "2015-07-02T13:44:37.437",
    "ModifyBy": 22876
  }, {
    "MessageID": 74,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:37.493",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:37.3960722",
    "ExpirationEndDate": "2015-07-02T13:44:37.3960722",
    "ModifyDate": "2015-07-02T13:44:37.493",
    "ModifyBy": 22876
  }, {
    "MessageID": 75,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:37.543",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:37.444077",
    "ExpirationEndDate": "2015-07-02T13:44:37.444077",
    "ModifyDate": "2015-07-02T13:44:37.543",
    "ModifyBy": 22876
  }, {
    "MessageID": 76,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:44:37.587",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:44:37.4870813",
    "ExpirationEndDate": "2015-07-02T13:44:37.4870813",
    "ModifyDate": "2015-07-02T13:44:37.587",
    "ModifyBy": 22876
  }, {
    "MessageID": 77,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:45:16.793",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:45:15.987931",
    "ExpirationEndDate": "2015-07-02T13:45:15.987931",
    "ModifyDate": "2015-07-02T13:45:16.793",
    "ModifyBy": 22876
  }, {
    "MessageID": 78,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:47:06.07",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:47:05.4198731",
    "ExpirationEndDate": "2015-07-02T13:47:05.4198731",
    "ModifyDate": "2015-07-02T13:47:06.07",
    "ModifyBy": 22876
  }, {
    "MessageID": 79,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 1,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-07-02T13:47:47.963",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:47:47.3460653",
    "ExpirationEndDate": "2015-07-02T13:47:47.3460653",
    "ModifyDate": "2015-07-02T13:47:47.963",
    "ModifyBy": 22876
  }, {
    "MessageID": 80,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-02T13:48:15.23",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-02T13:48:14.5117816",
    "ExpirationEndDate": "2015-07-02T13:48:14.5117816",
    "ModifyDate": "2015-07-02T13:48:15.23",
    "ModifyBy": 22876
  }, {
    "MessageID": 90,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Eric T G",
    "MessageBody": "Eric T G B",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-06T14:18:58.503",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-06-07T00:00:00",
    "ExpirationEndDate": "2015-06-07T00:00:00",
    "ModifyDate": "2015-07-06T14:18:58.503",
    "ModifyBy": 22876
  }, {
    "MessageID": 97,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-08T11:44:20.733",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-08T11:44:13.1857021",
    "ExpirationEndDate": "2015-07-08T11:44:13.1857021",
    "ModifyDate": "2015-07-08T11:44:20.733",
    "ModifyBy": 22876
  }, {
    "MessageID": 97,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 2,
    "UserMessageStatusTypeName": "Read",
    "CreateDate": "2015-07-08T11:44:20.733",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-08T11:44:13.1857021",
    "ExpirationEndDate": "2015-07-08T11:44:13.1857021",
    "ModifyDate": "2015-07-08T11:44:20.733",
    "ModifyBy": 22876
  }, {
    "MessageID": 98,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 1,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-07-08T11:44:36.117",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-08T11:44:35.276911",
    "ExpirationEndDate": "2015-07-08T11:44:35.2559089",
    "ModifyDate": "2015-07-08T11:44:36.117",
    "ModifyBy": 22876
  }, {
    "MessageID": 98,
    "MessagePriorityName": "Critical",
    "MessagePriorityID": 1,
    "MessageTitle": "Erics Test Title",
    "MessageBody": "Erics Test Body",
    "UserMessageStatusTypeID": 1,
    "UserMessageStatusTypeName": "Unread",
    "CreateDate": "2015-07-08T11:44:36.117",
    "CreatedBy": 22876,
    "ExpirationStartDate": "2015-07-08T11:44:35.276911",
    "ExpirationEndDate": "2015-07-08T11:44:35.2559089",
    "ModifyDate": "2015-07-08T11:44:36.117",
    "ModifyBy": 22876
  }];






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
          statusID: message.UserMessageStatusTypeID,
          status: message.UserMessageStatusTypeName,
          dateAcknowledged: '',
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
            statusID: message.UserMessageStatusTypeID,
            status: message.UserMessageStatusTypeName,
            dateAcknowledged: '',
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

  return PEMessagesService;

}]);