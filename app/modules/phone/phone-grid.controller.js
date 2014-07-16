/**
 * Phone grid controller
 */
var phoneModule = angular.module('phone', []);

phoneModule.controller('PhoneGridController', ['$scope', 'phoneService',
    function($scope, phoneService) {

        $scope.sort = function(key) {
            $scope.sortkey = key;
        };

        $scope.changeCart = function(phone) {
            phoneService.changeCart(phone);
        };
    }
]);
