'use strict';

define(['app'], function (app) {

    var addressVerify = function ($modal) {
        return {
            require: 'ngModel',
            scope: {
                addressVerify: '='
            },
            link: function (scope, element, attrs, ctrl) {

                // on focus show modal
                element.bind('focus', function () {
                    showModal();
                });

                function showModal() {
                    scope.modalInstance = $modal.open({
                        templateUrl: 'app/views/modals/addressVerify.html',
                        size: 'lg',
                        scope: scope
                    });
                }

                scope.closeVerifyAddressModal = function (result, addressObj) {
                    ctrl.$setValidity('addressVerify', result);
                    if (result) {
                        scope.addressVerify = addressObj;
                    }
                    scope.modalInstance.dismiss('close');
                };

            }
        };
    };

    app.directive('addressVerify', ['$modal', addressVerify]);

});
