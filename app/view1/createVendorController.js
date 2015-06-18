'use strict';

define(['app'], function (app) {

    var createVendorController = function ($scope, $stateParams, $location, $modal, $http, commonService, ngConfigSettings, modalService, vendorService, createpoService, userRoleFunctionalityService, itemService) {

        $scope.createVendorInput = {
            VendorId: $stateParams.vendorId,
            VendorName: null,
            VendorStatusId: null,
            VendorType: null,
            ParentVendorId: null,
            ParentVendorModel: null,
            VendorWebsite: null,
            BusinessStructure: null,
            BusinessType: null,
            BusinessClass: [],
            RegionServed: [],
            VendorAccountId: null,
            VendorAccountModel: null,
            YearFounded: null,
            NAICSCodeId: null,
            NAICSCodeModel: null,
            INCOTerms: null,
            DUNSNumber: null,
            PortOfDischarge: null,
            PrimaryContactName: null,
            PrimaryContactPhone: null,
            PrimaryContactEmail: null,
            APContactId: null,
            APContactModel: null,
            BuyerId: null,
            BuyerModel: null,
            CheckName: null,
            TaxType: null,
            TaxId: null,
            PayToVendorId: null,
            PayToVendorModel: null,
            PaymentTerms: null,
            FOBPoint: null,
            ShippingCharges: null,
            CountryOfOrigin: null,
            CountryOfOriginModel: null,
            Note: null,
            PageNumber: 1,
            RowsPerPage: 20
        }

        function Init() {
            if ($stateParams.vendorId != null) {
                vendorService.SearchVendor($scope.createVendorInput).then(function (data) {
                    $scope.myVendor = data.vendorList[0];
                    var vendor = data.vendorList[0];
                    $scope.createVendorInput.VendorId = vendor.vendorId;
                    $scope.createVendorInput.VendorName = vendor.vendorName;
                    $scope.createVendorInput.VendorStatusId = vendor.vendorStatusId;
                    $scope.createVendorInput.BuyerId = vendor.buyerId;
                    $scope.createVendorInput.BuyerModel = vendor.buyerId == null ? null : vendor.buyer + "(" + vendor.buyerId + ")";
                    $scope.createVendorInput.ParentVendorId = vendor.parentVendorId;
                    $scope.createVendorInput.ParentVendorModel = vendor.parentVendorId == null ? null : vendor.parentVendor + "(" + vendor.parentVendorId + ")";
                    $scope.createVendorInput.VendorWebsite = vendor.vendorWebsite;
                    $scope.createVendorInput.BusinessStructure = vendor.businessStructure;
                    $scope.createVendorInput.BusinessType = vendor.businessType;
                    $scope.createVendorInput.VendorAccountId = vendor.vendorAccount,
                    //$scope.createVendorInput.VendorAccountModel: vendor.,
                    $scope.createVendorInput.YearFounded = vendor.yearFound;
                    $scope.createVendorInput.VendorType = vendor.vendorType;
                    $scope.createVendorInput.NAICSCode = vendor.naicsCode;
                    $scope.createVendorInput.NAICSCodeId = vendor.naicsCodeId;
                    $scope.createVendorInput.NAICSCodeModel = vendor.naicsCode == null ? null : vendor.naicsCode + "(" + vendor.naicsDescription + ")";
                    $scope.createVendorInput.DUNSNumber = vendor.dunsNumber,
                    $scope.createVendorInput.PortOfDischarge = vendor.portofDischarge,
                    $scope.createVendorInput.PrimaryContactName = vendor.vendorContactName,
                    $scope.createVendorInput.PrimaryContactPhone = vendor.vendorContactPhone,
                    $scope.createVendorInput.PrimaryContactEmail = vendor.vendorContactEmail,
                    $scope.createVendorInput.APContactId = vendor.apContactId,
                    $scope.createVendorInput.APContactModel = vendor.apContact,
                    $scope.createVendorInput.INCOTerms = vendor.incoTerms;
                    $scope.createVendorInput.CheckName = vendor.checkName;
                    $scope.createVendorInput.TaxType = vendor.taxType;
                    $scope.createVendorInput.TaxId = vendor.taxId;
                    $scope.createVendorInput.PayToVendorId = vendor.payToVendorId;
                    $scope.createVendorInput.PayToVendorModel = vendor.payToVendor == null ? null : vendor.payToVendor + " (" + vendor.payToVendorId + ")";
                    $scope.createVendorInput.PaymentTerms = vendor.paymentTermId;
                    $scope.createVendorInput.FOBPoint = vendor.fobPoint;
                    $scope.createVendorInput.ShippingCharges = vendor.shippingCharges;
                    $scope.createVendorInput.CountryOfOrigin = vendor.countryOfOrigin;
                    $scope.createVendorInput.CountryOfOriginModel = vendor.countryName;
                    $scope.createVendorInput.Note = vendor.note;
                    $scope.createVendorInput.AddressTypeId = vendor.pageNumber;
                    $scope.createVendorInput.FOBPoint = 'None';
                });

                vendorService.GetVendorBusinessRegion($stateParams.vendorId).then(function (data) {
                    $scope.BusinessClassAndRegion = data;
                    $scope.createVendorInput.BusinessClass = data.vendorBusinessClasses;
                    $scope.createVendorInput.RegionServed = data.vendorRegion;
                });
            }
            else {
                $scope.createVendorInput.FOBPoint = 'None';
            }
            LoadVendorAddresses();
            LoadDropDowns();
            LoadVedorGrid();
        }


        $scope.VendorFilter = {
            ItemId: null,
            VendorId: $stateParams.vendorId,
            IsActive: 1
        }

        function LoadVedorGrid() {
            itemService.GetItemVendor($scope.VendorFilter).then(function (data) {
                $scope.ItemVendors = data;
            });
        }

        function LoadDropDowns() {
            var filter = {
                businessClassId: null,
                businessClassName: null
            }
            vendorService.GetVendorBusinessAddress(filter).then(function (data) {
                $scope.BusinessClasses = data;
            });
            commonService.GetRegion().then(function (data) {
                $scope.Regions = data;
            });
            commonService.GetEntityStatuses(11).then(function (data) {
                $scope.VendorStatuses = data;
            });

            createpoService.GetAccount().then(function (data) {
                $scope.Accounts = data;
            });

            vendorService.GetPaymentTerm().then(function (data) {
                $scope.PaymentTermsData = data;
            });
        }

        $scope.ScreenUIManager = {
            IsItemVendorGridVisible: false
        };

        if ($stateParams.vendorId != null) {
            $scope.ScreenUIManager.IsItemVendorGridVisible = true;
            Init();
        }

        $scope.PoputeAccount = function (accountModel) {
            $scope.createVendorInput.VendorAccountId = accountModel.accountId;
        }

        $scope.GetCountry = function (country) {
            return vendorService.GetCountry(country);
        }

        $scope.businessClassSettings = {
            scrollableHeight: '250px',
            scrollable: true,
            displayProp: 'businessClass',
            idProp: 'businessClassId',

        };

        $scope.regionServedSettings = {
            scrollableHeight: '250px',
            scrollable: true,
            displayProp: 'regionName',
            idProp: 'regionId'
        }
        $scope.PopulateAutoSuggest = function (model, type) {
            switch (type) {
                case "CountryOfOrigin":
                    $scope.createVendorInput.countryOfOrigin = model.countryCode;
                    break;
                default:
            }
        }

        $scope.TaxTypes = [{ id: "W9", value: "W9" }, { id: "1099", value: "1099" }]
        $scope.BusinessStructures = [{ id: "C Corporation", value: "C Corporation" }, { id: "S Corporation", value: "S Corporation" }, { id: "LLC", value: "LLC" }, { id: "Partnership", value: "Partnership" }, { id: "Sole-Proprietor", value: "Sole-Proprietor" }, { id: "Sole-Proprietor", value: "Sole-Proprietor" }, { id: "Government Agency", value: "Government Agency" }, { id: "Individual", value: "Individual" }]
        $scope.INCOTermsList = [{ id: "EXW", value: "EXW" }, { id: "FCA", value: "FCA" }, { id: "FAS", value: "FAS" }, { id: "FOB", value: "FOB" }, { id: "CFR", value: "CFR" }, { id: "CIF", value: "CIF" }, { id: "CPT", value: "CPT" }, { id: "CIP", value: "CIP" }, { id: "DDP", value: "DDP" }, { id: "DAP", value: "DAP" }, { id: "DAT", value: "DAT" }]

        function LoadVendorAddresses() {
            var vendorId = $stateParams.vendorId == undefined ? '-1' : $stateParams.vendorId;
            vendorService.GetVendorAddresses(vendorId).then(function (data) {
                $scope.vendorAddresses = data;
            });
        }

        $scope.AutoSuggestVendor = function (vendor) {
            $scope.createVendorInput.ParentVendorId = null;
            $scope.createVendorInput.PayToVendorId = null;
            return $http.get(ngConfigSettings.apiServiceBaseUri + "GetVendorName/" + vendor).then(function (response) {
                return response.data.map(function (item) {
                    return item;
                });
            });
        }

        $scope.AutoSuggestNAICS = function (nAICS) {
            $scope.createVendorInput.NAICSCode = null;
            $scope.createVendorInput.NAICSCodeId = null;
            return $http.get(ngConfigSettings.apiServiceBaseUri + "GetNAICSCode/" + nAICS).then(function (response) {
                return response.data.map(function (item) {
                    return item;
                });
            });
        }

        $scope.AutoSuggestUsers = function (usertext) {
            $scope.AutoSuggestInput = {
                UserName: usertext,
                Email: null
            }
            return $http.post(ngConfigSettings.apiAuthorizationServiceBaseUri + "Common/GetUsers", JSON.stringify($scope.AutoSuggestInput)
              ).then(function (response) {
                  return response.data.map(function (item) {
                      return item;
                  });
              });
        }

        $scope.validateUser = function (model) {
            if (model.userID == undefined) {
                return true;
            }
        }

        $scope.PopulateVendor = function (model, type) {
            switch (type) {
                case "Vendor":
                    $scope.createVendorInput.VendorId = model.vendorId;
                    break;
                case "ParentVendor":
                    $scope.createVendorInput.ParentVendorId = model.vendorId;
                    if ($scope.createVendorInput.ParentVendorId == $scope.createVendorInput.VendorId) {
                        alert('You can not set yourself as parent.');
                        $scope.createVendorInput.ParentVendorId = null;
                        $scope.createVendorInput.ParentVendorModel = null;
                    }
                    break;
                case "PayToVendor":
                    $scope.createVendorInput.PayToVendorId = model.vendorId;
                    break;
                default:
            }
        }

        $scope.PopulateNAICSCode = function (model) {
            $scope.createVendorInput.NAICSCode = model.code;
            $scope.createVendorInput.NAICSCodeId = model.codeId;
        }

        $scope.PopulateUser = function (model, type) {
            switch (type) {
                case "APContact":
                    $scope.createVendorInput.APContactId = model.userID;
                    break;
                case "Buyer":
                    $scope.createVendorInput.BuyerId = model.userID;
                    break;
                default:
            }
        }

        $scope.openitem = function (size, item) {
            debugger;
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                windowClass: 'xx-dialog',
                backdrop: 'static',
                resolve: {
                    item: function () {
                        var passValue = {
                            itemVendor: item,
                            vendorId: $stateParams.vendorId

                        }
                        return passValue;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                var bText;
                if (selectedItem == 'Delete') {
                    bText = 'Vendor Deleted successfully from Item.'
                }
                else
                    bText = 'Vendor Added/Updated successfully to Item.';
                var customModalOptions = {
                    closeButtonText: 'Close',
                    actionButtonText: 'OK',
                    headerText: 'Success',
                    bodyText: bText
                    //redirectUrl: '#createItem/' + $stateParams.ItemId
                };
                var customModalDefaults = {
                    templateUrl: 'app/partials/successModal.html'
                };
                modalService.showModal(customModalDefaults, customModalOptions);
                LoadVedorGrid();
            }, function () {
            });
        };


        $scope.SaveVendor = function () {
            $scope.createVendorInput.vendorAddresses = $scope.vendorAddresses;
            vendorService.SaveVendor($scope.createVendorInput).then(function (data) {
                var customModalOptions = {
                    closeButtonText: 'Close',
                    actionButtonText: 'OK',
                    headerText: 'Success',
                    bodyText: 'Vendor Saved successfully.',
                    redirectUrl: '#/searchVendor'
                };
                var customModalDefaults = {
                    templateUrl: 'app/partials/successModal.html'
                };
                modalService.showModal(customModalDefaults, customModalOptions);
            }, function (error) {
                var customModalOptions = {
                    closeButtonText: 'Close',
                    actionButtonText: 'OK',
                    headerText: 'Error',
                    bodyText: "There are some error while saving Vendor. Please contact system Administrator"
                };
                var customModalDefaults = {
                    templateUrl: 'app/partials/errorModal.html'
                };
                modalService.showModal(customModalDefaults, customModalOptions);
            });
        };

        function SetDebtEditToDefault() {
            $scope.EditModel = {
                isEditEnabled: false,
                editableColl: null
            }
        }
        SetDebtEditToDefault();

        $scope.EditItem = function (model) {
            $scope.EditModel = {
                isEditEnabled: true,
                editableDebtColl: angular.copy(model)
            }
        }

        $scope.ResetItem = function (model) {
            angular.copy($scope.EditModel.editableDebtColl, model)
            model.isEdit = false;
            SetDebtEditToDefault();
        }

        $scope.SaveItem = function (model) {
            model.isEdit = false;
            SetDebtEditToDefault();
        }

        var userInfoInputModel = {
            applicationID: 3,
            emailAddress: null
        };

        $scope.Permission = {
            AssignItemVendor: false,
            EditItemVendor: false,
            CreateItem: false,
            EditItem: false
        }

        //function loadUserRoleFunctionality() {
        //    userRoleFunctionalityService.GetUserRoleFunctionalities(userInfoInputModel).then(function (data) {
        //        angular.forEach(data, function (value, key) {
        //            /* do something for all key: value pairs */
        //            switch (value.type.trim()) {
        //                case 'Assign ItemVendor': $scope.Permission.AssignItemVendor = true; break;
        //                case 'Edit Item': $scope.Permission.EditItem = true; break;
        //                case 'Create Item': $scope.Permission.CreateItem = true; break;
        //                case 'Edit ItemVendor': $scope.Permission.EditItemVendor = true; break;
        //            }
        //        });
        //    });
        //};

        //loadUserRoleFunctionality();
        Init();
    }

    app.register.controller('createVendorController',
      ['$scope', '$stateParams', '$location', '$modal', '$http', 'commonService', 'ngConfigSettings', 'modalService', 'vendorService', 'createpoService', 'userRoleFunctionalityService', 'itemService', createVendorController]);

    var ModalInstanceCtrl = function ($scope, $modalInstance, modalService, $http, ngConfigSettings, itemService, $window, item, $stateParams) {


        $scope.vendor = {
            selectedVendor: item.itemVendor == null ? null : item.itemVendor.vendorName
        };

        $scope.ItemVendorFilter = {
            ItemVendorId: item.itemVendor == null ? null : item.itemVendor.itemVendorId,
            ItemId: item.itemId == null ? null : item.itemVendor.itemId,
            VendorId: item.vendorId,
            VendorItemNumber: item.itemVendor == null ? null : item.itemVendor.vendorItemNumber,
            OrderUnit: item.itemVendor == null ? null : item.itemVendor.unitId,
            LeadTime: item.itemVendor == null ? null : item.itemVendor.leadTime,
            CountryOforigin: item.itemVendor == null ? null : item.itemVendor.countryOfOrigin,
            WarrantyDays: item.itemVendor == null ? null : item.itemVendor.warrantyDays,
            IsActive: 1,
            IsEdit: item.itemVendor == null ? false : true
        }

        $scope.ItemUnits = JSON.parse(window.localStorage['ItemUnits']);

        $scope.AutoSuggestVendor = function (usertext) {
            $scope.AutoSuggestInput = {
                VendorName: usertext
            }
            return $http.post(ngConfigSettings.apiServiceBaseUri + "Item/ItemVendorList", JSON.stringify($scope.AutoSuggestInput)
              ).then(function (response) {
                  return response.data.map(function (item) {
                      return item;
                  });
              });
        }

        $scope.populateVendor = function (object) {
            $scope.ItemVendorFilter.Address = object.address1;
            $scope.ItemVendorFilter.City = object.city;
            $scope.ItemVendorFilter.State = object.state;
            $scope.ItemVendorFilter.Zip = object.zipCode;
            $scope.ItemVendorFilter.VendorId = object.vendorId;
        }

        //$scope.items = items;

        $scope.AssignItem = function () {
            itemService.AssignVendorToItem($scope.ItemVendorFilter).then(function (data) {
                debugger;
                var customModalOptions = {
                    closeButtonText: 'Close',
                    actionButtonText: 'OK',
                    headerText: 'Success',
                    bodyText: 'Item is Added to the vendor',
                    //redirectUrl: '#createItem/' + $stateParams.ItemId
                };
                var customModalDefaults = {
                    templateUrl: 'app/partials/successModal.html'
                };
                modalService.showModal(customModalDefaults, customModalOptions);
                $modalInstance.close('Save');
            }, function (error) {
                console.log(error);
            });
        };

        $scope.AutoSuggestItem = function (itemText) {
            return $http.get(ngConfigSettings.apiServiceBaseUri + "GetItemNumbers/" + itemText + "/vendorId/" + null).then(function (response) {
                return response.data.map(function (item) {
                    return item;
                });
            });
        }

        $scope.populateItem = function (itemModel) {
            $scope.ItemVendorFilter.ItemId = itemModel.itemId;

        }

        $scope.DeleteItemVendor = function () {
            var deleteIt = $window.confirm('Are you sure you want to delete?');
            if (deleteIt) {
                var originalItemVendor = jQuery.extend({}, $scope.ItemVendorFilter);
                originalItemVendor.IsActive = 0;
                itemService.AssignVendorToItem(originalItemVendor).then(function (data) {
                    $modalInstance.close('Delete');
                });
            }
        };

        $scope.VerifyItemVendor = function () {
            $scope.VendorFilter = {
                ItemId: item.itemId,
                VendorId: $scope.vendor.selectedVendor.vendorId,
                IsActive: null
            }
            itemService.GetItemVendor($scope.VendorFilter).then(function (data) {
                $scope.ItemVendorFilter = {
                    ItemVendorId: data[0].itemVendorId,
                    ItemId: item.itemId,
                    VendorId: data[0].vendorId,
                    Address: data[0].address1 + " " + data[0].address2,
                    City: data[0].city,
                    State: data[0].state,
                    Zip: data[0].zipCode,
                    VendorItemNumber: data[0].vendorItemNumber,
                    OrderUnit: data[0].unitId,
                    LeadTime: data[0].leadTime,
                    CountryOforigin: data[0].countryOfOrigin,
                    WarrantyDays: data[0].warrantyDays,
                    IsActive: 1
                }
            });
        }


        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
});
