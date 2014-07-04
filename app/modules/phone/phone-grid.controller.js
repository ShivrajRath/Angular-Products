/**
 * Phone grid controller
 */
var phoneModule = angular.module('phone', []);

phoneModule.controller('PhoneGridController', ['$scope', '$http', '$rootScope', 'phoneModel',
    function($scope, $http, $rootScope, phoneModel) {

        $scope.sort = function(key) {
            $scope.sortkey = key;
        };

        $scope.changeCompare = function(phone) {
            phone.checked = !phone.checked;
        };

        $scope.model = phoneModel.model;

        /**
         * Event listeners
         */
        $scope.$on('phoneModelLoad', function(event, model) {
            $scope.model = model;
        });

    }
]);
